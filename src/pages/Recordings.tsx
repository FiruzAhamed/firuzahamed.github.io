import { Video, PlayCircle } from 'lucide-react';

export default function Recordings() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Recordings</h1>
          <p className="text-navy-300 text-lg max-w-2xl">
            Video recordings of presentations, lectures, webinars, and conference talks.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* Placeholder */}
        <div className="text-center py-20">
          <div className="w-20 h-20 rounded-2xl bg-navy-100 flex items-center justify-center mx-auto mb-6">
            <Video className="w-10 h-10 text-navy-400" />
          </div>
          <h2 className="text-2xl font-bold text-navy-900 mb-3">Recordings Coming Soon</h2>
          <p className="text-navy-500 text-lg max-w-md mx-auto mb-8">
            Video recordings of conference presentations, webinars, and lectures will be added here.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {['Conference Presentations', 'Webinar Talks', 'Guest Lectures'].map((cat, i) => (
              <div key={i} className="bg-white rounded-xl border border-navy-100 p-6 flex flex-col items-center gap-3">
                <PlayCircle className="w-8 h-8 text-accent-500" />
                <span className="text-sm font-medium text-navy-700">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
