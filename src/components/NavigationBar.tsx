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

export default function NavigationBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  }, []);
  return (
    <div
      className={`flex gap-4 p-4 px-8 justify-between fixed w-full duration-1000 ease-in-out z-10
      ${scroll > 0 ? 'bg-black' : 'bg-transparent'}`}>
      <div className='flex gap-4'>
        <Image src='https://drac-flix.vercel.app/assets/Netflix_logo.8c72dbdb.svg' alt='Netflix logo' width={100} height={50} />

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href='/browse/' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + '  bg-transparent hover:bg-black/10'}>
                  Início
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href='/browse/shows' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + '  bg-transparent hover:bg-black/10'}>
                  Séries
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href='/browse/movies' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + '  bg-transparent hover:bg-black/10'}>
                  Filmes
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href='/browse/featured' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + '  bg-transparent hover:bg-black/10'}>
                  Bombando
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href='/browse/my-list' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + '  bg-transparent hover:bg-black/10'}>
                  Minha lista
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div>
        <ToggleTheme />
      </div>
    </div>
  );
}
