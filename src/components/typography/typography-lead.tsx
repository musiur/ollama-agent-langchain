import clsx from "clsx";
import { HTMLAttributes } from "react";

const TypographyLead = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <p className={clsx(props.className, "text-xl text-muted-foreground")}>
      {props.children ||
        "A modal dialog that interrupts the user with important content and expects a response."}
    </p>
  );
};

export default TypographyLead;
