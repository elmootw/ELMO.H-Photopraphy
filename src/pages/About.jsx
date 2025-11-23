export default function About() {
  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-serif text-wine-red font-bold mb-8">
          關於我
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-serif text-wine-red font-bold mb-4">
            ELMO.H Photography
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            專業攝影師，致力於捕捉人生中最珍貴的時刻。
          </p>
          
          <h3 className="text-2xl font-serif text-wine-red font-bold mb-4">
            相關經歷
          </h3>
          <ul className="text-gray-700 space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-rose-gold mr-3">◆</span>
              <span>HITCON CMT 2024 攝影組</span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-gold mr-3">◆</span>
              <span>HITCON CTF 2024 攝影</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
