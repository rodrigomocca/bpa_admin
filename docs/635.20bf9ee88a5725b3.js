"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[635],{8635:(k,d,n)=>{n.r(d),n.d(d,{AuthSignInModule:()=>M});var l=n(1553),c=n(86),f=n(904),m=n(8167),p=n(9112),h=n(138),Z=n(7964),v=n(7902),x=n(5192),A=n(1382),s=n(9133),I=n(2495),t=n(3668),y=n(7919),T=n(6019),w=n(7847);const U=["signInNgForm"];function b(e,r){if(1&e&&(t.TgZ(0,"fuse-alert",47),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),t.xp6(1),t.hij(" ",o.alert.message," ")}}function q(e,r){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Email address is required "),t.qZA())}function C(e,r){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function J(e,r){1&e&&t._UZ(0,"mat-icon",28),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function S(e,r){1&e&&t._UZ(0,"mat-icon",28),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function F(e,r){1&e&&(t.TgZ(0,"span"),t._uU(1," Sign in "),t.qZA())}function Q(e,r){1&e&&t._UZ(0,"mat-progress-spinner",48),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const N=function(){return["/sign-up"]},_=function(){return["/forgot-password"]},j=[{path:"",component:(()=>{class e{constructor(o,i,a,g){this._activatedRoute=o,this._authService=i,this._formBuilder=a,this._router=g,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({email:["hughes.brian@company.com",[s.kI.required,s.kI.email]],password:["admin",s.kI.required],rememberMe:[""]})}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe(()=>{const o=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(o)},o=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0}))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.gz),t.Y36(y.e),t.Y36(s.qu),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-in"]],viewQuery:function(o,i){if(1&o&&t.Gf(U,5),2&o){let a;t.iGM(a=t.CRH())&&(i.signInNgForm=a.first)}},decls:77,vars:21,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-end","justify-between","w-full","mt-1.5"],[3,"color","formControlName"],[1,"text-md","font-medium","text-primary-500","hover:underline",3,"routerLink"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"flex","items-center","mt-8"],[1,"flex-auto","mt-px","border-t"],[1,"mx-2","text-secondary"],[1,"flex","items-center","mt-8","space-x-4"],["type","button","mat-stroked-button","",1,"flex-auto"],[1,"icon-size-5",3,"svgIcon"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(o,i){if(1&o){const a=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Sign in"),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"div"),t._uU(9,"Don't have an account?"),t.qZA(),t.TgZ(10,"a",7),t._uU(11,"Sign up "),t.qZA(),t.qZA(),t.YNc(12,b,2,5,"fuse-alert",8),t.TgZ(13,"form",9,10),t.TgZ(15,"mat-form-field",11),t.TgZ(16,"mat-label"),t._uU(17,"Email address"),t.qZA(),t._UZ(18,"input",12),t.YNc(19,q,2,0,"mat-error",13),t.YNc(20,C,2,0,"mat-error",13),t.qZA(),t.TgZ(21,"mat-form-field",11),t.TgZ(22,"mat-label"),t._uU(23,"Password"),t.qZA(),t._UZ(24,"input",14,15),t.TgZ(26,"button",16),t.NdJ("click",function(){t.CHM(a);const u=t.MAs(25);return u.type="password"===u.type?"text":"password"}),t.YNc(27,J,1,1,"mat-icon",17),t.YNc(28,S,1,1,"mat-icon",17),t.qZA(),t.TgZ(29,"mat-error"),t._uU(30," Password is required "),t.qZA(),t.qZA(),t.TgZ(31,"div",18),t.TgZ(32,"mat-checkbox",19),t._uU(33," Remember me "),t.qZA(),t.TgZ(34,"a",20),t._uU(35,"Forgot password? "),t.qZA(),t.qZA(),t.TgZ(36,"button",21),t.NdJ("click",function(){return i.signIn()}),t.YNc(37,F,2,0,"span",13),t.YNc(38,Q,1,2,"mat-progress-spinner",22),t.qZA(),t.TgZ(39,"div",23),t._UZ(40,"div",24),t.TgZ(41,"div",25),t._uU(42,"Or continue with"),t.qZA(),t._UZ(43,"div",24),t.qZA(),t.TgZ(44,"div",26),t.TgZ(45,"button",27),t._UZ(46,"mat-icon",28),t.qZA(),t.TgZ(47,"button",27),t._UZ(48,"mat-icon",28),t.qZA(),t.TgZ(49,"button",27),t._UZ(50,"mat-icon",28),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(51,"div",29),t.O4$(),t.TgZ(52,"svg",30),t.TgZ(53,"g",31),t._UZ(54,"circle",32),t._UZ(55,"circle",33),t.qZA(),t.qZA(),t.TgZ(56,"svg",34),t.TgZ(57,"defs"),t.TgZ(58,"pattern",35),t._UZ(59,"rect",36),t.qZA(),t.qZA(),t._UZ(60,"rect",37),t.qZA(),t.kcU(),t.TgZ(61,"div",38),t.TgZ(62,"div",39),t.TgZ(63,"div"),t._uU(64,"Welcome to"),t.qZA(),t.TgZ(65,"div"),t._uU(66,"our community"),t.qZA(),t.qZA(),t.TgZ(67,"div",40),t._uU(68," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),t.qZA(),t.TgZ(69,"div",23),t.TgZ(70,"div",41),t._UZ(71,"img",42),t._UZ(72,"img",43),t._UZ(73,"img",44),t._UZ(74,"img",45),t.qZA(),t.TgZ(75,"div",46),t._uU(76,"More than 17k people joined us, it's your turn"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const a=t.MAs(25);t.xp6(10),t.Q6J("routerLink",t.DdM(19,N)),t.xp6(2),t.Q6J("ngIf",i.showAlert),t.xp6(1),t.Q6J("formGroup",i.signInForm),t.xp6(5),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",i.signInForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",i.signInForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===a.type),t.xp6(1),t.Q6J("ngIf","text"===a.type),t.xp6(4),t.Q6J("color","primary")("formControlName","rememberMe"),t.xp6(2),t.Q6J("routerLink",t.DdM(20,_)),t.xp6(2),t.Q6J("color","primary")("disabled",i.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",!i.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",i.signInForm.disabled),t.xp6(8),t.Q6J("svgIcon","feather:facebook"),t.xp6(2),t.Q6J("svgIcon","feather:twitter"),t.xp6(2),t.Q6J("svgIcon","feather:github")}},directives:[l.yS,T.O5,s._Y,s.JL,s.sg,m.KE,m.hX,h.Nt,s.Fj,s.JJ,s.u,c.lW,m.R9,m.TO,f.oG,p.Hw,w.W,Z.Ou],encapsulation:2,data:{animation:I.L}}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(j),c.ot,f.p9,m.lN,p.Ps,h.c,Z.Cq,v.J,x.fC,A.m]]}),e})()}}]);