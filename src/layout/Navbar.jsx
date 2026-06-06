const navLinks = [
  {href: "#about", label: "About"},
  {href: "#projects", label: "Projects"},
  {href: "#certificates", label: "Certificates"},
]

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 bg-transparent right-0 py-5">
    <nav className="container mx-auto px-6 flex items-center justify-between">
      <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">Ian <span className="text-primary">.</span></a>
      {/* desktop nav */}
      <div className="flex items-center gap-1">
        <div className="glass">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href}>{link.label}</a>
          ))}
        </div>
      </div>
    </nav>
  </header>
  );
}