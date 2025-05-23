import Layout from "@/components/layouts";
import { Chat } from "@/features/chat";
import { Suspense } from "react";

export default function Home() {
  return (
    <Layout.Container>
      <Layout.Section className="py-4 flex flex-col min-h-[70dvh] items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <Chat.Root />
        </Suspense>
      </Layout.Section>
    </Layout.Container>
  );
}
