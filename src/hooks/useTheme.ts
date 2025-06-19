import { useState, useEffect } from "react";

/**
 * Custom hook for managing theme state and persistence
 * Handles light/dark theme toggling with localStorage persistence
 */
export const useTheme = () => {
  // State to track current theme - default to dark
  const [isDarkMode, setIsDarkMode] = useState(true);

  /**
   * Initialize theme from localStorage or default to dark
   * This effect runs once on component mount
   */
  useEffect(() => {
    // Check if running in browser environment
    if (typeof window !== "undefined") {
      // Try to get saved theme preference from localStorage
      const savedTheme = localStorage.getItem("theme-preference");

      if (savedTheme) {
        // Use saved preference
        const isDark = savedTheme === "dark";
        setIsDarkMode(isDark);
        applyThemeToDOM(isDark);
      } else {
        // No saved preference, default to dark theme
        setIsDarkMode(true);
        applyThemeToDOM(true);
        // Save default preference
        localStorage.setItem("theme-preference", "dark");
      }
    }
  }, []);

  /**
   * Apply theme class to DOM element
   * @param isDark - Whether dark theme should be applied
   */
  const applyThemeToDOM = (isDark: boolean) => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  };

  /**
   * Toggle between light and dark themes
   * Saves preference to localStorage and applies to DOM
   */
  const toggleTheme = () => {
    const newTheme = !isDarkMode;

    // Update state
    setIsDarkMode(newTheme);

    // Apply to DOM
    applyThemeToDOM(newTheme);

    // Save to localStorage for persistence
    localStorage.setItem("theme-preference", newTheme ? "dark" : "light");
  };

  /**
   * Set theme explicitly (useful for programmatic theme setting)
   * @param theme - "light" or "dark"
   */
  const setTheme = (theme: "light" | "dark") => {
    const isDark = theme === "dark";

    // Update state
    setIsDarkMode(isDark);

    // Apply to DOM
    applyThemeToDOM(isDark);

    // Save to localStorage
    localStorage.setItem("theme-preference", theme);
  };

  /**
   * Get current theme as string
   * @returns "light" or "dark"
   */
  const currentTheme = isDarkMode ? "dark" : "light";

  /**
   * Get display text for current theme
   * @returns Display text for the opposite theme (what clicking would switch to)
   */
  const themeDisplayText = isDarkMode ? "Light Mode" : "Dark Mode";

  return {
    isDarkMode,
    currentTheme,
    themeDisplayText,
    toggleTheme,
    setTheme,
  };
};

export default useTheme;
