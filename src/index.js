import "./styles.css";

if (document.readyState !== "loading") {
  initCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initCode();
  });
}

function initCode() {
  const addTextButton = document.getElementById("add-comment");
  const removeCommentsButton = document.getElementById("remove-comments");
  const ul = document.getElementById("comment-list");

  addTextButton.addEventListener("click", function () {
    let newItem = document.createElement("li");
    let newText = document.createElement("TEXTAREA");

    newItem.innerHTML = "Comment: ";

    ul.appendChild(newItem);
    ul.appendChild(newText);
  });

  removeCommentsButton.addEventListener("click", function () {
    var con = confirm("Remove all comments?");
    var count = ul.childElementCount;
    if (con) {
      if (count > 0) {
        for (var i = 0; i < count; i++) {
          ul.removeChild(ul.lastChild);
        }
      } else {
      }
    } else {
      console.log("Confimation canceled");
    }
  });
}

/*
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
*/
