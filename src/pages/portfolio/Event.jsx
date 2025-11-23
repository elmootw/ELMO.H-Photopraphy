import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AlbumGrid from '../../components/AlbumGrid'
import { getAlbumsByCategory } from '../../data/imageManifest'
import CategoryPage from './CategoryPage'

export default function Event() {
  return <CategoryPage category="event" title="活動" />
}
