import React from "react";
import { MdMoneyOff } from "react-icons/md";
import classes from "./StatCard.module.css";
function StatCard({ icon = <MdMoneyOff />, type = "first", value = 24 }) {
  // #fbcbe9
  // #cef1e5
  // #fffaca
  return (
    <div
      className={classes.statCard}
      style={{
        backgroundColor:
          type == "first"
            ? "#fbcbe9"
            : type == "second"
            ? "#cef1e5"
            : "#fffaca",
      }}
    >
      <div
        className={classes.icon}
        style={{
          backgroundColor:
            type == "first"
              ? "#f59dd3"
              : type == "second"
              ? "#7cd6b7"
              : "#f5eeae",
        }}
      >
        {icon}
      </div>
      <div className={classes.value}>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default StatCard;
