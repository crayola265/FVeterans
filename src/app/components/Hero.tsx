import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="flex items-center justify-center relative px-4 md:px-6 lg:px-10 pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden"
    >
      {/* Hero Background with Camo Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 120px 80px at 15% 25%, #3a3f2e88 0%, transparent 100%),
            radial-gradient(ellipse 80px 120px at 75% 55%, #2e332688 0%, transparent 100%),
            radial-gradient(ellipse 140px 60px at 50% 75%, #3f453566 0%, transparent 100%),
            radial-gradient(ellipse 60px 100px at 85% 15%, #25282044 0%, transparent 100%),
            radial-gradient(ellipse 100px 80px at 30% 80%, #33382966 0%, transparent 100%),
            linear-gradient(160deg, #1a1e16 0%, #2b2e26 40%, #1f2219 100%)
          `,
        }}
      >
        {/* Film grain effect */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0,0,0,0.03) 2px,
              rgba(0,0,0,0.03) 4px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`inline-block text-[11px] font-bold tracking-[8px] uppercase px-4 py-1 border-2 mb-5 transform -rotate-1 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontFamily: "'Oswald', sans-serif",
            color: 'var(--pink-primary)',
            borderColor: 'var(--pink-primary)',
            transitionDelay: '100ms',
          }}
        >
          ⬛ Classified Operation ⬛
        </div>

        <h1
          className={`mb-2 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(52px, 8vw, 96px)',
            fontWeight: '800',
            lineHeight: '0.95',
            color: 'var(--khaki)',
            textTransform: 'uppercase',
            letterSpacing: '-2px',
            textShadow: '4px 4px 0 rgba(0,0,0,0.5)',
            transitionDelay: '250ms',
          }}
        >
          Fuck
          <br />
          <span style={{ color: 'var(--pink-primary)' }}>Veterans</span>
        </h1>

        <div
          className={`flex justify-center gap-2 mb-6 md:mb-8 transition-all duration-700 flex-wrap ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          {['Dating', 'Real Connections', 'Est. 2024'].map((tag) => (
            <div
              key={tag}
              className="px-2.5 md:px-3.5 py-1 md:py-1.5 rounded-sm text-[9px] md:text-[10px] font-bold tracking-[1.5px] md:tracking-[2px] uppercase"
              style={{
                fontFamily: "'Oswald', sans-serif",
                background: 'linear-gradient(135deg, #c0c0c0, #a0a0a0)',
                color: '#1a1a1a',
                boxShadow: '2px 2px 0 rgba(0,0,0,0.4)',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        <p
          className={`mb-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: '500',
            color: 'var(--dirty-white)',
            lineHeight: '1.4',
            maxWidth: '700px',
            margin: '0 auto 30px',
            transitionDelay: '550ms',
          }}
        >
          We help veterans hook up, fall in love, and find their next mission — together.
        </p>

        <p
          className={`mb-10 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '16px',
            color: 'var(--tan)',
            maxWidth: '620px',
            margin: '0 auto 40px',
            lineHeight: '1.8',
            transitionDelay: '650ms',
          }}
        >
          Civilian life is hard enough. Finding love shouldn't be a combat op. We curate meaningful
          connections between veterans who've earned it and civilians ready to step up. No
          bullshit. No algorithms. Just real people, getting it on in all the right ways.
        </p>

        <a
          href="#signup"
          className={`inline-block px-8 md:px-12 py-3 md:py-4 cursor-pointer relative transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_6px_30px_rgba(232,93,117,0.5)] active:scale-95 rounded-full ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(16px, 4vw, 18px)',
            fontWeight: '700',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            background: 'var(--pink-primary)',
            color: 'white',
            transitionDelay: '750ms',
          }}
        >
          Report For Duty
        </a>
      </div>
    </section>
  );
}
