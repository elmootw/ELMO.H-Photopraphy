import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PhotoGallery from '../../components/PhotoGallery'
import { getAlbumsByCategory } from '../../data/imageManifest'

export default function AlbumDetail({ category }) {
  const { albumId } = useParams()
  const navigate = useNavigate()
  const [album, setAlbum] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const decodedId = decodeURIComponent(albumId)
      const albums = getAlbumsByCategory(category)
      const found = albums.find(a => a.id === decodedId)
      
      if (found) {
        // 按照片編號排序（數值排序）
        const sortedAlbum = {
          ...found,
          photos: found.photos.sort((a, b) => {
            // 從路徑提取 photo-N 中的數字
            const numA = parseInt(a.match(/photo-(\d+)\.jpg/)?.[1] || 0)
            const numB = parseInt(b.match(/photo-(\d+)\.jpg/)?.[1] || 0)
            return numA - numB
          })
        }
        setAlbum(sortedAlbum)
      } else {
        navigate(`/portfolio/${category}`)
      }
    } catch (err) {
      console.error('Failed to load album:', err)
    } finally {
      setLoading(false)
    }
  }, [albumId, category, navigate])

  if (loading) return <div className="text-center py-16">加載中...</div>
  if (!album) return <div className="text-center py-16">相簿不存在</div>

  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-wine-red hover:text-rose-gold transition font-semibold"
        >
          ← 返回
        </button>

        <h1 className="text-4xl font-serif text-wine-red font-bold mb-12">
          {album.name}
        </h1>

        <PhotoGallery photos={album.photos} />
      </div>
    </div>
  )
}
