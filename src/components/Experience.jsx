import { useState } from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { SectionHeader } from './Education';
import Reveal from './Reveal';

export default function Experience() {
  const [expanded, setExpanded] = useState(() =>
    experienceData.positions.reduce((acc, pos) => ({ ...acc, [pos.title]: true }), {})
  );

  const togglePosition = (title) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const orderedPositions = [...experienceData.positions].sort((a, b) => {
    if (a.title.includes('Software')) return -1;
    if (b.title.includes('Software')) return 1;
    return 0;
  });

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey and work history"
        />

        <Reveal variant="zoom" delay={80} className="max-w-4xl mx-auto mb-10 text-center">
          <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <Briefcase size={18} />
              <span className="text-sm font-semibold uppercase tracking-wide">Current Role</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-slate-200" />
            <div>
              <h3 className="text-lg font-bold text-slate-900">{experienceData.company}</h3>
              <p className="text-slate-600 text-sm font-medium">{experienceData.role}</p>
            </div>
            <span className="inline-flex self-center px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full whitespace-nowrap">
              {experienceData.period}
            </span>
          </div>
        </Reveal>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 md:-translate-x-px" />

          <div className="space-y-10 md:space-y-16">
            {orderedPositions.map((position, index) => {
              const isOpen = expanded[position.title];
              const isRight = index % 2 === 0;

              return (
                <Reveal
                  key={position.title}
                  variant={isRight ? 'fade-right' : 'fade-left'}
                  delay={index * 120}
                  className={`relative ${
                    isRight
                      ? 'pl-16 md:pl-[calc(50%+2rem)]'
                      : 'pl-16 md:pl-0 md:pr-[calc(50%+2rem)]'
                  }`}
                >
                  <div className="absolute left-3.5 md:left-1/2 top-6 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md md:-translate-x-1/2" />

                  <div
                    className={`bg-slate-50 rounded-2xl border border-slate-100 p-6 sm:p-8 hover:shadow-lg transition-shadow ${
                      isRight ? 'md:text-left' : ''
                    }`}
                  >
                    <button
                      onClick={() => togglePosition(position.title)}
                      className="w-full flex items-center justify-between gap-3 text-left group cursor-pointer"
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
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
