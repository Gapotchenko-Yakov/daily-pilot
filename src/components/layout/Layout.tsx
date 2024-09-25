import { FC, ReactNode } from "react";
import Link from "next/link";
import {
  ActivityIcon,
  BellIcon,
  CalendarIcon,
  CheckSquareIcon,
  DollarSignIcon,
  HomeIcon,
  LogOutIcon,
  SettingsIcon,
  TagIcon,
  TargetIcon,
  UserIcon,
  ClipboardCheckIcon,
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
  { Icon: HomeIcon, label: "Home", path: "/" },
  { Icon: UserIcon, label: "User", path: "/user" },
  { Icon: SettingsIcon, label: "Settings", path: "/settings" },
  { Icon: BellIcon, label: "Notifications", path: "/notifications" },
  {
    Icon: LogOutIcon,
    label: "Log Out",
    path: "/log-out",
  },
];

const sidebarLinks = [
  {
    Icon: CheckSquareIcon,
    label: "Tasks",
    path: "/tasks",
  },
  {
    Icon: TargetIcon,
    label: "Goals",
    path: "/goals",
  },
  {
    Icon: ActivityIcon,
    label: "Habits",
    path: "/habits",
  },
  {
    Icon: DollarSignIcon,
    label: "Transactions",
    path: "/transactions",
  },
  {
    Icon: TagIcon,
    label: "Tags",
    path: "/tags",
  },
  {
    Icon: CalendarIcon,
    label: "Reminders",
    path: "/reminders",
  },
];

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-alt px-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="appname-link">
            <ClipboardCheckIcon size={36} /> | DailyPilot
          </Link>
          <div className="flex gap-5">
            {headerLinks.map(({ Icon, label, path }) => (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link key={label} href={path} className="text-xl mx-2">
                      {<Icon className="header-link" />}
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
          <div className="flex flex-col gap-5">
            {sidebarLinks.map(({ Icon, label, path }) => (
              <Link key={label} href={path} className="sidebar-link">
                {<Icon />}
                <span>{label}</span>
              </Link>
            ))}
          </div>
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
