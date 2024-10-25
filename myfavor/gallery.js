// gallery.js

// Function to update the displayed image and text.
function upDate(previewPic) {
    console.log(`onmouseover or onfocus triggered for: ${previewPic.alt}`);
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
  }
  
  // Function to reset the image and text.
  function unDo() {
    console.log('onmouseout or onblur triggered');
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display it here.";
  }
  
  // Function to set focusable attributes dynamically on page load.
  function addTabFocus() {
    console.log('Page loaded. Adding tabindex to all images.');
    const images = document.querySelectorAll('.preview');
  
    // Loop through each image and set the tabindex.
    for (let img of images) {
      img.setAttribute('tabindex', '0');
    }
  }
  
  // Add event listener for the onload event.
  window.onload = addTabFocus;
  