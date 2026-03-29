import {
  Injectable,
  delay,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-2VETHU63.js";

// src/app/core/services/contact.service.ts
var ContactService = class _ContactService {
  submitContactForm(form) {
    console.log("Contact form submitted:", form);
    return of({ success: true, message: "Thank you! We will get back to you within 24 hours." }).pipe(delay(1e3));
  }
  submitJobApplication(application) {
    console.log("Job application submitted:", application);
    return of({ success: true, message: "Application submitted successfully! Our HR team will contact you soon." }).pipe(delay(1e3));
  }
  static \u0275fac = function ContactService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContactService, factory: _ContactService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ContactService
};
//# sourceMappingURL=chunk-A5UMQQGO.js.map
