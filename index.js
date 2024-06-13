const btn = document.getElementById("add-todo");
console.log(btn);
const handleAddTodo = () => {
  //craete li element
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const input = document.querySelector("input");
  const inpuText = input.value;
  li.textContent = inpuText;
  console.log(li);
  ul.appendChild(li);
  //   console.log(appendElm);

  //access input element
  //set the text to my list item
  //append list item to ul
};
btn.addEventListener("click", handleAddTodo);
//exercicse solution
// const handleMouseOver = ()=> toggleColor(true)
// const handleMouseLeave = () => toggleColor(false)
// element.addEventListener('mouseover', handleMouseOver )
// element.addEventListener('mouseleave', handleMouseLeave)
