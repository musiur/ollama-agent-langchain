"use client";

import { postVerifyCode } from "@/actions/auth/post-verify-code";
import { DynamicForm } from "@/components/dynamics/d-form";
import { RegistryIcon } from "@/components/assets/registry-icon";
import { Typography } from "@/components/typography";
import { Form, FormField } from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { redirect } from "next/navigation";
import { startTransition, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import VerificationResendTimer from "./verification-resend-timer";

const FormSchema = z.object({
  otp: z.string().min(6, { message: "Invalid OTP" }),
});

export default function VerifyCodeForm() {
  const [pending = false, setTransition] = useTransition();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setTransition(async () => {
      const result = await postVerifyCode(data.otp);

      startTransition(() => {
        if (result.success) {
          toast.success(result.message);
          redirect(result.toRedirectPath || "/login");
        } else {
          toast.error(result.message);
        }
      });
    });
  }

  const handleResend = async () => {
    form.reset();
  };

  return (
    <div className="max-w-sm mx-auto space-y-10">
      <Link
        href="/"
        className="inline-flex w-full justify-center items-center gap-2 text-primary font-semibold"
      >
        <RegistryIcon className="w-8 h-8" /> KB Registry
      </Link>

      <div className="[&>*]:text-center">
        <Typography.H4>Verify Your Account</Typography.H4>
        <Typography.P>
          We&apos;ve sent a verification code to your email address. Please
          enter the code below to verify your account.
        </Typography.P>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center gap-4"
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <InputOTP maxLength={6} {...field}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator className="text-border" />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            )}
          />
          <DynamicForm.Submit pending={pending} text="Verify" disabled={pending} />
        </form>
      </Form>
      <VerificationResendTimer onResend={handleResend} />
      <Separator />
      <p className="text-sm text-muted-foreground [&>a]:underline [&>a]:text-white/80 text-center">
        Read more about our&nbsp;
        <Link href="/terms-of-service">Terms of Service</Link> and&nbsp;
        <Link href="/privacy-policy">Privacy Policy</Link>
      </p>
    </div>
  );
}
