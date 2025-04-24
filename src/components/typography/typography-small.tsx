import clsx from "clsx";
import { HTMLAttributes } from "react";

const TypographySmall = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <small
      className={clsx(props.className, "text-sm font-medium leading-none")}
    >
      {props.children || "Email address"}
    </small>
  );
};

export default TypographySmall;
