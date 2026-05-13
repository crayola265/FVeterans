const InstagramCard = ({
  username,
  likes,
  caption,
  comments,
  timeAgo,
  tag,
  thumbStyle,
}: {
  username: string;
  likes: string;
  caption: string;
  comments: string;
  timeAgo: string;
  tag: string;
  thumbStyle: string;
}) => {
  return (
    <div
      className="rounded overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      style={{ background: '#1a1a1a', border: '1px solid #333' }}
    >
      {/* Header */}
      <div
        className="flex items-center p-3 gap-2.5 border-b"
        style={{ borderColor: '#222' }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold relative"
          style={{
            background: 'linear-gradient(135deg, #4a5240, #9c8a52)',
            color: 'white',
          }}
        >
          <div
            className="absolute inset-[-2px] rounded-full -z-10"
            style={{
              background:
                'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
            }}
          />
          FV
        </div>
        <div
          className="flex-1 text-[13px] font-semibold"
          style={{ fontFamily: '-apple-system, sans-serif', color: '#f5f5f5' }}
        >
          {username}
        </div>
        <div
          className="text-[18px] cursor-pointer"
          style={{ color: '#999' }}
        >
          ···
        </div>
      </div>

      {/* Video Thumbnail */}
      <div className="w-full aspect-square relative overflow-hidden flex items-center justify-center">
        <div className={`absolute inset-0 ${thumbStyle}`}>
          <svg
            className="absolute inset-0 w-full h-full opacity-40"
            viewBox="0 0 300 300"
          >
            <circle cx="150" cy="80" r="35" fill="rgba(200,184,122,0.3)" />
            <path
              d="M100 130 Q150 110 200 130 L220 280 L80 280 Z"
              fill="rgba(74,82,64,0.4)"
            />
            <rect x="60" y="220" width="180" height="3" fill="rgba(107,112,88,0.3)" />
          </svg>
        </div>

        {/* Play button */}
        <div
          className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.85)' }}
        >
          <div
            className="border-solid ml-1"
            style={{
              width: 0,
              height: 0,
              borderWidth: '9px 0 9px 18px',
              borderColor: 'transparent transparent transparent #1a1a1a',
            }}
          />
        </div>

        {/* Reel badge */}
        <div className="absolute top-2.5 right-2.5 z-20">
          <svg viewBox="0 0 24 24" fill="white" opacity="0.9" className="w-5 h-5">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        </div>

        {/* Overlay tag */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-4"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
          }}
        >
          <div
            className="text-[11px] font-bold tracking-wide uppercase mb-1 opacity-85"
            style={{ color: 'white' }}
          >
            {tag}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="p-3">
        <div className="flex gap-3.5 mb-2 items-center">
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
          <svg
            className="w-5.5 h-5.5 cursor-pointer"
            viewBox="0 0 24 24"
            style={{ filter: 'invert(1) brightness(0.8)' }}
          >
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
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
          className="text-[12px] mt-1 cursor-pointer"
          style={{ color: '#8e8e8e' }}
        >
          {comments}
        </div>
        <div
          className="text-[10px] mt-1.5 uppercase tracking-wide"
          style={{ color: '#5c5c5c' }}
        >
          {timeAgo}
        </div>
      </div>
    </div>
  );
};

export default function MissionInAction() {
  return (
    <section
      id="mission"
      className="py-12 md:py-20 px-4 md:px-6 lg:px-10"
      style={{ background: '#171b13' }}
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
          ◈ Field Reports ◈
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
        The Mission <span style={{ color: 'var(--pink-primary)' }}>In Action</span>
      </h2>
      <p
        className="text-center mb-12 mx-auto max-w-lg"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: 'var(--tan)',
          fontSize: '15px',
        }}
      >
        Intel from the field. Real veterans. Real moments. Real f*cking results.
      </p>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <InstagramCard
          username="fuckveterans"
          likes="4,281 likes"
          caption="Marine vet meets his match at a Fuck Veterans pop-up in San Diego. Two weeks later, they're inseparable. This is the mission. 🫡❤️"
          comments="View all 312 comments"
          timeAgo="3 days ago"
          tag="🎖️ Operation First Date"
          thumbStyle="bg-gradient-to-br from-[#1a1e16] via-[#2b3020] to-[#1a1a14]"
        />
        <InstagramCard
          username="fuckveterans"
          likes="6,007 likes"
          caption="Two Army veterans found each other through the platform. Now they're co-deploying into marriage. Congrats to Jake & Sasha 🍾🎖️"
          comments="View all 489 comments"
          timeAgo="1 week ago"
          tag="💥 Double Deployment"
          thumbStyle="bg-gradient-to-br from-[#1e1a10] via-[#2e2a1a] to-[#1a1814]"
        />
        <InstagramCard
          username="fuckveterans"
          likes="9,443 likes"
          caption='Navy vet @realmikecm went from 3 deployments to finding love on shore leave. His words: "This is the only mission I actually wanted to sign up for." 🌊💙'
          comments="View all 721 comments"
          timeAgo="2 weeks ago"
          tag="🏆 Mission Complete"
          thumbStyle="bg-gradient-to-br from-[#141814] via-[#222a1a] to-[#1a1a14]"
        />
      </div>
    </section>
  );
}
