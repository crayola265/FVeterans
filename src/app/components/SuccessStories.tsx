const SuccessCard = ({
  username,
  linkedVia,
  likes,
  caption,
  hashtags,
  timeAgo,
  avatarBg,
  initials,
  svgContent,
  badge,
}: {
  username: string;
  linkedVia: string;
  likes: string;
  caption: string;
  hashtags: string;
  timeAgo: string;
  avatarBg: string;
  initials: string;
  svgContent: React.ReactNode;
  badge: React.ReactNode;
}) => {
  return (
    <div
      className="max-w-[340px] mx-auto w-full rounded overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{ background: '#1a1a1a', border: '1px solid #333' }}
    >
      {/* Header */}
      <div className="flex items-center p-2.5 gap-2.5 border-b" style={{ borderColor: '#222' }}>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold"
          style={{ background: avatarBg, color: 'white' }}
        >
          {initials}
        </div>
        <div className="flex-1">
          <div
            className="text-[13px] font-semibold"
            style={{ fontFamily: '-apple-system, sans-serif', color: '#f5f5f5' }}
          >
            {username}
          </div>
          <div className="text-[11px]" style={{ color: '#8e8e8e' }}>
            {linkedVia}
          </div>
        </div>
        <div
          className="text-[12px] font-semibold cursor-pointer"
          style={{ fontFamily: '-apple-system, sans-serif', color: '#3897f0' }}
        >
          Follow
        </div>
      </div>

      {/* Image */}
      <div className="w-full aspect-square relative overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full opacity-35">
          {svgContent}
        </svg>
        {badge}
      </div>

      {/* Bottom */}
      <div className="p-2.5">
        <div className="flex gap-3.5 mb-2">
          <svg
            className="w-5.5 h-5.5 cursor-pointer"
            viewBox="0 0 24 24"
            style={{ filter: 'invert(1) brightness(0.8)' }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <svg
            className="w-5.5 h-5.5 cursor-pointer"
            viewBox="0 0 24 24"
            style={{ filter: 'invert(1) brightness(0.8)' }}
          >
            <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
          </svg>
        </div>
        <div
          className="text-[13px] font-semibold mb-1"
          style={{ fontFamily: '-apple-system, sans-serif', color: '#f5f5f5' }}
        >
          {likes}
        </div>
        <div
          className="text-[13px] leading-5"
          style={{ fontFamily: '-apple-system, sans-serif', color: '#f5f5f5' }}
        >
          <span className="font-semibold">{username}</span> {caption}
        </div>
        <div
          className="text-[13px] mt-1 cursor-pointer"
          style={{ fontFamily: '-apple-system, sans-serif', color: '#3897f0' }}
        >
          {hashtags}
        </div>
        <div className="text-[10px] mt-1.5 uppercase tracking-wide" style={{ color: '#5c5c5c' }}>
          {timeAgo}
        </div>
      </div>
    </div>
  );
};

export default function SuccessStories() {
  return (
    <section id="intel" className="py-12 md:py-20 px-4 md:px-6 lg:px-10" style={{ background: '#1a1e16' }}>
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
          ◈ After Action Reports ◈
        </span>
        <div
          className="flex-1 h-px"
          style={{
            background: 'linear-gradient(to left, var(--khaki-dark), transparent)',
          }}
        />
      </div>

      <h2
        className="text-center mb-3"
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
        Success <span style={{ color: 'var(--pink-primary)' }}>Stories</span>
      </h2>
      <p
        className="text-center mb-12 mx-auto max-w-lg"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: 'var(--tan)',
          fontSize: '15px',
        }}
      >
        Mission accomplished. Love deployed. Lives changed.
      </p>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <SuccessCard
          username="sgtsarah.r"
          linkedVia="Linked via fuckveterans"
          likes="3,891 likes"
          caption="When a dating app actually works... HE PROPOSED 🎖️ Met through @fuckveterans 6 months ago. Army + Army = Unstoppable. #FuckVeterans #VeteranLove #SheFoundHerSoldier"
          hashtags="#FuckVeterans #VeteranLove #ArmyStrong"
          timeAgo="5 days ago"
          avatarBg="linear-gradient(135deg, #4a7c59, #2d5a3d)"
          initials="SR"
          svgContent={
            <>
              <circle cx="130" cy="90" r="32" fill="#c8b87a" />
              <circle cx="175" cy="88" r="28" fill="#d4c49a" />
              <path
                d="M80 130 Q130 108 180 128"
                stroke="#c8b87a"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
              />
              <path d="M85 135 Q130 115 175 132 L185 300 L75 300 Z" fill="#4a5240" />
              <path d="M168 128 Q185 112 225 130 L235 300 L158 300 Z" fill="#5a6450" />
              <text x="150" y="270" textAnchor="middle" fontSize="28" fill="rgba(200,184,122,0.5)">
                💍
              </text>
            </>
          }
          badge={
            <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-sm" style={{ background: 'rgba(200,184,122,0.15)', border: '1px solid rgba(200,184,122,0.3)' }}>
              <span className="text-[11px]" style={{ fontFamily: '-apple-system, sans-serif', color: 'rgba(240,232,208,0.8)' }}>📍 Fort Bragg, NC</span>
            </div>
          }
        />

        <SuccessCard
          username="chief.marcus.usn"
          linkedVia="Linked via fuckveterans"
          likes="7,112 likes"
          caption="3 deployments, 2 TDYs, 1 failed Hinge era... then @fuckveterans came through. She's a Marine. We argue about everything. I've never been happier. Semper Fi, I guess 😂⚓"
          hashtags="#FuckVeterans #NavyLife #FindingLove"
          timeAgo="2 weeks ago"
          avatarBg="linear-gradient(135deg, #1a3a6e, #0d2244)"
          initials="CM2"
          svgContent={
            <>
              <circle cx="150" cy="85" r="35" fill="#b8cce0" />
              <path d="M95 135 Q150 110 205 135 L215 300 L85 300 Z" fill="#1a3a5c" />
              <path
                d="M0 240 Q75 220 150 230 Q225 240 300 220 L300 300 L0 300 Z"
                fill="#0a1520"
                opacity="0.8"
              />
              <ellipse cx="150" cy="245" rx="80" ry="15" fill="rgba(26,58,92,0.3)" />
              <text x="150" y="185" textAnchor="middle" fontSize="32" fill="rgba(160,184,216,0.4)">
                ⚓
              </text>
            </>
          }
          badge={
            <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-xl" style={{ background: 'rgba(26,58,92,0.6)', border: '1px solid rgba(100,140,180,0.3)' }}>
              <span className="text-[11px]" style={{ fontFamily: '-apple-system, sans-serif', color: 'rgba(200,220,240,0.9)' }}>🌊 San Diego, CA</span>
            </div>
          }
        />

        <SuccessCard
          username="jess.civilian.life"
          linkedVia="Linked via fuckveterans"
          likes="11,882 likes"
          caption="I was skeptical. A dating app called FUCK VETERANS?? But my friend dared me to join the waitlist. Now I'm dating the most disciplined, hilarious, unhinged Marine I've ever met. Do your civilian duty people 🫡🇺🇸 @fuckveterans"
          hashtags="#FuckVeterans #CivilianDuty #MarineCorps"
          timeAgo="1 month ago"
          avatarBg="linear-gradient(135deg, #8b1a1a, #5c1010)"
          initials="USMC"
          svgContent={
            <>
              <circle cx="125" cy="85" r="30" fill="#d4a090" />
              <circle cx="185" cy="82" r="32" fill="#c8b090" />
              <path d="M75 128 Q125 106 175 125 L183 300 L67 300 Z" fill="#6b1f1f" opacity="0.8" />
              <path d="M175 125 Q195 108 235 128 L245 300 L165 300 Z" fill="#4a3020" opacity="0.7" />
              <text x="150" y="270" textAnchor="middle" fontSize="30" fill="rgba(200,100,100,0.4)">
                ❤️‍🔥
              </text>
            </>
          }
          badge={
            <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-xl" style={{ background: 'rgba(100,30,30,0.5)', border: '1px solid rgba(200,100,100,0.3)' }}>
              <span className="text-[11px]" style={{ fontFamily: '-apple-system, sans-serif', color: 'rgba(255,200,190,0.9)' }}>❤️ Together 8 months</span>
            </div>
          }
        />
      </div>
    </section>
  );
}
