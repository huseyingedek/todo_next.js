import React from 'react';
import { LockIcon } from 'lucide-react';
import { LoginForm } from '@/Core/index';

const Login = () => {


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="w-full max-w-md px-8 py-10 bg-white rounded-2xl shadow-2xl transform transition-all">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-4">
                        <LockIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Hoş Geldiniz</h1>
                    <p className="text-gray-500 text-sm mb-8">Hesabınıza giriş yapın</p>
                </div>

                <LoginForm />

                <div className="mt-8 space-y-4">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">veya</span>
                        </div>
                    </div>

                    <p className="text-center text-sm">
                        <span className="text-gray-500">Hesabınız yok mu? </span>
                        <a
                            href="/register"
                            className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            Hemen Kayıt Olun
                        </a>
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <a
                        href="/forgot-password"
                        className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        Şifrenizi mi unuttunuz?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;