import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Laravel", level: 95 },
        { name: "Core PHP", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "RESTful APIs", level: 90 },
      ]
    },
    {
      title: "Frontend Development", 
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
      ]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "jQuery", level: 85 },
        { name: "AJAX", level: 80 },
      ]
    },
    {
      title: "DevOps & Others",
      skills: [
        { name: "GitHub CI/CD", level: 75 },
        { name: "Web3/Blockchain", level: 70 },
        { name: "Livewire", level: 80 },
        { name: "MSSQL", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I use to build exceptional web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full mr-3"></div>
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500 group-hover:text-primary-600 transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary-600 to-accent-600 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-105"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Languages Section */}
          <div className="mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                Languages
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">English</span>
                  <span className="text-success-600 font-medium">Fluent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Hindi</span>
                  <span className="text-success-600 font-medium">Fluent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;