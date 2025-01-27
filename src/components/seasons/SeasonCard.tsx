import CustomCard from "../customCard/CustomCard";
import { Season } from "@/types";

type Props = {
  season: Season;
};

function SeasonCard(props: Props) {
  const { season } = props;

  return (
    <CustomCard title={`Season: ${season.season}`} onClick={() => {}}>
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
