import { QuarkIconSet } from "./extras";
import { QuarkLanguage } from "./lang";

// These interfaces are used as forward-references
//  filled at build-time via TS interface mergin capabilities
export interface QuarkComponents {}
export interface QuarkDirectives {}
export interface QuarkPlugins {}

export interface QuarkPluginOptions {
  lang: QuarkLanguage;
  config: any;
  iconSet: QuarkIconSet;
  components: QuarkComponents;
  directives: QuarkDirectives;
  plugins: QuarkPlugins;
}
