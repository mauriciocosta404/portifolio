import React from 'react';
import { Code2, Database, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate software developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend development, I create scalable
              and efficient solutions that solve real-world problems.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-500">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Code2 size={20} className="text-purple-500" />
                  <span>Frontend Development</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Database size={20} className="text-purple-500" />
                  <span>Backend Development</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Globe size={20} className="text-purple-500" />
                  <span>Web Technologies</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL'].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors"
              >
                <p className="text-purple-500 font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;