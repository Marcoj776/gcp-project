import logo from "./logo.svg";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import FeaturedPost from "./FeaturedPost";

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  console.log("palette", theme.palette)
  console.log("breakpoints", theme.breakpoints)
  return (
    <div className="App">
      <Header title="Blog" sections={sections} />

      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>
      {console.log(theme)}
      <div className="App">
        <Typography>Hi Dad</Typography>
      </div>
    </div>
  );
}

export default App;
