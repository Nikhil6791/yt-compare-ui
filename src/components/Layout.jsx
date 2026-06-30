import ThemeToggle from "./ThemeToggle";

function Layout({ children }) {
  return (
    <div className="bg-white min-h-screen w-full dark:bg-black text-black dark:text-white flex flex-col">
      {/* <ThemeToggle /> */}
      {children}
    </div>
  );
}

export default Layout;
