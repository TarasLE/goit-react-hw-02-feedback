(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,a){e.exports={Container:"Notification_Container__le-kX",Message:"Notification_Message__2pKJR"}},11:function(e,t,a){e.exports={App:"App_App__2ahi6"}},2:function(e,t,a){e.exports={StatList:"Statictics_StatList__2eBW6",Container:"Statictics_Container__28blT",ContainerTotal:"Statictics_ContainerTotal__1X8yO",TotalData:"Statictics_TotalData__3kNpy"}},20:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),i=a(6),s=a.n(i),o=a(7),r=a(8),l=a(9),d=a(14),b=a(12),j=a(2),u=a.n(j),h=a(10),O=a.n(h);function p(e){var t=e.message;return Object(n.jsx)("h2",{className:O.a.Message,children:t})}function _(e){var t=e.good,a=e.neutral,c=e.bad,i=e.total,s=e.positivePercentage;return Object(n.jsx)("div",{className:u.a.Container,children:i>0?Object(n.jsxs)("div",{className:u.a.Container,children:[Object(n.jsxs)("ul",{className:u.a.StatList,children:[Object(n.jsx)("li",{children:Object(n.jsxs)("h2",{children:["Good: ",t]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("h2",{children:["Neutral: ",a]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("h2",{children:["Bad: ",c]})})]}),Object(n.jsxs)("div",{className:u.a.ContainerTotal,children:[Object(n.jsxs)("h2",{class:u.a.TotalData,children:["Total:",i]}),Object(n.jsxs)("h2",{class:u.a.TotalData,children:["positive Feedback: ",s,"%"]})]})]}):Object(n.jsx)(p,{message:"No feedback given"})})}var k=a(13),v=a(3),x=a.n(v);function f(e){var t=e.options,a=e.onLeaveFeedback,c=Object(k.a)(Object.keys(t));return Object(n.jsx)("div",{className:x.a.Container,children:Object(n.jsx)("ul",{className:x.a.OptList,children:c.map((function(e){return Object(n.jsx)("li",{className:x.a.OptItem,children:Object(n.jsx)("button",{type:"button",onClick:function(){return a(e)},className:x.a.FeedbackBtn,children:e})},e)}))})})}var m=a(5),F=a.n(m);function g(e){var t=e.title,a=e.children;return Object(n.jsxs)("div",{className:F.a.Container,children:[Object(n.jsx)("h1",{className:F.a.FeedbackTitle,children:t}),a]})}var N=a(11),C=a.n(N),T=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){e.setState(Object(o.a)({},t,e.state[t]+1))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return e.countTotalFeedback()>0?Math.round(Number(e.state.good/e.countTotalFeedback()*100)):0},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.countPositiveFeedbackPercentage(),t=this.countTotalFeedback();return Object(n.jsxs)("div",{className:C.a.App,children:[Object(n.jsx)(g,{title:"Please leave feedback",children:Object(n.jsx)(f,{options:this.state,onLeaveFeedback:this.handleFeedback})}),Object(n.jsx)(g,{title:"Statistics",children:Object(n.jsx)(_,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:t,positivePercentage:e})})]})}}]),a}(c.Component);T.defaultProps={},s.a.render(Object(n.jsx)(T,{}),document.querySelector("#root"))},3:function(e,t,a){e.exports={Container:"FeedbackOption_Container__2WLy0",OptList:"FeedbackOption_OptList__1hg9v",OptItem:"FeedbackOption_OptItem__20hvN",FeedbackBtn:"FeedbackOption_FeedbackBtn__3a4pb"}},5:function(e,t,a){e.exports={Container:"Section_Container__P1pe7",FeedbackTitle:"Section_FeedbackTitle___QwWp"}}},[[20,1,2]]]);
//# sourceMappingURL=main.50639843.chunk.js.map