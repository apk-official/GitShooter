import { mockContributions } from "@/src/assets/mockContributionData";

const COLORS: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: "var(--color-surface2)", // empty tile — adapts to theme
  1: "var(--color-green4)", // level 1
  2: "var(--color-green3)", // level 2
  3: "var(--color-green2)", // level 3
  4: "var(--color-green)", // level 4
};

type Level = keyof typeof COLORS;

export interface Contribution {
  date: string;
  count: number;
  level: Level;
}

type Cell = Contribution | null;

function buildGrid(contributions: Contribution[]): Cell[][] {
  const byDate: Record<string, Contribution> = Object.fromEntries(
    contributions.map((d) => [d.date, d]),
  );

  const year = new Date().getFullYear();
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);

  const cursor = new Date(start);
  cursor.setDate(start.getDate() - start.getDay());

  const weeks: Cell[][] = [];
  while (cursor <= end) {
    const week: Cell[] = [];
    for (let i = 0; i < 7; i++) {
      const dateStr = cursor.toISOString().slice(0, 10);
      week.push(
        cursor.getFullYear() === year
          ? (byDate[dateStr] ?? { date: dateStr, count: 0, level: 0 })
          : null,
      );
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

interface ContributionGridProps {
  contributions?: Contribution[];
}

export default function ContributionGrid({
  contributions = mockContributions,
}: ContributionGridProps) {
  const weeks = buildGrid(contributions);

  return (
    <div className="w-full flex flex-col gap-[3px]">
      {([0, 1, 2, 3, 4, 5, 6] as const).map((di) => (
        <div key={di} className="flex gap-[3px]">
          {weeks.map((week, wi) => {
            const cell = week[di];
            return (
              <div
                key={wi}
                className="flex-1 aspect-square rounded-[2px]"
                style={{
                  background: cell ? COLORS[cell.level] : COLORS[0],
                }}
                title={cell ? `${cell.date}: ${cell.count} contributions` : ""}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
