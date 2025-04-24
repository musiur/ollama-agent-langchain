/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

type Childs = {
  id: number;
  title: string;
  icon: React.ReactNode;
};

interface ChatActionCommandsHook {
  open: boolean;
  command: "@" | "#" | "";
  actionLists: Childs[];
  promptLists: Childs[];
  selectedActions: Childs[];
  selectedPrompts: Childs[];
}

export const useChatCommands = (
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
) => {
  const [compost, setCompost] = React.useState<ChatActionCommandsHook>({
    open: false,
    command: "",
    actionLists: [
      {
        id: 1,
        title: "Add new event to Calendar",
        icon: <Calendar />,
      },
      {
        id: 2,
        title: "Search on web on BIDA",
        icon: <Smile />,
      },
      {
        id: 3,
        title: "Calculate ROI of Munshi Group",
        icon: <Calculator />,
      },
    ],
    promptLists: [
      {
        id: 1,
        title: "Make a progress report on Chat UI building",
        icon: <User />,
      },
      {
        id: 2,
        title: "Give helpful tips of Credit Cards",
        icon: <CreditCard />,
      },
      {
        id: 3,
        title: "How do I setup my board?",
        icon: <Settings />,
      },
    ],
    selectedActions: [],
    selectedPrompts: [],
  });

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "@" || e.key === "#") {
        e.preventDefault();
        setCompost((prev) => ({
          ...prev,
          open: true,
          command: e.key as "@" | "#",
        }));
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const setDefaults = () => {
    setCompost((prev) => ({
      ...prev,
      open: false,
      command: "",
    }));
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setDefaults();
    }
  };

  const handleCommandClick = (id: number) => {
    if (compost.command === "@") {
      const filteredList = compost.actionLists.filter((item) => item.id !== id);
      const filteredItem = compost.actionLists.filter((item) => item.id === id);

      setCompost((prev) => ({
        ...prev,
        selectedActions: [...prev.selectedActions, ...filteredItem],
        actionLists: filteredList,
        open: false,
        command: "",
      }));
    }
    if (compost.command === "#") {
      const filteredList = compost.promptLists.filter((item) => item.id !== id);
      const filteredItem = compost.promptLists.filter((item) => item.id === id);

      setCompost((prev) => ({
        ...prev,
        selectedPrompts: [...prev.selectedPrompts, ...filteredItem],
        promptLists: filteredList,
        open: false,
        command: "",
      }));
    }
  };

  const handleCommandRemoveClick = (command: "@" | "#", id: number) => {
    if (command === "@") {
      const filteredList = compost.selectedActions.filter(
        (item) => item.id !== id
      );
      const filteredItem = compost.selectedActions.filter(
        (item) => item.id === id
      );

      setCompost((prev) => ({
        ...prev,
        actionLists: [...prev.actionLists, ...filteredItem],
        selectedActions: filteredList,
        open: false,
        command: "",
      }));
    }
    if (command === "#") {
      const filteredList = compost.selectedPrompts.filter(
        (item) => item.id !== id
      );
      const filteredItem = compost.selectedPrompts.filter(
        (item) => item.id === id
      );

      setCompost((prev) => ({
        ...prev,
        promptLists: [...prev.promptLists, ...filteredItem],
        selectedPrompts: filteredList,
        open: false,
        command: "",
      }));
    }
  };

  React.useEffect(() => {
    const context = [...compost.selectedActions, ...compost.selectedPrompts];
    const contextString = context.map((item) => item.title).join(", ");

    handleInputChange({
      target: {
        value: contextString,
      },
    } as React.ChangeEvent<HTMLInputElement>);
    
  }, [compost.selectedActions, compost.selectedPrompts]);

  return {
    compost,
    setCompost,
    handleOpenChange,
    handleCommandClick,
    handleCommandRemoveClick,
  };
};
