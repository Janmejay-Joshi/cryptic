import React from "react";
import QuestionCarousel from "../components/QuestionCarousel";
import Meta from "../components/Meta";

const HomeScreen = ({ match }) => {
    return (
        <>
            <Meta />
            <QuestionCarousel />
        </>
    );
};

export default HomeScreen;
