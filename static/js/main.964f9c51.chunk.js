(this["webpackJsonptask-tracker-app"]=this["webpackJsonptask-tracker-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),s=n.n(r),o=(n(15),n(10)),i=n(2),l=n.n(i),u=n(4),d=n(3),j=n(0),b=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"btn",onClick:e.onClick,style:{backgroundColor:e.col},children:e.text}),console.log(e.onClick)]})},p=b;b.defaultProps={col:"steelblue"};var h=function(e){var t=e.name,n=e.showAddTask,c=e.text,a=e.col;return Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)(p,{text:c,col:a,onClick:n})]})};h.defaultProps={name:"Task Tracker"};var f=h,x=n(9),O=function(e){var t=e.tasks,n=e.deletetask,c=e.onToggle;return Object(j.jsxs)("div",{className:t.remainder?"tasks reminder":"tasks",onDoubleClick:function(){return c(t._id,t.remainder)},children:[Object(j.jsxs)("h3",{children:[t.text," ",Object(j.jsx)(x.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t._id)}})]}),Object(j.jsx)("p",{children:t.date})]})},k=function(e){var t=e.tasks,n=e.deletetask,c=e.onToggle;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)(O,{tasks:e,deletetask:n,onToggle:c},e.id)}))})},v=function(e){var t=e.onAdd,n=e.change,a=e.setChange,r=Object(c.useState)(""),s=Object(d.a)(r,2),o=s[0],i=s[1],b=Object(c.useState)(!1),p=Object(d.a)(b,2),h=p[0],f=p[1],x=Object(c.useState)(""),O=Object(d.a)(x,2),k=O[0],v=O[1],g=function(){var e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/post",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({text:o,remainder:h,date:k})});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),a(!n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==o){var n=Math.floor(1e3*Math.random())+1;t({id:n,text:o,date:k,remainder:h}),i(""),v(""),f(!1)}else alert("Please add a task")},method:"post",children:[Object(j.jsx)("label",{children:"task"}),Object(j.jsx)("div",{className:"form-control",children:Object(j.jsx)("input",{type:"text",value:o,placeholder:"Task",onChange:function(e){i(e.target.value)}})}),Object(j.jsx)("label",{children:"date"}),Object(j.jsx)("div",{className:"form-control",children:Object(j.jsx)("input",{type:"text",value:k,placeholder:"date",onChange:function(e){v(e.target.value)}})}),Object(j.jsx)("label",{children:"remainder"}),Object(j.jsx)("div",{className:"form-control form-control-check",children:Object(j.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){f(e.currentTarget.checked)}})}),Object(j.jsx)("div",{className:"btn btn-block",children:Object(j.jsx)("input",{type:"submit",value:"save task",onClick:g})})]})};var g=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(d.a)(r,2),i=s[0],b=s[1],p=Object(c.useState)([]),h=Object(d.a)(p,2),x=h[0],O=h[1],g=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/get");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),O(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){g(),console.log(x)}),[i]);var m=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/delete",{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_id:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,console.log(c),b(!i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/put",{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_id:t,remainder:n})});case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,console.log(a),b(!i);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(f,{showAddTask:function(){return a(!n)},col:n?"red":"green",text:n?"close":"add"}),n&&Object(j.jsx)(v,{onAdd:function(e){O([].concat(Object(o.a)(x),[e]))},change:i,setChange:b}),x.length>0?Object(j.jsx)(k,{tasks:x,deletetask:m,onToggle:y}):"No Tasks to show"]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.964f9c51.chunk.js.map