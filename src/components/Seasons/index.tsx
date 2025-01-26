import axios from "@/axios";
import { useEffect, useState } from "react";

function Seasons() {
  const [seaons, setSeasons] = useState([]);

  useEffect(() => {
    axios("/f1/seasons.json").then((res) => console.log(res.data));
  }, []);

  return <div>Seasons</div>;
}

export default Seasons;
