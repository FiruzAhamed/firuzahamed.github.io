import { BookOpen, FileText, BookMarked, Clock, PenTool, ExternalLink } from 'lucide-react';

interface PubProps {
  text: React.ReactNode;
  doi?: string;
}

function PubEntry({ text, doi }: PubProps) {
  return (
    <div className="pub-item rounded-lg px-5 py-4 mb-2">
      <p className="text-navy-700 text-[15px] leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
        {text}
      </p>
      {doi && (
        <a
          href={doi}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-accent-600 hover:text-accent-800 transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          {doi}
        </a>
      )}
    </div>
  );
}

function SectionHeader({ icon: Icon, title, count }: { icon: React.ElementType; title: string; count?: number }) {
  return (
    <div className="flex items-center gap-3 mb-6 mt-12 first:mt-0">
      <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <h2 className="text-xl lg:text-2xl font-bold text-navy-900">{title}</h2>
          {count !== undefined && (
            <span className="text-xs font-semibold text-accent-700 bg-accent-50 px-2.5 py-0.5 rounded-full">{count}</span>
          )}
        </div>
        <div className="mt-1 h-px bg-gradient-to-r from-navy-200 to-transparent" />
      </div>
    </div>
  );
}

function B({ children }: { children: React.ReactNode }) {
  return <strong className="text-navy-900">{children}</strong>;
}
function E({ children }: { children: React.ReactNode }) {
  return <em className="text-navy-600">{children}</em>;
}

export default function Publications() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Publications</h1>
          <p className="text-navy-300 text-lg max-w-2xl">
            Peer-reviewed research in energy systems, power sector decarbonization, and sustainable transitions.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* Journal Articles */}
        <SectionHeader icon={BookOpen} title="Journal Articles" count={10} />

        <PubEntry
          text={<><B>Nahid, F.A.</B>, Roy, J., Ongsakul, W. (2025). National scale electricity sector model to strategize national clean energy transition. <E>Energy Strategy Reviews</E>.</>}
          doi="https://doi.org/10.1016/j.esr.2025.101868"
        />
        <PubEntry
          text={<><B>Nahid, F.A.</B>, Ongsakul, W., Singh, J.G., &amp; Roy, J. (2025). Forecasting and Optimal Scheduling of Electric Vehicle Charging Demand: A Cluster and Decomposition-Based Optimized Hybrid Approach. <E>Arabian Journal for Science and Engineering</E>.</>}
          doi="https://doi.org/10.1007/s13369-025-10559-2"
        />
        <PubEntry
          text={<><B>Nahid, F.A.</B>, &amp; Roy, J. (2025). PyPSA-BD: A customized model to explore decarbonized energy transition for developing country. <E>Renewable Energy Focus</E>, 100655.</>}
          doi="https://doi.org/10.1016/j.ref.2024.100655"
        />
        <PubEntry
          text={<><B>Nahid, F.A.</B>, Ongsakul, W., Singh, J.G. et al. (2024). Short-term customer-centric electric load forecasting for low carbon microgrids using a hybrid model. <E>Energy Systems</E>.</>}
          doi="https://doi.org/10.1007/s12667-024-00704-5"
        />
        <PubEntry
          text={<><B>Nahid, F.A.</B>, Ongsakul, W., Manjiparambil, N.M., Singh, J.G., Roy, J. (2023). Mode decomposition-based short-term multi-step hybrid solar forecasting model for microgrid applications. <E>Electrical Engineering</E>.</>}
          doi="https://doi.org/10.1007/s00202-023-02138-1"
        />
        <PubEntry
          text={<><B>Nahid, F.A.</B>, Ongsakul, W., &amp; Manjiparambil, N.M. (2023). Short-term multi-step wind speed forecasting for carbon neutral microgrid by a decomposition-based hybrid model. <E>Energy for Sustainable Development</E>, 73, 87–100.</>}
          doi="https://doi.org/10.1016/j.esd.2023.01.016"
        />
        <PubEntry
          text={<><B>Nahid, F.A.</B>, Chowdhury, H.M., &amp; Jahangir, M.N. (2019). Solar Radiation Forecasting Using Hybrid Convolutional Long Short-Term Memory Neural Network. <E>Journal of Research in Physics and Applied Sciences</E>, 2(2), 1–13.</>}
          doi="https://doi.org/10.5281/zenodo.3768721"
        />
        <PubEntry
          text={<><B>Nahid, F.A.</B>, Alam, M.J., &amp; Akter, K. (2019). Multi Step Ahead Wind Speed Forecasting Using Long Short-Term Memory Recurrent Neural Network. <E>IUBAT Review</E>, 2(1), 31–40.</>}
          doi="https://iubat.edu/journal"
        />
        <PubEntry
          text={<>Akter, K., <B>Nahid, F.A.</B>, &amp; Islam, N. (2019). Open Loop Analysis of a High-Performance Input Switched Single Phase AC-DC Boost Converter. <E>Journal of Electrical and Electronics Engineering</E>, 6(7), 6–11.</>}
          doi="https://doi.org/10.14445/23488379/IJEEE-V6I7P102"
        />
        <PubEntry
          text={<>Alam, M.J., <B>Nahid, F.A.</B>, &amp; Islam, M.T. (2019). Design of a Broad Band–Stop Filter with Metamaterial as Defective Ground System. <E>IUBAT Review</E>, 2(1), 41–48.</>}
          doi="https://iubat.edu/journal"
        />

        {/* Conference Papers */}
        <SectionHeader icon={FileText} title="Conference Papers" count={4} />

        <PubEntry
          text={<><B>Nahid, F.A.</B>, Roy, J., Barua, A. &amp; Ongsakul, W. (2024). "PyPSA-BD: An Open-Source Model for Planning Sustainable Power Sector for Bangladesh," 2024 International Conference on Sustainable Energy (ICUE), Pattaya City, Thailand, pp. 1-7.</>}
          doi="https://doi.org/10.1109/ICUE63019.2024.10795639"
        />
        <PubEntry
          text={<>Barua, A., Ongsakul, W., <B>Nahid, F.A.</B> &amp; Roy, J. (2024). "Comparative Analysis of Energy System Modeling Approaches for Decarbonizing the Electricity Sector," 2024 ICUE, Pattaya City, Thailand, pp. 1-7.</>}
          doi="https://doi.org/10.1109/ICUE63019.2024.10795621"
        />
        <PubEntry
          text={<><B>Nahid, F.A.</B>, Ongsakul, W., &amp; Manjiparambil, N.M. (2020). Very Short-Term Wind Speed Forecasting Using Convolutional Long Short-Term Memory Recurrent Neural Network. 2020 ICUE, pp. 1–8.</>}
          doi="https://doi.org/10.1109/ICUE49301.2020.9307061"
        />
        <PubEntry
          text={<>Akter, K., Islam, M.N., <B>Nahid, F.A.</B>, &amp; Soheli, S.N. (2021). Comparative Analysis and Exploration of a High Gain Input Current Shaped AC-DC Step-Up Converter with Feedback Controller. 2021 ICREST, pp. 253–258.</>}
          doi="https://doi.org/10.1109/ICREST51555.2021.9331180"
        />

        {/* Book Chapters */}
        <SectionHeader icon={BookMarked} title="Book Chapters" count={3} />

        <PubEntry
          text={<><B>Nahid, F.A.</B>, Jahangir, M.N., Chowdhury, H.M., &amp; Akter, K. Evaluation and Performance Metrics for Forecasting Renewable Power Generation, Demand, and Electricity Price. In: <E>Forecasting in Smart Grids</E>, pp. 173–218.</>}
          doi="https://doi.org/10.1002/9781394249466.ch7"
        />
        <PubEntry
          text={<><B>Nahid, F.A.</B>, Chowdhury, H.M., &amp; Jahangir, M.N. Machine Learning Techniques for Demand Forecasting in the Electricity Sector. In: <E>Forecasting in Smart Grids</E>, pp. 131–172.</>}
          doi="https://doi.org/10.1002/9781394249466.ch6"
        />
        <PubEntry
          text={<><B>Nahid, F.A.</B>, Ongsakul, W., Madhu M., N., &amp; Laopaiboon, T. (2020). Hybrid Neural Networks for Renewable Energy Forecasting. In: Vasant, P., Weber, G., &amp; Punurai, W. (Eds.), <E>Research Advancements in Smart Technology, Optimization, and Renewable Energy</E> (pp. 200–222). IGI Global.</>}
          doi="https://doi.org/10.4018/978-1-7998-3970-5.ch011"
        />

        {/* Manuscripts Submitted */}
        <SectionHeader icon={Clock} title="Manuscripts Submitted" count={3} />

        <div className="space-y-3">
          {[
            { title: 'Integrating Demand-side Solutions for Accelerated Decarbonization of Power Supply System.', journal: 'Energy and Climate Change', status: 'Under Review' },
            { title: 'Past Trends, Alternative Futures, and Energy Demand Scenarios for Bangladesh.', journal: 'Sustainability Science', status: 'Revised Manuscript Under Review' },
            { title: 'Energy System Modeling in South and Southeast Asia: Progress, Gaps, and Opportunities.', journal: 'Energy Reports', status: 'With Editor' },
          ].map((ms, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 px-5 py-4 rounded-lg bg-amber-50/60 border border-amber-200/50">
              <div className="flex-1">
                <p className="text-sm font-medium text-navy-800">{ms.title}</p>
                <p className="text-xs text-navy-500 mt-1">
                  <span className="font-medium">Journal:</span> {ms.journal}
                </p>
              </div>
              <span className="inline-flex self-start items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 whitespace-nowrap">
                {ms.status}
              </span>
            </div>
          ))}
        </div>

        {/* Manuscripts in Preparation */}
        <SectionHeader icon={PenTool} title="Manuscripts in Preparation" count={3} />

        <div className="space-y-3">
          {[
            'Low-emission Power Sector for the Developing Asian Region by 2050: How low?',
            'Demand side Mitigation Solutions for service provision: Broader perspective with Cross-sector linkages',
            'Future Energy Transition Mineral Demands and Constraints for South and Southeast Asia',
          ].map((title, i) => (
            <div key={i} className="flex items-start gap-3 px-5 py-3 rounded-lg bg-navy-50/50 border border-navy-100/50">
              <div className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
              <p className="text-sm text-navy-700">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
