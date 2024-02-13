'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

import ToggleTheme from '@/components/ToggleTheme';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavigationBarItem from './NavigationBarItem';

export default function NavigationBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  }, []);

  const NAV_ITEMS = [
    { title: 'Início', href: '/browse/' },
    { title: 'Séries', href: '/browse/shows' },
    { title: 'Filmes', href: '/browse/movies' },
    { title: 'Bombando', href: '/browse/featured' },
    { title: 'Minha lista', href: '/browse/my-list' }
  ];

  return (
    <div
      className={`flex  gap-4 p-4 px-8 justify-between fixed w-full duration-1000 ease-in-out z-10
      ${scroll > 0 ? 'bg-black' : 'bg-transparent'}`}>
      <div className='flex gap-4 bg'>
        <Image src='https://drac-flix.vercel.app/assets/Netflix_logo.8c72dbdb.svg' alt='Netflix logo' width={100} height={50} />

        <NavigationMenu className=''>
          <NavigationMenuList>
            {NAV_ITEMS.map((item, index) => (
              <NavigationBarItem key={index} link={item.href} title={item.title} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div>
        <ToggleTheme />
      </div>
    </div>
  );
}
