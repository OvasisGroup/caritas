"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import LanguageSwitcher from '../LanguageSwitcher';


export default function LoginPage() {
    const t = useTranslations('HomePage');
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!captchaToken) return alert("Please complete the reCAPTCHA.");
    
        // Send captchaToken with login request
        const res = await fetch("/api/login", {
          method: "POST",
          body: JSON.stringify({ username: "demo", password: "demo", captchaToken }),
        });
    
        const data = await res.json();
        console.log(data);
      };

  return (
    <div className='grid md:grid-cols-2 h-screen bg-white'>
        <div className='bg-gray-100 flex items-center justify-center bg-[url(/images/jpg/oldladybanker.jpg)] bg-cover bg-center'></div>
        <div className='bg-white'>
            <div className='flex flex-row items-center justify-end p-4 absolute top-0 right-0'>
            <LanguageSwitcher/>
            </div>
            
            <div className='flex items-center justify-center h-screen'>
            <div className='w-full max-w-md p-8 rounded-lg '>
                <Image src="/images/jpg/caritas_logo.png" alt="Logo" width={180} height={100} className='mb-4 flex items-center justify-center' />
                <p className='text-2xl font-bold mb-6'>{t('login')}</p>
                <p className='text-lg mb-4'>{t('welcome')}</p>
                <form onSubmit={handleLogin} className='space-y-4'>
                    <div className='mb-4'>
                        <input type='text' id='userId' placeholder='Enter your user id' className='w-full p-2 border border-gray-300 rounded-md' required />
                    </div>
                    <div className='mb-4'>
                        <input type='password' placeholder='Enter your password' id='password' className='w-full p-2 border border-gray-300 rounded-md' required />
                    </div>
                    <button type='submit' className='w-full bg-primary text-white py-2 rounded hover:bg-secondary'>{t('loginbutton')}</button>
                    
                        <ReCAPTCHA
                            sitekey="6LdfW0wrAAAAAKALu4qKDrzajNZCZ3S7tHTbnXLe"
                            onChange={(token: string | null) => setCaptchaToken(token)}
                            className='w-full'
                        />
                    
                </form>
            </div>
            </div>
            
            </div>
        
    </div>
  )
}
