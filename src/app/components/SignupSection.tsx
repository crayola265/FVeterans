import { useState } from 'react';

export default function SignupSection() {
  const [veteranForm, setVeteranForm] = useState({
    name: '',
    email: '',
    branch: '',
    status: '',
  });
  const [civilianForm, setCivilianForm] = useState({
    email: '',
    firstName: '',
  });
  const [veteranSubmitted, setVeteranSubmitted] = useState(false);
  const [civilianSubmitted, setCivilianSubmitted] = useState(false);

  const handleVeteranSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVeteranSubmitted(true);
    setTimeout(() => setVeteranSubmitted(false), 3000);
  };

  const handleCivilianSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCivilianSubmitted(true);
    setTimeout(() => setCivilianSubmitted(false), 3000);
  };

  return (
    <section
      id="signup"
      className="py-12 md:py-20 px-4 md:px-6 lg:px-10 border-t-[3px] border-b-[3px]"
      style={{
        background: '#1a1e16',
        borderColor: 'var(--khaki-dark)',
      }}
    >
      <div className="max-w-4xl mx-auto mb-8 md:mb-12">
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
            ◈ Orders ◈
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
          Fall <span style={{ color: 'var(--pink-primary)' }}>In</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-14">
        {/* Veteran Signup */}
        <div
          className="relative p-10 border transition-all duration-300 hover:shadow-lg"
          style={{
            background: 'rgba(74,82,64,0.2)',
            borderColor: 'var(--khaki-dark)',
          }}
        >
          {/* Corner decorations */}
          <div
            className="absolute top-[-1px] left-[-1px] w-8 h-8 border-t-[3px] border-l-[3px]"
            style={{ borderColor: 'var(--pink-primary)' }}
          />
          <div
            className="absolute bottom-[-1px] right-[-1px] w-8 h-8 border-b-[3px] border-r-[3px]"
            style={{ borderColor: 'var(--pink-primary)' }}
          />

          <span
            className="block text-[11px] font-bold tracking-[5px] uppercase mb-2"
            style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--pink-primary)' }}
          >
            For Veterans
          </span>
          <h3
            className="mb-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '24px',
              fontWeight: '700',
              color: 'var(--khaki)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Be First On The Ground
          </h3>
          <p
            className="mb-6"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: 'var(--tan)',
              lineHeight: '1.8',
            }}
          >
            We're building something tighter than a rack in a berthing. Drop your info below for a
            chance to be featured in our launch video and become one of the OG veterans on the
            platform.
          </p>

          <form onSubmit={handleVeteranSubmit}>
            <div className="mb-4">
              <label
                className="block text-[10px] font-bold tracking-[4px] uppercase mb-1.5"
                style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--khaki-dark)' }}
              >
                Name
              </label>
              <input
                type="text"
                placeholder="First & Last Name"
                value={veteranForm.name}
                onChange={(e) => setVeteranForm({ ...veteranForm, name: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-b-2 outline-none transition-colors"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  background: 'rgba(0,0,0,0.3)',
                  borderColor: 'var(--od-light)',
                  borderBottomColor: 'var(--khaki-dark)',
                  color: 'var(--cream)',
                }}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-[10px] font-bold tracking-[4px] uppercase mb-1.5"
                style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--khaki-dark)' }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={veteranForm.email}
                onChange={(e) => setVeteranForm({ ...veteranForm, email: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-b-2 outline-none transition-colors"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  background: 'rgba(0,0,0,0.3)',
                  borderColor: 'var(--od-light)',
                  borderBottomColor: 'var(--khaki-dark)',
                  color: 'var(--cream)',
                }}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-[10px] font-bold tracking-[4px] uppercase mb-1.5"
                style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--khaki-dark)' }}
              >
                Branch of Service
              </label>
              <select
                value={veteranForm.branch}
                onChange={(e) => setVeteranForm({ ...veteranForm, branch: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-b-2 outline-none transition-colors"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  background: 'rgba(0,0,0,0.3)',
                  borderColor: 'var(--od-light)',
                  borderBottomColor: 'var(--khaki-dark)',
                  color: 'var(--cream)',
                }}
              >
                <option value="">— Select Branch —</option>
                <option>Army</option>
                <option>Navy</option>
                <option>Marines</option>
                <option>Air Force</option>
                <option>Coast Guard</option>
                <option>Space Force</option>
                <option>National Guard</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block text-[10px] font-bold tracking-[4px] uppercase mb-1.5"
                style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--khaki-dark)' }}
              >
                Status
              </label>
              <select
                value={veteranForm.status}
                onChange={(e) => setVeteranForm({ ...veteranForm, status: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-b-2 outline-none transition-colors"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  background: 'rgba(0,0,0,0.3)',
                  borderColor: 'var(--od-light)',
                  borderBottomColor: 'var(--khaki-dark)',
                  color: 'var(--cream)',
                }}
              >
                <option value="">— Select Status —</option>
                <option>Veteran</option>
                <option>Active Duty</option>
                <option>Reservist</option>
                <option>Guard</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full mt-2 px-3.5 py-3.5 border-0 cursor-pointer transition-all duration-200 hover:shadow-lg active:scale-98 touch-manipulation rounded-full"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                fontWeight: '700',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                background: veteranSubmitted ? '#2a4a28' : 'var(--pink-primary)',
                color: 'white',
              }}
            >
              {veteranSubmitted ? '✓ Submission Received' : 'Submit For Duty'}
            </button>
          </form>
        </div>

        {/* Civilian Signup */}
        <div
          className="relative p-6 md:p-8 lg:p-10 border transition-all duration-300 hover:shadow-lg"
          style={{
            background: 'rgba(74,82,64,0.2)',
            borderColor: 'var(--khaki-dark)',
          }}
        >
          {/* Corner decorations */}
          <div
            className="absolute top-[-1px] left-[-1px] w-8 h-8 border-t-[3px] border-l-[3px]"
            style={{ borderColor: 'var(--pink-primary)' }}
          />
          <div
            className="absolute bottom-[-1px] right-[-1px] w-8 h-8 border-b-[3px] border-r-[3px]"
            style={{ borderColor: 'var(--pink-primary)' }}
          />

          <span
            className="block text-[11px] font-bold tracking-[5px] uppercase mb-2"
            style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--pink-primary)' }}
          >
            For Civilians
          </span>
          <h3
            className="mb-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '24px',
              fontWeight: '700',
              color: 'var(--khaki)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Do Your F*cking Duty
          </h3>
          <p
            className="mb-4"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: 'var(--tan)',
              lineHeight: '1.8',
            }}
          >
            Think you've got what it takes to hang with the hottest veterans in the country? Drop
            your name on the list. When we open civilian access, you'll be the first to know — and
            the first to slide into these DMs with purpose.
          </p>
          <p
            className="mb-6"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              fontStyle: 'italic',
              color: 'var(--od-light)',
            }}
          >
            *We'll notify you the moment civilian sign-ups go live. No spam. Just orders.
          </p>

          <form onSubmit={handleCivilianSubmit}>
            <div className="mb-4">
              <label
                className="block text-[10px] font-bold tracking-[4px] uppercase mb-1.5"
                style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--khaki-dark)' }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={civilianForm.email}
                onChange={(e) => setCivilianForm({ ...civilianForm, email: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-b-2 outline-none transition-colors"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  background: 'rgba(0,0,0,0.3)',
                  borderColor: 'var(--od-light)',
                  borderBottomColor: 'var(--khaki-dark)',
                  color: 'var(--cream)',
                }}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-[10px] font-bold tracking-[4px] uppercase mb-1.5"
                style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--khaki-dark)' }}
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                value={civilianForm.firstName}
                onChange={(e) => setCivilianForm({ ...civilianForm, firstName: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-b-2 outline-none transition-colors"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  background: 'rgba(0,0,0,0.3)',
                  borderColor: 'var(--od-light)',
                  borderBottomColor: 'var(--khaki-dark)',
                  color: 'var(--cream)',
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 px-3.5 py-3.5 border-0 cursor-pointer transition-all duration-200 hover:shadow-lg active:scale-98 touch-manipulation rounded-full"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                fontWeight: '700',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                background: civilianSubmitted ? '#2a4a28' : 'var(--pink-primary)',
                color: 'white',
              }}
            >
              {civilianSubmitted ? "✓ You're On The List" : 'Add Me To The List'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
