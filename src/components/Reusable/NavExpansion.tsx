import { Home, Book, Search, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavExpansion() {
  const navData: { icon: React.ElementType; title: string; link: string }[] = [
    { icon: Home, title: "Home", link: "/" },
    { icon: Book, title: "Courses", link: "/Courses" },
    { icon: Search, title: "Search", link: "/Search" },
    { icon: LogIn, title: "Login/Register", link: "/Login" },
  ];

  return (
    <div className="bg-slate-900 pb-4 animate-slideDown">
      <div className="flex flex-col gap-1 px-4 pt-2">
        {navData.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              to={item.link}
              className="flex items-center gap-4 rounded-lg px-4 py-3 text-gray-300 transition-all hover:bg-slate-800/50 hover:text-amber-500 active:scale-95"
              key={index}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{item.title}</span>
            </Link>
          );
        })}
      </div>

      {/* Optional: Add a gradient CTA button */}
      <div className="px-4 mt-3">
        <Link
          to="/Register"
          className="flex items-center justify-center gap-2 w-full rounded-lg bg-linear-to-r from-amber-600 to-amber-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-900/25 transition-all hover:from-amber-700 hover:to-amber-800"
        >
          <LogIn className="h-4 w-4" />
          Get Started
        </Link>
      </div>
    </div>
  );
}
