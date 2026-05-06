export default function Footer() {
  return (
    <footer className="w-full bg-white mt-24 py-16 px-8 md:px-16">
      {/* Main description */}
      <div className="mb-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Multidisciplinary in approach,<br />uncompromising in vision.
        </h3>
        <p className="text-xl text-gray-400">Let's create the unexpected.</p>
      </div>

      {/* Info Grid */}
      <div className="grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <p className="font-bold mb-2">STUDIO Martin Klaffensteiner</p>
          <p className="text-gray-600">Multidisciplinary Creative/Art Director</p>
          <p className="text-gray-600">with Focus on Film, Photo and Design.</p>
        </div>
        <div>
          <p className="text-gray-600 mb-1">hallo@klaffensteiner.com</p>
          <p className="text-gray-600">Vienna + Linz, AT</p>
        </div>
        <div>
          <a href="https://instagram.com/martinklaffensteiner" className="text-gray-600 hover:text-black block mb-1">Instagram</a>
          <a href="https://behance.net" className="text-gray-600 hover:text-black block">Behance</a>
        </div>
        <div>
          <p className="text-gray-600">© 2026</p>
        </div>
      </div>
    </footer>
  );
}
