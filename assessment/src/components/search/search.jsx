import { toggleButtonClasses } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./search.css";

export default function SearchRes(props) {
  const [data, setData] = useState([]);
  const [Show, setShow] = useState(true);
  function toogle() {
    props.show(!Show);
  }
  const res = async () => {
    let fetch = await axios.get("https://qtify-backend-labs.crio.do/songs");
    setData(fetch.data);
  };
  useEffect(() => {
    res();
  }, []);

  return (
    <div className="searchBox">
      {data
        .slice(0, 10)
        .filter((e) => {
          if (props.keys === "") {
            return toogle();
            //return null;
          } else return e.title.toLowerCase().includes(props.keys);
        })
        .map((e) => (
          <div style={{ cursor: "pointer" }} key={e.id}>
            {e.title}
          </div>
        ))}
    </div>
  );
}