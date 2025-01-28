import axios from "@/axios";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Result } from "@/types";
import { Separator } from "../ui/separator";
import { CustomPagination } from "../pagination/CustomPagination";
import { DEFAULT_PAGE_SIZE, LIST_CONTAINER_STYLES } from "@/constants";
import { useParams } from "react-router";
import DriverListItem from "./DriverListItem";
import { DriversStatistics } from "./DriversStatistics";

const DRIVERS_LIST_VIEW = "view-drivers";
const STATISTICS_VIEW = "statistics";

function Drivers() {
  const { seasonYear, round } = useParams();
  const [results, setResults] = useState<Result[]>([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    // React Query could be used later to integrate with Suspense & Lazy loading to avoid empty view till data is fetched
    axios(
      `/f1/${seasonYear}/${round}/results.json?limit=${DEFAULT_PAGE_SIZE}&offset=${
        (page - 1) * DEFAULT_PAGE_SIZE
      }`
    )
      .then((res) => {
        setTotalCount(res.data.MRData.total);
        setResults(res.data.MRData.RaceTable.Races?.[0]?.Results);
      })
      .catch((err) => console.error(err));
  }, [page]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Drivers</h1>
      <Tabs defaultValue={DRIVERS_LIST_VIEW} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value={DRIVERS_LIST_VIEW}>Race Drivers</TabsTrigger>
          <TabsTrigger value={STATISTICS_VIEW}>Statistics</TabsTrigger>
        </TabsList>
        <TabsContent value={DRIVERS_LIST_VIEW}>
          <div className={LIST_CONTAINER_STYLES}>
            {results?.map((result, ndx) => (
              <div className="max-w-1/2 flex-1" key={result.Driver.driverId}>
                <DriverListItem
                  driver={result.Driver}
                  position={result.position}
                />
                {ndx + 2 < results.length && <Separator className="my-4" />}
              </div>
            ))}
          </div>
          <CustomPagination
            page={page}
            setPage={setPage}
            totalCount={totalCount}
          />
        </TabsContent>
        <TabsContent value={STATISTICS_VIEW}>
          <DriversStatistics
            results={results.map((res) => ({
              ...res,
              Time: { ...res.Time, millis: Number(res.Time?.millis) / 1000 },
            }))}
            title={`Season: ${seasonYear}`}
            description={`Round: ${round}`}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Drivers;
