const table=document.querySelector("table");
const tdArr=[];
const colorChange=(event)=>
{
    // console.log(event.target.classlist.contains("table-col"));
//  this click event will be triggered wherever i click on the table including borders but we want to access td only
if(event.target.classList.contains("table-col"))
{
   if(tdArr.length>1)
   {
    let shiftedEle=tdArr.shift();
    shiftedEle.classList.remove("hero-col");
   }
   tdArr.push(event.target);
}

tdArr.forEach((ele)=>
{
   ele.classList.add("hero-col"); 
})

}
table.addEventListener("click",colorChange);