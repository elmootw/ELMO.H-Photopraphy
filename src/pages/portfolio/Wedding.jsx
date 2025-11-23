import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AlbumGrid from '../../components/AlbumGrid'
import { getAlbumsByCategory } from '../../data/imageManifest'
import CategoryPage from './CategoryPage'

export default function Wedding() {
  return <CategoryPage category="wedding" title="登記/婚宴" />
}
