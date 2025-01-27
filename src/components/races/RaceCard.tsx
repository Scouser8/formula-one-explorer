import { formattedDate } from "@/utils";
import CustomCard from "../customCard/CustomCard";
import { Race } from "@/types";

type Props = {
  race: Race;
  onClick?: Function;
};

function RaceCard(props: Props) {
  const { race, onClick } = props;

  return (
    <CustomCard
      className="shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
      title={`Race: ${race.raceName}`}
      onClick={() => onClick?.()}
    >
      <div className="space-y-2">
        <p>Circuit: {race.Circuit.circuitName}</p>
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
