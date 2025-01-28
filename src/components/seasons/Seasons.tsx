import axios from "@/axios";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SeasonListItem from "./SeasonListItem";
import { Season } from "@/types";
import { Separator } from "../ui/separator";
import SeasonCard from "./SeasonCard";
import { CustomPagination } from "../pagination/CustomPagination";
import {
  CARD_VIEW,
  CARDS_CONTAINER_STYLES,
  DEFAULT_PAGE_SIZE,
  LIST_CONTAINER_STYLES,
  LIST_VIEW,
} from "@/constants";
import { useNavigate } from "react-router";

function Seasons() {
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios(
      `/f1/seasons.json?limit=${DEFAULT_PAGE_SIZE}&offset=${
        (page - 1) * DEFAULT_PAGE_SIZE
      }`
    ).then((res) => {
      setTotalCount(res.data.MRData.total);
      setSeasons(res.data.MRData.SeasonTable.Seasons);
    });
  }, [page]);

  const handleNavigateToRaces = (season: string) => {
    navigate(`/season/${season}/races`);
  };

  return (
    <Tabs defaultValue={LIST_VIEW} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value={LIST_VIEW}>List View</TabsTrigger>
        <TabsTrigger value="card">Card View</TabsTrigger>
      </TabsList>
      <TabsContent value={LIST_VIEW}>
        <div className={LIST_CONTAINER_STYLES}>
          {seasons?.map((season, ndx) => (
            <div className="max-w-1/2 flex-1" key={season.url}>
              <SeasonListItem
                title={season.season}
                content={season.url}
                onClick={() => handleNavigateToRaces(season.season)}
              />
              {ndx + 2 < seasons.length && <Separator className="my-4" />}
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value={CARD_VIEW}>
        <div className={CARDS_CONTAINER_STYLES}>
          {seasons?.map((season) => (
            <SeasonCard
              key={`${season.season}-${season.url}`}
              season={season}
              onClick={() => handleNavigateToRaces(season.season)}
            />
          ))}
        </div>
      </TabsContent>
      <CustomPagination page={page} setPage={setPage} totalCount={totalCount} />
    </Tabs>
  );
}

export default Seasons;
