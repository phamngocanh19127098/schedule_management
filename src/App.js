
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AllMeetUp from './pages/AllMeetups'
import NewMeetup from './pages/NewMeetup'
import Favorite from './pages/Favorites'
import Layout from "./components/layout/Layout";
const app = function App() {
  return (
      <Layout>
      <Routes>
      <Route path="/" exact element={<AllMeetUp/>} />
        <Route path='/new-meetup' element={<NewMeetup/>}></Route>
        <Route path='/favorite' element={<Favorite/>}></Route>
      </Routes>
      </Layout>
 
  );
}


export default app;