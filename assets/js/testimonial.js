const testimonials = [
  {
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Mantap sekali bro!",
    author: "Anto",
    star: 5,
  },
  {
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Okelah!",
    author: "Anta",
    star: 3,
  },
  {
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Sip!",
    author: "Oke",
    star: 4,
  },
  {
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Oke!",
    author: "Sip",
    star: 5,
  },
];


function getAllTestimonials() { 
  const testimonialHTML = testimonials.map((testimonial) => {
    return `<div class="testimonial">
              <img src="${testimonial.image}" class="profile-testimonial" />
              <p class="quote">"${testimonial.content}"</p>
              <p class="author">- ${testimonial.author}</p>
              <p class="author"><i class="fas fa-star"></i>${testimonial.star}</p>
          </div>`
  })
  
  document.getElementById("testimonials").innerHTML = testimonialHTML.join("")
}

function getTestimonialByStar(star) {
  const filteredTestimonials = testimonials.filter((testimonial) => {
    return testimonial.star === star
  })

  const testimonialHTML = filteredTestimonials.map((testimonial) => {
    return `<div class="testimonial">
              <img src="${testimonial.image}" class="profile-testimonial" />
              <p class="quote">"${testimonial.content}"</p>
              <p class="author">- ${testimonial.author}</p>
              <p class="author"><i class="fas fa-star"></i>${testimonial.star}</p>
          </div>`
  })
  
  document.getElementById("testimonials").innerHTML = testimonialHTML.join("")
}

getAllTestimonials()