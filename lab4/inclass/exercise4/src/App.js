//===================Exercise 4=======================//
// import * as React from "react";
// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Adam" });
//     }, 1000);
//   });
// }
// function App() {
//   const [id, setId] = React.useState("Loading...");
//   const [name, setName] = React.useState("Loading...");

//   React.useEffect(() => {
//     fetchUser().then((user) => {
//       setId(user.id);
//       setName(user.name);
//     });
//   });
//   return (
//     <>
//       <p>ID: {id}</p>
//       <p>Name: {name}</p>
//     </>
//   );
// }

// export default App;
//============================================================//

//====================– Exercise 5==============================//
// import * as React from "react";
// import { FadeLoader} from "react-spinners"
// import MyPage from "./MyPage"

// function App() {

//   return (
//     <React.Suspense fallback={<FadeLoader color={'lifhtblue'} size={150} />}>
//       <MyPage />
//     </React.Suspense>
//   );
// }

// export default App;
//===================================================================//

//=============Exercise 6==================================================//
// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";

// const headerFooterStyle = {
//   padding: 8,
//   textAlign: "center",
// };
// const mainStyle = {
//   padding: 16,
//   textAlign: "center",
// };
// const navStyle = { marginLeft: 5 };

// function App() {
//   return (
//     <div style={{ flexGrow: 1 }}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper style={{ headerFooterStyle }}>
//             <Typography>Header</Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={4}>
//           <Paper>
//             <Grid container spacing={2} direction="column">
//               <Grid item xs={12}>
//                 <Typography style={navStyle}>Nav Item 1</Typography>
//               </Grid>
//               <Grid item xs={12}>
//                 <Typography style={navStyle}>Nav Item 2</Typography>
//               </Grid>
//               <Grid item xs={12}>
//                 <Typography style={navStyle}>Nav Item 3</Typography>
//               </Grid>
//               <Grid item xs={12}>
//                 <Typography style={navStyle}>Nav Item 4</Typography>
//               </Grid>
//             </Grid>
//           </Paper>
//         </Grid>
//         <Grid item xs={8}>
//           <Grid container spacing={2}>
//             <Grid item sx={6}>
//               <Paper style={mainStyle}>
//                 <Typography>Main Content 1</Typography>
//               </Paper>
//             </Grid>
//             <Grid item sx={6}>
//               <Paper style={mainStyle}>
//                 <Typography>Main Content 2</Typography>
//               </Paper>
//             </Grid>
//             <Grid item sx={6}>
//               <Paper style={mainStyle}>
//                 <Typography>Main Content 3</Typography>
//               </Paper>
//             </Grid>
//             <Grid item sx={6}>
//               <Paper style={mainStyle}>
//                 <Typography>Main Content 4</Typography>
//               </Paper>
//             </Grid>
//           </Grid>
//           <Grid item xs={12}>
//             <Paper style={headerFooterStyle}>
//               <Typography>Footer</Typography>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default App;
// =====================================================================================//

//======================Exercise 7=====================================================//
// import React, { useState } from "react";
// import "typeface-roboto";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import First from "./First";
// import Second from "./Second";
// import Third from "./Third";

// function App({ links }) {
//   const [open, setOpen] = useState(false);

//   function toggleDrawer({ type, key }) {
//     if (type === "keydown" && (key === "Tab" || key === "Shift")) {
//       return;
//     }
//     setOpen(!open);
//   }
//   return (
//     <Router>
//       <Button onClick={toggleDrawer}>Open Nav</Button>
//       <section>
//         <Route path="/first" component={First}></Route>
//         <Route path="/second" component={Second}></Route>
//         <Route path="/third" component={Third}></Route>
//       </section>
//       <Drawer open={open} onClose={toggleDrawer}>
//         <div
//           style={{ width: 250 }}
//           role="presentation"
//           onClick={toggleDrawer}
//           onKeyDown={toggleDrawer}
//         >
//           <List>
//             {links.map((link) => (
//               <ListItem button key={link.url} component={Link} to={link.url}>
//                 <Routes>
//                   <Route
//                     exact
//                     path={link.url}
//                     render={() => (
//                       <ListItemText
//                         primary={link.name}
//                         primaryTypographyProps={{ color: "primary" }}
//                       />
//                     )}
//                   ></Route>
//                   <Route
//                     path="/"
//                     render={() => <ListItemText primary={link.name} />}
//                   ></Route>
//                 </Routes>
//               </ListItem>
//             ))}
//           </List>
//         </div>
//       </Drawer>
//     </Router>
//   );
// }

// export default App;

// App.defaultProps = {
//   links: [
//     { url: "/first", name: "First Page" },
//     { url: "/second", name: "Second Page" },
//     { url: "/third", name: "Third Page" },
//   ],
// };
//======================================================================================//

//======================Exercise 7.1=====================================================//
// import "typeface-roboto";
// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import { Typography } from "@mui/material/Typography";

// const tabContenStyle = {
//   padding: 16,
// };

// function TabContainer({ value }) {
//   return (
//     <AppBar position="static">
//       <Tabs value={value}>
//         <Tab label="Item One" component={Link} to="/" />
//         <Tab label="Item Two" component={Link} to="/page2" />
//         <Tab label="Item Three" component={Link} to="/page3" />
//       </Tabs>
//     </AppBar>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <Route
//         exact
//         path="/"
//         render={() => (
//           <>
//             <TabContainer value={0} />
//             <Typography component="div" style={tabContenStyle}>
//               Item One
//             </Typography>
//           </>
//         )}
//       />

//       <Route
//         exact
//         path="/page2"
//         render={() => (
//           <>
//             <TabContainer value={1} />
//             <Typography component="div" style={tabContenStyle}>
//               Item Two
//             </Typography>
//           </>
//         )}
//       />
//       <Route
//         exact
//         path="/page3"
//         render={() => (
//           <>
//             <TabContainer value={2} />
//             <Typography component="div" style={tabContenStyle}>
//               Item Three
//             </Typography>
//           </>
//         )}
//       />
//     </Router>
//   );
// }
//======================================================================================//
//=====================Exercise 7.1=====================================================//
// import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
// import PeopleContainer from "./PeopleContainer";

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/people">
//           <PeopleContainer />
//         </Route>
//         <Link to="/people">People</Link>
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;
//======================================================================================//
//====================Exercise 8========================================================//
// import * as React from "react";
// import "typeface-roboto";
// import FromGroup from "@mui/material/FormGroup";
// import MyTextInput from "./Exercise8/MyTextInput";
// import MySelect from "./Exercise8/MySelect";

// function App() {
//   return (
//     <FromGroup style={{ width: 200, margin: 10 }}>
//       <MyTextInput></MyTextInput>
//       <MySelect></MySelect>
//     </FromGroup>
//   );
// }

// export default App;
//======================================================================================//

//====================Exercise 9========================================================//
// import "typeface-roboto";
// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// // import IconButton from "@mui/material/IconButton";
// // import AndroidIcon from "@mui/material/Android";

// const buttonStyle = { margin: 10 };

// function toggleColor(setter, value) {
//   setter(value === "default" ? "primary" : "default");
// }

// export default function App() {
//   const [contained, setContained] = useState("default");
//   const [text, setText] = useState("default");
//   const [outlined, setOutlined] = useState("default");
//   const [icon, setIcon] = useState("default");

//   return (
//     <Grid container>
//       <Grid
//         item
//         component={Button}
//         variant="contained"
//         style={buttonStyle}
//         color={contained}
//         onClick={() => toggleColor(setContained, contained)}
//       >
//         Contained
//       </Grid>
//       <Grid
//         item
//         component={Button}
//         style={buttonStyle}
//         color={text}
//         onClick={() => toggleColor(setText, text)}
//       >
//         Text
//       </Grid>
//       <Grid
//         item
//         component={Button}
//         variant="outlined"
//         style={buttonStyle}
//         color={outlined}
//         onClick={() => toggleColor(setOutlined, outlined)}
//       >
//         Outlined
//       </Grid>
//       <Grid
//         item
//         component={Button}
//         style={buttonStyle}
//         color={icon}
//         onClick={() => toggleColor(setIcon, icon)}
//       >
//         Outlined
//       </Grid>
//     </Grid>
//   );
// }
//========================================================================//

//=========================Exercise 12===================================//
// import useOnline from "./useOnline";
// import "./App.css";

// function App() {
//   const online = useOnline();

//   return (
//     <div className="App">
//       <h1>Network Checker</h1>
//       <span>
//         you are now{" "}
//         {online ? (
//           <div className="App-indicator-online">ONLINE</div>
//         ) : (
//           <div className="App=indicator-offline">OFFLINE</div>
//         )}
//       </span>
//     </div>
//   );
// }
// export default App;
//==================================================================================//

//=========================Exercise 13==============================================//

// import "./App.css";
// import { useState } from "react";
// import useMessages from "./useMessages";

// function App() {
//   const [forum, setForum] = useState("nasa");
//   const {
//     data: messages,
//     loading: messageLoading,
//     error: messagesError,
//   } = useMessages(forum);

//   return (
//     <div className="App">
//       <button onClick={() => setForum("nasa")}>NASA</button>
//       <button onClick={() => setForum("notNasa")}>Not NASA</button>
//       {messagesError ? (
//         <div className="error">
//           Something went wrong:
//           <div className="error-contents">{messagesError.message}</div>
//         </div>
//       ) : messageLoading ? (
//         <div className="loading">Loading...</div>
//       ) : messages && messages.length ? (
//         <dl>
//           {messages.map((m) => (
//             <>
//               <dt>(m.author)</dt>
//               <dd>(m.text)</dd>
//             </>
//           ))}
//         </dl>
//       ) : (
//         "no messages"
//       )}
//     </div>
//   );
// }
// export default App;
