import { SectionId } from '../types';
import { PERSONAL_INFO, AWARDS } from '../constants';
import { Trophy } from 'lucide-react';

const About = () => {
    return (
        <section id={SectionId.ABOUT} className="py-24 bg-slate-900/50 relative">
            <div className="container mx-auto px-4 sm:px-6">
                
                {/* Row 1: About Me */}
                <div className="space-y-6 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
                    <div className="w-20 h-1.5 bg-primary-500 rounded-full"></div>
                    <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                        {PERSONAL_INFO.about}
                    </p>
                </div>

                {/* Honors & Awards */}
                <div>
                    {/* Honors & Awards */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Honors & Awards</h3>
                        <div className="space-y-4">
                            {AWARDS.map((award, index) => (
                                <div key={index} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-colors group">
                                    <div className="flex items-start gap-3">
                                        <div className="text-primary-400 mt-1">
                                            <Trophy size={18} />
                                        </div>
                                        <div>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                                                <h4 className="font-bold text-white group-hover:text-primary-400 transition-colors">{award.title}</h4>
                                                <span className="text-xs font-mono text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">{award.date}</span>
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {award.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;
