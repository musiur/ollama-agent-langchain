import clsx from "clsx";
import { HTMLAttributes } from "react";

const TypographyP = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <p className={clsx(props.className, "leading-7")}>
      {props.children ||
        "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax."}
    </p>
  );
};

export default TypographyP;
