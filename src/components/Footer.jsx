function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold text-lg">Thai Massage Budapest</h4>
          <p className="text-sm mt-2 text-gray-400">Authentic Thai therapies in the heart of the city.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-lg">Hours</h4>
          <p className="text-sm mt-2">Every day: 10:00 - 20:00</p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-lg">Contact</h4>
          <p className="text-sm mt-2">Phone: +36 30 123 4567</p>
          <p className="text-sm">Email: info@thaibudapest.hu</p>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4 text-xs text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Thai Massage Budapest. All rights reserved.</p>
          <p>Budapest, Hungary</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
