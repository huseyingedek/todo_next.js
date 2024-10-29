import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    important: boolean;
}

const Header: React.FC = () => {
    return (
        <header className="h-16 bg-white border-b px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <h1 className="text-xl font-semibold text-gray-800">Todo App</h1>
            </div>

            <div className="flex items-center space-x-4">
                <div className="relative hidden sm:block">
                    <input
                        type="text"
                        placeholder="Ara..."
                        className="w-64 px-4 py-2 pr-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>

                <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <User className="text-white" size={20} />
                    </div>
                    <span className="text-sm font-medium hidden sm:inline">Hüseyin</span>
                </div>
            </div>
        </header>
    );
};

export default Header;