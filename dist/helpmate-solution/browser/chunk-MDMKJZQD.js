import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-2VETHU63.js";

// src/app/core/services/services-data.service.ts
var ServicesDataService = class _ServicesDataService {
  getServices() {
    return [
      {
        id: "cctv",
        title: "CCTV Surveillance",
        subtitle: "Helpmate CCTV",
        description: "Complete end-to-end CCTV security solutions for homes, offices, factories, and commercial spaces. We supply, install, and maintain high-quality surveillance systems with 24/7 support.",
        features: [
          "HD & 4K IP Camera Installation",
          "DVR / NVR Setup & Configuration",
          "Remote Monitoring via Mobile App",
          "Night Vision & PTZ Cameras",
          "Annual Maintenance Contracts (AMC)",
          "Wired & Wireless Systems"
        ],
        icon: "cctv",
        email: "helpmatecctv@gmail.com",
        color: "#2563eb",
        bgColor: "#eff6ff"
      },
      {
        id: "recruitment",
        title: "Recruitment Solutions",
        subtitle: "Helpmate Solution",
        description: "End-to-end staffing and talent acquisition services for businesses of all sizes. We specialize in permanent placements, contract staffing, and executive search across multiple industries.",
        features: [
          "Permanent & Contractual Staffing",
          "Executive Search & Headhunting",
          "Campus Placement Drive",
          "HR Consulting & Policy Setup",
          "Payroll Processing Support",
          "Background Verification"
        ],
        icon: "recruitment",
        email: "helpmatehrsolution@gmail.com",
        color: "#7c3aed",
        bgColor: "#f5f3ff"
      },
      {
        id: "property",
        title: "Property Dealing",
        subtitle: "Helpmate Realty",
        description: "Your trusted real estate partner in the NCR region. We assist buyers, sellers, and renters with residential and commercial property transactions, backed by deep local market knowledge.",
        features: [
          "Residential Property Buy / Sell / Rent",
          "Commercial Space Leasing",
          "Property Valuation & Consultation",
          "Legal Documentation Assistance",
          "Investment Advisory",
          "Plot & Land Deals"
        ],
        icon: "property",
        email: "helpmaterealtyinfo@gmail.com",
        color: "#059669",
        bgColor: "#ecfdf5"
      },
      {
        id: "software",
        title: "Software Development",
        subtitle: "Helpmate Software",
        description: "Custom software, web, and mobile application development tailored to your business needs. From startups to enterprises, we deliver robust, scalable, and modern digital solutions.",
        features: [
          "Custom Web Application Development",
          "Mobile App (Android & iOS)",
          "E-Commerce Solutions",
          "ERP & CRM Systems",
          "API Development & Integration",
          "UI/UX Design & Branding"
        ],
        icon: "software",
        email: "helpmatesoftware@gmail.com",
        color: "#d97706",
        bgColor: "#fffbeb"
      }
    ];
  }
  getTeamMembers() {
    return [
      {
        id: 1,
        name: "Akki Mahajan",
        role: "Founder & CEO",
        bio: "Visionary entrepreneur with extensive experience in business consulting, security solutions, and talent management. Akki founded Helpmate Solution with a mission to be the one-stop growth partner for businesses across the NCR.",
        initials: "AM",
        bgColor: "#1a3c6e"
      },
      {
        id: 2,
        name: "Surbhi",
        role: "Co-Founder & COO",
        bio: "A dynamic leader overseeing day-to-day operations across all service verticals. Surbhi brings strategic thinking and operational excellence to ensure every client receives world-class service delivery.",
        initials: "SU",
        bgColor: "#7c3aed"
      },
      {
        id: 3,
        name: "Abhishek Sharma",
        role: "Sales Manager",
        bio: "Driven sales professional with a proven track record in business development and client relationship management. Abhishek heads the sales operations and ensures consistent growth across all departments.",
        initials: "AS",
        bgColor: "#059669"
      }
    ];
  }
  getStats() {
    return [
      { value: "500+", label: "Happy Clients", icon: "clients" },
      { value: "1000+", label: "Placements Done", icon: "placements" },
      { value: "200+", label: "CCTV Projects", icon: "cctv" },
      { value: "5+", label: "Years of Excellence", icon: "years" }
    ];
  }
  static \u0275fac = function ServicesDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServicesDataService, factory: _ServicesDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesDataService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ServicesDataService
};
//# sourceMappingURL=chunk-MDMKJZQD.js.map
