import "./App.css";
import CardLayout from "./components/CardLayout";

const users = [
  {
    id: "#0001",
    username: "Phineas",
    wallpaper: "rgb(0, 81, 119)",
    userInfo: "phin • 20 yrs co-founder & dev @ giggl",
    profilePic:
      "https://cdn.discordapp.com/avatars/94490510688792576/55294160686d30f11d19d21045d3f35a",
  },
  {
    id: "#1999",
    username: "Dustin",
    wallpaper: "rgb(0, 0, 0)",
    userInfo:
      "22y - Software Engineer passionate about networking and infrastructure",
    profilePic:
      "https://cdn.discordapp.com/avatars/156114103033790464/8bd12e1bdc5bf93249eeffb783587823",
  },
  {
    id: "#3020",
    username: "pxseu",
    wallpaper: "rgb(126, 97, 59)",
    userInfo:
      "penniless, invented dogecoin, times person of the year zero years in a row",
    profilePic:
      "http://sun9-1.userapi.com/impg/C5Jj2Zqu-xzOmhvbc_-rVZqQGQMpqNsWbt3apg/ADWwTJxfpyQ.jpg?size=564x550&quality=96&sign=361ed471335b8509654658509df29c0d&type=album",
  },
  {
    id: "#6577",
    username: "🗕🗗🗙",
    wallpaper: "rgb(24, 25, 28)",
    userInfo: "👶 7 years ago 💔2 years ago",
    profilePic:
      "https://cdn.discordapp.com/avatars/937051733773938689/679321173067da9d28dc7ce7f6351323",
  },
  {
    id: "#0002",
    username: "stealthwave",
    wallpaper: "rgb(66, 66, 112",
    userInfo: "follow me on twitter ☺",
    profilePic:
      "https://cs14.pikabu.ru/post_img/2021/05/08/12/16205042291362743.jpg",
  },
  {
    id: "#0023",
    username: "Atzu",
    wallpaper: "rgb(66, 81, 78)",
    userInfo: "Dev for streamers.",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdApzzKwnuc3dW-T8AI7171iTRkLAkePR5Ww&usqp=CAU",
  },
  {
    id: "#0016",
    username: "Voltages",
    wallpaper: "rgb(0, 81, 119)",
    userInfo: "Information technology specialist.",
    profilePic:
      "https://abrakadabra.fun/uploads/posts/2022-03/1647943516_2-abrakadabra-fun-p-gomer-avatarka-5.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <div className="container-title">
        <span className="title">Online Users 875/2,452</span>
      </div>
      <span className="watch-users">Watch users</span>
      <CardLayout users={users} />
    </div>
  );
}

export default App;
