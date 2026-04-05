import { Sword } from "lucide-react";

export default function PlayerInfo() {
  return (
    <div className="flex w-full bg-surface2 border border-border rounded-lg items-center justify-between p-2 text-sm">
      {/* Rank, Profile Image and Name  */}
      <div className="flex items-center justify-start gap-2">
        <p className="text-text2">#1</p>
        <div className="w-8 h-8 rounded-full bg-surface3"></div>
        <p className="w-45 text-text">apk-official</p>
      </div>
      {/* Badge, Score and Attack Btn  */}
      <div className="flex items-center justify-start gap-3">
        <p className="text-blue">x2</p>
        <p className="text-green">12300</p>
        <button className="py-1 px-2 border border-red text-red hover:bg-red/10 rounded-lg cursor-pointer flex items-center justify-center gap2">
          <Sword strokeWidth={1} size={16} />
          Attack
        </button>
      </div>
    </div>
  );
}
