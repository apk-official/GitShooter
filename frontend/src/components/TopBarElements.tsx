import ProfilePicture from "./ProfilePicture";
import DarkModeToggle from "./DarkModeToggle";
import GithubStar from "./GithubStar";
import BuyMeACoffee from "./BuyMeACoffee";

export default function TopBarElements() {
  return (
    <div className="flex items-center justify-center gap-2">
      {/* Profile Picture */}
      <ProfilePicture />
      {/* Dark mode toggle */}
      <DarkModeToggle />
      {/* Github Stars  */}
      <GithubStar />
      {/* Buy Me a Coffee  */}
      <BuyMeACoffee />
    </div>
  );
}
