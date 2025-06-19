import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  const techKeywords = ["Java", "Spring Boot", "React", "MongoDB", "REST APIs"];

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Coding Video/Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-video bg-gradient-to-br from-portfolio-gray-900 to-portfolio-black rounded-lg overflow-hidden border border-portfolio-teal/20 shadow-2xl">
              {/* Code Editor Mockup */}
              <div className="absolute inset-0 p-6">
                {/* Window Controls */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Code Content */}
                <div className="font-mono text-sm space-y-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-purple-400"
                  >
                    <span className="text-gray-500">01</span>{" "}
                    <span className="text-blue-400">@RestController</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="text-green-400"
                  >
                    <span className="text-gray-500">02</span>{" "}
                    <span className="text-orange-400">public class</span>{" "}
                    <span className="text-yellow-400">UserController</span>{" "}
                    {"{"}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="text-blue-300 ml-4"
                  >
                    <span className="text-gray-500">03</span>{" "}
                    <span className="text-purple-400">@GetMapping</span>(
                    <span className="text-green-300">"/users"</span>)
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="text-blue-300 ml-4"
                  >
                    <span className="text-gray-500">04</span>{" "}
                    <span className="text-orange-400">public</span>{" "}
                    <span className="text-yellow-400">List</span>&lt;
                    <span className="text-yellow-400">User</span>&gt;{" "}
                    <span className="text-blue-300">getUsers</span>() {"{"}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    className="text-blue-300 ml-8"
                  >
                    <span className="text-gray-500">05</span>{" "}
                    <span className="text-orange-400">return</span>{" "}
                    <span className="text-blue-300">userService</span>.
                    <span className="text-yellow-400">getAllUsers</span>();
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="text-gray-300 ml-4"
                  >
                    <span className="text-gray-500">06</span> {"}"}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                    className="text-gray-300"
                  >
                    <span className="text-gray-500">07</span> {"}"}
                  </motion.div>
                </div>

                {/* Typing Cursor Animation */}
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="inline-block w-2 h-4 bg-portfolio-teal mt-2"
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-portfolio-teal/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Side - Developer Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Name and Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl lg:text-6xl font-bold text-foreground"
              >
                
                <span className="text-portfolio-teal uppercase ">Samadhan <span className="text-white">Tikone</span></span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-xl lg:text-2xl text-muted-foreground"
              >
                Junior <span className="font-semibold ">JAVA</span> Developer
              </motion.p>

              {/* Animated Typing Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-lg lg:text-xl"
              >
                <span className="text-muted-foreground">Specializing in </span>
                <AnimatedText
                  words={techKeywords}
                  className="font-semibold text-portfolio-teal"
                />
              </motion.div>
            </div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/portfolio">
                <Button
                  size="lg"
                  className="bg-portfolio-teal text-[16px] hover:bg-portfolio-teal/90 text-black group w-full sm:w-auto"
                >
                  <Eye className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                  View Portfolio
                </Button>
              </Link>
              <Link to="/resume">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-portfolio-teal text-[16px] text-portfolio-teal hover:bg-portfolio-teal hover:text-white group w-full sm:w-auto"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                  Download Resume
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <p className="text-muted-foreground mb-4">Connect with me:</p>
              <SocialLinks />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
