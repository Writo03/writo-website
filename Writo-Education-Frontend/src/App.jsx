import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Choose from './Choose';
import Privacy from './Components/Privacy';
import './App.css';
import TermandConditions from './Components/TermandConditions';
import Faq from './Components/Faq';
import Community from './Components/Community';
import Menotor_home1 from './Components/Mentor_home1';
import Services1 from './Components/Services1';
import ChatwithMentor from './Components/ChatwithMentor';
import Community_neet from './Components/Community_neet';
import Blogs from '../Mentor/base/src/Components/Blogs';
import VideoPage from "./Pages/videopage/videopage";
import Waits from "./Pages/waits/waits";
import JeePrice from "./Pages/jee price/jee_price";
import NeetPrice from "./Pages/neet price/neet_price";
import Class6befpay from "./Pages/class6-beforepay/class6_beforepay";
import AllCoursesPage from "./Components/CourdsesPages/CoursesPages";
import Class6 from "./Components/classes/class-6/class6";
import Class7 from "./Components/classes/class-7/class7";
import Class8 from "./Components/classes/class-8/class8";
import Class9 from "./Components/classes/class-9/class9";
import Class10 from "./Components/classes/class-10/class10";
import Class11 from "./Components/classes/class-11/class11";
import Class12 from "./Components/classes/class-12/class12";
import NEET from "./Components/classes/NeetCourses/NeetCourses";
import JEE from "./Components/classes/JEECourses/JeeCourses";
{/* class page before pay */}
import Class7befpay from "./Pages/class7-beforepay/class7_beforepay"
import Class8befpay from "./Pages/class8-beforepay/class8_beforepay";
import Class9befpay from "./Pages/class9-beforepay/class9_beforepay";
import Class10befpay from "./Pages/class10-beforepay/class10_beforepay";
import NeetTestSeries from "./Pages/Neet_Test_Series/NeettestSeries";
import JeeTestSeries from "./Pages/Jeet_Test_Series/JeetestSeries";
import AboutJeeCommunity from "./Pages/about-jee-community/about_jee_community";



{/*All india test series */}
import NeetAllIndiaTestseries from "./Pages/NeetAllIndiaTestSeries/NeetAllIndiaTestseries";
import JeeAllIndiaTestSeries from "./Pages/JeeAllIndiaTestSeries/JeeAllIndiaTestSeries";
const App = () => {
    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/mentor/home' element={<Menotor_home1 />} />
          <Route path="/mentor/services" element={<Services1/>}></Route>
          <Route path='/why_writo' element={<Choose />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<TermandConditions />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/community' element={<Community/>}/>
          <Route path='/community/neet'   element={<Community_neet/>}/>
          <Route path="/mentor/questions" element={<ChatwithMentor/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/all" element={<AllCoursesPage />} />
          <Route path="/class-6" element={<Class6 />} />
          {/*<Route path="/class-6/maths" element={<Maths />} />*/}
          <Route path="/class-6/beforepay" element={<Class6befpay />} />
          <Route path="/class-7/beforepay" element={<Class7befpay />} />
          <Route path="/class-8/beforepay" element={<Class8befpay />} />
          <Route path="/class-9/beforepay" element={<Class9befpay />} />
          <Route path="/class-10/beforepay" element={<Class10befpay />} />

          {/*neet and jee test series */}
          <Route path="/jee-test-series" element={<JeeTestSeries />} />
          <Route path="/neet-test-series" element={<NeetTestSeries />} />
          {/*<Route path="/class-6/chemistry" element={<Chemistry />} />*/}
          <Route path="/class-7" element={<Class7 />} />
          <Route path="/class-8" element={<Class8 />} />
          <Route path="/class-9" element={<Class9 />} />
          <Route path="/class-10" element={<Class10 />} />
          <Route path="/class-11" element={<Class11 />} />
          <Route path="/class-12" element={<Class12 />} />
          <Route path="/neet-courses" element={<NEET />} />
          <Route path="/jee-courses" element={<JEE />} />
          
          <Route path="/class-6/physics/video" element={<VideoPage />} />
          <Route path="/waits" element={< Waits/>} />
          <Route path="/neet-price" element={< NeetPrice/>} />
          {/* <Route path="/mains+advance" element={< JEEMainsAndAdvance/>} />*/}
          <Route path="/jee-price" element={< JeePrice/>} />
          <Route path="/about-jee-community" element={< AboutJeeCommunity/>} />
          <Route path="/neet-all-india-test-series" element={< NeetAllIndiaTestseries/>} />
          <Route path="/jee-all-india-test-series" element={< JeeAllIndiaTestSeries/>} />

        </Routes>
    );
};

export default App;
