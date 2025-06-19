import { motion } from "framer-motion";
import {
  Download,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Calendar,
  MapPin,
  Star,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Resume = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "T.P.C.T.'s College of Engineering, Dharashiv",
      period: "2021 – 2025",
      score: "CGPA: 7.21 / 10",
      type: "current",
    },
    {
      degree: "HSC – Science",
      institution: "Karmaveer Bhaurao Patil Mahavidyalaya, Pandharpur",
      period: "2019 – 2021",
      score: "Percentage: 80.54%",
      type: "completed",
    },
    {
      degree: "SSC",
      institution: "Saraswati Vidyalay Khadgaon, Latur",
      period: "2018 – 2019",
      score: "Percentage: 82.54%",
      type: "completed",
    },
  ];

  const workExperience = [
    {
      title: "Java Developer",
      company: "Auxirem Technologies",
      period: "Dec 2024 – Present",
      type: "current",
      skills: [
        "Java",
        "Servlet",
        "Spring Boot",
        "Hibernate",
        "Maven",
        "Microservices",
      ],
      achievements: [
        "Built REST APIs for production systems",
        "Integrated MongoDB/MySQL databases",
        "Deployed services on AWS EC2",
        "Followed OOP best practices and clean architecture",
      ],
    },
    {
      title: "React Developer",
      company: "Emacron Technologies (Remote)",
      period: "Jun 2024 – Nov 2024",
      type: "completed",
      skills: ["React.js", "Redux", "GitHub", "Tailwind", "Vercel", "AWS"],
      achievements: [
        "Developed responsive UI using React & Hooks",
        "Integrated REST APIs with Redux state management",
        "Used Git for version control and team collaboration",
        "Deployed applications on Vercel and AWS platforms",
      ],
    },
  ];

  const projects = [
    {
      name: "Job Portal System",
      tech: ["Java", "Spring Boot", "MySQL"],
      description:
        "Multi-role system with login, job posting, email triggers, and CRUD operations",
    },
    {
      name: "Online Learning Platform (Backend)",
      tech: ["Spring Boot", "Stripe (mock)", "JWT"],
      description:
        "Role-based system with course enrollment and admin panel functionality",
    },
    {
      name: "Online Auction System",
      tech: ["React", "Java", "WebSockets"],
      description:
        "Real-time bidding with secure login, JWT, and dynamic updates",
    },
    {
      name: "Hotel Booking Website",
      tech: ["React", "Redux", "Material UI"],
      description:
        "Search filters, authentication, and payment-ready booking flow",
    },
  ];

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "C", "C++"],
    },
    {
      category: "Frameworks",
      skills: ["Spring Boot", "React.js", "Hibernate"],
    },
    {
      category: "Tools",
      skills: ["Postman", "GitHub", "VS Code", "Eclipse"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "Bootstrap", "Tailwind", "RESTful APIs"],
    },
  ];

  const certifications = [
    {
      name: "Basics of Networking",
      issuer: "Cisco Networking Academy",
      date: "2024",
    },
    {
      name: "Virtual Internship – React.js",
      issuer: "Emacron Technologies",
      date: "2024",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
               📄 Resume –{" "}
                <span className="text-portfolio-teal">Samadhan Tikone</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Full-Stack Developer specializing in Java and React with
                hands-on experience in building scalable web applications
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <a href="/Samadhan_Tikone_Resume.pdf" download>
  <Button
    size="lg"
    className="bg-portfolio-teal hover:bg-portfolio-teal/90 text-black group animate-pulse hover:animate-none"
  >
    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
    Download My Resume (PDF)
  </Button>
</a>

              </motion.div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Education Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="shadow-lg border-l-4 border-l-portfolio-teal">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <GraduationCap className="w-6 h-6 text-portfolio-teal" />
                        <span className="text-2xl">🎓 Education</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {education.map((edu, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="relative pl-6 border-l-2 border-portfolio-teal/30 last:border-l-0"
                        >
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-portfolio-teal rounded-full" />
                          <div className="space-y-2">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <h3 className="font-bold text-foreground text-lg">
                                {edu.degree}
                              </h3>
                              <Badge
                                variant={
                                  edu.type === "current"
                                    ? "default"
                                    : "secondary"
                                }
                                className={
                                  edu.type === "current"
                                    ? "bg-portfolio-teal text-white"
                                    : ""
                                }
                              >
                                {edu.period}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground">
                              {edu.institution}
                            </p>
                            <p className="text-portfolio-teal font-semibold">
                              {edu.score}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Work Experience Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="shadow-lg border-l-4 border-l-portfolio-teal">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Briefcase className="w-6 h-6 text-portfolio-teal" />
                        <span className="text-2xl">💼 Work Experience</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {workExperience.map((work, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="relative pl-6 border-l-2 border-portfolio-teal/30 last:border-l-0"
                        >
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-portfolio-teal rounded-full" />
                          <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <div>
                                <h3 className="font-bold text-foreground text-lg">
                                  {work.title}
                                </h3>
                                <p className="text-portfolio-teal  font-semibold">
                                  {work.company}
                                </p>
                              </div>
                              <Badge
                                variant={
                                  work.type === "current"
                                    ? "default"
                                    : "secondary"
                                }
                                className={
                                  work.type === "current"
                                    ? "bg-portfolio-teal text-white animate-pulse"
                                    : ""
                                }
                              >
                                {work.period}
                              </Badge>
                            </div>

                            <div className="space-y-3">
                              <div>
                                <p className="text-sm font-semibold text-muted-foreground mb-2">
                                  Technologies:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {work.skills.map((skill) => (
                                    <Badge
                                      key={skill}
                                      variant="outline"
                                      className="border-portfolio-teal/50 text-portfolio-teal hover:bg-portfolio-teal hover:text-white transition-colors text-[13px]"
                                    >
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <p className="text-sm font-semibold text-muted-foreground mb-2">
                                  Key Achievements:
                                </p>
                                <ul className="space-y-1">
                                  {work.achievements.map((achievement, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-2 text-[14px]"
                                    >
                                      <ChevronRight className="w-4 h-4 text-portfolio-teal mt-0.5 flex-shrink-0" />
                                      <span className="text-muted-foreground">
                                        {achievement}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Projects Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="shadow-lg border-l-4 border-l-portfolio-teal">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Code className="w-6 h-6 text-portfolio-teal" />
                        <span className="text-2xl">🚀 Projects Summary</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {projects.map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="p-4 bg-muted/50 rounded-lg border border-border hover:border-portfolio-teal/50 transition-colors"
                        >
                          <div className="space-y-3">
                            <h3 className="font-bold text-foreground">
                              {project.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      <div className="text-center pt-4">
                        <Button
                          variant="outline"
                          className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal hover:text-white"
                          onClick={() => (window.location.href = "/portfolio")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Detailed Portfolio
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Skills Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Star className="w-6 h-6 text-portfolio-teal" />
                        <span className="text-2xl">🧠 Skills</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {skillCategories.map((category, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="space-y-3"
                        >
                          <h4 className="font-semibold text-portfolio-teal text-[15px]">
                            {category.category}:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                              <motion.div
                                key={skill}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1 bg-portfolio-teal/10 text-[15px] text-portfolio-teal rounded-full text-sm border border-portfolio-teal/20 hover:bg-portfolio-teal/20 transition-colors cursor-default"
                              >
                                {skill}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Certifications Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-portfolio-teal" />
                        <span className="text-xl">📜 Certifications</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="p-4 bg-muted/50 rounded-lg border border-border"
                        >
                          <h4 className="font-semibold text-foreground text-sm">
                            {cert.name}
                          </h4>
                          <p className="text-portfolio-teal text-sm font-medium">
                            {cert.issuer}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {cert.date}
                          </p>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
