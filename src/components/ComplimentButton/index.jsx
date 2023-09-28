import { mainContext } from "../../context/MainProvider";
import { useContext } from "react";

const ComplimentButton = () => {
    const {compliments,setCompliments, setCurrentMood} = useContext(mainContext);


    const changeCompliment = () => {
        setCompliments(compliments + 1);

        if (compliments + 1 < 5) {
            setCurrentMood('sad');
        } else if (compliments + 1 <= 9) {
            setCurrentMood('fine');
        } else {
            setCurrentMood('happy');
        }
    }   

    return (
        <div>
            <button onClick={changeCompliment}>
                Increase Compliment
            </button>
            <br />
            Your Compliment Level: {compliments}
        </div>
    )
};

export default ComplimentButton;