import express from "express";
import bodyParser from "body-parser";

const app = express();

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/answer", (req, res) => {
  res.render("answer");
});

app.post("/dataTxt", (req, res) => {
  const text = req.body.txt;
  let an = "Computer";

  if (text === "컴퓨터") {
    res.render("answer", { an });
  } else {
    an = "번역 할 수 없음";
    res.render("answer", { an });
  }
});

app.listen(3000, () => {
  console.log("Server Start");
});
