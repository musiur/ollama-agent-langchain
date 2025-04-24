import { X } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import clsx from "clsx";
import { useChatCommands } from "@/hooks/use-chat-commands";

interface ChatActionCommandsProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export function ChatActionCommands({
  isLoading = false,
  handleInputChange,
}: ChatActionCommandsProps) {
  const {
    compost,
    handleOpenChange,
    handleCommandClick,
    handleCommandRemoveClick,
  } = useChatCommands(handleInputChange);

  return (
    <>
      <div className="w-full flex flex-wrap items-center gap-1">
        {compost.selectedActions.map((action) => (
          <SelectedItems
            key={action.id}
            data={action}
            command="@"
            handleCommandRemoveClick={handleCommandRemoveClick}
          />
        ))}
        {compost.selectedPrompts.map((prompt) => (
          <SelectedItems
            key={prompt.id}
            data={prompt}
            command="#"
            handleCommandRemoveClick={handleCommandRemoveClick}
          />
        ))}
      </div>
      <CommandDialog
        open={compost.open && !isLoading}
        onOpenChange={handleOpenChange}
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup
            heading="Action lists"
            className={clsx({
              hidden: compost.command !== "@",
            })}
          >
            {compost.actionLists.map((action) => (
              <CommandItem key={action.id}>
                <div
                  className="w-full flex items-center gap-2"
                  onClick={() => {
                    handleCommandClick(action.id);
                  }}
                >
                  {action.icon}
                  <span>{action.title}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup
            heading="Propmt Templates"
            className={clsx({
              hidden: compost.command !== "#",
            })}
          >
            {compost.promptLists.map((prompt) => (
              <CommandItem key={prompt.id}>
                <div
                  className="w-full flex items-center gap-2"
                  onClick={() => {
                    handleCommandClick(prompt.id);
                  }}
                >
                  {prompt.icon}
                  <span>{prompt.title}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export const ChatActionCommandsKBDs = () => {
  return (
    <div className="flex items-center gap-4">
      <p className="text-sm text-muted-foreground">
        Action Lists{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">@</span>
        </kbd>
      </p>
      <p className="text-sm text-muted-foreground">
        Prompts{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">#</span>
        </kbd>
      </p>
    </div>
  );
};

const SelectedItems = ({
  data,
  command,
  handleCommandRemoveClick,
}: {
  data: { id: number; icon: React.ReactNode; title: string };
  command: "@" | "#";
  handleCommandRemoveClick: (command: "@" | "#", id: number) => void;
}) => {
  return (
    <div
      key={data.id}
      className="flex items-center gap-2 text-xs border p-1 px-2 rounded-md [&>svg]:w-4 text-primary/50 hover:border-primary/60"
    >
      {command === "@" ? "Action" : "Prompt"}: {data.icon}{" "}
      <span>{data.title}</span>{" "}
      <span className="pl-2 border-l">
        <X
          className="w-4"
          onClick={() => {
            console.log("Remove");
            handleCommandRemoveClick(command, data.id);
          }}
          role="button"
        />
      </span>
    </div>
  );
};
