import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserFleet } from "../helpers/api-communicator";
import AssetCard from "../components/AssetCard";
export default function Fleet() {
  const { id } = useParams();
  const [fleetData, setFleetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserFleet(id as string);
        setFleetData(data);
      } catch (error) {
        console.error("Error fetching fleet data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <main className="flex flex-col p-4 text-center">
      <header className="text-3xl">
        Fleet Dashboard:
      </header>
      <div className="flex">
      {fleetData.map((vehicle) => (
        <AssetCard make={vehicle.make} model={vehicle.model} model_year={vehicle.model_year} />
      ))}
      </div>
    </main>
  );
}
