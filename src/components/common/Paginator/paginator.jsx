import s from "./Paginator.module.css";
import React from "react";

const Paginator = (props) => {
  return (
      <div className={s.pagination}>
        {props.pages.map((p) => (
          <span
            key={p}
            className={props.currentPage === p ? s.selectedPage : s.page}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
    )}

export default Paginator;
