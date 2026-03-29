import {
  BrowserModule,
  Component,
  FooterComponent,
  HeaderComponent,
  NgModule,
  RouterModule,
  RouterOutlet,
  SharedModule,
  WhatsappButtonComponent,
  platformBrowser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-2VETHU63.js";

// src/app/app-routing.module.ts
var routes = [
  {
    path: "",
    loadChildren: () => import("./chunk-O7XIPNWO.js").then((m) => m.HomeModule)
  },
  {
    path: "about",
    loadChildren: () => import("./chunk-JBX6AUMX.js").then((m) => m.AboutModule)
  },
  {
    path: "services",
    loadChildren: () => import("./chunk-QUFCVS4H.js").then((m) => m.ServicesPageModule)
  },
  {
    path: "jobs",
    loadChildren: () => import("./chunk-OWX3EDPQ.js").then((m) => m.JobsModule)
  },
  {
    path: "**",
    redirectTo: ""
  }
];
var AppRoutingModule = class _AppRoutingModule {
  static \u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" }), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "helpmate-solution";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: false, decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header");
      \u0275\u0275elementStart(1, "main");
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-footer")(4, "app-whatsapp-button");
    }
  }, dependencies: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappButtonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: false, template: "<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>\n<app-whatsapp-button></app-whatsapp-button>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 9 });
})();

// src/app/app.module.ts
var AppModule = class _AppModule {
  static \u0275fac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppModule, [{
    type: NgModule,
    args: [{
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    }]
  }], null, null);
})();

// src/main.ts
platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
