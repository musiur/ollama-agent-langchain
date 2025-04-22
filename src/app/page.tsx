import Layout from "@/components/layouts";
import { Chat } from "@/features/chat";
import { Suspense } from "react";

export default function Home() {
  return (
    <Layout.Container>
      <Layout.Section className="py-4 flex flex-col">
        <Suspense fallback={<div>Loading...</div>}>
          <Chat.Root />
        </Suspense>
      </Layout.Section>
    </Layout.Container>
  );
}
