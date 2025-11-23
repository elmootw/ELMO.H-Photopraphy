import { useState, useEffect } from 'react'
import { getAlbumsByCategory } from '../data/imageManifest'

export function useAlbums(category) {
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const albums = getAlbumsByCategory(category)
      setAlbums(albums)
    } catch (err) {
      console.error('讀取相簿失敗:', err)
    } finally {
      setLoading(false)
    }
  }, [category])

  return { albums, loading }
}
