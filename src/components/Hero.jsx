import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Spline scene="https://prod.spline.design/MV5v7l1mJpA8CwY0/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />

      <div className="absolute inset-0 flex items-end pb-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/80 p-6 backdrop-blur shadow-lg ring-1 ring-black/5">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Build beautiful apps with AI in minutes
            </h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-gray-600">
              Describe your idea, and watch it come to life with a production-ready frontend and backend, live preview, and database out of the box.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#get-started" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">Get Started</a>
              <a href="#features" className="inline-flex items-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">See Features</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
