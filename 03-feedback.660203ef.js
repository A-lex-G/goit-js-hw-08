document.querySelector(".feedback-form").addEventListener("submit",(function(e){e.preventDefault(),console.dir(e.currentTarget.elements);const o=new FormData(e.currentTarget);console.log(o),o.forEach(((e,o)=>{console.log(o,e)}))}));
//# sourceMappingURL=03-feedback.660203ef.js.map
