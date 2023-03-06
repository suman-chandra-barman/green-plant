import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";
// slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
