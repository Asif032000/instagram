import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Circle from "./Circle"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
export default function SuggestionCard({username, imgurl, fullname}) { 
    return (
        <div>
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                bgcolor: 'background.paper',
            }}
            >
            <Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
                {/* <Item sx={{boxShadow: 'none', color:'yellow'}}><img style={{width: '30px', height: '30px', borderRadius: '50%'}} src={imgurl}></img></Item> */}
                <Item sx={{boxShadow: 'none'}}>
                <Circle username={username} imgurl={imgurl} width="25px" height="25px" />
                </Item>
                <Item sx={{boxShadow: 'none', textAlign: 'left'}}>
                    <b>{username}</b>
                    <Box sx={{ alignSelf:"flex-end"}}>{ fullname }</Box>
                </Item>
            </Box>
            <Item sx={{boxShadow: 'none'}}><a className="follow" style={{}} href="#">Follow</a></Item>
            </Box>
        </div>
    )
}
