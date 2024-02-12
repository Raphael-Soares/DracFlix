import NavigationBar from '@/components/NavigationBar';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <div className='relative'>
      <NavigationBar />

      {children}
    </div>
  );
}
