let slides = [
  { 
    img: "imgs/nature.png",
    caption: "Beautiful Nature",
  },
  { 
    img: "imgs/mountain.png",
    caption: "Mountain View",
  },
  { 
    img: "imgs/forest.png",
    caption: "Forest Morning",
  }
];

let currentIndex = 0, autoPlayInterval = null;

const showSlide = (index) => {
  const slide = slides[index];
  document.getElementById("slider-img").src = slide.img;
  document.getElementById("caption").innerHTML = `${slide.caption}`;
  document.getElementById("counter").innerHTML = `Slide ${index + 1} of ${slides.length}`;
  console.log(`Slide ${index + 1}: ${slide.caption}`);
};

const nextSlide = () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  } else {
    console.log("Message: This is the last slide.");
    alert("This is the last slide.");
  }
};

const prevSlide = () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  } else {
    console.log("Message: This is the first slide.");
    alert("Alert: This is the First Slide.");
  }
};

const addSlide = () => {
  const url = document.getElementById("img-url").value;
  const caption = document.getElementById("img-caption").value;

  if (url && caption) {
    slides.push({ img: url, caption });
    console.log(`Added New Slide: ${caption}`);
    document.getElementById("img-url").value = "";
    document.getElementById("img-caption").value = "";
    alert("New Slide Added Successfully ... ");
  } else {
    alert("Please enter both Image URL and Caption!");
  }
};

const startAutoPlay = () => {
  stopAutoPlay(); 
  autoPlayInterval = setInterval(() => {
    if (currentIndex < slides.length - 1) {
      nextSlide();
    } else {
      currentIndex = 0;
      showSlide(currentIndex);
    }
  }, 3000);
  console.log("Auto Play Started");
};

const stopAutoPlay = () => {
  clearInterval(autoPlayInterval);
  console.log("Auto Play Stopped");
};

showSlide(currentIndex);