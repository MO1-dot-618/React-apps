(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(2),c=n.n(a);n(12),n(13);const l=[{question:"How many time zones are there in Russia?",option1:"11",option2:"1",option3:"5",option4:"8",answer:1},{question:"What country has the most islands in the world?",option1:"Sweden",option2:"Indonesia",option3:"Philippines",option4:"Canada",answer:1},{question:"How many stripes are there on the US flag?",option1:"10",option2:"12",option3:"13",option4:"15",answer:3},{question:"When was Netflix founded?",option1:"1997",option2:"2001",option3:"2009",option4:"2015",answer:1},{question:"Name Disney's first film?",option1:"Cinderella",option2:"Sleeping Beauty",option3:"Snow White",option4:"Pinocchio",answer:3}];var s=function(){let[e,t]=Object(o.useState)(0),[n,a]=Object(o.useState)(l[e]),[c,s]=Object(o.useState)(null),[r,u]=Object(o.useState)(0);function d(e){document.querySelectorAll(".quiz-container li").forEach(e=>e.classList.remove("selected")),e.target.classList.add("selected"),s(e.target.id)}return Object(o.useEffect)(()=>{document.getElementById("next-question-button").disabled=!0},[]),i.a.createElement("div",{className:"quiz-container"},i.a.createElement("h2",null,e+1,". ",n.question),i.a.createElement("ul",null,i.a.createElement("li",{id:"1",onClick:d},n.option1),i.a.createElement("li",{id:"2",onClick:d},n.option2),i.a.createElement("li",{id:"3",onClick:d},n.option3),i.a.createElement("li",{id:"4",onClick:d},n.option4)),i.a.createElement("div",{class:"button-container"},i.a.createElement("button",{id:"check-answer-button",onClick:function(){const e=document.getElementById(c);e.classList.remove("selected"),n.answer==c?(e.classList.add("correct"),u(++r)):e.classList.add("wrong"),document.getElementById("next-question-button").disabled=!1,document.getElementById("check-answer-button").disabled=!0}},"Check answer"),i.a.createElement("button",{id:"next-question-button",onClick:function(){e===l.length-1?function(){const e=document.querySelector(".quiz-container");e.innerHTML="";const t=document.createElement("h2");t.textContent="Your score is ".concat(r," out of ").concat(l.length),e.appendChild(t)}():(t(++e),a(l[e]),e===l.length-1&&(document.getElementById("next-question-button").textContent="Done"),s(null),document.querySelectorAll(".quiz-container li").forEach(e=>{e.classList.remove("correct","wrong","selected")}),document.getElementById("next-question-button").disabled=!0,document.getElementById("check-answer-button").disabled=!1)}},"Next question")),i.a.createElement("div",{className:"index"},e+1," of ",l.length," questions"))};var r=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Test your knowledge"),i.a.createElement(s,null)))};c.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(r,null)))},3:function(e,t,n){e.exports=n(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.dd376b09.chunk.js.map