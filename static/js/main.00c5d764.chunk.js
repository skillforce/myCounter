(this.webpackJsonpekz=this.webpackJsonpekz||[]).push([[0],[,,,,,,function(e,t,a){e.exports={resetBtn:"btnNew_resetBtn__Nmsg3",resetBtnOff:"btnNew_resetBtnOff__1P3z1",setBtn:"btnNew_setBtn__39LNI",setBtnOffCl:"btnNew_setBtnOffCl__2up5a",incBtn:"btnNew_incBtn__3_R34",incBtnOff:"btnNew_incBtnOff__3iAi_",newSetBtnClass:"btnNew_newSetBtnClass__3lJ8b"}},,function(e,t,a){e.exports={resetBtn:"btn_resetBtn__3WkMB",resetBtnOff:"btn_resetBtnOff__1zr0Q",setBtn:"btn_setBtn__hCjW2",setBtnOffCl:"btn_setBtnOffCl__3oceA",incBtn:"btn_incBtn__UG930",incBtnOff:"btn_incBtnOff__3avTM"}},function(e,t,a){e.exports={setTablet:"setTablet_setTablet__2FwGk",maxValueCl:"setTablet_maxValueCl__2NJEZ",startValueCl:"setTablet_startValueCl__3HabI",maxValueClError:"setTablet_maxValueClError__3S_Pa",startValueClError:"setTablet_startValueClError__1JE23"}},function(e,t,a){e.exports={setTablet:"setTabletNew_setTablet__3dpa9",maxValueCl:"setTabletNew_maxValueCl__24Gg7",startValueCl:"setTabletNew_startValueCl__1rIPW",maxValueClError:"setTabletNew_maxValueClError__19zMm",startValueClError:"setTabletNew_startValueClError__1nO8X"}},,function(e,t,a){e.exports={tablet:"Tablet_tablet__lVZqX",tabletTop:"Tablet_tabletTop__2z988",setMsg:"Tablet_setMsg__zSZ9Y"}},function(e,t,a){e.exports={counter:"Counter_counter__1Z09q",btn:"Counter_btn__18Q6H",counterFlex:"Counter_counterFlex__CxVc7"}},function(e,t,a){e.exports={counter:"CounterNew_counter__cTnUP",btn:"CounterNew_btn__17dCR",counterFlex:"CounterNew_counterFlex__1ixVY"}},function(e,t,a){e.exports={tablet:"TabletNew_tablet__1tKAY",tabletTop:"TabletNew_tabletTop__3Homs",setMsg:"TabletNew_setMsg__1w_0F"}},function(e,t,a){e.exports={counter:"NativeTablet_counter__3BJAs",btn:"NativeTablet_btn__25DOD",counterFlex:"NativeTablet_counterFlex__27bDL"}},,,,,function(e,t,a){e.exports={counter:"SeterTablet_counter__2vdbU",btn:"SeterTablet_btn__1a6IK",counterFlex:"SeterTablet_counterFlex__1gTba"}},,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),l=a(24),s=a.n(l),u=(a(30),a(3)),r=(a(31),a(12)),c=a.n(r),i=a(0),o=c.a.tablet,b=c.a.tabletTop,O=c.a.setMsg,V=function(e){var t=e.countValue,a=(e.maxValue,e.btnOnOf),n=e.inStartValue,l=e.inMaxValue,s=t>=n?t<=l?n<l?n>=0?Object(i.jsxs)("div",{children:[a&&t,!a&&Object(i.jsx)("div",{className:O,children:"Press 'set' to programm counter"})]}):Object(i.jsx)("div",{className:O,children:"Start value must be 0(zero) or greater"}):Object(i.jsx)("div",{className:O,children:"Max value must be greater than Start Value"}):Object(i.jsx)("div",{className:O,children:"Please type reset!"}):Object(i.jsx)("div",{className:O,children:"Please type set!"});return Object(i.jsx)("div",{className:+t<l?o:b,children:s})},j=a(13),x=a.n(j),d=a(8),f=a.n(d),_=f.a.resetBtn,S=f.a.resetBtnOff,v=f.a.incBtn,m=f.a.incBtnOff,N=f.a.setBtn,C=f.a.setBtnOffCl,h=function(e){var t=e.resetCountValue,a=e.countValue,n=e.updateCountValue,l=e.typeBtn,s=(e.maxValue,e.inMaxValue),u=e.inStartValue,r=(e.setStartValue,e.setMaxValue,e.btnOnOf),c=e.setBtnOnOf,o=(e.startValue,u>s),b=u<0,O=!r||a===u||b||o,V=!r||a>=s||b||o,j=r||b||o,x=a>0&&!b&&r&&!o?_:S,d=a<s&&!b&&r&&!o?v:m,f=r||b||o?C:N,h="reset"===l?Object(i.jsx)("div",{className:x,children:Object(i.jsx)("button",{disabled:O,onClick:t,children:"reset"})}):"",B="inc"===l?Object(i.jsx)("div",{className:d,children:Object(i.jsx)("button",{disabled:V,onClick:n,children:"inc"})}):"",p="set"===l?Object(i.jsx)("div",{className:f,children:Object(i.jsx)("button",{disabled:j,onClick:function(){t&&(t(),localStorage.setItem("InStartValue",JSON.stringify(u)),localStorage.setItem("InMaxValue",JSON.stringify(s))),c&&c(!0)},children:"set"})}):"";return Object(i.jsxs)("div",{children:[h,B,p]})},B=a(9),p=a.n(B),g=p.a.setTablet,M=p.a.maxValueCl,I=p.a.startValueCl,T=p.a.maxValueClError,y=p.a.startValueClError,w=function(e){var t=e.setInStartValue,a=e.inStartValue,n=e.setInMaxValue,l=e.inMaxValue,s=e.setBtnOnOf,u=a<l,r=l&&u?M:T,c=a>-1&&u?I:y;return Object(i.jsxs)("div",{className:g,children:[Object(i.jsxs)("div",{className:r,children:["max value: ",Object(i.jsx)("input",{type:"number",value:l,onChange:function(e){e.currentTarget.value?n(+e.currentTarget.value):n(""),s(!1)}})]}),Object(i.jsxs)("div",{className:c,children:["start value: ",Object(i.jsx)("input",{type:"number",value:a,onChange:function(e){e.currentTarget.value?t(e.currentTarget.value):t(""),s(!1)}})]})]})},J=x.a.counter,F=x.a.btn,E=x.a.counterFlex,k=function(e){var t=e.countValue,a=e.updateCountValue,n=e.resetCountValue,l=e.maxValue,s=e.startValue,u=e.setStartValue,r=e.setMaxValue,c=e.setInStartValue,o=e.inStartValue,b=e.setInMaxValue,O=e.inMaxValue,j=e.btnOnOf,x=e.setBtnOnOf;return Object(i.jsxs)("div",{className:E,children:[Object(i.jsxs)("div",{className:J,children:[Object(i.jsx)(V,{inStartValue:o,btnOnOf:j,maxValue:l,countValue:t,inMaxValue:O}),Object(i.jsxs)("div",{className:F,children:[Object(i.jsx)(h,{btnOnOf:j,inStartValue:o,inMaxValue:O,maxValue:l,countValue:t,typeBtn:"inc",updateCountValue:a}),Object(i.jsx)(h,{btnOnOf:j,inStartValue:o,inMaxValue:O,countValue:t,typeBtn:"reset",resetCountValue:n,startValue:s})]})]}),Object(i.jsxs)("div",{className:J,children:[Object(i.jsx)(w,{setBtnOnOf:x,setInStartValue:c,setInMaxValue:b,inMaxValue:O,inStartValue:o}),Object(i.jsx)("div",{className:F,children:Object(i.jsx)(h,{btnOnOf:j,setBtnOnOf:x,resetCountValue:n,setMaxValue:r,countValue:t,typeBtn:"set",inMaxValue:O,inStartValue:o,setStartValue:u,startValue:s})})]})]})},P=a(14),z=a.n(P),G=a(2),A=a(15),Z=a.n(A),D=Z.a.tablet,H=Z.a.tabletTop,R=Z.a.setMsg,U=function(e){var t=e.countValue,a=(e.maxValue,e.btnOnOf),n=e.inStartValue,l=e.inMaxValue,s=t>=n?t<=l?n<l?n>=0?Object(i.jsxs)("div",{children:[a&&t,!a&&Object(i.jsx)("div",{className:R,children:"Press 'set' to programm counter"})]}):Object(i.jsx)("div",{className:R,children:"Start value must be 0(zero) or greater"}):Object(i.jsx)("div",{className:R,children:"Max value must be greater than Start Value"}):Object(i.jsx)("div",{className:R,children:"Please type reset!"}):Object(i.jsx)("div",{className:R,children:"Please type set!"});return Object(i.jsx)("div",{className:+t<l?D:H,children:s})},W=a(16),Y=a.n(W),q=a(6),K=a.n(q),L=a(7),Q=K.a.resetBtn,X=K.a.resetBtnOff,$=K.a.incBtn,ee=K.a.incBtnOff,te=K.a.setBtn,ae=K.a.setBtnOffCl,ne=K.a.newSetBtnClass,le=function(e){var t=e.resetCountValue,a=e.countValue,n=e.updateCountValue,l=e.typeBtn,s=(e.maxValue,e.inMaxValue),u=e.inStartValue,r=(e.setStartValue,e.setMaxValue,e.btnOnOf),c=e.setBtnOnOf,o=(e.startValue,e.btnVer),b=e.setBtnVer,O=u>s,V=u<0,j=!r||a===u||V||O,x=!r||a>=s||V||O,d=r||V||O,f=a>0&&!V&&r&&!O?Q:X,_=a<s&&!V&&r&&!O?$:ee,S=r||V||O?ae:te,v=o?he.Second_ver:he.First_ver,m=o?"Go to the second ver.":"Go to the first ver.",N="reset"===l?Object(i.jsx)("div",{className:f,children:Object(i.jsx)("button",{disabled:j,onClick:t,children:"reset"})}):"",C="inc"===l?Object(i.jsx)("div",{className:_,children:Object(i.jsx)("button",{disabled:x,onClick:n,children:"inc"})}):"",h="set"===l?Object(i.jsx)("div",{className:S,children:Object(i.jsx)("button",{disabled:d,onClick:function(){t&&(t(),localStorage.setItem("InStartValue",JSON.stringify(u)),localStorage.setItem("InMaxValue",JSON.stringify(s))),c&&c(!0)},children:"set"})}):"",B="newSet"===l?Object(i.jsx)(L.b,{to:Ne.setCounter,className:ne,children:Object(i.jsx)("button",{children:"set"})}):"",p="ChangeBtn"===l?Object(i.jsx)(L.b,{to:v,className:ne,children:Object(i.jsx)("button",{onClick:function(){b&&b(!o)},children:m})}):"",g="NavSet"===l?Object(i.jsx)(L.b,{to:Ne.NativeCounter,children:Object(i.jsx)("div",{className:S,children:Object(i.jsx)("button",{disabled:d,onClick:function(){t&&(t(),localStorage.setItem("InStartValueN",JSON.stringify(u)),localStorage.setItem("InMaxValueN",JSON.stringify(s))),c&&c(!0)},children:"set"})})}):"";return Object(i.jsxs)("div",{children:[N,C,h,B,g,p]})},se=Y.a.counter,ue=Y.a.btn,re=(Y.a.counterFlex,function(e){var t=e.countValue,a=e.updateCountValue,n=e.resetCountValue,l=e.maxValue,s=e.startValue,u=e.inStartValue,r=e.inMaxValue,c=e.btnOnOf;return Object(i.jsxs)("div",{className:se,children:[Object(i.jsx)(U,{inStartValue:u,btnOnOf:c,maxValue:l,countValue:t,inMaxValue:r}),Object(i.jsxs)("div",{className:ue,children:[Object(i.jsx)(le,{btnOnOf:c,inStartValue:u,inMaxValue:r,maxValue:l,countValue:t,typeBtn:"inc",updateCountValue:a}),Object(i.jsx)(le,{btnOnOf:c,inStartValue:u,inMaxValue:r,countValue:t,typeBtn:"reset",resetCountValue:n,startValue:s}),Object(i.jsx)(le,{btnOnOf:c,inStartValue:u,inMaxValue:r,countValue:t,resetCountValue:n,startValue:s,typeBtn:"newSet"})]})]})}),ce=a(21),ie=a.n(ce),oe=a(10),be=a.n(oe),Oe=be.a.setTablet,Ve=be.a.maxValueCl,je=be.a.startValueCl,xe=be.a.maxValueClError,de=be.a.startValueClError,fe=function(e){var t=e.setInStartValue,a=e.inStartValue,n=e.setInMaxValue,l=e.inMaxValue,s=e.setBtnOnOf,u=a<l,r=l&&u?Ve:xe,c=a>-1&&u?je:de;return Object(i.jsxs)("div",{className:Oe,children:[Object(i.jsxs)("div",{className:r,children:["max value: ",Object(i.jsx)("input",{type:"number",value:l,onChange:function(e){e.currentTarget.value?n(+e.currentTarget.value):n(""),s(!1)}})]}),Object(i.jsxs)("div",{className:c,children:["start value: ",Object(i.jsx)("input",{type:"number",value:a,onChange:function(e){e.currentTarget.value?t(e.currentTarget.value):t(""),s(!1)}})]})]})},_e=ie.a.counter,Se=ie.a.btn,ve=function(e){var t=e.countValue,a=e.resetCountValue,n=e.startValue,l=e.setStartValue,s=e.setMaxValue,u=e.setInStartValue,r=e.inStartValue,c=e.setInMaxValue,o=e.inMaxValue,b=e.btnOnOf,O=e.setBtnOnOf;return Object(i.jsxs)("div",{className:_e,children:[Object(i.jsx)(fe,{setBtnOnOf:O,setInStartValue:u,setInMaxValue:c,inMaxValue:o,inStartValue:r}),Object(i.jsx)("div",{className:Se,children:Object(i.jsx)(le,{btnOnOf:b,setBtnOnOf:O,resetCountValue:a,setMaxValue:s,countValue:t,typeBtn:"NavSet",inMaxValue:o,inStartValue:r,setStartValue:l,startValue:n})})]})},me=(z.a.counter,z.a.btn,z.a.counterFlex),Ne={NativeCounter:"/second/nativeCounter",setCounter:"/second/setTablet"},Ce=function(e){var t=e.countValue,a=e.updateCountValue,n=e.resetCountValue,l=e.maxValue,s=e.startValue,u=e.setStartValue,r=e.setMaxValue,c=e.setInStartValue,o=e.inStartValue,b=e.setInMaxValue,O=e.inMaxValue,V=e.btnOnOf,j=e.setBtnOnOf;return Object(i.jsx)("div",{className:me,children:Object(i.jsxs)(G.d,{children:[Object(i.jsx)(G.b,{path:"/second/",exact:!0,render:function(){return Object(i.jsx)(G.a,{to:Ne.NativeCounter})}}),Object(i.jsx)(G.b,{path:Ne.NativeCounter,render:function(){return Object(i.jsx)(re,{inStartValue:o,inMaxValue:O,startValue:s,maxValue:l,countValue:t,updateCountValue:a,resetCountValue:n,btnOnOf:V})}}),Object(i.jsx)(G.b,{path:Ne.setCounter,render:function(){return Object(i.jsx)(ve,{inStartValue:o,setInStartValue:c,inMaxValue:O,setInMaxValue:b,startValue:s,setStartValue:u,setMaxValue:r,countValue:t,resetCountValue:n,btnOnOf:V,setBtnOnOf:j})}})]})})},he={First_ver:"/first",Second_ver:"/second"},Be=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(0),r=Object(u.a)(s,2),c=r[0],o=r[1],b=Object(n.useState)(5),O=Object(u.a)(b,2),V=O[0],j=O[1],x=Object(n.useState)(5),d=Object(u.a)(x,2),f=d[0],_=d[1],S=Object(n.useState)(0),v=Object(u.a)(S,2),m=v[0],N=v[1],C=Object(n.useState)(0),h=Object(u.a)(C,2),B=h[0],p=h[1],g=Object(n.useState)(0),M=Object(u.a)(g,2),I=M[0],T=M[1],y=Object(n.useState)(0),w=Object(u.a)(y,2),J=w[0],F=w[1],E=Object(n.useState)(5),P=Object(u.a)(E,2),z=P[0],A=P[1],Z=Object(n.useState)(5),D=Object(u.a)(Z,2),H=D[0],R=D[1],U=Object(n.useState)(!0),W=Object(u.a)(U,2),Y=W[0],q=W[1],K=Object(n.useState)(!0),Q=Object(u.a)(K,2),X=Q[0],$=Q[1];Object(n.useEffect)((function(){!function(){var e=localStorage.getItem("InStartValue");if(e){var t=JSON.parse(e);T(t)}}(),function(){var e=localStorage.getItem("InStartValueN");if(e){var t=JSON.parse(e);F(t)}}(),function(){var e=localStorage.getItem("InMaxValue");if(e){var t=JSON.parse(e);A(t)}}(),function(){var e=localStorage.getItem("InMaxValueN");if(e){var t=JSON.parse(e);R(t)}}(),function(){var e=localStorage.getItem("countValue");if(e){var t=JSON.parse(e);l(t)}}(),function(){var e=localStorage.getItem("countValueN");if(e){var t=JSON.parse(e);o(t)}}()}),[]);var ee=function(){if(a<z){var e=++a;l(e),localStorage.setItem("countValue",JSON.stringify(e))}},te=function(){if(c<H){var e=++c;o(e),localStorage.setItem("countValueN",JSON.stringify(e))}},ae=function(){l(I),j(z),localStorage.setItem("countValue",JSON.stringify(I))},ne=function(){o(J),_(H),localStorage.setItem("countValueN",JSON.stringify(I))},se=Object(n.useState)(!0),ue=Object(u.a)(se,2),re=ue[0],ce=ue[1];return Object(i.jsx)("div",{children:Object(i.jsxs)(L.a,{children:[Object(i.jsx)("div",{className:"BtnToChangeRoute",children:Object(i.jsx)(le,{btnOnOf:Y,countValue:a,typeBtn:"ChangeBtn",inMaxValue:z,inStartValue:I,btnVer:re,setBtnVer:ce})}),Object(i.jsxs)(G.d,{children:[Object(i.jsx)(G.b,{path:"/",exact:!0,render:function(){return Object(i.jsx)(G.a,{to:he.First_ver})}}),Object(i.jsx)(G.b,{path:he.First_ver,render:function(){return Object(i.jsx)(k,{inStartValue:I,setInStartValue:T,inMaxValue:z,setInMaxValue:A,startValue:m,setStartValue:N,setMaxValue:j,maxValue:V,countValue:a,updateCountValue:ee,resetCountValue:ae,btnOnOf:Y,setBtnOnOf:q})}}),Object(i.jsx)(G.b,{path:he.Second_ver,render:function(){return Object(i.jsx)(Ce,{inStartValue:J,setInStartValue:F,inMaxValue:H,setInMaxValue:R,startValue:B,setStartValue:p,setMaxValue:_,maxValue:f,countValue:c,updateCountValue:te,resetCountValue:ne,btnOnOf:X,setBtnOnOf:$})}})]})]})})};s.a.render(Object(i.jsx)(Be,{}),document.getElementById("root"))}],[[38,1,2]]]);
//# sourceMappingURL=main.00c5d764.chunk.js.map