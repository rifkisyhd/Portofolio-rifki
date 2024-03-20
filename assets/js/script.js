document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | rifkisyhd";
    $("#favicon").attr("href", "assets/images/favicon.png");
  } else {
    document.title = "Jangan lupa kembali ya";
    $("#favicon").attr("href", "assets/images/favhand.png");
  }
});

// navbar menu active
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-list a");
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelector(".nav-list a.active")?.classList.remove("active");
          const id = entry.target.getAttribute("id");
          const navLink = document.querySelector(`.nav-list a[href="#${id}"]`);
          if (navLink) {
            navLink.classList.add("active");
          }
        }
      });
    },
    { rootMargin: "-50% 0px -50% 0px" }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
// end navbar menu active

