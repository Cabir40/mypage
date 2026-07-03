import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { isActive } = useSubscription();


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleHashLink = (hash: string) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-base sm:text-lg">C</span>
              </div>
              <span className="text-base sm:text-xl font-bold font-serif truncate">Cabir Çelik</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link to="/" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              Home
            </Link>
            <Link to="/projects" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              Projects
            </Link>
            <Link to="/blogs" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              Blogs
            </Link>
            <Link to="/source" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              Source
            </Link>
            <Link to="/about" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              About
            </Link>
            <Link to="/membership" className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all">
              Membership
            </Link>

          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full hover:bg-muted/60 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>

            {user && isActive && (
              <Link
                to="/membership"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-medium rounded-full bg-primary/10 text-primary px-3 py-1"
                title="Active member"
              >
                <Sparkles className="w-3 h-3" /> Member
              </Link>
            )}

            {user ? (

              <Button onClick={async () => { await signOut(); navigate("/"); }} variant="outline" className="hidden md:flex rounded-full px-6 py-2">
                Sign out
              </Button>
            ) : (
              <Button onClick={() => navigate("/auth")} className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-2 hover:scale-105 transition-all">
                Sign in
              </Button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/projects" className="text-sm font-medium hover:text-accent transition-colors">
                Projects
              </Link>
              <Link to="/blogs" className="text-sm font-medium hover:text-accent transition-colors">
                Blogs
              </Link>
              <Link to="/source" className="text-sm font-medium hover:text-accent transition-colors">
                Source
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/membership" className="text-sm font-medium hover:text-accent transition-colors">
                Membership
              </Link>

              {user ? (
                <Button onClick={async () => { await signOut(); setIsMenuOpen(false); navigate("/"); }} variant="outline" className="rounded-full w-full">
                  Sign out
                </Button>
              ) : (
                <Button onClick={() => { setIsMenuOpen(false); navigate("/auth"); }} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full">
                  Sign in
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
