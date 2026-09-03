export default function App() {
  return (
    <div className="min-h-screen bg-brand-light-gray flex flex-col">
      <header className="bg-brand-black text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">FPE Group</span>
          <span className="text-sm text-brand-mid-gray">Engineering</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <p className="text-xs tracking-[0.15em] uppercase text-brand-blue font-semibold mb-4">
            Integrated Engineering
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black leading-[1.1] mb-6">
            Building what's next.
          </h1>
          <p className="text-base sm:text-lg text-brand-dark-gray leading-relaxed mb-8">
            FPE Group delivers integrated engineering solutions across Europe —
            from structural design to BIM coordination and construction support.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-black text-white text-sm font-medium rounded-sm hover:bg-brand-dark-gray transition-colors"
          >
            Get in touch
          </a>
        </div>
      </main>

      <footer id="contact" className="bg-brand-black text-white px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-sm text-brand-mid-gray">© 2026 FPE Group</span>
          <span className="text-sm text-brand-mid-gray">info@fpe-group.eu</span>
        </div>
      </footer>
    </div>
  );
}
