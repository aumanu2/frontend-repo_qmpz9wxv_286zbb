export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {year} VibeLaunch. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
