import { useMemo } from 'react'

function Hero() {
  const phone = useMemo(() => '+36 30 123 4567', [])
  const googleMaps = useMemo(
    () => 'https://www.google.com/maps/search/?api=1&query=Budapest+V+District+Thai+Massage',
    []
  )
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
      <div className="relative container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Authentic Thai Massage in Budapest
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Rebalance body and mind with traditional techniques from Thailand. Central location, warm atmosphere, professional therapists.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
          >
            Call {phone}
          </a>
          <a
            href={googleMaps}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold border border-emerald-200 hover:border-emerald-400 hover:shadow transition"
          >
            Find us on Google Maps
          </a>
        </div>
        <div className="mt-8 text-sm text-gray-600">Open daily • 10:00 - 20:00</div>
      </div>
    </section>
  )
}

export default Hero
