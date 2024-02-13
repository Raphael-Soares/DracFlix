import { NavigationMenuItem, NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import React from 'react';
import { navigationMenuTriggerStyle } from './ui/navigation-menu';

export default function NavigationBarItem({ link, title }: { link: string; title: string }) {
  return (
    <NavigationMenuItem>
      <Link href={link} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle() + '  bg-transparent  hover:bg-black/10'}>{title}</NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
