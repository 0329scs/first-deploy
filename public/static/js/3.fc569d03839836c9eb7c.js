webpackJsonp([3],{"5TS7":function(t,e){},"T+/8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),r=n.n(o),s=n("NYxO"),i={name:"Login",data:function(){return{showModal:!1,loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:function(t,e,n){e.length?n():n(new Error("아이디를 입력해주세요"))}}],password:[{required:!0,trigger:"blur",validator:function(t,e,n){e.length?n():n(new Error("비밀번호를 입력해주세요"))}}]},pwdType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0},userId:function(t){console.log("watch id =",t),this.$router.push("/")}},computed:r()({},Object(s.c)({userId:function(t){return t.user.id},loading:function(t){return t.user.loading}})),methods:r()({showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var t=this;console.log("====로그인 버튼===="),this.$refs.loginForm.validate(function(e){e&&(console.log("====벨류데이션 체크===="),t.$store.state.user.loading=!0,console.log("this.loginForm =",t.loginForm),t.Login(t.loginForm))})}},Object(s.b)(["Login"])),mounted:function(){console.log("mounted",this.loading,this.userId)}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[n("h3",{staticClass:"title"},[t._v("관리자 로그인")]),t._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),n("el-input",{attrs:{name:"username",type:"text","auto-complete":"on",placeholder:"아이디를 입력해주세요"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),n("el-input",{attrs:{type:t.pwdType,name:"password","auto-complete":"on",placeholder:"비밀번호를 입력해주세요"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleLogin(e):null}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),t._v(" "),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"}})],1)],1),t._v(" "),n("el-form-item",[n("el-button",{staticStyle:{width:"100%"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("\n        로그인\n      ")])],1),t._v(" "),n("el-form-item",[n("el-button",{staticStyle:{width:"100%"},attrs:{loading:t.loading,type:"primary"},on:{click:function(e){t.$router.push("/")}}},[t._v("\n        비회원\n      ")])],1),t._v(" "),n("el-form-item",[n("el-button",{staticStyle:{width:"100%"},attrs:{loading:t.loading,type:"primary"},on:{click:function(e){t.$router.push("/registration")}}},[t._v("\n        회원가입\n      ")])],1),t._v(" "),n("div",{staticClass:"tips"},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v("username: admin")]),t._v(" "),n("span",[t._v(" password: admin")])])],1)],1)},staticRenderFns:[]};var l=n("VU/8")(i,a,!1,function(t){n("5TS7"),n("m8zy")},"data-v-411cd93d",null);e.default=l.exports},m8zy:function(t,e){}});
//# sourceMappingURL=3.fc569d03839836c9eb7c.js.map