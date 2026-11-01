import react from "react";
import Hero from "./components/Hero.jsx";

function Home(props) {
    return (
        <Hero
            title={props.title}
            subtitle={props.subtitle}
            buttonText={props.buttonText}
            imageUrl={props.imageUrl}
            onActionClick={props.onActionClick}
        />
    );
}

export default Home;
