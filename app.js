(function(e){function r(r){for(var t,l,u=r[0],i=r[1],s=r[2],f=0,c=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&c.push(n[l][0]),n[l]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);d&&d(r);while(c.length)c.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,r=0;r<o.length;r++){for(var a=o[r],t=!0,u=1;u<a.length;u++){var i=a[u];0!==n[i]&&(t=!1)}t&&(o.splice(r--,1),e=l(l.s=a[0]))}return e}var t={},n={app:0},o=[];function l(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=t,l.d=function(e,r,a){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)l.d(a,t,function(r){return e[r]}.bind(null,t));return a},l.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=r,u=u.slice();for(var s=0;s<u.length;s++)r(u[s]);var d=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,r,a){e.exports=a("56d7")},"56d7":function(e,r,a){"use strict";var t=a("4ea4"),n=a("dbce");a("99af"),a("b0c0"),a("ac1f"),a("841c"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=n(a("f05e")),l=t(a("1157")),u="https://hl8bai.com",i={en:{full_name1:"*Please input your full name!",name1:"*Please input your username!",name2:"*Username must be from 5 to 16 characters",email1:"*Please input your E-mail!",email2:"*Please input a valid E-mail address!",phone1:"*Please input your mobile number!",phone2:"*Phone number must be between 9 to 10-digits",password1:"*Please input your password!",password2:"*Password cannot be less than 6 characters",password3:"*Password cannot be more than 20 characters"},vn:{full_name1:"*Vui lòng nhập họ tên đầy đủ!",name1:"*Vui lòng nhập tên đăng nhập!",name2:"*Tên Đăng nhập cần gồm 5-16 ký tự",email1:"*Vui lòng nhập địa chỉ Email!",email2:"*Vui lòng nhập địa chỉ Email có thật!",phone1:"*Vui lòng nhập số điện thoại liên lạc!",phone2:"*Số điện thoại phải từ 9 đến 10 chữ số",password1:"*Vui lòng nhập mật khẩu!",password2:"*Đội dài mật khẩu ít hơn 6 ký tự",password3:"*Đội dài mật khẩu nhiều hơn 20 ký tự"},th:{full_name1:"*กรุณาใส่ชื่อเต็มของคุณ!",name1:"*กรุณาใส่ชื่อยูสเซอร์เนมของคุณ!",name2:"*ยูสเซอร์เนมต้องมีตั้งแต่ 5-16 ตัว",email1:"*กรุณากรอกอีเมลของคุณ!",email2:"*กรุณาใส่ที่อยู่อีเมลที่ถูกต้อง!",phone1:"*กรุณาใส่หมายเลขมือถือของคุณ!",phone2:"*หมายเลขโทรศัทพ์ต้องมี 9 -10 หลัก",password1:"*กรุณาใส่รหัสผ่านของคุณ!",password2:"*รหัสผ่านต้องไม่น้อยกว่า 6 ตัวอักษร",password3:"*รหัสผ่านต้องไม่เกิน 20 ตัวอักษร"}},s=(0,l.default)(".register-button.done"),d=(0,l.default)(".register-button.loading");(0,l.default)((function(){var e=this,r=(0,l.default)("#myForm").attr("data-lang"),a=r?i[r]:i["vn"],t="";o.configure({pk:"pk_vRN1AhFFKd1aGJLXxCvB73GRFAPgJdzM"}),o.createRequestToken().then((function(e){t=e})),s.bind("click",(function(){if(h()){s.hide(),d.show();var e={},a=(0,l.default)("#myForm").serializeArray();l.default.each(a,(function(){e[this.name]=this.value})),e.castle_token=t,e.is_challenge_risk=1,e.password_confirmation=e.password,e.currency="th"===r?"THB":"VND",e.country_code="th"===r?"+66":"+84",l.default.post({async:!0,url:"".concat(u,"/api/users?include=info,account,vip,reward"),dataType:"JSON",data:e,success:function(e){(0,l.default)(".register-button.done").show(),(0,l.default)(".register-button.loading").hide(),window.location.href="".concat(u,"/").concat(r,"/?t_code=").concat(e.meta.code)},error:function(e){(0,l.default)(".register-button.done").show(),(0,l.default)(".register-button.loading").hide(),alert(e.responseJSON.message)}})}}));var n=(0,l.default)("input[name='full_name']"),f=(0,l.default)("input[name='name']"),c=(0,l.default)("input[name='email']"),m=(0,l.default)("input[name='phone']"),p=(0,l.default)("input[name='password']"),h=function(){var e=g((0,l.default)("input[name='full_name']").val()),r=b((0,l.default)("input[name='name']").val()),a=v((0,l.default)("input[name='email']").val()),t=y((0,l.default)("input[name='phone']").val()),n=_((0,l.default)("input[name='password']").val());return!!(e&&r&&a&&t&&n)};function g(e){return e||(0,l.default)("#full_name-error").length?(e&&(0,l.default)("#full_name-error").length&&(0,l.default)("#full_name-error").remove(),!0):(n.after('<label id="full_name-error" formstatus="error" htmlFor="full_name">'.concat(a.full_name1,"</label>")),!1)}function b(e){return e?e&&(e.length<5||e.length>16)?((0,l.default)("#name-error").length&&(0,l.default)("#name-error").remove(),f.after('<label id="name-error" formstatus="error" htmlFor="name">'.concat(a.name2,"</label>")),!1):(e&&(0,l.default)("#name-error").length&&(0,l.default)("#name-error").remove(),!0):((0,l.default)("#name-error").length&&(0,l.default)("#name-error").remove(),f.after('<label id="name-error" formstatus="error" htmlFor="name">'.concat(a.name1,"</label>")),!1)}function v(e){return e?e&&!w(e)?((0,l.default)("#email-error").length&&(0,l.default)("#email-error").remove(),c.after('<label id="email-error" formstatus="error" htmlFor="name">'.concat(a.email2,"</label>")),!1):(e&&(0,l.default)("#email-error").length&&(0,l.default)("#email-error").remove(),!0):((0,l.default)("#email-error").length&&(0,l.default)("#email-error").remove(),c.after('<label id="email-error" formstatus="error" htmlFor="name">'.concat(a.email1,"</label>")),!1)}function w(e){return-1!==e.search(/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)}function y(e){return e?!e||e.length>=9&&e.length<=10?(e&&(0,l.default)("#phone-error").length&&(0,l.default)("#phone-error").remove(),!0):((0,l.default)("#phone-error").length&&(0,l.default)("#phone-error").remove(),m.after('<label id="phone-error" formstatus="error" htmlFor="name">'.concat(a.phone2,"</label>")),!1):((0,l.default)("#phone-error").length&&(0,l.default)("#phone-error").remove(),m.after('<label id="phone-error" formstatus="error" htmlFor="name">'.concat(a.phone1,"</label>")),!1)}function _(e){return e?e&&e.length<6?((0,l.default)("#password-error").length&&(0,l.default)("#password-error").remove(),p.after('<label id="password-error" formstatus="error" htmlFor="name">'.concat(a.password2,"</label>")),!1):e&&e.length>20?((0,l.default)("#password-error").length&&(0,l.default)("#password-error").remove(),p.after('<label id="password-error" formstatus="error" htmlFor="name">'.concat(a.password3,"</label>")),!1):(e&&(0,l.default)("#password-error").length&&(0,l.default)("#password-error").remove(),!0):((0,l.default)("#password-error").length&&(0,l.default)("#password-error").remove(),p.after('<label id="password-error" formstatus="error" htmlFor="name">'.concat(a.password1,"</label>")),!1)}n.bind("input propertychange change",(function(){g((0,l.default)(e).val())})),f.bind("input propertychange change",(function(){b((0,l.default)(e).val())})),c.bind("input propertychange change",(function(){v((0,l.default)(e).val())})),m.bind("input propertychange change",(function(){y((0,l.default)(e).val())})),p.bind("input propertychange change",(function(){_((0,l.default)(e).val())}))}))}});
//# sourceMappingURL=app.js.map