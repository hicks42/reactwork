import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import App from "./App";
import Morpion from "./components/Morpion/Morpion";
import BasicApps from "./Basic-exo/BasicsApps";
import DPApp from "./DifficultyPicker/DiffPickApp";
import TvshowApp from "./Tvshow/TvshowApp";
import ExpTrackApp from "./ExpenseTracker/ExpTrackApp";
import CarApp from "./Basic-exo/Car/CarApp";
import { PromesseApp } from "./Basic-exo/Promesse/PromesseApp";
import { TasksApp } from "./Basic-exo/Tasks/TasksApp";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { NoteManagerApp } from "./NoteManager/NoteManagerApp";
import { NoteBrowse } from "./NoteManager/pages/NoteBrowse/NoteBrowse";
import { Note } from "./NoteManager/pages/Note/Note";
import { NoteCreate } from "./NoteManager/pages/NoteCreate/NoteCreate";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/morpion" element={<Morpion />} />
        <Route path="/basicapps" element={<BasicApps />}>
          <Route path="basicapps/promesse" element={<PromesseApp />} />
          <Route path="basicapps/carApp" element={<CarApp />} />
          <Route path="basicapps/taskApp" element={<TasksApp />} />
        </Route>
        <Route path="/dpApp" element={<DPApp />} />
        <Route path="/tvshow" element={<TvshowApp />} />
        <Route path="/expenseTracker" element={<ExpTrackApp />} />
        <Route path="/noteManagerApp" element={<NoteManagerApp />}>
          <Route path="/noteManagerApp" element={<NoteBrowse />} />
          <Route path="/noteManagerApp/note/:id" element={<Note />} />
          <Route path="/noteManagerApp/note/new" element={<NoteCreate />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
