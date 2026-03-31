import { Outlet } from "react-router";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/src/Hooks/useTheme";


export default function AppLayout() {
  const { theme, toggle } = useTheme();
  return (
    <>
      {/* Top Bar  */}
      <div className="w-full h-12 bg-surface2 flex items-center justify-between px-7">
        <h3 className="text-normal font-bold text-text">Git<span className="text-green">Shooter</span></h3>
        {/* Dark mode toggle  */}
        <button onClick={toggle} className="flex items-center justify-center gap-2 px-4 py-2 text-sm cursor-pointer">
          {theme === "dark" ? (
            <>
              <Moon size={20} strokeWidth={1} /> Dark
            </>
          ) : (
            <>
              <Sun size={20} strokeWidth={1} />
              Light
            </>
          )}
        </button>
      </div>
      {/* Body  */}
      <div
        className="w-full min-h-screen
     flex items-center justify-center"
      >
        <Outlet />
      </div>
    </>
  );
}
