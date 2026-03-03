import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import "../components/global.css"

const ExpertiseCard = ({ icon, iconColor, iconBg, title, description }) => (
  <div className="flex-1 flex flex-col gap-5 p-8 bg-white rounded-2xl border border-border-soft">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}>
      <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        {icon}
      </svg>
    </div>
    <h3 className="font-display text-[22px] text-navy normal-case mt-0">{title}</h3>
    <p className="text-secondary text-[15px] leading-relaxed mt-0">{description}</p>
  </div>
)

const ProjectCard = ({ image, tag, tagColor, tagBg, title, description, link, size = "large" }) => {
  const imgHeight = size === "large" ? "h-[200px]" : "h-[160px]"
  const titleSize = size === "large" ? "text-[22px]" : "text-[19px]"
  const descSize = size === "large" ? "text-sm" : "text-[13px]"
  const padding = size === "large" ? "p-6" : "p-5"
  const gap = size === "large" ? "gap-3" : "gap-2.5"

  return (
    <div className="flex-1 flex flex-col bg-white rounded-2xl border border-border-soft overflow-hidden">
      <div
        className={`w-full ${imgHeight} bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={`flex flex-col ${gap} ${padding}`}>
        <span className={`inline-block self-start px-2.5 py-1 rounded-full text-[11px] font-semibold ${tagColor} ${tagBg}`}>
          {tag}
        </span>
        <h3 className={`font-display ${titleSize} text-navy normal-case mt-0`}>{title}</h3>
        <p className={`${descSize} text-secondary leading-relaxed mt-0`}>{description}</p>
        <a href={link} className="inline-flex items-center gap-1.5 text-primary text-[13px] font-semibold hover:opacity-80 no-underline">
          View Project
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </div>
  )
}

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Rho Lall - AI Product Strategist" />
        <meta property="og:description" content="Product leader and builder turning AI capabilities into real products people use." />
        <meta property="og:url" content="https://rho-lall.github.io" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@rho_Lall" />
        <meta name="twitter:title" content="Rho Lall - AI Product Strategist" />
        <link rel="canonical" href="https://rho-lall.github.io" />
        <meta name="title" content="Rho Lall - AI Product Strategist" />
        <meta name="description" content="Product leader and builder turning AI capabilities into real products people use. From financial tools to community platforms — I bring strategy to life through code." />
        <meta name="author" content="Rho Lall" />
        <title>Rho Lall | AI Product Strategist</title>
      </Helmet>

      <div className="min-h-screen bg-white font-body">

        {/* ── Header ── */}
        <header className="flex items-center justify-between px-8 lg:px-20 py-5 bg-white">
          <Link to="/" className="font-display text-2xl font-bold text-navy tracking-tight no-underline">
            Rho Lall
          </Link>
          <nav className="hidden md:flex items-center gap-9">
            <Link to="/" className="text-[15px] font-medium text-navy no-underline">Home</Link>
            <a href="#projects" className="text-[15px] font-medium text-secondary hover:text-navy no-underline">Projects</a>
            <a href="#about" className="text-[15px] font-medium text-secondary hover:text-navy no-underline">About</a>
            <a
              href="https://rholall.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:opacity-90 no-underline"
            >
              Read the Blog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </nav>
        </header>

        {/* ── Hero Section ── */}
        <section
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-8 lg:px-20 py-16 lg:py-24"
          style={{
            background: 'linear-gradient(to top, #FFFFFF, #E8F9FA)',
          }}
        >
          <div className="flex-1 flex flex-col gap-7">
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary text-[13px] font-semibold tracking-wide">AI Product Strategist</span>
            </div>

            <h1 className="font-display text-4xl lg:text-[52px] text-navy leading-tight lg:leading-[1.15] tracking-tight normal-case mt-0">
              Build Your Legacy.<br />
              Bull Doze Thru the Bull.
            </h1>

            <p className="text-secondary text-lg leading-relaxed max-w-xl mt-0 text-left">
              Product leader and builder turning AI capabilities into real products people use. From financial tools to community platforms — I bring strategy to life through code.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-[15px] font-semibold rounded-full hover:opacity-90 no-underline"
              >
                View Projects
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="https://rholall.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary text-[15px] font-semibold rounded-full hover:bg-primary/5 no-underline"
              >
                Read the Blog
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[520px] h-[360px] lg:h-[520px] rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
            <img
              src={require("../images/bulldozer_snow_00.jpeg").default}
              alt="Bulldozer clearing a path through snow"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ── Wave Divider ── */}
        <div className="w-full">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full block" preserveAspectRatio="none">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#F0FAFA" />
          </svg>
        </div>

        {/* ── Expertise Section ── */}
        <section
          id="about"
          className="flex flex-col items-center gap-12 px-8 lg:px-20 py-20"
          style={{
            background: 'linear-gradient(to top, #FFFFFF, #F0FAFA, #E8F6F7)',
          }}
        >
          <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
            <span className="text-primary text-[13px] font-bold tracking-widest">WHAT I DO</span>
            <h2 className="font-display text-4xl text-navy tracking-tight normal-case mt-0">AI Strategy That Ships</h2>
            <p className="text-secondary text-[17px] leading-relaxed mt-0">
              I bridge the gap between AI capabilities and product outcomes — turning complex technology into tools people actually use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
            <ExpertiseCard
              icon={<><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>}
              iconColor="text-primary"
              iconBg="bg-primary/10"
              title="Leadership in the Age of AI"
              description="One consistent 360-degree view that ports across departments, from marketing to support, so you are all speaking the same language."
            />
            <ExpertiseCard
              icon={<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>}
              iconColor="text-lime-muted"
              iconBg="bg-lime-light"
              title="From Experiments to ROAI"
              description="AI pilots are easy to start but rarely scale. Tie AI projects to KPIs (and ROI) at every maturity stage to make innovation fund itself."
            />
            <ExpertiseCard
              icon={<><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></>}
              iconColor="text-lime-muted"
              iconBg="bg-lime-light"
              title="Data as Capital"
              description="Tools can be copied. Models can be replicated. Your proprietary data — structured from your own workflows — is the only durable competitive moat."
            />
            <ExpertiseCard
              icon={<><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></>}
              iconColor="text-primary"
              iconBg="bg-primary/10"
              title="Products That Ship"
              description="From financial analysis tools to AI-powered education platforms — I build and ship real products that demonstrate strategy in action, not in slide decks."
            />
          </div>
        </section>

        {/* ── Ocean Strip ── */}
        <div className="w-full h-[300px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1440&q=80"
            alt="Ocean"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ── Transformation Section ── */}
        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-8 lg:px-20 py-20 bg-white">
          <div className="flex-1 flex flex-col gap-6">
            <span className="text-primary text-[13px] font-bold tracking-widest">THE JOURNEY</span>
            <h2 className="font-display text-4xl text-navy leading-snug tracking-tight normal-case mt-0">
              From buried in snow to basking on the beach.
            </h2>
            <p className="text-secondary text-base leading-relaxed mt-0 text-left">
              Most organizations are stuck in a blizzard — buried under conflicting dashboards, stalled pilots, and AI confusion. The bulldozer clears the path. On the other side: clarity, control, and confidence. That's the beach.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <svg className="w-[18px] h-[18px] text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M20.79 9.49a2 2 0 0 0-1.23-1.23L12 5.3l-7.56 2.96a2 2 0 0 0-1.23 1.23L.25 17.05a2 2 0 0 0 .54 2.13l5.76 5.76a2 2 0 0 0 2.13.54l7.56-2.96a2 2 0 0 0 1.23-1.23" />
                  </svg>
                </div>
                <span className="text-secondary text-sm font-medium">Buried in data, conflicting KPIs, stalled pilots</span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full bg-lime/25 flex items-center justify-center flex-shrink-0">
                  <svg className="w-[18px] h-[18px] text-lime-muted" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <span className="text-secondary text-sm font-medium">Bulldoze through confusion with strategy and structure</span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-[18px] h-[18px] text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                </div>
                <span className="text-primary text-sm font-medium">Arrive at clarity, control, and confidence. (And maybe an umbrella drink)</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[440px] h-[360px] lg:h-[420px] rounded-2xl overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1621929869838-795c99ee5d14?auto=format&fit=crop&w=1080&q=80"
              alt="Beach transformation"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ── Projects Section ── */}
        <section id="projects" className="flex flex-col items-center gap-12 px-8 lg:px-20 py-20">
          <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
            <span className="text-primary text-[13px] font-bold tracking-widest">PORTFOLIO</span>
            <h2 className="font-display text-4xl text-navy tracking-tight normal-case mt-0">Strategy in Action</h2>
            <p className="text-secondary text-[17px] leading-relaxed mt-0">
              Real products built and shipped. Each project demonstrates a different facet of turning data and AI into tools people use.
            </p>
          </div>

          {/* Top Row - 2 large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
            <ProjectCard
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              tag="Financial AI"
              tagColor="text-primary"
              tagBg="bg-primary/5"
              title="BullDozing the Debt Stack"
              description="AI-powered debt payoff analyzer that extracts data from financial documents and calculates optimal repayment strategies."
              link="https://rho-lall.github.io/credit-analysis/"
              size="large"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              tag="Data Analysis"
              tagColor="text-lime-muted"
              tagBg="bg-lime/10"
              title="Deliver Weeks of Work in Hours"
              description="Interactive financial modeling and analysis toolkit for evaluating investment opportunities and market trends."
              link="https://rho-lall.github.io/financial-analysis/"
              size="large"
            />
          </div>

          {/* Bottom Row - 3 smaller cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            <ProjectCard
              image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
              tag="AI Education"
              tagColor="text-primary"
              tagBg="bg-primary/5"
              title="Building Humanity emPowered by AI"
              description="Helping parents navigate AI in education — practical tools for the age of intelligent technology."
              link="https://bulldozer.life/"
              size="small"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
              tag="Strategy"
              tagColor="text-lime-muted"
              tagBg="bg-lime/10"
              title="Ruthless Clarity On Complex Problems"
              description="Frameworks for CxOs to evaluate AI opportunities, connect pilots to ROI, and build durable competitive advantage."
              link="https://rholall.substack.com/s/ai-product-strategy"
              size="small"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1628551095102-c28b858fc084?auto=format&fit=crop&w=800&q=80"
              tag="Community"
              tagColor="text-lime-muted"
              tagBg="bg-lime/10"
              title="Low Key Data Happy Hour"
              description="A grassroots community of data professionals meeting for casual happy hours across the US. No pitches, just people."
              link="https://lowkeydatahappyhour.com/"
              size="small"
            />
          </div>
        </section>

        {/* ── Ocean Strip 2 ── */}
        <div className="w-full h-[200px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1440&q=80"
            alt="Ocean waves"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ── CTA Section ── */}
        <section className="relative w-full bg-navy overflow-hidden" style={{ minHeight: '600px' }}>
          <div
            className="absolute inset-0 opacity-[0.12] bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1440&q=80')`,
            }}
          />
          <div
            className="relative z-10 flex flex-col items-center justify-center gap-8 px-8 lg:px-20 py-20"
            style={{ backgroundColor: '#1A1A2ED8', minHeight: '600px' }}
          >
            <div className="w-full max-w-lg h-1 rounded-sm" style={{ background: 'linear-gradient(90deg, #50CFD8, #D0EA3C)' }} />
            <span className="text-primary text-[13px] font-bold tracking-widest">THE BLOG</span>
            <h2 className="font-display text-3xl lg:text-[44px] text-white text-center tracking-tight normal-case mt-0">
              AI Confusion to Business Clarity
            </h2>
            <p className="text-[#A0AEC0] text-lg leading-relaxed text-center max-w-xl mt-0">
              Frameworks, case studies, and strategic thinking for leaders navigating AI — written for executives who want clarity, not hype.
            </p>
            <a
              href="https://rholall.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-10 py-4 bg-primary text-white text-base font-semibold rounded-full hover:opacity-90 no-underline"
            >
              Read on Substack
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <span className="text-secondary text-[13px]">Free to read. No spam. Unsubscribe anytime.</span>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="flex flex-col gap-8 px-8 lg:px-20 py-12 bg-navy-dark">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="flex flex-col gap-3 max-w-xs">
              <span className="font-display text-[22px] font-bold text-white">Rho Lall</span>
              <p className="text-gray-500 text-sm leading-relaxed mt-0">
                AI Product Strategist. Builder. Shipping strategy through code.
              </p>
            </div>

            <div className="flex gap-16">
              <div className="flex flex-col gap-3">
                <span className="text-white text-[13px] font-semibold">Projects</span>
                <a href="https://rho-lall.github.io/credit-analysis/" className="text-gray-500 text-[13px] hover:text-gray-300 no-underline">Bulldozer</a>
                <a href="https://rho-lall.github.io/financial-analysis/" className="text-gray-500 text-[13px] hover:text-gray-300 no-underline">Financial Analysis</a>
                <a href="https://bulldozer.life/" className="text-gray-500 text-[13px] hover:text-gray-300 no-underline">AI emPowered</a>
                <a href="https://rholall.substack.com/s/ai-product-strategy" className="text-gray-500 text-[13px] hover:text-gray-300 no-underline">AI Product Strategy</a>
                <a href="https://lowkeydatahappyhour.com/" className="text-gray-500 text-[13px] hover:text-gray-300 no-underline">Data Happy Hour</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-white text-[13px] font-semibold">Connect</span>
                <a href="https://rholall.substack.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-[13px] hover:text-gray-300 no-underline">Substack</a>
                <a href="https://github.com/rho-lall" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-[13px] hover:text-gray-300 no-underline">GitHub</a>
                <a href="https://linkedin.com/in/rholall" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-[13px] hover:text-gray-300 no-underline">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#1E1E2E]" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <span className="text-gray-500 text-xs">&copy; 2025 Rho Lall. All rights reserved.</span>
            <span className="text-gray-500 text-xs">Built with purpose.</span>
          </div>
        </footer>

      </div>
    </>
  )
}

export default IndexPage
