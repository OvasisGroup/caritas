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
                        <label className='block text-sm font-medium mb-2' htmlFor='userId'>UserId</label>
                        <input type='text' id='userId' className='w-full p-2 border border-gray-300 rounded-md' required />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-sm font-medium mb-2' htmlFor='password'>Password</label>
                        <input type='password' id='password' className='w-full p-2 border border-gray-300 rounded-md' required />
                    </div>
                    
                        <ReCAPTCHA
                            sitekey="6Lcy8h4lAAAAAOr9b1k2Z5g3X7f0z8v9y5a1b2c3"
                            onChange={(token: string | null) => setCaptchaToken(token)}
                        />
                    <button type='submit' className='w-full bg-primary text-white py-2 rounded hover:bg-secondary'>Login</button>
                </form>
            </div>
            
            </div>
        
    </div>
  )
}
