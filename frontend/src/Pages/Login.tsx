import Stat from "../components/Stat";
import { useTheme } from "../Hooks/useTheme";
export default function Login() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-7 self-center">
      <img src="/Logo.svg" alt="GitShooter Logo" className="h-20 mb-4"/>
      <h1 className="text-2xl font-bold text-text">
        Git<span className="text-green">Shooter</span>
      </h1>
      <p className="md:text-sm text-center font-light text-text2 text-xs">
        Attack GitHub profiles with your contribution graph. Your badges are
        your weapons.
      </p>
      <button className="w-full py-2 flex items-center justify-center gap-2 border border-border text-sm bg-surface2 cursor-pointer hover:bg-surface3 rounded-lg">
        <img
          src={theme === "dark" ? "/github-light.svg" : "/github.svg"}
          alt="Github"
          className="w-4 h-4 text-text"
        />
        <p>SignIn with Github</p>
      </button>
      <p className="md:text-sm text-xs text-center font-light text-text3">
        Attack GitHub profiles with your contribution graph. Your badges are
        your weapons.
      </p>
      <Stat />
    </div>
  );
}
