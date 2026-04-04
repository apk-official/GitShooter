import { Swords, Trophy } from "lucide-react";

export default function AttackAndLeadershipBtn() {
  return (
    <div className="full flex items-center justify-center gap-2">
      {/* Attack Button  */}
      <button className="px-2 py-3 flex-1 bg-red text-text flex items-center justify-center gap-1 rounded-lg text-sm">
        <Swords strokeWidth={1} size={16}/>
        Attack Someone
      </button>
      {/* View LeadershipButtin  */}
      <button className="px-2 py-3 flex-1 bg-surface border border-border text-text2 flex items-center justify-center gap-1 rounded-lg text-sm">
        <Trophy strokeWidth={1} size={16}/>
        View Leaderboard
      </button>
    </div>
  );
}
