import { FC, ReactNode } from "react";
import Link from "next/link";
import {
  BellIcon,
  HomeIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LayoutProps {
  children: ReactNode;
}

const headerLinks = [
  { icon: <HomeIcon />, label: "Home", path: "/" },
  { icon: <UserIcon />, label: "User", path: "/user" },
  { icon: <SettingsIcon />, label: "Settings", path: "/settings" },
  { icon: <BellIcon />, label: "Notifications", path: "/notifications" },
  { icon: <LogOutIcon />, label: "Log Out", path: "/log-out" },
];

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            DailyPilot
          </Link>
          <div className="flex gap-5">
            {headerLinks.map(({ icon, label, path }) => (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link key={label} href={path} className="mx-2">
                      {icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
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
