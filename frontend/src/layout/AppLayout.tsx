import { Outlet } from "react-router";
import TopBarElements from "../components/TopBarElements";

export default function AppLayout() {
  return (
    <>
      {/* Top Bar  */}
      <div className="w-full h-12 bg-surface2 flex items-center justify-between px-7">
        <h3 className="text-normal font-bold text-text">
          Git<span className="text-green">Shooter</span>
        </h3>
        <TopBarElements />
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
