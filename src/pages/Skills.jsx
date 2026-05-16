import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import { Server, LayoutTemplate, Cloud, BrainCircuit, Database, Link as LinkIcon, LineChart, Users } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Backend",
    icon: <Server size={32} className="text-white" />,
    items: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "SQL", "PostgreSQL", "Database Design", "System Design", "API Development", "Authentication", "Claims Processing Systems", "Medical Billing Systems", "Backend Architecture"]
  },
  {
    title: "Frontend",
    icon: <LayoutTemplate size={32} className="text-white" />,
    items: ["React.js", "HTML", "CSS", "JavaScript", "Responsive UI Design", "Dashboard Development", "Workflow Management Interfaces"]
  },
  {
    title: "DevOps / Cloud",
    icon: <Cloud size={32} className="text-white" />,
    items: ["Docker", "Linux", "Microsoft Azure", "Cloud Deployment", "Containerization", "Cloud Architecture", "Resource Management", "Deployment Workflows"]
  },
  {
    title: "Machine Learning / AI",
    icon: <BrainCircuit size={32} className="text-white" />,
    items: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "XGBoost", "Machine Learning", "Data Preprocessing", "Feature Engineering", "Model Evaluation", "Predictive Modeling", "Artificial Intelligence", "Data Analysis", "Data Visualization", "Regression Models", "EDA"]
  },
  {
    title: "Data Eng & Analytics",
    icon: <Database size={32} className="text-white" />,
    items: ["Data Pipelines", "Structured Data", "Unstructured Data", "ETL Concepts", "Process Mining", "Business Analytics", "Execution Management Systems", "Power BI", "Data Transformation", "KPI Analysis", "Conformance Checking", "Throughput Analysis", "ERP Data Analysis"]
  },
  {
    title: "Blockchain / Web3",
    icon: <LinkIcon size={32} className="text-white" />,
    items: ["Blockchain", "Web3", "Smart Contracts", "Decentralized Systems", "Blockchain Architecture", "Web3 Community Building"]
  },
  {
    title: "Finance / FinTech",
    icon: <LineChart size={32} className="text-white" />,
    items: ["FinTech", "Financial Analytics", "Financial Literacy Systems", "Treasury Management", "Budgeting", "Expense Management", "DeFi", "Digital Assets", "Financial Automation"]
  },
  {
    title: "Leadership",
    icon: <Users size={32} className="text-white" />,
    items: ["Leadership", "Team Management", "Sponsorship", "Public Speaking", "Negotiation", "Event Coordination", "Mentorship", "Strategic Planning", "Communication", "Resource Allocation", "Documentation", "Relationship Management"]
  }
];

const Skills = () => {
  return (
    <div className="w-full min-h-screen relative bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-center py-32">
      <SEO title="Skills — Pawan Eswaran" />
      
      {/* Animated Network Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 fixed">
        <motion.svg 
          className="w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          <defs>
            <pattern id="network-dark" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <motion.circle cx="20" cy="20" r="1.5" fill="#fff" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
              <motion.circle cx="80" cy="60" r="1.5" fill="#fff" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
              <motion.circle cx="40" cy="90" r="1.5" fill="#fff" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
              <path d="M20,20 L80,60 L40,90 Z" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#network-dark)" />
        </motion.svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10 flex-grow flex flex-col justify-center items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[#111111]/90 backdrop-blur-md border border-white/10 p-8 lg:p-10 rounded-3xl shadow-2xl relative overflow-hidden group"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-center gap-4 mb-8">
                {category.icon}
                <h3 className="text-3xl font-black tracking-tight text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="text-[15px] font-bold text-white/90 bg-white/5 border border-white/10 px-4 py-2 rounded-xl"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Text */}
      <div className="fixed bottom-0 inset-x-0 flex justify-center pointer-events-none z-0 overflow-hidden opacity-[0.03]">
        <motion.h1 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[25vw] font-black tracking-tighter text-white translate-y-1/4"
        >
          Skills
        </motion.h1>
      </div>
    </div>
  );
};

export default Skills;
