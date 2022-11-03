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

//====================Exercise 8========================================================//
import * as React from "react";
import "typeface-roboto";
import FromGroup from "@mui/material/FormGroup";
import MyTextInput from "./Exercise8/MyTextInput";
import MySelect from "./Exercise8/MySelect";

function App() {
  return (
    <FromGroup style={{ width: 200, margin: 10 }}>
      <MyTextInput></MyTextInput>
      <MySelect></MySelect>
    </FromGroup>
  );
}

export default App;
