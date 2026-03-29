import {
  ContactService
} from "./chunk-A5UMQQGO.js";
import {
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  Injectable,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModule,
  PageBannerComponent,
  RouterModule,
  SharedModule,
  Validators,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-2VETHU63.js";

// src/app/core/services/jobs.service.ts
var JobsService = class _JobsService {
  jobs = [
    {
      id: 1,
      title: "CCTV Installation Technician",
      company: "Helpmate CCTV",
      department: "Technical",
      location: "Ghaziabad / NCR",
      experience: "1\u20133 Years",
      type: "Full Time",
      salary: "\u20B915,000 \u2013 \u20B925,000/month",
      skills: ["CCTV Installation", "IP Cameras", "DVR/NVR Setup", "Network Cabling", "Troubleshooting"],
      description: "We are looking for a skilled CCTV technician to install, configure, and maintain surveillance systems for residential and commercial clients across the NCR region.",
      responsibilities: [
        "Install CCTV cameras, DVR/NVR, and related equipment",
        "Configure IP-based surveillance systems",
        "Perform periodic maintenance and troubleshooting",
        "Coordinate with clients for site surveys and installations",
        "Maintain service logs and reports"
      ],
      applyEmail: "helpmatecctv@gmail.com",
      postedDate: "2026-03-01",
      isActive: true
    },
    {
      id: 2,
      title: "HR Recruiter / Talent Acquisition Executive",
      company: "Helpmate Solution",
      department: "Human Resources",
      location: "Sahibabad, Ghaziabad",
      experience: "1\u20133 Years",
      type: "Full Time",
      salary: "\u20B918,000 \u2013 \u20B930,000/month",
      skills: ["Sourcing", "LinkedIn Recruiter", "Interview Coordination", "MS Office", "Communication"],
      description: "Join our growing HR team and help connect talented professionals with leading companies. You will manage end-to-end recruitment for our clients across multiple sectors.",
      responsibilities: [
        "Source candidates via job portals, LinkedIn, and referrals",
        "Screen resumes and conduct initial telephonic interviews",
        "Coordinate interview rounds with client companies",
        "Manage candidate pipeline and maintain recruitment database",
        "Achieve monthly placement targets"
      ],
      applyEmail: "helpmatehrsolution@gmail.com",
      postedDate: "2026-03-05",
      isActive: true
    },
    {
      id: 3,
      title: "Sales Executive \u2013 Property & Real Estate",
      company: "Helpmate Realty",
      department: "Sales",
      location: "Ghaziabad / NCR",
      experience: "1\u20134 Years",
      type: "Full Time",
      salary: "\u20B920,000 \u2013 \u20B935,000/month + Incentives",
      skills: ["Real Estate Sales", "Client Handling", "Lead Generation", "Negotiation", "Local Market Knowledge"],
      description: "We are seeking a dynamic sales executive to join Helpmate Realty. You will assist clients in buying, selling, and renting residential and commercial properties across the NCR.",
      responsibilities: [
        "Generate and follow up on property enquiries and leads",
        "Conduct property site visits with potential buyers/renters",
        "Negotiate deals between buyers and sellers",
        "Maintain knowledge of local property market trends",
        "Ensure smooth documentation and transaction process"
      ],
      applyEmail: "helpmaterealtyinfo@gmail.com",
      postedDate: "2026-03-10",
      isActive: true
    },
    {
      id: 4,
      title: "Full Stack Developer (Angular + Node.js)",
      company: "Helpmate Software",
      department: "Engineering",
      location: "Remote / Ghaziabad",
      experience: "2\u20135 Years",
      type: "Full Time",
      salary: "\u20B935,000 \u2013 \u20B960,000/month",
      skills: ["Angular", "Node.js", "TypeScript", "MongoDB", "REST APIs", "Git"],
      description: "We are looking for a passionate full-stack developer to build and maintain web and mobile applications for our diverse portfolio of clients.",
      responsibilities: [
        "Design and develop scalable web applications using Angular and Node.js",
        "Build RESTful APIs and integrate third-party services",
        "Write clean, maintainable TypeScript code",
        "Collaborate with UI/UX designers and backend teams",
        "Deploy and maintain applications on cloud platforms"
      ],
      applyEmail: "helpmatesoftware@gmail.com",
      postedDate: "2026-03-15",
      isActive: true
    },
    {
      id: 5,
      title: "Business Development Executive",
      company: "Helpmate Solution",
      department: "Sales & Business",
      location: "Sahibabad, Ghaziabad",
      experience: "0\u20132 Years",
      type: "Full Time",
      salary: "\u20B915,000 \u2013 \u20B925,000/month + Incentives",
      skills: ["Lead Generation", "Cold Calling", "Client Relationship", "CRM Tools", "Presentation Skills"],
      description: "Join our business development team and help expand Helpmate Solution's reach across the NCR. This is a great opportunity for a motivated individual to grow in a multi-service environment.",
      responsibilities: [
        "Identify and develop new business opportunities",
        "Build relationships with potential clients across all service verticals",
        "Prepare and deliver sales presentations",
        "Achieve monthly revenue targets",
        "Coordinate with service teams for client onboarding"
      ],
      applyEmail: "helpmatehrsolution@gmail.com",
      postedDate: "2026-03-20",
      isActive: true
    }
  ];
  getAll() {
    return this.jobs.filter((j) => j.isActive);
  }
  getById(id) {
    return this.jobs.find((j) => j.id === id);
  }
  getByDepartment(department) {
    return this.jobs.filter((j) => j.department === department && j.isActive);
  }
  static \u0275fac = function JobsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JobsService, factory: _JobsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/jobs/jobs.component.ts
function JobsComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function JobsComponent_button_8_Template_button_click_0_listener() {
      const dept_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByDepartment(dept_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeFilter === dept_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dept_r2, " ");
  }
}
function JobsComponent_div_11_div_1_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r5);
  }
}
function JobsComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div", 42)(3, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 17);
    \u0275\u0275element(5, "rect", 44)(6, "path", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div")(8, "div", 46);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 47);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "span", 48);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "h3", 49);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 50)(17, "span", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 17);
    \u0275\u0275element(19, "path", 52)(20, "circle", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "span", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 17);
    \u0275\u0275element(24, "circle", 25)(25, "polyline", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "span", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 17);
    \u0275\u0275element(29, "line", 56)(30, "path", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "p", 58);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 59);
    \u0275\u0275template(35, JobsComponent_div_11_div_1_span_35_Template, 2, 1, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 61)(37, "span", 62);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 63);
    \u0275\u0275listener("click", function JobsComponent_div_11_div_1_Template_button_click_40_listener() {
      const job_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openApply(job_r6));
    });
    \u0275\u0275text(41, "Apply Now");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r2.getDepartmentBg(job_r6.department))("color", ctx_r2.getDepartmentColor(job_r6.department));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(job_r6.company);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.getDepartmentBg(job_r6.department))("color", ctx_r2.getDepartmentColor(job_r6.department));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", job_r6.department, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r6.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r6.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", job_r6.location, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", job_r6.experience, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", job_r6.salary, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", job_r6.skills);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Posted: ", \u0275\u0275pipeBind2(39, 18, job_r6.postedDate, "d MMM yyyy"), "");
  }
}
function JobsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, JobsComponent_div_11_div_1_Template, 42, 21, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredJobs);
  }
}
function JobsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 66);
    \u0275\u0275element(2, "circle", 67)(3, "line", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "No openings in this department right now.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Check back soon or view all openings.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 69);
    \u0275\u0275listener("click", function JobsComponent_ng_template_12_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByDepartment("All"));
    });
    \u0275\u0275text(9, "View All Jobs");
    \u0275\u0275elementEnd()();
  }
}
function JobsComponent_div_73_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.selectedJob.title, " \u2014 ", ctx_r2.selectedJob.company, "");
  }
}
function JobsComponent_div_73_div_12_strong_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedJob.applyEmail);
  }
}
function JobsComponent_div_73_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "path", 81)(3, "polyline", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "Application Submitted!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Our HR team will contact you soon. You can also email directly at ");
    \u0275\u0275template(8, JobsComponent_div_73_div_12_strong_8_Template, 2, 1, "strong", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 69);
    \u0275\u0275listener("click", function JobsComponent_div_73_div_12_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(10, "Close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.selectedJob);
  }
}
function JobsComponent_div_73_form_13_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function JobsComponent_div_73_form_13_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "Minimum 2 characters.");
    \u0275\u0275elementEnd();
  }
}
function JobsComponent_div_73_form_13_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "Phone is required.");
    \u0275\u0275elementEnd();
  }
}
function JobsComponent_div_73_form_13_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "Enter a valid 10-digit number.");
    \u0275\u0275elementEnd();
  }
}
function JobsComponent_div_73_form_13_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "Email is required.");
    \u0275\u0275elementEnd();
  }
}
function JobsComponent_div_73_form_13_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function JobsComponent_div_73_form_13_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "Experience is required.");
    \u0275\u0275elementEnd();
  }
}
function JobsComponent_div_73_form_13_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "Expected CTC is required.");
    \u0275\u0275elementEnd();
  }
}
function JobsComponent_div_73_form_13_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "Message is required.");
    \u0275\u0275elementEnd();
  }
}
function JobsComponent_div_73_form_13_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "Minimum 20 characters.");
    \u0275\u0275elementEnd();
  }
}
function JobsComponent_div_73_form_13_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.submitError);
  }
}
function JobsComponent_div_73_form_13_span_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 101);
  }
}
function JobsComponent_div_73_form_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 83);
    \u0275\u0275listener("ngSubmit", function JobsComponent_div_73_form_13_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSubmitApplication());
    });
    \u0275\u0275elementStart(1, "div", 84)(2, "div", 85)(3, "label");
    \u0275\u0275text(4, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 86);
    \u0275\u0275template(6, JobsComponent_div_73_form_13_span_6_Template, 2, 0, "span", 87)(7, JobsComponent_div_73_form_13_span_7_Template, 2, 0, "span", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 85)(9, "label");
    \u0275\u0275text(10, "Phone Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 88);
    \u0275\u0275template(12, JobsComponent_div_73_form_13_span_12_Template, 2, 0, "span", 87)(13, JobsComponent_div_73_form_13_span_13_Template, 2, 0, "span", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 85)(15, "label");
    \u0275\u0275text(16, "Email Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 89);
    \u0275\u0275template(18, JobsComponent_div_73_form_13_span_18_Template, 2, 0, "span", 87)(19, JobsComponent_div_73_form_13_span_19_Template, 2, 0, "span", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 84)(21, "div", 85)(22, "label");
    \u0275\u0275text(23, "Total Experience *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 90);
    \u0275\u0275template(25, JobsComponent_div_73_form_13_span_25_Template, 2, 0, "span", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 85)(27, "label");
    \u0275\u0275text(28, "Expected CTC *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 91);
    \u0275\u0275template(30, JobsComponent_div_73_form_13_span_30_Template, 2, 0, "span", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 85)(32, "label");
    \u0275\u0275text(33, "Current CTC (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 85)(36, "label");
    \u0275\u0275text(37, "Cover Letter / Message *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "textarea", 93);
    \u0275\u0275template(39, JobsComponent_div_73_form_13_span_39_Template, 2, 0, "span", 87)(40, JobsComponent_div_73_form_13_span_40_Template, 2, 0, "span", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, JobsComponent_div_73_form_13_div_41_Template, 2, 1, "div", 94);
    \u0275\u0275elementStart(42, "div", 95)(43, "button", 96);
    \u0275\u0275listener("click", function JobsComponent_div_73_form_13_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(44, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 97);
    \u0275\u0275template(46, JobsComponent_div_73_form_13_span_46_Template, 1, 0, "span", 98);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.applyForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("invalid", ctx_r2.hasError("name", "required") || ctx_r2.hasError("name", "minlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasError("name", "required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasError("name", "minlength"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ctx_r2.hasError("phone", "required") || ctx_r2.hasError("phone", "pattern"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasError("phone", "required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasError("phone", "pattern"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ctx_r2.hasError("email", "required") || ctx_r2.hasError("email", "email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasError("email", "required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasError("email", "email"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("invalid", ctx_r2.hasError("experience", "required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasError("experience", "required"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ctx_r2.hasError("expectedCTC", "required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasError("expectedCTC", "required"));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("invalid", ctx_r2.hasError("message", "required") || ctx_r2.hasError("message", "minlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasError("message", "required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasError("message", "minlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.submitError);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isSubmitting ? "Submitting..." : "Submit Application", " ");
  }
}
function JobsComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function JobsComponent_div_73_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 71);
    \u0275\u0275listener("click", function JobsComponent_div_73_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 72)(3, "div")(4, "h3");
    \u0275\u0275text(5, "Apply for Position");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, JobsComponent_div_73_p_6_Template, 2, 2, "p", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 74);
    \u0275\u0275listener("click", function JobsComponent_div_73_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 17);
    \u0275\u0275element(9, "line", 75)(10, "line", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 77);
    \u0275\u0275template(12, JobsComponent_div_73_div_12_Template, 11, 1, "div", 78)(13, JobsComponent_div_73_form_13_Template, 48, 27, "form", 79);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.selectedJob);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.submitSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.submitSuccess);
  }
}
var JobsComponent = class _JobsComponent {
  jobsService;
  contactService;
  fb;
  jobs = [];
  filteredJobs = [];
  selectedJob = null;
  showApplyModal = false;
  applyForm;
  isSubmitting = false;
  submitSuccess = false;
  submitError = "";
  activeFilter = "All";
  departments = [];
  constructor(jobsService, contactService, fb) {
    this.jobsService = jobsService;
    this.contactService = contactService;
    this.fb = fb;
  }
  ngOnInit() {
    this.jobs = this.jobsService.getAll();
    this.filteredJobs = this.jobs;
    const deptSet = new Set(this.jobs.map((j) => j.department));
    this.departments = ["All", ...Array.from(deptSet)];
    this.applyForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      experience: ["", Validators.required],
      currentCTC: [""],
      expectedCTC: ["", Validators.required],
      message: ["", [Validators.required, Validators.minLength(20)]]
    });
  }
  filterByDepartment(dept) {
    this.activeFilter = dept;
    if (dept === "All") {
      this.filteredJobs = this.jobs;
    } else {
      this.filteredJobs = this.jobs.filter((j) => j.department === dept);
    }
  }
  openApply(job) {
    this.selectedJob = job;
    this.showApplyModal = true;
    this.submitSuccess = false;
    this.submitError = "";
    this.applyForm.reset();
    document.body.style.overflow = "hidden";
  }
  closeModal() {
    this.showApplyModal = false;
    this.selectedJob = null;
    document.body.style.overflow = "";
  }
  onSubmitApplication() {
    if (this.applyForm.invalid || !this.selectedJob) {
      this.applyForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    this.submitError = "";
    const formValue = this.applyForm.value;
    const payload = __spreadProps(__spreadValues({}, formValue), {
      jobId: this.selectedJob.id,
      jobTitle: this.selectedJob.title
    });
    this.contactService.submitJobApplication(payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.applyForm.reset();
      },
      error: () => {
        this.isSubmitting = false;
        this.submitError = "Something went wrong. Please try again or email directly.";
      }
    });
  }
  hasError(field, error) {
    const control = this.applyForm.get(field);
    return !!(control?.touched && control?.hasError(error));
  }
  getDepartmentColor(department) {
    const colorMap = {
      Technical: "#2563eb",
      "Human Resources": "#7c3aed",
      Sales: "#059669",
      Engineering: "#d97706",
      "Sales & Business": "#db2777"
    };
    return colorMap[department] ?? "#6b7280";
  }
  getDepartmentBg(department) {
    const colorMap = {
      Technical: "#eff6ff",
      "Human Resources": "#f5f3ff",
      Sales: "#ecfdf5",
      Engineering: "#fffbeb",
      "Sales & Business": "#fce7f3"
    };
    return colorMap[department] ?? "#f3f4f6";
  }
  static \u0275fac = function JobsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobsComponent)(\u0275\u0275directiveInject(JobsService), \u0275\u0275directiveInject(ContactService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobsComponent, selectors: [["app-jobs"]], standalone: false, decls: 74, vars: 6, consts: [["noJobs", ""], ["title", "Job Openings", "subtitle", "Join our growing team and build a rewarding career with Helpmate Solution.", "breadcrumb", "Jobs"], [1, "filter-section", "section-sm", "bg-white"], [1, "container"], [1, "filter-bar"], [1, "filter-info"], [1, "jobs-count"], [1, "filter-buttons"], ["class", "filter-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "jobs-section", "section-sm", "bg-gray"], ["class", "jobs-grid", 4, "ngIf", "ngIfElse"], [1, "why-join", "section", "bg-white"], [1, "section-header"], [1, "section-badge"], [1, "perks-grid"], [1, "perk-card"], [1, "perk-icon", "blue"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "22 7 13.5 15.5 8.5 10.5 2 17"], ["points", "16 7 22 7 22 13"], [1, "perk-icon", "purple"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"], [1, "perk-icon", "green"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 8v4l3 3"], [1, "perk-icon", "orange"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], [1, "general-apply", "section-sm", "bg-gray"], [1, "general-apply-card"], [1, "general-apply-content"], ["href", "mailto:helpmatehrsolution@gmail.com?subject=General Job Application", 1, "btn", "btn-primary", "btn-lg"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 2, "width", "18px", "height", "18px"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "filter-btn", 3, "click"], [1, "jobs-grid"], ["class", "job-card", 4, "ngFor", "ngForOf"], [1, "job-card"], [1, "job-card-header"], [1, "job-company-badge"], [1, "company-icon"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2", "ry", "2"], ["d", "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"], [1, "company-name"], [1, "dept-badge"], [1, "job-type-badge"], [1, "job-title"], [1, "job-meta"], [1, "meta-item"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], ["points", "12 6 12 12 16 14"], [1, "meta-item", "salary"], ["x1", "12", "y1", "1", "x2", "12", "y2", "23"], ["d", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], [1, "job-description"], [1, "job-skills"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [1, "job-card-footer"], [1, "posted-date"], [1, "btn", "btn-apply", 3, "click"], [1, "skill-tag"], [1, "no-jobs"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], [1, "btn", "btn-primary", 3, "click"], [1, "modal-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "modal", 3, "click"], [1, "modal-header"], [4, "ngIf"], ["aria-label", "Close modal", 1, "modal-close", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], ["class", "success-box", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "success-box"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["type", "text", "formControlName", "name", "placeholder", "Your full name", 1, "form-control"], ["class", "error-msg", 4, "ngIf"], ["type", "tel", "formControlName", "phone", "placeholder", "10-digit mobile number", 1, "form-control"], ["type", "email", "formControlName", "email", "placeholder", "your@email.com", 1, "form-control"], ["type", "text", "formControlName", "experience", "placeholder", "e.g. 2 Years", 1, "form-control"], ["type", "text", "formControlName", "expectedCTC", "placeholder", "e.g. \u20B930,000/month", 1, "form-control"], ["type", "text", "formControlName", "currentCTC", "placeholder", "e.g. \u20B920,000/month", 1, "form-control"], ["formControlName", "message", "rows", "4", "placeholder", "Tell us about yourself and why you're a great fit for this role...", 1, "form-control"], ["class", "error-msg form-error", 4, "ngIf"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner", 4, "ngIf"], [1, "error-msg"], [1, "error-msg", "form-error"], [1, "spinner"]], template: function JobsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-page-banner", 1);
      \u0275\u0275elementStart(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "span", 6);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 7);
      \u0275\u0275template(8, JobsComponent_button_8_Template, 2, 3, "button", 8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(9, "section", 9)(10, "div", 3);
      \u0275\u0275template(11, JobsComponent_div_11_Template, 2, 1, "div", 10)(12, JobsComponent_ng_template_12_Template, 10, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "section", 11)(15, "div", 3)(16, "div", 12)(17, "span", 13);
      \u0275\u0275text(18, "Why Work With Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "h2");
      \u0275\u0275text(20, "Build Your Career at Helpmate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p");
      \u0275\u0275text(22, "We believe in nurturing talent and creating an environment where you can thrive and grow.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 14)(24, "div", 15)(25, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 17);
      \u0275\u0275element(27, "polyline", 18)(28, "polyline", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "h4");
      \u0275\u0275text(30, "Career Growth");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32, "Clear growth paths and promotion opportunities across all departments.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 15)(34, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 17);
      \u0275\u0275element(36, "path", 21)(37, "circle", 22)(38, "path", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(39, "h4");
      \u0275\u0275text(40, "Collaborative Culture");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, "Work with a supportive, diverse, and passionate team that celebrates wins together.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 15)(44, "div", 24);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(45, "svg", 17);
      \u0275\u0275element(46, "circle", 25)(47, "path", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(48, "h4");
      \u0275\u0275text(49, "Work-Life Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p");
      \u0275\u0275text(51, "We value your time outside work and promote a healthy work-life balance.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 15)(53, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(54, "svg", 17);
      \u0275\u0275element(55, "polygon", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(56, "h4");
      \u0275\u0275text(57, "Competitive Salary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p");
      \u0275\u0275text(59, "Attractive pay packages with performance incentives and timely appraisals.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(60, "section", 29)(61, "div", 3)(62, "div", 30)(63, "div", 31)(64, "h3");
      \u0275\u0275text(65, "Don't See a Suitable Role?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "p");
      \u0275\u0275text(67, "Send your resume to our HR team and we'll keep your profile on file for future openings.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "a", 32);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(69, "svg", 33);
      \u0275\u0275element(70, "path", 34)(71, "polyline", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275text(72, " Send Resume ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(73, JobsComponent_div_73_Template, 14, 3, "div", 36);
    }
    if (rf & 2) {
      const noJobs_r11 = \u0275\u0275reference(13);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.filteredJobs.length, " Position", ctx.filteredJobs.length !== 1 ? "s" : "", " Available");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.departments);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.filteredJobs.length > 0)("ngIfElse", noJobs_r11);
      \u0275\u0275advance(62);
      \u0275\u0275property("ngIf", ctx.showApplyModal);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, PageBannerComponent, DatePipe], styles: ["\n\n.bg-white[_ngcontent-%COMP%] {\n  background: white;\n}\n.bg-gray[_ngcontent-%COMP%] {\n  background: var(--gray-50);\n}\n.filter-section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--gray-200);\n}\n.filter-section[_ngcontent-%COMP%]   .filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.filter-section[_ngcontent-%COMP%]   .jobs-count[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--gray-700);\n}\n.filter-section[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  padding: 0.45rem 1.1rem;\n  border-radius: 50px;\n  border: 2px solid var(--gray-200);\n  background: white;\n  color: var(--gray-600);\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all var(--transition);\n}\n.filter-section[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.filter-section[_ngcontent-%COMP%]   .filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n  font-weight: 600;\n}\n.jobs-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 800px) {\n  .jobs-section[_ngcontent-%COMP%]   .jobs-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.job-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  padding: 1.75rem;\n  border: 1px solid var(--gray-200);\n  box-shadow: var(--shadow-sm);\n  transition: all var(--transition);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.job-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-md);\n  border-color: var(--primary);\n}\n.job-card[_ngcontent-%COMP%]   .job-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.job-card[_ngcontent-%COMP%]   .job-company-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.job-card[_ngcontent-%COMP%]   .job-company-badge[_ngcontent-%COMP%]   .company-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.job-card[_ngcontent-%COMP%]   .job-company-badge[_ngcontent-%COMP%]   .company-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.job-card[_ngcontent-%COMP%]   .job-company-badge[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--gray-700);\n  margin-bottom: 0.25rem;\n}\n.job-card[_ngcontent-%COMP%]   .dept-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 0.2rem 0.6rem;\n  border-radius: 50px;\n}\n.job-card[_ngcontent-%COMP%]   .job-type-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.3rem 0.75rem;\n  border-radius: 50px;\n  background: var(--green-light);\n  color: var(--green);\n  white-space: nowrap;\n}\n.job-card[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  line-height: 1.3;\n  margin: 0;\n}\n.job-card[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.job-card[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.82rem;\n  color: var(--gray-500);\n}\n.job-card[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.job-card[_ngcontent-%COMP%]   .meta-item.salary[_ngcontent-%COMP%] {\n  color: var(--green);\n  font-weight: 600;\n}\n.job-card[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--gray-600);\n  line-height: 1.7;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.job-card[_ngcontent-%COMP%]   .job-skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.job-card[_ngcontent-%COMP%]   .job-skills[_ngcontent-%COMP%]   .skill-tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.7rem;\n  background: var(--gray-100);\n  color: var(--gray-600);\n  border-radius: 50px;\n  font-weight: 500;\n}\n.job-card[_ngcontent-%COMP%]   .job-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: auto;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--gray-100);\n}\n.job-card[_ngcontent-%COMP%]   .job-card-footer[_ngcontent-%COMP%]   .posted-date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--gray-400);\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.75rem;\n  border-radius: var(--radius);\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all var(--transition);\n  text-decoration: none;\n  font-family: var(--font-sans);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--primary);\n  border-color: var(--primary);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n}\n.btn-apply[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border: 2px solid var(--primary);\n  border-radius: var(--radius);\n  padding: 0.55rem 1.35rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all var(--transition);\n  font-family: var(--font-sans);\n}\n.btn-apply[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  border-color: var(--primary-dark);\n  transform: translateY(-1px);\n}\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 1rem 2.25rem;\n  font-size: 1rem;\n}\n.no-jobs[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.no-jobs[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  color: var(--gray-300);\n  margin-bottom: 1.5rem;\n}\n.no-jobs[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--gray-700);\n  margin-bottom: 0.5rem;\n}\n.no-jobs[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n  margin-bottom: 1.5rem;\n}\n.why-join[_ngcontent-%COMP%] {\n}\n.why-join[_ngcontent-%COMP%]   .perks-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 900px) {\n  .why-join[_ngcontent-%COMP%]   .perks-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 500px) {\n  .why-join[_ngcontent-%COMP%]   .perks-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.why-join[_ngcontent-%COMP%]   .perk-card[_ngcontent-%COMP%] {\n  background: var(--gray-50);\n  border-radius: var(--radius-lg);\n  padding: 2rem 1.5rem;\n  border: 1px solid var(--gray-200);\n  transition: all var(--transition);\n}\n.why-join[_ngcontent-%COMP%]   .perk-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-md);\n  background: white;\n}\n.why-join[_ngcontent-%COMP%]   .perk-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--gray-900);\n  margin: 1rem 0 0.5rem;\n}\n.why-join[_ngcontent-%COMP%]   .perk-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-500);\n  line-height: 1.7;\n  margin: 0;\n}\n.why-join[_ngcontent-%COMP%]   .perk-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.why-join[_ngcontent-%COMP%]   .perk-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.why-join[_ngcontent-%COMP%]   .perk-icon.blue[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.why-join[_ngcontent-%COMP%]   .perk-icon.purple[_ngcontent-%COMP%] {\n  background: var(--purple-light);\n  color: var(--purple);\n}\n.why-join[_ngcontent-%COMP%]   .perk-icon.green[_ngcontent-%COMP%] {\n  background: var(--green-light);\n  color: var(--green);\n}\n.why-join[_ngcontent-%COMP%]   .perk-icon.orange[_ngcontent-%COMP%] {\n  background: var(--orange-light);\n  color: var(--orange);\n}\n.why-join[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.why-join[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--primary);\n  background: var(--primary-light);\n  padding: 0.35rem 1rem;\n  border-radius: 50px;\n  margin-bottom: 1rem;\n}\n.why-join[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.75rem, 3vw, 2.5rem);\n  color: var(--gray-900);\n  margin-bottom: 1rem;\n}\n.why-join[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--gray-600);\n  max-width: 580px;\n  margin: 0 auto;\n}\n.general-apply[_ngcontent-%COMP%]   .general-apply-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-xl);\n  padding: 2.5rem 3rem;\n  border: 2px solid var(--primary-light);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n.general-apply[_ngcontent-%COMP%]   .general-apply-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--gray-900);\n  margin-bottom: 0.5rem;\n}\n.general-apply[_ngcontent-%COMP%]   .general-apply-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n  margin: 0;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-xl);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);\n}\n.modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1.75rem 2rem;\n  border-bottom: 1px solid var(--gray-100);\n}\n.modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--gray-900);\n  margin-bottom: 0.25rem;\n}\n.modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--primary);\n  font-weight: 500;\n  margin: 0;\n}\n.modal[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: var(--gray-100);\n  border: none;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background var(--transition);\n}\n.modal[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: var(--gray-600);\n}\n.modal[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--gray-200);\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 500px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  margin-bottom: 1.15rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-700);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid var(--gray-200);\n  border-radius: var(--radius);\n  font-size: 0.9rem;\n  color: var(--gray-800);\n  background: white;\n  transition: border-color var(--transition), box-shadow var(--transition);\n  font-family: var(--font-sans);\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);\n}\n.form-control.invalid[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.1);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #dc2626;\n}\n.form-error[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 0.75rem 1rem;\n  background: #fee2e2;\n  border-radius: var(--radius);\n  border: 1px solid #fecaca;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n}\n.success-box[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n.success-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  color: var(--green);\n  margin-bottom: 1rem;\n}\n.success-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--gray-900);\n  margin-bottom: 0.75rem;\n}\n.success-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n  margin-bottom: 1.5rem;\n  line-height: 1.7;\n  font-size: 0.9rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=jobs.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobsComponent, [{
    type: Component,
    args: [{ selector: "app-jobs", standalone: false, template: `<app-page-banner
  title="Job Openings"
  subtitle="Join our growing team and build a rewarding career with Helpmate Solution."
  breadcrumb="Jobs">
</app-page-banner>

<!-- Filter Bar -->
<section class="filter-section section-sm bg-white">
  <div class="container">
    <div class="filter-bar">
      <div class="filter-info">
        <span class="jobs-count">{{ filteredJobs.length }} Position{{ filteredJobs.length !== 1 ? 's' : '' }} Available</span>
      </div>
      <div class="filter-buttons">
        <button
          *ngFor="let dept of departments"
          class="filter-btn"
          [class.active]="activeFilter === dept"
          (click)="filterByDepartment(dept)">
          {{ dept }}
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Job Listings -->
<section class="jobs-section section-sm bg-gray">
  <div class="container">
    <div class="jobs-grid" *ngIf="filteredJobs.length > 0; else noJobs">
      <div class="job-card" *ngFor="let job of filteredJobs">
        <div class="job-card-header">
          <div class="job-company-badge">
            <div class="company-icon" [style.background]="getDepartmentBg(job.department)" [style.color]="getDepartmentColor(job.department)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </div>
            <div>
              <div class="company-name">{{ job.company }}</div>
              <span class="dept-badge" [style.background]="getDepartmentBg(job.department)" [style.color]="getDepartmentColor(job.department)">
                {{ job.department }}
              </span>
            </div>
          </div>
          <span class="job-type-badge">{{ job.type }}</span>
        </div>

        <h3 class="job-title">{{ job.title }}</h3>

        <div class="job-meta">
          <span class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {{ job.location }}
          </span>
          <span class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            {{ job.experience }}
          </span>
          <span class="meta-item salary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            {{ job.salary }}
          </span>
        </div>

        <p class="job-description">{{ job.description }}</p>

        <div class="job-skills">
          <span class="skill-tag" *ngFor="let skill of job.skills">{{ skill }}</span>
        </div>

        <div class="job-card-footer">
          <span class="posted-date">Posted: {{ job.postedDate | date:'d MMM yyyy' }}</span>
          <button class="btn btn-apply" (click)="openApply(job)">Apply Now</button>
        </div>
      </div>
    </div>
    <ng-template #noJobs>
      <div class="no-jobs">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <h3>No openings in this department right now.</h3>
        <p>Check back soon or view all openings.</p>
        <button class="btn btn-primary" (click)="filterByDepartment('All')">View All Jobs</button>
      </div>
    </ng-template>
  </div>
</section>

<!-- Why Join Us -->
<section class="why-join section bg-white">
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Why Work With Us</span>
      <h2>Build Your Career at Helpmate</h2>
      <p>We believe in nurturing talent and creating an environment where you can thrive and grow.</p>
    </div>
    <div class="perks-grid">
      <div class="perk-card">
        <div class="perk-icon blue">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
            <polyline points="16 7 22 7 22 13"/>
          </svg>
        </div>
        <h4>Career Growth</h4>
        <p>Clear growth paths and promotion opportunities across all departments.</p>
      </div>
      <div class="perk-card">
        <div class="perk-icon purple">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h4>Collaborative Culture</h4>
        <p>Work with a supportive, diverse, and passionate team that celebrates wins together.</p>
      </div>
      <div class="perk-card">
        <div class="perk-icon green">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
          </svg>
        </div>
        <h4>Work-Life Balance</h4>
        <p>We value your time outside work and promote a healthy work-life balance.</p>
      </div>
      <div class="perk-card">
        <div class="perk-icon orange">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </div>
        <h4>Competitive Salary</h4>
        <p>Attractive pay packages with performance incentives and timely appraisals.</p>
      </div>
    </div>
  </div>
</section>

<!-- General Apply CTA -->
<section class="general-apply section-sm bg-gray">
  <div class="container">
    <div class="general-apply-card">
      <div class="general-apply-content">
        <h3>Don't See a Suitable Role?</h3>
        <p>Send your resume to our HR team and we'll keep your profile on file for future openings.</p>
      </div>
      <a href="mailto:helpmatehrsolution@gmail.com?subject=General Job Application" class="btn btn-primary btn-lg">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        Send Resume
      </a>
    </div>
  </div>
</section>

<!-- Apply Modal -->
<div class="modal-overlay" *ngIf="showApplyModal" (click)="closeModal()">
  <div class="modal" (click)="$event.stopPropagation()" role="dialog" aria-modal="true">
    <div class="modal-header">
      <div>
        <h3>Apply for Position</h3>
        <p *ngIf="selectedJob">{{ selectedJob.title }} \u2014 {{ selectedJob.company }}</p>
      </div>
      <button class="modal-close" (click)="closeModal()" aria-label="Close modal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>

    <div class="modal-body">
      <div class="success-box" *ngIf="submitSuccess">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <h4>Application Submitted!</h4>
        <p>Our HR team will contact you soon. You can also email directly at
          <strong *ngIf="selectedJob">{{ selectedJob.applyEmail }}</strong>
        </p>
        <button class="btn btn-primary" (click)="closeModal()">Close</button>
      </div>

      <form [formGroup]="applyForm" (ngSubmit)="onSubmitApplication()" *ngIf="!submitSuccess">
        <div class="form-row">
          <div class="form-group">
            <label>Full Name *</label>
            <input type="text" formControlName="name" class="form-control"
              [class.invalid]="hasError('name', 'required') || hasError('name', 'minlength')"
              placeholder="Your full name">
            <span class="error-msg" *ngIf="hasError('name', 'required')">Name is required.</span>
            <span class="error-msg" *ngIf="hasError('name', 'minlength')">Minimum 2 characters.</span>
          </div>
          <div class="form-group">
            <label>Phone Number *</label>
            <input type="tel" formControlName="phone" class="form-control"
              [class.invalid]="hasError('phone', 'required') || hasError('phone', 'pattern')"
              placeholder="10-digit mobile number">
            <span class="error-msg" *ngIf="hasError('phone', 'required')">Phone is required.</span>
            <span class="error-msg" *ngIf="hasError('phone', 'pattern')">Enter a valid 10-digit number.</span>
          </div>
        </div>
        <div class="form-group">
          <label>Email Address *</label>
          <input type="email" formControlName="email" class="form-control"
            [class.invalid]="hasError('email', 'required') || hasError('email', 'email')"
            placeholder="your@email.com">
          <span class="error-msg" *ngIf="hasError('email', 'required')">Email is required.</span>
          <span class="error-msg" *ngIf="hasError('email', 'email')">Enter a valid email address.</span>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Total Experience *</label>
            <input type="text" formControlName="experience" class="form-control"
              [class.invalid]="hasError('experience', 'required')"
              placeholder="e.g. 2 Years">
            <span class="error-msg" *ngIf="hasError('experience', 'required')">Experience is required.</span>
          </div>
          <div class="form-group">
            <label>Expected CTC *</label>
            <input type="text" formControlName="expectedCTC" class="form-control"
              [class.invalid]="hasError('expectedCTC', 'required')"
              placeholder="e.g. \u20B930,000/month">
            <span class="error-msg" *ngIf="hasError('expectedCTC', 'required')">Expected CTC is required.</span>
          </div>
        </div>
        <div class="form-group">
          <label>Current CTC (Optional)</label>
          <input type="text" formControlName="currentCTC" class="form-control" placeholder="e.g. \u20B920,000/month">
        </div>
        <div class="form-group">
          <label>Cover Letter / Message *</label>
          <textarea formControlName="message" class="form-control"
            [class.invalid]="hasError('message', 'required') || hasError('message', 'minlength')"
            rows="4"
            placeholder="Tell us about yourself and why you're a great fit for this role..."></textarea>
          <span class="error-msg" *ngIf="hasError('message', 'required')">Message is required.</span>
          <span class="error-msg" *ngIf="hasError('message', 'minlength')">Minimum 20 characters.</span>
        </div>
        <div class="error-msg form-error" *ngIf="submitError">{{ submitError }}</div>
        <div class="modal-actions">
          <button type="button" class="btn btn-outline" (click)="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary" [disabled]="isSubmitting">
            <span class="spinner" *ngIf="isSubmitting"></span>
            {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/jobs/jobs.component.scss */\n.bg-white {\n  background: white;\n}\n.bg-gray {\n  background: var(--gray-50);\n}\n.filter-section {\n  border-bottom: 1px solid var(--gray-200);\n}\n.filter-section .filter-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.filter-section .jobs-count {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--gray-700);\n}\n.filter-section .filter-buttons {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.filter-section .filter-btn {\n  padding: 0.45rem 1.1rem;\n  border-radius: 50px;\n  border: 2px solid var(--gray-200);\n  background: white;\n  color: var(--gray-600);\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all var(--transition);\n}\n.filter-section .filter-btn:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.filter-section .filter-btn.active {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n  font-weight: 600;\n}\n.jobs-section .jobs-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 800px) {\n  .jobs-section .jobs-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.job-card {\n  background: white;\n  border-radius: var(--radius-lg);\n  padding: 1.75rem;\n  border: 1px solid var(--gray-200);\n  box-shadow: var(--shadow-sm);\n  transition: all var(--transition);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.job-card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-md);\n  border-color: var(--primary);\n}\n.job-card .job-card-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.job-card .job-company-badge {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.job-card .job-company-badge .company-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.job-card .job-company-badge .company-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.job-card .job-company-badge .company-name {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--gray-700);\n  margin-bottom: 0.25rem;\n}\n.job-card .dept-badge {\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 0.2rem 0.6rem;\n  border-radius: 50px;\n}\n.job-card .job-type-badge {\n  flex-shrink: 0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.3rem 0.75rem;\n  border-radius: 50px;\n  background: var(--green-light);\n  color: var(--green);\n  white-space: nowrap;\n}\n.job-card .job-title {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  line-height: 1.3;\n  margin: 0;\n}\n.job-card .job-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.job-card .meta-item {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.82rem;\n  color: var(--gray-500);\n}\n.job-card .meta-item svg {\n  width: 14px;\n  height: 14px;\n}\n.job-card .meta-item.salary {\n  color: var(--green);\n  font-weight: 600;\n}\n.job-card .job-description {\n  font-size: 0.9rem;\n  color: var(--gray-600);\n  line-height: 1.7;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.job-card .job-skills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.job-card .job-skills .skill-tag {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.7rem;\n  background: var(--gray-100);\n  color: var(--gray-600);\n  border-radius: 50px;\n  font-weight: 500;\n}\n.job-card .job-card-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: auto;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--gray-100);\n}\n.job-card .job-card-footer .posted-date {\n  font-size: 0.78rem;\n  color: var(--gray-400);\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.75rem;\n  border-radius: var(--radius);\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all var(--transition);\n  text-decoration: none;\n  font-family: var(--font-sans);\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n}\n.btn-primary:hover {\n  background: var(--primary-dark);\n}\n.btn-primary:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-outline {\n  background: transparent;\n  color: var(--primary);\n  border-color: var(--primary);\n}\n.btn-outline:hover {\n  background: var(--primary);\n  color: white;\n}\n.btn-apply {\n  background: var(--primary);\n  color: white;\n  border: 2px solid var(--primary);\n  border-radius: var(--radius);\n  padding: 0.55rem 1.35rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all var(--transition);\n  font-family: var(--font-sans);\n}\n.btn-apply:hover {\n  background: var(--primary-dark);\n  border-color: var(--primary-dark);\n  transform: translateY(-1px);\n}\n.btn-lg {\n  padding: 1rem 2.25rem;\n  font-size: 1rem;\n}\n.no-jobs {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.no-jobs svg {\n  width: 60px;\n  height: 60px;\n  color: var(--gray-300);\n  margin-bottom: 1.5rem;\n}\n.no-jobs h3 {\n  font-size: 1.2rem;\n  color: var(--gray-700);\n  margin-bottom: 0.5rem;\n}\n.no-jobs p {\n  color: var(--gray-500);\n  margin-bottom: 1.5rem;\n}\n.why-join {\n}\n.why-join .perks-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 900px) {\n  .why-join .perks-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 500px) {\n  .why-join .perks-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.why-join .perk-card {\n  background: var(--gray-50);\n  border-radius: var(--radius-lg);\n  padding: 2rem 1.5rem;\n  border: 1px solid var(--gray-200);\n  transition: all var(--transition);\n}\n.why-join .perk-card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-md);\n  background: white;\n}\n.why-join .perk-card h4 {\n  font-size: 1rem;\n  color: var(--gray-900);\n  margin: 1rem 0 0.5rem;\n}\n.why-join .perk-card p {\n  font-size: 0.875rem;\n  color: var(--gray-500);\n  line-height: 1.7;\n  margin: 0;\n}\n.why-join .perk-icon {\n  width: 50px;\n  height: 50px;\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.why-join .perk-icon svg {\n  width: 24px;\n  height: 24px;\n}\n.why-join .perk-icon.blue {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.why-join .perk-icon.purple {\n  background: var(--purple-light);\n  color: var(--purple);\n}\n.why-join .perk-icon.green {\n  background: var(--green-light);\n  color: var(--green);\n}\n.why-join .perk-icon.orange {\n  background: var(--orange-light);\n  color: var(--orange);\n}\n.why-join .section-header {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.why-join .section-header .section-badge {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--primary);\n  background: var(--primary-light);\n  padding: 0.35rem 1rem;\n  border-radius: 50px;\n  margin-bottom: 1rem;\n}\n.why-join .section-header h2 {\n  font-size: clamp(1.75rem, 3vw, 2.5rem);\n  color: var(--gray-900);\n  margin-bottom: 1rem;\n}\n.why-join .section-header p {\n  font-size: 1.05rem;\n  color: var(--gray-600);\n  max-width: 580px;\n  margin: 0 auto;\n}\n.general-apply .general-apply-card {\n  background: white;\n  border-radius: var(--radius-xl);\n  padding: 2.5rem 3rem;\n  border: 2px solid var(--primary-light);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n.general-apply .general-apply-card h3 {\n  font-size: 1.3rem;\n  color: var(--gray-900);\n  margin-bottom: 0.5rem;\n}\n.general-apply .general-apply-card p {\n  color: var(--gray-500);\n  margin: 0;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n.modal {\n  background: white;\n  border-radius: var(--radius-xl);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);\n}\n.modal .modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1.75rem 2rem;\n  border-bottom: 1px solid var(--gray-100);\n}\n.modal .modal-header h3 {\n  font-size: 1.25rem;\n  color: var(--gray-900);\n  margin-bottom: 0.25rem;\n}\n.modal .modal-header p {\n  font-size: 0.875rem;\n  color: var(--primary);\n  font-weight: 500;\n  margin: 0;\n}\n.modal .modal-close {\n  background: var(--gray-100);\n  border: none;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background var(--transition);\n}\n.modal .modal-close svg {\n  width: 18px;\n  height: 18px;\n  color: var(--gray-600);\n}\n.modal .modal-close:hover {\n  background: var(--gray-200);\n}\n.modal .modal-body {\n  padding: 2rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 500px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  margin-bottom: 1.15rem;\n}\n.form-group label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-700);\n}\n.form-control {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid var(--gray-200);\n  border-radius: var(--radius);\n  font-size: 0.9rem;\n  color: var(--gray-800);\n  background: white;\n  transition: border-color var(--transition), box-shadow var(--transition);\n  font-family: var(--font-sans);\n  outline: none;\n}\n.form-control:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);\n}\n.form-control.invalid {\n  border-color: #dc2626;\n  box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.1);\n}\ntextarea.form-control {\n  resize: vertical;\n  min-height: 100px;\n}\n.error-msg {\n  font-size: 0.8rem;\n  color: #dc2626;\n}\n.form-error {\n  margin-bottom: 1rem;\n  padding: 0.75rem 1rem;\n  background: #fee2e2;\n  border-radius: var(--radius);\n  border: 1px solid #fecaca;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n}\n.success-box {\n  text-align: center;\n  padding: 2rem;\n}\n.success-box svg {\n  width: 56px;\n  height: 56px;\n  color: var(--green);\n  margin-bottom: 1rem;\n}\n.success-box h4 {\n  font-size: 1.3rem;\n  color: var(--gray-900);\n  margin-bottom: 0.75rem;\n}\n.success-box p {\n  color: var(--gray-500);\n  margin-bottom: 1.5rem;\n  line-height: 1.7;\n  font-size: 0.9rem;\n}\n.spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=jobs.component.css.map */\n"] }]
  }], () => [{ type: JobsService }, { type: ContactService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobsComponent, { className: "JobsComponent", filePath: "src/app/pages/jobs/jobs.component.ts", lineNumber: 14 });
})();

// src/app/pages/jobs/jobs.module.ts
var routes = [{ path: "", component: JobsComponent }];
var JobsModule = class _JobsModule {
  static \u0275fac = function JobsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _JobsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, RouterModule.forChild(routes)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobsModule, [{
    type: NgModule,
    args: [{
      declarations: [JobsComponent],
      imports: [SharedModule, RouterModule.forChild(routes)]
    }]
  }], null, null);
})();
export {
  JobsModule
};
//# sourceMappingURL=chunk-OWX3EDPQ.js.map
