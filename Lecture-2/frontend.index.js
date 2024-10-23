import { postproduct } from "./api.js"

const getdata = async () => {
    let request = await fetch("http://localhost:3050/")
    let response = await request.json()
    mapper(response)
}
getdata()

const mapper = (data) => {
    data.map((ele) => {
        let username = document.createElement("p")
        username.innerHTML = ele.username
        let password = document.createElement("p")
        password.innerHTML = ele.password
        let number = document.createElement("p")
        number.innerHTML = ele.number
        let email = document.createElement("p")
        email.innerHTML = ele.email
        let btn=document.createElement("button")
        btn.innerHTML="Create"
        let btn2=document.createElement("button")
        btn2.innerHTML="Delete"

        let div = document.createElement("div")
        div.append(username, password, number, email,btn,btn2)

        document.getElementById("api").append(div)
    })
}

const handleproduct=(e)=>{
    e.preventDefault();
    
    let product={
        title:document.getElementById("title").value,
        price:document.getElementById("price").value,
        image:document.getElementById("img").value,
        category:document.getElementById("category").value
    }
   
   postproduct(product)
}
   document.getElementById("productdata").addEventListener("submit",handleproduct)