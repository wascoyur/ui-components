import './App.css'

import {RouterProvider} from "react-router-dom";
import router from "./routes/RootRoute.tsx";

function App() {



  return (
      <RouterProvider router={router}/>
  )
}

export default App
