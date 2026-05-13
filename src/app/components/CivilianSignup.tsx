import { useState } from 'react';

export default function CivilianSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="py-12 md:py-20 px-4 md:px-6 lg:px-10 border-t border-b"
      style={{
        background: '#1e2118',
        borderColor: 'var(--od-light)',
      }}
    >
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
          ◈ Civilian Orders ◈
        </span>
        <div
          className="flex-1 h-px"
          style={{
            background: 'linear-gradient(to left, var(--khaki-dark), transparent)',
          }}
        />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="mb-4"
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
          Do Your F*cking <span style={{ color: 'var(--pink-primary)' }}>Duty</span>
        </h2>
        <p
          className="mb-8"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '17px',
            color: 'var(--tan)',
            lineHeight: '1.8',
          }}
        >
          Not a veteran? You can still serve. Add your name to our civilian list and we'll let you
          know the moment you can sign up to chat with all these hot military people. Consider it
          your patriotic obligation.
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col md:flex-row gap-0">
            <input
              type="email"
              placeholder="Enter your email, soldier"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 md:px-4 py-3 md:py-3.5 border-2 outline-none md:border-r-0 text-[14px] rounded-l-full md:rounded-r-none rounded-r-full md:rounded-l-full"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: 'rgba(0,0,0,0.4)',
                borderColor: 'var(--od-light)',
                color: 'var(--cream)',
              }}
            />
            <button
              type="submit"
              className="px-4 md:px-6 py-3 md:py-3.5 border-0 cursor-pointer whitespace-nowrap transition-all duration-200 hover:shadow-lg active:scale-98 touch-manipulation rounded-full"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                fontWeight: 700,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                background: submitted ? '#2a4a28' : 'var(--pink-primary)',
                color: 'white',
              }}
            >
              {submitted ? "✓ You're On The List" : 'Deploy Me'}
            </button>
          </div>
        </form>

        <p
          className="mt-3.5 text-[12px] tracking-[2px] uppercase"
          style={{
            fontFamily: "'Oswald', sans-serif",
            color: 'var(--od-light)',
          }}
        >
          No spam. Only orders.
        </p>
      </div>
    </section>
  );
}
