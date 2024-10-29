import React from 'react';
import { LoginForm } from '@/Core/index';
import Link from 'next/link';

const Login = () => {
    return (
        <div className='relative h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/images/asd.jpg')" }}>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative z-10 flex flex-col justify-center items-center bg-gray-100 bg-opacity-90 p-8 rounded-lg shadow-lg'>
                <h1 className='text-4xl text-blue-900 font-bold mb-8'>Giriş Yap</h1>
                <LoginForm />
                <p className='mt-4'>
                    Hesabınız yok mu?{' '}
                    <Link href="/register" legacyBehavior>
                        <a className='text-blue-500 hover:underline'>Kayıt Ol</a>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;