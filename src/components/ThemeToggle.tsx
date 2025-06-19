import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

interface ThemeToggleProps {
  /**
   * Whether to show text label alongside icon
   * @default false
   */
  showLabel?: boolean;

  /**
   * Size variant for the button
   * @default "icon"
   */
  size?: "default" | "sm" | "lg" | "icon";

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Button variant
   * @default "ghost"
   */
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

/**
 * Reusable theme toggle component
 * Can be used anywhere in the app with customizable appearance
 */
const ThemeToggle = ({
  showLabel = false,
  size = "icon",
  className = "",
  variant = "ghost",
}: ThemeToggleProps) => {
  const { isDarkMode, themeDisplayText, toggleTheme } = useTheme();
{console.log("error")}
  return (
    
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={`group relative overflow-hidden ${className}`}
      aria-label={`Switch to ${themeDisplayText}`}
      title={`Switch to ${themeDisplayText}`}
    >
      {/* Icon with smooth transition animation */}
      <motion.div
        key={isDarkMode ? "sun" : "moon"}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 180 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
        }}
        className="flex items-center gap-2"
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
        ) : (
          <Moon className="h-5 w-5 text-blue-600 group-hover:text-blue-500 transition-colors" />
        )}

        {/* Optional text label */}
        {showLabel && (
          <span className="text-sm font-medium">{themeDisplayText}</span>
        )}
      </motion.div>

      {/* Subtle background glow effect on hover */}
      
      <motion.div
        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-20 transition-opacity"
        style={{
          background: isDarkMode
            ? "radial-gradient(circle, #fbbf24 0%, transparent 70%)"
            : "radial-gradient(circle, #2563eb 0%, transparent 70%)",
        }}
      />
      
    </Button>
    
    
  );
};

export default ThemeToggle;
