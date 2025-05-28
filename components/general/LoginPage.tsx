"use client"
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";


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
    <div className='grid md:grid-cols-2 h-screen'>
        <div className='bg-gray-100 flex items-center justify-center'></div>
        <div className='flex items-center justify-center'>
            <div className='w-full max-w-md p-8 rounded-lg'>
                <h2 className='text-2xl font-bold mb-6'>{t('Login')}</h2>
                <form onSubmit={handleLogin} className='space-y-4'>
                    <div className='mb-4'>
                        <input type='text' id='userId' placeholder='Enter your user id' className='w-full p-2 border border-gray-300 rounded-md' required />
                    </div>
                    <div className='mb-4'>
                        <input type='password' placeholder='Enter your password' id='password' className='w-full p-2 border border-gray-300 rounded-md' required />
                    </div>
                    <button type='submit' className='w-full bg-primary text-white py-2 rounded hover:bg-secondary'>Login</button>
                    
                        <ReCAPTCHA
                            sitekey="6LdfW0wrAAAAAKALu4qKDrzajNZCZ3S7tHTbnXLe"
                            onChange={(token: string | null) => setCaptchaToken(token)}
                            className='w-full'
                        />
                    
                </form>
            </div>
            
            </div>
        
    </div>
  )
}
