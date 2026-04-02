import { useTheme } from "@/src/Hooks/useTheme";
export default function BuyMeACoffee() {
  const { theme } = useTheme();
  return (
    <a
      href="#"
      className="flex items-center justify-center gap-2 text-sm text-text2 px-4 py-2 hover:underline"
    >
      <img
        src={theme === "dark" ? "/buymeacoffee.svg" : "/buymeacoffee-light.svg"}
        alt="Buy me a Coffee Icon"
        className="w-4 h-4 text-text"
      />
      <p className="text-amber hidden md:block">Buy me a coffee</p>
    </a>
  );
}
