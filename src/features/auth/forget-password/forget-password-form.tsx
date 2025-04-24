"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { postForgetPassword } from "@/actions/auth/post-forget-password";
import { DynamicForm } from "@/components/dynamics/d-form";
import { Typography } from "@/components/typography";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { redirect } from "next/navigation";
import { startTransition, useTransition } from "react";
import { toast } from "sonner";
import { RegistryIcon } from "@/components/assets/registry-icon";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export default function ForgetPasswordForm() {
  const [pending, setTransition] = useTransition();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setTransition(async () => {
      const result = await postForgetPassword(data);

      startTransition(() => {
        if (result.success) {
          toast.success(result.message);
          redirect("/verify-code");
        } else {
          toast.error(result.message);
        }
      });
    });
  }
  return (
    <div className="max-w-sm mx-auto space-y-10">
      <Link
        href="/"
        className="inline-flex w-full justify-center items-center gap-2 text-primary font-semibold"
      >
        <RegistryIcon className="w-8 h-8" /> KB Registry
      </Link>

      <div className="[&>*]:text-center">
        <Typography.H4>Welcome back</Typography.H4>
        <Typography.P>Login to your account to continue</Typography.P>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <DynamicForm.Input name="email" label="Email" className="w-full" />
          <DynamicForm.Submit pending={pending} text="Get Verification Code" />
          <Link
            href="/register"
            className="inline-block w-full text-center text-sm text-muted-foreground"
          >
            Don&apos;t have an account? <strong>Register here!</strong>
          </Link>
        </form>
      </Form>
      <Separator />

      <p className="text-sm text-muted-foreground [&>a]:underline [&>a]:text-white/80 text-center">
        Read more about our&nbsp;
        <Link href="/terms-of-service">Terms of Service</Link> and&nbsp;
        <Link href="/privacy-policy">Privacy Policy</Link>
      </p>
    </div>
  );
}
