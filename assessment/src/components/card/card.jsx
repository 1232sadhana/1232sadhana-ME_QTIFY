import card from "../../assets/CardImage.png";
import Courosel from "./slider";
import Courosel2 from "./slider2";
import { Tooltip } from "@mui/material";

import axios from "axios";
import "./card.css";
import { useEffect, useState } from "react";

const CardJsx = () => {
  const [albumstop, setTopAlbums] = useState([]);
  const [newalbums, setNewalbums] = useState([]);
  const [expand, setExpand] = useState(7);
  const [expand2, setExpand2] = useState(7);
  const [collapse, setCollapse] = useState(true);
  const [collapse2, setCollapse2] = useState(true);
  const [slide, setSlide] = useState(true);
  const [slide2, setSlide2] = useState(true);

  const topAlbums = async () => {
    const response = await axios.get(
      `https://qtify-backend-labs.crio.do/albums/top`
    );
    setTopAlbums(response.data);
  };

  const NewAlbums = async () => {
    const response = await axios.get(
      `https://qtify-backend-labs.crio.do/albums/new`
    );
    setNewalbums(response.data);
  };

  function handleExpand() {
    setExpand(albumstop.length);
    setCollapse(!collapse);
    setSlide(!slide);
  }

  function handleCollapse() {
    setExpand(7);
    setCollapse(!collapse);
    setSlide(!slide);
  }

  function handleExpand2() {
    setExpand2(newalbums.length);
    setCollapse2(!collapse2);
    setSlide2(!slide2);
  }

  function handleCollapse2() {
    setExpand2(7);
    setCollapse2(!collapse2);
    setSlide2(!slide2);
  }

  let collapseJsx = (
    <div onClick={handleCollapse} className="headingSub">
      Collapse
    </div>
  );
  let ShowAllJsx = (
    <div onClick={handleExpand} className="headingSub">
      Show All
    </div>
  );
  let collapseJsx2 = (
    <div onClick={handleCollapse2} className="headingSub">
      Collapse
    </div>
  );
  let ShowAllJsx2 = (
    <div onClick={handleExpand2} className="headingSub">
      Show All
    </div>
  );

  useEffect(() => {
    topAlbums();
    NewAlbums();
  }, []);

  return (
    <div className="grid">
      <div className="heading1">
        <div>Top Albums</div>
        {collapse ? ShowAllJsx : collapseJsx}
      </div>
      <div className="card">
        {slide ? (
          <Courosel data={albumstop} />
        ) : (
          albumstop.slice(0, expand).map((e) => (
            <Tooltip
              arrow
              placement="top"
              key={e.id}
              title={`${e.songs.length} Songs`}
            >
              <div>
                <img
                  style={{
                    borderRadius: "10px",
                    display: "block",
                    width: "159px",
                    height: "170px"
                  }}
                  src={e.image}
                  alt="cardImg"
                />
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "white",
                    margin: "0px",
                    padding: "12px",
                    borderRadius: "0px 0px 10px 10px",
                    paddingLeft: "4px"
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "12px",
                      margin: "0px",
                      padding: "8px"
                    }}
                  >
                    {e.follows} Follows
                  </p>
                </div>
                <p
                  style={{
                    width: "159px",
                    color: "white",
                    marginBottom: "0px"
                  }}
                >
                  {e.title}
                </p>
              </div>
            </Tooltip>
          ))
        )}
      </div>
      <div className="heading1">
        <div>New Albums</div>
        {collapse2 ? ShowAllJsx2 : collapseJsx2}
      </div>
      <div className="card">
        {slide2 ? (
          <Courosel2 data={newalbums} />
        ) : (
          newalbums.slice(0, expand2).map((e) => (
            <Tooltip
              arrow
              placement="top"
              key={e.id}
              title={`${e.songs.length} Songs`}
            >
              <div key={e.id}>
                <img
                  style={{
                    borderRadius: "10px",
                    display: "block",
                    width: "159px",
                    height: "170px"
                  }}
                  src={e.image}
                  alt="cardImg"
                />
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "white",
                    margin: "0px",
                    padding: "12px",
                    borderRadius: "0px 0px 10px 10px",
                    paddingLeft: "4px"
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "12px",
                      margin: "0px",
                      padding: "8px"
                    }}
                  >
                    {e.follows} Follows
                  </p>
                </div>
                <p
                  style={{
                    width: "159px",
                    color: "white",
                    marginBottom: "0px"
                  }}
                >
                  {e.title}
                </p>
              </div>
            </Tooltip>
          ))
        )}
      </div>
    </div>
  );
};

export default CardJsx;