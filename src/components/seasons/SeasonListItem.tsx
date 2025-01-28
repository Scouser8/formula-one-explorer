import { Button } from "../ui/button";

type Props = {
  title: string;
  content: string;
  handleBtnClick: Function;
};

function SeasonListItem(props: Props) {
  const { title, content, handleBtnClick } = props;
  return (
    <div className="space-y-2">
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
      <Button onClick={() => handleBtnClick()}>View Races</Button>
    </div>
  );
}

export default SeasonListItem;
