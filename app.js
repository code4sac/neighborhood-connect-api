const express = require("express");
const userRoutes = require("./server/controllers/userRouter");
const organizations = require("./server/controllers/orgRouter.js");
const app = express();

app.use("/orgs", organizations);
app.use("/users", userRoutes);

// app.use(express.static(path.join(__dirname, './build')));

app.listen(3000, () => {
  console.log("Hido ho, Captn! Listending on port 3000.");
});
