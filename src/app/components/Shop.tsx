export default function Shop() {
  return (
    <section
      id="shop"
      className="text-center py-16 md:py-24 px-4 md:px-6 lg:px-10 border-t relative"
      style={{
        background: '#111410',
        borderColor: 'var(--od-light)',
      }}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, transparent 0px, transparent 39px, rgba(74,82,64,0.06) 39px, rgba(74,82,64,0.06) 40px),
            repeating-linear-gradient(0deg, transparent 0px, transparent 39px, rgba(74,82,64,0.06) 39px, rgba(74,82,64,0.06) 40px)
          `,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div
          className="text-[11px] font-bold tracking-[8px] uppercase mb-4"
          style={{
            fontFamily: "'Oswald', sans-serif",
            color: 'var(--od-light)',
          }}
        >
          ◈ PX Store ◈
        </div>
        <h2
          className="mb-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '800',
            color: 'var(--khaki)',
            textTransform: 'uppercase',
            textShadow: '4px 4px 0 rgba(0,0,0,0.5)',
            letterSpacing: '-1px',
          }}
        >
          Buy Our Sh*t
        </h2>
        <p
          className="mb-10"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '17px',
            color: 'var(--tan)',
            lineHeight: '1.7',
          }}
        >
          Hats. Tees. Mugs. Patches. All the gear you need to rep the mission in the wild. Every
          dollar goes back into building the platform and supporting veterans.
        </p>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {['Embroidered Hats', 'Tees', 'Mugs', 'Patches', 'Stickers'].map((item) => (
            <div
              key={item}
              className="px-3 md:px-4 py-1.5 border text-[10px] md:text-[11px] font-semibold tracking-[2px] md:tracking-[3px] uppercase"
              style={{
                background: 'rgba(74,82,64,0.3)',
                borderColor: 'var(--od-light)',
                fontFamily: "'Oswald', sans-serif",
                color: 'var(--dirty-white)',
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <a
          href="https://www.fuckveterans.com/category/all-products"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 md:px-14 py-3 md:py-4 border-0 transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-100 touch-manipulation rounded-full"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            fontWeight: '700',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            background: 'var(--pink-primary)',
            color: 'white',
          }}
        >
          Enter The PX →
        </a>
      </div>
    </section>
  );
}
