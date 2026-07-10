import { Linkedin, Mail } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <p>&copy; {year} {aboutData.name}</p>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="flex items-center gap-3">
            <a
              href={aboutData.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${aboutData.email}`}
              className="p-1.5 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
