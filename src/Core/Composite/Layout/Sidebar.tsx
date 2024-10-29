import React from 'react';
import { CheckSquare, Calendar, Star, Archive, Menu, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r transition-all duration-300 p-4 flex flex-col`}>
            <div className="flex items-center justify-between mb-8">
                <h1 className={`font-bold text-xl text-blue-600 ${!isSidebarOpen && 'hidden'}`}>Menu</h1>
                <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg">
                    <Menu size={20} />
                </button>
            </div>

            <nav className="flex-1">
                <ul className="space-y-2">
                    {[
                        { icon: <CheckSquare size={20} />, label: 'Tüm Görevler', active: true },
                        { icon: <Calendar size={20} />, label: 'Bugün' },
                        { icon: <Star size={20} />, label: 'Önemli' },
                        { icon: <Archive size={20} />, label: 'Arşiv' },
                    ].map((item, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className={`flex items-center space-x-3 p-3 rounded-lg ${item.active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                                    }`}
                            >
                                {item.icon}
                                {isSidebarOpen && <span>{item.label}</span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="border-t pt-4">
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                            <Settings size={20} />
                            {isSidebarOpen && <span>Ayarlar</span>}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-red-500">
                            <LogOut size={20} />
                            {isSidebarOpen && <Link href="/login"><span>Çıkış Yap</span></Link>}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;