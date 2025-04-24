import { Container } from "@/components/layouts/container";
import LoginForm from "./login-form";
import { Section } from "@/components/layouts/section";

export default function LoginPage() {
  return (
    <Section>
      <Container>
        <LoginForm />
      </Container>
    </Section>
  );
}
