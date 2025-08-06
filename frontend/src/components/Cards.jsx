import React from "react";
import { motion } from "framer-motion";

// Sample user projects/skills data
const cards = [
  {
    title: "Portfolio Website",
    subtitle: "Full-Stack Developer • React, Node.js",
    description:
      "Developed a responsive portfolio site showcasing personal projects, blogs, and contact info with seamless navigation.",
    image:
      "https://media.istockphoto.com/id/1436038027/photo/multiply-sources-of-revenue-multiple-streams-of-income.webp?a=1&b=1&s=612x612&w=0&k=20&c=PjFB2v8YBIY4NDZSvkRmRlAArMV4jPQ1n0S3U8OpUa8=",
    footer: "Completed March 2025",
  },
  {
    title: "E-Commerce Platform",
    subtitle: "Lead Developer • MERN Stack",
    description:
      "Built a scalable e-commerce platform with real-time inventory, payment integration, and user reviews.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    footer: "In Progress",
  },
  {
    title: "UI/UX Design Skills",
    subtitle: "Figma • Adobe XD • Prototyping",
    description:
      "Skilled in wireframing, interactive prototyping, and user testing for web and mobile applications.",
    image:
      "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaW5nfGVufDB8fDB8fHww",
    footer: "Updated June 2025",
  },
  {
    title: "Mobile App Development",
    subtitle: "React Native • Expo • API Integration",
    description:
      "Experience building cross-platform mobile apps with smooth animations, offline support, and push notifications.",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=900&q=80",
    footer: "Completed January 2025",
  },
];

function Cards() {
  return (
    <div className="py-20 px-4 sm:px-10 bg-gradient-to-br from-[#f0f4f8] to-[#dfe9f3] min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16 tracking-tight">
        User Projects & Skills
      </h2>
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">{card.title}</h3>
              <p className="text-black font-semibold">{card.subtitle}</p>
              <p className="text-gray-700 text-md leading-relaxed">{card.description}</p>
              <div className="pt-4 text-sm text-gray-500 border-t">{card.footer}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
