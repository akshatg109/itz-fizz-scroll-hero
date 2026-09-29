"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const headline = ["WELCOME", "ITZ FIZZ"];

const stats = [
  { value: "58%", description: "more pick-up point use", index: "01" },
  { value: "23%", description: "fewer customer calls", index: "02" },
  { value: "27%", description: "more pick-up point use", index: "03" },
  { value: "40%", description: "fewer customer calls", index: "04" },
];

function CarIllustration() {
  return (
    <svg
      className="car-art"
      viewBox="0 0 360 150"
      role="img"
      aria-labelledby="car-title"
      focusable="false"
    >
      <title id="car-title">A red sports car speeding along the road</title>
      <defs>
        <linearGradient id="bodyPaint" x1="0" x2="0.95" y1="0" y2="1">
          <stop offset="0" stopColor="#ff8966" />
          <stop offset="0.38" stopColor="#fa593e" />
          <stop offset="1" stopColor="#bd2e2d" />
        </linearGradient>
        <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#98b9b1" />
          <stop offset="0.48" stopColor="#31423f" />
          <stop offset="1" stopColor="#17201f" />
        </linearGradient>
        <filter id="carShadow" x="-20%" y="-40%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      <ellipse cx="181" cy="123" rx="137" ry="12" fill="#070807" opacity=".46" filter="url(#carShadow)" />

      {/* Wheels */}
      <g fill="#151714" stroke="#44463f" strokeWidth="2">
        <path d="M65 22h43a8 8 0 0 1 8 8v15H57V30a8 8 0 0 1 8-8Z" />
        <path d="M65 105h43a8 8 0 0 1 8 8v15a8 8 0 0 1-8 8H65a8 8 0 0 1-8-8v-15a8 8 0 0 1 8-8Z" />
        <path d="M253 22h43a8 8 0 0 1 8 8v15h-59V30a8 8 0 0 1 8-8Z" />
        <path d="M253 105h43a8 8 0 0 1 8 8v15a8 8 0 0 1-8 8h-43a8 8 0 0 1-8-8v-15a8 8 0 0 1 8-8Z" />
      </g>
      <g fill="#a5a59a" opacity=".72">
        <path d="M70 27h33v4H70zM70 124h33v4H70zM258 27h33v4h-33zM258 124h33v4h-33z" />
      </g>

      {/* Low, wide body */}
      <path
        d="M29 71c7-2 16-7 24-15l18-18c9-9 19-15 33-18l27-6c10-2 22-3 36-3h31c18 0 32 2 43 6l26 9c12 4 22 11 30 21l15 18c7 8 14 12 22 15 5 2 8 7 6 12l-5 14c-2 6-7 9-14 9H40c-7 0-12-3-14-9l-5-14c-2-7 1-17 8-21Z"
        fill="url(#bodyPaint)"
        stroke="#ff9a76"
        strokeWidth="2"
      />
      <path d="M36 78c18-2 26-10 38-23l13-14M324 78c-18-2-26-10-38-23l-13-14" fill="none" stroke="#ffb49a" strokeWidth="2" opacity=".72" />
      <path d="M44 91h41M277 91h41" stroke="#8e2326" strokeWidth="2" opacity=".75" />

      {/* Panoramic cabin */}
      <path d="m116 25 15-5c9-3 21-4 36-4h28c16 0 28 2 37 6l14 6 17 28H96l20-31Z" fill="#9a3633" opacity=".68" />
      <path d="M127 26c10-3 21-4 34-4h32v32h-91l16-24c2-2 5-3 9-4Z" fill="url(#glass)" stroke="#ffc0a4" strokeWidth="1.5" />
      <path d="M201 22c13 0 22 2 30 5l11 5 14 22h-55V22Z" fill="url(#glass)" stroke="#ffc0a4" strokeWidth="1.5" />
      <path d="M197 23v31M114 31h137" stroke="#e4d7c2" strokeWidth="1" opacity=".4" />
      <path d="M130 29c12-3 24-4 36-4M206 26c10 0 17 2 24 5" fill="none" stroke="#fff5dd" strokeWidth="2" opacity=".44" />

      {/* Front splitter, rear lights, and details */}
      <path d="M18 78c7-4 16-7 26-7h22v5H43c-8 0-15 2-22 5ZM299 71h19c9 0 17 3 24 7l2 3c-7-3-15-5-23-5h-22Z" fill="#f7e1c1" />
      <path d="M22 94h22M315 94h23" stroke="#ffc0a4" strokeWidth="3" strokeLinecap="round" />
      <path d="m34 110 10 5h272l10-5" fill="none" stroke="#742326" strokeWidth="3" />
      <path d="M163 73h36" stroke="#ffaf88" strokeWidth="2" strokeLinecap="round" opacity=".65" />
      <path d="M174 92h13" stroke="#872b2c" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  const stageRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!stageRef.current) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const letters = gsap.utils.toArray<HTMLElement>(".headline-letter", stageRef.current);
      const car = stageRef.current.querySelector<HTMLElement>(".car-rig");
      const trail = stageRef.current.querySelector<HTMLElement>(".speed-trail");
      const progress = stageRef.current.querySelector<HTMLElement>(".scroll-progress");

      if (!car || !trail || !progress) return;

      if (prefersReducedMotion) {
        gsap.set(letters, { color: "var(--acid)" });
        gsap.set(car, { x: () => window.innerWidth / 2 - car.offsetWidth / 2 });
        gsap.set(trail, { scaleX: 0.5 });
        return;
      }

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .fromTo(".hero-kicker", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.6 })
        .fromTo(
          letters,
          { autoAlpha: 0, y: 34, rotateX: -26 },
          { autoAlpha: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.035 },
          "-=0.18",
        )
        .fromTo(".hero-subcopy", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.55 }, "-=0.36")
        .fromTo(
          ".impact-card",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.11 },
          "-=0.2",
        )
        .fromTo(".scroll-hint", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, "-=0.08");

      const sweep = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      sweep
        .to(car, { x: () => window.innerWidth + car.offsetWidth, ease: "none" }, 0)
        .to(trail, { scaleX: 1, ease: "none" }, 0)
        .to(progress, { scaleX: 1, ease: "none" }, 0)
        .to(
          letters,
          {
            color: "#d7ff64",
            stagger: { each: 0.045, from: "start" },
            duration: 0.34,
            ease: "none",
          },
          0.06,
        );
    },
    { scope: stageRef },
  );

  return (
    <section ref={stageRef} className="hero-stage relative isolate" aria-label="Itz Fizz, good times in motion">
      <div className="hero-scene">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Itz Fizz home">
            ITZ<span aria-hidden="true">✳</span>FIZZ
          </a>
          <nav className="header-nav" aria-label="Main navigation">
            <a href="#story">Our kind of good</a>
            <a className="nav-dot-link" href="#story" aria-label="Discover the Itz Fizz story">
              <span aria-hidden="true">↘</span>
            </a>
          </nav>
        </header>

        <div className="hero-copy">
          <p className="hero-kicker">
            <span className="kicker-pip" aria-hidden="true" />
            YOUR DAY, WITH EXTRA FIZZ
          </p>
          <h1 className="hero-headline">
            <span className="sr-only">Welcome Itz Fizz</span>
            {headline.map((word, wordIndex) => (
              <span className="headline-line" aria-hidden="true" key={word}>
                {word.split("").map((letter, index) => (
                  <span className="headline-letter" key={`${wordIndex}-${index}`}>
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="hero-subcopy">A little more fizz. A lot more feel-good.</p>
        </div>

        <div className="road" aria-hidden="true">
          <div className="road-grain" />
          <div className="speed-trail" />
          <div className="lane-markings" />
          <div className="car-rig">
            <CarIllustration />
          </div>
          <span className="road-edge road-edge-top" />
          <span className="road-edge road-edge-bottom" />
        </div>

        <section className="impact" aria-labelledby="impact-title">
          <div className="impact-heading">
            <h2 id="impact-title">A LITTLE EXTRA IMPACT</h2>
            <span>THE GOOD KIND</span>
          </div>
          <div className="impact-grid">
            {stats.map((stat) => (
              <article className="impact-card" key={stat.index}>
                <span className="impact-index">{stat.index}</span>
                <p className="impact-value">{stat.value}</p>
                <p className="impact-description">{stat.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="scroll-hint" aria-hidden="true">
          <span>SCROLL TO FEEL IT</span>
          <span className="scroll-arrow">↓</span>
        </div>
        <div className="scroll-track" aria-hidden="true">
          <span className="scroll-progress" />
        </div>
        <span className="scene-coordinate" aria-hidden="true">40° 43′ 55.3″ N &nbsp; 73° 59′ 11.7″ W</span>
      </div>
    </section>
  );
}
