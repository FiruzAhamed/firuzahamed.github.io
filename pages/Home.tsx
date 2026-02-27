import {
  MapPin,
  Download,
  ExternalLink,
  BookOpen,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Zap,
  Sun,
  Leaf,
  BarChart3,
  Brain,
  Building2,
} from 'lucide-react';

const researchInterests = [
  { icon: BarChart3, label: 'Energy System Modeling' },
  { icon: Sun, label: 'Renewable Energy Integration' },
  { icon: Leaf, label: 'Sustainable Energy Transition' },
  { icon: Zap, label: 'Power Sector Decarbonization' },
  { icon: Lightbulb, label: 'Strategic Demand & Supply-side Planning' },
  { icon: Building2, label: 'Socio-economic Impact of Energy Transition' },
  { icon: Brain, label: 'AI Application in Power System' },
];

const education = [
  {
    degree: 'Doctor of Philosophy (PhD)',
    field: 'Energy — Sustainable Energy Transition',
    year: '2023',
    school: 'Asian Institute of Technology (AIT)',
    location: 'Pathum Thani, Thailand',
  },
  {
    degree: 'Master of Engineering',
    field: 'Energy — Electric Power System Management',
    year: '2019',
    school: 'Asian Institute of Technology (AIT)',
    location: 'Pathum Thani, Thailand',
  },
  {
    degree: 'Bachelor of Science',
    field: 'Electrical & Electronic Engineering',
    year: '2015',
    school: 'International University of Business Agriculture and Technology (IUBAT)',
    location: 'Dhaka, Bangladesh',
  },
];

const employments = [
  {
    title: 'Postdoctoral Researcher',
    org: 'SMARTS Center, Asian Institute of Technology (AIT)',
    orgUrl: 'https://smartscenter.ait.ac.th/smarts-people',
    location: 'Thailand',
    period: 'September 2023 – Present',
    current: true,
  },
  {
    title: 'Senior Lecturer',
    org: 'International University of Business Agriculture and Technology (IUBAT)',
    orgUrl: 'https://eee.iubat.edu/faculty/#',
    location: 'Dhaka, Bangladesh',
    period: 'May 2019 – December 2019',
    current: false,
  },
  {
    title: 'Lecturer',
    org: 'IUBAT',
    orgUrl: '',
    location: 'Dhaka, Bangladesh',
    period: 'May 2016 – August 2017',
    current: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent-400 blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-accent-500 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-300 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Islamic Greeting */}
          <div className="text-center mb-12 animate-fade-in">
            <p className="text-2xl sm:text-3xl lg:text-4xl mb-2" style={{ fontFamily: "'Amiri', serif" }} dir="rtl">
              السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </p>
            <p className="text-navy-300 text-sm sm:text-base italic font-light">
              May the peace, mercy, and blessings of Allah be with you
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Profile Image */}
            <div className="flex-shrink-0 animate-slide-left">
              <div className="relative">
                <div className="w-52 h-52 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 p-1">
                  <div className="w-full h-full rounded-full bg-navy-800 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-navy-600 to-navy-700 flex items-center justify-center">
                      <span className="text-5xl lg:text-6xl font-bold text-white/80">FN</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  Postdoc
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center lg:text-left animate-slide-right">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
                Dr. Firuz Ahamed Nahid
              </h1>
              <p className="text-accent-400 text-lg sm:text-xl font-medium mb-2">
                Postdoctoral Researcher
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-navy-300 text-sm mb-6">
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  <a href="https://smartscenter.ait.ac.th/smarts-people" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">
                    SMARTS Center
                  </a>
                </span>
                <span className="hidden sm:inline text-navy-600">•</span>
                <span>
                  <a href="https://ait.ac.th/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">
                    Asian Institute of Technology
                  </a>
                </span>
                <span className="hidden sm:inline text-navy-600">•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Thailand
                </span>
              </div>

              {/* Buttons Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href="https://scholar.google.com/citations?user=uqPruO4AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  <BookOpen className="w-4 h-4" />
                  Google Scholar
                </a>
                <a
                  href="https://orcid.org/0000-0002-2531-7640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  ORCID
                </a>
                <a
                  href="https://www.linkedin.com/in/firuz-ahamed-nahid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://drive.google.com/file/d/1MhwsQjiBZ3u7UQu06c7LWM1iPKeAQaxm/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-600 hover:bg-accent-700 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-accent-600/20"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-2">About</h2>
          <div className="section-divider mb-6" />
          <p className="text-navy-700 text-base lg:text-lg leading-relaxed mb-5" style={{ fontFamily: "var(--font-serif)" }}>
            Dr. Firuz Ahamed Nahid is a researcher in the field of energy systems. His research area focuses on power sector decarbonization, including modeling of the electricity sector, developing national and regional-scale power sector scenarios, integrating demand-side solutions in the power system, assessing the socio-economic impacts of power sector transition, and developing open-source power sector models. Particularly, he works on power sector decarbonization in the developing Asian region. He is from Bangladesh and currently based in Thailand, where he works as a postdoctoral researcher at the SMARTS Center, Asian Institute of Technology.
          </p>
          <p className="text-navy-700 text-base lg:text-lg leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
            His research has been published in various peer-reviewed Scopus and SCI indexed journals in the energy sector, such as{' '}
            <a href="https://www.sciencedirect.com/journal/energy-strategy-reviews" target="_blank" rel="noopener noreferrer" className="text-accent-700 hover:text-accent-800 underline decoration-accent-300 underline-offset-2">Energy Strategy Reviews</a>,{' '}
            <a href="https://www.sciencedirect.com/journal/renewable-energy-focus" target="_blank" rel="noopener noreferrer" className="text-accent-700 hover:text-accent-800 underline decoration-accent-300 underline-offset-2">Renewable Energy Focus</a>,{' '}
            <a href="https://www.sciencedirect.com/journal/energy-for-sustainable-development" target="_blank" rel="noopener noreferrer" className="text-accent-700 hover:text-accent-800 underline decoration-accent-300 underline-offset-2">Energy for Sustainable Development</a>,{' '}
            <a href="https://www.springer.com/journal/12667" target="_blank" rel="noopener noreferrer" className="text-accent-700 hover:text-accent-800 underline decoration-accent-300 underline-offset-2">Energy Systems</a>,{' '}
            <a href="https://www.springer.com/journal/202" target="_blank" rel="noopener noreferrer" className="text-accent-700 hover:text-accent-800 underline decoration-accent-300 underline-offset-2">Electrical Engineering</a>, and{' '}
            <a href="https://link.springer.com/journal/13369" target="_blank" rel="noopener noreferrer" className="text-accent-700 hover:text-accent-800 underline decoration-accent-300 underline-offset-2">Arabian Journal for Science and Engineering</a>.
            He also contributes and publishes in peer-reviewed{' '}
            <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noopener noreferrer" className="text-accent-700 hover:text-accent-800 underline decoration-accent-300 underline-offset-2">conferences</a>.
            He regularly participates in international workshops, seminars, lectures, and conferences.
          </p>
        </div>
      </section>

      {/* Research Interests */}
      <section className="bg-white border-y border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-2">Research Interests</h2>
          <div className="section-divider mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {researchInterests.map((item, i) => (
              <div
                key={i}
                className="research-tag flex items-center gap-3 p-4 rounded-xl border border-navy-100 bg-gradient-to-br from-white to-navy-50/50 hover:border-accent-200 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent-600" />
                </div>
                <span className="text-sm font-medium text-navy-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-2 flex items-center gap-3">
          <GraduationCap className="w-7 h-7 text-accent-600" />
          Education
        </h2>
        <div className="section-divider mb-8" />
        <div className="space-y-0">
          {education.map((edu, i) => (
            <div key={i} className="relative pl-8 pb-8 last:pb-0 group">
              {/* Timeline line */}
              {i < education.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-navy-200 group-hover:bg-accent-200 transition-colors" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-navy-300 bg-white group-hover:border-accent-500 transition-colors flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-navy-400 group-hover:bg-accent-500 transition-colors" />
              </div>
              <div className="bg-white rounded-xl border border-navy-100 p-5 hover:shadow-md hover:border-navy-200 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-navy-900">{edu.degree}</h3>
                  <span className="text-xs font-medium text-accent-700 bg-accent-50 px-2.5 py-1 rounded-full">{edu.year}</span>
                </div>
                <p className="text-sm text-navy-600 mb-1">{edu.field}</p>
                <p className="text-sm text-navy-500">{edu.school}, {edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Employments */}
      <section className="bg-white border-y border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-2 flex items-center gap-3">
            <Briefcase className="w-7 h-7 text-accent-600" />
            Key Employments
          </h2>
          <div className="section-divider mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {employments.map((emp, i) => (
              <div
                key={i}
                className={`relative rounded-xl border p-6 transition-all hover:shadow-lg ${
                  emp.current
                    ? 'border-accent-200 bg-gradient-to-br from-accent-50/50 to-white'
                    : 'border-navy-100 bg-white'
                }`}
              >
                {emp.current && (
                  <span className="absolute -top-2.5 right-4 text-xs font-semibold text-white bg-accent-500 px-3 py-0.5 rounded-full">
                    Current
                  </span>
                )}
                <h3 className="font-semibold text-navy-900 mb-1">{emp.title}</h3>
                {emp.orgUrl ? (
                  <a
                    href={emp.orgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-700 hover:text-accent-800 underline decoration-accent-200 underline-offset-2"
                  >
                    {emp.org}
                  </a>
                ) : (
                  <p className="text-sm text-navy-600">{emp.org}</p>
                )}
                <div className="flex items-center gap-1 mt-3 text-xs text-navy-500">
                  <MapPin className="w-3 h-3" />
                  {emp.location}
                </div>
                <p className="text-xs text-navy-400 mt-1">{emp.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
