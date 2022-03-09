import { QuarkIconSet } from "./extras/icon-set";
import { HasCapacitor, HasCordova, HasSsr, HasBex } from "./feature-flag";
import { QuarkLanguage } from "./lang";

// We cannot reference directly Capacitor/Cordova types
//  or they would generate TS errors for Vue CLI users
// We also cannot move feature-flags system into `@quark/app`
//  because `QVueGlobals` augmentations won't be transferred to
//  the `vue/types/vue` augmentation for unknown reason (probably TS limitations)
//  and the system will just stop working
// To workaround these problems we define an empty holder interface
//  and augment it into `@quark/app` with current typings
export interface GlobalsTypesHolder {
  [index: string]: any;
}

export interface GlobalQuarkLanguage extends QuarkLanguage {
  set(lang: QuarkLanguage): void;
  /** Returns undefined when in SSR mode or when it cannot determine current language. */
  getLocale(): string | undefined;
}

export interface GlobalQuarkLanguageSingleton
  extends QuarkLanguage,
    HasSsr<
      { set(lang: QuarkLanguage, ssrContext: any): void },
      { set(lang: QuarkLanguage): void }
    > {
  /** Returns undefined when in SSR mode or when it cannot determine current language. */
  getLocale(): string | undefined;
}

export interface GlobalQuarkIconSet extends QuarkIconSet {
  set(iconSet: QuarkIconSet): void;
}

export interface GlobalQuarkIconSetSingleton
  extends QuarkIconSet,
    HasSsr<
      // QSsrContext interface depends on q/app, making it available into UI package adds complexity without any real benefit
      { set(iconSet: QuarkIconSet, ssrContext: any): void },
      { set(iconSet: QuarkIconSet): void }
    > {}

type GlobalQuarkIconMapFn = (
  iconName: string
) => { icon: string } | { cls: string; content?: string } | void;

export interface BaseQGlobals {
  version: string;
  lang: GlobalQuarkLanguage;
  iconSet: GlobalQuarkIconSet;
}

export interface QSingletonGlobals {
  version: string;
  lang: GlobalQuarkLanguageSingleton;
  iconSet: GlobalQuarkIconSetSingleton;
}

export interface QVueGlobals
  extends HasCapacitor<{ capacitor: any }>,
    HasBex<{ bex: GlobalsTypesHolder["bex"] }>,
    HasCordova<{ cordova: GlobalsTypesHolder["cordova"] }>,
    HasSsr<
      { iconMapFn?: GlobalQuarkIconMapFn; onSSRHydrated?: () => void },
      { iconMapFn: GlobalQuarkIconMapFn }
    >,
    BaseQGlobals {}
