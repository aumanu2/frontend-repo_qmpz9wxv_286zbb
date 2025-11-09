import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              <Rocket className="h-5 w-5" />
            </div>
            <span>Vibe Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="text-sm font-medium text-gray-600 hover:text-gray-900">Log in</a>
            <a href="#get-started" className="inline-flex items-center rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Get Started</a>
          </div>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <nav className="mt-2 grid gap-2 text-sm text-gray-700">
              <a onClick={() => setOpen(false)} href="#features" className="rounded-md px-3 py-2 hover:bg-gray-50">Features</a>
              <a onClick={() => setOpen(false)} href="#how" className="rounded-md px-3 py-2 hover:bg-gray-50">How it works</a>
              <a onClick={() => setOpen(false)} href="#pricing" className="rounded-md px-3 py-2 hover:bg-gray-50">Pricing</a>
              <div className="h-px bg-gray-200 my-1" />
              <a onClick={() => setOpen(false)} href="#login" className="rounded-md px-3 py-2 hover:bg-gray-50">Log in</a>
              <a onClick={() => setOpen(false)} href="#get-started" className="rounded-md bg-gray-900 px-3 py-2 text-white hover:bg-gray-800">Get Started</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
