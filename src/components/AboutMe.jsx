import { Mail, MapPin, Linkedin, Briefcase } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-4">
              {aboutData.name}
            </h1>
            <p className="text-xl text-slate-600 mb-8 flex items-center gap-2">
              <Briefcase size={20} className="text-blue-500 shrink-0" />
              {aboutData.title}
            </p>
            <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
              Passionate software engineer with expertise in front-end development and business analysis.
              I build responsive, user-friendly web applications and help organizations optimize their
              business processes through effective requirement elicitation and process modeling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${aboutData.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a
                href={aboutData.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 font-medium rounded-xl hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-2xl shadow-blue-600/30">
                <span className="text-7xl sm:text-8xl font-bold text-white/90 select-none">
                  MA
                </span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-5 py-3 border border-slate-100">
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin size={16} className="text-blue-500" />
                  <span className="text-sm font-medium">{aboutData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <InfoCard icon={<Mail size={20} />} label="Email" value={aboutData.email} href={`mailto:${aboutData.email}`} />
          <InfoCard icon={<MapPin size={20} />} label="Location" value={aboutData.location} />
          <InfoCard
            icon={<Linkedin size={20} />}
            label="LinkedIn"
            value={aboutData.linkedin.label}
            href={aboutData.linkedin.url}
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">{icon}</div>
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-wide">{label}</p>
        <p className="text-sm font-medium text-slate-700">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
