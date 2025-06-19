import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, Github  } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
}

const SocialLinks = ({
  className = "",
  showLabels = false,
}: SocialLinksProps) => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/samadhan-tikone-32181522a/",
      icon: Linkedin,
      color: "#0077B5",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/samadhan__096k",
      icon: Instagram,
      color: "#E4405F",
    },
    {
      name: "Email",
      url: "mailto:tikonesamadhan03@gmail.com",
      icon: Mail,
      color: "#EA4335",
    },
    {
      name: "GitHub",
      url: "https://github.com/SamadhanTikone",
      icon: Github,
      color: "#0ABAB5",
    },
  ];

  return (
    <div
      className={`flex ${showLabels ? "flex-col gap-4" : "gap-4"} ${className}`}
    >
      {socialLinks.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className={`group ${showLabels ? "flex items-center gap-3" : ""}`}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center bg-background border border-border group-hover:border-portfolio-teal transition-all duration-300 group-hover:shadow-lg group-hover:shadow-portfolio-teal/20"
              style={{ "--hover-color": link.color } as React.CSSProperties}
            >
              <IconComponent className="w-5 h-5 text-foreground group-hover:text-portfolio-teal transition-colors duration-300" />
            </div>
            {showLabels && (
              <span className="text-foreground group-hover:text-portfolio-teal transition-colors duration-300">
                {link.name}
              </span>
            )}
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
