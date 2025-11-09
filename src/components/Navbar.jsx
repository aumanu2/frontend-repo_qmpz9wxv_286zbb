import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold text-gray-900">VibeLaunch</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a
              href="#get-started"
              className="inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition"
            >
              Get Started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            <a href="#features" className="block text-gray-700 hover:text-gray-900">Features</a>
            <a href="#about" className="block text-gray-700 hover:text-gray-900">About</a>
            <a href="#contact" className="block text-gray-700 hover:text-gray-900">Contact</a>
            <a
              href="#get-started"
              className="block text-center w-full px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
