import clsx from "clsx";
import { HTMLAttributes } from "react";

const TypographyH1 = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <h1
      className={clsx(
        props.className,
        "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl light-up"
      )}
    >
      {props.children || "Taxing Laughter: The Joke Tax Chronicles"}
    </h1>
  );
};

export default TypographyH1;
