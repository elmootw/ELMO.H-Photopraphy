import { useState, useMemo } from 'react'
import PhotoModal from './PhotoModal'

export default function PhotoGallery({ photos }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [imageErrors, setImageErrors] = useState(new Set())

  const handleImageError = (photo) => {
    console.warn('Failed to load image:', photo)
    setImageErrors(prev => new Set([...prev, photo]))
  }

  const validPhotos = useMemo(() => {
    return photos.filter(photo => !imageErrors.has(photo))
  }, [photos, imageErrors])

  return (
    <>
      {validPhotos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {validPhotos.map((photo, idx) => (
            <div
              key={photo}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo}
                alt={`photo ${idx}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                onContextMenu={(e) => e.preventDefault()}
                onError={() => handleImageError(photo)}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-8">暫無可顯示的照片</p>
      )}

      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </>
  )
}
