import { StringDictionary } from "../ts-helpers";

type QuarkIconSetType = "positive" | "negative" | "info" | "warning";
type QuarkIconSetArrow = "up" | "right" | "down" | "left" | "dropdown";
type QuarkIconSetChevron = "left" | "right";
type QuarkIconSetColorPicker = "spectrum" | "tune" | "palette";
type QuarkIconSetPullToRefresh = "icon";
type QuarkIconSetCarousel = "left" | "right" | "up" | "down" | "navigationIcon";
type QuarkIconSetChip = "remove" | "selected";
type QuarkIconSetDatetime = "arrowLeft" | "arrowRight" | "now" | "today";
type QuarkIconSetEditor =
  | "bold"
  | "italic"
  | "strikethrough"
  | "underline"
  | "unorderedList"
  | "orderedList"
  | "subscript"
  | "superscript"
  | "hyperlink"
  | "toggleFullscreen"
  | "quote"
  | "left"
  | "center"
  | "right"
  | "justify"
  | "print"
  | "outdent"
  | "indent"
  | "removeFormat"
  | "formatting"
  | "fontSize"
  | "align"
  | "hr"
  | "undo"
  | "redo"
  | "heading"
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "code"
  | "size"
  | "size1"
  | "size2"
  | "size3"
  | "size4"
  | "size5"
  | "size6"
  | "size7"
  | "font"
  | "viewSource";
type QuarkIconSetExpansionItem = "icon" | "denseIcon";
type QuarkIconSetFab = "icon" | "activeIcon";
type QuarkIconSetField = "clear" | "error";
type QuarkIconSetPagination = "first" | "prev" | "next" | "last";
type QuarkIconSetRating = "icon";
type QuarkIconSetStepper = "done" | "active" | "error";
type QuarkIconSetTabs = "left" | "right" | "up" | "down";
type QuarkIconSetTable = "arrowUp" | "warning" | "firstPage" | "prevPage" | "nextPage" | "lastPage";
type QuarkIconSetTree = "icon";
type QuarkIconSetUploader =
  | "done"
  | "clear"
  | "add"
  | "upload"
  | "removeQueue"
  | "removeUploaded";

export interface QuarkIconSet {
  name: string;
  type: StringDictionary<QuarkIconSetType>;
  arrow: StringDictionary<QuarkIconSetArrow>;
  chevron: StringDictionary<QuarkIconSetChevron>;
  colorPicker: StringDictionary<QuarkIconSetColorPicker>;
  pullToRefresh: StringDictionary<QuarkIconSetPullToRefresh>;
  carousel: StringDictionary<QuarkIconSetCarousel>;
  chip: StringDictionary<QuarkIconSetChip>;
  datetime: StringDictionary<QuarkIconSetDatetime>;
  editor: StringDictionary<QuarkIconSetEditor>;
  expansionItem: StringDictionary<QuarkIconSetExpansionItem>;
  fab: StringDictionary<QuarkIconSetFab>;
  field: StringDictionary<QuarkIconSetField>;
  pagination: StringDictionary<QuarkIconSetPagination>;
  rating: StringDictionary<QuarkIconSetRating>;
  stepper: StringDictionary<QuarkIconSetStepper>;
  tabs: StringDictionary<QuarkIconSetTabs>;
  table: StringDictionary<QuarkIconSetTable>;
  tree: StringDictionary<QuarkIconSetTree>;
  uploader: StringDictionary<QuarkIconSetUploader>;
}

export type QuarkIconSets =
  | "material-icons"
  | "svg-material-icons"
  | "material-icons-outlined"
  | "svg-material-icons-outlined"
  | "material-icons-round"
  | "svg-material-icons-round"
  | "material-icons-sharp"
  | "svg-material-icons-sharp"
  | "mdi-v6"
  | "svg-mdi-v6"
  | "mdi-v5"
  | "svg-mdi-v5"
  | "mdi-v4"
  | "svg-mdi-v4"
  | "mdi-v3"
  | "fontawesome-v5"
  | "fontawesome-v5-pro"
  | "svg-fontawesome-v5"
  | "svg-ionicons-v6"
  | "svg-ionicons-v5"
  | "ionicons-v4"
  | "svg-ionicons-v4"
  | "eva-icons"
  | "svg-eva-icons"
  | "themify"
  | "svg-themify"
  | "line-awesome"
  | "svg-line-awesome"
  | "bootstrap-icons"
  | "svg-bootstrap-icons";
