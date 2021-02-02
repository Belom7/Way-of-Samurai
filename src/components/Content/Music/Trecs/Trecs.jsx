import React from 'react-router-dom';
import Classes from './Trecs.module.css';

function Trecs() {
    return(
        <div className={Classes.trecs}>
            <p>Пьяную домой.mp3</p>
            <p>Не заплачу и не закричу.mp3</p>
            <p>Mutter.mp3</p>
            <p>В доме лесника.mp3</p>
            <p>Беспечный ангел.mp3</p>
            <p>Под ногами лед.mp3</p>
        </div>
    )
}

export default Trecs;