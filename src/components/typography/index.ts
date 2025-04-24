import { HTMLAttributes } from "react";
import { default as H1 } from "./typography-h1";
import { default as H2 } from "./typography-h2";
import { default as H3 } from "./typography-h3";
import { default as H4 } from "./typography-h4";
import { default as InlineCode } from "./typography-inline-code";
import { default as Large } from "./typography-large";
import { default as Lead } from "./typography-lead";
import { default as List } from "./typography-list";
import { default as Muted } from "./typography-muted";
import { default as P } from "./typography-p";
import { default as Small } from "./typography-small";

export const Typography: Record<
  string,
  React.FC<HTMLAttributes<HTMLDivElement>>
> = {
  H1,
  H2,
  H3,
  H4,
  P,
  Lead,
  List,
  Muted,
  Small,
  InlineCode,
  Large,
};
