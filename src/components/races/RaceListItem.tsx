import { Race } from "@/types";
import { Button } from "../ui/button";
import { Pin } from "lucide-react";
import clsx from "clsx";
import { MouseEvent } from "react";

type Props = {
  race: Race;
  handleBtnClick: Function;
  setPinnedRaces: React.Dispatch<React.SetStateAction<Race[]>>;
  isPinned?: boolean;
};

function RaceListItem(props: Props) {
  const { race, handleBtnClick, setPinnedRaces, isPinned = false } = props;

  const handleTogglePinStatus = (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    if (isPinned) {
      setPinnedRaces((prev) =>
        prev.filter((r) => r.raceName !== race.raceName)
      );
    } else {
      setPinnedRaces((prev) => [race, ...prev]);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <h1 className="font-medium">Race: {race.raceName}</h1>
        <Pin
          className={clsx(
            isPinned ? "text-slate-600" : "text-slate-400",
            "hover:text-slate-500 cursor-pointer"
          )}
          onClick={handleTogglePinStatus}
        />
      </div>
      <p>Circuit: {race.Circuit.circuitName}</p>
      <p className="truncate">
        Read More: &nbsp;
        <a
          href={race.url}
          rel="noopener noreferrer"
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          {race.url}
        </a>
      </p>
      <Button onClick={() => handleBtnClick(race.round)}>View Drivers</Button>
    </div>
  );
}

export default RaceListItem;
