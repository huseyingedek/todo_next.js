import React, { ReactNode, useState } from 'react';
import Header from '../Header';
import Sidebar from './Sidebar';
import Footer from '../Footer';
import { useRouter } from 'next/router';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const router = useRouter();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const isAuthPage = router.pathname === '/login' || router.pathname === '/register';

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {!isAuthPage && <Header />}
            <div className="flex flex-1">
                {!isAuthPage && <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
                <main className={`flex-1 ${isAuthPage ? 'p-0' : 'p-8'}`}>
                    {children}
                </main>
            </div>
            {!isAuthPage && <Footer />}
        </div>
    );
};

export default Layout;