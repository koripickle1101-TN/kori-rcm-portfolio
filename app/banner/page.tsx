const orange = '#FF8200';
const black = '#000000';
const white = '#FFFFFF';
const warmGray = '#F5F2ED';

export const metadata = {
  title: 'Kori Pickle | LinkedIn Banner',
  description: 'LinkedIn banner asset for Kori Pickle using white, black, and Vols Orange brand identity.',
};

export default function BannerPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: warmGray,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <section
        style={{
          width: 1584,
          height: 396,
          background: white,
          color: black,
          position: 'relative',
          overflow: 'hidden',
          borderTop: `6px solid ${orange}`,
          borderBottom: `6px solid ${orange}`,
          boxShadow: '0 20px 60px rgba(0,0,0,0.10)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 82% 50%, rgba(255,130,0,0.10), transparent 34%)' }} />

        <div style={{ position: 'absolute', top: 28, left: 84, right: 84, height: 2, background: orange }} />
        <div
          style={{
            position: 'absolute',
            top: 7,
            left: '50%',
            transform: 'translateX(-50%)',
            background: white,
            padding: '0 28px',
            color: orange,
            fontSize: 42,
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          ♛
        </div>

        <div
          style={{
            position: 'absolute',
            left: 54,
            bottom: 30,
            width: 330,
            height: 170,
            border: `2px solid rgba(255,130,0,0.20)`,
            borderRadius: 28,
            background: 'rgba(255,130,0,0.035)',
          }}
        />
        <div style={{ position: 'absolute', left: 88, bottom: 56, color: orange, fontSize: 17, fontWeight: 900, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          Remote Healthcare
        </div>
        <div style={{ position: 'absolute', left: 88, bottom: 30, color: black, fontSize: 17, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
          Knoxville, TN
        </div>

        <div style={{ position: 'absolute', left: 438, top: 84, width: 760 }}>
          <h1
            style={{
              margin: 0,
              fontFamily: 'Georgia, Times New Roman, serif',
              fontSize: 78,
              letterSpacing: '0.02em',
              lineHeight: 0.92,
              color: black,
            }}
          >
            KORI PICKLE
          </h1>
          <div style={{ marginTop: 18, width: 290, height: 5, background: orange }} />
          <h2 style={{ margin: '20px 0 0', fontSize: 34, lineHeight: 1.05, color: black, fontWeight: 900 }}>
            RCM Workflow Analyst
          </h2>
          <p style={{ margin: '16px 0 0', fontSize: 24, lineHeight: 1.25, color: black, fontWeight: 700 }}>
            Denial Prevention <span style={{ color: orange }}>•</span> Claims Analysis <span style={{ color: orange }}>•</span> Health Informatics
          </p>
          <p style={{ margin: '18px 0 0', fontSize: 18, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#222', fontWeight: 800 }}>
            Portfolio: kori-rcm-portfolio-3jaz.vercel.app
          </p>
        </div>

        <svg width="330" height="230" viewBox="0 0 330 230" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', right: 74, top: 92 }}>
          <path d="M20 118 C62 52, 116 180, 168 106 S258 48, 312 118" stroke={orange} strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M22 168 H78 L104 84 L140 198 L180 124 H224 L252 66 L282 168 H312" stroke={black} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.92" />
          {[22,78,104,140,180,224,252,282,312].map((x, i) => (
            <circle key={i} cx={x} cy={[168,168,84,198,124,124,66,168,168][i]} r="7" fill={orange} stroke={white} strokeWidth="4" />
          ))}
        </svg>
      </section>
    </main>
  );
}
