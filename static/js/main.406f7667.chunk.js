(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{18:function(e,t,n){e.exports={Container:"Notification_Container__le-kX"}},19:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n(5),s=n.n(i),r=n(6),o=n(7),l=n(8),d=n(12),b=n(10),j=n(4),u=n.n(j);n(18);function h(e){var t=e.message;return Object(c.jsx)("h2",{children:t})}var O=function(e){var t=e.good,n=e.neutral,a=e.bad,i=e.total,s=e.positivePercentage;return Object(c.jsx)("div",{className:u.a.Container,children:i>0?Object(c.jsxs)("div",{children:[Object(c.jsxs)("ul",{className:u.a.StatList,children:[Object(c.jsx)("li",{children:Object(c.jsxs)("h2",{children:["Good: ",t]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("h2",{children:["Neutral: ",n]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("h2",{children:["Bad: ",a]})})]}),Object(c.jsxs)("h2",{children:["Total:",i]}),Object(c.jsxs)("h2",{children:["positive Feedback: ",s,"%"]})]}):Object(c.jsx)(h,{message:"No feedback given"})})},p=n(11),v=n(2),x=n.n(v);function f(e){var t=e.options,n=e.onLeaveFeedback,a=Object(p.a)(Object.keys(t));return Object(c.jsx)("div",{className:x.a.Container,children:Object(c.jsx)("ul",{className:x.a.OptList,children:a.map((function(e){return Object(c.jsx)("li",{className:x.a.OptItem,children:Object(c.jsx)("button",{type:"button",onClick:function(){return n(e)},children:e})},e)}))})})}var k=n(9),_=n.n(k);function g(e){var t=e.title,n=e.children;return Object(c.jsxs)("div",{className:_.a.Container,children:[Object(c.jsx)("h1",{children:t}),n]})}var m=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){e.setState(Object(r.a)({},t,e.state[t]+1))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return e.countTotalFeedback()>0?Math.round(Number(e.state.good/e.countTotalFeedback()*100)):0},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.countPositiveFeedbackPercentage(),t=this.countTotalFeedback();return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(g,{title:"Please leave feedback",children:Object(c.jsx)(f,{options:this.state,onLeaveFeedback:this.handleFeedback})}),Object(c.jsx)(g,{title:"Statistics",children:Object(c.jsx)(O,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:t,positivePercentage:e})})]})}}]),n}(a.Component);m.defaultProps={},s.a.render(Object(c.jsx)(m,{}),document.querySelector("#root"))},2:function(e,t,n){e.exports={Container:"FeedbackOption_Container__2WLy0",OptList:"FeedbackOption_OptList__1hg9v",OptItem:"FeedbackOption_OptItem__20hvN"}},4:function(e,t,n){e.exports={StatList:"Statictics_StatList__2eBW6",Container:"Statictics_Container__28blT"}},9:function(e,t,n){e.exports={Container:"Section_Container__P1pe7"}}},[[19,1,2]]]);
//# sourceMappingURL=main.406f7667.chunk.js.map