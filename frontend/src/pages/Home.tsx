export default function Home() {
  return (
    <>
      <header className="flex justify-center md:p-4 sm:p-1">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 rounded-full sm:w-3/4">
          <div className="flex flex-wrap items-center mx-auto max-w-screen-xl justify-between">
            <div>
              <a href="/" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  NovaFleet
                </span>
              </a>
            </div>
            <div className="flex items-center lg:order-2">
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
          </div>
        </nav>
      </header>
      <main className="flex justify-center">
        <h2 className="mt-10 text-3xl font-bold">Fleet management made easy</h2>
      </main>
    </>
  );
}
