import axios from "axios";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";

export async function getUserFleet(id: string) {
  try {
    const response = await axios.get(
      `http://localhost:3000/fleets/${id}/assets`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching fleet data.");
  }
}

export async function userSignup(
  first_name: string,
  last_name: string,
  email: string,
  password: string
) {
  const payload = {
    first_name,
    last_name,
    email,
    password,
  };

  try {
    let fleetId = "";
    const signupPromise = toast.promise(
      axios.post("http://localhost:3000/users/signup", payload),
      {
        loading: "Building user...",
        success: "Success, welcome to the club!",
        error: "Account creation failed.",
      }
    );

    signupPromise.then((res) => {
      fleetId = res.data.user_id;
      window.location.href = `/fleets/${fleetId}/assets`;
    });
  } catch (error) {
    console.error("Error", error);
  }
}

export async function userLogin(email: string, password: string) {
  const payload = {
    email,
    password,
  };

  console.log(payload);

  try {
    let fleetId = "";
    const loginPromise = toast.promise(
      axios.post("http://localhost:3000/users/login", payload),
      {
        loading: "Powering on...",
        success: "Success, welcome back!",
        error: "Login failed.",
      }
    );

    loginPromise.then((res) => {
      fleetId = res.data.user_id;
      window.location.href = `/fleets/${fleetId}/assets`;
    });
  } catch (error) {
    console.error("Error", error);
  }
}
