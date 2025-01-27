import axios from "@/axios";
import { Fragment, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SeasonListItem from "./SeasonListItem";
import { Season } from "@/types";
import { Separator } from "../ui/separator";
import SeasonCard from "./SeasonCard";

const LIST_VIEW = "list";
const CARD_VIEW = "card";

function Seasons() {
  const [seasons, setSeasons] = useState<Season[]>([]);

  useEffect(() => {
    axios("/f1/seasons.json").then((res) =>
      setSeasons(res.data.MRData.SeasonTable.Seasons)
    );
  }, []);

  const handleNavigateToRaces = () => {};

  return (
    <Tabs defaultValue={LIST_VIEW} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value={LIST_VIEW}>List View</TabsTrigger>
        <TabsTrigger value="card">Card View</TabsTrigger>
      </TabsList>
      <TabsContent value={LIST_VIEW}>
        <div className="w-full flex flex-wrap py-6 gap-x-8">
          {seasons?.map((season, ndx) => (
            <div className="max-w-1/2 flex-1" key={season.url}>
              <SeasonListItem
                title={season.season}
                content={season.url}
                onClick={handleNavigateToRaces}
              />
              {ndx + 2 < seasons.length && <Separator className="my-4" />}
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value={CARD_VIEW}>
        <div className="grid grid-cols-3 gap-4">
          {seasons?.map((season) => (
            <div className="flex-grow-1 overflow-hidden" key={season.url}>
              <SeasonCard season={season} />
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default Seasons;
