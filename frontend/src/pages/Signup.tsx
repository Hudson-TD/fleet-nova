import { useState } from "react";
import { userSignup } from "../helpers/api-communicator";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("Form Submit Triggered");
      await userSignup(firstName, lastName, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center items-center bg-slate-200 w-[40rem] h-[45rem] border border-white rounded-2xl shadow-lg">
          <h1 className="mb-20 text-3xl font-bold">NovaFleet</h1>
          <form
            className="flex flex-col justify-center gap-5 w-full h-[60%] p-5"
            onSubmit={handleSubmit}
          >
            <label className="font-semibold">First Name:</label>
            <input
              className="h-10 rounded-full p-2"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <label className="font-semibold">Last Name:</label>
            <input
              className="h-10 rounded-full p-2"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <label className="font-semibold">Email:</label>
            <input
              className="h-10 rounded-full p-2"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <label className="font-semibold">Password:</label>
            <input
              className="h-10 rounded-full p-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="submit"
              className="flex justify-center items-center border-2 border-black/25 rounded-full mx-[7rem] my-5 py-2 bg-white font-bold hover:bg-blue-500 hover:text-white"
            >
              Create Account
            </button>
            <a className="text-center underline" href="/login">Already have an account? Login here.</a>
          </form>
        </div>
      </div>
    </main>
  );
}
