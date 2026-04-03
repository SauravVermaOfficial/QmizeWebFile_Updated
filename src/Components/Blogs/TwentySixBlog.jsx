
import { useState,useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar2 from "../Common/Navbar2";
import Navbar1 from "../Common/Navbar1";
import sideImage from "../../assets/Images/signup-promote-image.webp";

import { Helmet } from "react-helmet";

import Footer from "../Common/Footer";
import {Link} from "react-router-dom";
import christmasImage from "../../assets/Images/christmas_offer_blog.webp";
import firstImage from "../../assets/Images/what_is_whatsapp_business.jpg";


 





const WhatsAppAPI = () => { 

    
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };


    const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleParallax = () => {
      setParallaxOffset(window.scrollY * 0.08); // Adjust speed here
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);


    const [activeSection, setActiveSection] = useState("");
    const [openMenu, setOpenMenu] = useState(null);

  // Scroll Highlighting
 





useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const currentId = entry.target.id;
        setActiveSection(currentId);

        // providers ke ids list
        const providerIds = [
          "third  ",
         "hyper", 
      "click", 
      "automated", 
      "smart", 
      "abandoned",
     "rich", 
     "support", 
      "lead", 
      "loyalty",
      "conversion",
        ];

        // agar providers ya uska child ho → open
        if (providerIds.includes(currentId)) {
          setOpenMenu("third");
        } 
        // warna → close
        else {
          setOpenMenu(null);
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  toc.forEach((item) => {
    const el = document.getElementById(item.id);
    if (el) observer.observe(el);

    item.children?.forEach((child) => {
      const childEl = document.getElementById(child.id);
      if (childEl) observer.observe(childEl);
    });
  });

  return () => observer.disconnect();
}, []);




const toc = [
  { id: "first", label: "1. Introduction" },
  { id: "second", label: "2. What is WhatsApp Business?" },
  

  

  {
    id: "third",
    label: "3. Why Businesses Use WhatsApp Business",
   
  },

  { id: "fourth", label: "4. Key Features of WhatsApp Business" },
  { id: "fifth", label: "5. WhatsApp Business App vs WhatsApp Business API" },

  { id: "sixth", label: "6. Benefits of Using WhatsApp Business" },
  { id: "seventh", label: "7. How Businesses Use WhatsApp in 2026" },
  { id: "eighth", label: "8. Best Practices for Using WhatsApp Business" },
  { id: "ninth", label: "9. The Future of WhatsApp Business" },
  { id: "tenth", label: "10. Conclusion" }
  
];
  return (

    <>

    <Helmet>
    
           <meta charSet="utf-8" />
            <title>WhatsApp Business: Complete Guide for Businesses in 2026 | Qmize</title>
            <meta
              name="description"
              content="Learn what WhatsApp Business is, its features, benefits, and how companies use it to improve customer communication, marketing, and sales in 2026."
            />
            <link rel="canonical" href="https://qmize.com/blog/whatsapp-business" />
    
          </Helmet>
    
    
          <Navbar1 />
          <Navbar2 />


         {/* ROOT WRAPPER */}
     <section className="relative w-full min-h-screen bg-gradient-to-br from-white via-emerald-50 to-emerald-100/40">


  {/* --------------------------- */}
  {/* BACKGROUND GRID + PARTICLES */}
  {/* --------------------------- */}
  <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#23a55a20_1px,transparent_1px),linear-gradient(#23a55a20_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>

  {/* Floating SVG shapes */}
  <svg className="absolute top-12 left-5 w-28 sm:w-40 opacity-40 animate-spin-slow" viewBox="0 0 100 100">
    <rect x="10" y="10" width="80" height="80" rx="20" fill="#2ecc7055" />
  </svg>

  <svg className="absolute bottom-20 right-5 w-40 sm:w-52 opacity-30 animate-pulse-slow" viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="50" stroke="#2ecc7080" strokeWidth="6" fill="none" />
  </svg>

  {/* Glow orbs */}
  <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-300/30 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200/25 blur-[130px] rounded-full"></div>

  {/* --------------------------- */}
  {/* MAIN GRID LAYOUT */}
  {/* --------------------------- */}
  <div className="relative max-w-8xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">


      {/* -------------------------------- */}
      {/* LEFT TOC — Sticky only on desktop */}
      {/* -------------------------------- */}
      {/* LEFT SIDEBAR */}
<div className="hidden md:block md:col-span-3 sticky top-28 self-start">
  <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-emerald-100 shadow-lg">

    <h3 className="text-md font-bold text-emerald-700 mb-4">
      📑 Table of Contents
    </h3>

   <ul className="space-y-3">
      {toc.map((item) => (
        <li key={item.id}>
          {/* MAIN ITEM */}
          <div
            onClick={() => scrollToSection(item.id)}
            className={`cursor-pointer font-medium transition flex items-center
              ${activeSection === item.id ? "text-emerald-600" : "text-gray-700"}
            `}
          >
            <span className="mr-2">▸</span>
            {item.label}
          </div>

          {/* SUB MENU */}
          {item.children && openMenu === item.id && (
            <ul className="mt-2 ml-5 space-y-2 border-l-2 border-emerald-200 pl-4">
              {item.children.map((child) => (
                <li
                  key={child.id}
                  onClick={() => scrollToSection(child.id)}
                  className={`cursor-pointer text-sm transition
                    ${
                      activeSection === child.id
                        ? "text-emerald-600 font-semibold"
                        : "text-gray-600"
                    }
                  `}
                >
                  {child.label}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
</div>




      {/* --------------------------- */}
      {/* MIDDLE CONTENT */}
      {/* --------------------------- */}
      <main className="col-span-12 md:col-span-6 space-y-8 animate-fadeIn">

        <div className="flex items-center gap-4 mb-2 sm:mb-4">
          <p className="text-gray-600 text-xs sm:text-sm">Share:</p>
          <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-emerald-600 cursor-pointer transition" />
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-emerald-600 cursor-pointer transition" />
          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-emerald-600 cursor-pointer transition" />
          <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-emerald-600 cursor-pointer transition" />
        </div>

       <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
 WhatsApp Business: Complete Guide for Businesses in 2026. 

</h1>

{/* AUTHOR SECTION */}
<div className="mt-4 mb-3 flex items-center gap-4 rounded-xl">
  {/* Avatar */}
  <div className="w-8 h-8 text-xs rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
    MA
  </div>

  {/* Author Info */}
  <div>
    <p className="text-sm font-semibold text-gray-900">
      Md. Ahmed
    </p>
    <p className="text-xs text-gray-600">
      AI Analyst & Content Writer • SaaS, WhatsApp API, Automation
    </p>
  </div>
</div>

{/* META INFO */}
<p className="text-gray-500 text-xs sm:text-sm">
  Updated on 29 Mar 2026 • 18 min read
</p>


  <section className="w-full py-5 ">
      <div className="max-w-4xl mx-auto ">
        

      {/* Introduction */}
<section id="first">
  <div className="max-w-4xl mx-auto mb-5">
    
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      Introduction
    </h2>

    <div className="space-y-6 text-md leading-relaxed text-gray-800">
      
      <p>
       WhatsApp Business has become one of the most popular and powerful tools for companies to connect with customers instantly. With billions of users worldwide, WhatsApp allows businesses to communicate, market, and provide support through a platform that customers already use daily.
      </p>

      <p>
      From small startups to large enterprises, businesses are adopting WhatsApp Business to improve customer engagement, automate communication, and increase sales. In this guide, we will explore what WhatsApp Business is, its key features, benefits, and how businesses can use it effectively in 2026.
      </p>

     

    </div>
    
  </div>

    {/* Image after intro */}
            <div className="mb-8">
              <img
                src={firstImage}
                alt="Qmize Bulk SMS Provider"
                className="rounded-xl shadow-md w-full"
              />
            </div>
</section>




{/* What is WhatsApp Business */}
<section id="second">
  <div className="max-w-4xl mx-auto mb-5">
    
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      What is <span className="font-semibold">WhatsApp Business</span>?
    </h2>

    <div className="space-y-6 text-md leading-relaxed text-gray-800">
      
      <p>
        <span className="font-semibold">WhatsApp Business</span> is a version of WhatsApp designed specifically for businesses. 
        It allows companies to interact with customers, manage conversations professionally, 
        and showcase their products or services.
      </p>

      <p>
        There are two main versions available:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>WhatsApp Business App</strong> – Designed for small businesses that 
          want to communicate with customers using a mobile app.
        </li>
        <li>
          <Link target="_blank" rel="noopener noreferrer"  to="https://qmize.com/whatsapp-business-api"><span className="font-semibold text-blue-500">WhatsApp Business API</span></Link>, – Designed for medium and large businesses 
          that need <Link target="_blank" rel="noopener noreferrer" to="https://qmize.com/blog/whatsapp-automation"><span className="font-semibold text-blue-500">WhatsApp automation,</span></Link> CRM integration, and large-scale messaging capabilities.
        </li>
      </ul>

      <p>
        Both options help businesses create a <span className="font-semibold">professional communication channel</span> with their customers.
      </p>

    </div>

  </div>
</section>




{/* Why Businesses Use WhatsApp Business */}
<section id="third">
  <div className="max-w-4xl mx-auto mb-5">
    
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      Why Businesses Use <span className="font-semibold">WhatsApp Business</span>
    </h2>

    <div className="space-y-6 text-md leading-relaxed text-gray-800">
      
      <p>
        Businesses today need faster and more personal ways to communicate with customers. 
        Traditional methods like email and 
        phone support can be slow and less convenient.  
        <span className="font-semibold"> WhatsApp Business</span> provides a simple solution 
        with real-time messaging.
      </p>

      <p>
        Some of the main reasons businesses use <span className="font-semibold">WhatsApp Business</span> include:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-semibold">Instant communication</span> with customers</li>
        <li><span className="font-semibold">Higher message open rates</span> compared to email</li>
        <li><span className="font-semibold">Convenient communication</span> for customers</li>
        <li><span className="font-semibold">Cost-effective</span> customer support</li>
        <li><span className="font-semibold">Better engagement</span> through multimedia messages</li>
      </ul>

      <p>
        Because of these advantages, <span className="font-semibold">WhatsApp Business</span> 
        has become an essential tool for modern customer communication.
      </p>

    </div>

  </div>
</section>




{/* Key Features of WhatsApp Business */}
<section id="fourth">
  <div className="max-w-4xl mx-auto mb-5">
    
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-8">
      Key Features of <span className="font-semibold">WhatsApp Business</span>
    </h2>

    <div className="space-y-8 text-gray-800 leading-relaxed text-md">

      <p>
        <span className="font-semibold">WhatsApp Business</span> includes several features 
        that make business communication more organized and efficient.
      </p>

      {/* Feature 1 */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Business Profile
        </h3>
        <p>
          A business profile allows companies to display important information about 
          their brand, including business name, description, website, email address, 
          business hours, and location. This helps customers quickly understand the 
          business and contact them easily.
        </p>
      </div>

      {/* Feature 2 */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Automated Messages
        </h3>
        <p>
          Automation helps businesses respond quickly to customers even when they are not available.
        </p>

        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><span className="font-semibold">Greeting messages</span> to welcome new customers</li>
          <li><span className="font-semibold">Away messages</span> when the business is unavailable</li>
          <li><span className="font-semibold">Quick replies</span> to answer frequently asked questions</li>
        </ul>

        <p className="mt-2">
          Automation improves response time and customer satisfaction.
        </p>
      </div>

      {/* Feature 3 */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Product Catalog
        </h3>
        <p>
          The catalog feature allows businesses to display their products directly 
          inside <span className="font-semibold">WhatsApp</span>. Companies can add 
          product images, descriptions, and prices so customers can easily browse 
          items without leaving the chat. This is especially useful for small businesses 
          and online stores.
        </p>
      </div>

      {/* Feature 4 */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Labels for Chat Organization
        </h3>
        <p>
          Businesses often manage many conversations at the same time. Labels help 
          organize chats and track customer progress.
        </p>

        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><span className="font-semibold">New customer</span></li>
          <li><span className="font-semibold">Order placed</span></li>
          <li><span className="font-semibold">Payment received</span></li>
          <li><span className="font-semibold">Order completed</span></li>
        </ul>

        <p className="mt-2">
          This makes it easier to manage customer interactions.
        </p>
      </div>

      {/* Feature 5 */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Broadcast Messaging
        </h3>
        <p>
          Broadcast messaging allows businesses to send updates to multiple customers 
          at once without creating a group. 
        </p>
        <p>
            Companies commonly use this feature for promotions, product launches, special offers, and announcements.

        </p>
      </div>

    </div>

  </div>
</section>


{/* WhatsApp Business App vs WhatsApp Business API */}
<section id="fifth">
  <div className="max-w-4xl mx-auto mb-5">
    
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-8">
      WhatsApp Business App vs WhatsApp Business API
    </h2>

    <div className="space-y-4 text-gray-800 leading-relaxed text-md">

      <p>
        The WhatsApp Business App and WhatsApp Business API serve different types of businesses.
      </p>

      <p>
        The WhatsApp Business App is ideal for small businesses that manage conversations manually from a smartphone. It offers basic automation and business profile features.
      </p>

      <p>
        The WhatsApp Business API is designed for larger businesses that need advanced capabilities. It allows integration with CRM systems, marketing platforms, and chatbots. It also supports multiple agents and large-scale messaging campaigns.
      </p>

      <p>
        Businesses that want to automate customer communication at scale typically choose the WhatsApp Business API.
      </p>

    </div>

  </div>
</section>



{/* Benefits of Using WhatsApp Business */}
<section id="sixth">
  <div className="max-w-4xl mx-auto mb-5">
    
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-8">
      Benefits of Using <span className="font-semibold">WhatsApp Business</span>
    </h2>

    <div className="space-y-4 text-gray-800 leading-relaxed text-md">

      <p>
        Using <span className="font-semibold">WhatsApp Business</span> can provide several advantages for companies looking to improve customer communication.
      </p>

      <p>
        One major benefit is <span className="font-semibold">better customer support</span>. Businesses can respond quickly to questions and solve problems faster.
      </p>

      <p>
        Another advantage is <span className="font-semibold">higher conversion rates</span>. When customers communicate directly with a business through chat, they are more likely to complete a purchase.
      </p>

      <p>
        <span className="font-semibold">WhatsApp Business</span> also helps companies build stronger relationships with customers through personalized communication.
      </p>

      <p>
        Additionally, businesses can use <span className="font-semibold">WhatsApp for marketing and promotions</span>, allowing them to reach customers directly with updates and offers.
      </p>

      <p>
        Finally, <span className="font-semibold">WhatsApp offers global reach</span>, making it easy for businesses to communicate with customers across different countries.
      </p>

    </div>

  </div>
</section>




{/* How Businesses Use WhatsApp in 2026 */}
<section id="seventh">
  <div className="max-w-4xl mx-auto mb-5">
    
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-8">
      How Businesses Use <span className="font-semibold">WhatsApp in 2026</span>
    </h2>

    <div className="space-y-4 text-gray-800 leading-relaxed text-md">

      <p>
        Businesses are using <span className="font-semibold">WhatsApp</span> in many different ways to improve customer experience and streamline operations.
      </p>

      {/* Feature 1 */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Customer Support
        </h3>
        <p>
          Many companies now offer customer support through <span className="font-semibold">WhatsApp</span> instead of traditional call centers. Customers can send messages and receive quick assistance.
        </p>
      </div>

      {/* Feature 2 */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Order Updates
        </h3>
        <p>
          Businesses send order confirmations, shipping notifications, and delivery updates through <span className="font-semibold">WhatsApp</span> to keep customers informed.
        </p>
      </div>

      {/* Feature 3 */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Marketing Campaigns
        </h3>
        <p>
          Companies use <span className="font-semibold">WhatsApp</span> to share promotions, product recommendations, and exclusive deals with customers.
        </p>
      </div>

      {/* Feature 4 */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Appointment Reminders
        </h3>
        <p>
          Service-based businesses such as clinics, salons, and consultants use <span className="font-semibold">WhatsApp</span> to send appointment reminders and confirmations.
        </p>
      </div>

    </div>

  </div>
</section>




{/* Best Practices for Using WhatsApp Business */}
<section id="eighth">
  <div className="max-w-4xl mx-auto mb-5">
    
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-8">
      Best Practices for Using <span className="font-semibold">WhatsApp Business</span>
    </h2>

    <div className="space-y-4 text-gray-800 leading-relaxed text-md">

      <p>
        To use <span className="font-semibold">WhatsApp Business</span> effectively, businesses should follow a few important best practices.
      </p>

      <p>
        <span className="font-semibold">Responding quickly</span> to customer messages is essential for maintaining good customer service.
      </p>

      <p>
        Businesses should also avoid sending spam messages and instead focus on sharing <span className="font-semibold">relevant and valuable information</span>.
      </p>

      <p>
        Using <span className="font-semibold">automation tools</span> can help manage conversations efficiently and reduce manual work.
      </p>

      <p>
        <span className="font-semibold">Personalizing messages</span> by addressing customers by name can make communication feel more friendly and engaging.
      </p>

      <p>
        Finally, businesses should ensure that the messages they send provide <span className="font-semibold">value to customers</span>, such as helpful information, updates, or special offers.
      </p>

    </div>

  </div>
</section>




{/* The Future of WhatsApp Business */}
<section id="ninth">
  <div className="max-w-4xl mx-auto mb-5">
    
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-8">
      The Future of <span className="font-semibold">WhatsApp Business</span>
    </h2>

    <div className="space-y-4 text-gray-800 leading-relaxed text-md">

      <p>
        <span className="font-semibold">WhatsApp Business</span> continues to evolve as messaging becomes one of the most popular communication channels.
      </p>

      <p>
        In the future, we can expect deeper integrations with <span className="font-semibold">e-commerce platforms</span>, <span className="font-semibold">advanced automation tools</span>, <span className="font-semibold">AI-powered chatbots</span>, and improved <span className="font-semibold">marketing capabilities</span>.
      </p>

      <p>
        As businesses continue to adopt messaging platforms, <span className="font-semibold">WhatsApp Business</span> will play an even bigger role in customer engagement and digital communication.
      </p>

    </div>

  </div>
</section>





{/* Conclusion */}
<section id="tenth">
  <div className="max-w-4xl mx-auto mb-5">
    
    <h2 className="text-3xl md:text-3xl font-bold text-emerald-700 mb-6">
      Conclusion
    </h2>

    <div className="space-y-6 text-md leading-relaxed text-gray-800">

      <p>
        <span className="font-semibold">WhatsApp Business</span> has transformed how companies interact with their customers. It provides a fast, convenient, and highly effective way to communicate, offer support, and promote products.
      </p>

      <p>
        Whether a small business uses the <span className="font-semibold">WhatsApp Business app</span> or a large company uses the <span className="font-semibold">WhatsApp Business API</span>, the platform offers powerful tools to improve customer relationships and drive growth.
      </p>

      <p>
        Businesses that adopt <span className="font-semibold">WhatsApp Business</span> as part of their communication strategy will be better prepared to meet customer expectations in the digital era.
      </p>

    </div>

  </div>
</section>
       
    
        
      </div>
    </section>


        <div className="mt-10 rounded-xl bg-emerald-100 px-6 py-5">
  <h3 className="text-md font-bold text-gray-900 mb-2">
    Md. Ahmed
  </h3>

  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
    With strong expertise in AI-driven content writing and data-backed analysis,
    <strong> Md. Ahmed</strong> specializes in creating high-quality content
    around Artificial Intelligence, SaaS platforms, WhatsApp Business API, and
    automation technologies.
  </p>
</div>


      </main>

      {/* --------------------------- */}
      {/* RIGHT SIDE IMAGE — Sticky + Parallax */}
      {/* --------------------------- */}
     {/* RIGHT STICKY IMAGE COLUMN */}
<div className="hidden md:block md:col-span-3 sticky top-20 self-start">

  {/* PARALLAX GOES INSIDE */}
  <div
    className="relative rounded-2xl overflow-hidden shadow-xl border border-emerald-200 bg-white/70 backdrop-blur-xl transition-transform duration-300"
  >
    
    {/* Parallax applied ONLY to image */}
    <img
      src={sideImage}
      alt="SignUp for WhatsApp Business API Service of Qmize"
      className="w-full h-[32rem] object-cover"
      
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/40 flex flex-col justify-end p-6">

      <h3 className="text-white text-xl font-bold drop-shadow-lg">
        Start using <span className="text-emerald-300">Qmize</span> WhatsApp Business API
      </h3>

      <p className="text-gray-200 text-sm mt-1 mb-4">
        Automate, broadcast & grow your business conversations.
      </p>

       <a href="https://apihub.msg24x7.com/register" ><button className=" cursor-pointer
        px-5 py-2.5 
        bg-gradient-to-r from-emerald-400 to-emerald-600 
        text-white font-semibold rounded-xl
        shadow-lg shadow-emerald-600/30
        hover:scale-[1.06] transition
      ">
        Get Started →
      </button></a>

    </div>
  </div>

</div>


    </div>
  </div>

  {/* --------------------------- */}
  {/* RECENT POSTS */}
  {/* --------------------------- */}
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 pb-20">
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Recent Posts</h3>

    <Link to="/blog/christmas-whatsapp-marketing-strategy-2025"><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

      {[
        {
          img: christmasImage,
          title: "Christmas WhatsApp Marketing Strategy 2025",
        },
        {
          img: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
          title: "Top Automation Strategies for 2025",
        },
        {
          img: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
          title: "Boost Customer Engagement With AI",
        },  
      ].map((post, i) => (
        <div
          key={i}
          className="rounded-2xl bg-white p-4 sm:p-5 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="h-40 rounded-xl mb-4 overflow-hidden">
            <img
              src={post.img}
              className="w-full h-full object-cover"
              alt={post.title}
            />
          </div>

          <h4 className="font-bold text-gray-900 text-md">{post.title}</h4>
          <p className="text-gray-600 text-sm mt-2">
            Short description of the blog post…
          </p>
        </div>
      ))}

    </div></Link>
  </div>

</section>


      {/* --------------------------- */}
      {/* CUSTOM ANIMATIONS */}
      {/* --------------------------- */}
      <style>{`
        .animate-spin-slow { animation: spin 18s linear infinite; }
        .animate-pulse-slow { animation: pulse 6s ease-in-out infinite; }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: .35; transform: scale(1); }
          50% { opacity: .7; transform: scale(1.08); }
        }

        .animate-section {
          animation: fadeUp 0.8s ease-out both;
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn { animation: fadeIn 1.2s ease-out; }
        .animate-fadeInUp { animation: fadeUp 1s ease-out; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>



        <Footer/>

    </>
  )
}

export default WhatsAppAPI

