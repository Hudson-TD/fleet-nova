import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <header className="flex justify-center md:p-4 sm:p-1">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 rounded-lg sm:w-3/4">
        <div className="flex flex-wrap items-center mx-auto max-w-screen-xl justify-between">
          <div>
            <a href="/" className="flex items-center">
              <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                NovaFleet
              </span>
            </a>
          </div>
          {isLoggedIn ? (
            <div className="flex items-center">
              <a
                href="/logout"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Logout
              </a>
            </div>
          ) : (
            <div className="flex items-center">
              <a
                href="/login"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a>
              <a
                href="/signup"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Create Account
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
