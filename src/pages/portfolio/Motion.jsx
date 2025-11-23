import { useNavigate } from 'react-router-dom'

export default function Motion() {
  const navigate = useNavigate()
  const videos = [
    { id: '4Mbyftd7hgA', title: '影片 1' },
    { id: 'rWtPOLomT0M', title: '影片 2' },
    { id: 'EtntygVQk50', title: '影片 3' },
    { id: 'tprRxKESySI', title: '影片 4' },
  ]

  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        <button
          onClick={() => navigate('/portfolio')}
          className="mb-6 text-wine-red hover:text-rose-gold transition font-semibold"
        >
          ← 返回作品集
        </button>

        <h1 className="text-4xl font-serif text-wine-red font-bold mb-12">
          動態
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
