// @ts-nocheck
import { useState } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';
import { motion, AnimatePresence } from 'framer-motion';

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState('Leadership');

  const team = [
    {
      name: "Biswajit Matia",
      role: "CEO",
      category: "Leadership",
      image: "/assets/ceo.jpg",
    },
    {
      name: "Mayuresh Mohanty",
      role: "Director",
      category: "Leadership",
      image: "/assets/director.jpg",
    },
    {
      name: "Prajukta Mahakud",
      role: "HR",
      category: "Leadership",
      image: "/assets/hr.jpg",
    },
    {
      name: "Sameer Kumar Sahu",
      role: "Developer",
      category: "Developer",
      image: "/assets/fd.jpeg",
    },
    {
      name: "Biswajit Majhi",
      role: "Marketing",
      category: "Marketing",
      image: "/assets/biswajitmajhi.jpg",
    },
    {
      name: "Asish Kumar Pattnaik",
      role: "Marketing",
      category: "Marketing",
      image: "/assets/ashiskumar.png",
    },

    {
      name: "Rinkesh raj kandhbey",
      role: "Marketing",
      category: "Marketing",
      image: "/assets/markiting4.jpeg",
    },
    {
      name: "Tophan Kumar Ray",
      role: "Team Lead",
      category: "Developer",
      image: "/assets/tufandev.jpeg",
    },
    {
      name: "Soni Kumari Singh",
      role: "Jr.Developer",
      category: "Developer",
      image: "/assets/sonidev.jpeg",
    },
    {
      name: "Bibhu P. Baliarsingh",
      role: "Jr.Developer",
      category: "Developer",
      image: "/assets/bibhudev.jpeg",
    },
    {
      name: "Puja Rani Das",
      role: "Jr.Developer",
      category: "Developer",
      image: "/assets/pujadev.jpeg",
    },
    {
      name: "B.Kirti",
      role: "Intern",
      category: "Intern",
      image: "/assets/kirtiintern.jpeg",
    },
    {
      name: "Adysha Nanda",
      role: "Intern",
      category: "Intern",
      image: "/assets/adyshaintern.jpeg",
    },
    {
      name: "Debashis Sahu",
      role: "Intern",
      category: "Intern",
      image: "/assets/debashisintern.jpeg",
    },
    {
      name: "Rupali sahoo",
      role: "Finance",
      category: "Finance",
      image: "/assets/finance1.jpeg",
    },
  ];

  const categories = ["Leadership", "Marketing","Finance", "Developer", "Intern"];

  const filteredTeam = team.filter(member => member.category === activeTab);

  return (
    <section className="relative py-20 px-6 bg-[#00061A]">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-12">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              Meet Our Team
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Awesome <span className="text-gradient-blue">Team</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Our diverse team of experts brings together decades of experience and a passion for excellence.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "bg-transparent border border-blue-600/50 text-blue-400 hover:bg-blue-600/10"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Team Grid */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-8"
        >
          <AnimatePresence>
            {filteredTeam.map((member, index) => (
              <div key={member.name} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-sm" style={{ perspective: 1000 }}>
                <TeamMember member={member} index={index} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function TeamMember({ member, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, rotateX: -90, y: 50, transformOrigin: "top" }}
      animate={{ opacity: 1, rotateX: 0, y: 0 }}
      exit={{ opacity: 0, rotateX: 90, y: -50 }}
      transition={{ 
        duration: 0.6,
        delay: index !== undefined ? index * 0.1 : 0,
        ease: "easeOut"
      }}
      className="group cursor-pointer flex flex-col items-center bg-zinc-900/50 hover:bg-zinc-900/80 border border-white/5 hover:border-blue-500/20 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Gradient Border Ring */}
      <div className="relative mb-6 flex justify-center w-full">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6] via-[#ec4899] to-[#1e3a8a] rounded-full blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-300 mx-auto w-36 h-36 md:w-44 md:h-44"></div>
        <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#ec4899] to-[#1e3a8a] mx-auto z-10">
          <div className="p-1 rounded-full bg-zinc-900 flex items-center justify-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 md:w-40 md:h-40 object-cover object-top rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-xl font-bold text-white mb-2 text-center">
        {member.name}
      </h3>
      <div className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
        <p className="text-blue-400 text-sm font-medium text-center">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}
