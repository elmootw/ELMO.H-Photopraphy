import { useState } from 'react'

export default function PhotoGallery({ photos }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <div>
      {/* 照片網格 - 響應式 Grid 布局 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedPhoto(photo)}
            className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
          >
            <img
              src={photo}
              alt={`Photo ${idx + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
              loading="lazy"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>

      {/* Modal - 支持任意比例 */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex items-center justify-center">
            <img
              src={selectedPhoto}
              alt="Enlarged"
              className="max-w-full max-h-[90vh] object-contain"
              onContextMenu={(e) => e.preventDefault()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPhoto(null)
              }}
              className="absolute top-4 right-4 text-white text-3xl hover:text-rose-gold transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
