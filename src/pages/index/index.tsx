import type { VFC } from "react";
import { Button } from "src/component/Button";

export const Index: VFC = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <>
      <Button tag="button" className="" onClick={handleClick}>
        Click me!
      </Button>
    </>
  );
};
