export default function About() {
  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-serif text-wine-red font-bold mb-8">
          關於我
        </h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* 攝影師照片 */}
            <div className="md:w-1/3">
              <img
                src="/ELMO.H-Photopraphy/images/about-portrait.jpg"
                alt="Elmo HSIAO"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* 自介內容 */}
            <div className="p-8 md:w-2/3">
              <h2 className="text-3xl font-serif text-wine-red font-bold mb-4">
                Elmo HSIAO
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                喜歡捕捉最自然的瞬間。
              </p>
              
              <h3 className="text-2xl font-serif text-wine-red font-bold mb-4">
                相關經歷
              </h3>
              <ul className="text-gray-700 space-y-3">
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
      </div>
    </div>
  )
}
