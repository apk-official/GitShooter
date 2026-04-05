import AttackAndLeadershipBtn from "../components/AttackAndLeadershipBtn";
import GitHubContributionChart from "../components/GitHubContributionChart";
import PlayerInfo from "../components/PlayerInfo";
import PlayerStat from "../components/PlayerStat";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
    <div className="w-90 md:w-140 lg:w-190 xl:240 border border-border rounded-xl p-4 flex flex-col gap-4 items-start">
      <section className="flex items-center justify-center gap-2">
        <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-text"></div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-text">Welcome apk-official</h3>
          <p className="text-sm font-light text-text2">Your account has been attacked 2 times</p>
        </div>
      </section>
      <GitHubContributionChart />
      <PlayerStat />
      </div>
      <AttackAndLeadershipBtn />
      <h4 className="text-sm text-text2 font-mono">TRENDING TARGETS TODAY</h4>
      <PlayerInfo/>
      </div>
  )
}
