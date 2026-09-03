import { useState } from 'react';

const experiences = [
  {
    role: "Data Analyst Intern",
    company: "Luminar Technolab",
    period: "Feb 2026 - Present",
    location: "Kochi, India",
    description: "Undergoing comprehensive training in Data Analytics, mastering data transformation, exploratory data analysis (EDA), data modeling, and business reporting through real-world projects.",
    highlights: [
      "Built interactive dashboards and reports using Power BI, DAX, and Power Query to support data-driven decision-making.",
      "Performed end-to-end data processing including cleaning, ETL, and data modeling using SQL, Python, and Excel.",
      "Executed exploratory data analysis (EDA) to derive actionable business metrics and trends from complex datasets."
    ],
    skills: ["Power BI", "SQL", "Python", "Excel", "DAX", "Power Query", "Data Modeling", "ETL", "EDA"]
  },
  {
    role: "Karate Instructor",
    company: "Oxford Plus Body Building and Martial Arts Club",
    period: "Aug 2025 - Jan 2026",
    location: "United Arab Emirates",
    description: "Conducted structured karate training programs for children and adults while coordinating club events and student engagement initiatives.",
    highlights: [
      "Designed tailored lesson plans across skill levels to guide students through belt progression and discipline.",
      "Coordinated tournaments, demonstrations, grading sessions, and promotional activities with club management.",
      "Strengthened leadership, communication, and operational time management within a high-engagement environment."
    ],
    skills: ["Leadership", "Event Management", "Coaching", "Communication", "Time Management"]
  },
  {
    role: "Karate Instructor",
    company: "World Federation of Shotokan Karate",
    period: "Oct 2024 - Jul 2025",
    location: "United Arab Emirates",
    description: "Delivered professional karate instruction across age groups, maintaining safety standards and managing training operations.",
    highlights: [
      "Planned structured training schedules, evaluated student progress, and provided personalized technique coaching.",
      "Organized grading examinations, competitive events, and demonstrations while liaising with parents and staff.",
      "Managed administrative activities and training schedules to ensure smooth daily operations."
    ],
    skills: ["Mentoring", "Program Administration", "Public Communication", "Organizational Leadership"]
  }
];

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <div id="experience" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16 relative">
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-16 lg:mb-24">
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap">
            Work
            <span className="font-light italic text-gray-300 lowercase font-serif pr-4 pt-2 md:pt-4">history</span>
          </h2>
        </div>

        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
            A track record of technical data analytics training alongside international coaching, leadership, and operational execution.
          </p>
        </div>
      </div>

      {/* Experience Timeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Navigation Tabs */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveExp(index)}
              className={`w-full text-left p-5 rounded-lg border transition-all cursor-pointer flex flex-col gap-1 ${
                activeExp === index
                  ? 'bg-[#111] border-[#ccff00] text-white'
                  : 'bg-[#0a0a0a] border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <span className="text-[#ccff00] text-xs font-mono uppercase tracking-widest">
                  0{index + 1}
                </span>
                <span className="text-xs text-gray-500 font-light">{exp.period}</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-tight text-white mt-1">
                {exp.role}
              </h4>
              <p className="text-xs text-gray-400">{exp.company}</p>
            </button>
          ))}
        </div>

        {/* Right Active Experience Details */}
        <div className="lg:col-span-8 bg-[#111] border border-white/10 rounded-lg p-6 md:p-8 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-2">
            <div>
              <span className="text-[#ccff00] text-xs font-bold uppercase tracking-widest">
                {experiences[activeExp].period} — {experiences[activeExp].location}
              </span>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight mt-1">
                {experiences[activeExp].role}
              </h3>
              <p className="text-base text-gray-300 font-medium">
                {experiences[activeExp].company}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
            {experiences[activeExp].description}
          </p>

          {/* Key Bullet Highlights */}
          <div className="mb-8">
            <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Key Responsibilities & Achievements
            </h5>
            <ul className="space-y-3">
              {experiences[activeExp].highlights.map((item, hIdx) => (
                <li key={hIdx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                  <span className="text-[#ccff00] font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Tags */}
          <div className="flex items-center gap-2 flex-wrap">
            {experiences[activeExp].skills.map((skill, sIdx) => (
              <span 
                key={sIdx} 
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#1a1a1a] text-gray-300 border border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Experience;