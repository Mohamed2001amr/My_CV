import { skillsData } from '../data/portfolioData';
import { SectionHeader } from './Education';

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Skills"
          subtitle="Technologies, tools, and competencies I work with"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:border-blue-200 transition-all group"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 group-hover:border-blue-200 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-50 rounded-lg border border-slate-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
