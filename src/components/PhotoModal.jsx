import { useEffect } from 'react'

export default function PhotoModal({ photo, onClose }) {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [onClose])

  const handleContextMenu = (e) => e.preventDefault()

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <img 
          src={photo} 
          alt="full view"
          onContextMenu={handleContextMenu}
          className="w-full h-full object-contain"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-wine-red text-white px-4 py-2 rounded hover:bg-rose-gold transition"
        >
          ✕ 關閉
        </button>
      </div>
    </div>
  )
}
