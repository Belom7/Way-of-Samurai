import React from 'react-router-dom';
import Classes from './Music.module.css';
import Trecs from './Trecs/Trecs'

function Music() {
    return(
        <div className={Classes.music}>
            <h2>Ваша музыка</h2>
            <Trecs/>
        </div>
    )
}

export default Music;