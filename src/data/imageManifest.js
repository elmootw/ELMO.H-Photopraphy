import manifest from './imageManifest.json'

export function getAlbumsByCategory(category) {
  const items = manifest[category] || []
  // 如果是街拍或風景（直接照片陣列），直接返回
  if (Array.isArray(items) && items.length > 0 && typeof items[0] === 'string') {
    return items
  }
  // 否則返回相簿陣列
  return Array.isArray(items) ? items : []
}

export function getAllCategories() {
  return Object.keys(manifest).filter(key => manifest[key].length > 0)
}

export function getStreetPhotos() {
  return manifest.street || []
}
