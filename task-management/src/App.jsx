import {Route, Routes } from "react";
import TaskList from "./components/TaskList.jsx";


function App() {


   return (
       <>
        <Routes>
            <Route path="/tasklist" element={<TaskList/>} />
        </Routes>
       </>
   );
}

export default App;

