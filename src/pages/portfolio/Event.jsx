import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AlbumGrid from '../../components/AlbumGrid'
import { getAlbumsByCategory } from '../../data/imageManifest'

export default function Event() {
  const navigate = useNavigate()
  const [albums, setAlbums] = useState([])
  const [selectedTag, setSelectedTag] = useState(null)
  const [availableTags, setAvailableTags] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const eventAlbums = getAlbumsByCategory('event')
    setAlbums(eventAlbums)
    
    // 動態提取所有 tags
    const tags = new Set()
    eventAlbums.forEach(album => {
      if (album.tags && Array.isArray(album.tags)) {
        album.tags.forEach(tag => tags.add(tag))
      }
    })
    setAvailableTags(Array.from(tags).sort())
    setLoading(false)
  }, [])

  const filteredAlbums = selectedTag
    ? albums.filter(album => album.tags && album.tags.includes(selectedTag))
    : albums

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

        <h1 className="text-4xl font-serif text-wine-red font-bold mb-8">
          活動
        </h1>
        
        {availableTags.length > 0 && (
          <div className="mb-8 flex gap-3 flex-wrap">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedTag === tag
                    ? 'bg-wine-red text-cream'
                    : 'bg-white text-wine-red border border-wine-red hover:bg-wine-red hover:text-cream'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        {filteredAlbums.length > 0 ? (
          <AlbumGrid albums={filteredAlbums} basePath="/portfolio/event" />
        ) : (
          <p className="text-center text-gray-500">暫無作品</p>
        )}
      </div>
    </div>
  )
}
