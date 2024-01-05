import React, { useEffect, useState } from "react";
import { newAlbumData, getUId } from "../AxiosData/AxiosData";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import "./NewAlbum.css";

const NewAlbum = () => {
  const [albumData, setAlbumData] = useState([]);
  const [collapseView, setCollapseView] = useState(true);

  useEffect(() => {
    const loadHandler = async () => {
      try {
        const res = await newAlbumData();
        setAlbumData(res);
      } catch (error) {
        console.log("Error fetching new album data:", error);
      }
    };
    loadHandler();
  }, []);

  const handleOnClick = () => {
    setCollapseView(!collapseView);
  };

  return (
    <Box className="newAlbum">
      <div className="newAlbum_static">
        <h3>New Albums</h3>
        <button onClick={handleOnClick}>
          {collapseView ? `Show all` : `Collapse`}
        </button>
      </div>
      <Grid
        container
        spacing={collapseView ? 2 : 2}
        style={{ paddingLeft: collapseView ? "30px" : "15px" }}
        className="newAlbum_cards"
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

export default NewAlbum;
