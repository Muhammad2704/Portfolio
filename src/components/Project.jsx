import { useState } from 'react';

const projects = [
  {
    name: 'Business Analytics Suite',
    title: (
      <>
        RETAIL ANALYTICS <br />
        & FORECASTING SUITE
      </>
    ),
    description: "An interactive e-commerce and retail analytics platform that unifies executive KPIs, product performance, sales forecasting, customer RFM segmentation, and discount impact analysis to optimize profit margins and drive growth strategies.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    screenshots: [
      "src/assets/project/executive overview.png",
      "src/assets/project/sales analysis.png",
      "src/assets/project/product & profitability analysis.png",
      "src/assets/project/customer analysis.png",
      "src/assets/project/rfm customer segmentation.png",
      "src/assets/project/discount and profitability analysis.png",
      "src/assets/project/sales forcast & trends.png",
      "src/assets/project/slicers.png"
    ],
    githubUrl: "https://github.com/Muhammad2704/retail-analytics",
    linkedinUrl: "https://lnkd.in/p/dM6pRXBi"
  },
  {
    name: 'Healthcare Analytics Suite',
    title: (
      <>
        HEALTHCARE ANALYTICS <br />
        & OPERATIONS SUITE
      </>
    ),
    description: "An interactive healthcare intelligence dashboard suite that visualises multi-branch hospital operations, clinical performance, and financial metrics to help healthcare administrators streamline patient management and optimize resource allocation.",
    thumbnail: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2000&auto=format&fit=crop",
    screenshots: [
      "src/assets/project/executive.png",
      "src/assets/project/patient.png",
      "src/assets/project/doctor.png",
      "src/assets/project/department.png",
      "src/assets/project/financial.png",
      "src/assets/project/hospital.png",
      "src/assets/project/Screenshot 2026-07-23 154226.png"
    ],
    githubUrl: "https://github.com/Muhammad2704/Healthcare_Analytics",
    linkedinUrl: "https://lnkd.in/p/dsE3A9WT"
  },
  {
    name: 'Global Sales Dashboard',
    title: (
      <>
        GLOBAL SALES & <br />
        PROFITABILITY DASHBOARD
      </>
    ),
    description: "A futuristic glassmorphism-styled business intelligence suite that tracks global revenue, profit margins, and customer demographics across categories and regions to provide executive-level visibility into retail growth metrics.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    screenshots: [
      "src/assets/project/sales (2).png",
      "src/assets/project/profit.png",
      "src/assets/project/demographics.png"
    ],
    githubUrl: "https://github.com/",
    linkedinUrl: "https://lnkd.in/p/dG2PFg3B"
  },
  {
    name: 'Retail Sales Dashboard',
    title: (
      <>
        RETAIL SALES & <br />
        FORECASTING DASHBOARD
      </>
    ),
    description: "An interactive retail analytics dashboard that tracks $1.6M in sales, monitors YoY monthly revenue and profit trends, breaking down performance by payment mode, region, and category, alongside a 15-day predictive sales forecast model.",
    thumbnail: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop",
    screenshots: [
      "src/assets/project/sales.png",
      "src/assets/project/forecast.png"
    ],
    githubUrl: "https://github.com/",
    linkedinUrl: "https://lnkd.in/p/dgs9d8RG"
  },
  {
    name: 'Executive Sales Dashboard',
    title: (
      <>
        EXECUTIVE SALES <br />
        PERFORMANCE DASHBOARD
      </>
    ),
    description: "An interactive Excel-based sales dashboard tracking ₹25.66M in total revenue and 32.5% profit margin, enabling commercial leaders to analyze revenue-profit trends, regional city performance, top product rankings, and sales representative output across multi-year periods.",
    thumbnail: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2000&auto=format&fit=crop",
    screenshots: [
      "src/assets/project/excel dashboard.png"
    ],
    githubUrl: "https://github.com/",
    linkedinUrl: "https://lnkd.in/p/dAQHzN-8"
  }
];

const Project = () => {
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [showHeaderDetails, setShowHeaderDetails] = useState(false);

  const openScreenshotModal = (project) => {
    setActiveProjectModal(project);
    setCurrentScreenshotIndex(0);
  };

  const nextScreenshot = () => {
    if (!activeProjectModal) return;
    setCurrentScreenshotIndex((prev) => (prev + 1) % activeProjectModal.screenshots.length);
  };

  const prevScreenshot = () => {
    if (!activeProjectModal) return;
    setCurrentScreenshotIndex((prev) => 
      prev === 0 ? activeProjectModal.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <div id="project" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16 relative">

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-20 lg:mb-32">
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap">
            Project
            <span className="font-light italic text-gray-300 lowercase font-serif pr-4 pt-2 md:pt-4">work</span>
          </h2>
        </div>

        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
            Transforming raw, complex data into actionable business intelligence through interactive dashboards, predictive forecasting models, and end-to-end data pipelines.
          </p>
          <button 
            onClick={() => setShowHeaderDetails(true)} 
            className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={proj.name} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-12 lg:gap-16 w-full group`}>

              {/* Clean Single Thumbnail Display */}
              <div 
                onClick={() => openScreenshotModal(proj)}
                className="w-full lg:w-6/12 overflow-hidden relative aspect-16/10 bg-[#111] rounded-sm cursor-pointer border border-white/10 group-hover:border-[#ccff00]/50 transition-colors"
              >
                <img
                  src={proj.thumbnail}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-black/80 text-[#ccff00] text-xs font-semibold rounded-full border border-[#ccff00]/40">
                    Click to View Screenshots ({proj.screenshots.length})
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-6">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-10">
                  {proj.description}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-3 flex-wrap">
                  <button 
                    onClick={() => openScreenshotModal(proj)} 
                    className="cursor-pointer px-5 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] transition-colors inline-flex items-center gap-2"
                  >
                    Screenshot
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </button>

                  <a 
                    href={proj.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer px-5 py-2.5 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
                  >
                    GitHub
                  </a>

                  <a 
                    href={proj.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer px-5 py-2.5 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Header "Read More" Modal */}
      {showHeaderDetails && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6">
          <div className="relative max-w-2xl w-full bg-[#111] border border-white/20 rounded-lg p-8 text-white">
            <button 
              onClick={() => setShowHeaderDetails(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold uppercase text-[#ccff00] mb-4">Data Analytics Approach</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              My data analytics workflow covers end-to-end processing: clean data extraction with SQL/Python, data modeling, DAX measure creation, interactive dashboard design in Power BI/Excel, and executive presentation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every project is engineered with business impact in mind—focusing on actionable KPIs, customer segmentation (RFM), profitability analysis, and predictive forecasting.
            </p>
          </div>
        </div>
      )}

      {/* Screenshot Lightbox Modal with Arrows and Thumbnail Selector */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
          <div className="relative max-w-5xl w-full bg-[#111] rounded-lg overflow-hidden border border-white/20 shadow-2xl flex flex-col">
            
            {/* Modal Title Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a0a0a]">
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
                {activeProjectModal.name} — Screenshot {currentScreenshotIndex + 1} of {activeProjectModal.screenshots.length}
              </h4>
              <button 
                onClick={() => setActiveProjectModal(null)} 
                className="text-gray-400 hover:text-white text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Main Screenshot Container with Navigation Arrows */}
            <div className="p-4 bg-[#050505] flex items-center justify-between min-h-[50vh] max-h-[68vh] relative">
              
              {/* Previous Arrow */}
              {activeProjectModal.screenshots.length > 1 && (
                <button 
                  onClick={prevScreenshot}
                  className="z-10 p-3 rounded-full bg-black/60 text-white hover:bg-[#ccff00] hover:text-black border border-white/20 transition-colors cursor-pointer"
                >
                  ❮
                </button>
              )}

              {/* Main Image */}
              <div className="flex-1 flex items-center justify-center h-full px-4 overflow-hidden">
                <img 
                  src={activeProjectModal.screenshots[currentScreenshotIndex]} 
                  alt={`${activeProjectModal.name} screenshot ${currentScreenshotIndex + 1}`} 
                  className="max-h-[60vh] w-auto object-contain rounded"
                />
              </div>

              {/* Next Arrow */}
              {activeProjectModal.screenshots.length > 1 && (
                <button 
                  onClick={nextScreenshot}
                  className="z-10 p-3 rounded-full bg-black/60 text-white hover:bg-[#ccff00] hover:text-black border border-white/20 transition-colors cursor-pointer"
                >
                  ❯
                </button>
              )}

            </div>

            {/* Bottom Screenshot Thumbnails */}
            {activeProjectModal.screenshots.length > 1 && (
              <div className="p-4 bg-[#0a0a0a] border-t border-white/10 flex items-center justify-center gap-3 overflow-x-auto">
                {activeProjectModal.screenshots.map((screen, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => setCurrentScreenshotIndex(sIdx)}
                    className={`w-20 h-12 rounded border overflow-hidden transition-all cursor-pointer ${
                      currentScreenshotIndex === sIdx 
                        ? 'border-[#ccff00] scale-105 opacity-100' 
                        : 'border-white/20 opacity-40 hover:opacity-100'
                    }`}
                  >
                    <img src={screen} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default Project;