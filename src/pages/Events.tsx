import { Calendar, MapPin, Award, Mic, Users } from 'lucide-react';

interface EventData {
  title: string;
  date: string;
  location: string;
  role: string;
  roleIcon: React.ElementType;
  description: React.ReactNode;
  highlights?: string[];
}

const events: EventData[] = [
  {
    title: 'EDITS Webinar #11 – Integrating Demand-side Solutions for Accelerated Decarbonization',
    date: 'November 5, 2025',
    location: 'Online',
    role: 'Invited Speaker',
    roleIcon: Mic,
    description: (
      <>
        Invited as a <strong>speaker</strong> at the EDITS Webinar #11 on "Integrating Demand-side Solutions for Accelerated Decarbonization of the Power Supply System: Insights from Bangladesh and Thailand." The webinar was moderated by Jubair Sieed (RITE, Japan) and organized under the Energy Demand changes Induced by Technological and Social innovations (EDITS) project.
      </>
    ),
  },
  {
    title: 'International Workshop on Asian Perspectives in Integrated Assessment Modeling – AIT, Thailand',
    date: 'September 18–19, 2025',
    location: 'AIT, Bangkok',
    role: 'Presenter',
    roleIcon: Mic,
    description: (
      <>
        Participated in the International Workshop on Asian Perspectives in Integrated Assessment Modeling, jointly organized by AIT and Yonsei University, South Korea.
      </>
    ),
    highlights: [
      '"Energy Sector Modeling: A Review of Models and Low-Carbon Technologies in South and Southeast Asia"',
      '"Integrating Demand-side Solutions for Accelerated Decarbonization of The Power Supply System"',
    ],
  },
  {
    title: 'Energy Evaluation Asia Pacific Webinar Series #21',
    date: 'September 11, 2025',
    location: 'Online',
    role: 'Invited Speaker',
    roleIcon: Mic,
    description: (
      <>
        Invited as a speaker in the Energy Evaluation Asia Pacific Webinar Series #21, themed "Industrial Energy Transitions in South Asia: Policies, Impacts, and Future Pathways." Talk titled "Industrial Energy Efficiency in Bangladesh: Assessing the Journey and Looking Ahead."
      </>
    ),
  },
  {
    title: 'International Energy Workshop 2025 – Nara, Japan',
    date: 'June 10–13, 2025',
    location: 'Nara, Japan',
    role: 'Presenter',
    roleIcon: Mic,
    description: (
      <>
        Presented research titled "PyPSA-BD For Strategic Power Sector Planning In Bangladesh With Gradual Renewable Energy Penetration, End-use Enhanced Efficiency And Demand-side Flexibility." The presentation outlined Bangladesh's current power sector status and introduced an open-source national energy model. Results show that combining efficiency improvements and demand-side flexibility with renewable expansion reduces overreliance on large-scale RE deployment, lowers financial and land burdens, and enables Bangladesh to progress more efficiently toward a carbon-neutral power system.
      </>
    ),
  },
  {
    title: 'International Training Course on Energy Policy and Regulatory Framework – AIT',
    date: 'March 17–19, 2025',
    location: 'AIT, Thailand',
    role: 'Resource Person',
    roleIcon: Users,
    description: (
      <>
        Served as a resource person in an international training course on "Energy, Policy, Act and Regulatory Framework Development." Participants included officials from the Department of Energy, Ministry of Energy and Natural Resources, Bhutan. Delivered sessions on sustainable energy transitions, regulatory frameworks, stakeholder engagement, and socio-economic dimensions of energy planning.
      </>
    ),
  },
  {
    title: 'ADB Youth Capacity Workshop – Bangkok',
    date: 'February 27–28, 2025',
    location: 'Bangkok, Thailand',
    role: '🏆 Winner Team Leader',
    roleIcon: Award,
    description: (
      <>
        Led the <strong>winner team</strong> at the ADB Youth Capacity Workshop on Developing Youth Solutions for Urban Climate Resilience. Our team developed <strong>Eco-Cooler</strong> — a low-cost, nature-based cooling solution designed to help outdoor workers cope with extreme heat conditions. The project received <strong>first place</strong> among all participating teams.
      </>
    ),
  },
  {
    title: 'EDITS 2024 Annual Meeting – IIASA, Laxenburg, Austria',
    date: '2024',
    location: 'IIASA, Austria',
    role: 'Participant',
    roleIcon: Users,
    description: (
      <>
        Attended the EDITS 2024 Annual Meeting at IIASA, Austria. The conference focused on global demand-side energy solutions and contributions toward the upcoming IPCC AR7 report. The event provided opportunities for collaboration and dialogue on decarbonization pathways, energy demand modeling, and sustainable development.
      </>
    ),
  },
  {
    title: 'ICUE 2024 – Pattaya City, Thailand',
    date: 'October 21–23, 2024',
    location: 'Pattaya City, Thailand',
    role: 'Oral Presenter',
    roleIcon: Mic,
    description: (
      <>
        Delivered an oral presentation on "PyPSA-BD: An Open-source Model for Planning Sustainable Power Sector for Bangladesh" at the International Conference on Sustainable Energy (ICUE 2024) themed "Energy Transition and Net-Zero Climate Future." Key results demonstrated how PyPSA-BD uses granular local datasets to optimize investments in solar, wind, storage, and transmission, and shows how Bangladesh can feasibly reach a near-zero-carbon power system by 2050.
      </>
    ),
  },
];

function getRoleColor(role: string) {
  if (role.includes('Winner')) return 'bg-amber-50 text-amber-700 border-amber-200';
  if (role.includes('Speaker') || role.includes('Presenter')) return 'bg-accent-50 text-accent-700 border-accent-200';
  if (role.includes('Resource')) return 'bg-blue-50 text-blue-700 border-blue-200';
  return 'bg-navy-50 text-navy-600 border-navy-200';
}

export default function Events() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Events & Presentations</h1>
          <p className="text-navy-300 text-lg max-w-2xl">
            International conferences, workshops, webinars, and training programs attended and presented at.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="space-y-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="event-card bg-white rounded-2xl border border-navy-100 overflow-hidden shadow-sm"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-navy-50 to-white px-6 py-4 border-b border-navy-100">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 className="text-lg font-bold text-navy-900 flex-1 min-w-0">
                    {event.title}
                  </h2>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border flex-shrink-0 ${getRoleColor(event.role)}`}>
                    <event.roleIcon className="w-3.5 h-3.5" />
                    {event.role}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-navy-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {event.location}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="px-6 py-5">
                <p className="text-navy-700 text-sm leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
                  {event.description}
                </p>
                {event.highlights && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-2">Presentations Delivered</p>
                    <ul className="space-y-1.5">
                      {event.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-navy-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                          <em>{h}</em>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
