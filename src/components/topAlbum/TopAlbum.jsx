import React, { useEffect, useState } from "react";
import { topAlbumData, getUId } from "../AxiosData/AxiosData";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import "./TopAlbum.css";

const TopAlbum = () => {
  const [albumData, setAlbumData] = useState([]);
  const [collapseView, setCollapseView] = useState(true);

  useEffect(() => {
    const loadHandler = async () => {
      try {
        const res = await topAlbumData();
        setAlbumData(res);
      } catch (error) {
        console.log("Error fetching top album data:", error);
      }
    };
    loadHandler();
  }, []);

  const handleOnClick = () => {
    setCollapseView(!collapseView);
  };

  return (
    <Box className="topAlbum">
      <div className="topAlbum_static">
        <h3>Top Albums</h3>
        <button onClick={handleOnClick}>
          {collapseView ? `Show all` : `Collapse`}
        </button>
      </div>
      <Grid
        container
        spacing={collapseView ? 2 : 2}
        style={{ paddingLeft: collapseView ? "30px" : "15px" }}
        className="topAlbum_cards"
      >
        {albumData.map((albumItem) => {
          const id = getUId();
          return (
            <Grid item xs={2} key={id}>
              <Card key={id} data={albumItem} type="normal" />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TopAlbum;
