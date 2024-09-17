import { FC, ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            DailyPilot
          </Link>
          <div>
            <Link href="/" className="mx-2">
              Home
            </Link>
            <Link href="/about" className="mx-2">
              About
            </Link>
            <Link href="/contact" className="mx-2">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex flex-1">
        <aside className="w-64 bg-gray-700 p-4">
          <h2 className="text-lg font-semibold">Sidebar</h2>
          <ul>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
            <li>
              <Link href="/logout">Logout</Link>
            </li>
          </ul>
        </aside>

        <div className="flex-1 p-6">{children}</div>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} DailyPilot. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
