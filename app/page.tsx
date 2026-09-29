import Hero from "./ui/hero";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-ink text-paper">
      <Hero />

      <section id="story" className="story-section">
        <div className="story-inner">
          <p className="section-eyebrow">
            <span className="eyebrow-mark" aria-hidden="true">✳</span>
            THE GOOD STUFF
          </p>
          <h2>
            Everyday,<br />
            with a little more <span>fizz.</span>
          </h2>
          <p className="story-copy">
            Big bubbles. Bright flavour. A tiny reminder that the best part of
            the day can be the little things.
          </p>
          <a className="story-link" href="#top">
            Take it from the top <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="story-stamp" aria-hidden="true">
          <span>GOOD</span>
          <span>VIBRA</span>
          <span>TIONS</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark wordmark-small" href="#top" aria-label="Itz Fizz, back to top">
          ITZ<span>✳</span>FIZZ
        </a>
        <p>GOOD TIMES. NO SNOOZE.</p>
        <span>© 2026 ITZ FIZZ</span>
      </footer>
    </main>
  );
}
