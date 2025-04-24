import { Container } from "@/components/layouts/container";
import { Section } from "@/components/layouts/section";
import VerifyCodeForm from "./verify-code-form";

export default function VerifyCodePage() {
  return (
    <Section>
      <Container>
        <VerifyCodeForm />
      </Container>
    </Section>
  );
}
