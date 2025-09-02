import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface Job {
  company: string;
  position: string;
  period: string;
  techStack: string[];
  responsibilities: string[];
  current?: boolean;
}

const Experience: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(0);

  const jobs: Job[] = [
    {
      company: "Corporality Global",
      position: "Sr. Web Developer",
      period: "2023 - PRESENT",
      current: true,
      techStack: ["Laravel", "PHP", "React.js", "Livewire", "MySQL", "MSSQL", "JavaScript", "jQuery", "AJAX", "Bootstrap", "Tailwind CSS", "HTML5", "CSS3", "Github Actions"],
      responsibilities: [
        "Leading end-to-end development of scalable web and mobile applications",
        "Integrating RESTful APIs and optimizing backend services for performance and security",
        "Collaborating with cross-functional teams to deliver high-impact software solutions"
      ]
    },
    {
      company: "IPX Technologies Pvt. Ltd.",
      position: "Sr. Web Developer", 
      period: "2019 - 2023",
      techStack: ["Laravel", "PHP", "React.js", "MySQL", "Web3 (Blockchain)", "JavaScript", "jQuery", "AJAX", "Bootstrap", "HTML5", "CSS3"],
      responsibilities: [
        "Developed and maintained blockchain-integrated web platforms",
        "Implemented modular code using Laravel and front-end dynamic interfaces using React",
        "Played a key role in integrating blockchain APIs and building secure transaction features"
      ]
    },
    {
      company: "PC RescueLive",
      position: "Web Developer",
      period: "2014 - 2019", 
      techStack: ["PHP", "MySQL", "JavaScript", "jQuery", "AJAX", "Bootstrap", "HTML5", "CSS3"],
      responsibilities: [
        "Designed and developed responsive websites and internal tools using core PHP and modern front-end practices",
        "Improved site performance, SEO, and user engagement through optimized coding and UI/UX updates"
      ]
    },
    {
      company: "Agile Soft",
      position: "Jr. Web Developer",
      period: "2012 - 2014",
      techStack: ["PHP", "MySQL", "JavaScript", "jQuery", "AJAX", "Bootstrap", "HTML", "CSS"],
      responsibilities: [
        "Assisted in developing small-scale PHP applications and web interfaces",
        "Gained foundational experience in backend and frontend integration"
      ]
    }
  ];

  const toggleJob = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-white">
              A decade-long journey of growth, innovation, and delivering exceptional web solutions.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleJob(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {job.company}
                        </h3>
                        {job.current && (
                          <span className="bg-success-100 text-success-700 dark:bg-success-600 dark:text-success-100 px-3 py-1 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-primary-600 dark:text-primary-500 font-medium mb-1">{job.position}</p>
                      <div className="flex items-center text-gray-500 dark:text-white text-sm">
                        <Calendar size={14} className="mr-2" />
                        {job.period}
                      </div>
                    </div>
                    <div className="ml-4">
                      {expandedJob === index ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedJob === index && (
                  <div className="px-6 pb-6 animate-slide-up">
                    <div className="border-t border-gray-200 pt-6">
                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-primary-100 text-primary-700 dark:bg-primary-600 dark:text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, respIndex) => (
                            <li
                              key={respIndex}
                              className="flex items-start gap-3 text-gray-600 dark:text-white text-sm leading-relaxed"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;