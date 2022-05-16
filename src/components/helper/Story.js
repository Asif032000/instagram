import React from "react";
import Card from "@mui/material/Card";
import CardHeaderFooter from "./CardHeaderFooter";
import CardMedia from "@mui/material/CardMedia";
import video from "../../utilities/webdev.mp4"
export default function Story({
  img,
  username,
  thumbnail,
  isVideo=false,
}) {
  

  
  return (
    <div id="story" >
      <Card sx={{ maxHeight: "100%", maxWidth: "100%" }}>
        <CardHeaderFooter isHeader="true" img={thumbnail} username={username} />
        { !isVideo? 
        <CardMedia
          component={isVideo?"video":"img"}
          width="300px"
          height="500px"
          image={img}
          alt={img}
          autoPlay
        />
        :
        <video
          src={video}
          controls
          muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop
          width="500px"
          height="500px"
        > something</video>
        }
      </Card>
    </div>
  );
}
