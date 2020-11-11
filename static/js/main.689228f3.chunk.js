(this.webpackJsonpmessageme=this.webpackJsonpmessageme||[]).push([[0],{221:function(e,t,n){},409:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n(2),s=n(1),c=n.n(s),i=n(91),o=n.n(i),l=(n(221),n(25)),d=n(7),u=n(12),j=n(27),h=Object(u.b)(null,(function(e){return{logoutAction:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"LOGOUT_SUCCESS"})}))}))}}}))((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("ul",{className:"right",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"# ",onClick:e.logoutAction,children:"Logout"})})})})})),b=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("ul",{className:"right",children:Object(a.jsx)("li",{children:Object(a.jsx)(l.c,{to:"/register",children:"Register"})})})})},O=Object(u.b)((function(e){return{auth:e.firebase.auth}}))((function(e){var t=e.auth,n=t.uid?Object(a.jsx)(h,{}):Object(a.jsx)(b,{});return Object(a.jsx)("div",{children:Object(a.jsx)("nav",{className:"nav-wrapper teal lighten-2 z-depth-0",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(l.b,{to:"/",className:"brand-logo",children:"MessageMe!"}),Object(j.isLoaded)(t)&&n]})})})})),p=n(32),m=n(33),f=n(35),g=n(34),x=n(26),v=n(214),N=n.n(v),S=function(e){var t=e.post;return Object(a.jsx)("div",{className:"card z-depth-1 grey lighten-4",children:Object(a.jsxs)("div",{className:"card-content grey-text text-darken-3",children:[Object(a.jsx)("span",{className:"card-title",children:t.postContent}),Object(a.jsxs)("p",{children:["Posted by ",Object(a.jsx)("i",{children:t.postedBy})]}),Object(a.jsx)("p",{children:Object(a.jsx)(N.a,{format:"HH:mm DD/MM/YYYY",children:t.postedAt.toDate()})})]})})},C=n(31),y=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={postContent:""},e.handleChange=function(t){e.setState(Object(C.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addPostAction(e.state),e.setState({postContent:""})},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container center",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("textarea",{id:"postContent",className:"materialize-textarea",placeholder:"What's on your mind?",onChange:this.handleChange,value:this.state.postContent,required:!0}),Object(a.jsx)("button",{className:"addPost btn pink lighten-2 z-depth-0",children:"Add post"})]})})}}]),n}(s.Component),E=Object(u.b)(null,(function(e){return{addPostAction:function(t){return e(function(e){return function(t,n,a){var s=(0,a.getFirestore)(),c=n().firebase.profile,i=n().firebase.auth.uid;s.collection("posts").add(Object(r.a)(Object(r.a)({},e),{},{postedBy:c.firstName+" "+c.lastName,postedById:i,postedAt:new Date})).then((function(){t({type:"ADD_POST",post:e})})).catch((function(e){t({type:"ADD_POST_ERROR",error:e})}))}}(t))}}}))(y),R=function(e){var t=e.posts;return Object(a.jsxs)("div",{className:"section",children:[Object(a.jsx)(E,{}),t&&t.map((function(e){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(S,{post:e},e.id)})}))]})},w=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.posts;return Object(j.isLoaded)(t)&&!t.uid?Object(a.jsx)(d.a,{to:"/login"}):Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"dashboard container",children:Object(a.jsx)(R,{posts:n})})})}}]),n}(s.Component),A=Object(x.d)(Object(u.b)((function(e){return{auth:e.firebase.auth,posts:e.firestore.ordered.posts}})),Object(j.firestoreConnect)([{collection:"posts",orderBy:["postedAt","desc"]}]))(w),F=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(C.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.registerAction(e.state)},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.authError;return t.uid?Object(a.jsx)(d.a,{to:"/"}):Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:"Register"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",id:"email",onChange:this.handleChange,required:!0})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",id:"password",onChange:this.handleChange,required:!0})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(a.jsx)("input",{type:"text",id:"firstName",onChange:this.handleChange,required:!0})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(a.jsx)("input",{type:"text",id:"lastName",onChange:this.handleChange,required:!0})]}),Object(a.jsxs)("div",{className:"input-field center",children:[Object(a.jsx)("button",{className:"btn indigo z-depth-0",children:"Register"}),Object(a.jsx)("div",{className:"red-text center",children:n?Object(a.jsx)("p",{children:n}):null})]})]})})})}}]),n}(s.Component),D=Object(u.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{registerAction:function(t){return e(function(e){return function(t,n,r){var a=r.getFirebase,s=a(),c=a().firestore();s.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return c.collection("users").doc(t.user.uid).set({email:e.email,firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0],accountCreated:new Date})})).then((function(){t({type:"REGISTER_SUCCESS"})})).catch((function(e){t({type:"REGISTER_ERROR",error:e})}))}}(t))}}}))(F),_=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(C.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.loginAction(e.state)},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.authError;return t.uid?Object(a.jsx)(d.a,{to:"/"}):Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(a.jsx)("h5",{className:"grey-text text-darken-3",children:"Login"}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",id:"email",onChange:this.handleChange,required:!0})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",id:"password",onChange:this.handleChange,required:!0})]}),Object(a.jsxs)("div",{className:"input-field center",children:[Object(a.jsx)("button",{className:"btn indigo z-depth-0",children:"Login"}),Object(a.jsx)("div",{className:"red-text center",children:n?Object(a.jsx)("p",{children:n}):null})]})]})})})}}]),n}(s.Component),I=Object(u.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{loginAction:function(t){return e(function(e){return function(t,n,r){(0,r.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then((function(){t({type:"LOGIN_SUCCESS"})})).catch((function(e){t({type:"LOGIN_ERROR",error:e})}))}}(t))}}}))(_);var P=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(O,{}),Object(a.jsx)(d.a,{to:"/"}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:"/",component:A}),Object(a.jsx)(d.b,{path:"/register",component:D}),Object(a.jsx)(d.b,{path:"/login",component:I})]})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,410)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},T=n(215),k=n(54),G={posts:[]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return console.log("ADD_POST",t.post),e;case"ADD_POST_ERROR":return console.log("ADD_POST_ERROR",t.error),e;default:return e}},z={authError:null},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_SUCCESS":return console.log("register success"),Object(r.a)(Object(r.a)({},e),{},{authError:null});case"REGISTER_ERROR":return console.log("register error"),Object(r.a)(Object(r.a)({},e),{},{authError:t.error.message});case"LOGIN_SUCCESS":return console.log("login success"),Object(r.a)(Object(r.a)({},e),{},{authError:null});case"LOGIN_ERROR":return console.log("login error"),Object(r.a)(Object(r.a)({},e),{},{authError:t.error.message});case"LOGOUT_SUCCESS":return console.log("logout success"),e;default:return e}},B=Object(x.c)({auth:q,post:U,firebase:j.firebaseReducer,firestore:k.firestoreReducer}),M=(n(212),n(141));n(407);M.a.initializeApp({apiKey:"AIzaSyAo_4-bdLFcoq31O0o-XorzDWHyythV3R0",authDomain:"messageme-f5a0b.firebaseapp.com",databaseURL:"https://messageme-f5a0b.firebaseio.com",projectId:"messageme-f5a0b",storageBucket:"messageme-f5a0b.appspot.com",messagingSenderId:"170724100537",appId:"1:170724100537:web:7c724a0b0763e864990e68",measurementId:"G-G6Y43LQQE1"});var Y=M.a,W=Object(x.e)(B,Object(x.d)(Object(x.a)(T.a.withExtraArgument({getFirebase:j.getFirebase,getFirestore:k.getFirestore})),Object(k.reduxFirestore)(Y))),H={firebase:Y,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:W.dispatch,createFirestoreInstance:k.createFirestoreInstance};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(u.a,{store:W,children:Object(a.jsx)(j.ReactReduxFirebaseProvider,Object(r.a)(Object(r.a)({},H),{},{children:Object(a.jsx)(P,{})}))})}),document.getElementById("root")),L()}},[[409,1,2]]]);
//# sourceMappingURL=main.689228f3.chunk.js.map