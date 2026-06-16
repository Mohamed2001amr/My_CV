import { aboutData } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {year} {aboutData.name}. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-slate-500">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
