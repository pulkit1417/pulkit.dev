export default function FooterSection() {
  const navLinks = ['About', 'Experience', 'Skills', 'Works', 'Certifications'];

  return (
    <footer className="relative z-10 glass-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top row: brand + nav */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-10 border-b border-white/[0.06]">
          <div className="footer-brand text-center md:text-left">
            <a href="#home" className="text-2xl font-black text-white tracking-tighter hover:text-primary transition-colors">
              Pulkit<span className="text-primary">.</span>dev
            </a>
            <p className="text-gray-600 text-sm mt-1 max-w-xs">
              Building impactful things for the web. Always learning, always shipping.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="footer-link text-sm text-gray-500 hover:text-primary transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
