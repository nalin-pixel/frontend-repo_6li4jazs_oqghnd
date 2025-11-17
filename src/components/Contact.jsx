import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', preferred_time: '', service: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', subject: '', message: '', preferred_time: '', service: '' })
    } catch (e) {
      console.error(e)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-emerald-50/50">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Book or Ask a Question</h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">Send us a message and we’ll reply shortly.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="border rounded px-3 py-2 w-full" />
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email" className="border rounded px-3 py-2 w-full" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border rounded px-3 py-2 w-full" />
              <input name="service" value={form.service} onChange={handleChange} placeholder="Service (optional)" className="border rounded px-3 py-2 w-full" />
              <input name="preferred_time" value={form.preferred_time} onChange={handleChange} placeholder="Preferred time" className="border rounded px-3 py-2 w-full sm:col-span-2" />
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="border rounded px-3 py-2 w-full sm:col-span-2" />
              <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Your message" rows={5} className="border rounded px-3 py-2 w-full sm:col-span-2" />
            </div>
            <button disabled={status==='sending'} className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'sent' && <p className="text-emerald-700 mt-3">Thank you! We will get back to you soon.</p>}
            {status === 'error' && <p className="text-red-600 mt-3">Something went wrong. Please try again.</p>}
          </form>

          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Visit Us</h3>
            <p className="text-gray-600 mt-2">Budapest, V. kerület (City Center)</p>
            <p className="text-gray-600">Open daily 10:00 - 20:00</p>
            <div className="mt-4 space-y-2 text-gray-700">
              <p>Phone: <a href="tel:+36301234567" className="text-emerald-700 font-semibold">+36 30 123 4567</a></p>
              <p>Email: <a href="mailto:info@thaibudapest.hu" className="text-emerald-700 font-semibold">info@thaibudapest.hu</a></p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Budapest+V+District+Thai+Massage"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded border text-emerald-700 border-emerald-200 hover:border-emerald-400 hover:shadow"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
