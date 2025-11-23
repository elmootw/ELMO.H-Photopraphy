import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-serif text-wine-red font-bold mb-4">
          ELMO.H Photography
        </h1>
        <p className="text-xl text-gray-700 mb-12 font-serif">
          捕捉每一刻的美好瞬間
        </p>
        <Link
          to="/portfolio"
          className="inline-block bg-wine-red text-cream px-8 py-3 rounded-lg font-serif font-semibold hover:bg-rose-gold transition"
        >
          瀏覽作品集
        </Link>
      </div>
    </div>
  )
}
