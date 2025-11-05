import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link to="/" className="font-heading text-3xl font-normal italic tracking-tight hover:opacity-80 transition-opacity">
            el Preferido
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                to="/"
                className={`font-body text-sm uppercase tracking-wider transition-all hover:text-primary ${
                  isActive("/") ? "text-primary font-semibold border-b-2 border-primary pb-1" : "text-foreground"
                }`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/historia"
                className={`font-body text-sm uppercase tracking-wider transition-all hover:text-primary ${
                  isActive("/historia") ? "text-primary font-semibold border-b-2 border-primary pb-1" : "text-foreground"
                }`}
              >
                Nuestra Historia
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className={`font-body text-sm uppercase tracking-wider transition-all hover:text-primary ${
                  isActive("/menu") ? "text-primary font-semibold border-b-2 border-primary pb-1" : "text-foreground"
                }`}
              >
                Menú
              </Link>
            </li>
            <li>
              <Link
                to="/reservas"
                className="font-body text-sm uppercase tracking-wider px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-colors"
              >
                Reservar
              </Link>
            </li>
          </ul>

          {/* Mobile menu icon */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
