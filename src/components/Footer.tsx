import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Dr. Firuz Ahamed Nahid</h3>
            <p className="text-sm leading-relaxed text-navy-400">
              Postdoctoral Researcher at SMARTS Center, Asian Institute of Technology.
              Focused on power sector decarbonization and sustainable energy transitions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://scholar.google.com/citations?user=uqPruO4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">
                  Google Scholar
                </a>
              </li>
              <li>
                <a href="https://orcid.org/0000-0002-2531-7640" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">
                  ORCID Profile
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/firuz-ahamed-nahid/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://smartscenter.ait.ac.th/smarts-people" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">
                  SMARTS Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Affiliation</h3>
            <p className="text-sm leading-relaxed text-navy-400">
              SMARTS Center<br />
              Asian Institute of Technology<br />
              Pathum Thani 12120, Thailand
            </p>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy-500">
            © {new Date().getFullYear()} Dr. Firuz Ahamed Nahid. All rights reserved.
          </p>
          <p className="text-xs text-navy-500 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for clean energy research
          </p>
        </div>
      </div>
    </footer>
  );
}
