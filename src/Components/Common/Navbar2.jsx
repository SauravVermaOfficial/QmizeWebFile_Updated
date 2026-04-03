import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
 
  

  
  
} from "lucide-react";
import {
  Zap,
  MessageCircle,
  Globe,
  Phone,
  Cloud,
  Mic,
  Mail,
  
  Workflow,
  Box,
  CreditCard,
  Sparkles,
  Newspaper,
  Users,
  HelpCircle,
  FileText,
  Shield
} from "lucide-react";

import Logo from "../../assets/Icons/newlogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);
  const [pricingRoute, setPricingRoute] = useState("/whatsapp-business-api");

  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isHoveringSubmenu, setIsHoveringSubmenu] = useState(false);


  useEffect(() => {
  const detectCountry = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
    console.log("Detected country:", data.country);
      if (data.country === "IN") {
        setPricingRoute("/whatsapp-business-api");
      } else {
        setPricingRoute("/whatsapp-business-api-international");
      }
    } catch (err) {
      console.error("Geo detection failed", err);
      // fallback
      // setPricingRoute("/whatsapp-business-api");
    }
  };

  detectCountry();
}, []);




  const navLinks = [
    { name: "Home" },
    { name: "Why Choose Us" },
    { name: "Solutions" },
    { name: "Integrations" },
    
    { name: "Resources" },
  ];


  const menuLayout = {
  Solutions: {
    width: "w-[60vw]",
    grid: "grid-cols-3"
  },
  Integrations: {
    width: "w-[17vw]",
    grid: "grid-cols-1"
  },
  Plans: {
    width: "w-[40vw]",
    grid: "grid-cols-3"
  },
  Resources: {
    width: "w-[40vw]",
    grid: "grid-cols-3"
  }
};


  const submenuData = {
  Solutions: [
    {
      title: "Marketing Services",
      items: [
       { title: "WhatsApp Business API", desc: "Customer messaging", icon: MessageCircle, link: "dynamic-pricing" },
      { title: "Bulk SMS Services", desc: "Instant offers", icon: Zap, link: "/bulk-sms-services" },
      { title: "OTP SMS", desc: "Instant offers", icon: Zap, link: "/otp-sms-service-provider" },
      { title: "Transactional SMS ", desc: "Instant offers", icon: Zap, link: "/transactional-sms" },
      { title: "Promotional SMS", desc: "Instant offers", icon: Zap, link: "/promotional-sms" },
      
      ]
    },
    {
      title: "Digital Services",
      items: [
        { title: "Website Development", desc: "Business website", icon: Globe, link: "/website-development-company-and-digital-agency" },
        { title: "Social Media Marketing", desc: "Brand building", icon: Users,link: "/social-media-marketing" },
        { title: "Press Release", desc: "Media on the top", icon: Sparkles,link:"/press-release-services" },  
        { title: "Search Engine Optimization", desc: "Grow traffic", icon: Sparkles, link:"/seo-services" },
        
      ]
    },
    {
      title: "Cloud Telephony",
      items: [
        { title: "Voice Broadcast", desc: "Bulk calls", icon: Mic ,link:"/voice-broadcasting-service"},
        { title: "Toll Free ", desc: "Toll Free Number", icon: Mic ,link:"/toll-free-number-for-business"},
        
        { title: "Missed Call", desc: "Lead tracking", icon: Phone, link: "/missed-call-service" }
      ]
    }
  ],

  Integrations: [
    {
      title: "Platform Integration",
      items: [
        { title: "WhatsApp Link", desc: "Generate Customize link", icon: MessageCircle, link: "/whatsapp-link-generator" },
        { title: "WhatsApp Button", desc: "Create Whatsapp chat widget", icon: Phone, link: "https://apihub.msg24x7.com/whatsapp-widget-button"  },
        { title: "App Marketplace", desc: "See our Integration", icon: Mail ,link:"/whatsapp-business-api-integration"}
      ]
    },
  
  ],

  Plans: [
    {
      title: "Plans",
      items: [
        { title: "Monthly Plan", desc: "Flexible pricing", icon: CreditCard },
        { title: "Enterprise", desc: "Custom billing", icon: Shield },
        { title: "Pay As You Go", desc: "Usage based", icon: Zap }
      ]
    },
    {
      title: "Add-ons",
      items: [
        { title: "Chatbots", desc: "Automation tools", icon: MessageCircle },
        { title: "Extra Credits", desc: "Recharge wallet", icon: CreditCard },
        { title: "Voice Minutes", desc: "Call balance", icon: Phone }
      ]
    },
    {
      title: "Discounts",
      items: [
        { title: "Festival Offers", desc: "Seasonal sale", icon: Sparkles },
        { title: "Bulk Deals", desc: "More savings", icon: Box },
        { title: "Partner Pricing", desc: "Reseller plans", icon: Users }
      ]
    }
  ],

  Resources: [
    {
      title: "Learn",
      items: [
        { title: "Blog", desc: "Expert content", icon: Newspaper , link: "/blogs" },
    
        { title: "Developer API Docs", desc: "Get API Integration Detail", icon: FileText , link: "/whatsapp-api-integration-docs"}
      ]
    },
    {
      title: "Company",
      items: [
        
        { title: "Careers", desc: "Join team", icon: Sparkles },
        { title: "Partners", desc: "Collaborate", icon: Workflow }
      ]
    },
    {
      title: "Support",
      items: [
     
        { title: "Reseller Guide", desc: "Become our Channel Partner", icon: Mail , link: "/white-labled-bulk-sms-reseller-program" },
        { title: "DLT Support", desc: "Get DLT Support", icon: Mail , link: "/dlt-support" },
        { title: "DLT New TRAI Rules", desc: "Information ", icon: Mail , link: "/dlt-new-trai-rules" }
      ]
    }
  ]
};

 const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  if (menuOpen) {
    // Stop Lenis scroll
    window.lenis?.stop();
    // Prevent background body scroll
    document.body.style.overflow = 'hidden';
  } else {
    // Start Lenis scroll
    window.lenis?.start();
    document.body.style.overflow = 'unset';
  }
  
  return () => {
    window.lenis?.start();
    document.body.style.overflow = 'unset';
  };
}, [menuOpen]);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  return (
    <>
      <nav
        className={`
          w-full bg-white sticky top-0 left-0 z-60 transition-all duration-500 
          ${scrolled ? "rounded-none shadow-md" : "rounded-tl-4xl rounded-tr-4xl"}
        `}
      >
        <div className="w-[95%] mx-auto flex items-center justify-between py-1 ">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <Link to="/">
              <img
                src={Logo}
                alt="brand logo"
                className="w-[100px] h-[50px] object-contain"
              />
            </Link>
          </div>

          {/* Center: Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6 text-emerald-900 font-semibold text-[15px] relative">
            {navLinks.map((link, index) => {
              const noSubmenu = ["Home", "Why Choose Us"];
              const showSubmenu = !noSubmenu.includes(link.name);

              return (
                <li
                  key={index}
                  className="relative flex items-center gap-1 cursor-pointer transition-colors duration-75 hover:text-emerald-700 h-16 flex items-center"
                  onMouseEnter={() => showSubmenu && setHoveredMenu(link.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  {link.name === "Home" ? (
                    <Link to="/" className="hover:text-emerald-700">Home</Link>
                  ) : link.name === "Why Choose Us" ? (
                    <Link to="/about" className="hover:text-emerald-700">Why Choose Us</Link>
                  ) : (
                    <span>{link.name}</span>
                  )}

                  {showSubmenu && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-300 ${
                        hoveredMenu === link.name ? "rotate-180 text-emerald-700" : "rotate-0"
                      }`}
                    />
                  )}

                  {/* DESKTOP SUBMENU RENDERING */}
                  {hoveredMenu === link.name && submenuData[link.name] && (
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full shadow-2xl border-r-4 border-l-4 border-emerald-300 rounded-2xl p-6 ${menuLayout[link.name]?.width || "w-[40vw]"} bg-white z-50`}
                    >
                      <div className={`grid ${menuLayout[link.name]?.grid || "grid-cols-1"} gap-8`}>
                        {submenuData[link.name].map((section, idx) => (
                          <div key={idx}>
                            <h3 className="text-emerald-800 font-bold text-sm mb-3 uppercase border-b border-emerald-200 pb-1">
                              {section.title}
                            </h3>
                            <ul className="space-y-3 text-sm">
                              {section.items.map((item, i) => {
                                const Icon = item.icon;
                                const isExternal = item.link?.startsWith("http");
                                return (
                                  <Link
                                    key={i}
                                    to={item.link === "dynamic-pricing" ? pricingRoute : item.link}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    className="block"
                                  >
                                    <li className="flex gap-3 p-2 rounded-lg transition hover:bg-emerald-100/70">
                                      <Icon size={16} className="text-emerald-600 mt-1" />
                                      <div>
                                        <p className="font-medium text-gray-800">{item.title}</p>
                                        <p className="text-xs text-gray-500">{item.desc}</p>
                                      </div>
                                    </li>
                                  </Link>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right: Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a href="https://apihub.msg24x7.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-emerald-900 text-white text-sm font-medium px-4 py-1 rounded-md flex items-center gap-1 hover:bg-emerald-800 transition border-b-2 border-green-400 cursor-pointer">
                Sign in <ArrowRight size={12} />
              </button>
            </a>
            <a href="https://wa.me/9031011559" target="_blank" rel="noopener noreferrer">
              <button className="cursor-pointer bg-emerald-900 text-white text-sm font-medium px-4 py-1 rounded-md hover:bg-emerald-800 transition border-b-2 border-green-400">
                Talk to Sales
              </button>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden p-2 rounded-md text-emerald-900 hover:bg-emerald-200 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div 
            className="fixed inset-x-0 top-[55px] bottom-0 z-50 md:hidden bg-emerald-50 border-t border-emerald-200 px-5 py-6 overflow-y-auto"
            data-lenis-prevent 
          >
            <div className="space-y-6 pb-24"> 
              {navLinks.map((link, index) => {
                const hasSubmenu = submenuData[link.name];
                return (
                  <div key={index} className="w-full">
                    {hasSubmenu ? (
                      <button
                        onClick={() => setMobileOpenMenu(mobileOpenMenu === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between text-emerald-900 font-bold text-lg py-3 border-b border-emerald-100"
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={20} className={`transition-transform ${mobileOpenMenu === link.name ? "rotate-180" : ""}`} />
                      </button>
                    ) : (
                      <Link
                        to={link.name === "Home" ? "/" : "/about"}
                        onClick={() => setMenuOpen(false)}
                        className="block w-full text-emerald-900 font-bold text-lg py-3 border-b border-emerald-100"
                      >
                        {link.name}
                      </Link>
                    )}

                    {mobileOpenMenu === link.name && hasSubmenu && (
                      <div className="mt-2 ml-2 space-y-6 border-l-2 border-emerald-200 pl-4">
                        {submenuData[link.name].map((section, sIdx) => (
                          <div key={sIdx} className="mt-4">
                            <h4 className="text-xs font-black text-emerald-800 uppercase mb-3">{section.title}</h4>
                            <ul className="space-y-4">
                              {section.items.map((item, i) => {
                                const isExternal = item.link?.startsWith("http");
                                return (
                                  <Link
                                    key={i}
                                    to={item.link === "dynamic-pricing" ? pricingRoute : item.link}
                                    onClick={() => !isExternal && setMenuOpen(false)}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    className="flex items-start gap-4 p-2 rounded-xl active:bg-emerald-200"
                                  >
                                    <div className="bg-white p-2 rounded-lg"><item.icon size={18} className="text-emerald-600" /></div>
                                    <div>
                                      <p className="text-sm font-bold text-emerald-900">{item.title}</p>
                                      <p className="text-xs text-emerald-700/70">{item.desc}</p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-6 space-y-3">
                <a href="https://apihub.msg24x7.com" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-emerald-900 text-white py-4 rounded-xl font-bold">Sign In</a>
                <a href="https://wa.me/9031011559" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white text-emerald-900 border-2 border-emerald-900 py-4 rounded-xl font-bold">Talk to Sales</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* OVERLAY */}
      {hoveredMenu && (
        <div className="fixed inset-0 z-40 backdrop-blur-[1px] bg-black/20 pointer-events-none" />
      )}
    </>
  );
}
