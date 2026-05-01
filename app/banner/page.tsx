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
          border: `4px solid ${orange}`,
          boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 28,
            left: 70,
            right: 70,
            height: 2,
            background: orange,
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            background: white,
            padding: '0 24px',
            color: orange,
            fontSize: 38,
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          ♛
        </div>

        <div
          style={{
            position: 'absolute',
            left: 72,
            bottom: 46,
            width: 360,
            height: 180,
            borderLeft: `8px solid ${orange}`,
            opacity: 0.14,
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: 72,
            bottom: 42,
            color: orange,
            fontSize: 18,
            fontWeight: 900,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
          }}
        >
          Remote Healthcare Operations
        </div>

        <div
          style={{
            position: 'absolute',
            left: 520,
            top: 82,
            width: 760,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: 'Georgia, Times New Roman, serif',
              fontSize: 72,
              letterSpacing: '0.02em',
              lineHeight: 0.95,
              color: black,
            }}
          >
            KORI PICKLE
          </h1>

          <div
            style={{
              marginTop: 18,
              width: 250,
              height: 5,
              background: orange,
            }}
          />

          <h2
            style={{
              margin: '20px 0 0',
              fontSize: 34,
              lineHeight: 1.1,
              color: black,
              fontWeight: 900,
            }}
          >
            RCM Workflow Analyst
          </h2>

          <p
            style={{
              margin: '18px 0 0',
              fontSize: 24,
              lineHeight: 1.25,
              color: black,
              fontWeight: 700,
            }}
          >
            Denial Prevention <span style={{ color: orange }}>•</span> Claims Analysis <span style={{ color: orange }}>•</span> Health Informatics
          </p>
        </div>

        <svg
          width="390"
          height="250"
          viewBox="0 0 390 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', right: 74, top: 88 }}
        >
          <path d="M18 126 C72 44, 128 196, 188 112 S305 38, 365 124" stroke={orange} strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M18 180 H92 L123 82 L165 206 L207 128 H262 L291 60 L330 180 H372" stroke={black} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />
          {[18,92,123,165,207,262,291,330,372].map((x, i) => (
            <circle key={i} cx={x} cy={[180,180,82,206,128,128,60,180,180][i]} r="8" fill={orange} stroke={white} strokeWidth="4" />
          ))}
        </svg>

        <div
          style={{
            position: 'absolute',
            right: 76,
            bottom: 40,
            fontSize: 17,
            fontWeight: 800,
            color: black,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Portfolio: kori-rcm-portfolio-3jaz.vercel.app
        </div>
      </section>
    </main>
  );
}
