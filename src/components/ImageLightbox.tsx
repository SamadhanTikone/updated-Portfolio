import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "./OptimizedImage";

interface ImageLightboxProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const ImageLightbox = ({
  src,
  alt,
  title,
  description,
  techStack,
  demoUrl,
  githubUrl,
}: ImageLightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Image */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
        className="relative cursor-pointer group overflow-hidden rounded-lg"
      >
        <div className="h-48 sm:h-56">
          <OptimizedImage
            src={src}
            alt={alt}
            className="group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="text-white text-center"
          >
            <p className="font-semibold mb-1">Click to Preview</p>
            <p className="text-sm opacity-80">View full project details</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-card border border-border rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
              >
                <X className="w-5 h-5" />
              </Button>

              {/* Image */}
              <div className="w-full overflow-hidden">
                <OptimizedImage src={src} alt={alt} aspectRatio="video" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-portfolio-teal mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-portfolio-teal/10 text-portfolio-teal rounded-full text-sm border border-portfolio-teal/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {demoUrl && (
                    <Button
                      onClick={() => window.open(demoUrl, "_blank")}
                      className="bg-portfolio-teal hover:bg-portfolio-teal/90 text-white group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-bounce-gentle" />
                      View Live Demo
                    </Button>
                  )}
                  {githubUrl && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(githubUrl, "_blank")}
                      className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal hover:text-white group"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover:animate-bounce-gentle" />
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageLightbox;
