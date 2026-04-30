const brand = {
  orange: '#FF8200',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#F5F2ED',
};

const projects = [
  {
    title: 'Where Healthcare Workflows Break',
    tag: 'Workflow Analysis',
    problem: 'Denials show up downstream, but the failure usually starts upstream in intake, eligibility, authorization, or documentation.',
    solution: 'Mapped the revenue cycle workflow to identify where validation should happen before the claim is submitted.',
    impact: 'Fewer preventable denials, less rework, cleaner claims, and stronger operational visibility.',
  },
  {
    title: 'Eligibility Failure Analysis',
    tag: 'Front-End Revenue Cycle',
    problem: 'Incorrect insurance data creates avoidable denials, patient confusion, and reimbursement delays.',
    solution: 'Designed front-end validation checkpoints for payer verification, required fields, and pre-submission review.',
    impact: 'Improved first-pass accuracy and reduced eligibility-related denial risk.',
  },
  {
    title: 'Denial Root Cause Report',
    tag: 'Denial Prevention',
    problem: 'Reactive denial management treats symptoms instead of tracing the system conditions that created the denial.',
    solution: 'Grouped denial drivers into root-cause categories and connected them back to upstream workflow breakdowns.',
    impact: 'Created a prevention-focused view of RCM performance instead of a rework-focused process.',
  },
];

const focusAreas = ['Revenue Cycle Management', 'Eligibility Verification', 'Prior Authorization', 'Denial Prevention', 'Workflow Analysis', 'Healthcare Operations'];

export default function Home() {
  return (
    <main style={{ background: brand.white, color: brand.black, fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <section style={{ minHeight: '92vh', padding: '32px 22px 70px', borderTop: `5px solid ${brand.orange}` }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 18, marginBottom: 44 }}>
            <div style={{ height: 1, background: brand.orange, width: 140 }} />
            <div style={{ color: brand.orange, fontSize: 34, lineHeight: 1 }}>♛</div>
            <div style={{ height: 1, background: brand.orange, width: 140 }} />
          </div>

          <p style={{ color: brand.orange, letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 800, fontSize: 13, marginBottom: 20 }}>
            RCM Workflow Portfolio
          </p>

          <h1 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(48px, 8vw, 92px)', lineHeight: 0.95, maxWidth: 980, margin: 0 }}>
            Systems Over Symptoms.
          </h1>

          <p style={{ fontSize: 'clamp(20px, 3vw, 30px)', lineHeight: 1.35, maxWidth: 850, marginTop: 30, fontWeight: 700 }}>
            Fixing revenue cycle breakdowns before they become denials.
          </p>

          <p style={{ fontSize: 18, lineHeight: 1.75, maxWidth: 780, color: '#242424', marginTop: 22 }}>
            I analyze healthcare workflows to identify upstream failures in intake, eligibility, authorization, and documentation that drive downstream denials, delays, rework, and revenue loss.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 34 }}>
            <a href="#projects" style={{ background: brand.orange, color: brand.white, padding: '14px 22px', borderRadius: 999, textDecoration: 'none', fontWeight: 800 }}>
              View Projects
            </a>
            <a href="#contact" style={{ background: brand.white, color: brand.black, padding: '14px 22px', borderRadius: 999, border: `1px solid ${brand.black}`, textDecoration: 'none', fontWeight: 800 }}>
              Contact Kori
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '70px 22px', background: brand.gray }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <p style={{ color: brand.orange, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 800, fontSize: 13 }}>Core Focus</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16, marginTop: 24 }}>
            {focusAreas.map((item) => (
              <div key={item} style={{ background: brand.white, border: '1px solid #DED8CF', padding: 24, borderRadius: 24 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', border: `2px solid ${brand.orange}`, boxShadow: `0 0 18px rgba(255, 130, 0, 0.18)`, marginBottom: 18 }} />
                <h3 style={{ margin: 0, fontSize: 18 }}>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" style={{ padding: '80px 22px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <p style={{ color: brand.orange, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 800, fontSize: 13 }}>Selected Projects</p>
          <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(38px, 6vw, 66px)', margin: '10px 0 34px' }}>
            Proof of RCM Thinking
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
            {projects.map((project) => (
              <article key={project.title} style={{ border: '1px solid #D9D9D9', borderRadius: 28, padding: 28, background: brand.white }}>
                <p style={{ color: brand.orange, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: 12 }}>{project.tag}</p>
                <h3 style={{ fontSize: 26, margin: '10px 0 20px', lineHeight: 1.1 }}>{project.title}</h3>
                <p><strong>Problem:</strong> {project.problem}</p>
                <p><strong>Solution:</strong> {project.solution}</p>
                <p><strong>Impact:</strong> {project.impact}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 22px', background: brand.black, color: brand.white }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <p style={{ color: brand.orange, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 800, fontSize: 13 }}>Framework</p>
          <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(38px, 6vw, 66px)', margin: '10px 0 20px' }}>
            A.C.T.I.V.E.-V™ System
          </h2>
          <p style={{ color: '#E8E8E8', fontSize: 18, lineHeight: 1.75, maxWidth: 820 }}>
            A system-level revenue validation framework focused on failure detection, workflow integrity, pre-bill validation, transparent data, and upstream feedback loops.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 14, marginTop: 28 }}>
            {['Analyze', 'Connect', 'Test', 'Improve', 'Validate'].map((step) => (
              <div key={step} style={{ border: `1px solid ${brand.orange}`, borderRadius: 18, padding: 18, color: brand.orange, fontWeight: 900 }}>{step}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: '80px 22px 50px', textAlign: 'center' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <p style={{ color: brand.orange, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 800, fontSize: 13 }}>Contact</p>
          <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(34px, 5vw, 58px)', margin: '10px 0 18px' }}>
            Open to remote RCM, healthcare operations, and informatics roles.
          </h2>
          <p style={{ color: '#333', fontSize: 18 }}>Created by Kori Pickle</p>
          <p style={{ fontFamily: 'Georgia, Times New Roman, serif', fontStyle: 'italic', fontSize: 34, marginTop: 18 }}>Kori Pickle</p>
          <div style={{ height: 1, background: brand.orange, margin: '32px auto 18px', maxWidth: 520 }} />
          <p style={{ color: '#333' }}>LinkedIn: /in/koripickle &nbsp; | &nbsp; GitHub: koripickle1101-TN</p>
        </div>
      </section>
    </main>
  );
}
