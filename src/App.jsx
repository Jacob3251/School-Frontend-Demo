import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";
import ErrorElement from "./components/ErrorElement/ErrorElement";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout></DefaultLayout>,
      errorElement: <ErrorElement></ErrorElement>
    }
  ]);
  return <RouterProvider router={router}></RouterProvider>
}

export default App
