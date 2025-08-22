import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Signup from "../Pages/Signup";
import { TestSpeed } from "../Pages/Test";
import TypingTeacher from "../Pages/TypingTeacher";
import TypingTech from "../Pages/Typingtech";
import Test from "../Pages/Typingtest";
import Typingtest2 from "../Pages/Typingtest2";
import { TestSpeedHindi as Test2 } from "../Pages/Test2";


function AllRoutes() {
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/typingteacher" element={<TypingTeacher />}></Route>
                <Route path="/testspeed" element={<Test />}></Route>
                <Route path="/testspeed/test" element={<TestSpeed />}></Route>
                <Route path="/testspeed/hindi" element={<Typingtest2 />} />
                <Route path="/test/hindi" element={<Test2 />} />
                <Route path="/techniques" element={<TypingTech />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path='/profile' element={<Profile/>} />
            </Routes>
        </div>
    )
} 
export default AllRoutes;