$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').addClass('active');
  });

  $('#sidebarCollapseX').on('click', function () {
    $('#sidebar').removeClass('active');
  });

  $('#sidebarCollapse').on('click', function () {
    if ($('#sidebar').hasClass('active')) {
      $('.overlay').addClass('visible');
      console.log("it's working!");
    }
  });

  $('#sidebarCollapseX').on('click', function () {
    $('.overlay').removeClass('visible');
  });
});
// ------------------------------- FAQ ----------------
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
