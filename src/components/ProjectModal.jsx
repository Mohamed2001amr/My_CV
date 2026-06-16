import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) setLightboxOpen(false);
        else onClose();
      }
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, currentImage, project]);

  const images = project.images.length > 0 ? project.images : [project.coverImage];

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-slate-100 rounded-full shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X size={20} className="text-slate-600" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="relative flex items-center gap-3 mb-6">
            <button
              onClick={prevImage}
              className="p-2 bg-slate-100 hover:bg-blue-100 hover:text-blue-600 rounded-full transition-colors shrink-0"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="flex-1 flex gap-3 overflow-x-auto scrollbar-hide py-1">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentImage(index);
                    setLightboxOpen(true);
                  }}
                  className={`shrink-0 w-32 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                    currentImage === index
                      ? 'border-blue-500 shadow-md'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <ProjectImage src={img} alt={`${project.title} ${index + 1}`} className="w-full h-full" />
                </button>
              ))}
            </div>

            <button
              onClick={nextImage}
              className="p-2 bg-slate-100 hover:bg-blue-100 hover:text-blue-600 rounded-full transition-colors shrink-0"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-6">
            {project.title}
          </h2>

          {project.departments?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                Departments Worked On
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.departments.map((dept) => (
                  <span
                    key={dept}
                    className="px-3 py-1.5 text-sm font-medium text-slate-700 bg-slate-50 rounded-lg border border-slate-200"
                  >
                    {dept}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.services?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                Services Worked On
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1.5 text-sm font-medium text-slate-700 bg-slate-50 rounded-lg border border-slate-200"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Responsibilities
            </h3>
            <ul className="space-y-2">
              {project.responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Tools Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 rounded-lg border border-blue-100"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-slate-100 text-sm">
            <span className="text-slate-500">
              <span className="font-semibold text-slate-700">Start:</span> {project.startDate}
            </span>
            <span className="text-slate-500">
              <span className="font-semibold text-slate-700">End:</span> {project.endDate}
            </span>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X size={28} className="text-white" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>

          <div className="max-w-4xl max-h-[80vh] w-full">
            <ProjectImage
              src={images[currentImage]}
              alt={project.title}
              className="w-full h-full max-h-[80vh] rounded-lg"
              large
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={28} className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
}

export function ProjectImage({ src, alt, className = '', large = false }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center ${className}`}
      >
        <span className={`font-bold text-white/80 ${large ? 'text-4xl' : 'text-lg'}`}>
          {alt?.charAt(0) || 'P'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      onError={() => setError(true)}
    />
  );
}
