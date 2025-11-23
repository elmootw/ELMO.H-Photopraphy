import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicImagesDir = path.join(__dirname, 'public/images')
const coversDir = path.join(__dirname, 'public/images/covers')
const outputFile = path.join(__dirname, 'src/data/imageManifest.json')

const BASE_PATH = '/ELMO.H-Photopraphy'

// 預定義的 8 個分類
const CATEGORIES = ['personal', 'couple', 'wedding', 'event', 'lifestyle', 'street', 'landscape', 'motion']

// 初始化
const manifest = {
  categories: {},
  personal: [],
  couple: [],
  wedding: [],
  event: [],
  lifestyle: [],
  street: [],
  landscape: [],
  motion: []
}

if (!fs.existsSync(publicImagesDir)) {
  console.warn('⚠️ images directory not found:', publicImagesDir)
  fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2))
  process.exit(1)
}

const items = fs.readdirSync(publicImagesDir).filter(f => f !== '.DS_Store' && f !== 'covers')

items.forEach(category => {
  const categoryPath = path.join(publicImagesDir, category)
  const stat = fs.statSync(categoryPath)
  
  if (!stat.isDirectory()) return
  if (!CATEGORIES.includes(category)) return

  console.log(`\n📂 ${category}`)

  const contents = fs.readdirSync(categoryPath).filter(f => f !== '.DS_Store')
  
  if (contents.length === 0) {
    console.log('  （空資料夾）')
    // 優先讀 covers 資料夾的封面，其次為空
    const coverPath = path.join(coversDir, `${category}.jpg`)
    manifest.categories[category] = fs.existsSync(coverPath)
      ? `${BASE_PATH}/images/covers/${category}.jpg`
      : ''
    return
  }

  // 檢查是否為相簿結構或直接照片
  const hasSubDirs = contents.some(item => {
    const itemPath = path.join(categoryPath, item)
    return fs.statSync(itemPath).isDirectory()
  })

  let firstItemCover = ''

  // 直接照片模式（街拍、風景等）
  if (!hasSubDirs || category === 'street' || category === 'landscape') {
    const photos = contents
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort()
      .map(f => `${BASE_PATH}/images/${category}/${f}`)
    
    manifest[category] = photos
    if (photos.length > 0) {
      firstItemCover = photos[0]
      console.log(`  ✓ 照片: ${photos.length}`)
    }
  } else {
    // 相簿結構模式
    contents.forEach(albumName => {
      const albumPath = path.join(categoryPath, albumName)
      const albumStat = fs.statSync(albumPath)
      
      if (!albumStat.isDirectory()) return

      const photos = fs.readdirSync(albumPath)
        .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
        .sort((a, b) => {
          if (a === 'cover.jpg') return -1
          if (b === 'cover.jpg') return 1
          return a.localeCompare(b, 'zh')
        })
        .map(f => `${BASE_PATH}/images/${category}/${albumName}/${f}`)

      if (photos.length > 0) {
        manifest[category].push({
          id: albumName,
          name: albumName,
          cover: photos[0],
          photos: photos
        })
        if (!firstItemCover) {
          firstItemCover = photos[0]
        }
        console.log(`  ✓ 相簿: ${albumName} (${photos.length} 張)`)
      }
    })
  }

  // 優先讀 public/images/covers/{category}.jpg
  // 其次使用第一個相簿/照片的第一張
  const coverPath = path.join(coversDir, `${category}.jpg`)
  if (fs.existsSync(coverPath)) {
    manifest.categories[category] = `${BASE_PATH}/images/covers/${category}.jpg`
    console.log(`  ✓ 類別封面: covers/${category}.jpg`)
  } else if (firstItemCover) {
    manifest.categories[category] = firstItemCover
    console.log(`  ✓ 類別封面: ${firstItemCover} (自動備選)`)
  }
})

fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2))
console.log(`\n✅ Manifest 生成完成！\n`)
