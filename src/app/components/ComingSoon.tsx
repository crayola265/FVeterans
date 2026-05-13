export default function ComingSoon() {
  return (
    <section
      className="text-center py-16 md:py-24 px-4 md:px-6 lg:px-10 border-t-4 border-b-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #c45a6c 0%, #8b3a4a 100%)',
        backgroundImage:
          'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)',
        borderColor: 'var(--pink-primary)',
      }}
    >
      {/* Background CLASSIFIED text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none -rotate-[15deg]"
        style={{
          fontFamily: "'Black Ops One', cursive",
          fontSize: '200px',
          color: 'rgba(0,0,0,0.1)',
          letterSpacing: '-5px',
        }}
      >
        CLASSIFIED
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div
          className="text-[11px] font-bold tracking-[8px] uppercase mb-5"
          style={{
            fontFamily: "'Oswald', sans-serif",
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          ◈ Incoming Transmission ◈
        </div>
        <h2
          className="mb-6"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: '800',
            color: 'var(--cream)',
            lineHeight: 1,
            textTransform: 'uppercase',
            textShadow: '0 4px 20px rgba(0,0,0,0.4)',
            letterSpacing: '-1px',
          }}
        >
          Cumming
          <br />
          Soon
        </h2>
        <p
          className="mb-5"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '18px',
            color: 'rgba(240,232,208,0.85)',
            lineHeight: '1.8',
            fontStyle: 'italic',
          }}
        >
          A fully curated dating experience where <em>verified veterans</em> can connect with the
          hottest Dependas in the country. Matchmaking with military precision. Love with no
          casualties.
        </p>
        <div
          className="inline-block px-3 py-1 text-[10px] font-bold tracking-[4px] uppercase"
          style={{
            fontFamily: "'Oswald', sans-serif",
            background: 'white',
            color: 'var(--pink-primary)',
          }}
        >
          Dependa Verified · Coming 2025
        </div>
      </div>
    </section>
  );
}
