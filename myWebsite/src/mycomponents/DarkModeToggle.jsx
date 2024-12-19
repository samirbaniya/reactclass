import useThemeStore from "@/store/useThemeStore";

function DarkModeToggle() {
  const { isDark, setIsDark } = useThemeStore();
  return (
    <div className="lg:fixed top-3 right-96  z-50">
      <select
        value={isDark ? "dark" : "light"}
        onChange={(e) => {
          setIsDark(e.target.value === "dark");
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}

export default DarkModeToggle;
