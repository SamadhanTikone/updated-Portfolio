import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* 404 Number */}
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-9xl md:text-[12rem] font-bold text-portfolio-teal leading-none"
              >
                404
              </motion.h1>

              {/* Error Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Page Not Found
                </h2>
                <p className="text-lg text-muted-foreground max-w-md mx-auto">
                  Oops! The page you're looking for doesn't exist. It might have
                  been moved, deleted, or you entered the wrong URL.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/">
                  <Button
                    size="lg"
                    className="bg-portfolio-teal hover:bg-portfolio-teal/90 text-white group"
                  >
                    <Home className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                    Go Home
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal hover:text-white group"
                >
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                  Go Back
                </Button>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="relative mt-12"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-portfolio-teal/20 rounded-full animate-spin" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-portfolio-teal/10 rounded-full animate-pulse" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotFound;
