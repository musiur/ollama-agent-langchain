import { cn } from "@/lib/utils";
import { SunIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";

export interface DynamicButtonProps {
  pending: boolean;
  text?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
const DynamicSubmit = (props: DynamicButtonProps) => {
  return (
    <Button
      type="submit"
      className={cn(props.className, "w-full")}
      variant={props.variant || "default"}
      onClick={props.onClick}
      disabled={props.pending || props.disabled}
    >
      {!props.pending && props.icon ? props.icon : null}
      {props.pending ? <SunIcon className="w-4 h-4 animate-spin" /> : null}
      {props.pending ? "Submitting..." : props.text || "Submit"}
    </Button>
  );
};

export default DynamicSubmit;
