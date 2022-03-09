// Error on "quark" import shown in IDE is normal, as we only have Components/Directives/Plugins types after the build step
// The import will work correctly at runtime
import { QTable } from "quark";

export type QTableColumn<
  Row extends Record<string, any> = any,
  K = Row extends Record<string, any> ? keyof Row : string,
  Field = K | ((row: Row) => any)
> = Omit<NonNullable<QTable["columns"]>[0], "field" | "format"> & {
  field: Field;
  format?: (val: any, row: Row) => string;
};
