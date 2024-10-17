const blogs = [];

function addBlog(event) {
  event.preventDefault();

  const inputBlogTitle = document.getElementById("input-blog-title").value;
  const inputBlogContent = document.getElementById("input-blog-content").value;
  const inputBlogImage = document.getElementById("input-blog-image").files;

  const image = URL.createObjectURL(inputBlogImage[0]);

  const blog = {
    title: inputBlogTitle,
    content: inputBlogContent,
    createdAt: new Date(),
    image: image,
  };

  blogs.unshift(blog);
  console.log(blogs);
  renderBlog();
}

function renderBlog() {
  let html = ``;

  for (let index = 0; index < blogs.length; index++) {
    html += `<div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[index].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post" onclick="deleteBlog(${index})">Delete Post</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${blogs[index].title}</a
              >
            </h1>
            <div class="detail-blog-content">
                ${blogs[index].createdAt} | Ichsan Emrald Alamsyah
            </div>
            <p>
              ${blogs[index].content}
            </p>
          </div>
        </div>`;
  }

  document.getElementById("contents").innerHTML = html;
}

function deleteBlog(index) {
  blogs.splice(index, 1);
  renderBlog();
}
