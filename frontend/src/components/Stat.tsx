export default function Stat() {
  const statData = [
    {
      id:"sd1",
      value: "1",
      label: "Players",
      style: "border-r border-border",
      value_style: "text-normal text-green font-bold",
      label_style:"text-sm font-normal text-text text-center"
    },
    {
      id:"sd2",
      value: "25",
      label: "Profile Attacked",
      style: "border-r border-border",
      value_style: "text-normal text-blue2 font-bold",
      label_style:"text-sm font-normal text-text text-center"
    },
    {
      id:"sd3",
      value: "1245",
      label: "Tiles Destroyed",
      style: "",
      value_style: "text-normal text-amber font-bold",
      label_style:"text-sm font-normal text-text text-center"
    }
  ]
  return (
    <section className="w-full h-full bg-bg p-4 border-t border-border mt-4 flex items-center justify-between font-mono text-sm">
      {/* Player Stats  */}
      {statData.map((stat)=>(<div key={stat.id} className={`flex flex-col items-center justify-center gap-2  w-full ${stat.style}`}>
        {/* Value  */}
        <p className={stat.value_style}>{stat.value}</p>
        {/* Label  */}
        <p className={stat.label_style}>{stat.label}</p>
      </div>))}
    </section>
  );
}
