import { Rocket, Zap, Shield, Database } from 'lucide-react';

const features = [
  {
    title: 'Performance-first',
    description: 'Vite + React + Tailwind for instant feedback and production-grade builds.',
    icon: Zap,
  },
  {
    title: 'Secure foundations',
    description: 'Best practices and accessible components to kickstart your app safely.',
    icon: Shield,
  },
  {
    title: 'Data-ready',
    description: 'Backend scaffolding with FastAPI and MongoDB for real persistence.',
    icon: Database,
  },
  {
    title: 'Ship faster',
    description: 'Composable components and sensible defaults help you move quickly.',
    icon: Rocket,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Features that matter</h2>
          <p className="mt-3 text-gray-600">Built-in patterns that keep you focused on shipping.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-sm transition">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
