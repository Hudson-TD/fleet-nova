import { useEffect, useState } from "react";
import { getUserFleet } from "../helpers/api-communicator";
import AssetCard from "../components/AssetCard";
import Toolbar from "../components/Toolbar";
export default function Fleet() {
  const [fleetData, setFleetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserFleet();
        setFleetData(data);
      } catch (error) {
        console.error("Error fetching fleet data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex justify-center">
      <section className="flex flex-col">
        <div className="">
          <Toolbar />
        </div>
        <div className="">
          <div className="flex justify-center items-center flex-wrap gap-2">
            {fleetData.map((vehicle) => (
              <AssetCard
                make={vehicle.make}
                model={vehicle.model}
                model_year={vehicle.model_year}
                vehicle_id={vehicle._id}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
