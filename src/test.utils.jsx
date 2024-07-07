import { render } from "@testing-library/react";
import AppProvider from "./providers/AppProvider";

const customRender = (ui, options) =>
  render(ui, { wrapper: AppProvider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
