import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/src/Hooks/useTheme";

export default function DarkModeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-text cursor-pointer border-r border-border"
    >
      {theme === "dark" ? (
        <>
          <Moon size={20} strokeWidth={1} />
          <p className="hidden md:block">Dark</p>
        </>
      ) : (
        <>
          <Sun size={20} strokeWidth={1} />
          <p className="hidden md:block">Light</p>
        </>
      )}
    </button>
  );
}
