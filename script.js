


let profile ={
    img:"https://play-lh.googleusercontent.com/7oW_TFaC5yllHJK8nhxHLQRCvGDE8jYIAc2SWljYpR6hQlFTkbA6lNvER1ZK-doQnQ"
    ,name:"harry potter" ,
    age:19,
    mobileNo:7860378217,
   linkdinId:"linkdin.com/harry",
   twitter:"@harry'_potter",
    imailID: "@harry_potter",
    description:"I am a web devloper"

}


let maincon = document.getElementById("maincon")

let card = document.createElement("div")
card.className="card"

card.innerHTML=`
<img src="${profile.img}"/>
<h1>${profile.name}</h1>
<p>${profile.description}</p>
<h3> M.no.${profile.mobileNo}</h3>
<ul>
            <li><a href="https://business.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a> ${profile.mobileNo}</li>
            <li><a href="https://workspace.google.com/intl/en-US/gmail/"><i class="fa-solid fa-envelope"></i></a> ${profile.imailID}</li>
</ul>
<ul>
         <li><a href="https://x.com/?lang=en"><i class="ri-twitter-fill"></i></a> ${profile.twitter}</li>
            <li><a href="https://in.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a> ${profile.linkdinId}</li>
</ul>
<a href="https://messages.google.com/web/welcome"><button>send message</button></a>

`
maincon.appendChild(card)