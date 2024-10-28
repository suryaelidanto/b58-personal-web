const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "hbs");

app.use("/assets/css", express.static("assets/css"));
app.use("/assets/icon", express.static("assets/icon"));
app.use("/assets/img", express.static("assets/img"));
app.use("/assets/js", express.static("assets/js"));
app.use("/views", express.static("views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", home);
app.get("/blog", blog);
app.get("/contact", contact);
app.get("/testimonial", testimonial);
app.get("/blog-detail/:id", blogDetail);

app.post("/blog", blogPost);

function home(req, res) {
  res.render("index");
}

function blog(req, res) {
  res.render("blog");
}

function contact(req, res) {
  res.render("contact");
}

function testimonial(req, res) {
  res.render("testimonial");
}

function blogDetail(req, res) {
  const { id } = req.params;

  res.render("blog-detail", { id });
}

function blogPost(req, res) {
  const { title, content } = req.body;

  console.log("Title : ", title);
  console.log("Content : ", content);

  res.json(req.body);
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
