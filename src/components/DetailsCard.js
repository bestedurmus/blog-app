import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContextProvider";

const DetailsCard = ({ cardDetail }) => {
  const { content, title, email, imgUrl } = cardDetail;
  const { currentUser } = useContext(AuthContext);
  const { deleteBlog } = useContext(BlogContext);
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <Card
        sx={{
          margin: "3rem",
        }}
      >
        <CardMedia
          component="img"
          height=""
          width=""
          image={imgUrl}
          alt={imgUrl}
          sx={{ cursor: "pointer" }}
          // onClick={(e) => detailsfunc(e.target)}
        />
        <CardContent
          sx={{ padding: 0, whiteSpace: "nowrap" }}
          // onClick={(e) => detailsfunc(e.target)}
        >
          <CardContent
            sx={{
              backgroundColor: "silver",
            }}
          >
            <Typography variant="h5" component="div">
              <Box
                component="div"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {title}
              </Box>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            <Box
              component="div"
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {content}
            </Box>
          </CardContent>
          <CardContent>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
              variant="h6"
              component="h6"
            >
              <AccountCircle sx={{ marginRight: "0.5rem" }} />
              <Box
                component="div"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {email}
              </Box>
            </Typography>
          </CardContent>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            //   onClick={(e) => (currentUser ? favIcon(e.target) : null)}
            aria-label="add to favorites"
          >
            <FavoriteIcon />
            <Typography sx={{ marginLeft: "0.4rem", marginRight: "0.4rem" }}>
              0
            </Typography>
          </IconButton>
          <IconButton aria-label="share">
            <ChatBubbleOutlineIcon />
            <Typography sx={{ marginLeft: "0.4rem" }}>0</Typography>
          </IconButton>
        </CardActions>
        {currentUser.email === email ? (
          <div>
            <Button
              sx={{ backgroundColor: "#4CAF50" }}
              fullWidth
              item
              variant="contained"
              onClick={() => navigate(`/updateblog/${id}`)}
            >
              update
            </Button>
            <Button
              sx={{ backgroundColor: "#4CAF50" }}
              fullWidth
              item
              variant="contained"
              onClick={() => deleteBlog(id)}
            >
              delete
            </Button>
          </div>
        ) : null}
      </Card>
    </div>
  );
};

export default DetailsCard;
