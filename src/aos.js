import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function Aos () {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return null;
}

export default Aos;