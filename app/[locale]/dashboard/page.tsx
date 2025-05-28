import React from 'react'
import { useTranslations } from 'next-intl'; // Ensure this is the correct import path for useTranslations
import DashboardCards from '@/components/Cards';
import Quicklinks from '@/components/general/Quicklinks';
import AdvertSection from '@/components/AdvertSection';

export default function Page() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1 className='text-3xl font-bold'>{t('goodmorning')} <span className='text-primary'>A. N Other</span></h1>
      <DashboardCards/>
      <Quicklinks/>
      <AdvertSection/>
    </div>
  )
}
