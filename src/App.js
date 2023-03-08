import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";
// slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// photo viewer
import "react-photo-view/dist/react-photo-view.css";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
