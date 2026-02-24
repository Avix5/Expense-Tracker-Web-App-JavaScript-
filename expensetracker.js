

let form=document.getElementById("expensesform");
// let body=document.getElementById("tbdoy");
let sum=[]
//  let final=0

form.addEventListener("submit",function(e){
    e.preventDefault()
    let expenses=document.getElementById("expenses").value
    let amount=document.getElementById("amount").value
    let category=document.getElementById("category").value
    let date=document.getElementById("date").value
    let body=document.getElementById("tbody")
    let tr=document.createElement("tr");

  

    // console.log(sum)

    tr.innerHTML=`
        <td>${expenses}</td>
        <td>${amount}</td>
        <td>${category}</td>
        <td>${date}</td>
        <td ><button class="del">Delete</button></td>`
        body.appendChild(tr)

        form.reset()
          sum.push(Number(amount))
       
           let final=0

          for (i=0; i<sum.length;i++){
            final+=sum[i]
            // console.log("fesd",sum[i])
          } 
          let total=document.getElementById("total")
          total.innerText=(`your total expense is ${final}`)

          console.log(final)

        body.addEventListener("click",function(e){
            if(e.target.classList.contains("del")){
                e.target.closest("tr").remove()
            }
        })
})
    