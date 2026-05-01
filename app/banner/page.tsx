const orange = '#FF8200';
const black = '#000000';
const white = '#FFFFFF';
const gray = '#F7F4EF';

export const metadata = {
  title: 'Kori Pickle | LinkedIn Banner',
  description: 'Full-size LinkedIn banner for Kori Pickle using white, black, and Vols Orange brand identity.',
};

function Crown() {
  return (
    <svg width="92" height="62" viewBox="0 0 92 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 52H79" stroke={orange} strokeWidth="7" strokeLinecap="round" />
      <path d="M17 48L24 18L39 37L46 10L53 37L68 18L75 48H17Z" fill={orange} />
      <circle cx="24" cy="15" r="6" fill={orange} />
      <circle cx="46" cy="8" r="6" fill={orange} />
      <circle cx="68" cy="15" r="6" fill={orange} />
    </svg>
  );
}

export default function BannerPage() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh',
        minHeight: 396,
        background: white,
        overflow: 'hidden',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <section
        style={{
          width: '100vw',
          height: '100vh',
          minHeight: 396,
          background: white,
          color: black,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, ${white} 0%, ${white} 58%, ${gray} 100%)` }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 10, background: orange }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 10, background: orange }} />

        <div style={{ position: 'absolute', top: 34, left: 88, right: 88, height: 3, background: orange }} />
        <div style={{ position: 'absolute', top: 5, left: '50%', transform: 'translateX(-50%)', background: white, padding: '0 34px' }}>
          <Crown />
        </div>

        <div style={{ position: 'absolute', left: 78, bottom: 44, width: 315, height: 155, borderLeft: `10px solid ${orange}`, background: 'rgba(255,130,0,0.055)' }} />
        <div style={{ position: 'absolute', left: 112, bottom: 96, color: orange, fontSize: 28, fontWeight: 950, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          Remote Healthcare
        </div>
        <div style={{ position: 'absolute', left: 112, bottom: 58, color: black, fontSize: 24, fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Knoxville, TN
        </div>

        <div style={{ position: 'absolute', left: '33vw', top: '24vh', width: '48vw', zIndex: 2 }}>
          <h1 style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(70px, 7vw, 122px)', letterSpacing: '0.025em', lineHeight: 0.88, color: black }}>
            KORI PICKLE
          </h1>
          <div style={{ marginTop: 24, width: 360, height: 8, background: orange }} />
          <h2 style={{ margin: '26px 0 0', fontSize: 'clamp(38px, 3.4vw, 58px)', lineHeight: 1.0, color: black, fontWeight: 950 }}>
            RCM Workflow Analyst
          </h2>
          <p style={{ margin: '20px 0 0', fontSize: 'clamp(24px, 2vw, 34px)', lineHeight: 1.18, color: black, fontWeight: 800 }}>
            Denial Prevention <span style={{ color: orange }}>•</span> Claims Analysis <span style={{ color: orange }}>•</span> Health Informatics
          </p>
        </div>

        <svg width="26vw" height="56vh" viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', right: '4vw', top: '22vh', zIndex: 1 }}>
          <path d="M25 128 C82 42, 142 205, 205 113 S323 35, 395 126" stroke={orange} strokeWidth="7" strokeLinecap="round" fill="none" />
          <path d="M26 190 H98 L130 78 L174 222 L222 138 H282 L314 62 L352 190 H398" stroke={black} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.92" />
          {[26,98,130,174,222,282,314,352,398].map((x, i) => (
            <circle key={i} cx={x} cy={[190,190,78,222,138,138,62,190,190][i]} r="10" fill={orange} stroke={white} strokeWidth="5" />
          ))}
        </svg>

        <div style={{ position: 'absolute', right: 88, bottom: 48, fontSize: 22, fontWeight: 900, color: black, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Portfolio: kori-rcm-portfolio-3jaz.vercel.app
        </div>
      </section>
    </main>
  );
}
