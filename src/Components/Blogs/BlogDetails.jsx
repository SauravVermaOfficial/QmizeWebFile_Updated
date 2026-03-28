import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import watialternatives from "../../assets/Images/watialternative.jpeg";
import aisensyalternatives from "../../assets/Images/qmize-vs-aisensy.jpeg";
import zokoalternatives from "../../assets/Images/zoko-vs-qmize.jpeg";
import interaktalternatives from "../../assets/Images/interakt-vs-qmize.jpeg";
import gallaboxalternatives from "../../assets/Images/gallabox-vs-qmize.jpeg";
import qmizeintroduction from "../../assets/Images/qmize-intoduction.jpeg";
import bulksmswhatsapp from "../../assets/Images/bulk-sms-whatsapp-messaging.jpeg";
import christmasBlog from "../../assets/Images/christmas_blog_image.webp";
import qmizevssaas from "../../assets/Images/qmize-vs-saas.webp";
import strategies from "../../assets/Images/strategies-blog.webp";
import whatsappecommerce from "../../assets/Images/whatsapp-ecommerce-guide.jpeg";
import whatsappnotdelivered from "../../assets/Images/whatsapp-message-not-delivered.jpeg";
import broadcastvsgroup from "../../assets/Images/broadcastvsgroup.jpeg";
import sendbulksms from "../../assets/Images/sendbulksms.jpeg";
import whatsappautomation from "../../assets/Images/whatsapp-automation.jpg";
import whatsappreply from "../../assets/Images/whatsapp-auto-reply.jpeg";
import whatsappchats from "../../assets/Images/mastering-whatsapp-chats.jpeg";
import whatsappfeatures from "../../assets/Images/whatsapp-business-features.jpeg";
import ontop from "../../assets/Images/whatsappchecklist.jpeg";
import ontop2 from "../../assets/Images/whatsappverification.jpeg";
import ontop3 from "../../assets/Images/WhatsApp_Introduction_Message.jpeg";
import ontop4 from "../../assets/Images/WhatsApp Marketing.jpeg";
import ontop5 from "../../assets/Images/bulksmsprovider.jpeg";
import ontop6 from "../../assets/Images/convert_whatsapp_into_business_account.jpg";
const BlogDetails = () => {
 

  const blogs = [
    
     {
id: 24,
title: "How to Convert WhatsApp to Business Account (Step-by-Step Guide 2026)",
date: "Mar 28, 2026",
image: ontop6,
link: "/blog/how-to-convert-whatsapp-to-business-account"
},
     {
id: 23,
title: " Top 10 Bulk SMS Service Providers in India ",
date: "Mar 14, 2026",
image: ontop5,
link: "/blog/top-10-bulk-sms-sevice-providers-in-india"
},
    
    
    {
id: 22,
title: " WhatsApp Marketing: The Complete Guide to Growing Your Business with Direct Conversations",
date: "Mar 09, 2026",
image: ontop4,
link: "/blog/whatsapp-marketing"
},
 {
      id: 21,
      title:
        " WhatsApp Introduction Message: Best Samples, Greeting Messages & How to Send Them at Scale",
      date: "Mar 07, 2026",
      image: ontop3,
      link: "/blog/whatsApp-introduction-message",
    },
    {
      id: 20,
      title:
        "WhatsApp Verification Explained Steps, Benefits & Best Practices (2026)",
      date: "Feb 17, 2026",
      image: ontop2,
      link: "/blog/whatsapp-verification-explained-steps-and-benefits",
    },
    {
      id: 19,
      title:
        "The Ultimate WhatsApp API Integration Checklist for Growing Businesses (2026)",
      date: "Feb 17, 2026",
      image: ontop,
      link: "/blog/the-ultimate-whatsapp-api-integration-checklist",
    },
    {
      id: 18,
      title:
        "5 Game-Changing WhatsApp Business Account Features Every Sales Team Must Use in 2026",
      date: "Jan 07, 2026",
      image: whatsappfeatures,
      link: "/blog/5-game-changing-whatsapp-business-account-feature",
    },
    {
      id: 17,
      title:
        "Mastering WhatsApp Sales Chat: 5 Key Metrics Every Business Must Track for Higher Conversions",
      date: "Jan 07, 2026",
      image: whatsappchats,
      link: "/blog/mastering-whatsapp-sales-chat",
    },
    {
      id: 16,
      title:
        "WhatsApp Auto Reply: Boost Your Business Communication with Qmize",
      date: "Jan 07, 2026",
      image: whatsappreply,
      link: "/blog/whatsapp-auto-reply",
    },
    {
      id: 15,
      title:
        "WhatsApp Automation: A Complete Guide to Smarter Business Communication",
      date: "Jan 07, 2026",
      image: whatsappautomation,
      link: "/blog/whatsapp-automation",
    },
    {
      id: 14,
      title:
        "How to Send Bulk WhatsApp Messages in 2026 (Free & Scalable Methods)",
      date: "Jan 06, 2026",
      image: sendbulksms,
      link: "/blog/how-to-send-bulk-sms",
    },
    {
      id: 13,
      title:
        "WhatsApp Broadcast vs WhatsApp Group: What’s the Right Choice for Businesses?",
      date: "Jan 06, 2026",
      image: broadcastvsgroup,
      link: "/blog/whatsapp-broadcast-vs-whatsapp-group",
    },
    {
      id: 12,
      title:
        "WhatsApp Message Not Delivered? 5 Common Reasons & How to Fix Them (2026 Guide)",
      date: "Jan 06, 2026",
      image: whatsappnotdelivered,
      link: "/blog/whatsapp-message-not-delivered",
    },
    {
      id: 11,
      title:
        "WhatsApp Ecommerce Store in 2026: Why Qmize Is the Smart Choice for Scalable Sales",
      date: "Jan 06, 2026",
      image: whatsappecommerce,
      link: "/blog/whatsapp-ecommerce-store-guide",
    },
    {
      id: 10,
      title:
        "Top 10 WhatsApp Marketing Strategies for 2026 to Boost Conversions",
      date: "Dec 27, 2025",
      image: strategies,
      link: "/blog/top-10-whatsapp-marketing-strategies",
    },
    {
      id: 9,
      title: "10 Best Aisensy Alternatives in India (2026)",
      date: "Dec 26, 2025",
      image: aisensyalternatives,
      link: "/blog/aisensy-alternatives-india",
    },
    {
      id: 8,
      title: "10 Best Interakt Alternatives in India (2026)",
      date: "Dec 24, 2025",
      image: interaktalternatives,
      link: "/blog/interakt-alternatives-whatsapp-marketing",
    },
    {
      id: 7,
      title: "10 Best Gallabox Alternatives for WhatsApp Marketing in 2026",
      date: "Dec 24, 2025",
      image: gallaboxalternatives,
      link: "/blog/gallabox-alternatives-india",
    },
    {
      id: 6,
      title: "10 Best Zoko Alternatives in India (2026)",
      date: "Dec 24, 2025",
      image: zokoalternatives,
      link: "/blog/zoko-alternatives-india",
    },
    {
      id: 5,
      title: "Top WATI Alternatives for WhatsApp Business in 2026",
      date: "Dec 24, 2025",
      image: watialternatives,
      link: "/blog/top-wati-alternatives-for-whatsapp-business",
    },
    {
      id: 4,
      title: "Qmize: Powering Business Growth Through Smart Digital Marketing",
      date: "Dec 24, 2025",
      image: qmizeintroduction,
      link: "/blog/qmize-powering-business-growth-through-smart-digital-marketing-and-it-solutions",
    },
    {
      id: 3,
      title: "Qmize vs Traditional Digital Agencies vs CPaaS Platforms",
      date: "Dec 23, 2025",
      image: qmizevssaas,
      link: "/blog/qmize-vs-traditional-digital-agencies-vs-cpaas-platforms",
    },
    {
      id: 2,
      title: "Christmas WhatsApp Marketing Strategy",
      date: "Dec 23, 2025",
      image: christmasBlog,
      link: "/blog/christmas-whatsapp-marketing-strategy",
    },
    {
      id: 1,
      title: "Top 10 WhatsApp Business API Providers in India (2026)",
      date: "Dec 20, 2025",
      image: bulksmswhatsapp,
      link: "/blog/top-10-whatsapp-business-api-provider-in-india",
    },
  ];
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <>
      <section
        className="relative py-24 px-6 bg-gradient-to-br 
    from-[#020617] via-[#020617] to-emerald-950 overflow-hidden"
      >
        {/* Floating AI Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse delay-300" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-extrabold 
          bg-gradient-to-r from-emerald-400 to-cyan-400 
          bg-clip-text text-transparent"
            >
              Latest Blogs & Insights
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Future-ready marketing, automation & WhatsApp growth
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
           {/* {blogs.map((blog, i) => ( */}
          {[...blogs]
            .sort((a, b) => b.id - a.id)
            .map((blog, i) => (
              <Link to={blog.link} key={blog.id}>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.01 }}
                  whileHover={{ rotateX: 6, rotateY: -6, scale: 1.05 }}
                  onMouseMove={(e) =>
                    setPos({
                      x: e.nativeEvent.offsetX,
                      y: e.nativeEvent.offsetY,
                    })
                  }
                  className="relative group rounded-3xl 
                bg-white/5 backdrop-blur-xl border border-white/10 
                shadow-[0_0_30px_rgba(16,185,129,0.15)]
                hover:shadow-[0_0_60px_rgba(16,185,129,0.35)]
                transition-all duration-500 overflow-hidden"
                >
                  {/* Cursor Glow */}
                  <div
                    style={{
                      background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, 
                    rgba(16,185,129,0.25), transparent 60%)`,
                    }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                  />

                  {/* Animated Border */}
                  <div
                    className="absolute inset-0 rounded-3xl 
                bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 
                opacity-0 group-hover:opacity-20 blur-xl animate-spin-slow"
                  />

                  {/* Image */}
                  <div className="h-48 overflow-hidden relative z-10">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover 
                    group-hover:scale-125 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
                      {blog.date}
                    </p>

                    <h3
                      className="text-white font-semibold text-lg leading-snug 
                  group-hover:text-emerald-300 transition"
                    >
                      {blog.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
