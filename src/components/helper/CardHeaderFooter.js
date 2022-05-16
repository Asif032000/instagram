import React from 'react'
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Circle from "./Circle"

import { useDispatch } from 'react-redux'   
import { actionCreators } from "../../state/index"
import { bindActionCreators } from "redux"

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          ...sx,
        }}
        {...other}
      />
    );
  }
  
  Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };
export default function CardHeaderFooter({img, username, caption, isHeader, postID}) {
  const dispatch = useDispatch()
  const { addComment } = bindActionCreators(actionCreators, dispatch)

 return (
        
        isHeader ? <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          bgcolor: 'background.paper',
        }}
      >
          <Circle imgurl={img} />
        <Item sx={{  paddingRight: "0"}}><b>{username} </b></Item>
        {/* <Item sx={{ marginLeft: "0", paddingLeft: "0"}}><span>{caption}</span></Item> */}
      </Box>
       :
      <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          bgcolor: 'background.paper',
        }}
      >
        <Item sx={{  paddingRight: "0"}}><b>{username} </b></Item>
        <Item sx={{ marginLeft: "0", paddingLeft: "0"}}><span>{caption}</span></Item>
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-start', 
        bgcolor: 'background.paper'
      }}>
        <Item ><Circle imgurl={img} width="30px" height="30px" /></Item> 
        <Item sx={{ margin: 'auto 10px', width: '100%'}}> 
          <input className="commentInput" placeholder="Add a Comment ..." onKeyPress={(e)=>addComment({e, username, img, postID})}></input> </Item>
      </Box>
      </div>
    ) 
}
