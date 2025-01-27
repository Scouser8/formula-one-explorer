import { Race } from "@/types";
import { Button } from "../ui/button";

type Props = {
  race: Race;
  onClick?: Function;
};

function RaceListItem(props: Props) {
  const { race, onClick } = props;
  return (
    <div className="space-y-2" onClick={() => onClick?.()}>
      <h1 className="font-medium">Race: {race.raceName}</h1>
      <p>Circuit: {race.Circuit.circuitName}</p>
      <p>
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
      <Button>View Drivers</Button>
    </div>
  );
}

export default RaceListItem;
