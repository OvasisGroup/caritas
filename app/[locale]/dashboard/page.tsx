import React from 'react'
import { useTranslations } from 'next-intl'; // Ensure this is the correct import path for useTranslations

export default function Page() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{t('title')}</h1>
    </div>
  )
}
