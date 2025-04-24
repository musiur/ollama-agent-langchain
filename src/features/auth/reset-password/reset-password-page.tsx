import { Container } from "@/components/layouts/container";
import { Section } from "@/components/layouts/section";
import ForgetPasswordForm from "./reset-password-form";

export default function ResetPasswordPage() {
  return (
    <Section>
      <Container>
        <ForgetPasswordForm />
      </Container>
    </Section>
  );
}
