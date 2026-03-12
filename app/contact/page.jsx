"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "Available on request",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "muhamed.is2020@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Struga, North Macedonia",
  },
];

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wra8h8q",
        "template_qm26xb3",
        formRef.current,
        "xNSrB1LILbL4CtFMk"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>

              <p className="text-white/60">
                I&apos;m always open to discussing new projects, internship
                opportunities, or collaborations in full-stack web development.
              </p>

              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="First name" />
                <Input type="text" name="lastname" placeholder="Last name" />
                <Input type="email" name="email" placeholder="Email address" />
                <Input type="tel" name="phone" placeholder="Phone number" />
              </div>

              {/* service */}
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>

                    <SelectItem value="Full-Stack Web Development">
                      Full-Stack Web Development
                    </SelectItem>

                    <SelectItem value="Frontend Development">
                      Frontend Development
                    </SelectItem>

                    <SelectItem value="Backend API Development">
                      Backend API Development
                    </SelectItem>

                    <SelectItem value="Authentication & Security">
                      Authentication & Security
                    </SelectItem>

                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* message */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
              />

              {/* button */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>

                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;