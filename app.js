const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
require("./src/libs/hbs-helper");
const config = require("./src/config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./src/views"));

app.use("/assets", express.static(path.join(__dirname, "./src/assets")));

app.use(express.urlencoded({ extended: true }));

app.get("/", home);
app.get("/contact", contact);
app.get("/testimonial", testimonial);

// BLOG
app.get("/blog", blog);
app.post("/blog", blogPost);
app.post("/delete-blog/:id", blogDelete);
app.get("/edit-blog/:id", editBlog);
app.post("/edit-blog/:id", editBlogPost);

app.get("/blog-detail/:id", blogDetail);

const blogs = [];

function home(req, res) {
  res.render("index");
}

async function blog(req, res) {
  const query = `SELECT * FROM blogs`;
  let blogs = await sequelize.query(query, { type: QueryTypes.SELECT });

  blogs = blogs.map((blog) => ({
    ...blog,
    author: "Surya Elidanto",
  }));

  res.render("blog", { blogs });
}

function contact(req, res) {
  res.render("contact");
}

function testimonial(req, res) {
  res.render("testimonial");
}

async function blogDetail(req, res) {
  const { id } = req.params;

  const query = `SELECT * FROM blogs WHERE id = ${id}`;
  const blog = await sequelize.query(query, { type: QueryTypes.SELECT });

  blog[0].author = "Surya Elidanto";
  res.render("blog-detail", { blog: blog[0] });
}

async function blogPost(req, res) {
  const { title, content } = req.body;

  const query = `INSERT INTO blogs(title,content,image,author_id) VALUES('${title}','${content}','https://image.popmama.com/content-images/post/20211228/borutojpg-d974626c1f44f2ebc3c0577eab8a45aa.jpg?width=800&height=420',100)`;

  await sequelize.query(query, { type: QueryTypes.INSERT });

  res.redirect("/blog");
}

async function blogDelete(req, res) {
  const { id } = req.params;

  const query = `DELETE FROM blogs WHERE id=${id}`;
  await sequelize.query(query, { type: QueryTypes.DELETE });

  res.redirect("/blog");
}

async function editBlog(req, res) {
  const { id } = req.params;

  const query = `SELECT * FROM blogs WHERE id=${id}`;
  const blog = await sequelize.query(query, { type: QueryTypes.SELECT });
  blog[0].author = "Surya Elidanto";

  res.render("edit-blog", { blog: blog[0] });
}

async function editBlogPost(req, res) {
  const { id } = req.params;

  const { title, content } = req.body;

  const query = `UPDATE blogs SET title='${title}',content='${content}' WHERE id=${id}`;
  await sequelize.query(query, { type: QueryTypes.UPDATE });

  res.redirect("/blog");
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
