import { motion } from "framer-motion";
import {
  Code,
  Server,
  Monitor,
  Cloud,
  Target,
  Cpu,
  Database,
  Globe,
  Lightbulb,
  Rocket,
  User,
  Briefcase,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const About = () => {
  const techSkills = [
    {
      category: "Backend",
      skills: ["Java", "Spring Boot", "Hibernate"],
      icon: Server,
    },
    {
      category: "Frontend",
      skills: ["React.js", "Tailwind CSS", "JavaScript"],
      icon: Monitor,
    },
    { category: "Database", skills: ["MySQL", "MongoDB"], icon: Database },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "REST APIs", "Microservices"],
      icon: Cloud,
    },
  ];

  const careerGoals = [
    {
      text: "Become a proficient full-stack developer with deep expertise in backend systems and cloud infrastructure.",
      icon: Cpu,
    },
    {
      text: "Contribute to impactful projects solving real-world problems using scalable, efficient technology stacks.",
      icon: Globe,
    },
    {
      text: "Continuously learn emerging technologies focusing on microservices architecture, cloud-native development, and DevOps.",
      icon: Lightbulb,
    },
    {
      text: "Build innovative applications that provide seamless user experiences and foster business growth.",
      icon: Rocket,
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
                <span className="text-5xl mr-3">👋</span>
                About <span className="text-portfolio-teal">Me</span>
              </h1>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Introduction Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="shadow-lg border-l-4 border-l-portfolio-teal">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring" }}
                          className="flex-shrink-0"
                        >
                          <div className="w-16 h-16 bg-portfolio-teal/10 rounded-full flex items-center justify-center">
                            <Code className="w-8 h-8 text-portfolio-teal" />
                          </div>
                        </motion.div>
                        <div className="space-y-4">
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-muted-foreground leading-relaxed"
                          >
                            Hi, I'm{" "}
                            <span className="text-portfolio-teal font-semibold">
                              Samadhan Tikone
                            </span>
                            , a passionate Java and React developer currently
                            completed my B.Tech in Computer Science and
                            Engineering from T.P.C.T.'s College of Engineering,
                            Dharashiv. I specialize in building robust,
                            scalable, and clean backend systems using Java,
                            Spring Boot, Hibernate, and also enjoy crafting
                            modern and responsive user interfaces using React.js
                            and Tailwind CSS.
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-muted-foreground leading-relaxed"
                          >
                            During my internships at{" "}
                            <span className="text-portfolio-teal font-semibold">
                              Auxirem Technologies
                            </span>{" "}
                            and{" "}
                            <span className="text-portfolio-teal font-semibold">
                              Emacron Technologies
                            </span>
                            , I've worked on live projects involving REST APIs,
                            microservices, authentication systems, deployment on
                            AWS, and frontend development.
                          </motion.p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Technical Expertise */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <User className="w-6 h-6 text-portfolio-teal" />
                        <h2 className="text-2xl font-bold text-foreground">
                          Technical Expertise
                        </h2>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        {techSkills.map((category, index) => {
                          const IconComponent = category.icon;
                          return (
                            <motion.div
                              key={category.category}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                              className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border hover:border-portfolio-teal/50 transition-colors"
                            >
                              <div className="w-10 h-10 bg-portfolio-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <IconComponent className="w-5 h-5 text-portfolio-teal" />
                              </div>
                              <div className="space-y-2">
                                <h3 className="font-semibold text-foreground">
                                  {category.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                  {category.skills.map((skill) => (
                                    <Badge
                                      key={skill}
                                      variant="secondary"
                                      className="text-xs hover:bg-portfolio-teal hover:text-white transition-colors"
                                    >
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Career Goals Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="shadow-lg border-l-4 border-l-portfolio-teal">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-8">
                        <Target className="w-6 h-6 text-portfolio-teal" />
                        <h2 className="text-2xl font-bold text-foreground">
                          Career Goals
                        </h2>
                      </div>
                      <div className="space-y-6">
                        {careerGoals.map((goal, index) => {
                          const IconComponent = goal.icon;
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.1 }}
                              className="flex items-start gap-4 group"
                            >
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-12 h-12 bg-portfolio-teal/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-portfolio-teal/20 transition-colors"
                              >
                                <IconComponent className="w-6 h-6 text-portfolio-teal" />
                              </motion.div>
                              <div className="space-y-1">
                                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                                  {goal.text}
                                </p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-8">
                {/* Current Status */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="w-5 h-5 text-portfolio-teal" />
                        <h3 className="font-bold text-foreground">
                          Current Status
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="p-3 bg-portfolio-teal/10 rounded-lg border border-portfolio-teal/20">
                          <p className="text-sm font-semibold text-portfolio-teal">
                            🎓 Graduate
                          </p>
                          <p className="text-xs text-muted-foreground">
                            B.Tech Computer Science
                          </p>
                        </div>
                        <div className="p-3 bg-portfolio-teal/10 rounded-lg border border-portfolio-teal/20">
                          <p className="text-sm font-semibold text-portfolio-teal">
                            💼 Java Developer
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Auxirem Technologies
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-foreground mb-4">
                        Quick Stats
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground text-sm">
                            Experience
                          </span>
                          <span className="text-portfolio-teal font-semibold">
                            6 Months
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground text-sm">
                            Projects
                          </span>
                          <span className="text-portfolio-teal font-semibold">
                            4+ Major
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground text-sm">
                            Technologies
                          </span>
                          <span className="text-portfolio-teal font-semibold">
                            10+ Tools
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground text-sm">
                            Internships
                          </span>
                          <span className="text-portfolio-teal font-semibold">
                            2 Companies
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Interests */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {/* <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-foreground mb-4">
                        Beyond Code
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🚀</span>
                          <span className="text-sm text-muted-foreground">
                            Space Technology
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🤖</span>
                          <span className="text-sm text-muted-foreground">
                            AI & Machine Learning
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">☁️</span>
                          <span className="text-sm text-muted-foreground">
                            Cloud Architecture
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">📱</span>
                          <span className="text-sm text-muted-foreground">
                            Mobile Development
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card> */}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
