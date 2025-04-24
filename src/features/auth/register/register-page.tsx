import {Container} from "@/components/layouts/container";
import {Section} from "@/components/layouts/section";
import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <Section>
      <Container>
        <RegisterForm />
      </Container>
    </Section>
  );
}
