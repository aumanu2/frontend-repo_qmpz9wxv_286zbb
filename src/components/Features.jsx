import { Rocket, Zap, Shield, Database } from 'lucide-react'

const features = [
  {
    title: 'Instant Setup',
    desc: 'Start with a ready-to-go React + FastAPI stack. No config, just build.',
    icon: Rocket,
  },
  {
    title: 'AI Assisted',
    desc: 'Generate pages, components, and APIs at lightning speed.',
    icon: Zap,
  },
  {
    title: 'Secure & Scalable',
    desc: 'Best practices and performance baked in from the start.',
    icon: Shield,
  },
  {
    title: 'Built-in Database',
    desc: 'MongoDB integration for persistent, production-ready data.',
    icon: Database,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to ship faster
          </h2>
          <p className="mt-4 text-gray-600">
            A modern toolkit that helps you go from idea to live app in record time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
