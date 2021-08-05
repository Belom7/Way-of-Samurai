import React, {useState}from 'react'
import Classes from './Paginator.module.css'
import cn from 'classnames'

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanget, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for(let i=1; i<= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize


    return(
        <div className={Classes.paginator}>
            {portionNumber > 1 && <button onClick={()=> {setPortionNumber(portionNumber - 1)}}>PREV</button>}

                {pages
                    .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map(p => {
                    return <span className={ cn ({
                        [Classes.selectPage] : currentPage === p
                    }, Classes.pageNumber) }
                                key={p}
                                onClick={(e)=> {onPageChanget(p)}}>{p}
                            </span>       
                    })
                }
                {portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
}

export default Paginator