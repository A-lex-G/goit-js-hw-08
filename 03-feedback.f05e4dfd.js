document.querySelector(".feedback-form").addEventListener("submit",(function(e){e.preventDefault(),console.dir(e.currentTarget.elements);var n=new FormData(e.currentTarget);console.log(n),n.forEach((function(e,n){console.log(n,e)}))}));
//# sourceMappingURL=03-feedback.f05e4dfd.js.map
