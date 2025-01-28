import { formattedDate } from "@/utils";
import CustomCard from "../customCard/CustomCard";
import { Race } from "@/types";
import { Pin } from "lucide-react";
import clsx from "clsx";
import { MouseEvent } from "react";

type Props = {
  race: Race;
  onClick?: Function;
  setPinnedRaces: React.Dispatch<React.SetStateAction<Race[]>>;
  isPinned?: boolean;
};

function RaceCard(props: Props) {
  const { race, onClick, setPinnedRaces, isPinned = false } = props;

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
    <CustomCard
      className="shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
      title={`Race: ${race.raceName}`}
      onClick={() => onClick?.()}
      headerIcon={
        <Pin
          className={clsx(
            isPinned ? "text-slate-600" : "text-slate-400",
            "hover:text-slate-500"
          )}
          onClick={handleTogglePinStatus}
        />
      }
    >
      <div className="space-y-2">
        <p className="truncate">Circuit: {race.Circuit.circuitName}</p>
        <p>Date: {formattedDate(new Date(race.date)) || ""}</p>
      </div>
      <p className="truncate text-pretty mt-2">
        Read more: &nbsp;
        <a
          href={race.url}
          rel="noopener noreferrer"
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          {race.url}
        </a>
      </p>
    </CustomCard>
  );
}

export default RaceCard;
