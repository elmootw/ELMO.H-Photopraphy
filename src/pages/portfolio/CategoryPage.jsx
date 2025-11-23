import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AlbumGrid from '../../components/AlbumGrid'
import PhotoGallery from '../../components/PhotoGallery'
import { getAlbumsByCategory } from '../../data/imageManifest'

export default function CategoryPage({ category, title, isPhotoOnly = false }) {
  const navigate = useNavigate()
  const [content, setContent] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const data = getAlbumsByCategory(category)
      setContent(data)
    } catch (err) {
      console.error(`Failed to load ${category}:`, err)
    } finally {
      setLoading(false)
    }
  }, [category])

  if (loading) return <div className="text-center py-16">加載中...</div>

  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        <button
          onClick={() => navigate('/portfolio')}
          className="mb-6 text-wine-red hover:text-rose-gold transition font-semibold"
        >
          ← 返回作品集
        </button>

        <h1 className="text-4xl font-serif text-wine-red font-bold mb-12">
          {title}
        </h1>

        {content.length > 0 ? (
          isPhotoOnly ? (
            <PhotoGallery photos={content} />
          ) : (
            <AlbumGrid albums={content} basePath={`/portfolio/${category}`} />
          )
        ) : (
          <p className="text-center text-gray-500">暫無作品</p>
        )}
      </div>
    </div>
  )
}
