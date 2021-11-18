

//header
var header=document.createElement("header")
header.setAttribute("class","container-fluid")
document.body.appendChild(header)

//img
var imglogo=document.createElement("img")
imglogo.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7hQReNpz-xsicrsRXs3QkkaOIjZJjd-JVA&usqp=CAU")
imglogo.setAttribute("alt","imglogo")
imglogo.setAttribute("id","imglogo")
imglogo.setAttribute("href","http://127.0.0.1:5500/index.html")
header.appendChild(imglogo)

//wsname
var wsname=document.createElement("div")
wsname.innerText="cutycats"
wsname.setAttribute("class","ws-name")
wsname.setAttribute("href","/ws-name")
header.appendChild(wsname)

//nav
var nav=document.createElement("nav")
header.appendChild(nav)

//ul
var ul=document.createElement("ul")
nav.appendChild(ul)

//li
var li1=document.createElement("li")
ul.appendChild(li1)

var li2=document.createElement("li")
ul.appendChild(li2)

//a tag
var a1=document.createElement("a")
a1.setAttribute("href","/explore")
a1.innerText="Explore";
li1.appendChild(a1)

var a2=document.createElement("a")
a2.setAttribute("href","/about")
a2.innerText="About";
li2.appendChild(a2)

//main
var main=document.createElement("main")
main.setAttribute("class","container-fluid")
document.body.appendChild(main)

//wrapper
var wrap=document.createElement("div")
wrap.setAttribute("class","wrap")
main.appendChild(wrap)

//main content
//h1
// var h1=document.createElement("h1")
// h1.innerText="All about cats";
// h1.setAttribute("id","h1")
// main.appendChild(h1)

// //footer
// var footer=document.createElement("p")
// footer.innerText="© Copyright CUTYCATS 2021 By accessing any information provided in this website, you implicitly agree to the terms and conditions."
// footer.setAttribute("class","footer")
// document.body.appendChild(footer)

//hr
var hr=document.createElement("hr")
main.appendChild(hr)

//searchbar
var sdiv=document.createElement("div")
sdiv.setAttribute("id","sdiv")
sdiv.setAttribute("class","sdiv")
wrap.appendChild(sdiv)

// var sspan=document.createElement("span")
// sspan.setAttribute("id","sspan")
// sspan.setAttribute("class","sdiv")
// sspan.style.fontFamily="sans-serif"
// sspan.innerText="https://cataas.com/cat/"
// sdiv.appendChild(sspan)

var sbar=document.createElement("input")
sbar.setAttribute("id","sbar")
sbar.setAttribute("class","sdiv")
sbar.setAttribute("placeholder", "search here...")
sdiv.appendChild(sbar)

var sbutton=document.createElement("button")
sbutton.innerText="search"
sbutton.setAttribute("id","sbtn")
sbutton.setAttribute("class","sdiv")
sdiv.appendChild(sbutton)


//api content
var galDiv=document.createElement("div")
galDiv.setAttribute("class","image-grid")
galDiv.setAttribute("id","apiids")
wrap.appendChild(galDiv)


// fetched data from API
var arr=[]
// fetch("https://cataas.com/api/cats?tags=cute")
// .then(res=>res.json())
// .then(data=>{console.log(data)
   
//     for(i=0;i<=data.length;i++){
//          var pic=document.createElement("img")
//          arr.push("https://cataas.com/cat/" + data[i].id)
//          pic.setAttribute("src",arr[i])
//          galDiv.appendChild(pic)
//          console.log(arr[i])
       
//     }
// });  


// fetch using async func

async function getapiData(){
    try {
        var data = await fetch("https://cataas.com/api/cats?tags=cute")
        .then(res=>res.json())
        .then(data=>{

        for(i=0;i<=data.length;i++){

        
        
          
            //img
            var pic=document.createElement("img")
            arr.push("https://cataas.com/cat/" + data[i].id)
            pic.setAttribute("src",arr[i])
            pic.setAttribute("alt",data[i].tags)
            pic.setAttribute("class","gallery")
            galDiv.appendChild(pic)

            console.log(arr[i])
            
          
        }

    })
}
     catch (error) {
        console.log(error)
    }

}

getapiData()





