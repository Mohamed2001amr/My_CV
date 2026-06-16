import { useState } from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { SectionHeader } from './Education';

export default function Experience() {
  const [expanded, setExpanded] = useState(() =>
    experienceData.positions.reduce((acc, pos) => ({ ...acc, [pos.title]: true }), {})
  );

  const togglePosition = (title) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey and work history"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200" />

            <div className="relative pl-16 pb-8">
              <div className="absolute left-3.5 top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md" />

              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      <Briefcase size={18} />
                      <span className="text-sm font-semibold uppercase tracking-wide">Current Role</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{experienceData.company}</h3>
                    <p className="text-slate-600 font-medium mt-1">{experienceData.role}</p>
                  </div>
                  <span className="inline-flex self-start px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full whitespace-nowrap">
                    {experienceData.period}
                  </span>
                </div>

                {experienceData.positions.map((position, index) => {
                  const isOpen = expanded[position.title];

                  return (
                    <div key={position.title} className={index > 0 ? 'mt-6 pt-6 border-t border-slate-200' : ''}>
                      <button
                        onClick={() => togglePosition(position.title)}
                        className="w-full flex items-center justify-between gap-3 text-left group"
                        aria-expanded={isOpen}
                      >
                        <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                          <ChevronRight
                            size={18}
                            className={`text-blue-500 transition-transform duration-200 ${
                              isOpen ? 'rotate-90' : ''
                            }`}
                          />
                          {position.title}
                        </h4>
                        <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                          {position.period}
                        </span>
                      </button>

                      {isOpen && (
                        <ul className="space-y-3 mt-4 pl-7">
                          {position.responsibilities.map((item) => (
                            <li key={item} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
