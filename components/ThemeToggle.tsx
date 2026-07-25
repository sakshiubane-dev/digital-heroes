"use client";

import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#151515] hover:bg-[#262626] transition-colors"
    >
      {isDark ? (
        <IconSun className="w-4 h-4 text-[#F7F7F5]" />
      ) : (
        <IconMoon className="w-4 h-4 text-[#F7F7F5]" />
      )}
    </button>
  );
}
