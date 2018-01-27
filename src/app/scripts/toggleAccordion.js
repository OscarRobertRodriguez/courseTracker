
 const accordionControls = (function () {
'use strict';
const course = document.querySelectorAll('.course-tracker__path > h2'); 
console.log(course);

  const subChapters = document.querySelectorAll('.course-tracker__sub-category > h3'); 
console.log(subChapters);


function toggleAccordion() {
  const thisItem = this.nextElementSibling; 
  thisItem.classList.toggle('open');
  
}

function toggleSubAccordion() {
  const thisItem = this.parentNode.nextElementSibling; 
  thisItem.classList.toggle('open-sub');
}


course.forEach(button => button.addEventListener('click', toggleAccordion)); 

subChapters.forEach(item => item.addEventListener('click', toggleSubAccordion)); 

}());

export default accordionControls;