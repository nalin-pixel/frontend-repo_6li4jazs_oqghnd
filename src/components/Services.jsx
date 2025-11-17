import { useEffect, useState } from 'react'

function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Our Treatments</h2>
      <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">Carefully curated therapies to relax, heal, and energize.</p>
      {loading ? (
        <p className="text-center text-gray-500 mt-8">Loading services...</p>
      ) : (
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.slug} className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900">{s.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">{s.description}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-700">Duration: {s.duration_min} min</span>
                <span className="font-semibold text-emerald-700">{s.price_huf.toLocaleString()} HUF</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Services
