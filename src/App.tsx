import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { ScrollToTop } from './Components/ScrollToTop';
import { Home } from './Pages/Home/Home';
import { AboutPage } from './Pages/AboutPage/AboutPage';
import { ContactPage } from './Pages/ContactPage/ContactPage';
import { AdminPage } from './Pages/AdminPage/AdminPage';
import { ServicesOverview } from './Pages/ServicesOverview/ServicesOverview';
import { ServicesPage } from './Pages/ServicesPage/ServicesPage';
import { ServiceDetailPage } from './Pages/ServiceDetailPage/ServiceDetailPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

import { useEffect, useState } from 'react';

function AppContent({ theme, changeTheme }: { theme: string; changeTheme: () => void }) {
    const location = useLocation();
    const isAdminPage = location.pathname === '/admin';

    return (
        <>
            <ScrollToTop />
            {!isAdminPage && <Header theme={theme} changeTheme={changeTheme} />}
            <main>
                <Routes>
                    <Route path="/" element={<Home theme={theme} />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/services-overview" element={<ServicesOverview />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
                </Routes>
            </main>
            {!isAdminPage && <Footer />}
        </>
    );
}

function App() {
    const [theme, setTheme] = useState<string>('');

    const changeTheme = () => {
        theme === '' ? setTheme('light-theme') : setTheme('');
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <DataProvider>
            <Router>
                <AppContent theme={theme} changeTheme={changeTheme} />
            </Router>
        </DataProvider>
    );
}

export default App;
