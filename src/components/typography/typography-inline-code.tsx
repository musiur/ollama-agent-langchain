import clsx from "clsx";
import { HTMLAttributes } from "react";

const TypographyInlineCode = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <code
      className={clsx(
        props.className,
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      )}
    >
      {props.children || "@radix-ui/react-alert-dialog"}
    </code>
  );
};

export default TypographyInlineCode;
