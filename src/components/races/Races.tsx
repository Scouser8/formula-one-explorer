import axios from "@/axios";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Race } from "@/types";
import { Separator } from "../ui/separator";
import { CustomPagination } from "../pagination/CustomPagination";
import { DEFAULT_PAGE_SIZE, PINNED_RACES_LOCAL_STORAGE_KEY } from "@/constants";
import RaceCard from "./RaceCard";
import RaceListItem from "./RaceListItem";
import { useNavigate, useParams } from "react-router";

const LIST_VIEW = "list";
const CARD_VIEW = "card";

function Races() {
  const { seasonYear } = useParams();
  const cachedPinnedRaces =
    localStorage.getItem(PINNED_RACES_LOCAL_STORAGE_KEY) || "[]";
  const [pinnedRaces, setPinnedRaces] = useState<Race[]>(() =>
    JSON.parse(cachedPinnedRaces)
  );
  const [races, setraces] = useState<Race[]>([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios(
      `/f1/${seasonYear}/races.json?limit=${DEFAULT_PAGE_SIZE}&offset=${
        (page - 1) * DEFAULT_PAGE_SIZE
      }`
    ).then((res) => {
      setTotalCount(res.data.MRData.total);
      setraces(res.data.MRData.RaceTable.Races);
    });
  }, [page]);

  useEffect(() => {
    localStorage.setItem(
      PINNED_RACES_LOCAL_STORAGE_KEY,
      JSON.stringify(pinnedRaces)
    );
  }, [pinnedRaces]);

  const handleNavigateToDrivers = () => {};

  return (
    <Tabs defaultValue={LIST_VIEW} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value={LIST_VIEW}>List View</TabsTrigger>
        <TabsTrigger value="card">Card View</TabsTrigger>
      </TabsList>
      <TabsContent value={LIST_VIEW}>
        {pinnedRaces?.length ? (
          <div className="w-full flex flex-wrap py-6 gap-x-8">
            {pinnedRaces.map((race, ndx) => (
              <div
                className="max-w-1/2 flex-1"
                key={`pinned-${race.season}-${race.raceName}`}
              >
                <RaceListItem
                  race={race}
                  onClick={handleNavigateToDrivers}
                  setPinnedRaces={setPinnedRaces}
                  isPinned
                />
                {ndx + 2 < pinnedRaces.length && <Separator className="my-4" />}
              </div>
            ))}
          </div>
        ) : null}
        <Separator className="my-2" />
        <div className="w-full flex flex-wrap py-6 gap-x-8">
          {races?.map((race, ndx) => (
            <div
              className="max-w-1/2 flex-1"
              key={`${race.season}-${race.raceName}`}
            >
              <RaceListItem
                race={race}
                onClick={handleNavigateToDrivers}
                setPinnedRaces={setPinnedRaces}
              />
              {ndx + 2 < races.length && <Separator className="my-4" />}
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value={CARD_VIEW}>
        {pinnedRaces?.length ? (
          <div className="grid grid-cols-3 gap-4 mb-4">
            {pinnedRaces?.map((race) => (
              <RaceCard
                key={`pinned-${race.season}-${race.raceName}`}
                race={race}
                setPinnedRaces={setPinnedRaces}
                isPinned
              />
            ))}
          </div>
        ) : null}
        <Separator className="my-6" />
        <div className="grid grid-cols-3 gap-4">
          {races?.map((race) => (
            <RaceCard
              key={`${race.season}-${race.raceName}`}
              race={race}
              setPinnedRaces={setPinnedRaces}
            />
          ))}
        </div>
      </TabsContent>
      <CustomPagination page={page} setPage={setPage} totalCount={totalCount} />
    </Tabs>
  );
}

export default Races;
