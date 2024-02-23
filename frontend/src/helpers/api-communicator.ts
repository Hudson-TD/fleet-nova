import axios from "axios";

export async function getUserFleet(id: string) {
  try {
    const response = await axios.get(`http://localhost:3000/fleet/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching fleet data.");
  }
}
