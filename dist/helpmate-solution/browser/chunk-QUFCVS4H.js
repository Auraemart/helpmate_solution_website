import {
  ServicesDataService
} from "./chunk-MDMKJZQD.js";
import {
  Component,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2VETHU63.js";

// src/app/pages/services/services-page.component.ts
function ServicesPageComponent_div_12_li_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 44);
    \u0275\u0275element(3, "polyline", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    const cctv_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", cctv_r2.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", f_r1, " ");
  }
}
function ServicesPageComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 22);
    \u0275\u0275element(4, "path", 23)(5, "rect", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul", 26);
    \u0275\u0275template(13, ServicesPageComponent_div_12_li_13_Template, 5, 3, "li", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 29);
    \u0275\u0275element(16, "path", 30)(17, "polyline", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div", 32)(20, "div", 33)(21, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 35);
    \u0275\u0275element(23, "path", 36)(24, "rect", 37)(25, "line", 38)(26, "line", 39)(27, "line", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "div", 41)(29, "span", 42);
    \u0275\u0275text(30, "HD & 4K Cameras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 42);
    \u0275\u0275text(32, "Remote Access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 42);
    \u0275\u0275text(34, "24/7 Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 42);
    \u0275\u0275text(36, "AMC Available");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const cctv_r2 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", cctv_r2.bgColor)("color", cctv_r2.color);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", cctv_r2.bgColor)("color", cctv_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cctv_r2.subtitle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cctv_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cctv_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", cctv_r2.features);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + cctv_r2.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Enquire: ", cctv_r2.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", "linear-gradient(135deg, " + cctv_r2.color + "22, " + cctv_r2.color + "11)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", cctv_r2.color);
    \u0275\u0275advance(8);
    \u0275\u0275styleProp("background", cctv_r2.bgColor)("color", cctv_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", cctv_r2.bgColor)("color", cctv_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", cctv_r2.bgColor)("color", cctv_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", cctv_r2.bgColor)("color", cctv_r2.color);
  }
}
function ServicesPageComponent_div_15_li_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 44);
    \u0275\u0275element(3, "polyline", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const rec_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", rec_r4.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", f_r3, " ");
  }
}
function ServicesPageComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 32)(2, "div", 33)(3, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 35);
    \u0275\u0275element(5, "circle", 47)(6, "path", 48)(7, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 41)(9, "span", 42);
    \u0275\u0275text(10, "Permanent Staffing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 42);
    \u0275\u0275text(12, "Executive Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 42);
    \u0275\u0275text(14, "HR Consulting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 42);
    \u0275\u0275text(16, "Campus Drives");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 20)(18, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 22);
    \u0275\u0275element(20, "path", 50)(21, "circle", 51)(22, "path", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "span", 25);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h2");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ul", 26);
    \u0275\u0275template(30, ServicesPageComponent_div_15_li_30_Template, 5, 3, "li", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "a", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 29);
    \u0275\u0275element(33, "path", 30)(34, "polyline", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rec_r4 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", "linear-gradient(135deg, " + rec_r4.color + "22, " + rec_r4.color + "11)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", rec_r4.color);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("background", rec_r4.bgColor)("color", rec_r4.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", rec_r4.bgColor)("color", rec_r4.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", rec_r4.bgColor)("color", rec_r4.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", rec_r4.bgColor)("color", rec_r4.color);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", rec_r4.bgColor)("color", rec_r4.color);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", rec_r4.bgColor)("color", rec_r4.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rec_r4.subtitle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rec_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rec_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", rec_r4.features);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + rec_r4.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Enquire: ", rec_r4.email, " ");
  }
}
function ServicesPageComponent_div_18_li_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 44);
    \u0275\u0275element(3, "polyline", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const prop_r6 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", prop_r6.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", f_r5, " ");
  }
}
function ServicesPageComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 22);
    \u0275\u0275element(4, "path", 54)(5, "polyline", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul", 26);
    \u0275\u0275template(13, ServicesPageComponent_div_18_li_13_Template, 5, 3, "li", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 29);
    \u0275\u0275element(16, "path", 30)(17, "polyline", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div", 32)(20, "div", 33)(21, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 35);
    \u0275\u0275element(23, "path", 57)(24, "rect", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "div", 41)(26, "span", 42);
    \u0275\u0275text(27, "Buy / Sell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 42);
    \u0275\u0275text(29, "Rental Properties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 42);
    \u0275\u0275text(31, "Legal Docs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 42);
    \u0275\u0275text(33, "Investment Advisory");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const prop_r6 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", prop_r6.bgColor)("color", prop_r6.color);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", prop_r6.bgColor)("color", prop_r6.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", prop_r6.subtitle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prop_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prop_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", prop_r6.features);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + prop_r6.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Enquire: ", prop_r6.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", "linear-gradient(135deg, " + prop_r6.color + "22, " + prop_r6.color + "11)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", prop_r6.color);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", prop_r6.bgColor)("color", prop_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", prop_r6.bgColor)("color", prop_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", prop_r6.bgColor)("color", prop_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", prop_r6.bgColor)("color", prop_r6.color);
  }
}
function ServicesPageComponent_div_21_li_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 44);
    \u0275\u0275element(3, "polyline", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r7 = ctx.$implicit;
    const sw_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", sw_r8.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", f_r7, " ");
  }
}
function ServicesPageComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 32)(2, "div", 33)(3, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 35);
    \u0275\u0275element(5, "rect", 59)(6, "line", 60)(7, "polyline", 61)(8, "line", 62)(9, "line", 63)(10, "line", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 41)(12, "span", 42);
    \u0275\u0275text(13, "Web & Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 42);
    \u0275\u0275text(15, "ERP / CRM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 42);
    \u0275\u0275text(17, "API Integration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 42);
    \u0275\u0275text(19, "UI/UX Design");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 20)(21, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 22);
    \u0275\u0275element(23, "polyline", 65)(24, "polyline", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "span", 25);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "h2");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ul", 26);
    \u0275\u0275template(32, ServicesPageComponent_div_21_li_32_Template, 5, 3, "li", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "a", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 29);
    \u0275\u0275element(35, "path", 30)(36, "polyline", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const sw_r8 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", "linear-gradient(135deg, " + sw_r8.color + "22, " + sw_r8.color + "11)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", sw_r8.color);
    \u0275\u0275advance(9);
    \u0275\u0275styleProp("background", sw_r8.bgColor)("color", sw_r8.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", sw_r8.bgColor)("color", sw_r8.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", sw_r8.bgColor)("color", sw_r8.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", sw_r8.bgColor)("color", sw_r8.color);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", sw_r8.bgColor)("color", sw_r8.color);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", sw_r8.bgColor)("color", sw_r8.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sw_r8.subtitle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sw_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sw_r8.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", sw_r8.features);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + sw_r8.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Enquire: ", sw_r8.email, " ");
  }
}
function ServicesPageComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r9.step);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r9.description);
  }
}
var ServicesPageComponent = class _ServicesPageComponent {
  servicesDataService;
  services = [];
  processSteps = [
    { step: 1, title: "Initial Consultation", description: "We understand your requirements through a detailed discussion." },
    { step: 2, title: "Custom Proposal", description: "We prepare a tailored solution and transparent pricing plan." },
    { step: 3, title: "Execution", description: "Our expert team delivers the service with precision and care." },
    { step: 4, title: "Support & Follow-up", description: "We ensure ongoing support and satisfaction after delivery." }
  ];
  constructor(servicesDataService) {
    this.servicesDataService = servicesDataService;
  }
  ngOnInit() {
    this.services = this.servicesDataService.getServices();
  }
  static \u0275fac = function ServicesPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesPageComponent)(\u0275\u0275directiveInject(ServicesDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesPageComponent, selectors: [["app-services-page"]], standalone: false, decls: 45, vars: 5, consts: [["title", "Our Services", "subtitle", "Four specialized divisions, one trusted partner for all your business needs.", "breadcrumb", "Services"], [1, "services-intro", "section", "bg-white"], [1, "container"], [1, "section-header"], [1, "section-badge"], ["id", "cctv", 1, "service-detail", "section", "bg-gray"], ["class", "service-detail-grid", 4, "ngIf"], ["id", "recruitment", 1, "service-detail", "section", "bg-white"], ["class", "service-detail-grid reverse", 4, "ngIf"], ["id", "property", 1, "service-detail", "section", "bg-gray"], ["id", "software", 1, "service-detail", "section", "bg-white"], [1, "process-section", "section", "bg-gray"], [1, "process-grid"], ["class", "process-card", 4, "ngFor", "ngForOf"], [1, "cta-section", "section-sm"], [1, "cta-card"], [1, "cta-buttons"], ["routerLink", "/", "fragment", "contact", 1, "btn", "btn-white", "btn-lg"], ["routerLink", "/jobs", 1, "btn", "btn-outline-white", "btn-lg"], [1, "service-detail-grid"], [1, "service-detail-content"], [1, "service-icon-wrap"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M23 7l-7 5 7 5V7z"], ["x", "1", "y", "5", "width", "15", "height", "14", "rx", "2", "ry", "2"], [1, "service-label"], [1, "feature-list"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "href"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 2, "width", "18px", "height", "18px"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], [1, "service-detail-visual"], [1, "visual-panel"], [1, "vp-icon-large"], ["viewBox", "0 0 80 80", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M70 25l-20 15 20 15V25z"], ["x", "5", "y", "17", "width", "45", "height", "46", "rx", "5", "ry", "5"], ["x1", "20", "y1", "63", "x2", "20", "y2", "75"], ["x1", "35", "y1", "63", "x2", "35", "y2", "75"], ["x1", "12", "y1", "75", "x2", "43", "y2", "75"], [1, "vp-tags"], [1, "vp-tag"], [1, "check-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "20 6 9 17 4 12"], [1, "service-detail-grid", "reverse"], ["cx", "40", "cy", "22", "r", "12"], ["d", "M10 70c0-16.57 13.43-30 30-30s30 13.43 30 30"], ["d", "M52 38l6 10-6 10M28 38l-6 10 6 10"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"], [1, "btn", "btn-recruitment", 3, "href"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], [1, "btn", "btn-property", 3, "href"], ["d", "M10 35L40 8l30 27v35H50V45H30v25H10V35z"], ["x", "32", "y", "55", "width", "16", "height", "15"], ["x", "8", "y", "12", "width", "64", "height", "44", "rx", "4"], ["x1", "8", "y1", "28", "x2", "72", "y2", "28"], ["points", "24,44 34,38 24,32"], ["x1", "38", "y1", "44", "x2", "52", "y2", "44"], ["x1", "28", "y1", "68", "x2", "52", "y2", "68"], ["x1", "40", "y1", "56", "x2", "40", "y2", "68"], ["points", "16 18 22 12 16 6"], ["points", "8 6 2 12 8 18"], [1, "btn", "btn-software", 3, "href"], [1, "process-card"], [1, "process-number"]], template: function ServicesPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-page-banner", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "What We Offer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2");
      \u0275\u0275text(7, "Comprehensive Business Solutions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "From security surveillance to talent acquisition, property dealing to software development \u2014 Helpmate Solution delivers excellence across every domain.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "section", 5)(11, "div", 2);
      \u0275\u0275template(12, ServicesPageComponent_div_12_Template, 37, 34, "div", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "section", 7)(14, "div", 2);
      \u0275\u0275template(15, ServicesPageComponent_div_15_Template, 36, 34, "div", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "section", 9)(17, "div", 2);
      \u0275\u0275template(18, ServicesPageComponent_div_18_Template, 34, 34, "div", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "section", 10)(20, "div", 2);
      \u0275\u0275template(21, ServicesPageComponent_div_21_Template, 38, 34, "div", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "section", 11)(23, "div", 2)(24, "div", 3)(25, "span", 4);
      \u0275\u0275text(26, "How We Work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h2");
      \u0275\u0275text(28, "Our Simple Process");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275text(30, "We follow a structured, client-centric process to ensure seamless delivery across all services.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 12);
      \u0275\u0275template(32, ServicesPageComponent_div_32_Template, 7, 3, "div", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "section", 14)(34, "div", 2)(35, "div", 15)(36, "h2");
      \u0275\u0275text(37, "Not Sure Which Service You Need?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p");
      \u0275\u0275text(39, "Contact us and our experts will guide you to the right solution for your business.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 16)(41, "a", 17);
      \u0275\u0275text(42, "Get in Touch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "a", 18);
      \u0275\u0275text(44, "View Job Openings");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.services[0]);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.services[1]);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.services[2]);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.services[3]);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.processSteps);
    }
  }, dependencies: [NgForOf, NgIf, RouterLink, PageBannerComponent], styles: ["\n\n.bg-white[_ngcontent-%COMP%] {\n  background: white;\n}\n.bg-gray[_ngcontent-%COMP%] {\n  background: var(--gray-50);\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.section-header[_ngcontent-%COMP%]   .section-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--primary);\n  background: var(--primary-light);\n  padding: 0.35rem 1rem;\n  border-radius: 50px;\n  margin-bottom: 1rem;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.75rem, 3vw, 2.5rem);\n  color: var(--gray-900);\n  margin-bottom: 1rem;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--gray-600);\n  max-width: 640px;\n  margin: 0 auto;\n  line-height: 1.7;\n}\n.service-detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n.service-detail-grid.reverse[_ngcontent-%COMP%]   .service-detail-visual[_ngcontent-%COMP%] {\n  order: -1;\n}\n@media (max-width: 900px) {\n  .service-detail-grid.reverse[_ngcontent-%COMP%]   .service-detail-visual[_ngcontent-%COMP%] {\n    order: 0;\n  }\n}\n@media (max-width: 900px) {\n  .service-detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n.service-detail-content[_ngcontent-%COMP%]   .service-icon-wrap[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.service-detail-content[_ngcontent-%COMP%]   .service-icon-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.service-detail-content[_ngcontent-%COMP%]   .service-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  padding: 0.3rem 0.9rem;\n  border-radius: 50px;\n  margin-bottom: 1rem;\n}\n.service-detail-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.5rem, 2.5vw, 2rem);\n  color: var(--gray-900);\n  margin-bottom: 1rem;\n}\n.service-detail-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-600);\n  line-height: 1.8;\n  margin-bottom: 1.5rem;\n}\n.feature-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 2rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 500px) {\n  .feature-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  color: var(--gray-700);\n}\n.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.75rem;\n  border-radius: var(--radius);\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all var(--transition);\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  transform: translateY(-2px);\n}\n.btn-recruitment[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: white;\n  border-color: #7c3aed;\n}\n.btn-recruitment[_ngcontent-%COMP%]:hover {\n  background: #6d28d9;\n  transform: translateY(-2px);\n}\n.btn-property[_ngcontent-%COMP%] {\n  background: #059669;\n  color: white;\n  border-color: #059669;\n}\n.btn-property[_ngcontent-%COMP%]:hover {\n  background: #047857;\n  transform: translateY(-2px);\n}\n.btn-software[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: white;\n  border-color: #d97706;\n}\n.btn-software[_ngcontent-%COMP%]:hover {\n  background: #b45309;\n  transform: translateY(-2px);\n}\n.btn-white[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--primary);\n  border-color: white;\n}\n.btn-white[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: white;\n}\n.btn-outline-white[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.btn-outline-white[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: white;\n}\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 1rem 2.25rem;\n  font-size: 1rem;\n}\n.service-detail-visual[_ngcontent-%COMP%]   .visual-panel[_ngcontent-%COMP%] {\n  border-radius: var(--radius-xl);\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n  min-height: 320px;\n  justify-content: center;\n}\n.service-detail-visual[_ngcontent-%COMP%]   .vp-icon-large[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  opacity: 0.85;\n}\n.service-detail-visual[_ngcontent-%COMP%]   .vp-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n}\n.service-detail-visual[_ngcontent-%COMP%]   .vp-tag[_ngcontent-%COMP%] {\n  padding: 0.4rem 1rem;\n  border-radius: 50px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.process-section[_ngcontent-%COMP%]   .process-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 900px) {\n  .process-section[_ngcontent-%COMP%]   .process-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 500px) {\n  .process-section[_ngcontent-%COMP%]   .process-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.process-section[_ngcontent-%COMP%]   .process-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  padding: 2rem 1.5rem;\n  border: 1px solid var(--gray-200);\n  text-align: center;\n  transition: all var(--transition);\n}\n.process-section[_ngcontent-%COMP%]   .process-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-md);\n}\n.process-section[_ngcontent-%COMP%]   .process-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--gray-900);\n  margin: 1rem 0 0.5rem;\n}\n.process-section[_ngcontent-%COMP%]   .process-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-500);\n  line-height: 1.7;\n  margin: 0;\n}\n.process-section[_ngcontent-%COMP%]   .process-number[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  background: var(--primary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  font-weight: 800;\n  margin: 0 auto;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1a3c6e 0%,\n      #2563eb 100%);\n  border-radius: var(--radius-xl);\n  padding: 4rem;\n  text-align: center;\n}\n@media (max-width: 600px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-card[_ngcontent-%COMP%] {\n    padding: 2.5rem 1.5rem;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\n  margin-bottom: 1rem;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.1rem;\n  max-width: 500px;\n  margin: 0 auto 2rem;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=services-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesPageComponent, [{
    type: Component,
    args: [{ selector: "app-services-page", standalone: false, template: `<app-page-banner
  title="Our Services"
  subtitle="Four specialized divisions, one trusted partner for all your business needs."
  breadcrumb="Services">
</app-page-banner>

<!-- Services Overview -->
<section class="services-intro section bg-white">
  <div class="container">
    <div class="section-header">
      <span class="section-badge">What We Offer</span>
      <h2>Comprehensive Business Solutions</h2>
      <p>From security surveillance to talent acquisition, property dealing to software development \u2014 Helpmate Solution delivers excellence across every domain.</p>
    </div>
  </div>
</section>

<!-- CCTV Service -->
<section class="service-detail section bg-gray" id="cctv">
  <div class="container">
    <div class="service-detail-grid" *ngIf="services[0] as cctv">
      <div class="service-detail-content">
        <div class="service-icon-wrap" [style.background]="cctv.bgColor" [style.color]="cctv.color">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
          </svg>
        </div>
        <span class="service-label" [style.background]="cctv.bgColor" [style.color]="cctv.color">
          {{ cctv.subtitle }}
        </span>
        <h2>{{ cctv.title }}</h2>
        <p>{{ cctv.description }}</p>
        <ul class="feature-list">
          <li *ngFor="let f of cctv.features">
            <span class="check-icon" [style.color]="cctv.color">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            {{ f }}
          </li>
        </ul>
        <a [href]="'mailto:' + cctv.email" class="btn btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Enquire: {{ cctv.email }}
        </a>
      </div>
      <div class="service-detail-visual">
        <div class="visual-panel" [style.background]="'linear-gradient(135deg, ' + cctv.color + '22, ' + cctv.color + '11)'">
          <div class="vp-icon-large" [style.color]="cctv.color">
            <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M70 25l-20 15 20 15V25z"/>
              <rect x="5" y="17" width="45" height="46" rx="5" ry="5"/>
              <line x1="20" y1="63" x2="20" y2="75"/>
              <line x1="35" y1="63" x2="35" y2="75"/>
              <line x1="12" y1="75" x2="43" y2="75"/>
            </svg>
          </div>
          <div class="vp-tags">
            <span class="vp-tag" [style.background]="cctv.bgColor" [style.color]="cctv.color">HD & 4K Cameras</span>
            <span class="vp-tag" [style.background]="cctv.bgColor" [style.color]="cctv.color">Remote Access</span>
            <span class="vp-tag" [style.background]="cctv.bgColor" [style.color]="cctv.color">24/7 Support</span>
            <span class="vp-tag" [style.background]="cctv.bgColor" [style.color]="cctv.color">AMC Available</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Recruitment Service -->
<section class="service-detail section bg-white" id="recruitment">
  <div class="container">
    <div class="service-detail-grid reverse" *ngIf="services[1] as rec">
      <div class="service-detail-visual">
        <div class="visual-panel" [style.background]="'linear-gradient(135deg, ' + rec.color + '22, ' + rec.color + '11)'">
          <div class="vp-icon-large" [style.color]="rec.color">
            <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="40" cy="22" r="12"/>
              <path d="M10 70c0-16.57 13.43-30 30-30s30 13.43 30 30"/>
              <path d="M52 38l6 10-6 10M28 38l-6 10 6 10"/>
            </svg>
          </div>
          <div class="vp-tags">
            <span class="vp-tag" [style.background]="rec.bgColor" [style.color]="rec.color">Permanent Staffing</span>
            <span class="vp-tag" [style.background]="rec.bgColor" [style.color]="rec.color">Executive Search</span>
            <span class="vp-tag" [style.background]="rec.bgColor" [style.color]="rec.color">HR Consulting</span>
            <span class="vp-tag" [style.background]="rec.bgColor" [style.color]="rec.color">Campus Drives</span>
          </div>
        </div>
      </div>
      <div class="service-detail-content">
        <div class="service-icon-wrap" [style.background]="rec.bgColor" [style.color]="rec.color">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <span class="service-label" [style.background]="rec.bgColor" [style.color]="rec.color">
          {{ rec.subtitle }}
        </span>
        <h2>{{ rec.title }}</h2>
        <p>{{ rec.description }}</p>
        <ul class="feature-list">
          <li *ngFor="let f of rec.features">
            <span class="check-icon" [style.color]="rec.color">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            {{ f }}
          </li>
        </ul>
        <a [href]="'mailto:' + rec.email" class="btn btn-recruitment">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Enquire: {{ rec.email }}
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Property Service -->
<section class="service-detail section bg-gray" id="property">
  <div class="container">
    <div class="service-detail-grid" *ngIf="services[2] as prop">
      <div class="service-detail-content">
        <div class="service-icon-wrap" [style.background]="prop.bgColor" [style.color]="prop.color">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <span class="service-label" [style.background]="prop.bgColor" [style.color]="prop.color">
          {{ prop.subtitle }}
        </span>
        <h2>{{ prop.title }}</h2>
        <p>{{ prop.description }}</p>
        <ul class="feature-list">
          <li *ngFor="let f of prop.features">
            <span class="check-icon" [style.color]="prop.color">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            {{ f }}
          </li>
        </ul>
        <a [href]="'mailto:' + prop.email" class="btn btn-property">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Enquire: {{ prop.email }}
        </a>
      </div>
      <div class="service-detail-visual">
        <div class="visual-panel" [style.background]="'linear-gradient(135deg, ' + prop.color + '22, ' + prop.color + '11)'">
          <div class="vp-icon-large" [style.color]="prop.color">
            <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10 35L40 8l30 27v35H50V45H30v25H10V35z"/>
              <rect x="32" y="55" width="16" height="15"/>
            </svg>
          </div>
          <div class="vp-tags">
            <span class="vp-tag" [style.background]="prop.bgColor" [style.color]="prop.color">Buy / Sell</span>
            <span class="vp-tag" [style.background]="prop.bgColor" [style.color]="prop.color">Rental Properties</span>
            <span class="vp-tag" [style.background]="prop.bgColor" [style.color]="prop.color">Legal Docs</span>
            <span class="vp-tag" [style.background]="prop.bgColor" [style.color]="prop.color">Investment Advisory</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Software Service -->
<section class="service-detail section bg-white" id="software">
  <div class="container">
    <div class="service-detail-grid reverse" *ngIf="services[3] as sw">
      <div class="service-detail-visual">
        <div class="visual-panel" [style.background]="'linear-gradient(135deg, ' + sw.color + '22, ' + sw.color + '11)'">
          <div class="vp-icon-large" [style.color]="sw.color">
            <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="8" y="12" width="64" height="44" rx="4"/>
              <line x1="8" y1="28" x2="72" y2="28"/>
              <polyline points="24,44 34,38 24,32"/>
              <line x1="38" y1="44" x2="52" y2="44"/>
              <line x1="28" y1="68" x2="52" y2="68"/>
              <line x1="40" y1="56" x2="40" y2="68"/>
            </svg>
          </div>
          <div class="vp-tags">
            <span class="vp-tag" [style.background]="sw.bgColor" [style.color]="sw.color">Web & Mobile</span>
            <span class="vp-tag" [style.background]="sw.bgColor" [style.color]="sw.color">ERP / CRM</span>
            <span class="vp-tag" [style.background]="sw.bgColor" [style.color]="sw.color">API Integration</span>
            <span class="vp-tag" [style.background]="sw.bgColor" [style.color]="sw.color">UI/UX Design</span>
          </div>
        </div>
      </div>
      <div class="service-detail-content">
        <div class="service-icon-wrap" [style.background]="sw.bgColor" [style.color]="sw.color">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        </div>
        <span class="service-label" [style.background]="sw.bgColor" [style.color]="sw.color">
          {{ sw.subtitle }}
        </span>
        <h2>{{ sw.title }}</h2>
        <p>{{ sw.description }}</p>
        <ul class="feature-list">
          <li *ngFor="let f of sw.features">
            <span class="check-icon" [style.color]="sw.color">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            {{ f }}
          </li>
        </ul>
        <a [href]="'mailto:' + sw.email" class="btn btn-software">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Enquire: {{ sw.email }}
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Process Section -->
<section class="process-section section bg-gray">
  <div class="container">
    <div class="section-header">
      <span class="section-badge">How We Work</span>
      <h2>Our Simple Process</h2>
      <p>We follow a structured, client-centric process to ensure seamless delivery across all services.</p>
    </div>
    <div class="process-grid">
      <div class="process-card" *ngFor="let step of processSteps">
        <div class="process-number">{{ step.step }}</div>
        <h4>{{ step.title }}</h4>
        <p>{{ step.description }}</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section section-sm">
  <div class="container">
    <div class="cta-card">
      <h2>Not Sure Which Service You Need?</h2>
      <p>Contact us and our experts will guide you to the right solution for your business.</p>
      <div class="cta-buttons">
        <a routerLink="/" fragment="contact" class="btn btn-white btn-lg">Get in Touch</a>
        <a routerLink="/jobs" class="btn btn-outline-white btn-lg">View Job Openings</a>
      </div>
    </div>
  </div>
</section>
`, styles: ["/* src/app/pages/services/services-page.component.scss */\n.bg-white {\n  background: white;\n}\n.bg-gray {\n  background: var(--gray-50);\n}\n.section-header {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.section-header .section-badge {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--primary);\n  background: var(--primary-light);\n  padding: 0.35rem 1rem;\n  border-radius: 50px;\n  margin-bottom: 1rem;\n}\n.section-header h2 {\n  font-size: clamp(1.75rem, 3vw, 2.5rem);\n  color: var(--gray-900);\n  margin-bottom: 1rem;\n}\n.section-header p {\n  font-size: 1.1rem;\n  color: var(--gray-600);\n  max-width: 640px;\n  margin: 0 auto;\n  line-height: 1.7;\n}\n.service-detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n.service-detail-grid.reverse .service-detail-visual {\n  order: -1;\n}\n@media (max-width: 900px) {\n  .service-detail-grid.reverse .service-detail-visual {\n    order: 0;\n  }\n}\n@media (max-width: 900px) {\n  .service-detail-grid {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n.service-detail-content .service-icon-wrap {\n  width: 60px;\n  height: 60px;\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.service-detail-content .service-icon-wrap svg {\n  width: 30px;\n  height: 30px;\n}\n.service-detail-content .service-label {\n  display: inline-block;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  padding: 0.3rem 0.9rem;\n  border-radius: 50px;\n  margin-bottom: 1rem;\n}\n.service-detail-content h2 {\n  font-size: clamp(1.5rem, 2.5vw, 2rem);\n  color: var(--gray-900);\n  margin-bottom: 1rem;\n}\n.service-detail-content p {\n  color: var(--gray-600);\n  line-height: 1.8;\n  margin-bottom: 1.5rem;\n}\n.feature-list {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 2rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 500px) {\n  .feature-list {\n    grid-template-columns: 1fr;\n  }\n}\n.feature-list li {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  color: var(--gray-700);\n}\n.feature-list li .check-icon {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.feature-list li .check-icon svg {\n  width: 16px;\n  height: 16px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.75rem;\n  border-radius: var(--radius);\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all var(--transition);\n  text-decoration: none;\n}\n.btn-primary {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n  transform: translateY(-2px);\n}\n.btn-recruitment {\n  background: #7c3aed;\n  color: white;\n  border-color: #7c3aed;\n}\n.btn-recruitment:hover {\n  background: #6d28d9;\n  transform: translateY(-2px);\n}\n.btn-property {\n  background: #059669;\n  color: white;\n  border-color: #059669;\n}\n.btn-property:hover {\n  background: #047857;\n  transform: translateY(-2px);\n}\n.btn-software {\n  background: #d97706;\n  color: white;\n  border-color: #d97706;\n}\n.btn-software:hover {\n  background: #b45309;\n  transform: translateY(-2px);\n}\n.btn-white {\n  background: white;\n  color: var(--primary);\n  border-color: white;\n}\n.btn-white:hover {\n  background: transparent;\n  color: white;\n}\n.btn-outline-white {\n  background: transparent;\n  color: white;\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.btn-outline-white:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: white;\n}\n.btn-lg {\n  padding: 1rem 2.25rem;\n  font-size: 1rem;\n}\n.service-detail-visual .visual-panel {\n  border-radius: var(--radius-xl);\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n  min-height: 320px;\n  justify-content: center;\n}\n.service-detail-visual .vp-icon-large svg {\n  width: 100px;\n  height: 100px;\n  opacity: 0.85;\n}\n.service-detail-visual .vp-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n}\n.service-detail-visual .vp-tag {\n  padding: 0.4rem 1rem;\n  border-radius: 50px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.process-section .process-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 900px) {\n  .process-section .process-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 500px) {\n  .process-section .process-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.process-section .process-card {\n  background: white;\n  border-radius: var(--radius-lg);\n  padding: 2rem 1.5rem;\n  border: 1px solid var(--gray-200);\n  text-align: center;\n  transition: all var(--transition);\n}\n.process-section .process-card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-md);\n}\n.process-section .process-card h4 {\n  font-size: 1rem;\n  color: var(--gray-900);\n  margin: 1rem 0 0.5rem;\n}\n.process-section .process-card p {\n  font-size: 0.875rem;\n  color: var(--gray-500);\n  line-height: 1.7;\n  margin: 0;\n}\n.process-section .process-number {\n  width: 52px;\n  height: 52px;\n  background: var(--primary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  font-weight: 800;\n  margin: 0 auto;\n}\n.cta-section .cta-card {\n  background:\n    linear-gradient(\n      135deg,\n      #1a3c6e 0%,\n      #2563eb 100%);\n  border-radius: var(--radius-xl);\n  padding: 4rem;\n  text-align: center;\n}\n@media (max-width: 600px) {\n  .cta-section .cta-card {\n    padding: 2.5rem 1.5rem;\n  }\n}\n.cta-section .cta-card h2 {\n  color: white;\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\n  margin-bottom: 1rem;\n}\n.cta-section .cta-card p {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.1rem;\n  max-width: 500px;\n  margin: 0 auto 2rem;\n}\n.cta-section .cta-buttons {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=services-page.component.css.map */\n"] }]
  }], () => [{ type: ServicesDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesPageComponent, { className: "ServicesPageComponent", filePath: "src/app/pages/services/services-page.component.ts", lineNumber: 17 });
})();

// src/app/pages/services/services-page.module.ts
var routes = [{ path: "", component: ServicesPageComponent }];
var ServicesPageModule = class _ServicesPageModule {
  static \u0275fac = function ServicesPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesPageModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ServicesPageModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, RouterModule.forChild(routes)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesPageModule, [{
    type: NgModule,
    args: [{
      declarations: [ServicesPageComponent],
      imports: [SharedModule, RouterModule.forChild(routes)]
    }]
  }], null, null);
})();
export {
  ServicesPageModule
};
//# sourceMappingURL=chunk-QUFCVS4H.js.map
