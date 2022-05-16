import React from 'react'
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CardHeaderFooter from "./CardHeaderFooter"
import Circle from "./Circle"
import Comments from "./Comments"
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import {useSelector} from "react-redux"     // to get the state
import { useDispatch } from 'react-redux'   
import { actionCreators } from "../../state/index"
import { bindActionCreators } from "redux"

export default function PostCard({ post }) {
    const dispatch = useDispatch()
    const {toggleLike, toggleBookmark} = bindActionCreators(actionCreators, dispatch)



    // from material UI to expand or compress
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));
      const [expanded, setExpanded] = React.useState(true);
      const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return (
        <>
            <Card sx={{ maxWidth: '100%', marginBottom:'40px' , textAlign: "left" }}>
                <CardHeaderFooter isHeader="true" img={post.caption.from.profile_picture} username={post.user.username}/>
                <CardMedia
                    component="img"
                    width={post.images.standard_resolution.width}
                    height={post.images.standard_resolution.height}
                    image={post.images.standard_resolution.url}
                    alt={post.caption.text}
                />
                <CardActions disableSpacing>
                    <IconButton  aria-label="add to favorites"  > 
                        <FavoriteIcon id={post.id} sx={{ color:post.user_has_liked? "red":""}} onClick={(e)=>toggleLike(e)}/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <a className="shareIcon" href={post.link}><ShareIcon /></a>
                    </IconButton>
                    <IconButton>
                        <BookmarkIcon id={post.id} sx={{ color:post.user_has_saved? "black":""}} onClick={(e)=> toggleBookmark(e) }/>
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <CardHeaderFooter img={post.user.profile_picture} postID={ post.id } username={post.user.username} caption={post.caption.text} />
                < Collapse in={!expanded} timeout="auto" unmountOnExit>
                    <Typography variant="body2" color="text.secondary" sx={{ marginLeft: "20px"}}>{post.comments.length} Comments: </Typography>
                    {/* {post.comments.map(comment => <Comment username={comment.comment_by.username} imgurl={comment.comment_by.profile_img} key={comment.id} comment={comment.text} />)} */}
                    <Comments comments={post.comments} /> 
                </Collapse>
            </Card>
        </>
    )
}