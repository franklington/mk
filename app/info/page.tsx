export default function InfoPage() {
  return (
    <div className="w-full px-8 md:px-16 pt-28 pb-16 md:pt-32 md:pb-24">
      <section className="grid gap-10 border-b border-black/10 pb-14 md:grid-cols-12 md:pb-20">
        <div className="md:col-span-7">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-gray-500">
            About
          </p>
          <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl">
            I am a multidisciplinary designer who does not like being limited to one discipline.
          </h1>
        </div>
        <div className="md:col-span-4 md:col-start-9 md:pt-14">
          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
            I enjoy learning, meeting new people, and being challenged in my own perception. My approach combines conceptual clarity with visual precision.
          </p>
        </div>
      </section>

      <section className="grid gap-16 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-3">
          <h2 className="text-sm font-medium uppercase tracking-[0.24em] text-gray-500">
            Fields of Practice
          </h2>
        </div>
        <div className="grid gap-3 text-lg md:col-span-9 md:grid-cols-2 md:text-2xl">
          <p>Concept & Strategy</p>
          <p>Brand Identity</p>
          <p>Art Direction</p>
          <p>Type Design</p>
          <p>Graphic Design</p>
          <p>Editorial Design</p>
          <p>Web Design</p>
          <p>Photography</p>
        </div>
      </section>

      <section className="grid gap-16 border-t border-black/10 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-3">
          <h2 className="text-sm font-medium uppercase tracking-[0.24em] text-gray-500">
            Principles
          </h2>
        </div>
        <div className="space-y-10 md:col-span-9">
          <div className="grid gap-3 md:grid-cols-[120px_1fr]">
            <p className="text-sm text-gray-400">01</p>
            <div>
              <h3 className="mb-3 text-2xl font-bold">Collaboration First</h3>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
                I believe that the best projects come from good relations and trust. This is why I like to work with people, not for people.
              </p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-[120px_1fr]">
            <p className="text-sm text-gray-400">02</p>
            <div>
              <h3 className="mb-3 text-2xl font-bold">Form Follows Thinking</h3>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
                My practice is based on conceptual thinking and strategy. Good design can only come from a position of understanding.
              </p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-[120px_1fr]">
            <p className="text-sm text-gray-400">03</p>
            <div>
              <h3 className="mb-3 text-2xl font-bold">Radical Carefulness</h3>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
                Designing communication means taking on responsibility for your words and actions.
              </p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-[120px_1fr]">
            <p className="text-sm text-gray-400">04</p>
            <div>
              <h3 className="mb-3 text-2xl font-bold">Never Repeat Yourself</h3>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
                Every project is a new start. An opportunity to learn new skills and explore new perspectives. This is why I love my profession.
              </p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-[120px_1fr]">
            <p className="text-sm text-gray-400">05</p>
            <div>
              <h3 className="mb-3 text-2xl font-bold">Repeat Yourself If You Need To</h3>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
                There is no need to reinvent the wheel every time. Good solutions deserve to be reused.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-10 border-t border-black/10 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <p className="max-w-4xl text-2xl font-bold leading-tight md:text-4xl">
            My work is closely linadjhkasdhkajsdshjkang in for inclusivity, tolerance, and progressive ideals.
          </p>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <p className="mb-4 text-base font-medium uppercase tracking-[0.2em] text-gray-500">
            Contact
          </p>
          <a
            href="mailto:hallo@klaffensteiner.com"
            className="inline-block text-2xl font-bold hover:opacity-60 transition-opacity border-b-2 border-black pb-1"
          >
            hallo@klaffensteiner.com
          </a>
        </div>
      </section>
    </div>
  );
}
