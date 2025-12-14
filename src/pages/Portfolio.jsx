import { Link } from 'react-router-dom'
import imageManifest from '../data/imageManifest.json'

export default function Portfolio() {
  const categoriesData = imageManifest.categories || {}

  const categories = [
    { name: '人像', path: '/portfolio/portrait', key: 'portrait' },
    { name: '情侶', path: '/portfolio/couple', key: 'couple' },
    { name: '登記/婚宴', path: '/portfolio/wedding', key: 'wedding' },
    { name: '活動', path: '/portfolio/event', key: 'event' },
    { name: '生活', path: '/portfolio/lifestyle', key: 'lifestyle' },
    { name: '街拍', path: '/portfolio/street', key: 'street' },
    { name: '風景', path: '/portfolio/landscape', key: 'landscape' },
    { name: '動態', path: '/portfolio/motion', key: 'motion' },
  ]

  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.path}
              to={cat.path}
              className="group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-gray-200">
                {categoriesData[cat.key] ? (
                  <img
                    src={categoriesData[cat.key]}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-gray-400">暫無作品</span>
                  </div>
                )}
              </div>
              <h2 className="text-center mt-3 text-lg font-serif text-wine-red font-semibold group-hover:text-rose-gold transition-colors duration-300">
                {cat.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
