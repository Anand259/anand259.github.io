import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  period: string;
  marks: string;
  type: 'masters' | 'bachelors' | 'intermediate' | 'high-school';
}

const Education: React.FC = () => {
  const education: Education[] = [
    {
      institution: "GAUTAM BUDDHA TECHNICAL UNIVERSITY",
      degree: "Master of Computer Application",
      period: "2009 - 2012",
      marks: "70%",
      type: "masters"
    },
    {
      institution: "VBS PURVANCHAL UNIVERSITY", 
      degree: "Bachelor of Computer Application",
      period: "2006 - 2009",
      marks: "71%",
      type: "bachelors"
    },
    {
      institution: "GLENHILL SCHOOL, CBSE BOARD",
      degree: "PCM, Intermediate (10+2)",
      period: "2004 - 2006", 
      marks: "51%",
      type: "intermediate"
    },
    {
      institution: "GLENHILL SCHOOL, CBSE BOARD",
      degree: "High School",
      period: "2002 - 2004",
      marks: "50%",
      type: "high-school"
    }
  ];

  const getGradientColors = (type: string) => {
    switch (type) {
      case 'masters':
        return 'from-primary-600 to-accent-600';
      case 'bachelors':
        return 'from-accent-600 to-primary-600';
      case 'intermediate':
        return 'from-success-600 to-primary-600';
      case 'high-school':
        return 'from-primary-600 to-success-600';
      default:
        return 'from-primary-600 to-accent-600';
    }
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-white">
              Academic foundation that shaped my journey into web development.
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getGradientColors(edu.type)} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      <GraduationCap size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 md:mb-0">
                          {edu.institution}
                        </h3>
                        <div className="flex items-center text-gray-500 dark:text-white text-sm">
                          <Calendar size={14} className="mr-2" />
                          {edu.period}
                        </div>
                      </div>
                      
                      <p className="text-primary-600 font-medium mb-2">
                        {edu.degree}
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-success-600" />
                        <span className="text-success-600 font-medium text-sm">
                          Marks: {edu.marks}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-primary-600 " />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Continuous Learning
                </h3>
              </div>
              <p className="text-gray-600 dark:text-white leading-relaxed">
                Beyond formal education, I continuously update my skills through online courses, 
                certifications, and hands-on experience with emerging technologies to stay current 
                in the rapidly evolving web development landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;