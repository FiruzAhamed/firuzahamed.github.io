import {
  Globe2,
  BarChart3,
  Scale,
  Sun,
  Zap,
  FileSearch,
  ArrowRight,
  Target,
  Users,
  Lightbulb,
} from 'lucide-react';

const focusAreas = [
  {
    icon: BarChart3,
    title: 'Power System Modeling',
    desc: 'Long-term scenario planning, renewable integration, and system reliability analysis.',
  },
  {
    icon: Scale,
    title: 'Energy Equity & Just Transition',
    desc: 'Affordability, access, fairness, and distributional impacts of energy transitions.',
  },
  {
    icon: Sun,
    title: 'Renewable Energy Integration',
    desc: 'Solar, wind, storage, and emerging grid solutions for developing economies.',
  },
  {
    icon: Zap,
    title: 'Demand-Side & Cross-Sector Pathways',
    desc: 'Electrification, efficiency, and behavioral transitions across sectors.',
  },
  {
    icon: FileSearch,
    title: 'Policy Analysis & Strategic Planning',
    desc: 'Evidence-based insights for national climate and energy strategies.',
  },
];

export default function Lab() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-accent-400 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-accent-500 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <Globe2 className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium text-navy-200">Research Lab</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Energy Equity And Transition
            <br />
            <span className="text-accent-400">For The Global South</span>
          </h1>
          <p className="text-lg text-navy-200 font-medium mb-2">EET-GS LAB</p>
          <div className="w-16 h-1 bg-accent-500 rounded-full mx-auto" />
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-2">Our Mission</h2>
            <div className="section-divider mb-6" />
            <div className="space-y-4 text-navy-700 leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
              <p>
                The <strong className="text-navy-900">EET-GS Lab</strong> is a global research initiative dedicated to advancing equitable, sustainable, and scientifically rigorous pathways for the energy transition across the Global South. Our mission is to generate knowledge, tools, and evidence that support emerging economies as they move toward clean, affordable, and resilient power systems — without compromising developmental priorities.
              </p>
              <p>
                A core focus of the Lab is ensuring that energy transitions are <strong className="text-navy-900">fair and just</strong>. We examine how shifts in the power sector affect different social groups, identifying who benefits, who may be left behind, and what policies are needed to safeguard vulnerable communities. Our work integrates perspectives on energy equity, distributional justice and socio-economic impacts, ensuring that decarbonization strategies enhance livelihoods, improve access, and contribute to inclusive development across the Global South.
              </p>
              <p>
                The Lab brings together researchers, practitioners, and collaborators across the globe. Through interdisciplinary work, we explore how equitable policies, system modeling, and low-carbon technologies can shape a more just and sustainable energy future.
              </p>
            </div>
          </div>

          {/* Key values sidebar */}
          <div className="space-y-4">
            {[
              { icon: Target, title: 'Equitable Transitions', text: 'Ensuring no community is left behind in the energy shift.' },
              { icon: Users, title: 'Global Collaboration', text: 'Researchers and practitioners from around the world.' },
              { icon: Lightbulb, title: 'Evidence-Based', text: 'Rigorous science driving policy recommendations.' },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-xl border border-navy-100 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-accent-600" />
                  </div>
                  <h3 className="font-semibold text-navy-900 text-sm">{v.title}</h3>
                </div>
                <p className="text-xs text-navy-500 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="bg-white border-y border-navy-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-2">Research Focus Areas</h2>
          <div className="section-divider mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {focusAreas.map((area, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white to-navy-50/40 rounded-xl border border-navy-100 p-6 hover:border-accent-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-50 group-hover:bg-accent-100 flex items-center justify-center mb-4 transition-colors">
                  <area.icon className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{area.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Interested in Collaboration?</h2>
          <p className="text-navy-300 text-lg mb-6 max-w-xl mx-auto">
            We welcome researchers, practitioners, and collaborators working on energy equity and sustainable transitions in the Global South.
          </p>
          <a
            href="https://www.linkedin.com/in/firuz-ahamed-nahid/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 rounded-lg font-semibold transition-all shadow-lg shadow-accent-600/20"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
