// js for handling the sidebar hover events
document.getElementById('sidebar').addEventListener('mouseover', function(){
  document.querySelectorAll('.name').forEach(function(element){
    element.style.display = "inline";
  })

  document.getElementsByClassName('overlay')[0].style.display = "block";
});

document.getElementById('sidebar').addEventListener('mouseout', function(){
  document.querySelectorAll('.name').forEach(function(element){
    element.style.display = "none";
  })

  document.getElementsByClassName('overlay')[0].style.display = "none";
});

// modal-box-js

// to open a modal-box
document.querySelectorAll('.event-box > div').forEach(function(box){
  box.addEventListener('click', function(){
    this.parentElement.nextElementSibling.style.display = "block";
  })
})

// to close the modal-box
document.querySelectorAll('.modal-box').forEach(function(box){
  box.addEventListener('click', function(e){
    if(e.target == box){
      box.style.display = "none";
    }
  })
})

// js to display the same image on modals as their event boxes
document.querySelectorAll('.modal-poster > img').forEach(function(img){
  address = img.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.getAttribute('src');

  img.setAttribute('src', address);
});

// js to show the same event heading on modals as on their event boxes
document.querySelectorAll('.modal-details > h4').forEach(function(heading){
  heading_content = heading.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.lastElementChild.innerText;

  heading.innerHTML = heading_content
});
