export default function Home() {
  const features = [
    "JWT Authentication",
    "College Search & Filtering",
    "Pagination & Sorting",
    "College Details API",
    "Saved Colleges",
    "College Comparison",
    "Zod Validation",
    "Prisma ORM",
  ];

  const endpoints = [
    "POST /api/auth/register",
    "POST /api/auth/login",
    "GET /api/auth/me",
    "GET /api/colleges",
    "GET /api/colleges/:id",
    "POST /api/saved",
    "GET /api/saved",
    "DELETE /api/saved/:collegeId",
    "GET /api/compare",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <span className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300">
              Backend Engineer Assignment Submission
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              College Discovery Platform
            </h1>

            <p className="mt-6 text-lg text-slate-400">
              A backend-first platform that helps students discover,
              compare, and save colleges using scalable REST APIs,
              JWT authentication, PostgreSQL, Prisma ORM, and Zod
              validation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/Sunilkumar371/ai-signal-task"
                target="_blank"
                className="rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
              >
                View GitHub
              </a>

              <a
                href="/api/health"
                target="_blank"
                className="rounded-lg border border-slate-700 px-5 py-3 font-medium transition hover:bg-slate-900"
              >
                API Health
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          About The Project
        </h2>

        <p className="mt-6 max-w-4xl text-slate-400">
          This project was built for the AI Software Engineer Internship
          assignment under the Backend Engineer track.
          The focus was on designing reliable APIs, validation systems,
          database architecture, authentication, filtering, pagination,
          and user-scoped data access.
        </p>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold">
          Features Implemented
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          Architecture
        </h2>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <span>Route</span>
            <span>→</span>
            <span>Validation</span>
            <span>→</span>
            <span>Service Layer</span>
            <span>→</span>
            <span>Prisma ORM</span>
            <span>→</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold">
          Tech Stack
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="font-semibold">Backend</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li>Next.js API Routes</li>
              <li>TypeScript</li>
              <li>Zod</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="font-semibold">Database</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li>PostgreSQL</li>
              <li>Prisma ORM</li>
              <li>Database Indexing</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="font-semibold">Security</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li>JWT Authentication</li>
              <li>Password Hashing</li>
              <li>Protected Routes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          API Endpoints
        </h2>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="grid gap-3">
            {endpoints.map((endpoint) => (
              <div
                key={endpoint}
                className="rounded-lg bg-slate-950 p-3 font-mono text-sm"
              >
                {endpoint}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          About Me
        </h2>

        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-slate-400">
            Hi, I'm Sunil Kumar. I enjoy building backend systems,
            scalable APIs, database-driven applications, and solving
            real-world engineering problems.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://github.com/Sunilkumar371"
              target="_blank"
              className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sunil-kumar-lachapeta"
              target="_blank"
              className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800"
            >
              LinkedIn
            </a>

            <a
              href="https://onbva.com"
              target="_blank"
              className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800"
            >
              other project
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        College Discovery Platform • Backend Engineer Assignment
      </footer>
    </main>
  );
}