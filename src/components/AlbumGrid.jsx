import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function AlbumGrid({ albums, basePath }) {
  const [failedCovers, setFailedCovers] = useState(new Set())

  const getAlbumCover = (album) => {
    if (failedCovers.has(album.id)) {
      return album.photos[1] || album.cover
    }
    return album.cover
  }

  const handleCoverError = (albumId) => {
    setFailedCovers(prev => new Set([...prev, albumId]))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {albums.map((album) => (
        <Link 
          key={album.id || album.cover}
          to={`${basePath}/${encodeURIComponent(album.id)}`}
          className="group cursor-pointer"
        >
          <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src={getAlbumCover(album)}
              alt={album.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
              onError={() => handleCoverError(album.id)}
            />
          </div>
          <h3 className="text-center mt-3 font-serif text-wine-red font-semibold group-hover:text-rose-gold transition-colors duration-300">
            {album.name}
          </h3>
        </Link>
      ))}
    </div>
  )
}
