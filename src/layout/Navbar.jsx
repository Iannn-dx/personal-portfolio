import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobileMenuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-50">
        <div
          className={
            isMobileMenuOpen
              ? "max-md:glass-strong max-md:border-b max-md:border-border"
              : undefined
          }
        >
          <nav className="container mx-auto flex items-center justify-between px-6 py-5">
            <a
              href="#"
              className="text-xl font-bold tracking-tight hover:text-primary"
              onClick={closeMenu}
            >
              Ian<span className="text-primary">.</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <Button size="sm">Contact Me</Button>
            </div>

            <button
              type="button"
              className="md:hidden p-2 text-foreground"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border">
              <div className="container mx-auto flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3">
                  <Button size="sm" onClick={closeMenu}>
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
