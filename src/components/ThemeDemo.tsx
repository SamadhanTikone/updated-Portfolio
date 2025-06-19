import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/hooks/useTheme";

/**
 * Demo component to showcase different theme toggle variations
 * Can be used for testing or as a component library showcase
 */
const ThemeDemo = () => {
  const { currentTheme, isDarkMode } = useTheme();

  const examples = [
    {
      title: "Icon Only (Default)",
      description: "Compact theme toggle with just the icon",
      component: <ThemeToggle />,
    },
    {
      title: "With Label",
      description: "Theme toggle with descriptive text",
      component: <ThemeToggle showLabel={true} size="default" />,
    },
    {
      title: "Large with Label",
      description: "Larger button with text for prominent placement",
      component: <ThemeToggle showLabel={true} size="lg" />,
    },
    {
      title: "Outline Style",
      description: "Theme toggle with outline variant",
      component: <ThemeToggle variant="outline" showLabel={true} />,
    },
    {
      title: "Default Style",
      description: "Theme toggle with filled background",
      component: <ThemeToggle variant="default" showLabel={true} />,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Current Theme Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span>Current Theme Status</span>
            <Badge
              variant={isDarkMode ? "default" : "secondary"}
              className={
                isDarkMode ? "bg-portfolio-teal text-white" : "bg-yellow-100"
              }
            >
              {currentTheme.toUpperCase()} MODE
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Theme Information</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Current theme: {currentTheme}</li>
                <li>• Persisted in localStorage</li>
                <li>• Applied to document root</li>
                <li>• Default theme: Dark</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Smooth icon transitions</li>
                <li>• Hover effects and animations</li>
                <li>• Accessible ARIA labels</li>
                <li>• Multiple size variants</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Theme Toggle Examples */}
      <div className="grid gap-6">
        <h2 className="text-2xl font-bold text-foreground">
          Theme Toggle Variations
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{example.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {example.description}
                  </p>
                </CardHeader>
                <CardContent className="flex items-center justify-center py-8">
                  {example.component}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Basic Usage</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import ThemeToggle from '@/components/ThemeToggle';

// Simple icon-only toggle
<ThemeToggle />

// With label
<ThemeToggle showLabel={true} size="default" />

// Custom styling
<ThemeToggle 
  variant="outline" 
  showLabel={true} 
  className="custom-class" 
/>`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Using the Theme Hook</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
  const { 
    isDarkMode, 
    currentTheme, 
    themeDisplayText, 
    toggleTheme, 
    setTheme 
  } = useTheme();

  return (
    <div>
      <p>Current theme: {currentTheme}</p>
      <button onClick={toggleTheme}>
        Switch to {themeDisplayText}
      </button>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThemeDemo;
