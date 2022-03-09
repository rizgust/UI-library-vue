declare module "quark/icon-set/*" {
  // We know "quark" will exists at runtime, we can safely ignore the TS error
  // @ts-ignore
  import { QuarkIconSet } from "quark";
  const iconSet: QuarkIconSet;
  export default iconSet;
}
