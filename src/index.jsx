import { createRoot } from "react-dom/client";

// import statement to indicate that you need to bunndle ./index.scss
import "./index.scss";

// Main component
const MyFlixApplication = () => {
  return(
    <div className="my-flix">
      <div>Good morning</div>
    </div>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your ap in the root DOM element
root.render(<MyFlixApplication />);