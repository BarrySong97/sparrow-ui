import type { Component } from "solid-js";
import Button from "./Button";

const App: Component = () => {
  return (
    <p class="text-4xl text-green-700 text-center py-20">
      <Button
        onclick={() => {
          console.log(123);
        }}
        type="primary"
        class="mr-2"
      >
        primary
      </Button>
      <Button type="secondary" class="mr-2">
        secondary
      </Button>
      <Button type="warning" class="mr-2">
        warning
      </Button>
      <Button type="danger" class="mr-2">
        danger
      </Button>
    </p>
  );
};

export default App;
