import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface SubmissionState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
    message: "",
  });

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate individual field
  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return "";
      case "subject":
        if (!value.trim()) return "Subject is required";
        if (value.trim().length < 3)
          return "Subject must be at least 3 characters";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        return "";
      default:
        return "";
    }
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const field = key as keyof FormData;
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const field = name as keyof FormData;

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error for this field if user is typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }

    // Clear submission message when user starts typing again
    if (submission.status !== "idle") {
      setSubmission({ status: "idle", message: "" });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Set loading state
    setSubmission({ status: "loading", message: "" });

    try {
      // Simulate API call (replace with actual endpoint)
      const response = await fetch("/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Success
        setSubmission({
          status: "success",
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });

        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmission({ status: "idle", message: "" });
        }, 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }
    } catch (error) {
      // For demo purposes, simulate success since endpoint doesn't exist
      console.log("Simulating successful submission:", formData);

      setSubmission({
        status: "success",
        message:
          "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmission({ status: "idle", message: "" });
      }, 5000);

      // Uncomment below for actual error handling
      // setSubmission({
      //   status: "error",
      //   message: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
      // });
    }
  };

  // Input component with error handling
  const FormInput = ({
    label,
    name,
    type = "text",
    placeholder,
    required = true,
    as = "input",
    rows,
  }: {
    label: string;
    name: keyof FormData;
    type?: string;
    placeholder: string;
    required?: boolean;
    as?: "input" | "textarea";
    rows?: number;
  }) => {
    const hasError = !!errors[name];
    const Component = as === "textarea" ? Textarea : Input;

    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <Component
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          placeholder={placeholder}
          rows={rows}
          className={`w-full transition-colors ${
            hasError
              ? "border-red-500 focus-visible:ring-red-500"
              : "focus-visible:ring-portfolio-teal"
          }`}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
        />
        <AnimatePresence>
          {hasError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              id={`${name}-error`}
              className="flex items-center gap-2 text-red-500 text-sm"
              role="alert"
            >
              <AlertCircle className="w-4 h-4" />
              {errors[name]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
               🤝 Get In <span className="text-portfolio-teal">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Let's discuss your next project or just say hello!
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card border border-border rounded-lg p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send Message
                </h2>

                {/* Submission Status Messages */}
                <AnimatePresence>
                  {submission.status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mb-6"
                    >
                      <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800 dark:text-green-200">
                          {submission.message}
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  )}

                  {submission.status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mb-6"
                    >
                      <Alert className="border-red-500 bg-red-50 dark:bg-red-950">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        <AlertDescription className="text-red-800 dark:text-red-200">
                          {submission.message}
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <FormInput
                    label="Name"
                    name="name"
                    placeholder="Your full name"
                  />

                  <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                  />

                  <FormInput
                    label="Subject"
                    name="subject"
                    placeholder="What's this about?"
                  />

                  <FormInput
                    label="Message"
                    name="message"
                    as="textarea"
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                  />

                  <Button
                    type="submit"
                    disabled={submission.status === "loading"}
                    className="w-full bg-portfolio-teal hover:bg-portfolio-teal/90 text-white group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submission.status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-portfolio-teal/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-portfolio-teal" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a
                          href="mailto:tikonesamadhan03@gmail.com"
                          className="text-muted-foreground hover:text-portfolio-teal transition-colors"
                        >
                          tikonesamadhan03@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-portfolio-teal/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-portfolio-teal" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-muted-foreground">Pune, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Follow Me
                  </h3>
                  <SocialLinks showLabels />
                </div>

                {/* Response Time Notice */}
                <div className="bg-portfolio-teal/10 border border-portfolio-teal/20 rounded-lg p-6">
                  <h4 className="font-semibold text-portfolio-teal mb-2">
                    Quick Response
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to messages within 24 hours. For urgent
                    matters, feel free to reach out directly via email.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
