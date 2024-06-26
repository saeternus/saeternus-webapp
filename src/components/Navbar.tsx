import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import Image from 'next/image';
import { WideScreenNav, SmallScreenNav } from './ScreenSizeNav';

// TODO: The auth param could be used when we have authentication
export interface Navigation {
  path: string;
  name: string;
  authNeeded: boolean;
}

const navigations: Navigation[] = [
  { path: '/courses', name: 'Courses', authNeeded: true },
  { path: '/knowledge', name: 'Knowledge Haven', authNeeded: true },
  { path: '/contact', name: 'Contact', authNeeded: true },
];

const Navbar = () => {
  return (
    <nav className='sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link
            href='/'
            className='z-40 flex items-center justify-between gap-2 font-semibold'
          >
            <Image
              src='/android-chrome-192x192.png'
              alt='Saeturnus Logo'
              width={32}
              height={32}
            />
            <span className='text-primary'>Saeturnus</span>
          </Link>

          {/* hamburger menu */}
          <SmallScreenNav navigations={navigations} />

          {/* nav option large screen */}
          <div className='hidden items-center space-x-4 sm:flex'>
            <WideScreenNav navigations={navigations} />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
