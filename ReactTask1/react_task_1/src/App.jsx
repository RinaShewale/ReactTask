import React, { use } from 'react';
import { createBrowserRouter, Routes, Route, useParams, RouterProvider } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Mainpage from './components/Mainpage';
import About from './components/Pages/About';
import Coaches from './components/Pages/Coaches';
import Epage from './components/Pages/Epage';
import Contact from './components/Contact';
import Notfound from './components/Pages/Notfound';
import Service from './components/Pages/Service';
import Personaltrain from './components/Pages/Personaltrain';
import Fitness from './components/Pages/Fitness';
import ConditioningPro from './components/Pages/ConditioningPro';
import Guide from './components/Pages/Guide';
import Onlinecouch from './components/Pages/Onlinecouch';



function App() {
  const { serviceId } = useParams();


  const isnotfound = !["/", "/about", "/coaches", "/events", "/contact", "/service"].includes(location.pathname);




 {/* create-browser-router */}
    // const router = createBrowserRouter([
    //   {
    //     path: "/",
    //   element: <Mainpage />,
    //   },
    //   {
    //     path: "/about",
    //   element: <About />,
    //    },
    //   {
    //     path: "/coaches",
    //   element: <Coaches />,   
    //   },
    //   {
    //     path: "/events",
    //   element: <Epage />,   
    //    },
    //    {
    //     path: "/service",
    //     element: <Service />,
    //     children: [
    //       { path: "personaltrainee", element: <Personaltrain /> },
    //       { path: "fitnessclasses", element: <Fitness /> },
    //       { path: "conditioningprograms", element: <ConditioningPro /> },
    //       { path: "nutritionguide", element: <Guide /> },
    //       { path: "onlinecoaching", element: <Onlinecouch /> },
    //     ],
    //   },
    //   {
    //     path: "/contact",
    //   element: <Contact />,   
    //  }

    //   ])

  return (
    <main>
      {!isnotfound && <Nav />}


      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/events" element={<Epage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />



      {/* Dynamic Route
      <Route path="/service/:serviceId" element={<Service serviceId={serviceId} />} /> */}


      <Route path="/service/personaltrainee" element={<Personaltrain />} />
        <Route path="/service/fitnessclasses" element={<Fitness />} />
        <Route path="/service/conditioningprograms" element={<ConditioningPro />} />
        <Route path="/service/nutritionguide" element={<Guide />} />
        <Route path="/service/onlinecoaching" element={<Onlinecouch />} />


      {/* <Route path="/service" element={<Service />} >

          <Route path="/service/personaltrainee" element={<Personaltrain />} />
          <Route path="/service/fitnessclasses" element={<Fitness />} />
          <Route path="/service/conditioningprograms" element={<ConditioningPro />} />
          <Route path="/service/nutritionguide" element={<Guide />} />
          <Route path="/service/onlinecoaching" element={<Onlinecouch />} />
        </Route>
 */}






      {/* not found page */} 

     <Route path="*" element={<Notfound />} />
      </Routes>




     



      {/* <RouterProvider router={router} /> */}


    </main>
  );
}

export default App;
