import React, { useEffect, useRef } from 'react';
import aboutImage from '../assets/about_section/about_section.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const analyticsSkills = ["Power BI", "SQL", "Python", "Excel", "MySQL", "DAX", "Power Query", "Data Analysis"];
const vizSkills = ["Dashboard Development", "Data Cleaning", "Data Visualization", "Exploratory Data Analysis", "Reporting"];
const businessSkills = ["Sales Analytics", "Profitability Analysis", "Customer Segmentation", "Business Performance", "Data Insights"];
const toolsSkills = ["Git", "GitHub", "VS Code", "Database Management"];

const aboutWords = [
  { text: "I'm" }, { text: "a" },
  { text: "Data", className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400" },
  { text: "Analyst", className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400" },
  { text: "with" }, { text: "hands-on" }, { text: "experience" }, { text: "in" }, { text: "transforming" }, { text: "raw" }, { text: "data" }, { text: "into" }, { text: "meaningful" }, { text: "business" }, { text: "insights" }, { text: "using" },
  { text: "Power BI,", className: "text-white font-medium" },
  { text: "SQL,", className: "text-white font-medium" },
  { text: "Python,", className: "text-white font-medium" },
  { text: "Excel,", className: "text-white font-medium" },
  { text: "and" },
  { text: "MySQL.", className: "text-white font-medium" },
  { text: "I" }, { text: "enjoy" }, { text: "working" }, { text: "with" }, { text: "data" }, { text: "to" }, { text: "identify" }, { text: "trends," }, { text: "measure" }, { text: "performance," }, { text: "and" }, { text: "support" }, { text: "data-driven" }, { text: "decision-making." },
  { text: "My" }, { text: "core" }, { text: "skills" }, { text: "include" },
  { text: "data cleaning,", className: "text-white font-medium" },
  { text: "data analysis,", className: "text-white font-medium" },
  { text: "data visualization,", className: "text-white font-medium" },
  { text: "Power Query, DAX, SQL, exploratory data analysis,", className: "text-white font-medium" },
  { text: "and" },
  { text: "dashboard development.", className: "text-white font-medium" },
  { text: "I" }, { text: "have" }, { text: "worked" }, { text: "on" }, { text: "analytics" }, { text: "projects" }, { text: "involving" },
  { text: "sales,", className: "text-white font-medium" },
  { text: "profitability,", className: "text-white font-medium" },
  { text: "customer segmentation,", className: "text-white font-medium" },
  { text: "and" },
  { text: "business performance,", className: "text-white font-medium" },
  { text: "with" }, { text: "a" }, { text: "focus" }, { text: "on" }, { text: "creating" }, { text: "interactive" }, { text: "and" }, { text: "actionable" }, { text: "Power BI" }, { text: "dashboards." }
];

const About = () => {
  const textRef = useRef(null);
  const introMobileRef = useRef(null);
  const introDesktopRef = useRef(null);

  useEffect(() => {
    const headings = [introMobileRef.current, introDesktopRef.current];
    
    headings.forEach((heading) => {
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { color: '#52525b', opacity: 0.2 },
        {
          color: '#ffffff',
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="min-h-screen bg-[#050505] text-white pt-24 pb-0 px-6 md:px-16 flex flex-col justify-between relative overflow-hidden">


      <div className="max-w-7xl mx-auto w-full z-10">

        {/* Mobile Intro Text (Visible only on mobile/tablet) */}
        <h2 ref={introMobileRef} className="lg:hidden text-center text-[18vw] md:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none mb-10 md:mb-16">
          Intro
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-20">
            <img
            src={aboutImage}
            alt="About"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain drop-shadow-2xl"/>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col justify-center space-y-8 z-10 w-full px-4 md:px-0">
            {/* Desktop Intro Text (Visible only on desktop) */}
            <h2 ref={introDesktopRef} className="hidden lg:block text-[11rem] font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none">
              Intro
            </h2>
            <div className="relative bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/[0.07] transition-colors duration-300 text-center lg:text-left">
              <p ref={textRef} className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                {aboutWords.map((wordObj, index) => (
                  <React.Fragment key={index}>
                    <span className={`word ${wordObj.className || ''}`}>
                      {wordObj.text}
                    </span>
                    {index < aboutWords.length - 1 && " "}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Scrolling Skills Marquee */}
      {/* Marquee Section */}
<div className="flex flex-col border-t border-white/5 bg-[#030303] py-4 mt-auto -mx-6 md:-mx-16">
  {/* First Row */}
  <div className="flex overflow-hidden whitespace-nowrap mb-2">
    <div className="flex animate-marquee w-max">
      {[...analyticsSkills, ...analyticsSkills, ...analyticsSkills, ...analyticsSkills].map((item, i) => (
        <div key={`analytics-${i}`} className="flex items-center">
          <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
          <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
        </div>
      ))}
    </div>
  </div>
  {/* Second Row */}
  <div className="flex overflow-hidden whitespace-nowrap">
    <div className="flex animate-marquee-reverse w-max">
      {[...vizSkills, ...vizSkills, ...vizSkills, ...vizSkills].map((item, i) => (
        <div key={`viz-${i}`} className="flex items-center">
          <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
          <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
        </div>
      ))}
    </div>
  </div>
  {/* Third Row */}
  <div className="flex overflow-hidden whitespace-nowrap mt-2">
    <div className="flex animate-marquee w-max">
      {[...businessSkills, ...businessSkills, ...businessSkills, ...businessSkills].map((item, i) => (
        <div key={`biz-${i}`} className="flex items-center">
          <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
          <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
        </div>
      ))}
    </div>
  </div>
  {/* Fourth Row */}
  <div className="flex overflow-hidden whitespace-nowrap mt-2">
    <div className="flex animate-marquee-reverse w-max">
      {[...toolsSkills, ...toolsSkills, ...toolsSkills, ...toolsSkills].map((item, i) => (
        <div key={`tools-${i}`} className="flex items-center">
          <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
          <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
        </div>
      ))}
    </div>
  </div>
</div>

    </section>
  );
};

export default About;
