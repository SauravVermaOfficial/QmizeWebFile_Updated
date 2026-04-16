import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Components/Common/Loader";
import ScrollToTop from "./Components/ScrolltoTop";


import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import APIwithLoader from "./Components/WhatsAppAPIFiles/APIwithLoader";
import WebsiteDev from "./Components/Pages/WebsiteDev";
import SEOServices from "./Components/Pages/SEO";
import PRservice from "./Components/Pages/PRservice";
import NotFound from "./Components/Pages/NotFound";
import SMM from "./Components/Pages/SMM";
import BulkSMS from "./Components/Pages/BulkSms";
import VoiceBroadcast from "./Components/Pages/VoiceBroadcast";
import OTPSMSService from "./Components/Pages/OTPsms";
import Terms from "./Components/Pages/Terms";
import Privacy from "./Components/Pages/Privacy";
import Nospam from "./Components/Pages/Nospam";
import Refund from "./Components/Pages/Refund";
import Contact from "./Components/Pages/Contact";
import WhatsappDocs from "./Components/Pages/WhatsappDocs";
import Resellerguide from "./Components/Pages/Resellerguide";
import DLTSupport from "./Components/Pages/DltSupport";
import DLTRules from "./Components/Pages/Dltnewrules";
import TollFree from "./Components/Pages/Tollfree";
import MissedCall from "./Components/Pages/MissedCall";
import CloudTelephony from "./Components/Pages/Cloudtelephony";
import WhatsappInter from "./Components/Pages/WhatsappInter";
import UaePricing from "./Components/Pages/UaePricing";
import WhatsAppLink from "./Components/Pages/WhatsAppLink";
import AppMarket from "./Components/Pages/AppMarket";





import MainBlogPage from "./Components/Blogs/MainBlogPage";
import FirstBlog from "./Components/Blogs/FirstBlog";
import SecondBlog from "./Components/Blogs/SecondBlog";
import TransactionalSMS from "./Components/Pages/Transactional";
import PromotionalSMS from "./Components/Pages/Promotional";
import ThirdBlog from "./Components/Blogs/ThirdBlog";
import FourBlog from "./Components/Blogs/FourBlog";
import FifthBlog from "./Components/Blogs/FifthBlog";
import SixthBlog from "./Components/Blogs/SixthBlog";
import SeventhBlog from "./Components/Blogs/SeventhBlog";
import EighthBlog from "./Components/Blogs/EighthBlog";
import NineBlog from "./Components/Blogs/NineBlog";
import TenthBlog from "./Components/Blogs/TenthBlog"
import EleventhBlog from "./Components/Blogs/EleventhBlog";
import TwelfthBlog from "./Components/Blogs/TwelfthBlog";
import ThirteenBlog from "./Components/Blogs/ThirteenBlog";
import FourteenBlog from "./Components/Blogs/FourteenBlog";
import FifteenBlog from "./Components/Blogs/FifteenBlog";
import SixteenBlog from "./Components/Blogs/SixteenBlog";
import SeventeenBlog from "./Components/Blogs/SeventeenBlog";
import EighteenBlog from "./Components/Blogs/EighteenBlog";
import NinteenBlog from "./Components/Blogs/NinteenBlog";
import TwentiethBlog from "./Components/Blogs/TwentiethBlog";
import TwentyOneBlog from "./Components/Blogs/TwentyOneBlog";
import TwentyTwoBlog from "./Components/Blogs/TwentyTwoBlog";
import TwentyThreeBlog from "./Components/Blogs/TwentyThreeBlog";
import TwentyFourBlog from "./Components/Blogs/TwentyFourBlog";
import TwentyFiveBlog from "./Components/Blogs/TwentyFiveBlog";
import TwentySixBlog from "./Components/Blogs/TwentySixBlog";
import TwentysevenBlog from "./Components/Blogs/TwentysevenBlog";


const LenisProvider = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // ✅ FIX: resize observer
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });

    resizeObserver.observe(document.body);

    window.lenis = lenis;

    return () => {
      resizeObserver.disconnect();
      lenis.destroy();
    };
  }, []);

  // ✅ FIX: update on route change
  useEffect(() => {
    window.lenis?.resize();
    window.lenis?.scrollTo(0);
  }, [location]);

  return children;
};
const AppRoute = () => {

  const [loading, setLoading] = useState(true);


  // ✅ Loader timer
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // ✅ Lenis scroll (MOVED ABOVE return)
  // useEffect(() => { 

  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     smooth: true,
  //     direction: "vertical",
  //     gestureDirection: "vertical",
  //     smoothTouch: false,
  //     touchMultiplier: 1.2,
  //     infinite: false,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   window.lenis = lenis;

  //   return () => {
  //     lenis.destroy();
  //   };

  // }, []);

 
  // ✅ RETURN AFTER ALL HOOKS
  if (loading) return <Loader />;

  return (
    <BrowserRouter>
    <LenisProvider> 
   
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatsapp-business-api" element={<APIwithLoader />} />
        <Route path="/website-development-company-and-digital-agency" element={<WebsiteDev />} />
        <Route path="/seo-services" element={<SEOServices />} />
        <Route path="/press-release-services" element={<PRservice />} />
        <Route path="/social-media-marketing" element={<SMM />} />
        <Route path="/bulk-sms-services" element={<BulkSMS />} />
        <Route path="/blogs" element={<MainBlogPage />} />
        <Route path="/voice-broadcasting-service" element={<VoiceBroadcast />} />
        <Route path="/otp-sms-service-provider" element={<OTPSMSService />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/no-spam-policy" element={<Nospam />} /> 
        <Route path="/refund-policy" element={<Refund />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/whatsapp-api-integration-docs" element={<WhatsappDocs />} />
        <Route path="/white-labled-bulk-sms-reseller-program" element={<Resellerguide />} />
        <Route path="/dlt-support" element={<DLTSupport />} />
        <Route path="/dlt-new-trai-rules" element={<DLTRules />} />
        <Route path="/toll-free-number-for-business" element={<TollFree />} />
        <Route path="/missed-call-service" element={<MissedCall />} />
        <Route path="/missed-call-service" element={<MissedCall />} />
        <Route path="/cloud-telephony-service" element={<CloudTelephony />} />
        <Route path="/whatsapp-business-api-international" element={<WhatsappInter />} />
        <Route path="/enterprise-messaging-for-uae-businesses" element={<UaePricing />} />
        <Route path="/whatsapp-link-generator" element={<WhatsAppLink />} />
        <Route path="/whatsapp-business-api-integration" element={<AppMarket />} />

        

        
        <Route path="/blog/top-10-whatsapp-business-api-provider-in-india" element={<FirstBlog/>}/>
        <Route path="/blog/christmas-whatsapp-marketing-strategy" element={<SecondBlog/>}/>
        <Route path="/transactional-sms" element={<TransactionalSMS/>}/>
        <Route path="/promotional-sms" element={<PromotionalSMS/>}/>
        <Route path="/blog/qmize-vs-traditional-digital-agencies-vs-cpaas-platforms" element={<ThirdBlog/>}/>
        <Route path="/blog/qmize-powering-business-growth-through-smart-digital-marketing-and-it-solutions" element={<FourBlog/>}/>
        <Route path="/blog/top-wati-alternatives-for-whatsapp-business" element={<FifthBlog/>}/>
        <Route path="/blog/zoko-alternatives-india" element={<SixthBlog/>}/>
        <Route path="/blog/gallabox-alternatives-india" element={<SeventhBlog/>}/>
        <Route path="/blog/interakt-alternatives-whatsapp-marketing" element={<EighthBlog/>}/>
        <Route path="/blog/aisensy-alternatives-india" element={<NineBlog/>}/>
        <Route path="/blog/top-10-whatsapp-marketing-strategies" element={<TenthBlog/>}/>
        <Route path="/blog/whatsapp-ecommerce-store-guide" element={<EleventhBlog/>}/>
        <Route path="/blog/whatsapp-message-not-delivered" element={<TwelfthBlog/>}/>
        <Route path="/blog/whatsapp-broadcast-vs-whatsapp-group" element={<ThirteenBlog/>}/>
        <Route path="/blog/how-to-send-bulk-sms" element={<FourteenBlog/>}/>
        <Route path="/blog/whatsapp-automation" element={<FifteenBlog/>}/>
        <Route path="/blog/whatsapp-auto-reply" element={<SixteenBlog/>}/>
        <Route path="/blog/mastering-whatsapp-sales-chat" element={<SeventeenBlog/>}/>
        <Route path="/blog/5-game-changing-whatsapp-business-account-feature" element={<EighteenBlog/>}/>
        <Route path="/blog/the-ultimate-whatsapp-api-integration-checklist" element={<NinteenBlog/>}/>
        <Route path="/blog/whatsapp-verification-explained-steps-and-benefits" element={<TwentiethBlog/>}/>
        <Route path="/blog/whatsApp-introduction-message" element={<TwentyOneBlog/>}/>
        <Route path="/blog/whatsapp-marketing" element={<TwentyTwoBlog/>}/>
        <Route path="/blog/top-10-bulk-sms-sevice-providers-in-india" element={<TwentyThreeBlog/>}/>
        <Route path="/blog/how-to-convert-whatsapp-to-business-account" element={<TwentyFourBlog/>}/>
        <Route path="/blog/whatsapp-cloud-api" element={<TwentyFiveBlog/>}/>
        <Route path="/blog/whatsapp-business" element={<TwentySixBlog/>}/>
        <Route path="/blog/whatsapp-business-web" element={<TwentysevenBlog/>}/>



        <Route path="*" element={<NotFound />} />

      </Routes>
      </LenisProvider>
    </BrowserRouter>  
  );
};

export default AppRoute;
