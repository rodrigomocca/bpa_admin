"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[605],{7902:(A,c,t)=>{t.d(c,{J:()=>p}),t(2495);var l=t(6019),u=t(3668);let p=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=u.oAB({type:a}),a.\u0275inj=u.cJS({imports:[[l.ez]]}),a})()},8605:(A,c,t)=>{t.r(c),t.d(c,{AuthSignOutModule:()=>T});var d=t(697),g=t(86),f=t(7902),h=t(1382),x=t(273),v=t(9417),b=t(423),l=t(9947),u=t(8889),a=t(6263),i=t(7384),e=t(3668),m=t(7919),C=t(6019);function F(n,s){if(1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"i18nPlural"),e.BQk()),2&n){const o=e.oxw();e.xp6(1),e.hij(" Redirecting in ",e.xi3(2,1,o.countdown,o.countdownMapping)," ")}}function S(n,s){1&n&&(e.ynx(0),e._uU(1," You are now being redirected! "),e.BQk())}const O=function(){return["/sign-in"]},Z=[{path:"",component:(()=>{class n{constructor(o,r){this._authService=o,this._router=r,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new x.x}ngOnInit(){this._authService.signOut(),(0,v.H)(1e3,1e3).pipe((0,b.x)(()=>{this._router.navigate(["sign-in"])}),function(n,s=!1){return(0,l.e)((o,r)=>{let j=0;o.subscribe(new u.Q(r,w=>{const y=n(w,j++);(y||s)&&r.next(w),!y&&r.complete()}))})}(()=>this.countdown>0),(0,a.R)(this._unsubscribeAll),(0,i.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(m.e),e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["auth-sign-out"]],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12","mx-auto"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"You have signed out!"),e.qZA(),e.TgZ(7,"div",6),e.YNc(8,F,3,4,"ng-container",7),e.YNc(9,S,2,0,"ng-container",7),e.qZA(),e.TgZ(10,"div",8),e.TgZ(11,"span"),e._uU(12,"Go to"),e.qZA(),e.TgZ(13,"a",9),e._uU(14,"sign in "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(8),e.Q6J("ngIf",r.countdown>0),e.xp6(1),e.Q6J("ngIf",0===r.countdown),e.xp6(4),e.Q6J("routerLink",e.DdM(3,O)))},directives:[C.O5,d.yS],pipes:[C.Gx],encapsulation:2}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.Bz.forChild(Z),g.ot,f.J,h.m]]}),n})()}}]);