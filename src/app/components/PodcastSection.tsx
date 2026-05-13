export default function PodcastSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-10 border-t" style={{ background: '#161a12', borderColor: 'var(--od-light)' }}>
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
          ◈ Intel Broadcasts ◈
        </span>
        <div
          className="flex-1 h-px"
          style={{
            background: 'linear-gradient(to left, var(--khaki-dark), transparent)',
          }}
        />
      </div>

      <h2
        className="text-center mb-12"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: '800',
          color: 'var(--khaki)',
          textTransform: 'uppercase',
          letterSpacing: '-1px',
          textShadow: '3px 3px 0 rgba(0,0,0,0.4)',
        }}
      >
        As Heard <span style={{ color: 'var(--pink-primary)' }}>On</span>
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 md:gap-8">
        <a
          href="https://www.instagram.com/reel/DWFLSa1DXDR/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-3 md:gap-5 items-start p-4 md:p-6 border transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-100"
          style={{
            background: 'rgba(74,82,64,0.15)',
            borderColor: 'var(--od-light)',
          }}
        >
          <div
            className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center border relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
              borderColor: 'var(--od-light)',
            }}
          >
            <div
              className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-white/90 relative z-10"
            >
              <div
                className="border-solid ml-0.5"
                style={{
                  width: 0,
                  height: 0,
                  borderWidth: '6px 0 6px 12px',
                  borderColor: 'transparent transparent transparent #111',
                }}
              />
            </div>
          </div>
          <div className="flex-1">
            <h4
              className="mb-1"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(13px, 3vw, 14px)',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--khaki)',
              }}
            >
              Instagram Reel
            </h4>
            <p
              className="mb-1.5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(12px, 2.5vw, 13px)',
                color: 'var(--tan)',
                lineHeight: '1.5',
              }}
            >
              The founders break down the mission — why dating for veterans has been broken, and how Fuck Veterans is fixing it.
            </p>
            <div
              className="text-[11px] tracking-[3px] uppercase mt-1.5"
              style={{
                fontFamily: "'Oswald', sans-serif",
                color: 'var(--od-light)',
              }}
            >
              Instagram · @fuckveterans
            </div>
          </div>
        </a>

        <a
          href="https://play.headliner.app/podcast/a181ce7e611f4d89898d6db9728f3dd1/episode/5711075d-7f0e-43eb-abb9-cc9a4c53d081"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-3 md:gap-5 items-start p-4 md:p-6 border transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-100"
          style={{
            background: 'rgba(74,82,64,0.15)',
            borderColor: 'var(--od-light)',
          }}
        >
          <div
            className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center border relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1a1e16, #2a3020)',
              borderColor: 'var(--od-light)',
            }}
          >
            <svg viewBox="0 0 40 40" className="w-10 h-10 absolute opacity-40">
              <circle cx="20" cy="20" r="18" stroke="#c8b87a" strokeWidth="1.5" fill="none" />
              <circle cx="20" cy="20" r="10" stroke="#c8b87a" strokeWidth="1" fill="none" />
              <circle cx="20" cy="20" r="3" fill="#c8b87a" />
            </svg>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/90 relative z-10">
              <div
                className="border-solid ml-0.5"
                style={{
                  width: 0,
                  height: 0,
                  borderWidth: '6px 0 6px 12px',
                  borderColor: 'transparent transparent transparent #111',
                }}
              />
            </div>
          </div>
          <div className="flex-1">
            <h4
              className="mb-1"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(13px, 3vw, 14px)',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--khaki)',
              }}
            >
              Podcast Episode
            </h4>
            <p
              className="mb-1.5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(12px, 2.5vw, 13px)',
                color: 'var(--tan)',
                lineHeight: '1.5',
              }}
            >
              Full episode covering veteran dating challenges, the Fuck Veterans origin story, and what's next for the platform.
            </p>
            <div
              className="text-[11px] tracking-[3px] uppercase mt-1.5"
              style={{
                fontFamily: "'Oswald', sans-serif",
                color: 'var(--od-light)',
              }}
            >
              Headliner · Full Episode
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
