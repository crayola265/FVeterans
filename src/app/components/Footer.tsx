export default function Footer() {
  return (
    <footer
      className="py-8 md:py-10 px-4 md:px-6 lg:px-10 text-center border-t"
      style={{
        background: '#0d0f0b',
        borderColor: '#2a2e24',
      }}
    >
      <div
        className="text-[20px] tracking-[0.5px] mb-3"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: '800',
          color: 'var(--od-light)',
        }}
      >
        Fuck Veterans
      </div>
      <p
        className="text-[12px] leading-relaxed"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: '#444',
        }}
      >
        Serving those who served. Hook up. Fall in. Find love.
        <br />
        Built by veterans. For veterans. With civilians who do their duty.
        <br />
        <br />
        <span className="tracking-[3px]">© 2025 FUCK VETERANS LLC · ALL RIGHTS RESERVED</span>
      </p>
    </footer>
  );
}
