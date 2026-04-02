import { Outlet } from "react-router";
import TopBarElements from "../components/TopBarElements";

export default function AppLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Top Bar */}
      <div className="w-full h-12 shrink-0 bg-surface2 flex items-center justify-between px-7">
        <h3 className="text-normal font-bold text-text">
          Git<span className="text-green">Shooter</span>
        </h3>
        <TopBarElements />
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
