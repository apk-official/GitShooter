export default function PlayerInfo() {
  return (
    <div className="flex w-full bg-surface2 border border-border rounded-lg items-center justify-between p-2 text-sm">
      <div className="flex items-center justify-center gap-2">
        <p>#1</p>
        <div className="w-8 h-8 rounded-full bg-surface3"></div>
        <p className="w-45">apk-official</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <p>x2</p>
        <p>12300</p>
        <button className="py-1 px-2 border border-red text-red hover:bg-red/10 rounded-lg cursor-pointer">
          Attack
        </button>
      </div>
    </div>
  );
}
