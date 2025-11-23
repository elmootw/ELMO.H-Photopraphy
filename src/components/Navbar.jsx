import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-cream border-b-2 border-wine-red shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-wine-red">
          ELMO.H Photography
        </Link>
        <div className="flex gap-8 items-center">
          <Link to="/portfolio" className="text-wine-red hover:text-rose-gold transition">
            作品集
          </Link>
          <Link to="/about" className="text-wine-red hover:text-rose-gold transition">
            關於我
          </Link>
          <a 
            href="https://elmootw.github.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rose-gold hover:text-wine-red transition font-semibold"
          >
            回到主網站
          </a>
        </div>
      </div>
    </nav>
  )
}
