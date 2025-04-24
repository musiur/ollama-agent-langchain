import clsx from "clsx";
import { HTMLAttributes } from "react";

const TypographyH2 = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <h2
      className={clsx(
        props.className,
        "scroll-m-20 text-3xl font-semibold tracking-tight light-up"
      )}
    >
      {props.children || "The People of the Kingdom"}
    </h2>
  );
};

export default TypographyH2;
