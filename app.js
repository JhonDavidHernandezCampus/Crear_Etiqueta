import  myMenu  from "./components/myMenu.js";

myMenu.show();


import "./components/myMenu.js"


let constructor = ({color = "red"})=>{
        this.color = color;
}


let padre = {};
let hijo = {};

hijo = Object.create(padre);
hijo.constructor({color:"verde"})