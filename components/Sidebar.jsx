const SideBar = ({ user, activePage }) => {
  // Updated links with icons (SVG included) and /app/slug URLs
  const links = [
    {
      text: "Discover",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 16l2 -6l6 -2l-2 6l-6 2" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 3l0 2" />
          <path d="M12 19l0 2" />
          <path d="M3 12l2 0" />
          <path d="M19 12l2 0" />
        </svg>
      ),
      url: "/app",
    },
    // Search
    {
      text: "Search",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      ),
      url: "/app/search",
    },
    {
      text: "Saved",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      ),
      url: "/app/saved",
    },
    // Logout
    {
      text: "Logout",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path d="M9 12h12l-3 -3" />
          <path d="M18 15l3 -3" />
        </svg>
      ),
      url: "/logout",
    },
  ];

  return (
    <div className={"bg-sky-200 lg:w-64 lg:rounded-r-lg lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-screen lg:static fixed bottom-0 w-full h-20"}>
      <div onClick={() => { window.location.href = "/settings" }} className="hidden lg:flex items-center justify-center gap-2 p-4">
        <h className="mt-2 font-bold">{user.name.split(" ")[0]}</h>
      </div>
      <div className="lg:flex-grow lg:flex">
        <div className="p-2 lg:flex-col lg:justify-start flex justify-center">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={
                activePage === link.text.toLowerCase()
                  ? "flex gap-4  rounded-lg bg-sky-400 text-white font-bold  px-2 py-2 mx-2"
                  : "flex gap-4  rounded-lg hover:bg-sky-300  px-2 py-2 mx-2"
              }
            >
              <p className="flex">{link.icon}</p>
              <p className="hidden lg:flex">{link.text}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
