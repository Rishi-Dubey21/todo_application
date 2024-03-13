const express=require("express");
const app=express();
const cors=require("cors");
const path=require("path");
const bodyparser=require("body-parser");
const auth=require("./routes/auth");
const list=require("./routes/list");
const PORT=3000;

app.use(bodyparser.json());
app.use(cors());
app.use("/auth",auth);
app.use("/list",list);


app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "dist","index.html"));
});
app.listen(PORT,()=>{
    console.log(`Server is started on ${PORT}`)
})