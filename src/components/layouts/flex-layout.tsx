import clsx from "clsx";
import { HTMLAttributes } from "react";
const Flex = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={clsx(props.className, "flex gap-4")}>
      {props.children}
    </div>
  );
};

export default Flex;
