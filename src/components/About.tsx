import { SectionId } from '../types';
import { PERSONAL_INFO } from '../constants';

const About = () => {
    return (
        <section id={SectionId.ABOUT} className="pt-12 pb-10 bg-slate-900/50 relative">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
                    <div className="w-20 h-1.5 bg-primary-500 rounded-full"></div>
                    <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                        {PERSONAL_INFO.about}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
