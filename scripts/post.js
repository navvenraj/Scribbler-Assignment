var authorNode = document.getElementById("author");
var titleNode = document.getElementById("postTitle");
var contentNode = document.getElementById("postContent");
var likeCounter = 0;

window.onload = function() {
  // Fetch data from Session storage to fetch the details of the clicked post
  authorNode.innerHTML = sessionStorage.getItem("author");
  titleNode.innerHTML = sessionStorage.getItem("postTitle");
  contentNode.innerHTML = sessionStorage.getItem("postContent");
};

document.addEventListener(
  "click",
  function(e) {
    if (hasClass(e.target, "saved")) {
      // edit button clicked
      e.target.classList.remove("saved");
      e.target.classList.add("unsaved");
      e.target.innerHTML = 'Save <i class="fa fa-save"></i>';
      titleNode.setAttribute("contenteditable", true);
      titleNode.classList.add("editable");
      contentNode.setAttribute("contenteditable", true);
      contentNode.classList.add("editable");
    } else if (hasClass(e.target, "unsaved")) {
      // save button clicked
      e.target.classList.remove("unsaved");
      e.target.classList.add("saved");
      e.target.innerHTML = 'Edit <i class="fa fa-edit"></i>';
      titleNode.setAttribute("contenteditable", false);
      titleNode.classList.remove("editable");
      contentNode.setAttribute("contenteditable", false);
      contentNode.classList.remove("editable");
      // Updating Session storage on Save to reflect correct data if only this page is refreshed
      sessionStorage.setItem("postTitle", titleNode.innerText);
      sessionStorage.setItem("postContent", contentNode.innerText);
    } else if (hasClass(e.target, "like-button")) {
      // Like Button Clicked
      likeCounter++;
      e.target.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked';
      if (likeCounter == 1) {
        document.getElementById("likeText").innerHTML = "1 person likes this!";
      } else if (likeCounter > 1) {
        document.getElementById("likeText").innerHTML =
          likeCounter + " people like this!";
      }
    } else if (hasClass(e.target, "comment-button")) {
      // Comment Button Clicked
      var commentText = document.getElementById("commentBox").value.trim();
      if (commentText !== "") {
        // Logic to post latest comment at the top
        document.getElementById("commentsWrapper").innerHTML =
          "<p>" +
          commentText +
          "</p>" +
          document.getElementById("commentsWrapper").innerHTML;
      }
      // Emptying the value after adding the comment to All comments section
      document.getElementById("commentBox").value = "";
    }
  },
  false
);
function hasClass(elem, className) {
  return elem.classList.contains(className);
}
function EditSaveClicked()
{
    let variable1 = document.getElementById("edit-save");
    let UpdateHeading = document.getElementById("blogTitleNew") ;
    let UpdatePara = document.getElementById("blogBody") ;
    if(variable1.textContent.includes('Edit'))
    {
        variable1.innerHTML = 'Save &#x1f4be;' ;
        UpdateHeading.setAttribute('contenteditable' , "true") ;
        UpdatePara.setAttribute('contenteditable' , 'true') ;
        UpdateHeading.style.border = '1px black solid' ;
        UpdatePara.style.border = '1px black solid' ;
    }
    else if(variable1.textContent.includes('Save'))
    {
        variable1.innerHTML = 'Edit &#x270D;'
        UpdateHeading.setAttribute('contenteditable' , "false") ;
        UpdatePara.setAttribute('contenteditable' , 'false') ;
        UpdateHeading.style.border = '';
        UpdatePara.style.border = '' ;
    }
    
}
let likes = 0 ;
function incLikes()
{   likes = likes + 1 ;
    console.log(likes) ;
    let ContentChange = document.getElementById('like-number-update') ;
   if(likes === 1)
   {
       ContentChange.innerHTML = `${likes} person likes this` ;
   }
   else
   {
    ContentChange.innerHTML =`${likes} people have like this !` ;
   }
}
//Adding modal properties and funcrioning
// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
// Get the button that opens the modal
var btn = document.getElementById("topButtons1");
var btn2 = document.getElementById("topButtons2");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
function AddComment()
{
  let CommentToAdd = document.getElementById("text-area");
  let ShowComment = document.getElementById("addedComments") ;
  ShowComment.innerHTML = `${CommentToAdd}` ;
  console.log(CommentToAdd) ;

}