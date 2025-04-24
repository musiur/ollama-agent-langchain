import clsx from "clsx";
import { HTMLAttributes } from "react";

const TypographyList = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <ul className={clsx(props.className, "my-6 ml-6 list-disc [&>li]:mt-2")}>
      {props.children || (
        <>
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </>
      )}
    </ul>
  );
};

export default TypographyList;
