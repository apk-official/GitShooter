import { Outlet } from "react-router";
export default function AppLayout() {
  return (
    <>
      <div className="w-full h-12 bg-gs-surface2"></div>
      <div className="w-full min-h-screen
     flex items-center justify-center"><Outlet /></div></>
    
  )
}

