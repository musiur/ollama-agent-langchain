import clsx from "clsx";
import { HTMLAttributes } from "react";

const TypographyH3 = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <h3
      className={clsx(
        props.className,
        "scroll-m-20 text-2xl font-semibold tracking-tight light-up"
      )}
    >
      {props.children}
    </h3>
  );
};

export default TypographyH3;
