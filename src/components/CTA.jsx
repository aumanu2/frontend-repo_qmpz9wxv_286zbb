export default function CTA() {
  return (
    <section id="get-started" className="py-16 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Ready to build your next idea?
            </h3>
            <p className="mt-3 text-gray-600">
              Spin up a new project, generate features with AI, and deploy — all from one place.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a href="#" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
              Create a project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
