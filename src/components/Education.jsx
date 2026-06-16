import { GraduationCap, Calendar, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Education"
          subtitle="My academic background and qualifications"
        />

        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-48 shrink-0 bg-[#1a2b5f] flex items-center justify-center p-6">
                <img
                  src={educationData.logo}
                  alt={`${educationData.university} logo`}
                  className="w-full max-w-[140px] object-contain"
                />
              </div>

              <div className="flex-1 p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg shrink-0">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{educationData.degree}</h3>
                    <p className="text-blue-600 font-medium mt-1">{educationData.university}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={15} className="text-slate-400" />
                    {educationData.period}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Badge icon={<Award size={14} />} label="Graduation Grade" value={educationData.grade} />
                  <Badge icon={<Award size={14} />} label="Graduation Project" value={educationData.graduationProject} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-3">{title}</h2>
      <p className="text-slate-500">{subtitle}</p>
      <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
    </div>
  );
}

function Badge({ icon, label, value }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 text-sm">
      <span className="text-blue-500">{icon}</span>
      <span className="text-slate-500">{label}:</span>
      <span className="font-semibold text-slate-800">{value}</span>
    </div>
  );
}

export { SectionHeader };
