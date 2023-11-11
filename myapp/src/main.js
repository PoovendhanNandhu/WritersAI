import React from "react";
import AnimatedHeader from "./Animatedbanner";
import AnimatedButton from "./Animatedbutton";
import NavigationBar from "./NavigationBar";

const Main = () => {
    return(
        <div>
            <NavigationBar/>
            <AnimatedHeader/>
            <AnimatedButton/>
        </div>
    );
}
export default Main;