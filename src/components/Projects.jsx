import { useState } from 'react';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { SectionHeader } from './Education';
import ProjectModal, { ProjectImage } from './ProjectModal';
import Reveal from './Reveal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Project Experience"
          subtitle="Projects I've contributed to and delivered"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <Reveal
              key={project.id}
              variant={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              delay={(index % 2) * 120}
              className="h-full"
            >
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all group h-full">
                <div className="h-48 overflow-hidden">
                  <ProjectImage
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 text-center mb-4 leading-snug">
                    {project.title}
                  </h3>

                  <div className="flex justify-between items-center text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      <span className="font-medium text-slate-600">Start:</span> {project.startDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      <span className="font-medium text-slate-600">End:</span> {project.endDate}
                    </span>
                  </div>

                  {project.links?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
                        >
                          <ExternalLink size={12} />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
