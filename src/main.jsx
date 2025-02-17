import { createRoot } from "react-dom/client";
import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";

const root = createRoot(document.getElementById("root"));
// root.render(<UnauthenticatedApp />);
root.render(<AuthenticatedApp />);
