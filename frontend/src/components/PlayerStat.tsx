export default function PlayerStat() {
  const playerStatData = [
    {
      id: "ps1",
      value: "10",
      label: "Defence Score",
    },
    {
      id: "ps2",
      value: "1223",
      label: "Global Rank",
    },
    {
      id: "ps3",
      value: "x2",
      label: "Badges",
    },
  ];
  return (
    <div className="flex gap-2 w-full justify-between items-center ">
      {playerStatData.map((playerStat) => (
        <div
          key={playerStat.id}
          className="px-8 py-6 bg-surface3 flex flex-col gap-1 items-center justify-center flex-1 rounded-lg"
        >
          <p className="text-normal font-bold text-green">{playerStat.value}</p>
          <p className="text-xs font-light text-text2">{playerStat.label}</p>
        </div>
      ))}
    </div>
  );
}
