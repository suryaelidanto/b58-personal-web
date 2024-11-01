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
                ${getFullTime(blogs[index].createdAt)} | Ichsan Emrald Alamsyah
            </div>
            <p>
              ${blogs[index].content}
            </p>
            <p>
                ${getDistanceTime(blogs[index].createdAt)}
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

function getFullTime(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const tanggal = date.getDate();
  const bulan = months[date.getMonth()];
  const tahun = date.getFullYear();

  let jam = date.getHours();
  let menit = date.getMinutes();

  if (jam < 10) {
    jam = "0" + jam;
  }

  if (menit < 10) {
    menit = "0" + menit;
  }

  return `${tanggal} ${bulan} ${tahun} ${jam}:${menit} WIB`;
}

function getDistanceTime(timePost) {
  const timeNow = new Date();
  const distance = timeNow - timePost; // hasilnya miliseconds -> 1000ms = 1 detik

  const seconds = Math.floor(distance / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const day = Math.floor(hours / 24);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 60) {
    return `${hours} hours ago`;
  } else if (day < 24) {
    return `${day} day ago`;
  }
}

setInterval(() => {
  renderBlog()
}, 1000)
