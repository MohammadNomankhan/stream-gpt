import { createRoot } from "react-dom/client";
import UnauthenticatedApp from "./UnauthenticatedApp";

const root = createRoot(document.getElementById("root"));
root.render(<UnauthenticatedApp />);
