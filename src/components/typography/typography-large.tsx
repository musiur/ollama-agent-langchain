import clsx from "clsx";
import { HTMLAttributes } from "react";

const TypographyLarge = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx(props.className, "text-lg font-semibold")}>
      {props.children || "Are you absolutely sure?"}
    </div>
  );
};

export default TypographyLarge;
