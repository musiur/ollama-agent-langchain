import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DynamicTabs = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Collections</TabsTrigger>
        <TabsTrigger value="password">Knowledge Base</TabsTrigger>
      </TabsList>
      <TabsContent value="account">No collection found!</TabsContent>
      <TabsContent value="password">No knowledge base found!</TabsContent>
    </Tabs>
  );
};

export default DynamicTabs;
