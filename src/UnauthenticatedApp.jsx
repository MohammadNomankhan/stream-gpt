const UnauthenticatedApp = () => {
  return (
    <div className="flex justify-center hero-bg">
      <div className="max-w-7xl w-full flex flex-col text-white">
        <div>
          <div className="w-24">
            <img
              src="https://i.ibb.co/QQqChzh/Logo.png"
              alt="stream vibe logo"
              className="w-ull h-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full w-96 bg-blue-400">
          <p>Unlock a Smarter Way to Discover Movies and Shows</p>
          <form>
            <div className="px-4">
              <label htmlFor="username" className="p-2">
                Email
              </label>
              <input type="email" id="email" className="p-2 w-full" />
            </div>
            <div className="px-4">
              <label htmlFor="password" className="p-2">
                Password
              </label>
              <input type="password" id="password" className="p-2 w-full" />
            </div>
            <div>
              <button className="py-3 px-6 bg-[#E50000] text-white">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UnauthenticatedApp;
