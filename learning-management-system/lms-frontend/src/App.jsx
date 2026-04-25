import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LoginForm as Login } from "@/components/login/login";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Tailwind is running</h1>
      {/* <Button variant="outline" onClick={() => setCount(count + 1)}>
        Count is: {count}
      </Button>
      <Checkbox checked={checked} onCheckedChange={setChecked} />
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>
        <AlertAction>
          <Button variant="outline">Enable</Button>
        </AlertAction>
      </Alert> */}
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <Login />
        </div>
      </div>
    </>
  );
}

export default App;
