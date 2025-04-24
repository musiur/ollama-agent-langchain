"use client";

import { postRegister } from "@/actions/auth/post-register";
import { DynamicForm } from "@/components/dynamics/d-form";
import { RegistryIcon } from "@/components/assets/registry-icon";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { FacebookIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { startTransition, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormSchema = z
  .object({
    name: z.string().min(1, { message: "Username is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    remember: z.boolean().default(false),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export default function RegisterForm() {
  const [pending, setTransition] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      remember: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setTransition(async () => {
      const result = await postRegister(data);

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
        <Typography.H4>Create an account</Typography.H4>
        <Typography.P>
          If you don&apos;t have an account with ActionBoard.ai, please create one.
        </Typography.P>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <DynamicForm.Input name="name" label="Username" className="w-full" />
          <DynamicForm.Input name="email" label="Email" className="w-full" />
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
          <DynamicForm.Submit pending={pending} text="Register" />
          <Link
            href="/login"
            className="inline-block w-full text-center text-sm text-muted-foreground"
          >
            Already have an account? <strong>Login here!</strong>
          </Link>
        </form>
      </Form>
      <div className="relative">
        <Separator />
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-background px-2 text-sm text-muted-foreground">
          Or continue with
        </div>
      </div>

      <div className="space-y-4">
        <Button variant="outline" className="w-full">
          <FacebookIcon /> Login with Facebook
        </Button>
        <Button variant="outline" className="w-full">
          <GithubIcon /> Login with Github
        </Button>
      </div>
      <p className="text-sm text-muted-foreground [&>a]:underline [&>a]:text-primary text-center">
        By clicking continue, you agree to our&nbsp;
        <Link href="/terms-of-service">Terms of Service</Link> and&nbsp;
        <Link href="/privacy-policy">Privacy Policy</Link>
      </p>
    </div>
  );
}
