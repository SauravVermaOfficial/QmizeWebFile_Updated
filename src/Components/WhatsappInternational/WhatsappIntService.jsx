
import LoginImage from '../../assets/Images/loginImage_sample.webp'
import WhatsAppDemo from '../../assets/Images/whatsapp_business_api_page.jpg'
import { motion } from "framer-motion";
import { useState } from 'react'
import { Plus, Minus } from "lucide-react";
import waba from "../../assets/Images/whatsapp-business-api-template.png";
import { useNavigate } from "react-router-dom";
import chatbotUI from "../../assets/Images/chatbot.png";


import { TrendingUp, Clock, MessageCircle, ShieldCheck, DollarSign } from "lucide-react";



const ServiceSection = () => {


  const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-emerald-600 mt-0.5"
  >
    <path d="M5 10l4 4L19 5" />
  </svg>
)


  const IconCRM = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M7 12h10M12 7v10" />
  </svg>
)

const IconERP = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16v6H4zM4 14h16v6H4z" />
  </svg>
)

const IconStore = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 7h18l-2 13H5L3 7z" />
    <path d="M16 7a4 4 0 0 1-8 0" />
  </svg>
)

const IconAPI = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 12h8M12 8v8" />
    <circle cx="12" cy="12" r="9" />
  </svg>
)

const IconAutomation = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
    <circle cx="12" cy="12" r="4" />
  </svg>
)


const IconCheck = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12l4 4L19 6" />
  </svg>
)

const IconBot = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="7" width="16" height="10" rx="2" />
    <path d="M9 7V5M15 7V5" />
  </svg>
)

const IconBroadcast = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 12h16M12 4v16" />
  </svg>
)

const IconChat = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
  </svg>
)

const IconUsers = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="7" r="3" />
    <circle cx="17" cy="7" r="3" />
    <path d="M2 21c0-4 7-4 7-4s7 0 7 4" />
  </svg>
)

const IconMedia = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M8 11l3 3 5-5" />
  </svg>
)

const IconAnalytics = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19V10M10 19V4M16 19v-7" />
  </svg>
)


  const features = [
  {
    title: "Verified Business Profile",
    desc: "Build customer trust with official business verification and stronger brand authenticity on WhatsApp.",
    icon: <IconCheck />
  },
  {
    title: "Automated Chatbots",
    desc: "Deploy intelligent automation to handle customer queries instantly across regions and time zones.",
    icon: <IconBot />
  },
  {
    title: "Bulk Message Broadcasting",
    desc: "Send approved WhatsApp template messages at scale with optimized global deliverability.",
    icon: <IconBroadcast />
  },
  {
    title: "Two-Way Messaging",
    desc: "Enable real-time, interactive conversations that improve support, sales, and engagement worldwide.",
    icon: <IconChat />
  },
  {
    title: "Multi-Agent Inbox",
    desc: "Collaborate across teams and countries with a unified inbox built for sales and customer support operations.",
    icon: <IconUsers />
  },
  {
    title: "Rich Media Messages",
    desc: "Enhance customer experience with images, videos, documents, and interactive call-to-action buttons.",
    icon: <IconMedia />
  },
  {
    title: "Analytics & Reporting",
    desc: "Track campaign results, message performance, and customer engagement with actionable insights.",
    icon: <IconAnalytics />
  },
  {
    title: "Multi-Country Scalability",
    desc: "Manage WhatsApp messaging across multiple markets with centralized controls and compliance..",
    icon: <IconAnalytics />
  },
  {
    title: "API & CRM Integrations",
    desc: "Connect Qmize with your existing systems through secure APIs and automation workflows..",
    icon: <IconAnalytics />
  }
]





  const integrations = [
  {
    title: "CRM Integrations",
    desc: "Connect with Salesforce, Zoho, HubSpot, and other CRM platforms.",
    icon: <IconCRM />
  },
  {
    title: "ERP Integrations",
    desc: "Integrate with Zoho One, ERPNext, Microsoft, and more.",
    icon: <IconERP />
  },
  {
    title: "E-commerce Platforms",
    desc: "Works seamlessly with Shopify, WooCommerce, and Magento.",
    icon: <IconStore />
  },
  {
    title: "Custom API Integration",
    desc: "Integrate with web and mobile apps on Android and iOS.",
    icon: <IconAPI />
  },
  {
    title: "Automation & Third-Party Tools",
    desc: "Connect automation tools and external platforms easily.",
    icon: <IconAutomation />
  }
]








  const SvgChat = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none"
    className="text-emerald-500">
    <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"
      stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const SvgAutomation = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none"
    className="text-green-500">
    <circle cx="12" cy="12" r="9"
      stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v5l3 3"
      stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const SvgShield = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none"
    className="text-emerald-600">
    <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"
      stroke="currentColor" strokeWidth="1.5" />
  </svg>
)


  const [pricingType, setPricingType] = useState("international"); 
  const [billing, setBilling] = useState("annually");
    const navigate = useNavigate();
  const industries = [
    "E-commerce",
    "Healthcare",
    "Education",
    "Real Estate",
    "Finance & Banking",
    "Travel",
    "Logistics",
    "Enterprises & Startups"
  ];


  const planBgMap = {
  "Free Plan": "bg-gradient-to-bl from-green-50 to-green-300",
  "Basic Plan": "bg-gradient-to-bl from-green-50 to-green-300",
  "Pro Plan": "bg-gradient-to-bl from-green-50 to-green-300",

  "Saving Plan": "bg-gradient-to-bl from-red-50 to-rose-300",
  "Standard Plan": "bg-gradient-to-bl from-red-50 to-rose-300",
  "Ultimate Plan": "bg-gradient-to-bl from-red-50 to-rose-300",
};
 




    const faqs = [
  {
    q: "What is WhatsApp Business API?",
    a: "WhatsApp Business API is an official solution from Meta that allows businesses to send verified messages, automate conversations, and manage customer communication at scale through a secure platform.",
  },
  {
    q: "Who can use WhatsApp Business API internationally?",
    a: "Any registered business with a valid website, an approved Meta Business Manager account, and compliance with WhatsApp messaging policies can apply for WhatsApp Business API access in most countries worldwide.",
  },
  {
    q: "How is WhatsApp Business API different from the WhatsApp Business App?",
    a: "The WhatsApp Business App is designed for small businesses that manage customer chats manually. WhatsApp Business API is built for medium to large businesses that require automation, integrations, multi-agent support, and high-volume messaging.",
  },
  {
    q: "Why choose Qmize for WhatsApp Business API worldwide?",
    a: "Qmize provides a scalable WhatsApp API platform with global onboarding support, transparent pricing, high message deliverability, and enterprise-grade tools to help businesses engage customers across multiple regions.",
  },
  {
    q: "What types of messages can be sent using WhatsApp API?",
    a: "Businesses can send OTP and verification messages, transactional alerts such as orders and payments, customer support replies, marketing campaigns using approved templates, and rich media messages including images, documents, and interactive buttons.",
  },
  {
    q: "Is WhatsApp Business API pricing the same in every country?",
    a: "No. WhatsApp pricing is conversation-based and varies by country and message category. International rates depend on the customer’s location and the type of conversation such as marketing, utility, authentication, or service.",
  },
  {
    q: "Does Qmize charge any monthly platform or markup fee?",
    a: "Qmize offers flexible subscription plans with transparent platform charges. Final pricing depends on your selected plan, message volume, and WhatsApp conversation rates applicable in your target countries.",
  },
  {
    q: "Can WhatsApp API be integrated with CRM and other business tools?",
    a: "Yes. Qmize supports seamless integration with CRM systems, ecommerce platforms, support tools, and custom business applications through secure APIs and automation workflows.",
  },
  {
    q: "How long does WhatsApp Business API approval take internationally?",
    a: "Approval timelines may vary by country, but most businesses are onboarded within a few working days once documentation and Meta Business verification are successfully completed.",
  },
  {
    q: "Is WhatsApp Business API secure for enterprise use?",
    a: "Yes. WhatsApp Business API is built on Meta’s enterprise-grade security standards, supports verified business messaging, and ensures customer communication remains secure and compliant.",
  },
  {
    q: "Do you support multi-country WhatsApp messaging under one account?",
    a: "Yes. Qmize allows businesses to manage WhatsApp messaging across multiple countries, teams, and phone numbers from a single centralized platform.",
  },
  {
    q: "Which industries benefit most from WhatsApp Business API services?",
    a: "Industries such as ecommerce and retail, banking and financial services, travel and hospitality, healthcare, education, logistics, and customer support-driven businesses benefit significantly from WhatsApp Business API.",
  },
  {
    q: "Can Qmize support international businesses with multi-region messaging?",
    a: "Yes. Qmize is designed to support global businesses operating across multiple regions, allowing you to manage messaging, templates, teams, and compliance requirements from one centralized platform.",
  },
];

    
      const [openIndex, setOpenIndex] = useState(null);
    
      const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
      };


     const benefits = [
    {
      icon: <TrendingUp size={26} />,
      title: "Grow Faster",
      desc: "Talk to thousands of customers in one click and scale communication like never before."
    },
    {
      icon: <Clock size={26} />,
      title: "Save Time",
      desc: "Automation takes over repetitive replies so your team focuses on growth, not typing."
    },
    {
      icon: <MessageCircle size={26} />,
      title: "Boost Engagement",
      desc: "WhatsApp delivers industry-leading open rates that emails and SMS can’t match."
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "Stay Secure",
      desc: "End-to-end encryption and business verification protect every customer interaction."
    },
    {
      icon: <DollarSign size={26} />,
      title: "Increase Sales",
      desc: "Instant conversations turn curious visitors into paying customers faster."
    }
  ];










const services = [
    {
      title: "Official WhatsApp API Setup",
      points: [
        "Business Verification",
        "Meta Approval",
        "Number Onboarding",
        "Template Registration"
      ],
    },
    {
      title: "Automated Messaging System",
      points: [
        "OTP & Alerts",
        "Order Confirmations",
        "Delivery Notifications",
        "Promotional Broadcasts"
      ],
    },
    {
      title: "Chatbot & Automation",
      points: [
        "Lead Qualification",
        "FAQ Automation",
        "Order Tracking",
        "Appointment Booking"
      ],
    },
    {
      title: "Campaign Management",
      points: [
        "Audience Segmentation",
        "Scheduled Campaigns",
        "Template Control",
        "Analytics & Reports"
      ],
    },
    {
      title: "CRM & System Integration",
      points: [
        "CRM Sync",
        "Website Integration",
        "Payment Gateway",
        "Support Desk Tools"
      ],
    },
  ];



   const pricingDataInt = {
    monthly: [
      {
        name: "Free Plan",
        price: "$0",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration ($15 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Attributes - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      {
        name: "Basic Plan",
        price: "$55",
        freeSms: "1000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Basic WABA Access",
          "Advanced Analytics",
          "Broadcasting",
          "CSV Broadcasting",
          "Audience Segmentation",
          "SMS Broadcasting",
          "Team Inbox",
          "Live Chat Dashboard",
          "Custom Quick Replies",
          "Notes Feature",
          "Agent Transfer Monitoring",
          "Contact Import",
          "Multi Agent Chat",
          "Template Library Access",
          "Create Message Template",
     
        ],
        limit:[
          "Team Members - 1 Owner + 5 Free Agents included. Additional Agents at $20/month each",
          "Team Roles - 2",
          "Max Tags - 10",
          "Max Attributes - 5",
          "Max Contacts Import - 10000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - Free",
          "Shopify and WooCommerce Integration - Paid",
          "Google Sheets integration - Paid",
          "WhatsApp Flow Builder  - Paid",
          "WA Drip Campaign - Paid"
        ]
      },
      {
        name: "Standard Plan",
        price: "$99",
        freeSms: "2500",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Developer API",
"Integration Marketplace",


        ],
         limit:[
          "Team Members - 1 Owner + 5 Free Agents included. Additional Agents at $20/ month each",
          "Team Roles - 3",
          "Max Tags - 100",
          "Max Attributes - 20",
          "Webhook Limit - 1",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - Free",
          "Shopify & WooCommerce Integrations - Free",
          "Google Sheets integration - Paid",
          "WhatsApp Flow Builder  - Paid",
          "WA Drip Campaign - Paid"
        ]
      },

      {
        name: "Pro Plan",
        price: "$199",
        freeSms: "5000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Developer API",
"Integration Marketplace",

        ],
         limit:[
          "Team Members - 1 Owner + 10 Free Agents included. Additional Agents at $20/ month each",
          "Team Roles - 5",
          "Max Tags - 200",
          "Max Attributes - 25",
          "Webhook Limit - 2",
          "Max Contacts Import - 100000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot  Free",
          "Shopify & WooCommerce Integrations - Free",
          "Google Sheets integration - Free",
          "WhatsApp Flow Builder  - Paid",
          "WA Drip Campaign - Paid"
        ]
      },

     

      {
        name: "Ultimate Plan",
        price: "$349",
        freeSms: "20000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",

        ],
         limit:[
          "Team Members - 1 Owner + 20 Free Agents included. Additional Agents at $20/ month each",
          "Team Roles - Unlimited",
          "Max Tags - Unlimited",
          "Max Attributes - Unlimited",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - Free",
          "Shopify & WooCommerce Integrations - Free",
          "Google Sheets integration - Free",
          "WhatsApp Flow Builder  - Free",
          "WA Drip Campaign - Free"
        ]
      },
      
    ],

   

    annually: [
      {
        name: "Free Plan",
        price: "$0",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration ($15 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Attributes - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      {
        name: "Basic Plan",
        price: "$594",
        freeSms: "1000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Basic WABA Access",
          "Advanced Analytics",
          "Broadcasting",
          "CSV Broadcasting",
          "Audience Segmentation",
          "SMS Broadcasting",
          "Team Inbox",
          "Live Chat Dashboard",
          "Custom Quick Replies",
          "Notes Feature",
          "Agent Transfer Monitoring",
          "Contact Import",
          "Multi Agent Chat",
          "Template Library Access",
          "Create Message Template",
         
        ],
        limit:[
         "Team Members - 1 Owner + 5 Free Agents included. Additional Agents at $20/month each",
          "Team Roles - 2",
          "Max Tags - 10",
          "Max Attributes - 5",
          "Max Contacts Import - 10000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - Free",
          "Shopify and WooCommerce Integration - Paid",
          "Google Sheets integration - Paid",
          "WhatsApp Flow Builder  - Paid",
          "WA Drip Campaign - Paid"
        ]
      },
      {
        name: "Standard Plan",
        price: "$1069",
        freeSms: "2500",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Developer API",
"Integration Marketplace",


        ],
         limit:[
         "Team Members - 1 Owner + 5 Free Agents included. Additional Agents at $20/ month each",
          "Team Roles - 3",
          "Max Tags - 100",
          "Max Attributes - 20",
          "Webhook Limit - 1",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - Free",
          "Shopify & WooCommerce Integrations - Free",
          "Google Sheets integration - Paid",
          "WhatsApp Flow Builder  - Paid",
          "WA Drip Campaign - Paid"
        ]
      },

      {
        name: "Pro Plan",
        price: "$2149",
        freeSms: "5000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Developer API",
"Integration Marketplace",

        ],
         limit:[
           "Team Members - 1 Owner + 10 Free Agents included. Additional Agents at $20/ month each",
          "Team Roles - 5",
          "Max Tags - 200",
          "Max Attributes - 25",
          "Webhook Limit - 2",
          "Max Contacts Import - 100000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot  Free",
          "Shopify & WooCommerce Integrations - Free",
          "Google Sheets integration - Free",
          "WhatsApp Flow Builder  - Paid",
          "WA Drip Campaign - Paid"
        ]
      },

     

      {
        name: "Ultimate Plan",
        price: "$3769",
        freeSms: "20000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",

        ],
         limit:[
         "Team Members - 1 Owner + 20 Free Agents included. Additional Agents at $20/ month each",
          "Team Roles - Unlimited",
          "Max Tags - Unlimited",
          "Max Attributes - Unlimited",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Google Dialogflow Chatbot - Free",
          "Shopify & WooCommerce Integrations - Free",
          "Google Sheets integration - Free",
          "WhatsApp Flow Builder  - Free",
          "WA Drip Campaign - Free"
        ]
      },
      
    ]
  };

  return (
    <>




     <section className="relative w-full overflow-hidden py-16 px-6 bg-gradient-to-br from-white via-green-50 to-green-100">
    
      {/* Background Sand Texture */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none
        bg-[radial-gradient(#000_1px,transparent_1px)]
        [background-size:26px_26px]" />
    
      {/* Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/40 blur-3xl rounded-full"></div>
    
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    
        {/* LEFT CONTENT */}
        <div className="space-y-6 animate-fadeUp">
    
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-200 text-green-800 rounded-full">
            WHATSAPP BUSINESS API
          </span>
    
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
         WhatsApp Business API  
            <span className="block text-green-600">Provider for Global Businesses</span>
          </h1>
    
          <p className="text-gray-600 text-base md:text-md leading-relaxed max-w-md">
           Enterprise-grade WhatsApp Business API solutions designed for companies worldwide.<br/>
           Qmize enables secure automation, seamless CRM integrations, high deliverability, and scalable customer communication across multiple countries helping businesses drive engagement, improve support, and grow revenue with compliant messaging.
          </p>
    
          
    
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
            href='https://apihub.msg24x7.com'
            target='_blank'
            ><button className="cursor-pointer px-4 py-1 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition">
              Get API Access
            </button></a>

             <a
             href='https://wa.me/+919031011559'
             target='_blank'
             >
            <button className="cursor-pointer px-4 py-1 rounded-xl border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition">
              Talk to an Expert
            </button></a> 
          </div>
    
        </div>
    
        
    
          
            <img
            src={waba}
            alt='Whatsapp business api services in india'
            className='w-full h-80 md:h-[400px] object-contain'
            />
          
       </div>
    
      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }
    
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease forwards;
        }
      `}</style>
    
    </section>





    <section className="relative w-full py-12 sm:py-12 
bg-gradient-to-br from-emerald-50 via-white to-emerald-100 
px-4 sm:px-6 overflow-hidden">

  <div className="absolute inset-0 opacity-[0.08] pointer-events-none
        bg-[radial-gradient(#000_1px,transparent_1px)]
        [background-size:26px_26px]" />

  {/* Soft Background Shapes */}
  <div className="absolute -top-24 -left-24 w-80 h-80 
  bg-emerald-300/20 rounded-full blur-3xl"></div>

  <div className="absolute bottom-0 right-0 w-96 h-96 
  bg-green-300/20 rounded-full blur-3xl"></div>

  {/* CONTENT */}
  <div className="relative max-w-6xl mx-auto space-y-14">

    {/* SECTION 1 */}
    <div className="max-w-4xl mx-auto text-center animate-slideUp">

      <h2 className="text-2xl sm:text-3xl lg:text-4xl 
      font-extrabold text-green-700">
        Grow Globally with WhatsApp Business API by Qmize
      </h2>

      <p className="mt-5 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
       From fast-growing startups to global enterprises, Qmize provides secure WhatsApp Business API solutions built to support sales, customer service, and retention at scale. With flexible international pricing and powerful automation tools, businesses can build stronger relationships while improving response times and conversion performance.
      </p>

      <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
        Whether you’re a startup or an enterprise, Qmize delivers secure, scalable,
        and compliant WhatsApp API services designed to boost sales, improve
        support, and build long-term customer relationships.
      </p>

    </div>

    {/* DIVIDER */}
    <div className="flex justify-center">
      <span className="w-24 h-[2px] bg-emerald-400/60 rounded-full"></span>
    </div>

    {/* SECTION 2 */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

      {/* LEFT */}
      <div className="animate-slideUpDelay">
        <h3 className="text-xl sm:text-2xl lg:text-3xl 
        font-bold text-green-900">
         The Business Impact of WhatsApp API for Global Brands
        </h3>

        <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
        WhatsApp has evolved into one of the most effective customer communication channels worldwide. As a trusted WhatsApp Business API solution for international companies, Qmize offers fast onboarding, seamless integrations, and enterprise-grade reliability. Whether you operate in one market or across multiple regions, our platform helps you scale customer engagement with confidence.
        </p>

        <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
          As one of the best WhatsApp API providers in India, Qmize ensures fast
          onboarding, seamless integration, and enterprise-grade reliability.
        </p>
      </div>

      {/* RIGHT CARD */}
      <div className="animate-fadeInDelay">
        <div className="bg-white/80 backdrop-blur 
        border border-emerald-100 rounded-3xl p-6 sm:p-8 shadow-xl">

          <ul className="space-y-4 text-sm sm:text-base text-gray-700">
            <li className="flex items-start gap-3">
              <CheckIcon /> Automate conversations and replies
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon /> Send notifications & campaign messages
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon /> Manage customer support at scale
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon /> Enterprise-grade compliance & reliability
            </li>
          </ul>

        </div>
      </div>

    </div>

  </div>

  {/* ANIMATIONS */}
  <style>{`
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .animate-slideUp {
      animation: slideUp 0.8s ease-out;
    }

    .animate-slideUpDelay {
      animation: slideUp 0.8s ease-out 0.2s forwards;
      opacity: 0;
    }

    .animate-fadeInDelay {
      animation: fadeIn 1s ease 0.4s forwards;
      opacity: 0;
    }
  `}</style>

</section>









<section className="relative w-full py-24 px-6 bg-white overflow-hidden">

  {/* Floating subtle background patterns */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200/40 rounded-full blur-2xl"></div>
    <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-400/30 rounded-full blur-3xl"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT TEXT */}
    <div className="space-y-6 animate-fadeIn">

      {/* Tag */}
      <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 
        text-xs font-semibold tracking-wide animate-pulse">
        OFFICIAL WHATSAPP BUSINESS API
      </span>

      <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
         WhatsApp Business API 
        <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-green-500 text-transparent 
          bg-clip-text animate-gradientText">
          with Zero Markup Pricing
        </span>
      </h1>

      <p className="text-gray-600 max-w-xl leading-relaxed text-md">
       No hidden charges. No long-term lock-ins. Just scalable plans that grow with your business.
        <br />
        Contact us to get a custom quote that fits your goals.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-2 gap-3">

        {[
          "Conversation Categories (marketing, utility, authentication, service)",
          "Monthly message volume",
          "Required features and integrations",
          "Chatbot Automation",
          "Smart Analytics",
          "API Based Workflows",
        ].map((item, i) => (
          <div key={i}
            className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 bg-gray-50/80 shadow-sm text-sm text-gray-700">

            ✅ {item}
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="pt-4">
        <a
        href='https://apihub.msg24x7.com'
        target='_blank'
        ><button className="cursor-pointer relative px-4 py-1 rounded-full font-semibold text-white
          bg-gradient-to-r from-emerald-500 to-green-400 transition 
          shadow-xl hover:scale-105 hover:shadow-emerald-400/40 duration-300 overflow-hidden group">

          Get API Access

          <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition"></span>
        </button></a>
      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">

      <div className="relative p-4 sm:p-6 rounded-3xl bg-white shadow-xl border
        hover:scale-[1.03] transition duration-500">

        {/* Decorative border glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-300 to-green-300 
          rounded-3xl blur opacity-30"></div>

        {/* IMAGE PLACEHOLDER */}
        <div className="relative w-[280px] sm:w-[360px] md:w-[420px] 
  h-[300px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-md">

  <img
    src={LoginImage}   
    alt="WhatsApp Business API Platform Preview"
    className="w-full h-full object-cover"
  />

</div>


      </div>

    </div>

  </div>

  {/* Animations */}
  <style>
    {`
      @keyframes gradientText {
        0% { background-position: 0% }
        100% { background-position: 100% }
      }

      .animate-gradientText {
        background-size: 200%;
        animation: gradientText 4s linear infinite alternate;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .animate-fadeIn { animation: fadeIn 1s ease; }
    `}
  </style>

</section>






{/* 
     <div className="flex justify-center">
  <div className="bg-white/10 backdrop-blur-xl border border-emerald-500 rounded-full flex p-1">

   
    <button
      onClick={() => navigate("/whatsapp-business-api")}
      
      className={`px-6 py-2 rounded-full text-sm transition-all cursor-pointer ${
        pricingType === "india"
          ? "bg-emerald-500 text-white font-bold"
          : "text-black"
      }`}
    >
      Indian
    </button>

   
    <button
      onClick={() => setPricingType("international")}
      className={`px-6 py-2 rounded-full text-sm transition-all cursor-pointer ${
        pricingType === "international"
          ? "bg-emerald-500 text-white font-bold"
          : "text-black"
      }`}
    >
      International
    </button>

  </div>
</div> */}







{pricingType === "international" && (
 <div className="w-full  px-6 md:px-16 text-white">

      {/* Heading */}
      {/* TITLE */}
<h2 className="text-center text-3xl md:text-6xl font-semibold text-black">
  Qmize Pricing Plans
</h2>

<p className="text-center text-gray-600 mt-4">
  Monthly / Yearly Subscription
</p>

{/* TOGGLE */}
<div className="flex items-center justify-center gap-3 mt-6">
  {/* Monthly */}
  <span
    className={`text-sm ${
      billing === "monthly" ? "font-semibold text-black" : "text-gray-400"
    }`}
  >
    Monthly
  </span>

  {/* Switch */}
  <button
    onClick={() =>
      setBilling(billing === "monthly" ? "annually" : "monthly")
    }
    className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
      billing === "annually" ? "bg-emerald-500" : "bg-gray-300"
    }`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
        billing === "annually" ? "translate-x-5" : ""
      }`}
    />
  </button>

  {/* Yearly */}
  <span
    className={`text-sm flex items-center gap-1 ${
      billing === "annually" ? "font-semibold text-black" : "text-gray-400"
    }`}
  >
    Yearly 
    <span className="text-emerald-500 font-medium">(10% Off)</span>
  </span>
</div>


      {/* Pricing Cards */}
      <div className="grid md:grid-cols-5 gap-2 mt-14 animate-fadeUp">

        {pricingDataInt[billing].map((plan, idx) => (
          <div
  key={idx}
  className="
    group rounded-3xl backdrop-blur-xl 
   hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]
    transition-all duration-500 
  "
>
   <div
  className={`
    p-7 rounded-3xl flex flex-col h-full text-white
    transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
    ${planBgMap[plan.name] || "bg-emerald-600"}
  `}
>

    {/* Title */}
    <h3 className="text-lg font-semibold leading-tight text-black">{plan.name}</h3>

    {/* Price */}
    <div className="relative overflow-hidden mt-2">
  <p
    key={plan.price}
    className="text-2xl font-bold text-emerald-600 animate-numberRoll"
  >
    {plan.price}
    <span className="text-[9px] text-black"> + taxes</span>
  </p>
  
</div>



    {/* FREE SMS CREDITS */}
    <div className="mt-3 flex items-center gap-2 animate-fadeIn">
      <p className="text-[11px] text-black font-medium tracking-wide leading-snug">
        Markup Fee:{" "}
        <span className="font-semibold">0%</span>
      </p>
    </div>

   
    

    {/* LINE DIVIDER */}
    <div className="w-full h-[1px] bg-black/10 my-4"></div>

    {/* CONVERSATION PRICING */}
    
  <a
  href="https://business.whatsapp.com/products/platform-pricing"
  target="_blank"
  rel="noopener noreferrer"
  className=" block "
>
  <button
    className="
      relative w-full py-2 rounded-full font-semibold text-[9px] mb-5
      text-white bg-gradient-to-tr from-sky-400 to-blue-400
      transition-all duration-300 overflow-hidden cursor-pointer
      hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]
    "
  >
    {/* Floating Stars */}
    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
      <svg className="absolute top-1 left-4 w-4 opacity-70 animate-twinkle" viewBox="0 0 24 24">
        <path fill="white" d="M12 17l-5 3 2-5-4-3 5-.5L12 7l2 4.5 5 .5-4 3 2 5z" />
      </svg>

      <svg className="absolute bottom-1 right-4 w-3 opacity-70 animate-twinkle-delay" viewBox="0 0 24 24">
        <path fill="white" d="M12 17l-5 3 2-5-4-3 5-.5L12 7l2 4.5 5 .5-4 3 2 5z" />
      </svg>
    </span>

    META MESSAGES PRICING →
  </button>
</a>

    

    <div className="mt-0 flex items-center gap-2 animate-fadeIn">
      <p className="text-[11px] text-emerald-600 font-medium tracking-wide leading-snug">
       Unlimited Free Service Chats
      </p>
    </div>

    {/* LINE */}
    <div className="w-full h-[1px] bg-black/10 my-4"></div>
  {/* SUBSCRIBE BUTTON */}
<a
  href="https://apihub.msg24x7.com/register"
  target="_blank"
  rel="noopener noreferrer"
  className=" block "
>
  <button
    className="mb-4
      relative w-full py-1 rounded-full font-semibold text-[14px]
      text-white bg-gradient-to-r from-emerald-500 to-green-400
      transition-all duration-300 overflow-hidden cursor-pointer
      hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]
    "
  >
    {/* Floating Stars */}
    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
      <svg className="absolute top-1 left-4 w-4 opacity-70 animate-twinkle" viewBox="0 0 24 24">
        <path fill="white" d="M12 17l-5 3 2-5-4-3 5-.5L12 7l2 4.5 5 .5-4 3 2 5z" />
      </svg>

      <svg className="absolute bottom-1 right-4 w-3 opacity-70 animate-twinkle-delay" viewBox="0 0 24 24">
        <path fill="white" d="M12 17l-5 3 2-5-4-3 5-.5L12 7l2 4.5 5 .5-4 3 2 5z" />
      </svg>
    </span>

    Subscribe Now →
  </button>
</a>
    {/* FEATURES */}
    <div>
      <h4 className="font-semibold text-black/80 text-xs">Features</h4>

      <ul className="mt-3 space-y-2 text-[11px] leading-relaxed">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-2 h-2 mt-[6px] bg-emerald-400 rounded-full"></span>
            <span className="block text-black/60">{f}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* LINE */}
    <div className="w-full h-[1px] bg-black/10 my-4"></div>

    {/* LIMITS SECTION */}
    <div className="">
      <h4 className="font-semibold text-black/80 text-xs">Limits</h4>

      <ul className="mt-3 space-y-2 text-[11px] leading-relaxed">
        {plan.limit.map((limit, i) => (
          <li key={i} className="flex gap-2">
            <span className="w-2 h-2 bg-black/40 rounded-full mt-[6px]"></span>
            <span className="text-black/60">{limit}</span>
          </li>
        ))}
      </ul>
    </div>


    <div className="w-full h-[1px] bg-black/10 my-4"></div>

     <div className="">
      {/* <h4 className="font-semibold text-black/80 text-xs">Chatbots - $75 (Charged Separately)</h4> */}

      <ul className="mt-3 space-y-2 text-[11px] leading-relaxed">
        {plan.chatbots.map((limit, i) => (
          <li key={i} className="flex gap-2">
            <span className="w-2 h-2 bg-black/40 rounded-full mt-[6px]"></span>
            <span className="text-black/60">{limit}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="w-full h-[1px] bg-black/10 my-4"></div>


  






  </div>
</div>


        ))}

      </div>
    </div>
    )}




 <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            No-Code Chatbot <br />
            <span className="text-emerald-600">Builder (Add-On)</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-xl">
            Build multiple WhatsApp chatbots using a simple 
            <span className="font-semibold text-gray-800"> Drag & Drop </span>
            interface. No coding required.
          </p>

          <p className="text-gray-700 text-base">
           Chatbots - <span className='font-bold'>$75</span> (Charged Separately)
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
           <a
           href="https://wa.me/9031011559"
           target='_blank'
           > <button className="cursor-pointer bg-emerald-500 hover:bg-emerald-600 transition text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              ADD-ON
            </button></a>

            <button className="group flex items-center gap-2 text-emerald-600 font-semibold">
              Learn more
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-emerald-400/20 blur-3xl rounded-full"></div>

          {/* Main Image */}
          <img
            src={chatbotUI}
            alt="No Code Chatbot Builder"
            className="relative z-10 w-full max-w-xl rounded-xl shadow-2xl"
          />

         
        </div>

      </div>
    </section>



   <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
        WhatsApp Per Message Price
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        Official WhatsApp platform pricing for Authentication messages
        (Rest of Asia Pacific region).
      </p>
    </div>

    {/* Pricing Card */}
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border p-8 sm:p-10 text-center">

      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-3xl">
        💬
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
        View Official WhatsApp Pricing
      </h3>

      <p className="text-gray-600 mt-3">
        {/* WhatsApp does not allow pricing pages to be embedded directly. */}
        Click below to view the latest and official pricing on WhatsApp’s website.
      </p>

      {/* Redirect Button */}
      <a
        href="https://business.whatsapp.com/products/platform-pricing?country=Rest%20of%20Asia%20Pacific&currency=Euro%20(EUR)&category=Authentication"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 mt-8 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg"
      >
        View Pricing
        <span className="text-lg">↗</span>
      </a>

    </div>

    {/* Footer Note */}
    <p className="text-sm text-gray-500 mt-6 text-center">
      You will be redirected to WhatsApp’s official platform in a new tab.
    </p>

  </div>
</section>

















    <section className="relative w-full py-18 px-5 md:px-16 text-white overflow-hidden 
bg-gradient-to-br from-[#041b11] via-[#072d1c] to-black">

  {/* Floating Light Orbs */}
  <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-emerald-500/20 blur-[200px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-green-400/20 blur-[180px] rounded-full"></div>

  {/* Animated Squares */}
  {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="animate-squareSlow absolute w-48 h-48 bg-emerald-400/10 top-16 left-20 rounded-xl"></div>
    <div className="animate-squareFast absolute w-32 h-32 bg-emerald-400/10 bottom-20 right-20 rounded-xl"></div>
    <div className="animate-squareMid absolute w-28 h-28 bg-emerald-400/10 top-1/2 right-1/3 rounded-xl"></div>
  </div> */}

  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-8">

      {/* Headline */}
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-tight
        bg-gradient-to-r from-white via-emerald-300 to-green-400
        bg-clip-text text-transparent">
        Why Global Businesses Choose Qmize
      </h2>

      {/* Smart Chips */}
      

      {/* Description */}
      <p className="text-white/70 leading-relaxed max-w-lg text-md md:text-md">
       Selecting the right WhatsApp Business API partner can directly impact deliverability, compliance, and customer experience. Qmize is trusted by businesses worldwide for its reliable infrastructure, transparent pricing, and scalable messaging tools built for real business growth.
      </p>

      {/* BENEFIT BOXES */}
      <div className="grid gap-4">

        {[
          "Meta-compliant WhatsApp Business API access",
          "Quick onboarding for international businesses",
          "Optimized message delivery and quality monitoring",
          "TFlexible pricing for global usage and volumes",
          "Expert support for integrations and automation",
          "Built to scale across teams, regions, and customer journeys"
        ].map((item, i) => (
          <div key={i} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 
              to-transparent blur opacity-0 group-hover:opacity-100 transition-all"></div>

            <div className="relative flex items-center gap-3 p-4 rounded-xl 
              bg-white/5 border border-white/10 backdrop-blur-xl
              hover:border-emerald-400/40 hover:bg-emerald-400/10 transition">

              <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              <p className="text-sm sm:text-md text-white/80">{item}</p>
            </div>
          </div>
        ))}

      </div>

     

    </div>

    {/* RIGHT VISUAL PANEL */}
    <div className="flex justify-center relative">

      {/* Glow Ring */}
      <div className="absolute w-[420px] h-[420px] rounded-full 
        border border-emerald-400/20 animate-spinSlow"></div>

      <div className="relative w-[250px] sm:w-[320px] md:w-[500px]
        h-[260px] sm:h-[320px] md:h-[500px]
        rounded-2xl border border-white/15 bg-white/5
        overflow-hidden backdrop-blur-xl shadow-2xl
        hover:scale-[1.03] transition-all duration-500">

        {/* Replace with image later */}
        <img src={WhatsAppDemo} 
        alt="no. 1 whatsapp business api provider n india "
        className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent"></div>
      </div>

    </div>

  </div>

  {/* ANIMATIONS */}
  <style jsx>{`

    @keyframes squareSlow {
      0% { transform: translateY(0); }
      50% { transform: translateY(-25px); }
      100% { transform: translateY(0); }
    }

    @keyframes squareFast {
      0% { transform: translateX(0); }
      50% { transform: translateX(25px); }
      100% { transform: translateX(0); }
    }

    @keyframes squareMid {
      0% { transform: translate(0); }
      50% { transform: translate(15px,-15px); }
      100% { transform: translate(0); }
    }

    @keyframes spinSlow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .animate-squareSlow { animation: squareSlow 10s ease-in-out infinite; }
    .animate-squareFast { animation: squareFast 7s ease-in-out infinite; }
    .animate-squareMid { animation: squareMid 8s ease-in-out infinite; }
    .animate-spinSlow { animation: spinSlow 25s linear infinite; }

  `}</style>

</section>








<section className="relative w-full py-12 sm:py-12 lg:py-12 
bg-gradient-to-br from-white via-emerald-50 to-white px-4 sm:px-6 overflow-hidden">

  {/* Background Accent */}
  <div className="absolute -top-24 -right-24 w-80 h-80 
  bg-emerald-300/20 rounded-full blur-3xl"></div>

  <div className="absolute bottom-0 left-0 w-72 h-72 
  bg-green-300/20 rounded-full blur-3xl"></div>

  {/* CONTENT */}
  <div className="relative max-w-6xl mx-auto">

    {/* SECTION HEADER */}
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl 
      font-extrabold text-green-700 animate-slideUp">

        Key Features of Qmize WhatsApp Business API Platform
      </h2>

      <p className="mt-4 text-gray-700 max-w-3xl mx-auto 
      text-sm sm:text-base lg:text-md animate-fadeInDelay">

       Qmize delivers enterprise-grade WhatsApp API capabilities designed for international customer engagement, automation, and scalable messaging across multiple markets.
      </p>
    </div>

    {/* FEATURES GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {features.map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl p-6 
          border border-emerald-100 shadow-sm 
          hover:shadow-xl hover:-translate-y-1 
          transition-all duration-300 animate-cardFade"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* ICON */}
          <div className="w-12 h-12 flex items-center justify-center 
          rounded-xl bg-emerald-100 text-emerald-600 mb-4 
          group-hover:scale-110 transition">
            {item.icon}
          </div>

          {/* TEXT */}
          <h3 className="text-lg font-bold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-2 text-gray-600 text-sm">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* FOOTER TEXT */}
    <p className="mt-12 text-center text-gray-600 max-w-3xl mx-auto 
    text-sm sm:text-base animate-fadeInDelay2">

      These features make Qmize a preferred WhatsApp API provider for
      results-driven brands.
    </p>

  </div>

  {/* ANIMATIONS */}
  <style>{`
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes cardFade {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-slideUp {
      animation: slideUp 0.8s ease-out;
    }

    .animate-fadeInDelay {
      animation: fadeIn 1s ease 0.3s forwards;
      opacity: 0;
    }

    .animate-fadeInDelay2 {
      animation: fadeIn 1s ease 0.6s forwards;
      opacity: 0;
    }

    .animate-cardFade {
      animation: cardFade 0.7s ease forwards;
      opacity: 0;
    }
  `}</style>

</section>











































































































































































    
   


































      



























































































    <section className="relative w-full py-12 sm:py-12 
bg-gradient-to-br from-white via-emerald-50 to-white px-4 sm:px-6 overflow-hidden">

  {/* Background Accent */}
  <div className="absolute -top-24 -right-24 w-72 h-72 
  bg-emerald-300/20 rounded-full blur-3xl"></div>

  <div className="absolute bottom-0 left-0 w-72 h-72 
  bg-green-300/20 rounded-full blur-3xl"></div>

  {/* CONTENT */}
  <div className="relative max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl 
      font-extrabold text-green-700 animate-slideUp">
        Easy Integration with Your Existing Systems
      </h2>

      <p className="mt-4 text-gray-700 max-w-3xl mx-auto 
      text-sm sm:text-base lg:text-lg animate-fadeInDelay">
        Qmize offers flexible and secure integration options to match your business workflow:
      </p>
    </div>

    {/* INTEGRATION GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {integrations.map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl p-6 
          border border-emerald-100 shadow-sm 
          hover:shadow-xl hover:-translate-y-1 
          transition-all duration-300 animate-cardFade"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* ICON */}
          <div className="w-12 h-12 flex items-center justify-center 
          rounded-xl bg-emerald-100 text-emerald-600 mb-4 
          group-hover:scale-110 transition">
            {item.icon}
          </div>

          {/* TITLE */}
          <h3 className="text-lg font-bold text-gray-900">
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-2 text-gray-600 text-sm">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* FOOTER TEXT */}
    <p className="mt-12 text-center text-gray-600 max-w-3xl mx-auto 
    text-sm sm:text-base animate-fadeInDelay2">
      Our professional technical team ensures smooth implementation with minimal downtime.
    </p>

  </div>

  {/* ANIMATIONS */}
  <style>{`
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes cardFade {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-slideUp {
      animation: slideUp 0.8s ease-out;
    }

    .animate-fadeInDelay {
      animation: fadeIn 1s ease 0.3s forwards;
      opacity: 0;
    }

    .animate-fadeInDelay2 {
      animation: fadeIn 1s ease 0.6s forwards;
      opacity: 0;
    }

    .animate-cardFade {
      animation: cardFade 0.7s ease forwards;
      opacity: 0;
    }
  `}</style>

</section>









          




          <section className="relative w-full py-17 px-6 md:px-16 bg-gradient-to-b from-white via-emerald-50 to-white overflow-hidden">

      {/* Floating glow */}
      <div className="absolute -top-32 right-[-120px] w-[400px] h-[400px] bg-emerald-300/30 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 left-[-120px] w-[350px] h-[350px] bg-emerald-200/30 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold shadow">
            Industries We Serve
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-900">
            Built For Every Business Model
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-gray-600">
            Our WhatsApp API adapts to every industry - not the other way around.
          </p>
        </motion.div>

        {/* Animated Industry Rail */}
        <div className="mt-16">

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 }
              }
            }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 text-center"
          >

            {industries.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                className="group cursor-pointer"
              >

                {/* Neon text block */}
                <div className="relative">

                  {/* glow line */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-16 h-[2px] bg-gradient-to-r from-emerald-300 to-green-500 opacity-0 group-hover:opacity-100 transition"></div>

                  {/* main label */}
                  <p className="
                  text-base sm:text-lg md:text-xl font-semibold
                  text-emerald-900 hover:text-emerald-600
                  transition-all">
                    {item}
                  </p>

                  {/* underline animation */}
                  <div className="
                  mx-auto mt-3 w-0 h-[2px] bg-emerald-400
                  group-hover:w-16 transition-all duration-300"></div>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-emerald-800 font-medium text-sm sm:text-base">
            If your business has customers - WhatsApp API is for you.
          </p>
        </motion.div>

      </div>
    </section>








    <section className="relative w-full py-17 px-6 md:px-16 bg-gradient-to-b from-white via-emerald-50 to-white overflow-hidden">

  {/* Glow Background */}
  <div className="absolute -top-32 right-[-120px] w-[380px] h-[380px] bg-emerald-200/30 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 left-[-120px] w-[320px] h-[320px] bg-emerald-100/40 blur-[140px] rounded-full"></div>

  <div className="relative z-10 max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold">
        Our Workflow
      </span>

      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-900">
        Our Simple 3-Step Process
      </h2>

      <p className="mt-3 text-gray-600 max-w-xl mx-auto">
        We take you from onboarding to campaign launch - smoothly and efficiently.
      </p>
    </div>

    {/* Process Flow */}
    <div className="relative mt-16">

      {/* Central Line */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-emerald-300 via-emerald-400 to-emerald-300"></div>

      <div className="space-y-16">

        {/* STEP 1 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="md:w-5/12 text-right md:pr-8">
            <h3 className="text-xl font-bold text-emerald-900">
              Business Verification & Onboarding
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              We handle Meta business verification, approval process,
              WhatsApp number setup and configuration for you.
            </p>
          </div>

          {/* Dot */}
          <div className="relative flex items-center justify-center">
            <span className="w-14 h-14 rounded-full border-4 border-emerald-400 
              bg-white flex items-center justify-center 
              text-emerald-700 font-bold animate-pulseSoft">
              1
            </span>
            <span className="absolute w-20 h-20 rounded-full border border-emerald-300/40 animate-ring"></span>
          </div>

          <div className="hidden md:block md:w-5/12"></div>

        </div>

        {/* STEP 2 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="hidden md:block md:w-5/12"></div>

          <div className="relative flex items-center justify-center">
            <span className="w-14 h-14 rounded-full border-4 border-emerald-400 
              bg-white flex items-center justify-center 
              text-emerald-700 font-bold animate-pulseSoft">
              2
            </span>
            <span className="absolute w-20 h-20 rounded-full border border-emerald-300/40 animate-ring"></span>
          </div>

          <div className="md:w-5/12 md:pl-8">
            <h3 className="text-xl font-bold text-emerald-900">
              Integration & Automation
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              We connect your CRM, website and backend with automation flows
              enabling real-time messaging and chatbot workflows.
            </p>
          </div>

        </div>

        {/* STEP 3 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="md:w-5/12 text-right md:pr-8">
            <h3 className="text-xl font-bold text-emerald-900">
              Campaign Launch
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Templates, approval, scheduling and broadcasting -
              your WhatsApp campaigns go live seamlessly.
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <span className="w-14 h-14 rounded-full border-4 border-emerald-400 
              bg-white flex items-center justify-center 
              text-emerald-700 font-bold animate-pulseSoft">
              3
            </span>
            <span className="absolute w-20 h-20 rounded-full border border-emerald-300/40 animate-ring"></span>
          </div>

          <div className="hidden md:block md:w-5/12"></div>

        </div>

      </div>
    </div>

  </div>

  {/* Animations */}
  <style jsx>{`
    @keyframes pulseSoft {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.1); opacity: 0.85; }
    }

    @keyframes ring {
      0% { transform: scale(1); opacity: 0.7; }
      100% { transform: scale(1.8); opacity: 0; }
    }

    .animate-pulseSoft {
      animation: pulseSoft 2s infinite;
    }

    .animate-ring {
      animation: ring 2s infinite;
    }
  `}</style>

</section>





<section className="relative w-full py-17 px-6 md:px-16 bg-emerald-100 overflow-hidden">

  {/* Soft Gradient Glow Background */}
  <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-emerald-200/30 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-300/30 blur-[140px] rounded-full"></div>

  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>

      <span className="inline-block mb-3 px-4 py-1.5 rounded-full 
        bg-emerald-200 text-emerald-700 text-sm font-semibold">
        Why Choose Us?
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-900 leading-tight">
        Your Growth Partner for  
        <span className="block text-emerald-500 mt-2">
          WhatsApp Business API Success
        </span>
      </h2>

      <p className="mt-4 text-gray-600 max-w-lg leading-relaxed">
        We don't just provide APIs - we build a complete, secure and scalable
        communication foundation for high-growth businesses.
      </p>

      {/* CTA BUTTON */}
       <a
             href='https://wa.me/+919031011559'
             target='_blank'
             ><button className="cursor-pointer 
        mt-8 px-4 py-1 rounded-full
        bg-gradient-to-r from-emerald-500 to-green-400
        text-white font-semibold shadow-lg
        hover:scale-105 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]
        transition-all duration-300">
        Talk to an Expert →
      </button></a>

    </div>

    {/* RIGHT FEATURES LIST */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">

      {[
        {
          title: "Official WhatsApp Partner Support",
          icon: "✅"
        },
        {
          title: "Quick Setup & Activation",
          icon: "⚡"
        },
        {
          title: "Dedicated Developer Support",
          icon: "🧠"
        },
        {
          title: "Scalable Infrastructure",
          icon: "📈"
        },
        {
          title: "Affordable Pricing Plans",
          icon: "💰"
        },
        {
          title: "Secure Hosting & Reports",
          icon: "🔒"
        },
      ].map((item, i) => (
        <div
          key={i}
          className="
            flex items-center gap-4
            border-l-4 border-emerald-400
            pl-4 hover:bg-emerald-50
            transition-all duration-300
            animate-fadeSlide
          "
        >
          {/* Icon */}
          <div className="
            text-xl w-9 h-9 flex items-center justify-center
            bg-emerald-100 text-emerald-700 rounded-full">
            {item.icon}
          </div>

          {/* Text */}
          <p className="text-emerald-900 font-semibold text-sm sm:text-base">
            {item.title}
          </p>
        </div>
      ))}

    </div>

  </div>

  {/* Animations */}
  <style jsx>{`
    @keyframes fadeSlide {
      0% {
        opacity: 0;
        transform: translateY(12px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fadeSlide {
      animation: fadeSlide 0.8s ease forwards;
    }
  `}</style>

</section>





<section className="relative w-full py-17 px-6 md:px-16 bg-gradient-to-br from-emerald-600 via-green-500 to-emerald-700 text-white overflow-hidden">

  {/* Animated Background Blobs */}
  <div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-white/20 rounded-full blur-[120px] animate-spinSlow"></div>
  <div className="absolute -bottom-28 -right-20 w-[350px] h-[350px] bg-black/20 rounded-full blur-[140px] animate-spinReverse"></div>

  {/* Floating particles */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <span className="particle top-10 left-[20%]"></span>
    <span className="particle top-[40%] left-[70%]"></span>
    <span className="particle top-[70%] left-[30%]"></span>
  </div>

  <div className="relative max-w-5xl mx-auto text-center">

    {/* Headline */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
      Ready to Automate Your Business with
      <span className="block mt-2 text-white drop-shadow-lg">
        WhatsApp Business API?
      </span>
    </h2>

    {/* Subheading */}
    <p className="mt-4 text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
      Let’s transform conversations into conversions and make messaging
      your strongest revenue channel.
    </p>

    {/* Buttons */}
    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5">

      <a href="https://apihub.msg24x7.com" target='_blank' className="relative group">
        <button className="
          px-4 py-1 rounded-full font-semibold text-green-700
          bg-white shadow-lg
          hover:scale-105 transition-all duration-300
          hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]
        ">
          Get WhatsApp Business API
        </button>

        {/* Glow ring */}
        <span className="
          absolute inset-0 rounded-full 
          border border-white/50 opacity-0 
          group-hover:opacity-100 
          animate-glowRing
        "></span>
      </a>

      <a href="https://wa.me/+919031011559" target='_blank' className="relative">
        <button className="cursor-pointer
          px-4 py-1 rounded-full font-semibold text-white
          border border-white/50
          hover:bg-white hover:text-green-700
          transition-all duration-300
        ">
          Talk to an Expert
        </button>
      </a>

    </div>

  </div>

  {/* Animations */}
  <style jsx>{`
    @keyframes spinSlow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes spinReverse {
      0% { transform: rotate(360deg); }
      100% { transform: rotate(0deg); }
    }

    .animate-spinSlow {
      animation: spinSlow 40s linear infinite;
    }

    .animate-spinReverse {
      animation: spinReverse 55s linear infinite;
    }

    .particle {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: rgba(255,255,255,0.6);
      animation: floatUp 6s ease-in-out infinite;
    }

    .particle:nth-child(2) {
      animation-delay: 2s;
    }
    .particle:nth-child(3) {
      animation-delay: 4s;
    }

    @keyframes floatUp {
      0%, 100% { transform: translateY(0); opacity: 0.6; }
      50% { transform: translateY(-18px); opacity: 1; }
    }

    @keyframes glowRing {
      0% { box-shadow: 0 0 0 rgba(255,255,255,0.6); }
      100% { box-shadow: 0 0 25px rgba(255,255,255,0.7); }
    }

    .animate-glowRing {
      animation: glowRing 2s infinite alternate;
    }
  `}</style>

</section>















<section className="w-full bg-[#fdfcf7] px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT SIDE HEADING */}
        <div className="col-span-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Frequently Asked <br />
            <span className="font-serif italic text-emerald-700">Questions</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Get instant answers to your most common questions.
          </p>
        </div>

        {/* RIGHT SIDE ACCORDION */}
        <div className="col-span-2 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
              >
                <span className="font-medium text-gray-900">
                  {item.q}
                </span>
                {openIndex === index ? (
                  <Minus className="text-emerald-700" size={20} />
                ) : (
                  <Plus className="text-gray-600" size={20} />
                )}
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 p-4 sm:p-5" : "max-h-0 p-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


















    
    
    </>
  )
}

export default ServiceSection