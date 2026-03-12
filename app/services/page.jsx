"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "Building modern web applications using React, Node.js, Express, and MySQL with scalable architecture and RESTful APIs.",
    href: "",
  },
  {
    num: "02",
    title: "React Frontend Development",
    description:
      "Creating responsive and interactive user interfaces using React, modern JavaScript, and component-based architecture.",
    href: "",
  },
  {
    num: "03",
    title: "Backend API Development",
    description:
      "Designing secure and scalable REST APIs with Node.js and Express, including authentication, middleware, and database integration.",
    href: "",
  },
  {
    num: "04",
    title: "Authentication & Security",
    description:
      "Implementing secure authentication systems using JWT, protected routes, and password encryption with bcrypt in web applications.",
    href: "",
  },
];
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-start gap-6 group h-full"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
