import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { IconArrowUp } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Chat({ onMessageSend }) {
  const [message, setMessage] = useState("");
  function handleSendMessage() {
    // Implement the logic to send the message to the AI and receive a response
    console.log("Message sent!");
    if (onMessageSend) {
      onMessageSend(message);
    }
    setMessage("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }
  return (
    <InputGroup>
      <InputGroupTextarea
        placeholder="Ask, Search or Chat..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <InputGroupAddon align="block-end" className="justify-end">
        {/* <InputGroupText className="ml-auto">52% used</InputGroupText>
        <Separator orientation="vertical" className="h-4!" /> */}
        <InputGroupButton variant="default" className="rounded-full " size="icon-xs" onClick={handleSendMessage}>
          <IconArrowUp />
          <span className="sr-only">Send</span>
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
