import{initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getDatabase ,ref , push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetting={
    databaseURL:"https://agautowashing-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const ordersInDB = ref(database , "orders")

const input = document.getElementById("name")
const input2 = document.getElementById("Phone")
const input3 = document.getElementById("City")
const input4 = document.getElementById("Model")
const button = document.getElementById("addButton")

button.addEventListener("click", function(){
    let name= input.value
    let phone= input2.value
    let city= input3.value
    let model= input4.value
    push(ordersInDB , name , phone , city , model)
    alert(`${name}, ${phone} , ${city} , ${model} added to database`);
})


console.log(app);



