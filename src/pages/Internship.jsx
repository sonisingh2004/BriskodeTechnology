import { motion } from "framer-motion";
import { FaBriefcase, FaCertificate, FaCode, FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";
import InternshipCard from "../components/InternshipCard";
import PageTransition from "../components/PageTransition";
import PricingCard from "../components/PricingCard";

const Internship = () => {
  return (
    <PageTransition>
      <>
        {/* 🔥 HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-20 left-20 animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute w-3 h-3 bg-purple-400 rounded-full top-40 right-32 animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute w-2 h-2 bg-cyan-400 rounded-full bottom-32 left-40 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute w-3 h-3 bg-blue-300 rounded-full bottom-20 right-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.8)_1px,transparent_0)] bg-[length:48px_48px]"></div>
          </div>

          {/* Glow blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl top-20 -left-20 animate-blob"></div>
            <div className="absolute w-96 h-96 bg-purple-200/30 rounded-full blur-3xl bottom-20 -right-20 animate-blob" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative z-10 max-w-4xl text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200 mb-6"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-700 tracking-wide">INTERNSHIP PROGRAM</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              <span className="text-gray-900">Launch Your </span>
              <span className="gradient-text">Career With Us</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Learn from industry experts, work on real projects, and gain
              hands-on experience that prepares you for the real world.
            </motion.p>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: FaUsers, value: "100+", label: "Interns Trained" },
                { icon: FaCertificate, value: "100%", label: "Certification" },
                { icon: FaBriefcase, value: "85%", label: "Placement Rate" },
                { icon: FaCode, value: "10+", label: "Live Projects" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card border-blue-200 p-4 rounded-2xl hover:border-blue-400 transition-all duration-300"
                >
                  <stat.icon className="text-3xl text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* 🔽 MAIN CONTENT */}
        <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-28 px-6">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-64 h-64 bg-blue-100/20 rounded-full blur-3xl top-40 left-10 animate-blob"></div>
            <div className="absolute w-80 h-80 bg-purple-100/20 rounded-full blur-3xl bottom-40 right-10 animate-blob" style={{ animationDelay: '3s' }}></div>
            <div className="absolute w-72 h-72 bg-cyan-100/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob" style={{ animationDelay: '5s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose <span className="gradient-text">Our Internship?</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get industry-ready skills with hands-on training and real-world experience
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-28"
            >
              {[
                { icon: FaLightbulb, title: "Learn from Experts", desc: "Industry professionals with 10+ years of experience", color: "blue" },
                { icon: FaCode, title: "Hands-on Projects", desc: "Work on real client projects and build your portfolio", color: "purple" },
                { icon: FaRocket, title: "Career Launch", desc: "Get placement assistance and interview preparation", color: "cyan" },
                { icon: FaCertificate, title: "Certified Training", desc: "Receive industry-recognized certification on completion", color: "blue" },
                { icon: FaBriefcase, title: "Job Opportunities", desc: "Access to our network of hiring partners", color: "purple" },
                { icon: FaUsers, title: "Peer Learning", desc: "Collaborate with fellow interns and grow together", color: "cyan" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`glass-card border-${benefit.color}-200 hover:border-${benefit.color}-400 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
                >
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${benefit.color}-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${benefit.color}-100 to-${benefit.color}-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className={`text-2xl text-${benefit.color}-600`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Programs Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="gradient-text">Programs</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the perfect internship program to kickstart your career in tech
              </p>
            </motion.div>

            {/* Internship Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid gap-10 md:grid-cols-2"
            >
              <InternshipCard
                title="Web Developer Internship"
                duration="3 Months"
                fee="₹6,000 + ₹1,000 Reg Fee"
                skills={[
                  "HTML",
                  "CSS",
                  "Bootstrap",
                  "JavaScript",
                  "Python Basics",
                ]}
              />

              <InternshipCard
                title="Full Stack Developer Internship"
                duration="6 Months"
                fee="₹12,000 + ₹1,000 Reg Fee"
                skills={[
                  "React",
                  "Node.js",
                  "MongoDB",
                  "Express",
                  "Cloud Deployment",
                ]}
              />
            </motion.div>

            {/* Pricing Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mt-28 mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Investment in <span className="gradient-text">Your Future</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Affordable pricing with flexible payment options
              </p>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid gap-10 md:grid-cols-2"
            >
              <PricingCard
                title="Web Developer Internship"
                price="₹6,000"
                duration="3 Months"
              />
              <PricingCard
                title="Full Stack Internship"
                price="₹12,000"
                duration="6 Months"
              />
            </motion.div>

            {/* Apply Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mt-28 mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to <span className="gradient-text">Get Started?</span>
              </h2>
            </motion.div>

            {/* Apply Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid gap-10 md:grid-cols-2"
            >
              <div className="glass-card border-blue-200 hover:border-blue-300 rounded-3xl p-10 hover-lift transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900">
                  How to Apply
                </h3>
                <p className="mt-4 text-gray-600">
                  Send your CV and work samples to:
                </p>
                <a
                  href="mailto:hr@briskodetechnology.com"
                  className="mt-6 inline-block btn-primary"
                >
                  hr@briskodetechnology.com
                </a>
              </div>

              <div className="glass-card border-purple-200 hover:border-purple-300 rounded-3xl p-10 hover-lift transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900">
                  Eligibility
                </h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• B.Tech</li>
                  <li>• BCA</li>
                  <li>• MCA</li>
                  <li>• Any Graduation</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </section>
      </>
    </PageTransition>
  );
};

export default Internship;
