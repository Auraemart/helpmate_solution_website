import {
  ServicesDataService
} from "./chunk-MDMKJZQD.js";
import {
  Component,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  PageBannerComponent,
  RouterLink,
  RouterModule,
  SharedModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2VETHU63.js";

// src/app/pages/about/about.component.ts
function AboutComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
function AboutComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.label);
  }
}
function AboutComponent_div_70__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 52);
    \u0275\u0275elementEnd();
  }
}
function AboutComponent_div_70__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "polygon", 53);
    \u0275\u0275elementEnd();
  }
}
function AboutComponent_div_70__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "circle", 14)(2, "path", 54);
    \u0275\u0275elementEnd();
  }
}
function AboutComponent_div_70__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 55)(2, "circle", 56)(3, "path", 57);
    \u0275\u0275elementEnd();
  }
}
function AboutComponent_div_70__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 58);
    \u0275\u0275elementEnd();
  }
}
function AboutComponent_div_70__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "polyline", 59)(2, "polyline", 60);
    \u0275\u0275elementEnd();
  }
}
function AboutComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275template(2, AboutComponent_div_70__svg_svg_2_Template, 2, 0, "svg", 51)(3, AboutComponent_div_70__svg_svg_3_Template, 2, 0, "svg", 51)(4, AboutComponent_div_70__svg_svg_4_Template, 3, 0, "svg", 51)(5, AboutComponent_div_70__svg_svg_5_Template, 4, 0, "svg", 51)(6, AboutComponent_div_70__svg_svg_6_Template, 2, 0, "svg", 51)(7, AboutComponent_div_70__svg_svg_7_Template, 3, 0, "svg", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h4");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "icon-" + value_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", value_r3.icon === "integrity");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", value_r3.icon === "excellence");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", value_r3.icon === "innovation");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", value_r3.icon === "client");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", value_r3.icon === "teamwork");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", value_r3.icon === "growth");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r3.description);
  }
}
function AboutComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", member_r4.bgColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", member_r4.initials, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r4.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r4.bio);
  }
}
function AboutComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "div", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "div", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const milestone_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275property("ngClass", i_r6 % 2 === 0 ? "left" : "right");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(milestone_r5.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(milestone_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(milestone_r5.description);
  }
}
var AboutComponent = class _AboutComponent {
  servicesDataService;
  teamMembers = [];
  stats = [];
  values = [
    {
      icon: "integrity",
      title: "Integrity",
      description: "We operate with honesty and transparency in every interaction, building long-term trust with clients and partners."
    },
    {
      icon: "excellence",
      title: "Excellence",
      description: "We are committed to delivering the highest quality across all our service verticals \u2014 no compromise."
    },
    {
      icon: "innovation",
      title: "Innovation",
      description: "We embrace technology and modern approaches to solve business challenges creatively and efficiently."
    },
    {
      icon: "client",
      title: "Client First",
      description: "Every decision we make is driven by what is best for our clients. Your success is our success."
    },
    {
      icon: "teamwork",
      title: "Teamwork",
      description: "Our diverse, skilled team collaborates seamlessly to deliver unified, consistent service experiences."
    },
    {
      icon: "growth",
      title: "Growth",
      description: "We believe in the continuous growth of our clients, our team, and our organization."
    }
  ];
  milestones = [
    {
      year: "2019",
      title: "Founded",
      description: "Helpmate Solution was founded by Akki Mahajan in Sahibabad, Ghaziabad, starting with HR and recruitment services."
    },
    {
      year: "2020",
      title: "CCTV Division Launched",
      description: "Expanded into security solutions with the launch of Helpmate CCTV, catering to homes, offices, and commercial spaces."
    },
    {
      year: "2021",
      title: "Property Division Added",
      description: "Helpmate Realty was introduced to assist NCR clients in buying, selling, and renting residential and commercial properties."
    },
    {
      year: "2023",
      title: "Software Division",
      description: "Helpmate Software was launched to provide custom web, mobile, and enterprise software solutions to businesses."
    },
    {
      year: "2024",
      title: "500+ Clients Milestone",
      description: "Crossed the milestone of 500+ satisfied clients and 1000+ successful job placements across the NCR region."
    },
    {
      year: "2026",
      title: "Growing Strong",
      description: "Continuing to expand our service portfolio and geographic reach, with new partnerships and innovations underway."
    }
  ];
  constructor(servicesDataService) {
    this.servicesDataService = servicesDataService;
  }
  ngOnInit() {
    this.teamMembers = this.servicesDataService.getTeamMembers();
    this.stats = this.servicesDataService.getStats();
  }
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)(\u0275\u0275directiveInject(ServicesDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: false, decls: 105, vars: 5, consts: [["title", "About Us", "subtitle", "Learn about our story, mission, and the passionate team behind Helpmate Solution.", "breadcrumb", "About Us"], [1, "mission-section", "section", "bg-white"], [1, "container"], [1, "mission-grid"], [1, "mission-content"], [1, "section-badge"], [1, "mission-cards"], [1, "mission-card"], [1, "mission-card-icon", "mission-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], [1, "mission-card-icon", "vision-icon"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "mission-visual"], [1, "visual-card", "main-card"], [1, "visual-logo"], [1, "visual-dividers"], [1, "vd", "vd-blue"], [1, "vd", "vd-purple"], [1, "vd", "vd-green"], [1, "vd", "vd-orange"], [1, "visual-stats"], ["class", "vs-card", 4, "ngFor", "ngForOf"], [1, "stats-bar", "section-sm", "bg-primary"], [1, "stats-grid"], ["class", "stat-item", 4, "ngFor", "ngForOf"], [1, "values-section", "section", "bg-gray"], [1, "section-header"], [1, "values-grid"], ["class", "value-card", 4, "ngFor", "ngForOf"], [1, "team-section", "section", "bg-white"], [1, "team-grid"], ["class", "team-card", 4, "ngFor", "ngForOf"], [1, "journey-section", "section", "bg-gray"], [1, "timeline"], ["class", "timeline-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "cta-section", "section-sm"], [1, "cta-card"], [1, "cta-buttons"], ["routerLink", "/services", 1, "btn", "btn-white", "btn-lg"], ["routerLink", "/jobs", 1, "btn", "btn-outline-white", "btn-lg"], [1, "vs-card"], [1, "vs-value"], [1, "vs-label"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], [1, "value-card"], [1, "value-icon", 3, "ngClass"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], ["d", "M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M14.12 2.1l-.49 2.83M10.37 19.07l-.49 2.83M21.9 9.88l-2.83.49M2.1 13.63l-2.83.49M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"], ["d", "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"], ["points", "22 7 13.5 15.5 8.5 10.5 2 17"], ["points", "16 7 22 7 22 13"], [1, "team-card"], [1, "team-avatar"], [1, "team-role"], [1, "timeline-item", 3, "ngClass"], [1, "timeline-content"], [1, "timeline-year"], [1, "timeline-dot"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-page-banner", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6, "Our Story");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2");
      \u0275\u0275text(8, "Empowering Businesses Across the NCR Since 2019");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, " Helpmate Solution was born out of a simple vision \u2014 to be the ");
      \u0275\u0275elementStart(11, "strong");
      \u0275\u0275text(12, "one-stop growth partner");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " for businesses across Ghaziabad, Noida, Delhi, and the wider NCR region. What began as a focused HR consultancy quickly expanded into a comprehensive multi-service firm. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p");
      \u0275\u0275text(15, " Today, we serve hundreds of businesses and individuals with our four specialized divisions: CCTV security solutions, HR and recruitment, property dealing, and custom software development. Each division is backed by dedicated experts who bring deep industry knowledge and genuine care for client success. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 6)(17, "div", 7)(18, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 9);
      \u0275\u0275element(20, "circle", 10)(21, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "div")(23, "h4");
      \u0275\u0275text(24, "Our Mission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p");
      \u0275\u0275text(26, "To deliver reliable, high-quality services that drive growth and security for our clients.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 7)(28, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 9);
      \u0275\u0275element(30, "path", 13)(31, "circle", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "div")(33, "h4");
      \u0275\u0275text(34, "Our Vision");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p");
      \u0275\u0275text(36, "To become the most trusted multi-service consultancy in Northern India by 2030.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(37, "div", 15)(38, "div", 16)(39, "div", 17);
      \u0275\u0275text(40, "HS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "h3");
      \u0275\u0275text(42, "Helpmate Solution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p");
      \u0275\u0275text(44, "Your Complete Growth Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 18)(46, "span", 19);
      \u0275\u0275text(47, "CCTV");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 20);
      \u0275\u0275text(49, "HR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 21);
      \u0275\u0275text(51, "Realty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 22);
      \u0275\u0275text(53, "Software");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 23);
      \u0275\u0275template(55, AboutComponent_div_55_Template, 5, 2, "div", 24);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(56, "section", 25)(57, "div", 2)(58, "div", 26);
      \u0275\u0275template(59, AboutComponent_div_59_Template, 5, 2, "div", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "section", 28)(61, "div", 2)(62, "div", 29)(63, "span", 5);
      \u0275\u0275text(64, "What We Stand For");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "h2");
      \u0275\u0275text(66, "Our Core Values");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p");
      \u0275\u0275text(68, "These principles guide every decision we make and every service we deliver.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 30);
      \u0275\u0275template(70, AboutComponent_div_70_Template, 12, 9, "div", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "section", 32)(72, "div", 2)(73, "div", 29)(74, "span", 5);
      \u0275\u0275text(75, "The People Behind");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "h2");
      \u0275\u0275text(77, "Meet Our Leadership Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "p");
      \u0275\u0275text(79, "A passionate and experienced team committed to your success.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 33);
      \u0275\u0275template(81, AboutComponent_div_81_Template, 9, 6, "div", 34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "section", 35)(83, "div", 2)(84, "div", 29)(85, "span", 5);
      \u0275\u0275text(86, "Our Journey");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "h2");
      \u0275\u0275text(88, "Milestones That Define Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "p");
      \u0275\u0275text(90, "From a small consultancy to a multi-division company \u2014 every step has been purposeful.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 36);
      \u0275\u0275template(92, AboutComponent_div_92_Template, 9, 4, "div", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "section", 38)(94, "div", 2)(95, "div", 39)(96, "h2");
      \u0275\u0275text(97, "Ready to Partner with Us?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p");
      \u0275\u0275text(99, "Whether you need security solutions, talent acquisition, property services, or software \u2014 we've got you covered.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "div", 40)(101, "a", 41);
      \u0275\u0275text(102, "Explore Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "a", 42);
      \u0275\u0275text(104, "View Job Openings");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(55);
      \u0275\u0275property("ngForOf", ctx.stats);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.stats);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.values);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.teamMembers);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.milestones);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, RouterLink, PageBannerComponent], styles: ['\n\n.mission-section[_ngcontent-%COMP%] {\n}\n.mission-section[_ngcontent-%COMP%]   .mission-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .mission-section[_ngcontent-%COMP%]   .mission-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n.mission-section[_ngcontent-%COMP%]   .mission-content[_ngcontent-%COMP%]   .section-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--primary);\n  background: var(--primary-light);\n  padding: 0.35rem 1rem;\n  border-radius: 50px;\n  margin-bottom: 1.25rem;\n}\n.mission-section[_ngcontent-%COMP%]   .mission-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 2.5vw, 2.2rem);\n  color: var(--gray-900);\n  margin-bottom: 1.25rem;\n  line-height: 1.3;\n}\n.mission-section[_ngcontent-%COMP%]   .mission-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-600);\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.mission-section[_ngcontent-%COMP%]   .mission-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.mission-section[_ngcontent-%COMP%]   .mission-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1.75rem;\n}\n.mission-section[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: var(--gray-50);\n  border-radius: var(--radius);\n  border: 1px solid var(--gray-200);\n}\n.mission-section[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 0.25rem;\n}\n.mission-section[_ngcontent-%COMP%]   .mission-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.mission-section[_ngcontent-%COMP%]   .mission-card-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.mission-section[_ngcontent-%COMP%]   .mission-card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.mission-section[_ngcontent-%COMP%]   .mission-card-icon.mission-icon[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.mission-section[_ngcontent-%COMP%]   .mission-card-icon.vision-icon[_ngcontent-%COMP%] {\n  background: var(--purple-light);\n  color: var(--purple);\n}\n.mission-section[_ngcontent-%COMP%]   .mission-visual[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.mission-section[_ngcontent-%COMP%]   .visual-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1a3c6e 0%,\n      #2563eb 100%);\n  border-radius: var(--radius-xl);\n  padding: 2.5rem;\n  text-align: center;\n  color: white;\n  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.25);\n}\n.mission-section[_ngcontent-%COMP%]   .visual-logo[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: white;\n  margin: 0 auto 1rem;\n}\n.mission-section[_ngcontent-%COMP%]   .visual-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.4rem;\n  margin-bottom: 0.5rem;\n}\n.mission-section[_ngcontent-%COMP%]   .visual-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 0.9rem;\n}\n.mission-section[_ngcontent-%COMP%]   .visual-dividers[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  margin-top: 1.5rem;\n}\n.mission-section[_ngcontent-%COMP%]   .vd[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.9rem;\n  border-radius: 50px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.mission-section[_ngcontent-%COMP%]   .vd-blue[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: #bfdbfe;\n}\n.mission-section[_ngcontent-%COMP%]   .vd-purple[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.3);\n  color: #ddd6fe;\n}\n.mission-section[_ngcontent-%COMP%]   .vd-green[_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.3);\n  color: #a7f3d0;\n}\n.mission-section[_ngcontent-%COMP%]   .vd-orange[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.3);\n  color: #fde68a;\n}\n.mission-section[_ngcontent-%COMP%]   .visual-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n.mission-section[_ngcontent-%COMP%]   .vs-card[_ngcontent-%COMP%] {\n  background: var(--gray-50);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius);\n  padding: 1.25rem;\n  text-align: center;\n}\n.mission-section[_ngcontent-%COMP%]   .vs-card[_ngcontent-%COMP%]   .vs-value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--primary);\n  line-height: 1;\n  margin-bottom: 0.35rem;\n}\n.mission-section[_ngcontent-%COMP%]   .vs-card[_ngcontent-%COMP%]   .vs-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n  font-weight: 500;\n}\n.stats-bar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1a3c6e 0%,\n      #2563eb 100%);\n}\n.stats-bar[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .stats-bar[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stats-bar[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n}\n.stats-bar[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  margin-bottom: 0.25rem;\n}\n.stats-bar[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.75);\n}\n.values-section[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 900px) {\n  .values-section[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .values-section[_ngcontent-%COMP%]   .values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.values-section[_ngcontent-%COMP%]   .value-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  padding: 2rem;\n  border: 1px solid var(--gray-100);\n  transition: all var(--transition);\n}\n.values-section[_ngcontent-%COMP%]   .value-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-md);\n  border-color: var(--primary);\n}\n.values-section[_ngcontent-%COMP%]   .value-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--gray-900);\n  margin: 1rem 0 0.5rem;\n}\n.values-section[_ngcontent-%COMP%]   .value-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.7;\n  color: var(--gray-500);\n}\n.values-section[_ngcontent-%COMP%]   .value-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.values-section[_ngcontent-%COMP%]   .value-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n.values-section[_ngcontent-%COMP%]   .value-icon.icon-integrity[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.values-section[_ngcontent-%COMP%]   .value-icon.icon-excellence[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.values-section[_ngcontent-%COMP%]   .value-icon.icon-innovation[_ngcontent-%COMP%] {\n  background: var(--purple-light);\n  color: var(--purple);\n}\n.values-section[_ngcontent-%COMP%]   .value-icon.icon-client[_ngcontent-%COMP%] {\n  background: #fce7f3;\n  color: #db2777;\n}\n.values-section[_ngcontent-%COMP%]   .value-icon.icon-teamwork[_ngcontent-%COMP%] {\n  background: var(--green-light);\n  color: var(--green);\n}\n.values-section[_ngcontent-%COMP%]   .value-icon.icon-growth[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.team-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 900px) {\n  .team-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .team-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.team-section[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  padding: 2.5rem 2rem;\n  text-align: center;\n  border: 1px solid var(--gray-100);\n  box-shadow: var(--shadow-sm);\n  transition: all var(--transition);\n}\n.team-section[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-lg);\n}\n.team-section[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--gray-900);\n  margin: 1.25rem 0 0.25rem;\n}\n.team-section[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.7;\n  color: var(--gray-500);\n  margin-top: 0.75rem;\n}\n.team-section[_ngcontent-%COMP%]   .team-avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: white;\n  margin: 0 auto;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n.team-section[_ngcontent-%COMP%]   .team-role[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--primary);\n  background: var(--primary-light);\n  padding: 0.3rem 0.9rem;\n  border-radius: 50px;\n  display: inline-block;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: var(--gray-200);\n  transform: translateX(-50%);\n}\n@media (max-width: 700px) {\n  .journey-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]::before {\n    left: 20px;\n  }\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  margin-bottom: 2.5rem;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-item.left[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  padding-right: calc(50% + 2rem);\n}\n@media (max-width: 700px) {\n  .journey-section[_ngcontent-%COMP%]   .timeline-item.left[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 3.5rem;\n    justify-content: flex-start;\n  }\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-item.right[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  padding-left: calc(50% + 2rem);\n}\n@media (max-width: 700px) {\n  .journey-section[_ngcontent-%COMP%]   .timeline-item.right[_ngcontent-%COMP%] {\n    padding-left: 3.5rem;\n  }\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 20px;\n  width: 14px;\n  height: 14px;\n  background: var(--primary);\n  border-radius: 50%;\n  transform: translateX(-50%);\n  border: 3px solid white;\n  box-shadow: 0 0 0 3px var(--primary);\n}\n@media (max-width: 700px) {\n  .journey-section[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%] {\n    left: 20px;\n  }\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius);\n  padding: 1.5rem;\n  border: 1px solid var(--gray-200);\n  max-width: 340px;\n  width: 100%;\n  box-shadow: var(--shadow-sm);\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-year[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--primary);\n  margin-bottom: 0.35rem;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--gray-900);\n  margin-bottom: 0.5rem;\n}\n.journey-section[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.7;\n  color: var(--gray-500);\n  margin: 0;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1a3c6e 0%,\n      #2563eb 100%);\n  border-radius: var(--radius-xl);\n  padding: 4rem;\n  text-align: center;\n  color: white;\n}\n@media (max-width: 600px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-card[_ngcontent-%COMP%] {\n    padding: 2.5rem 1.5rem;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\n  margin-bottom: 1rem;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.1rem;\n  max-width: 600px;\n  margin: 0 auto 2rem;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.bg-white[_ngcontent-%COMP%] {\n  background: white;\n}\n.bg-gray[_ngcontent-%COMP%] {\n  background: var(--gray-50);\n}\n/*# sourceMappingURL=about.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", standalone: false, template: `<app-page-banner
  title="About Us"
  subtitle="Learn about our story, mission, and the passionate team behind Helpmate Solution."
  breadcrumb="About Us">
</app-page-banner>

<!-- Mission & Vision Section -->
<section class="mission-section section bg-white">
  <div class="container">
    <div class="mission-grid">
      <div class="mission-content">
        <span class="section-badge">Our Story</span>
        <h2>Empowering Businesses Across the NCR Since 2019</h2>
        <p>
          Helpmate Solution was born out of a simple vision \u2014 to be the <strong>one-stop growth partner</strong> for businesses
          across Ghaziabad, Noida, Delhi, and the wider NCR region. What began as a focused HR consultancy quickly expanded
          into a comprehensive multi-service firm.
        </p>
        <p>
          Today, we serve hundreds of businesses and individuals with our four specialized divisions: CCTV security solutions,
          HR and recruitment, property dealing, and custom software development. Each division is backed by dedicated experts
          who bring deep industry knowledge and genuine care for client success.
        </p>
        <div class="mission-cards">
          <div class="mission-card">
            <div class="mission-card-icon mission-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div>
              <h4>Our Mission</h4>
              <p>To deliver reliable, high-quality services that drive growth and security for our clients.</p>
            </div>
          </div>
          <div class="mission-card">
            <div class="mission-card-icon vision-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <div>
              <h4>Our Vision</h4>
              <p>To become the most trusted multi-service consultancy in Northern India by 2030.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mission-visual">
        <div class="visual-card main-card">
          <div class="visual-logo">HS</div>
          <h3>Helpmate Solution</h3>
          <p>Your Complete Growth Partner</p>
          <div class="visual-dividers">
            <span class="vd vd-blue">CCTV</span>
            <span class="vd vd-purple">HR</span>
            <span class="vd vd-green">Realty</span>
            <span class="vd vd-orange">Software</span>
          </div>
        </div>
        <div class="visual-stats">
          <div class="vs-card" *ngFor="let stat of stats">
            <div class="vs-value">{{ stat.value }}</div>
            <div class="vs-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Stats Bar -->
<section class="stats-bar section-sm bg-primary">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item" *ngFor="let stat of stats">
        <div class="stat-value">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</section>

<!-- Values Section -->
<section class="values-section section bg-gray">
  <div class="container">
    <div class="section-header">
      <span class="section-badge">What We Stand For</span>
      <h2>Our Core Values</h2>
      <p>These principles guide every decision we make and every service we deliver.</p>
    </div>
    <div class="values-grid">
      <div class="value-card" *ngFor="let value of values">
        <div class="value-icon" [ngClass]="'icon-' + value.icon">
          <svg *ngIf="value.icon === 'integrity'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <svg *ngIf="value.icon === 'excellence'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <svg *ngIf="value.icon === 'innovation'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M14.12 2.1l-.49 2.83M10.37 19.07l-.49 2.83M21.9 9.88l-2.83.49M2.1 13.63l-2.83.49M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93"/>
          </svg>
          <svg *ngIf="value.icon === 'client'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <svg *ngIf="value.icon === 'teamwork'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <svg *ngIf="value.icon === 'growth'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
          </svg>
        </div>
        <h4>{{ value.title }}</h4>
        <p>{{ value.description }}</p>
      </div>
    </div>
  </div>
</section>

<!-- Team Section -->
<section class="team-section section bg-white">
  <div class="container">
    <div class="section-header">
      <span class="section-badge">The People Behind</span>
      <h2>Meet Our Leadership Team</h2>
      <p>A passionate and experienced team committed to your success.</p>
    </div>
    <div class="team-grid">
      <div class="team-card" *ngFor="let member of teamMembers">
        <div class="team-avatar" [style.background]="member.bgColor">
          {{ member.initials }}
        </div>
        <h3>{{ member.name }}</h3>
        <span class="team-role">{{ member.role }}</span>
        <p>{{ member.bio }}</p>
      </div>
    </div>
  </div>
</section>

<!-- Journey / Timeline Section -->
<section class="journey-section section bg-gray">
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Our Journey</span>
      <h2>Milestones That Define Us</h2>
      <p>From a small consultancy to a multi-division company \u2014 every step has been purposeful.</p>
    </div>
    <div class="timeline">
      <div class="timeline-item" *ngFor="let milestone of milestones; let i = index" [ngClass]="i % 2 === 0 ? 'left' : 'right'">
        <div class="timeline-content">
          <div class="timeline-year">{{ milestone.year }}</div>
          <h4>{{ milestone.title }}</h4>
          <p>{{ milestone.description }}</p>
        </div>
        <div class="timeline-dot"></div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-section section-sm">
  <div class="container">
    <div class="cta-card">
      <h2>Ready to Partner with Us?</h2>
      <p>Whether you need security solutions, talent acquisition, property services, or software \u2014 we've got you covered.</p>
      <div class="cta-buttons">
        <a routerLink="/services" class="btn btn-white btn-lg">Explore Services</a>
        <a routerLink="/jobs" class="btn btn-outline-white btn-lg">View Job Openings</a>
      </div>
    </div>
  </div>
</section>
`, styles: ['/* src/app/pages/about/about.component.scss */\n.mission-section {\n}\n.mission-section .mission-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .mission-section .mission-grid {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n.mission-section .mission-content .section-badge {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--primary);\n  background: var(--primary-light);\n  padding: 0.35rem 1rem;\n  border-radius: 50px;\n  margin-bottom: 1.25rem;\n}\n.mission-section .mission-content h2 {\n  font-size: clamp(1.6rem, 2.5vw, 2.2rem);\n  color: var(--gray-900);\n  margin-bottom: 1.25rem;\n  line-height: 1.3;\n}\n.mission-section .mission-content p {\n  color: var(--gray-600);\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.mission-section .mission-content p strong {\n  color: var(--primary);\n}\n.mission-section .mission-cards {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1.75rem;\n}\n.mission-section .mission-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: var(--gray-50);\n  border-radius: var(--radius);\n  border: 1px solid var(--gray-200);\n}\n.mission-section .mission-card h4 {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 0.25rem;\n}\n.mission-section .mission-card p {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.mission-section .mission-card-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.mission-section .mission-card-icon svg {\n  width: 22px;\n  height: 22px;\n}\n.mission-section .mission-card-icon.mission-icon {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.mission-section .mission-card-icon.vision-icon {\n  background: var(--purple-light);\n  color: var(--purple);\n}\n.mission-section .mission-visual {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.mission-section .visual-card {\n  background:\n    linear-gradient(\n      135deg,\n      #1a3c6e 0%,\n      #2563eb 100%);\n  border-radius: var(--radius-xl);\n  padding: 2.5rem;\n  text-align: center;\n  color: white;\n  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.25);\n}\n.mission-section .visual-logo {\n  width: 64px;\n  height: 64px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: white;\n  margin: 0 auto 1rem;\n}\n.mission-section .visual-card h3 {\n  color: white;\n  font-size: 1.4rem;\n  margin-bottom: 0.5rem;\n}\n.mission-section .visual-card p {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 0.9rem;\n}\n.mission-section .visual-dividers {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  margin-top: 1.5rem;\n}\n.mission-section .vd {\n  padding: 0.35rem 0.9rem;\n  border-radius: 50px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.mission-section .vd-blue {\n  background: rgba(255, 255, 255, 0.15);\n  color: #bfdbfe;\n}\n.mission-section .vd-purple {\n  background: rgba(124, 58, 237, 0.3);\n  color: #ddd6fe;\n}\n.mission-section .vd-green {\n  background: rgba(5, 150, 105, 0.3);\n  color: #a7f3d0;\n}\n.mission-section .vd-orange {\n  background: rgba(217, 119, 6, 0.3);\n  color: #fde68a;\n}\n.mission-section .visual-stats {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n.mission-section .vs-card {\n  background: var(--gray-50);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius);\n  padding: 1.25rem;\n  text-align: center;\n}\n.mission-section .vs-card .vs-value {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--primary);\n  line-height: 1;\n  margin-bottom: 0.35rem;\n}\n.mission-section .vs-card .vs-label {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n  font-weight: 500;\n}\n.stats-bar {\n  background:\n    linear-gradient(\n      135deg,\n      #1a3c6e 0%,\n      #2563eb 100%);\n}\n.stats-bar .stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .stats-bar .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stats-bar .stat-item {\n  text-align: center;\n  color: white;\n}\n.stats-bar .stat-item .stat-value {\n  font-size: 2.5rem;\n  font-weight: 800;\n  margin-bottom: 0.25rem;\n}\n.stats-bar .stat-item .stat-label {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.75);\n}\n.values-section .values-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 900px) {\n  .values-section .values-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .values-section .values-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.values-section .value-card {\n  background: white;\n  border-radius: var(--radius-lg);\n  padding: 2rem;\n  border: 1px solid var(--gray-100);\n  transition: all var(--transition);\n}\n.values-section .value-card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-md);\n  border-color: var(--primary);\n}\n.values-section .value-card h4 {\n  font-size: 1.05rem;\n  color: var(--gray-900);\n  margin: 1rem 0 0.5rem;\n}\n.values-section .value-card p {\n  font-size: 0.9rem;\n  line-height: 1.7;\n  color: var(--gray-500);\n}\n.values-section .value-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.values-section .value-icon svg {\n  width: 26px;\n  height: 26px;\n}\n.values-section .value-icon.icon-integrity {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.values-section .value-icon.icon-excellence {\n  background: #fef3c7;\n  color: #d97706;\n}\n.values-section .value-icon.icon-innovation {\n  background: var(--purple-light);\n  color: var(--purple);\n}\n.values-section .value-icon.icon-client {\n  background: #fce7f3;\n  color: #db2777;\n}\n.values-section .value-icon.icon-teamwork {\n  background: var(--green-light);\n  color: var(--green);\n}\n.values-section .value-icon.icon-growth {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.team-section .team-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 900px) {\n  .team-section .team-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .team-section .team-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.team-section .team-card {\n  background: white;\n  border-radius: var(--radius-lg);\n  padding: 2.5rem 2rem;\n  text-align: center;\n  border: 1px solid var(--gray-100);\n  box-shadow: var(--shadow-sm);\n  transition: all var(--transition);\n}\n.team-section .team-card:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-lg);\n}\n.team-section .team-card h3 {\n  font-size: 1.2rem;\n  color: var(--gray-900);\n  margin: 1.25rem 0 0.25rem;\n}\n.team-section .team-card p {\n  font-size: 0.9rem;\n  line-height: 1.7;\n  color: var(--gray-500);\n  margin-top: 0.75rem;\n}\n.team-section .team-avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: white;\n  margin: 0 auto;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n.team-section .team-role {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--primary);\n  background: var(--primary-light);\n  padding: 0.3rem 0.9rem;\n  border-radius: 50px;\n  display: inline-block;\n}\n.journey-section .timeline {\n  position: relative;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.journey-section .timeline::before {\n  content: "";\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: var(--gray-200);\n  transform: translateX(-50%);\n}\n@media (max-width: 700px) {\n  .journey-section .timeline::before {\n    left: 20px;\n  }\n}\n.journey-section .timeline-item {\n  display: flex;\n  position: relative;\n  margin-bottom: 2.5rem;\n}\n.journey-section .timeline-item.left {\n  justify-content: flex-end;\n  padding-right: calc(50% + 2rem);\n}\n@media (max-width: 700px) {\n  .journey-section .timeline-item.left {\n    padding-right: 0;\n    padding-left: 3.5rem;\n    justify-content: flex-start;\n  }\n}\n.journey-section .timeline-item.right {\n  justify-content: flex-start;\n  padding-left: calc(50% + 2rem);\n}\n@media (max-width: 700px) {\n  .journey-section .timeline-item.right {\n    padding-left: 3.5rem;\n  }\n}\n.journey-section .timeline-dot {\n  position: absolute;\n  left: 50%;\n  top: 20px;\n  width: 14px;\n  height: 14px;\n  background: var(--primary);\n  border-radius: 50%;\n  transform: translateX(-50%);\n  border: 3px solid white;\n  box-shadow: 0 0 0 3px var(--primary);\n}\n@media (max-width: 700px) {\n  .journey-section .timeline-dot {\n    left: 20px;\n  }\n}\n.journey-section .timeline-content {\n  background: white;\n  border-radius: var(--radius);\n  padding: 1.5rem;\n  border: 1px solid var(--gray-200);\n  max-width: 340px;\n  width: 100%;\n  box-shadow: var(--shadow-sm);\n}\n.journey-section .timeline-content .timeline-year {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--primary);\n  margin-bottom: 0.35rem;\n}\n.journey-section .timeline-content h4 {\n  font-size: 1rem;\n  color: var(--gray-900);\n  margin-bottom: 0.5rem;\n}\n.journey-section .timeline-content p {\n  font-size: 0.875rem;\n  line-height: 1.7;\n  color: var(--gray-500);\n  margin: 0;\n}\n.cta-section .cta-card {\n  background:\n    linear-gradient(\n      135deg,\n      #1a3c6e 0%,\n      #2563eb 100%);\n  border-radius: var(--radius-xl);\n  padding: 4rem;\n  text-align: center;\n  color: white;\n}\n@media (max-width: 600px) {\n  .cta-section .cta-card {\n    padding: 2.5rem 1.5rem;\n  }\n}\n.cta-section .cta-card h2 {\n  color: white;\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\n  margin-bottom: 1rem;\n}\n.cta-section .cta-card p {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.1rem;\n  max-width: 600px;\n  margin: 0 auto 2rem;\n}\n.cta-section .cta-buttons {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.bg-white {\n  background: white;\n}\n.bg-gray {\n  background: var(--gray-50);\n}\n/*# sourceMappingURL=about.component.css.map */\n'] }]
  }], () => [{ type: ServicesDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/pages/about/about.component.ts", lineNumber: 24 });
})();

// src/app/pages/about/about.module.ts
var routes = [{ path: "", component: AboutComponent }];
var AboutModule = class _AboutModule {
  static \u0275fac = function AboutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AboutModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, RouterModule.forChild(routes)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutModule, [{
    type: NgModule,
    args: [{
      declarations: [AboutComponent],
      imports: [SharedModule, RouterModule.forChild(routes)]
    }]
  }], null, null);
})();
export {
  AboutModule
};
//# sourceMappingURL=chunk-JBX6AUMX.js.map
