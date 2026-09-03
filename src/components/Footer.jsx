import footerBg from '../assets/Footer/Footer.png';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 px-6 md:px-16 min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Scale and translate the image to crop the top */}
        <div 
          className="absolute inset-0 bg-cover bg-bottom w-full h-full scale-[1.3] md:scale-[1.5] origin-bottom translate-y-[10%]"
          style={{ backgroundImage: `url(${footerBg})` }}
        />
        {/* Dark overlay at the top to blend the background smoothly */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-10">
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <div>
              <p className="text-gray-400 text-sm mb-2">Connect with me</p>
              <a href="mailto:muhammadadilakath@gmail.com" className="text-xl md:text-4xl lg:text-5xl font-medium hover:text-gray-300 transition-colors break-all">
                muhammadadilakath@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-300 mt-4">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#service" className="hover:text-white transition-colors">Services</a>
              <a href="#project" className="hover:text-white transition-colors">Projects</a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-auto mt-4 md:mt-0">
            <h3 className="text-lg md:text-2xl font-medium mb-2">Let's build something</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Open for Data Analytics roles, dashboards, and collaborations.
            </p>
            <a href="#contact" className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Get in touch
            </a>
          </div>
        </div>

        {/* Middle Section - Socials */}
        <div className="flex flex-wrap justify-between items-center py-6 border-t border-white/10 mb-4 text-sm md:text-lg font-medium">
          <a href="https://linkedin.com/in/muhammad-a-data-analyst" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">LinkedIn</a>
          <a href="https://github.com/Muhammad2704" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">GitHub</a>
          <a href="mailto:muhammadadilakath@gmail.com" className="hover:text-gray-300 transition-colors">Email</a>
        </div>

        {/* Huge Text Section */}
        <div className="w-full text-center flex-1 flex items-center justify-center min-h-0 my-8">
          <h1 className="text-[11vw] font-black leading-none tracking-tighter uppercase text-transparent bg-clip-text bg-linear-to-b from-white via-gray-200 to-gray-700 select-none">
            MUHAMMAD
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-auto pt-6">
          <p>© {new Date().getFullYear()} Muhammad A. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms and conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;