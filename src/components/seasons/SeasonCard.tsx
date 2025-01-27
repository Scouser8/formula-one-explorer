import CustomCard from "../customCard/CustomCard";
import { Season } from "@/types";

type Props = {
  season: Season;
};

function SeasonCard(props: Props) {
  const { season } = props;

  return (
    <CustomCard
      className="shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
      title={`Season: ${season.season}`}
      onClick={() => {}}
    >
      <span className="text-pretty">
        Read more: &nbsp;
        <a href={season.url} rel="noopener noreferrer" target="_blank">
          {season.url}
        </a>
      </span>
    </CustomCard>
  );
}

export default SeasonCard;
