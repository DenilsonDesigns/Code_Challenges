const API_BASE_URL = "https://api.frontendexpert.io/api/fe/testimonials";
const PAGE_SIZE = 5;
let canFetchTestimonials = true;

let afterId = null;

const testimonialContainer = document.getElementById("testimonial-container");

testimonialContainer.addEventListener("scroll", handleScroll);

fetchAndAppendTestimonials();

function handleScroll() {
  if (!canFetchTestimonials) return;
  const bottomSpace = this.scrollHeight - this.scrollTop - this.clientHeight;

  if (bottomSpace > 0) return;

  fetchAndAppendTestimonials();
}

function fetchAndAppendTestimonials() {
  canFetchTestimonials = false;

  const url = createTestimonialsUrl();
  fetch(url)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then(({ testimonials, hasNext }) => {
      const fragment = document.createDocumentFragment();
      testimonials.forEach(({ message }) =>
        fragment.appendChild(createTestimonialEl(message))
      );

      testimonialContainer.appendChild(fragment);

      if (hasNext) {
        afterId = testimonials[testimonials.length - 1].id;
      } else {
        testimonialContainer.removeEventListener("scroll", handleScroll);
      }
      canFetchTestimonials = true;
    });
}

function createTestimonialEl(message) {
  const testimonialElement = document.createElement("p");
  testimonialElement.classList.add("testimonial");
  testimonialElement.textContent = message;
  return testimonialElement;
}

function createTestimonialsUrl() {
  const url = new URL(API_BASE_URL);

  url.searchParams.set("limit", PAGE_SIZE);

  if (afterId !== null) {
    url.searchParams.set("after", afterId);
  }
  return url;
}
