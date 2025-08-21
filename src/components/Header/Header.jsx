import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Container, Logo, LogoutBtn } from '../index'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/sign-up',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Posts',
      slug: '/add-posts',
      active: authStatus
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-200 shadow-sm">
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="transition-transform duration-200 group-hover:scale-105">
                <Logo />
              </div>
              <span className="text-xl font-bold text-blue-700 hidden sm:block">
                Your Brand
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              item.active ? (
                <button
                  key={item.name}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 rounded-full hover:text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 group"
                  onClick={() => navigate(item.slug)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
                </button>
              ) : null
            )}
            
            {authStatus && (
              <div className="ml-4 pl-4 border-l border-blue-200">
                <LogoutBtn />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-200 bg-blue-50/50 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) =>
                item.active ? (
                  <button
                    key={item.name}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-blue-700 hover:text-blue-100 transition-colors duration-200"
                    onClick={() => {
                      navigate(item.slug);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </button>
                ) : null
              )}
              
              {authStatus && (
                <div className="border-t border-blue-200 pt-3 mt-3">
                  <LogoutBtn />
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;