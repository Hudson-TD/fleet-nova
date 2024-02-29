import axios from "axios";
import toast from "react-hot-toast";

export async function getUserFleet() {
  const token = sessionStorage.getItem("auth");

  try {
    const response = await axios.get(`http://localhost:3000/fleet/assets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

  console.log(payload);

  try {
    const signupPromise = toast.promise(
      axios.post("http://localhost:3000/user/signup", payload),
      {
        loading: "Building user...",
        success: "Success, welcome to the club!",
        error: "Account creation failed.",
      }
    );

    await signupPromise;

    signupPromise.then(async (res) => {
      sessionStorage.removeItem("auth");
      sessionStorage.setItem("auth", res.data.token);
      window.location.href = `/fleet/assets`;
    });
  } catch (error) {
    console.error("Error during signup:", error);
  }
}

export async function userLogin(email: string, password: string) {
  const payload = {
    email,
    password,
  };

  try {
    const loginPromise = toast.promise(
      axios.post("http://localhost:3000/user/login", payload),
      {
        loading: "Powering on...",
        success: "Success, welcome back!",
        error: "Login failed.",
      }
    );

    loginPromise.then(async (res) => {
      sessionStorage.removeItem("auth");
      sessionStorage.setItem("auth", res.data.token);
      window.location.href = "/fleet/assets";
    });
  } catch (error) {
    console.error("Error", error);
  }
}
