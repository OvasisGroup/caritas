'use client';

import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { LanguagesIcon } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const handleChange = (locale: string) => {
    startTransition(() => {
      const pathWithoutLocale = pathname.replace(/^\/(en|sw|fr)/, ''); // Remove existing locale
      router.replace(`/${locale}${pathWithoutLocale}`);
    });
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[150px]">
        <LanguagesIcon/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="sw">Swahili</SelectItem>
        <SelectItem value="fr">Français</SelectItem>
      </SelectContent>
    </Select>
  );
}
