import { FC, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo0 from '../../images/logo0.png';

interface Props {
  theme: string;
  changeTheme: () => void;
}

export const Header: FC<Props> = ({ theme, changeTheme }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const nav__links = [
    {
      path: '/',
      display: 'Accueil',
      isHash: false,
    },
    {
      path: '/services',
      display: 'Nos services',
      isHash: false,
    },
    {
      path: '/about',
      display: 'À propos',
      isHash: false,
    },
    {
      path: '/contact',
      display: 'Nous contacter',
      isHash: false,
    },
  ];

  const darkMode = (
    <div className="theme-toggle">
      <i className="ri-moon-line theme-icon" />
      <div className="toggle-switch">
        <div className="toggle-slider"></div>
      </div>
      <i className="ri-sun-line theme-icon" />
    </div>
  );

  const lightMode = (
    <div className="theme-toggle">
      <i className="ri-moon-line theme-icon" />
      <div className="toggle-switch active">
        <div className="toggle-slider"></div>
      </div>
      <i className="ri-sun-line theme-icon" />
    </div>
  );

  const headerRef = useRef<HTMLDivElement>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  const changeStickiness = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current &&
        headerRef.current.classList.add('header__shrink');
    } else {
      headerRef.current &&
        headerRef.current.classList.remove('header__shrink');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeStickiness);

    return () =>
      window.removeEventListener('scroll', changeStickiness);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const target = e.target as HTMLAnchorElement;

    const targetAttribute = target.getAttribute('href');

    if (targetAttribute !== null) {
      const element = document.querySelector(
        targetAttribute
      ) as HTMLElement;

      if (element !== null) {
        const location = element.offsetTop;

        window.scrollTo({
          left: 0,
          top: location - 80,
          behavior: 'smooth',
        });
        
        // Fermer le menu mobile après le clic
        menuRef.current?.classList.remove('menu__active');
      }
    }
  };

  const toggleMobileMenu = () =>
    menuRef.current?.classList.toggle('menu__active');

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <Link to="/">
              <img src={logo0} alt="DigiDesk" className="logo__image" />
            </Link>
          </div>
          <div
            className="navigation"
            ref={menuRef}
          >
            <ul className="menu">
              {nav__links.map((i, idx) => (
                <li key={idx} className="menu__item">
                  {i.isHash ? (
                    <a
                      href={i.path}
                      className="menu__link"
                      onClick={handleLinkClick}
                    >
                      {i.display}
                    </a>
                  ) : (
                    <Link
                      to={i.path}
                      className="menu__link"
                      onClick={() => {
                        menuRef.current?.classList.remove('menu__active');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      {i.display}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className='right-menu'>
            <div className="social__links">
              <a 
                href="https://wa.me/22890081372" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social__link"
                title="WhatsApp"
              >
                <i className="ri-whatsapp-line" />
              </a>
              <a 
                href="https://twitter.com/digidesk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social__link"
                title="X (Twitter)"
              >
                <i className="ri-twitter-x-line" />
              </a>
            </div>
            <div className="light__mode">
              <button onClick={changeTheme}>
                {theme === 'light-theme' ? lightMode : darkMode}
              </button>
            </div>
            <span className="mobile__menu" onClick={toggleMobileMenu}>
              <i className="ri-menu-line" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
