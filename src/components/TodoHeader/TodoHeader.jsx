import { Children, cloneElement } from "react";

function TodoHeader({ children, loading }) {
  return (
    <header>
      {Children.toArray(children).map((child) =>
        cloneElement(child, { loading })
      )}
    </header>
  );
}

export { TodoHeader };
