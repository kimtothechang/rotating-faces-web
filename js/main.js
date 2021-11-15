const space = document.querySelector("#space");
const plane = space.querySelectorAll("article");

for (let i = 0; i < plane.length; i++) {
  /*let rotateY_value = document.defaultView
        .getComputedStyle(plane[i])
        .getPropertyValue("transform");*/
  plane[i].addEventListener("mouseenter", (e) => {
    space.style.animationPlayState = "paused";
    for (let j = 0; j < plane.length; j++) {
      if (i == j) {
        plane[i].style.boxShadow = "0px 0px 10px aqua";
        continue;
      } else if (i != j) {
        plane[i].style.opacity = "1";
        plane[j].style.opacity = "0.3";
      }
    }
  });
  plane[i].addEventListener("mouseleave", (e) => {
    space.style.animationPlayState = "running";
    for (let j = 0; j < plane.length; j++) {
      if (i == j) {
        plane[i].style.boxShadow = "";
        continue;
      } else if (i != j) {
        plane[i].style.opacity = "0.5";
        plane[j].style.opacity = "0.5";
      }
    }
  });
}

/* plane[i].style.transform = rotateY_value; ========== control matrix3d
 * plane[j].style.display = "none"; ========== control plane diplay none
 * let rotateY_value = document.defaultView
 *       .getComputedStyle(plane[i])
 *       .getPropertyValue("transform");
 *        ========== get value of attribute in css
 */
