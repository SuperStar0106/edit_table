import React from "react";

import { HomeViewStyle } from "./index.style";

type HomeViewProps = {

};

export const HomeView: React.FC<HomeViewProps> = (props) => {
    return <HomeViewStyle><h1>Home</h1></HomeViewStyle>
}