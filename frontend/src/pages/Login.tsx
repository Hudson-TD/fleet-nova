import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submit Triggered");
  };
  return (
    <main>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center items-center bg-slate-200 w-[30rem] h-[30rem] border border-white rounded-2xl">
          <h1 className="mb-8 text-3xl font-bold">NovaFleet</h1>
          <form
            className="flex flex-col justify-center gap-5 w-full h-[60%] p-5"
            onSubmit={handleSubmit}
          >
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
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
