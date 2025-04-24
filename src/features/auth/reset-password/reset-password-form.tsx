"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { postResetPassword } from "@/actions/auth/post-reset-password";
import { DynamicForm } from "@/components/dynamics/d-form";
import { RegistryIcon } from "@/components/assets/registry-icon";
import { Typography } from "@/components/typography";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { redirect } from "next/navigation";
import { startTransition, useTransition } from "react";
import { toast } from "sonner";

const FormSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export default function ResetPasswordForm() {
  const [pending, setTransition] = useTransition();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    setTransition(async () => {
      const result = await postResetPassword();

      startTransition(() => {
        if (result.success) {
          toast.success(result.message);
          redirect("/login");
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
        <Typography.H4>Reset Your Password</Typography.H4>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <DynamicForm.Input
            name="password"
            label="Password"
            type="password"
            className="w-full"
          />
          <DynamicForm.Input
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            className="w-full"
          />
          <DynamicForm.Submit
            pending={pending}
            text="Reset Password"
            disabled={pending}
          />
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
