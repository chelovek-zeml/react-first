import s from "./Paginator.module.css";
import React, { useState } from "react";

const Paginator = ({pages, pagesCount, currentPage, onPageChanged, portionSize = 12}) => {

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage/portionSize));
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;

  return (
      <div className={s.pagination}>

        {portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>
        }
        {pages
        .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p) => (
          <span
            key={p}
            className={currentPage === p ? s.selectedPage : s.page}
            onClick={(e) => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
        {portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>
        }
      </div>
    )}

export default Paginator;
