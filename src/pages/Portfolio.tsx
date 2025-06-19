import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ImageLightbox from "@/components/ImageLightbox";

const Portfolio = () => {
  const projects = [
    {
      name: "Job Portal System",
      description:
        "Complete job portal with employer and candidate features, including user authentication, job posting, and application management system.",
      techStack: ["Java", "Spring Boot", "Spring Security", "MySQL"],
      features: [
        "User Authentication & Authorization",
        "Job Posting & Management",
        "Application Tracking System",
        "Resume Upload & Parser",
        "Email Notifications",
      ],
      image: "./job.jpeg",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      name: "Online Learning Platform",
      description:
        "E-learning platform with comprehensive course management, video streaming, and progress tracking for students and instructors.",
      techStack: ["Spring Boot", "Hibernate", "JWT", "MySQL"],
      features: [
        "Course Creation & Management",
        "Video Streaming & Upload",
        "Student Progress Tracking",
        "Quiz & Assessment System",
        "Certificate Generation",
      ],
      image:
        "./learn.jpeg",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      name: "Online Auction System",
      description:
        "Real-time auction platform with live bidding, WebSocket integration, and secure payment processing for buyers and sellers.",
      techStack: ["Java", "React", "WebSockets", "JWT", "MySQL"],
      features: [
        "Real-time Bidding System",
        "WebSocket Live Updates",
        "Payment Gateway Integration",
        "User Profile Management",
        "Auction Analytics Dashboard",
      ],
      image:
        "./auction.jpeg",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      name: "Hotel Booking Website",
      description:
        "Modern hotel booking platform with advanced search filters, room management, and booking system with Material UI design.",
      techStack: ["React", "Redux", "Material UI", "Node.js"],
      features: [
        "Advanced Room Search & Filters",
        "Booking Management System",
        "Customer Reviews & Ratings",
        "Payment Processing",
        "Admin Dashboard",
      ],
      image:
        "https://images.pexels.com/photos/5077049/pexels-photo-5077049.jpeg",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              💼  My <span className="text-portfolio-teal">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Featured projects showcasing my development skills in full-stack
                development, system architecture, and modern web technologies.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <ImageLightbox
                      src={project.image}
                      alt={`${project.name} preview`}
                      title={project.name}
                      description={project.description}
                      techStack={project.techStack}
                      demoUrl={project.demoUrl}
                      githubUrl={project.githubUrl}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-portfolio-teal transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-portfolio-teal mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-portfolio-teal/10 text-portfolio-teal rounded-full text-sm border border-portfolio-teal/20 hover:bg-portfolio-teal/20 transition-colors duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Key Features:
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-portfolio-teal mt-1 text-[13px]">
                              ●
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demoUrl, "_blank")}
                        className="bg-portfolio-teal hover:bg-portfolio-teal/90 text-white group flex-1"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-bounce-gentle" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal hover:text-white group flex-1"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover:animate-bounce-gentle" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-16"
            >
              <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Interested in My Work?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  These projects represent my journey in full-stack development.
                  I'm always excited to discuss new opportunities and
                  collaborate on innovative projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-portfolio-teal hover:bg-portfolio-teal/90 text-white group"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    <ExternalLink className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                    Get In Touch
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal hover:text-white group"
                    onClick={() => (window.location.href = "/resume")}
                  >
                    View My Resume
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
