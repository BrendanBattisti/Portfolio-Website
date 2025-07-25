import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "../Components/Section";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_1tuew8j", 
        "template_znsh7er", 
        {
          from_name: formData.name,
          from_email: "brendan.battisti@gmail.com", // You can set a default or leave empty
          subject: formData.subject,
          message: formData.message,
          to_email: "brendan.battisti@gmail.com",
        },
        "PK58mdRLEoSl_n8gz" 
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary-400 font-medium text-lg mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full"></div>
          <p className="text-lg text-subtext mt-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel
            free to reach out if you'd like to discuss a project or just say
            hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold text-primary-300 mb-6">
                Let's Connect
              </h3>
              <p className="text-lg leading-relaxed text-subtext mb-8">
                Whether you have a question about my work, want to discuss a
                potential project, or just want to say hi, I'd love to hear from
                you.
              </p>
            </div>

            <div className="space-y-6">
              <button
                onClick={() =>
                  window.open(
                    "mailto:brendan.battisti@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Brendan%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards%2C%0A[Your%20Name]",
                    "_blank"
                  )
                }
                className="flex items-center space-x-4 w-full text-left hover:bg-primary-500/10 rounded-lg p-2 transition-all duration-200 hover:scale-105"
              >
                <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-subtext">Email</p>
                  <p className="text-primary-300 font-medium">
                    brendan.battisti@gmail.com
                  </p>
                </div>
              </button>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-subtext">Location</p>
                  <p className="text-primary-300 font-medium">Rochester, NY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent/20 rounded-2xl blur-xl"></div>

              {/* Form card */}
              <div className="relative bg-surface/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-primary-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-surface/30 border border-primary-500/20 rounded-lg text-primary-300 placeholder-subtext focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-primary-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-surface/30 border border-primary-500/20 rounded-lg text-primary-300 placeholder-subtext focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-primary-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-surface/30 border border-primary-500/20 rounded-lg text-primary-300 placeholder-subtext focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <p className="text-green-400 text-sm">
                        Thank you! Your message has been sent successfully. I'll
                        get back to you soon!
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-red-400 text-sm">
                        Sorry, there was an error sending your message. Please
                        try again.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent text-white font-medium rounded-lg hover:from-primary-600 hover:to-accent/80 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-surface transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
