import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/rx6h1nAARJmG4J9c/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              Launch beautiful products with ease
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              A modern starter that blends 3D, speed, and solid UI patterns. Ship fast with a polished experience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-white hover:bg-gray-800">
                Get Started
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-800 hover:bg-gray-50">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
