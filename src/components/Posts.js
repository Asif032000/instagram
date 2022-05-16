import React, { useState } from "react";
import PostCard from "./helper/PostCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import SuggestionCard from "./helper/SuggestionCard";
import Button from '@mui/material/Button';
import Story from "./helper/Story"
import Circle from "./helper/Circle";
import {useSelector} from "react-redux"     // to get the state


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Posts() {

  const openStory = (e, thumbnail, id, username, url, isVideo) => {
    console.log("opening story", e.target.parentElement.parentElement.id, thumbnail, id, username)
    setStory({
      username: username, 
      thumbnail: thumbnail, 
      url: url,
      isVideo: isVideo
    })
    const storyTile = document.getElementById('story')
    storyTile.style.display = "block"
  }
  const hideStory = (e) => {
    const storyTile = document.getElementById('story')
    storyTile.style.display = "none"
  }

  const dummyData = useSelector(state=> state.post)

  const response = dummyData
  
  const [story, setStory] = useState({})



  return (
    <Box sx={{ flexGrow: 1, boxShadow: "none" }}>
      <Grid container sx={{ marginTop: "8px", border: "none" }}>
        <Grid item xs={2}></Grid>
        <Grid item md={5} >

          {/* Stories section from here */}
          <Box
            id="storyBar"
            sx={{
              padding: "3px 2px",
              display: "flex",
              overflow: "scroll",
              msOverflowStyle:"none",
              scrollbarWidth:"none",
              justifyContent: "flex-start",
              bgcolor: "background.paper",
              border: "1px solid gray",
              borderRadius: "4px",
            }}
          >
            {response.stories.map((story) => (
              <Button id={story.id} sx={{ padding:'none', borderRadius:"50%",overflow:'hidden', padding:"0px"}} onMouseLeave={hideStory} onMouseEnter={(e)=>openStory(e, story.thumbnail, story.id, story.name, story.url, story.isVideo)}><Circle imgurl={story.thumbnail} username={story.name} key={story.id}/></Button>
            ))}
          </Box>
          <Story thumbnail={story.thumbnail} isVideo={story.isVideo} img={story.url} username={story.username} />

          {/* { data.map(post => <Item sx={{marginBottom:'39px',border: 'none',boxShadow: 'none'}}><PostCard key={data.username} /></Item>) } */}
          {response.data.map((post) => (
            <Item sx={{ border: "none", boxShadow: "none" }} >
              <PostCard
                post={post}
                key={post.id}
              />
            </Item>
          ))}
        </Grid>
        <Grid item md={3} >
          <Item sx={{ boxShadow: "none", border: "none" }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
                {/* <Item sx={{boxShadow: 'none', color:'yellow'}}><img style={{width: '30px', height: '30px', borderRadius: '50%'}} src={imgurl}></img></Item> */}
                <Item sx={{boxShadow: 'none', padding: "0px"}}>
                  <Circle username="username" border={false} imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-l889V8_Nv64SYZECELEBUzvWgmgxdlAow&usqp=CAU" width="50px" height="50px" />
                </Item>
                <Item sx={{boxShadow: 'none', textAlign: 'left'}}>
                    <b>username</b>
                    <Box sx={{ alignSelf:"flex-end"}}>full Name</Box>
                </Item>
            </Box>
          </Item>
          <Item sx={{ boxShadow: "none", textAlign: "left" }}>
            Suggestions for you
            {response.data.map((post) => (
              <SuggestionCard
                username={post.user.username}
                imgurl={post.user.profile_picture}
                fullname={post.user.full_name}
                key={post.user.id}
              />
            ))}
          </Item>
        </Grid>
        <Grid item xs={1.5}></Grid>
      </Grid>
    </Box>
  );
}
