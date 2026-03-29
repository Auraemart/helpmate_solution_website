import {
  ServicesDataService
} from "./chunk-MDMKJZQD.js";
import {
  ContactService
} from "./chunk-A5UMQQGO.js";
import {
  Component,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModule,
  NgSelectOption,
  RouterLink,
  RouterModule,
  SelectControlValueAccessor,
  SharedModule,
  Validators,
  setClassMetadata,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtrustConstantResourceUrl
} from "./chunk-2VETHU63.js";

// src/app/pages/home/home.component.ts
var _c0 = () => ["/services"];
function HomeComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 77);
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
function HomeComponent_div_55__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 88);
    \u0275\u0275element(1, "path", 89);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_55__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 88);
    \u0275\u0275element(1, "path", 90);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_55__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 88);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_55__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 88);
    \u0275\u0275element(1, "polyline", 91)(2, "polyline", 92);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_55_li_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 87);
    \u0275\u0275element(2, "path", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", feature_r2, " ");
  }
}
function HomeComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79);
    \u0275\u0275template(2, HomeComponent_div_55__svg_svg_2_Template, 2, 0, "svg", 80)(3, HomeComponent_div_55__svg_svg_3_Template, 2, 0, "svg", 80)(4, HomeComponent_div_55__svg_svg_4_Template, 2, 0, "svg", 80)(5, HomeComponent_div_55__svg_svg_5_Template, 3, 0, "svg", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3", 82);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 83);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul", 84);
    \u0275\u0275template(13, HomeComponent_div_55_li_13_Template, 4, 1, "li", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 86);
    \u0275\u0275text(15, " Learn More ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 87);
    \u0275\u0275element(17, "path", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r3 = ctx.$implicit;
    \u0275\u0275styleProp("--accent-color", service_r3.color)("--accent-bg", service_r3.bgColor);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", service_r3.icon === "cctv");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", service_r3.icon === "recruitment");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", service_r3.icon === "property");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", service_r3.icon === "software");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r3.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", service_r3.features.slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c0))("fragment", service_r3.id);
  }
}
function HomeComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "span", 95);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r4.label);
  }
}
function HomeComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 98);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 99);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 100);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 101);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", member_r5.bgColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", member_r5.initials, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r5.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r5.bio);
  }
}
function HomeComponent_div_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 103);
    \u0275\u0275element(2, "path", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Thank you! We will get back to you within 24 hours.");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_form_153_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_form_153_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "Minimum 2 characters");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_form_153_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "Phone is required");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_form_153_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "Enter a valid 10-digit number");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_form_153_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_form_153_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "Enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_form_153_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 121);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    \u0275\u0275property("value", opt_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r8);
  }
}
function HomeComponent_form_153_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "Please select a service");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_form_153_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "Message is required");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_form_153_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "Minimum 10 characters");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_form_153_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r6.submitError);
  }
}
function HomeComponent_form_153_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Send Message");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_form_153_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 123);
    \u0275\u0275element(1, "span", 124);
    \u0275\u0275text(2, " Sending... ");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_form_153_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 105);
    \u0275\u0275listener("ngSubmit", function HomeComponent_form_153_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onSubmitContact());
    });
    \u0275\u0275elementStart(1, "div", 106)(2, "div", 107)(3, "label");
    \u0275\u0275text(4, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 108);
    \u0275\u0275template(6, HomeComponent_form_153_span_6_Template, 2, 0, "span", 109)(7, HomeComponent_form_153_span_7_Template, 2, 0, "span", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 107)(9, "label");
    \u0275\u0275text(10, "Phone Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 110);
    \u0275\u0275template(12, HomeComponent_form_153_span_12_Template, 2, 0, "span", 109)(13, HomeComponent_form_153_span_13_Template, 2, 0, "span", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 107)(15, "label");
    \u0275\u0275text(16, "Email Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 111);
    \u0275\u0275template(18, HomeComponent_form_153_span_18_Template, 2, 0, "span", 109)(19, HomeComponent_form_153_span_19_Template, 2, 0, "span", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 107)(21, "label");
    \u0275\u0275text(22, "Service Interested In *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 112)(24, "option", 113);
    \u0275\u0275text(25, "Select a service");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, HomeComponent_form_153_option_26_Template, 2, 2, "option", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, HomeComponent_form_153_span_27_Template, 2, 0, "span", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 107)(29, "label");
    \u0275\u0275text(30, "Your Message *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "textarea", 115);
    \u0275\u0275template(32, HomeComponent_form_153_span_32_Template, 2, 0, "span", 109)(33, HomeComponent_form_153_span_33_Template, 2, 0, "span", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, HomeComponent_form_153_div_34_Template, 2, 1, "div", 116);
    \u0275\u0275elementStart(35, "button", 117);
    \u0275\u0275template(36, HomeComponent_form_153_span_36_Template, 2, 0, "span", 118)(37, HomeComponent_form_153_span_37_Template, 3, 0, "span", 119);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r6.contactForm);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r6.hasError("name", "required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.hasError("name", "minlength"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r6.hasError("phone", "required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.hasError("phone", "pattern"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r6.hasError("email", "required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.hasError("email", "email"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r6.serviceOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.hasError("service", "required"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r6.hasError("message", "required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.hasError("message", "minlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.submitError);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r6.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r6.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.isSubmitting);
  }
}
var HomeComponent = class _HomeComponent {
  servicesDataService;
  contactService;
  fb;
  services = [];
  teamMembers = [];
  stats = [];
  contactForm;
  isSubmitting = false;
  submitSuccess = false;
  submitError = "";
  serviceOptions = [
    "CCTV Surveillance",
    "Recruitment Solutions",
    "Property Dealing",
    "Software Development",
    "General Enquiry"
  ];
  constructor(servicesDataService, contactService, fb) {
    this.servicesDataService = servicesDataService;
    this.contactService = contactService;
    this.fb = fb;
  }
  ngOnInit() {
    this.services = this.servicesDataService.getServices();
    this.teamMembers = this.servicesDataService.getTeamMembers();
    this.stats = this.servicesDataService.getStats();
    this.contactForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      service: ["", Validators.required],
      message: ["", [Validators.required, Validators.minLength(10)]]
    });
  }
  onSubmitContact() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    this.submitError = "";
    const payload = this.contactForm.value;
    this.contactService.submitContactForm(payload).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
      },
      error: () => {
        this.isSubmitting = false;
        this.submitError = "Something went wrong. Please try again.";
      }
    });
  }
  hasError(field, error) {
    const control = this.contactForm.get(field);
    return !!(control?.touched && control?.hasError(error));
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(ServicesDataService), \u0275\u0275directiveInject(ContactService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: false, decls: 154, vars: 6, consts: [[1, "hero"], [1, "hero__bg"], [1, "hero__pattern"], [1, "container"], [1, "hero__content"], [1, "hero__badge"], [1, "badge-dot"], [1, "hero__title"], [1, "highlight"], [1, "hero__subtitle"], [1, "hero__cta"], ["routerLink", "/services", 1, "btn", "btn--primary"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M5 12h14M12 5l7 7-7 7"], ["routerLink", "/jobs", 1, "btn", "btn--outline-white"], [1, "hero__badges"], [1, "trust-badge"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"], ["d", "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10"], ["d", "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"], [1, "hero__scroll"], [1, "stats-section"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "section", "services-section"], [1, "section-header"], [1, "section-tag"], [1, "section-title"], [1, "section-desc"], [1, "services-grid"], ["class", "service-card", 3, "--accent-color", "--accent-bg", 4, "ngFor", "ngForOf"], [1, "about-strip"], [1, "about-strip__inner"], [1, "about-strip__text"], [1, "about-highlights"], [1, "highlight-item"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], ["d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["routerLink", "/about", 1, "btn", "btn--primary"], [1, "about-strip__visual"], [1, "visual-card", "main-card"], [1, "visual-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "visual-card", "secondary-card"], [1, "mini-stats"], ["class", "mini-stat", 4, "ngFor", "ngForOf"], [1, "section", "team-section"], [1, "team-grid"], ["class", "team-card", 4, "ngFor", "ngForOf"], ["id", "contact", 1, "section", "contact-section"], [1, "contact-grid"], [1, "contact-info"], [1, "info-cards"], ["href", "tel:8800000000", 1, "info-card"], [1, "info-card__icon"], ["viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"], [1, "info-card__text"], [1, "label"], [1, "value"], ["href", "mailto:helpmatersolution@gmail.com", 1, "info-card"], ["d", "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"], [1, "info-card", "no-link"], ["d", "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"], [1, "map-container"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.234!2d77.3495!3d28.6679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a218d50a0d%3A0x0!2sLajpat+Nagar%2C+Sahibabad%2C+Ghaziabad%2C+Uttar+Pradesh+201005!5e0!3m2!1sen!2sin!4v1`, "width", "100%", "height", "220", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", "title", "Helpmate Solution Location", 2, "border", "0", "border-radius", "12px"], [1, "contact-form-wrap"], [1, "form-card"], ["class", "success-msg", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "service-card"], [1, "service-card__icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], [1, "service-card__badge"], [1, "service-card__title"], [1, "service-card__desc"], [1, "service-card__features"], [4, "ngFor", "ngForOf"], [1, "service-card__link", 3, "routerLink", "fragment"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "currentColor"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M23 7l-7 5 7 5V7z M14 5H3a2 2 0 00-2 2v10a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2z"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75"], ["points", "16 18 22 12 16 6"], ["points", "8 6 2 12 8 18"], ["d", "M20 6L9 17l-5-5"], [1, "mini-stat"], [1, "mini-val"], [1, "mini-lbl"], [1, "team-card"], [1, "team-card__avatar"], [1, "team-card__name"], [1, "team-card__role"], [1, "team-card__bio"], [1, "success-msg"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["type", "text", "formControlName", "name", "placeholder", "Your full name"], ["class", "error", 4, "ngIf"], ["type", "tel", "formControlName", "phone", "placeholder", "10-digit mobile number"], ["type", "email", "formControlName", "email", "placeholder", "your@email.com"], ["formControlName", "service"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "message", "rows", "4", "placeholder", "Tell us how we can help you..."], ["class", "error-msg", 4, "ngIf"], ["type", "submit", 1, "btn", "btn--primary", "btn--full", 3, "disabled"], [4, "ngIf"], ["class", "spinner-wrap", 4, "ngIf"], [1, "error"], [3, "value"], [1, "error-msg"], [1, "spinner-wrap"], [1, "spinner"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "span", 6);
      \u0275\u0275text(7, " Trusted Business Partner Since 2019 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h1", 7);
      \u0275\u0275text(9, " Your Complete");
      \u0275\u0275element(10, "br");
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275text(12, "Growth Partner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "p", 9);
      \u0275\u0275text(14, " From securing your premises with CCTV to finding the right talent, dealing properties, and building custom software \u2014 Helpmate Solution is your one-stop consultancy in Ghaziabad, NCR. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10)(16, "a", 11);
      \u0275\u0275text(17, " Explore Services ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 12);
      \u0275\u0275element(19, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "a", 14);
      \u0275\u0275text(21, "View Job Openings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 15)(23, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 17);
      \u0275\u0275element(25, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " CCTV ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 17);
      \u0275\u0275element(29, "path", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, " Recruitment ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 17);
      \u0275\u0275element(33, "path", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, " Property ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(36, "svg", 17);
      \u0275\u0275element(37, "path", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, " Software ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(39, "div", 22);
      \u0275\u0275element(40, "span");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "section", 23)(42, "div", 3)(43, "div", 24);
      \u0275\u0275template(44, HomeComponent_div_44_Template, 5, 2, "div", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "section", 26)(46, "div", 3)(47, "div", 27)(48, "span", 28);
      \u0275\u0275text(49, "What We Do");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "h2", 29);
      \u0275\u0275text(51, "Our Core Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 30);
      \u0275\u0275text(53, "Four specialized service verticals under one trusted roof \u2014 designed to serve businesses and individuals across the NCR region.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 31);
      \u0275\u0275template(55, HomeComponent_div_55_Template, 18, 15, "div", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "section", 33)(57, "div", 3)(58, "div", 34)(59, "div", 35)(60, "span", 28);
      \u0275\u0275text(61, "About Helpmate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "h2", 29);
      \u0275\u0275text(63, "Built on Trust,");
      \u0275\u0275element(64, "br");
      \u0275\u0275text(65, "Driven by Results");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "p");
      \u0275\u0275text(67, "Helpmate Solution was founded with a clear vision \u2014 to become the most reliable multi-service business partner in the NCR. We believe in delivering quality, maintaining transparency, and building long-term relationships with every client we serve.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p");
      \u0275\u0275text(69, "Based in Sahibabad, Ghaziabad, we operate across 4 specialized service verticals, helping businesses secure their premises, build great teams, find the right properties, and develop powerful software solutions.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 36)(71, "div", 37);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(72, "svg", 38);
      \u0275\u0275element(73, "path", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275text(74, " Registered Company with GSTIN ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(75, "div", 37);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(76, "svg", 38);
      \u0275\u0275element(77, "path", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275text(78, " Serving NCR Since 2019 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(79, "div", 37);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(80, "svg", 38);
      \u0275\u0275element(81, "path", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275text(82, " 24/7 Customer Support ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(83, "a", 42);
      \u0275\u0275text(84, "Know More About Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 43)(86, "div", 44)(87, "div", 45);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(88, "svg", 46);
      \u0275\u0275element(89, "path", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(90, "h4");
      \u0275\u0275text(91, "Our Mission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "p");
      \u0275\u0275text(93, "To empower businesses and individuals by providing seamless, trustworthy, and result-oriented services across security, talent, property, and technology.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 48)(95, "div", 49);
      \u0275\u0275template(96, HomeComponent_div_96_Template, 5, 2, "div", 50);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(97, "section", 51)(98, "div", 3)(99, "div", 27)(100, "span", 28);
      \u0275\u0275text(101, "Our People");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "h2", 29);
      \u0275\u0275text(103, "Meet the Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "p", 30);
      \u0275\u0275text(105, "The passionate leaders behind Helpmate Solution driving growth, innovation, and client success every single day.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 52);
      \u0275\u0275template(107, HomeComponent_div_107_Template, 9, 6, "div", 53);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "section", 54)(109, "div", 3)(110, "div", 55)(111, "div", 56)(112, "span", 28);
      \u0275\u0275text(113, "Get In Touch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "h2", 29);
      \u0275\u0275text(115, "Let's Talk Business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p");
      \u0275\u0275text(117, "Have a question, need a quote, or want to explore how Helpmate Solution can help you? Fill out the form and we'll get back to you within 24 hours.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "div", 57)(119, "a", 58)(120, "div", 59);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(121, "svg", 60);
      \u0275\u0275element(122, "path", 61);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(123, "div", 62)(124, "span", 63);
      \u0275\u0275text(125, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "span", 64);
      \u0275\u0275text(127, "880-000-0000");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "a", 65)(129, "div", 59);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(130, "svg", 60);
      \u0275\u0275element(131, "path", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(132, "div", 62)(133, "span", 63);
      \u0275\u0275text(134, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "span", 64);
      \u0275\u0275text(136, "helpmatersolution@gmail.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "div", 67)(138, "div", 59);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(139, "svg", 60);
      \u0275\u0275element(140, "path", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(141, "div", 62)(142, "span", 63);
      \u0275\u0275text(143, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "span", 64);
      \u0275\u0275text(145, "L-169, Lajpat Nagar, Sahibabad, Ghaziabad, UP 201005");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(146, "div", 69);
      \u0275\u0275element(147, "iframe", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "div", 71)(149, "div", 72)(150, "h3");
      \u0275\u0275text(151, "Send Us a Message");
      \u0275\u0275elementEnd();
      \u0275\u0275template(152, HomeComponent_div_152_Template, 5, 0, "div", 73)(153, HomeComponent_form_153_Template, 38, 15, "form", 74);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(44);
      \u0275\u0275property("ngForOf", ctx.stats);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.services);
      \u0275\u0275advance(41);
      \u0275\u0275property("ngForOf", ctx.stats.slice(0, 4));
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.teamMembers);
      \u0275\u0275advance(45);
      \u0275\u0275property("ngIf", ctx.submitSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.submitSuccess);
    }
  }, dependencies: [NgForOf, NgIf, RouterLink, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: [`

.hero[_ngcontent-%COMP%] {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 72px;
}
.hero__bg[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      #0a1628 0%,
      #0f2347 40%,
      #1a3c6e 70%,
      #1e3a5f 100%);
}
.hero__pattern[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(
      circle at 15% 30%,
      rgba(249, 115, 22, 0.15) 0%,
      transparent 40%),
    radial-gradient(
      circle at 85% 70%,
      rgba(45, 90, 158, 0.3) 0%,
      transparent 40%),
    radial-gradient(
      circle at 60% 10%,
      rgba(255, 255, 255, 0.03) 0%,
      transparent 30%);
}
.hero__pattern[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 80px,
      rgba(255, 255, 255, 0.015) 80px,
      rgba(255, 255, 255, 0.015) 81px),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 80px,
      rgba(255, 255, 255, 0.015) 80px,
      rgba(255, 255, 255, 0.015) 81px);
}
.hero__content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  max-width: 700px;
  padding: 80px 0 100px;
}
.hero__badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.85);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 28px;
  backdrop-filter: blur(8px);
}
.hero__badge[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  box-shadow: 0 0 6px #22c55e;
  animation: _ngcontent-%COMP%_pulse 2s infinite;
}
.hero__title[_ngcontent-%COMP%] {
  font-size: clamp(40px, 6vw, 68px);
  font-weight: 800;
  color: white;
  line-height: 1.1;
  margin-bottom: 24px;
  font-family: var(--font-heading);
}
.hero__title[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {
  color: var(--accent);
  position: relative;
}
.hero__subtitle[_ngcontent-%COMP%] {
  font-size: clamp(15px, 2vw, 18px);
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.75;
  margin-bottom: 36px;
  max-width: 600px;
}
.hero__cta[_ngcontent-%COMP%] {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.hero__badges[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.hero__scroll[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.hero__scroll[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  display: block;
  width: 2px;
  height: 40px;
  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5),
      transparent);
  margin: 0 auto;
  animation: _ngcontent-%COMP%_scrollDown 1.5s ease-in-out infinite;
}
.trust-badge[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.7);
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  backdrop-filter: blur(4px);
}
@keyframes _ngcontent-%COMP%_pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
@keyframes _ngcontent-%COMP%_scrollDown {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
  }
  51% {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}
.stats-section[_ngcontent-%COMP%] {
  background: var(--primary);
  padding: 0;
  margin-top: -1px;
}
.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}
@media (max-width: 768px) {
  .stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 400px) {
  .stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.stat-card[_ngcontent-%COMP%] {
  padding: 36px 24px;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.2s;
}
.stat-card[_ngcontent-%COMP%]:last-child {
  border-right: none;
}
.stat-card[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.05);
}
.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {
  font-size: 40px;
  font-weight: 800;
  color: white;
  font-family: var(--font-heading);
  line-height: 1;
  margin-bottom: 6px;
}
.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}
@media (max-width: 768px) {
  .stat-card[_ngcontent-%COMP%] {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 28px 16px;
  }
  .stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {
    font-size: 32px;
  }
}
.services-section[_ngcontent-%COMP%] {
  background: var(--bg-light);
}
.services-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
@media (max-width: 768px) {
  .services-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.service-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 32px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.service-card[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent-color);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.service-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}
.service-card[_ngcontent-%COMP%]:hover::before {
  transform: scaleX(1);
}
.service-card__icon[_ngcontent-%COMP%] {
  width: 56px;
  height: 56px;
  background: var(--accent-bg);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.service-card__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 28px;
  height: 28px;
  color: var(--accent-color);
}
.service-card__badge[_ngcontent-%COMP%] {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  color: var(--accent-color);
  background: var(--accent-bg);
  padding: 3px 10px;
  border-radius: 50px;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.service-card__title[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 10px;
  font-family: var(--font-heading);
}
.service-card__desc[_ngcontent-%COMP%] {
  font-size: 14px;
  color: var(--text-medium);
  line-height: 1.65;
  margin-bottom: 18px;
}
.service-card__features[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.service-card__features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-medium);
}
.service-card__features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: var(--accent-color);
  flex-shrink: 0;
}
.service-card__link[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-color);
  text-decoration: none;
  transition: gap 0.2s;
}
.service-card__link[_ngcontent-%COMP%]:hover {
  gap: 10px;
}
.about-strip[_ngcontent-%COMP%] {
  background: white;
  padding: 96px 0;
}
.about-strip__inner[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
@media (max-width: 900px) {
  .about-strip__inner[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
.about-strip__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 15px;
  color: var(--text-medium);
  line-height: 1.75;
  margin-bottom: 16px;
}
.about-strip__visual[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.about-highlights[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 24px 0 32px;
}
.highlight-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-dark);
}
.highlight-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: var(--primary);
  flex-shrink: 0;
}
.visual-card[_ngcontent-%COMP%] {
  background: var(--bg-light);
  border-radius: 16px;
  border: 1px solid var(--border);
  padding: 28px;
}
.visual-card.main-card[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--primary-light));
  color: white;
  border: none;
}
.visual-card.main-card[_ngcontent-%COMP%]   .visual-icon[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}
.visual-card.main-card[_ngcontent-%COMP%]   .visual-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 24px;
  height: 24px;
  stroke: white;
}
.visual-card.main-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
  font-family: var(--font-heading);
}
.visual-card.main-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.65;
}
.mini-stats[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.mini-stat[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.mini-stat[_ngcontent-%COMP%]   .mini-val[_ngcontent-%COMP%] {
  font-size: 24px;
  font-weight: 800;
  color: var(--primary);
  font-family: var(--font-heading);
}
.mini-stat[_ngcontent-%COMP%]   .mini-lbl[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--text-light);
  font-weight: 500;
}
.team-section[_ngcontent-%COMP%] {
  background: var(--bg-light);
}
.team-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .team-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .team-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.team-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}
.team-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}
.team-card__avatar[_ngcontent-%COMP%] {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 800;
  color: white;
  margin: 0 auto 16px;
  font-family: var(--font-heading);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}
.team-card__name[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 4px;
  font-family: var(--font-heading);
}
.team-card__role[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 14px;
}
.team-card__bio[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--text-medium);
  line-height: 1.65;
}
.contact-section[_ngcontent-%COMP%] {
  background: white;
}
.contact-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 60px;
  align-items: start;
}
@media (max-width: 900px) {
  .contact-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
.contact-info[_ngcontent-%COMP%]   .section-tag[_ngcontent-%COMP%] {
  margin-bottom: 8px;
}
.contact-info[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
  margin-bottom: 16px;
}
.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 15px;
  color: var(--text-medium);
  line-height: 1.7;
  margin-bottom: 28px;
}
.info-cards[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}
.info-card[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px;
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s;
}
.info-card[_ngcontent-%COMP%]:hover:not(.no-link) {
  border-color: var(--primary);
  box-shadow: 0 2px 12px rgba(26, 60, 110, 0.1);
}
.info-card__icon[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  background: var(--primary);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.info-card__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  fill: white;
}
.info-card__text[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.info-card__text[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.info-card__text[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-dark);
}
.map-container[_ngcontent-%COMP%] {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
}
.form-card[_ngcontent-%COMP%] {
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 36px;
}
.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 24px;
  font-family: var(--font-heading);
}
@media (max-width: 480px) {
  .form-card[_ngcontent-%COMP%] {
    padding: 24px 16px;
  }
}
.form-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 560px) {
  .form-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.form-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}
.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-dark);
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  padding: 11px 14px;
  border: 1.5px solid var(--border);
  border-radius: 10px;
  font-size: 14px;
  color: var(--text-dark);
  background: white;
  transition: border-color 0.2s;
  font-family: var(--font-body);
  outline: none;
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, 
.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, 
.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {
  border-color: var(--primary);
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, 
.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, 
.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {
  color: #b0bec5;
}
.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  resize: vertical;
}
.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='%2394a3b8'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}
.error[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #ef4444;
}
.error-msg[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #ef4444;
  margin-bottom: 12px;
  padding: 10px 14px;
  background: #fef2f2;
  border-radius: 8px;
  border: 1px solid #fecaca;
}
.success-msg[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 12px;
}
.success-msg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #16a34a;
  fill: #16a34a;
  flex-shrink: 0;
  margin-top: 2px;
}
.success-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #15803d;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
}
.btn--full[_ngcontent-%COMP%] {
  width: 100%;
  justify-content: center;
}
.spinner-wrap[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.spinner[_ngcontent-%COMP%] {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
/*# sourceMappingURL=home.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: false, template: `<!-- ===================== HERO ===================== -->
<section class="hero">
  <div class="hero__bg">
    <div class="hero__pattern"></div>
  </div>
  <div class="container">
    <div class="hero__content">
      <div class="hero__badge">
        <span class="badge-dot"></span>
        Trusted Business Partner Since 2019
      </div>
      <h1 class="hero__title">
        Your Complete<br>
        <span class="highlight">Growth Partner</span>
      </h1>
      <p class="hero__subtitle">
        From securing your premises with CCTV to finding the right talent, dealing properties, and building custom software \u2014 Helpmate Solution is your one-stop consultancy in Ghaziabad, NCR.
      </p>
      <div class="hero__cta">
        <a routerLink="/services" class="btn btn--primary">
          Explore Services
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a routerLink="/jobs" class="btn btn--outline-white">View Job Openings</a>
      </div>
      <div class="hero__badges">
        <div class="trust-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          CCTV
        </div>
        <div class="trust-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
          Recruitment
        </div>
        <div class="trust-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10"/></svg>
          Property
        </div>
        <div class="trust-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          Software
        </div>
      </div>
    </div>
  </div>
  <div class="hero__scroll">
    <span></span>
  </div>
</section>

<!-- ===================== STATS ===================== -->
<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-card" *ngFor="let stat of stats">
        <div class="stat-value">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</section>

<!-- ===================== SERVICES ===================== -->
<section class="section services-section">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">What We Do</span>
      <h2 class="section-title">Our Core Services</h2>
      <p class="section-desc">Four specialized service verticals under one trusted roof \u2014 designed to serve businesses and individuals across the NCR region.</p>
    </div>
    <div class="services-grid">
      <div class="service-card" *ngFor="let service of services" [style.--accent-color]="service.color" [style.--accent-bg]="service.bgColor">
        <div class="service-card__icon">
          <!-- CCTV Icon -->
          <svg *ngIf="service.icon === 'cctv'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M23 7l-7 5 7 5V7z M14 5H3a2 2 0 00-2 2v10a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2z"/>
          </svg>
          <!-- Recruitment Icon -->
          <svg *ngIf="service.icon === 'recruitment'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75"/>
          </svg>
          <!-- Property Icon -->
          <svg *ngIf="service.icon === 'property'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10"/>
          </svg>
          <!-- Software Icon -->
          <svg *ngIf="service.icon === 'software'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
        </div>
        <div class="service-card__badge">{{ service.subtitle }}</div>
        <h3 class="service-card__title">{{ service.title }}</h3>
        <p class="service-card__desc">{{ service.description }}</p>
        <ul class="service-card__features">
          <li *ngFor="let feature of service.features.slice(0, 3)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>
            {{ feature }}
          </li>
        </ul>
        <a [routerLink]="['/services']" [fragment]="service.id" class="service-card__link">
          Learn More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ===================== ABOUT STRIP ===================== -->
<section class="about-strip">
  <div class="container">
    <div class="about-strip__inner">
      <div class="about-strip__text">
        <span class="section-tag">About Helpmate</span>
        <h2 class="section-title">Built on Trust,<br>Driven by Results</h2>
        <p>Helpmate Solution was founded with a clear vision \u2014 to become the most reliable multi-service business partner in the NCR. We believe in delivering quality, maintaining transparency, and building long-term relationships with every client we serve.</p>
        <p>Based in Sahibabad, Ghaziabad, we operate across 4 specialized service verticals, helping businesses secure their premises, build great teams, find the right properties, and develop powerful software solutions.</p>
        <div class="about-highlights">
          <div class="highlight-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            Registered Company with GSTIN
          </div>
          <div class="highlight-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Serving NCR Since 2019
          </div>
          <div class="highlight-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            24/7 Customer Support
          </div>
        </div>
        <a routerLink="/about" class="btn btn--primary">Know More About Us</a>
      </div>
      <div class="about-strip__visual">
        <div class="visual-card main-card">
          <div class="visual-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <h4>Our Mission</h4>
          <p>To empower businesses and individuals by providing seamless, trustworthy, and result-oriented services across security, talent, property, and technology.</p>
        </div>
        <div class="visual-card secondary-card">
          <div class="mini-stats">
            <div class="mini-stat" *ngFor="let stat of stats.slice(0, 4)">
              <span class="mini-val">{{ stat.value }}</span>
              <span class="mini-lbl">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===================== TEAM ===================== -->
<section class="section team-section">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">Our People</span>
      <h2 class="section-title">Meet the Team</h2>
      <p class="section-desc">The passionate leaders behind Helpmate Solution driving growth, innovation, and client success every single day.</p>
    </div>
    <div class="team-grid">
      <div class="team-card" *ngFor="let member of teamMembers">
        <div class="team-card__avatar" [style.background]="member.bgColor">
          {{ member.initials }}
        </div>
        <h3 class="team-card__name">{{ member.name }}</h3>
        <p class="team-card__role">{{ member.role }}</p>
        <p class="team-card__bio">{{ member.bio }}</p>
      </div>
    </div>
  </div>
</section>

<!-- ===================== CONTACT ===================== -->
<section class="section contact-section" id="contact">
  <div class="container">
    <div class="contact-grid">
      <!-- Info -->
      <div class="contact-info">
        <span class="section-tag">Get In Touch</span>
        <h2 class="section-title">Let's Talk Business</h2>
        <p>Have a question, need a quote, or want to explore how Helpmate Solution can help you? Fill out the form and we'll get back to you within 24 hours.</p>

        <div class="info-cards">
          <a href="tel:8800000000" class="info-card">
            <div class="info-card__icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </div>
            <div class="info-card__text">
              <span class="label">Phone</span>
              <span class="value">880-000-0000</span>
            </div>
          </a>

          <a href="mailto:helpmatersolution@gmail.com" class="info-card">
            <div class="info-card__icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </div>
            <div class="info-card__text">
              <span class="label">Email</span>
              <span class="value">helpmatersolution&#64;gmail.com</span>
            </div>
          </a>

          <div class="info-card no-link">
            <div class="info-card__icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
            <div class="info-card__text">
              <span class="label">Address</span>
              <span class="value">L-169, Lajpat Nagar, Sahibabad, Ghaziabad, UP 201005</span>
            </div>
          </div>
        </div>

        <!-- Google Map -->
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.234!2d77.3495!3d28.6679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a218d50a0d%3A0x0!2sLajpat+Nagar%2C+Sahibabad%2C+Ghaziabad%2C+Uttar+Pradesh+201005!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="220"
            style="border:0; border-radius: 12px;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Helpmate Solution Location">
          </iframe>
        </div>
      </div>

      <!-- Form -->
      <div class="contact-form-wrap">
        <div class="form-card">
          <h3>Send Us a Message</h3>

          <div class="success-msg" *ngIf="submitSuccess">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            <p>Thank you! We will get back to you within 24 hours.</p>
          </div>

          <form [formGroup]="contactForm" (ngSubmit)="onSubmitContact()" *ngIf="!submitSuccess">
            <div class="form-row">
              <div class="form-group">
                <label>Full Name *</label>
                <input type="text" formControlName="name" placeholder="Your full name">
                <span class="error" *ngIf="hasError('name', 'required')">Name is required</span>
                <span class="error" *ngIf="hasError('name', 'minlength')">Minimum 2 characters</span>
              </div>
              <div class="form-group">
                <label>Phone Number *</label>
                <input type="tel" formControlName="phone" placeholder="10-digit mobile number">
                <span class="error" *ngIf="hasError('phone', 'required')">Phone is required</span>
                <span class="error" *ngIf="hasError('phone', 'pattern')">Enter a valid 10-digit number</span>
              </div>
            </div>

            <div class="form-group">
              <label>Email Address *</label>
              <input type="email" formControlName="email" placeholder="your@email.com">
              <span class="error" *ngIf="hasError('email', 'required')">Email is required</span>
              <span class="error" *ngIf="hasError('email', 'email')">Enter a valid email address</span>
            </div>

            <div class="form-group">
              <label>Service Interested In *</label>
              <select formControlName="service">
                <option value="" disabled>Select a service</option>
                <option *ngFor="let opt of serviceOptions" [value]="opt">{{ opt }}</option>
              </select>
              <span class="error" *ngIf="hasError('service', 'required')">Please select a service</span>
            </div>

            <div class="form-group">
              <label>Your Message *</label>
              <textarea formControlName="message" rows="4" placeholder="Tell us how we can help you..."></textarea>
              <span class="error" *ngIf="hasError('message', 'required')">Message is required</span>
              <span class="error" *ngIf="hasError('message', 'minlength')">Minimum 10 characters</span>
            </div>

            <div class="error-msg" *ngIf="submitError">{{ submitError }}</div>

            <button type="submit" class="btn btn--primary btn--full" [disabled]="isSubmitting">
              <span *ngIf="!isSubmitting">Send Message</span>
              <span *ngIf="isSubmitting" class="spinner-wrap">
                <span class="spinner"></span> Sending...
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
`, styles: [`/* src/app/pages/home/home.component.scss */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 72px;
}
.hero__bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      #0a1628 0%,
      #0f2347 40%,
      #1a3c6e 70%,
      #1e3a5f 100%);
}
.hero__pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(
      circle at 15% 30%,
      rgba(249, 115, 22, 0.15) 0%,
      transparent 40%),
    radial-gradient(
      circle at 85% 70%,
      rgba(45, 90, 158, 0.3) 0%,
      transparent 40%),
    radial-gradient(
      circle at 60% 10%,
      rgba(255, 255, 255, 0.03) 0%,
      transparent 30%);
}
.hero__pattern::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 80px,
      rgba(255, 255, 255, 0.015) 80px,
      rgba(255, 255, 255, 0.015) 81px),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 80px,
      rgba(255, 255, 255, 0.015) 80px,
      rgba(255, 255, 255, 0.015) 81px);
}
.hero__content {
  position: relative;
  z-index: 1;
  max-width: 700px;
  padding: 80px 0 100px;
}
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.85);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 28px;
  backdrop-filter: blur(8px);
}
.hero__badge .badge-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  box-shadow: 0 0 6px #22c55e;
  animation: pulse 2s infinite;
}
.hero__title {
  font-size: clamp(40px, 6vw, 68px);
  font-weight: 800;
  color: white;
  line-height: 1.1;
  margin-bottom: 24px;
  font-family: var(--font-heading);
}
.hero__title .highlight {
  color: var(--accent);
  position: relative;
}
.hero__subtitle {
  font-size: clamp(15px, 2vw, 18px);
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.75;
  margin-bottom: 36px;
  max-width: 600px;
}
.hero__cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.hero__badges {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.hero__scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.hero__scroll span {
  display: block;
  width: 2px;
  height: 40px;
  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5),
      transparent);
  margin: 0 auto;
  animation: scrollDown 1.5s ease-in-out infinite;
}
.trust-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.7);
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  backdrop-filter: blur(4px);
}
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
@keyframes scrollDown {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
  }
  51% {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}
.stats-section {
  background: var(--primary);
  padding: 0;
  margin-top: -1px;
}
.stats-section .stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}
@media (max-width: 768px) {
  .stats-section .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 400px) {
  .stats-section .stats-grid {
    grid-template-columns: 1fr;
  }
}
.stat-card {
  padding: 36px 24px;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.2s;
}
.stat-card:last-child {
  border-right: none;
}
.stat-card:hover {
  background: rgba(255, 255, 255, 0.05);
}
.stat-card .stat-value {
  font-size: 40px;
  font-weight: 800;
  color: white;
  font-family: var(--font-heading);
  line-height: 1;
  margin-bottom: 6px;
}
.stat-card .stat-label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}
@media (max-width: 768px) {
  .stat-card {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 28px 16px;
  }
  .stat-card .stat-value {
    font-size: 32px;
  }
}
.services-section {
  background: var(--bg-light);
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
.service-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent-color);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.service-card:hover {
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}
.service-card:hover::before {
  transform: scaleX(1);
}
.service-card__icon {
  width: 56px;
  height: 56px;
  background: var(--accent-bg);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.service-card__icon svg {
  width: 28px;
  height: 28px;
  color: var(--accent-color);
}
.service-card__badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  color: var(--accent-color);
  background: var(--accent-bg);
  padding: 3px 10px;
  border-radius: 50px;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.service-card__title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 10px;
  font-family: var(--font-heading);
}
.service-card__desc {
  font-size: 14px;
  color: var(--text-medium);
  line-height: 1.65;
  margin-bottom: 18px;
}
.service-card__features {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.service-card__features li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-medium);
}
.service-card__features li svg {
  color: var(--accent-color);
  flex-shrink: 0;
}
.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-color);
  text-decoration: none;
  transition: gap 0.2s;
}
.service-card__link:hover {
  gap: 10px;
}
.about-strip {
  background: white;
  padding: 96px 0;
}
.about-strip__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
@media (max-width: 900px) {
  .about-strip__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
.about-strip__text p {
  font-size: 15px;
  color: var(--text-medium);
  line-height: 1.75;
  margin-bottom: 16px;
}
.about-strip__visual {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 24px 0 32px;
}
.highlight-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-dark);
}
.highlight-item svg {
  color: var(--primary);
  flex-shrink: 0;
}
.visual-card {
  background: var(--bg-light);
  border-radius: 16px;
  border: 1px solid var(--border);
  padding: 28px;
}
.visual-card.main-card {
  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--primary-light));
  color: white;
  border: none;
}
.visual-card.main-card .visual-icon {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}
.visual-card.main-card .visual-icon svg {
  width: 24px;
  height: 24px;
  stroke: white;
}
.visual-card.main-card h4 {
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
  font-family: var(--font-heading);
}
.visual-card.main-card p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.65;
}
.mini-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.mini-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.mini-stat .mini-val {
  font-size: 24px;
  font-weight: 800;
  color: var(--primary);
  font-family: var(--font-heading);
}
.mini-stat .mini-lbl {
  font-size: 12px;
  color: var(--text-light);
  font-weight: 500;
}
.team-section {
  background: var(--bg-light);
}
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}
.team-card {
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}
.team-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}
.team-card__avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 800;
  color: white;
  margin: 0 auto 16px;
  font-family: var(--font-heading);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}
.team-card__name {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 4px;
  font-family: var(--font-heading);
}
.team-card__role {
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 14px;
}
.team-card__bio {
  font-size: 13px;
  color: var(--text-medium);
  line-height: 1.65;
}
.contact-section {
  background: white;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 60px;
  align-items: start;
}
@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
.contact-info .section-tag {
  margin-bottom: 8px;
}
.contact-info .section-title {
  margin-bottom: 16px;
}
.contact-info p {
  font-size: 15px;
  color: var(--text-medium);
  line-height: 1.7;
  margin-bottom: 28px;
}
.info-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}
.info-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px;
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s;
}
.info-card:hover:not(.no-link) {
  border-color: var(--primary);
  box-shadow: 0 2px 12px rgba(26, 60, 110, 0.1);
}
.info-card__icon {
  width: 40px;
  height: 40px;
  background: var(--primary);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.info-card__icon svg {
  width: 18px;
  height: 18px;
  fill: white;
}
.info-card__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.info-card__text .label {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.info-card__text .value {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-dark);
}
.map-container {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
}
.form-card {
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 36px;
}
.form-card h3 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 24px;
  font-family: var(--font-heading);
}
@media (max-width: 480px) {
  .form-card {
    padding: 24px 16px;
  }
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 560px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}
.form-group label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-dark);
}
.form-group input,
.form-group select,
.form-group textarea {
  padding: 11px 14px;
  border: 1.5px solid var(--border);
  border-radius: 10px;
  font-size: 14px;
  color: var(--text-dark);
  background: white;
  transition: border-color 0.2s;
  font-family: var(--font-body);
  outline: none;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--primary);
}
.form-group input::placeholder,
.form-group select::placeholder,
.form-group textarea::placeholder {
  color: #b0bec5;
}
.form-group textarea {
  resize: vertical;
}
.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='%2394a3b8'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}
.error {
  font-size: 12px;
  color: #ef4444;
}
.error-msg {
  font-size: 13px;
  color: #ef4444;
  margin-bottom: 12px;
  padding: 10px 14px;
  background: #fef2f2;
  border-radius: 8px;
  border: 1px solid #fecaca;
}
.success-msg {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 12px;
}
.success-msg svg {
  color: #16a34a;
  fill: #16a34a;
  flex-shrink: 0;
  margin-top: 2px;
}
.success-msg p {
  color: #15803d;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
}
.btn--full {
  width: 100%;
  justify-content: center;
}
.spinner-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}
.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
/*# sourceMappingURL=home.component.css.map */
`] }]
  }], () => [{ type: ServicesDataService }, { type: ContactService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 16 });
})();

// src/app/pages/home/home.module.ts
var routes = [{ path: "", component: HomeComponent }];
var HomeModule = class _HomeModule {
  static \u0275fac = function HomeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomeModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, RouterModule.forChild(routes)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeModule, [{
    type: NgModule,
    args: [{
      declarations: [HomeComponent],
      imports: [SharedModule, RouterModule.forChild(routes)]
    }]
  }], null, null);
})();
export {
  HomeModule
};
//# sourceMappingURL=chunk-O7XIPNWO.js.map
