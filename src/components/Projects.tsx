import { SectionId } from '../types';
import { PROJECTS } from '../constants';
import { BookOpen } from 'lucide-react';

const Projects = () => {
  return (
    <section id={SectionId.PROJECTS} className="pt-10 pb-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Papers</h2>
            <div className="w-20 h-1.5 bg-primary-500 rounded-full"></div>
        </div>

        <div className="space-y-4">
            {PROJECTS.map((project) => (
                <a
                    key={project.id} 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-colors"
                >
                    <div className="flex items-start gap-3">
                        <div className="text-primary-400 mt-1">
                            <BookOpen size={18} />
                        </div>
                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-1">
                                <h3 className="font-bold text-white group-hover:text-primary-400 transition-colors">{project.title}</h3>
                                <span className="w-fit shrink-0 text-xs font-mono text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">{project.date}</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">{project.venue}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
