import { useState, useEffect, useRef } from 'react';

const StatBox = ({ number, label, delay }: { number: string; label: string; delay: number }) => {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible && number !== '❤️' && number !== '100%') {
      const target = parseInt(number.replace('+', ''));
      const duration = 1500;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [visible, number]);

  return (
    <div
      ref={ref}
      className="relative p-4 md:p-6 text-center border transition-all duration-300 hover:scale-105"
      style={{
        background: 'rgba(74,82,64,0.2)',
        borderColor: 'var(--od-light)',
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-[3px]"
        style={{ background: 'var(--pink-primary)' }}
      />
      <span
        className="block mb-1.5"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(28px, 7vw, 38px)',
          fontWeight: '800',
          color: 'var(--khaki)',
          lineHeight: 1,
        }}
      >
        {number === '❤️' || number === '100%'
          ? number
          : `${count}${number.includes('+') ? '+' : ''}`}
      </span>
      <span
        className="text-[9px] md:text-[10px] font-bold tracking-[2px] md:tracking-[3px] uppercase"
        style={{
          fontFamily: "'Oswald', sans-serif",
          color: 'var(--od-light)',
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default function About() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-10" style={{ background: 'var(--od-dark)' }}>
      <div className="flex items-center gap-5 mb-8">
        <div
          className="flex-1 h-px"
          style={{
            background: 'linear-gradient(to right, var(--khaki-dark), transparent)',
          }}
        />
        <span
          className="text-[11px] font-bold tracking-[6px] uppercase"
          style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--khaki-dark)' }}
        >
          ◈ Unit Briefing ◈
        </span>
        <div
          className="flex-1 h-px"
          style={{
            background: 'linear-gradient(to left, var(--khaki-dark), transparent)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 items-center">
        <div>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(32px, 7vw, 42px)',
              fontWeight: '800',
              color: 'var(--khaki)',
              textTransform: 'uppercase',
              lineHeight: 1,
              textShadow: '3px 3px 0 rgba(0,0,0,0.4)',
              letterSpacing: '-1px',
            }}
          >
            What We're <span style={{ color: 'var(--pink-primary)' }}>About</span>
          </h2>
          <p
            className="mb-5"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '16px',
              color: 'var(--tan)',
              lineHeight: '1.9',
            }}
          >
            Fuck Veterans isn't just a dating platform — it's a movement built by veterans, for
            veterans, with civilians who actually give a damn. We were born from the frustration of
            watching people who gave everything for their country come home to mediocre apps built
            by people who've never set foot on a base.
          </p>
          <p
            className="mb-5"
            style={{
              fontFamily: "'Special Elite', cursive",
              fontSize: '16px',
              color: 'var(--tan)',
              lineHeight: '1.9',
            }}
          >
            We curate real connections. We vet (pun absolutely intended) every profile. We build
            community through events, content, and conversations that actually matter. And yeah, we
            help people hook up. That's a feature, not a bug.
          </p>
          <p
            className="mb-8"
            style={{
              fontFamily: "'Special Elite', cursive",
              fontSize: '16px',
              color: 'var(--tan)',
              lineHeight: '1.9',
            }}
          >
            Beyond the matches, we donate a portion of every purchase to veteran mental health
            programs and transition support orgs. Because love is great, but sometimes you need
            backup.
          </p>
          <div className="flex gap-8 flex-wrap">
            <div
              className="inline-block px-4 py-1.5 border-[3px] transform rotate-[-2deg]"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: 'var(--olive-accent)',
                borderColor: 'var(--olive-accent)',
              }}
            >
              Veteran Owned
            </div>
            <div
              className="inline-block px-4 py-1.5 border-[3px] transform rotate-[3deg]"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: 'var(--pink-primary)',
                borderColor: 'var(--pink-primary)',
              }}
            >
              Vet Approved
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-5">
          <StatBox number="7" label="Branches Served" delay={0} />
          <StatBox number="50+" label="States Represented" delay={200} />
          <StatBox number="100%" label="Veteran Verified" delay={400} />
          <StatBox number="❤️" label="Donation to Vet Programs" delay={600} />
        </div>
      </div>
    </section>
  );
}
