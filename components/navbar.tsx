// components/Navbar.tsx

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between h-16 bg-gray-800 text-white">
      <div className="pl-4">
        <Link href="/">
          {/* Wrap the text in the Link component */}
          <a className="text-xl font-bold">Logo</a>
        </Link>
      </div>
      <ul className="flex items-center">
        <li className="mr-6">
          <Link href="/">
            {/* Use the Link component for navigation */}
            <a className="hover:text-gray-300">Home</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/about">
            {/* Use the Link component for navigation */}
            <a className="hover:text-gray-300">About</a>
          </Link>
        </li>
        {/* Add more navigation links here */}
      </ul>
    </nav>
  );
};

export default Navbar;
