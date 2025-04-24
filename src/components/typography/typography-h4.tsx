import clsx from "clsx";
import { HTMLAttributes } from "react";

const TypographyH4 = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <h4
      className={clsx(
        props.className,
        "scroll-m-20 text-xl font-semibold tracking-tight light-up"
      )}
    >
      {props.children}
    </h4>
  );
};

export default TypographyH4;
