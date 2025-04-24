"use client";

import { z } from "zod";
import Link from "next/link";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/typography";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { postLogin } from "@/actions/auth/post-login";
import { startTransition, useTransition } from "react";
import { FacebookIcon, GithubIcon } from "lucide-react";
import { DynamicForm } from "@/components/dynamics/d-form";
import { useAuth } from "@/providers/context/auth-context";
import { RegistryIcon } from "@/components/assets/registry-icon";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  remember: z.boolean().default(false),
});

type SchemaLoginForm = z.infer<typeof FormSchema>;

export default function LoginForm() {
  const { setUser } = useAuth();
  const [pending, setTransition] = useTransition();

  const form = useForm<SchemaLoginForm>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  function onSubmit(data: SchemaLoginForm) {
    setTransition(async () => {
      const result = await postLogin(data);

      startTransition(() => {
        if (result.success) {
          setUser({
            email: data.email,
            name: "John Doe",
            role: "user",
            id: "asdf-asdf-aadsf-asdf",
          });
          toast.success(result.message);
          redirect("/dashboard");
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
          <DynamicForm.Input
            name="password"
            label="Password"
            type="password"
            className="w-full"
          />
          <div className="flex justify-between items-center">
            <DynamicForm.Checkbox name="remember" label="Remember me" />
            <Link
              href="/forget-password"
              className="inline-block text-sm text-muted-foreground"
            >
              Forgot password?
            </Link>
          </div>
          <DynamicForm.Submit
            pending={pending}
            text={"Login"}
          />
          <Link
            href="/register"
            className="inline-block w-full text-center text-sm text-muted-foreground"
          >
            Don&apos;t have an account? <strong>Register here!</strong>
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
    </div>
  );
}
