(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7673e16"],{"6f8e":function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"app flex-row align-items-center"},[r("div",{staticClass:"container"},[r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{md:"6"}},[r("b-card-group",[r("b-card",{staticClass:"p-4",attrs:{"no-body":""}},[r("b-card-body",[r("img",{staticClass:"user-avatar",attrs:{src:a("9d64")}}),r("b-form",[r("h1",{staticClass:"page-title"},[t._v("Login")]),r("p",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg))]),r("b-input-group",{staticClass:"mb-3"},[r("b-input-group-prepend",[r("b-input-group-text",[r("i",{staticClass:"icon-user"})])],1),r("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Username",autocomplete:"username email"}})],1),r("b-input-group",{staticClass:"mb-4"},[r("b-input-group-prepend",[r("b-input-group-text",[r("i",{staticClass:"icon-lock"})])],1),r("b-form-input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Password",autocomplete:"current-password"}})],1),r("b-row",[r("b-col",{attrs:{cols:"6"}},[r("b-button",{staticClass:"px-4",attrs:{variant:"primary"},on:{click:t.authenticate}},[t._v("Login")])],1),r("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[r("b-button",{staticClass:"px-0",attrs:{"router-link":"",to:"/forgot-password",variant:"link"}},[t._v("Forgot password?")])],1)],1)],1)],1)],1)],1)],1)],1)],1)])},i=[],n=(a("cadf"),a("551c"),a("097d"),a("1da7")),o={name:"Login",data:function(){return{email:"superdev",password:"pegelinuxsuperdev",errorMsg:""}},methods:{authenticate:function(){var t=this;this.$store.dispatch("login",{username:this.email,password:this.password}).then(function(){return t.$router.push("/")})}},mounted:function(){var t=this;n["a"].$on("failedAuthentication",function(s){t.errorMsg=s})},beforeDestroy:function(){n["a"].$off("failedAuthentication")}},e=o,c=a("2877"),p=Object(c["a"])(e,r,i,!1,null,null,null);s["default"]=p.exports},"9d64":function(t,s){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-e7673e16.4e3bf6cd.js.map