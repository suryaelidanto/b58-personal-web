const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
require("./src/libs/hbs-helper");
const config = require("./src/config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);
const bcrypt = require("bcrypt");
const session = require("express-session");
const flash = require("express-flash");
const upload = require("./src/middlewares/upload-file");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./src/views"));

app.use("/assets", express.static(path.join(__dirname, "./src/assets")));
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    name: "my-session",
    secret: "rahasiabangetdehjangansampaiadayangtahu",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

app.get("/", home);
app.get("/login", login);
app.get("/register", register);
app.post("/register", registerPost);
app.post("/login", loginPost);
app.post("/logout", logoutPost);

app.get("/contact", contact);
app.get("/testimonial", testimonial);

app.get("/blog", blog);
app.post("/blog", upload.single("image"), blogPost);
app.post("/delete-blog/:id", blogDelete);
app.get("/edit-blog/:id", editBlog);
app.post("/edit-blog/:id", editBlogPost);

app.get("/blog-detail/:id", blogDetail);

function login(req, res) {
  res.render("login");
}

function register(req, res) {
  res.render("register");
}

async function registerPost(req, res) {
  const { name, email, password } = req.body;
  const salt = 10;

  const hashedPassword = await bcrypt.hash(password, salt);

  const query = `INSERT INTO users(name, email, password) VALUES('${name}', '${email}', '${hashedPassword}')`;
  await sequelize.query(query, { type: QueryTypes.INSERT });

  res.redirect("login");
}

async function loginPost(req, res) {
  const { email, password } = req.body;

  const query = `SELECT * FROM users WHERE email='${email}'`;
  const user = await sequelize.query(query, { type: QueryTypes.SELECT });

  if (!user.length) {
    req.flash("error", "Email / password salah!");
    return res.redirect("/login");
  }

  const isVerifiedPassword = await bcrypt.compare(password, user[0].password);

  if (!isVerifiedPassword) {
    req.flash("error", "Email / password salah!");
    return res.redirect("/login");
  }

  req.flash("success", "Berhasil login!");
  req.session.user = user[0];
  res.redirect("/");
}

function logoutPost(req, res) {
  req.session.destroy((err) => {
    if (err) return console.error("Logout gagal!");

    console.log("Logout berhasil!");

    res.redirect("/");
  });
}

function home(req, res) {
  res.render("index");
}

async function blog(req, res) {
  const query = `SELECT blogs.*, users.name AS author FROM blogs LEFT JOIN users ON blogs.author_id = users.id;`;
  let blogs = await sequelize.query(query, { type: QueryTypes.SELECT });

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

  const { id } = req.session.user;

  const imagePath = req.file.path;

  const query = `INSERT INTO blogs(title,content,image,author_id) VALUES('${title}','${content}','${imagePath}', ${id})`;

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
  const user = req.session.user;

  if (!user) {
    return res.redirect("/login");
  }

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
