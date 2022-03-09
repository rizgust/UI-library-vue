declare module "quark/lang/*" {
  // We know "quark" will exists at runtime, we can safely ignore the TS error
  // @ts-ignore
  import { QuarkLanguage } from "quark";
  const lang: QuarkLanguage;
  export default lang;
}
