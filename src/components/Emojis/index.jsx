import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import './index.css'

const Emojis = () => {
    const {currentMood} = useContext(mainContext);
    let emoji = '';

    switch(currentMood){
        case 'happy':
            emoji = '😃';
            break;
        case 'fine':
            emoji = '🫤';
            break;
        case 'sad':
            emoji = '😭';
            break;
        default:
            emoji = '🫣'
    }

    return <div className="emoji">{emoji}</div>
};

export default Emojis;