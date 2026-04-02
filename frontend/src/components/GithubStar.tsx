import { useTheme } from "@/src/Hooks/useTheme";
import { Star } from "lucide-react";
export default function GithubStar() {
  const { theme } = useTheme();
  return (
    <a
      href="#"
      className="flex items-center justify-center gap-2 text-sm text-text2 border-r border-border px-4 py-2 hover:underline"
    >
      <img
        src={theme === "dark" ? "/github-light.svg" : "/github.svg"}
        alt="Github"
        className="w-4 h-4 text-text"
      />
      <p className="md:flex items-center justify-center gap-1 hidden">
        10 <Star size={16} />
      </p>
    </a>
  );
}
