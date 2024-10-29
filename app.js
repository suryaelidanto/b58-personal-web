const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
require("./libs/hbs-helper");

app.set("view engine", "hbs");

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/views", express.static("views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", home);
app.get("/contact", contact);
app.get("/testimonial", testimonial);

// BLOG
app.get("/blog", blog);
app.post("/blog", blogPost);
app.post("/delete-blog/:index", blogDelete);
app.get("/edit-blog/:index", editBlog);
app.post("/edit-blog/:index", editBlogPost);

app.get("/blog-detail/:index", blogDetail);

const blogs = [];

function home(req, res) {
  res.render("index");
}

function blog(req, res) {
  res.render("blog", { blogs });
}

function contact(req, res) {
  res.render("contact");
}

function testimonial(req, res) {
  res.render("testimonial");
}

function blogDetail(req, res) {
  const { index } = req.params;

  res.render("blog-detail", { id: index });
}

function blogPost(req, res) {
  const { title, content } = req.body;

  blogs.unshift({
    title,
    content,
    createdAt: new Date(),
    author: "Naruto",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/800px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
  });

  res.redirect("/blog");
}

function blogDelete(req, res) {
  const { index } = req.params;

  blogs.splice(index, 1);

  res.redirect("/blog");
}

function editBlog(req, res) {
  const { index } = req.params;

  const blog = blogs.find((_, idx) => idx == index);

  res.render("edit-blog", { blog, index });
}

function editBlogPost(req, res) {
  const { index } = req.params;

  const { title, content } = req.body;

  blogs[index] = {
    title,
    content,
    createdAt: new Date(),
    author: "Naruto",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/800px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
  };

  res.redirect("/blog")
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
