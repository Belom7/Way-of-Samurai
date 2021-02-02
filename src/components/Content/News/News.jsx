import React from 'react-router-dom';
import Classes from './News.module.css';
import Comments from './Comments/Comments';


function News() {
    return(
        <div className={Classes.news}>
            <h2> Подборка новостей на сегодня </h2>
                <h3>Алексей Навальный опубликовал видео с дворцом Путина</h3>
                    <img src='https://static.vtimes.io/image/1360/aa/9368E788-9CD7-4840-A8F8-3AC984BEBF4F_w1200_r1.jpg'></img>
                    <Comments/>
        </div>
    )
}

export default News;