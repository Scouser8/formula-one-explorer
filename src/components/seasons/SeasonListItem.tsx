import { Button } from "../ui/button";

type Props = {
  title: string;
  content: string;
  onClick: Function;
};

function SeasonListItem(props: Props) {
  const { title, content, onClick } = props;
  return (
    <div className="space-y-2" onClick={() => onClick()}>
      <h1 className="font-medium">Season: {title}</h1>
      <p>
        Read More: &nbsp;
        <a
          href={content}
          rel="noopener noreferrer"
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </a>
      </p>
      <Button>View Races</Button>
    </div>
  );
}

export default SeasonListItem;
