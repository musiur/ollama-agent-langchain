import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type DynamicSheetProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
};

const DynamicSheet = ({
  title,
  description,
  trigger,
  footer,
  className,
  children,
}: DynamicSheetProps) => {
  return (
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger asChild>{trigger}</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            {description ? (
              <SheetDescription>{description}</SheetDescription>
            ) : null}
          </SheetHeader>
          {children}
          {footer ? <SheetFooter>{footer}</SheetFooter> : null}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export const DynamicSheetClose = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <SheetClose asChild>{children}</SheetClose>;
};

export default DynamicSheet;
