(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6Ght":function(i,n,t){"use strict";t.r(n),t.d(n,"WebScrapingModule",(function(){return bi}));var e=t("ofXK"),o=t("tyNb"),a=t("fXoL"),c=t("jhN1");function r(i,n){1&i&&(a.Mb(0,"h2",10),a.ic(1," Web Scraping "),a.Lb())}function s(i,n){1&i&&a.Kb(0,"img",11)}function l(i,n){1&i&&(a.Mb(0,"li",12),a.ic(1," Coupons "),a.Lb())}function b(i,n){1&i&&(a.Mb(0,"li"),a.Kb(1,"img",13),a.Lb())}function g(i,n){1&i&&(a.Mb(0,"li",14),a.ic(1," Giveaways "),a.Lb())}function d(i,n){1&i&&(a.Mb(0,"li",15),a.Kb(1,"img",16),a.Lb())}function u(i,n){1&i&&(a.Mb(0,"li",17),a.ic(1,"Back"),a.Lb())}function p(i,n){1&i&&(a.Mb(0,"li",15),a.Kb(1,"img",18),a.Lb())}let f=(()=>{class i{constructor(i,n,t){this.titleService=i,this._document=n,this.renderer=t}ngOnInit(){this.titleService.setTitle("Web Scraping");const i=this._document.getElementById("appFavicon");this.renderer.setAttribute(i,"href","assets/logo/web-logo.png");const n=this._document.getElementsByTagName("body")[0];this.renderer.setStyle(n,"padding","0"),this.getScreenSize()}getScreenSize(i){this.screenWidth=window.innerWidth,this.widthStatus=this.screenWidth<=900}ngOnDestroy(){const i=this._document.getElementsByTagName("body")[0];this.renderer.removeStyle(i,"padding")}}return i.\u0275fac=function(n){return new(n||i)(a.Jb(c.b),a.Jb(e.c),a.Jb(a.D))},i.\u0275cmp=a.Db({type:i,selectors:[["app-web-scraping"]],hostBindings:function(i,n){1&i&&a.Tb("resize",(function(i){return n.getScreenSize(i)}),!1,a.dc)},decls:12,vars:8,consts:[[1,"section-scraping"],[1,"left","center-text"],["class","left__heading","routerLink","/web-scraping",4,"ngIf"],["src","../../../assets/image/web-scraping/web.svg","alt","Web Scraping","class","left__svg m-b-medium","routerLink","/web-scraping",4,"ngIf"],[1,"left__list"],["class","left__item","routerLink","coupon",4,"ngIf"],[4,"ngIf"],["class","left__item","routerLink","giveaway",4,"ngIf"],["class","m-t-big",4,"ngIf"],["class","left__item","routerLink","/",4,"ngIf"],["routerLink","/web-scraping",1,"left__heading"],["src","../../../assets/image/web-scraping/web.svg","alt","Web Scraping","routerLink","/web-scraping",1,"left__svg","m-b-medium"],["routerLink","coupon",1,"left__item"],["src","../../../assets/image/web-scraping/coupon.svg","alt","Coupon","routerLink","coupon",1,"left__item-svg"],["routerLink","giveaway",1,"left__item"],[1,"m-t-big"],["src","../../../assets/image/web-scraping/giveaway.svg","alt","giveaway","routerLink","giveaway",1,"left__item-svg"],["routerLink","/",1,"left__item"],["src","../../../assets/image/web-scraping/back.svg","alt","giveaway","routerLink","/",1,"left__item-svg"]],template:function(i,n){1&i&&(a.Mb(0,"section",0),a.Mb(1,"div",1),a.hc(2,r,2,0,"h2",2),a.hc(3,s,1,0,"img",3),a.Mb(4,"ul",4),a.hc(5,l,2,0,"li",5),a.hc(6,b,2,0,"li",6),a.hc(7,g,2,0,"li",7),a.hc(8,d,2,0,"li",8),a.hc(9,u,2,0,"li",9),a.hc(10,p,2,0,"li",8),a.Lb(),a.Lb(),a.Kb(11,"router-outlet"),a.Lb()),2&i&&(a.yb(2),a.ac("ngIf",!n.widthStatus),a.yb(1),a.ac("ngIf",n.widthStatus),a.yb(2),a.ac("ngIf",!n.widthStatus),a.yb(1),a.ac("ngIf",n.widthStatus),a.yb(1),a.ac("ngIf",!n.widthStatus),a.yb(1),a.ac("ngIf",n.widthStatus),a.yb(1),a.ac("ngIf",!n.widthStatus),a.yb(1),a.ac("ngIf",n.widthStatus))},directives:[e.i,o.j,o.f],styles:[".section-scraping[_ngcontent-%COMP%]{height:100vh;max-height:100vh;overflow:hidden}.left[_ngcontent-%COMP%]{width:25%;background-color:rgba(255,69,0,.9);height:100vh;float:left}@media only screen and (max-width:56.25em){.left[_ngcontent-%COMP%]{width:10%}}.left__heading[_ngcontent-%COMP%], .left__svg[_ngcontent-%COMP%]{margin-top:2rem;cursor:pointer;outline:none}.left__heading[_ngcontent-%COMP%]{font-size:3rem;color:#fff}.left__svg[_ngcontent-%COMP%]{width:7.5rem}@media only screen and (max-width:48em){.left__svg[_ngcontent-%COMP%]{width:6.5rem}}@media only screen and (max-width:37.5em){.left__svg[_ngcontent-%COMP%]{width:5rem}}@media only screen and (max-width:30em){.left__svg[_ngcontent-%COMP%]{width:3.5rem}}.left__list[_ngcontent-%COMP%]{margin-top:5rem;list-style:none}.left__item[_ngcontent-%COMP%]{font-size:2rem;color:#fff;cursor:pointer;font-weight:700;padding:2rem;outline:none;-webkit-transition:all .5s;transition:all .5s}.left__item[_ngcontent-%COMP%]:hover{background-color:#fff;color:#ff4500;padding:2rem 5rem 2rem 0}.left__item-svg[_ngcontent-%COMP%]{width:5rem;cursor:pointer}@media only screen and (max-width:48em){.left__item-svg[_ngcontent-%COMP%]{width:4rem}}@media only screen and (max-width:37.5em){.left__item-svg[_ngcontent-%COMP%]{width:3rem}}@media only screen and (max-width:30em){.left__item-svg[_ngcontent-%COMP%]{width:2rem}}"]}),i})();var h=t("tk/3");let m=(()=>{class i{constructor(i){this.http=i}fetchCouponCourses(i){return this.http.get("https://usman-ali-portfolio.herokuapp.com/api/getCourses/"+i)}fetchCouponLink(i){return this.http.get("https://usman-ali-portfolio.herokuapp.com/api/getCoupon/"+i)}fetchGiveaways(i){return this.http.get("https://usman-ali-portfolio.herokuapp.com/api/giveaways/"+i)}fetchGiveawayDetail(i){return this.http.get("https://usman-ali-portfolio.herokuapp.com/api/giveaway/getDetail/"+i)}getGiveawayPagination(){return this.http.get("https://usman-ali-portfolio.herokuapp.com/api/giveaway/getPagination")}}return i.\u0275fac=function(n){return new(n||i)(a.Qb(h.b))},i.\u0275prov=a.Fb({token:i,factory:i.\u0275fac}),i})(),w=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=a.Db({type:i,selectors:[["app-w-loading-spinner"]],decls:1,vars:0,consts:[[1,"loader"]],template:function(i,n){1&i&&a.Kb(0,"div",0)},styles:[".loader[_ngcontent-%COMP%]{-webkit-border-radius:85%;border-radius:85%;border:.8rem solid #ff4500;border-top:.5rem solid #000;width:6rem;height:6rem;margin:0 auto;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;-webkit-transition:all .5s;transition:all .5s}.loader[_ngcontent-%COMP%]:hover{border:.8rem solid #000;border-top:.5rem solid #ff4500;-webkit-border-radius:75%;border-radius:75%}@-webkit-keyframes spin{0%{-webkit-transform:rotate(190deg) scale(1.1)}50%{-webkit-transform:rotate(0deg) scale(1)}to{-webkit-transform:rotate(-180deg) scale(1.1)}}@keyframes spin{0%{-webkit-transform:rotate(190deg) scale(1.1);transform:rotate(190deg) scale(1.1)}50%{-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1)}to{-webkit-transform:rotate(-180deg) scale(1.1);transform:rotate(-180deg) scale(1.1)}}"]}),i})();function v(i,n){if(1&i&&(a.Mb(0,"a",5),a.ic(1),a.Lb()),2&i){const i=a.Xb();a.ac("href",i.link,a.fc),a.yb(1),a.jc(i.link)}}function y(i,n){1&i&&(a.Mb(0,"p",6),a.ic(1,"Loading....."),a.Lb())}const k=["*"];let L=(()=>{class i{constructor(){}ngOnInit(){this.link=""}ngOnDestroy(){this.link=""}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=a.Db({type:i,selectors:[["app-modal-coupon-link"]],inputs:{link:"link"},ngContentSelectors:k,decls:9,vars:2,consts:[["id","web-modal",1,"modal","modal--orangered"],[1,"modal__content"],[1,"modal__heading","m-b-small"],["class","modal__link m-b-small","target","_blank",3,"href",4,"ngIf"],["class","modal__loading",4,"ngIf"],["target","_blank",1,"modal__link","m-b-small",3,"href"],[1,"modal__loading"]],template:function(i,n){1&i&&(a.Zb(),a.Mb(0,"div",0),a.Mb(1,"div",1),a.Mb(2,"p",2),a.ic(3,"Coupon Link"),a.Lb(),a.hc(4,v,2,2,"a",3),a.hc(5,y,2,0,"p",4),a.Kb(6,"br"),a.Kb(7,"br"),a.Yb(8),a.Lb(),a.Lb()),2&i&&(a.yb(4),a.ac("ngIf",""!=n.link),a.yb(1),a.ac("ngIf",""==n.link))},directives:[e.i],styles:["[_ngcontent-%COMP%]::selection{background-color:#ff4500;color:#fff}"]}),i})();function C(i,n){if(1&i&&(a.Mb(0,"div"),a.Mb(1,"p",4),a.Mb(2,"span",5),a.ic(3,"Info:"),a.Lb(),a.ic(4),a.Lb(),a.Mb(5,"p",4),a.Mb(6,"span",5),a.ic(7,"Course language:"),a.Lb(),a.ic(8),a.Lb(),a.Mb(9,"p",4),a.Mb(10,"span",5),a.ic(11,"Coupon Uploaded:"),a.Lb(),a.ic(12),a.Lb(),a.Mb(13,"p",4),a.Mb(14,"span",5),a.ic(15,"Coupon Category:"),a.Lb(),a.ic(16),a.Lb(),a.Lb()),2&i){const i=a.Xb();a.yb(4),a.kc("",i.info," "),a.yb(4),a.kc("",i.couponLang," "),a.yb(4),a.kc(" ",i.couponUpload," "),a.yb(4),a.kc("",i.category," ")}}function _(i,n){if(1&i&&(a.Mb(0,"div"),a.Mb(1,"p",4),a.Mb(2,"span",5),a.ic(3,"Info:"),a.Lb(),a.ic(4),a.Lb(),a.Mb(5,"p",4),a.Mb(6,"span",5),a.ic(7,"Giveaway Category:"),a.Lb(),a.ic(8),a.Lb(),a.Kb(9,"img",6),a.Lb()),2&i){const i=a.Xb();a.yb(4),a.kc("",i.info," "),a.yb(4),a.kc("",i.category," "),a.yb(1),a.ac("src",i.imageUrl,a.fc)}}const M=["*"];let I=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=a.Db({type:i,selectors:[["app-modal-detail"]],inputs:{isCouponOrGiveaway:"isCouponOrGiveaway",info:"info",category:"category",couponLang:"couponLang",couponUpload:"couponUpload",imageUrl:"imageUrl"},ngContentSelectors:M,decls:9,vars:3,consts:[["id","web-modal",1,"modal","modal--orangered"],[1,"modal__content"],[1,"modal__heading","m-b-small"],[4,"ngIf"],[1,"modal__heading-sub"],[1,"modal__heading-span"],["alt","Giveaway",1,"modal__img",3,"src"]],template:function(i,n){1&i&&(a.Zb(),a.Mb(0,"div",0),a.Mb(1,"div",1),a.Mb(2,"p",2),a.ic(3),a.Lb(),a.hc(4,C,17,4,"div",3),a.hc(5,_,10,3,"div",3),a.Kb(6,"br"),a.Kb(7,"br"),a.Yb(8),a.Lb(),a.Lb()),2&i&&(a.yb(3),a.kc(" ",n.isCouponOrGiveaway?"Coupon Info":"Giveaway Info"," "),a.yb(1),a.ac("ngIf",n.isCouponOrGiveaway),a.yb(1),a.ac("ngIf",!n.isCouponOrGiveaway))},directives:[e.i],styles:["[_ngcontent-%COMP%]::selection{background-color:#ff4500;color:#fff}"]}),i})();function O(i,n){1&i&&(a.Mb(0,"div",10),a.Kb(1,"app-w-loading-spinner"),a.Lb())}function G(i,n){if(1&i){const i=a.Nb();a.Mb(0,"div",13),a.Mb(1,"div",14),a.Kb(2,"img",15),a.Mb(3,"p",16),a.ic(4),a.Lb(),a.Mb(5,"a",17),a.Tb("click",(function(){a.ec(i);const t=n.$implicit;return a.Xb(3).onCouponDetail(t.description,t.category,t.language,t.day)})),a.ic(6,"Detail"),a.Lb(),a.Mb(7,"a",18),a.Tb("click",(function(){a.ec(i);const t=n.$implicit;return a.Xb(3).onGetCouponLink(t.linkToCoupon)})),a.ic(8,"Get link"),a.Lb(),a.Lb(),a.Lb()}if(2&i){const i=n.$implicit;a.yb(2),a.ac("src",i.imageUrl,a.fc),a.yb(2),a.jc(i.heading)}}function S(i,n){if(1&i&&(a.Mb(0,"div",11),a.hc(1,G,9,2,"div",12),a.Lb()),2&i){const i=a.Xb(2);a.yb(1),a.ac("ngForOf",i.couponList)}}function D(i,n){1&i&&(a.Mb(0,"div",19),a.Mb(1,"p"),a.ic(2,"Loading..."),a.Lb(),a.Lb())}function x(i,n){if(1&i&&(a.Mb(0,"div"),a.Mb(1,"div",5),a.Mb(2,"h2",6),a.ic(3,"Courses Coupons"),a.Lb(),a.Lb(),a.hc(4,O,2,0,"div",7),a.hc(5,S,2,1,"div",8),a.hc(6,D,3,0,"div",9),a.Lb()),2&i){const i=a.Xb();a.yb(4),a.ac("ngIf",i.isCouponLoading),a.yb(1),a.ac("ngIf",!i.isCouponLoading),a.yb(1),a.ac("ngIf",i.isScroll)}}function P(i,n){if(1&i){const i=a.Nb();a.Mb(0,"div",20),a.Mb(1,"p",21),a.ic(2),a.Lb(),a.Mb(3,"a",22),a.Tb("click",(function(){return a.ec(i),a.Xb().onReload()})),a.ic(4,"Reload the Page"),a.Lb(),a.Kb(5,"div"),a.Lb()}if(2&i){const i=a.Xb();a.yb(2),a.jc(i.error)}}function X(i,n){if(1&i){const i=a.Nb();a.Mb(0,"app-modal-coupon-link",23),a.Mb(1,"a",22),a.Tb("click",(function(){return a.ec(i),a.Xb().onCouponClose()})),a.ic(2,"Close"),a.Lb(),a.Lb()}if(2&i){const i=a.Xb();a.ac("link",i.couponLink)}}function T(i,n){if(1&i){const i=a.Nb();a.Mb(0,"app-modal-detail",24),a.Mb(1,"a",22),a.Tb("click",(function(){return a.ec(i),a.Xb().onDetailClose()})),a.ic(2,"Close"),a.Lb(),a.Lb()}if(2&i){const i=a.Xb();a.ac("isCouponOrGiveaway",i.isGivewayOrCoupon)("info",i.couponDes)("category",i.couponCat)("couponLang",i.couponLang)("couponUpload",i.couponDay)}}let U=(()=>{class i{constructor(i){this.webScrapingService=i,this.error=""}ngOnInit(){this.counter=1,null==this.couponList&&(this.isCouponLoading=!0,this.webScrapingService.fetchCouponCourses(1).subscribe(i=>{this.isCouponLoading=!1,this.couponList=i.data},i=>{this.error="Check Your Internet Connection | Internal Server Error!"}))}onScroll(i){this.counter<=30&&i.target.offsetHeight+i.target.scrollTop>=i.target.scrollHeight&&(this.isScroll=!0,this.counter+=1,this.webScrapingService.fetchCouponCourses(this.counter).subscribe(i=>{this.isScroll=!1,this.couponList=this.couponList.concat(i.data)}))}onReload(){window.location.reload()}onGetCouponLink(i){this.isCouponClose=!0,this.isGetLinkLoading=!0,this.webScrapingService.fetchCouponLink(i).subscribe(i=>{this.isGetLinkLoading=!1,this.couponLink=i.link})}onCouponDetail(i,n,t,e){this.isDetailClose=!0,this.isGivewayOrCoupon=!0,this.couponDes=i,this.couponCat=n,this.couponLang=t,this.couponDay=e}onCouponClose(){this.isCouponClose=!1,this.couponLink=""}onDetailClose(){this.isDetailClose=!1,this.couponDes="",this.couponCat="",this.couponLang="",this.couponDay=""}}return i.\u0275fac=function(n){return new(n||i)(a.Jb(m))},i.\u0275cmp=a.Db({type:i,selectors:[["app-coupon"]],decls:5,vars:4,consts:[[1,"right",3,"scroll"],[4,"ngIf"],["class","right__error",4,"ngIf"],[3,"link",4,"ngIf"],[3,"isCouponOrGiveaway","info","category","couponLang","couponUpload",4,"ngIf"],[1,"center-text"],[1,"heading-coupon","m-t-small"],["class","m-t-medium",4,"ngIf"],["class","columns is-multiline m-t-medium",4,"ngIf"],["class","scroll-loading",4,"ngIf"],[1,"m-t-medium"],[1,"columns","is-multiline","m-t-medium"],["class","column is-one-third",4,"ngFor","ngForOf"],[1,"column","is-one-third"],[1,"wcard","wcard--coupon","center-text"],["alt","Card Image",1,"wcard__img",3,"src"],[1,"wcard__text","m-b-small"],[1,"wbtn","wbtn--detail",3,"click"],[1,"wbtn","wbtn--link",3,"click"],[1,"scroll-loading"],[1,"right__error"],[1,"right__error-text"],[1,"wbtn","wbtn--close",3,"click"],[3,"link"],[3,"isCouponOrGiveaway","info","category","couponLang","couponUpload"]],template:function(i,n){1&i&&(a.Mb(0,"div",0),a.Tb("scroll",(function(i){return n.onScroll(i)})),a.hc(1,x,7,3,"div",1),a.hc(2,P,6,1,"div",2),a.Lb(),a.hc(3,X,3,1,"app-modal-coupon-link",3),a.hc(4,T,3,5,"app-modal-detail",4)),2&i&&(a.yb(1),a.ac("ngIf",""==n.error),a.yb(1),a.ac("ngIf",""!=n.error),a.yb(1),a.ac("ngIf",n.isCouponClose),a.yb(1),a.ac("ngIf",n.isDetailClose))},directives:[e.i,w,e.h,L,I],styles:["[_ngcontent-%COMP%]::selection{background-color:#ff4500;color:#fff}[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:0}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset .5rem 1rem 2rem #ff4500;box-shadow:inset .5rem 1rem 2rem #ff4500;-webkit-border-radius:10px;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#fff;border:1px solid rgba(255,68,0,.658);-webkit-border-radius:10px;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:rgba(255,68,0,.658)}"]}),i})();function N(i,n){1&i&&(a.Mb(0,"p",7),a.ic(1,"Loading....."),a.Lb())}function K(i,n){if(1&i&&(a.Mb(0,"p"),a.ic(1),a.Lb()),2&i){const i=n.$implicit;a.yb(1),a.jc(i)}}const F=["*"];let j=(()=>{class i{constructor(){}ngOnInit(){this.link="",this.detail=[]}ngOnDestroy(){this.link="",this.detail=[]}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=a.Db({type:i,selectors:[["app-modal-giveaway-link"]],inputs:{link:"link",detail:"detail"},ngContentSelectors:F,decls:12,vars:4,consts:[["id","web-modal",1,"modal","modal--orangered"],[1,"modal__content"],[1,"modal__heading","m-b-small"],["target","_blank",1,"modal__link","m-b-small",3,"href"],["class","modal__loading",4,"ngIf"],[1,"modal__detail"],[4,"ngFor","ngForOf"],[1,"modal__loading"]],template:function(i,n){1&i&&(a.Zb(),a.Mb(0,"div",0),a.Mb(1,"div",1),a.Mb(2,"p",2),a.ic(3,"Giveaway Link"),a.Lb(),a.Mb(4,"a",3),a.ic(5),a.Lb(),a.hc(6,N,2,0,"p",4),a.Mb(7,"div",5),a.hc(8,K,2,1,"p",6),a.Lb(),a.Kb(9,"br"),a.Kb(10,"br"),a.Yb(11),a.Lb(),a.Lb()),2&i&&(a.yb(4),a.ac("href",n.link,a.fc),a.yb(1),a.jc(n.link),a.yb(1),a.ac("ngIf",""==n.link),a.yb(2),a.ac("ngForOf",n.detail))},directives:[e.i,e.h],styles:["[_ngcontent-%COMP%]::selection{background-color:#ff4500;color:#fff}[_ngcontent-%COMP%]::-webkit-scrollbar{width:1rem;height:0}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset .5rem 1rem 2rem #ff4500;box-shadow:inset .5rem 1rem 2rem #ff4500;-webkit-border-radius:0;border-radius:0}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#fff;border:1px solid #ff4500;-webkit-border-radius:0;border-radius:0}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#ff4500}"]}),i})();function $(i,n){1&i&&(a.Mb(0,"div",10),a.Kb(1,"app-w-loading-spinner"),a.Lb())}function B(i,n){if(1&i){const i=a.Nb();a.Mb(0,"div",13),a.Mb(1,"div",14),a.Mb(2,"div",15),a.Mb(3,"p",16),a.ic(4),a.Lb(),a.Mb(5,"a",17),a.Tb("click",(function(){a.ec(i);const t=n.$implicit;return a.Xb(3).onGiveawayDetail(t.name,t.pcOrNot,t.imageUrl)})),a.ic(6,"Detail"),a.Lb(),a.Mb(7,"a",18),a.Tb("click",(function(){a.ec(i);const t=n.$implicit;return a.Xb(3).onGetGiveawayLink(t.link,t.linkToDetail)})),a.ic(8,"Get link"),a.Lb(),a.Lb(),a.Lb(),a.Lb()}if(2&i){const i=n.$implicit;a.yb(4),a.jc(i.name)}}function R(i,n){if(1&i&&(a.Mb(0,"div",11),a.hc(1,B,9,1,"div",12),a.Lb()),2&i){const i=a.Xb(2);a.yb(1),a.ac("ngForOf",i.giveawayList)("ngForTrackBy",i.trackByFn)}}function J(i,n){1&i&&(a.Mb(0,"div",19),a.Mb(1,"p"),a.ic(2,"Loading..."),a.Lb(),a.Lb())}function W(i,n){if(1&i&&(a.Mb(0,"div"),a.Mb(1,"div",5),a.Mb(2,"h2",6),a.ic(3,"Giveaways"),a.Lb(),a.Lb(),a.hc(4,$,2,0,"div",7),a.hc(5,R,2,2,"div",8),a.hc(6,J,3,0,"div",9),a.Lb()),2&i){const i=a.Xb();a.yb(4),a.ac("ngIf",i.isGiveawayLoading),a.yb(1),a.ac("ngIf",!i.isGiveawayLoading),a.yb(1),a.ac("ngIf",i.isScroll)}}function z(i,n){if(1&i){const i=a.Nb();a.Mb(0,"div",20),a.Mb(1,"p",21),a.ic(2),a.Lb(),a.Mb(3,"a",22),a.Tb("click",(function(){return a.ec(i),a.Xb().onReload()})),a.ic(4,"Reload the Page"),a.Lb(),a.Kb(5,"div"),a.Lb()}if(2&i){const i=a.Xb();a.yb(2),a.jc(i.error)}}function E(i,n){if(1&i){const i=a.Nb();a.Mb(0,"app-modal-giveaway-link",23),a.Mb(1,"a",22),a.Tb("click",(function(){return a.ec(i),a.Xb().onGiveawayClose()})),a.ic(2,"Close"),a.Lb(),a.Lb()}if(2&i){const i=a.Xb();a.ac("link",i.giveawayLink)("detail",i.giveawayDetail)}}function Y(i,n){if(1&i){const i=a.Nb();a.Mb(0,"app-modal-detail",24),a.Mb(1,"a",22),a.Tb("click",(function(){return a.ec(i),a.Xb().onDetailClose()})),a.ic(2,"Close"),a.Lb(),a.Lb()}if(2&i){const i=a.Xb();a.ac("isCouponOrGiveaway",i.isGivewayOrCoupon)("info",i.giveawayName)("category",i.giveawayCategory)("imageUrl",i.giveawayImgUrl)}}let H=(()=>{class i{constructor(i){this.webScrapingService=i,this.error=""}ngOnInit(){this.counter=1,null==this.giveawayList&&(this.isGiveawayLoading=!0,this.webScrapingService.fetchGiveaways(1).subscribe(i=>{this.isGiveawayLoading=!1,this.giveawayList=i.data},i=>{this.error="Check Your Internet Connection | Internal Server Error!"})),this.webScrapingService.getGiveawayPagination().subscribe(i=>{this.limit=i.data})}onScroll(i){this.counter<=this.limit&&i.target.offsetHeight+i.target.scrollTop>=i.target.scrollHeight&&(this.isScroll=this.counter!=this.limit,this.counter+=1,this.webScrapingService.fetchGiveaways(this.counter).subscribe(i=>{this.isScroll=!1,this.giveawayList=this.giveawayList.concat(i.data)}))}onReload(){window.location.reload()}trackByFn(i,n){return n.name}onGiveawayDetail(i,n,t){this.isDetailClose=!0,this.isGivewayOrCoupon=!1,this.giveawayName=i,this.giveawayCategory=""==n?"Book":n,this.giveawayImgUrl=t}onGetGiveawayLink(i,n){this.isGiveawayClose=!0,this.isGetDetailLoading=!0,this.webScrapingService.fetchGiveawayDetail(n).subscribe(i=>{this.giveawayLink=i.data[0],this.giveawayDetail=i.data[1]})}onGiveawayClose(){this.isGiveawayClose=!1,this.giveawayLink="",this.giveawayDetail=[]}onDetailClose(){this.isDetailClose=!1,this.giveawayName="",this.giveawayCategory="",this.giveawayImgUrl=""}}return i.\u0275fac=function(n){return new(n||i)(a.Jb(m))},i.\u0275cmp=a.Db({type:i,selectors:[["app-giveaway"]],decls:5,vars:4,consts:[[1,"right",3,"scroll"],[4,"ngIf"],["class","right__error",4,"ngIf"],[3,"link","detail",4,"ngIf"],[3,"isCouponOrGiveaway","info","category","imageUrl",4,"ngIf"],[1,"center-text"],[1,"heading-coupon","m-t-medium"],["class","m-t-medium",4,"ngIf"],["class","columns is-multiline m-t-medium",4,"ngIf"],["class","scroll-loading",4,"ngIf"],[1,"m-t-medium"],[1,"columns","is-multiline","m-t-medium"],["class","column is-one-third is-desktop",4,"ngFor","ngForOf","ngForTrackBy"],[1,"column","is-one-third","is-desktop"],[1,"wcard","wcard--giveaway"],[1,"wcard__center"],[1,"wcard__text-heading","m-b-small"],[1,"wbtn","wbtn--detail",3,"click"],[1,"wbtn","wbtn--link",3,"click"],[1,"scroll-loading"],[1,"right__error"],[1,"right__error-text"],[1,"wbtn","wbtn--close",3,"click"],[3,"link","detail"],[3,"isCouponOrGiveaway","info","category","imageUrl"]],template:function(i,n){1&i&&(a.Mb(0,"div",0),a.Tb("scroll",(function(i){return n.onScroll(i)})),a.hc(1,W,7,3,"div",1),a.hc(2,z,6,1,"div",2),a.Lb(),a.hc(3,E,3,2,"app-modal-giveaway-link",3),a.hc(4,Y,3,4,"app-modal-detail",4)),2&i&&(a.yb(1),a.ac("ngIf",""==n.error),a.yb(1),a.ac("ngIf",""!=n.error),a.yb(1),a.ac("ngIf",n.isGiveawayClose),a.yb(1),a.ac("ngIf",n.isDetailClose))},directives:[e.i,w,e.h,j,I],styles:["[_ngcontent-%COMP%]::selection{background-color:#ff4500;color:#fff}[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:0}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset .5rem 1rem 2rem #ff4500;box-shadow:inset .5rem 1rem 2rem #ff4500;-webkit-border-radius:10px;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#fff;border:1px solid rgba(255,68,0,.658);-webkit-border-radius:10px;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:rgba(255,68,0,.658)}"]}),i})();function A(i,n){1&i&&(a.Mb(0,"div",14),a.Kb(1,"app-w-loading-spinner"),a.Lb())}function Z(i,n){if(1&i){const i=a.Nb();a.Mb(0,"div",17),a.Mb(1,"div",18),a.Kb(2,"img",19),a.Mb(3,"p",20),a.ic(4),a.Lb(),a.Mb(5,"a",21),a.Tb("click",(function(){a.ec(i);const t=n.$implicit;return a.Xb(3).onCouponDetail(t.description,t.category,t.language,t.day)})),a.ic(6,"Detail"),a.Lb(),a.Mb(7,"a",22),a.Tb("click",(function(){a.ec(i);const t=n.$implicit;return a.Xb(3).onGetCouponLink(t.linkToCoupon)})),a.ic(8,"Get link"),a.Lb(),a.Lb(),a.Lb()}if(2&i){const i=n.$implicit;a.yb(2),a.ac("src",i.imageUrl,a.fc),a.yb(2),a.jc(i.heading)}}function Q(i,n){if(1&i&&(a.Mb(0,"div",15),a.hc(1,Z,9,2,"div",16),a.Lb()),2&i){const i=a.Xb(2);a.yb(1),a.ac("ngForOf",i.couponList)}}function q(i,n){1&i&&(a.Mb(0,"div",23),a.Mb(1,"a",24),a.ic(2,"Discover All Coupons"),a.Lb(),a.Lb())}function V(i,n){1&i&&(a.Mb(0,"div",14),a.Kb(1,"app-w-loading-spinner"),a.Lb())}function ii(i,n){if(1&i){const i=a.Nb();a.Mb(0,"div",26),a.Mb(1,"div",27),a.Mb(2,"div",28),a.Mb(3,"p",29),a.ic(4),a.Lb(),a.Mb(5,"a",21),a.Tb("click",(function(){a.ec(i);const t=n.$implicit;return a.Xb(3).onGiveawayDetail(t.name,t.pcOrNot,t.imageUrl)})),a.ic(6,"Detail"),a.Lb(),a.Mb(7,"a",22),a.Tb("click",(function(){a.ec(i);const t=n.$implicit;return a.Xb(3).onGetGiveawayLink(t.link,t.linkToDetail)})),a.ic(8,"Get link"),a.Lb(),a.Lb(),a.Lb(),a.Lb()}if(2&i){const i=n.$implicit;a.yb(4),a.jc(i.name)}}function ni(i,n){if(1&i&&(a.Mb(0,"div",15),a.hc(1,ii,9,1,"div",25),a.Lb()),2&i){const i=a.Xb(2);a.yb(1),a.ac("ngForOf",i.giveawayList)}}function ti(i,n){1&i&&(a.Mb(0,"div",30),a.Mb(1,"a",31),a.ic(2,"Discover All Giveaways"),a.Lb(),a.Lb())}function ei(i,n){if(1&i){const i=a.Nb();a.Mb(0,"app-modal-coupon-link",32),a.Mb(1,"a",33),a.Tb("click",(function(){return a.ec(i),a.Xb(2).onCouponClose()})),a.ic(2,"Close"),a.Lb(),a.Lb()}if(2&i){const i=a.Xb(2);a.ac("link",i.couponLink)}}function oi(i,n){if(1&i){const i=a.Nb();a.Mb(0,"app-modal-giveaway-link",34),a.Mb(1,"a",33),a.Tb("click",(function(){return a.ec(i),a.Xb(2).onGiveawayClose()})),a.ic(2,"Close"),a.Lb(),a.Lb()}if(2&i){const i=a.Xb(2);a.ac("link",i.giveawayLink)("detail",i.giveawayDetail)}}function ai(i,n){if(1&i){const i=a.Nb();a.Mb(0,"app-modal-detail",35),a.Mb(1,"a",33),a.Tb("click",(function(){return a.ec(i),a.Xb(2).onDetailClose()})),a.ic(2,"Close"),a.Lb(),a.Lb()}if(2&i){const i=a.Xb(2);a.ac("isCouponOrGiveaway",i.isGivewayOrCoupon)("info",i.giveawayName||i.couponDes)("category",i.giveawayCategory||i.couponCat)("couponLang",i.couponLang)("couponUpload",i.couponDay)("imageUrl",i.giveawayImgUrl)}}function ci(i,n){if(1&i&&(a.Mb(0,"div"),a.Mb(1,"div",3),a.Mb(2,"h2",4),a.ic(3,"Courses Coupons"),a.Lb(),a.Lb(),a.hc(4,A,2,0,"div",5),a.hc(5,Q,2,1,"div",6),a.hc(6,q,3,0,"div",7),a.Kb(7,"hr",8),a.Mb(8,"div",3),a.Mb(9,"h2",9),a.ic(10,"Giveaways"),a.Lb(),a.Lb(),a.hc(11,V,2,0,"div",5),a.hc(12,ni,2,1,"div",6),a.hc(13,ti,3,0,"div",10),a.hc(14,ei,3,1,"app-modal-coupon-link",11),a.hc(15,oi,3,2,"app-modal-giveaway-link",12),a.hc(16,ai,3,6,"app-modal-detail",13),a.Lb()),2&i){const i=a.Xb();a.yb(4),a.ac("ngIf",i.isCouponLoading),a.yb(1),a.ac("ngIf",!i.isCouponLoading),a.yb(1),a.ac("ngIf",!i.isCouponLoading),a.yb(5),a.ac("ngIf",i.isGiveawayLoading),a.yb(1),a.ac("ngIf",!i.isGiveawayLoading),a.yb(1),a.ac("ngIf",!i.isGiveawayLoading),a.yb(1),a.ac("ngIf",i.isCouponClose),a.yb(1),a.ac("ngIf",i.isGiveawayClose),a.yb(1),a.ac("ngIf",i.isDetailClose)}}function ri(i,n){if(1&i){const i=a.Nb();a.Mb(0,"div",36),a.Mb(1,"p",37),a.ic(2),a.Lb(),a.Mb(3,"a",33),a.Tb("click",(function(){return a.ec(i),a.Xb().onReload()})),a.ic(4,"Reload the Page"),a.Lb(),a.Kb(5,"div"),a.Lb()}if(2&i){const i=a.Xb();a.yb(2),a.jc(i.error)}}const si=[{path:"",component:f,children:[{path:"",component:(()=>{class i{constructor(i){this.webScrapingService=i,this.isConnected=!0,this.error=""}ngOnInit(){null==this.couponList&&(this.isCouponLoading=!0,this.webScrapingService.fetchCouponCourses(1).subscribe(i=>{this.isCouponLoading=!1,i.data.length=6,this.couponList=i.data},i=>{this.isCouponLoading=!1,this.error="Check Your Internet Connection | Internal Server Error!"})),null==this.giveawayList&&(this.isGiveawayLoading=!0,this.webScrapingService.fetchGiveaways(1).subscribe(i=>{this.isGiveawayLoading=!1,i.data.length=6,this.giveawayList=i.data},i=>{this.isGiveawayLoading=!1,this.error="Check Your Internet Connection | Internal Server Error!"}))}onCouponClose(){this.isCouponClose=!1,this.couponLink=""}onReload(){window.location.reload()}onGetCouponLink(i){this.isCouponClose=!0,this.isGetLinkLoading=!0,this.webScrapingService.fetchCouponLink(i).subscribe(i=>{this.isGetLinkLoading=!1,this.couponLink=i.link})}onCouponDetail(i,n,t,e){this.isDetailClose=!0,this.isGivewayOrCoupon=!0,this.couponDes=i,this.couponCat=n,this.couponLang=t,this.couponDay=e}onGetGiveawayLink(i,n){this.isGiveawayClose=!0,this.isGetDetailLoading=!0,this.webScrapingService.fetchGiveawayDetail(n).subscribe(i=>{this.giveawayLink=i.data[0],this.giveawayDetail=i.data[1]})}onGiveawayClose(){this.isGiveawayClose=!1,this.giveawayLink="",this.giveawayDetail=[]}onGiveawayDetail(i,n,t){this.isDetailClose=!0,this.isGivewayOrCoupon=!1,this.giveawayName=i,this.giveawayCategory=""==n?"Book":n,this.giveawayImgUrl=t}onDetailClose(){this.isDetailClose=!1,this.giveawayName="",this.giveawayCategory="",this.giveawayImgUrl="",this.couponDes="",this.couponCat="",this.couponLang="",this.couponDay=""}}return i.\u0275fac=function(n){return new(n||i)(a.Jb(m))},i.\u0275cmp=a.Db({type:i,selectors:[["app-home"]],decls:3,vars:2,consts:[[1,"right"],[4,"ngIf"],["class","right__error",4,"ngIf"],[1,"center-text"],[1,"heading-coupon","m-t-small"],["class","m-t-medium",4,"ngIf"],["class","columns is-multiline m-t-medium",4,"ngIf"],["class","center-text m-t-small",4,"ngIf"],[1,"m-t-medium","home-hr"],[1,"heading-coupon","m-t-medium"],["class","center-text m-t-small m-b-small",4,"ngIf"],[3,"link",4,"ngIf"],[3,"link","detail",4,"ngIf"],[3,"isCouponOrGiveaway","info","category","couponLang","couponUpload","imageUrl",4,"ngIf"],[1,"m-t-medium"],[1,"columns","is-multiline","m-t-medium"],["class","column is-one-third",4,"ngFor","ngForOf"],[1,"column","is-one-third"],[1,"wcard","wcard--coupon","center-text"],["alt","Card Image",1,"wcard__img",3,"src"],[1,"wcard__text","m-b-small"],[1,"wbtn","wbtn--detail",3,"click"],[1,"wbtn","wbtn--link",3,"click"],[1,"center-text","m-t-small"],["routerLink","coupon",1,"btn-exp"],["class","column is-one-third is-desktop",4,"ngFor","ngForOf"],[1,"column","is-one-third","is-desktop"],[1,"wcard","wcard--giveaway"],[1,"wcard__center"],[1,"wcard__text-heading","m-b-small"],[1,"center-text","m-t-small","m-b-small"],["routerLink","giveaway",1,"btn-exp"],[3,"link"],[1,"wbtn","wbtn--close",3,"click"],[3,"link","detail"],[3,"isCouponOrGiveaway","info","category","couponLang","couponUpload","imageUrl"],[1,"right__error"],[1,"right__error-text"]],template:function(i,n){1&i&&(a.Mb(0,"div",0),a.hc(1,ci,17,9,"div",1),a.hc(2,ri,6,1,"div",2),a.Lb()),2&i&&(a.yb(1),a.ac("ngIf",""==n.error),a.yb(1),a.ac("ngIf",""!=n.error))},directives:[e.i,w,e.h,o.h,L,j,I],styles:["[_ngcontent-%COMP%]::selection{background-color:#ff4500;color:#fff}[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:0}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset .5rem 1rem 2rem #ff4500;box-shadow:inset .5rem 1rem 2rem #ff4500;-webkit-border-radius:10px;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#fff;border:1px solid rgba(255,68,0,.658);-webkit-border-radius:10px;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:rgba(255,68,0,.658)}.btn-exp[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;text-decoration:none;outline:none;color:#000;font-size:1.3em;padding:1rem 2rem;background-color:#fff;font-weight:700;border-bottom:2px solid transparent;-webkit-transition:all .5s;transition:all .5s}.btn-exp[_ngcontent-%COMP%]:hover{background-color:#ff4500;color:#fff;padding:1rem 4rem;border-bottom:2px solid rgba(255,68,0,.658)}.home-hr[_ngcontent-%COMP%]{display:block;border-top:2px solid rgba(255,69,0,.2);width:50%;margin:0 auto}"]}),i})()},{path:"coupon",component:U},{path:"giveaway",component:H}]}];let li=(()=>{class i{}return i.\u0275mod=a.Hb({type:i}),i.\u0275inj=a.Gb({factory:function(n){return new(n||i)},imports:[[o.i.forChild(si)],o.i]}),i})(),bi=(()=>{class i{}return i.\u0275mod=a.Hb({type:i}),i.\u0275inj=a.Gb({factory:function(n){return new(n||i)},providers:[m],imports:[[li,e.b]]}),i})()}}]);