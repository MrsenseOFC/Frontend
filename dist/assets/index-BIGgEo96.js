import{h as Ha,f as Ye,p as _,c as h,L as Ba,P as a,j as e,u as w,a as Ce,r as p,C as te,M as _e,b as Re,K as Ya,d as Wa,I as Es,S as ze,e as he,g as Oe,H as zt,i as ft,V as bt,W as Dt,k as qt,F as It,l as Rt,m as Ot,G as vt,n as Nt,o as Mt,q as Lt,s as Ga,t as Xa,v as Qa,T as Ja,w as zs,x as wt,y as nt,O as Ne,z as Ka,A as Za,B as en,D as Ds,E as tn,J as on,N as sn,Q as Te,R as rn,U as qs,X as so,Y as Vo,Z as an,_ as Uo,$ as io,a0 as fo,a1 as bo,a2 as nn,a3 as Is,a4 as vo,a5 as wo,a6 as ro,a7 as ln,a8 as cn,a9 as dn,aa as pn,ab as un,ac as mn,ad as _n,ae as Ho,af as Bo,ag as Yo,ah as Wo,ai as Rs,aj as hn,ak as gn,al as xn,am as yn,an as fn,ao as bn,ap as vn,aq as wn,ar as v}from"./vendor-EDPr7W8i.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function i(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(l){if(l.ep)return;l.ep=!0;const n=i(l);fetch(l.href,n)}})();const o={colors:{primary:"#91DE0F",lightprimary:"#49A859",secondary:"#008EFF",lightsecondary:"#0594B8",tertiary:"#69BBFF",quaternary:"#014a85",white:"#ffffff",black:"#000000",lightblack:"#00000060",mediumblack:"#00000080",gray:"#676770",lightgray:"#CCCDD2",darkgray:"#2F2F2F",blackgray:"#0D0D0D",shadow:"#0000001a",transparent:"transparent",mediumred:"#E33434",lightred:"#FF3F5F",red:"#C20032",gold:"#ffbf00",orange:"#FF6300",lightorange:"#FF8A40"},borders:{primary:"1px solid #91DE0F",xprimary:"2px solid #91DE0F",xlightprimary:"2px solid #49A859",secondary:"1px solid #008EFF",xsecondary:"2px solid #008EFF",tertiary:"1px solid #69BBFF",xtertiary:"2px solid #69BBFF",quaternary:"1px solid #014a85",xquaternary:"2px solid #014a85",white:"1px solid white",xwhite:"2px solid white",red:"1px solid #C20032",mediumred:"1px solid #E33434",orange:"1px solid #FF6300",lightorange:"1px solid #FF8A40",xtransparent:"2px solid transparent"},sizes:{xxxsmall:"7px",xxsmall:"8px",xsmall:"10px",small:"13px",medium:"16px",large:"18px",xlarge:"20px",xxlarge:"24px",huge:"34px",xhuge:"44px",xxhuge:"54px",xxxhuge:"64px",giant:"74px"},spacings:{xxsmall:"3px",xsmall:"5px",small:"10px",medium:"15px",large:"20px",xlarge:"25px",xxlarge:"30px",xxxlarge:"35px",huge:"40px",xhuge:"45px",giant:"60px",xgiant:"80px",xxgiant:"100px"},medias:{smallpc:"(max-width: 930px)",tablet:"(max-width: 768px)",mobile:"(max-width: 480px)",smallmobile:"(max-width: 380px)"},fonts:{primary:'"Montserrat", sans-serif;'}},jn=Ha`
  
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;

     &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({theme:t})=>t.colors.lightgray}; 
      border-radius: 0px 15px 15px 0px; 

    }

    &::-webkit-scrollbar-track {
      background-color: ${({theme:t})=>t.colors.transparent}
      border-radius: 0px 15px 15px 0px; 
    }
    }
    

    body, html {
      background: ${({theme:t})=>t.colors.black};
      box-sizing: border-box;
    }

    [data-rmiz-modal-overlay='hidden'] {
     background-color: rgba(255, 255, 255, 0);
     
    }

    [data-rmiz-modal-overlay='visible'] {
      background-color: ${({theme:t})=>t.colors.black};

      /* @media ${({theme:t})=>t.medias.tablet} {
       display: none;
      } */
    }

//CSS Global para os Slides usados via Swiper

.swiper-container {
}

.swiper-button-next, 
.swiper-button-prev {
  color: ${({theme:t})=>t.colors.white};
}

.swiper-button-next:after, 
.swiper-button-prev:after {
  font-size: ${({theme:t})=>t.sizes.xxlarge};

  @media ${({theme:t})=>t.medias.mobile} {
    font-size: ${({theme:t})=>t.sizes.medium};
  };

  @media ${({theme:t})=>t.medias.smallmobile} {
    font-size: ${({theme:t})=>t.sizes.small};
  };
}

.swiper-button-next.swiper-button-disabled, 
.swiper-button-prev.swiper-button-disabled {
    opacity: 0;
}

.swiper-pagination-bullet-active {
  background-color: ${({theme:t})=>t.colors.white} !important;
}

.swiper-wrapper{
    /* padding-bottom: 30px;
    padding-top: 30px; */
}

.swiper-pagination-bullet{
  background-color: ${({theme:t})=>t.colors.white};
  width: 8px;
  height: 8px;

  @media ${({theme:t})=>t.medias.mobile} {
    width: 5px;
    height: 5px;
  };
}

.swiper-scrollbar {
  background: ${({theme:t})=>t.colors.white};
}

.swiper-lazy-preloader {
}



`;Ye`
  from {
    transform: scale(0.8);
    opacity: 0.5;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;const I=Ye`
  from {
    transform: translateY(30% );
    opacity: 0.5;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,Os=Ye`
  from {
    transform: translateX(-100%); 
    opacity: 0; 
  }

  to {
    transform: translateX(0); 
    opacity: 1; 
  }
`,$n=Ye`
  from {
    transform: translateX(100%); 
    opacity: 0; 
  }

  to {
    transform: translateX(0); 
    opacity: 1; 
  }
`,jo=Ye`
  from {
    transform: translateY(-100px);
    opacity: 0.5;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`,ue=Ye`
  from {
    opacity: 0;

  }
  to {
    opacity: 1;
  }
`;Ye`
  from {
    opacity: 1;

  }
  to {
    opacity: 0;
  }
`;const $o=Ye`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ko=Ye`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`,kn=Ye`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-3px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(3px, 0, 0);
  }
`,Cn=_.div`
  ${({theme:t})=>h`
  /* background: linear-gradient(
   to bottom,
   rgba(0, 0, 0, 0.8),
   rgba(0, 0, 0, 0.8)
  ),
  url('/assets/images/background.png');

  background-position: center;
  background-size: cover; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;

  width: 100%;
  height: 100%;


  transition: all 500ms ease-in-out;

  @media ${t.medias.tablet} {
    background-size: contain;
    background-repeat: repeat-y:;
  }
  `}
`,we=_.div`
  ${({theme:t})=>h`
  animation: ${I} 300ms ease-out;
  
  background-color: ${t.colors.transparent};
  backdrop-filter: blur(10px);
  border: ${t.borders.xwhite};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 700px;
  height: 100%;
  padding: ${t.spacings.large};

  transition: all 500ms ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  @media ${t.medias.tablet} {
    width: 90%;
  }

 
  `}
`,de=_.button`
  ${({theme:t,size:s,textcolor:i,texthover:r,bgcolor:l,bghover:n,border:g,borderhover:x,active:u,gradient:m})=>h`
    color: ${i};
    background: ${m?`linear-gradient(to right, ${t.colors.lightsecondary}, ${t.colors.lightprimary})`:`${l}`};
    box-shadow: ${u?`0px 0px 5px 1px ${x}`:"none"};
    border: 1px solid ${g};
    border-radius: 10px;

    font-family: ${t.fonts.primary};
    font-weight: 800;
    font-size: ${s};
    text-transform:uppercase;

    padding: ${t.spacings.xsmall};

    transition: all 800ms ease-in-out;

    &:hover{
      color: ${r};
      background: ${n};
      border: 1px solid ${x};
    }

    @media${t.medias.tablet} {
      font-size: ${t.sizes.xsmall};
    }

    @media${t.medias.smallmobile} {
      font-size: ${t.sizes.xxsmall};
    }
  `}
`,Se=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
    display: grid;
    padding: ${t.spacings.xxsmall};
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(195px, 1fr));
    grid-gap: ${t.spacings.xxsmall};

    @media ${t.medias.smallpc} {
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    }

    @media ${t.medias.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    }

    @media ${t.medias.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    }
  `}
`,Sn=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    
    
  `}
`,Z=_(Ba)`
  ${({theme:t,color:s,active:i,hovercolor:r})=>h`
    animation: ${i&&kn} 250ms; 
    color: ${i?t.colors.black:s};
    background: ${i?t.colors.white:"none"};
    box-shadow: ${i?"0px 0px 10px 1px #CCCDD2":"none"};
    font-family: ${t.fonts.primary};
    text-decoration: none;
    text-align: center;
    user-select: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all 400ms ease-in-out;

    &:hover {
      color: ${r};
    }
  `}
`,oe=_.nav`
  ${({theme:t})=>h`
    animation: ${ue} 300ms;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    border: ${t.borders.white};
    box-shadow: 0px 0px 8px 0.5px ${t.colors.white};
    border-radius: 15px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: ${t.spacings.xxsmall};
    z-index: 1000;
    

    display: block;
    min-width: 300px;
 


    transition: all 500ms ease-in-out;

    @media ${t.medias.mobile} {
      min-width: 90%;
    }


    ${Se}{
     padding:${t.spacings.small};
     grid-gap: 10px 5px;
     border-radius: 15px;
     grid-template-columns: repeat(auto-fit, minmax(70px, 3fr));
    }

    ${Z}{
      font-size: ${t.sizes.xsmall};

      & svg {
      color: ${t.colors.white};
      width: 20px;
      transition: all 300ms ease-in-out;
      }

      &:hover {
        
        & svg {
          color: ${t.colors.primary};
        }
      }
    }

  `}
`,M=_.div`
  ${({theme:t,hovercolor:s,active:i,activecolor:r,color:l})=>h`
      transition: all 500ms ease-in-out ;
      width: 40px;
      display: flex;
      align-items: center;     
      animation: ${i?$o:ko} 1000ms;

      &:hover {
        > svg {
          color: ${s||t.colors.secondary};
          transform: scale(1.1);
        }
      }

      @media ${t.medias.mobile} {
        width: 30px;
      }
    
      & svg {

        width: 100%;
        height: 100%;

        transition: all 500ms ease-in-out ;
        color: ${i?r:l};
  
      }
  `}
`,ge=_.nav`
  ${({theme:t})=>h`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: ${t.spacings.large};
     height: 100%;
     padding: ${t.spacings.medium};
  `}
`,Ae=_.header`
  ${({theme:t})=>h`
    animation: ${jo} 500ms ease-out;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0)
      );  
    display: flex;
    justify-content: space-between;
    padding: ${t.spacings.large};
    min-height: 80px;
    width: 100%;
    display: flex;
    position: absolute;
    z-index: 10000;
    
  `}
`,Tn=_.div`
  ${({theme:t})=>h`
    
  ${Ae} {
      justify-content: space-between;


      ${ge} {
        @media ${t.medias.tablet} {
         display: none;
        }
      }

      ${M} {
        display: none;
        animation: none;

        @media ${t.medias.tablet} {
          display: flex;
        }
      }
    }


    ${oe} {
      & ${de} {
        height: 30px;
      }
    }

    > ${oe} {
      display: none;
      flex-direction: column;
      gap: ${t.spacings.small};
      padding: ${t.spacings.medium};

      @media ${t.medias.tablet} {
        display: flex;
      }
    }
    
  `}
`,An=_.section`
  ${({theme:t,backgroundimagesrc:s})=>h`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 1)
      ),
      url(${s});

     background-position: right;
     background-size: cover;
    
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     

     height: 100vh;

     ${we} {
      max-width: 350px;
      height: auto;

      @media ${t.medias.tablet} {
       width: 90%;
      }
     }
     
  `}
`,ao=_.form`
  ${({theme:t})=>h`
    font-family: ${t.fonts.primary};

    display: flex;
    flex-direction: column;
    gap: 15px;

    margin: 0 auto;
    width: 100%;
    
  `}
`;function me({children:t,onSubmit:s}){return e.jsx(ao,{onSubmit:s,children:t})}me.propTypes={children:a.node.isRequired,onSubmit:a.func.isRequired};const Ns=_.input`
  ${({theme:t,bgcolor:s,bghover:i})=>h`
    background: ${s};
    border: ${t.borders.white};
    border-radius: 7px;
    color: ${t.colors.white};

    font-size: ${t.sizes.medium};
    font-family: ${t.fonts.primary};
    font-weight: 600;

    padding: ${t.spacings.medium};

    transition: all 400ms ease-in-out;

    &:hover {
      background: ${i};
    }

    @media ${t.medias.mobile} {
      font-size: ${t.sizes.small};
      padding: ${t.spacings.small};
    }
  `}
`;function xe({name:t,id:s,value:i,bgcolor:r=o.colors.secondary,bghover:l=o.colors.quaternary}){const{t:n}=w();return e.jsx(Ns,{type:"submit","data-wait":n("please_wait"),name:t,id:s,value:i,bgcolor:r,bghover:l})}xe.propTypes={name:a.string.isRequired,id:a.string.isRequired,value:a.string.isRequired,bgcolor:a.string,bghover:a.string};const Pn=_.label`
  ${({theme:t})=>h`
    animation: ${ue} 500ms;
    display: flex;
    flex-direction: column;
    color: ${t.colors.lightgray};
    font-size: ${t.sizes.medium};
    font-family: ${t.fonts.primary};
    @media ${t.medias.mobile} {
      font-size: ${t.sizes.small};
    }
  `}
`,Co=_.input`
  ${({theme:t})=>h`
    background: ${t.colors.transparent};
    border: ${t.borders.white};
    border-radius: 7px;
    color: ${t.colors.white};

    font-size: ${t.sizes.small};
    font-family: ${t.fonts.primary};
  

    padding: ${t.spacings.small};
    box-shadow: 0px 0px 5px 1px ${t.colors.transparent};
    transition: all 300ms ease-in-out;
    
    &:hover {
      border: ${t.borders.secondary};
    }

    &::-webkit-input-placeholder {
      color: ${t.colors.white};
    }

    &:focus {
      border: ${t.borders.secondary};
      box-shadow: 0px 0px 5px 1px ${t.colors.secondary};
      outline: none;
    }

    &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(0.8) brightness(100%) sepia(0%) saturate(10000%) hue-rotate(210deg); 
    display: flex;
    transition: all 500ms ease-in-out;

    &:hover {
      filter: invert(0.8) brightness(50%) sepia(100%) saturate(10000%) hue-rotate(195deg); 
    }
    }

    @media ${t.medias.mobile} {
      font-size: ${t.sizes.xsmall};
    }
  `}
`;function T({type:t,name:s,id:i,onChange:r,value:l,placeholder:n="",title:g="",autoComplete:x="",required:u=!1}){const{t:m}=w();return e.jsxs(Pn,{children:[g," ",u&&`(${m("required")})`,e.jsx(Co,{type:t,name:s,id:i,placeholder:n,onChange:r,value:l,autoComplete:x,required:u})]})}T.propTypes={type:a.string.isRequired,name:a.string.isRequired,id:a.string.isRequired,value:a.string,title:a.string,onChange:a.func.isRequired,autoComplete:a.string,placeholder:a.string,required:a.bool};const En=_.div`
  ${({theme:t})=>h`
    text-align: center;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;

    margin: 0 auto;

    & p,  {
      color: ${t.colors.white};
      font-size: ${t.sizes.small};
      font-weight: 300;
    }

    & ${Z} {
      font-size: ${t.sizes.medium};

      @media ${t.medias.mobile} {
        font-size: ${t.sizes.small};
      }
    }
  `}
`;function c({newtab:t=!1,color:s=o.colors.white,hovercolor:i=o.colors.lightgray,text:r="",path:l,children:n="",active:g,onclick:x}){return e.jsxs(Z,{onClick:x,to:l,color:s,hovercolor:i,active:g?"active":void 0,target:t?"_blank":"_self",children:[r,n]})}c.propTypes={text:a.string,newtab:a.bool,path:a.string,color:a.string,hovercolor:a.string,children:a.node,active:a.bool,onclick:a.func};function Ms({text:t,path:s,pathtext:i}){return e.jsxs(En,{children:[e.jsx("p",{children:t}),e.jsx(c,{path:s,text:i,color:o.colors.secondary,hovercolor:o.colors.tertiary})]})}Ms.propTypes={text:a.string.isRequired,path:a.string.isRequired,pathtext:a.string.isRequired};const zn=_.div`
  ${({theme:t})=>h`
    font-family: ${t.fonts.primary};
    font-size: ${t.sizes.small};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;

    width: 100%;
    
    & p {
      color: ${t.colors.white};
    }

    > label {
     display: flex;
     flex-direction: row;
     gap: ${t.spacings.xsmall};
    }
  `}
`,Dn=_.div`
  ${({theme:t})=>h`
     display: flex;
     flex-direction: row;
     align-items: center;
     gap: ${t.spacings.xxsmall};
     font-family: ${t.fonts.primary};
     cursor: pointer;
     user-select: none;
  `}
`,qn=_.input`
  ${({theme:t})=>h`
    position: relative;
    width: 16px;
    height: 16px;
    appearance: none;
    border: ${t.borders.xwhite};
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    user-select: none;

    &:checked::before {
      opacity: 1;
    }

    &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background-color: ${t.colors.secondary}; 
    border-radius: 50%;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    }
  `}
`,In=_.label`
  ${({theme:t})=>h`
    color: ${t.colors.lightgray};
    font-size: ${t.sizes.small};
    text-transform: uppercase;
    cursor: pointer;
    user-select: none;

    @media ${t.medias.mobile} {
    font-size: ${t.sizes.xsmall};
    }
  `}
`;function Go({id:t,value:s,text:i="",checked:r,onChange:l}){return e.jsxs(Dn,{children:[e.jsx(qn,{onChange:l,type:"checkbox",name:t,id:t,value:s,checked:r}),e.jsx(In,{htmlFor:t,children:i})]})}Go.propTypes={id:a.string.isRequired,value:a.string,text:a.string,checked:a.bool,onChange:a.func};function Ls({checkboxtext:t,path:s,pathtext:i,checkboxid:r}){return e.jsxs(zn,{children:[e.jsx(Go,{id:r,value:r,text:t}),e.jsx(c,{path:s,text:i,color:o.colors.secondary,hovercolor:o.colors.tertiary})]})}Ls.propTypes={checkboxtext:a.string.isRequired,checkboxid:a.string.isRequired,path:a.string.isRequired,pathtext:a.string.isRequired};function je({children:t}){return e.jsx(Cn,{children:t})}je.propTypes={children:a.node.isRequired};const ke=_.h1`
  ${({theme:t,color:s,size:i,uppercase:r})=>h`
     color: ${s};
     margin-bottom: ${t.spacings.medium};
     font-size: ${i};
     font-family: ${t.fonts.primary};
     font-weight: 600;
     text-transform: ${r};


     @media ${t.medias.smallpc} {
      font-size: ${t.sizes.xxlarge};
     }

     @media ${t.medias.mobile} {
      font-size: ${t.sizes.medium};
      margin-bottom: 15px;
     }

     @media ${t.medias.smallmobile} {
      font-size: ${t.sizes.small};
     }
  `}
`;function G({text:t="",color:s=o.colors.white,size:i=o.sizes.xxlarge,uppercase:r=!1}){return e.jsx(ke,{color:s,size:i,uppercase:r?"uppercase":"none",children:t})}G.propTypes={text:a.string,color:a.string,size:a.string,uppercase:a.bool};function Pe({children:t}){return e.jsx(Ae,{children:t})}Pe.propTypes={children:a.node.isRequired};const Fs=_.div`
  ${({theme:t,size:s})=>h`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    width: ${s};

    @media ${t.medias.tablet} {
        width: 150px;
      }

      @media ${t.medias.mobile} {
        width: 110px;
      }
    
    > img {
      width: 100%;
      height: 100%;
    }
  `}
`;function lt({logo:t,size:s,name:i}){return e.jsx(Fs,{size:s,children:e.jsx("img",{src:t,alt:i})})}lt.propTypes={size:a.string,name:a.string,logo:a.string.isRequired};function be({children:t}){return e.jsx(ge,{children:t})}be.propTypes={children:a.node.isRequired};function $({onclick:t,newtab:s,gradient:i,active:r,path:l,text:n,size:g=o.sizes.small,textcolor:x=o.colors.white,texthover:u="",bgcolor:m=o.colors.black,bghover:d="",border:f=o.colors.black,borderhover:A=""}){const S=Ce(),D=V=>{t&&t(V),l&&!s&&S(l)},E=e.jsx(de,{textcolor:x,texthover:u,bgcolor:m,bghover:d,border:f,size:g,borderhover:A,onClick:D,active:r?"active":void 0,gradient:i?"gradient":void 0,children:n});return s&&l?e.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer",children:E}):E}$.propTypes={onclick:a.func,path:a.string,newtab:a.bool,text:a.string,size:a.string,textcolor:a.string,texthover:a.string,bgcolor:a.string,bghover:a.string,border:a.string,borderhover:a.string,active:a.bool,gradient:a.bool};function q({children:t,active:s,activecolor:i=o.colors.primary,onclick:r,name:l="Ícone",hovercolor:n="",color:g=o.colors.white}){return e.jsx(M,{onClick:r,title:l,"aria-label":l,hovercolor:n,active:s?"active":void 0,activecolor:i,color:g,children:t})}q.propTypes={children:a.node.isRequired,onclick:a.func,active:a.bool,name:a.string,hovercolor:a.string,activecolor:a.string,color:a.string};function ee({children:t,onclick:s}){return e.jsx(oe,{onClick:s,children:t})}ee.propTypes={children:a.node.isRequired,onclick:a.func};function Rn(){const t=Ce(),{t:s,i18n:i}=w(),[r,l]=p.useState(!1),[n,g]=p.useState({email:"",password:""}),x=m=>{g({...n,[m.target.name]:m.target.value})},u=async m=>{m.preventDefault();try{const d=await Re.post("http://localhost:7320/api/auth/login",{email:n.email,password:n.password});if(d.data&&d.data.token){const{token:f}=d.data;localStorage.setItem("accessToken",f);const{user:A}=d.data;A.profile_type==="player"?t("/player-dashboard"):A.profile_type==="scout"?t("/scout-dashboard"):A.profile_type==="club"?t("/club-dashboard"):t("/default-dashboard")}else alert(s("invalid_credentials_check_details"))}catch(d){console.error(s("login_error"),d.response?d.response.data:d.message),alert(s("login_error_try_again"))}g({...n,password:""})};return p.useState(!1),e.jsxs(Tn,{children:[e.jsxs(Pe,{children:[e.jsx(lt,{size:"150px",logo:"/assets/images/pngs/logo.png"}),e.jsxs(be,{children:[e.jsx($,{path:"/",text:s("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/login",text:s("login"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/register",text:s("register"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/benefits",text:s("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),r?e.jsx(q,{name:s("menu"),onclick:()=>l(!r),children:e.jsx(te,{})}):e.jsx(q,{name:s("close_menu"),onclick:()=>l(!r),children:e.jsx(_e,{})})]}),r&&e.jsxs(ee,{children:[e.jsx($,{path:"/",text:s("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/login",text:s("login"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/register",text:s("register"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/benefits",text:s("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),e.jsx(An,{backgroundimagesrc:`/assets/images/backgrounds/login_register_${i.language}.png`,children:e.jsx(je,{children:e.jsxs(we,{children:[e.jsx(G,{text:s("login"),size:o.sizes.xxlarge}),e.jsxs(me,{onSubmit:u,method:"post",children:[e.jsx(T,{type:"email",name:"email",id:"email_input",placeholder:s("your_email"),title:s("email"),value:n.email,onChange:x,required:!0}),e.jsx(T,{type:"password",name:"password",id:"password_input",placeholder:s("insert_your_password"),title:s("password"),value:n.password,onChange:x,required:!0}),e.jsx(xe,{name:"login_submit",id:"login_submit",value:s("login"),onClick:u}),e.jsx(Ls,{checkboxtext:s("remember_login"),checkboxid:"rememberMe",path:"/forgot-password",pathtext:s("forgot_password_question")}),e.jsx(Ms,{text:s("have_account_question"),path:"/register",pathtext:s("register")}),e.jsx(c,{text:s("return_home"),path:"/",color:o.colors.secondary,hovercolor:o.colors.tertiary})]})]})})})]})}const W=_.div`
  ${({theme:t,color:s})=>h`
      width: 100%;
      display: flex;
      color: ${t.colors.white};
      gap: ${t.spacings.small};

      @media ${t.medias.smallpc} {
        flex-direction: column;
        gap: ${t.spacings.small};
      }

      > ${ke} {
        margin-bottom: 0px;
      }
  `}
`,Xo=_.div`
  ${({theme:t})=>h`
  animation: ${I} 500ms ease-out;
  
  background-color: ${t.colors.transparent};
  backdrop-filter: blur(10px);
  border: ${t.borders.xwhite};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${t.spacings.large};

  transition: all 500ms ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  `}
`,se=_.p`
  ${({theme:t,uppercase:s,color:i,size:r})=>h`
    font-family: ${t.fonts.primary};
    font-size: ${r};
    color: ${i};
    text-transform: ${s};

    @media ${t.medias.tablet} {
      font-size: ${t.sizes.small};
    }

    @media ${t.medias.mobile} {
      font-size: ${t.sizes.xsmall};
    }
  `}
`,On=_.div`
  ${({theme:t})=>h`
    
  ${Ae} {
      justify-content: space-between;


      ${ge} {
        @media ${t.medias.tablet} {
         display: none;
        }
      }

      ${M} {
        display: none;
        animation: none;

        @media ${t.medias.tablet} {
          display: flex;
        }
      }
    }


    ${oe} {
      & ${de} {
        height: 30px;
      }
    }

    > ${oe} {
      display: none;
      flex-direction: column;
      gap: ${t.spacings.small};
      padding: ${t.spacings.medium};

      @media ${t.medias.tablet} {
        display: flex;
      }
    }
    
  `}
`,Nn=_.section`
  ${({theme:t,backgroundimagesrc:s})=>h`
      background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 1)
      ),
      url(${s});

     background-position: right;
     background-size: cover;
     display: flex;
     height: 100%;
     width: 100%;
     min-height: 1000px;
     flex-direction: center;
     justify-content: space-around;
     gap: ${t.spacings.medium};
     padding-top: 110px;
     padding-left: ${t.spacings.large};
     padding-right: ${t.spacings.large};
     padding-bottom: ${t.spacings.large};
    

     @media (max-width: 1440px){
      flex-direction: column;
      align-items: center;
     }


     ${W} {
      justify-content: center;
      
      @media ${t.medias.smallpc} {
        flex-direction: row;
      }
     }

     ${we} {

      @media ${t.medias.tablet} {
        width: 100%;
      }
      
      ${se} {
        text-align: center
      }
     }

     ${Xo} {
      max-width: 400px;
      height: 100%;
      
      @media (max-width: 1440px) {
        max-width: 700px;
      }

      @media ${t.medias.tablet} {
        width: 100%;
      }
    } 

    }
  `}
`;_.div`
  ${({theme:t})=>h`
    display: flex;
    gap: ${t.spacings.medium};
    flex-direction: column;


    @media (max-width: 1440px) {
      flex-wrap: wrap; /* Permite que os itens sejam quebrados em várias linhas */
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    ${Xo} {
      flex: auto;
      flex-grow: 1;
      flex-basis: 200;
      width: 100%;

      
      @media (max-width: 1440px) {
       flex-wrap: wrap;
       align-items: center;
       justify-content: center;
       width: 40%;
       max-width: 500px;
      }

      @media ${t.medias.tablet} {
        width: 100%;
        max-width: 700px;
      }
    } 
  `}
`;const pe=_.h2`
  ${({theme:t,color:s,size:i,uppercase:r})=>h`
     color: ${s};
     margin-bottom: ${t.spacings.small};
     font-size: ${i};
     font-family: ${t.fonts.primary};
     font-weight: 600;
     text-transform: ${r};

     @media ${t.medias.tablet} {
      font-size: ${t.sizes.large};
     }

     @media ${t.medias.mobile} {
      font-size: ${t.sizes.medium};
      margin-bottom: ${t.spacings.xsmall};
    }

     @media ${t.medias.smallmobile} {
      font-size: ${t.sizes.small};
     }
  `}
`;function k({text:t="",color:s=o.colors.white,size:i=o.sizes.large,uppercase:r=!1,as:l="h2"}){return e.jsx(pe,{as:l,color:s,size:i,uppercase:r?"uppercase":"none",children:t})}k.propTypes={text:a.string,color:a.string,size:a.string,uppercase:a.bool,as:a.oneOf(["h2","h3","h4","h5","h6"])};const Kt=_.div`
  ${({theme:t})=>h`
    position: relative;
    display: inline-block;
    font-family: ${t.fonts.primary};
  `}
`,Mn=_.div`
  ${({theme:t})=>h`  
    animation: ${ue} 300ms;
    position: absolute;
    margin-top: ${t.spacings.small};
    background-color: ${t.colors.black};
    border: ${t.borders.white};
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 1);
    z-index: 2000;
    width: 100%;
    font-family: ${t.fonts.primary};

    transition: all 500ms ease-in-out;

    &:hover {
      border: ${t.borders.primary};
    }
  `}
`,At=_.p`
  ${({theme:t})=>h`
  color: ${t.colors.white};
  border-radius: 8px;
  padding: ${t.spacings.small};
  font-size: ${t.sizes.medium};
  text-decoration: none;
  text-align: left;
  user-select: none;
  transition: all 400ms ease-in-out;
  

  &:hover {
    color: ${t.colors.black};
    background-color: ${t.colors.primary};
  }

  @media ${t.medias.mobile} {
    font-size: ${t.sizes.small};
  }

  @media ${t.medias.smallmobile} {
    font-size: ${t.sizes.xsmall};
  }
  `}
`,Ln=_.p`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    color: ${t.colors.lightgray};
    font-size: ${t.sizes.medium};
    user-select: none;
    
    @media ${t.medias.mobile} {
      font-size: ${t.sizes.small};
    }

    
  `}
`,Ft=_.button`
  ${({theme:t,active:s})=>h`
  background-color: ${t.colors.transparent};
  color: ${s?t.colors.primary:t.colors.white};
  border: ${s?t.borders.primary:t.borders.white};
  border-radius: 10px;
  user-select: none;
  width: 100%;
  padding: ${t.spacings.small};
  cursor: pointer;
  font-family: ${t.fonts.primary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 500ms ease-in-out;
  box-shadow: ${s?`0px 0px 5px 1px ${t.colors.primary}`:`0px 0px 5px 1px ${t.colors.transparent}`};

  @media ${t.medias.smallmobile} {
    font-size: ${t.sizes.xsmall};
  }


  &:hover {
    color: ${t.colors.primary};
    border: ${t.borders.primary};

    & svg {
      color: ${t.colors.primary};
    }
  }

  & svg {
    width: 20px;
  }

  `}
`;function H({options:t,placeholder:s,title:i,id:r,required:l=!1,onDropdownChange:n,selectedvalue:g="",otheroption:x=!1}){const{t:u}=w(),[m,d]=p.useState(!1),[f,A]=p.useState(""),S={value:"other",text:"Outro"},D=C=>{C.preventDefault(),d(!m)},E=C=>{n(C.value),A(C.value),d(!1)},V=()=>{n(""),A("")};return e.jsxs(Kt,{id:r,children:[i&&e.jsxs(Ln,{children:[i," ",l&&`(${u("required")})`]}),e.jsxs(Ft,{onClick:D,active:m?"Active":void 0,children:[u(`${g}`)||u(`${f}`)||u(`${s}`)||u("select"),m?e.jsx(Ya,{}):e.jsx(Wa,{})]}),m&&e.jsxs(Mn,{onClick:D,children:[s&&e.jsx(At,{onClick:V,children:s}),t.map(C=>e.jsx(At,{onClick:()=>E(C),children:u(C.value)},C.value)),x&&e.jsx(At,{onClick:()=>E(S),children:u(S.value)})]})]})}H.propTypes={options:a.arrayOf(a.shape({value:a.string.isRequired,text:a.string.isRequired})).isRequired,placeholder:a.string,title:a.string,required:a.bool,id:a.string.isRequired,selectedvalue:a.string,otheroption:a.bool,onDropdownChange:a.func.isRequired};H.defaultProps={placeholder:"",title:"",required:!1,selectedvalue:"",otheroption:!1};const Me=_.div`
  ${({theme:t})=>h`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}
`,J=_.ul`
  ${({theme:t})=>h`
    font-family: ${t.fonts.primary};
    padding: ${t.spacings.small};
    gap: ${t.spacings.small};
    color: ${t.colors.white};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    list-style: none; /* Remove default disc markers */

  `}
`,P=_.li`
  ${({theme:t,color:s})=>h`
   width: 100%;
   text-align: start;
   font-size: ${t.sizes.medium};

   &::before {
      content: ''; 
      display: inline-block;
      width: 7px; 
      height: 7px; 
      box-shadow: 0px 0px 10px 1px ${s||t.colors.white};
      background-color: ${s||t.colors.white};
      border-radius: 50%; 
      margin-right: ${t.spacings.small}; 
    }

   @media ${t.medias.mobile} {
    font-size: ${t.sizes.small};
   }
  `}
`;function Vs({children:t}){return e.jsx(Xo,{children:t})}Vs.propTypes={children:a.node.isRequired};const X=p.createContext();function Fn(){const t=p.useContext(X),{s2tState:s,s2tDispatch:i}=t,[r,l]=p.useState(""),[n,g]=p.useState(""),[x,u]=p.useState(""),[m,d]=p.useState(""),[f,A]=p.useState(""),[S,D]=p.useState(""),[E,V]=p.useState(""),[C,R]=p.useState(""),[ne,b]=p.useState("");p.useState("");const j=Ce(),{t:N,i18n:ie}=w(),[L,Y]=p.useState(!1),Ve=async re=>{if(re.preventDefault(),m!==f){alert("As senhas não coincidem!");return}const Ue={name:r,username:n,email:x,password:m,profile_type:S,competitive_category:E,competitive_level:C,modality:S==="player"?ne:""};try{const Ee=await Re.post("https://talent2show.onrender.com/api/auth/register",Ue);console.log(N("server_response"),Ee.data),localStorage.setItem("username",n),j("/login")}catch(Ee){console.error(N("register_error"),Ee.response?Ee.response.data:Ee.message),alert(N("register_error_try_again"))}};return e.jsxs(On,{children:[e.jsxs(Pe,{children:[e.jsx(lt,{size:"150px",logo:"/assets/images/pngs/logo.png"}),e.jsxs(be,{children:[e.jsx($,{path:"/",text:N("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/login",text:N("login"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/register",text:N("register"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:N("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),L?e.jsx(q,{name:N("menu"),onclick:()=>Y(!L),children:e.jsx(te,{})}):e.jsx(q,{name:N("close_menu"),onclick:()=>Y(!L),children:e.jsx(_e,{})})]}),L&&e.jsxs(ee,{children:[e.jsx($,{path:"/",text:N("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/login",text:N("login"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/register",text:N("register"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:N("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),e.jsxs(Nn,{backgroundimagesrc:`/assets/images/backgrounds/login_register_${ie.language}.png`,children:[e.jsxs(Vs,{children:[e.jsx(k,{text:N("step_by_step"),uppercase:!0,as:"h4",size:o.sizes.xlarge}),e.jsxs(J,{children:[e.jsx(P,{children:N("register_step_1")}),e.jsx(P,{children:N("register_step_2")}),e.jsx(P,{children:N("register_step_3")}),e.jsx(P,{children:N("register_step_4")})]})]}),e.jsxs(we,{children:[e.jsx(k,{text:N("register"),uppercase:!0,as:"h4",size:o.sizes.xlarge}),e.jsxs(me,{onSubmit:Ve,children:[e.jsx(T,{type:"text",name:"username",id:"username",title:N("username"),placeholder:N("your_username_on_t2s"),value:n,onChange:re=>g(re.target.value),required:!0}),e.jsx(T,{type:"email",name:"email",id:"email",title:N("email"),placeholder:N("your_email"),value:x,onChange:re=>u(re.target.value),required:!0}),e.jsx(T,{type:"password",name:"password",id:"password",title:N("password"),placeholder:N("your_password"),value:m,onChange:re=>d(re.target.value),required:!0}),e.jsx(T,{type:"password",name:"confirmPassword",id:"confirmPassword",title:N("password_confirmation"),placeholder:N("confirm_password"),value:f,onChange:re=>A(re.target.value),required:!0}),e.jsx(H,{title:N("profile_type_question"),id:"profileType",placeholder:N("select_profile_type"),options:s.formOptions.profileType,selectedvalue:S,onDropdownChange:re=>D(re),required:!0}),S&&S.length>0&&e.jsx(T,{type:"text",name:"name",id:"name",title:N("name"),placeholder:{player:N("player_name_question"),club:N("club_name_question"),university:N("university_name_question"),agency:N("agency_name_question"),league:N("league_name_question"),staff:N("staff_name_question"),fan:N("fan_name_question")}[S]||"",onChange:re=>l(re.target.value),required:!0}),S!=="fan"&&S!=="exchangeAgencie"&&e.jsxs(e.Fragment,{children:[e.jsx(H,{title:N("which_competitive_category"),id:"competitiveCategory",placeholder:N("select_category"),options:s.formOptions.competitiveCategory,selectedvalue:E,onDropdownChange:re=>V(re),required:!0}),S==="player"&&e.jsx(H,{title:N("which_modality"),id:"playerModality",placeholder:N("select_modality"),options:s.formOptions.modality,selectedvalue:ne,onDropdownChange:re=>b(re)}),S==="club"&&e.jsx(H,{title:N("which_club_modality"),id:"clubModality",placeholder:N("select_modality"),options:s.formOptions.modality,selectedvalue:ne,onDropdownChange:re=>b(re)})]}),e.jsx(xe,{type:"submit",value:N("register")})]})]})]})]})}const Ie=p.createContext(),Us="change_profile_info",Hs="add_club_history",Bs="remove_club_history",Ys="add_academic_history",Ws="remove_academic_history",Gs="add_award_history",Xs="remove_award_history",Qs="add_video",Js="remove_video",Vn=(t,s)=>{switch(s.type){case"LOAD_PLAYER_DATA":return{...t,...s.payload};case"UPDATE_PROFILE_PICTURE":return{...t,profile:{...t.profile,banner:{...t.profile.banner,profileImageSrc:s.payload}}};case Us:return{...t,profile:{...t.profile,info:s.payload}};case Hs:return{...t,profile:{...t.profile,clubs:[...t.profile.clubs,s.payload]}};case Bs:return{...t,profile:{...t.profile,clubs:t.profile.clubs.filter(i=>i.id!==s.payload.id)}};case Ys:return{...t,profile:{...t.profile,studies:[...t.profile.studies,s.payload]}};case Ws:return{...t,profile:{...t.profile,studies:t.profile.studies.filter(i=>i.id!==s.payload.id)}};case Gs:return{...t,profile:{...t.profile,awards:[...t.profile.awards,s.payload]}};case Xs:return{...t,profile:{...t.profile,awards:t.profile.awards.filter(i=>i.id!==s.payload.id)}};case Qs:return t.profile.videos.some(r=>r.url===s.payload.url)?t:{...t,profile:{...t.profile,videos:[...t.profile.videos,s.payload]}};case Js:return{...t,profile:{...t.profile,videos:t.profile.videos.filter(i=>i.url!==s.payload.url)}};default:return t}},mo={profile:{banner:{},info:{},photos:[],videos:[],clubs:[],studies:[],awards:[]},benefits:[],friends:[]};function Vt({children:t}){const[s,i]=p.useReducer(Vn,mo);return p.useEffect(()=>{(async()=>{try{const l=await Re.get("https://talent2show.onrender.com/api/playerProfiles/1");l.data&&l.data.id?i({type:"LOAD_PLAYER_DATA",payload:l.data}):console.warn("Resposta da API não contém dados válidos")}catch(l){console.error("Erro ao carregar dados do jogador:",l),i({type:"LOAD_PLAYER_DATA_ERROR",payload:l.message})}})()},[]),e.jsx(Ie.Provider,{value:{playerState:s,playerDispatch:i},children:t})}Vt.propTypes={children:a.node.isRequired};const ae=_.section`
  ${({theme:t,color:s})=>h`
      background: ${s};
      color: ${t.colors.white};
      display: flex;
      flex-direction: column;
      gap: ${t.spacings.medium};
  `}
`,no=_.nav`
  ${({theme:t})=>h`
     animation: ${ue} 500ms;
     background: rgba(0,0,0,0.8);

     width: 100%;
     z-index: 10;
     padding: ${t.spacings.large};

     display: none;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     gap: ${t.spacings.small};

     @media ${t.medias.tablet} {
       display: flex;
     }
  `}
`,Un=_.section`
  ${({theme:t})=>h`

  ${Ae} {
      justify-content: flex-end;

      @media ${t.medias.tablet} {
        justify-content: center;
      }

      @media ${t.medias.mobile} {
        justify-content: flex-end;
      }

      ${ge} {
        @media ${t.medias.mobile} {
         display: none;
        }
      }

      ${M} {
        display: none;
        animation: none;

        @media ${t.medias.mobile} {
          display: flex;
        }
      }
    }


    ${oe} {
      & ${de} {
        height: 30px;
      }
    }

    > ${oe} {
      display: none;
      flex-direction: column;
      gap: ${t.spacings.small};
      padding: ${t.spacings.medium};

      @media ${t.medias.mobile} {
        display: flex;
      }
    }
      
    >${ae} {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      gap: ${t.spacings.xlarge};
      padding: ${t.spacings.medium};


      @media ${t.medias.tablet} {
        width: 100%;
      }
    }

  `}
`,So=_.label`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
    position: absolute; 
    
    ${M} {
      animation: none;
      position: absolute;  
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}
`,Hn=_.input`
  ${({theme:t})=>h`
    display: none;
  `}
`,Bn=_.div`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`,Yn=_.div`
  ${({theme:t})=>h`
      width: 230px;
      height: 230px;
      padding: ${t.spacings.small};
      position: relative;
      border-radius: 50%; 

      @media ${t.medias.smallpc} {
        width: 200px;
        height: 200px;
      } 

      @media ${t.medias.tablet} {
        width: 150px;
        height: 150px;
      } 

      @media ${t.medias.mobile} {
        width: 130px;
        height: 130px;
      }

      @media ${t.medias.smallmobile} {
        width: 100px;
        height: 100px;
      }
  `}
`,Wn=_.img`
  ${({theme:t})=>h`
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
  `}
`,Gn=_.div`
  ${({theme:t})=>h`
      border-radius: 50%;    
      width: 40px;
      height: 40px;
      position: absolute;
      bottom: 20px;
      right: 30px;

      @media ${t.medias.smallpc} {
        bottom: 13px;
      }

      @media ${t.medias.tablet} {
        width: 35px;
        height: 35px;
        bottom: 10px;
        right: 20px;   
      }

      @media ${t.medias.mobile} {
        width: 30px;
        height: 30px;
        bottom: 10px;
        right: 20px;   
      }

      @media ${t.medias.smallmobile} {
        width: 25px;
        height: 25px;
        bottom: 7px;
        right: 15px;  
      }

      ${So} {
        top: 0;
        border-radius: 50%; 

        & ${M} {
          padding: ${t.spacings.xsmall};
          border-radius: 50%; 
          background: rgba(0,0,0,0.7);

          &:hover {
            background: rgba(0,0,0,1);
          }
        }
      }

      > img {
        height: 30px;
        width: 30px;

        @media ${t.medias.smallpc} {
          height: 25px;
          width: 25px;
       }

        @media ${t.medias.mobile} {
          height: 20px;
          width: 20px;
       }

        @media ${t.medias.smallmobile} {
          height: 15px;
          width: 15px;
        }
      }
  `}
`;function To({id:t,accept:s="image/*",required:i=!1,children:r,hovercolor:l,name:n,onChange:g}){return e.jsx(me,{children:e.jsxs(So,{htmlFor:t,children:[e.jsx(q,{name:n,hovercolor:l,children:r}),e.jsx(Hn,{type:"file",accept:s,id:t,name:t,required:i,onChange:g})]})})}To.propTypes={id:a.string.isRequired,accept:a.string,required:a.bool,children:a.node,hovercolor:a.string,name:a.string,onChange:a.func};Re.create({baseURL:"http://localhost:7320",timeout:5e3,headers:{"Content-Type":"application/json"}});const No="http://localhost:7320",Xn=p.createContext({currentUser:null,logout:()=>{},error:null,isLoading:!1,updateProfileImage:()=>{}}),Ut=()=>p.useContext(Xn);function We({badge:t="",type:s="",competitivecategory:i,ownerview:r}){const{currentUser:l,updateProfileImage:n}=Ut(),[g,x]=p.useState(""),{t:u}=w(),m=l==null?void 0:l.id;p.useEffect(()=>{l!=null&&l.profileImage?x(l.profileImage):m&&d()},[l,m]);const d=async()=>{if(m)try{const S=(await Re.get(`${No}/api/profilePicture/${m}`)).data.image_url||"";x(S)}catch(A){console.error(u("image_load_error"),A.response?A.response.data:A.message)}},f=async A=>{const S=A.target.files[0];if(S){const D=new FormData;D.append("profileImage",S);try{const V=(await Re.post(`${No}/api/profilePicture/upload/${m}`,D,{headers:{"Content-Type":"multipart/form-data"}})).data.image_url;x(V),n(V)}catch(E){console.error(u("image_upload_error"),E.response?E.response.data:E.message)}}};return e.jsxs(Bn,{children:[e.jsxs(Yn,{children:[e.jsx(Wn,{src:g?`${No}${g}`:"/assets/images/logos/vertical-background.png",alt:u("profile_picture")}),r&&e.jsx(Gn,{children:e.jsx(To,{id:"changeProfilePicture",hovercolor:o.colors.primary,name:u("change_profile_picture_button"),onChange:f,children:e.jsx(Es,{})})})]}),s&&e.jsx($,{text:`${s}  ${i||""}`,bgcolor:o.colors.secondary,bghover:o.colors.secondary,textcolor:o.colors.black,texthover:o.colors.black,border:o.colors.black,borderhover:o.colors.black})]})}We.propTypes={competitivecategory:a.string,badge:a.string,type:a.string,ownerview:a.bool.isRequired};const Qn=_.div`
  ${({theme:t})=>h`
    margin-bottom: ${t.spacings.large};
    padding: ${t.spacings.small};
    animation: ${$n} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */

    .swiper-slide {
      padding: ${t.spacings.xsmall} ${t.spacings.xxsmall};
    }
  `}
`,Ks=_.div`
  ${({theme:t,islocked:s})=>h`
  border-radius: 15px;
  background: ${s?"black":"none"};
  width: 100%;
  max-width: 400px;
  height: 100%;
  display: flex;

  position: relative;

  transition: all 500ms ease-in-out;
  animation: ${ue} 500ms ease-out;

  ${Z} {
    width: 100%;
    height: 100%;
  }


  &:hover {

    box-shadow: 0px 0px 10px 2px ${t.colors.secondary};

    & ${Zs} {
      color: ${t.colors.tertiary};
      background-color: ${t.colors.mediumblack};
    }
  }
  `}
`,Jn=_.img`
  ${({theme:t,islocked:s})=>h`
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 500ms ease-in-out;
    filter: ${s?"grayscale(1) opacity(0.6)":"grayscale(0) opacity(1)"};
  `}
`,Kn=_.div`
  ${({theme:t})=>h`

    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;

    transition: all 500ms ease-in-out;


    > img {
      width: 35%;
      height: 35%;
      transition: all 500ms ease-in-out;
    }
  `}
`,Zs=_.h5`
  ${({theme:t})=>h`
    color: ${t.colors.white};
    background-color: ${t.colors.lightblack};
    border-radius: 0px 0px 15px 15px;
    font-size: ${t.sizes.small};
    font-family: ${t.fonts.primary};
    text-transform: uppercase;
    text-align: center;

    width: 100%;
    padding: ${t.spacings.xxsmall};
    
    position: absolute;
    bottom: 0px;

    transition: all 500ms ease-in-out;


    @media ${t.medias.smallpc} {
      font-size: ${t.sizes.small};
    }

    @media ${t.medias.tablet} {
      font-size: ${t.sizes.xsmall};
    }

    @media ${t.medias.mobile} {
      font-size: ${t.sizes.xxxsmall};
    }

  `}
`;function Qo({src:t,alt:s,title:i="",islocked:r,path:l=""}){const{t:n}=w();return e.jsx(Ks,{islocked:r?"islocked":void 0,children:e.jsxs(c,{path:l,children:[e.jsx(Jn,{src:t,alt:s,islocked:r?"islocked":void 0}),r&&e.jsx(Kn,{islocked:r?"islocked":void 0,children:e.jsx("img",{src:"/assets/images/pngs/padlock.png",alt:n("blocked")})}),e.jsx(Zs,{children:i})]})})}Qo.propTypes={src:a.string.isRequired,path:a.string,alt:a.string,title:a.string,islocked:a.bool};function y({text:t,uppercase:s,color:i=o.colors.white,size:r=o.sizes.medium,children:l}){return e.jsxs(se,{uppercase:s?"uppercase":"none",color:i,size:r,children:[t,l]})}y.propTypes={children:a.node,text:a.string.isRequired,color:a.string,uppercase:a.bool,size:a.string};function ce({items:t,title:s}){const{t:i}=w(),r=[...t].sort((l,n)=>l.islocked&&!n.islocked?1:!l.islocked&&n.islocked?-1:0);return e.jsxs(Qn,{children:[e.jsx(G,{text:s,uppercase:!0}),e.jsx(ze,{spaceBetween:15,navigation:!0,loop:!0,grabCursor:!0,breakpoints:{1601:{slidesPerView:7},1415:{slidesPerView:6},1100:{slidesPerView:5},680:{slidesPerView:4},0:{slidesPerView:3}},children:r&&r.length>0?e.jsx(e.Fragment,{children:r.map(l=>e.jsx(he,{children:e.jsx(Qo,{src:l.src,alt:i(l.title),title:i(l.title),islocked:l.islocked,path:l.islocked?"/plans":l.path})},l.id))}):e.jsx(y,{text:i("data_not_found")})})]})}ce.propTypes={items:a.arrayOf(a.object).isRequired,title:a.string};const Mo=_.div`
  ${({theme:t})=>h`
  background-image: linear-gradient(to right, ${t.colors.secondary}, ${t.colors.primary});
  border-radius: 10px;

  padding: ${t.spacings.small};

   @media ${t.medias.tablet} {
    padding: ${t.spacings.xsmall};
   }
  `}
`,Zn=_.h1`
  ${({theme:t})=>h`
    color: ${t.colors.black};
    font-family: ${t.fonts.primary};
    font-size: ${t.sizes.xlarge};
    font-weight: 800;
    text-transform: uppercase;

    @media ${t.medias.smallpc} {
      font-size: ${t.sizes.large};
    }

    @media ${t.medias.tablet} {
      font-size: ${t.sizes.medium};
    }

    @media ${t.medias.mobile} {
      font-size: ${t.sizes.small};
    }

    @media ${t.medias.smallmobile} {
      font-size: ${t.sizes.xsmall};
    }
  `}
`;function ct(){const[t,s]=p.useState(""),[i,r]=p.useState(!0),[l,n]=p.useState(null),{t:g}=w();return p.useEffect(()=>{(async()=>{try{const u=localStorage.getItem("accessToken");if(!u)throw new Error(g("token_not_found"));const m=await Re.get("http://localhost:7320/api/users",{headers:{Authorization:`Bearer ${u}`}});m.data&&m.data.username?s(m.data.username):(console.error(g("username_not_found_response"),m.data),n("Username not found"))}catch(u){u.response?(console.error(g("error_response_server"),u.response),n(`Error: ${u.response.status} - ${u.response.data.message||"Internal Server Error"}`)):u.request?(console.error(g("no_response"),u.request),n("No response from server")):(console.error(g("error_setting_request"),u.message),n("Error setting up request"))}finally{r(!1)}})()},[]),i?e.jsx(Mo,{children:"Loading..."}):l?e.jsxs(Mo,{children:["Error:",l]}):e.jsx(Mo,{children:e.jsx(Zn,{children:t})})}const el=_.header`
  ${({theme:t,type:s})=>h`
     animation: ${Os} 500ms ease-out;
     animation-fill-mode: forwards; /* Manter o estado final após a animação */
     background-image: linear-gradient(to right, ${t.colors.secondary}, ${t.colors.primary});

     width: 100%;
     margin: 0 auto;

     display: flex;
     align-items: center;
     justify-content: center;
     align-content: center;
     flex-direction: column;
     max-width: 1230px;
     border-radius: 12px;
  
  
     border: ${t.borders.white};
     box-shadow: 0px 0px 5px 1px ${t.colors.white};
  

     @media ${t.medias.tablet} {
      display: none;
     }

     ${Z} {
      position: relative;
      transition: all 800ms ease-in-out;
      border-radius: 12px;
      padding: 1px ${t.spacings.xsmall};
      
      @media ${t.medias.smallpc} {
        font-size: ${t.sizes.small};
      }
     }
  `}
`,ys=_.nav`
  ${({theme:t})=>h`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: ${t.spacings.small};
     height: 100%;
     width: 100%;
     padding: ${t.spacings.xsmall};
  `}
`;function ei(){const{t}=w(),[s,i]=p.useState(""),r=Oe();return p.useEffect(()=>{i(r.pathname)},[r.pathname]),e.jsxs(e.Fragment,{children:[e.jsxs(ys,{children:[e.jsx(c,{active:s==="/player-dashboard"||s==="/player-dashboard/",path:"",text:t("home"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/player-dashboard/profile",path:"profile",text:t("profile"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/player-dashboard/opportunities",path:"opportunities",text:t("opportunities"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/player-dashboard/scouts",path:"scouts",text:t("scouts"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/player-dashboard/clubs",path:"clubs",text:t("clubs"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/player-dashboard/favorites",path:"favorites",text:t("favorites"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/player-dashboard/events",path:"events",text:t("events"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/player-dashboard/contacts",path:"contacts",text:t("contacts"),color:o.colors.white,hovercolor:o.colors.black})]}),e.jsxs(ys,{children:[e.jsx(c,{active:s==="/player-dashboard/friends",path:"friends",text:t("friends"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/player-dashboard/store",path:"store",text:t("store"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/player-dashboard/my-affiliates",path:"my-affiliates",text:t("my_affiliates"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/player-dashboard/s2t+",path:"s2t+",text:t("t2s+"),color:o.colors.white,hovercolor:o.colors.black})]})]})}ei.propTypes={};const fs=_.nav`
  ${({theme:t})=>h`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: ${t.spacings.small};
     height: 100%;
     width: 100%;
     padding: ${t.spacings.xsmall};
  `}
`;function ti(){const{t}=w(),[s,i]=p.useState(""),r=Oe();return p.useEffect(()=>{i(r.pathname)},[r.pathname]),e.jsxs(e.Fragment,{children:[e.jsxs(fs,{children:[e.jsx(c,{active:s==="/club-dashboard"||s==="/club-dashboard/",path:"",text:t("home"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/club-dashboard/profile",path:"profile",text:t("profile"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/club-dashboard/my-squad",path:"my-squad",text:t("my_squad"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/club-dashboard/opportunities",path:"opportunities",text:t("opportunities"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/club-dashboard/my-opportunities",path:"my-opportunities",text:t("my_opportunities"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/club-dashboard/scouts",path:"scouts",text:t("scouts"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/club-dashboard/clubs",path:"clubs",text:t("clubs"),color:o.colors.white,hovercolor:o.colors.black})]}),e.jsxs(fs,{children:[e.jsx(c,{active:s==="/club-dashboard/players",path:"players",text:t("players"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/club-dashboard/events",path:"events",text:t("events"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/club-dashboard/favorites",path:"favorites",text:t("favorites"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/club-dashboard/contacts",path:"contacts",text:t("contacts"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/club-dashboard/friends",path:"friends",text:t("friends"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/club-dashboard/store",path:"store",text:t("store"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/club-dashboard/my-affiliates",path:"my-affiliates",text:t("my_affiliates"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/club-dashboard/s2t+",path:"s2t+",text:t("t2s+"),color:o.colors.white,hovercolor:o.colors.black})]})]})}ti.propTypes={};const tl=_.nav`
  ${({theme:t})=>h`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: ${t.spacings.small};
     height: 100%;
     width: 100%;
     padding: ${t.spacings.medium};
  `}
`;function oi({username:t,type:s}){const{t:i}=w(),[r,l]=p.useState(""),n=Oe();return s.toLowerCase(),p.useEffect(()=>{const g=()=>{l(n.pathname)};return g(),()=>g()},[n.pathname,t]),e.jsxs(tl,{children:[e.jsx(c,{active:r===`/user/${t}/profile`||r===`/user/${t}/profile/`,path:"profile",text:i("profile"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:r===`/user/${t}/squad`,path:"squad",text:i("squad"),color:o.colors.white,hovercolor:o.colors.black}),s==="club"&&e.jsx(c,{active:r===`/user/${t}/opportunities`,path:"opportunities",text:i("opportunities"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:r===`/user/${t}/friends`,path:"friends",text:i("friends"),color:o.colors.white,hovercolor:o.colors.black})]})}oi.propTypes={username:a.string,type:a.string.isRequired};function Ge({children:t}){return e.jsx(el,{children:t})}Ge.propTypes={children:a.node.isRequired};const ol=_.nav`
  ${({theme:t})=>h`
    animation: ${I} 300ms;
    background: rgba(0, 0, 0, 0.8);
    border: ${t.borders.white};
    box-shadow: 0px 0px 10px 2px ${t.colors.white};
    border-radius: 15px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: ${t.spacings.xxsmall};
    z-index: 101;
    

    display: none;
    min-width: 300px;


    transition: all 500ms ease-in-out;

    @media ${t.medias.tablet} {
      display: block
    }

    @media ${t.medias.smallmobile} {
      min-width: 90%;
    }


    ${Se}{
     padding:${t.spacings.small};
     grid-gap: 10px 5px;
     border-radius: 15px;
     grid-template-columns: repeat(auto-fit, minmax(70px, 3fr));
    }

    ${Z}{
      font-size: ${t.sizes.xsmall};

      & svg {
      color: ${t.colors.white};
      width: 20px;
      transition: all 300ms ease-in-out;
      }

      &:hover {
        color: ${t.colors.primary};
        & svg {
          color: ${t.colors.primary};
        }
      }
    }

  `}
`;function Xe({onclick:t,children:s}){return e.jsx(ol,{onClick:t,children:s})}Xe.propTypes={children:a.node.isRequired,onclick:a.func};const sl=_.div`
  ${({theme:t})=>h`
    animation: ${I} 300ms;
    background: ${t.colors.black};
    border: ${t.borders.white};
    box-shadow: 0px 0px 10px 2px ${t.colors.white};
    border-radius: 50%;

    display: none;

    position: fixed;
    bottom: 20px;
    right: 20px;

    padding: ${t.spacings.xsmall};
   
    z-index: 101;
    transition: all 500ms ease-in-out;
    width: 50px;

    @media ${t.medias.tablet} {
      display: block;
    }

    &:hover {
     color: ${t.colors.primary};
     border: ${t.borders.primary};
     box-shadow: 0px 0px 10px 2px ${t.colors.primary};
     > svg {
      color: ${t.colors.primary};
     }
    }

    > svg {
      width: 100%;
      color: ${t.colors.white};
      transition: all 500ms ease-in-out;
    }
  `}
`;function Qe({children:t,onclick:s,name:i="Ícone"}){return e.jsx(sl,{onClick:s,"aria-label":i,title:i,children:t})}Qe.propTypes={children:a.node.isRequired,name:a.string,onclick:a.func};const il=_.div`
  ${({theme:t,backgroundimagesrc:s})=>h`
    background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 1)
    ),
    url(${s||"/assets/images/backgrounds/slider-bg-1.png"});
    background-position: center;
    background-size: cover;
    backdrop-filter: blur(10px);
    width: 100%;
    height: 400px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.small};
    
    > ${ge} {
      height: auto;
      position: absolute;
      top: 0px;
    }

    & > ${ao} {
      width: 40px;
      height: 40px;
      position: absolute;
      bottom: 20px;
      right: 20px;

      ${So} {
        width: 40px;
        height: 40px;
  

        @media ${t.medias.mobile} {
          width: 25px;
          height: 25px;
          right: -2px;
        }
      }
    }

  `}
`,rl=_.div`
  ${({theme:t})=>h`
    
    color: ${t.colors.white};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${t.spacings.small};

    width: 100%;
    height: 100%;


    animation: ${jo} 300ms ease-out;

    @media ${t.medias.tablet} {
      flex-direction: column;
      justify-content: center;
      gap: ${t.spacings.xsmall};
    }

    @media ${t.medias.mobile} {
      height: 300px;
    }
    

    & ${ae} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${t.spacings.medium};
    }

   
     > ${W} {

        align-items: center;
        width: auto;
        gap: ${t.spacings.xsmall};

        @media ${t.medias.smallpc} {
          flex-direction: row;
        }

        @media ${t.medias.tablet} {
          justify-content: center;
        }

        > ${M} {
          width: 35px;

          @media ${t.medias.tablet} {
            width: 30px;
          }

          @media ${t.medias.smallmobile} {
            width: 23px;
          }
         }      
     }
 `}
`;function Je({backgroundimagesrc:t,children:s,ownerview:i}){const{currentUser:r}=Ut(),[l,n]=p.useState((r==null?void 0:r.profileImage)||""),{t:g}=w(),x=async u=>{if(!r){console.error(g("not_logged"));return}const m=u.target.files[0];if(m){const d=new FormData;d.append("image_file",m);try{const f=await Re.post(`https://talent2show.onrender.com/api/userPhotos/${r.id}/upload`,d,{headers:{"Content-Type":"multipart/form-data"}});n(f.data.image_file)}catch(f){console.error(g("image_upload_error"),f)}}};return e.jsxs(il,{backgroundimagesrc:t,children:[e.jsx(rl,{children:s}),i&&e.jsx(To,{id:"changeBannerPicture",name:g("change_banner_button"),hovercolor:o.colors.primary,onChange:x,children:e.jsx(Es,{})})]})}Je.propTypes={children:a.node.isRequired,ownerview:a.bool,backgroundimagesrc:a.string};function z({children:t,color:s}){return e.jsx(ae,{color:s,children:t})}z.propTypes={children:a.node.isRequired};function $e({children:t}){return e.jsx(Se,{children:t})}$e.propTypes={children:a.node.isRequired};function si(){const{t}=w();return e.jsxs($e,{children:[e.jsxs(c,{path:"",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(zt,{}),t("home")]}),e.jsxs(c,{path:"profile",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(ft,{}),t("profile")]}),e.jsxs(c,{path:"opportunities",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(bt,{}),t("opportunities")]}),e.jsxs(c,{path:"scouts",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Dt,{}),t("scouts")]}),e.jsxs(c,{path:"clubs",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(qt,{}),t("clubs")]}),e.jsxs(c,{path:"favorites",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(It,{}),t("favorites")]}),e.jsxs(c,{path:"events",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Rt,{}),t("events")]}),e.jsxs(c,{path:"contacts",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Ot,{}),t("contacts")]}),e.jsxs(c,{path:"friends",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(vt,{}),t("friends")]}),e.jsxs(c,{path:"store",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Nt,{}),t("store")]}),e.jsxs(c,{path:"s2t+",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Mt,{}),t("t2s+")]}),e.jsxs(c,{path:"my-affiliates",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Lt,{}),t("my_affiliates")]}),e.jsxs(c,{color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(te,{}),t("close")]})]})}si.propTypes={};function B({children:t}){return e.jsx(W,{children:t})}B.propTypes={children:a.node.isRequired};_.div`
  ${({theme:t})=>h`
  animation: ${ue} 300ms ease-out;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  z-index: 999; 
  `}
`;const Ao=_.dialog`
  ${({theme:t})=>h`
     animation: ${I} 500ms ease-out;
     background: rgba(0,0,0,0.9);
     backdrop-filter: blur(10px);
     padding: ${t.spacings.medium};
     border-radius: 15px;
     border: ${t.borders.white};
     margin: 0 auto;
     z-index: 1000; 
     


     display: flex;
     flex-direction: column;
     gap: ${t.spacings.medium};

     @media ${t.medias.mobile} {
      width: 95%;
     }

     ${W} {
      justify-content: center;
      
      @media ${t.medias.smallpc} {
        flex-direction: row;
      }
     }

     ${de} {
      min-width: 150px;

      @media ${t.medias.mobile} {
        min-width: 70px;
      }
     }

     ${se} {
      text-align: center;

      @media ${t.medias.tablet} {
      font-size: ${t.sizes.medium};
     }

      @media ${t.medias.mobile} {
        font-size: ${t.sizes.xsmall};
      }
     }
  `}
`,al=_.div`
  ${({theme:t})=>h`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${t.spacings.small};
    padding: ${t.spacings.xsmall};
      ${Ao} {
        margin-top: 20px;
      }
  `}
`;function Zt({isopen:t=!0,onfirstclick:s,firstoption:i,firstpath:r,secondoption:l,secondpath:n,onsecondclick:g,title:x,subtitle:u}){return e.jsx(e.Fragment,{children:t&&e.jsxs(Ao,{open:t,children:[e.jsx(y,{text:x,uppercase:!0}),u&&e.jsx(y,{text:u,uppercase:!0}),e.jsxs(B,{children:[i&&e.jsx($,{text:i,path:r,bgcolor:o.colors.white,bghover:o.colors.lightprimary,textcolor:o.colors.black,texthover:o.colors.black,border:o.colors.black,borderhover:o.colors.black,onclick:s}),l&&e.jsx($,{text:l,path:n,bgcolor:o.colors.white,bghover:o.colors.lightprimary,textcolor:o.colors.black,texthover:o.colors.black,border:o.colors.black,borderhover:o.colors.black,onclick:g})]})]})})}Zt.propTypes={title:a.string,subtitle:a.string,isopen:a.bool,onfirstclick:a.func,onsecondclick:a.func,firstoption:a.string,firstpath:a.string,secondoption:a.string,secondpath:a.string};function dt(){const{t}=w();return e.jsxs(al,{children:[e.jsx(y,{text:t("settings"),uppercase:!0}),e.jsxs($e,{children:[e.jsxs(c,{color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Ga,{}),t("language")]}),e.jsxs(c,{path:"/logout",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Xa,{}),t("logout")]}),e.jsxs(c,{color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(te,{}),t("close")]})]})]})}dt.propTypes={};function Jo({children:t}){return e.jsx(no,{children:t})}Jo.propTypes={children:a.node.isRequired};const nl=_.div`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.xxsmall};
    
    width: 100%;
    height: 100%;

    ${se} {
      transition: all 1000ms ease-in-out;
    }

    ${W} {
      align-items: center;

      @media ${t.medias.smallpc} {
        flex-direction: row;
      }

      @media ${t.medias.mobile} {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    ${se} {
      animation: ${ue} 300ms;
    }

  `}
`,ii=_.div`
  ${({theme:t,active:s})=>h`
    background: ${t.colors.black};
    border-radius: 12px;
    color: ${t.colors.black};
    border: ${s?t.borders.primary:t.borders.white};
    padding: ${t.spacings.small};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${t.spacings.xxlarge};

    transition: all 1000ms ease-in-out;

    @media ${t.medias.mobile} {
     width: 100%;
    }

    @media ${t.medias.smallmobile} {
     gap: ${t.spacings.small};
    }

    ${M} {
      width: 25px;

      @media ${t.medias.mobile} {
        width: 20px;
      }

      @media ${t.medias.smallmobile} {
        width: 15px;
      }
    }
  `}
`,ll=_.div`
  ${({theme:t})=>h`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${t.spacings.small};
    padding: ${t.spacings.xsmall};
    ${ii} {
      border
    }
    
  `}
`;function Ke(){const{t}=w(),s=()=>{const i=window.location.href;navigator.clipboard.writeText(i).then(()=>{}).catch(r=>{})};return e.jsxs(ll,{children:[e.jsx(y,{text:t("share"),uppercase:!0}),e.jsxs($e,{children:[e.jsxs(c,{color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Qa,{}),t("Facebook")]}),e.jsxs(c,{color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Ja,{}),t("X")]}),e.jsxs(c,{color:o.colors.white,hovercolor:o.colors.primary,onclick:s,children:[e.jsx(zs,{}),t("copy_url")]})]})]})}Ke.propTypes={};function cl(){const{t}=w(),s=p.useContext(Ie),{playerState:i,playerDispatch:r}=s,[l,n]=p.useState(!1),[g,x]=p.useState(!1),[u,m]=p.useState(!1),[d,f]=p.useState(!1),A=()=>{f(!d),m(!1)},S=()=>{m(!u),f(!1)};return e.jsxs(Un,{children:[e.jsxs(Pe,{children:[e.jsxs(be,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/player-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),g?e.jsx(q,{name:t("menu"),onclick:()=>x(!g),children:e.jsx(te,{})}):e.jsx(q,{name:t("close_menu"),onclick:()=>x(!g),children:e.jsx(_e,{})})]}),g&&e.jsxs(ee,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/player-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),e.jsxs(Je,{backgroundimagesrc:i.profile.banner.backgroundImageSrc,ownerview:!0,children:[e.jsx(We,{imagesrc:i.profile.banner.profileImageSrc,badge:i.profile.banner.badge,type:i.profile.info.profileType,ownerview:!0}),e.jsx(ct,{name:i.profile.banner.name}),e.jsxs(B,{children:[e.jsx($,{path:"profile-edit",text:t("edit_profile"),bgcolor:o.colors.primary,bghover:o.colors.black,textcolor:o.colors.black,texthover:o.colors.primary,border:o.colors.black,borderhover:o.colors.primary}),e.jsx(q,{active:u,hovercolor:o.colors.primary,name:t("settings"),onclick:S,children:e.jsx(wt,{})}),e.jsx(q,{active:d,hovercolor:o.colors.primary,name:t("share"),onclick:A,children:e.jsx(nt,{})}),u&&e.jsx(ee,{onclick:()=>m(!1),children:e.jsx(dt,{})}),d&&e.jsx(ee,{onclick:()=>f(!1),children:e.jsx(Ke,{})})]})]}),e.jsx(Ge,{children:e.jsx(ei,{})}),l?e.jsx(Xe,{onclick:()=>n(!l),children:e.jsx(si,{})}):e.jsx(Qe,{name:t("menu"),onclick:()=>n(!l),children:e.jsx(_e,{})}),e.jsx(z,{color:o.colors.black,children:e.jsx(Ne,{})}),e.jsx(ce,{items:i.benefits,title:t("my_benefits")})]})}const dl=_.div`
  ${({theme:t})=>h`
    background: ${t.colors.darkgray};
    border-radius: 50%;
    padding: ${t.spacings.xxsmall};
    transition: all 500ms ease-in-out;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 0px 10px 3px ${t.colors.gray};
    }
     & svg {
      width: 45px;

      @media ${t.medias.tablet} {
        width: 40px;
      }

      @media ${t.medias.mobile} {
        width: 30px;
      }
     }
  `}
`,Ko=_.header`
  ${({theme:t})=>h`
    animation: ${jo} 500ms ease-out;
    background: ${t.colors.black};
    display: flex;
    justify-content: space-between;
    padding: ${t.spacings.large};
    min-height: 80px;
    width: 100%;
    display: flex;
  `}
`,Po=_.div`
  ${({theme:t,backgroundimagesrc:s,gradientdirection:i,backgroundfixed:r})=>h`
    animation: ${ue} 500ms;
    height: 500px;
    width: 100%;
    background: linear-gradient(
    ${i||"to bottom"},
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
    ),
    url(${s});
    background-size: cover;
    background-position: center;
    background-attachment: ${r?"fixed":"scroll"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${t.spacings.small};
    padding: ${t.spacings.small};


    @media ${t.medias.smallpc} {
      max-height: 500px;
    }

    @media ${t.medias.tablet} {
      max-height: 400px;
    }

    @media ${t.medias.mobile} {
      max-height: 300px;
    }
  `}
`,pl=_.main`
  ${({theme:t})=>h`

  ${Se} {
    animation: ${Os} 500ms; 
    grid-gap: 5px;


    @media ${t.medias.smallpc} {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    @media ${t.medias.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    @media ${t.medias.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }


    ${de} {
    font-size: ${t.sizes.medium};
    width: 100%;
    max-width: 700px;


    @media ${t.medias.tablet} {
      font-size: ${t.sizes.small};
    }

    @media ${t.medias.mobile} {
      font-size: ${t.sizes.xsmall};
    }

    @media ${t.medias.smallmobile} {
      font-size: ${t.sizes.xxsmall};
    }
    }
  }

  ${Ko} {

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${t.spacings.medium};

    ${W} {
      width: auto;
      height: auto;
      padding: 0px ${t.spacings.medium};
      gap: ${t.spacings.medium};
      background: red;

      @media ${t.medias.smallpc} {
        flex-direction: row;
      }
    }

    
    ${M} {
      display: none;
      animation: none;

      @media (max-width: 1050px) {
        display: flex;
      }
    }

    ${ge} {
      padding: 0px ${t.spacings.medium};
    }
  }

  ${no} {
    position: absolute;
    top: 90px;
    padding: ${t.spacings.huge};
    ${de} {
      width: 174px;
    }

    @media (max-width: 1080px) {
      display: flex;
    }

    @media ${t.medias.tablet} {
      top: 70px;
    }
  }

 

  ${ge} {
    @media ${t.medias.mobile} {
      flex-direction: column;
      gap: ${t.spacings.small};
    }
  }

  ${Z} {
    @media ${t.medias.tablet} {
      font-size: ${t.sizes.small};
    }

    @media ${t.medias.mobile} {
      font-size: ${t.sizes.xsmall};
    }


  }

  ${W} {
    animation: ${ue} 2000ms;
    justify-content: center;
    align-items: center;
    margin-top: ${t.spacings.medium};


    @media ${t.medias.smallpc} {
      flex-direction: row;
    }

    @media ${t.medias.mobile} {
      /* flex-direction: column; */
    }
  }

  ${Kt} {
    min-width: 180px;
    padding: ${t.spacings.xxsmall};
  }

  ${Ft} {
    padding: ${t.spacings.xsmall};
  }

  ${At} {
    padding: ${t.spacings.xsmall};
  }

  ${Po} {
    height: 270px;
    border: none;
  }
 
  `}
`;function Zo({children:t}){return e.jsx(Ko,{children:t})}Zo.propTypes={children:a.node.isRequired};const ul=_.div`
  ${({theme:t})=>h`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  `}
`,ri=_.div`
  ${({theme:t,size:s})=>h`
    width: 100%;
    height: 100%;
    

   ${Z} {
    height: 100%;
    width: 100%;
    border-radius: 12px;
    max-width: 800px;

   }

    & img{
      object-fit: fill;
      width: 100%;
      height: 100%;
      
      border-radius: 15px;
      box-sizing: border-box;
    }

    .swiper-wrapper {
      height: ${s};
      width: 100%;

        @media ${t.medias.smallpc} {
          height: 400px;
        }

        @media ${t.medias.tablet} {
          max-height: 350px;
        }

        @media ${t.medias.mobile} {
          max-height: 230px;
        }

        @media ${t.medias.smallmobile} {
          max-height: 220px;
        }
     }

    .swiper-slide {
      width: 100%;
      height: 100%;
    }
  `}
`,ai=_.div`
  ${({theme:t})=>h`

     display: flex;
     flex-direction: column;
     gap: ${t.spacings.medium};

     padding: ${t.spacings.large};


     @media ${t.medias.smallpc} {
      padding: ${t.spacings.medium};
     }

     ${de} {
      animation: ${I} 1000ms;
      padding: ${t.spacings.large};
      display: flex;
      justify-content: center;
      align-items: center;
     }

     ${Ns} {
        animation: ${I} 500ms;

      }

     & ${M} {
      animation: none;
     }

     ${ao} {
     }


     ${se}{
      animation: ${I} 1000ms;
     }

     > ${W} {
      justify-content: space-between;

      @media ${t.medias.smallpc} {
        flex-direction: row;
      }

      > ${pe} {
        margin: auto 0;
      }
     }
     
  `}
`,ni=_.textarea`
  ${({theme:t})=>h`
      max-width: 100%;
      min-width: 100%;
      min-height: 100px;
      max-height: 100px;
      color: ${t.colors.white};
      border: ${t.borders.white};
      border-radius: 7px;
      font-size: 14px;
      padding: 8px 12px;
      background: transparent;
      font-family: ${t.fonts.primary};
      font-size: ${t.sizes.medium};
      transition: all 500ms ease-in-out;
      box-shadow: 0px 0px 5px 1px ${t.colors.transparent};

      @media ${t.medias.mobile} {
        font-size: ${t.sizes.xsmall};
      }

      &:hover{
        outline: none;
        border: ${t.borders.tertiary};
      }

      &::-webkit-input-placeholder {
        color: ${t.colors.white};
        font-size: ${t.sizes.medium};


        @media ${t.medias.mobile} {
        font-size: ${t.sizes.xsmall};
      }
      }

      &:focus {
        outline: none;
        box-shadow: 0px 0px 5px 1px ${t.colors.secondary};
        border: ${t.borders.secondary};
      }
  `}
`,li=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%; 

    ${oe} {
      width: 60%;
      height: auto;
      position: absolute;

      @media ${t.medias.mobile} {
        height: 90%;
        overflow-y: auto;
      }

      @media ${t.medias.smallmobile} {
        height: 100%;
      }

       ${ai} {
         width: 100%;
         height: 100%; 
        

          ${ni} {
            @media ${t.medias.mobile} {
              max-width: 100%;
              min-width: 100%;
              min-height: 30px;
              max-height: 100px;
            }
          }
       }
    }

    @media ${t.medias.mobile} {
      min-width: 0px;
    }
  `}  
`,ml=_.div`
  ${({theme:t})=>h`

    .swiper-wrapper {
     height: 360px;
     aspect-ratio: 16 / 9; 
     container-type: size;


      @media (max-width: 1470px) {
        height: 400px;
      }

      @media (max-width: 1050px) {
        height: 450px;
      }

      @media ${t.medias.smallpc} { 
        height: 410px;
      }

      @media ${t.medias.tablet} { 
        height: 380px;
      }

      @media (max-width: 630px) {
        height: 310px;
      }
  
      @media ${t.medias.mobile} { 
        height: 250px;
      }

      @media ${t.medias.smallmobile} { 
        height: 210px;
      }

      @media (max-width: 280px) {
        height: 190px;
      }
    }


   .swiper-slide {
     height: 100%;
     width: 100%;
     background: rgba(0,0,0,0.5);
     border: ${t.borders.xwhite};
     border-radius: 12px;
   
   }
 `}
`,_l=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${t.spacings.xsmall};
    padding: ${t.spacings.medium};

    ${M} {
    > svg {
        background: ${t.colors.white};
    }
  }


    
    & img, video{
      /* object-fit: contain;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      transition: all 500ms ease-in-out;
      box-sizing: border-box;
      border: ${t.borders.xtransparent}; */
    }

    ${W} {
      justify-content: space-between;
      align-items: center;
      /* gap: ${t.spacings.large} */

      @media ${t.medias.smallpc} {
        flex-direction: row;
      }
    }
  `}
`,bs=_.div`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: ${t.spacings.xsmall};
    height: 30px;
    z-index: 100;

    ${M} {
    width: auto;
    height: 100%;

    > svg {
     border-radius: 50%;
     /* background: rgba(0, 0, 0, 0.5); */

      &:hover {
        /* background: rgba(0, 0, 0, 0.8); */
        transform: scale(1.1);
      }

      @media ${t.medias.mobile} {
       width: 25px;
       height: 25px;
      }

      @media ${t.medias.smallmobile} {
       width: 20px;
       height: 20px;
      }
    }
  }
 `}
`,fe=_.div`
  ${({theme:t,backgroundimagesrc:s,gradientdirection:i,backgroundfixed:r})=>h`
    animation: ${ue} 500ms;
    height: 600px;
    width: 100%;
    background: linear-gradient(
    ${i||"to bottom"},
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
    ),
    url(${s});
    background-size: cover;
    background-position: center;
    background-attachment: ${r?"fixed":"scroll"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${t.spacings.small};

    @media (max-width: 1050px) {
      height: 600px;
    }

    @media ${t.medias.smallpc} {
      height: 600px;
    }

    @media ${t.medias.tablet} {
      height: 550px;
    }

    @media ${t.medias.mobile} {
      height: 350px;
    }

  `}
`,hl=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    .swiper-slide {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    & ${ri} {

      @media ${t.medias.smallpc} {
      width: 80%;
      }

      @media ${t.medias.tablet} {
        width: 80%;
      }

      @media ${t.medias.mobile} {
        width: 80%;
      }

      @media ${t.medias.smallmobile} {
        width: 100%;
      }    
    }

    & ${li} {

      width: 85%;
      padding-bottom: ${t.spacings.huge};
     

      @media (max-width: 1050px) {
       width: 70%;
      }

      @media ${t.medias.smallpc} {
        width: 70%;
      }

      @media ${t.medias.tablet} {
        width: 75%;
      }

      @media ${t.medias.mobile} {
        width: 75%;
      }
    }


    
  `}
`;function U({children:t,lazy:s,title:i="",slidesperview:r,backgroundimagesrc:l,gradientdirection:n,backgroundfixed:g,autoplay:x}){w();const u=Array.isArray(t)?t:[];return e.jsxs(fe,{backgroundimagesrc:l,gradientdirection:n,backgroundfixed:g?"backgroundfixed":void 0,children:[i&&e.jsx(k,{text:i,uppercase:!0,size:"25px"}),e.jsx(hl,{children:e.jsx(ze,{spaceBetween:10,grabCursor:!0,navigation:!0,pagination:{clickable:!0},loop:!0,autoplay:x?{delay:2500,disableOnInteraction:!0}:!1,lazy:s?"true":void 0,breakpoints:{1470:{slidesPerView:r||3},1050:{slidesPerView:r||2},0:{slidesPerView:1}},children:u.map((m,d)=>e.jsx(he,{lazy:s,children:m},d))})})]})}const gl=_.div`
  ${({theme:t})=>h`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

  `}
`,xl=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
    max-width: 500px;

    @media ${t.medias.tablet} {
      max-width: 480px;
    }
  
    @media ${t.medias.mobile} {
      max-width: 350px;
    }
  
    .swiper-wrapper{
      height: 300px;

      @media ${t.medias.tablet} {
        height: 230px;
      }

      @media ${t.medias.mobile} {
        height: 230px;
      }
    }

    .swiper-slide {
      padding: ${t.spacings.xsmall};
    }
  `}
`,yl=_.div`
  ${({theme:t})=>h`

    height: 100%;
    width: 100%;

    &:hover {
      ${di} {
        box-shadow: 0px 0px 5px 1px white;
      }

      ${ci} {
        background: rgba(0,0,0,0.8);
        box-shadow: 0px 0px 5px 1px white;
      }
      
    }

  
    & ${Z} {
      text-align: start;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: ${t.spacings.small};
      height: 100%;
      transition: all 500ms ease-in-out;

      @media ${t.medias.mobile} {
        flex-direction: column;
        gap: ${t.spacings.xsmall};
      }


      & ${se} {
      color: ${t.colors.white};
      font-size: ${t.sizes.small};

      @media ${t.medias.smallmobile} {
        font-size: ${t.sizes.xsmall};
      }
      }

      > ${pe} {
      color: ${t.colors.white};
      margin-bottom: 0px;
      user-select: none;
      cursor: pointer;

      @media ${t.medias.tablet} {
        font-size: ${t.sizes.small};
      }
     }
    }
  `}
`,ci=_.div`
  ${({theme:t})=>h`
    background: rgba(0,0,0,0.5);
    width: auto;
    max-width: 300px;
    height: 100%;
    border-radius: 12px;
    padding: ${t.spacings.small};
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;
    


    &:hover {
     
    }

    > ${pe} {
      font-size:${t.sizes.medium};

      @media ${t.medias.mobile} {
        font-size:${t.sizes.small};
      }
    }
  `}
`,di=_.div`
  ${({theme:t})=>h`
    height: 100%;
    width:2px;
    background: ${t.colors.white};
    margin-left:5.3px;
    transition: all 800ms ease-in-out;

    @media ${t.medias.mobile} { {
      display: none;
    }


  `}
`;function pi({item:t}){const s=Ce();w();const i=r=>{s("/player-dashboard/events",{state:{selectedEvent:r}})};return e.jsx(yl,{onClick:()=>i(t),children:e.jsxs(c,{path:t.path||"",children:[t.startHour&&e.jsx(k,{text:t.startHour,as:"h4"}),e.jsx(di,{}),e.jsxs(ci,{children:[t.title&&e.jsx(k,{text:t.title,as:"h5"}),t.subtitle&&e.jsx(y,{text:t.subtitle})]})]})})}pi.propTypes={item:a.object};const fl=_.div`
  ${({theme:t})=>h`

    height: 100%;
    width: 100%;


    &:hover {

      ${ui} {
        background: rgba(0,0,0,0.8);
        box-shadow: 0px 0px 5px 1px white;
      }

      ${mi} {
        box-shadow: 0px 0px 5px 1px white;
      }
      
    }

  
    & ${Z} {
      text-align: start;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: ${t.spacings.small};
      height: 100%;
      width: 100%;
      transition: all 700ms ease-in-out;

      @media ${t.medias.mobile} {
        flex-direction: column;
      }


      & ${se} {
      color: ${t.colors.white};
      font-size: ${t.sizes.small};

      @media ${t.medias.smallmobile} {
        font-size: ${t.sizes.xsmall};
      }
      }

      > ${pe} {
      color: ${t.colors.white};
      margin-bottom: 0px;
      user-select: none;
      cursor: pointer;
     }


    }
  `}
`,ui=_.div`
  ${({theme:t})=>h`
    background: rgba(0,0,0,0.5);
    width: auto;
    max-width: 300px;
    min-width: 300px;
    height: 100%;
    border-radius: 12px;
    padding: ${t.spacings.small};
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;

    @media ${t.medias.mobile} {
      height: 40%;
    }

    @media ${t.medias.smallmobile} {
      min-width: 200px;
    }

    > ${pe} {
      font-size:${t.sizes.medium};

      @media ${t.medias.mobile} {
        font-size:${t.sizes.small};
      }
    }
  `}
`,mi=_.img`
  ${({theme:t})=>h`
    height: 100%;
    width: 125px;
    border-radius: 12px;
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;

    @media ${t.medias.tablet} {
      height: 100%;
      width: 125px
    }

    @media ${t.medias.mobile} {
      height: 50%;
      width: 110px
    }
  `}
`;function _i({title:t,text:s,thumbnail:i,path:r}){return e.jsx(fl,{children:e.jsxs(c,{path:r,children:[e.jsx(mi,{src:i,alt:t}),e.jsxs(ui,{children:[e.jsx(k,{text:t,as:"h5"}),e.jsx(y,{text:s})]})]})})}_i.propTypes={title:a.oneOfType([a.string,a.number]),text:a.string,path:a.string,thumbnail:a.string};const bl=_.div`
  ${({theme:t})=>h`

    height: 100%;
    width: 100%;



    &:hover {

      ${hi} {
        background: rgba(0,0,0,0.8);
        box-shadow: 0px 0px 5px 1px white;
      }

      ${gi} {
        box-shadow: 0px 0px 5px 1px white;
      }
      
    }

  
    & ${Z} {
      text-align: start;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: ${t.spacings.small};
      height: 100%;
      width: 100%;
      transition: all 700ms ease-in-out;

      @media ${t.medias.mobile} {
        flex-direction: column;
      
      }


      & ${se} {
      font-size: ${t.sizes.small};
      font-weight: 600;

      @media ${t.medias.mobile} {
        font-size: ${t.sizes.xsmall};
      }

      @media ${t.medias.smallmobile} {
        font-size: ${t.sizes.xxsmall};
      }
      }

      > ${pe} {
      color: ${t.colors.white};
      margin-bottom: 0px;
      user-select: none;
      cursor: pointer;
     }


    }
  `}
`,vl=_.div`
  ${({theme:t})=>h`
    background: rgba(0,0,0,0.5);
    border-radius: 7px;
    min-width: 30px;
    padding: ${t.spacings.small};
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`,hi=_.div`
  ${({theme:t})=>h`
    background: rgba(0,0,0,0.5);
    max-width: 280px;
    min-width: 280px;
    border-radius: 12px;
    padding: ${t.spacings.small};
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    @media ${t.medias.smallmobile} {
      min-width: 100%;
    }
  `}
`,gi=_.img`
  ${({theme:t})=>h`
    height: 100%;
    max-width: 125px;
    border-radius: 12px;
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;

    @media ${t.medias.tablet} {
      height: 100%;
      width: 110px
    }

    @media ${t.medias.mobile} {
      width: 130px

    }
  `}
`;function xi({name:t,position:s,imagesrc:i,path:r}){const{t:l}=w(),n=s.toString();return e.jsx(bl,{children:e.jsxs(c,{path:r,children:[e.jsx(vl,{children:e.jsx(y,{text:n,uppercase:!0})}),e.jsx(gi,{src:i,alt:l("profile_picture")}),e.jsx(hi,{children:e.jsx(y,{text:t,uppercase:!0})})]})})}xi.propTypes={name:a.oneOfType([a.string,a.number]),position:a.oneOfType([a.string,a.number]),path:a.string,imagesrc:a.string};const wl=_.div`
  ${({theme:t})=>h`
    height: 100%;
    width: 100%;
    text-align: start;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.small};
    height: 100%;
    width: 100%;
    transition: all 700ms ease-in-out;


      & ${se} {
      font-size: ${t.sizes.small};
      font-weight: 600;

      @media ${t.medias.mobile} {
        font-size: ${t.sizes.xsmall};
      }

      @media ${t.medias.smallmobile} {
        font-size: ${t.sizes.xxsmall};
      }
      }

      > ${pe} {
      color: ${t.colors.white};
      margin-bottom: 0px;
      user-select: none;
      cursor: pointer;
     }

     & ${M} {
      animation: ${ue} 500ms;

     }


    &:hover {

      ${yi} {
        background: rgba(0,0,0,0.8);
        box-shadow: 0px 0px 5px 1px white;
      }

      ${fi} {
        box-shadow: 0px 0px 5px 1px white;
      }

      ${M} {
        /* > svg {
          color: ${t.colors.primary};
          transform: none;
        } */
      }
  
    }

    

  

  `}
`,yi=_.div`
  ${({theme:t})=>h`
    background: rgba(0,0,0,0.5);
    width: 270px;
    border-radius: 12px;
    padding: ${t.spacings.xsmall};
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${t.spacings.small};

    @media ${t.medias.mobile} {
      width: 150px;
    }

    @media ${t.medias.smallmobile} {
      width: 100px;
    }
  `}
`,fi=_.img`
  ${({theme:t})=>h`
    background-image: linear-gradient(to bottom, ${t.colors.lightsecondary}, ${t.colors.lightprimary});
    width: 90px;
    padding: ${t.spacings.small};

    border-radius: 12px;
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;
    
    @media ${t.medias.tablet} {
      width: 80px;
    }

    @media ${t.medias.mobile} {
      width: 60px;
    }
  `}
`;function Tt({title:t,subtitle:s,imagesrc:i,newmessage:r}){const{t:l}=w();return e.jsxs(wl,{children:[e.jsx(fi,{src:i,alt:"Foto de perfil"}),e.jsx(z,{children:e.jsxs(yi,{children:[e.jsx(y,{text:t,uppercase:!0}),e.jsx(y,{text:s})]})}),r?e.jsx(q,{name:l("new_message"),active:r,activecolor:o.colors.primary,hovercolor:o.colors.primary,children:e.jsx(Ka,{})}):e.jsx(q,{name:l("message"),active:r,color:o.colors.lightgray,hovercolor:o.colors.white,children:e.jsx(Za,{})})]})}Tt.propTypes={title:a.string,subtitle:a.string,newmessage:a.bool,imagesrc:a.string};const jl=_.div`
  ${({theme:t})=>h`
    height: 100%;
    width: 100%;
    text-align: start;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.small};
    height: 100%;
    width: 100%;
    transition: all 700ms ease-in-out;


      & ${se} {
      font-size: ${t.sizes.small};
      font-weight: 600;

      @media ${t.medias.mobile} {
        font-size: ${t.sizes.xsmall};
      }

      @media ${t.medias.smallmobile} {
        font-size: ${t.sizes.xxsmall};
      }
      }

      > ${pe} {
      color: ${t.colors.white};
      margin-bottom: 0px;
      user-select: none;
      cursor: pointer;
     }

     & ${M} {

      animation: ${ue} 500ms;

     }


    &:hover {

      ${vi} {
        background: rgba(0,0,0,0.8);
        box-shadow: 0px 0px 5px 1px white;
      }

      ${$l} {
        box-shadow: 0px 0px 5px 1px white;
      }


      ${bi} {
        box-shadow: 0px 0px 5px 1px white;
      }

      ${M} {
        > svg {
          transform: scale(1.1);
        }
      }


  
    }

  `}
`,bi=_.div`
  ${({theme:t})=>h`
    height: 82%;
    width:2px;
    background: ${t.colors.white};
    margin-left:5.3px;
    transition: all 800ms ease-in-out;

    @media ${t.medias.mobile} { {
      display: none;
    }


  `}
`,vi=_.div`
  ${({theme:t})=>h`
    background: rgba(0,0,0,0.5);
    width: 270px;
    border-radius: 12px;
    padding: ${t.spacings.xsmall};
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${t.spacings.small};

    @media ${t.medias.mobile} {
      width: 150px;
    }

    @media ${t.medias.smallmobile} {
      width: 100px;
    }
  `}
`,$l=_.img`
  ${({theme:t})=>h`
    background-image: linear-gradient(to bottom, ${t.colors.lightsecondary}, ${t.colors.lightprimary});
    width: 90px;
    padding: ${t.spacings.small};

    border-radius: 12px;
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;
    
    @media ${t.medias.tablet} {
      width: 80px;
    }

    @media ${t.medias.mobile} {
      width: 60px;
    }
  `}
`,es=_.div`
  ${({theme:t})=>h`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 5px 30px;
  justify-content: start;
  grid-template-areas:
    "element element"
    "element element"
    "element element";


  @media ${t.medias.smallpc} {
    grid-template-areas:
    "element"
    "element"
    "element";
  }
  `}
`,kl=_.div`
  ${({theme:t})=>h`
     animation: ${I} 500ms;

     border-radius: 15px;
     overflow-y: auto;
     border: ${t.borders.xwhite};
     background: rgba(0, 0, 0, 0.8);

     display: flex;
     flex-direction: column;
     gap: ${t.spacings.xlarge};

     position: absolute;
     z-index: 5000; 

     width: 70%;
     padding: ${t.spacings.xxlarge};


     transition: all 700ms ease-in-out;     

     @media ${t.medias.smallpc} {
      width: 100%;
      max-height: 700px;
      padding: ${t.spacings.medium};
     }

     @media ${t.medias.tablet} {
      max-height: 70%;
     }

     @media ${t.medias.smallmobile} {
      max-height: 50%;
     }

     &:hover {
      background: rgba(0, 0, 0, 0.9);
      box-shadow: 0px 0px 10px 2px white;
      backdrop-filter: blur(2px);
     }

     ${Se} {
      width: 100%;
      background: red;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

      @media ${t.medias.smallpc} {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }

      @media ${t.medias.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }

      @media ${t.medias.mobile} {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }


      ${de} {
        min-height: 110px;

        @media ${t.medias.mobile} {
          min-height: 70px;        }
       }
     }


     ${es} {
      width: 100%;
      height: auto;
      justify-content: space-between;
      grid-gap: 5px 100px;
     }

     ${pe} {
       margin-bottom: 0px;
     }

     ${de} {
      padding: ${t.spacings.medium};
     }

     ${W} {
      justify-content: space-between;
      @media ${t.medias.smallpc} {
        flex-direction: row;
      }

      > h1 {
        margin: auto 0;
      }
     }
  `}
`;function ts({children:t}){return e.jsx(es,{children:t})}ts.propTypes={children:a.node.isRequired};const Cl=_.div`
  ${({theme:t,uppercase:s})=>h`
    color: ${t.colors.white};
    text-transform: ${s};
    font-family: ${t.fonts.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${t.spacings.xsmall};
  `}
`,os=_.h3`
  ${({theme:t})=>h`
    font-weight: 800;
    font-size: ${t.sizes.medium};

    &::after {
       content: ':'
    }

    @media ${t.medias.tablet} {
     font-size: ${t.sizes.small};
    }

    @media ${t.medias.mobile} {
     font-size: ${t.sizes.xsmall};
    }

  `}
`,Sl=_.p`
  ${({theme:t})=>h`
  font-size: ${t.sizes.medium};

  @media ${t.medias.tablet} {
     font-size: ${t.sizes.small};
  }
  
  @media ${t.medias.mobile} {
     font-size: ${t.sizes.xsmall};
  }
  
  `}
`;function Q({infotitle:t,info:s,uppercase:i=!1}){return e.jsxs(Cl,{uppercase:i?"uppercase":"none",children:[e.jsx(os,{children:t}),e.jsx(Sl,{children:s})]})}Q.propTypes={infotitle:a.oneOfType([a.string,a.number]).isRequired,info:a.oneOfType([a.string,a.number]).isRequired,uppercase:a.bool};function xt({placeholder:t="",name:s="text-area",onChange:i,value:r}){return e.jsx(ni,{id:s,name:s,"data-name":s,placeholder:t,onChange:i,value:r,maxLength:"5000"})}xt.propTypes={placeholder:a.string,name:a.string,value:a.string,onChange:a.func};const wi=_.div`
  ${({theme:t,isfavorite:s,color:i})=>h`
  ${M} {
    width: 30px;
    animation: ${s?$o:ko} 300ms;

    @media ${t.medias.mobile} {
      width: 25px;
    }

    > svg {
     color: ${s?t.colors.red:i};
     padding: 2px;
    }
  }
  `}
`;function Ht({isfavorite:t,id:s,color:i=o.colors.white}){const{t:r}=w(),[l,n]=p.useState(t),g=x=>{x.stopPropagation(),n(!l)};return e.jsx(wi,{isfavorite:l?"favorite":void 0,color:i,children:e.jsx(q,{name:r(l?"remove_from_favorites":"make_favorite"),hovercolor:l?o.colors.red:o.colors.white,onclick:g,children:e.jsx(en,{})})})}Ht.propTypes={id:a.oneOfType([a.string,a.number]),isfavorite:a.bool,color:a.string};function ji({proposal:t,onclick:s,isapplied:i}){const[r,l]=p.useState(""),{t:n}=w(),g=u=>{u.preventDefault()},x=u=>{l(r===u?"":u)};return e.jsx(kl,{children:t&&e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[e.jsx(G,{text:n("opportunity"),uppercase:!0}),e.jsx(q,{onclick:s,name:n("close_opportunity"),hovercolor:o.colors.red,children:e.jsx(te,{})})]}),e.jsx(k,{text:n("details"),uppercase:!0}),e.jsxs(ts,{children:[t.details.from&&e.jsx(Q,{infotitle:n("opportunity_from"),info:t.details.from,uppercase:!0}),t.details.date&&e.jsx(Q,{infotitle:n("date"),info:t.details.date,uppercase:!0}),t.details.disponibility?e.jsx(Q,{infotitle:n("avaliability"),info:t.details.disponibility,uppercase:!0}):e.jsx(Q,{infotitle:n("avaliability"),info:"Imediato",uppercase:!0}),t.details.org&&e.jsx(Q,{infotitle:n("league"),info:t.details.org,uppercase:!0}),t.details.country&&e.jsx(Q,{infotitle:n("country"),info:t.details.country,uppercase:!0}),t.details.category&&e.jsx(Q,{infotitle:n("category"),info:t.details.category,uppercase:!0}),t.details.opportunity&&e.jsx(Q,{infotitle:n("position"),info:t.details.opportunity,uppercase:!0}),t.details.minHeight&&e.jsx(Q,{infotitle:n("minimum_height"),info:`${t.details.minHeight} M`,uppercase:!0}),t.details.age.minAge&&e.jsx(Q,{infotitle:n("minimum_age"),info:`${t.details.age.minAge} ${n("years")}`,uppercase:!0}),t.details.age.maxAge&&e.jsx(Q,{infotitle:n("maximum_age"),info:`${t.details.age.maxAge} ${n("years")}`,uppercase:!0}),t.details.payment.minPayment&&e.jsx(Q,{infotitle:n("payment"),info:`${t.details.payment.minPayment} | ${t.details.payment.maxPayment} ${t.details.payment.currency}`,uppercase:!0})]}),t.description&&e.jsxs(ae,{children:[e.jsx(k,{text:n("description"),uppercase:!0}),e.jsx(y,{text:t.description})]}),t.requirements&&e.jsxs(ae,{children:[e.jsx(k,{text:n("requirements"),uppercase:!0}),e.jsx(y,{text:t.requirements})]}),e.jsxs(ae,{children:[e.jsx(k,{text:n("message"),uppercase:!0}),e.jsxs($e,{children:[e.jsx($,{text:n("opportunity_player_message_1"),bgcolor:r===n("opportunity_player_message_1")?o.colors.primary:o.colors.lightprimary,bghover:o.colors.primary,textcolor:o.colors.black,texthover:o.colors.black,border:o.colors.lightprimary,borderhover:o.colors.primary,active:r===n("opportunity_player_message_1"),onclick:()=>x(n("opportunity_player_message_1"))}),e.jsx($,{text:n("opportunity_player_message_2"),bgcolor:r===n("opportunity_player_message_2")?o.colors.primary:o.colors.lightprimary,bghover:o.colors.primary,textcolor:o.colors.black,texthover:o.colors.black,border:o.colors.lightprimary,borderhover:o.colors.primary,active:r===n("opportunity_player_message_2"),onclick:()=>x(n("opportunity_player_message_2"))})]}),e.jsx(xt,{info:"message",value:r}),i?e.jsx($,{text:n("opportunity_message_sent"),bgcolor:o.colors.darkgray,bghover:o.colors.darkgray,textcolor:o.colors.white,texthover:o.colors.white,border:o.colors.darkgray,borderhover:o.colors.lightgray}):e.jsx(e.Fragment,{children:r?e.jsx($,{text:n("send_message"),bgcolor:o.colors.quaternary,bghover:o.colors.secondary,textcolor:o.colors.white,texthover:o.colors.white,border:o.colors.tertiary,borderhover:o.colors.white,onclick:g}):e.jsx($,{text:n("send_message"),bgcolor:o.colors.darkgray,bghover:o.colors.darkgray,textcolor:o.colors.white,texthover:o.colors.white,border:o.colors.darkgray,borderhover:o.colors.lightgray})})]})]})})}ji.propTypes={proposal:a.func,onclick:a.func,isapplied:a.bool};function $i({item:t}){const s=Ce(),i=r=>{s("/player-dashboard/opportunities",{state:{selectedProposal:r}})};return e.jsxs(jl,{onClick:()=>i(t),children:[e.jsx(q,{hovercolor:"none",children:e.jsx(Ds,{})}),e.jsx(bi,{}),e.jsx(z,{children:e.jsxs(vi,{children:[t.details.from&&e.jsx(y,{text:t.details.from}),t.details.opportunity&&e.jsx(y,{text:t.details.opportunity,uppercase:!0}),t.details.category&&e.jsx(y,{text:t.details.category})]})})]})}$i.propTypes={item:a.object};function F({items:t,title:s,type:i}){const{t:r}=w(),l=i.toLowerCase();return e.jsxs(gl,{children:[e.jsx(k,{text:s,uppercase:!0,as:"h3"}),e.jsx(xl,{children:e.jsxs(ze,{spaceBetween:0,direction:"vertical",slidesPerView:i==="news"?2:3,mousewheel:!0,loop:!0,pagination:{clickable:!0},breakpoints:{769:{slidesPerView:3},481:{slidesPerView:2},0:{slidesPerView:i==="news"||i==="referralrank"?1:2}},children:[l==="events"&&e.jsx(e.Fragment,{children:t.map(n=>e.jsx(he,{children:e.jsx(pi,{item:n})},n.id))}),l==="news"&&e.jsx(e.Fragment,{children:t.map(n=>e.jsx(he,{children:e.jsx(_i,{title:r(n.title),thumbnail:n.thumbnail,text:r(n.text),path:n.path})},n.id))}),l==="referralrank"&&e.jsx(e.Fragment,{children:t.map(n=>e.jsx(he,{children:e.jsx(xi,{name:n.name,position:n.position,imagesrc:n.imagesrc})},n.position))}),l==="proposals"&&e.jsx(e.Fragment,{children:t.map(n=>e.jsx(he,{children:e.jsx($i,{item:n})},n.id))})]})})]})}F.propTypes={title:a.string,type:a.string.isRequired,items:a.arrayOf(a.object).isRequired};function ye({items:t,size:s="500px",title:i,type:r="image",lazy:l}){return e.jsxs(ul,{children:[i&&e.jsx(k,{text:i,uppercase:!0,as:"h4"}),e.jsx(ri,{size:s,children:e.jsxs(ze,{spaceBetween:0,slidesPerView:1,direction:"vertical",mousewheel:!0,loop:!0,lazy:l?"true":void 0,pagination:!0,children:[r==="image"&&e.jsx(e.Fragment,{children:t.map(n=>e.jsx(he,{children:e.jsx(c,{path:n.path,children:e.jsx("img",{src:n.src,alt:n.title})})},n.id))}),r==="video"&&e.jsx(e.Fragment,{children:t.map(n=>e.jsx(he,{lazy:l,children:e.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/5-sXTlF6Sd4?si=-FVFNX-zSAhGhulp",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})},n.id))})]})})]})}ye.propTypes={size:a.string,title:a.string,type:a.string,lazy:a.bool,items:a.arrayOf(a.object).isRequired};const jt=_.div`
  ${({theme:t,size:s})=>h`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${pe} {

      @media ${t.medias.tablet} {
        font-size: ${t.sizes.medium};
      }


      @media ${t.medias.mobile} {
        font-size: ${t.sizes.small};
      }

      @media ${t.medias.smallmobile} {
        font-size: ${t.sizes.xsmall};
      }
    }

    .swiper-slide {
      aspect-ratio: 16 / 9; // always use 16/9 video
      container-type: size;
      max-width: 450px;
      /* background: rgba(0,0,0,0.5); */

    @media ${t.medias.smallpc} {
      max-width: 700px;
    }
    
    @media ${t.medias.tablet} {
      max-width: 400px;
    }


    @media ${t.medias.mobile} {
      max-width: 320px;
    }

    @media ${t.medias.smallmobile} {
      max-width: 240px;
    }
    
    

      &:after {
        content: "";
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 14cqh); // show controls
        clip-path: polygon(0% 0%, 0% 100%, 44% 100%, 44% 49%, 56% 49%, 56% 67%, 0% 67%, 0% 100%, 100% 100%, 100% 0%); // show play button
      }
    }
  

    ${Z} {
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }

    & video {
      object-fit: fill;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      box-sizing: border-box;
    }

    .swiper-wrapper {
      height: ${s};
      width: 100%;

        @media ${t.medias.smallpc} {
          height: 320px;
        }

        @media ${t.medias.tablet} {
          max-height: 280px;
        }

        @media ${t.medias.mobile} {
          max-height: 220px;
        }

        @media ${t.medias.smallmobile} {
          max-height: 180px;
        }
    }

    & .swiper-slide {
    }
  `}
`;function K({items:t,size:s="500px",title:i,lazy:r}){return w(),e.jsxs(jt,{size:s,children:[i&&e.jsx(k,{text:i,uppercase:!0,as:"h4"}),e.jsx(ze,{spaceBetween:0,slidesPerView:1,direction:"vertical",mousewheel:!0,loop:!0,lazy:r?"true":void 0,pagination:!0})]})}K.propTypes={size:a.string,title:a.string,type:a.string,items:a.arrayOf(a.object).isRequired};const Tl=_.div`
  ${({theme:t})=>h`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  `}
`,Al=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;

    ${Fs} {
      max-width: 130px;
      display: flex;
      align-items: center;
      justify-content: center;
    }


  
    .swiper-wrapper{
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      padding: ${t.spacings.xsmall};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;function ki({items:t,title:s,type:i,autoplay:r}){const l=i.toLowerCase();return e.jsxs(Tl,{children:[e.jsx(k,{text:s,uppercase:!0,as:"h3"}),e.jsx(Al,{children:e.jsx(ze,{spaceBetween:30,slidesPerView:8,autoplay:r?{delay:2e3,disableOnInteraction:!0}:!1,loop:!0,navigation:!0,paginatio:{clickable:!0},breakpoints:{1300:{slidesPerView:8},769:{slidesPerView:5},380:{slidesPerView:3},0:{slidesPerView:2}},children:l==="partners"&&e.jsx(e.Fragment,{children:t.map(n=>e.jsx(he,{children:e.jsx(lt,{logo:n.imagesrc,name:n.name})},n.id))})})})]})}ki.propTypes={title:a.string,type:a.string.isRequired,autoplay:a.bool,items:a.arrayOf(a.object).isRequired};const Pl=_.div`
  ${({theme:t})=>h`

   width: 100%;
   height: 100%;

   & ${ao} {

      & ${M}{
        & svg {
          width: 40%;
        }
      }
      
    }


    ${oe} {
      min-width: 430px;

      @media ${t.medias.mobile} {
        min-width: 90%;
      }
    }
  `}  
`,El=_.div`
  ${({theme:t})=>h`

    .swiper-wrapper {
     height: 400px;
     aspect-ratio: 16 / 9; 
     container-type: size;

      @media (max-width: 1050px) {
        height: 350px;
      }

      @media ${t.medias.smallpc} { 
        height: 300px;
      }

      @media ${t.medias.tablet} { 
        height: 440px;
      }

      @media (max-width: 650px) { 
        height: 400px;
      }

      @media (max-width: 570px) { 
        height: 350px;
      }
  
      @media ${t.medias.mobile} { 
        height: 300px;
      }

      @media ${t.medias.smallmobile} { 
        height: 250px;
      }
    }


   .swiper-slide {
     height: 100%;
     width: 100%;
     background: rgba(0,0,0,0.5);
     border: ${t.borders.xwhite};
     border-radius: 12px;
   }
 `}
`,zl=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${t.spacings.xsmall};
    padding: ${t.spacings.medium};

    ${M} {
    > svg {
        background: ${t.colors.white};
    }
  }


    
    & img, video{
      /* object-fit: contain;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      transition: all 500ms ease-in-out;
      box-sizing: border-box;
      border: ${t.borders.xtransparent}; */
    }

    ${W} {
      justify-content: space-between;
      align-items: center;
      /* gap: ${t.spacings.large} */

      @media ${t.medias.smallpc} {
        flex-direction: row;
      }
    }
  `}
`,vs=_.div`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: ${t.spacings.xsmall};
    height: 30px;
    z-index: 100;

    ${M} {
    width: auto;
    height: 100%;

    > svg {
     border-radius: 50%;
     /* background: rgba(0, 0, 0, 0.5); */

      &:hover {
        /* background: rgba(0, 0, 0, 0.8); */
        transform: scale(1.1);
      }

      @media ${t.medias.mobile} {
       width: 25px;
       height: 25px;
      }
    }
  }
 `}
`,Dl=_.div`
  ${({theme:t})=>h`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${t.spacings.xsmall};
  

  ${M} {
    
    transition: all 500ms ease-in-out;
    animation-fill-mode: forwards;

    &:hover {
      > svg {
        transform: scale(1);
        box-shadow: 0px 0px 10px 2px ${t.colors.gold};
     }
  }



  & svg {
    padding: 1px;
  }

  `}
`;function Eo({mediaid:t,ratevalue:s,color:i=o.colors.white}){const[r,l]=p.useState(),n=g=>{l(r===g?"":g)};return e.jsxs(Dl,{color:i,children:[e.jsx(q,{name:"+1",onclick:()=>n(1),active:r===1,color:i,activecolor:o.colors.gold,hovercolor:o.colors.gold,children:e.jsx(tn,{})}),e.jsx(q,{name:"+5",onclick:()=>n(5),active:r===5,color:i,activecolor:o.colors.gold,hovercolor:o.colors.gold,children:e.jsx(on,{})}),e.jsx(q,{name:"+10",onclick:()=>n(10),active:r===10,color:i,activecolor:o.colors.gold,hovercolor:o.colors.gold,children:e.jsx(sn,{})})]})}Eo.propTypes={mediaid:a.oneOfType([a.string,a.number]),ratevalue:a.number,color:a.string};const ql="show_data",Ci="add_proposal",Si="edit_proposal",Ti="add_event",Ai="report_media",Pi="filter_players",Ei="search_players",zi="filter_events",Di="search_events",qi="filter_player_proposals",Ii="search_player_proposals",Il=(t,s)=>{t({type:Ci,payload:s})},Rl=(t,s)=>{t({type:Si,payload:s})},Ol=(t,s)=>{t({type:Ti,payload:s})},Nl=(t,s)=>{t({type:Ai,payload:s})},Ml=(t,s)=>{t({type:Pi,payload:s})},Ll=(t,s)=>{t({type:zi,payload:s})},Fl=(t,s)=>{t({type:Di,payload:s})},Vl=(t,s)=>{t({type:Ei,payload:s})},Ul=(t,s)=>{t({type:qi,payload:s})},Hl=(t,s)=>{t({type:Ii,payload:s})};function zo({onclick:t,id:s}){const[i,r]=p.useState(!1),l=p.useContext(X),{s2tState:n,s2tDispatch:g}=l,[x,u]=p.useState({mediaId:"",reportReason:"",reportDetails:""});p.useEffect(()=>{u(f=>({...f,mediaId:s}))},[s]);const m=()=>{r(!1),t()},d=async f=>{f.preventDefault(),x.reportReason&&(Nl(g,x),r(!i),u({mediaId:"",reportReason:"",reportDetails:""}))};return e.jsx(e.Fragment,{children:s&&e.jsx(ee,{children:e.jsxs(ai,{children:[!i&&e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[e.jsx(k,{text:Te("report"),uppercase:!0,size:o.sizes.xxlarge}),e.jsx(q,{onclick:t,name:Te("close"),hovercolor:o.colors.red,children:e.jsx(te,{})})]}),e.jsxs(me,{onSubmit:d,children:[e.jsx(H,{title:Te("report_reason_question"),id:"reportReason",placeholder:Te("select_reason"),options:n.formOptions.reportMedia,onDropdownChange:f=>u(A=>({...A,reportReason:f})),required:!0}),e.jsx(z,{children:e.jsx(xt,{placeholder:Te("insert_report_details"),info:"reportDetails",name:"reportDetails",onChange:f=>u(A=>({...A,reportDetails:f.target.value}))})}),x.reportReason&&e.jsx(xe,{name:"report_submit",id:"report_submit",value:Te("confirm")})]})]}),i&&e.jsxs(e.Fragment,{children:[e.jsx(y,{text:Te("received_your_report"),uppercase:!0}),e.jsx(y,{text:Te("thank_you_report")}),e.jsx($,{text:Te("close"),bgcolor:o.colors.secondary,bghover:o.colors.quaternary,textcolor:o.colors.white,texthover:o.colors.white,border:o.colors.white,borderhover:o.colors.white,onclick:m})]})]})})})}zo.propTypes={onclick:a.func,id:a.oneOfType([a.string,a.number])};const Bl=_.div`
  ${({theme:t,isreporting:s,color:i})=>h`
  ${M} {
    width: 30px;
    animation: ${s?$o:ko} 300ms;

    @media ${t.medias.mobile} {
      width: 25px;
    }

    > svg {
     color: ${s?t.colors.red:i};
     padding: 2px;
     background: ${s&&"black"};
    }
  }
  `}
`;function Do({onclick:t,isreporting:s,color:i=o.colors.white}){const{t:r}=w();return e.jsx(Bl,{isreporting:s?"isreporting":void 0,color:i,children:e.jsx(q,{active:s,activecolor:o.colors.white,name:r("report"),hovercolor:o.colors.white,onclick:t,children:e.jsx(rn,{})})})}Do.propTypes={isreporting:a.bool,onclick:a.func,color:a.string};function Le({items:t,title:s}){w();const[i,r]=p.useState("");p.useState("");const l=n=>{r(i?"":n.id)};return e.jsxs(Pl,{children:[e.jsxs(El,{children:[e.jsx(G,{text:s,uppercase:!0}),e.jsx(ze,{slidesPerView:2,spaceBetween:15,navigation:!0,zoom:!0,lazy:"true",breakpoints:{768:{slidesPerView:2},0:{slidesPerView:1}},children:t&&t.map(n=>e.jsx(he,{children:e.jsxs(zl,{children:[e.jsx(qs,{url:n.url,width:"100%",height:"100%",controls:!0,playsinline:!0}),e.jsxs(B,{children:[e.jsxs(vs,{children:[e.jsx(Ht,{isfavorite:n.isfavorite,id:n.id,color:o.colors.black}),e.jsx(Do,{isreporting:i===n.id,onclick:()=>l(n),color:o.colors.black})]}),e.jsx(vs,{children:e.jsx(Eo,{ratevalue:n.rateValue,mediaid:n.id,color:o.colors.black})})]})]})},n.id))})]}),e.jsx(zo,{id:i,onclick:()=>r("")})]})}Le.propTypes={items:a.arrayOf(a.object).isRequired,title:a.string};function Qt({items:t,title:s}){w();const[i,r]=p.useState(""),l=n=>{r(i?"":n.id)};return e.jsxs(li,{children:[e.jsx(k,{text:s,uppercase:!0,as:"h4"}),e.jsx(ml,{children:e.jsx(ze,{slidesPerView:1,spaceBetween:0,navigation:!0,zoom:!0,lazy:"true",children:t&&t.map(n=>e.jsx(he,{children:e.jsxs(_l,{children:[e.jsx(qs,{url:n.url,width:"100%",height:"100%",controls:!0,playsinline:!0,styles:{background:"red"}}),e.jsxs(B,{children:[e.jsxs(bs,{children:[e.jsx(Do,{isreporting:i===n.id,onclick:()=>l(n),color:o.colors.black}),e.jsx(Ht,{isfavorite:n.isfavorite,id:n.id,color:o.colors.black})]}),e.jsx(bs,{children:e.jsx(Eo,{ratevalue:n.rateValue,mediaid:n.id,color:o.colors.black})})]})]})},n.url))})}),e.jsx(zo,{id:i,onclick:()=>r("")})]})}Qt.propTypes={items:a.arrayOf(a.object).isRequired,title:a.string};function Yl(){var A,S,D,E,V,C,R;const{t,i18n:s}=w(),i=p.useContext(X),{s2tState:r}=i,{currentUser:l}=Ut(),[n,g]=p.useState(!1),[x,u]=p.useState("football"),m=ne=>{s.changeLanguage(ne)},[d,f]=p.useState(!0);return p.useEffect(()=>{const ne=()=>{f(window.innerWidth>=1080)};return window.addEventListener("resize",ne),ne(),()=>{window.removeEventListener("resize",ne)}},[]),e.jsxs(pl,{children:[e.jsxs(Zo,{children:[e.jsxs(be,{children:[e.jsx(lt,{size:"150px",logo:"/assets/images/pngs/logo.png"}),d&&e.jsx(H,{id:"sportsOptions",placeholder:t("select_sport"),options:r.formOptions.sportsOptions,onDropdownChange:ne=>u(ne),selectedvalue:x})]}),d&&e.jsxs(be,{children:[e.jsx(H,{id:"languageOptions",placeholder:t("select_language"),options:r.formOptions.languageOptions,onDropdownChange:m,selectedvalue:s.language}),l?e.jsxs(e.Fragment,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/player-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}):e.jsxs(e.Fragment,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/login",text:t("login"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/register",text:t("register"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]})]}),n?e.jsx(q,{name:t("menu"),onclick:()=>g(!n),children:e.jsx(te,{})}):e.jsx(q,{name:t("close_menu"),onclick:()=>g(!n),children:e.jsx(_e,{})})]}),n&&e.jsxs(Jo,{children:[e.jsx(H,{id:"languageOptions",placeholder:t("select_language"),options:r.formOptions.languageOptions,onDropdownChange:m,selectedvalue:s.language}),e.jsx(H,{id:"sportsOptions",placeholder:t("select_sport"),options:r.formOptions.sportsOptions,onDropdownChange:ne=>u(ne),selectedvalue:x}),l?e.jsxs(e.Fragment,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/player-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}):e.jsxs(e.Fragment,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/login",text:t("login"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/register",text:t("register"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]})]}),e.jsxs(U,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",backgroundfixed:!0,children:[e.jsx(F,{title:t("events"),type:"events",items:r.events||[]}),e.jsx(ye,{title:t("social"),size:"400px",items:r.news||[]}),e.jsx(F,{title:t("opportunities"),type:"proposals",items:r.proposals.male.professional.agents||[]}),e.jsx(F,{title:t("news"),type:"news",items:r.news||[]})]}),e.jsxs($e,{children:[e.jsx($,{text:t("professional"),bgcolor:o.colors.black,textcolor:o.colors.black,border:o.colors.black,borderhover:o.colors.black,gradient:!0}),e.jsx($,{text:t("semi_professional"),bgcolor:o.colors.black,textcolor:o.colors.black,border:o.colors.black,borderhover:o.colors.black,gradient:!0}),e.jsx($,{text:t("university"),bgcolor:o.colors.black,textcolor:o.colors.black,border:o.colors.black,borderhover:o.colors.black,gradient:!0}),e.jsx($,{text:t("amateur"),bgcolor:o.colors.black,textcolor:o.colors.black,border:o.colors.black,borderhover:o.colors.black,gradient:!0}),e.jsx($,{text:t("recreational"),bgcolor:o.colors.black,textcolor:o.colors.black,border:o.colors.black,borderhover:o.colors.black,gradient:!0,active:!0})]}),e.jsx(ce,{items:((A=r.photos)==null?void 0:A.usersType)||[]}),e.jsxs(U,{title:t("trending_videos"),backgroundimagesrc:"/assets/images/backgrounds/slider-bg-2.png",backgroundfixed:!0,children:[e.jsx(Qt,{items:((S=r.videos)==null?void 0:S.trending)||[],title:t("professional")}),e.jsx(Qt,{items:((D=r.videos)==null?void 0:D.trending)||[],title:t("semi_professional")}),e.jsx(Qt,{items:((E=r.videos)==null?void 0:E.trending)||[],title:t("university")}),e.jsx(Qt,{items:((V=r.videos)==null?void 0:V.trending)||[],title:t("amateur")}),e.jsx(Qt,{items:((C=r.videos)==null?void 0:C.trending)||[],title:t("recreational")})]}),e.jsx(ce,{items:((R=r.photos)==null?void 0:R.benefits)||[],title:t("benefits")}),e.jsx(ki,{type:"partners",title:t("partners_supporters"),autoplay:!0,items:r.partners||[]})]})}const Wl=_.article`
  ${({theme:t})=>h`
   width: 100%;
   height: 100%;
  `}
`,Gl=_.div`
  ${({theme:t})=>h`
   width: 100%;
   height: 100%;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   ${pe} {
    width: 100%;
   }
   
   ${Ks} {
    box-shadow: none;

   }



   ${de} {
    margin-top: ${t.spacings.small};
    padding: ${t.spacings.small};
   }
  `}
`,Xl=_.div`
  ${({theme:t})=>h`
   width: 100%;
   height: 100%;
   animation: ${I} 500ms ease-out;
   max-height: 500px;
   overflow-y: auto;
  `}
`;function Be({items:t,title:s}){const[i,r]=p.useState(!1),{t:l}=w(),n=p.useMemo(()=>t&&t.length>0?i?t:t.slice(0,12):[],[t,i]),g=()=>r(!i);return e.jsxs(Gl,{children:[e.jsx(k,{text:s,uppercase:!0,as:"h3",size:o.sizes.xxlarge}),e.jsx(Xl,{children:e.jsx(Se,{children:n&&n.length>0?e.jsx(e.Fragment,{children:n.map(x=>e.jsx(Sn,{children:e.jsx(Qo,{src:x.profileImageSrc,title:x.name,path:x.path})},x.id))}):e.jsx(e.Fragment,{children:e.jsx(y,{text:l("data_not_found")})})})}),(t==null?void 0:t.length)>12&&e.jsx($,{onclick:g,text:l(i?"show_less":"show_more"),bgcolor:o.colors.black,bghover:o.colors.white,textcolor:o.colors.white,texthover:o.colors.black,border:o.colors.white,borderhover:o.colors.white})]})}Be.propTypes={title:a.string,items:a.arrayOf(a.object).isRequired};function He({friends:t}){const{t:s}=w();return e.jsx(Wl,{children:e.jsx(Be,{title:s("friends"),items:t})})}He.propTypes={friends:a.object};const Ql=(t,s)=>{switch(s.type){case ql:return{...t};case Ci:return{...t,proposals:{...t.proposals,male:{...t.proposals.male,professional:{...t.proposals.male.professional,clubs:[...t.proposals.male.professional.clubs,s.payload]}}}};case Si:const i=t.proposals.male.professional.clubs.map(r=>r.opportunityId===s.payload.opportunityId?s.payload:r);return{...t,proposals:{...t.proposals,male:{...t.proposals.male,professional:{...t.proposals.male.professional,clubs:i}}}};case Ti:return{...t,events:[...t.events,s.payload]};case Ai:return{...t};case Pi:return{...t};case Ei:return{...t};case Ii:return{...t};case qi:return{...t};case zi:return{...t};case Di:return{...t};default:return{...t}}},O={partners:[{id:1,name:"ansa",imagesrc:"/assets/images/partners/ansa.png"},{id:2,name:"ansep",imagesrc:"/assets/images/partners/ansep.png"},{id:3,name:"lions-bank",imagesrc:"/assets/images/partners/lionsbank.png"},{id:4,name:"texas-lions",imagesrc:"/assets/images/partners/texas_lions.png"},{id:5,name:"brazusa",imagesrc:"/assets/images/partners/brazusa.png"},{id:6,name:"florida-lions",imagesrc:"/assets/images/partners/florida_lions.png"},{id:7,name:"ce-jenlai",imagesrc:"/assets/images/partners/ce_jenlai.png"},{id:8,name:"ansa",imagesrc:"/assets/images/partners/ansa.png"},{id:9,name:"ansep",imagesrc:"/assets/images/partners/ansep.png"},{id:10,name:"lions-bank",imagesrc:"/assets/images/partners/lionsbank.png"},{id:11,name:"texas-lions",imagesrc:"/assets/images/partners/texas_lions.png"},{id:12,name:"brazusa",imagesrc:"/assets/images/partners/brazusa.png"},{id:13,name:"florida-lions",imagesrc:"/assets/images/partners/florida_lions.png"},{id:14,name:"ce-jenlai",imagesrc:"/assets/images/partners/ce_jenlai.png"}],products:{shirts:[],footballBoots:[]},rankings:{referral:[]},news:[],events:[],photos:{events:[],usersType:[{id:1,src:"/assets/images/users/athletes.png",title:"players",path:"/register"},{id:2,src:"/assets/images/users/scouts.png",title:"scout",path:"/register"},{id:3,src:"/assets/images/users/business.png",title:"business_man",path:"/register"},{id:4,src:"/assets/images/users/clubs.png",title:"clubs",path:"/register"},{id:5,src:"/assets/images/users/facultys.png",title:"universities",path:"/register"},{id:6,src:"/assets/images/users/leagues.png",title:"leagues",path:"/register"},{id:7,src:"/assets/images/users/schools.jpg",title:"schools",path:"/register"},{id:8,src:"/assets/images/users/staff.jpg",title:"staff",path:"/register"},{id:9,src:"/assets/images/users/exchangeAgencies.jpg",title:"exchange_agencies",path:"/register"},{id:10,src:"/assets/images/users/fans.jpg",title:"fans",path:"/register"}],benefits:[{id:"1",src:"/assets/images/benefits/podcast.png",title:"podcast",path:"https://showcase2transfer.eitvcloud.com/pages/5"},{id:"2",src:"/assets/images/benefits/tv.png",title:"sports_channels",path:"/benefits/sport-channels"},{id:"3",src:"/assets/images/benefits/investments.png",title:"investments",path:"/benefits/investments"},{id:"4",src:"/assets/images/benefits/benefits.png",title:"benefits_club",path:"/benefits/club",islocked:!0},{id:"5",src:"/assets/images/benefits/exchange.png",title:"interchange",path:"/benefits/interchange"},{id:"6",src:"/assets/images/benefits/crypto_wallet.png",title:"crypto_wallet",path:"/benefits/crypto-wallet"},{id:"7",src:"/assets/images/benefits/events.png",title:"events",path:"/benefits/events"},{id:"8",src:"/assets/images/benefits/english.jpg",title:"english",path:"/benefits/english"},{id:"9",src:"/assets/images/benefits/crowdfunding.jpg",title:"crowdfunding",path:"/benefits/crowdfunding"},{id:"10",src:"/assets/images/benefits/lions_platform.jpg",title:"lions_platform",path:"/benefits/lions-platform"},{id:"11",src:"/assets/images/benefits/studies.jpg",title:"education",path:"/benefits/studies"},{id:"12",src:"/assets/images/benefits/american_studies.jpg",title:"american_education",path:"/benefits/american-studies"},{id:"13",src:"/assets/images/benefits/telemedicine.jpg",title:"telemedicine_usa",path:"/benefits/telemedicine-usa"},{id:"14",src:"/assets/images/benefits/solar.jpg",title:"solar",path:"/benefits/solar"}]},videos:{trending:[]},users:{scouts:[],clubs:[],players:[]},proposals:{female:{},male:{semiProfessional:{agents:[],clubs:[]},professional:{clubs:[{opportunityId:0,details:{from:"Clube 0",date:"01-06-2024",disponibility:"2024-07-10",category:"Profissional",opportunity:"Zagueiro",country:"Alemanha",org:"Bundesliga",orgLogo:"/assets/images/pngs/brasileirao.png",orgPath:"/bundesliga",age:{minAge:18,maxAge:28},payment:{minPayment:1e4,maxPayment:18e3,currency:"Real"},minHeight:1.7},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel",requirements:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel"},{opportunityId:0,details:{from:"Clube 0",date:"01-06-2024",disponibility:"2024-07-10",category:"Profissional",opportunity:"Zagueiro",country:"Alemanha",org:"Bundesliga",orgLogo:"/assets/images/pngs/brasileirao.png",orgPath:"/bundesliga",age:{minAge:18,maxAge:28},payment:{minPayment:1e4,maxPayment:18e3,currency:"Real"},minHeight:1.7},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel",requirements:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel"},{opportunityId:0,details:{from:"Clube 0",date:"01-06-2024",disponibility:"2024-07-10",category:"Profissional",opportunity:"Zagueiro",country:"Alemanha",org:"Bundesliga",orgLogo:"/assets/images/pngs/brasileirao.png",orgPath:"/bundesliga",age:{minAge:18,maxAge:28},payment:{minPayment:1e4,maxPayment:18e3,currency:"Real"},minHeight:1.7},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel",requirements:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel"},{opportunityId:0,details:{from:"Clube 0",date:"01-06-2024",disponibility:"2024-07-10",category:"Profissional",opportunity:"Zagueiro",country:"Alemanha",org:"Bundesliga",orgLogo:"/assets/images/pngs/brasileirao.png",orgPath:"/bundesliga",age:{minAge:18,maxAge:28},payment:{minPayment:1e4,maxPayment:18e3,currency:"Real"},minHeight:1.7},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel",requirements:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel"}]}}},formOptions:{profileType:[{value:"player",text:"Atleta"},{value:"club",text:"Clube"},{value:"league",text:"Liga"},{value:"university",text:"Universidade"},{value:"staff",text:"Comissão técnica"},{value:"agency",text:"Agência"},{value:"fan",text:"Fã"}],staffProfileType:[{value:"performance_analyst",text:"Analista de desempenho"},{value:"coach_assistant",text:"Auxiliar Técnico"},{value:"coordinator",text:"Coordenador"},{value:"director",text:"Diretor"},{value:"business_man",text:"Empresário"},{value:"physiologist",text:"Fisiologista"},{value:"physiotherapist",text:"Fisioterapeuta"},{value:"manager",text:"Gerente"},{value:"massage_therapist",text:"Massagista"},{value:"doctor",text:"Médico"},{value:"nutritionist",text:"Nutricionista"},{value:"goalkeeper_trainer",text:"Preparador de goleiro"},{value:"physical_trainer",text:"Preparador físico"},{value:"tactical_trainer",text:"Preparador tático"},{value:"psychologist",text:"Psicólogo"},{value:"scout",text:"Scout"},{value:"coach",text:"Técnico"},{value:"personal_trainer",text:""}],agencyProfileType:[{value:"exchange_agency",text:"Agência de intercâmbio"}],competitiveCategory:[{value:"professional",text:"Profissional"},{value:"semi_professional",text:"Semi-Profissional"},{value:"academic",text:"Universitário"},{value:"amateur",text:"Amador"},{value:"recreational",text:"Recreacional"}],competitiveLevels:[{value:"division_1",text:"1° Divisão"},{value:"division_2",text:"2° Divisão"},{value:"division_3",text:"3° Divisão"},{value:"division_4",text:"4° Divisão"},{value:"division_5",text:"5° Divisão"},{value:"division_6",text:"6° Divisão"},{value:"division_7",text:"7° Divisão"},{value:"division_8",text:"8° Divisão"},{value:"division_9",text:"9° Divisão"},{value:"division_10",text:"10° Divisão"},{value:"division_11",text:"11° Divisão"},{value:"division_12",text:"12° Divisão"}],universityCompetitiveLevels:[{value:"ncaa_1",text:"NCAA 1 (EUA)"},{value:"ncaa_2",text:"NCAA 2 (EUA)"},{value:"ncaa_3",text:"NCAA 3 (EUA)"},{value:"naia_1",text:"NAIA 1 (EUA)"},{value:"naia_2",text:"NAIA 2 (EUA)"},{value:"nccaa_1",text:"NCCAA 1 (EUA)"},{value:"nccaa_2",text:"NCCAA 2 (EUA)"},{value:"njcaa_1",text:"NJCAA 1 (EUA)"},{value:"njcaa_2",text:"NJCAA 2 (EUA)"},{value:"njcaa_3",text:"NJCAA 3 (EUA)"}],ageCategory:[{value:"sub_7",text:"Sub-7 (6 e 7 anos)"},{value:"sub_8",text:"Sub-8 (8 anos)"},{value:"sub_9",text:"Sub-9 (8 e 9 anos)"},{value:"sub_11",text:"Sub-11 (10 e 11 anos)"},{value:"sub_13",text:"Sub-13 (12 e 13 anos)"},{value:"sub_15",text:"Sub-15 (14 e 15 anos)"},{value:"sub_17",text:"Sub-17 (16 e 17 anos)"},{value:"sub_20",text:"Sub-20 (18, 19 e 20 anos)"},{value:"adult",text:"Adulto (Já atua no time principal)"}],positions:[{value:"goalkeeper",text:"Goleiro"},{value:"left_back",text:"Lateral Esquerdo"},{value:"right_back",text:"Lateral Direito"},{value:"center_back",text:"Zagueiro"},{value:"wing_back",text:"Ala"},{value:"defensive_midfielder",text:"Primeiro Volante"},{value:"central_midfielder",text:"Meio-Campista"},{value:"attacking_midfielder",text:"Meia Ofensivo"},{value:"wide_midfielder",text:"Meia Lateral"},{value:"second_striker",text:"Segundo atacante"},{value:"left_winger",text:"Ponta Esquerda"},{value:"right_winger",text:"Ponta Direita"},{value:"center_forward",text:"Centroavante"},{value:"striker",text:"Atacante"},{value:"not_specified",text:"Não especificado"}],currency:[{value:"R$",text:"Real"},{value:"$",text:"Dolar (Americano)"},{value:"€",text:"Euro"}],leg:[{value:"right",label:"Direita"},{value:"left",label:"Esquerda"}],modality:[{value:"male",text:"Masculino"},{value:"female",text:"Feminino"}],manager:[{value:"yes",label:"Sim"},{value:"no",label:"Não"}],league:[{value:"lifa",text:"LIFA"}],qual:[{value:"yes",label:"Sim"},{value:"n/a",label:"Não"}],language:[{value:"portuguese_br",text:"Português"},{value:"english",text:"Inglês"},{value:"spanish",text:"Espanhol"}],avaliability:[{value:"active_tree",text:"Ativo - Sem contrato"},{value:"active",text:"Ativo - Com contrato"},{value:"injured_free",text:"Lesionado - Sem contrato"},{value:"injured",text:"Lesionado - Com contrato"}],opportunityType:[{value:"scouts",text:"Scouts"},{value:"clubs",text:"Clubes"}],reportMedia:[{value:"inappropriate_content",text:"Contéudo inapropriado"},{value:"copyright",text:"Direitos Autorais"},{value:"media_manipulation",text:"Manipulação de Mídia"},{value:"poor_quality",text:"Qualidade Ruim"}],eventFormat:[{value:"online",text:"Online"},{value:"in_person",text:"Presencial"}],languageOptions:[{value:"pt",text:"Português"},{value:"en",text:"Inglês"},{value:"es",text:"Espanhol"},{value:"fr",text:"Francês"}],sportsOptions:[{value:"football",text:"Futebol"},{value:"cricket",text:"Críquete"},{value:"hockey",text:"Hóquei"},{value:"tennis",text:"Tênis"},{value:"volleyball",text:"Vôlei"},{value:"tabletennis",text:"Tênis de Mesa"},{value:"basketball",text:"Basquete"},{value:"baseball",text:"Beisebol"},{value:"rugby",text:"Rugby"},{value:"golf",text:"Golfe"}]}};function pt({children:t}){const[s,i]=p.useReducer(Ql,O);return e.jsx(X.Provider,{value:{s2tState:s,s2tDispatch:i},children:t})}pt.propTypes={children:a.node.isRequired};const Jl=_.article`
  ${({theme:t})=>h`
   width: 100%;
   height: 100%;
  `}
`;function _t(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsx(Jl,{children:e.jsx(Be,{title:t("scouts"),items:i.users.scouts})})}const Kl=_.article`
  ${({theme:t})=>h`
   width: 100%;
   height: 100%;
  `}
`;function ht(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsx(Kl,{children:e.jsx(Be,{title:t("clubs"),items:i.users.clubs||[]})})}const Zl=_.article`
  ${({theme:t})=>h`
   position: relative;
   display: flex;
   flex-direction: column;
   gap: ${t.spacings.medium};

   width: 100%;
   height: 100%;
   min-height: 400px;
   
   > ${Kt} {
    width: 200px;

    @media ${t.medias.smallmobile} {
      width: 100%;
    }
   }
  `}
`,ec=_.div`
  ${({theme:t})=>h`
   width: 100%;
   height: 100%;
   animation: ${I} 500ms ease-out;
   display: flex;
   flex-direction: column;
   gap: ${t.spacings.large};

   /* & ${M} {
    animation: none;
   } */

    ${se} {
   }
  
   ${Se} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    animation: ${ue} 500ms;

    @media ${t.medias.smallpc} {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    @media ${t.medias.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }

    @media ${t.medias.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    }
    }

  `}
`,tc=_.div`
  ${({theme:t})=>h`
   width: 100%;
   height: 100%;
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
  `}
`,oc=_(so)`
  ${({theme:t})=>h`
    font-family: ${t.fonts.primary};
    list-style: none;
    cursor: pointer;
    user-select: none;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.small};

    margin-top: ${t.spacings.small};
    
    transition: all 500ms ease-in-out;

    .page-item {
      height: 30px;
      width: 30px;
      font-size: ${t.sizes.medium};
      display: flex;
      justify-content: center;
      align-items: center;
      border: ${t.borders.white};
      border-radius: 50%;
      transition: all 500ms ease-in-out;

      &:hover {
        border: ${t.borders.primary};
      }

      @media ${t.medias.mobile} {
        height: 20px;
        width: 20px;
        font-size: ${t.sizes.small};
      }

      @media ${t.medias.smallmobile} {
        height: 15px;
        width: 15px;
        font-size: ${t.sizes.xsmall};
      }
      

    }

    .page-link {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }

    .active {
      border: ${t.borders.primary};
      transform: scale(1.2);
      color: ${t.colors.primary};
      box-shadow: 0px 0px 5px 1px ${t.colors.primary};

    }

    .previous, .next {
      transition: all 500ms ease-in-out;
      color: ${t.colors.white};
      
      &:hover {
        color: ${t.colors.primary};
      }

      @media ${t.medias.mobile} {
        font-size: ${t.sizes.xsmall};
      }

      @media ${t.medias.smallmobile} {
        font-size: ${t.sizes.xxsmall};
      }
   
    }

    .break {
  
     }

    .disabled {
      opacity: 0.5;

      &:hover {
        color: ${t.colors.white};
      }
    }
  `}
`,sc=_.div`
  ${({theme:t})=>h`
    background-image: linear-gradient(to bottom, ${t.colors.lightsecondary}, ${t.colors.lightprimary});
    color: ${t.colors.white};
    font-family: ${t.fonts.primary};
    border-radius: 15px;
    animation: ${ue} 1000ms;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.small};

    width: 100%;
    height: 100%;
    padding: ${t.spacings.large};

    transition: all 500ms ease-in-out;

    ${M} {
      &:hover {
        > svg {
          transform: none;
        }
      }
    }

    ${Z} {
      font-size: ${t.sizes.large};

      @media ${t.medias.mobile} {
       font-size: ${t.sizes.medium};
      }

      @media ${t.medias.smallmobile} {
       font-size: ${t.sizes.small};
      }
    }

    ${os} {
      font-weight: 600;
    }

    ${pe} {
      font-size: ${t.sizes.xlarge};

    @media ${t.medias.tablet} {
      font-size: ${t.sizes.large};
    }

    @media ${t.medias.mobile} {
      font-size: ${t.sizes.medium};
    }

    @media ${t.medias.smallmobile} {
      font-size: ${t.sizes.small};
    }
    }

    ${se} {
      user-select: none;
    }



    &:hover {
      box-shadow: 0px 0px 5px 3px white inset;
    }
  `}
`;_.img`
  ${({theme:t})=>h`
    width: 70px;
    transition: all 300ms ease-in-out;

    @media ${t.medias.mobile} {
      width: 60px;
    }
  `}
`;const Ri=_.div`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${t.spacings.xxsmall};
    align-items: center;
  `}
`;function Pt({children:t}){return e.jsx(Ri,{children:t})}Pt.propTypes={children:a.node.isRequired};const ic=_.div`
  ${({theme:t})=>h`
    animation: ${I} 500ms;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: ${t.spacings.small};
  `}
`,rc=_.div`
  ${({theme:t})=>h`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.small};
  `}
`,ac=_.div`
  ${({theme:t,isremoving:s})=>h`

  ${M} {
    width: 30px;
    animation: ${I} 500ms;
    padding: 2px;
    background: blue

    @media ${t.medias.mobile} {
      width: 25px;
    }
  }
  `}
`;function Oi({id:t,message:s}){const[i,r]=p.useState(),{t:l}=w(),n=u=>{u.stopPropagation(),r(!i)},g=u=>{u.stopPropagation(),r(!1)},x=u=>{u.stopPropagation(),r(!1)};return e.jsx(e.Fragment,{children:i?e.jsxs(ic,{children:[e.jsx(y,{text:s}),e.jsxs(rc,{children:[e.jsx($,{text:l("yes"),onclick:u=>g(u),bgcolor:o.colors.white,bghover:o.colors.mediumred,textcolor:o.colors.black,texthover:o.colors.black,border:o.colors.white,borderhover:o.colors.white}),e.jsx($,{text:l("no"),onclick:u=>x(u),bgcolor:o.colors.white,bghover:o.colors.primary,textcolor:o.colors.black,texthover:o.colors.black,border:o.colors.white,borderhover:o.colors.white})]})]}):e.jsx(ac,{isremoving:i?"isremoving":void 0,children:e.jsx(q,{hovercolor:o.colors.red,name:l("remove"),onclick:n,children:e.jsx(Vo,{})})})})}Oi.propTypes={id:a.oneOfType([a.string,a.number]),message:a.string};function Ni({id:t,from:s="",date:i="",opportunity:r="",country:l="",org:n="",orglogo:g="",orgpath:x="",category:u="",onclick:m,publicview:d,ownerview:f,isapplied:A}){const{t:S}=w();return e.jsxs(sc,{onClick:m,children:[e.jsx(q,{color:A?o.colors.primary:o.colors.white,hovercolor:"none",children:e.jsx(Ds,{})}),e.jsxs(Pt,{children:[s&&e.jsx(Q,{infotitle:S("opportunity_from"),info:s}),i&&e.jsx(Q,{infotitle:S("published_in"),info:i}),u&&e.jsx(Q,{infotitle:S("category"),info:u})]}),r&&e.jsx(k,{text:r,uppercase:!0}),e.jsxs(Pt,{children:[l&&e.jsx(y,{text:l}),n&&e.jsx(c,{path:x,text:n})]}),d&&e.jsx(Ht,{}),f&&e.jsx(Oi,{id:t,message:S("delete_opportunity_question")})]})}const nc=_.div`
  ${({theme:t,isopen:s})=>h`
    animation: ${I} 500ms;
    width: 100%;
    border-radius: 12px;

    & ${M} {
     animation: none;
    }


    & ${Ft}, ${At} {
      @media ${t.medias.mobile} {
       font-size: ${t.sizes.xsmall};
      }
    }

    & ${W} {
      width: 100%;
      justify-content: space-between;

      @media ${t.medias.smallpc} {
        flex-direction: row;
      }

      @media ${t.medias.tablet} {
        flex-direction: column;
      }

      & ${Kt} {
         min-width: 210px;
       }
    }

    & ${M} {
      > svg {
        color: ${s?t.colors.primary:"none"};

        &:hover {
          color: ${s?"none":t.colors.secondary};
        }
      }
    }
  `}
`,lc=_.label`
  ${({theme:t})=>h`
    animation: ${ue} 500ms;
    color: ${t.colors.lightgray};
    font-size: ${t.sizes.medium};

    position: relative;
    display: flex;
    align-items: center;

    width: 100%;

    @media ${t.medias.mobile} {
      font-size: ${t.sizes.small};
    }
  `}
`,cc=_.input`
  ${({theme:t})=>h`
    background: ${t.colors.transparent};
    border: ${t.borders.white};
    border-radius: 7px;
    color: ${t.colors.white};
    width: 100%;


    font-size: ${t.sizes.small};
    font-family: ${t.fonts.primary};
  

    padding: ${t.spacings.small};
    transition: all 300ms ease-in-out;
    
    &:hover {
      border: ${t.borders.tertiary};
    }

    &::-webkit-input-placeholder {
      color: ${t.colors.white};
    }

    &:focus {
      border: ${t.borders.secondary};
      outline: none;
    }

    @media ${t.medias.mobile} {
      font-size: ${t.sizes.xsmall};
    }
  `}
`,dc=_.div`
  ${({theme:t})=>h`
      transition: all 500ms ease-in-out ;
      width: 35px;
      height: 100%;
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;


      @media ${t.medias.mobile} {
        width: 30px;
      }
    
      & svg {
      
        color: ${t.colors.white};
        transition: all 500ms ease-in-out ;

        &:hover {
          color: ${t.colors.tertiary};
          transform: scale(1.1);
        }
  
      }
  `}
`,qo=_.div`
  ${({theme:t})=>h`
     width: 100%;
     max-width: 300px;
     display: flex;
     flex-direction: row;
     justify-content: flex-end;
     align-items: center;
     gap: ${t.spacings.xxsmall};

     @media ${t.medias.tablet} {
      max-width: none;
     }
  `}
`;function Io({name:t,id:s,onChange:i,value:r,title:l="",autocomplete:n="",required:g=!1,children:x}){const{t:u}=w();return e.jsxs(qo,{children:[x,e.jsxs(lc,{children:[l," ",g?u("required"):"",e.jsx(cc,{type:"search",name:t,id:s,onChange:i,value:r,autoComplete:n,required:g}),e.jsx(dc,{children:e.jsx(an,{})})]})]})}Io.propTypes={name:a.string.isRequired,id:a.string.isRequired,value:a.string,title:a.string,onChange:a.func,autocomplete:a.string,required:a.bool};const Ro=_.div`
  ${({theme:t,isopen:s})=>h`
    animation: ${I} 500ms;
    width: 100%;
    height: 100%;
    display: ${s};
    grid-gap: ${t.spacings.small};
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: ${t.spacings.xxsmall};


    @media ${t.medias.smallpc} {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }

    @media ${t.medias.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    }

    @media ${t.medias.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }
  `}
`;function Bt({children:t,isopen:s}){return e.jsx(Ro,{isopen:s?"grid":"none",children:t})}Bt.propTypes={children:a.node.isRequired,isopen:a.bool.isRequired};function Mi(){const t=p.useContext(X),{s2tState:s,s2tDispatch:i}=t,{t:r}=w(),[l,n]=p.useState(!0),[g,x]=p.useState({opportunityType:"",ageCategory:"",position:"",bestLeg:"",country:"",league:"",competitiveLevel:"",minimumAge:"",maximumAge:"",minimumPayment:"",minimumHeight:""}),[u,m]=p.useState("");return p.useEffect(()=>{Ul(i,g)},[g]),p.useEffect(()=>{Hl(i,u)},[u]),e.jsx(nc,{isopen:l?"isopen":void 0,children:e.jsx(je,{children:e.jsxs(me,{children:[e.jsxs(B,{children:[e.jsx(H,{id:"filterOpportunityType",options:s.formOptions.opportunityType,placeholder:r("all"),onDropdownChange:d=>x(f=>({...f,opportunityType:d}))}),e.jsxs(qo,{children:[e.jsx(q,{onclick:()=>n(!l),name:"Filtrar oportunidades",children:e.jsx(Uo,{})}),e.jsx(Io,{name:"searchProposals",id:"searchProposals",onChange:d=>m(d.target.value)})]})]}),e.jsxs(Bt,{isopen:l,children:[e.jsx(H,{id:"filterCompetitiveLevel",placeholder:r("competitive_level"),options:s.formOptions.competitiveLevels,otheroption:!0,onDropdownChange:d=>x(f=>({...f,competitiveLevel:d}))}),e.jsx(H,{id:"filterAgeCategory",placeholder:r("category"),options:s.formOptions.ageCategory,onDropdownChange:d=>x(f=>({...f,ageCategory:d}))}),e.jsx(H,{placeholder:r("position"),id:"filterPosition",options:s.formOptions.positions,onDropdownChange:d=>x(f=>({...f,position:d}))}),e.jsx(H,{id:"filterLeague",placeholder:r("league"),options:s.formOptions.league,otheroption:!0,onDropdownChange:d=>x(f=>({...f,league:d}))}),e.jsx(H,{id:"filterLeg",placeholder:r("best_leg"),options:s.formOptions.leg,onDropdownChange:d=>x(f=>({...f,bestLeg:d}))}),e.jsx(T,{type:"number",name:"filterMinimumAge_input",id:"filterMinimumAge_input",placeholder:r("minimum_age"),onChange:d=>x(f=>({...f,league:d.target.value}))}),e.jsx(T,{type:"number",name:"filterMaximumAge_input",id:"filterMaximumAge_input",placeholder:r("maximum_age"),onChange:d=>x(f=>({...f,maximumAge:d.target.value}))}),e.jsx(T,{type:"number",name:"filterMinimumHeigth_input",id:"filterMinimumHeight_input",placeholder:r("minimum_height"),onChange:d=>x(f=>({...f,minimumAge:d.target.value}))}),e.jsx(T,{type:"number",name:"filterMinimumPayment_input",id:"filterMinimumPayment_input",placeholder:r("minimum_payment"),onChange:d=>x(f=>({...f,minimumPayment:d.target.value}))}),e.jsx(T,{type:"number",name:"filterMaximumPayment_input",id:"filterMaximumPayment_input",placeholder:r("maximum_payment"),onChange:d=>x(f=>({...f,maximumPayment:d.target.value}))}),e.jsx(T,{type:"text",name:"filterCountry_input",id:"filterCountrycountry_input",placeholder:r("country"),onChange:d=>x(f=>({...f,country:d.target.value}))})]})]})})})}Mi.propTypes={};function lo({items:t,title:s,selectedproposal:i}){const{t:r}=w(),[l,n]=p.useState(0),[g,x]=p.useState(8),u=l*g,m=p.useMemo(()=>t?t.slice(u,u+g):[],[t,l,g]),d=({selected:E})=>{n(E)};p.useEffect(()=>{const E=()=>{x(window.innerWidth<768?4:8)};return window.addEventListener("resize",E),E(),()=>window.removeEventListener("resize",E)},[]);const[f,A]=p.useState(null);p.useEffect(()=>{A(i)},[i]);const S=E=>{A(E)},D=()=>{window.scrollTo({top:200,behavior:"smooth"})};return e.jsxs(ec,{children:[s&&e.jsx(G,{text:s,uppercase:!0}),e.jsx(Mi,{}),e.jsxs(tc,{children:[m&&m.length>0?e.jsx(Se,{children:m.map(E=>e.jsx(Ni,{from:E.details.from,date:E.details.date,opportunity:E.details.opportunity,category:E.details.category,country:E.details.country,org:E.details.org,orglogo:E.details.orgLogo,orgpath:E.details.orgPath,onclick:()=>S(E),id:E.opportunityId,publicview:!0},E.opportunityId))}):e.jsx(y,{text:r("no_opportunities")}),m.length>0&&e.jsx(oc,{previousLabel:r("previous"),nextLabel:r("next"),breakLabel:"...",pageCount:t?Math.ceil(t.length/g):0,pageRangeDisplayed:3,marginPagesDisplayed:1,onPageChange:d,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",activeClassName:"active",onClick:D}),f&&e.jsx(ji,{proposal:f,onclick:()=>A(null)})]})]})}lo.propTypes={title:a.string,items:a.arrayOf(a.object)};function tt(){var f;const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s,l=p.useContext(Ie),{playerState:n,playerDispatch:g}=l,u=((f=Oe().state)==null?void 0:f.selectedProposal)||null,m=A=>{var S,D;return((D=(S=i.proposals[n.profile.info.modality||"male"])==null?void 0:S[n.profile.info.competitiveCategory||"professional"])==null?void 0:D[A||"clubs"])||[]},d=[...m("agents"),...m("clubs")];return e.jsx(Zl,{children:e.jsx(lo,{title:t("opportunities"),items:d,selectedproposal:u})})}const Ze=_.div`
  ${({theme:t})=>h`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.small};

    ${de} {
      padding: ${t.spacings.small};
    }
  `}
`,pc=_.h4`
  ${({theme:t})=>h`
    color: ${t.colors.white};
    font-weight: 400;
  `}
`,uc=_.article`
  ${({theme:t})=>h`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
      ),
      url('/assets/images/background.png');
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     width: 100%;
     height: 100%;

     ${we} {
      width: 100%;
     }

     & ${W} {
      > ${Ze} {
      width: 50%;

      @media ${t.medias.smallpc} {
        width: 100%;
      }
     } 
     }
  `}
`,mc=_.section`
  ${({theme:t})=>h`
  
  display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     width: 100%;
     height: 100%;

     & ${W} {
      > ${Ze} {
      width: 50%;

      @media ${t.medias.smallpc} {
        width: 100%;
      }
     } 
     }
    }
  `}
`,_c=_.div`
  ${({theme:t})=>h`
    color: ${t.colors.white};
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;

    @media ${t.medias.mobile} {
      font-size: ${t.sizes.small};
    }

    ${M} {
     position: absolute;
     width: 25px;
     right: 5px;
     transition: all 500ms ease-in-out;
    }

  `}
`,hc=_.p`
  ${({theme:t})=>h`
     border: ${t.borders.white};
     padding: ${t.spacings.small};
     border-radius: 10px;
     background: ${t.colors.mediumblack};
     width: 100%;
  `}
`;function ss({text:t,name:s,onclick:i}){const{t:r}=w();return e.jsxs(_c,{children:[e.jsx(hc,{children:t}),e.jsx(q,{hovercolor:o.colors.mediumred,onclick:i,name:r("remove"),children:e.jsx(te,{})})]})}ss.propTypes={text:a.string.isRequired,onclick:a.func};const gc=(t,s)=>{t({type:Us,payload:s})},xc=(t,s)=>{t({type:Hs,payload:s})},yc=(t,s)=>{t({type:Bs,payload:s})},fc=(t,s)=>{t({type:Ys,payload:s})},bc=(t,s)=>{t({type:Ws,payload:s})},vc=(t,s)=>{t({type:Gs,payload:s})},wc=(t,s)=>{t({type:Xs,payload:s})},is=(t,s)=>{t({type:Qs,payload:s})},jc=(t,s)=>{t({type:Js,payload:s})},Li="change_profile_info",Fi="add_club_history",Vi="remove_club_history",Ui="add_academic_history",Hi="remove_academic_history",Bi="add_award_history",Yi="remove_award_history",Wi="add_video",Gi="remove_video",$c=(t,s)=>{t({type:Li,payload:s})},kc=(t,s)=>{t({type:Fi,payload:s})},Cc=(t,s)=>{t({type:Vi,payload:s})},Sc=(t,s)=>{t({type:Ui,payload:s})},Tc=(t,s)=>{t({type:Hi,payload:s})},Ac=(t,s)=>{t({type:Bi,payload:s})},Pc=(t,s)=>{t({type:Yi,payload:s})},rs=(t,s)=>{t({type:Wi,payload:s})},Ec=(t,s)=>{t({type:Gi,payload:s})},et=p.createContext();function Et({title:t="",id:s,inputtitle:i,placeholder:r,historic:l,onChangeName:n,onChangeEarliestDate:g,onChangeLatestDate:x,onClick:u,nameValue:m,earliestDateValue:d,latestDateValue:f}){const{t:A}=w(),[S,D]=p.useState(!1),E=p.useContext(Ie),{playerState:V,playerDispatch:C}=E,R=p.useContext(et),{staffState:ne,staffDispatch:b}=R,j=ie=>{D(!S),x(ie)},N=ie=>{const L={playerClubHistory:()=>yc(C,ie),playerAcademicHistory:()=>bc(C,ie),staffClubHistory:()=>Cc(b,ie),staffAcademicHistory:()=>Tc(b,ie)};L[s]&&L[s]()};return e.jsxs(Ze,{children:[e.jsx(pc,{children:t}),l&&l.map(ie=>e.jsx(ss,{text:`${ie.name} | ${ie.earliestDate.slice(0,4)}`,onclick:()=>N(ie)},ie.id)),e.jsx(T,{type:"text",name:`${s}_input`,id:`${s}_input`,placeholder:r,title:i,onChange:n,value:m}),e.jsx(T,{type:"date",name:`${s}EarliestDate_input`,id:`${s}EarliestDate_input`,placeholder:A("entry_year"),title:A("entry"),onChange:g,value:d}),!S&&e.jsx(T,{type:"date",name:`${s}LatestDate_input`,id:`${s}LatestDate_input`,placeholder:A("exit_year"),title:A("exit"),onChange:x,value:f}),e.jsx(Go,{id:`isActual${s}`,value:"",text:`${A("actual")} ${i}`,onChange:ie=>j(ie),checked:S}),e.jsx($,{text:A("add"),bgcolor:o.colors.quaternary,bghover:o.colors.secondary,textcolor:o.colors.white,texthover:o.colors.white,border:o.colors.tertiary,borderhover:o.colors.white,onclick:u})]})}Et.propTypes={title:a.string,inputtitle:a.string,placeholder:a.string,id:a.string.isRequired,historic:a.arrayOf(a.object),onChangeName:a.func,onChangeEarliestDate:a.func,onChangeLatestDate:a.func,nameValue:a.string,earliestDateValue:a.string,latestDateValue:a.string,onClick:a.func};const zc=_.label`
  ${({theme:t})=>h`
    animation: ${ue} 500ms;
    color: ${t.colors.white};
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.small};
    font-size: ${t.sizes.medium};

    @media ${t.medias.mobile} {
      font-size: ${t.sizes.small};
    }
  `}
`,Xi=_.input`
  ${({theme:t})=>h`
    font-family: ${t.fonts.primary};
  
    &::-webkit-file-upload-button { 
        font-family: ${t.fonts.primary};
        background: ${t.colors.transparent};
        border: ${t.borders.xwhite};
        padding: ${t.spacings.xsmall};
        border-radius: 10px;
        color: ${t.colors.white};
        cursor: pointer;
        transition: all 500ms ease-in-out;
        font-size: ${t.sizes.small};

        &:hover {
          border: ${t.borders.xsecondary};
          color: ${t.colors.secondary};
        }
      }
  `}
`;function as({text:t,id:s,accept:i="image/*",required:r=!1,onChange:l}){return e.jsxs(zc,{htmlFor:s,children:[t,e.jsx(Xi,{type:"file",onChange:l,accept:i,id:s,name:s,required:r})]})}as.propTypes={id:a.string.isRequired,text:a.string,accept:a.string,required:a.bool,onChange:a.func};const Qi=_.div`
  ${({theme:t})=>h`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.small};

    @media ${t.medias.smallpc} {
      width: 100%;
    }

    ${de} {
      padding: ${t.spacings.small};
    }
  `}
`,Dc=_.h4`
  ${({theme:t})=>h`
    color: ${t.colors.white};
    font-weight: 400;
  `}
`,Ji="change_profile_info",Ki="add_competition_history",Zi="remove_competition_history",er="add_award_history",tr="remove_award_history",or="add_video",sr="remove_video",qc="reveal_player",Ic=(t,s)=>{t({type:Ji,payload:s})},Rc=(t,s)=>{t({type:Ki,payload:s})},Oc=(t,s)=>{t({type:Zi,payload:s})},Nc=(t,s)=>{t({type:er,payload:s})},Mc=(t,s)=>{t({type:tr,payload:s})},ns=(t,s)=>{t({type:or,payload:s})},Lc=(t,s)=>{t({type:sr,payload:s})},ir="change_profile_info",rr="add_competition_history",ar="remove_competition_history",nr="add_award_history",lr="remove_award_history",cr="add_video",dr="remove_video",Fc=(t,s)=>{t({type:ir,payload:s})},Vc=(t,s)=>{t({type:rr,payload:s})},Uc=(t,s)=>{t({type:ar,payload:s})},Hc=(t,s)=>{t({type:nr,payload:s})},Bc=(t,s)=>{t({type:lr,payload:s})},ls=(t,s)=>{t({type:cr,payload:s})},Yc=(t,s)=>{t({type:dr,payload:s})},Fe=p.createContext(),ut=p.createContext();function yt({title:t="",id:s,inputtitle:i,placeholder:r,achievements:l,onChangeName:n,onChangeDate:g,onClick:x,nameValue:u,dateValue:m}){const{t:d}=w(),f=p.useContext(Ie),{playerState:A,playerDispatch:S}=f,D=p.useContext(Fe),{clubState:E,clubDispatch:V}=D,C=p.useContext(ut),{universityState:R,universityDispatch:ne}=C,b=p.useContext(et),{staffState:j,staffDispatch:N}=b,ie=L=>{const Y={playerAwardHistory:()=>wc(S,L),clubCompetitionsHistory:()=>Oc(V,L),clubAwardsHistory:()=>Mc(V,L),universityCompetitionsHistory:()=>Uc(ne,L),universityAwardsHistory:()=>Bc(ne,L),staffAwardsHistory:()=>Pc(N,L)};Y[s]&&Y[s]()};return e.jsxs(Qi,{children:[e.jsx(Dc,{children:t}),l&&l.map(L=>e.jsx(ss,{text:`${L.name} | ${L.date&&L.date.slice(0,4)||L.earliestDate&&L.earliestDate.slice(0,4)}`,onclick:()=>ie(L)},L.id)),e.jsx(T,{type:"text",name:`${s}_input`,id:`${s}_input`,placeholder:r,title:i,onChange:n,value:u}),e.jsx(T,{type:"date",name:`${s}AchievementYear_input`,id:`${s}AchievementYear_input`,placeholder:d("year_of_achievement"),title:d("date"),onChange:g,value:m}),e.jsx($,{text:d("add"),bgcolor:o.colors.quaternary,bghover:o.colors.secondary,textcolor:o.colors.white,texthover:o.colors.white,border:o.colors.tertiary,borderhover:o.colors.white,onclick:x})]})}yt.propTypes={title:a.string,inputtitle:a.string,placeholder:a.string,id:a.string.isRequired,achievements:a.arrayOf(a.object),onChangeName:a.func,onChangeDate:a.func,onClick:a.func,nameValue:a.string,dateValue:a.string};function Wc(){const t=Ce(),{t:s}=w(),i=p.useContext(X),{s2tState:r,s2tDispatch:l}=i,n=p.useContext(Fe),{clubState:g,clubDispatch:x}=n,[u,m]=p.useState({...g.profile.info}),[d,f]=p.useState({name:"",earliestDate:""}),A=async C=>{C.preventDefault(),C.stopPropagation(),d.name&&d.earliestDate?(Rc(x,d),f({name:"",earliestDate:""})):console.error(s("fill_all_fields"))},[S,D]=p.useState({name:"",date:""}),E=async C=>{C.preventDefault(),C.stopPropagation(),S.name&&S.date?(Nc(x,S),D({name:"",date:""})):console.error(s("fill_all_fields"))},V=async C=>{u&&(C.preventDefault(),Ic(x,u),t(-1))};return e.jsx(mc,{children:e.jsx(je,{children:e.jsx(we,{children:e.jsxs(me,{onSubmit:V,children:[e.jsx(k,{text:s("your_profile"),size:o.sizes.xlarge}),e.jsx(T,{type:"text",name:"clubRepresentative_input",id:"clubRepresentative_input",title:s("representative"),placeholder:s("representative_club_name"),value:u.representative,onChange:C=>m(R=>({...R,representative:C.target.value}))}),e.jsx(H,{title:s("which_club_competitive_level"),id:"clubCompetitiveLevel",placeholder:s("select_level"),options:r.formOptions.competitiveLevels,selectedvalue:u.competitiveLevel,onDropdownChange:C=>m(R=>({...R,competitiveLevel:C}))}),e.jsx(T,{type:"date",name:"clubFoundationDate_input",id:"clubFoundationDate_input",title:s("foundation_date"),value:u.foundationDate,onChange:C=>m(R=>({...R,foundationDate:C.target.value}))}),e.jsx(T,{type:"text",name:"clubCountry_input",id:"clubCountry_input",title:s("country"),placeholder:s("which_country_club"),value:u.country,onChange:C=>m(R=>({...R,country:C.target.value}))}),e.jsx(T,{type:"text",name:"clubState_input",id:"clubState_input",title:s("state"),placeholder:s("which_state_club"),value:u.state,onChange:C=>m(R=>({...R,state:C.target.value}))}),e.jsx(T,{type:"text",name:"clubTrainingCenter_input",id:"clubTrainingCenter_input",title:s("training_center"),placeholder:s("where_club_train"),value:u.trainingCenter,onChange:C=>m(R=>({...R,trainingCenter:C.target.value}))}),e.jsx(T,{type:"text",name:"clubStadium_input",id:"clubStadium_input",title:s("stadium_name"),placeholder:s("club_stadium"),value:u.stadium,onChange:C=>m(R=>({...R,stadium:C.target.value}))}),e.jsx(T,{type:"text",name:"clubCoach_input",id:"clubCoach_input",title:s("coach_or_trainer"),placeholder:s("actual_club_coach"),value:u.coach,onChange:C=>m(R=>({...R,coach:C.target.value}))}),e.jsxs(B,{children:[e.jsx(yt,{title:s("current_competitions"),id:"clubCompetitionsHistory",inputtitle:s("competition"),placeholder:s("competition_name"),achievements:g.profile.competitions,onChangeName:C=>f(R=>({...R,name:C.target.value})),onChangeDate:C=>f(R=>({...R,earliestDate:C.target.value})),nameValue:d.name,DateValue:d.earliestDate,onClick:C=>A(C)}),e.jsx(yt,{title:s("titles_and_awards_history"),id:"clubAwardsHistory",inputtitle:s("competition_award"),placeholder:s("competition_award_name"),achievements:g.profile.awards,onChangeName:C=>D(R=>({...R,name:C.target.value})),onChangeDate:C=>D(R=>({...R,date:C.target.value})),nameValue:S.name,dateValue:S.date,onClick:C=>E(C)})]}),e.jsx(xe,{name:"editClubProfile_submit",id:"editClubProfile_submit",value:s("confirm_changes")})]})})})})}const Gc=_.section`
  ${({theme:t})=>h`
  
  display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     width: 100%;
     height: 100%;

     & ${W} {
      > ${Ze} {
      width: 50%;

      @media ${t.medias.smallpc} {
        width: 100%;
      }
     } 
     }
    }
  `}
`,pr=_.div`
  ${({theme:t})=>h`
     display: flex;
     flex-direction: column;
     gap: ${t.spacings.small};
     font-family: ${t.fonts.primary};
     margin-bottom: ${t.spacings.xsmall};
  `}
`,Xc=_.div`
  ${({theme:t})=>h`
     display: flex;
     flex-direction: row;
     align-items: center;
     gap: ${t.spacings.xxsmall};
     font-family: ${t.fonts.primary};
     cursor: pointer;
     user-select: none;
  `}
`,Qc=_.h3`
  ${({theme:t})=>h`
    font-weight: 400; 
    color: ${t.colors.lightgray};
    font-size: ${t.sizes.medium};

    @media ${t.medias.mobile} {
    font-size: ${t.sizes.small};
    }
  `}
`,Jc=_.input`
  ${({theme:t})=>h`
    position: relative;
    width: 16px;
    height: 16px;
    appearance: none;
    border: ${t.borders.xwhite};
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    user-select: none;

    &:checked::before {
      opacity: 1;
    }

    &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background-color: ${t.colors.secondary}; 
    border-radius: 50%;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    }
  `}
`,Kc=_.label`
  ${({theme:t})=>h`
    color: ${t.colors.lightgray};
    font-size: ${t.sizes.small};
    text-transform: uppercase;
    cursor: pointer;
    user-select: none;

    @media ${t.medias.mobile} {
    font-size: ${t.sizes.xsmall};
    }
  `}
`;function yo({title:t,options:s,groupname:i,onChange:r,required:l,selectedvalue:n}){const{t:g}=w(),x=u=>{r(u.value)};return e.jsxs(pr,{children:[e.jsxs(Qc,{children:[t," ","(",g("required"),")"]}),s.map(u=>e.jsxs(Xc,{children:[e.jsx(Jc,{onChange:()=>x(u),type:"radio",name:i,id:`${i}:${u.value}`,value:u.value,required:l,checked:u.value===n}),e.jsx(Kc,{htmlFor:`${i}:${u.value}`,children:g(`${u.value}`)})]},u.value))]})}yo.propTypes={options:a.arrayOf(a.shape({value:a.string.isRequired,label:a.string.isRequired})).isRequired,title:a.string.isRequired,groupname:a.string.isRequired,required:a.bool,onChange:a.func};const Zc=_.div`
  ${({theme:t})=>h`

  `}
`;function _o({title:t,groupname:s,onChange:i,selectedvalue:r}){const{t:l}=w(),n=p.useContext(X),{s2tState:g,s2tDispatch:x}=n,[u,m]=p.useState(r),d=f=>{m(f),i(f)};return e.jsx(Zc,{children:e.jsxs(pr,{children:[e.jsx(yo,{title:t,options:g.formOptions.qual,groupname:s,selectedvalue:u!=="n/a"?"yes":u,onChange:f=>d(f)}),u!=="n/a"&&e.jsx(e.Fragment,{children:e.jsx(T,{type:"string",name:"qualNote_input",id:"qualNote_input",title:l("note"),placeholder:l("insert_final_grade"),value:r==="yes"?"":r,onChange:f=>i(f.target.value),required:!0})})]})})}_o.propTypes={title:a.string.isRequired,groupname:a.string.isRequired,onChange:a.func,selectedvalue:a.string};function ed(){const t=Ce(),{t:s}=w(),i=p.useContext(X),{s2tState:r,s2tDispatch:l}=i,n=p.useContext(Ie),{playerState:g,playerDispatch:x}=n,[u,m]=p.useState({...g.profile.info});p.useEffect(()=>{(()=>{const j=new Date(u.birthDate);if(j){const ie=new Date-j,L=Math.floor(ie/(1e3*60*60*24*365.25));m(Y=>({...Y,age:L}))}})()},[u.birthDate]);const[d,f]=p.useState({name:"",earliestDate:"",latestDate:""}),A=async b=>{b.preventDefault(),b.stopPropagation(),d.name&&d.earliestDate?(xc(x,d),f({name:"",earliestDate:"",latestDate:""})):console.error(s("fill_all_fields"))},[S,D]=p.useState({name:"",date:""}),E=async b=>{b.preventDefault(),b.stopPropagation(),S.name&&S.date?(vc(x,S),D({name:"",date:""})):console.error(s("fill_all_fields"))},[V,C]=p.useState({name:"",earliestDate:"",latestDate:""}),R=async b=>{b.preventDefault(),b.stopPropagation(),V.name&&V.earliestDate?(fc(x,V),C({name:"",earliestDate:"",latestDate:""})):console.error(s("fill_all_fields"))},ne=async b=>{u&&(b.preventDefault(),gc(x,u),t(-1))};return e.jsx(Gc,{children:e.jsx(je,{children:e.jsx(we,{children:e.jsxs(me,{onSubmit:ne,children:[e.jsx(k,{text:s("your_profile"),size:o.sizes.xlarge}),e.jsx(yo,{title:s("which_best_leg"),options:r.formOptions.leg,groupname:"playerLegOptions",selectedvalue:u.bestLeg,onChange:b=>m(j=>({...j,bestLeg:b}))}),e.jsx(H,{title:s("which_competitive_level"),id:"playerCompetitiveLevel",placeholder:s("select_level"),options:r.formOptions.competitiveLevels,selectedvalue:u.competitiveLevel,onDropdownChange:b=>m(j=>({...j,competitiveLevel:b}))}),e.jsx(H,{title:s("which_category_you_act"),id:"playerAgeCategory",placeholder:"Escolha sua categoria",options:r.formOptions.ageCategory,selectedvalue:u.ageCategory,onDropdownChange:b=>m(j=>({...j,ageCategory:b}))}),e.jsx(T,{type:"date",name:"playerBirthDate_input",id:"playerBirthDate_input",title:s("birth_date"),value:u.birthDate,onChange:b=>m(j=>({...j,birthDate:b.target.value}))}),e.jsx(T,{type:"text",name:"playerWeight_input",id:"playerWeight_input",title:s("weight"),placeholder:s("your_current_weight"),value:u.weight,onChange:b=>m(j=>({...j,weight:b.target.value}))}),e.jsx(T,{type:"text",name:"playerHeight_input",id:"playerHeight_input",placeholder:s("your_current_height"),title:s("height"),value:u.height,onChange:b=>m(j=>({...j,height:b.target.value}))}),e.jsx(T,{type:"text",name:"playerPrimaryBirthCountry_input",id:"playerPrimaryBirthCountry_input",title:s("primary_nationality"),placeholder:s("your_primary_nationality"),value:u.primaryNationality,onChange:b=>m(j=>({...j,primaryNationality:b.target.value}))}),e.jsx(T,{type:"text",name:"playerSecondaryBirthCountry_input",id:"playerSecondaryBirthCountry_input",title:s("secondary_nationality"),placeholder:s("your_secondary_nationality"),value:u.secondaryNationality,onChange:b=>m(j=>({...j,secondaryNationality:b.target.value}))}),e.jsx(T,{type:"text",name:"playerCountry_Of_Operation_input",id:"playerCountry_Of_Operation_input",title:s("operation_country"),placeholder:s("country_you play_in"),value:u.primaryNationality,onChange:b=>m(j=>({...j,primaryNationality:b.target.value}))}),e.jsx(T,{type:"text",name:"playerBirthState_input",id:"playerBirthState_input",title:s("state"),placeholder:s("your_birth_state"),value:u.birthCity,onChange:b=>m(j=>({...j,birthCity:b.target.value}))}),e.jsx(T,{type:"text",name:"playerBirthCity_input",id:"playerBirthCity_input",title:s("city"),placeholder:s("your_birth_city"),value:u.birthCity,onChange:b=>m(j=>({...j,birthCity:b.target.value}))}),e.jsx(T,{type:"text",name:"playerPassports_input",id:"playerPassports_input",title:s("have_passports_question"),placeholder:s("if_yes_list_the_countries"),value:u.passports,onChange:b=>m(j=>({...j,passports:b.target.value}))}),e.jsx(T,{type:"text",name:"playerPayment_input",id:"playerPayment_input",title:s("payment"),placeholder:s("your_base_payment"),value:u.payment,onChange:b=>m(j=>({...j,payment:b.target.value}))}),e.jsx(T,{type:"text",name:"playerTransferValue_input",id:"playerTransferValue_input",title:s("transfer_value"),placeholder:s("your_transfer_value"),value:u.transferValue,onChange:b=>m(j=>({...j,transferValue:b.target.value}))}),e.jsx(H,{title:s("main_position"),placeholder:s("your_main_position"),id:"playerMainPosition",options:r.formOptions.positions,selectedvalue:u.primaryPosition,onDropdownChange:b=>m(j=>({...j,primaryPosition:b}))}),e.jsx(H,{title:s("secondary_position"),placeholder:s("your_secondary_position"),id:"playerSecondaryPosition",options:r.formOptions.positions,selectedvalue:u.secondaryPosition,onDropdownChange:b=>m(j=>({...j,secondaryPosition:b}))}),e.jsx(H,{title:s("tertiary_position"),placeholder:s("your_tertiary_position"),id:"playerTertiaryPosition",options:r.formOptions.positions,selectedvalue:u.tertiaryPosition,onDropdownChange:b=>m(j=>({...j,tertiaryPosition:b}))}),e.jsx(H,{title:s("play_in_league_question"),id:"playerLeague",placeholder:s("select_your_league"),options:r.formOptions.league,otheroption:!0,selectedvalue:u.league,onDropdownChange:b=>m(j=>({...j,league:b}))}),e.jsx(yo,{title:s("have_manager_question"),options:r.formOptions.manager,groupname:"playerManagerOptions",selectedvalue:u.hasManager,onChange:b=>m(j=>({...j,hasManager:b}))}),e.jsx(k,{text:s("your_sporting_history"),size:o.sizes.xlarge}),e.jsxs(B,{children:[e.jsx(Et,{title:s("club_history"),id:"playerClubHistory",inputtitle:s("club"),placeholder:s("club_name"),historic:g.profile.clubs,onChangeName:b=>f(j=>({...j,name:b.target.value})),onChangeEarliestDate:b=>f(j=>({...j,earliestDate:b.target.value})),onChangeLatestDate:b=>f(j=>({...j,latestDate:b.target.value||void 0})),nameValue:d.name,earliestDateValue:d.earliestDate,latestDateValue:d.latestDate,onClick:b=>A(b)}),e.jsx(yt,{title:s("titles_and_awards_history"),id:"playerAwardHistory",inputtitle:s("competition_award"),placeholder:s("competition_award_name"),achievements:g.profile.awards,onChangeName:b=>D(j=>({...j,name:b.target.value})),onChangeDate:b=>D(j=>({...j,date:b.target.value})),nameValue:S.name,dateValue:S.date,onClick:b=>E(b)})]}),e.jsx(k,{text:s("your_academic_history"),size:o.sizes.xlarge}),e.jsx(_o,{title:s("take_toefl_question"),groupname:"playerToefl",selectedvalue:u.toefl,onChange:b=>m(j=>({...j,toefl:b}))}),e.jsx(_o,{title:s("take_act_question"),groupname:"playeAct",selectedvalue:u.act,onChange:b=>m(j=>({...j,act:b}))}),e.jsx(_o,{title:s("take_act_question"),groupname:"playerSat",selectedvalue:u.sat,onChange:b=>m(j=>({...j,sat:b}))}),e.jsx(T,{type:"date",name:"secondGradeYear_input",id:"secondGradeYear_input",title:s("second_grade_graduation_date"),value:u.graduationDate,onChange:b=>m(j=>({...j,graduationDate:b.target.value}))}),e.jsx(T,{type:"text",name:"playerGpa_input",id:"playerGpa_input",title:s("gpa"),placeholder:s("grade_point_average"),value:u.gradePointAverage,onChange:b=>m(j=>({...j,gradePointAverage:b.target.value}))}),e.jsx(Et,{title:s("certifications"),id:"playerAcademicHistory",inputtitle:s("certification"),placeholder:s("certification_name"),historic:g.profile.studies,onChangeName:b=>C(j=>({...j,name:b.target.value})),onChangeEarliestDate:b=>C(j=>({...j,earliestDate:b.target.value})),onChangeLatestDate:b=>C(j=>({...j,latestDate:b.target.value||void 0})),nameValue:V.name,earliestDateValue:V.earliestDate,latestDateValue:V.latestDate,onClick:b=>R(b)}),e.jsx(xe,{name:"editOPlayerProfile_submit",id:"editPlayerProfile_submit",value:s("confirm_changes")})]})})})})}const td=_.section`
  ${({theme:t})=>h`
  
  display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     width: 100%;
     height: 100%;

     ${Qi} {
      width: 100%;
     }

     & ${W} {
      > ${Ze} {
      width: 100%;

      @media ${t.medias.smallpc} {
        width: 100%;
      }
     } 
     }
    }
  `}
`;function od(){const t=Ce(),{t:s}=w(),i=p.useContext(X),{s2tState:r,s2tDispatch:l}=i,n=p.useContext(ut),{universityState:g,universityDispatch:x}=n,[u,m]=p.useState({...g.profile.info}),[d,f]=p.useState({name:"",earliestDate:""}),A=async C=>{C.preventDefault(),C.stopPropagation(),d.name&&d.earliestDate?(Hc(x,d),f({name:"",earliestDate:""})):console.error(s("fill_all_fields"))},[S,D]=p.useState({name:"",earliestDate:""}),E=async C=>{C.preventDefault(),C.stopPropagation(),S.name&&S.earliestDate?(Vc(x,S),D({name:"",earliestDate:""})):console.error(s("fill_all_fields"))},V=async C=>{u&&(C.preventDefault(),Fc(x,u),t(-1))};return e.jsx(td,{children:e.jsx(je,{children:e.jsx(we,{children:e.jsxs(me,{onSubmit:V,children:[e.jsx(k,{text:s("your_profile"),size:o.sizes.xlarge}),e.jsx(T,{type:"text",name:"universityRepresentative_input",id:"universityRepresentative_input",title:s("representative"),placeholder:s("representative_university_name"),value:u.representative,onChange:C=>m(R=>({...R,representative:C.target.value}))}),e.jsx(H,{title:s("which_university_competitive_lelvel"),id:"universityCompetitiveLevel",placeholder:s("select_level"),options:r.formOptions.universityCompetitiveLevels,selectedvalue:u.competitiveLevel,otheroption:!0,onDropdownChange:C=>m(R=>({...R,competitiveLevel:C}))}),e.jsx(T,{type:"date",name:"universityFoundationDate_input",id:"universityFoundationDate_input",title:s("foundation_date"),value:u.foundationDate,onChange:C=>m(R=>({...R,foundationDate:C.target.value}))}),e.jsx(T,{type:"text",name:"universityCountry_input",id:"universityCountry_input",title:s("country"),placeholder:s("which_country_university"),value:u.country,onChange:C=>m(R=>({...R,country:C.target.value}))}),e.jsx(T,{type:"text",name:"universityState_input",id:"universityState_input",title:s("state"),placeholder:s("which_state_university"),value:u.state,onChange:C=>m(R=>({...R,state:C.target.value}))}),e.jsx(T,{type:"text",name:"universityTrainingCenter_input",id:"universityTrainingCenter_input",title:s("training_center"),placeholder:s("where_university_train"),value:u.trainingCenter,onChange:C=>m(R=>({...R,trainingCenter:C.target.value}))}),e.jsx(T,{type:"text",name:"universityStadium_input",id:"universityStadium_input",title:s("stadium_name"),placeholder:s("university_stadium"),value:u.stadium,onChange:C=>m(R=>({...R,stadium:C.target.value}))}),e.jsx(T,{type:"text",name:"universityCoach_input",id:"universityCoach_input",title:s("coach"),placeholder:s("actual_university_coach"),value:u.coach,onChange:C=>m(R=>({...R,coach:C.target.value}))}),e.jsxs(B,{children:[e.jsx(yt,{title:s("current_competitions"),id:"universityCompetitionsHistory",inputtitle:s("competition"),placeholder:s("competition_name"),achievements:g.profile.competitions,onChangeName:C=>D(R=>({...R,name:C.target.value})),onChangeDate:C=>D(R=>({...R,earliestDate:C.target.value})),nameValue:S.name,DateValue:S.earliestDate,onClick:C=>E(C)}),e.jsx(yt,{title:s("titles_and_awards_history"),id:"universityAwardsHistory",inputtitle:s("competition_award"),placeholder:s("competition_award_name"),achievements:g.profile.awards,onChangeName:C=>f(R=>({...R,name:C.target.value})),onChangeDate:C=>f(R=>({...R,earliestDate:C.target.value})),nameValue:d.name,dateValue:d.date,onClick:C=>A(C)})]}),e.jsx(xe,{name:"editUniversityProfile_submit",id:"editUniversityProfile_submit",value:s("confirm_changes")})]})})})})}const sd=_.section`
  ${({theme:t})=>h`
  
  display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     width: 100%;
     height: 100%;

     & ${W} {
      > ${Ze} {
      width: 50%;

      @media ${t.medias.smallpc} {
        width: 100%;
      }
     } 
     }
    }
  `}
`;function id(){const t=Ce(),{t:s}=w(),i=p.useContext(X),{s2tState:r,s2tDispatch:l}=i,n=p.useContext(et),{staffState:g,staffDispatch:x}=n,[u,m]=p.useState({...g.profile.info});p.useEffect(()=>{(()=>{const j=new Date(u.birthDate);if(j){const ie=new Date-j,L=Math.floor(ie/(1e3*60*60*24*365.25));m(Y=>({...Y,age:L}))}})()},[u.birthDate]);const[d,f]=p.useState({name:"",earliestDate:"",latestDate:""}),A=async b=>{b.preventDefault(),b.stopPropagation(),d.name&&d.earliestDate?(kc(x,d),f({name:"",earliestDate:"",latestDate:""})):console.error(s("fill_all_fields"))},[S,D]=p.useState({name:"",date:""}),E=async b=>{b.preventDefault(),b.stopPropagation(),S.name&&S.date?(Ac(x,S),D({name:"",date:""})):console.error(s("fill_all_fields"))},[V,C]=p.useState({name:"",earliestDate:"",latestDate:""}),R=async b=>{b.preventDefault(),b.stopPropagation(),V.name&&V.earliestDate?(Sc(x,V),C({name:"",earliestDate:"",latestDate:""})):console.error(s("fill_all_fields"))},ne=async b=>{u&&(b.preventDefault(),$c(x,u),t(-1))};return console.log(u),e.jsx(sd,{children:e.jsx(je,{children:e.jsx(we,{children:e.jsxs(me,{onSubmit:ne,children:[e.jsx(k,{text:s("your_profile"),size:o.sizes.xlarge}),e.jsx(H,{title:s("profile_type_question"),id:"staffProfileType",placeholder:s("select_type"),options:r.formOptions.staffProfileType,selectedvalue:u.profileType,onDropdownChange:b=>m(j=>({...j,profileType:b}))}),e.jsx(H,{title:s("which_competitive_level"),id:"staffCompetitiveLevel",placeholder:s("select_level"),options:r.formOptions.competitiveLevels,selectedvalue:u.competitiveLevel,onDropdownChange:b=>m(j=>({...j,competitiveLevel:b}))}),e.jsx(T,{type:"text",name:"staffPrimaryBirthCountry_input",id:"staffPrimaryBirthCountry_input",title:s("primary_nationality"),placeholder:s("your_primary_nationality"),value:u.primaryNationality,onChange:b=>m(j=>({...j,primaryNationality:b.target.value}))}),e.jsx(T,{type:"text",name:"staffSecondaryBirthCountry_input",id:"staffSecondaryBirthCountry_input",title:s("secondary_nationality"),placeholder:s("your_secondary_nationality"),value:u.secondaryNationality,onChange:b=>m(j=>({...j,secondaryNationality:b.target.value}))}),e.jsx(T,{type:"text",name:"staffPassports_input",id:"staffPassports_input",title:s("have_passports_question"),placeholder:s("if_yes_list_the_countries"),value:u.passports,onChange:b=>m(j=>({...j,passports:b.target.value}))}),e.jsx(T,{type:"text",name:"staffPayment_input",id:"staffPayment_input",title:s("payment"),placeholder:s("your_base_payment"),value:u.payment,onChange:b=>m(j=>({...j,payment:b.target.value}))}),e.jsx(T,{type:"text",name:"staffTransferValue_input",id:"staffTransferValue_input",title:s("transfer_value"),placeholder:s("your_transfer_value"),value:u.transferValue,onChange:b=>m(j=>({...j,transferValue:b.target.value}))}),e.jsx(k,{text:s("your_sporting_history"),size:o.sizes.xlarge}),e.jsxs(B,{children:[e.jsx(Et,{title:s("club_history"),id:"staffClubHistory",inputtitle:s("club"),placeholder:s("club_name"),historic:g.profile.clubs,onChangeName:b=>f(j=>({...j,name:b.target.value})),onChangeEarliestDate:b=>f(j=>({...j,earliestDate:b.target.value})),onChangeLatestDate:b=>f(j=>({...j,latestDate:b.target.value||void 0})),nameValue:d.name,earliestDateValue:d.earliestDate,latestDateValue:d.latestDate,onClick:b=>A(b)}),e.jsx(yt,{title:s("titles_and_awards_history"),id:"staffAwardsHistory",inputtitle:s("competition_award"),placeholder:s("competition_award_name"),achievements:g.profile.awards,onChangeName:b=>D(j=>({...j,name:b.target.value})),onChangeDate:b=>D(j=>({...j,date:b.target.value})),nameValue:S.name,dateValue:S.date,onClick:b=>E(b)})]}),e.jsx(k,{text:s("your_academic_history"),size:o.sizes.xlarge}),e.jsx(Et,{title:s("certifications"),id:"staffAcademicHistory",inputtitle:s("certification"),placeholder:s("certification_name"),historic:g.profile.studies,onChangeName:b=>C(j=>({...j,name:b.target.value})),onChangeEarliestDate:b=>C(j=>({...j,earliestDate:b.target.value})),onChangeLatestDate:b=>C(j=>({...j,latestDate:b.target.value||void 0})),nameValue:V.name,earliestDateValue:V.earliestDate,latestDateValue:V.latestDate,onClick:b=>R(b)}),e.jsx(xe,{name:"editOStaffProfile_submit",id:"editStaffProfile_submit",value:s("confirm_changes")})]})})})})}const rd=_.section`
  ${({theme:t})=>h`
  
  display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     width: 100%;
     height: 100%;

     & ${W} {
      > ${Ze} {
      width: 50%;

      @media ${t.medias.smallpc} {
        width: 100%;
      }
     } 
     }
    }
  `}
`,ur="change_profile_info",mr="add_video",_r="remove_video",ad=(t,s)=>{t({type:ur,payload:s})},cs=(t,s)=>{t({type:mr,payload:s})},nd=(t,s)=>{t({type:_r,payload:s})},$t=p.createContext();function ld(){const t=Ce(),{t:s}=w();p.useContext(X);const i=p.useContext($t),{fanState:r,fanDispatch:l}=i,[n,g]=p.useState({...r.profile.info}),x=async u=>{n&&(u.preventDefault(),ad(l,n),t(-1))};return e.jsx(rd,{children:e.jsx(je,{children:e.jsx(we,{children:e.jsxs(me,{onSubmit:x,children:[e.jsx(k,{text:s("your_profile"),size:o.sizes.xlarge}),e.jsx(T,{type:"text",name:"fanBirthCountry_input",id:"fanBirthCountry_input",title:s("nationality"),placeholder:s("your_nationality"),value:n.nationality,onChange:u=>g(m=>({...m,nationality:u.target.value}))}),e.jsx(xe,{name:"editFanProfile_submit",id:"editFanProfile_submit",value:s("confirm_changes")})]})})})})}const cd=_.section`
  ${({theme:t})=>h`
  
  display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     width: 100%;
     height: 100%;

     & ${W} {
      > ${Ze} {
      width: 50%;

      @media ${t.medias.smallpc} {
        width: 100%;
      }
     } 
     }
    }
  `}
`,kt=p.createContext(),hr="change_profile_info",dd="add_competition_history",pd="remove_competition_history",ud="add_award_history",md="remove_award_history",gr="add_video",xr="remove_video",_d="reveal_player",hd=(t,s)=>{t({type:hr,payload:s})},ds=(t,s)=>{t({type:gr,payload:s})},gd=(t,s)=>{t({type:xr,payload:s})};function xd(){const t=Ce(),{t:s}=w(),i=p.useContext(X),{s2tState:r,s2tDispatch:l}=i,n=p.useContext(kt),{agencyState:g,agencyDispatch:x}=n,[u,m]=p.useState({...g.profile.info}),d=async f=>{u&&(f.preventDefault(),hd(x,u),t(-1))};return e.jsx(cd,{children:e.jsx(je,{children:e.jsx(we,{children:e.jsxs(me,{onSubmit:d,children:[e.jsx(k,{text:s("your_profile"),size:o.sizes.xlarge}),e.jsx(H,{title:s("your_agency_type_question"),id:"agencyProfileType",placeholder:s("select_type"),options:r.formOptions.agencyProfileType,selectedvalue:u.profileType,otheroption:!0,onDropdownChange:f=>m(A=>({...A,profileType:f}))}),e.jsx(xe,{name:"editAgencyProfile_submit",id:"editAgencyProfile_submit",value:s("confirm_changes")})]})})})})}const yd=_.section`
  ${({theme:t})=>h`
  
  display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     width: 100%;
     height: 100%;

     & ${W} {
      > ${Ze} {
      width: 50%;

      @media ${t.medias.smallpc} {
        width: 100%;
      }
     } 
     }
    }
  `}
`,Yt=p.createContext(),fd="change_profile_info",bd="add_competition_history",vd="remove_competition_history",wd="add_award_history",jd="remove_award_history",yr="add_video",fr="remove_video",$d="reveal_player",ps=(t,s)=>{t({type:yr,payload:s})},kd=(t,s)=>{t({type:fr,payload:s})};function Cd(){Ce();const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s,l=p.useContext(Yt),{leagueState:n,leagueDispatch:g}=l,[x,u]=p.useState({...n.profile.info});return e.jsx(yd,{children:e.jsx(je,{children:e.jsx(we,{children:e.jsxs(me,{children:[e.jsx(k,{text:t("your_profile"),size:o.sizes.xlarge}),e.jsx(T,{type:"text",name:"leagueRepresentative_input",id:"leagueRepresentative_input",title:t("representative"),placeholder:t("representative_league_name"),value:x.representative,onChange:m=>u(d=>({...d,representative:m.target.value}))}),e.jsx(T,{type:"text",name:"leagueCountry_input",id:"leagueCountry_input",title:t("country"),placeholder:t("which_country_league"),value:x.country,onChange:m=>u(d=>({...d,country:m.target.value}))}),e.jsx(H,{title:t("which_league_competitive_level"),id:"leagueCompetitiveLevel",placeholder:t("select_level"),options:i.formOptions.competitiveLevels,selectedvalue:x.competitiveLevel,onDropdownChange:m=>u(d=>({...d,competitiveLevel:m}))}),e.jsx(T,{type:"date",name:"leagueFoundationDate_input",id:"leagueFoundationDate_input",title:t("foundation_date"),value:x.foundationDate,onChange:m=>u(d=>({...d,foundationDate:m.target.value}))}),e.jsx(T,{type:"text",name:"leagueCountry_input",id:"leagueCountry_input",title:t("country"),placeholder:t("which_country_league"),value:x.country,onChange:m=>u(d=>({...d,country:m.target.value}))}),e.jsx(T,{type:"text",name:"leagueState_input",id:"leagueState_input",title:t("state"),placeholder:t("which_state_league"),value:x.state,onChange:m=>u(d=>({...d,state:m.target.value}))}),e.jsx(xe,{name:"editLeagueProfile_submit",id:"editLeagueProfile_submit",value:t("confirm_changes")})]})})})})}const Sd=_.section`
  ${({theme:t})=>h`
  
  display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     width: 100%;
     height: 100%;

     & ${W} {
      > ${Ze} {
      width: 50%;

      @media ${t.medias.smallpc} {
        width: 100%;
      }
     } 
     }
    }
  `}
`,Oo=p.createContext(),br="change_profile_info",vr="add_club_history",Td="remove_club_history",wr="add_academic_history",Ad="remove_academic_history",jr="add_award_history",Pd="remove_award_history",Ed="add_video",zd="remove_video",Dd=(t,s)=>{t({type:br,payload:s})},qd=(t,s)=>{t({type:vr,payload:s})},Id=(t,s)=>{t({type:wr,payload:s})},Rd=(t,s)=>{t({type:jr,payload:s})};function Od(){const t=Ce(),{t:s}=w(),i=p.useContext(X),{s2tState:r,s2tDispatch:l}=i,n=p.useContext(Oo),{businessManState:g,businessManDispatch:x}=n,[u,m]=p.useState({...g.profile.info});p.useEffect(()=>{(()=>{const j=new Date(u.birthDate);if(j){const ie=new Date-j,L=Math.floor(ie/(1e3*60*60*24*365.25));m(Y=>({...Y,age:L}))}})()},[u.birthDate]);const[d,f]=p.useState({name:"",earliestDate:"",latestDate:""}),A=async b=>{b.preventDefault(),b.stopPropagation(),d.name&&d.earliestDate?(qd(x,d),f({name:"",earliestDate:"",latestDate:""})):console.error(s("fill_all_fields"))},[S,D]=p.useState({name:"",date:""}),E=async b=>{b.preventDefault(),b.stopPropagation(),S.name&&S.date?(Rd(x,S),D({name:"",date:""})):console.error(s("fill_all_fields"))},[V,C]=p.useState({name:"",earliestDate:"",latestDate:""}),R=async b=>{b.preventDefault(),b.stopPropagation(),V.name&&V.earliestDate?(Id(x,V),C({name:"",earliestDate:"",latestDate:""})):console.error(s("fill_all_fields"))},ne=async b=>{u&&(b.preventDefault(),Dd(x,u),t(-1))};return e.jsx(Sd,{children:e.jsx(je,{children:e.jsx(we,{children:e.jsxs(me,{onSubmit:ne,children:[e.jsx(k,{text:s("your_profile"),size:o.sizes.xlarge}),e.jsx(H,{title:s("profile_type_question"),id:"businessManProfileType",placeholder:s("select_type"),options:r.formOptions.businessManProfileType,selectedvalue:u.profileType,onDropdownChange:b=>m(j=>({...j,profileType:b}))}),e.jsx(H,{title:s("which_competitive_level"),id:"businessManCompetitiveLevel",placeholder:s("select_level"),options:r.formOptions.competitiveLevels,selectedvalue:u.competitiveLevel,onDropdownChange:b=>m(j=>({...j,competitiveLevel:b}))}),e.jsx(T,{type:"text",name:"businessManPrimaryBirthCountry_input",id:"businessManPrimaryBirthCountry_input",title:s("primary_nationality"),placeholder:s("your_primary_nationality"),value:u.primaryNationality,onChange:b=>m(j=>({...j,primaryNationality:b.target.value}))}),e.jsx(T,{type:"text",name:"businessManSecondaryBirthCountry_input",id:"businessManSecondaryBirthCountry_input",title:s("secondary_nationality"),placeholder:s("your_secondary_nationality"),value:u.secondaryNationality,onChange:b=>m(j=>({...j,secondaryNationality:b.target.value}))}),e.jsx(T,{type:"text",name:"businessManPassports_input",id:"businessManPassports_input",title:s("have_passports_question"),placeholder:s("if_yes_list_the_countries"),value:u.passports,onChange:b=>m(j=>({...j,passports:b.target.value}))}),e.jsx(T,{type:"text",name:"businessManPayment_input",id:"businessManPayment_input",title:s("payment"),placeholder:s("your_base_payment"),value:u.payment,onChange:b=>m(j=>({...j,payment:b.target.value}))}),e.jsx(T,{type:"text",name:"businessManTransferValue_input",id:"businessManTransferValue_input",title:s("transfer_value"),placeholder:s("your_transfer_value"),value:u.transferValue,onChange:b=>m(j=>({...j,transferValue:b.target.value}))}),e.jsx(k,{text:s("your_sporting_history"),size:o.sizes.xlarge}),e.jsxs(B,{children:[e.jsx(Et,{title:s("club_history"),id:"businessManClubHistory",inputtitle:s("club"),placeholder:s("club_name"),historic:g.profile.clubs,onChangeName:b=>f(j=>({...j,name:b.target.value})),onChangeEarliestDate:b=>f(j=>({...j,earliestDate:b.target.value})),onChangeLatestDate:b=>f(j=>({...j,latestDate:b.target.value||void 0})),nameValue:d.name,earliestDateValue:d.earliestDate,latestDateValue:d.latestDate,onClick:b=>A(b)}),e.jsx(yt,{title:s("titles_and_awards_history"),id:"businessManAwardsHistory",inputtitle:s("competition_award"),placeholder:s("competition_award_name"),achievements:g.profile.awards,onChangeName:b=>D(j=>({...j,name:b.target.value})),onChangeDate:b=>D(j=>({...j,date:b.target.value})),nameValue:S.name,dateValue:S.date,onClick:b=>E(b)})]}),e.jsx(k,{text:s("your_academic_history"),size:o.sizes.xlarge}),e.jsx(Et,{title:s("certifications"),id:"businessManAcademicHistory",inputtitle:s("certification"),placeholder:s("certification_name"),historic:g.profile.studies,onChangeName:b=>C(j=>({...j,name:b.target.value})),onChangeEarliestDate:b=>C(j=>({...j,earliestDate:b.target.value})),onChangeLatestDate:b=>C(j=>({...j,latestDate:b.target.value||void 0})),nameValue:V.name,earliestDateValue:V.earliestDate,latestDateValue:V.latestDate,onClick:b=>R(b)}),e.jsx(xe,{name:"editOBusinessManProfile_submit",id:"editBusinessManProfile_submit",value:s("confirm_changes")})]})})})})}function ot({type:t}){const s=t.toLowerCase();return e.jsxs(uc,{children:[s==="club"&&e.jsx(Wc,{}),s==="player"&&e.jsx(ed,{}),s==="league"&&e.jsx(Cd,{}),s==="university"&&e.jsx(od,{}),s==="agency"&&e.jsx(xd,{}),s==="staff"&&e.jsx(id,{}),s==="fan"&&e.jsx(ld,{}),s==="business-man"&&e.jsx(Od,{})]})}ot.propTypes={type:a.string};const Nd=_.section`
  ${({theme:t})=>h`

  ${Ae} {
      justify-content: flex-end;

      @media ${t.medias.tablet} {
        justify-content: center;
      }

      @media ${t.medias.mobile} {
        justify-content: flex-end;
      }

      ${ge} {
        @media ${t.medias.mobile} {
         display: none;
        }
      }

      ${M} {
        display: none;
        animation: none;

        @media ${t.medias.mobile} {
          display: flex;
        }
      }
    }

    ${oe} {
      & ${de} {
        height: 30px;
      }
    }

    > ${oe} {
      display: none;
      flex-direction: column;
      gap: ${t.spacings.small};
      padding: ${t.spacings.medium};

      @media ${t.medias.mobile} {
        display: flex;
      }
    }
      
    >${ae} {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      gap: ${t.spacings.xlarge};
      padding: ${t.spacings.medium};


      @media ${t.medias.tablet} {
        width: 100%;
      }
    }

  `}
`;function us(){const{t}=w();return e.jsxs($e,{children:[e.jsxs(c,{path:"",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(zt,{}),t("home")]}),e.jsxs(c,{path:"profile",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(ft,{}),t("profile")]}),e.jsxs(c,{path:"my-squad",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(io,{}),t("my_squad")]}),e.jsxs(c,{path:"opportunities",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(bt,{}),t("oppotunities")]}),e.jsxs(c,{path:"my-opportunities",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(fo,{}),t("my_opportunities")]}),e.jsxs(c,{path:"scouts",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Dt,{}),t("scouts")]}),e.jsxs(c,{path:"clubs",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(qt,{}),t("clubs")]}),e.jsxs(c,{path:"players",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(bo,{}),t("players")]}),e.jsxs(c,{path:"favorites",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(It,{}),t("favorites")]}),e.jsxs(c,{path:"events",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Rt,{}),t("events")]}),e.jsxs(c,{path:"contacts",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Ot,{}),t("contacts")]}),e.jsxs(c,{path:"friends",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(vt,{}),t("friends")]}),e.jsxs(c,{path:"store",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Nt,{}),t("store")]}),e.jsxs(c,{path:"s2t+",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Mt,{}),t("t2s+")]}),e.jsxs(c,{path:"my-affiliates",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Lt,{}),t("my_affiliates")]}),e.jsxs(c,{color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(te,{}),t("close")]})]})}us.propTypes={};function Md(){const{t}=w(),s=p.useContext(Fe),{clubState:i,clubDispatch:r}=s,[l,n]=p.useState(!1),[g,x]=p.useState(!1);if(!i.profile||!i.profile.banner)return e.jsx("div",{children:"Loading..."});const[u,m]=p.useState(!1),[d,f]=p.useState(!1),A=()=>{f(!d),m(!1)},S=()=>{m(!u),f(!1)};return e.jsxs(Nd,{children:[e.jsxs(Pe,{children:[e.jsxs(be,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/club-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),g?e.jsx(q,{name:t("menu"),onclick:()=>x(!g),children:e.jsx(te,{})}):e.jsx(q,{name:t("close_menu"),onclick:()=>x(!g),children:e.jsx(_e,{})})]}),g&&e.jsxs(ee,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/player-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),e.jsxs(Je,{backgroundimagesrc:i.profile.banner.backgroundImageSrc,ownerview:!0,children:[e.jsx(We,{imagesrc:i.profile.banner.profileImageSrc,badge:i.profile.banner.badge,ownerview:!0,type:i.profile.info.profileType}),e.jsx(ct,{name:i.profile.banner.name}),e.jsxs(B,{children:[e.jsx($,{path:"profile-edit",text:t("edit_profile"),bgcolor:o.colors.primary,bghover:o.colors.black,textcolor:o.colors.black,texthover:o.colors.primary,border:o.colors.black,borderhover:o.colors.primary}),e.jsx(q,{active:u,hovercolor:o.colors.primary,name:t("settings"),onclick:S,children:e.jsx(wt,{})}),e.jsx(q,{active:d,hovercolor:o.colors.primary,name:t("share"),onclick:A,children:e.jsx(nt,{})}),u&&e.jsx(ee,{onclick:()=>m(!1),children:e.jsx(dt,{})}),d&&e.jsx(ee,{onclick:()=>f(!1),children:e.jsx(Ke,{})})]})]}),e.jsx(Ge,{children:e.jsx(ti,{})}),l?e.jsx(Xe,{onclick:()=>n(!l),children:e.jsx(us,{})}):e.jsx(Qe,{name:t("menu"),onclick:()=>n(!l),children:e.jsx(_e,{})}),e.jsx(pt,{children:e.jsx(Vt,{children:e.jsx(ae,{color:o.colors.black,children:e.jsx(Ne,{})})})}),e.jsx(ce,{items:i.benefits,title:t("my_benefits")})]})}const Ld=_.article`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.medium};
    width: 100%;
    height: 100%;
  `}
`,Fd=_.div`
  ${({theme:t})=>h`
   width: 100%;
   height: 100%;
   animation: ${I} 500ms ease-out;
   display: flex;
   flex-direction: column;
   gap: ${t.spacings.medium};

   > ${Se} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    animation: ${ue} 500ms;

    @media ${t.medias.smallpc} {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    @media ${t.medias.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    @media ${t.medias.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }
    }
  `}
`,Vd=_(so)`
  ${({theme:t})=>h`
    font-family: ${t.fonts.primary};
    list-style: none;
    cursor: pointer;
    user-select: none;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.small};

    margin-top: ${t.spacings.small};
    
    transition: all 500ms ease-in-out;

    .page-item {
      height: 30px;
      width: 30px;
      font-size: ${t.sizes.medium};
      display: flex;
      justify-content: center;
      align-items: center;
      border: ${t.borders.white};
      border-radius: 50%;
      transition: all 500ms ease-in-out;

      &:hover {
        border: ${t.borders.primary};
      }

      @media ${t.medias.mobile} {
        height: 20px;
        width: 20px;
        font-size: ${t.sizes.small};
      }

      @media ${t.medias.smallmobile} {
        height: 15px;
        width: 15px;
        font-size: ${t.sizes.xsmall};
      }
      

    }

    .page-link {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }

    .active {
      border: ${t.borders.primary};
      transform: scale(1.2);
      color: ${t.colors.primary};
      box-shadow: 0px 0px 5px 1px ${t.colors.primary};

    }

    .previous, .next {
      transition: all 500ms ease-in-out;
      color: ${t.colors.white};
      
      &:hover {
        color: ${t.colors.primary};
      }

      @media ${t.medias.mobile} {
        font-size: ${t.sizes.xsmall};
      }

      @media ${t.medias.smallmobile} {
        font-size: ${t.sizes.xxsmall};
      }
   
    }

    .break {
  
    }

    .disabled {
      opacity: 0.5;

      &:hover {
        color: ${t.colors.white};
      }
    }
  `}
`,Ud=_.div`
  ${({theme:t})=>h`
    /* background-image: linear-gradient(to bottom, ${t.colors.lightsecondary}, ${t.colors.lightprimary}); */
    color: ${t.colors.white};
    font-family: ${t.fonts.primary};
    border-radius: 15px;
    animation: ${ue} 1000ms;
    position: relative;

    width: 100%;
    height: 100%;

    transition: all 500ms ease-in-out;

    ${wi} {
    position: absolute;
    right: 5px;
    top: 5px;
    border-radius: 50%;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${t.medias.mobile} {
      width: 20px;
      height: 20px;
    }

    }


    ${Z} {
      width: 100%;
      height: 100%;
    }

    ${os} {
      font-weight: 600;
    }

    ${pe} {
      font-size: ${t.sizes.xlarge};

    @media ${t.medias.tablet} {
      font-size: ${t.sizes.large};
    }

    @media ${t.medias.mobile} {
      font-size: ${t.sizes.small};
    }


    }

    ${se} {
      user-select: none;
    }



    &:hover {
      box-shadow: 0px 0px 10px 1px ${t.colors.white} inset;

      & img {
       filter: opacity(0.15);
      }
    }
  `}
`,Hd=_.img`
  ${({theme:t,islocked:s})=>h`
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 500ms ease-in-out;
    filter: opacity(0.3);
  `}
`,Bd=_.div`
  ${({theme:t,islocked:s})=>h`
    border-radius: 15px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.small};
    position: absolute;
    transition: all 500ms ease-in-out;
  `}
`;function $r({path:t,profileimage:s,position:i,age:r,bestleg:l,name:n,weight:g,height:x,category:u,favorite:m}){const{t:d}=w();return e.jsxs(Ud,{children:[m&&e.jsx(Ht,{}),e.jsxs(c,{path:t,children:[e.jsx(Hd,{src:s,alt:n}),e.jsxs(Bd,{children:[e.jsxs(Pt,{children:[e.jsx(Q,{infotitle:d("position"),info:i}),e.jsx(Q,{infotitle:d("age"),info:`${r} Anos`}),e.jsx(Q,{infotitle:d("best_leg"),info:l})]}),e.jsx(k,{text:n,uppercase:!0}),e.jsxs(Pt,{children:[e.jsx(Q,{infotitle:d("weight"),info:`${g} KG`}),e.jsx(Q,{infotitle:d("height"),info:`${x} M`}),e.jsx(Q,{infotitle:d("category"),info:u})]})]})]})]})}$r.propTypes={path:a.string,profileimage:a.string,position:a.string,age:a.number,bestleg:a.string,name:a.string,weight:a.number,height:a.number,category:a.string,favorite:a.bool};const Yd=_.div`
  ${({theme:t,isopen:s})=>h`
    animation: ${I} 500ms;
    width: 100%;
    border-radius: 12px;

    & ${M} {
      animation: none;
    }


    & ${Ft}, ${At} {
      @media ${t.medias.mobile} {
       font-size: ${t.sizes.xsmall};
      }
    }

    & ${W} {
      width: 100%;
      justify-content: space-between;

      @media ${t.medias.smallpc} {
        flex-direction: row;
      }

      @media ${t.medias.tablet} {
        flex-direction: column;
      }

      & ${Kt} {
         min-width: 210px;
      }
    }

    & ${M} {
      > svg {
        color: ${s?t.colors.primary:"none"};

        &:hover {
          color: ${t.colors.secondary};
        }
      }
    }


    ${Se} {
    grid-gap: ${t.spacings.small};
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

    @media ${t.medias.smallpc} {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }

    @media ${t.medias.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    }

    @media ${t.medias.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }
   }
  `}
`;function kr(){const t=p.useContext(X),{s2tState:s,s2tDispatch:i}=t,{t:r}=w(),[l,n]=p.useState(!0),[g,x]=p.useState({ageCategory:"",position:"",bestLeg:"",birthCountry:"",operationCountry:"",league:"",competitiveLevel:"",competitiveCategory:"",avaliability:"",minimumAge:"",maximumAge:"",minimumPayment:"",maximumPayment:"",minimumTransferValue:"",maximumTransferValue:"",passport:"",hasManager:""}),[u,m]=p.useState("");return p.useEffect(()=>{Ml(i,g)},[g]),p.useEffect(()=>{Vl(i,u)},[u]),e.jsx(Yd,{isopen:l?"isopen":void 0,children:e.jsx(je,{children:e.jsxs(me,{children:[e.jsxs(B,{children:[e.jsx(H,{id:"competitiveCategory",options:s.formOptions.competitiveCategory,placeholder:r("competitive_category"),onDropdownChange:d=>x(f=>({...f,competitiveCategory:d}))}),e.jsxs(qo,{children:[e.jsx(q,{onclick:()=>n(!l),name:"Filtrar oportunidades",children:e.jsx(Uo,{})}),e.jsx(Io,{id:"searchPlayers",name:"searchPlayers",onChange:d=>m(d.target.value)})]})]}),e.jsxs(Bt,{isopen:l,children:[e.jsx(H,{id:"filterCompetitiveLevel",placeholder:r("competitive_level"),options:s.formOptions.competitiveLevels,otheroption:!0,onDropdownChange:d=>x(f=>({...f,competitiveLevel:d}))}),e.jsx(H,{id:"filterAgeCategory",placeholder:r("category"),options:s.formOptions.ageCategory,onDropdownChange:d=>x(f=>({...f,ageCategory:d}))}),e.jsx(H,{placeholder:r("position"),id:"filterPosition",options:s.formOptions.positions,onDropdownChange:d=>x(f=>({...f,position:d}))}),e.jsx(H,{id:"filterLeague",placeholder:r("league"),options:s.formOptions.league,otheroption:!0,onDropdownChange:d=>x(f=>({...f,league:d}))}),e.jsx(H,{id:"filterLeg",placeholder:r("best_leg"),options:s.formOptions.leg,onDropdownChange:d=>x(f=>({...f,bestLeg:d}))}),e.jsx(H,{id:"filterAvaliability",placeholder:r("avaliability"),options:s.formOptions.avaliability,onDropdownChange:d=>x(f=>({...f,avaliability:d}))}),e.jsx(H,{id:"hasManager",placeholder:r("has_manager_question"),options:s.formOptions.manager,onDropdownChange:d=>x(f=>({...f,hasManager:d}))}),e.jsx(T,{type:"number",name:"filterMinimumAge_input",id:"filterMinimumAge_input",placeholder:r("minimum_age"),onChange:d=>x(f=>({...f,minimumAge:d.target.value}))}),e.jsx(T,{type:"number",name:"filterMaximumAge_input",id:"filterMaximumAge_input",placeholder:r("maximum_age"),onChange:d=>x(f=>({...f,maximumAge:d.target.value}))}),e.jsx(T,{type:"number",name:"filterMinimumPayment_input",id:"filterMinimumPayment_input",placeholder:r("minimum_payment"),onChange:d=>x(f=>({...f,minimumPayment:d.target.value}))}),e.jsx(T,{type:"number",name:"filterMaximumPayment_input",id:"filterMaximumPayment_input",placeholder:r("maximum_payment"),onChange:d=>x(f=>({...f,maximumPayment:d.target.value}))}),e.jsx(T,{type:"number",name:"filterMinimumTransferValue_input",id:"filterMinimumTransferValue_input",placeholder:r("minimum_transfer_value"),onChange:d=>x(f=>({...f,minimumTransferValue:d.target.value}))}),e.jsx(T,{type:"number",name:"filterMaximumTransferValue_input",id:"filterMaximumTransferValue_input",placeholder:r("maximum_transfer_value"),onChange:d=>x(f=>({...f,maximumTransferValue:d.target.value}))}),e.jsx(T,{type:"text",name:"filterBirthCountry_input",id:"filterBirthCountry_input",placeholder:r("birth_country"),onChange:d=>x(f=>({...f,birthCountry:d.target.value}))}),e.jsx(T,{type:"text",name:"filterOperationCountry_input",id:"filterOperationCountry_input",placeholder:r("operation_country"),onChange:d=>x(f=>({...f,operationCountry:d.target.value}))}),e.jsx(T,{type:"text",name:"filterPassport_input",id:"filterPassport_input",placeholder:r("passport"),onChange:d=>x(f=>({...f,passport:d.target.value}))})]})]})})})}kr.propTypes={};function eo({title:t,items:s,publicview:i,ownerview:r}){const{t:l}=w(),[n,g]=p.useState(0),[x,u]=p.useState(8),m=n*x,d=p.useMemo(()=>s?s.slice(m,m+x):[],[s,n,x]),f=({selected:S})=>{g(S)};p.useEffect(()=>{const S=()=>{u(window.innerWidth<768?4:8)};return window.addEventListener("resize",S),S(),()=>window.removeEventListener("resize",S)},[]);const A=()=>{window.scrollTo({top:200,behavior:"smooth"})};return e.jsxs(Fd,{children:[e.jsx(G,{text:t,uppercase:!0}),i&&e.jsx(kr,{}),d&&d.length>0?e.jsx(Se,{children:d.map(S=>e.jsx($r,{path:S.path,profileimage:S.profileImageSrc,position:S.position,age:S.age,bestleg:S.bestLeg,name:S.name,weight:S.weight,height:S.height,category:S.category,id:S.playerId,favorite:i},S.playerId))}):e.jsx(y,{text:l("no_players")}),d.length>0&&e.jsx(Vd,{previousLabel:l("previous"),nextLabel:l("next"),breakLabel:"...",pageCount:s?Math.ceil(s.length/x):0,pageRangeDisplayed:3,marginPagesDisplayed:1,onPageChange:f,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",activeClassName:"active",onClick:A})]})}eo.propTypes={title:a.string,items:a.arrayOf(a.object),publicview:a.bool,ownerview:a.bool};const Wd=_.div`
  ${({theme:t})=>h`
   & ${ao} {

      & ${M}{
        & svg {
          width: 40%;
        }
      }
      
    }
  `}  
`,Gd=_.div`
  ${({theme:t})=>h`


   .swiper-slide {
     height: 360px;
     border-radius: 15px;

      @media (max-width: 1050px) {
        height: 320px;
      }

      @media ${t.medias.smallpc} { 
        height: 260px;
      }

      @media ${t.medias.tablet} { 
        height: 380px;
      }


      @media (max-width: 550px) { 
        height: 300px;
      }

      @media ${t.medias.mobile} { 
        height: 260px;
      }

      @media ${t.medias.smallmobile} { 
        height: 200px;
      }

      @media (max-width: 280px) { 
        height: 160px;
      }
   }
 `}
`,Xd=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    
    & img{
      object-fit: fill;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      transition: all 500ms ease-in-out;
      box-sizing: border-box;
      border: ${t.borders.xtransparent};
    }
  `}
`,Qd=_.div`
  ${({theme:t})=>h`

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: ${t.spacings.xsmall};
    height: 30px;
    position: absolute;
    right: 5px;
    top: 5px;
    border-radius: 15px;
    z-index: 100;

    ${M} {
      width: auto;
      height: 100%;
      
      > svg {
        border-radius: 50%;
        padding: 2px;
        background: rgba(0, 0, 0, 0.5);

        &:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
        }

        @media ${t.medias.mobile} {
          width: 25px;
          height: 25px;
        }
      }
  }
  
 `}
`,Jd=_.div`
  ${({theme:t})=>h`

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: ${t.spacings.xsmall};
    height: 30px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    border-radius: 15px;
    z-index: 100;

    ${M} {
    width: auto;
    height: 100%;

    > svg {
     border-radius: 50%;
     background: rgba(0, 0, 0, 0.5);

      &:hover {
        background: rgba(0, 0, 0, 0.8);
        transform: scale(1.1);
      }

      @media ${t.medias.mobile} {
       width: 25px;
       height: 25px;
      }
    }
 `}
`,Kd=_.div`
  ${({theme:t})=>h`
   background: rgba(0,0,0,0.7);
   animation: ${ue} 700ms;

   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 1000;

   display: flex;
   align-items: center;
   justify-content: center;

   width: 100%;
   height: 100%;
  `}
`,Zd=_.div`
  ${({theme:t})=>h`
    border-radius: 15px;
    position: relative;
    transition: all 500ms ease-in-out; 

    ${M} {
      z-index: 10;
      position: absolute;
      top: 5px;
      right: 10px;
      animation: none;
    }
  `}
`,ep=_.div`
  ${({theme:t})=>h`
    & img {
      max-width: 100%;
      max-height: 700px;
      user-select: none;
      border-radius: 12px;
    }
  `}
`;function ms({onclick:t,imagesrc:s}){const{t:i}=w();return e.jsx(e.Fragment,{children:s&&e.jsx(Kd,{children:e.jsxs(Zd,{children:[e.jsx(q,{name:i("close_image"),hovercolor:o.colors.red,onclick:t,children:e.jsx(te,{})}),e.jsx(ep,{children:e.jsx(nn,{children:e.jsx("img",{alt:"",src:s})})})]})})})}ms.propTypes={imagesrc:a.string,onclick:a.func};function Cr({items:t,title:s}){const{t:i}=w(),[r,l]=p.useState(""),[n,g]=p.useState(""),x=m=>{g(m.src)},u=m=>{l(r?"":m.id)};return e.jsxs(Wd,{children:[e.jsxs(Gd,{children:[e.jsx(G,{text:s,uppercase:!0}),e.jsx(ze,{slidesPerView:2,spaceBetween:15,navigation:!0,zoom:!0,lazy:"true",breakpoints:{768:{slidesPerView:2},0:{slidesPerView:1}},children:t&&t.map(m=>e.jsx(he,{children:e.jsxs(Xd,{children:[e.jsxs(Qd,{children:[e.jsx(Do,{isreporting:r===m.id,onclick:()=>u(m)}),e.jsx(Ht,{isfavorite:m.isfavorite,id:m.id})]}),e.jsx("div",{className:"swiper-zoom-container",children:e.jsx("img",{src:m.src,alt:m.alt})}),e.jsxs(Jd,{children:[e.jsx(Eo,{ratevalue:m.rateValue,mediaid:m.id}),e.jsx(q,{active:n===m.src,name:i("fullscreen"),onclick:()=>x(m),children:e.jsx(Is,{})})]})]})},m.id))})]}),e.jsx(zo,{id:r,onclick:()=>l("")}),e.jsx(ms,{imagesrc:n,onclick:()=>g("")})]})}Cr.propTypes={items:a.arrayOf(a.object).isRequired,title:a.string};function ho(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsxs(Ld,{children:[e.jsx(eo,{title:t("favorite_players"),items:i.users.players,publicview:!0}),e.jsx(Le,{items:i.videos.trending,title:t("trending_videos"),publicview:!0}),e.jsx(Le,{items:i.videos.trending,title:t("favorite_videos"),publicview:!0})]})}ho.propTypes={};const tp=(t,s)=>{switch(s.type){case qc:return{...t,player:[...s.payload]};case Ji:return{...t,profile:{...t.profile,info:s.payload}};case Ki:return{...t,profile:{...t.profile,competitions:[...t.profile.competitions,s.payload]}};case Zi:return{...t,profile:{...t.profile,competitions:t.profile.competitions.filter(i=>i.id!==s.payload.id)}};case er:return{...t,profile:{...t.profile,awards:[...t.profile.awards,s.payload]}};case tr:return{...t,profile:{...t.profile,awards:t.profile.awards.filter(i=>i.id!==s.payload.id)}};case or:return t.profile.videos.some(r=>r.url===s.payload.url)?t:{...t,profile:{...t.profile,videos:[...t.profile.videos,s.payload]}};case sr:return{...t,profile:{...t.profile,videos:t.profile.videos.filter(i=>i.url!==s.payload.url)}};default:return{...t}}},go={profile:{banner:{},info:{},photos:[],videos:[{url:"https://vimeo.com/953545193",id:2},{url:"/assets/videos/silas.mp4",id:1},{url:"https://vimeo.com/953545193",id:3}],competitions:[],awards:[]},benefits:[],friends:[]};function Sr({children:t}){const[s,i]=p.useReducer(tp,go);return e.jsx(Fe.Provider,{value:{clubState:s,clubDispatch:i},children:t})}Sr.propTypes={children:a.node.isRequired};const op=_.article`
  ${({theme:t})=>h`
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: ${t.spacings.large};
  `}
`,sp=_.div`
  ${({theme:t})=>h`

  `}
`;function mt({items:t}){const{t:s}=w(),i={modality:s("modality"),bestLeg:s("best_leg"),competitiveLevel:s("competitive_level"),birthDate:s("birth_date"),ageCategory:s("category"),age:s("age"),birthCity:s("birth"),weight:s("weight"),height:s("height"),nationality:s("nationality"),primaryNationality:s("primary_nationality"),secondaryNationality:s("secondary_nationality"),passports:s("passports"),payment:s("base_payment"),transferValue:s("transfer_value"),primaryPosition:s("main_position"),secondaryPosition:s("secondary_position"),tertiaryPosition:s("tertiary_position"),league:s("league"),hasManager:s("has_manager"),toefl:s("toefl"),act:s("act"),sat:s("sat"),graduationDate:s("graduation_date"),gradePointAverage:s("grade_point_average"),teamModality:s("modality"),representative:s("representative"),foundationDate:s("foundation_date"),country:s("country"),state:s("state"),trainingCenter:s("training_center"),stadium:s("stadium"),coach:s("coach"),competitiveCategory:s("competitive_category"),profileType:s("profile_type")},r={age:s("years"),weight:s("kg"),height:s("meters")};return e.jsx(sp,{children:e.jsx(ts,{children:t&&Object.keys(t).length>0?e.jsx(e.Fragment,{children:Object.keys(t).map(l=>e.jsx(e.Fragment,{children:t[l]&&e.jsx(Q,{infotitle:i[l]||l,info:`${s(t[l])} ${r[l]||""}`,uppercase:!0},l)}))}):e.jsx(y,{text:"Nenhum dado foi encontrado..."})})})}mt.propTypes={items:a.arrayOf(a.object).isRequired};const ip=_.section`
  ${({theme:t})=>h`
    width: 40%;
    margin-bottom: ${t.spacings.small};

    @media ${t.medias.smallpc} {
      width: 100%;
    }
  `}
`,rp=_.div`
  ${({theme:t})=>h`

    color: ${t.colors.white};
    font-family: ${t.fonts.primary};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    width: 100%;
  `}
`,ap=_.img`
  ${({theme:t})=>h`
    border-radius: 50%;
    width: 40px;

    @media${t.medias.mobile} {
      width: 25px;
    }
  `}
`,np=_.h1`
  ${({theme:t})=>h`
    font-weight: 800;
    font-size: ${t.sizes.large};
    text-transform: uppercase;

    width: 45%;
    min-width: 95px;
    margin-right: 20px;

    @media ${t.medias.smallpc} {
      width: 30%;
    }

    @media ${t.medias.tablet} {
     font-size: ${t.sizes.small};
    }

    @media ${t.medias.mobile} {
     font-size: ${t.sizes.xsmall};
    }
    
  `}
`,lp=_.time`
  ${({theme:t})=>h`
    font-weight: 600;
    font-size: ${t.sizes.large};

    @media ${t.medias.tablet} {
     font-size: ${t.sizes.small};
    }

    @media ${t.medias.mobile} {
     font-size: ${t.sizes.xsmall};
    }
  `}
`,cp=_.div`
  ${({theme:t})=>h`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${t.spacings.xsmall};
  gap: ${t.spacings.xsmall};
  `}
`;function _s({children:t}){return e.jsx(cp,{children:t})}_s.propTypes={children:a.node.isRequired};function at({items:t,title:s}){const{t:i}=w(),r=p.useMemo(()=>t?[...t].sort((l,n)=>{var m,d,f,A;const g=S=>{const D=new Date(S);return Number.isNaN(D.getTime())?null:D},x=((m=g(l.earliestDate))==null?void 0:m.getFullYear())||0,u=((d=g(n.earliestDate))==null?void 0:d.getFullYear())||0;if(x===u){const S=((f=g(l.latestDate))==null?void 0:f.getFullYear())||new Date().getFullYear();return(((A=g(n.latestDate))==null?void 0:A.getFullYear())||new Date().getFullYear())-S}return u-x}):[],[t]);return e.jsx(ip,{children:e.jsxs(_s,{children:[e.jsx(G,{text:s,uppercase:!0}),r&&r.length>0?e.jsx(e.Fragment,{children:r.map(l=>e.jsxs(rp,{children:[e.jsx(ap,{src:l.image||"/assets/images/background.png",alt:l.name}),e.jsx(np,{children:l.name}),e.jsxs(lp,{children:["(",new Date(l.earliestDate).getFullYear()," ","-"," ",l.latestDate?new Date(l.latestDate).getFullYear():"Atual",")"]})]},l.id))}):e.jsx(e.Fragment,{children:e.jsx(y,{text:i("data_not_found")})})]})})}const dp=_.div`
  ${({theme:t})=>h`
    z-index: 0;
    padding: ${t.spacings.xsmall};
    > ${ke}{
    }

    & .swiper-slide {
      margin-bottom: ${t.spacings.large};
      @media ${t.medias.smallpc} {
        margin-bottom: ${t.spacings.xxlarge};
      }
    }

  `}
`,pp=_.div`
  ${({theme:t})=>h`
    display: flex;
    gap: ${t.spacings.xsmall};
    align-items: center;
    user-select: none;
  `}
`,up=_.img`
  ${({theme:t})=>h`
    /* border-radius: 50%; */
    width: 40px;

    @media${t.medias.mobile} {
      width: 25px;
    }
  `}
`,ws=_.p`
  ${({theme:t})=>h`
    font-weight: 600;
    font-size: ${t.sizes.medium};
    color: ${t.colors.white};
    font-family: ${t.fonts.primary};
    text-transform: uppercase;

    @media ${t.medias.tablet} {
     font-size: ${t.sizes.small};
    }

    @media ${t.medias.smallmobile} {
     font-size: ${t.sizes.xxsmall};
    }

  `}
`;function Tr({imagesrc:t="",primarytext:s,secondarytext:i=""}){return e.jsxs(pp,{children:[t&&e.jsx(up,{src:t}),e.jsx(ws,{children:s}),i&&e.jsxs(ws,{children:["(",i,")"]})]})}Tr.propTypes={primarytext:a.string.isRequired,imagesrc:a.string,secondarytext:a.oneOfType([a.number,a.string])};function Wt({items:t,title:s}){const{t:i}=w(),r=p.useMemo(()=>t&&t.length>0?t.sort((l,n)=>new Date(l.date)-new Date(n.date)):[],[t]);return e.jsxs(dp,{children:[e.jsx(G,{text:s,uppercase:!0}),e.jsx(ze,{slidesPerView:3,spaceBetween:10,pagination:{type:"bullets",clickable:!0},breakpoints:{931:{slidesPerView:3},601:{slidesPerView:2},0:{slidesPerView:1}},children:r&&r.length>0?e.jsx(e.Fragment,{children:r.map(l=>e.jsx(he,{children:e.jsx(Tr,{imagesrc:l.image||"/assets/images/pngs/trophy.png",primarytext:l.name,secondarytext:l.date?new Date(l.date).getFullYear():""})},l.id))}):e.jsx(y,{text:i("data_not_found")})})]})}Wt.propTypes={items:a.arrayOf(a.object).isRequired,title:a.string};const mp=_.div`
  ${({theme:t})=>h`

  `}  
`,_p=_.div`
  ${({theme:t})=>h`


  .swiper-slide {
     height: 360px;
     border-radius: 15px;

      @media (max-width: 1050px) {
        height: 320px;
      }

      @media ${t.medias.smallpc} { 
        height: 260px;
      }

      @media ${t.medias.tablet} { 
        height: 380px;
      }


      @media (max-width: 550px) { 
        height: 300px;
      }

      @media ${t.medias.mobile} { 
        height: 260px;
      }

      @media ${t.medias.smallmobile} { 
        height: 200px;
      }

      @media (max-width: 280px) { 
        height: 160px;
      }
   }

  ${So} {
     width: 100%;
     height: 100%;
     border: ${t.borders.xwhite};

     border-radius: 12px;
     background: url('/assets/images/backgrounds/ball.png');
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center;
     transition: all 500ms ease-in-out;


      &:hover {
       box-shadow: 0px 0px 5px 2px inset ${t.colors.secondary};
      }

      & svg {
       width: 40%;
      }
   }
 `}
`,hp=_.div`
  ${({theme:t})=>h`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  justify-content: center;
    
  & img, video {
    object-fit: fill;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: all 500ms ease-in-out;
    box-sizing: border-box;
    border: ${t.borders.xtransparent};
  }


  ${ae} {
    display: flex;
    align-items: center;
    justify-content: center;

    ${Ao}{
      max-width: 90%;
    }
  }
  `}
`,gp=_.div`
  ${({theme:t})=>h`

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: ${t.spacings.xsmall};
    height: 30px;
    position: absolute;
    right: 5px;
    top: 5px;
    border-radius: 15px;
    z-index: 100;

    ${M} {
      width: auto;
      height: 100%;
      
      > svg {
        border-radius: 50%;
        padding: 2px;
        background: rgba(0, 0, 0, 0.5);

        &:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
        }

        @media ${t.medias.mobile} {
          width: 25px;
          height: 25px;
        }
      }
  }
  
 `}
`,xp=_.div`
  ${({theme:t})=>h`

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: ${t.spacings.xsmall};
    height: 30px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    border-radius: 15px;
    z-index: 100;

    ${M} {
    width: auto;
    height: 100%;
    

    > svg {
     border-radius: 50%;
     background: rgba(0, 0, 0, 0.5);

      &:hover {
        background: rgba(0, 0, 0, 0.8);
        transform: scale(1.1);
      }

      @media ${t.medias.mobile} {
       width: 25px;
       height: 25px;
      }
    }
 `}
`;function Ct({items:t,title:s}){const[i,r]=p.useState(""),[l,n]=p.useState(""),[g,x]=p.useState(""),{t:u}=w(),{currentUser:m}=Ut(),d=D=>{r(D.src)},f=D=>{n(l===D.id?"":D.id)},A=D=>{n("")},S=async D=>{if(!m){console.error(u("not_logged"));return}const E=D.target.files[0];if(console.log(E),E){const V=new FormData;V.append("image_file",E);try{const C=await Re.post(`https://talent2show.onrender.com/api/userPhotos/${m.id}/upload`,V,{headers:{"Content-Type":"multipart/form-data"}});x(C.data.image_file)}catch(C){console.error(u("image_upload_error"),C)}}};return e.jsxs(mp,{children:[e.jsxs(_p,{children:[e.jsx(G,{text:s,uppercase:!0}),e.jsxs(ze,{slidesPerView:2,spaceBetween:15,navigation:!0,zoom:!0,lazy:"true",breakpoints:{768:{slidesPerView:2},0:{slidesPerView:1}},children:[t&&t.map(D=>e.jsx(he,{lazy:D.type==="video",children:e.jsxs(hp,{children:[e.jsx(gp,{children:e.jsx(q,{onclick:()=>f(D),active:l===D.id,activecolor:o.colors.red,hovercolor:o.colors.lightred,children:e.jsx(Vo,{})})}),e.jsx("div",{className:"swiper-zoom-container",children:e.jsx("img",{src:D.src,alt:D.alt})}),e.jsx(xp,{children:e.jsx(q,{active:i===D.src,name:u("fullscreen"),onclick:()=>d(D),children:e.jsx(Is,{})})}),e.jsx(z,{children:e.jsx(Zt,{isopen:l===D.id,title:u("delete_image_question"),firstoption:u("yes"),secondoption:u("no"),onfirstclick:()=>A(),onsecondclick:()=>f("")})})]})},D.id)),e.jsx(he,{children:e.jsx(To,{onChange:S,id:"addImage",accept:"image/*",hovercolor:o.colors.secondary,name:u("add_photo_button"),children:e.jsx(vo,{})})})]})]}),e.jsx(ms,{imagesrc:i,onclick:()=>r("")})]})}Ct.propTypes={items:a.arrayOf(a.object).isRequired,title:a.string};const yp=_.div`
  ${({theme:t})=>h`
    width: 100%;
  `}  
`,fp=_.div`
  ${({theme:t})=>h`
  width: 100%;


  .swiper-wrapper {
     height: 400px;
     aspect-ratio: 16 / 9; 
     container-type: size;

      @media (max-width: 1050px) {
        height: 350px;
      }

      @media ${t.medias.smallpc} { 
        height: 300px;
      }

      @media ${t.medias.tablet} { 
        height: 440px;
      }

      @media (max-width: 650px) { 
        height: 400px;
      }

      @media (max-width: 570px) { 
        height: 350px;
      }
  
      @media ${t.medias.mobile} { 
        height: 300px;
      }

      @media ${t.medias.smallmobile} { 
        height: 250px;
      }
    }


   .swiper-slide {
     height: 100%;
     width: 100%;
     background: rgba(0,0,0,0.5);
     border: ${t.borders.xwhite};
     border-radius: 12px;
   }

   



   ${oe} {
    position: absolute;
    width: 50%;
    padding: ${t.spacings.medium};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.large};


    ${Se} {
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));

      @media ${t.medias.smallpc} {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      }

      @media ${t.medias.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
      }

      @media ${t.medias.mobile} {
        grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
      }

      @media ${t.medias.smallmobile} {
        grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
      }
    }

    ${Z} {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: ${t.spacings.xsmall};
 
      min-width: 80px;
      font-size: ${t.sizes.medium};

      > img {
        width: 35px;
      }
    }

   
    ${W} {
      justify-content: space-between;
      align-items: center;

      @media ${t.medias.smallpc} {
        flex-direction: row;
      }
 
      ${pe} {
        margin-bottom: 0px;
      }
    }
   }
 `}
`,bp=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${t.spacings.xsmall};
    padding: ${t.spacings.medium};

    ${M} {
    > svg {
        background: ${t.colors.black};
    }
  }


    
    & img, video{
      /* object-fit: contain;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      transition: all 500ms ease-in-out;
      box-sizing: border-box;
      border: ${t.borders.xtransparent}; */
    }

    ${W} {
      justify-content: space-between;
      align-items: center;
      /* gap: ${t.spacings.large} */

      @media ${t.medias.smallpc} {
        flex-direction: row;
      }
    }
  `}
`,vp=_.div`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: ${t.spacings.xsmall};
    height: 30px;
    z-index: 100;

    ${M} {
    width: auto;
    height: 100%;

    > svg {
     border-radius: 50%;
     /* background: rgba(0, 0, 0, 0.5); */

      &:hover {
        /* background: rgba(0, 0, 0, 0.8); */
        box-shadow: none;
        transform: scale(1.1);
      }

      @media ${t.medias.mobile} {
       width: 25px;
       height: 25px;
      }
    }
  }
 `}
`,wp=_.div`
  ${({theme:t})=>h`

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

     > ${M} {
      
      animation: none;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: url('/assets/images/backgrounds/ball.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transition: all 500ms ease-in-out;

      display: flex;
      justify-content: center;
      align-items: center;


      &:hover {
       box-shadow: 0px 0px 5px 2px inset ${t.colors.secondary};
      }

      & svg {
       width: 40%;
      }
     }
  `}  
`,jp=_.div`
  ${({theme:t})=>h`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${t.spacings.large};
    padding: ${t.spacings.xsmall};

    ${Co} {
      &:hover {
       border: ${t.borders.red};
      }

      &:focus {
       border: ${t.borders.red};
       box-shadow: 0px 0px 5px 1px ${t.colors.red};
     }
    }
  `}
`;function Ar({onCloseClick:t,onBackClick:s,profileType:i}){const r=p.useContext(Ie),{playerState:l,playerDispatch:n}=r,g=p.useContext(kt),{agencyState:x,agencyDispatch:u}=g,m=p.useContext(Fe),{clubState:d,clubDispatch:f}=m,A=p.useContext(Yt),{leagueState:S,leagueDispatch:D}=A,E=p.useContext(ut),{universityState:V,universityDispatch:C}=E,R=p.useContext(et),{staffState:ne,staffDispatch:b}=R,j=p.useContext($t),{fanState:N,fanDispatch:ie}=j,{t:L}=w(),[Y,Ve]=p.useState({id:void 0,url:""}),[re,Ue]=p.useState(),Ee=De=>{De.preventDefault();const le={player:()=>is(n,Y),club:()=>ns(f,Y),agency:()=>ds(u,Y),university:()=>ls(C,Y),league:()=>ps(D,Y),fan:()=>cs(ie,Y),staff:()=>rs(b,Y)};if(Y.url){const Gt=le[i];Gt(),t()}else Ue(L("insert_video_url"))};return e.jsxs(jp,{children:[e.jsxs(B,{children:[e.jsx(q,{hovercolor:o.colors.mediumred,onclick:s,children:e.jsx(wo,{})}),e.jsx(k,{text:L("details"),uppercase:!0}),e.jsx(q,{hovercolor:o.colors.mediumred,onclick:t,children:e.jsx(ro,{})})]}),e.jsxs(me,{onSubmit:Ee,children:[e.jsx(T,{name:"youtubeVideoUrl_input",id:"youtubeVideoUrl_input",title:L("url"),type:"text",placeholder:L("youtube_video_url"),value:Y.url,onChange:De=>Ve(le=>({...le,url:De.target.value}))}),e.jsx(xe,{id:"youtubeVideoUpload",name:L("confirm"),value:L("confirm"),bgcolor:o.colors.red,bghover:o.colors.mediumred}),re&&e.jsx(y,{text:re})]})]})}Ar.propTypes={onCloseClick:a.func,onBackClick:a.func,profileType:a.string.isRequired};const $p=_.div`
  ${({theme:t})=>h`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${t.spacings.large};
    padding: ${t.spacings.xsmall};

    ${Co} {
      &:hover {
       border: ${t.borders.orange};
      }

      &:focus {
       border: ${t.borders.orange};
       box-shadow: 0px 0px 5px 1px ${t.colors.orange};
     }
    }

  `}
`;function Pr({onCloseClick:t,onBackClick:s,profileType:i}){const r=p.useContext(Ie),{playerState:l,playerDispatch:n}=r,g=p.useContext(kt),{agencyState:x,agencyDispatch:u}=g,m=p.useContext(Fe),{clubState:d,clubDispatch:f}=m,A=p.useContext(Yt),{leagueState:S,leagueDispatch:D}=A,E=p.useContext(ut),{universityState:V,universityDispatch:C}=E,R=p.useContext(et),{staffState:ne,staffDispatch:b}=R,j=p.useContext($t),{fanState:N,fanDispatch:ie}=j,{t:L}=w(),[Y,Ve]=p.useState({id:void 0,url:""}),[re,Ue]=p.useState(),Ee=De=>{De.preventDefault();const le={player:()=>is(n,Y),club:()=>ns(f,Y),agency:()=>ds(u,Y),university:()=>ls(C,Y),league:()=>ps(D,Y),fan:()=>cs(ie,Y),staff:()=>rs(b,Y)};if(Y.url){const Gt=le[i];Gt(),t()}else Ue(L("insert_video_url"))};return e.jsxs($p,{children:[e.jsxs(B,{children:[e.jsx(q,{hovercolor:o.colors.orange,onclick:s,children:e.jsx(wo,{})}),e.jsx(k,{text:L("details"),uppercase:!0}),e.jsx(q,{hovercolor:o.colors.mediumred,onclick:t,children:e.jsx(ro,{})})]}),e.jsxs(me,{onSubmit:Ee,children:[e.jsx(T,{name:"hudlVideoUrl_input",id:"hudlVideoUrl_input",title:L("url"),type:"text",placeholder:L("hudl_video_url"),value:Y.url,onChange:De=>Ve(le=>({...le,url:De.target.value}))}),e.jsx(xe,{id:"hudlVideoUpload",name:L("confirm"),value:L("confirm"),bgcolor:o.colors.orange,bghover:o.colors.lightorange}),re&&e.jsx(y,{text:re})]})]})}Pr.propTypes={onCloseClick:a.func,onBackClick:a.func};const kp=_.div`
  ${({theme:t})=>h`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${t.spacings.large};
    padding: ${t.spacings.xsmall};

  `}
`;function Er({onCloseClick:t,onBackClick:s,profileType:i}){const r=p.useContext(Ie),{playerState:l,playerDispatch:n}=r,g=p.useContext(kt),{agencyState:x,agencyDispatch:u}=g,m=p.useContext(Fe),{clubState:d,clubDispatch:f}=m,A=p.useContext(Yt),{leagueState:S,leagueDispatch:D}=A,E=p.useContext(ut),{universityState:V,universityDispatch:C}=E,R=p.useContext(et),{staffState:ne,staffDispatch:b}=R,j=p.useContext($t),{fanState:N,fanDispatch:ie}=j,{t:L}=w(),[Y,Ve]=p.useState({id:void 0,url:""}),[re,Ue]=p.useState(),Ee=De=>{De.preventDefault();const le={player:()=>is(n,Y),club:()=>ns(f,Y),agency:()=>ds(u,Y),university:()=>ls(C,Y),league:()=>ps(D,Y),fan:()=>cs(ie,Y),staff:()=>rs(b,Y)};if(Y.url){const Gt=le[i];Gt(),t()}else Ue(L("insert_video_url"))};return e.jsxs(kp,{children:[e.jsxs(B,{children:[e.jsx(q,{hovercolor:o.colors.secondary,onclick:s,children:e.jsx(wo,{})}),e.jsx(k,{text:L("details"),uppercase:!0}),e.jsx(q,{hovercolor:o.colors.mediumred,onclick:t,children:e.jsx(ro,{})})]}),e.jsxs(me,{onSubmit:Ee,children:[e.jsx(T,{name:"vimeoVideoUrl_input",id:"vimeoVideoUrl_input",title:L("url"),type:"text",placeholder:L("vimeo_video_url"),value:Y.url,onChange:De=>Ve(le=>({...le,url:De.target.value}))}),e.jsx(xe,{id:"vimeoVideoUpload",name:L("confirm"),value:L("confirm"),bgcolor:o.colors.quaternary,bghover:o.colors.secondary}),re&&e.jsx(y,{text:re})]})]})}Er.propTypes={onCloseClick:a.func,onBackClick:a.func,profileType:a.string.isRequired};const Cp=_.div`
  ${({theme:t})=>h`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${t.spacings.small};

    ${M} {
      animation: none;
    }

  `}
`,Sp=_.div`
  ${({theme:t})=>h`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${t.spacings.large};
    padding: ${t.spacings.xsmall};

    ${Co} {
      &:hover {
       border: ${t.borders.orange};
      }

      &:focus {
       border: ${t.borders.orange};
       box-shadow: 0px 0px 5px 1px ${t.colors.orange};
     }
    }

    ${Xi} {
      &::-webkit-file-upload-button { 

        &:hover {
          border: ${t.borders.xprimary};
          color: ${t.colors.primary};
        }
      }
    }

  `}
`;function zr({onCloseClick:t,onBackClick:s}){const{t:i}=w(),{currentUser:r}=Ut(),[l,n]=p.useState(""),g=async u=>{u.preventDefault(),t();const m=l;if(m)try{const d=await Re.post(`https://talent2show.onrender.com/api/userVideos/${r.id}/upload`,m,{headers:{"Content-Type":"multipart/form-data"}});n(void 0),t()}catch(d){console.error(i("video_upload_error"),d)}},x=async u=>{u.preventDefault();const m=u.target.files[0];if(m){new FormData().append("video_file",m);try{n(m)}catch(f){console.error(i("video_upload_error"),f)}}};return e.jsxs(Sp,{children:[e.jsxs(B,{children:[e.jsx(q,{hovercolor:o.colors.primary,onclick:s,children:e.jsx(wo,{})}),e.jsx(k,{text:"Envie seu vídeo",uppercase:!0}),e.jsx(q,{hovercolor:o.colors.mediumred,onclick:t,children:e.jsx(ro,{})})]}),e.jsxs(me,{onSubmit:g,children:[e.jsx(as,{id:"addVideo",accept:"video/*",onChange:x}),e.jsx(xe,{id:"t2sVideoUpload",name:i("confirm"),value:i("confirm"),bgcolor:o.colors.lightprimary,bghover:o.colors.primary})]})]})}zr.propTypes={onCloseClick:a.func,onBackClick:a.func};function Dr({onClick:t,profileType:s}){const{t:i}=w(),[r,l]=p.useState(),n=(x,u)=>{l(u)},g=x=>{l("")};return e.jsxs(Cp,{children:[!r&&e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[e.jsx(k,{text:i("upload_method"),uppercase:!0}),e.jsx(q,{hovercolor:o.colors.mediumred,onclick:t,children:e.jsx(ro,{})})]}),e.jsxs($e,{children:[e.jsxs(c,{hovercolor:o.colors.mediumred,onclick:x=>n(x,"youtube"),children:[e.jsx("img",{src:"/assets/images/logos/youtube.png",alt:"a"}),i("youtube")]}),e.jsxs(c,{hovercolor:o.colors.secondary,onclick:x=>n(x,"vimeo"),children:[e.jsx("img",{src:"/assets/images/logos/vimeo.png",alt:"a"}),i("vimeo")]}),e.jsxs(c,{hovercolor:o.colors.primary,onclick:x=>n(x,"t2s"),children:[e.jsx("img",{src:"/assets/images/logos/t2s.png",alt:"a"}),i("t2s")]})]})]}),r==="youtube"&&e.jsx(Ar,{profileType:s,onCloseClick:t,onBackClick:g}),r==="vimeo"&&e.jsx(Er,{profileType:s,onCloseClick:t,onBackClick:g}),r==="hudl"&&e.jsx(Pr,{profileType:s,onCloseClick:t,onBackClick:g}),r==="t2s"&&e.jsx(zr,{profileType:s,onCloseClick:t,onBackClick:g})]})}Dr.propTypes={onClick:a.func,profileType:a.string.isRequired};function St({items:t,title:s,profileType:i}){const r=p.useContext(Ie),{playerState:l,playerDispatch:n}=r,g=p.useContext(kt),{agencyState:x,agencyDispatch:u}=g,m=p.useContext(Fe),{clubState:d,clubDispatch:f}=m,A=p.useContext(Yt),{leagueState:S,leagueDispatch:D}=A,E=p.useContext(ut),{universityState:V,universityDispatch:C}=E,R=p.useContext(et),{staffState:ne,staffDispatch:b}=R,j=p.useContext($t),{fanState:N,fanDispatch:ie}=j,{t:L}=w(),[Y,Ve]=p.useState(""),[re,Ue]=p.useState(!1);Ut();const Ee=le=>{Ve(Y===le.url?"":le.url)},De=le=>{const Ua={player:()=>jc(n,le),club:()=>Lc(f,le),agency:()=>gd(u,le),university:()=>Yc(C,le),league:()=>kd(D,le),fan:()=>nd(ie,le),staff:()=>Ec(b,le)}[i];Ua(),Ve("")};return e.jsx(yp,{children:e.jsxs(fp,{children:[e.jsx(G,{text:s,uppercase:!0}),e.jsxs(ze,{slidesPerView:2,spaceBetween:15,navigation:!0,zoom:!0,lazy:"true",breakpoints:{768:{slidesPerView:2},0:{slidesPerView:1}},children:[t&&t.map(le=>e.jsx(he,{children:e.jsxs(bp,{children:[e.jsx(ln,{url:le.url,width:"100%",height:"100%",controls:!0,playsinline:!0}),e.jsx(B,{children:e.jsx(vp,{children:e.jsx(q,{onclick:()=>Ee(le),active:Y===le.url,activecolor:o.colors.red,hovercolor:o.colors.lightred,color:o.colors.white,children:e.jsx(Vo,{})})})}),e.jsx(z,{children:e.jsx(Zt,{isopen:Y===le.url,title:L("delete_video_question"),firstoption:"Sim",secondoption:"Não",onfirstclick:()=>De(le),onsecondclick:()=>Ee("")})})]})},le.url)),e.jsx(he,{children:e.jsx(wp,{children:e.jsx(q,{hovercolor:o.colors.secondary,name:L("add_video_button"),onclick:()=>Ue(!re),children:e.jsx(vo,{})})})})]}),re&&e.jsx(ee,{children:e.jsx(Dr,{profileType:i,onClick:()=>Ue(!1)})})]})})}St.propTypes={items:a.arrayOf(a.object).isRequired,title:a.string,profileType:a.string.isRequired};function js(){var l,n,g,x,u;const{t}=w(),s=p.useContext(Fe),{clubState:i,clubDispatch:r}=s;return e.jsxs(op,{children:[e.jsx(mt,{items:((l=i==null?void 0:i.profile)==null?void 0:l.info)||[]}),e.jsx(Ct,{items:((n=i==null?void 0:i.profile)==null?void 0:n.photos)||[],title:t("photos"),ownerview:!0}),e.jsx(St,{items:((g=i==null?void 0:i.profile)==null?void 0:g.videos)||[],title:t("videos"),profileType:"club"}),e.jsx(B,{children:e.jsx(at,{items:((x=i==null?void 0:i.profile)==null?void 0:x.competitions)||[],title:t("current_competitions")})}),e.jsx(Wt,{items:((u=i==null?void 0:i.profile)==null?void 0:u.awards)||[],title:t("titles_and_awards")})]})}const Tp=_.article`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.large};
    
  `}
`;function Ap(){var l,n,g,x,u,m;const{t}=w(),s=p.useContext(Ie),{playerState:i,playerDispatch:r}=s;return e.jsxs(Tp,{children:[e.jsx(mt,{items:((l=i==null?void 0:i.profile)==null?void 0:l.info)||[]}),e.jsx(Ct,{items:((n=i==null?void 0:i.profile)==null?void 0:n.photos)||[],title:t("photos")}),e.jsx(St,{items:((g=i==null?void 0:i.profile)==null?void 0:g.videos)||[],title:t("videos"),profileType:"player"}),e.jsxs(B,{children:[e.jsx(at,{items:((x=i==null?void 0:i.profile)==null?void 0:x.clubs)||[],title:t("club_history")}),e.jsx(at,{items:((u=i==null?void 0:i.profile)==null?void 0:u.studies)||[],title:t("academic_history")})]}),e.jsx(Wt,{items:((m=i==null?void 0:i.profile)==null?void 0:m.awards)||[],title:t("titles_and_awards")})]})}const Pp=_.article`
  ${({theme:t})=>h`
   display: flex;
   flex-direction: column;
   gap: ${t.spacings.medium};

   width: 100%;
   height: 100%;
   min-height: 400px;
  `}
`;function Xt(){const{t}=w(),s=p.useContext(X),{s2tState:i}=s;return e.jsx(Pp,{children:e.jsx(eo,{title:t("players"),items:i.users.players,publicview:!0})})}const Ep=_.section`
  ${({theme:t})=>h`


  ${Ae} {
      justify-content: flex-end;

      @media ${t.medias.tablet} {
        justify-content: center;
      }

      @media ${t.medias.mobile} {
        justify-content: flex-end;
      }

      ${ge} {
        @media ${t.medias.mobile} {
         display: none;
        }
      }

      ${M} {
        display: none;
        animation: none;

        @media ${t.medias.mobile} {
          display: flex;
        }
      }
    }

    ${oe} {
      & ${de} {
        height: 30px;
      }
    }

    > ${oe} {
      display: none;
      flex-direction: column;
      gap: ${t.spacings.small};
      padding: ${t.spacings.medium};

      @media ${t.medias.mobile} {
        display: flex;
      }
    }
      
    >${ae} {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      gap: ${t.spacings.xlarge};
      padding: ${t.spacings.medium};


      @media ${t.medias.tablet} {
        width: 100%;
      }
    }

  `}
`,$s=_.nav`
  ${({theme:t})=>h`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: ${t.spacings.small};
     height: 100%;
     width: 100%;
     padding: ${t.spacings.xsmall};
  `}
`;function qr(){const{t}=w(),[s,i]=p.useState(""),r=Oe();return p.useEffect(()=>{i(r.pathname)},[r.pathname]),e.jsxs(e.Fragment,{children:[e.jsxs($s,{children:[e.jsx(c,{active:s==="/university-dashboard"||s==="/university-dashboard",path:"",text:t("home"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/university-dashboard/profile",path:"profile",text:t("profile"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/university-dashboard/my-squad",path:"my-squad",text:t("my_squad"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/university-dashboard/opportunities",path:"opportunities",text:t("opportunities"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/university-dashboard/my-opportunities",path:"my-opportunities",text:t("my_opportunities"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/university-dashboard/scouts",path:"scouts",text:t("scouts"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/university-dashboard/clubs",path:"clubs",text:t("clubs"),color:o.colors.white,hovercolor:o.colors.black})]}),e.jsxs($s,{children:[e.jsx(c,{active:s==="/university-dashboard/players",path:"players",text:t("players"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/university-dashboard/events",path:"events",text:t("events"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/university-dashboard/favorites",path:"favorites",text:t("favorites"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/university-dashboard/contacts",path:"contacts",text:t("contacts"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/university-dashboard/friends",path:"friends",text:t("friends"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/university-dashboard/store",path:"store",text:t("store"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/university-dashboard/my-affiliates",path:"my-affiliates",text:t("my_affiliates"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/university-dashboard/s2t+",path:"s2t+",text:t("t2s+"),color:o.colors.white,hovercolor:o.colors.black})]})]})}qr.propTypes={};function zp(){const{t}=w(),s=p.useContext(ut),{universityState:i,universityDispatch:r}=s,[l,n]=p.useState(!1),[g,x]=p.useState(!1),[u,m]=p.useState(!1),[d,f]=p.useState(!1),A=()=>{f(!d),m(!1)},S=()=>{m(!u),f(!1)};return e.jsxs(Ep,{children:[e.jsxs(Pe,{children:[e.jsxs(be,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/university-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),g?e.jsx(q,{name:t("menu"),onclick:()=>x(!g),children:e.jsx(te,{})}):e.jsx(q,{name:t("close_menu"),onclick:()=>x(!g),children:e.jsx(_e,{})})]}),g&&e.jsxs(ee,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/player-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),e.jsxs(Je,{backgroundimagesrc:i.profile.banner.backgroundImageSrc,ownerview:!0,children:[e.jsx(We,{imagesrc:i.profile.banner.profileImageSrc,badge:i.profile.banner.badge,ownerview:!0,type:i.profile.info.profileType}),e.jsx(ct,{name:i.profile.banner.name}),e.jsxs(B,{children:[e.jsx($,{path:"profile-edit",text:t("edit_profile"),bgcolor:o.colors.primary,bghover:o.colors.black,textcolor:o.colors.black,texthover:o.colors.primary,border:o.colors.black,borderhover:o.colors.primary}),e.jsx(q,{active:u,hovercolor:o.colors.primary,name:t("settings"),onclick:S,children:e.jsx(wt,{})}),e.jsx(q,{active:d,hovercolor:o.colors.primary,name:t("share"),onclick:A,children:e.jsx(nt,{})}),u&&e.jsx(ee,{onclick:()=>m(!1),children:e.jsx(dt,{})}),d&&e.jsx(ee,{onclick:()=>f(!1),children:e.jsx(Ke,{})})]})]}),e.jsx(Ge,{children:e.jsx(qr,{})}),l?e.jsx(Xe,{onclick:()=>n(!l),children:e.jsx(us,{})}):e.jsx(Qe,{name:"Menu",onclick:()=>n(!l),children:e.jsx(_e,{})}),e.jsx(pt,{children:e.jsx(Vt,{children:e.jsx(ae,{color:o.colors.black,children:e.jsx(Ne,{})})})}),e.jsx(ce,{items:i.benefits,title:t("my_benefits")})]})}const Dp=(t,s)=>{switch(s.type){case ir:return{...t,profile:{...t.profile,info:s.payload}};case rr:return{...t,profile:{...t.profile,competitions:[...t.profile.competitions,s.payload]}};case ar:return{...t,profile:{...t.profile,competitions:t.profile.competitions.filter(i=>i.id!==s.payload.id)}};case nr:return{...t,profile:{...t.profile,awards:[...t.profile.awards,s.payload]}};case lr:return{...t,profile:{...t.profile,awards:t.profile.awards.filter(i=>i.id!==s.payload.id)}};case cr:return t.profile.videos.some(r=>r.url===s.payload.url)?t:{...t,profile:{...t.profile,videos:[...t.profile.videos,s.payload]}};case dr:return{...t,profile:{...t.profile,videos:t.profile.videos.filter(i=>i.url!==s.payload.url)}};default:return{...t}}},qp={profile:{banner:{},info:{},photos:[],videos:[],competitions:[],awards:[]},benefits:[],friends:[]};function Ir({children:t}){const[s,i]=p.useReducer(Dp,qp);return e.jsx(ut.Provider,{value:{universityState:s,universityDispatch:i},children:t})}Ir.propTypes={children:a.node.isRequired};const Ip=_.article`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    width: 100%;


    ${W} {
      width: 100%;
      justify-content: space-between;
    }
    
    ${Z} {
      max-width: none;
    }
    
  `}
`,Rp=_.div`
  ${({theme:t})=>h`
  ${Se} {
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      padding: ${t.spacings.small};

      @media ${t.medias.smallpc} {
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      }

      @media ${t.medias.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
      }

      @media ${t.medias.mobile} {
        grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
      }
     }
 
  `}
`,Op=_(so)`
  ${({theme:t})=>h`
    font-family: ${t.fonts.primary};
    list-style: none;
    cursor: pointer;
    user-select: none;
    width: 100%;
    color: ${t.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.small};

    margin-top: ${t.spacings.small};
    
    transition: all 500ms ease-in-out;

    .page-item {
      height: 30px;
      width: 30px;
      font-size: ${t.sizes.medium};
      display: flex;
      justify-content: center;
      align-items: center;
      border: ${t.borders.white};
      border-radius: 50%;
      transition: all 500ms ease-in-out;

      &:hover {
        border: ${t.borders.primary};
      }

      @media ${t.medias.mobile} {
        height: 20px;
        width: 20px;
        font-size: ${t.sizes.small};
      }

      @media ${t.medias.smallmobile} {
        height: 15px;
        width: 15px;
        font-size: ${t.sizes.xsmall};
      }
      

    }

    .page-link {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }

    .active {
      border: ${t.borders.primary};
      transform: scale(1.2);
      color: ${t.colors.primary};
      box-shadow: 0px 0px 5px 1px ${t.colors.primary};

    }

    .previous, .next {
      transition: all 500ms ease-in-out;
      color: ${t.colors.white};
      
      &:hover {
        color: ${t.colors.primary};
      }

      @media ${t.medias.mobile} {
        font-size: ${t.sizes.xsmall};
      }

      @media ${t.medias.smallmobile} {
        font-size: ${t.sizes.xxsmall};
      }
   
    }

    .break {
  
     }

    .disabled {
      opacity: 0.5;

      &:hover {
        color: ${t.colors.white};
      }
    }
  `}
`,Np=_.div`
  ${({theme:t})=>h`
   animation: ${ue} 500ms;

   border-radius: 15px;
   overflow-y: auto;
   border: ${t.borders.xwhite};
   background: rgba(0, 0, 0, 0.8);

   display: flex;
   flex-direction: column;
   gap: ${t.spacings.xlarge};
   
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 5000; 
   text-align: start;

   max-width: 650px;
   max-height: 70%;
   padding: ${t.spacings.xxlarge};


   transition: all 700ms ease-in-out;     

    @media ${t.medias.smallpc} {
     max-width: none;
     width: 80%;
     padding: ${t.spacings.medium};
    }


    @media ${t.medias.mobile} {
     max-height: 60%;
     width: 90%;
    }   


    &:hover {
      background: rgba(0, 0, 0, 0.9);
      box-shadow: 0px 0px 10px 2px white;
    }


    ${es} {
      width: 100%;
      height: auto;
      justify-content: space-between;
      grid-gap: ${t.spacings.xsmall};
    }

    ${pe} {
      margin-bottom: 0px;
    }

    ${de} {
      padding: ${t.spacings.medium};
    }

    ${W} {
      justify-content: space-between;
    
      @media ${t.medias.smallpc} {
       flex-direction: row;
      }
    }


    ${Z} {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: ${t.spacings.small};

      ${se}, svg {
        color: ${t.colors.lightprimary};
        transition: all 500ms ease-in-out;
      }

      &:hover {
        & svg, ${se} {
          color: ${t.colors.primary};
        }
      }
     }
  `}
`;function hs({event:t,onclick:s}){p.useState();const{t:i}=w();return e.jsx(Np,{children:e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[t.title&&e.jsx(G,{text:t.title,uppercase:!0}),e.jsx(q,{onclick:s,name:"Fechar Evento",hovercolor:o.colors.red,children:e.jsx(te,{})})]}),e.jsx(k,{text:"Detalhes",uppercase:!0}),e.jsxs(_s,{children:[t.organizer&&e.jsx(Q,{infotitle:i("organizer"),info:t.organizer,uppercase:!0}),t.startDate&&e.jsx(Q,{infotitle:i("start_date"),info:t.startDate,uppercase:!0}),t.endDate&&e.jsx(Q,{infotitle:i("end_date"),info:t.endDate,uppercase:!0}),t.startHour&&e.jsx(Q,{infotitle:i("hour"),info:`${t.startHour}h`,uppercase:!0}),t.country&&e.jsx(Q,{infotitle:i("country"),info:t.country,uppercase:!0}),t.state&&e.jsx(Q,{infotitle:i("state"),info:t.state,uppercase:!0}),t.zipCode&&e.jsx(Q,{infotitle:i("zip_code"),info:t.zipCode,uppercase:!0}),t.adress&&e.jsx(Q,{infotitle:i("adress"),info:t.adress,uppercase:!0}),t.platform&&e.jsx(Q,{infotitle:i("platform"),info:t.platform,uppercase:!0})]}),e.jsxs(ae,{children:[e.jsx(k,{text:i("description"),uppercase:!0}),t.description&&e.jsx(y,{text:t.description})]}),t.path&&e.jsx($,{path:t.path,text:i("participate"),bgcolor:o.colors.quaternary,bghover:o.colors.secondary,textcolor:o.colors.white,texthover:o.colors.white,border:o.colors.tertiary,borderhover:o.colors.white})]})})}hs.propTypes={event:a.arrayOf(a.object).isRequired,onclick:a.func};const Mp=_.div`
  ${({theme:t,backgroundimage:s})=>h`
    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${s});
    background-position: center;
    background-size: cover;
    color: ${t.colors.white};
    font-family: ${t.fonts.primary};
    border-radius: 15px;
    animation: ${ue} 1000ms;
    width: 100%;
    height: 100%;
    min-height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 500ms ease-in-out;

    @media ${t.medias.mobile} {
      min-height: 300px;
    }


    &:hover {
      box-shadow: 0px 0px 10px 1px ${t.colors.white} inset;
    }

    ${pe} {
      font-size: ${t.sizes.xlarge};

      @media ${t.medias.tablet} {
       font-size: ${t.sizes.large};
      }

      @media ${t.medias.mobile} {
       font-size: ${t.sizes.small};
     }
    }

    ${se} {
      user-select: none;
    }
  `}
`,Lp=_.div`
  ${({theme:t,islocked:s})=>h`
    border-radius: 15px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.large};
    transition: all 500ms ease-in-out;

    ${Ri} {
      width: 100%;
      text-align: center;
    }
  `}
`;function gs({imagesrc:t,title:s,subtitle:i,organizer:r,startDate:l,startHour:n,country:g,state:x,platform:u,onClick:m}){const{t:d}=w();return e.jsx(Mp,{backgroundimage:t,onClick:m,children:e.jsxs(Lp,{children:[e.jsxs(Pt,{children:[s&&e.jsx(k,{text:s,uppercase:!0}),i&&e.jsx(y,{text:i})]}),e.jsxs(Pt,{children:[r&&e.jsx(Q,{infotitle:d("organizer"),info:r,uppercase:!0}),l&&e.jsx(Q,{infotitle:d("start_date"),info:l,uppercase:!0}),n&&e.jsx(Q,{infotitle:d("hour"),info:`${n}h`,uppercase:!0}),g&&e.jsx(Q,{infotitle:d("country"),info:g,uppercase:!0}),x&&e.jsx(Q,{infotitle:d("state"),info:x,uppercase:!0}),u&&e.jsx(Q,{infotitle:d("platform"),info:u,uppercase:!0})]})]})})}gs.propTypes={imagesrc:a.string,title:a.string,subtitle:a.string,organizer:a.string,startDate:a.string,startHour:a.string,country:a.string,state:a.string,onClick:a.bool};const Fp=_.div`
  ${({theme:t,isopen:s})=>h`
    animation: ${I} 500ms;
    width: 100%;
    border-radius: 12px;
    padding: ${t.spacings.small};


    & ${Ft}, ${At} {
      @media ${t.medias.mobile} {
       font-size: ${t.sizes.xsmall};
      }
    }

    & ${W} {
      width: 100%;
      justify-content: space-between;

      @media ${t.medias.smallpc} {
        flex-direction: row;
      }

      @media ${t.medias.tablet} {
        flex-direction: column;
      }

      & ${Kt} {
         min-width: 210px;
       }
    }

    & ${M} {
      > svg {
        color: ${s?t.colors.primary:"none"};

        &:hover {
          color: ${s?"none":t.colors.secondary};
        }
      }
    }
  `}
`;function Rr(){const[t,s]=p.useState(!0),{t:i}=w(),r=p.useContext(X),{s2tState:l,s2tDispatch:n}=r,[g,x]=p.useState({eventType:"",eventFormat:"",country:"",organizer:""}),[u,m]=p.useState("");return p.useEffect(()=>{(async()=>{g&&Ll(n,g)})()},[g]),p.useEffect(()=>{(async()=>{u&&Fl(n,u)})()},[u]),e.jsx(Fp,{isopen:t?"isopen":void 0,children:e.jsx(je,{children:e.jsxs(me,{children:[e.jsxs(B,{children:[e.jsx(H,{id:"filterEventType",options:l.formOptions.eventType,placeholder:i("all"),onDropdownChange:d=>x(f=>({...f,eventType:d}))}),e.jsxs(qo,{children:[e.jsx(q,{onclick:()=>s(!t),name:i("filter_events"),children:e.jsx(Uo,{})}),e.jsx(Io,{name:"searchEvent",id:"searchEvent",onChange:d=>m(d.target.value)})]})]}),e.jsxs(Bt,{isopen:t,children:[e.jsx(H,{id:"filterEventFormat",options:l.formOptions.eventFormat,placeholder:i("event_format"),onDropdownChange:d=>x(f=>({...f,eventFormat:d}))}),e.jsx(T,{type:"text",name:"filterEventOrganizer_input",id:"filterEventOrganizer_input",placeholder:i("organizer"),onChange:d=>x(f=>({...f,organizer:d.target.value}))}),e.jsx(T,{type:"text",name:"filterEventCountry_input",id:"filterEventCountry_input",placeholder:i("country"),onChange:d=>x(f=>({...f,country:d.target.value}))})]})]})})})}Rr.propTypes={};function xs({items:t,selectedevent:s}){const[i,r]=p.useState(null);p.useEffect(()=>{r(s)},[s]);const[l,n]=p.useState(0),[g,x]=p.useState(3),u=l*g,m=p.useMemo(()=>t?t.slice(u,u+g):[],[t,l,g]),d=({selected:A})=>{n(A)};p.useEffect(()=>{const A=()=>{x(window.innerWidth<768?2:4)};return window.addEventListener("resize",A),A(),()=>window.removeEventListener("resize",A)},[]);const f=()=>{window.scrollTo({top:200,behavior:"smooth"})};return e.jsxs(Rp,{children:[e.jsx(Rr,{}),m&&m.length?e.jsx($e,{children:m.map(A=>e.jsx(gs,{imagesrc:A.src||"/assets/images/others/leagues.png",title:A.title,subtitle:A.subtitle,organizer:A.organizer,startDate:A.startDate,startHour:A.startHour,country:A.country,state:A.state,platform:A.platform,onClick:()=>r(A)},A.id))}):e.jsx(y,{text:Te("event_not_found")}),m.length>0&&e.jsx(Op,{previousLabel:Te("previous"),nextLabel:Te("next"),breakLabel:"...",pageCount:t?Math.ceil(t.length/g):0,pageRangeDisplayed:3,marginPagesDisplayed:1,onPageChange:d,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",activeClassName:"active",onClick:f}),i&&e.jsx(hs,{event:i,onclick:()=>r()})]})}xs.propTypes={items:a.arrayOf(a.object).isRequired,selectedevent:a.object};function gt(){var g;const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s,n=((g=Oe().state)==null?void 0:g.selectedEvent)||null;return e.jsxs(Ip,{children:[e.jsx(G,{text:t("events"),uppercase:!0}),e.jsx(xs,{items:i.events||[],selectedevent:n})]})}const Vp=_.article`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.medium};

    width: 100%;
    height: 100%;
  `}
`;function st(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsxs(Vp,{children:[e.jsx(Be,{title:t("physical_trainers"),items:i.users.scouts}),e.jsx(Be,{title:t("tactical_trainers"),items:i.users.scouts}),e.jsx(Be,{title:t("psychologists"),items:i.users.scouts}),e.jsx(Be,{title:t("doctors"),items:i.users.scouts})]})}st.propTypes={};const Up=_.section`
  ${({theme:t})=>h`


  ${Ae} {
      justify-content: flex-end;

      @media ${t.medias.tablet} {
        justify-content: center;
      }

      @media ${t.medias.mobile} {
        justify-content: flex-end;
      }

      ${ge} {
        @media ${t.medias.mobile} {
         display: none;
        }
      }

      ${M} {
        display: none;
        animation: none;

        @media ${t.medias.mobile} {
          display: flex;
        }
      }
    }

     ${oe} {
      & ${de} {
        height: 30px;
      }
    }

    > ${oe} {
      display: none;
      flex-direction: column;
      gap: ${t.spacings.small};
      padding: ${t.spacings.medium};

      @media ${t.medias.mobile} {
        display: flex;
      }
    }
      
    >${ae} {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      gap: ${t.spacings.xlarge};
      padding: ${t.spacings.medium};


      @media ${t.medias.tablet} {
        width: 100%;
      }
    }


    

  `}
`;function Or({type:t}){t.toLowerCase();const{t:s}=w();return e.jsxs($e,{children:[e.jsxs(c,{path:"profile",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(ft,{}),s("profile")]}),e.jsxs(c,{path:"squad",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(io,{}),s("squad")]}),t==="club"&&e.jsxs(c,{path:"opportunities",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(bt,{}),s("opportunities")]}),e.jsxs(c,{path:"friends",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(vt,{}),s("friends")]}),e.jsxs(c,{color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(te,{}),s("close")]})]})}Or.propTypes={type:a.string.isRequired};function Nr(){const{t}=w(),s=p.useContext(Fe),{clubState:i,clubDispatch:r}=s,[l,n]=p.useState(!1),[g,x]=p.useState(!1),[u,m]=p.useState(!1),{username:d}=cn(),[f,A]=p.useState(!1),S=()=>{A(!f)};return e.jsxs(Up,{children:[e.jsxs(Pe,{children:[e.jsxs(be,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/public-dashboard",text:i.profile.banner.name,bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0})]}),u?e.jsx(q,{name:t("menu"),onclick:()=>m(!u),children:e.jsx(te,{})}):e.jsx(q,{name:t("close_menu"),onclick:()=>m(!u),children:e.jsx(_e,{})})]}),u&&e.jsxs(ee,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/public-dashboard",text:i.profile.banner.name,bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0})]}),e.jsxs(Je,{backgroundimagesrc:i.profile.banner.backgroundImageSrc,children:[e.jsx(We,{imagesrc:i.profile.banner.profileImageSrc,badge:i.profile.banner.badge,type:"Clube",competitivelevel:"Profissional"}),e.jsx(ct,{name:i.profile.banner.name}),e.jsxs(B,{children:[e.jsx($,{text:t(g?"unfollow":"follow"),bgcolor:o.colors.primary,bghover:o.colors.black,textcolor:o.colors.black,texthover:o.colors.primary,border:o.colors.black,borderhover:o.colors.primary,onclick:()=>x(!g)}),e.jsx(Ht,{}),e.jsx(q,{active:f,hovercolor:o.colors.primary,name:t("share"),onclick:S,children:e.jsx(nt,{})}),f&&e.jsx(ee,{onclick:()=>A(!1),children:e.jsx(Ke,{})})]})]}),d&&e.jsx(Ge,{children:e.jsx(oi,{username:d,type:"club"})}),l?e.jsx(Xe,{onclick:()=>n(!l),children:e.jsx(Or,{type:"club"})}):e.jsx(Qe,{name:t("menu"),onclick:()=>n(!l),children:e.jsx(_e,{})}),e.jsx(pt,{children:e.jsx(Vt,{children:e.jsx(ae,{color:o.colors.black,children:e.jsx(Ne,{})})})}),e.jsx(ce,{items:i.benefits,title:t("user_benefits")})]})}Nr.propTypes={username:a.string};const Hp=_.article`
  ${({theme:t})=>h`
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.large};
  `}
`;function Bp(){const{t}=w(),s=p.useContext(Fe),{clubState:i,clubDispatch:r}=s;return p.useContext(Ie),e.jsxs(Hp,{children:[e.jsx(mt,{items:i.profile.info}),i.profile.photos&&i.profile.photos.length>0?e.jsx(Cr,{items:i.profile.photos,title:t("photos")}):e.jsx(e.Fragment,{}),i.profile.videos&&i.profile.videos.length>0?e.jsx(Le,{items:i.profile.videos,title:t("videos")}):e.jsx(e.Fragment,{}),e.jsx(B,{children:e.jsx(at,{items:i.profile.leagues,title:t("current_competitions")})}),e.jsx(Wt,{items:i.profile.championships,title:t("titles_and_awards")})]})}const Yp=_.div`
  ${({theme:t})=>h`
   ${Ae} {
      justify-content: space-between;


      ${ge} {
        @media ${t.medias.smallpc} {
         display: none;
        }
      }

      ${M} {
        display: none;
        animation: none;

        @media ${t.medias.smallpc} {
          display: flex;
        }
      }
    }


    ${oe} {
      & ${de} {
        height: 30px;
      }
    }

    > ${oe} {
      display: none;
      flex-direction: column;
      gap: ${t.spacings.small};
      padding: ${t.spacings.medium};

      @media ${t.medias.smallpc} {
        display: flex;
      }
    }
  }

> ${oe} {
  display: none;
  flex-direction: column;
  gap: ${t.spacings.small};
  padding: ${t.spacings.medium};

  @media ${t.medias.smallpc} {
    display: flex;
  }
}

  ${ge} {
    @media ${t.medias.smallpc} {
      display: none;
    }
  }
  `}
`,Wp=_.section`
  ${({theme:t,backgroundimagesrc:s})=>h`
      background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 1)
      ),
      url(${s});

     background-position: center;
     background-size: cover;

     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     height: 100vh;


     ${we} {
      max-width: 500px;
      height: auto;

      @media ${t.medias.tablet} {
       width: 90%;
      }
     }

     ${Ao} {
       gap: ${t.spacings.small};
     }
  `}
`;function Mr(){const{t,i18n:s}=w(),[i,r]=p.useState(!1);Ce();const[l,n]=p.useState(!1),g=x=>{x.preventDefault(),r(!i)};return e.jsxs(Yp,{children:[e.jsxs(Pe,{children:[e.jsx(lt,{size:"150px",logo:"/assets/images/pngs/logo.png"}),e.jsxs(be,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/forgot-password",text:t("forgot_password"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/login",text:t("login"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/register",text:t("register"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),l?e.jsx(q,{name:t("menu"),onclick:()=>n(!l),children:e.jsx(te,{})}):e.jsx(q,{name:t("close_menu"),onclick:()=>n(!l),children:e.jsx(_e,{})})]}),l&&e.jsxs(ee,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/forgot-password",text:t("forgot_password"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/login",text:t("login"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/register",text:t("register"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),e.jsx(Wp,{backgroundimagesrc:`/assets/images/backgrounds/login_register_${s.language}.png`,children:e.jsxs(je,{children:[e.jsxs(we,{children:[e.jsx(G,{text:t("change_password"),size:o.sizes.xxlarge}),e.jsxs(me,{onSubmit:g,children:[e.jsx(T,{type:"email",name:"email_input",id:"email_input",placeholder:t("your_email"),title:t("insert_your_email"),required:!0}),e.jsx(xe,{name:"login_submit",id:"login_submit",value:t("next")})]})]}),i&&e.jsx(Zt,{title:t("verification_email_sended"),firstoption:t("close"),firstpath:"/",subtitle:t("please_check"),isopen:i,onclick:()=>r(!i)})]})})]})}Mr.propTypes={};const Gp=_.section`
  ${({theme:t,backgroundimagesrc:s})=>h`
      background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 1)
      ),
      url(${s});

     background-position: center;
     background-size: cover;

     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     height: 100vh;

     ${we} {
      max-width: 500px;
      height: auto;

      @media ${t.medias.tablet} {
       width: 90%;
      }
     }
  `}
`;function Xp(){const[t,s]=p.useState(!1);Ce();const{t:i,i18n:r}=w(),l=n=>{n.preventDefault(),s(!t)};return e.jsx(Gp,{backgroundimagesrc:`/assets/images/backgrounds/login_register_${r.language}.png`,children:e.jsxs(je,{children:[e.jsxs(we,{children:[e.jsx(G,{text:i("change_password"),size:o.sizes.xxlarge}),e.jsxs(me,{children:[e.jsx(T,{type:"password",name:"password_input",id:"password_input",placeholder:i("insert_new_password"),title:i("new_password"),required:!0}),e.jsx(T,{type:"password",name:"confirm_password_input",id:"confirm_password_input",placeholder:i("insert_new_password_again"),title:i("confirm_new_password"),required:!0}),e.jsx(xe,{name:"login_submit",id:"login_submit",value:i("confirm_change"),onclick:l})]})]}),t&&e.jsx(Zt,{title:i("password_changed_successfully"),firstoption:i("close"),firstpath:"/login",isopen:t,onclick:()=>s(!t)})]})})}const Qp=_.article`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.small};
  `}
`;function Jp({title:t,text:s}){const{t:i}=w(),[r,l]=p.useState(""),[n,g]=p.useState(!1),x=async()=>{try{await navigator.clipboard.writeText(s),l(i("text_copied_sucess")),g(!0)}catch{l(i("text_copy_error")),g(!1)}};return p.useEffect(()=>{let u;return r&&n&&(u=setTimeout(()=>{l(""),g(!1)},3500)),()=>clearTimeout(u)},[r,n]),e.jsxs(nl,{children:[e.jsx(y,{text:t,uppercase:!0}),e.jsxs(B,{children:[e.jsxs(ii,{active:n?"active":void 0,children:[e.jsx(y,{text:s||"Link aqui",color:n?o.colors.primary:o.colors.white}),e.jsx(q,{name:i("copy"),onclick:x,active:n,children:e.jsx(zs,{})})]}),r&&e.jsx(y,{text:r})]})]})}function it({affiliates:t,link:s}){const{t:i}=w();return e.jsxs(Qp,{children:[e.jsx(Jp,{title:i("referral_link"),text:s}),e.jsx(Be,{title:i("level_1"),items:t}),e.jsx(Be,{title:i("level_2"),items:t})]})}it.propTypes={affiliates:a.arrayOf(a.object),link:a.string};const Kp=_.article`
  ${({theme:t})=>h`
 
    width: 100%;
    height: 100%;
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.large};
    border-radius: 12px;

    ${W} {
      align-items: center
    }

    ${fe} {
      border-radius: 12px;
    }

    ${jt} {
      .swiper-slide {
        background: rgba(200,200,200,200.5);
      }
    }
  `}
`;function Zp(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsxs(Kp,{children:[e.jsxs(U,{slidesperview:2,backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(ye,{title:t("social"),size:"400px",items:i.news}),e.jsx(F,{title:t("ranking"),type:"referralrank",items:i.rankings.referral})]}),e.jsxs(U,{title:t("trending_videos"),slidesperview:2,children:[e.jsx(K,{size:"300px",items:i.news,title:t("professional")}),e.jsx(K,{size:"300px",items:i.news,title:t("semi_professional")}),e.jsx(K,{size:"300px",items:i.news,title:t("university")}),e.jsx(K,{size:"300px",items:i.news,title:t("amateur")}),e.jsx(K,{size:"300px",items:i.news,title:t("recreational")})]}),e.jsxs(U,{slidesperview:2,backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:i.events}),e.jsx(F,{title:t("news"),type:"news",items:i.news})]})]})}const eu=_.article`
  ${({theme:t})=>h`
    animation: ${I} 500ms;
    width: 100%;
    height: 100%;
    background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
    ),
    url('/assets/images/backgrounds/slider-bg-1.png');
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > ${se} {
      margin: ${t.spacings.medium};
      animation: ${I} 1000ms;
    }

    > ${ke} {
      animation: ${I} 1000ms;
    }
  `}
`,tu=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    font-family: ${t.fonts.primary};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: ${t.borders.xlightprimary};
    transition: all 500ms ease-in-out;

    ${Z} {
      width: 100%;
      height: 100%;
    }


    ${pe} {
      width: 100%;
      text-align: center;
      border-radius: 8px 8px 0px 0px;
      color: ${t.colors.black};
      background: ${t.colors.lightprimary};
      transition: all 500ms ease-in-out;
      margin-bottom: 0px;

      @media ${t.medias.tablet} {
       font-size: ${t.sizes.small};
      }

      @media ${t.medias.mobile} {
       font-size: ${t.sizes.small};
      }

      @media ${t.medias.smallmobile} {
       font-size: ${t.sizes.xsmall};
      }
    }

    ${de} {
      margin-bottom: ${t.spacings.medium};
      margin-top: ${t.spacings.medium};
    }

    &:hover {
      border: ${t.borders.xprimary};
      box-shadow: 0px 0px 10px 1px ${t.colors.primary};

      ${pe} {
       background: ${t.colors.primary}
    }
    }
  `}
`,ou=_.img`
  ${({theme:t})=>h`
    max-width: 200px;
    max-height: 200px;
  `}
`;function Lr({name:t,imagesrc:s,price:i,path:r}){const{t:l}=w(),n=i.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});return e.jsx(tu,{children:e.jsxs(c,{path:r,children:[e.jsx(k,{text:t,as:"h5",uppercase:!0,size:o.sizes.medium}),e.jsx(ou,{src:s,alt:t}),e.jsx(y,{text:n,uppercase:!0}),e.jsx($,{text:l("buy"),bgcolor:o.colors.lightprimary,bghover:o.colors.primary,textcolor:o.colors.black,texthover:o.colors.black,border:o.colors.lightprimary,borderhover:o.colors.primary})]})})}Lr.propTypes={name:a.string,imagesrc:a.string,price:a.number,path:a.string};const su=_.div`
  ${({theme:t})=>h`
    width: 100%;
    margin-bottom: ${t.spacings.large};
    padding: ${t.spacings.small};
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */

    .swiper-slide {
      padding: ${t.spacings.small};
    }

    ${pe} {
      margin-bottom: 0px;
    }
  `}
`;function Lo({items:t,title:s}){const{t:i}=w();return e.jsxs(su,{children:[e.jsx(k,{text:s,uppercase:!0}),e.jsx(ze,{spaceBetween:15,navigation:!0,loop:!0,breakpoints:{1250:{slidesPerView:4},930:{slidesPerView:3},680:{slidesPerView:2},0:{slidesPerView:1}},children:t&&t.length>0?e.jsx(e.Fragment,{children:t.map(r=>e.jsx(he,{children:e.jsx(Lr,{name:r.name,imagesrc:r.imagesrc,price:r.price,path:r.path})},r.id))}):e.jsx(e.Fragment,{children:e.jsx(y,{text:i("no_products")})})})]})}Lo.propTypes={items:a.arrayOf(a.object).isRequired,title:a.string};function rt(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsxs(eu,{children:[e.jsx(G,{text:t("store"),uppercase:!0}),e.jsx(y,{text:t("store_text")}),e.jsx(Lo,{title:t("t_shirts"),items:i.products.shirts}),e.jsx(Lo,{title:t("football_boots"),items:i.products.footballBoots})]})}rt.propTypes={};const iu=_.article`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.medium};
    width: 100%;
    height: 100%;
  `}
`;function Fr(){var x,u,m;const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s,l=p.useContext(Ie),{playerState:n,playerDispatch:g}=l;return e.jsxs(iu,{children:[e.jsx(Le,{items:(x=i==null?void 0:i.videos)==null?void 0:x.trending,title:t("favorite_videos"),publicview:!0,lazy:!0}),e.jsx(lo,{title:t("favorite_opportunities"),items:((m=(u=i.proposals[n.profile.info.modality])==null?void 0:u[n.profile.info.competitiveCategory])==null?void 0:m.agents)||[]})]})}Fr.propTypes={};const Vr=_.div`
  ${({theme:t})=>h`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  `}
`,ru=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
    max-width: 500px;

    @media ${t.medias.tablet} {
      max-width: 480px;
    }
  
    @media ${t.medias.mobile} {
      max-width: 350px;
    }
  
    .swiper-wrapper{
      height: 1000px;

      @media ${t.medias.tablet} {
        height: 600px;
      }

      @media ${t.medias.mobile} {
        height: 480px;
      }
    }

    .swiper-slide {
      padding: ${t.spacings.xsmall};
    }
  `}
`,au=_.article`
  ${({theme:t})=>h`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
    ),
    url('/assets/images/backgrounds/slider-bg-1.png');
    border-radius: 12px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: ${t.spacings.small};

    ${Vr} {
      width: 60%;

      @media ${t.medias.tablet} {
        width: 100%;
      }
    }


     //Estilos do placeholder
    > section {
      width: 100%;
      height: 1000px;
      background: rgba(0,0,0,0.5);

      @media ${t.medias.tablet} {
        display: none;
      }
    }
  `}
`;function Ur({items:t,title:s,type:i}){const r=i.toLowerCase();return e.jsxs(Vr,{children:[e.jsx(k,{text:s,uppercase:!0,as:"h3"}),e.jsx(ru,{children:e.jsx(ze,{spaceBetween:0,direction:"vertical",slidesPerView:15,mousewheel:!0,pagination:{clickable:!0},breakpoints:{769:{slidesPerView:10},0:{slidesPerView:7}},children:r==="contact"&&e.jsxs(e.Fragment,{children:[e.jsx(he,{children:e.jsx(Tt,{title:"Agente",subtitle:"Centroavante",imagesrc:"/assets/images/pngs/brasileirao.png",newmessage:!0})}),e.jsx(he,{children:e.jsx(Tt,{title:"Scout",subtitle:"Centroavante",imagesrc:"/assets/images/pngs/brasileirao.png",newmessage:!0})}),e.jsx(he,{children:e.jsx(Tt,{title:"Clube",subtitle:"Centroavante",imagesrc:"/assets/images/pngs/brasileirao.png",newmessage:!0})}),e.jsx(he,{children:e.jsx(Tt,{title:"Agência de intercâmbio",subtitle:"Centroavante",imagesrc:"/assets/images/pngs/brasileirao.png"})}),e.jsx(he,{children:e.jsx(Tt,{title:"Agência de intercâmbio",subtitle:"Centroavante",imagesrc:"/assets/images/pngs/brasileirao.png"})}),e.jsx(he,{children:e.jsx(Tt,{title:"Agência de intercâmbio",subtitle:"Centroavante",imagesrc:"/assets/images/pngs/brasileirao.png"})})]})})})]})}Ur.propTypes={title:a.string,type:a.string.isRequired,items:a.arrayOf(a.object).isRequired};function Hr(){const{t}=w();return e.jsxs(au,{children:[e.jsx(Ur,{type:"contact",title:t("your_messages")}),e.jsx("section",{})]})}Hr.propTypes={};const nu=_.article`
  ${({theme:t})=>h`
 
    width: 100%;
    height: 100%;
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.large};
    border-radius: 12px;

    ${W} {
      align-items: center
    }

    ${fe} {
      border-radius: 12px;
    }

    ${jt} {
      .swiper-slide {
        background: rgba(200,200,200,200.5);
      }
    }
  `}
`;function ks(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsxs(nu,{children:[e.jsxs(U,{slidesperview:2,backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(ye,{title:t("social"),size:"400px",items:i.news}),e.jsx(F,{title:t("ranking"),type:"referralrank",items:i.rankings.referral})]}),e.jsxs(U,{title:t("trending_videos"),slidesperview:2,children:[e.jsx(K,{size:"300px",items:i.news,title:t("professional")}),e.jsx(K,{size:"300px",items:i.news,title:t("semi_professional")}),e.jsx(K,{size:"300px",items:i.news,title:t("university")}),e.jsx(K,{size:"300px",items:i.news,title:t("amateur")}),e.jsx(K,{size:"300px",items:i.news,title:t("recreational")})]}),e.jsxs(U,{slidesperview:2,backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:i.events}),e.jsx(F,{title:t("news"),type:"news",items:i.news})]})]})}const lu=_.article`
  ${({theme:t})=>h`
   position: relative;
   display: flex;
   flex-direction: column;
   gap: ${t.spacings.medium};

   width: 100%;
   height: 100%;
   min-height: 400px;
  `}
`,cu=_.div`
  ${({theme:t})=>h`
   width: 100%;
   height: 100%;
   animation: ${I} 500ms ease-out;
   

   & ${M} {
    animation: none;
   }

   ${Se} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    animation: ${ue} 500ms;
    @media ${t.medias.smallpc} {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    @media ${t.medias.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }

    @media ${t.medias.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    }
    }

    ${W} {
      justify-content: space-between;
      align-items: center;
      margin-bottom: ${t.spacings.medium};
      @media ${t.medias.smallpc} {
        flex-direction: row;
      }
    }

  `}
`,du=_(so)`
  ${({theme:t})=>h`
    font-family: ${t.fonts.primary};
    list-style: none;
    cursor: pointer;
    user-select: none;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.small};

    margin-top: ${t.spacings.small};
    
    transition: all 500ms ease-in-out;

    .page-item {
      height: 30px;
      width: 30px;
      font-size: ${t.sizes.medium};
      display: flex;
      justify-content: center;
      align-items: center;
      border: ${t.borders.white};
      border-radius: 50%;
      transition: all 500ms ease-in-out;

      &:hover {
        border: ${t.borders.primary};
      }

      @media ${t.medias.mobile} {
        height: 20px;
        width: 20px;
        font-size: ${t.sizes.small};
      }

      @media ${t.medias.smallmobile} {
        height: 15px;
        width: 15px;
        font-size: ${t.sizes.xsmall};
      }
      

    }

    .page-link {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }

    .active {
      border: ${t.borders.primary};
      transform: scale(1.2);
      color: ${t.colors.primary};
      box-shadow: 0px 0px 5px 1px ${t.colors.primary};

    }

    .previous, .next {
      transition: all 500ms ease-in-out;
      color: ${t.colors.white};
      
      &:hover {
        color: ${t.colors.primary};
      }

      @media ${t.medias.mobile} {
        font-size: ${t.sizes.xsmall};
      }

      @media ${t.medias.smallmobile} {
        font-size: ${t.sizes.xxsmall};
      }
   
    }

    .break {
  
    }

    .disabled {
      opacity: 0.5;

      &:hover {
        color: ${t.colors.white};
      }
    }
  `}
`,pu=_.section`
  ${({theme:t})=>h`
    animation: ${I} 500ms;

    border-radius: 15px;
    overflow-y: auto;
    border: ${t.borders.xwhite};
    background: rgba(0, 0, 0, 0.8);

    display: flex;
    flex-direction: column;
    gap: ${t.spacings.xlarge};

    /* position: absolute;
    z-index: 100;  */

    width: 100%;
    padding: ${t.spacings.large};


    transition: all 700ms ease-in-out;

    &:hover {
      background: rgba(0, 0, 0, 0.9);
      box-shadow: 0px 0px 10px 2px white;
      backdrop-filter: blur(2px);
    }

    @media ${t.medias.mobile} {
      padding: ${t.spacings.small};
    }

    ${W} {
      justify-content: space-between;
      @media ${t.medias.smallpc} {
        flex-direction: row;
      }
    }

    ${Ro} {
      grid-gap: ${t.spacings.medium};
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));


      @media ${t.medias.smallpc} {
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      }

      @media ${t.medias.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      }

      @media ${t.medias.mobile} {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      }
    }

    ${Ft} {
      padding: 8px;
  `}
`;function Br({onclick:t}){const s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s,l=new Date().toISOString().substring(0,10),[n,g]=p.useState({opportunityId:0,details:{from:"",date:l,disponibility:"",category:"",opportunity:"",country:"",org:"",age:{minAge:void 0,maxAge:void 0},payment:{minPayment:"",maxPayment:"",currency:""},minHeight:""},description:"",requirements:""}),{t:x}=w(),u=async m=>{m.preventDefault(),Il(r,n),t()};return e.jsxs(pu,{children:[e.jsxs(B,{children:[e.jsx(G,{text:x("create_new_opportunity"),uppercase:!0}),e.jsx(q,{name:x("back"),onclick:t,children:e.jsx(te,{})})]}),e.jsx(je,{children:e.jsxs(me,{onSubmit:u,children:[e.jsx(k,{text:x("details"),uppercase:!0}),e.jsxs(Bt,{isopen:!0,children:[e.jsx(T,{type:"text",name:"league_input",id:"league_input",placeholder:x("which_league"),title:x("league"),value:n.details.org,onChange:m=>g(d=>({...d,details:{...d.details,org:m.target.value}})),required:!0}),e.jsx(T,{type:"text",name:"country_input",id:"country_input",placeholder:x("which_country_opportunity"),title:x("country"),required:!0,value:n.details.country,onChange:m=>g(d=>({...d,details:{...d.details,country:m.target.value}}))}),e.jsx(H,{title:x("which_position"),placeholder:x("select_position"),id:"position",required:!0,options:i.formOptions.positions,onDropdownChange:m=>g(d=>({...d,details:{...d.details,opportunity:m}}))}),e.jsx(H,{title:x("which_category"),id:"competitiveCategory",placeholder:x("select_category"),options:i.formOptions.competitiveCategory,onDropdownChange:m=>g(d=>({...d,details:{...d.details,category:m}})),required:!0}),e.jsx(T,{type:"date",name:"disponibility_input",id:"disponibility_input",title:x("which_disponibility_date"),value:n.details.disponibility,onChange:m=>g(d=>({...d,details:{...d.details,disponibility:m.target.value}}))}),e.jsx(T,{type:"text",name:"minimumHeight_input",id:"minimumHeight_input",placeholder:x("which_minimum_height"),title:x("minimum_height"),value:n.details.minHeight,onChange:m=>g(d=>({...d,details:{...d.details,minHeight:m.target.value}}))}),e.jsx(T,{type:"number",name:"minimumAge_input",id:"minimumAge_input",placeholder:x("which_minimum_age"),title:x("minimum_age"),value:n.details.age.minAge,onChange:m=>g(d=>({...d,details:{...d.details,age:{...d.details.age,minAge:m.target.value}}}))}),e.jsx(T,{type:"text",name:"maximumAge_input",id:"maximumAge_input",placeholder:x("which_maximum_age"),title:x("maximum_age"),value:n.details.age.maxAge,onChange:m=>g(d=>({...d,details:{...d.details,age:{...d.details.age,maxAge:m.target.value}}}))}),e.jsx(T,{type:"text",name:"mininumPayment_input",id:"mininumPayment_input",placeholder:x("which_minimum_payment"),title:x("minimum_payment"),required:!0,value:n.details.payment.minPayment,onChange:m=>g(d=>({...d,details:{...d.details,payment:{...d.details.payment,minPayment:m.target.value}}}))}),e.jsx(T,{type:"text",name:"maximumPayment_input",id:"maximumPayment_input",placeholder:x("which_maximum_payment"),title:x("maximum_payment"),value:n.details.payment.maxPayment,onChange:m=>g(d=>({...d,details:{...d.details,payment:{...d.details.payment,maxPayment:m.target.value}}}))}),e.jsx(H,{title:x("which_currency"),placeholder:x("select_currency"),id:"paymentCurrency",options:i.formOptions.currency,required:!0,onDropdownChange:m=>g(d=>({...d,details:{...d.details,payment:{...d.details.payment,currency:m}}}))})]}),e.jsxs(ae,{children:[e.jsx(k,{text:x("description"),uppercase:!0}),e.jsx(xt,{placeholder:x("insert_description"),name:"description",value:n.description,onChange:m=>g(d=>({...d,description:m.target.value}))})]}),e.jsxs(ae,{children:[e.jsx(k,{text:x("requirements"),uppercase:!0}),e.jsx(xt,{placeholder:x("insert_requirements"),name:"requirements",value:n.requirements,onChange:m=>g(d=>({...d,requirements:m.target.value}))})]}),e.jsx(xe,{name:"createProposal_submit",id:"createProposal_submit",value:x("publish_opportunity")})]})})]})}Br.propTypes={onclick:a.func};const uu=_.section`
  ${({theme:t})=>h`
    animation: ${I} 500ms;

    border-radius: 15px;
    overflow-y: auto;
    border: ${t.borders.xwhite};
    background: rgba(0, 0, 0, 0.8);

    display: flex;
    flex-direction: column;
    gap: ${t.spacings.xlarge};

    /* position: absolute;
    z-index: 100;  */

    width: 100%;
    padding: ${t.spacings.large};


    transition: all 700ms ease-in-out;

    &:hover {
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0px 0px 10px 2px white;
    backdrop-filter: blur(2px);
    }

    @media ${t.medias.mobile} {
      padding: ${t.spacings.small};
    }

    ${W} {
      justify-content: space-between;
      @media ${t.medias.smallpc} {
        flex-direction: row;
      }
    }

    ${Ro} {
      grid-gap: ${t.spacings.medium};
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));


      @media ${t.medias.smallpc} {
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      }

      @media ${t.medias.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      }

      @media ${t.medias.mobile} {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      }
    }
  `}
`;function Yr({onclick:t,proposal:s}){const i=p.useContext(X),{s2tState:r,s2tDispatch:l}=i,{t:n}=w(),g=Ce(),[x,u]=p.useState({opportunityId:s.opportunityId,details:{...s.details},description:s.description,requirements:s.requirements}),m=d=>{d.preventDefault(),x&&(Rl(l,x),g(-1))};return e.jsxs(uu,{children:[e.jsxs(B,{children:[e.jsx(G,{text:n("edit_my_opportunity"),uppercase:!0}),e.jsx(q,{name:n("back"),onclick:t,children:e.jsx(te,{})})]}),e.jsx(je,{children:e.jsxs(me,{onSubmit:m,children:[e.jsx(k,{text:n("details"),uppercase:!0}),e.jsxs(Bt,{isopen:!0,children:[e.jsx(T,{type:"text",name:"league_input",id:"league_input",placeholder:n("which_league"),title:n("league"),value:x.details.org,onChange:d=>u(f=>({...f,details:{...f.details,org:d.target.value}})),required:!0}),e.jsx(T,{type:"text",name:"country_input",id:"country_input",placeholder:n("which_country"),title:n("country"),required:!0,value:x.details.country,onChange:d=>u(f=>({...f,details:{...f.details,country:d.target.value}}))}),e.jsx(H,{title:n("which_position"),id:"position",required:!0,selectedvalue:x.details.opportunity,options:r.formOptions.positions,onDropdownChange:d=>u(f=>({...f,details:{...f.details,opportunity:d}}))}),e.jsx(H,{title:n("which_category"),id:"competitiveCategory",selectedvalue:x.details.category,options:r.formOptions.competitiveCategory,onDropdownChange:d=>u(f=>({...f,details:{...f.details,category:d}})),required:!0}),e.jsx(T,{type:"date",name:"disponibility_input",id:"disponibility_input",title:n("which_disponibility_date"),value:x.details.disponibility,onChange:d=>u(f=>({...f,details:{...f.details,disponibility:d.target.value}}))}),e.jsx(T,{type:"number",name:"minimumHeight_input",id:"minimumHeight_input",placeholder:n("which_minimum_height"),title:n("minimum_height"),value:x.details.minHeight,onChange:d=>u(f=>({...f,details:{...f.details,minHeight:d.target.value}}))}),e.jsx(T,{type:"number",name:"minimumAge_input",id:"minimumAge_input",placeholder:n("which_minimum_age"),title:n("minimum_age"),value:x.details.age.minAge,onChange:d=>u(f=>({...f,details:{...f.details,age:{...f.details.age,minAge:d.target.value}}}))}),e.jsx(T,{type:"number",name:"maximumAge_input",id:"maximumAge_input",placeholder:n("which_maximum_age"),title:n("maximum_age"),value:x.details.age.maxAge,onChange:d=>u(f=>({...f,details:{...f.details,age:{...f.details.age,maxAge:d.target.value}}}))}),e.jsx(T,{type:"text",name:"mininumPayment_input",id:"mininumPayment_input",placeholder:n("which_minimum_payment"),title:n("minimum_payment"),required:!0,value:x.details.payment.minPayment,onChange:d=>u(f=>({...f,details:{...f.details,payment:{...f.details.payment,minPayment:d.target.value}}}))}),e.jsx(T,{type:"text",name:"maximumPayment_input",id:"maximumPayment_input",placeholder:n("which_maximum_payment"),title:n("maximum_payment"),value:x.details.payment.maxPayment,onChange:d=>u(f=>({...f,details:{...f.details,payment:{...f.details.payment,maxPayment:d.target.value}}}))}),e.jsx(H,{title:n("which_currency"),selectedvalue:x.details.payment.currency,id:"paymentCurrency",options:r.formOptions.currency,required:!0,onDropdownChange:d=>u(f=>({...f,details:{...f.details,payment:{...f.details.payment,currency:d}}}))})]}),e.jsxs(ae,{children:[e.jsx(k,{text:n("description"),uppercase:!0}),e.jsx(xt,{placeholder:n("insert_description"),name:"description",value:x.description,onChange:d=>u(f=>({...f,description:d.target.value}))})]}),e.jsxs(ae,{children:[e.jsx(k,{text:n("requirements"),uppercase:!0}),e.jsx(xt,{placeholder:n("insert_requirements"),name:"requirements",value:x.requirements,onChange:d=>u(f=>({...f,requirements:d.target.value}))})]}),e.jsx(xe,{name:"editProposal_submit",id:"editProposal_submit",value:n("confirm_edit"),onclick:d=>m(d)})]})})]})}Yr.propTypes={onclick:a.func,proposal:a.arrayOf(a.object)};function Wr({items:t,title:s}){const[i,r]=p.useState(0),[l,n]=p.useState(8),g=i*l,x=p.useMemo(()=>t?t.slice(g,g+l):[],[t,i,l]),u=({selected:E})=>{r(E)};p.useEffect(()=>{const E=()=>{n(window.innerWidth<768?4:8)};return window.addEventListener("resize",E),E(),()=>window.removeEventListener("resize",E)},[]);const[m,d]=p.useState(null),[f,A]=p.useState(!1),S=E=>{d(E)},D=()=>{window.scrollTo({top:200,behavior:"smooth"})};return e.jsxs(cu,{children:[f?e.jsx(Br,{onclick:()=>A(!f)}):e.jsx(e.Fragment,{children:!m&&e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[e.jsx(G,{text:s,uppercase:!0}),e.jsx(q,{name:Te("create_new_opportunity"),onclick:()=>A(!f),children:e.jsx(vo,{})})]}),x&&x.length>0?e.jsx(Se,{children:x.map(E=>{var V,C,R,ne,b,j,N;return e.jsx(Ni,{date:(V=E==null?void 0:E.details)==null?void 0:V.date,opportunity:(C=E==null?void 0:E.details)==null?void 0:C.opportunity,category:(R=E==null?void 0:E.details)==null?void 0:R.category,country:(ne=E==null?void 0:E.details)==null?void 0:ne.country,org:(b=E==null?void 0:E.details)==null?void 0:b.org,orglogo:(j=E==null?void 0:E.details)==null?void 0:j.orgLogo,orgpath:(N=E==null?void 0:E.details)==null?void 0:N.orgPath,onclick:()=>S(E),id:E==null?void 0:E.opportunityId,ownerview:!0},E==null?void 0:E.opportunityId)})}):e.jsx(y,{text:Te("no_owner_opportunities")}),x.length>0&&e.jsx(du,{previousLabel:Te("previous"),nextLabel:Te("next"),breakLabel:"...",pageCount:t?Math.ceil(t.length/l):0,pageRangeDisplayed:3,marginPagesDisplayed:1,onPageChange:u,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",activeClassName:"active",onClick:D})]})}),m&&e.jsx(Yr,{proposal:m,onclick:()=>d(null)})]})}Wr.propTypes={title:a.string,items:a.arrayOf(a.object)};function to({opportunities:t}){const{t:s}=w();return console.log(t),e.jsx(lu,{children:e.jsx(Wr,{title:s("my_opportunities"),items:t})})}to.propTypes={opportunities:a.arrayOf(a.object)};const mu=_.article`
  ${({theme:t})=>h`

  `}
`;function oo({squad:t}){const{t:s}=w();return p.useContext(X),e.jsx(mu,{children:e.jsx(eo,{title:s("my_squad"),squad:t})})}oo.propTypes={squad:a.arrayOf(a.object)};const _u=_.article`
  ${({theme:t})=>h`
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: ${t.spacings.large};
  `}
`;function hu(){var l,n,g,x,u;const{t}=w(),s=p.useContext(ut),{universityState:i,univeristyDispatch:r}=s;return e.jsxs(_u,{children:[e.jsx(mt,{items:((l=i==null?void 0:i.profile)==null?void 0:l.info)||[]}),e.jsx(Ct,{items:((n=i==null?void 0:i.profile)==null?void 0:n.photos)||[],title:t("photos"),ownerview:!0}),e.jsx(St,{items:((g=i==null?void 0:i.profile)==null?void 0:g.videos)||[],title:t("videos"),profileType:"university"}),e.jsx(B,{children:e.jsx(at,{items:((x=i==null?void 0:i.profile)==null?void 0:x.competitions)||[],title:t("current_competitions")})}),e.jsx(Wt,{items:((u=i==null?void 0:i.profile)==null?void 0:u.awards)||[],title:t("titles_and_awards")})]})}const gu=_.article`
  ${({theme:t})=>h`
 
    width: 100%;
    height: 100%;
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.large};
    border-radius: 12px;

    ${W} {
      align-items: center
    }

    ${fe} {
      border-radius: 12px;
    }

    ${jt} {
      .swiper-slide {
        background: rgba(200,200,200,200.5);
      }
    }
  `}
`;function xu(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsxs(gu,{children:[e.jsxs(U,{slidesperview:2,backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(ye,{title:t("social"),size:"400px",items:i.news}),e.jsx(F,{title:t("ranking"),type:"referralrank",items:i.rankings.referral})]}),e.jsxs(U,{title:t("trending_videos"),slidesperview:2,children:[e.jsx(K,{size:"300px",items:i.news,title:t("professional")}),e.jsx(K,{size:"300px",items:i.news,title:t("semi_professional")}),e.jsx(K,{size:"300px",items:i.news,title:t("university")}),e.jsx(K,{size:"300px",items:i.news,title:t("amateur")}),e.jsx(K,{size:"300px",items:i.news,title:t("recreational")})]}),e.jsxs(U,{slidesperview:2,backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:i.events}),e.jsx(F,{title:t("news"),type:"news",items:i.news})]})]})}const yu=_.article`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.medium};
    width: 100%;
    height: 100%;
  `}
`;function Gr(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsxs(yu,{children:[e.jsx(Le,{items:i.videos.trending,title:t("favorite_videos"),publicview:!0,lazy:!0}),e.jsx(lo,{title:t("favorite_opportunities"),items:i.proposals.male.professional.clubs})]})}Gr.propTypes={};const fu=_.article`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.large};
    
  `}
`;function bu(){var l,n,g,x,u,m;const{t}=w(),s=p.useContext(et),{staffState:i,staffDispatch:r}=s;return e.jsxs(fu,{children:[e.jsx(mt,{items:((l=i==null?void 0:i.profile)==null?void 0:l.info)||[]}),e.jsx(Ct,{items:((n=i==null?void 0:i.profile)==null?void 0:n.photos)||[],title:t("photos"),ownerview:!0}),e.jsx(St,{items:((g=i==null?void 0:i.profile)==null?void 0:g.videos)||[],title:t("videos"),profileType:"staff"}),e.jsxs(B,{children:[e.jsx(at,{items:((x=i==null?void 0:i.profile)==null?void 0:x.clubs)||[],title:t("club_history")}),e.jsx(at,{items:((u=i==null?void 0:i.profile)==null?void 0:u.studies)||[],title:t("academic_history")})]}),e.jsx(Wt,{items:((m=i==null?void 0:i.profile)==null?void 0:m.awards)||[],title:t("titles_and_awards")})]})}const vu=_.article`
  ${({theme:t})=>h`
 
    width: 100%;
    height: 100%;
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.large};
    border-radius: 12px;

    ${W} {
      align-items: center
    }

    ${fe} {
      border-radius: 12px;
    }

    ${jt} {
      .swiper-slide {
        background: rgba(200,200,200,200.5);
      }
    }
  `}
`;function wu(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsxs(vu,{children:[e.jsxs(U,{slidesperview:2,backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(ye,{title:t("social"),size:"400px",items:i.news}),e.jsx(F,{title:t("ranking"),type:"referralrank",items:i.rankings.referral})]}),e.jsxs(U,{title:t("trending_videos"),slidesperview:2,children:[e.jsx(K,{size:"300px",items:i.news,title:t("professional")}),e.jsx(K,{size:"300px",items:i.news,title:t("semi_professional")}),e.jsx(K,{size:"300px",items:i.news,title:t("university")}),e.jsx(K,{size:"300px",items:i.news,title:t("amateur")}),e.jsx(K,{size:"300px",items:i.news,title:t("recreational")})]}),e.jsxs(U,{slidesperview:2,backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:i.events}),e.jsx(F,{title:t("news"),type:"news",items:i.news})]})]})}const ju=_.section`
  ${({theme:t})=>h`
      background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
      ),
      url('/assets/images/background.png');

     background-position: center;
     background-size: cover;

     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     gap: ${t.spacings.medium};
     padding: ${t.spacings.large};

     width: 100vw;
     height: 100vh;
  `}
`;function Xr(){const t=Ce(),{t:s}=w(),{logout:i}=Ut(),r=()=>{i(),window.alert(s("successfully_logged_out")),t("/")};return e.jsx(ju,{children:e.jsx(Zt,{isopen:!0,title:s("end_seasson_question"),firstoption:s("yes"),onfirstclick:r,firstpath:"/",secondoption:s("no"),onsecondclick:()=>t(-1)})})}Xr.propTypes={};const $u=_.section`
  ${({theme:t})=>h`


  ${Ae} {
      justify-content: flex-end;

      @media ${t.medias.tablet} {
        justify-content: center;
      }

      @media ${t.medias.mobile} {
        justify-content: flex-end;
      }

      ${ge} {
        @media ${t.medias.mobile} {
         display: none;
        }
      }

      ${M} {
        display: none;
        animation: none;

        @media ${t.medias.mobile} {
          display: flex;
        }
      }
    }

    ${oe} {
      & ${de} {
        height: 30px;
      }
    }

    > ${oe} {
      display: none;
      flex-direction: column;
      gap: ${t.spacings.small};
      padding: ${t.spacings.medium};

      @media ${t.medias.mobile} {
        display: flex;
      }
    }
      
    >${ae} {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      gap: ${t.spacings.xlarge};
      padding: ${t.spacings.medium};


      @media ${t.medias.tablet} {
        width: 100%;
      }
    }

    
  `}
`,Cs=_.nav`
  ${({theme:t})=>h`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: ${t.spacings.small};
     height: 100%;
     width: 100%;
     padding: ${t.spacings.xsmall};
  `}
`;function Qr(){const{t}=w(),[s,i]=p.useState(""),r=Oe();return p.useEffect(()=>{i(r.pathname)},[r.pathname]),e.jsxs(e.Fragment,{children:[e.jsxs(Cs,{children:[e.jsx(c,{active:s==="/staff-dashboard"||s==="/staff-dashboard/",path:"",text:t("home"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/staff-dashboard/profile",path:"profile",text:t("profile"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/staff-dashboard/opportunities",path:"opportunities",text:t("opportunities"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/staff-dashboard/scouts",path:"scouts",text:t("scouts"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/staff-dashboard/clubs",path:"clubs",text:t("clubs"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/staff-dashboard/favorites",path:"favorites",text:t("favorites"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/staff-dashboard/events",path:"events",text:t("events"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/staff-dashboard/contacts",path:"contacts",text:t("contacts"),color:o.colors.white,hovercolor:o.colors.black})]}),e.jsxs(Cs,{children:[e.jsx(c,{active:s==="/staff-dashboard/friends",path:"friends",text:t("friends"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/staff-dashboard/store",path:"store",text:t("store"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/staff-dashboard/my-affiliates",path:"my-affiliates",text:t("my_affiliates"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/staff-dashboard/s2t+",path:"s2t+",text:t("t2s+"),color:o.colors.white,hovercolor:o.colors.black})]})]})}Qr.propTypes={};function Jr(){const{t}=w();return e.jsxs($e,{children:[e.jsxs(c,{path:"",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(zt,{}),t("home")]}),e.jsxs(c,{path:"profile",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(ft,{}),t("profile")]}),e.jsxs(c,{path:"opportunities",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(bt,{}),t("opportunities")]}),e.jsxs(c,{path:"scouts",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Dt,{}),t("scouts")]}),e.jsxs(c,{path:"clubs",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(qt,{}),t("clubs")]}),e.jsxs(c,{path:"favorites",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(It,{}),t("favorites")]}),e.jsxs(c,{path:"events",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Rt,{}),t("events")]}),e.jsxs(c,{path:"contacts",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Ot,{}),t("contacts")]}),e.jsxs(c,{path:"friends",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(vt,{}),t("friends")]}),e.jsxs(c,{path:"store",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Nt,{}),t("store")]}),e.jsxs(c,{path:"s2t+",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Mt,{}),t("t2s+")]}),e.jsxs(c,{path:"my-affiliates",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Lt,{}),t("my_affiliates")]}),e.jsxs(c,{color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(te,{}),t("close")]})]})}Jr.propTypes={};function ku(){const{t}=w(),s=p.useContext(et),{staffState:i,staffDispatch:r}=s,[l,n]=p.useState(!1),[g,x]=p.useState(!1),[u,m]=p.useState(!1),[d,f]=p.useState(!1),A=()=>{f(!d),m(!1)},S=()=>{m(!u),f(!1)};return e.jsxs($u,{children:[e.jsxs(Pe,{children:[e.jsxs(be,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/staff-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),g?e.jsx(q,{name:t("menu"),onclick:()=>x(!g),children:e.jsx(te,{})}):e.jsx(q,{name:t("close_menu"),onclick:()=>x(!g),children:e.jsx(_e,{})})]}),g&&e.jsxs(ee,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/staff-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),e.jsxs(Je,{backgroundimagesrc:i.profile.banner.backgroundImageSrc,children:[e.jsx(We,{imagesrc:i.profile.banner.profileImageSrc,badge:i.profile.banner.badge,type:t(i.profile.info.profileType),ownerview:!0}),e.jsx(ct,{name:i.profile.banner.name}),e.jsxs(B,{children:[e.jsx($,{path:"profile-edit",text:t("edit_profile"),bgcolor:o.colors.primary,bghover:o.colors.black,textcolor:o.colors.black,texthover:o.colors.primary,border:o.colors.black,borderhover:o.colors.primary}),e.jsx(q,{active:u,hovercolor:o.colors.primary,name:t("settings"),onclick:S,children:e.jsx(wt,{})}),e.jsx(q,{active:d,hovercolor:o.colors.primary,name:t("share"),onclick:A,children:e.jsx(nt,{})}),u&&e.jsx(ee,{onclick:()=>m(!1),children:e.jsx(dt,{})}),d&&e.jsx(ee,{onclick:()=>f(!1),children:e.jsx(Ke,{})})]})]}),e.jsx(Ge,{children:e.jsx(Qr,{})}),l?e.jsx(Xe,{onclick:()=>n(!l),children:e.jsx(Jr,{})}):e.jsx(Qe,{name:t("menu"),onclick:()=>n(!l),children:e.jsx(_e,{})}),e.jsx(z,{color:o.colors.black,children:e.jsx(Ne,{})}),e.jsx(ce,{items:i.benefits,title:t("my_benefits")})]})}const Cu=_.footer`
  ${({theme:t})=>h`
    background: linear-gradient(to bottom, ${t.colors.black}, ${t.colors.darkgray});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${t.spacings.small};
    animation: ${jo} 300ms ease-out;

    ${W} {
    animation: ${ue} 2000ms;
    justify-content: center;
    align-items: center;
    margin-top: ${t.spacings.medium};

    @media ${t.medias.smallpc} {
      flex-direction: row;
    }

    
    }
    ${ge} {
       @media ${t.medias.mobile} {
        flex-direction: column;
        gap: ${t.spacings.small};
       }

       ${Z} {
        @media ${t.medias.tablet} {
          font-size: ${t.sizes.small};
        }
       }
    }
  `}
`;function Jt({type:t}){const s=t.toLowerCase();return e.jsxs(dl,{children:[s==="youtube"&&e.jsx(c,{path:"https://www.youtube.com",hovercolor:"#FF0000",newtab:!0,children:e.jsx(dn,{})}),s==="facebook"&&e.jsx(c,{path:"https://www.facebook.com",hovercolor:"#1877f2",newtab:!0,children:e.jsx(pn,{})}),s==="twitter"&&e.jsx(c,{path:"https://www.x.com",hovercolor:"#1DA1F2",newtab:!0,children:e.jsx(un,{})}),s==="instagram"&&e.jsx(c,{path:"https://www.instagram.com",hovercolor:"#C13584",newtab:!0,children:e.jsx(mn,{})}),s==="tiktok"&&e.jsx(c,{path:"https://www.tiktok.com",hovercolor:"#ff0050",newtab:!0,children:e.jsx(_n,{})})]})}Jt.propTypes={type:a.string.isRequired};function Kr({children:t}){const{t:s}=w();return e.jsxs(Cu,{children:[e.jsxs(B,{children:[e.jsx(Jt,{type:"facebook"}),e.jsx(Jt,{type:"instagram"}),e.jsx(Jt,{type:"twitter"}),e.jsx(Jt,{type:"youtube"}),e.jsx(Jt,{type:"tiktok"})]}),e.jsxs(be,{children:[e.jsx(c,{path:"/policies/privacy",text:s("privacy"),color:o.colors.lightgray,hovercolor:o.colors.white}),e.jsx(c,{path:"/policies/terms-of-use",text:s("terms_of_use"),color:o.colors.lightgray,hovercolor:o.colors.white}),e.jsx(c,{path:"/policies/copyright",text:s("copyright"),color:o.colors.lightgray,hovercolor:o.colors.white}),e.jsx(c,{path:"/policies/acceptable-use",text:s("acceptable_use"),color:o.colors.lightgray,hovercolor:o.colors.white}),e.jsx(c,{path:"",text:s("about_us"),color:o.colors.lightgray,hovercolor:o.colors.white}),e.jsx(c,{path:"",text:s("need_help_question"),color:o.colors.lightgray,hovercolor:o.colors.white})]}),e.jsx(y,{text:"© 2024 Talent 2 Show",color:o.colors.primary,uppercase:!0})]})}Kr.propTypes={children:a.node};const Su=_.section`
  ${({theme:t})=>h`


  ${Ae} {
    background-image: linear-gradient( ${t.colors.black}, ${t.colors.transparent});

    ${ge} {
      @media ${t.medias.tablet} {
       display: none;
      }
    }


    ${M} {
      display: none;
      animation: none;
        @media ${t.medias.tablet} {
          display: flex;
        }
    }
  }

  ${no} {
    position: absolute;
    top: 80px;
  }

  ${Po} {
    padding-top: 50px;

      > ${pe}, > ${ke} {
      font-weight: 900;
      margin-bottom: 0px;
      text-align: center;
      text-shadow: 3px 3px 1px ${t.colors.lightblack};
    }
    

    
    @media ${t.medias.smallpc} {
      max-height: 500px;
    }

    @media ${t.medias.tablet} {
      max-height: 600px;
      height: 600px;
    }

    @media ${t.medias.mobile} {
      max-height: 600px;
      height: 600px;

    }


  }

  ${P} {
    &::before {
      display: none;
    }
  }

  ${oe} {
      & ${de} {
        height: 30px;
      }
    }

    > ${oe} {
      display: none;
      flex-direction: column;
      gap: ${t.spacings.small};
      padding: ${t.spacings.medium};

      @media ${t.medias.tablet} {
        display: flex;
      }
    }
  

  `}
`;function Zr(){const[t,s]=p.useState(!1),{t:i}=w();return e.jsxs(Su,{children:[e.jsxs(Pe,{children:[e.jsx(lt,{size:"150px",logo:"/assets/images/pngs/logo.png"}),e.jsxs(be,{children:[e.jsx($,{path:"/",text:i("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/player-dashboard",text:i("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/benefits",text:i("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0})]}),t?e.jsx(q,{name:i("menu"),onclick:()=>s(!t),children:e.jsx(te,{})}):e.jsx(q,{name:i("close_menu"),onclick:()=>s(!t),children:e.jsx(_e,{})})]}),t&&e.jsxs(ee,{children:[e.jsx($,{path:"/",text:i("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/player-dashboard",text:i("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/player-dashboard",text:i("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0})]}),e.jsx(pt,{children:e.jsx(Ne,{})})]})}Zr.propTypes={};const Tu=_.article`
  ${({theme:t})=>h`
 
     text-align: center;

     display: flex;
     flex-direction: column;

     ${fe} {
      .swiper-slide {
       > ${Z} {
         gap: ${t.spacings.small};
            > img {
              width: 100%;
              height: 100%;
              max-width: 600px;
              border-radius: 12px
           }
      }
      }
     }


     & ${J} {
      animation: ${I} 500ms;

     }

     & ${P} {
      background-image: linear-gradient(to right, ${t.colors.lightprimary}, ${t.colors.lightsecondary});
      padding: ${t.spacings.xsmall};
      border-radius: 12px;
      border: ${t.borders.white};
      
      @media ${t.medias.mobile} {
        padding: ${t.spacings.xxsmall};
      }
      
     }

     > ${ke} {
        text-align: center;
        margin-bottom: 0;
        padding: ${t.spacings.xsmall};
        animation: ${I} 500ms;

     }

     > ${se} {
      animation: ${I} 500ms;
     }
 
  `}
`;function ve({children:t,backgroundimagesrc:s,gradientdirection:i,backgroundfixed:r,autoplay:l}){return e.jsx(Po,{backgroundimagesrc:s,gradientdirection:i,backgroundfixed:r?"backgroundfixed":void 0,children:t})}ve.propTypes={children:a.node.isRequired};function Fo(){p.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const{t}=w;return e.jsxs(Tu,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(G,{text:t("welcome_t2s_benefits_club"),uppercase:!0}),e.jsx(y,{text:t("benefits_club_text_1")}),e.jsx(y,{text:t("benefits_club_text_2")}),e.jsx(Me,{children:e.jsxs(J,{children:[e.jsx(P,{children:t("benefits_club_step_1")}),e.jsx(P,{children:t("benefits_club_step_2")}),e.jsx(P,{children:t("benefits_club_step_3")}),e.jsx(P,{children:t("benefits_club_step_4")})]})})]}),e.jsxs(U,{autoplay:!0,slidesperview:3,children:[e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})})]}),e.jsx(ce,{items:O.photos.benefits,title:t("other_t2s_benefits")}),e.jsxs(U,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-2.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:O.events}),e.jsx(ye,{title:t("social"),size:"400px",items:O.news}),e.jsx(F,{title:t("news"),type:"news",items:O.news})]})]})}Fo.propTypes={};const Au=_.article`
  ${({theme:t})=>h`
     text-align: center;
     display: flex;
     flex-direction: column;

     ${fe} {

      .swiper-slide {
       > ${Z} {
         gap: ${t.spacings.small};
            > img {
              width: 100%;
              height: 100%;
              max-width: 600px;
              border-radius: 12px
           }
      }
      }
     }


     & ${J} {
      animation: ${I} 500ms;

     }

     & ${P} {
      background-image: linear-gradient(to right, ${t.colors.lightprimary}, ${t.colors.lightsecondary});
      padding: ${t.spacings.xsmall};
      border-radius: 12px;
      border: ${t.borders.white};
      
      @media ${t.medias.mobile} {
        padding: ${t.spacings.xxsmall};
      }
      
     }

     > ${ke} {
        text-align: center;
        margin-bottom: 0;
        padding: ${t.spacings.xsmall};
        animation: ${I} 500ms;

     }

     > ${se} {
      animation: ${I} 500ms;
     }
 
  `}
`;function ea(){p.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const{t}=w();return e.jsxs(Au,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(G,{text:t("welcome_t2s_investments"),uppercase:!0}),e.jsx(y,{text:t("investments_text_1")}),e.jsx(y,{text:t("investments_text_2")}),e.jsx(Me,{children:e.jsxs(J,{children:[e.jsx(P,{children:t("investments_step_1")}),e.jsx(P,{children:t("investments_step_2")}),e.jsx(P,{children:t("investments_step_3")}),e.jsx(P,{children:t("investments_step_4")})]})})]}),e.jsxs(U,{autoplay:!0,slidesperview:3,children:[e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})})]}),e.jsx(ce,{items:O.photos.benefits,title:t("other_t2s_benefits")}),e.jsxs(U,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-2.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:O.events}),e.jsx(ye,{title:t("social"),size:"400px",items:O.news}),e.jsx(F,{title:t("news"),type:"news",items:O.news})]})]})}ea.propTypes={};const Pu=_.article`
  ${({theme:t})=>h`
 
     text-align: center;

     display: flex;
     flex-direction: column;



     & ${J} {
      animation: ${I} 500ms;
     }

     & ${P} {
      background-image: linear-gradient(to right, ${t.colors.lightprimary}, ${t.colors.lightsecondary});
      padding: ${t.spacings.xsmall};
      border-radius: 12px;
      border: ${t.borders.white};
      
      @media ${t.medias.mobile} {
        padding: ${t.spacings.xxsmall};
      }
      
     }

     > ${ke} {
        text-align: center;
        margin-bottom: 0;
        padding: ${t.spacings.xsmall};
        animation: ${I} 500ms;

     }

     > ${se} {
      animation: ${I} 500ms;
     }

    
  `}
`;function ta({items:t}){const{t:s}=w();return p.useState(),p.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),e.jsxs(Pu,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(G,{text:s("welcome_t2s_events"),uppercase:!0}),e.jsx(y,{text:s("events_text_1")}),e.jsx(y,{text:s("events_text_2")}),e.jsx(Me,{children:e.jsxs(J,{children:[e.jsx(P,{children:s("events_step_1")}),e.jsx(P,{children:s("events_step_2")}),e.jsx(P,{children:s("events_step_3")}),e.jsx(P,{children:s("events_step_4")})]})})]}),e.jsx(xs,{items:t}),e.jsx(ce,{items:O.photos.benefits,title:s("other_t2s_benefits")}),e.jsxs(U,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-2.png",gradientdirection:"to top",children:[e.jsx(F,{title:s("events"),type:"events",items:O.events}),e.jsx(ye,{title:s("social"),size:"400px",items:O.news}),e.jsx(F,{title:s("news"),type:"news",items:O.news})]})]})}ta.propTypes={};const oa=_.div`
  ${({theme:t,hovercolor:s,active:i,activecolor:r,color:l,bgcolor:n,bghover:g})=>h`
    background: ${n};
    animation: ${i?$o:ko} 1000ms;

    width: 100%;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${t.spacings.small};
    justify-content: center;

    padding: ${t.spacings.small};
    border: ${i?`1px solid ${r}`:t.borders.white};
    box-shadow: ${i?`0px 0px 10px 2px ${r}`:"none"};

    transition: all 500ms ease-in-out ;

     &:hover {
      box-shadow: ${i?`0px 0px 10px 2px ${r}`:`0px 0px 10px 2px ${t.colors.gray}`};

       background: ${g};

        > svg {
          transform: scale(1.05);
          color: ${s};
        }
      }

      > svg {
        width: 50%;
        height: 50%;
        transition: all 500ms ease-in-out ;
        color: ${i?r:l};
        transform: ${i?"scale(1.05)":"none"};
      }
  `}
`,Eu=_.section`
  ${({theme:t})=>h`
  

  ${Ae} {
    background-image: linear-gradient( ${t.colors.black}, ${t.colors.transparent});

    ${ge} {
       @media ${t.medias.tablet} {
         display: none;
       }
    }

    ${M} {
      display: none;
      animation: none;
        @media ${t.medias.tablet} {
          display: flex;
        }
    }
  }


  ${Se} {
     width: 85%;
     padding: ${t.spacings.small};
     grid-gap: ${t.spacings.large};
     grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));

      @media (max-width: 1080px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }

      @media ${t.medias.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        width: 100%;
      }
        
      @media (max-width: 530px) {
        grid-template-columns: repeat(auto-fit, minmax(181px, 1fr));
      }

      @media ${t.medias.mobile} {
        grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
      }
    }

  ${fe} {
     width: 100%;
     height: auto;

     & img {
       width: 85%;
       border-radius: 12px;

       @media ${t.medias.tablet} {
         width: 100%;
        }
      } 
    }

    ${Po} {

       ${pe} {
          font-weight: 900;
          margin-bottom: 0px;
          text-align: center;
          text-shadow: 3px 3px 1px ${t.colors.lightblack};

          @media (max-width: 1150px) {
            font-size: ${t.sizes.xxlarge};
          }

          @media ${t.medias.tablet} {
            font-size: ${t.sizes.large};
          }

          @media ${t.medias.mobile} {
            font-size: ${t.sizes.medium};
          }

          @media ${t.medias.smallmobile} {
            font-size: ${t.sizes.small};
          }
        }

        ${se} {
          text-shadow: 3px 3px 1px ${t.colors.lightblack};
          text-align: center;
        }

        ${W} {
          justify-content: center;
          flex-direction: row;

          @media ${t.medias.smallpc} {
            flex-direction: row;
          }

          @media ${t.medias.mobile} {
            flex-direction: column;
          }
        }

        ${de} {
          box-shadow: 2px 5px 3px 1px ${t.colors.lightblack};

          @media${t.medias.tablet} {
          font-size: ${t.sizes.small};
          }

          @media${t.medias.smallmobile} {
            font-size: ${t.sizes.xsmall};
          }
        }
     }

    ${oa} {
      transition: all 200ms ease-in-out ;
      position: relative;
      animation: none;

        & svg {
          transition: all 200ms ease-in-out ;

          @media (max-width: 1080px) {
            width: 30%;          
          }

          @media ${t.medias.mobile} {
            width: 15%;
          }
        }

        ${pe} {

          @media ${t.medias.smallpc} {
            font-size: ${t.sizes.xsmall};
          }

          @media ${t.medias.tablet} {
            font-size: ${t.sizes.xsmall};
          }

          @media ${t.medias.smallmobile} {
            font-size: ${t.sizes.xxsmall};
          }
        }
    }

  > ${oe} {
      display: none;
      flex-direction: column;
      gap: ${t.spacings.small};
      padding: ${t.spacings.medium};

      @media ${t.medias.tablet} {
        display: flex;
      }
    }

  ${no} {
    position: absolute;
    top: 80px;
  }

  `}
`;function sa({children:t}){const[s,i]=p.useState(!1),{t:r}=w();return e.jsxs(Eu,{children:[e.jsxs(Pe,{children:[e.jsx(lt,{size:"150px",logo:"/assets/images/pngs/logo.png"}),e.jsxs(be,{children:[e.jsx($,{path:"/",text:r("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/player-dashboard",text:r("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/users",text:r("profile_types"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0})]}),s?e.jsx(q,{name:r("menu"),onclick:()=>i(!s),children:e.jsx(te,{})}):e.jsx(q,{name:r("close_menu"),onclick:()=>i(!s),children:e.jsx(_e,{})})]}),s&&e.jsxs(ee,{children:[e.jsx($,{path:"/",text:r("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/player-dashboard",text:r("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/player-dashboard",text:r("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0})]}),e.jsx(pt,{children:e.jsx(Ne,{})})]})}sa.propTypes={};const zu=_.article`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.medium};

    width: 100%;
    height: 100%;
  `}
`,Du=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
  `}
`,co=_.div`
  ${({theme:t})=>h`
    animation: ${ue} 500ms;
    background:  rgba(0,0,0,1);
    border-radius: 12px;
    border: ${t.borders.primary};
    box-shadow: 0px 0px 10px 2px ${t.colors.primary};

    width: 100%;
    padding: ${t.spacings.small};
    position: absolute;
    top: 105%;
    z-index: 500;
  `}
`;function qe({children:t,bgcolor:s=o.colors.black,bghover:i="",active:r,activecolor:l=o.colors.primary,onclick:n,name:g="Ícone",hovercolor:x="",color:u=o.colors.white}){return e.jsx(oa,{onClick:n,title:g,"aria-label":g,hovercolor:x,active:r?"active":void 0,activecolor:l,color:u,bgcolor:s,bghover:i,children:t})}qe.propTypes={children:a.node.isRequired,onclick:a.func,active:a.bool,name:a.string,hovercolor:a.string,activecolor:a.string,color:a.string};a.node.isRequired;function ia({children:t}){const{t:s}=w(),[i,r]=p.useState("step-1");return e.jsxs(zu,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(k,{as:"h2",uppercase:!0,text:s("slogan"),size:o.sizes.huge}),e.jsx(y,{size:o.sizes.large,text:s("player_text")}),e.jsx($,{path:"/register",text:s("register"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.lightprimary,texthover:o.colors.primary,border:o.colors.lightprimary,borderhover:o.colors.primary,size:o.sizes.large})]}),e.jsx(k,{text:s("how_it_works"),size:o.sizes.xxlarge,uppercase:!0}),e.jsxs($e,{children:[e.jsxs(qe,{name:s("player_step_1_title"),onclick:()=>r(i==="step-1"?"":"step-1"),active:i==="step-1",activecolor:o.colors.primary,children:[e.jsx(Ho,{}),e.jsx(k,{text:s("player_step_1_title"),size:o.sizes.small,uppercase:!0,as:"h3"}),i==="step-1"&&e.jsx(co,{children:e.jsxs(J,{children:[e.jsx(P,{color:o.colors.primary,children:s("generic_step_1_part_1")}),e.jsx(P,{color:o.colors.primary,children:s("generic_step_1_part_2")}),e.jsx(P,{color:o.colors.primary,children:s("player_step_1_part_3")}),e.jsx(P,{color:o.colors.primary,children:s("generic_step_1_part_4")})]})})]}),e.jsxs(qe,{name:s("player_step_2_title"),onclick:()=>r(i==="step-2"?"":"step-2"),active:i==="step-2",activecolor:o.colors.primary,children:[e.jsx(Bo,{}),e.jsx(k,{text:s("player_step_2_title"),size:o.sizes.small,uppercase:!0,as:"h3"}),i==="step-2"&&e.jsx(co,{children:e.jsxs(J,{children:[e.jsx(P,{color:o.colors.primary,children:s("generic_step_2_part_1")}),e.jsx(P,{color:o.colors.primary,children:s("generic_step_2_part_2")}),e.jsx(P,{color:o.colors.primary,children:s("player_step_2_part_3")})]})})]}),e.jsxs(qe,{name:s("player_step_3_title"),onclick:()=>r(i==="step-3"?"":"step-3"),active:i==="step-3",activecolor:o.colors.primary,children:[e.jsx(Yo,{}),e.jsx(k,{text:s("player_step_3_title"),size:o.sizes.small,uppercase:!0,as:"h3"}),i==="step-3"&&e.jsx(co,{children:e.jsxs(J,{children:[e.jsx(P,{color:o.colors.primary,children:s("generic_step_3_part_1")}),e.jsx(P,{color:o.colors.primary,children:s("generic_step_3_part_2")}),e.jsx(P,{color:o.colors.primary,children:s("player_step_3_part_3")})]})})]}),e.jsxs(qe,{name:s("player_step_4_title"),onclick:()=>r(i==="step-4"?"":"step-4"),active:i==="step-4",activecolor:o.colors.primary,children:[e.jsx(Wo,{}),e.jsx(k,{text:s("player_step_4_title"),size:o.sizes.small,uppercase:!0,as:"h3"}),i==="step-4"&&e.jsx(co,{children:e.jsxs(J,{children:[e.jsx(P,{color:o.colors.primary,children:s("player_step_4_part_1")}),e.jsx(P,{color:o.colors.primary,children:s("player_step_4_part_2")}),e.jsx(P,{color:o.colors.primary,children:s("player_step_4_part_3")}),e.jsx(P,{color:o.colors.primary,children:s("player_step_4_part_4")})]})})]})]}),e.jsxs(U,{slidesperview:1,children:[e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""})]}),e.jsx(Du,{children:e.jsx(ce,{items:O.photos.benefits,title:"Benefícios"})}),e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(k,{text:s("be_part_exclamation"),uppercase:!0,size:o.sizes.xhuge}),e.jsx(y,{size:o.sizes.large,text:s("player_text_2")}),e.jsxs(B,{children:[e.jsx($,{path:"/login",text:s("login"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.lightprimary,texthover:o.colors.primary,border:o.colors.lightprimary,borderhover:o.colors.primary,size:o.sizes.medium}),e.jsx($,{path:"/register",text:s("register"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.lightprimary,texthover:o.colors.primary,border:o.colors.lightprimary,borderhover:o.colors.primary,size:o.sizes.medium})]})]})]})}ia.propTypes={};const qu=_.article`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.medium};

    width: 100%;
    height: 100%;
  `}
`,Iu=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
  `}
`,po=_.div`
  ${({theme:t})=>h`
    animation: ${ue} 500ms;
    background:  rgba(0,0,0,1);
    border-radius: 12px;
    border: ${t.borders.primary};
    box-shadow: 0px 0px 10px 2px ${t.colors.primary};

    width: 100%;
    padding: ${t.spacings.small};
    position: absolute;
    top: 105%;
    z-index: 500;
  `}
`;function ra({children:t}){const{t:s}=w(),[i,r]=p.useState("step-1");return e.jsxs(qu,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(k,{as:"h2",uppercase:!0,text:s("slogan"),size:o.sizes.huge}),e.jsx(y,{size:o.sizes.large,text:s("club_text")}),e.jsx($,{path:"/register",text:s("register"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.lightprimary,texthover:o.colors.primary,border:o.colors.lightprimary,borderhover:o.colors.primary,size:o.sizes.large})]}),e.jsx(k,{text:s("how_it_works"),size:o.sizes.xxlarge,uppercase:!0}),e.jsxs($e,{children:[e.jsxs(qe,{name:s("club_step_1_title"),onclick:()=>r(i==="step-1"?"":"step-1"),active:i==="step-1",activecolor:o.colors.primary,children:[e.jsx(Ho,{}),e.jsx(k,{text:s("club_step_1_title"),size:o.sizes.small,uppercase:!0,as:"h3"}),i==="step-1"&&e.jsx(po,{children:e.jsxs(J,{children:[e.jsx(P,{color:o.colors.primary,children:s("generic_step_1_part_1")}),e.jsx(P,{color:o.colors.primary,children:s("generic_step_1_part_2")}),e.jsx(P,{color:o.colors.primary,children:s("club_step_1_part_3")}),e.jsx(P,{color:o.colors.primary,children:s("generic_step_1_part_4")})]})})]}),e.jsxs(qe,{name:s("club_step_2_title"),onclick:()=>r(i==="step-2"?"":"step-2"),active:i==="step-2",activecolor:o.colors.primary,children:[e.jsx(Bo,{}),e.jsx(k,{text:s("club_step_2_title"),size:o.sizes.small,uppercase:!0,as:"h3"}),i==="step-2"&&e.jsx(po,{children:e.jsxs(J,{children:[e.jsx(P,{color:o.colors.primary,children:s("generic_step_2_part_1")}),e.jsx(P,{color:o.colors.primary,children:s("generic_step_2_part_2")}),e.jsx(P,{color:o.colors.primary,children:s("club_step_2_part_3")})]})})]}),e.jsxs(qe,{name:s("club_step_3_title"),onclick:()=>r(i==="step-3"?"":"step-3"),active:i==="step-3",activecolor:o.colors.primary,children:[e.jsx(Yo,{}),e.jsx(k,{text:s("club_step_3_title"),size:o.sizes.small,uppercase:!0,as:"h3"}),i==="step-3"&&e.jsx(po,{children:e.jsxs(J,{children:[e.jsx(P,{color:o.colors.primary,children:s("generic_step_3_part_1")}),e.jsx(P,{color:o.colors.primary,children:s("generic_step_3_part_2")}),e.jsx(P,{color:o.colors.primary,children:s("club_step_3_part_3")})]})})]}),e.jsxs(qe,{name:s("club_step_4_title"),onclick:()=>r(i==="step-4"?"":"step-4"),active:i==="step-4",activecolor:o.colors.primary,children:[e.jsx(Wo,{}),e.jsx(k,{text:s("club_step_4_title"),size:o.sizes.small,uppercase:!0,as:"h3"}),i==="step-4"&&e.jsx(po,{children:e.jsxs(J,{children:[e.jsx(P,{color:o.colors.primary,children:s("club_step_4_part_1")}),e.jsx(P,{color:o.colors.primary,children:s("club_step_4_part_2")}),e.jsx(P,{color:o.colors.primary,children:s("club_step_4_part_3")}),e.jsx(P,{color:o.colors.primary,children:s("club_step_4_part_4")})]})})]})]}),e.jsxs(U,{slidesperview:1,children:[e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""})]}),e.jsx(Iu,{children:e.jsx(ce,{items:O.photos.benefits,title:"Benefícios"})}),e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(k,{text:s("be_part_exclamation"),uppercase:!0,size:o.sizes.xhuge}),e.jsx(y,{size:o.sizes.large,text:s("club_text_2")}),e.jsxs(B,{children:[e.jsx($,{path:"/login",text:s("login"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.lightprimary,texthover:o.colors.primary,border:o.colors.lightprimary,borderhover:o.colors.primary,size:o.sizes.medium}),e.jsx($,{path:"/register",text:s("register"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.lightprimary,texthover:o.colors.primary,border:o.colors.lightprimary,borderhover:o.colors.primary,size:o.sizes.medium})]})]})]})}ra.propTypes={};const Ru=_.div`
  ${({theme:t})=>h`

  `}
`,Ou=_.div`
  ${({theme:t})=>h`


  ${W} {
      justify-content: space-between;
      align-items: center;
      margin-bottom: ${t.spacings.medium};
      @media ${t.medias.smallpc} {
        flex-direction: row;
      }
    }


  ${Se} {
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));

      @media ${t.medias.smallpc} {
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      }

      @media ${t.medias.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
      }

      @media ${t.medias.mobile} {
        grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
      }
     }
 
  `}
`,Nu=_(so)`
  ${({theme:t})=>h`
    font-family: ${t.fonts.primary};
    list-style: none;
    cursor: pointer;
    user-select: none;
    width: 100%;
    color: ${t.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.small};

    margin-top: ${t.spacings.small};
    
    transition: all 500ms ease-in-out;

    .page-item {
      height: 30px;
      width: 30px;
      font-size: ${t.sizes.medium};
      display: flex;
      justify-content: center;
      align-items: center;
      border: ${t.borders.white};
      border-radius: 50%;
      transition: all 500ms ease-in-out;

      &:hover {
        border: ${t.borders.primary};
      }

      @media ${t.medias.mobile} {
        height: 20px;
        width: 20px;
        font-size: ${t.sizes.small};
      }

      @media ${t.medias.smallmobile} {
        height: 15px;
        width: 15px;
        font-size: ${t.sizes.xsmall};
      }
      

    }

    .page-link {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }

    .active {
      border: ${t.borders.primary};
      transform: scale(1.2);
      color: ${t.colors.primary};
      box-shadow: 0px 0px 5px 1px ${t.colors.primary};

    }

    .previous, .next {
      transition: all 500ms ease-in-out;
      color: ${t.colors.white};
      
      &:hover {
        color: ${t.colors.primary};
      }

      @media ${t.medias.mobile} {
        font-size: ${t.sizes.xsmall};
      }

      @media ${t.medias.smallmobile} {
        font-size: ${t.sizes.xxsmall};
      }
   
    }

    .break {
  
     }

    .disabled {
      opacity: 0.5;

      &:hover {
        color: ${t.colors.white};
      }
    }
  `}
`,Mu=_.section`
  ${({theme:t})=>h`
    animation: ${I} 500ms;

    border-radius: 15px;
    overflow-y: auto;
    border: ${t.borders.xwhite};
    background: rgba(0, 0, 0, 0.8);

    display: flex;
    flex-direction: column;
    gap: ${t.spacings.xlarge};

    /* position: absolute;
    z-index: 100;  */

    width: 100%;
    padding: ${t.spacings.large};


    transition: all 700ms ease-in-out;

    &:hover {
      background: rgba(0, 0, 0, 0.9);
      box-shadow: 0px 0px 10px 2px white;
      backdrop-filter: blur(2px);
    }

    @media ${t.medias.mobile} {
      padding: ${t.spacings.small};
    }

    ${W} {
      justify-content: space-between;
      @media ${t.medias.smallpc} {
        flex-direction: row;
      }
    }

    ${Ro} {
      grid-gap: ${t.spacings.medium};
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));


      @media ${t.medias.smallpc} {
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      }

      @media ${t.medias.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      }

      @media ${t.medias.mobile} {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      }
    }

    ${Ft} {
      padding: 8px;
  `}
`;function aa({onclick:t}){const s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s,[l,n]=p.useState({id:"",title:"",subtitle:"",description:"",organizer:"",startDate:"",endDate:"",startHour:"",format:"",country:"",state:"",zipCode:"",adress:"",path:"/",bannerImage:"",termsAndConditions:""}),{t:g}=w(),x=m=>{const d=m.target.files[0];d&&n(f=>({...f,bannerImage:d}))},u=m=>{m.preventDefault(),l&&Ol(r,l)};return e.jsxs(Mu,{children:[e.jsxs(B,{children:[e.jsx(G,{text:g("create_new_event"),uppercase:!0}),e.jsx(q,{name:g("back"),onclick:t,hovercolor:o.colors.red,children:e.jsx(te,{})})]}),e.jsx(je,{children:e.jsxs(me,{onSubmit:u,children:[e.jsx(k,{text:g("details"),uppercase:!0}),e.jsxs(Bt,{isopen:!0,children:[e.jsx(T,{type:"text",name:"eventName_input",id:"eventName_input",placeholder:g("select_event_title"),title:g("title"),value:l.title,onChange:m=>n(d=>({...d,title:m.target.value})),required:!0}),e.jsx(T,{type:"text",name:"eventSubtitle_input",id:"eventSubtitle_input",placeholder:g("summary_about_event"),title:g("summary"),value:l.subtitle,onChange:m=>n(d=>({...d,subtitle:m.target.value}))}),e.jsx(T,{type:"text",name:"eventOrganizer_input",id:"eventOrganizer_input",placeholder:g("who_event_organizer"),title:g("organizer"),value:l.organizer,onChange:m=>n(d=>({...d,organizer:m.target.value})),required:!0}),e.jsx(H,{id:"eventFormat",options:i.formOptions.eventFormat,placeholder:g("select"),title:g("which_event_format"),onDropdownChange:m=>n(d=>({...d,format:m}))}),l.format==="inPerson"&&e.jsxs(e.Fragment,{children:[e.jsx(T,{type:"text",name:"eventCountry_input",id:"eventCountry_input",placeholder:g("insert_event_country"),title:g("country"),value:l.country,onChange:m=>n(d=>({...d,country:m.target.value}))}),e.jsx(T,{type:"text",name:"eventState_input",id:"eventState_input",placeholder:g("insert_event_state"),title:g("state"),value:l.state,onChange:m=>n(d=>({...d,state:m.target.value}))}),e.jsx(T,{type:"text",name:"eventZipCode_input",id:"eventZipCode_input",placeholder:g("insert_zip_code"),title:g("zip_code"),value:l.zipCode,onChange:m=>n(d=>({...d,zipCode:m.target.value}))}),e.jsx(T,{type:"text",name:"eventState_input",id:"eventState_input",placeholder:g("insert_rest_adress"),title:g("adress"),value:l.adress,onChange:m=>n(d=>({...d,adress:m.target.value}))})]}),l.format==="online"&&e.jsx(T,{type:"text",name:"eventPlatform_input",id:"eventPlatform_input",placeholder:g("what_event_platform"),title:g("platform"),value:l.adress,onChange:m=>n(d=>({...d,adress:m.target.value}))}),e.jsx(T,{type:"time",name:"eventStartHour_input",id:"eventStartHour_input",title:g("event_start_hour"),value:l.startHour,onChange:m=>n(d=>({...d,startHour:m.target.value}))}),e.jsx(T,{type:"date",name:"eventStartDate_input",id:"eventStartDate_input",title:g("event_start_date"),value:l.startDate,onChange:m=>n(d=>({...d,startDate:m.target.value})),required:!0}),e.jsx(T,{type:"date",name:"eventEndDate_input",id:"eventEndDate_input",title:g("event_end_date"),value:l.endDate,onChange:m=>n(d=>({...d,endDate:m.target.value})),required:!0}),e.jsx(as,{id:"eventImage_input",text:g("select_event_banner"),onChange:m=>x(m)})]}),e.jsxs(ae,{children:[e.jsx(k,{text:g("description"),uppercase:!0}),e.jsx(xt,{placeholder:g("insert_more_event_details"),name:"description",value:l.description,onChange:m=>n(d=>({...d,description:m.target.value}))})]}),e.jsx(xe,{name:"createEvent_submit",id:"createEvent_submit",value:g("create_new_event")})]})})]})}aa.propTypes={onclick:a.func};function na({items:t}){const[s,i]=p.useState(),[r,l]=p.useState(!1),{t:n}=w(),[g,x]=p.useState(0),[u,m]=p.useState(3),d=g*u,f=p.useMemo(()=>t?t.slice(d,d+u):[],[t,g,u]),A=({selected:D})=>{x(D)};p.useEffect(()=>{const D=()=>{m(window.innerWidth<768?2:4)};return window.addEventListener("resize",D),D(),()=>window.removeEventListener("resize",D)},[]);const S=()=>{window.scrollTo({top:200,behavior:"smooth"})};return e.jsxs(Ou,{children:[r?e.jsx(aa,{onclick:()=>l(!r)}):e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[e.jsx(G,{text:n("my_events"),uppercase:!0}),e.jsx(q,{name:n("create_new_event"),onclick:()=>l(!r),children:e.jsx(vo,{})})]}),f&&f.length?e.jsx($e,{children:f.map(D=>e.jsx(gs,{imagesrc:D.src,title:D.title,subtitle:D.subtitle,organizer:D.organizer,startDate:D.startDate,startHour:D.startHour,country:D.country,state:D.state,platform:D.platform,onClick:()=>i(D)},D.id))}):e.jsx(y,{text:n("no_owner_events_found")}),f.length>0&&e.jsx(Nu,{previousLabel:n("previous"),nextLabel:n("next"),breakLabel:"...",pageCount:t?Math.ceil(t.length/u):0,pageRangeDisplayed:3,marginPagesDisplayed:1,onPageChange:A,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",activeClassName:"active",onClick:S})]}),s&&e.jsx(hs,{event:s,onclick:()=>i()})]})}na.propTypes={items:a.arrayOf(a.object).isRequired};function xo({events:t}){return e.jsx(Ru,{children:e.jsx(na,{items:t})})}xo.propTypes={events:a.arrayOf(a.object)};const Lu=(t,s)=>{switch(s.type){case"LOAD_STAFF_DATA":return{...t,...s.payload};case"UPDATE_PROFILE_PICTURE":return{...t,profile:{...t.profile,banner:{...t.profile.banner,profileImageSrc:s.payload}}};case Li:return{...t,profile:{...t.profile,info:s.payload}};case Fi:return{...t,profile:{...t.profile,clubs:[...t.profile.clubs,s.payload]}};case Vi:return{...t,profile:{...t.profile,clubs:t.profile.clubs.filter(i=>i.id!==s.payload.id)}};case Ui:return{...t,profile:{...t.profile,studies:[...t.profile.studies,s.payload]}};case Hi:return{...t,profile:{...t.profile,studies:t.profile.studies.filter(i=>i.id!==s.payload.id)}};case Bi:return{...t,profile:{...t.profile,awards:[...t.profile.awards,s.payload]}};case Yi:return{...t,profile:{...t.profile,awards:t.profile.awards.filter(i=>i.id!==s.payload.id)}};case Wi:return t.profile.videos.some(r=>r.url===s.payload.url)?t:{...t,profile:{...t.profile,videos:[...t.profile.videos,s.payload]}};case Gi:return{...t,profile:{...t.profile,videos:t.profile.videos.filter(i=>i.url!==s.payload.url)}};default:return t}},Fu={profile:{banner:{},info:{},photos:[],videos:[],clubs:[],studies:[],awards:[]},benefits:[],friends:[]};function la({children:t}){const[s,i]=p.useReducer(Lu,Fu);return p.useEffect(()=>{(async()=>{try{const l=await Re.get("https://talent2show.onrender.com/api/staffProfiles/1");l.data&&l.data.id?i({type:"LOAD_STAFF_DATA",payload:l.data}):console.warn("Resposta da API não contém dados válidos")}catch(l){console.error("Erro ao carregar dados do jogador:",l),i({type:"LOAD_STAFF_DATA_ERROR",payload:l.message})}})()},[]),e.jsx(et.Provider,{value:{staffState:s,staffDispatch:i},children:t})}la.propTypes={children:a.node.isRequired};const Vu=_.article`
  ${({theme:t})=>h`
     text-align: center;
     display: flex;
     flex-direction: column;

     ${fe} {

      .swiper-slide {
       > ${Z} {
         gap: ${t.spacings.small};
            > img {
              width: 100%;
              height: 100%;
              max-width: 600px;
              border-radius: 12px
           }
      }
      }
     }


     & ${J} {
      animation: ${I} 500ms;

     }

     & ${P} {
      background-image: linear-gradient(to right, ${t.colors.lightprimary}, ${t.colors.lightsecondary});
      padding: ${t.spacings.xsmall};
      border-radius: 12px;
      border: ${t.borders.white};
      
      @media ${t.medias.mobile} {
        padding: ${t.spacings.xxsmall};
      }
      
     }

     > ${ke} {
        text-align: center;
        margin-bottom: 0;
        padding: ${t.spacings.xsmall};
        animation: ${I} 500ms;

     }

     > ${se} {
      animation: ${I} 500ms;
     }
 
  `}
`;function ca(){p.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const{t}=w();return e.jsxs(Vu,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(G,{text:t("welcome_t2s_interchange"),uppercase:!0}),e.jsx(y,{text:t("interchange_text_1")}),e.jsx(y,{text:t("interchange_text_2")}),e.jsx(Me,{children:e.jsxs(J,{children:[e.jsx(P,{children:t("interchange_step_1")}),e.jsx(P,{children:t("interchange_step_2")}),e.jsx(P,{children:t("interchange_step_3")}),e.jsx(P,{children:t("interchange_step_4")})]})})]}),e.jsxs(U,{autoplay:!0,slidesperview:3,children:[e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})})]}),e.jsx(ce,{items:O.photos.benefits,title:t("other_t2s_benefits")}),e.jsxs(U,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-2.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:O.events}),e.jsx(ye,{title:t("social"),size:"400px",items:O.news}),e.jsx(F,{title:t("news"),type:"news",items:O.news})]})]})}ca.propTypes={};const Uu=_.article`
  ${({theme:t})=>h`
     text-align: center;
     display: flex;
     flex-direction: column;

     ${fe} {

      .swiper-slide {
       > ${Z} {
         gap: ${t.spacings.small};
            > img {
              width: 100%;
              height: 100%;
              max-width: 600px;
              border-radius: 12px
           }
      }
      }
     }


     & ${J} {
      animation: ${I} 500ms;

     }

     & ${P} {
      background-image: linear-gradient(to right, ${t.colors.lightprimary}, ${t.colors.lightsecondary});
      padding: ${t.spacings.xsmall};
      border-radius: 12px;
      border: ${t.borders.white};
      
      @media ${t.medias.mobile} {
        padding: ${t.spacings.xxsmall};
      }
      
     }

     > ${ke} {
        text-align: center;
        margin-bottom: 0;
        padding: ${t.spacings.xsmall};
        animation: ${I} 500ms;

     }

     > ${se} {
      animation: ${I} 500ms;
     }
 
  `}
`;function da(){p.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const{t}=w();return e.jsxs(Uu,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(G,{text:t("welcome_t2s_crypto_wallet"),uppercase:!0}),e.jsx(y,{text:t("crypto_wallet_text_1")}),e.jsx(y,{text:t("crypto_wallet_text_2")}),e.jsx(Me,{children:e.jsxs(J,{children:[e.jsx(P,{children:t("crypto_wallet_step_1")}),e.jsx(P,{children:t("crypto_wallet_step_2")}),e.jsx(P,{children:t("crypto_wallet_step_3")}),e.jsx(P,{children:t("crypto_wallet_step_4")})]})})]}),e.jsxs(U,{autoplay:!0,slidesperview:3,children:[e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})})]}),e.jsx(ce,{items:O.photos.benefits,title:t("other_t2s_benefits")}),e.jsxs(U,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-2.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:O.events}),e.jsx(ye,{title:t("social"),size:"400px",items:O.news}),e.jsx(F,{title:t("news"),type:"news",items:O.news})]})]})}da.propTypes={};const Hu=_.article`
  ${({theme:t})=>h`
     text-align: center;
     display: flex;
     flex-direction: column;

     ${fe} {

      .swiper-slide {
       > ${Z} {
         gap: ${t.spacings.small};
            > img {
              width: 100%;
              height: 100%;
              max-width: 600px;
              border-radius: 12px
           }
      }
      }
     }
     

     & ${J} {
      animation: ${I} 500ms;

     }

     & ${P} {
      background-image: linear-gradient(to right, ${t.colors.lightprimary}, ${t.colors.lightsecondary});
      padding: ${t.spacings.xsmall};
      border-radius: 12px;
      border: ${t.borders.white};

      @media ${t.medias.mobile} {
        padding: ${t.spacings.xxsmall};
      }

     }

     > ${ke} {
        text-align: center;
        margin-bottom: 0;
        padding: ${t.spacings.xsmall};
        animation: ${I} 500ms;

     }

     > ${se} {
      animation: ${I} 500ms;
     }

  `}
`;function pa(){p.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const{t}=w();return e.jsxs(Hu,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(G,{text:t("welcome_t2s_english"),uppercase:!0}),e.jsx(y,{text:t("english_text_1")}),e.jsx(y,{text:t("english_text_2")}),e.jsx(Me,{children:e.jsxs(J,{children:[e.jsx(P,{children:t("english_step_1")}),e.jsx(P,{children:t("english_step_2")}),e.jsx(P,{children:t("english_step_3")}),e.jsx(P,{children:t("english_step_4")})]})})]}),e.jsxs(U,{autoplay:!0,slidesperview:3,children:[e.jsx(c,{path:"https://immediateenglish.com/ansep",newtab:!0,children:e.jsx("img",{src:"/assets/images/benefits/components/english/ansep_immediate.jpg",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})})]}),e.jsx(ce,{items:O.photos.benefits,title:t("other_t2s_benefits")}),e.jsxs(U,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-2.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:O.events}),e.jsx(ye,{title:t("social"),size:"400px",items:O.news}),e.jsx(F,{title:t("news"),type:"news",items:O.news})]})]})}pa.propTypes={};const Bu=_.article`
  ${({theme:t})=>h`
     text-align: center;
     display: flex;
     flex-direction: column;

     ${fe} {

      .swiper-slide {
       > ${Z} {
         gap: ${t.spacings.small};
            > img {
              width: 100%;
              height: 100%;
              max-width: 600px;
              border-radius: 12px
           }
      }
      }
     }

     & ${J} {
      animation: ${I} 500ms;

     }

     & ${P} {
      background-image: linear-gradient(to right, ${t.colors.lightprimary}, ${t.colors.lightsecondary});
      padding: ${t.spacings.xsmall};
      border-radius: 12px;
      border: ${t.borders.white};

      @media ${t.medias.mobile} {
        padding: ${t.spacings.xxsmall};
      }

     }

     > ${ke} {
        text-align: center;
        margin-bottom: 0;
        padding: ${t.spacings.xsmall};
        animation: ${I} 500ms;

     }

     > ${se} {
      animation: ${I} 500ms;
     }

  `}
`;function ua(){p.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const{t}=w();return e.jsxs(Bu,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(G,{text:t("welcome_t2s_crowdfunding"),uppercase:!0}),e.jsx(y,{text:t("crowdfunding_text_1")}),e.jsx(y,{text:t("crowdfunding_text_2")}),e.jsx(Me,{children:e.jsxs(J,{children:[e.jsx(P,{children:t("crowdfunding_step_1")}),e.jsx(P,{children:t("crowdfunding_step_2")}),e.jsx(P,{children:t("crowdfunding_step_3")}),e.jsx(P,{children:t("crowdfunding_step_4")})]})})]}),e.jsxs(U,{autoplay:!0,slidesperview:3,children:[e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})})]}),e.jsx(ce,{items:O.photos.benefits,title:t("other_t2s_benefits")}),e.jsxs(U,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-2.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:O.events}),e.jsx(ye,{title:t("social"),size:"400px",items:O.news}),e.jsx(F,{title:t("news"),type:"news",items:O.news})]})]})}ua.propTypes={};const Yu=_.article`
  ${({theme:t})=>h`
     text-align: center;
     display: flex;
     flex-direction: column;

     ${fe} {

      .swiper-slide {
       > ${Z} {
         gap: ${t.spacings.small};
            > img {
              width: 100%;
              height: 100%;
              max-width: 600px;
              border-radius: 12px
           }
      }
      }
     }

     & ${J} {
      animation: ${I} 500ms;

     }

     & ${P} {
      background-image: linear-gradient(to right, ${t.colors.lightprimary}, ${t.colors.lightsecondary});
      padding: ${t.spacings.xsmall};
      border-radius: 12px;
      border: ${t.borders.white};

      @media ${t.medias.mobile} {
        padding: ${t.spacings.xxsmall};
      }

     }

     > ${ke} {
        text-align: center;
        margin-bottom: 0;
        padding: ${t.spacings.xsmall};
        animation: ${I} 500ms;

     }

     > ${se} {
      animation: ${I} 500ms;
     }

  `}
`;function ma(){p.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const{t}=w();return e.jsxs(Yu,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(G,{text:t("welcome_t2s_lions_platform"),uppercase:!0}),e.jsx(y,{text:t("lions_platform_text_1")}),e.jsx(y,{text:t("lions_platform_text_2")}),e.jsx(Me,{children:e.jsxs(J,{children:[e.jsx(P,{children:t("lions_platform_step_1")}),e.jsx(P,{children:t("lions_platform_step_2")}),e.jsx(P,{children:t("lions_platform_step_3")}),e.jsx(P,{children:t("lions_platform_step_4")})]})})]}),e.jsxs(U,{autoplay:!0,slidesperview:3,children:[e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})})]}),e.jsx(ce,{items:O.photos.benefits,title:t("other_t2s_benefits")}),e.jsxs(U,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-2.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:O.events}),e.jsx(ye,{title:t("social"),size:"400px",items:O.news}),e.jsx(F,{title:t("news"),type:"news",items:O.news})]})]})}ma.propTypes={};const Wu=_.article`
  ${({theme:t})=>h`
     text-align: center;
     display: flex;
     flex-direction: column;

     ${fe} {

      .swiper-slide {
       > ${Z} {
         gap: ${t.spacings.small};
            > img {
              width: 100%;
              height: 100%;
              max-width: 600px;
              border-radius: 12px
           }
      }
      }
     }

     & ${J} {
      animation: ${I} 500ms;

     }

     & ${P} {
      background-image: linear-gradient(to right, ${t.colors.lightprimary}, ${t.colors.lightsecondary});
      padding: ${t.spacings.xsmall};
      border-radius: 12px;
      border: ${t.borders.white};

      @media ${t.medias.mobile} {
        padding: ${t.spacings.xxsmall};
      }

     }

     > ${ke} {
        text-align: center;
        margin-bottom: 0;
        padding: ${t.spacings.xsmall};
        animation: ${I} 500ms;

     }

     > ${se} {
      animation: ${I} 500ms;
     }

  `}
`;function _a(){p.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const{t}=w();return e.jsxs(Wu,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(G,{text:t("welcome_t2s_studies"),uppercase:!0}),e.jsx(y,{text:t("studies_text_1")}),e.jsx(y,{text:t("studies_text_2")}),e.jsx(Me,{children:e.jsxs(J,{children:[e.jsx(P,{children:t("studies_step_1")}),e.jsx(P,{children:t("studies_step_2")}),e.jsx(P,{children:t("studies_step_3")}),e.jsx(P,{children:t("studies_step_4")})]})})]}),e.jsxs(U,{autoplay:!0,slidesperview:3,children:[e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})})]}),e.jsx(ce,{items:O.photos.benefits,title:t("others_t2s_benefits")}),e.jsxs(U,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-2.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:O.events}),e.jsx(ye,{title:t("social"),size:"400px",items:O.news}),e.jsx(F,{title:t("news"),type:"news",items:O.news})]})]})}_a.propTypes={};const Gu=_.article`
  ${({theme:t})=>h`
     text-align: center;
     display: flex;
     flex-direction: column;

     ${fe} {

      .swiper-slide {
       > ${Z} {
         gap: ${t.spacings.small};
            > img {
              width: 100%;
              height: 100%;
              max-width: 600px;
              border-radius: 12px
           }
      }
      }
     }

     & ${J} {
      animation: ${I} 500ms;

     }

     & ${P} {
      background-image: linear-gradient(to right, ${t.colors.lightprimary}, ${t.colors.lightsecondary});
      padding: ${t.spacings.xsmall};
      border-radius: 12px;
      border: ${t.borders.white};

      @media ${t.medias.mobile} {
        padding: ${t.spacings.xxsmall};
      }

     }

     > ${ke} {
        text-align: center;
        margin-bottom: 0;
        padding: ${t.spacings.xsmall};
        animation: ${I} 500ms;

     }

     > ${se} {
      animation: ${I} 500ms;
     }

  `}
`;function ha(){p.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const{t}=w();return e.jsxs(Gu,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(G,{text:t("welcome_t2s_benefits"),uppercase:!0}),e.jsx(y,{text:t("benefits_text_1")}),e.jsx(y,{text:t("benefits_text_2")})]}),e.jsx(ce,{items:O.photos.benefits,title:t("t2s_benefits")}),e.jsxs(U,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-2.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:O.events}),e.jsx(ye,{title:t("social"),size:"400px",items:O.news}),e.jsx(F,{title:t("news"),type:"news",items:O.news})]})]})}ha.propTypes={};const Xu=_.article`
  ${({theme:t})=>h`
     text-align: center;
     display: flex;
     flex-direction: column;

     ${fe} {

      .swiper-slide {
       > ${Z} {
         gap: ${t.spacings.small};
            > img {
              width: 100%;
              height: 100%;
              max-width: 600px;
              border-radius: 12px
           }
      }
      }
     }

     & ${J} {
      animation: ${I} 500ms;

     }

     & ${P} {
      background-image: linear-gradient(to right, ${t.colors.lightprimary}, ${t.colors.lightsecondary});
      padding: ${t.spacings.xsmall};
      border-radius: 12px;
      border: ${t.borders.white};

      @media ${t.medias.mobile} {
        padding: ${t.spacings.xxsmall};
      }

     }

     > ${ke} {
        text-align: center;
        margin-bottom: 0;
        padding: ${t.spacings.xsmall};
        animation: ${I} 500ms;

     }

     > ${se} {
      animation: ${I} 500ms;
     }

  `}
`;function ga(){p.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const{t}=w();return e.jsxs(Xu,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(G,{text:t("welcome_t2s_american_studies"),uppercase:!0}),e.jsx(y,{text:t("american_studies_text_1")}),e.jsx(y,{text:t("american_studies_text_2")}),e.jsx(Me,{children:e.jsxs(J,{children:[e.jsx(P,{children:t("american_studies_step_1")}),e.jsx(P,{children:t("american_studies_step_2")}),e.jsx(P,{children:t("american_studies_step_3")}),e.jsx(P,{children:t("american_studies_step_4")})]})})]}),e.jsxs(U,{autoplay:!0,slidesperview:3,children:[e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})})]}),e.jsx(ce,{items:O.photos.benefits,title:t("others_t2s_benefits")}),e.jsxs(U,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-2.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:O.events}),e.jsx(ye,{title:t("social"),size:"400px",items:O.news}),e.jsx(F,{title:t("news"),type:"news",items:O.news})]})]})}ga.propTypes={};const Qu=_.section`
  ${({theme:t})=>h`

  ${Ae} {
      justify-content: flex-end;

      @media ${t.medias.tablet} {
        justify-content: center;
      }

      @media ${t.medias.mobile} {
        justify-content: flex-end;
      }

      ${ge} {
        @media ${t.medias.mobile} {
         display: none;
        }
      }

      ${M} {
        display: none;
        animation: none;

        @media ${t.medias.mobile} {
          display: flex;
        }
      }
    }

    ${oe} {
      & ${de} {
        height: 30px;
      }
    }

    > ${oe} {
      display: none;
      flex-direction: column;
      gap: ${t.spacings.small};
      padding: ${t.spacings.medium};

      @media ${t.medias.mobile} {
        display: flex;
      }
    }
      
    >${ae} {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      gap: ${t.spacings.xlarge};
      padding: ${t.spacings.medium};


      @media ${t.medias.tablet} {
        width: 100%;
      }
    }

  `}
`,Ss=_.nav`
  ${({theme:t})=>h`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: ${t.spacings.small};
     height: 100%;
     width: 100%;
     padding: ${t.spacings.xsmall};
  `}
`;function xa(){const{t}=w(),[s,i]=p.useState(""),r=Oe();return p.useEffect(()=>{i(r.pathname)},[r.pathname]),e.jsxs(e.Fragment,{children:[e.jsxs(Ss,{children:[e.jsx(c,{active:s==="/league-dashboard"||s==="league-dashboard/",path:"",text:t("home"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/league-dashboard/profile",path:"profile",text:t("profile"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/league-dashboard/my-squad",path:"my-squad",text:t("my_squad"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/league-dashboard/opportunities",path:"opportunities",text:t("opportunities"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/league-dashboard/my-opportunities",path:"my-opportunities",text:t("my_opportunities"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/league-dashboard/scouts",path:"scouts",text:t("scouts"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/league-dashboard/clubs",path:"clubs",text:t("clubs"),color:o.colors.white,hovercolor:o.colors.black})]}),e.jsxs(Ss,{children:[e.jsx(c,{active:s==="/league-dashboard/players",path:"players",text:t("players"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/league-dashboard/events",path:"events",text:t("events"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/league-dashboard/favorites",path:"favorites",text:t("favorites"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/league-dashboard/contacts",path:"contacts",text:t("contacts"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/league-dashboard/friends",path:"friends",text:t("friends"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/league-dashboard/store",path:"store",text:t("store"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/league-dashboard/my-affiliates",path:"my-affiliates",text:t("my_affiliates"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/league-dashboard/s2t+",path:"s2t+",text:t("t2s+"),color:o.colors.white,hovercolor:o.colors.black})]})]})}xa.propTypes={};function ya(){const{t}=w();return e.jsxs($e,{children:[e.jsxs(c,{path:"",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(zt,{}),t("home")]}),e.jsxs(c,{path:"profile",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(ft,{}),t("profile")]}),e.jsxs(c,{path:"my-squad",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(io,{}),t("my_squad")]}),e.jsxs(c,{path:"opportunities",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(bt,{}),t("opportunities")]}),e.jsxs(c,{path:"my-opportunities",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(fo,{}),t("my_opportunities")]}),e.jsxs(c,{path:"scouts",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Dt,{}),t("scouts")]}),e.jsxs(c,{path:"clubs",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(qt,{}),t("clubs")]}),e.jsxs(c,{path:"players",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(bo,{}),t("players")]}),e.jsxs(c,{path:"favorites",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(It,{}),t("favorites")]}),e.jsxs(c,{path:"events",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Rt,{}),t("eventos")]}),e.jsxs(c,{path:"contacts",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Ot,{}),t("contacts")]}),e.jsxs(c,{path:"friends",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(vt,{}),t("friends")]}),e.jsxs(c,{path:"store",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Nt,{}),t("store")]}),e.jsxs(c,{path:"s2t+",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Mt,{}),t("t2s+")]}),e.jsxs(c,{path:"my-affiliates",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Lt,{}),t("my_affiliates")]}),e.jsxs(c,{color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(te,{}),t("close")]})]})}ya.propTypes={};function Ju(){const{t}=w(),s=p.useContext(Yt),{leagueState:i,leagueDispatch:r}=s,[l,n]=p.useState(!1),[g,x]=p.useState(!1);if(!i.profile||!i.profile.banner)return e.jsx("div",{children:"Loading..."});const[u,m]=p.useState(!1),[d,f]=p.useState(!1),A=()=>{f(!d),m(!1)},S=()=>{m(!u),f(!1)};return e.jsxs(Qu,{children:[e.jsxs(Pe,{children:[e.jsxs(be,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/league-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),g?e.jsx(q,{name:t("menu"),onclick:()=>x(!g),children:e.jsx(te,{})}):e.jsx(q,{name:t("close_menu"),onclick:()=>x(!g),children:e.jsx(_e,{})})]}),g&&e.jsxs(ee,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/player-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),e.jsxs(Je,{backgroundimagesrc:i.profile.banner.backgroundImageSrc,ownerview:!0,children:[e.jsx(We,{imagesrc:i.profile.banner.profileImageSrc,badge:i.profile.banner.badge,ownerview:!0,type:i.profile.info.profileType}),e.jsx(ct,{name:i.profile.banner.name}),e.jsxs(B,{children:[e.jsx($,{path:"profile-edit",text:t("edit_profile"),bgcolor:o.colors.primary,bghover:o.colors.black,textcolor:o.colors.black,texthover:o.colors.primary,border:o.colors.black,borderhover:o.colors.primary}),e.jsx(q,{active:u,hovercolor:o.colors.primary,name:t("settings"),onclick:S,children:e.jsx(wt,{})}),e.jsx(q,{active:d,hovercolor:o.colors.primary,name:t("share"),onclick:A,children:e.jsx(nt,{})}),u&&e.jsx(ee,{onclick:()=>m(!1),children:e.jsx(dt,{})}),d&&e.jsx(ee,{onclick:()=>f(!1),children:e.jsx(Ke,{})})]})]}),e.jsx(Ge,{children:e.jsx(xa,{})}),l?e.jsx(Xe,{onclick:()=>n(!l),children:e.jsx(ya,{})}):e.jsx(Qe,{name:t("menu"),onclick:()=>n(!l),children:e.jsx(_e,{})}),e.jsx(pt,{children:e.jsx(Vt,{children:e.jsx(ae,{color:o.colors.black,children:e.jsx(Ne,{})})})}),e.jsx(ce,{items:i.benefits,title:t("my_benefits")})]})}const Ku=(t,s)=>{switch(s.type){case $d:return{...t,player:[...s.payload]};case fd:return{...t,profile:{...t.profile,info:s.payload}};case bd:return{...t,profile:{...t.profile,competitions:[...t.profile.competitions,s.payload]}};case vd:return{...t,profile:{...t.profile,competitions:t.profile.competitions.filter(i=>i.id!==s.payload.id)}};case wd:return{...t,profile:{...t.profile,awards:[...t.profile.awards,s.payload]}};case jd:return{...t,profile:{...t.profile,awards:t.profile.awards.filter(i=>i.id!==s.payload.id)}};case yr:return t.profile.videos.some(r=>r.url===s.payload.url)?t:{...t,profile:{...t.profile,videos:[...t.profile.videos,s.payload]}};case fr:return{...t,profile:{...t.profile,videos:t.profile.videos.filter(i=>i.url!==s.payload.url)}};default:return{...t}}},fa={profile:{banner:{},info:{},photos:[],videos:[],competitions:[],awards:[]},benefits:[],friends:[]};function ba({children:t}){const[s,i]=p.useReducer(Ku,fa);return e.jsx(Yt.Provider,{value:{leagueState:s,leagueDispatch:i},children:t})}ba.propTypes={children:a.node.isRequired};const Zu="The road to sports stardom starts here",em="Username",tm="Login",om="Remember login",sm="Logout",im="Close",rm="Password",am="Register",nm="Email",lm="Create an account",cm="Reset password",dm="Select language",pm="Home",um="Home page",mm="My area",_m="Close menu",hm="Message",gm="New message",xm="Back",ym="Details",fm="Favorite",bm="Make favorite",vm="Remove from favorites",wm="No data found...",jm="Show more",$m="Show less",km="Previous",Cm="Next",Sm="Blocked",Tm="Close image",Am="Buy",Pm="Profile picture",Em="Yes",zm="No",Dm="Fullscreen",qm="Remove",Im="Report",Rm="Confirm",Om="Copy",Nm="Weight",Mm="Height",Lm="Edit profile",Fm="Settings",Vm="Follow",Um="Unfollow",Hm="Ranking",Bm="Photos",Ym="Videos",Wm="Your profile",Gm="Your email",Xm="Online",Qm="In person",Jm="Name",Km="Select",Zm="Required",e_="Other",t_="Add",o_="Note",s_="Match",i_="Please wait...",r_="Title",a_="Privacity",n_="Terms of use",l_="About us",c_="Need help?",d_="Share",p_="Language",u_="Copy URL",m_="You haven't published any opportunities yet. Why not start now? Click the '+' icon above to create your first opportunity!",__="No opportunities found...",h_="No products found...",g_="No players found...",x_="User is not logged in or does not have a valid ID",y_="Error uploading image:",f_="Error uploading video:",b_="Token not found in localStorage",v_="Username not found in response:",w_="Username not found",j_="Server error response:",$_="No response received:",k_="Error setting up request:",C_="Are you sure you want to delete this image?",S_="Are you sure you want to delete this video?",T_="Are you sure you want to delete this opportunity?",A_="Text copied successfully!",P_="Error copying text!",E_="Please fill in all fields",z_="A verification email has been sent to this email address",D_="Are you sure you want to end your session?",q_="User successfully logged out",I_="Invalid credentials. Please check your details.",R_="Login error:",O_="Login error. Please try again.",N_="Passwords do not match!",M_="Server response:",L_="Error registering user:",F_="An error occurred while registering the user. Please try again.",V_="No events found...",U_="You haven't published any events yet. Why not start now? Click the '+' icon above to create your first event",H_="Player Dashboard",B_="Club Dashboard",Y_="University Dashboard",W_="Public Dashboard",G_="Coaching Staff Dashboard",X_="League Dashboard",Q_="Favorite players",J_="Favorite videos",K_="Favorite opportunities",Z_="Current competitions",eh="Titles and awards",th="Your messages",oh="Club history",sh="Academic history",ih="Referral link",rh="Level 1",ah="Level 2",nh="Level 3",lh="My squad",ch="Modality",dh="Birth date",ph="Age",uh="Birth",mh="Primary nationality",_h="Secondary nationality",hh="Passports",gh="Base salary",xh="Transfer value",yh="Main position",fh="Primary position",bh="Secondary position",vh="Tertiary position",wh="TOEFL",jh="ACT",$h="SAT",kh="Graduation date",Ch="Grade point average",Sh="Representative",Th="Foundation date",Ah="State",Ph="Training center",Eh="Stadium",zh="Coach",Dh="Profile type",qh="KG",Ih="Meters",Rh="Player",Oh="Club",Nh="Club name",Mh="University",Lh="Universities",Fh="Staff",Vh="Agency",Uh="Fan",Hh="Fans",Bh="Performance analyst",Yh="Assistant coach",Wh="Coordinator",Gh="Director",Xh="Businessman",Qh="Physiologist",Jh="Physiotherapist",Kh="Manager",Zh="Massage therapist",eg="Nutritionist",tg="Goalkeeper trainer",og="Physical trainers",sg="Tactical trainers",ig="Psychologists",rg="Doctor",ag="Doctors",ng="Scout",lg="Exchange agencies",cg="Exchange agency",dg="Serie A",pg="Serie B",ug="Serie C",mg="Serie D",_g="NCAA 1",hg="NCAA 2",gg="NCAA 3",xg="NAIA 1",yg="NAIA 2",fg="NCCAA 1",bg="NCCAA 2",vg="NJCAA 1",wg="NJCAA 2",jg="NJCAA 3",$g="Sub 7",kg="Sub 8",Cg="Sub 9",Sg="Sub 11",Tg="Sub 13",Ag="Sub 15",Pg="Sub 17",Eg="Sub 20",zg="Adult",Dg="Goalkeeper",qg="Left-back",Ig="Right-back",Rg="Center-back",Og="Wing-back",Ng="Defensive midfielder",Mg="Central midfielder",Lg="Attacking midfielder",Fg="Wide midfielder",Vg="Second striker",Ug="Left winger",Hg="Right winger",Bg="Center forward",Yg="Not specified",Wg="R$",Gg="$",Xg="Right",Qg="Left",Jg="Male",Kg="Female",Zg="Active - Free agent",ex="Active",tx="Injured",ox="Injured - Free agent",sx="Agents",ix="Podcast",rx="Sports channels",ax="Investments",nx="Benefits club",lx="Interchange",cx="Crypto wallet",dx="Crowdfunding",px="Lions platform",ux="Studies",mx="American Studies",_x="Profile",hx="My opportunities",gx="Scouts",xx="Social",yx="News",fx="Opportunities",bx="Clubs",vx="Players",wx="Favorites",jx="Squad",$x="Events",kx="Contacts",Cx="Friends",Sx="Store",Tx="My affiliates",Ax="Professional",Px="Semi-Professional",Ex="Academic",zx="Amateur",Dx="Recreational",qx="T-Shirts",Ix="Football Boots",Rx="We still don't sell these products directly at S2T, but don't worry, we have a complete store with everything you need, and the best part: it's all from the same group! So, if you click on the 'Buy' button, we will direct you to our shopping website, where you can complete your purchase with complete security and peace of mind.",Ox="Trending videos",Nx="Benefits",Mx="My benefits",Lx="Partners and supporters",Fx="User benefits",Vx="Edit my opportunity",Ux="Which league is the opportunity for?",Hx="League",Bx="Leagues",Yx="Country",Wx="Schools",Gx="Which country is the opportunity for?",Xx="Position",Qx="Which position is the opportunity for?",Jx="Which category is the opportunity for?",Kx="What is the opportunity's availability date?",Zx="Minimum height",ey="What is the minimum height to apply?",ty="Minimum age",oy="What is the minimum age to apply?",sy="Maximum age",iy="What is the maximum age to apply?",ry="Minimum salary",ay="What is the minimum monthly salary?",ny="Maximum salary",ly="What is the maximum monthly salary?",cy="Which currency will be used for payment?",dy="Select currency",py="City",uy="Which is your best leg?",my="What is your competitive level?",_y="Which category do you play in?",hy="Your current weight (in KG)",gy="Your current height (in meters)",xy="Your primary nationality",yy="Your secondary nationality",fy="Your birth city",by="Do you have a passport for any country?",vy="If yes, list the countries",wy="Your base salary",jy="Your transfer value",$y="Your main position",ky="Your secondary position",Cy="Your tertiary position",Sy="Do you play in any league?",Ty="Select your league",Ay="Do you have an agent?",Py="Your sporting history",Ey="Your academic history",zy="History of titles and awards",Dy="Competition/Award",qy="Competition",Iy="Competition or award name",Ry="Did you take the TOEFL test?",Oy="Did you take the SAT test?",Ny="High school graduation date",My="GPA (Grade Point Average)",Ly="Certification name",Fy="Certification",Vy="Certifications",Uy="Confirm change",Hy="Confirm changes",By="Select level",Yy="Knowledge",Wy="What is your agency type?",Gy="Select type",Xy="Representative club name",Qy="What is the club's competitive level?",Jy="Which country is the club from?",Ky="Which state is the club from?",Zy="Where does the club train?",ef="Stadium name",tf="Club stadium or arena",of="Coach or trainer",sf="Current club coach or trainer",rf="Competition name",af="Nationality",nf="Your nationality",lf="What is your profile type?",cf="Representative university name",df="What is the university's competitive level?",pf="Which country is the university from?",uf="Which state is the university from?",mf="Where does the university train?",_f="University stadium or arena",hf="Current university coach or trainer",gf="Description",xf="Insert a description of your opportunity",yf="Requirements",ff="Insert other requirements for your opportunity",bf="Confirm edit",vf="Publish Opportunity",wf="Competitive category",jf="Competitive level",$f="Category",kf="Best leg",Cf="Avaliability",Sf="Has agent",Tf="Do you have an agent?",Af="Minimum transfer value",Pf="Maximum transfer value",Ef="Country of birth",zf="Passport",Df="All",qf="Create new opportunity",If="Opportunity from",Rf="Published in",Of="Opportunity",Nf="Close opportunity",Mf="Date",Lf="Salary",Ff="Immediate",Vf="Years",Uf="Optional",Hf="Send message",Bf="You have already sent a message",Yf="Select position",Wf="Change profile picture button",Gf="Change profile banner button",Xf="Add a new video to your profile button",Qf="Add a new photo to your profile button",Jf="Why are you reporting this photo or video?",Kf="Select reason",Zf="Insert more details about the reason (Optional)",eb="Inappropriate content",tb="Copyright",ob="Media manipulation",sb="Poor quality",ib="Portuguese (BR)",rb="English",ab="Spanish",nb="Forgot password",lb="Forgot your password?",cb="Change password",db="New password",pb="Enter your password",ub="Enter a new password",mb="Enter your new password again",_b="Confirm your new password",hb="Your password has been changed successfully!",gb="Enter your registered email",xb="Please check!",yb="Don't have an account?",fb="Return to home",bb="Your username on T2S",vb="Your password",wb="Confirm your password",jb="Password confirmation",$b="Select your profile type",kb="What is your full name?",Cb="What is the name of your club?",Sb="What is the name of your university?",Tb="What is the name of your agency?",Ab="What is the name of your league?",Pb="What is your full name?",Eb="What is your full name?",zb="Which competitive category?",Db="In which modality do you want to participate?",qb="Select modality",Ib="Which modality does your club practice?",Rb="Select category",Ob="Step by step",Nb="Carefully enter your personal data and fill in all required fields.",Mb="Select the type of profile you want to create",Lb="Validate your account: Confirm your email and follow the instructions to complete the registration process.",Fb="Go to 'Edit profile' and add details about your experience, skills, education, and achievements.",Vb="Welcome to T2S benefits",Ub="Discover the exclusive advantages that T2S has specially reserved for you. Our mission is to make your experience with us even more rewarding and gratifying.",Hb="Here are some of the incredible benefits you can enjoy as part of the T2S community:",Bb="Click on any of the events below.",Yb="T2S Benefits",Wb="Welcome to T2S events!",Gb="Here you'll find the best football events, both in Brazil and around the world.",Xb="Currently, T2S events are available on our individual websites. To access them, simply follow the steps below:",Qb="Click on any of the events below.",Jb="Read the event details.",Kb="When you find an event you're interested in, click 'Participate'.",Zb="After that, you will be redirected to the event page",ev="Other T2S benefits",tv="Welcome to the T2S Benefits Club!",ov="Here, you'll find everything to make your life amazing: discounts, offers, experiences, and much more!",sv="The T2S Benefits Club has its own website, where you can find everything you need to make the most of your benefits. To access it:",iv="Click on any of the benefits below.",rv="You will be automatically redirected to the Benefits Club website.",av="Create your account or log in if you already have one.",nv="Start exploring and enjoying the exclusive advantages that await you!",lv="Welcome to T2S Investments!",cv="Here, you'll find essential information to optimize your investments and grow your wealth.",dv="The T2S investment area has its own website, where you can find everything you need to make the most of your investments. To access it:",pv="Click on any of the investment types below.",uv="You will be automatically redirected to our investment website.",mv="Create your account or log in if you already have one.",_v="Start exploring and enjoying the exclusive advantages that await you!",hv="Year of achievement",gv="Entry",xv="Entry year",yv="Exit",fv="Exit year",bv="Actual",vv="Enter your final grade",wv="Organizer",jv="Start date",$v="End date",kv="Time",Cv="Platform",Sv="Close Event",Tv="ZIP code",Av="Address",Pv="Participate",Ev="Camping",zv="Clinic",Dv="Lecture",qv="Tour",Iv="Showcase",Rv="Exchange",Ov="Filter events",Nv="Event format",Mv="My events",Lv="Create new event",Fv="Select your event title",Vv="Summary",Uv="A brief summary about the event",Hv="Who is organizing the event",Bv="What is the event format?",Yv="Insert the country where the event will be held",Wv="Insert the state where the event will be held",Gv="Insert the ZIP code",Xv="Insert the rest of the address",Qv="What platform will the event be held on",Jv="Event start time",Kv="Event end date",Zv="Select the cover image for your event (16:9)",ew="Insert more details about the event",tw="Profile types",ow="Access the platform and click on 'Register'.",sw="Enter your personal data carefully and complete all required fields.",iw="Select the type of profile you want to register.",rw="Validate your account: Confirm your email and follow the instructions to complete the registration process.",aw="Click on 'My area' to enter your profile page.",nw="Use professional and high-quality images in your profile and banner to make a good impression.",lw="Add details about your account.",cw="In your area, access the 'Profile' option through the navigation menu.",dw="In the media carousel, use the '+' button to select and send your best content.",pw="Include photos and videos that show moments related to your career.",uw="We work with athletes of all levels, including amateurs, professionals, semi-professionals and youth categories.",mw="How it works",_w="Create your account",hw="Edit your profile",gw="Show your talent",xw="seek opportunities",yw="Select the 'Athlete' option to register as an athlete looking for opportunities.",fw="Add details about your experience, skills, training and achievements.",bw="Include photos and videos that demonstrate your skills, techniques and highlights in competitions or training.",vw="Access the 'Opportunities' section to view available vacancies.",ww="Use the filters to find opportunities that fit your profile and interests.",jw="Click on the vacancy that interests you, read the details and requirements carefully to see if you fit!",$w="If you meet the requirements, fill in the text area with a presentation and click 'Send' to take the next step.",kw="Be part of it!",Cw="Create your profile, share your best photos and videos and let the world discover your talent.",Sw="We work with clubs of all levels, including amateurs, professionals and semi-professionals.",Tw="Create your account",Aw="Edit your profile",Pw="Show your talent",Ew="Seek talents",zw="Select the 'Club' option to register as a club looking for new talents.",Dw="Complete your profile! Reveal your memorable achievements, the stadium that crowns you and the coach that drives you.",qw="Include photos and videos that show the players training, highlights in competitions or the daily life of your club.",Iw="Access the 'My opportunities' section to view your available opportunities.",Rw="Click on the '+' icon to start creating a new opportunity.",Ow="Click on an existing opportunity to edit its details at any time.",Nw="Access the 'players' section and use the filters to discover the talents that can take your team to the next level.",Mw="Create your profile, show your club to the world and seek new talents.",Lw={"------------------------------------------ Palavras comuns":"------------------------------------------ ",slogan:Zu,username:em,login:tm,remember_login:om,logout:sm,close:im,password:rm,register:am,email:nm,create_account:lm,reset_password:cm,select_language:dm,home:pm,home_page:um,my_area:mm,close_menu:_m,message:hm,new_message:gm,back:xm,details:ym,favorite:fm,make_favorite:bm,remove_from_favorites:vm,data_not_found:wm,show_more:jm,show_less:$m,previous:km,next:Cm,blocked:Sm,close_image:Tm,buy:Am,profile_picture:Pm,yes:Em,no:zm,fullscreen:Dm,remove:qm,report:Im,confirm:Rm,copy:Om,weight:Nm,height:Mm,edit_profile:Lm,settings:Fm,follow:Vm,unfollow:Um,ranking:Hm,photos:Bm,videos:Ym,your_profile:Wm,your_email:Gm,online:Xm,in_person:Qm,name:Jm,select:Km,required:Zm,other:e_,add:t_,note:o_,match:s_,please_wait:i_,title:r_,privacity:a_,terms_of_use:n_,about_us:l_,need_help_question:c_,share:d_,language:p_,copy_url:u_,"------------------------------------------ Mensagens ao usuário":"------------------------------------------ ",no_owner_opportunities:m_,no_opportunities:__,no_products:h_,no_players:g_,not_logged:x_,image_upload_error:y_,video_upload_error:f_,token_not_found:b_,username_not_found_response:v_,username_not_found:w_,error_response_server:j_,no_response:$_,error_setting_request:k_,delete_image_question:C_,delete_video_question:S_,delete_opportunity_question:T_,text_copied_sucess:A_,text_copy_error:P_,fill_all_fields:E_,verification_email_sended:z_,end_seasson_question:D_,successfully_logged_out:q_,invalid_credentials_check_details:I_,login_error:R_,login_error_try_again:O_,passwords_not_match:N_,server_response:M_,register_error:L_,register_error_try_again:F_,events_not_found:V_,owner_events_not_found:U_,"------------------------------------------ Dashboards + Components":"------------------------------------------ ",dashboard_player:H_,dashboard_club:B_,dashboard_university:Y_,dashboard_public:W_,dashboard_staff:G_,dashboard_league:X_,favorite_players:Q_,favorite_videos:J_,favorite_opportunities:K_,current_competitions:Z_,titles_and_awards:eh,your_messages:th,club_history:oh,academic_history:sh,referral_link:ih,level_1:rh,level_2:ah,level_3:nh,my_squad:lh,"------------------------------------------ Profile Info":"------------------------------------------ ",modality:ch,birth_date:dh,age:ph,birth:uh,primary_nationality:mh,secondary_nationality:_h,passports:hh,base_payment:gh,transfer_value:xh,main_position:yh,primary_position:fh,secondary_position:bh,tertiary_position:vh,toefl:wh,act:jh,sat:$h,graduation_date:kh,grade_point_average:Ch,representative:Sh,foundation_date:Th,state:Ah,training_center:Ph,stadium:Eh,coach:zh,profile_type:Dh,kg:qh,meters:Ih,player:Rh,club:Oh,club_name:Nh,university:Mh,universities:Lh,staff:Fh,agency:Vh,fan:Uh,fans:Hh,performance_analyst:Bh,coach_assistant:Yh,coordinator:Wh,director:Gh,business_man:Xh,physiologist:Qh,physiotherapist:Jh,manager:Kh,massage_therapist:Zh,nutritionist:eg,goalkeeper_trainer:tg,physical_trainers:og,tactical_trainers:sg,psychologists:ig,doctor:rg,doctors:ag,scout:ng,exchange_agencies:lg,exchange_agency:cg,serie_a:dg,serie_b:pg,serie_c:ug,serie_d:mg,ncaa_1:_g,ncaa_2:hg,ncaa_3:gg,naia_1:xg,naia_2:yg,nccaa_1:fg,nccaa_2:bg,njcaa_1:vg,njcaa_2:wg,njcaa_3:jg,sub_7:$g,sub_8:kg,sub_9:Cg,sub_11:Sg,sub_13:Tg,sub_15:Ag,sub_17:Pg,sub_20:Eg,adult:zg,goalkeeper:Dg,left_back:qg,right_back:Ig,center_back:Rg,wing_back:Og,defensive_midfielder:Ng,central_midfielder:Mg,attacking_midfielder:Lg,wide_midfielder:Fg,second_striker:Vg,left_winger:Ug,right_winger:Hg,center_forward:Bg,not_specified:Yg,R$:Wg,$:Gg,"€":"€",right:Xg,left:Qg,male:Jg,female:Kg,"n/a":"N/A",active_free:Zg,active:ex,injured:tx,injured_free:ox,agents:sx,"------------------------------------------ Benefits":"------------------------------------------ ",podcast:ix,sports_channels:rx,investments:ax,benefits_club:nx,interchange:lx,crypto_wallet:cx,crowdfunding:dx,lions_platform:px,studies:ux,american_studies:mx,"------------------------------------------ Profile Header":"------------------------------------------ ",profile:_x,"my-squad":"My squad",my_opportunities:hx,scouts:gx,social:xx,news:yx,opportunities:fx,clubs:bx,players:vx,favorites:wx,squad:jx,events:$x,contacts:kx,friends:Cx,store:Sx,"t2s+":"T2S+",my_affiliates:Tx,"------------------------------------------ Competitive Categories":"------------------------------------------ ",professional:Ax,semi_professional:Px,academic:Ex,amateur:zx,recreational:Dx,"------------------------------------------ Store":"------------------------------------------ ",t_shirts:qx,football_boots:Ix,store_text:Rx,"------------------------------------------ Home":"------------------------------------------ ",trending_videos:Ox,benefits:Nx,my_benefits:Mx,partners_supporters:Lx,user_benefits:Fx,"------------------------------------------ Edit + Create + View Opportunity":"------------------------------------------ ",edit_my_opportunity:Vx,which_league:Ux,league:Hx,leagues:Bx,country:Yx,schools:Wx,which_country_opportunity:Gx,position:Xx,which_position:Qx,which_category:Jx,which_disponibility_date:Kx,minimum_height:Zx,which_minimum_height:ey,minimum_age:ty,which_minimum_age:oy,maximum_age:sy,which_maximum_age:iy,minimum_payment:ry,which_minimum_payment:ay,maximum_payment:ny,which_maximum_payment:ly,which_currency:cy,select_currency:dy,city:py,which_best_leg:uy,which_competitive_level:my,which_category_you_act:_y,your_current_weight:hy,your_current_height:gy,your_primary_nationality:xy,your_secondary_nationality:yy,your_birth_city:fy,have_passports_question:by,if_yes_list_the_countries:vy,your_base_payment:wy,your_transfer_value:jy,your_main_position:$y,your_secondary_position:ky,your_tertiary_position:Cy,play_in_league_question:Sy,select_your_league:Ty,have_manager_question:Ay,your_sporting_history:Py,your_academic_history:Ey,titles_and_awards_history:zy,competition_award:Dy,competition:qy,competition_award_name:Iy,take_toefl_question:Ry,take_act_question:Oy,second_grade_graduation_date:Ny,gpa:My,certification_name:Ly,certification:Fy,certifications:Vy,confirm_change:Uy,confirm_changes:Hy,select_level:By,knowledge:Yy,your_agency_type_question:Wy,select_type:Gy,representative_club_name:Xy,which_club_competitive_level:Qy,which_country_club:Jy,which_state_club:Ky,where_club_train:Zy,stadium_name:ef,club_stadium:tf,coach_or_trainer:of,actual_club_coach:sf,competition_name:rf,nationality:af,your_nationality:nf,profile_type_question:lf,representative_university_name:cf,which_university_competitive_level:df,which_country_university:pf,which_state_university:uf,where_university_train:mf,university_stadium:_f,actual_university_coach:hf,description:gf,insert_description:xf,requirements:yf,insert_requirements:ff,confirm_edit:bf,publish_opportunity:vf,competitive_category:wf,competitive_level:jf,category:$f,best_leg:kf,avaliability:Cf,has_manager:Sf,has_manager_question:Tf,minimum_transfer_value:Af,maximum_transfer_value:Pf,birth_country:Ef,passport:zf,all:Df,create_new_opportunity:qf,opportunity_from:If,published_in:Rf,opportunity:Of,close_opportunity:Nf,date:Mf,payment:Lf,immediate:Ff,years:Vf,optional:Uf,send_message:Hf,opportunity_message_sent:Bf,select_position:Yf,"------------------------------------------ Buttons text":"------------------------------------------ ",change_profile_picture_button:Wf,change_banner_button:Gf,add_video_button:Xf,add_photo_button:Qf,"------------------------------------------ Report":"------------------------------------------ ",report_reason_question:Jf,select_reason:Kf,insert_report_details:Zf,inappropriate_content:eb,copyright:tb,media_manipulation:ob,poor_quality:sb,portuguese_br:ib,english:rb,spanish:ab,"------------------------------------------ Login + Register + Passwords":"------------------------------------------ ",forgot_password:nb,forgot_password_question:lb,change_password:cb,new_password:db,insert_your_password:pb,insert_new_password:ub,insert_new_password_again:mb,confirm_new_password:_b,password_changed_successfully:hb,insert_your_email:gb,please_check:xb,have_account_question:yb,return_home:fb,your_username_on_t2s:bb,your_password:vb,confirm_password:wb,password_confirmation:jb,select_profile_type:$b,player_name_question:kb,club_name_question:Cb,university_name_question:Sb,agency_name_question:Tb,league_name_question:Ab,staff_name_question:Pb,fan_name_question:Eb,which_competitive_category:zb,which_modality:Db,select_modality:qb,which_club_modality:Ib,select_category:Rb,step_by_step:Ob,register_step_1:Nb,register_step_2:Mb,register_step_3:Lb,register_step_4:Fb,"------------------------------------------ Benefits pages":"------------------------------------------ ",welcome_t2s_benefits:Vb,benefits_text_1:Ub,benefits_text_2:Hb,benefits_step_1:Bb,t2s_benefits:Yb,welcome_t2s_events:Wb,events_text_1:Gb,events_text_2:Xb,events_step_1:Qb,events_step_2:Jb,events_step_3:Kb,events_step_4:Zb,other_t2s_benefits:ev,welcome_t2s_benefits_club:tv,benefits_club_text_1:ov,benefits_club_text_2:sv,benefits_club_step_1:iv,benefits_club_step_2:rv,benefits_club_step_3:av,benefits_club_step_4:nv,welcome_t2s_investments:lv,investments_text_1:cv,investments_text_2:dv,investments_step_1:pv,investments_step_2:uv,investments_step_3:mv,investments_step_4:_v,"------------------------------------------ Auth Elements":"------------------------------------------ ",year_of_achievement:hv,entry:gv,entry_year:xv,exit:yv,exit_year:fv,actual:bv,insert_final_grade:vv,"------------------------------------------ Events":"------------------------------------------ ",organizer:wv,start_date:jv,end_date:$v,hour:kv,platform:Cv,close_event:Sv,zip_code:Tv,address:Av,participate:Pv,camping:Ev,clinic:zv,palestra:Dv,tour:qv,showcase:Iv,exchange:Rv,filter_events:Ov,event_format:Nv,my_events:Mv,create_new_event:Lv,select_event_title:Fv,summary:Vv,summary_about_event:Uv,who_event_organizer:Hv,which_event_format:Bv,insert_event_country:Yv,insert_event_state:Wv,insert_zip_code:Gv,insert_rest_adress:Xv,what_event_platform:Qv,event_start_hour:Jv,event_end_date:Kv,select_event_banner:Zv,insert_more_event_details:ew,"------------------------------------------ Userspage":"------------------------------------------ ",profile_types:tw,generic_step_1_part_1:ow,generic_step_1_part_2:sw,generic_step_1_part_3:iw,generic_step_1_part_4:rw,generic_step_2_part_1:aw,generic_step_2_part_2:nw,generic_step_2_part_3:lw,generic_step_3_part_1:cw,generic_step_3_part_2:dw,generic_step_3_part_3:pw,player_text:uw,how_it_works:mw,player_step_1_title:_w,player_step_2_title:hw,player_step_3_title:gw,player_step_4_title:xw,player_step_1_part_3:yw,player_step_2_part_3:fw,player_step_3_part_3:bw,player_step_4_part_1:vw,player_step_4_part_2:ww,player_step_4_part_3:jw,player_step_4_part_4:$w,be_part_exclamation:kw,player_text_2:Cw,club_text:Sw,club_step_1_title:Tw,club_step_2_title:Aw,club_step_3_title:Pw,club_step_4_title:Ew,club_step_1_part_3:zw,club_step_2_part_3:Dw,club_step_3_part_3:qw,club_step_4_part_1:Iw,club_step_4_part_2:Rw,club_step_4_part_3:Ow,club_step_4_part_4:Nw,club_text_2:Mw},Fw="O caminho para o estrelato esportivo começa aqui",Vw="Nome de usuário",Uw="Entrar",Hw="Lembrar login",Bw="Sair da conta",Yw="Fechar",Ww="Senha",Gw="Registrar-se",Xw="E-mail",Qw="Criar uma Conta",Jw="Redefinir Senha",Kw="Escolha o idioma",Zw="Escolha o esporte",ej="Home",tj="Página Principal",oj="Minha Área",sj="Fechar menu",ij="Mensagem",rj="Nova mensagem",aj="Voltar",nj="Detalhes",lj="Favorito",cj="Tornar favorito",dj="Remover dos favoritos",pj="Nenhum dado foi encontrado...",uj="Mostrar mais",mj="Mostrar menos",_j="Anterior",hj="Próximo",gj="Bloqueado",xj="Fechar Imagen",yj="Comprar",fj="Foto de perfil",bj="Sim",vj="Não",wj="Tela cheia",jj="Remover",$j="Denunciar",kj="Confirmar",Cj="Copiar",Sj="Peso",Tj="Altura",Aj="Editar perfil",Pj="Configurações",Ej="Seguir",zj="Deixar de seguir",Dj="Ranking",qj="Fotos",Ij="Vídeos",Rj="Seu perfil",Oj="Seu email",Nj="Online",Mj="Presencial",Lj="Nome",Fj="Selecione",Vj="Obrigatório",Uj="Outro",Hj="Adicionar",Bj="Nota",Yj="Partida",Wj="Por favor, espere...",Gj="Título",Xj="Privacidade",Qj="Políticas",Jj="Termos de uso",Kj="Uso aceitável",Zj="Sobre nós",e$="Precisa de ajuda?",t$="Compartilhar",o$="Idioma",s$="Copiar URL",i$="Você ainda não publicou nenhuma oportunidade. Que tal começar agora? Clique no ícone de ‘+’ acima para criar a sua primeira oportunidade!",r$="Nenhuma oportunidade foi encontrada...",a$="Nenhum produto foi encontrado....",n$="Nenhum jogador foi encontrado...",l$="Usuário não está logado ou não possui um ID válido",c$="Erro ao enviar a imagem:",d$="Erro ao enviar o vídeo:",p$="Token não encontrado no localStorage",u$="Nome de usuário não encontrado na resposta:",m$="Nome de usuário não encontrado",_$="Resposta de erro do servidor:",h$="Nenhuma resposta recebida:",g$="Erro ao configurar a solicitação:",x$="Tem certeza que deseja excluir essa imagem?",y$="Tem certeza que deseja excluir esse vídeo?",f$="Tem certeza de que deseja excluir esta oportunidade?",b$="Texto copiado com sucesso!",v$="Erro ao copiar o texto!",w$="Por favor, preencha todos os campos",j$="Um email de verificação foi enviado para este endereço de email",$$="Você deseja realmente encerrar sua sessão?",k$="Usuário deslogado com sucesso",C$="Credenciais inválidas. Por favor, verifique seus dados.",S$="Erro ao fazer login:",T$="Erro ao fazer login. Por favor, tente novamente.",A$="As senhas não coincidem!",P$="Resposta do servidor:",E$="Erro ao registrar usuário:",z$="Ocorreu um erro ao registrar o usuário. Por favor, tente novamente.",D$="Nenhum evento foi encontrado...",q$="Você ainda não publicou nenhum evento. Que tal começar agora? Clique no ícone de ‘+’ acima para criar o seu primeiro evento",I$="Dashboard - Jogador",R$="Dashboard - Clube",O$="Dashboard - Universidade",N$="Dashboard - Público",M$="Dashboard - Comissão técnica",L$="Dashboard - Liga",F$="Jogadores favoritos",V$="Vídeos favoritos",U$="Oportunidades favoritas",H$="Competições em disputa",B$="Títulos e prêmios",Y$="Suas mensagens",W$="Histórico de clubes",G$="Histórico acadêmico",X$="Link de indicação",Q$="Level 1",J$="Level 2",K$="Level 3",Z$="Meus jogadores",e0="Modalidade",t0="Data de nascimento",o0="Idade",s0="Nascimento",i0="Nacionalidade primária",r0="Nacionalidade secundária",a0="Passaportes",n0="Salário base",l0="Valor de transferência",c0="Posição principal",d0="Posição primária",p0="Posição secundária",u0="Posição terciária",m0="TOEFL",_0="ACT",h0="SAT",g0="Data de graduação",x0="Nota média final",y0="Representante",f0="Data de fundação",b0="Estado",v0="Centro de treinamento",w0="Estádio",j0="Técnico",$0="Tipo de perfil",k0="KG",C0="Metros",S0="Atleta",T0="Clube",A0="Nome do clube",P0="Universidade",E0="Universidades",z0="Staff",D0="Agência",q0="Fã",I0="Fãs",R0="Analista de desempenho",O0="Auxiliar Técnico",N0="Coordenador",M0="Diretor",L0="Empresário",F0="Fisiologista",V0="Fisioterapeuta",U0="Gerente",H0="Massagista",B0="Nutricionista",Y0="goleiro",W0="Preparadores físico",G0="Preparadores táticos",X0="Psicólogos",Q0="Médico",J0="Médicos",K0="Personal Trainer",Z0="Scout",e1="Agências de intercâmbio",t1="Agência de intercâmbio",o1="Serie A",s1="Serie B",i1="Serie C",r1="Serie D",a1="1° Divisão",n1="2° Divisão",l1="3° Divisão",c1="4° Divisão",d1="5° Divisão",p1="6° Divisão",u1="7° Divisão",m1="8° Divisão",_1="9° Divisão",h1="10° Divisão",g1="11° Divisão",x1="12° Divisão",y1="NCAA 1",f1="NCAA 2",b1="NCAA 3",v1="NAIA 1",w1="NAIA 2",j1="NCCAA 1",$1="NCCAA 2",k1="NJCAA 1",C1="NJCAA 2",S1="NJCAA 3",T1="Sub 7",A1="Sub 8",P1="Sub 9",E1="Sub 11",z1="Sub 13",D1="Sub 15",q1="Sub 17",I1="Sub 20",R1="Adulto",O1="Goleiro",N1="Lateral-Esquerdo",M1="Lateral-Direito",L1="Zagueiro",F1="Ala",V1="Primeiro-Volante",U1="Meio-Campista",H1="Meia-Ofensivo",B1="Meia-Lateral",Y1="Segundo-atacante",W1="Ponta-Esquerda",G1="Ponta-Direita",X1="Centroavante",Q1="Atacante",J1="Não especificado",K1="R$",Z1="$",e2="Direita",t2="Esquerda",o2="Masculino",s2="Feminino",i2="Ativo - Sem contrato",r2="Ativo",a2="Lesionado",n2="Lesionado - Sem contrato",l2="Agentes",c2="Método de envio",d2="Youtube",p2="Vimeo",u2="T2S",m2="URL do vídeo no Youtube",_2="URL do vídeo no Vimeo",h2="URL",g2="Podcast",x2="Canais esportivos",y2="Investimentos",f2="Clube de benefícios",b2="Intercâmbio",v2="Crypto Wallet",w2="Crowdfunding",j2="Plataforma Lions",$2="Educação",k2="Educação americana",C2="Telemedicina (USA)",S2="solar",T2="Perfil",A2="Minhas oportunidades",P2="Scouts",E2="Social",z2="Notícias",D2="Oportunidades",q2="Clubes",I2="Jogadores",R2="Favoritos",O2="plantel",N2="Eventos",M2="Contatos",L2="Amigos",F2="Loja",V2="Meus afiliados",U2="Profissional",H2="Semi-Profissional",B2="Universitário",Y2="Amador",W2="Recreacional",G2="Camisetas",X2="Chuteiras",Q2="Ainda não vendemos esses produtos diretamente na S2T, mas não se preocupe, a gente tem uma loja completa com tudo que você precisa, e o melhor: é tudo do mesmo grupo! Então, se você clicar no botão 'Comprar', iremos te direcionar para o nosso site de compras, onde você pode finalizar a sua compra com toda segurança e tranquilidade.",J2="Vídeos em Alta",K2="Benefícios",Z2="Meus benefícios",ek="Parceiros e Apoiadores",tk="Benefícios do usuário",ok="Editar minha oportunidade",sk="Para qual liga é a oportunidade?",ik="Liga",rk="ligas",ak="País",nk="Escolas",lk="Para qual país é a oportunidade?",ck="Posição",dk="Para qual posição é a oportunidade",pk="Para qual categoria é a oportunidade?",uk="Qual a data de disponibilidade da oportunidade?",mk="Altura mínima",_k="Qual altura mínima para se candidatar?",hk="Idade mínima",gk="Qual a idade mínima para se candidatar?",xk="Idade máxima",yk="Qual a idade máxima para se candidatar?",fk="Salário mínimo",bk="Qual o menor valor que o jogador pode receber mensalmente?",vk="Salário máximo",wk="Qual o maior valor que o jogador pode receber mensalmente?",jk="Qual moeda será usada para o pagamento?",$k="Escolha a moeda",kk="Cidade",Ck="Qual sua melhor perna?",Sk="Qual o seu nível competitivo?",Tk="Você atua em qual categoria?",Ak="Seu peso atual (em KG)",Pk="Sua altura atual (Em metros)",Ek="Sua nacionalidade primária",zk="Sua nacionalidade secundária",Dk="País que atua",qk="Sua cidade de nascimento",Ik="Seu estado de nascimento",Rk="Possui passporte para algum país?",Ok="Caso sim, liste os países",Nk="eu salário base",Mk="Seu valor de transferência",Lk="Sua posição principal",Fk="Sua posição secundária",Vk="Sua posição terciária",Uk="Você joga em alguma liga?",Hk="Escolha sua Liga",Bk="Você possui algum empresário?",Yk="Sua história esportiva",Wk="Sua história acadêmica",Gk="Histórico de títulos e prêmios",Xk="Competição / Prêmio",Qk="Competição",Jk="Nome da competição ou prêmio",Kk="Realizou a prova TOEFL?",Zk="Realizou a prova ACT?",eC="Realizou a prova SAT?",tC="Data de formatura do segundo grau",oC="GPA (Grade Point Average)",sC="Nome da certificação",iC="Certificação",rC="Certificações",aC="Confirmar alteração",nC="Confirmar alterações",lC="Escolha o nível",cC="Conhecimentos",dC="Qual é o tipo da sua agência?",pC="Escolha o tipo",uC="Nome do representante do Clube",mC="Qual o nível competitivo do clube?",_C="De qual país é o clube",hC="De qual estado é o clube",gC="Onde o clube realiza os treinamentos",xC="Nome do estádio",yC="Nome do estádio ou arena do clube",fC="Técnico ou treinador",bC="Atual técnico ou treinador do clube",vC="Nome da competição",wC="Nacionalidade",jC="Sua nacionalidade",$C="Qual o seu tipo de perfil?",kC="Nome do representante da universidade",CC="Qual o nível competitivo da universidade?",SC="De qual país é a universidade",TC="De qual estado é a universidade",AC="Onde a universidade realiza os treinamentos",PC="Nome do estádio ou arena da universidade",EC="Atual técnico ou treinador da universidade",zC="Nome do representante da liga",DC="Qual o nível competitivo da liga?",qC="De qual país é a liga",IC="De qual estado é a liga",RC="Onde a liga realiza os treinamentos",OC="Descrição",NC="Insira a descrição da sua oportunidade",MC="Requisitos",LC="Insira outros requisitos para sua oportunidade",FC="Confirmar edição",VC="Publicar Oportunidade",UC="Categoria competitiva",HC="Nível competitivo",BC="Categoria",YC="Melhor perna",WC="Disponibilidade",GC="Possui empresário",XC="Possui empresário?",QC="Valor mínimo de transferência",JC="Valor máximo de transferência",KC="País de nascimento",ZC="Passaporte",eS="Todos(a)",tS="Criar nova oportunidade",oS="Oportunidade de",sS="Publicada em",iS="Oportunidade",rS="Fechar oportunidade",aS="Data",nS="Salário",lS="Imediato",cS="Anos",dS="Opcional",pS="Enviar mensagem",uS="Você já enviou uma mensagem",mS="Escolha a posição",_S="Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?",hS="Olá, estou muito interessado na oportunidade e acredito que cumpro todos os requisitos. Agradeço pela consideração!",gS="Olá, estou muito interessado na oportunidade. Atualmente, estou sob contrato, mas aberto a novas possibilidades. Obrigado!",xS="Oi, estou muito interessado na oportunidade e estou disponível imediatamente, pois não estou sob contrato. Agradeço pela consideração!",yS="Botão para alterar a foto do seu perfil",fS="Botão para alterar o banner do seu perfil",bS="Botão para adicionar um novo vídeo ao seu perfil",vS="Botão para adicionar uma nova foto ao seu perfil",wS="Motivo da denúncia",jS="Escolha o motivo",$S="Insira mais detalhes (Opcional)",kS="Contéudo inapropriado",CS="Direitos Autorais",SS="Manipulação de Mídia",TS="Qualidade Ruim",AS="Recebemos a sua denúncia!",PS="Obrigado por nos ajudar a manter nossa plataforma segura e livre de conteúdo impróprio. Sua denúncia será cuidadosamente analisada por nossa equipe.",ES="Português (BR)",zS="Inglês",DS="Espanhol",qS="Português (BR)",IS="Inglês",RS="Espanhol",OS="Francês",NS="Futebol",MS="Basquete",LS="Vôlei",FS="Esqueceu a senha",VS="Esqueceu a senha?",US="Alterar senha",HS="Nova senha",BS="Insira sua senha",YS="Insira uma nova senha",WS="Insira novamente sua nova senha",GS="Confirme sua nova senha",XS="Sua senha foi alterada com sucesso!",QS="Insira o seu e-mail cadastrado",JS="Por favor, verifique!",KS="Não possui uma conta?",ZS="Voltar para home",eT="Seu nome de usuário na T2S",tT="Sua senha",oT="Confirme sua senha",sT="Confirmação de senha",iT="Escolha seu tipo de perfil",rT="Qual o seu nome completo ?",aT="Qual o nome do seu clube ?",nT="Qual o nome da sua universidade ?",lT="Qual o nome da sua agência ?",cT="Qual o nome da sua liga ?",dT="Qual o seu nome completo ?",pT="Qual o seu nome completo ?",uT="Qual categoria competitiva?",mT="Deseja atuar em qual modalidade?",_T="Escolha a modalidade",hT="Qual a modalidade do seu clube?",gT="Escolha a categoria",xT="Passo a passo",yT="Informe seus dados pessoais com atenção e complete todos os campos obrigatórios.",fT="Selecione o tipo de perfil que deseja criar",bT="Valide sua conta: Confirme seu email e siga as instruções para concluir o processo de cadastro.",vT="Acesse 'Editar perfil' e adicione detalhes sobre sua experiência, habilidades, formação e conquistas.",wT="Boas-vindas aos benefícios da T2S",jT="Descubra as vantagens exclusivas que a T2S tem reservadas especialmente para você. Nossa missão é tornar sua experiência conosco ainda mais gratificante e recompensadora.",$T="Aqui estão alguns dos benefícios incríveis que você pode aproveitar como parte da comunidade T2S:",kT="Clique em qualquer um dos eventos abaixo.",CT="Benefícios T2S",ST="Boas-vindas aos eventos da T2S!",TT="Aqui, você encontrará os melhores eventos de futebol, tanto no Brasil quanto ao redor do mundo",AT="No momento, os eventos da T2S estão disponíveis em nossos sites individuais. Para acessá-los, basta seguir o passo-a-passo abaixo:",PT="Clique em qualquer um dos eventos abaixo.",ET="Leia os detalhes do evento.",zT="Ao encontrar um evento que lhe interesse, clique em ‘Participar’.",DT="Após isso, você será direcionado para a página do evento",qT="Outros benefícios T2S",IT="Boas-vindas ao Clube de Benefícios da T2S!",RT="Aqui, você encontra tudo para tornar sua vida mais incrível: descontos, ofertas, experiências e muito mais!",OT="O Clube de Benefícios da T2S tem seu próprio site, onde você encontra tudo o que precisa para aproveitar ao máximo seus benefícios.Para acessar:",NT="Clique em qualquer um dos benefícios abaixo.",MT="Você será direcionado automaticamente para o site do Clube de Benefícios.",LT="Crie sua conta ou faça login, se já tiver uma.",FT="Comece a explorar e aproveitar as vantagens exclusivas que te esperam!",VT="Boas-vindas à area de investimentos da T2S!",UT="Aqui, você encontrará informações essenciais para otimizar seus investimentos e fazer seu patrimônio crescer",HT="A area de investimentos da T2S tem seu próprio site, onde você encontra tudo o que precisa para aproveitar ao máximo.Para acessar:",BT="Clique em qualquer um dos tipos de investimentos abaixo.",YT="Você será direcionado automaticamente para o nosso site de investimentos.",WT="Crie sua conta ou faça login, se já tiver uma.",GT="Comece a explorar e aproveitar as vantagens exclusivas que te esperam!",XT="Boas-vindas à area de inglês da T2S!",QT="Aqui, você encontrará informações essenciais para melhorar seu aprendizado de inglês e expandir seu vocabulário.",JT="A área de estudos de inglês lhe oferece acesso a diversas plataformas, onde você encontra tudo o que precisa para aproveitar ao máximo. Para acessar:",KT="Clique em qualquer um dos cursos de inglês abaixo.",ZT="Você será direcionado automaticamente para a plataforma escolhida",eA="Crie sua conta ou faça login, se já tiver uma.",tA="Comece a explorar e aproveitar as vantagens exclusivas que te esperam!",oA="Boas-vindas à area de intercâmbio da T2S!",sA="Aqui, você encontrará informações essenciais para planejar seu intercâmbio e aproveitar ao máximo sua experiência no exterior.",iA="A área de intercâmbio tem seu próprio site, onde você encontra tudo o que precisa para aproveitar ao máximo. Para acessar:",rA="Clique em qualquer um dos tipos de intercâmbio abaixo.",aA="Você será direcionado automaticamente para o nosso site de intercâmbio.",nA="Crie sua conta ou faça login, se já tiver uma.",lA="Comece a explorar e aproveitar as vantagens exclusivas que te esperam!",cA="Boas-vindas à area de estudos da T2S!",dA="Aqui, você encontrará informações essenciais para melhorar seu desempenho acadêmico e expandir seus conhecimentos",pA="A área de estudos lhe oferece acesso a diversas plataformas, onde você encontra tudo o que precisa para aproveitar ao máximo. Para acessar:",uA="Clique em qualquer um dos tipos de intercâmbio abaixo.",mA="Você será direcionado automaticamente para a plataforma escolhida",_A="Crie sua conta ou faça login, se já tiver uma.",hA="Comece a explorar e aproveitar as vantagens exclusivas que te esperam!",gA="Boas-vindas à area de estudos americanos da T2S!",xA="Aqui, você encontrará informações essenciais para planejar seus estudos a distância com ensino dos Estados Unidos e aproveitar ao máximo sua experiência acadêmica.",yA="A área de estudos EAD com ensino dos EUA tem seu próprio site, onde você encontra tudo o que precisa para aproveitar ao máximo. Para acessar",fA="Clique em qualquer um dos tópicos de estudo abaixo.",bA="Você será direcionado automaticamente para a plataforma escolhida",vA="Crie sua conta ou faça login, se já tiver uma.",wA="Comece a explorar e aproveitar as vantagens exclusivas que te esperam!",jA="Boas-vindas à area de Crowdfunding da T2S!",$A="Aqui, você encontrará informações essenciais para lançar e financiar seu projeto através de crowdfunding.",kA="A área de crowdfunding tem seu próprio site, onde você encontra tudo o que precisa para aproveitar ao máximo. Para acessar:",CA="Clique em qualquer uma das opções de Crowdfunding",SA="Você será direcionado automaticamente para a nossa plataforma de Crowdfunding",TA="Crie sua conta ou faça login, se já tiver uma.",AA="Comece a explorar e aproveitar as vantagens exclusivas que te esperam!",PA="Boas-vindas à Crypto Wallet da T2S!",EA="Aqui, você encontrará informações essenciais para gerenciar suas criptomoedas e proteger seus ativos digitais.",zA="A área de crypto wallet tem seu próprio site, onde você encontra tudo o que precisa para aproveitar ao máximo. Para acessar:”",DA="Clique em qualquer um dos tipos de carteiras abaixo.",qA="Você será direcionado automaticamente para o nosso site de crypto wallet.",IA="Crie sua conta ou faça login, se já tiver uma.",RA="Comece a explorar e aproveitar as vantagens exclusivas que te esperam!",OA="Boas-vindas a plataforma Lions na da T2S!",NA="Aqui, você encontra tudo para tornar sua vida mais incrível: ofertas, experiências e muito mais!",MA="A plataforma Lions tem seu próprio site, onde você encontra tudo o que precisa para aproveitar ao máximo seus benefícios.Para acessar:",LA="Clique em qualquer um dos benefícios abaixo.",FA="Você será direcionado automaticamente para o site da plataforma lions",VA="Crie sua conta ou faça login, se já tiver uma.",UA="Comece a explorar e aproveitar as vantagens exclusivas que te esperam!",HA="Boas-vindas à area de telemedicina da T2S!",BA="Aqui, você encontrará informações essenciais para acessar serviços de telemedicina e receber o cuidado médico que você precisa.",YA="A área de telemedicina da T2S tem seu próprio site, onde você encontra tudo o que precisa para acessar os serviços de saúde remotamente. Esses serviços são exclusivos para os Estados Unidos. Para acessar:",WA="Clique em alguma das opções abaixo.",GA="Você será direcionado automaticamente para o nosso site de telemedicina.",XA="Crie sua conta ou faça login, se já tiver uma.",QA="Comece a explorar e aproveitar as vantagens exclusivas que te esperam!",JA="Nome completo",KA="Nome completo do dono da casa",ZA="Rua",eP="Nome da rua",tP="Número de telefone",oP="Seu número de telefone",sP="Ano da conquista",iP="Entrada",rP="Ano de entrada",aP="Saída",nP="Ano de saída",lP="Atual",cP="Insira sua nota final",dP="Organizador(a)",pP="Data de início",uP="Data do fim",mP="Horário",_P="Plataforma",hP="Fechar Evento",gP="CEP",xP="Endereço",yP="Participar",fP="Acampamento",bP="Clínica",vP="Palestra",wP="Tour",jP="Exibição",$P="Intercâmbio",kP="Filtrar eventos",CP="Formato do evento",SP="Meus eventos",TP="Criar novo evento",AP="Escolha o título do seu evento",PP="Resumo",EP="Um breve resumo sobre o evento",zP="Quem está organizando o evento",DP="Qual o formato do evento?",qP="Insira o país que será realizado o evento",IP="Insira o estado que será realizado o evento",RP="Insira o CEP",OP="Insira o restante do endereço",NP="Qual plataforma será realizado o evento",MP="Horário de início do evento",LP="Data de início do evento",FP="Data do fim do evento",VP="Selecione a imagem de capa para o seu evento (16:9)",UP="Insira mais detalhes sobre o evento",HP="Tipos de perfil",BP="Acesse a plataforma e clique em 'Registre-se'.",YP="Informe seus dados pessoais com atenção e complete todos os campos obrigatórios.",WP="Selecione o tipo de perfil que deseja cadastrar",GP="Valide sua conta: Confirme seu email e siga as instruções para concluir o processo de cadastro.",XP="Clique em 'Minha area' para entrar na página do seu perfil.",QP="Utilize imagens profissionais e de alta qualidade em seu perfil e banner para causar uma boa impressão.",JP="Adicione detalhes sobre sua conta.",KP="Em sua área acesse a opção 'Perfil' através do menu de navegação",ZP="No carrosel de mídias utilize o botão '+' para selecionar e enviar seus melhores conteúdos.",eE="Inclua fotos e vídeos que demonstrem momentos relacionadas à sua carreira.",tE="Trabalhamos com atletas de todos os níveis, incluindo amadores, profissionais, semi profissionais e de categorias de base",oE="Como funciona",sE="Crie sua conta",iE="Edite seu perfil",rE="Mostre seu talento",aE="busque oportunidades",nE="Selecione a opção 'Atleta' para se cadastrar como um atleta em busca de oportunidades.",lE="Acesse 'Editar perfil' e adicione detalhes sobre sua experiência, habilidades, formação e conquistas.",cE="Inclua fotos e vídeos que demonstrem suas habilidades, técnicas e momentos de destaque em competições ou treinos.",dE="Acesse a seção 'Oportunidades' para visualizar as vagas disponíveis.",pE="Utilize os filtros para encontrar oportunidades que se encaixam em seu perfil e interesses.",uE="Clique na vaga que te interessa, leia com atenção os detalhes e requisitos para saber se você se encaixa!",mE="Se você se encaixa nos requisitos, preencha a área de texto com uma apresentação e clique em 'Enviar' para dar o próximo passo.",_E="Faça parte!",hE="Crie o seu perfil, compartilhe suas melhores fotos e vídeos e deixe que o mundo descubra o seu talento.",gE="Trabalhamos com clubes de todos os níveis, incluindo amadores, profissionais e semi profissionais",xE="Crie sua conta",yE="Edite seu perfil",fE="Mostre seu talento",bE="Busque talentoss",vE="Selecione a opção 'Clube' para se cadastrar como um clube em busca de novos talentos.",wE="Acesse 'Editar perfil' e complete seu perfil! Revele suas conquistas memoráveis, o estádio que te coroa e o treinador que te impulsiona.",jE="Inclua fotos e vídeos que demonstrem os jogadores treinando, momentos de destaque em competições ou o dia a dia do seu clube.",$E="Acesse a seção 'Minhas oportunidades' para visualizar suas oportunidades disponíveis.",kE="Clique no ícone '+' para iniciar a criação de uma nova oportunidade.",CE="Clique em uma oportunidade existente para editar seus detalhes a qualquer momento.",SE="Acesse a seção 'jogadores' e utilize os filtros para descobrir os talentos que podem elevar o seu time ao próximo nível.",TE="Crie o seu perfil, mostre o seu clube ao mundo e busque novos talentos.",AE="Trabalhamos com comissão ténica de todos os níveis, incluindo amadores, profissionais e semi profissionais",PE="Crie sua conta",EE="Edite seu perfil",zE="Mostre seu talento",DE="busque oportunidades",qE="Selecione a opção 'Staff' para se cadastrar como parte de uma comissão técnica",IE="Acesse 'Editar perfil' e selecione sua área de atuação",RE="Adicione detalhes sobre sua experiência, habilidades, formação e conquistas.",OE="Inclua fotos e vídeos que demonstrem suas habilidades, técnicas ou momentos em sua área",NE="Acesse a seção 'Oportunidades' para visualizar as vagas disponíveis.",ME="Utilize os filtros para encontrar oportunidades que se encaixam em seu perfil e interesses.",LE="Clique na vaga que te interessa, leia com atenção os detalhes e requisitos para saber se você se encaixa!",FE="Se você se encaixa nos requisitos, preencha a área de texto com uma apresentação e clique em 'Enviar' para dar o próximo passo.",VE="Crie o seu perfil, compartilhe suas melhores fotos e vídeos e deixe que o mundo descubra o seu talento.",UE="Terms of Use",HE="Talent 2 Show LLC. Terms of Use",BE="Last Updated: July 22, 2020",YE="www.Talent2Show.com",WE="These terms of use (the ‘Terms’) are a legal contract between Talent2Show, LLC. and its affiliates (‘Talent2Show’, ‘we’ or ‘us’) and ‘you’ (and ‘your,’ or ‘User’). The Terms explain how you are permitted to use the services provided by and through our platform and website(s) located at the URL",GE="as well as all of our associated internet properties (either linked by Talent2Show and/or affiliated companies) and any software that Talent2Show provides to you for download, including in your mobile devices (our ‘Mobile App(s)’ or ‘App(s)’) (all of these virtual properties and mobile applications, collectively, the ‘Site’). These Terms also govern your use of all the text, data, information, software, graphics, proprietary content and more (all of which we refer to as ‘Materials’) that we and/or our affiliates may make available to you, as well as any services we may provide through this Site). Collectively, the Site, the Materials, and the services provided herein are referred to as the ‘Service’.",XE="USING THE SERVICE INDICATES THAT YOU HAVE BOTH READ AND ACCEPT THESE TERMS. IF YOU DO NOT AGREE WITH ANY OF THESE TERMS, DO NOT ACCESS OR OTHERWISE USE THE SERVICE.",QE="NOTE: THESE TERMS CONTAIN A DISPUTE RESOLUTION AND",JE="ARBITRATION PROVISION",KE="INCLUDING A",ZE="CLASS ACTION WAIVER",ez="THAT AFFECTS YOUR RIGHTS. DEPENDING ON YOUR JURISDICTION, THIS SECTION MAY NOT APPLY TO YOU",tz="Terms of Use Highlights",oz="Please also read our full",sz="Terms of Use.",iz="Your Acceptance",rz="Each time you access and/or use the Service, you agree to be bound by these Terms and any Additional Terms that apply to you.",az="Your Privacy",nz="You agree that we can use your information as outlined in our Privacy Policy.",lz="Payments, Subscriptions and Cancellations",cz="You will honor your payment obligations, if any. For recurring charges that you agree to make, you agree that third-parties working on our behalf may store your payment information to process the payments you agreed to make. Provider has the discretion to alter prices for products/services at any time. You understand that additional fees and taxes may apply to your purchase. You may cancel or suspend your paid subscription by going to Account Settings directly from your profile. Please refer to our Cancellations section for more information. Talent2showdoes not guarantee refunds.",dz="US Residents: Binding Arbitration of All Disputes; No Class Relief",pz="For US Residents, any disputes under these Terms will be resolved on an individual basis through binding arbitration, with no class relief.",uz="Our Acceptable Use Policy",mz="You warrant that you will use the Service in compliance with our Acceptable Use Policy.",_z="Talent2show Intellectual Property",hz="You may not use, copy, reproduce, republish, upload, display, post, transmit, distribute, or license any content on the Service without Talent2Show's authorization.",gz="Disclaimer of Warranties",xz="To the extent permitted by law, we disclaim warranties and conditions and provide the Service 'As is.'",yz="Limitation of Liability",fz="To the extent permitted by law, Our liability is limited.",bz="Contact",vz="Questions about these Terms may be sent to support@Talent2Show.com or as otherwise set forth in these Terms.",wz="1. Your acceptance and contractual relationship.",jz="By using the Service, you represent and warrant that you are of age under the laws of your jurisdiction and/or lawfully able to enter into contracts. If you are not of age (a 'Minor'), you represent that you are using the Service with the consent of your parent or legal guardian and that you have received your parent's or legal guardian's permission to use the Service and agree to its Terms. If you are a parent or legal guardian of a Minor, you hereby consent to the use of the Service by a Minor, agree to bind the Minor to these Terms and to fully indemnify and hold harmless Talent2show if the Minor breaches any of these Terms. If you are entering into these Terms on behalf of a business entity or organization, you represent and warrant that you have the legal authority and capacity to bind such business entity or organization. If you are not authorized nor deemed by law to have such authority, you assume sole personal liability for the obligations set out in these Terms.",$z="2. Privacy",kz="Please review our privacy policy (the",Cz="which explains how we use information that you submit to Talent2Show. The Privacy Policy is hereby incorporated by reference.",Sz="Privacy Policy",Tz="3. Modifications and additional terms",Az="(a) These Terms. Talent2Show can change, update, add or remove provisions of these Terms at any time by posting the updated Terms on the Site and by providing a notice on the Service. We will ask for your express consent to the updated Terms where we are legally required to do so, and our notice to you will explain how you can accept or reject the changes. If you do not agree with any of the updated Terms, you must stop using the Service. Unless otherwise required by law, the updated Terms are effective as of the day of posting.",Pz="(b) The Service. Talent2Show may make changes to the Service at any time, without notice to you. If you object to any changes to the Service, your sole recourse will be to cease using the Service. Continued use of the Service following posting of any such changes will indicate your acknowledgement of such changes and satisfaction with the Service as modified. We also reserve the right to discontinue the Service, or any component of it, at any time without notice to you. We will not be liable to you or any third-party should we exercise our right to modify or discontinue the Service.",Ez="(c) Paid subscriptions. Please note that if you are under paid-subscription services with us, in the event we change the price for the services which you have previously agreed to pay or if we substantially change the services you are paying for, we will also notify you of such changes as contemplated in Section 1(a) above. Any changes will become effective after your then-current subscription expires or terminates. If you do not agree with such changes and you communicate this to us in accordance with the notification, we will not automatically renew your subscription even if you previously agreed to automatic renewal for payment.",zz="(d) Additional Terms. In addition, certain features of the Service may be subject to additional terms of use 'Additional Terms', which shall be provided to you at the moment you choose to use such features or services. By using such features, or any part thereof, you agree to be bound by the Additional Terms applicable to such features. In the event that any of the Additional Terms governing such features conflict with these Terms, the Additional Terms will govern.",Dz="(e) Executed Contract(s). If You have entered into a separate executed (i.e. signed) agreement for services with Talent2Show(collectively and individually, 'Contract'), such Contract shall supersede these Terms. In the event of any conflict between these Terms and the Contract, the Contract will prevail. In cases where the Contract does not address specific provisions included in these Terms, these Terms will apply, supplementing the Contract.",qz="4. Users of the services",Iz="(a) Visitors. Visitors may browse the Site in accordance with these Terms, but will not have full access to the Service (which may include but are not limited to contributing User Content, creating profiles, downloading tools, creating and messaging connections, posting comments, finding opportunities or signing up for special programs) without first becoming 'Registered Users.'",Rz="XXX",Oz="(c) Registration Data. In registering for the Service, you agree to (i) provide true, accurate, current and complete information about yourself as prompted by the Service's registration form (the 'Registration Data'); and (ii) maintain and promptly update the Registration Data to keep it true, accurate, current and complete. You are responsible for all activities that occur under your Account. You may not share your Account or password with anyone, and you agree to (A) notify Talent2Show immediately of any unauthorized use of your password or any other breach of security at support@talent2show.com; and (B) exit from your Account at the end of each session. If you provide any information that is untrue, inaccurate, not current or incomplete, or Talent2Show has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, Talent2Show has the right to suspend or terminate your Account and refuse any and all current or future use of the Service (or any portion thereof). You agree not to create an Account using a false identity or information. You agree that you shall not have more than one Account for personal use at any given time. Talent2showshall be entitled to monitor your username and password and, at its discretion, require you to change it. If you use a username and password that Talent2Show considers insecure or inappropriate, Talent2showwill be entitled to require this to be changed and/or terminate your Account. Talent2Show reserves the right to remove or reclaim any usernames at any time and for any reason, including but not limited to, claims by a third party that a username violates the third party's rights. You agree not to register for an Account on behalf of an individual other than Yourself, or register for an Account on behalf of any group or entity unless you are authorized to bind such person, group, organization, or entity to these Terms. By registering another person, group, organization, or entity you hereby represent that you are authorized to do so. You agree not to create an Account or use the Service if you have been previously removed by Talent2Show, or if you have been previously banned from any of the Talent2Show properties.",Nz="5. Use of the service",Mz="We offer access and use of our proprietary athletic recruiting network and services platform, which leverages relationships and references by connecting sports talent with opportunities. For as long as you agree to these Terms and abide by them, you may use the Service. These Terms apply to all Users of the Service, including Visitors and Registered Users, who are also contributors of User Content. The Service is licensed, not sold, to you.",Lz="(a) Grant of a Limited License to Use the Service. The Service is protected by copyright laws throughout the world. Subject to your agreement, and continuing compliance with these Terms, and any other relevant Talent2Show policies, Talent2Show grants you a personal, non-exclusive, non-transferable, non-sublicensable, revocable limited license subject to the limitations below to use the Service and/or download, and use a copy of the Mobile App or client-software on a mobile device or computer that you own or control and to run such copy solely for your own individual, non-commercial purposes only. You agree not to use the Service for any other purpose.",Fz="(b) Restrictions. You may not: (i) remove any copyright, trademark or other proprietary notices from any portion of the Service; (ii) reproduce, modify, prepare derivative works based upon, distribute, license, lease, sell, resell, transfer, publicly display, publicly perform, transmit, stream, broadcast or otherwise exploit the Service except as expressly permitted by Talent2Show; (iii) decompile, reverse engineer or disassemble the Service except as may be permitted by applicable law; (iv) link to, mirror or frame any portion of the Service except as expressly permitted by Talent2Show; (v) cause or launch any programs or scripts for the purpose of scraping, indexing, surveying, or otherwise data mining any portion of the Service or unduly burdening or hindering the operation and/or functionality of any aspect of the Service; or (vi) attempt to gain unauthorized access to or impair any aspect of the Service or its related systems or networks.",Vz="XXXX",Uz="(d) Data Network and Internet Access. When you access the Service through a mobile network, your network or roaming data services, data and other rates and fees will apply. Downloading, installing or using certain services may be prohibited or restricted by your network provider and not all features of the Service may work with your network provider or device. The Service may require an Internet connection to access Internet-based features, authenticate the Service, real-time messaging or perform other functions. You acknowledge that you may be charged by your network service provider, and shall be responsible for any such charges for Internet access.",Hz="6. Our acceptable use policy and our community",Bz="To use our Service, you agree to and warrant that you will comply at all times with our Acceptable Use Policy, as may be amended from time to time, which regulates prohibited and/or acceptable practices relating to the use of our Service, including limitations on User Content, prohibited activities, system abuse and security. If you do not agree with our Acceptable Use Policy, you must discontinue use of the Service. The Acceptable Use Policy is hereby incorporated by reference.",Yz="7. Subscriptions; payments; and cancellations.",Wz="(a) Subscriptions. By registering for an Account, you obtain access to the Service (a 'Subscription'). Each Subscription and the rights and privileges provided therein is personal and non-transferable. Paid Subscriptions ('Premium') may include premium and/or additional features and services not available to free Subscriptions. Talent2show reserves the right to change prices for paid Subscriptions at any time, and does not provide price protection or refunds in the event of promotions or price decreases.",Gz="(b) Payments. If you purchase any services that we offer for a fee, either on a one-time or on a Subscription basis, you agree and consent to Talent2Show's use of third-party payment providers for billing and processing online payments, and you agree to pay the applicable fees for the Premium Subscription (including, without limitation, periodic fees for monthly or annual Premium Subscriptions) as they become due, plus all related taxes, and to reimburse us for all collection costs and interest for any overdue amounts. Your obligation to pay fees continues through the end of the Subscription Term (defined in Section 7(c) below).",Xz="If you do not pay on time or if Talent2Show cannot charge your payment method for any reason, Talent2Show reserves the right to either suspend or terminate your access to the Service and Account and terminate these Terms. You are expressly agreeing that Talent2Show is permitted to bill you for any applicable fees, any applicable tax and any other charges you may incur in connection with your use of the Service and the fees will be billed to the payment method designated on your registration with the Service and, if applicable, thereafter at regular intervals for the remainder of your Subscription Term. By providing a payment method, You expressly authorize Talent2Show to charge said payment method at regular intervals subject to Your particular Subscription. If you have a balance due on any Account, you agree that Talent2Show may charge such unpaid fees to your payment method or otherwise bill you for such unpaid fees.",Qz="(c) AUTOMATIC RENEWAL TERMS: To facilitate continuity of the Service to you, each paid Subscription contains automatic renewal terms. Talent2Show will automatically renew your paid Subscription as per the Subscription period of your choosing (each a 'Subscription Term'), on the anniversary of that date that Talent2Show first charges your Account for the first Subscription fee, and, as authorized by you during the Subscription sign-up process, Talent2Show will charge your Account with the applicable Subscription fee and any sales or similar taxes that may be imposed on your Subscription fee payment (unless you cancel prior to the anniversary date). Each Subscription renewal period is for the same Subscription Term as the prior one, unless otherwise agreed between you and Talent2Show. Subject to Section 7(d) below, YOU MAY CANCEL YOUR SUBSCRIPTION AT ANY TIME, PROVIDED THAT ANY SUBSCRIPTION FEES CHARGED PRIOR TO THE EFFECTIVE DATE OF CANCELLATION WILL NOT BE REFUNDED, IN WHOLE OR IN PART. If you cancel your Subscription, your access to and use of the service will be shut off once your then current pre-paid Subscription Term expires.",Jz="Talent2Show reserves the right to modify pricing at any time (but not the price in effect for your then-current Subscription Term), upon advance notice to you. If you have not cancelled your Subscription or turned off the auto-renew function within the specified time after receiving notice of a price change, your Subscription will auto-renew at the price indicated in your notice.",Kz="(d) CANCELLATION TERMS: Upon first signing up for a Subscription to the Service, you shall have thirty (30) calendar days to cancel for a full refund. IF YOU CANCEL YOUR ACCOUNT AT ANY TIME AFTER THE INITIAL THIRTY (30) DAYS, YOU WILL NOT RECEIVE ANY REFUND. You may cancel your Subscription at any time, and such cancellation shall become effective upon expiration of your then-current Subscription Term. You agree and understand that you will be charged Subscription fees until the expiration of your then-current Subscription Term and Subscription fees will not be refunded, in whole or in part, subject to applicable law. You will not be eligible for a pro-rated refund of any portion of the Subscription fees paid for any unused days of the then-current Subscription Term. If you have any problems or concerns with your cancellation please contact us at support@Talent2Show.com for assistance. Information regarding cancelling your Premium Services can be found",Zz="Talent2Show's refund policy is explained",eD="Here",tD="8. User content",oD="You are responsible for the information, opinions, messages, comments, photos, videos, graphics, sounds and other content or material that you submit, upload, post or otherwise make available ('Make Available') on or through the Service (each such submission 'User Content'). You may not Make Available on this Service any material protected by copyright, trademark, or any other proprietary right without the express permission of the owner of such copyright, trademark or other proprietary right owned by a third-party, and the burden of determining whether any such right protects any material is on you. You shall be solely liable for any damage resulting from any infringement of copyrights, trademarks, proprietary rights, violation of contract, privacy or publicity rights or any other harm resulting from any User Content that you make or submit. As between you and us, you own your User Content and you have full responsibility for each User Content you make or submit, including its legality, reliability and appropriateness.",sD="You also authorize others to use the User Content that you publicly share or Make Available through the Service.",iD="You may delete, or request deletion of your User Content at any time, unless you have shared such User Content with others and they have not deleted it, or it was copied or stored by other Users. Any User Content you submit is at your own risk of loss, and if shared publicly, non-confidential.",rD="Talent2Show agrees to use any personally identifiable information contained in any of your User Content in accordance with Talent2Show's",aD="Privacy Policy",nD="to the extent applicable. Additionally, please note that certain information, statements, data, and content (such as photographs) which you may submit to Talent2Show, or groups you choose to join might, or are likely to, reveal your gender, ethnic origin, nationality, age, and/or other personal information about you. You acknowledge that your submission of any User Content is voluntary on your part.",lD="We may modify or adapt your User Content in order to transmit, display or distribute them over computer networks and in various media and/or make changes to the User Content as necessary to conform and adapt them to any requirements or limitations of any networks, devices, services or media.",cD="When you provide User Content you agree that such User Content shall not be in violation of the Acceptable Use Policy. Those prohibitions do not require Talent2Show to monitor, police or remove any User Content or other information submitted by you or any other user. Notwithstanding the foregoing, Talent2Show reserves the right to remove any User Content from its Service at any time and for any or no cause. You agree to pay for all royalties, fees, damages and any other monies owing any person by reason of any User Content posted by you to or through this Service.",dD="If you use any 'rating' feature of the Service to rate an Athlete or another User, as a applicable, and/or if you send or transmit any communications, comments, questions, suggestions, or related materials to Talent2Show, whether by letter, email, telephone, or otherwise (collectively, 'Feedback'), suggesting or recommending changes to the Service, including, without limitation, new features or functionality relating thereto, all such Feedback is, and will be treated as, non-confidential and non-proprietary. You hereby assign all right, title, and interest in, and Talent2Show is free to use, without any attribution or compensation to you, any ratings submitted within the Service, and any ideas, know-how, concepts, techniques, or other intellectual property and proprietary rights contained in the Feedback, whether or not patentable, for any purpose whatsoever, including but not limited to, developing, manufacturing, having manufactured, licensing, marketing, and selling, directly or indirectly, products and services using such Feedback. You understand and agree that Talent2Show may use any of this Feedback in aggregated or non-aggregated form, however Talent2Show is not obligated to use, display, reproduce, or distribute any such ratings, ideas, know-how, concepts, or techniques contained in the Feedback, and you have no right to compel such use, display, reproduction, or distribution.",pD="9. Forum and messaging",uD="Talent2Show may offer various forums where you can post your observations and comments on designated topics. Talent2Show also enables sharing of information by allowing Users to post updates, including links to news articles and other information to their profile and other parts of the Service, such as Talent2Show's School or Team Pages. By offering this feature, Talent2Show is merely acting as an intermediary and is not responsible and shall not be liable for such communications. Coaches may be allowed to create School or Team Pages for free, however, Talent2Show may close or transfer Talent2Show School or Team Pages, or remove content from them if the content violates these Terms or a third party's intellectual property rights. Please note that ideas you post and information you share may be seen and used by other Users, and Talent2Show cannot guarantee that other Users will not use the ideas and information that you share on the Service. Therefore, if you have an idea or information that you would like to keep confidential and/or don't want others to use, or that is subject to third party rights that may be infringed by your sharing it, do not post it on the public forums of the Service. Please refer to Section 11 below and our Copyright Policy for more information regarding how we treat infringing content.",mD="Talent2show IS NOT RESPONSIBLE FOR A USER'S MISUSE OR MISAPPROPRIATION OF ANY CONTENT OR INFORMATION POSTED IN ANY Talent2Show COMMUNITY FORUMS.",_D="10 .Talent2show intellectual property ownership",hD="The Service and all proprietary and intellectual property rights embodied and practiced therein, including the look-and-feel of the Site, are and shall remain Talent2Show's property (or the property of Talent2Show's licensors). Neither these Terms nor your use of the Service convey or grant to you any rights: (i) in or related to the Service except for the limited license granted above; or (ii) to use or reference in any manner Talent2Show's company names, logos, product and service names, trademarks or services marks or those of Talent2Show's licensors. There are no licenses by implication. If you breach any of these Terms, the above license will terminate automatically and you must stop using the Service and immediately destroy any materials downloaded or printed from the Service.",gD="11. Intellectual property infringement and notifications.",xD="Talent2Show does not permit copyright infringing activities and infringement of intellectual property rights on the Service, and Talent2Show will remove User Content if properly notified that such User Content infringes on another's intellectual property rights (please refer to our",yD="Copyright Policy",fD="Talent2Show reserves the right to remove User Content without prior notice.",bD="12. Term and termination",vD="The Terms commence on the date when you start using the Service and remain in full force and effect while you use the Service, unless terminated earlier in accordance with the Terms. If you want to terminate the Service, you may do so by (a) notifying Talent2Show at any time; (b) closing your Account; and/or (c) if you are Visitor, stop visiting the Site. We reserve the right to terminate or suspend your account or access to the Service at any time and for any reason. It is within our sole discretion and determination to terminate your Account for what we deem to be a violation or breach of these Terms. In the event that we terminate or suspend your Account, you will have no further access to your Account or anything associated with it. Termination of the Service includes (i) automatic termination of all licenses and you must immediately destroy any downloaded or printed materials (including software); and (ii) deletion of your password and related information, files and content associated with or inside your Account (or any part thereof), including User Content, except to the extent of any surviving licenses or applicable record retention requirements. Talent2Show will not have any liability whatsoever to you for any suspension or termination, including for deletion of User Content. All provisions of the Terms, which by their nature should survive, shall survive termination of the Service, including without limitation, ownership provisions, warranty disclaimers, and limitation of liability.",wD="You may close your Account by using the feature provided in the Service or, in the alternative, by emailing us at support@Talent2Show.com. We will proceed to close your Account and send you an email confirmation.",jD="13. Links to third-party sites.",$D="The Service may be linked to other websites that are not Talent2Show properties (collectively, 'Third-Party Sites'). You acknowledge and agree that the Third-Party Sites may have different privacy policies and terms and conditions and/or user guides and business practices than Talent2Show, and you further acknowledge and agree that your use of such Third-Party Sites is governed by the respective Third-Party Site privacy policy and terms and conditions and/or user guides. You hereby agree to comply with any and all terms and conditions, users guides and privacy policies of any of Third-Party Sites. Talent2Show does not verify, make any representations or take responsibility for any Third-Party Site, including, without limitation, the truthfulness, accuracy, quality or completeness of the content, services, links displayed and/or any other activities conducted on or through such Third-Party Sites. YOU AGREE THAT Talent2Show WILL NOT, UNDER ANY CIRCUMSTANCES, BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY GOODS, SERVICES, INFORMATION, RESOURCES AND/OR CONTENT AVAILABLE ON OR THROUGH ANY THIRD-PARTY SITES AND/OR THIRD-PARTY DEALINGS OR COMMUNICATIONS, OR FOR ANY HARM RELATED THERETO, OR FOR ANY DAMAGES OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH YOUR USE OR RELIANCE ON THE CONTENT OR BUSINESS PRACTICES OF ANY THIRD-PARTY. Any reference on the Service to any product, service, publication, institution, organization of any third-party entity or individual does not constitute or imply Talent2Show's endorsement or recommendation.",kD="14. disclaimer of warranties.",CD="(a) Generally. You use the Service at your own risk. THE SERVICE IS PROVIDED ON AN 'AS IS' AND 'AS AVAILABLE' BASIS, WITHOUT WARRANTIES OF ANY KIND, AND TO THE FULLEST EXTENT PERMITTED BY LAW, Talent2Show (ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, ASSOCIATES, PARTNERS, LICENSORS AND SUPPLIERS) DISCLAIM ALL WARRANTIES EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, SATISFACTORY QUALITY, AND THOSE ARISING FROM COURSE OF DEALING OR USAGE OF TRADE. Talent2Show DOES NOT WARRANT THAT YOU WILL BE ABLE TO ACCESS OR USE THE SERVICE AT THE TIMES OR LOCATIONS OF YOUR CHOOSING; THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE; THAT DEFECTS WILL BE CORRECTED; OR THAT THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.",SD="(b) Disclaimer of Other Users. YOU ARE SOLELY RESPONSIBLE FOR ALL OF YOUR COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS OF THE Talent2Show SERVICE. YOU UNDERSTAND THAT Talent2Show DOES NOT MAKE ANY ATTEMPT TO VERIFY THE STATEMENTS OF USERS OF THE SERVICE.",TD="15. NCAA regulations.",AD="XXXXXX",PD="16. limitation of liability.",ED="NOTHING IN THESE TERMS SHALL AFFECT YOUR LEGAL RIGHTS AS A CONSUMER OR EXCLUDE OR LIMIT ANY LIABILITY, WHICH CANNOT BE LEGALLY EXCLUDED, OR LIMITED.",zD="Talent2Show SHALL NOT BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, REMOTE OR OTHER SIMILAR DAMAGES, INCLUDING, BUT NOT LIMITED TO, LOSS OF REVENUES, LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION OR OTHER INTANGIBLE LOSSES (HOWEVER SUCH LOSSES ARE QUALIFIED), ARISING OUT OF OR RELATING IN ANY WAY TO THESE TERMS OR THE SERVICE ITSELF, WHETHER BASED ON CONTRACT, TORT OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT Talent2Show HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES",DD="SUBJECT TO THE EXCLUSIONS EXPRESSLY SET FORTH IN THIS SECTION, IN ALL EVENTS, Talent2Show SHALL NOT BE LIABLE TO YOU FOR MORE THAN THE AMOUNT YOU HAVE PAID TO Talent2Show IN ACCORDANCE WITH THESE TERMS IN THE SIX (6) MONTHS IMMEDIATELY PRECEDING THE DATE ON WHICH YOU FIRST ASSERT A CLAIM. YOU ACKNOWLEDGE AND AGREE THAT IF YOU HAVE NOT PAID ANYTHING TO Talent2Show DURING SUCH TIME PERIOD, YOUR SOLE REMEDY (AND FIELDLEVEL'S EXCLUSIVE LIABILITY) FOR ANY DISPUTE WITH Talent2showIS TO STOP USING THE SERVICE AND TO CANCEL YOUR ACCOUNT.",qD="THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN Talent2Show AND YOU. To the extent that Talent2Show may not, as a matter of applicable law, disclaim any warranty or limit its liability as set forth in these Terms, the scope of such warranty, and the extent of Talent2Show's liability, shall be the minimum permitted under such applicable law.",ID="17. indemnity.",RD="You agree to indemnify and hold Talent2Show, its parents, subsidiaries, affiliates, officers, employees, agents, partners, and licensors (collectively, the ‘Talent2ShowParties’) harmless from any losses, costs, liabilities and expenses (including reasonable attorneys’ fees) relating to or arising out of: (a) Your User Content; (b) your use of, or inability to use, the Service; © your violation of the Terms; (d) your violation of any rights of another party, including any Users; or (e) your violation of any applicable laws, rules or regulations. Talent2Show reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Talent2Show in asserting any available defenses. You agree that the provisions in this section will survive any termination of your Account, the Terms or your access to the Service.",OD="18. interactions between users.",ND="You are solely responsible for your interactions with other Users of the Service and any other parties with whom you interact through the Service. Talent2show may limit the number of connections you may have to other Users and may, in certain circumstances, prohibit you from contacting other Users through use of the Service or otherwise limit your use of the Service. Talent2show reserves the right, but has no obligation, to monitor or become involved in any way with these disputes. You will fully cooperate with Talent2showto investigate any suspected unlawful, fraudulent or improper activity, including, but not limited to, granting Talent2show access to any password-protected portions of your Account. Talent2show reserves the right to restrict, suspend, or close your account if Talent2show determines, in our sole discretion, that doing so is necessary or in our best interests.",MD="If you have a dispute with one or more Users, you release Talent2show (and our officers, directors, agents, subsidiaries, joint ventures and employees) from claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes.",LD="If you are a California resident, you waive California Civil Code § 1542, which says: A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR.",FD="19. Local Laws",VD="Talent2showcontrols and operates the Service from its headquarters in the United States of America and it may not be appropriate or available for use in other locations outside of the United States of America. If you use the Service outside the United States of America, you are responsible for following applicable local laws.",UD="20. special provisions for mobile applications.",HD="(a) App Stores. You acknowledge and agree that the availability of the Mobile App and the Service is dependent on the third party from whom you received the Mobile App license, e.g., the Apple App Store or Google Play (‘App Store’). You acknowledge that the Terms are between you and Talent2Show and not with the App Store. Talent2Show, not the App Store, is solely responsible for the Service, including the Mobile App, the content thereof, maintenance, and addressing any claims relating thereto (e.g., product liability, legal compliance or intellectual property infringement). In order to use the Mobile App, you must have access to a wireless network, and you agree to pay all fees associated with such access. You also agree to pay all fees (if any) charged by the App Store in connection with Service, including the Mobile App. You agree to comply with, and your license to use the Mobile App is conditioned upon your compliance with, all applicable third-party terms of agreement (e.g., the App Store’s terms and policies) when using Service, including the Mobile App. You acknowledge that the App Store (and its subsidiaries) are third-party beneficiaries of the Terms and will have the right to enforce them.",BD="(b) Additional License Terms for use of the Service in conjunction with the Apple App Store. With respect to any Mobile App accessed through or downloaded from the Apple App Store (an ‘App Store Sourced Application’), you will only use the App Store Sourced Application (i) on an Apple-branded products that runs the iOS (Apple’s proprietary operating system), and (ii) as permitted by the ‘Usage Rules’ set forth in the",YD="Apple Terms of Service.",WD="The following applies to any App Store Sourced Application accessed through or downloaded from the Apple App Store:",GD="You acknowledge and agree that (i) the Terms are concluded between you and Talent2Show only, and not Apple, and (ii) Talent2Show, not Apple, is solely responsible for the App Store Sourced Application and content thereof. Your use of the App Store Sourced Application must comply with the App Store Terms of Service. You acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App Store Sourced Application. In the event of any failure of the App Store Sourced Application to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price for the App Store Sourced Application to you and to the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the App Store Sourced Application. As between Talent2Show and Apple, any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be the sole responsibility of Talent2Show. You and Talent2Show acknowledge that, as between Talent2Show and Apple, Apple is not responsible for addressing any claims you have or any claims of any third party relating to the App Store Sourced Application or your possession and use of the App Store Sourced Application, including, but not limited to: (i) product liability claims; (ii) any claim that the App Store Sourced Application fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation. You and Talent2Show acknowledge that, in the event of any third-party claim that the App Store Sourced Application or your possession and use of that App Store Sourced Application infringes that third party’s intellectual property rights, as between Talent2Show and Apple, Talent2Show, not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim to the extent required by the Terms. You and Talent2Show acknowledge and agree that Apple, and Apple’s subsidiaries, are third-party beneficiaries of the Terms as related to your license of the App Store Sourced Application, and that, upon your acceptance of the terms and conditions of the Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce the Terms as related to your license of the App Store Sourced Application against you as a third-party beneficiary thereof. Without limiting any other terms of the Terms, you must comply with all applicable third-party terms of agreement when using the App Store Sourced Application.",XD="(c)  Additional License Terms for use of the Service in conjunction with the Android App Store. The following additional terms and conditions apply with respect to any Mobile App that Talent2Show provides to you designed for use on an Android-powered mobile device (an ‘Android App’):",QD="You acknowledge that these Terms are between you and Talent2Show only, and not with Google, Inc. (‘Google’). Your use of Talent2Show’s Android App must comply with Google’s then-current",JD="Google Play Terms of Service.",KD="Google is only a provider of the Android App market where you obtained the Android App. Talent2Show, and not Google, are solely responsible for Talent2Show’s Android App and the services and content available thereon. Google has no obligation or liability to you with respect to Talent2Show’s Android App or these Terms. You acknowledge and agree that Google is a third-party beneficiary to the Terms as they relate to Talent2Show’s Android App.",ZD="(d) Geo-Location Terms The Service may include and/or make use of certain functionality and services provided by third-parties that allow Talent2showto include maps, geocoding, places and other content as part of the services (the 'Geo-Location Services'). The Geo-Location Services may be provided by Google Inc., in which case your use of the Geo-Location Services will be subject to Google's then current",e3="Terms of Use for Google Maps/Google Earth",t3="By using Google's Geo-Location Services, you are agreeing to be bound by Google's Terms of Use and the current",o3="Google privacy policy.",s3="21. dispute resolution and arbitration; class action waiver.",i3="Please read this carefully if you are a resident of the United States of America. It affects your rights.",r3="(a) Applicable Law. These Terms will be subject to and construed in accordance with the laws of the State of California, United States of America, excluding its rules regarding conflicts of law. You agree that any claim or dispute you may have against Talent2Show must be resolved exclusively by a state or federal court located in the State of California, except as otherwise agreed by the parties or as described in the Arbitration subsection below. You agree to submit to the personal jurisdiction of the courts located in San Diego County, California for the purpose of litigating all such claims or disputes.",a3="(b) Dispute Resolution. Before either party may seek arbitration as provided below, the party must first send to the other party a written notice of dispute ('Notice') describing the nature and basis of the claim or dispute, and the requested relief. After the Notice is received, you and Talent2showmay attempt to resolve the claim or dispute informally. If you and Talent2showdo not resolve the claim or dispute within thirty (30) days after the Notice is received, either party may begin an arbitration proceeding as provided below.",n3="(c) Arbitration You agree that Talent2Show may elect to resolve the dispute in a cost-effective manner through binding non-appearance-based arbitration. In the event Talent2Show elects arbitration, you hereby agree to move any claims to the exclusive jurisdiction of an arbitration procedure, which shall be initiated through the American Arbitration Association or another established alternative dispute resolution provider (collectively, ‘ADR’) chosen by Talent2Show. The ADR provider and the parties must comply with the following rules: (i) the arbitration shall be conducted by telephone, online and/or be solely based on written submissions, the specific manner shall be chosen by the party initiating the arbitration; (ii) the arbitration shall not involve any personal appearance by the parties or witnesses unless otherwise mutually agreed by the parties, in which case the location of the arbitration shall be San Diego County, California, and (iii) the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Arbitration expressly excludes claims for injunctive or other equitable relief.",l3="(d) Waiver of Jury Trial. YOU HEREBY WAIVE YOUR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY. In the event any litigation should arise between you and Talent2Show in any state or federal court in a suit to vacate or enforce an arbitration award or otherwise, YOU WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be resolved by a judge.",c3="(e) Waiver of Class or Consolidated Actions. ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THESE TERMS MUST BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS BASIS, AND CLAIMS OF MORE THAN ONE USER CANNOT BE ARBITRATED OR LITIGATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER USER.",d3="22. electronic communications.",p3="The communications between you and Talent2Show use electronic means, whether you visit the Talent2Show Site, send Talent2Show e-mails, or use the Service or whether Talent2Show posts notices on the Site or communicates with you via e-mail. For contractual purposes, you (1) consent to receive communications from Talent2Show in an electronic form; and (2) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Talent2Show provides to you electronically satisfy any legal requirement that such communications would satisfy if it were to be in writing. The foregoing does not affect your statutory rights. Where Talent2Show requires that you provide an e-mail address; you are responsible for providing Talent2Show with your most current e-mail address. In the event that the last e-mail address you provided to Talent2Show is not valid, or for any reason is not capable of delivering to you any notices required permitted by the Terms, Talent2Show’s dispatch of the e-mail containing such notice will nonetheless constitute effective notice.",u3="23. consumer notice.",m3="Under California Civil Code Section 1789.3, California users are entitled to the following consumer rights notice: The Service is provided by Talent2Show. If you have a question or complaint regarding the Service, please contact Talent2Show’s Customer Service at support@Talent2Show.com, Attention: Customer Service. California residents may reach the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by post at 1625 North Market Blvd., Sacramento, CA 95834 or by telephone at (916) 445-1254 or (800) 952-5210 or Hearing Impaired at TDD (800) 326-2297 or TDD (916) 322-1700.",_3="24. General.",h3="These Terms together with our",g3="any separate Contract we may have executed directly with you, and any Additional Terms that we may make available from time to time through our internet properties, constitute the entire agreement between you and Talent2Show regarding your use of our Service and supersede and replace any prior written or oral agreements regarding the foregoing. Our failure to exercise or enforce any right or provision in these Terms shall not operate as a waiver of such right or provision. If any provision of the Terms is found to be unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from the Terms and shall not affect the validity and enforceability of any remaining provisions. Neither the rights nor obligations arising under these Terms are assignable by you. Any such attempted assignment or transfer shall be void and without effect. We may assign these Terms without restriction.",x3="Privacy Policy",y3="Acceptable Use Policy",f3="Copyright Policy",b3="25. Contact us.",v3="If you have any questions about these Terms or otherwise need to contact Talent2Show for any reason, you can reach us at Talent2Show, 1700 Aviara Parkway #130994, Carlsbad, CA 92013, USA, with a copy to support@Talent2Show.com or call us at +1 (888) 908-7124.",w3="© 2020 Talent2show. All rights reserved.",j3="Talent2Show, Inc. Privacy Policy",$3="Last Updated: September 1, 2024",k3="Talent2Show, Inc.(‘Talent2Show,’ ‘we,’ ‘us,’ or ‘our’) is committed to protecting your privacy. In this Privacy Policy (‘Privacy Policy’), we describe how we collect, use, and disclose information that we obtain about visitors to our website www.Talent2Show.com (the ‘Site’), and about users of our services available through our mobile Application (the ‘App’) and our Site (collectively, the ‘Services’).",C3="By visiting the Site, using or downloading the App, or using any of our Services, you agree to the terms of this Privacy Policy as they may be amended from time to time. Your use of our Site or Services, and any dispute over privacy, is subject to this Privacy Policy and our Terms of Use, including its applicable limitations on damages and the resolution of disputes. The Talent2Show Terms of Use are incorporated by reference into this Privacy Policy.",S3="Because the Services may change and this Privacy Policy may change accordingly, please check back occasionally for updates.",T3="1. The information we collect about you",A3="The information Talent2Show collects from you depends on how you use our Services. We collect information about you in a number of ways, including when you browse the Services, create an account, create or share content, and message or communicate with others:",P3="When You Use the Services",E3="To create an account as a coach or recruiter, we need to collect information from you, which may include your name, profile picture, hometown (i.e., city, state/province, postal code, and country), email address, phone number, coaching background information (i.e., competition level, sport, school/team name, title, start year, and coaching/employment history).",z3="When you Message or Communicate with Others through the Services.",D3="When you initiate and respond to messages with other users through the messaging function.",q3="When you talk to us through the chat function.",I3="From Other Sources.",R3="We may receive information from other sources, such as:",O3="If you are an athlete, we may receive information from your coach, parent or guardian. If your coach invites you to create an account, we receive your name and email address from your coach to send you an invitation. Your parent, guardian or coach can add information to your profile.",N3="If you are a parent or guardian, we receive information from your child through their account. If your child creates an account, we receive your name and email address to verify your child's information and list your contact information on your child's account.",M3="Please note, if you disclose any personal information relating to other people to us or to our service providers in connection with the Services, you represent that you have the authority to do so and permit us to use this information in accordance with this Privacy Policy.",L3="To the extent permitted by applicable law, we may combine this information.",F3="Technical Data.",V3="We use cookies, web beacons, local storage objects, pixels and other technologies that operate in the App and on the Site. These technologies may collect your computer’s Internet Protocol (IP) address, domain name, internet browser and operating system, the time, date, and length of time you visit our Site or use our Services, mobile device ID, the web pages you view on our Site or App, including the time spent on each page and clicks on each page, referring URL or the webpage that led you to our Site, and other interactions with our Services. You can adjust the permissions within your browser or device operating system. However, if you set your browser to disable certain technologies, such as cookies, some features of the Site may not function properly. Please see the section ‘Our Use of Cookies and Other Tracking Mechanisms’ below for more information.",U3="2. how we use your information",H3="We use your information, including your personal information, for the following purposes:",B3="Providing Support and Services",Y3="Including to provide our Services; to communicate with you about your access to and use of our Services; to respond to your inquiries; to provide troubleshooting, process your payments and provide technical support; and for other user service and support purposes;",W3="Analyzing and Improving Services and Operations",G3="Including to better understand how users access and use our Services, to evaluate and improve our Services and business operations, and to develop new Services; to conduct surveys and other evaluations (such as user satisfaction surveys); and for other research and analytical purposes;",X3="Personalizing Content and Experiences",Q3="Including to tailor content we send or display on our Site and App, and in our Services; to offer location customization and personalized help and instructions; and to otherwise personalize your experiences;",J3="Advertising, Marketing and Promotional Purposes",K3="Including to reach you with more relevant ads and to evaluate, measure and improve the effectiveness of our ad campaigns; to send you newsletters, offers or other information we think may interest you; to contact you about our Services or information we think may interest you; and to administer promotions;",Z3="Securing and Protecting Our Business",eq="Including to protect and secure our business operations, assets, Services, network and information and technology resources; to investigate, prevent, detect and take action regarding fraud, unauthorized access, situations involving potential threats to the rights or safety of any person or third party, or other unauthorized activities or misconduct;",tq="Defending our Legal Rights",oq="Including to manage and respond to actual and potential legal disputes and claims and to otherwise establish, defend or protect our rights or interests, including in the context of anticipated or actual litigation with third parties;",sq="Auditing, Reporting, Corporate Governance, and Internal Operations",iq="Including relating to financial, tax and accounting audits; audits and assessments of our operations, privacy, security and financial controls, risk, and compliance with legal obligations; our general business, accounting, record keeping and legal functions; and related to any actual or contemplated merger, acquisition, asset sale or transfer, financing, bankruptcy or restructuring of all or part of our business; and",rq="Complying with Legal Obligations.",aq="Including to comply with the law, our legal obligations and legal process, such warrants, subpoenas, court orders, and regulatory or law enforcement requests.",nq="3. Publicly-available information and controlling your account visibility settings",lq="Talent2Show provides all users with detailed privacy settings so you can control whether information within your profile is public or private. Information including your name, positions, recruiting class, and teams will be defaulted public. Users have the option to set the rest of your profile, or individual profile elements, to ‘Public’ or ‘Private’ within your Account Visibility Settings. Public profiles are available to other users of Talent2Show’s Services and searchable on search engines (e.g., Google). Users who enrolled prior to July 6, 2020 have the option to set their profile to Public (it is not defaulted to public), while Users who have enrolled on or after July 6, 2020 are given a default setting of Public and can set their profile to private if they so choose. Please check your Account Visibility Settings and adjust them to suit your preference, as needed.",cq="4. How we share your information",dq="We may share your information, including personal information, as follows:",pq="With our service providers, to facilitate the services they provide to us",uq="These may include providers of services such a customer service support, payment processing, email delivery, information technology and related infrastructure provision, website hosting, and other services. We also disclose information in the following circumstances:",mq="Business Transfers",_q="If (i) we or our affiliates are or may be acquired by, merged with, or invested in by another company, or (ii) if any of our assets are or may be transferred to another company, whether as part of a bankruptcy or insolvency proceeding or otherwise, we may transfer the information we have collected from you to the other company. As part of the business transfer process, we may share certain of your personal information with lenders, auditors, and third party advisors, including attorneys and consultants.",hq="In Response to Legal Process",gq="We disclose your information to comply with the law, a judicial proceeding, court order, or other legal process, such as in response to a court order or a subpoena.",xq="To Protect Us and Others",yq="We disclose your information when we believe it is appropriate to do so to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the safety of any person, violations of our Terms of Service or this Policy, or as evidence in litigation in which we are involved.",fq="Aggregate and De-Identified Information",bq="We may share aggregate, anonymized, or de-identified information about users with other entities for marketing, advertising, research or similar purposes.",vq="5. Our use of cookies and other tracking mechanisms",wq="We and our third party service providers use cookies, web beacons, local storage objects, pixels, session replay/screen capture, and other similar technologies to collect Technical Data as described in Section 1 above. We may combine this information with other personal information we collect from you (and our third party service providers may do so on our behalf).",jq="Disabling Cookies",$q="Most web browsers automatically accept cookies, but if you prefer, you can edit your browser options to block them in the future. The Help portion of the toolbar on most browsers will tell you how to prevent your computer from accepting new cookies, how to have the browser notify you when you receive a new cookie, or how to disable cookies altogether. Visitors to our Site and Services who disable cookies will be able to browse certain areas of the Site, but some features may not function.",kq="Third Party Analytics.",Cq="We use automated devices and applications, such as Google Analytics, to evaluate usage of our Site, and to the extent permitted, our App. We also may use other analytic means to evaluate our Services. We use these tools to help us improve our Services performance and user experiences. These entities may use cookies and other tracking technologies, such as web beacons or local storage objects (LSOs), to perform their services. To learn more about Google's privacy practices, please review the Google Privacy Policy at",Sq="https://www.google.com/policies/privacy/",Tq="You can also download the Google Analytics Opt-out Browser Add-on to prevent their data from being used by Google Analytics at",Aq="https://tools.google.com/dlpage/gaoptout.",Pq="Do-Not-Track",Eq="Currently, our systems do not recognize browser 'do-not-track' requests. You may, however, disable certain tracking as discussed in this section (e.g., by disabling cookies); you also may opt-out of targeted advertising by following the instructions in the Third Party Ad Network section below.",zq="Third-Party Ad Networks.",Dq="dvertisers may also use technologies like cookies and web beacons to enable them to recognize your computer each time they send you an advertisement even when you are visiting another site. As a result, the advertiser would have the ability to deliver targeted advertisements that they believe would be of most interest to you. We do not have access to or control of the cookies that may be placed on your computer by third-party advertisers.",qq="Users may opt out of many third-party ad networks. For example, you may go to the Digital Advertising Alliance ('DAA')",Iq="Consumer Choice Page",Rq="for information about opting out of interest-based advertising and their choices regarding having information used by",Oq=" DAA companies.",Nq="you may also go to the Network Advertising Initiative ('NAI')",Mq="Consumer Opt-Out Page",Lq="for information about opting out of interest-based advertising and their choices regarding having information used by",Fq="NAI members.",Vq="7. Security of your information",Uq="We have implemented reasonable precautions to protect the information we collect from loss, misuse, and unauthorized access, disclosure, alteration, and destruction. Please be aware that despite our best efforts, no data security measures can guarantee security.",Hq="You should take steps to protect against unauthorized access to your password, phone, and computer by, among other things, signing off after using a shared computer, choosing a robust password that nobody else knows or can easily guess, and keeping your log-in and password private. We are not responsible for any lost, stolen, or compromised passwords or for any activity on your account via unauthorized password activity.",Bq="7. Access to my personal information",Yq="You may modify personal information that you have submitted by logging into your account and updating your profile information. Please note that copies of information that you have updated, modified or deleted may remain viewable, to both users of our Services and the general public, in cached and archived pages of the Site or Application for a period of time.",Wq="8. Your choices",Gq="We may send periodic promotional emails to you. You may opt-out of promotional emails by following the opt-out instructions contained in the email. Please note that it may take up to 10 business days for us to process opt-out requests. If you opt-out of receiving promotional emails, we may still send you emails about your account, the Services, or any other services you have requested or received from us.",Xq="9. Children under 13",Qq="XXXXXXXXXXXXXXXXX",Jq="10. Third party links",Kq="Our Site and Services may contain links to third-party websites. Any access to and use of such linked websites is not governed by this Privacy Policy, but instead is governed by the privacy policies of those third party websites. We are not responsible for the information practices of such third party websites.",Zq="11. Changes to this privacy policy",e5="This Privacy Policy is current as of the effective date set forth above. We reserve the right to change or update this Privacy Policy, or any other of our policies or practices, at any time, and will notify users of this Site by posting such changed or updated Privacy Policy on this page. Any changes or updates will be effective immediately upon posting to this Site. Under certain circumstances, we may also elect to notify you of changes or updates to our Privacy Policy by additional means, such as posting a notice on the front page of this Site or sending you an email.",t5="12. contact us",o5="If you have questions about the privacy aspects of our Services or would like to make a complaint, please contact us via at support@fieldlevel.com, by phone at (888) 908-7124, or by mail at 1700 Aviara Parkway #130994, Carlsbad, CA 92013.",s5="Talent2Show, LLC. Copyright Policy",i5="Last Updated: July 22, 2020",r5="We respect the intellectual property rights of others and encourage You to do the same. Accordingly, We have a policy of removing Submissions that violate intellectual property rights of others, suspending access to the Service (or any portion thereof) to any user who uses the Service in violation of someone's intellectual property rights, and/or terminating in appropriate circumstances the account of any user who uses the Service in violation of someone's intellectual property rights.",a5="Submitting a DMCA infringement notification",n5="Pursuant to the Digital Millennium Copyright Act (‘DMCA’) 17 U.S. Code § 512, we have implemented procedures for receiving written notification of claimed copyright infringement and for processing such claims in accordance with such law. If You believe Your copyright or other intellectual property right is being infringed by a user of the Service, please provide written notice to Our Agent for notice of claims of infringement: Attn: Talent2Show DMCA Agent. By Email: support@Talent2Show.com. By Mail: 1700 Aviara Parkway #130994, Carlsbad, CA 92013, USA.",l5="To be sure the matter is handled immediately, Your written notice must:",c5="Contain Your physical or electronic signature;",d5="Identify the copyrighted work or other intellectual property alleged to have been infringed;",p5="Identify the allegedly infringing material in a sufficiently precise manner to allow Us to locate that material;",u5="Contain adequate information by which We can contact You (including postal address, telephone number, and e-mail address);",m5="Contain a statement that You have a good faith belief that use of the copyrighted material or other intellectual property is not authorized by the owner, the owner's agent or the law;",_5="Contain a statement that the information in the written notice is accurate; and",h5="Contain statement, under penalty of perjury, that You are authorized to act on behalf of the copyright or other intellectual property right owner.",g5="Unless the notice pertains to copyright or other intellectual property infringement, the Agent will be unable to address the listed concern.",x5="Submitting a DMCA Counter-Notification",y5="We will notify You that We have removed or disabled access to copyright-protected material that You provided, if such removal is pursuant to a validly received DMCA take-down notice. In response, You may provide Our Agent with a written counter-notification that includes the following information:",f5="Your physical or electronic signature;",b5="Identification of the material that has been removed or to which access has been disabled, and the location at which the material appeared before it was removed or access to it was disabled;",v5="A statement from You under the penalty of perjury, that You have a good faith belief that the material was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled; and",w5="Your name, physical address and telephone number, and a statement that You consent to the jurisdiction of a court for the judicial district in which Your physical address is located, or if Your physical address is outside of the United States, for any judicial district in which We may be located, and that You will accept service of process from the person who provided notification of allegedly infringing material or an agent of such person.",j5="Termination of Infringers",$5="We reserve the right, in Our sole discretion, to terminate the account or access of any user of the Service who is the subject of repeated DMCA or other infringement notifications.",k5="© 2020 Talent2Show Inc. All rights reserved.",C5="Talent2Show, LLC. Acceptable Use Policy",S5="This acceptable use policy (the ‘Policy’) describes prohibited uses and acceptable practices relating to the use of Talent2Show Inc. and its affiliates (‘Talent2Show’, ‘us’, ‘our’)'s network of internet properties (including websites and mobile applications), products, materials and services (collectively, the ‘Service’) by Talent2Show’s customers and users that have gained access to the Service by visiting and/or through registering Accounts (collectively, ‘You’ or ‘Users’). The Service must be used in a manner that is consistent with the intended purpose of the Service and the terms of the applicable agreement with Talent2Show, including our",T5="Terms of use",A5="(the 'Terms').",P5="The examples described in this Policy are not exhaustive. We may modify this Policy at any time by posting a revised version on the Service. By using the Service, You consent to be bound by the terms of the latest version this Policy.  Terms not defined herein are defined in our",E5="Terms of use.",z5="If you violate the Policy or authorize or help others to do so, we may suspend or terminate your use of the Services and delete your Account.",D5="1. no illegal, harmful, or offensive user content, or use.",q5="You may not use, or encourage, promote, facilitate or instruct others to use, the Service for any illegal, criminal, harmful, fraudulent, infringing or offensive use or enterprise, or to transmit, store, display, distribute or otherwise make available information or content (including User Content) that is illegal, harmful, fraudulent, infringing or offensive. Prohibited activities or content include:",I5="Illegal, Harmful or Fraudulent Activities",R5="Any activities that are illegal, tortious, that violate the rights of others, or that may be harmful to others, our operations or reputation, including disseminating, promoting or facilitating child pornography, offering or disseminating fraudulent goods, services, schemes, or promotions, make-money-fast schemes, ponzi and pyramid schemes, phishing, or pharming.",O5="Infringing Content and/or Use",N5="Content that infringes or misappropriates the intellectual property or proprietary rights of others, including unauthorized disclosures of private information, or taking information directly from FieldLevel and/or our Users, and using it for your own personal or business purposes without permission or proper attribution. You agree NOT to attempt to resell FieldLevel's products and/or access to the Service without our written permission.",M5="Offensive Content",L5="Content that is harmful to minors in any way, defamatory, libelous, obscene, abusive, threatening, discriminatory, harassing, invasive of privacy, false, intentionally misleading, patently offensive, or otherwise objectionable, including content that constitutes child pornography, relates to bestiality, depicts non-consensual sex acts or that promotes racism, bigotry, hatred, religious intolerance, misogyny, or physical harm of any kind against any group, individual or animal.",F5="Harmful Content",V5="Content or other computer technology that may damage, interfere with, surreptitiously intercept, or expropriate any system, program, or data, including viruses, Trojan horses, worms, time bombs, or cancelbots.",U5="False Content",H5="Submitting any content or information that falsely states, impersonates or otherwise misrepresents your identity, including but not limited to misrepresenting your current or previous qualifications, or your affiliations with a person or entity, past or present, or assuming another's identity.",B5="2. No spam, e-mail or other message abuse.",Y5="You will not distribute, publish, send, or facilitate the sending of unsolicited mass e-mail or other messages, promotions, advertising, or solicitations (like ‘SPAM’), including commercial advertising and informational announcements. You will not alter or obscure mail headers or assume a sender’s identity without the sender’s explicit permission. You will not collect replies to messages sent from another internet service provider if those messages violate this Policy or the acceptable use policy of that provider. You will not use ANY of our communication tools (forums, messaging, feeds) to market other businesses or opportunities not related to the Service.",W5="3. No Security Violations.",G5="You may not use the Service to violate the security or integrity of any network, computer or communications system, software application, or network or computing device (each, a ‘System’). Prohibited activities include:",X5="Unauthorized Access",Q5="Accessing or using any System without permission, including attempting to probe, scan, or test the vulnerability of a System or to breach any security or authentication measures used by a System.",J5="Interception",K5="Monitoring of data or traffic on a System without permission.",Z5="Falsification of Origin",eI="Forging TCP-IP packet headers, e-mail headers, or any part of a message describing its origin or route.",tI="4. No Network Abuse.",oI="You may not make network connections to any Users, hosts, or networks unless you have permission to communicate with them. Prohibited activities include:",sI="Monitoring or Crawling",iI="Monitoring or crawling of a System that impairs or disrupts the System being monitored or crawled.",rI="Denial of Service (DoS)",aI="Inundating a target with communications requests so the target either cannot respond to legitimate traffic or responds so slowly that it becomes ineffective.",nI="Intentional Interference",lI="Interfering with the proper functioning of any System, including any deliberate attempt to overload a system by mail bombing, news bombing, broadcast attacks, or flooding techniques.",cI="Operation of Certain Network Services.",dI="Operating network services like open proxies, open mail relays, or open recursive domain name servers.",pI="Avoiding System Restrictions",uI="Using manual or electronic means to avoid any use limitations placed on a System, such as access and storage restrictions.",mI="5. Authorized Use.",_I="The Service is an online service for athletic recruiting that connects athletes and their families with coaches and teams. As such, you agree to (i) comply with this Policy, (ii) comply with all laws and regulations applicable to you, including, without limitation, criminal laws, privacy laws, intellectual property laws, export control laws, tax laws, and regulatory requirements within your field; and (iii) use the Service in a professional manner.",hI="6. Our Monitoring and Enforcement",gI="We reserve the right, but do not assume the obligation, to investigate any violation of this Policy or misuse of the Service. We may:",xI="investigate violations of this Policy or misuse of the Service;",yI="review any User Content, and remove, disable access to, or modify any content or resource (including User Content) that violates this Policy or any other agreement we have with you for use of the Service;",fI="monitor all prohibited actions, investigate, and/or take appropriate action at our sole discretion against you.",bI="If you violate this Policy or any other provision of the",vI="Terms.",wI="or otherwise create liability for us or any other person, including reputational harm, we may (without limitation) and in addition to the above, terminate or suspend your Account, take legal action to enforce our rights, and/or report you to appropriate law enforcement authorities, regulators, or other appropriate third parties. PLEASE BE AWARE THAT WE COOPERATE WITH LAW ENFORCEMENT AND REPORT SUSPICIOUS AND/OR ILLEGAL ACTIVITY.",jI="Our reporting may include disclosing appropriate customer information. We also may cooperate with appropriate law enforcement agencies, regulators, or other appropriate third parties to help with the investigation and prosecution of illegal conduct by providing information related to alleged violations of this Policy.",$I="7. Reporting of Violations of this Policy",kI="If you become aware of any violation of this Policy, you will immediately notify us and provide us with assistance, as requested, to stop or remedy the violation. To report any violation of this Policy, please contact us a",CI="support@talent2show.com.",SI="© 2024 Talent2Show Inc. All rights reserved.",TI="",AI="",PI="",EI="",zI="",DI="",qI="",II="",RI="",OI={"------------------------------------------ Palavras comuns":"------------------------------------------ ",slogan:Fw,username:Vw,login:Uw,remember_login:Hw,logout:Bw,close:Yw,password:Ww,register:Gw,email:Xw,create_account:Qw,reset_password:Jw,select_language:Kw,select_sport:Zw,home:ej,home_page:tj,my_area:oj,close_menu:sj,message:ij,new_message:rj,back:aj,details:nj,favorite:lj,make_favorite:cj,remove_from_favorites:dj,data_not_found:pj,show_more:uj,show_less:mj,previous:_j,next:hj,blocked:gj,close_image:xj,buy:yj,profile_picture:fj,yes:bj,no:vj,fullscreen:wj,remove:jj,report:$j,confirm:kj,copy:Cj,weight:Sj,height:Tj,edit_profile:Aj,settings:Pj,follow:Ej,unfollow:zj,ranking:Dj,photos:qj,videos:Ij,your_profile:Rj,your_email:Oj,online:Nj,in_person:Mj,name:Lj,select:Fj,required:Vj,other:Uj,add:Hj,note:Bj,match:Yj,please_wait:Wj,title:Gj,privacy:Xj,policies:Qj,terms_of_use:Jj,acceptable_use:Kj,about_us:Zj,need_help_question:e$,share:t$,language:o$,copy_url:s$,"------------------------------------------ Mensagens ao usuário":"------------------------------------------ ",no_owner_opportunities:i$,no_opportunities:r$,no_products:a$,no_players:n$,not_logged:l$,image_upload_error:c$,video_upload_error:d$,token_not_found:p$,username_not_found_response:u$,username_not_found:m$,error_response_server:_$,no_response:h$,error_setting_request:g$,delete_image_question:x$,delete_video_question:y$,delete_opportunity_question:f$,text_copied_sucess:b$,text_copy_error:v$,fill_all_fields:w$,verification_email_sended:j$,end_seasson_question:$$,successfully_logged_out:k$,invalid_credentials_check_details:C$,login_error:S$,login_error_try_again:T$,passwords_not_match:A$,server_response:P$,register_error:E$,register_error_try_again:z$,event_not_found:D$,owner_events_not_found:q$,"------------------------------------------ Dashboards + Components":"------------------------------------------ ",dashboard_player:I$,dashboard_club:R$,dashboard_university:O$,dashboard_public:N$,dashboard_staff:M$,dashboard_league:L$,favorite_players:F$,favorite_videos:V$,favorite_opportunities:U$,current_competitions:H$,titles_and_awards:B$,your_messages:Y$,club_history:W$,academic_history:G$,referral_link:X$,level_1:Q$,level_2:J$,level_3:K$,my_squad:Z$,"------------------------------------------ Profile Info":"------------------------------------------ ",modality:e0,birth_date:t0,age:o0,birth:s0,primary_nationality:i0,secondary_nationality:r0,passports:a0,base_payment:n0,transfer_value:l0,main_position:c0,primary_position:d0,secondary_position:p0,tertiary_position:u0,toefl:m0,act:_0,sat:h0,graduation_date:g0,grade_point_average:x0,representative:y0,foundation_date:f0,state:b0,training_center:v0,stadium:w0,coach:j0,profile_type:$0,kg:k0,meters:C0,player:S0,club:T0,club_name:A0,university:P0,universities:E0,staff:z0,agency:D0,fan:q0,fans:I0,performance_analyst:R0,coach_assistant:O0,coordinator:N0,director:M0,business_man:L0,physiologist:F0,physiotherapist:V0,manager:U0,massage_therapist:H0,nutritionist:B0,goalkeeper_trainer:Y0,physical_trainers:W0,tactical_trainers:G0,psychologists:X0,doctor:Q0,doctors:J0,personal_trainer:K0,scout:Z0,exchange_agencies:e1,exchange_agency:t1,serie_a:o1,serie_b:s1,serie_c:i1,serie_d:r1,division_1:a1,division_2:n1,division_3:l1,division_4:c1,division_5:d1,division_6:p1,division_7:u1,division_8:m1,division_9:_1,division_10:h1,division_11:g1,division_12:x1,ncaa_1:y1,ncaa_2:f1,ncaa_3:b1,naia_1:v1,naia_2:w1,nccaa_1:j1,nccaa_2:$1,njcaa_1:k1,njcaa_2:C1,njcaa_3:S1,sub_7:T1,sub_8:A1,sub_9:P1,sub_11:E1,sub_13:z1,sub_15:D1,sub_17:q1,sub_20:I1,adult:R1,goalkeeper:O1,left_back:N1,right_back:M1,center_back:L1,wing_back:F1,defensive_midfielder:V1,central_midfielder:U1,attacking_midfielder:H1,wide_midfielder:B1,second_striker:Y1,left_winger:W1,right_winger:G1,center_forward:X1,striker:Q1,not_specified:J1,R$:K1,$:Z1,"€":"€",right:e2,left:t2,male:o2,female:s2,"n/a":"N/A",active_free:i2,active:r2,injured:a2,injured_free:n2,agents:l2,"------------------------------------------ Videos":"------------------------------------------ ",upload_method:c2,youtube:d2,vimeo:p2,t2s:u2,youtube_video_url:m2,vimeo_video_url:_2,url:h2,"------------------------------------------ Benefits":"------------------------------------------ ",podcast:g2,sports_channels:x2,investments:y2,benefits_club:f2,interchange:b2,crypto_wallet:v2,crowdfunding:w2,lions_platform:j2,education:$2,american_education:k2,telemedicine_usa:C2,solar:S2,"------------------------------------------ Profile Header":"------------------------------------------ ",profile:T2,"my-squad":"Meu plantel",my_opportunities:A2,scouts:P2,social:E2,news:z2,opportunities:D2,clubs:q2,players:I2,favorites:R2,squad:O2,events:N2,contacts:M2,friends:L2,store:F2,"t2s+":"T2S+",my_affiliates:V2,"------------------------------------------ Competitive Categories":"------------------------------------------ ",professional:U2,semi_professional:H2,academic:B2,amateur:Y2,recreational:W2,"------------------------------------------ Store":"------------------------------------------ ",t_shirts:G2,football_boots:X2,store_text:Q2,"------------------------------------------ Home":"------------------------------------------ ",trending_videos:J2,benefits:K2,my_benefits:Z2,partners_supporters:ek,user_benefits:tk,"------------------------------------------ Edit + Create + View Opportunity":"------------------------------------------ ",edit_my_opportunity:ok,which_league:sk,league:ik,leagues:rk,country:ak,schools:nk,which_country_opportunity:lk,position:ck,which_position:dk,which_category:pk,which_disponibility_date:uk,minimum_height:mk,which_minimum_height:_k,minimum_age:hk,which_minimum_age:gk,maximum_age:xk,which_maximum_age:yk,minimum_payment:fk,which_minimum_payment:bk,maximum_payment:vk,which_maximum_payment:wk,which_currency:jk,select_currency:$k,city:kk,which_best_leg:Ck,which_competitive_level:Sk,which_category_you_act:Tk,your_current_weight:Ak,your_current_height:Pk,your_primary_nationality:Ek,your_secondary_nationality:zk,operation_country:Dk,"country_you play_in":"O país em que você joga",your_birth_city:qk,your_birth_state:Ik,have_passports_question:Rk,if_yes_list_the_countries:Ok,your_base_payment:Nk,your_transfer_value:Mk,your_main_position:Lk,your_secondary_position:Fk,your_tertiary_position:Vk,play_in_league_question:Uk,select_your_league:Hk,have_manager_question:Bk,your_sporting_history:Yk,your_academic_history:Wk,titles_and_awards_history:Gk,competition_award:Xk,competition:Qk,competition_award_name:Jk,take_toefl_question:Kk,take_act_question:Zk,take_sat_question:eC,second_grade_graduation_date:tC,gpa:oC,certification_name:sC,certification:iC,certifications:rC,confirm_change:aC,confirm_changes:nC,select_level:lC,knowledge:cC,your_agency_type_question:dC,select_type:pC,representative_club_name:uC,which_club_competitive_level:mC,which_country_club:_C,which_state_club:hC,where_club_train:gC,stadium_name:xC,club_stadium:yC,coach_or_trainer:fC,actual_club_coach:bC,competition_name:vC,nationality:wC,your_nationality:jC,profile_type_question:$C,representative_university_name:kC,which_university_competitive_level:CC,which_country_university:SC,which_state_university:TC,where_university_train:AC,university_stadium:PC,actual_university_coach:EC,representative_league_name:zC,which_league_competitive_level:DC,which_country_league:qC,which_state_league:IC,where_league_train:RC,description:OC,insert_description:NC,requirements:MC,insert_requirements:LC,confirm_edit:FC,publish_opportunity:VC,competitive_category:UC,competitive_level:HC,category:BC,best_leg:YC,avaliability:WC,has_manager:GC,has_manager_question:XC,minimum_transfer_value:QC,maximum_transfer_value:JC,birth_country:KC,passport:ZC,all:eS,create_new_opportunity:tS,opportunity_from:oS,published_in:sS,opportunity:iS,close_opportunity:rS,date:aS,payment:nS,immediate:lS,years:cS,optional:dS,send_message:pS,opportunity_message_sent:uS,select_position:mS,opportunity_player_message_1:_S,opportunity_player_message_2:hS,opportunity_player_message_3:gS,opportunity_player_message_4:xS,"------------------------------------------ Buttons text":"------------------------------------------ ",change_profile_picture_button:yS,change_banner_button:fS,add_video_button:bS,add_photo_button:vS,"------------------------------------------ Report":"------------------------------------------ ",report_reason_question:wS,select_reason:jS,insert_report_details:$S,inappropriate_content:kS,copyright:CS,media_manipulation:SS,poor_quality:TS,received_your_report:AS,thank_you_report:PS,portuguese_br:ES,english:zS,spanish:DS,pt:qS,en:IS,es:RS,fr:OS,football:NS,basketball:MS,volleyball:LS,"------------------------------------------ Login + Register + Passwords":"------------------------------------------ ",forgot_password:FS,forgot_password_question:VS,change_password:US,new_password:HS,insert_your_password:BS,insert_new_password:YS,insert_new_password_again:WS,confirm_new_password:GS,password_changed_successfully:XS,insert_your_email:QS,please_check:JS,have_account_question:KS,return_home:ZS,your_username_on_t2s:eT,your_password:tT,confirm_password:oT,password_confirmation:sT,select_profile_type:iT,player_name_question:rT,club_name_question:aT,university_name_question:nT,agency_name_question:lT,league_name_question:cT,staff_name_question:dT,fan_name_question:pT,which_competitive_category:uT,which_modality:mT,select_modality:_T,which_club_modality:hT,select_category:gT,step_by_step:xT,register_step_1:yT,register_step_2:fT,register_step_3:bT,register_step_4:vT,"------------------------------------------ Benefits pages":"------------------------------------------ ",welcome_t2s_benefits:wT,benefits_text_1:jT,benefits_text_2:$T,benefits_step_1:kT,t2s_benefits:CT,welcome_t2s_events:ST,events_text_1:TT,events_text_2:AT,events_step_1:PT,events_step_2:ET,events_step_3:zT,events_step_4:DT,others_t2s_benefits:qT,welcome_t2s_benefits_club:IT,benefits_club_text_1:RT,benefits_club_text_2:OT,benefits_club_step_1:NT,benefits_club_step_2:MT,benefits_club_step_3:LT,benefits_club_step_4:FT,welcome_t2s_investments:VT,investments_text_1:UT,investments_text_2:HT,investments_step_1:BT,investments_step_2:YT,investments_step_3:WT,investments_step_4:GT,welcome_t2s_english:XT,english_text_1:QT,english_text_2:JT,english_step_1:KT,english_step_2:ZT,english_step_3:eA,english_step_4:tA,welcome_t2s_interchange:oA,interchange_text_1:sA,interchange_text_2:iA,interchange_step_1:rA,interchange_step_2:aA,interchange_step_3:nA,interchange_step_4:lA,welcome_t2s_studies:cA,studies_text_1:dA,studies_text_2:pA,studies_step_1:uA,studies_step_2:mA,studies_step_3:_A,studies_step_4:hA,welcome_t2s_american_studies:gA,american_studies_text_1:xA,american_studies_text_2:yA,american_studies_step_1:fA,american_studies_step_2:bA,american_studies_step_3:vA,american_studies_step_4:wA,welcome_t2s_crowdfunding:jA,crowdfunding_text_1:$A,crowdfunding_text_2:kA,crowfunding_step_1:CA,crowfunding_step_2:SA,crowfunding_step_3:TA,crowfunding_step_4:AA,welcome_t2s_crypto_wallet:PA,crypto_wallet_text_1:EA,crypto_wallet_text_2:zA,crypto_wallet_step_1:DA,crypto_wallet_step_2:qA,crypto_wallet_step_3:IA,crypto_wallet_step_4:RA,welcome_t2s_lions_platform:OA,lions_platform_text_1:NA,lions_platform_text_2:MA,lions_platform_step_1:LA,lions_platform_step_2:FA,lions_platform_step_3:VA,lions_platform_step_4:UA,welcome_t2s_telemedicine_usa:HA,telemedicine_usa_text_1:BA,telemedicine_usa_text_2:YA,telemedicine_usa_step_1:WA,telemedicine_usa_step_2:GA,telemedicine_usa_step_3:XA,telemedicine_usa_step_4:QA,complete_name:JA,owner_house_complete_name:KA,street:ZA,street_name:eP,phone_number:tP,your_phone_number:oP,"------------------------------------------ Auth Elements":"------------------------------------------ ",year_of_achievement:sP,entry:iP,entry_year:rP,exit:aP,exit_year:nP,actual:lP,insert_final_grade:cP,"------------------------------------------ Events":"------------------------------------------ ",organizer:dP,start_date:pP,end_date:uP,hour:mP,platform:_P,close_event:hP,zip_code:gP,adress:xP,participate:yP,camping:fP,clinic:bP,palestra:vP,tour:wP,showcase:jP,exchange:$P,filter_events:kP,event_format:CP,my_events:SP,create_new_event:TP,select_event_title:AP,summary:PP,summary_about_event:EP,who_event_organizer:zP,which_event_format:DP,insert_event_country:qP,insert_event_state:IP,insert_zip_code:RP,insert_rest_adress:OP,what_event_platform:NP,event_start_hour:MP,event_start_date:LP,event_end_date:FP,select_event_banner:VP,insert_more_event_details:UP,"------------------------------------------ Userspage":"------------------------------------------ ",profile_types:HP,generic_step_1_part_1:BP,generic_step_1_part_2:YP,generic_step_1_part_3:WP,generic_step_1_part_4:GP,generic_step_2_part_1:XP,generic_step_2_part_2:QP,generic_step_2_part_3:JP,generic_step_3_part_1:KP,generic_step_3_part_2:ZP,generic_step_3_part_3:eE,player_text:tE,how_it_works:oE,player_step_1_title:sE,player_step_2_title:iE,player_step_3_title:rE,player_step_4_title:aE,player_step_1_part_3:nE,player_step_2_part_3:lE,player_step_3_part_3:cE,player_step_4_part_1:dE,player_step_4_part_2:pE,player_step_4_part_3:uE,player_step_4_part_4:mE,be_part_exclamation:_E,player_text_2:hE,club_text:gE,club_step_1_title:xE,club_step_2_title:yE,club_step_3_title:fE,club_step_4_title:bE,club_step_1_part_3:vE,club_step_2_part_3:wE,club_step_3_part_3:jE,club_step_4_part_1:$E,club_step_4_part_2:kE,club_step_4_part_3:CE,club_step_4_part_4:SE,club_text_2:TE,staff_text:AE,staff_step_1_title:PE,staff_step_2_title:EE,staff_step_3_title:zE,staff_step_4_title:DE,staff_step_1_part_3:qE,staff_step_2_part_3:IE,staff_step_2_part_4:RE,staff_step_3_part_3:OE,staff_step_4_part_1:NE,staff_step_4_part_2:ME,staff_step_4_part_3:LE,staff_step_4_part_4:FE,staff_text_2:VE,"------------------------------------------ Terms and Conditions":"------------------------------------------ ",terms_of_use_title:UE,terms_of_use_text_1:HE,terms_of_use_text_2:BE,terms_of_use_link_1:YE,terms_of_use_text_3:WE,terms_of_use_text_4:GE,terms_of_use_text_5:XE,terms_of_use_text_6:QE,terms_of_use_link_2:JE,terms_of_use_text_7:KE,terms_of_use_link_3:ZE,terms_of_use_text_8:ez,terms_of_use_highlights_title:tz,terms_of_use_highlights_text_1:oz,terms_of_use_highlights_link_1:sz,highlight_1_title:iz,highlight_1_text:rz,highlight_2_title:az,highlight_2_text:nz,highlight_3_title:lz,highlight_3_text:cz,highlight_4_title:dz,highlight_4_text:pz,highlight_5_title:uz,highlight_5_text:mz,highlight_6_title:_z,highlight_6_text:hz,highlight_7_title:gz,highlight_7_text:xz,highlight_8_title:yz,highlight_8_text:fz,highlight_9_title:bz,highlight_9_text:vz,acceptance_contractual_relationship_title:wz,acceptance_contractual_relationship_text:jz,privacy_title:$z,privacy_text_1:kz,privacy_text_2:Cz,privacy_link_1:Sz,modification_additional_terms_title:Tz,modification_additional_terms_text_1:Az,modification_additional_terms_text_2:Pz,modification_additional_terms_text_3:Ez,modification_additional_terms_text_4:zz,modification_additional_terms_text_5:Dz,users_of_services_title:qz,users_of_services_text_1:Iz,users_of_services_text_2:Rz,users_of_services_text_3:Oz,use_of_service_title:Nz,use_of_service_text_1:Mz,use_of_service_text_2:Lz,use_of_service_text_3:Fz,use_of_service_text_4:Vz,use_of_service_text_5:Uz,acceptable_use_policy_title:Hz,acceptable_use_policy_text_1:Bz,subscriptions_payments_cancellations_title:Yz,subscriptions_payments_cancellations_text_1:Wz,subscriptions_payments_cancellations_text_2:Gz,subscriptions_payments_cancellations_text_3:Xz,subscriptions_payments_cancellations_text_4:Qz,subscriptions_payments_cancellations_text_5:Jz,subscriptions_payments_cancellations_text_6:Kz,subscriptions_payments_cancellations_text_7:Zz,subscriptions_payments_cancellations_link:eD,user_content_title:tD,user_content_text_1:oD,user_content_text_2:sD,user_content_text_3:iD,user_content_text_4:rD,user_content_link_1:aD,user_content_text_5:nD,user_content_text_6:lD,user_content_text_7:cD,user_content_text_8:dD,forum_and_messaging_title:pD,forum_and_messaging_text_1:uD,forum_and_messaging_text_2:mD,t2s_intellectual_property_ownership_title:_D,t2s_intellectual_property_ownership_text_1:hD,infringement_notifications_title:gD,infringement_notifications_text_1:xD,infringement_notifications_link_1:yD,infringement_notifications_text_2:fD,term_and_termination_title:bD,term_and_termination_text_1:vD,term_and_termination_text_2:wD,links_to_third_party_title:jD,links_to_third_party_text_1:$D,disclaimer_of_warranties_title:kD,disclaimer_of_warranties_text_1:CD,disclaimer_of_warranties_text_2:SD,ncsa_regulations_title:TD,ncsa_regulations_text_1:AD,limitation_of_liability_title:PD,limitation_of_liability_text_1:ED,limitation_of_liability_text_2:zD,limitation_of_liability_text_3:DD,limitation_of_liability_text_4:qD,indemnity_title:ID,indemnity_text_1:RD,interactions_between_users_title:OD,interactions_between_users_text_1:ND,interactions_between_users_text_2:MD,interactions_between_users_text_3:LD,local_laws_title:FD,local_laws_text_1:VD,special_provisions_mobile_title:UD,special_provisions_mobile_text_1:HD,special_provisions_mobile_text_2:BD,special_provisions_mobile_link_1:YD,special_provisions_mobile_text_3:WD,special_provisions_mobile_text_4:GD,special_provisions_mobile_text_5:XD,special_provisions_mobile_text_6:QD,special_provisions_mobile_link_2:JD,special_provisions_mobile_text_7:KD,special_provisions_mobile_text_8:ZD,special_provisions_mobile_link_3:e3,special_provisions_mobile_text_9:t3,special_provisions_mobile_link_4:o3,dispute_resolution_arbitration_title:s3,dispute_resolution_arbitration_text_1:i3,dispute_resolution_arbitration_text_2:r3,dispute_resolution_arbitration_text_3:a3,dispute_resolution_arbitration_text_4:n3,dispute_resolution_arbitration_text_5:l3,dispute_resolution_arbitration_text_6:c3,electronic_communications_title:d3,electronic_communications_text_1:p3,consumer_notice_title:u3,consumer_notice_text_1:m3,general_title:_3,general_text_1:h3,general_text_2:g3,general_link_1:x3,general_link_2:y3,general_link_3:f3,contact_us_title:b3,contact_us_text_1:v3,contact_us_text_2:w3,privacy_police_title:j3,privacy_police_text_1:$3,privacy_police_text_2:k3,privacy_police_text_3:C3,privacy_police_text_4:S3,information_we_collect_title:T3,information_we_collect_text_1:A3,information_we_collect_subtitle_1:P3,information_we_collect_text_2:E3,information_we_collect_subtitle_2:z3,information_we_collect_text_3:D3,information_we_collect_text_4:q3,information_we_collect_subtitle_3:I3,information_we_collect_text_5:R3,information_we_collect_text_6:O3,information_we_collect_text_7:N3,information_we_collect_text_8:M3,information_we_collect_text_9:L3,information_we_collect_subtitle_4:F3,information_we_collect_text_10:V3,how_use_information_title:U3,how_use_information_text_1:H3,how_use_information_subtitle_1:B3,how_use_information_text_2:Y3,how_use_information_subtitle_2:W3,how_use_information_text_3:G3,how_use_information_subtitle_3:X3,how_use_information_text_4:Q3,how_use_information_subtitle_4:J3,how_use_information_text_5:K3,how_use_information_subtitle_5:Z3,how_use_information_text_6:eq,how_use_information_subtitle_6:tq,how_use_information_text_7:oq,how_use_information_subtitle_7:sq,how_use_information_text_8:iq,how_use_information_subtitle_8:rq,how_use_information_text_9:aq,publicly_available_information_title:nq,publicly_available_information_text_1:lq,how_we_share_your_information_title:cq,how_we_share_your_information_text_1:dq,how_we_share_your_information_subtitle_1:pq,how_we_share_your_information_text_2:uq,how_we_share_your_information_subtitle_2:mq,how_we_share_your_information_text_3:_q,how_we_share_your_information_subtitle_3:hq,how_we_share_your_information_text_4:gq,how_we_share_your_information_subtitle_4:xq,how_we_share_your_information_text_5:yq,how_we_share_your_information_subtitle_5:fq,how_we_share_your_information_text_6:bq,our_use_of_cookies_title:vq,our_use_of_cookies_text_1:wq,our_use_of_cookies_subtitle_1:jq,our_use_of_cookies_text_2:$q,our_use_of_cookies_subtitle_2:kq,our_use_of_cookies_text_3:Cq,our_use_of_cookies_link_1:Sq,our_use_of_cookies_text_4:Tq,our_use_of_cookies_link_2:Aq,our_use_of_cookies_subtitle_3:Pq,our_use_of_cookies_text_5:Eq,our_use_of_cookies_subtitle_4:zq,our_use_of_cookies_text_6:Dq,our_use_of_cookies_text_7:qq,our_use_of_cookies_link_3:Iq,our_use_of_cookies_text_8:Rq,our_use_of_cookies_link_4:Oq,our_use_of_cookies_text_9:Nq,our_use_of_cookies_link_5:Mq,our_use_of_cookies_text_10:Lq,our_use_of_cookies_link_6:Fq,security_of_your_information_title:Vq,security_of_your_information_text_1:Uq,security_of_your_information_text_2:Hq,acess_personal_information_title:Bq,acess_personal_information_text_1:Yq,your_choices_title:Wq,your_choices_text_1:Gq,children_under_title:Xq,children_under_text_1:Qq,third_party_links_title:Jq,third_party_links_text_1:Kq,changes_privacy_policy_title:Zq,changes_privacy_policy_text_1:e5,privacy_contact_us_title:t5,privacy_contact_us_text_1:o5,copyright_policy_title:s5,copyright_policy_text_1:i5,copyright_policy_text_2:r5,copyright_policy_text_3:a5,copyright_policy_text_4:n5,copyright_policy_text_5:l5,copyright_policy_text_6:c5,copyright_policy_text_7:d5,copyright_policy_text_8:p5,copyright_policy_text_9:u5,copyright_policy_text_10:m5,copyright_policy_text_11:_5,copyright_policy_text_12:h5,copyright_policy_text_13:g5,copyright_policy_text_14:x5,copyright_policy_text_15:y5,copyright_policy_text_16:f5,copyright_policy_text_17:b5,copyright_policy_text_18:v5,copyright_policy_text_19:w5,copyright_policy_text_20:j5,copyright_policy_text_21:$5,copyright_policy_text_22:k5,acceptable_use_police_title:C5,acceptable_use_police_text_1:S5,acceptable_use_police_link_1:T5,acceptable_use_police_text_2:A5,acceptable_use_police_text_3:P5,acceptable_use_police_link_2:E5,acceptable_use_police_text_4:z5,no_illegal_user_content_title:D5,no_illegal_user_content_text_1:q5,no_illegal_user_content_subtitle_1:I5,no_illegal_user_content_text_2:R5,no_illegal_user_content_subtitle_2:O5,no_illegal_user_content_text_3:N5,no_illegal_user_content_subtitle_3:M5,no_illegal_user_content_text_4:L5,no_illegal_user_content_subtitle_4:F5,no_illegal_user_content_text_5:V5,no_illegal_user_content_subtitle_5:U5,no_illegal_user_content_text_6:H5,no_abuse_message_title:B5,no_abuse_message_text_1:Y5,no_security_violations_title:W5,no_security_violations_text_1:G5,no_security_violations_subtitle_1:X5,no_security_violations_text_2:Q5,no_security_violations_subtitle_2:J5,no_security_violations_text_3:K5,no_security_violations_subtitle_3:Z5,no_security_violations_text_4:eI,no_network_abuse_title:tI,no_network_abuse_text_1:oI,no_network_abuse_subtitle_1:sI,no_network_abuse_text_2:iI,no_network_abuse_subtitle_2:rI,no_network_abuse_text_3:aI,no_network_abuse_subtitle_3:nI,no_network_abuse_text_4:lI,no_network_abuse_subtitle_4:cI,no_network_abuse_text_5:dI,no_network_abuse_subtitle_5:pI,no_network_abuse_text_6:uI,authorized_use_title:mI,authorized_use_text_1:_I,monitoring_enforcement_title:hI,monitoring_enforcement_text_1:gI,monitoring_enforcement_text_2:xI,monitoring_enforcement_text_3:yI,monitoring_enforcement_text_4:fI,monitoring_enforcement_text_5:bI,monitoring_enforcement_link_1:vI,monitoring_enforcement_text_6:wI,monitoring_enforcement_text_7:jI,reporting_violations_policy_title:$I,reporting_violations_policy_text_1:kI,reporting_violations_policy_text_2:CI,reporting_violations_policy_text_3:SI,_title:TI,_text_1:AI,_text_2:PI,_text_3:EI,_text_4:zI,_text_5:DI,_text_6:qI,_text_7:II,_text_8:RI},NI="El camino hacia el estrellato deportivo comienza aquí",MI="Nombre de usuario",LI="Iniciar sesión",FI="Recordar inicio de sesión",VI="Cerrar sesión",UI="Cerrar",HI="Contraseña",BI="Registrarse",YI="Correo electrónico",WI="Crear una cuenta",GI="Restablecer contraseña",XI="Elegir idioma",QI="Home",JI="Página principal",KI="Mi área",ZI="Cerrar menú",eR="Mensaje",tR="Nuevo mensaje",oR="Volver",sR="Detalles",iR="Favorito",rR="Marcar como favorito",aR="Eliminar de favoritos",nR="No se encontraron datos...",lR="Mostrar más",cR="Mostrar menos",dR="Anterior",pR="Siguiente",uR="Bloqueado",mR="Cerrar imagen",_R="Comprar",hR="Foto de perfil",gR="Sí",xR="No",yR="Pantalla completa",fR="Eliminar",bR="Denunciar",vR="Confirmar",wR="Copiar",jR="Peso",$R="Altura",kR="Editar perfil",CR="Configuraciones",SR="Seguir",TR="Dejar de seguir",AR="Ranking",PR="Fotos",ER="Vídeos",zR="Tu perfil",DR="Tu correo electrónico",qR="En línea",IR="Presencial",RR="Nombre",OR="Seleccione",NR="Obligatorio",MR="Otro",LR="Agregar",FR="Nota",VR="Partido",UR="Por favor, espere...",HR="Título",BR="Privacidad",YR="Términos de uso",WR="Sobre nosotros",GR="¿Necesitas ayuda?",XR="Compartir",QR="Idioma",JR="Copiar URL",KR="Aún no has publicado ninguna oportunidad. ¿Qué tal empezar ahora? Haz clic en el icono de ‘+’ arriba para crear tu primera oportunidad!",ZR="No se ha encontrado ninguna oportunidad...",eO="No se ha encontrado ningún producto...",tO="No se ha encontrado ningún jugador...",oO="El usuario no está logado o no tiene un ID válido",sO="Error al subir la imagen:",iO="Error al subir el video:",rO="Token no encontrado en localStorage",aO="Nombre de usuario no encontrado en la respuesta:",nO="Nombre de usuario no encontrado",lO="Respuesta de error del servidor:",cO="No se ha recibido ninguna respuesta:",dO="Error al configurar la solicitud:",pO="¿Estás seguro de que quieres eliminar esta imagen?",uO="¿Estás seguro de que quieres eliminar este video?",mO="¿Estás seguro de que quieres eliminar esta oportunidad?",_O="¡Texto copiado con éxito!",hO="¡Error al copiar el texto!",gO="Por favor, completa todos los campos",xO="Se ha enviado un correo electrónico de verificación a esta dirección de correo electrónico",yO="¿Realmente deseas finalizar tu sesión?",fO="Usuario desconectado correctamente",bO="Credenciales inválidas. Por favor, verifica tus datos.",vO="Error al iniciar sesión:",wO="Error al iniciar sesión. Por favor, inténtalo de nuevo.",jO="¡Las contraseñas no coinciden!",$O="Respuesta del servidor:",kO="Error al registrar al usuario:",CO="Se produjo un error al registrar al usuario. Por favor, inténtalo de nuevo.",SO="No se ha encontrado ningún evento...",TO="Aún no has publicado ningún evento. ¿Qué tal empezar ahora? Haz clic en el icono de ‘+’ arriba para crear tu primer evento",AO="Panel de control - Jugador",PO="Panel de control - Club",EO="Panel de control - Universidad",zO="Panel de control - Público",DO="Panel de control - Cuerpo técnico",qO="Panel de control - Liga",IO="Jugadores favoritos",RO="Vídeos favoritos",OO="Oportunidades favoritas",NO="Competiciones en curso",MO="Títulos y premios",LO="Tus mensajes",FO="Historia del club",VO="Historial académico",UO="Enlace de referido",HO="Nivel 1",BO="Nivel 2",YO="Nivel 3",WO="Mi equipo",GO="Modalidad",XO="Fecha de nacimiento",QO="Edad",JO="Nacimiento",KO="Nacionalidad principal",ZO="Nacionalidad secundaria",eN="Pasaportes",tN="Sueldo base",oN="Valor de transferencia",sN="Posición principal",iN="Posición principal",rN="Posición secundaria",aN="Posición terciaria",nN="TOEFL",lN="ACT",cN="SAT",dN="Fecha de graduación",pN="Promedio de calificaciones",uN="Representante",mN="Fecha de fundación",_N="Estado",hN="Centro de entrenamiento",gN="Estadio",xN="Entrenador",yN="Tipo de perfil",fN="KG",bN="Metros",vN="Jugador",wN="Club",jN="Nombre del club",$N="Universidad",kN="Universidades",CN="Cuerpo técnico",SN="Agencia",TN="Aficionado",AN="Aficionados",PN="Analista de rendimiento",EN="Ayudante de entrenador",zN="Coordinador",DN="Director",qN="Empresario",IN="Fisiologo",RN="Fisioterapeuta",ON="Gerente",NN="Masajista",MN="Nutricionista",LN="Entrenador de porteros",FN="Preparadores físicos",VN="Preparadores tácticos",UN="Psicólogos",HN="Médico",BN="Médicos",YN="Oficial de captación",WN="Agencias de intercambio",GN="Agencia de intercambio",XN="Serie A",QN="Serie B",JN="Serie C",KN="Serie D",ZN="NCAA 1",e4="NCAA 2",t4="NCAA 3",o4="NAIA 1",s4="NAIA 2",i4="NCCAA 1",r4="NCCAA 2",a4="NJCAA 1",n4="NJCAA 2",l4="NJCAA 3",c4="Sub-7",d4="Sub-8",p4="Sub-9",u4="Sub-11",m4="Sub-13",_4="Sub-15",h4="Sub-17",g4="Sub-20",x4="Adulto",y4="Portero",f4="Lateral izquierdo",b4="Lateral derecho",v4="Central",w4="Carrilero",j4="Mediocentro defensivo",$4="Mediocentro",k4="Mediocentro ofensivo",C4="Extremo",S4="Segundo delantero",T4="Extremo izquierdo",A4="Extremo derecho",P4="Delantero centro",E4="No especificado",z4="R$",D4="$",q4="Derecha",I4="Izquierda",R4="Masculino",O4="Femenino",N4="Activo - Sin contrato",M4="Activo",L4="Lesionado",F4="Lesionado - Sin contrato",V4="Agentes",U4="Podcast",H4="Canales deportivos",B4="Inversiones",Y4="Club de beneficios",W4="Intercambio",G4="Billetera criptográfica",X4="Crowdfunding",Q4="Plataforma Lions",J4="Estudios",K4="Estudios estadounidenses",Z4="Perfil",eM="Mis oportunidades",tM="Oficiales de captación",oM="Social",sM="Noticias",iM="Oportunidades",rM="Clubes",aM="Jugadores",nM="Favoritos",lM="Plantilla",cM="Eventos",dM="Contactos",pM="Amigos",uM="Tienda",mM="Mis afiliados",_M="Profesional",hM="Semiprofesional",gM="Universitario",xM="Amateur",yM="Recreativo",fM="Camisetas",bM="Botas de fútbol",vM="Aún no vendemos estos productos directamente en S2T, pero no te preocupes, tenemos una tienda completa con todo lo que necesitas, ¡y lo mejor es que todo es del mismo grupo! Así que, si haces clic en el botón 'Comprar', te redirigiremos a nuestra tienda online, donde podrás finalizar tu compra con total seguridad y tranquilidad.",wM="Vídeos en tendencia",jM="Beneficios",$M="Mis beneficios",kM="Socios y patrocinadores",CM="Beneficios del usuario",SM="Editar mi oportunidad",TM="Para qué liga es la oportunidad?",AM="Liga",PM="Ligas",EM="País",zM="Escuelas",DM="Para qué país es la oportunidad?",qM="Posición",IM="Para qué posición es la oportunidad?",RM="Para qué categoría es la oportunidad?",OM="Cuál es la fecha de disponibilidad de la oportunidad?",NM="Altura mínima",MM="Cuál es la altura mínima para postular?",LM="Edad mínima",FM="Cuál es la edad mínima para postular?",VM="Edad máxima",UM="Cuál es la edad máxima para postular?",HM="Salario mínimo",BM="Cuál es el valor mínimo que el jugador puede recibir mensualmente?",YM="Salario máximo",WM="Cuál es el valor máximo que el jugador puede recibir mensualmente?",GM="Cuál es la moneda que se utilizará para el pago?",XM="Selecciona la moneda",QM="Ciudad",JM="Cuál es tu pierna hábil?",KM="Cuál es tu nivel competitivo?",ZM="En qué categoría actúas?",eL="Tu peso actual (en KG)",tL="Tu altura actual (En metros)",oL="Tu nacionalidad principal",sL="Tu nacionalidad secundaria",iL="Tu ciudad de nacimiento",rL="¿Tienes pasaporte de algún país?",aL="Si es así, lista los países",nL="Tu salario base",lL="Tu valor de mercado",cL="Tu posición principal",dL="Tu posición secundaria",pL="Tu posición terciaria",uL="¿Juegas en alguna liga?",mL="Selecciona tu liga",_L="¿Tienes algún representante?",hL="Tu historial deportivo",gL="Tu historial académico",xL="Historial de títulos y premios",yL="Competición / Premio",fL="Nombre de la competición o premio",bL="¿Realizaste el examen TOEFL?",vL="¿Realizaste el examen SAT?",wL="Fecha de graduación de la escuela secundaria",jL="GPA (Promedio de calificaciones)",$L="Nombre de la certificación",kL="Certificación",CL="Certificaciones",SL="Confirmar cambio",TL="Confirmar cambios",AL="Selecciona el nivel",PL="Conocimientos",EL="¿Cuál es el tipo de tu agencia?",zL="Selecciona el tipo",DL="Nombre del representante del club",qL="Cuál es el nivel competitivo del club?",IL="De qué país es el club",RL="De qué estado es el club",OL="Dónde entrena el club",NL="Nombre del estadio",ML="Nombre del estadio o arena del club",LL="Entrenador",FL="Entrenador actual del club",VL="Nombre de la competición",UL="Competición",HL="Nacionalidad",BL="Tu nacionalidad",YL="¿Cuál es tu tipo de perfil?",WL="Nombre del representante de la universidad",GL="Cuál es el nivel competitivo de la universidad?",XL="De qué país es la universidad",QL="De qué estado es la universidad",JL="Dónde entrena la universidad",KL="Nombre del estadio o arena de la universidad",ZL="Entrenador actual de la universidad",eF="Descripción",tF="Inserta la descripción de tu oportunidad",oF="Requisitos",sF="Inserta otros requisitos para tu oportunidad",iF="Confirmar edición",rF="Publicar oportunidad",aF="Categoría competitiva",nF="Nivel competitivo",lF="Categoría",cF="Pierna hábil",dF="Disponibilidad",pF="Tiene representante",uF="¿Tiene representante?",mF="Valor mínimo de transferencia",_F="Valor máximo de transferencia",hF="País de nacimiento",gF="Pasaporte",xF="Todos",yF="Crear nueva oportunidad",fF="Oportunidad de",bF="Publicada en",vF="Oportunidad",wF="Cerrar oportunidad",jF="Fecha",$F="Salario",kF="Inmediato",CF="Años",SF="Opcional",TF="Enviar mensaje",AF="Ya has enviado un mensaje",PF="Selecciona la posición",EF="Botão para alterar a foto do perfil",zF="Botão para alterar a capa do perfil",DF="Botão para adicionar um novo vídeo",qF="Botão para adicionar uma nova foto",IF="Por qué está reportando esta foto o video?",RF="Seleccione el motivo",OF="Ingrese más detalles sobre el motivo (Opcional)",NF="Contenido inapropiado",MF="Derechos de autor",LF="Manipulación de medios",FF="Mala calidad",VF="Portugués (BR)",UF="Inglês",HF="Español",BF="Olvidó su contraseña",YF="¿Olvidó su contraseña?",WF="Cambiar contraseña",GF="Nueva contraseña",XF="Ingrese su contraseña",QF="Ingrese una nueva contraseña",JF="Ingrese nuevamente su nueva contraseña",KF="Confirme su nueva contraseña",ZF="¡Su contraseña ha sido cambiada con éxito!",eV="Ingrese su correo electrónico registrado",tV="¡Por favor, verifique!",oV="¿No tiene una cuenta?",sV="Volver a inicio",iV="Su nombre de usuario en T2S",rV="Su contraseña",aV="Confirme su contraseña",nV="Confirmación de contraseña",lV="Elija su tipo de perfil",cV="¿Cuál es su nombre completo?",dV="¿Cuál es el nombre de su club?",pV="¿Cuál es el nombre de su universidad?",uV="¿Cuál es el nombre de su agencia?",mV="¿Cuál es el nombre de su liga?",_V="¿Cuál es su nombre completo?",hV="¿Cuál es su nombre completo?",gV="¿Cuál categoría competitiva?",xV="¿En qué modalidad desea actuar?",yV="Elija la modalidad",fV="¿Cuál es la modalidad de su club?",bV="Elija la categoría",vV="Paso a paso",wV="Ingrese sus datos personales con atención y complete todos los campos obligatorios.",jV="Seleccione el tipo de perfil que desea crear",$V="Valide su cuenta: Confirme su correo electrónico y siga las instrucciones para completar el proceso de registro.",kV="Acceda a 'Editar perfil' y agregue detalles sobre su experiencia, habilidades, formación y logros.",CV="Bienvenido a los beneficios de T2S",SV="Descubra las ventajas exclusivas que T2S ha reservado especialmente para usted. Nuestra misión es hacer su experiencia con nosotros aún más gratificante y recompensadora.",TV="Aquí están algunos de los increíbles beneficios que puede aprovechar como parte de la comunidad T2S:",AV="Haga clic en cualquiera de los eventos a continuación.",PV="Beneficios T2S",EV="¡Bienvenido a los eventos de T2S!",zV="Aquí encontrarás los mejores eventos de fútbol, tanto en Brasil como alrededor del mundo",DV="Actualmente, los eventos de T2S están disponibles en nuestros sitios individuales. Para acceder a ellos, sigue los pasos a continuación:",qV="Haz clic en cualquiera de los eventos a continuación.",IV="Lee los detalles del evento.",RV="Si encuentras un evento que te interese, haz clic en 'Participar'.",OV="Después de eso, serás redirigido a la página del evento",NV="Otros beneficios de T2S",MV="¡Bienvenido al Club de Beneficios de T2S!",LV="Aquí encontrarás todo para hacer tu vida más increíble: descuentos, ofertas, experiencias y mucho más!",FV="El Club de Beneficios de T2S tiene su propio sitio web, donde encontrarás todo lo que necesitas para aprovechar al máximo tus beneficios. Para acceder:",VV="Haz clic en cualquiera de los beneficios a continuación.",UV="Serás redirigido automáticamente al sitio del Club de Beneficios.",HV="Crea tu cuenta o inicia sesión, si ya tienes una.",BV="¡Comienza a explorar y aprovechar las ventajas exclusivas que te esperan!",YV="¡Bienvenido a la área de inversiones de T2S!",WV="Aquí encontrarás información esencial para optimizar tus inversiones y hacer crecer tu patrimonio",GV="La área de inversiones de T2S tiene su propio sitio web, donde encontrarás todo lo que necesitas para aprovechar al máximo. Para acceder:",XV="Haz clic en cualquiera de los tipos de inversiones a continuación.",QV="Serás redirigido automáticamente a nuestro sitio de inversiones.",JV="Crea tu cuenta o inicia sesión, si ya tienes una.",KV="¡Comienza a explorar y aprovechar las ventajas exclusivas que te esperan!",ZV="Año de la conquista",eU="Entrada",tU="Año de entrada",oU="Salida",sU="Año de salida",iU="Actual",rU="Ingrese su nota final",aU="Organizador(a)",nU="Fecha de inicio",lU="Fecha de finalización",cU="Horario",dU="Plataforma",pU="Cerrar evento",uU="Código postal",mU="Dirección",_U="Participar",hU="Campamento",gU="Clínica",xU="Conferencia",yU="Tour",fU="Exhibición",bU="Intercambio",vU="Filtrar eventos",wU="Formato del evento",jU="Mis eventos",$U="Crear nuevo evento",kU="Elija el título de su evento",CU="Resumen",SU="Un breve resumen sobre el evento",TU="Quién está organizando el evento",AU="¿Cuál es el formato del evento?",PU="Ingrese el país donde se realizará el evento",EU="Ingrese el estado donde se realizará el evento",zU="Ingrese el código postal",DU="Ingrese el resto de la dirección",qU="¿En qué plataforma se realizará el evento?",IU="Hora de inicio del evento",RU="Fecha de inicio del evento",OU="Fecha de finalización del evento",NU="Seleccione la imagen de portada para su evento (16:9)",MU="Ingrese más detalles sobre el evento",LU="Tipos de perfil",FU="Acceda a la plataforma y haga clic en 'Regístrese'.",VU="Ingrese sus datos personales con atención y complete todos los campos obligatorios.",UU="Seleccione el tipo de perfil que desea registrar",HU="Valide su cuenta: Confirme su correo electrónico y siga las instrucciones para completar el proceso de registro.",BU="Haga clic en 'Mi área' para ingresar a la página de su perfil.",YU="Utilice imágenes profesionales y de alta calidad en su perfil y banner para causar una buena impresión.",WU="Agregue detalles sobre su cuenta.",GU="En su área, acceda a la opción 'Perfil' a través del menú de navegación",XU="En el carrusel de medios, utilice el botón '+' para seleccionar y enviar sus mejores contenidos.",QU="Incluya fotos y videos que demuestren momentos relacionados con su carrera.",JU="Trabajamos con atletas de todos los niveles, incluidos amateurs, profesionales, semiprofesionales y de categorías base",KU="Cómo funciona",ZU="Cree su cuenta",eH="Edite su perfil",tH="Muestre su talento",oH="busque oportunidades",sH="Seleccione la opción 'Atleta' para registrarse como un atleta en busca de oportunidades.",iH="Agregue detalles sobre su experiencia, habilidades, formación y logros.",rH="Incluya fotos y videos que demuestren sus habilidades, técnicas y momentos destacados en competiciones o entrenamientos.",aH="Acceda a la sección 'Oportunidades' para ver las vacantes disponibles.",nH="Utilice los filtros para encontrar oportunidades que se ajusten a su perfil e intereses.",lH="Haga clic en la vacante que le interese, lea atentamente los detalles y requisitos para saber si encaja.",cH="Si cumple con los requisitos, complete el área de texto con una presentación y haga clic en 'Enviar' para dar el siguiente paso.",dH="¡Sea parte!",pH="Cree su perfil, comparta sus mejores fotos y videos y deje que el mundo descubra su talento.",uH="Trabajamos con clubes de todos los niveles, incluidos amateurs, profesionales y semiprofesionales",mH="Cree su cuenta",_H="Edite su perfil",hH="Muestre su talento",gH="Busque talentos",xH="Seleccione la opción 'Club' para registrarse como un club en busca de nuevos talentos.",yH="Complete su perfil! Revele sus logros memorables, el estadio que lo corona y el entrenador que lo impulsa.",fH="Incluya fotos y videos que demuestren a los jugadores entrenando, momentos destacados en competiciones o el día a día de su club.",bH="Acceda a la sección 'Mis oportunidades' para ver sus oportunidades disponibles.",vH="Haga clic en el ícono '+' para iniciar la creación de una nueva oportunidad.",wH="Haga clic en una oportunidad existente para editar sus detalles en cualquier momento.",jH="Acceda a la sección 'jugadores' y utilice los filtros para descubrir los talentos que pueden elevar su equipo al siguiente nivel.",$H="Cree su perfil, muestre su club al mundo y busque nuevos talentos.",kH={"------------------------------------------ Palavras comuns":"------------------------------------------ ",slogan:NI,username:MI,login:LI,remember_login:FI,logout:VI,close:UI,password:HI,register:BI,email:YI,create_account:WI,reset_password:GI,select_language:XI,home:QI,home_page:JI,my_area:KI,close_menu:ZI,message:eR,new_message:tR,back:oR,details:sR,favorite:iR,make_favorite:rR,remove_from_favorites:aR,data_not_found:nR,show_more:lR,show_less:cR,previous:dR,next:pR,blocked:uR,close_image:mR,buy:_R,profile_picture:hR,yes:gR,no:xR,fullscreen:yR,remove:fR,report:bR,confirm:vR,copy:wR,weight:jR,height:$R,edit_profile:kR,settings:CR,follow:SR,unfollow:TR,ranking:AR,photos:PR,videos:ER,your_profile:zR,your_email:DR,online:qR,in_person:IR,name:RR,select:OR,required:NR,other:MR,add:LR,note:FR,match:VR,please_wait:UR,title:HR,privacity:BR,terms_of_use:YR,about_us:WR,need_help_question:GR,share:XR,language:QR,copy_url:JR,"------------------------------------------ Mensagens ao usuário":"------------------------------------------ ",no_owner_opportunities:KR,no_opportunities:ZR,no_products:eO,no_players:tO,not_logged:oO,image_upload_error:sO,video_upload_error:iO,token_not_found:rO,username_not_found_response:aO,username_not_found:nO,error_response_server:lO,no_response:cO,error_setting_request:dO,delete_image_question:pO,delete_video_question:uO,delete_opportunity_question:mO,text_copied_sucess:_O,text_copy_error:hO,fill_all_fields:gO,verification_email_sended:xO,end_seasson_question:yO,successfully_logged_out:fO,invalid_credentials_check_details:bO,login_error:vO,login_error_try_again:wO,passwords_not_match:jO,server_response:$O,register_error:kO,register_error_try_again:CO,events_not_found:SO,owner_events_not_found:TO,"------------------------------------------ Dashboards + Components":"------------------------------------------ ",dashboard_player:AO,dashboard_club:PO,dashboard_university:EO,dashboard_public:zO,dashboard_staff:DO,dashboard_league:qO,favorite_players:IO,favorite_videos:RO,favorite_opportunities:OO,current_competitions:NO,titles_and_awards:MO,your_messages:LO,club_history:FO,academic_history:VO,referral_link:UO,level_1:HO,level_2:BO,level_3:YO,my_squad:WO,"------------------------------------------ Profile Info":"------------------------------------------ ",modality:GO,birth_date:XO,age:QO,birth:JO,primary_nationality:KO,secondary_nationality:ZO,passports:eN,base_payment:tN,transfer_value:oN,main_position:sN,primary_position:iN,secondary_position:rN,tertiary_position:aN,toefl:nN,act:lN,sat:cN,graduation_date:dN,grade_point_average:pN,representative:uN,foundation_date:mN,state:_N,training_center:hN,stadium:gN,coach:xN,profile_type:yN,kg:fN,meters:bN,player:vN,club:wN,club_name:jN,university:$N,universities:kN,staff:CN,agency:SN,fan:TN,fans:AN,performance_analyst:PN,coach_assistant:EN,coordinator:zN,director:DN,business_man:qN,physiologist:IN,physiotherapist:RN,manager:ON,massage_therapist:NN,nutritionist:MN,goalkeeper_trainer:LN,physical_trainers:FN,tactical_trainers:VN,psychologists:UN,doctor:HN,doctors:BN,scout:YN,exchange_agencies:WN,exchange_agency:GN,serie_a:XN,serie_b:QN,serie_c:JN,serie_d:KN,ncaa_1:ZN,ncaa_2:e4,ncaa_3:t4,naia_1:o4,naia_2:s4,nccaa_1:i4,nccaa_2:r4,njcaa_1:a4,njcaa_2:n4,njcaa_3:l4,sub_7:c4,sub_8:d4,sub_9:p4,sub_11:u4,sub_13:m4,sub_15:_4,sub_17:h4,sub_20:g4,adult:x4,goalkeeper:y4,left_back:f4,right_back:b4,center_back:v4,wing_back:w4,defensive_midfielder:j4,central_midfielder:$4,attacking_midfielder:k4,wide_midfielder:C4,second_striker:S4,left_winger:T4,right_winger:A4,center_forward:P4,not_specified:E4,R$:z4,$:D4,"€":"€",right:q4,left:I4,male:R4,female:O4,"n/a":"N/A",active_free:N4,active:M4,injured:L4,injured_free:F4,agents:V4,"------------------------------------------ Benefits":"------------------------------------------ ",podcast:U4,sports_channels:H4,investments:B4,benefits_club:Y4,interchange:W4,crypto_wallet:G4,crowdfunding:X4,lions_platform:Q4,studies:J4,american_studies:K4,"------------------------------------------ Profile Header":"------------------------------------------ ",profile:Z4,"my-squad":"Mi plantilla",my_opportunities:eM,scouts:tM,social:oM,news:sM,opportunities:iM,clubs:rM,players:aM,favorites:nM,squad:lM,events:cM,contacts:dM,friends:pM,store:uM,"t2s+":"T2S+",my_affiliates:mM,"------------------------------------------ Competitive Categories":"------------------------------------------ ",professional:_M,semi_professional:hM,academic:gM,amateur:xM,recreational:yM,"------------------------------------------ Store":"------------------------------------------ ",t_shirts:fM,football_boots:bM,store_text:vM,"------------------------------------------ Home":"------------------------------------------ ",trending_videos:wM,benefits:jM,my_benefits:$M,partners_supporters:kM,user_benefits:CM,"------------------------------------------ Edit + Create + View Opportunity":"------------------------------------------ ",edit_my_opportunity:SM,which_league:TM,league:AM,leagues:PM,country:EM,schools:zM,which_country_opportunity:DM,position:qM,which_position:IM,which_category:RM,which_disponibility_date:OM,minimum_height:NM,which_minimum_height:MM,minimum_age:LM,which_minimum_age:FM,maximum_age:VM,which_maximum_age:UM,minimum_payment:HM,which_minimum_payment:BM,maximum_payment:YM,which_maximum_payment:WM,which_currency:GM,select_currency:XM,city:QM,which_best_leg:JM,which_competitive_level:KM,which_category_you_act:ZM,your_current_weight:eL,your_current_height:tL,your_primary_nationality:oL,your_secondary_nationality:sL,your_birth_city:iL,have_passports_question:rL,if_yes_list_the_countries:aL,your_base_payment:nL,your_transfer_value:lL,your_main_position:cL,your_secondary_position:dL,your_tertiary_position:pL,play_in_league_question:uL,select_your_league:mL,have_manager_question:_L,your_sporting_history:hL,your_academic_history:gL,titles_and_awards_history:xL,competition_award:yL,competition_award_name:fL,take_toefl_question:bL,take_act_question:vL,second_grade_graduation_date:wL,gpa:jL,certification_name:$L,certification:kL,certifications:CL,confirm_change:SL,confirm_changes:TL,select_level:AL,knowledge:PL,your_agency_type_question:EL,select_type:zL,representative_club_name:DL,which_club_competitive_level:qL,which_country_club:IL,which_state_club:RL,where_club_train:OL,stadium_name:NL,club_stadium:ML,coach_or_trainer:LL,actual_club_coach:FL,competition_name:VL,competition:UL,nationality:HL,your_nationality:BL,profile_type_question:YL,representative_university_name:WL,which_university_competitive_level:GL,which_university_country:XL,which_state_university:QL,where_university_train:JL,university_stadium:KL,actual_university_coach:ZL,description:eF,insert_description:tF,requirements:oF,insert_requirements:sF,confirm_edit:iF,publish_opportunity:rF,competitive_category:aF,competitive_level:nF,category:lF,best_leg:cF,avaliability:dF,has_manager:pF,has_manager_question:uF,minimum_transfer_value:mF,maximum_transfer_value:_F,birth_country:hF,passport:gF,all:xF,create_new_opportunity:yF,opportunity_from:fF,published_in:bF,opportunity:vF,close_opportunity:wF,date:jF,payment:$F,immediate:kF,years:CF,optional:SF,send_message:TF,opportunity_message_sent:AF,select_position:PF,"------------------------------------------ Buttons text":"------------------------------------------ ",change_profile_picture_button:EF,change_banner_button:zF,add_video_button:DF,add_photo_button:qF,"------------------------------------------ Report":"------------------------------------------ ",report_reason_question:IF,select_reason:RF,insert_report_details:OF,inappropriate_content:NF,copyright:MF,media_manipulation:LF,poor_quality:FF,portuguese_br:VF,english:UF,spanish:HF,"------------------------------------------ Login + Register + Passwords":"------------------------------------------ ",forgot_password:BF,forgot_password_question:YF,change_password:WF,new_password:GF,insert_your_password:XF,insert_new_password:QF,insert_new_password_again:JF,confirm_new_password:KF,password_changed_successfully:ZF,insert_your_email:eV,please_check:tV,have_account_question:oV,return_home:sV,your_username_on_t2s:iV,your_password:rV,confirm_password:aV,password_confirmation:nV,select_profile_type:lV,player_name_question:cV,club_name_question:dV,university_name_question:pV,agency_name_question:uV,league_name_question:mV,staff_name_question:_V,fan_name_question:hV,which_competitive_category:gV,which_modality:xV,select_modality:yV,which_club_modality:fV,select_category:bV,step_by_step:vV,register_step_1:wV,register_step_2:jV,register_step_3:$V,register_step_4:kV,"------------------------------------------ Benefits pages":"------------------------------------------ ",welcome_t2s_benefits:CV,benefits_text_1:SV,benefits_text_2:TV,benefits_step_1:AV,t2s_benefits:PV,welcome_t2s_events:EV,events_text_1:zV,events_text_2:DV,events_step_1:qV,events_step_2:IV,events_step_3:RV,events_step_4:OV,other_t2s_benefits:NV,welcome_t2s_benefits_club:MV,benefits_club_text_1:LV,benefits_club_text_2:FV,benefits_club_step_1:VV,benefits_club_step_2:UV,benefits_club_step_3:HV,benefits_club_step_4:BV,welcome_t2s_investments:YV,investments_text_1:WV,investments_text_2:GV,investments_step_1:XV,investments_step_2:QV,investments_step_3:JV,investments_step_4:KV,"------------------------------------------ Auth Elements":"------------------------------------------ ",year_of_achievement:ZV,entry:eU,entry_year:tU,exit:oU,exit_year:sU,actual:iU,insert_final_grade:rU,"------------------------------------------ Events":"------------------------------------------ ",organizer:aU,start_date:nU,end_date:lU,hour:cU,platform:dU,close_event:pU,zip_code:uU,adress:mU,participate:_U,camping:hU,clinic:gU,palestra:xU,tour:yU,showcase:fU,exchange:bU,filter_events:vU,event_format:wU,my_events:jU,create_new_event:$U,select_event_title:kU,summary:CU,summary_about_event:SU,who_event_organizer:TU,which_event_format:AU,insert_event_country:PU,insert_event_state:EU,insert_zip_code:zU,insert_rest_adress:DU,what_event_platform:qU,event_start_hour:IU,event_start_date:RU,event_end_date:OU,select_event_banner:NU,insert_more_event_details:MU,"------------------------------------------ Userspage":"------------------------------------------ ",profile_types:LU,generic_step_1_part_1:FU,generic_step_1_part_2:VU,generic_step_1_part_3:UU,generic_step_1_part_4:HU,generic_step_2_part_1:BU,generic_step_2_part_2:YU,generic_step_2_part_3:WU,generic_step_3_part_1:GU,generic_step_3_part_2:XU,generic_step_3_part_3:QU,player_text:JU,how_it_works:KU,player_step_1_title:ZU,player_step_2_title:eH,player_step_3_title:tH,player_step_4_title:oH,player_step_1_part_3:sH,player_step_2_part_3:iH,player_step_3_part_3:rH,player_step_4_part_1:aH,player_step_4_part_2:nH,player_step_4_part_3:lH,player_step_4_part_4:cH,be_part_exclamation:dH,player_text_2:pH,club_text:uH,club_step_1_title:mH,club_step_2_title:_H,club_step_3_title:hH,club_step_4_title:gH,club_step_1_part_3:xH,club_step_2_part_3:yH,club_step_3_part_3:fH,club_step_4_part_1:bH,club_step_4_part_2:vH,club_step_4_part_3:wH,club_step_4_part_4:jH,club_text_2:$H},CH="Bienvenue",SH="Ceci est une description d'exemple.",TH="Accueil",AH="Choisissez la langue",PH="Se connecter",EH="S'inscrire",zH="Réinitialiser le mot de passe",DH="Créer un compte",qH="Tableau de bord - Joueur",IH="Tableau de bord - Club",RH="Tableau de bord - Université",OH="Tableau de bord - Public",NH="Page d'accueil",MH="Mon espace",LH="Événements",FH="Social",VH="Nouvelles",UH="Professionnel",HH="Semi-Professionnel",BH="Universitaire",YH="Amateur",WH="Récréatif",GH="Vidéos tendance",XH="Avantages",QH="Partenaires et Supporteurs",JH={welcome:CH,description:SH,home:TH,select_language:AH,login:PH,register:EH,reset_password:zH,create_account:DH,dashboard_player:qH,dashboard_club:IH,dashboard_university:RH,dashboard_public:OH,home_page:NH,my_area:MH,events:LH,social:FH,news:VH,professional:UH,semi_professional:HH,university:BH,amateur:YH,recreational:WH,trending_videos:GH,benefits:XH,partners_supporters:QH},KH={en:{translation:Lw},pt:{translation:OI},es:{translation:kH},fr:{translation:JH}};Rs.use(hn).init({resources:KH,lng:"pt",fallbackLng:"en",interpolation:{escapeValue:!1}});const ZH=(t,s)=>{switch(s.type){case ur:return{...t,profile:{...t.profile,info:s.payload}};case mr:return t.profile.videos.some(r=>r.url===s.payload.url)?t:{...t,profile:{...t.profile,videos:[...t.profile.videos,s.payload]}};case _r:return{...t,profile:{...t.profile,videos:t.profile.videos.filter(i=>i.url!==s.payload.url)}};default:return{...t}}},va={profile:{banner:{},info:{},photos:[],videos:[],awards:[]},benefits:[],friends:[]};function wa({children:t}){const[s,i]=p.useReducer(ZH,va);return e.jsx($t.Provider,{value:{fanState:s,fanDispatch:i},children:t})}wa.propTypes={children:a.node.isRequired};const eB=_.section`
  ${({theme:t})=>h`

  ${Ae} {
      justify-content: flex-end;

      @media ${t.medias.tablet} {
        justify-content: center;
      }

      @media ${t.medias.mobile} {
        justify-content: flex-end;
      }

      ${ge} {
        @media ${t.medias.mobile} {
         display: none;
        }
      }

      ${M} {
        display: none;
        animation: none;

        @media ${t.medias.mobile} {
          display: flex;
        }
      }
    }

    ${oe} {
      & ${de} {
        height: 30px;
      }
    }

    > ${oe} {
      display: none;
      flex-direction: column;
      gap: ${t.spacings.small};
      padding: ${t.spacings.medium};

      @media ${t.medias.mobile} {
        display: flex;
      }
    }
      
    >${ae} {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      gap: ${t.spacings.xlarge};
      padding: ${t.spacings.medium};


      @media ${t.medias.tablet} {
        width: 100%;
      }
    }

  `}
`,Ts=_.nav`
  ${({theme:t})=>h`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: ${t.spacings.small};
     height: 100%;
     width: 100%;
     padding: ${t.spacings.xsmall};
  `}
`;function ja(){const{t}=w(),[s,i]=p.useState(""),r=Oe();return p.useEffect(()=>{i(r.pathname)},[r.pathname]),e.jsxs(e.Fragment,{children:[e.jsxs(Ts,{children:[e.jsx(c,{active:s==="/fan-dashboard"||s==="/fan-dashboard/",path:"",text:t("home"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/fan-dashboard/profile",path:"profile",text:t("profile"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/fan-dashboard/opportunities",path:"opportunities",text:t("opportunities"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/fan-dashboard/scouts",path:"scouts",text:t("scouts"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/fan-dashboard/clubs",path:"clubs",text:t("clubs"),color:o.colors.white,hovercolor:o.colors.black})]}),e.jsxs(Ts,{children:[e.jsx(c,{active:s==="/fan-dashboard/players",path:"players",text:t("players"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/fan-dashboard/events",path:"events",text:t("events"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/fan-dashboard/favorites",path:"favorites",text:t("favorites"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/fan-dashboard/friends",path:"friends",text:t("friends"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/fan-dashboard/store",path:"store",text:t("store"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/fan-dashboard/my-affiliates",path:"my-affiliates",text:t("my_affiliates"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/fan-dashboard/s2t+",path:"s2t+",text:t("t2s+"),color:o.colors.white,hovercolor:o.colors.black})]})]})}ja.propTypes={};function $a(){const{t}=w();return e.jsxs($e,{children:[e.jsxs(c,{path:"",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(zt,{}),t("home")]}),e.jsxs(c,{path:"profile",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(ft,{}),t("profile")]}),e.jsxs(c,{path:"my-squad",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(io,{}),t("my_squad")]}),e.jsxs(c,{path:"opportunities",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(bt,{}),t("oppotunities")]}),e.jsxs(c,{path:"my-opportunities",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(fo,{}),t("my_opportunities")]}),e.jsxs(c,{path:"scouts",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Dt,{}),t("scouts")]}),e.jsxs(c,{path:"clubs",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(qt,{}),t("clubs")]}),e.jsxs(c,{path:"players",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(bo,{}),t("players")]}),e.jsxs(c,{path:"favorites",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(It,{}),t("favorites")]}),e.jsxs(c,{path:"events",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Rt,{}),t("events")]}),e.jsxs(c,{path:"contacts",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Ot,{}),t("contacts")]}),e.jsxs(c,{path:"friends",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(vt,{}),t("friends")]}),e.jsxs(c,{path:"store",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Nt,{}),t("store")]}),e.jsxs(c,{path:"s2t+",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Mt,{}),t("t2s+")]}),e.jsxs(c,{path:"my-affiliates",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Lt,{}),t("my_affiliates")]}),e.jsxs(c,{color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(te,{}),t("close")]})]})}$a.propTypes={};function tB(){const{t}=w(),s=p.useContext($t),{fanState:i,fanDispatch:r}=s,[l,n]=p.useState(!1),[g,x]=p.useState(!1),[u,m]=p.useState(!1),[d,f]=p.useState(!1),A=()=>{f(!d),m(!1)},S=()=>{m(!u),f(!1)};return e.jsxs(eB,{children:[e.jsxs(Pe,{children:[e.jsxs(be,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/fan-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),g?e.jsx(q,{name:t("menu"),onclick:()=>x(!g),children:e.jsx(te,{})}):e.jsx(q,{name:t("close_menu"),onclick:()=>x(!g),children:e.jsx(_e,{})})]}),g&&e.jsxs(ee,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/fan-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),e.jsxs(Je,{backgroundimagesrc:i.profile.banner.backgroundImageSrc,ownerview:!0,children:[e.jsx(We,{imagesrc:i.profile.banner.profileImageSrc,badge:i.profile.banner.badge,type:i.profile.info.profileType,ownerview:!0}),e.jsx(ct,{name:i.profile.banner.name}),e.jsxs(B,{children:[e.jsx($,{path:"profile-edit",text:t("edit_profile"),bgcolor:o.colors.primary,bghover:o.colors.black,textcolor:o.colors.black,texthover:o.colors.primary,border:o.colors.black,borderhover:o.colors.primary}),e.jsx(q,{active:u,hovercolor:o.colors.primary,name:t("settings"),onclick:S,children:e.jsx(wt,{})}),e.jsx(q,{active:d,hovercolor:o.colors.primary,name:t("share"),onclick:A,children:e.jsx(nt,{})}),u&&e.jsx(ee,{onclick:()=>m(!1),children:e.jsx(dt,{})}),d&&e.jsx(ee,{onclick:()=>f(!1),children:e.jsx(Ke,{})})]})]}),e.jsx(Ge,{children:e.jsx(ja,{})}),l?e.jsx(Xe,{onclick:()=>n(!l),children:e.jsx($a,{})}):e.jsx(Qe,{name:"Menu",onclick:()=>n(!l),children:e.jsx(_e,{})}),e.jsx(z,{color:o.colors.black,children:e.jsx(Ne,{})}),e.jsx(ce,{items:i.benefits,title:t("my_benefits")})]})}const oB=_.article`
  ${({theme:t})=>h`
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: ${t.spacings.large};
  `}
`;function sB(){var l,n,g;const{t}=w(),s=p.useContext($t),{fanState:i,fanDispatch:r}=s;return e.jsxs(oB,{children:[e.jsx(mt,{items:((l=i==null?void 0:i.profile)==null?void 0:l.info)||[]}),e.jsx(Ct,{items:((n=i==null?void 0:i.profile)==null?void 0:n.photos)||[],title:t("photos"),ownerview:!0}),e.jsx(St,{items:((g=i==null?void 0:i.profile)==null?void 0:g.videos)||[],title:t("videos"),profileType:"fan"})]})}const iB=_.article`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.medium};
    width: 100%;
    height: 100%;
  `}
`;function ka(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsxs(iB,{children:[e.jsx(eo,{title:t("favorite_players"),items:i.users.players,publicview:!0}),e.jsx(Le,{items:i.videos.trending,title:t("trending_videos"),publicview:!0}),e.jsx(Le,{items:i.videos.trending,title:t("favorite_videos"),publicview:!0})]})}ka.propTypes={};const rB=_.article`
  ${({theme:t})=>h`
 
    width: 100%;
    height: 100%;
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.large};
    border-radius: 12px;

    ${W} {
      align-items: center
    }

    ${fe} {
      border-radius: 12px;
    }

    ${jt} {
      .swiper-slide {
        background: rgba(200,200,200,200.5);
      }
    }
  `}
`;function aB(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsxs(rB,{children:[e.jsxs(U,{slidesperview:2,backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(ye,{title:t("social"),size:"400px",items:i.news}),e.jsx(F,{title:t("ranking"),type:"referralrank",items:i.rankings.referral})]}),e.jsxs(U,{title:t("trending_videos"),slidesperview:2,children:[e.jsx(K,{size:"300px",items:i.news,title:t("professional")}),e.jsx(K,{size:"300px",items:i.news,title:t("semi_professional")}),e.jsx(K,{size:"300px",items:i.news,title:t("university")}),e.jsx(K,{size:"300px",items:i.news,title:t("amateur")}),e.jsx(K,{size:"300px",items:i.news,title:t("recreational")})]}),e.jsxs(U,{slidesperview:2,backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:i.events}),e.jsx(F,{title:t("news"),type:"news",items:i.news})]})]})}const nB=_.section`
  ${({theme:t})=>h`

  ${Ae} {
      justify-content: flex-end;

      @media ${t.medias.tablet} {
        justify-content: center;
      }

      @media ${t.medias.mobile} {
        justify-content: flex-end;
      }

      ${ge} {
        @media ${t.medias.mobile} {
         display: none;
        }
      }

      ${M} {
        display: none;
        animation: none;

        @media ${t.medias.mobile} {
          display: flex;
        }
      }
    }

    ${oe} {
      & ${de} {
        height: 30px;
      }
    }

    > ${oe} {
      display: none;
      flex-direction: column;
      gap: ${t.spacings.small};
      padding: ${t.spacings.medium};

      @media ${t.medias.mobile} {
        display: flex;
      }
    }
      
    >${ae} {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      gap: ${t.spacings.xlarge};
      padding: ${t.spacings.medium};


      @media ${t.medias.tablet} {
        width: 100%;
      }
    }

  `}
`,As=_.nav`
  ${({theme:t})=>h`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: ${t.spacings.small};
     height: 100%;
     width: 100%;
     padding: ${t.spacings.xsmall};
  `}
`;function Ca(){const{t}=w(),[s,i]=p.useState(""),r=Oe();return p.useEffect(()=>{i(r.pathname)},[r.pathname]),e.jsxs(e.Fragment,{children:[e.jsxs(As,{children:[e.jsx(c,{active:s==="/agency-dashboard"||s==="/agency-dashboard/",path:"",text:t("home"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/agency-dashboard/profile",path:"profile",text:t("profile"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/agency-dashboard/my-squad",path:"my-squad",text:t("my_squad"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/agency-dashboard/opportunities",path:"opportunities",text:t("opportunities"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/agency-dashboard/my-opportunities",path:"my-opportunities",text:t("my_opportunities"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/agency-dashboard/scouts",path:"scouts",text:t("scouts"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/agency-dashboard/clubs",path:"clubs",text:t("clubs"),color:o.colors.white,hovercolor:o.colors.black})]}),e.jsxs(As,{children:[e.jsx(c,{active:s==="/agency-dashboard/players",path:"players",text:t("players"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/agency-dashboard/events",path:"events",text:t("events"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/agency-dashboard/favorites",path:"favorites",text:t("favorites"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/agency-dashboard/contacts",path:"contacts",text:t("contacts"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/agency-dashboard/friends",path:"friends",text:t("friends"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/agency-dashboard/store",path:"store",text:t("store"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/agency-dashboard/my-affiliates",path:"my-affiliates",text:t("my_affiliates"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/agency-dashboard/s2t+",path:"s2t+",text:t("t2s+"),color:o.colors.white,hovercolor:o.colors.black})]})]})}Ca.propTypes={};function Sa(){const{t}=w();return e.jsxs($e,{children:[e.jsxs(c,{path:"",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(zt,{}),t("home")]}),e.jsxs(c,{path:"profile",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(ft,{}),t("profile")]}),e.jsxs(c,{path:"my-squad",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(io,{}),t("my_squad")]}),e.jsxs(c,{path:"opportunities",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(bt,{}),t("oppotunities")]}),e.jsxs(c,{path:"my-opportunities",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(fo,{}),t("my_opportunities")]}),e.jsxs(c,{path:"scouts",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Dt,{}),t("scouts")]}),e.jsxs(c,{path:"clubs",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(qt,{}),t("clubs")]}),e.jsxs(c,{path:"players",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(bo,{}),t("players")]}),e.jsxs(c,{path:"favorites",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(It,{}),t("favorites")]}),e.jsxs(c,{path:"events",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Rt,{}),t("events")]}),e.jsxs(c,{path:"contacts",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Ot,{}),t("contacts")]}),e.jsxs(c,{path:"friends",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(vt,{}),t("friends")]}),e.jsxs(c,{path:"store",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Nt,{}),t("store")]}),e.jsxs(c,{path:"s2t+",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Mt,{}),t("t2s+")]}),e.jsxs(c,{path:"my-affiliates",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Lt,{}),t("my_affiliates")]}),e.jsxs(c,{color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(te,{}),t("close")]})]})}Sa.propTypes={};function lB(){const{t}=w(),s=p.useContext(kt),{agencyState:i,agencyDispatch:r}=s,[l,n]=p.useState(!1),[g,x]=p.useState(!1),[u,m]=p.useState(!1),[d,f]=p.useState(!1);if(!i.profile||!i.profile.banner)return e.jsx("div",{children:"Loading..."});const A=()=>{m(!u),x(!1)},S=()=>{x(!g),m(!1)};return e.jsxs(nB,{children:[e.jsxs(Pe,{children:[e.jsxs(be,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/agency-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),d?e.jsx(q,{name:t("menu"),onclick:()=>f(!d),children:e.jsx(te,{})}):e.jsx(q,{name:t("close_menu"),onclick:()=>f(!d),children:e.jsx(_e,{})})]}),d&&e.jsxs(ee,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/player-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),e.jsxs(Je,{backgroundimagesrc:i.profile.banner.backgroundImageSrc,ownerview:!0,children:[e.jsx(We,{imagesrc:i.profile.banner.profileImageSrc,badge:i.profile.banner.badge,ownerview:!0,type:i.profile.info.profileType}),e.jsx(ct,{name:i.profile.banner.name}),e.jsxs(B,{children:[e.jsx($,{path:"profile-edit",text:t("edit_profile"),bgcolor:o.colors.primary,bghover:o.colors.black,textcolor:o.colors.black,texthover:o.colors.primary,border:o.colors.black,borderhover:o.colors.primary}),e.jsx(q,{active:g,hovercolor:o.colors.primary,name:t("settings"),onclick:S,children:e.jsx(wt,{})}),e.jsx(q,{active:u,hovercolor:o.colors.primary,name:t("share"),onclick:A,children:e.jsx(nt,{})}),g&&e.jsx(ee,{onclick:()=>x(!1),children:e.jsx(dt,{})}),u&&e.jsx(ee,{onclick:()=>m(!1),children:e.jsx(Ke,{})})]})]}),e.jsx(Ge,{children:e.jsx(Ca,{})}),l?e.jsx(Xe,{onclick:()=>n(!l),children:e.jsx(Sa,{})}):e.jsx(Qe,{name:t("menu"),onclick:()=>n(!l),children:e.jsx(_e,{})}),e.jsx(pt,{children:e.jsx(Vt,{children:e.jsx(ae,{color:o.colors.black,children:e.jsx(Ne,{})})})}),e.jsx(ce,{items:i.benefits,title:t("my_benefits")})]})}const cB=(t,s)=>{switch(s.type){case _d:return{...t,player:[...s.payload]};case hr:return{...t,profile:{...t.profile,info:s.payload}};case dd:return{...t,profile:{...t.profile,competitions:[...t.profile.competitions,s.payload]}};case pd:return{...t,profile:{...t.profile,competitions:t.profile.competitions.filter(i=>i.id!==s.payload.id)}};case ud:return{...t,profile:{...t.profile,awards:[...t.profile.awards,s.payload]}};case md:return{...t,profile:{...t.profile,awards:t.profile.awards.filter(i=>i.id!==s.payload.id)}};case gr:return t.profile.videos.some(r=>r.url===s.payload.url)?t:{...t,profile:{...t.profile,videos:[...t.profile.videos,s.payload]}};case xr:return{...t,profile:{...t.profile,videos:t.profile.videos.filter(i=>i.url!==s.payload.url)}};default:return{...t}}},Ta={profile:{banner:{},info:{},photos:[],videos:[],competitions:[],awards:[]},benefits:[],friends:[]};function Aa({children:t}){const[s,i]=p.useReducer(cB,Ta);return e.jsx(kt.Provider,{value:{agencyState:s,agencyDispatch:i},children:t})}Aa.propTypes={children:a.node.isRequired};const dB=_.article`
  ${({theme:t})=>h`
 
    width: 100%;
    height: 100%;
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.large};
    border-radius: 12px;

    ${W} {
      align-items: center
    }

    ${fe} {
      border-radius: 12px;
    }

    ${jt} {
      .swiper-slide {
        background: rgba(200,200,200,200.5);
      }
    }
  `}
`;function pB(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsxs(dB,{children:[e.jsxs(U,{slidesperview:2,backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(ye,{title:t("social"),size:"400px",items:i.news}),e.jsx(F,{title:t("ranking"),type:"referralrank",items:i.rankings.referral})]}),e.jsxs(U,{title:t("trending_videos"),slidesperview:2,children:[e.jsx(K,{size:"300px",items:i.news,title:t("professional")}),e.jsx(K,{size:"300px",items:i.news,title:t("semi_professional")}),e.jsx(K,{size:"300px",items:i.news,title:t("university")}),e.jsx(K,{size:"300px",items:i.news,title:t("amateur")}),e.jsx(K,{size:"300px",items:i.news,title:t("recreational")})]}),e.jsxs(U,{slidesperview:2,backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:i.events}),e.jsx(F,{title:t("news"),type:"news",items:i.news})]})]})}const uB=_.article`
  ${({theme:t})=>h`
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: ${t.spacings.large};
  `}
`;function mB(){var l,n,g;const{t}=w(),s=p.useContext(kt),{agencyState:i,agencyDispatch:r}=s;return e.jsxs(uB,{children:[e.jsx(mt,{items:((l=i==null?void 0:i.profile)==null?void 0:l.info)||[]}),e.jsx(Ct,{items:((n=i==null?void 0:i.profile)==null?void 0:n.photos)||[],title:t("photos"),ownerview:!0}),e.jsx(St,{items:((g=i==null?void 0:i.profile)==null?void 0:g.videos)||[],title:t("videos"),profileType:"agency"})]})}const _B=_.article`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.medium};
    width: 100%;
    height: 100%;
  `}
`;function Pa(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsxs(_B,{children:[e.jsx(eo,{title:t("favorite_players"),items:i.users.players,publicview:!0}),e.jsx(Le,{items:i.videos.trending,title:t("trending_videos"),publicview:!0}),e.jsx(Le,{items:i.videos.trending,title:t("favorite_videos"),publicview:!0})]})}Pa.propTypes={};const hB=(t,s)=>{switch(s.type){case"LOAD_BUSINESS_MAN_DATA":return{...t,...s.payload};case"UPDATE_PROFILE_PICTURE":return{...t,profile:{...t.profile,banner:{...t.profile.banner,profileImageSrc:s.payload}}};case br:return{...t,profile:{...t.profile,info:s.payload}};case vr:return{...t,profile:{...t.profile,clubs:[...t.profile.clubs,s.payload]}};case Td:return{...t,profile:{...t.profile,clubs:t.profile.clubs.filter(i=>i.id!==s.payload.id)}};case wr:return{...t,profile:{...t.profile,studies:[...t.profile.studies,s.payload]}};case Ad:return{...t,profile:{...t.profile,studies:t.profile.studies.filter(i=>i.id!==s.payload.id)}};case jr:return{...t,profile:{...t.profile,awards:[...t.profile.awards,s.payload]}};case Pd:return{...t,profile:{...t.profile,awards:t.profile.awards.filter(i=>i.id!==s.payload.id)}};case Ed:return t.profile.videos.some(r=>r.url===s.payload.url)?t:{...t,profile:{...t.profile,videos:[...t.profile.videos,s.payload]}};case zd:return{...t,profile:{...t.profile,videos:t.profile.videos.filter(i=>i.url!==s.payload.url)}};default:return t}},gB={profile:{banner:{},info:{},photos:[],videos:[],clubs:[],studies:[],awards:[]},benefits:[],friends:[]};function Ea({children:t}){const[s,i]=p.useReducer(hB,gB);return p.useEffect(()=>{(async()=>{try{const l=await Re.get("https://talent2show.onrender.com/api/businessManProfiles/1");l.data&&l.data.id?i({type:"LOAD_BUSINESS_MAN_DATA",payload:l.data}):console.warn("Resposta da API não contém dados válidos")}catch(l){console.error("Erro ao carregar dados do jogador:",l),i({type:"LOAD_BUSINESS_MAN_DATA_ERROR",payload:l.message})}})()},[]),e.jsx(Oo.Provider,{value:{businessManState:s,businessManDispatch:i},children:t})}Ea.propTypes={children:a.node.isRequired};const xB=_.section`
  ${({theme:t})=>h`


  ${Ae} {
      justify-content: flex-end;

      @media ${t.medias.tablet} {
        justify-content: center;
      }

      @media ${t.medias.mobile} {
        justify-content: flex-end;
      }

      ${ge} {
        @media ${t.medias.mobile} {
         display: none;
        }
      }

      ${M} {
        display: none;
        animation: none;

        @media ${t.medias.mobile} {
          display: flex;
        }
      }
    }

    ${oe} {
      & ${de} {
        height: 30px;
      }
    }

    > ${oe} {
      display: none;
      flex-direction: column;
      gap: ${t.spacings.small};
      padding: ${t.spacings.medium};

      @media ${t.medias.mobile} {
        display: flex;
      }
    }
      
    >${ae} {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      gap: ${t.spacings.xlarge};
      padding: ${t.spacings.medium};


      @media ${t.medias.tablet} {
        width: 100%;
      }
    }

    
  `}
`,Ps=_.nav`
  ${({theme:t})=>h`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: ${t.spacings.small};
     height: 100%;
     width: 100%;
     padding: ${t.spacings.xsmall};
  `}
`;function za(){const{t}=w(),[s,i]=p.useState(""),r=Oe();return p.useEffect(()=>{i(r.pathname)},[r.pathname]),e.jsxs(e.Fragment,{children:[e.jsxs(Ps,{children:[e.jsx(c,{active:s==="/business-man-dashboard"||s==="/business-man-dashboard/",path:"",text:t("home"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/business-man-dashboard/profile",path:"profile",text:t("profile"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/business-man-dashboard/opportunities",path:"opportunities",text:t("opportunities"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/business-man-dashboard/scouts",path:"scouts",text:t("scouts"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/business-man-dashboard/clubs",path:"clubs",text:t("clubs"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/business-man-dashboard/favorites",path:"favorites",text:t("favorites"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/business-man-dashboard/events",path:"events",text:t("events"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/business-man-dashboard/contacts",path:"contacts",text:t("contacts"),color:o.colors.white,hovercolor:o.colors.black})]}),e.jsxs(Ps,{children:[e.jsx(c,{active:s==="/business-man-dashboard/friends",path:"friends",text:t("friends"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/business-man-dashboard/store",path:"store",text:t("store"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/business-man-dashboard/my-affiliates",path:"my-affiliates",text:t("my_affiliates"),color:o.colors.white,hovercolor:o.colors.black}),e.jsx(c,{active:s==="/business-man-dashboard/s2t+",path:"s2t+",text:t("t2s+"),color:o.colors.white,hovercolor:o.colors.black})]})]})}za.propTypes={};function Da(){const{t}=w();return e.jsxs($e,{children:[e.jsxs(c,{path:"",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(zt,{}),t("home")]}),e.jsxs(c,{path:"profile",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(ft,{}),t("profile")]}),e.jsxs(c,{path:"opportunities",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(bt,{}),t("opportunities")]}),e.jsxs(c,{path:"scouts",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Dt,{}),t("scouts")]}),e.jsxs(c,{path:"clubs",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(qt,{}),t("clubs")]}),e.jsxs(c,{path:"favorites",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(It,{}),t("favorites")]}),e.jsxs(c,{path:"events",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Rt,{}),t("events")]}),e.jsxs(c,{path:"contacts",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Ot,{}),t("contacts")]}),e.jsxs(c,{path:"friends",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(vt,{}),t("friends")]}),e.jsxs(c,{path:"store",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Nt,{}),t("store")]}),e.jsxs(c,{path:"s2t+",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Mt,{}),t("t2s+")]}),e.jsxs(c,{path:"my-affiliates",color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(Lt,{}),t("my_affiliates")]}),e.jsxs(c,{color:o.colors.white,hovercolor:o.colors.primary,children:[e.jsx(te,{}),t("close")]})]})}Da.propTypes={};function yB(){const{t}=w(),s=p.useContext(Oo),{businessManState:i,businessManDispatch:r}=s,[l,n]=p.useState(!1),[g,x]=p.useState(!1),[u,m]=p.useState(!1),[d,f]=p.useState(!1),A=()=>{f(!d),m(!1)},S=()=>{m(!u),f(!1)};return e.jsxs(xB,{children:[e.jsxs(Pe,{children:[e.jsxs(be,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/business-man-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),g?e.jsx(q,{name:t("menu"),onclick:()=>x(!g),children:e.jsx(te,{})}):e.jsx(q,{name:t("close_menu"),onclick:()=>x(!g),children:e.jsx(_e,{})})]}),g&&e.jsxs(ee,{children:[e.jsx($,{path:"/",text:t("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/business-man-dashboard",text:t("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0}),e.jsx($,{path:"/benefits",text:t("benefits"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary})]}),e.jsxs(Je,{backgroundimagesrc:i.profile.banner.backgroundImageSrc,children:[e.jsx(We,{imagesrc:i.profile.banner.profileImageSrc,badge:i.profile.banner.badge,type:t(i.profile.info.profileType),ownerview:!0}),e.jsx(ct,{name:i.profile.banner.name}),e.jsxs(B,{children:[e.jsx($,{path:"profile-edit",text:t("edit_profile"),bgcolor:o.colors.primary,bghover:o.colors.black,textcolor:o.colors.black,texthover:o.colors.primary,border:o.colors.black,borderhover:o.colors.primary}),e.jsx(q,{active:u,hovercolor:o.colors.primary,name:t("settings"),onclick:S,children:e.jsx(wt,{})}),e.jsx(q,{active:d,hovercolor:o.colors.primary,name:t("share"),onclick:A,children:e.jsx(nt,{})}),u&&e.jsx(ee,{onclick:()=>m(!1),children:e.jsx(dt,{})}),d&&e.jsx(ee,{onclick:()=>f(!1),children:e.jsx(Ke,{})})]})]}),e.jsx(Ge,{children:e.jsx(za,{})}),l?e.jsx(Xe,{onclick:()=>n(!l),children:e.jsx(Da,{})}):e.jsx(Qe,{name:t("menu"),onclick:()=>n(!l),children:e.jsx(_e,{})}),e.jsx(z,{color:o.colors.black,children:e.jsx(Ne,{})}),e.jsx(ce,{items:i.benefits,title:t("my_benefits")})]})}const fB=_.article`
  ${({theme:t})=>h`
 
    width: 100%;
    height: 100%;
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.large};
    border-radius: 12px;

    ${W} {
      align-items: center
    }

    ${fe} {
      border-radius: 12px;
    }

    ${jt} {
      .swiper-slide {
        background: rgba(200,200,200,200.5);
      }
    }
  `}
`;function bB(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsxs(fB,{children:[e.jsxs(U,{slidesperview:2,backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(ye,{title:t("social"),size:"400px",items:i.news}),e.jsx(F,{title:t("ranking"),type:"referralrank",items:i.rankings.referral})]}),e.jsxs(U,{title:t("trending_videos"),slidesperview:2,children:[e.jsx(K,{size:"300px",items:i.news,title:t("professional")}),e.jsx(K,{size:"300px",items:i.news,title:t("semi_professional")}),e.jsx(K,{size:"300px",items:i.news,title:t("university")}),e.jsx(K,{size:"300px",items:i.news,title:t("amateur")}),e.jsx(K,{size:"300px",items:i.news,title:t("recreational")})]}),e.jsxs(U,{slidesperview:2,backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:i.events}),e.jsx(F,{title:t("news"),type:"news",items:i.news})]})]})}const vB=_.article`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
    animation: ${I} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.large};
    
  `}
`;function wB(){var l,n,g,x,u,m;const{t}=w(),s=p.useContext(Oo),{businessManState:i,businessManDispatch:r}=s;return e.jsxs(vB,{children:[e.jsx(mt,{items:((l=i==null?void 0:i.profile)==null?void 0:l.info)||[]}),e.jsx(Ct,{items:((n=i==null?void 0:i.profile)==null?void 0:n.photos)||[],title:t("photos"),ownerview:!0}),e.jsx(St,{items:((g=i==null?void 0:i.profile)==null?void 0:g.videos)||[],title:t("videos"),profileType:"business_man"}),e.jsxs(B,{children:[e.jsx(at,{items:((x=i==null?void 0:i.profile)==null?void 0:x.clubs)||[],title:t("club_history")}),e.jsx(at,{items:((u=i==null?void 0:i.profile)==null?void 0:u.studies)||[],title:t("academic_history")})]}),e.jsx(Wt,{items:((m=i==null?void 0:i.profile)==null?void 0:m.awards)||[],title:t("titles_and_awards")})]})}const jB=_.article`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    gap: ${t.spacings.medium};
    width: 100%;
    height: 100%;
  `}
`;function qa(){const{t}=w(),s=p.useContext(X),{s2tState:i,s2tDispatch:r}=s;return e.jsxs(jB,{children:[e.jsx(Le,{items:i.videos.trending,title:t("favorite_videos"),publicview:!0,lazy:!0}),e.jsx(lo,{title:t("favorite_opportunities"),items:i.proposals.male.professional.clubs})]})}qa.propTypes={};const $B=_.article`
  ${({theme:t})=>h`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${t.spacings.medium};

    width: 100%;
    height: 100%;
  `}
`,kB=_.div`
  ${({theme:t})=>h`
    width: 100%;
    height: 100%;
  `}
`,uo=_.div`
  ${({theme:t})=>h`
    animation: ${ue} 500ms;
    background:  rgba(0,0,0,1);
    border-radius: 12px;
    border: ${t.borders.primary};
    box-shadow: 0px 0px 10px 2px ${t.colors.primary};

    width: 100%;
    padding: ${t.spacings.small};
    position: absolute;
    top: 105%;
    z-index: 500;
  `}
`;function Ia({children:t}){const{t:s}=w(),[i,r]=p.useState("step-1");return e.jsxs($B,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(k,{as:"h2",uppercase:!0,text:s("slogan"),size:o.sizes.huge}),e.jsx(y,{size:o.sizes.large,text:s("staff_text")}),e.jsx($,{path:"/register",text:s("register"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.lightprimary,texthover:o.colors.primary,border:o.colors.lightprimary,borderhover:o.colors.primary,size:o.sizes.large})]}),e.jsx(k,{text:s("how_it_works"),size:o.sizes.xxlarge,uppercase:!0}),e.jsxs($e,{children:[e.jsxs(qe,{name:s("staff_step_1_title"),onclick:()=>r(i==="step-1"?"":"step-1"),active:i==="step-1",activecolor:o.colors.primary,children:[e.jsx(Ho,{}),e.jsx(k,{text:s("staff_step_1_title"),size:o.sizes.small,uppercase:!0,as:"h3"}),i==="step-1"&&e.jsx(uo,{children:e.jsxs(J,{children:[e.jsx(P,{color:o.colors.primary,children:s("generic_step_1_part_1")}),e.jsx(P,{color:o.colors.primary,children:s("generic_step_1_part_2")}),e.jsx(P,{color:o.colors.primary,children:s("staff_step_1_part_3")}),e.jsx(P,{color:o.colors.primary,children:s("generic_step_1_part_4")})]})})]}),e.jsxs(qe,{name:s("staff_step_2_title"),onclick:()=>r(i==="step-2"?"":"step-2"),active:i==="step-2",activecolor:o.colors.primary,children:[e.jsx(Bo,{}),e.jsx(k,{text:s("staff_step_2_title"),size:o.sizes.small,uppercase:!0,as:"h3"}),i==="step-2"&&e.jsx(uo,{children:e.jsxs(J,{children:[e.jsx(P,{color:o.colors.primary,children:s("generic_step_2_part_1")}),e.jsx(P,{color:o.colors.primary,children:s("generic_step_2_part_2")}),e.jsx(P,{color:o.colors.primary,children:s("staff_step_2_part_3")}),e.jsx(P,{color:o.colors.primary,children:s("staff_step_2_part_4")})]})})]}),e.jsxs(qe,{name:s("staff_step_3_title"),onclick:()=>r(i==="step-3"?"":"step-3"),active:i==="step-3",activecolor:o.colors.primary,children:[e.jsx(Yo,{}),e.jsx(k,{text:s("staff_step_3_title"),size:o.sizes.small,uppercase:!0,as:"h3"}),i==="step-3"&&e.jsx(uo,{children:e.jsxs(J,{children:[e.jsx(P,{color:o.colors.primary,children:s("generic_step_3_part_1")}),e.jsx(P,{color:o.colors.primary,children:s("generic_step_3_part_2")}),e.jsx(P,{color:o.colors.primary,children:s("staff_step_3_part_3")})]})})]}),e.jsxs(qe,{name:s("staff_step_4_title"),onclick:()=>r(i==="step-4"?"":"step-4"),active:i==="step-4",activecolor:o.colors.primary,children:[e.jsx(Wo,{}),e.jsx(k,{text:s("staff_step_4_title"),size:o.sizes.small,uppercase:!0,as:"h3"}),i==="step-4"&&e.jsx(uo,{children:e.jsxs(J,{children:[e.jsx(P,{color:o.colors.primary,children:s("staff_step_4_part_1")}),e.jsx(P,{color:o.colors.primary,children:s("staff_step_4_part_2")}),e.jsx(P,{color:o.colors.primary,children:s("staff_step_4_part_3")}),e.jsx(P,{color:o.colors.primary,children:s("staff_step_4_part_4")})]})})]})]}),e.jsxs(U,{slidesperview:1,children:[e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""}),e.jsx("img",{src:"/assets/images/backgrounds/slider-bg-1.png",alt:""})]}),e.jsx(kB,{children:e.jsx(ce,{items:O.photos.benefits,title:"Benefícios"})}),e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(k,{text:s("be_part_exclamation"),uppercase:!0,size:o.sizes.xhuge}),e.jsx(y,{size:o.sizes.large,text:s("staff_text_2")}),e.jsxs(B,{children:[e.jsx($,{path:"/login",text:s("login"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.lightprimary,texthover:o.colors.primary,border:o.colors.lightprimary,borderhover:o.colors.primary,size:o.sizes.medium}),e.jsx($,{path:"/register",text:s("login"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.lightprimary,texthover:o.colors.primary,border:o.colors.lightprimary,borderhover:o.colors.primary,size:o.sizes.medium})]})]})]})}Ia.propTypes={};const CB=_.section`
  ${({theme:t})=>h`
      animation: ${I} 500ms;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `}
`,SB=_.div`
  ${({theme:t})=>h`
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: ${t.spacings.xlarge};

      padding: ${t.spacings.xlarge};
      @media ${t.medias.smallpc}{
        width: 100%;
      }

      @media ${t.spacings.mobile} {
        padding: ${t.spacings.medium};
      }

     ${ae} {
      gap: ${t.spacings.small};

      ${pe} {
        margin-bottom: none;
      }

      ${Z} {
        
        display: inline-block;

      }
  `}
`;function Ra({children:t}){const{t:s}=w();return e.jsx(CB,{children:e.jsxs(SB,{children:[e.jsx(G,{text:s("terms_of_use_title"),uppercase:!0}),e.jsxs(z,{children:[e.jsx(y,{text:s("terms_of_use_text_1")}),e.jsx(y,{text:s("terms_of_use_text_2")}),e.jsxs(y,{children:[s("terms_of_use_text_3")," ",e.jsx(c,{text:s("terms_of_use_link_1"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("terms_of_use_text_4")]}),e.jsx(y,{text:s("terms_of_use_text_5")}),e.jsxs(y,{children:[s("terms_of_use_text_6")," ",e.jsx(c,{text:s("terms_of_use_link_2"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("terms_of_use_text_7")," ",e.jsx(c,{text:s("terms_of_use_link_3"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("terms_of_use_text_8")]})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("terms_of_use_highlights_title"),as:"h3",uppercase:!0}),e.jsxs(y,{children:[s("terms_of_use_highlights_text_1")," ",e.jsx(c,{text:s("terms_of_use_highlights_link_1"),color:o.colors.lightprimary,hovercolor:o.colors.primary})]})]}),e.jsxs(z,{children:[e.jsx(y,{uppercase:!0,children:e.jsx(c,{uppercase:!0,text:s("highlight_1_title"),color:o.colors.lightprimary,hovercolor:o.colors.primary})}),e.jsx(y,{text:s("highlight_1_text")})]}),e.jsxs(z,{children:[e.jsx(y,{uppercase:!0,children:e.jsx(c,{uppercase:!0,text:s("highlight_2_title"),color:o.colors.lightprimary,hovercolor:o.colors.primary})}),e.jsx(y,{text:s("highlight_2_text")})]}),e.jsxs(z,{children:[e.jsx(y,{uppercase:!0,children:e.jsx(c,{uppercase:!0,text:s("highlight_3_title"),color:o.colors.lightprimary,hovercolor:o.colors.primary})}),e.jsx(y,{text:s("highlight_3_text")})]}),e.jsxs(z,{children:[e.jsx(y,{uppercase:!0,children:e.jsx(c,{uppercase:!0,text:s("highlight_4_title"),color:o.colors.lightprimary,hovercolor:o.colors.primary})}),e.jsx(y,{text:s("highlight_4_text")})]}),e.jsxs(z,{children:[e.jsx(y,{uppercase:!0,children:e.jsx(c,{uppercase:!0,text:s("highlight_5_title"),color:o.colors.lightprimary,hovercolor:o.colors.primary})}),e.jsx(y,{text:s("highlight_5_text")})]}),e.jsxs(z,{children:[e.jsx(y,{uppercase:!0,children:e.jsx(c,{uppercase:!0,text:s("highlight_6_title"),color:o.colors.lightprimary,hovercolor:o.colors.primary})}),e.jsx(y,{text:s("highlight_6_text")})]}),e.jsxs(z,{children:[e.jsx(y,{uppercase:!0,children:e.jsx(c,{uppercase:!0,text:s("highlight_7_title"),color:o.colors.lightprimary,hovercolor:o.colors.primary})}),e.jsx(y,{text:s("highlight_7_text")})]}),e.jsxs(z,{children:[e.jsx(y,{uppercase:!0,children:e.jsx(c,{uppercase:!0,text:s("highlight_8_title"),color:o.colors.lightprimary,hovercolor:o.colors.primary})}),e.jsx(y,{text:s("highlight_8_text")})]}),e.jsxs(z,{children:[e.jsx(y,{uppercase:!0,children:e.jsx(c,{uppercase:!0,text:s("highlight_9_title"),color:o.colors.lightprimary,hovercolor:o.colors.primary})}),e.jsx(y,{text:s("highlight_9_text")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("acceptance_contractual_relationship_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("acceptance_contractual_relationship_text")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("privacy_title"),as:"h3",uppercase:!0}),e.jsxs(y,{children:[s("privacy_text_1")," ",e.jsx(c,{text:s("privacy_link_1"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("privacy_text_2")]})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("modification_additional_terms_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("modification_additional_terms_text_1")}),e.jsx(y,{text:s("modification_additional_terms_text_2")}),e.jsx(y,{text:s("modification_additional_terms_text_3")}),e.jsx(y,{text:s("modification_additional_terms_text_4")}),e.jsx(y,{text:s("modification_additional_terms_text_5")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("users_of_services_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("users_of_services_text_1")}),e.jsx(y,{text:s("users_of_services_text_2")}),e.jsx(y,{text:s("users_of_services_text_3")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("use_of_service_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("use_of_service_text_1")}),e.jsx(y,{text:s("use_of_service_text_2")}),e.jsx(y,{text:s("use_of_service_text_3")}),e.jsx(y,{text:s("use_of_service_text_4")}),e.jsx(y,{text:s("use_of_service_text_5")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("acceptable_use_policy_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("acceptable_use_policy_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("subscriptions_payments_cancellations_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("subscriptions_payments_cancellations_text_1")}),e.jsx(y,{text:s("subscriptions_payments_cancellations_text_2")}),e.jsx(y,{text:s("subscriptions_payments_cancellations_text_3")}),e.jsx(y,{text:s("subscriptions_payments_cancellations_text_4")}),e.jsx(y,{text:s("subscriptions_payments_cancellations_text_5")}),e.jsxs(y,{children:[s("subscriptions_payments_cancellations_text_6")," ",e.jsx(c,{text:s("subscriptions_payments_cancellations_link"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("subscriptions_payments_cancellations_text_7")," ",e.jsx(c,{text:s("subscriptions_payments_cancellations_link"),color:o.colors.lightprimary,hovercolor:o.colors.primary}),"."]}),e.jsx(y,{text:s("subscriptions_payments_cancellations_text_7")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("user_content_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("user_content_text_1")}),e.jsx(y,{text:s("user_content_text_2")}),e.jsx(y,{text:s("user_content_text_3")}),e.jsxs(y,{children:[s("user_content_text_4")," ",e.jsx(c,{text:s("user_content_link_1"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("user_content_text_5")]}),e.jsx(y,{text:s("user_content_text_5")}),e.jsx(y,{text:s("user_content_text_6")}),e.jsx(y,{text:s("user_content_text_7")}),e.jsx(y,{text:s("user_content_text_8")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("forum_and_messaging_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("forum_and_messaging_text_1")}),e.jsx(y,{text:s("forum_and_messaging_text_2")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("t2s_intellectual_property_ownership_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("t2s_intellectual_property_ownership_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("infringement_notifications_title"),as:"h3",uppercase:!0}),e.jsxs(y,{children:[s("infringement_notifications_text_1")," ",e.jsx(c,{text:s("infringement_notifications_link_1"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("infringement_notifications_text_2")]})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("term_and_termination_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("term_and_termination_text_1")}),e.jsx(y,{text:s("term_and_termination_text_2")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("links_to_third_party_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("links_to_third_party_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("disclaimer_of_warranties_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("disclaimer_of_warranties_text_1")}),e.jsx(y,{text:s("disclaimer_of_warranties_text_2")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("ncsa_regulations_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("ncsa_regulations_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("limitation_of_liability_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("limitation_of_liability_text_1")}),e.jsx(y,{text:s("limitation_of_liability_text_2")}),e.jsx(y,{text:s("limitation_of_liability_text_3")}),e.jsx(y,{text:s("limitation_of_liability_text_4")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("indemnity_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("indemnity_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("interactions_between_users_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("interactions_between_users_text_1")}),e.jsx(y,{text:s("interactions_between_users_text_2")}),e.jsx(y,{text:s("interactions_between_users_text_3")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("local_laws_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("local_laws_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("special_provisions_mobile_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("special_provisions_mobile_text_1")}),e.jsxs(y,{children:[s("special_provisions_mobile_text_2")," ",e.jsx(c,{text:s("special_provisions_mobile_link_1"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("special_provisions_mobile_text_3")]}),e.jsx(y,{text:s("special_provisions_mobile_text_3")}),e.jsx(y,{text:s("special_provisions_mobile_text_4")}),e.jsx(y,{text:s("special_provisions_mobile_text_5")}),e.jsxs(y,{children:[s("special_provisions_mobile_text_6")," ",e.jsx(c,{text:s("special_provisions_mobile_link_2"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("special_provisions_mobile_text_7")]}),e.jsxs(y,{children:[s("special_provisions_mobile_text_8")," ",e.jsx(c,{text:s("special_provisions_mobile_link_3"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("special_provisions_mobile_text_9")," ",e.jsx(c,{text:s("special_provisions_mobile_link_4"),color:o.colors.lightprimary,hovercolor:o.colors.primary})]})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("dispute_resolution_arbitration_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("dispute_resolution_arbitration_text_1")}),e.jsx(y,{text:s("dispute_resolution_arbitration_text_2")}),e.jsx(y,{text:s("dispute_resolution_arbitration_text_3")}),e.jsx(y,{text:s("dispute_resolution_arbitration_text_4")}),e.jsx(y,{text:s("dispute_resolution_arbitration_text_5")}),e.jsx(y,{text:s("dispute_resolution_arbitration_text_6")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("electronic_communications_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("electronic_communications_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("consumer_notice_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("consumer_notice_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("general_title"),as:"h3",uppercase:!0}),e.jsxs(y,{children:[s("general_text_1")," ",e.jsx(c,{text:s("general_link_1"),color:o.colors.lightprimary,hovercolor:o.colors.primary}),", ",e.jsx(c,{text:s("general_link_2"),color:o.colors.lightprimary,hovercolor:o.colors.primary}),", ",e.jsx(c,{text:s("general_link_3"),color:o.colors.lightprimary,hovercolor:o.colors.primary}),", ",s("general_text_2")]})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("contact_us_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("contact_us_text_1")}),e.jsx(y,{text:s("contact_us_text_2")})]})]})})}Ra.propTypes={children:a.node};const TB=_.section`
  ${({theme:t})=>h`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  

  > ${ge} {
   > ${de} {
     min-width: 150px;
    }
  }

  ${Ko} {

    margin-bottom: ${t.spacings.xlarge};

    ${M} {
    display: none;
    animation: none;

    @media ${t.medias.smallpc} {
      display: flex;
    }
    }

    ${ge} {
      @media ${t.medias.smallpc} {
      display: none;
    }
    }
    }

    ${no} {
    position: absolute;
    top: 80px;
    padding: ${t.spacings.huge};

    @media ${t.medias.smallpc} {
      display: flex;
    }

    @media ${t.medias.tablet} {
      top: 75px;
    }
    }



    ${ge} {
    @media ${t.medias.tablet} {
      flex-direction: column;
      gap: ${t.spacings.small};
    }
    }
  `}
`;function Oa({children:t}){const[s,i]=p.useState(!1),[r,l]=p.useState(),{t:n}=w(),g=Oe();return p.useEffect(()=>{l(g.pathname)},[g.pathname]),e.jsxs(TB,{children:[e.jsxs(Zo,{children:[e.jsx(lt,{size:"150px",logo:"/assets/images/pngs/logo.png"}),s?e.jsx(q,{name:n("menu"),onclick:()=>i(!s),children:e.jsx(te,{})}):e.jsx(q,{name:n("close_menu"),onclick:()=>i(!s),children:e.jsx(_e,{})}),e.jsxs(be,{children:[e.jsx($,{path:"/",text:n("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/player-dashboard",text:n("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/policies/terms-of-use",text:n("policies"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0})]})]}),s&&e.jsxs(Jo,{children:[e.jsx($,{path:"/",text:n("home_page"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/player-dashboard",text:n("my_area"),bgcolor:o.colors.mediumblack,bghover:o.colors.mediumblack,textcolor:o.colors.white,texthover:o.colors.primary,border:o.colors.white,borderhover:o.colors.primary}),e.jsx($,{path:"/policies/terms-of-use",text:n("policies"),bgcolor:o.colors.mediumblack,bghover:o.colors.black,textcolor:o.colors.primary,texthover:o.colors.primary,border:o.colors.primary,borderhover:o.colors.primary,active:!0})]}),e.jsx(G,{text:"Políticas da Talent 2 Show",uppercase:!0}),e.jsxs(be,{children:[e.jsx($,{path:"terms-of-use",text:n("terms_of_use"),bgcolor:r==="/policies/terms-of-use"?o.colors.secondary:o.colors.quaternary,bghover:"",textcolor:o.colors.white,texthover:o.colors.white,borderhover:o.colors.white,border:o.colors.white,active:r==="/policies/terms-of-use"}),e.jsx($,{path:"privacy",text:n("privacy"),bgcolor:r==="/policies/privacy"?o.colors.secondary:o.colors.quaternary,bghover:"",textcolor:o.colors.white,texthover:o.colors.white,borderhover:o.colors.white,border:o.colors.white,active:r==="/policies/privacy"}),e.jsx($,{path:"copyright",text:n("copyright"),bgcolor:r==="/policies/copyright"?o.colors.secondary:o.colors.quaternary,bghover:"",textcolor:o.colors.white,texthover:o.colors.white,borderhover:o.colors.white,border:o.colors.white,active:r==="/policies/copyright"}),e.jsx($,{path:"acceptable-use",text:n("acceptable_use"),bgcolor:r==="/policies/acceptable-use"?o.colors.secondary:o.colors.quaternary,bghover:"",textcolor:o.colors.white,texthover:o.colors.white,borderhover:o.colors.white,border:o.colors.white,active:r==="/policies/acceptable-use"})]}),e.jsx(Ne,{})]})}Oa.propTypes={children:a.node};const AB=_.section`
  ${({theme:t})=>h`
      animation: ${I} 500ms;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `}
`,PB=_.div`
  ${({theme:t})=>h`
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: ${t.spacings.xlarge};

      padding: ${t.spacings.xlarge};
      @media ${t.medias.smallpc}{
        width: 100%;
      }

      @media ${t.spacings.mobile} {
        padding: ${t.spacings.medium};
      }

     ${ae} {
      gap: ${t.spacings.small};

      ${pe} {
        margin-bottom: none;
      }

      ${Z} {
        
        display: inline-block;

      }
  `}
`;function Na({children:t}){const{t:s}=w();return e.jsx(AB,{children:e.jsxs(PB,{children:[e.jsx(G,{text:s("privacy_police_title"),uppercase:!0}),e.jsxs(z,{children:[e.jsx(y,{text:s("privacy_police_text_1")}),e.jsx(y,{text:s("privacy_police_text_2")}),e.jsx(y,{text:s("privacy_police_text_3")}),e.jsx(y,{text:s("privacy_police_text_4")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("information_we_collect_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("information_we_collect_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("information_we_collect_subtitle_1"),as:"h4"}),e.jsx(y,{text:s("information_we_collect_text_2")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("information_we_collect_subtitle_2"),as:"h4"}),e.jsx(y,{text:s("information_we_collect_text_3")}),e.jsx(y,{text:s("information_we_collect_text_4")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("information_we_collect_subtitle_3"),as:"h4"}),e.jsx(y,{text:s("information_we_collect_text_5")}),e.jsx(y,{text:s("information_we_collect_text_6")}),e.jsx(y,{text:s("information_we_collect_text_7")}),e.jsx(y,{text:s("information_we_collect_text_8")}),e.jsx(y,{text:s("information_we_collect_text_9")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("information_we_collect_subtitle_4"),as:"h4"}),e.jsx(y,{text:s("information_we_collect_text_10")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_use_information_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("how_use_information_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_use_information_subtitle_1"),as:"h4"}),e.jsx(y,{text:s("how_use_information_text_2")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_use_information_subtitle_2"),as:"h4"}),e.jsx(y,{text:s("how_use_information_text_3")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_use_information_subtitle_3"),as:"h4"}),e.jsx(y,{text:s("how_use_information_text_4")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_use_information_subtitle_4"),as:"h4"}),e.jsx(y,{text:s("how_use_information_text_5")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_use_information_subtitle_5"),as:"h4"}),e.jsx(y,{text:s("how_use_information_text_6")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_use_information_subtitle_6"),as:"h4"}),e.jsx(y,{text:s("how_use_information_text_7")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_use_information_subtitle_7"),as:"h4"}),e.jsx(y,{text:s("how_use_information_text_8")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_use_information_subtitle_8"),as:"h4"}),e.jsx(y,{text:s("how_use_information_text_9")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("publicly_available_information_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("publicly_available_information_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_we_share_your_information_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("how_we_share_your_information_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_we_share_your_information_subtitle_1"),as:"h4"}),e.jsx(y,{text:s("how_we_share_your_information_text_2")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_we_share_your_information_subtitle_2"),as:"h4"}),e.jsx(y,{text:s("how_we_share_your_information_text_3")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_we_share_your_information_subtitle_3"),as:"h4"}),e.jsx(y,{text:s("how_we_share_your_information_text_4")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_we_share_your_information_subtitle_4"),as:"h4"}),e.jsx(y,{text:s("how_we_share_your_information_text_5")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("how_we_share_your_information_subtitle_5"),as:"h4"}),e.jsx(y,{text:s("how_we_share_your_information_text_6")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("our_use_of_cookies_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("our_use_of_cookies_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("our_use_of_cookies_subtitle_1"),as:"h4"}),e.jsx(y,{text:s("our_use_of_cookies_text_2")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("our_use_of_cookies_subtitle_2"),as:"h4"}),e.jsxs(y,{children:[s("our_use_of_cookies_text_3")," ",e.jsx(c,{text:s("our_use_of_cookies_link_1"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("our_use_of_cookies_text_4")," ",e.jsx(c,{text:s("our_use_of_cookies_link_2"),color:o.colors.lightprimary,hovercolor:o.colors.primary})]})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("our_use_of_cookies_subtitle_3"),as:"h4"}),e.jsx(y,{text:s("our_use_of_cookies_text_5")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("our_use_of_cookies_subtitle_4"),as:"h4"}),e.jsx(y,{text:s("our_use_of_cookies_text_6")}),e.jsxs(y,{children:[s("our_use_of_cookies_text_7")," ",e.jsx(c,{text:s("our_use_of_cookies_link_3"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("our_use_of_cookies_text_8")," ",e.jsx(c,{text:s("our_use_of_cookies_link_4"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("our_use_of_cookies_text_9")," ",e.jsx(c,{text:s("our_use_of_cookies_link_5"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("our_use_of_cookies_text_10")," ",e.jsx(c,{text:s("our_use_of_cookies_link_6"),color:o.colors.lightprimary,hovercolor:o.colors.primary})]})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("security_of_your_information_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("security_of_your_information_text_1")}),e.jsx(y,{text:s("security_of_your_information_text_2")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("acess_personal_information_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("acess_personal_information_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("your_choices_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("your_choices_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("children_under_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("children_under_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("third_party_links_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("third_party_links_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("changes_privacy_policy_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("changes_privacy_policy_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("privacy_contact_us_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("privacy_contact_us_text_1")})]})]})})}Na.propTypes={children:a.node};const EB=_.section`
  ${({theme:t})=>h`
      animation: ${I} 500ms;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `}
`,zB=_.div`
  ${({theme:t})=>h`
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: ${t.spacings.xlarge};

      padding: ${t.spacings.xlarge};
      @media ${t.medias.smallpc}{
        width: 100%;
      }

      @media ${t.spacings.mobile} {
        padding: ${t.spacings.medium};
      }

      
     ${ae} {
      gap: ${t.spacings.small};

      ${pe} {
        margin-bottom: none;
      }

      ${Z} {
        
        display: inline-block;

      }
  `}
`;function Ma({children:t}){const{t:s}=w();return e.jsx(EB,{children:e.jsxs(zB,{children:[e.jsx(G,{text:s("copyright_policy_title"),uppercase:!0}),e.jsxs(z,{children:[e.jsx(y,{text:s("copyright_policy_text_1")}),e.jsx(y,{text:s("copyright_policy_text_2")}),e.jsx(y,{text:s("copyright_policy_text_3")}),e.jsx(y,{text:s("copyright_policy_text_4")}),e.jsx(y,{text:s("copyright_policy_text_5")}),e.jsx(y,{text:s("copyright_policy_text_6")}),e.jsx(y,{text:s("copyright_policy_text_7")}),e.jsx(y,{text:s("copyright_policy_text_8")}),e.jsx(y,{text:s("copyright_policy_text_9")}),e.jsx(y,{text:s("copyright_policy_text_10")}),e.jsx(y,{text:s("copyright_policy_text_11")}),e.jsx(y,{text:s("copyright_policy_text_12")}),e.jsx(y,{text:s("copyright_policy_text_13")}),e.jsx(y,{text:s("copyright_policy_text_14")}),e.jsx(y,{text:s("copyright_policy_text_15")}),e.jsx(y,{text:s("copyright_policy_text_16")}),e.jsx(y,{text:s("copyright_policy_text_17")}),e.jsx(y,{text:s("copyright_policy_text_18")}),e.jsx(y,{text:s("copyright_policy_text_19")}),e.jsx(y,{text:s("copyright_policy_text_20")}),e.jsx(y,{text:s("copyright_policy_text_21")}),e.jsx(y,{text:s("copyright_policy_text_22")})]})]})})}Ma.propTypes={children:a.node};const DB=_.section`
  ${({theme:t})=>h`
      animation: ${I} 500ms;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `}
`,qB=_.div`
  ${({theme:t})=>h`
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: ${t.spacings.xlarge};

      padding: ${t.spacings.xlarge};
      @media ${t.medias.smallpc}{
        width: 100%;
      }

      @media ${t.spacings.mobile} {
        padding: ${t.spacings.medium};
      }

     ${ae} {
      gap: ${t.spacings.small};

      ${pe} {
        margin-bottom: none;
      }

      ${Z} {
        
        display: inline-block;

      }
  `}
`;function La({children:t}){const{t:s}=w();return e.jsx(DB,{children:e.jsxs(qB,{children:[e.jsx(G,{text:s("acceptable_use_police_title"),uppercase:!0}),e.jsxs(z,{children:[e.jsxs(y,{children:[s("acceptable_use_police_text_1")," ",e.jsx(c,{text:s("acceptable_use_police_link_1"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("acceptable_use_police_text_2")," "]}),e.jsxs(y,{children:[s("acceptable_use_police_text_3")," ",e.jsx(c,{text:s("acceptable_use_police_link_2"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," ",s("acceptable_use_police_text_4")," "]})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("no_security_violations_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("no_security_violations_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("no_security_violations_subtitle_1"),as:"h4"}),e.jsx(y,{text:s("no_security_violations_text_2")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("no_security_violations_subtitle_2"),as:"h4"}),e.jsx(y,{text:s("no_security_violations_text_3")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("no_security_violations_subtitle_3"),as:"h4"}),e.jsx(y,{text:s("no_security_violations_text_4")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("no_network_abuse_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("no_network_abuse_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("no_network_abuse_subtitle_1"),as:"h4"}),e.jsx(y,{text:s("no_network_abuse_text_2")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("no_network_abuse_subtitle_2"),as:"h4"}),e.jsx(y,{text:s("no_network_abuse_text_3")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("no_network_abuse_subtitle_3"),as:"h4"}),e.jsx(y,{text:s("no_network_abuse_text_4")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("no_network_abuse_subtitle_4"),as:"h4"}),e.jsx(y,{text:s("no_network_abuse_text_5")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("no_network_abuse_subtitle_5"),as:"h4"}),e.jsx(y,{text:s("no_network_abuse_text_6")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("authorized_use_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("authorized_use_text_1")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("monitoring_enforcement_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("monitoring_enforcement_text_1")}),e.jsx(y,{text:s("monitoring_enforcement_text_2")}),e.jsx(y,{text:s("monitoring_enforcement_text_3")}),e.jsx(y,{text:s("monitoring_enforcement_text_4")}),e.jsxs(y,{children:[s("monitoring_enforcement_text_5")," ",e.jsx(c,{text:s("monitoring_enforcement_link_1"),color:o.colors.lightprimary,hovercolor:o.colors.primary})," "]}),e.jsx(y,{text:s("monitoring_enforcement_text_6")}),e.jsx(y,{text:s("monitoring_enforcement_text_7")})]}),e.jsxs(z,{children:[e.jsx(k,{text:s("reporting_violations_policy_title"),as:"h3",uppercase:!0}),e.jsx(y,{text:s("reporting_violations_policy_text_1")}),e.jsx(y,{text:s("reporting_violations_policy_text_2")}),e.jsx(y,{text:s("reporting_violations_policy_text_3")})]})]})})}La.propTypes={children:a.node};const IB=_.article`
  ${({theme:t})=>h`
     text-align: center;
     display: flex;
     flex-direction: column;

     ${fe} {

      .swiper-slide {
       > ${Z} {
         gap: ${t.spacings.small};
            > img {
              width: 100%;
              height: 100%;
              max-width: 600px;
              border-radius: 12px
           }
      }
      }
     }

     & ${J} {
      animation: ${I} 500ms;

     }

     & ${P} {
      background-image: linear-gradient(to right, ${t.colors.lightprimary}, ${t.colors.lightsecondary});
      padding: ${t.spacings.xsmall};
      border-radius: 12px;
      border: ${t.borders.white};

      @media ${t.medias.mobile} {
        padding: ${t.spacings.xxsmall};
      }

     }

     > ${ke} {
        text-align: center;
        margin-bottom: 0;
        padding: ${t.spacings.xsmall};
        animation: ${I} 500ms;

     }

     > ${se} {
      animation: ${I} 500ms;
     }

  `}
`;function Fa(){p.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const{t}=w();return e.jsxs(IB,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(G,{text:t("welcome_t2s_telemedicine_usa"),uppercase:!0}),e.jsx(y,{text:t("telemedicine_usa_text_1")}),e.jsx(y,{text:t("telemedicine_usa_text_2")}),e.jsx(Me,{children:e.jsxs(J,{children:[e.jsx(P,{children:t("telemedicine_usa_step_1")}),e.jsx(P,{children:t("telemedicine_usa_step_2")}),e.jsx(P,{children:t("telemedicine_usa_step_3")}),e.jsx(P,{children:t("telemedicine_usa_step_4")})]})})]}),e.jsxs(U,{autoplay:!0,slidesperview:3,children:[e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})})]}),e.jsx(ce,{items:O.photos.benefits,title:t("others_t2s_benefits")}),e.jsxs(U,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-2.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:O.events}),e.jsx(ye,{title:t("social"),size:"400px",items:O.news}),e.jsx(F,{title:t("news"),type:"news",items:O.news})]})]})}Fa.propTypes={};const RB=_.article`
  ${({theme:t})=>h`
     display: flex;
     flex-direction: column;

     ${we} {
      display: flex;
      min-width: 700px;
      height: auto;
      align-items: center;
      justify-content: center;

      @media ${t.medias.smallpc} {
        min-width: 0px;
      }

      ${W} {
      display: flex;
      align-items: center;
      justify-content: center;

      @media ${t.medias.smallpc} {
        flex-direction: row;
      }

      @media ${t.medias.tablet} {
        flex-direction: column;
      }

      
      }
  

      ${ae} {
        width: 100%;
      }
     }

     ${fe} {

      .swiper-slide {
       > ${Z} {
         gap: ${t.spacings.small};
            > img {
              width: 100%;
              height: 100%;
              max-width: 600px;
              border-radius: 12px
           }
      }
      }
     }

     & ${J} {
      animation: ${I} 500ms;

     }

     & ${P} {
      background-image: linear-gradient(to right, ${t.colors.lightprimary}, ${t.colors.lightsecondary});
      padding: ${t.spacings.xsmall};
      border-radius: 12px;
      border: ${t.borders.white};

      @media ${t.medias.mobile} {
        padding: ${t.spacings.xxsmall};
      }

     }

     > ${ke} {
        text-align: center;
        margin-bottom: 0;
        padding: ${t.spacings.xsmall};
        animation: ${I} 500ms;

     }

     > ${se} {
      animation: ${I} 500ms;
     }

  `}
`;function Va(){p.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const{t}=w(),[s,i]=p.useState({name:"",email:"",zipCode:"",street:"",country:"",state:"",city:"",phoneNumber:""});return console.log(s),e.jsxs(RB,{children:[e.jsxs(ve,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-1.png",children:[e.jsx(G,{text:t("welcome_t2s_solar"),uppercase:!0}),e.jsx(y,{text:t("solar_text_1")}),e.jsx(y,{text:t("solar_text_2")}),e.jsx(Me,{children:e.jsxs(J,{children:[e.jsx(P,{children:t("solar_step_1")}),e.jsx(P,{children:t("solar_step_2")}),e.jsx(P,{children:t("solar_step_3")}),e.jsx(P,{children:t("solar_step_4")})]})})]}),e.jsxs(U,{autoplay:!0,slidesperview:3,children:[e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})}),e.jsx(c,{path:"https://beneficios.plataformalions.com/categoria/novidades/",newtab:!0,children:e.jsx("img",{src:"/assets/images/others/business.png",alt:""})})]}),e.jsx(je,{children:e.jsxs(we,{children:[e.jsx(k,{text:"solar_form_title",uppercase:!0}),e.jsxs(me,{children:[e.jsxs(B,{children:[e.jsxs(z,{children:[e.jsx(T,{type:"text",name:"solarCompleteName",id:"solarCompleteName_input",placeholder:t("owner_house_complete_name"),title:t("complete_name"),required:!0,value:s.name,onChange:r=>i(l=>({...l,name:r.target.value}))}),e.jsx(T,{type:"email",name:"solarEmail",id:"solarEmail_input",placeholder:t("email"),title:t("email"),required:!0,value:s.email,onChange:r=>i(l=>({...l,email:r.target.value}))}),e.jsx(T,{type:"number",name:"solarZipCode_input",id:"solarZipCode_input",title:t("zip_code"),placeholder:t("zip_code"),required:!0,value:s.zipCode,onChange:r=>i(l=>({...l,zipCode:r.target.value}))}),e.jsx(T,{type:"text",name:"solarStreet_input",id:"solarStreet_input",title:t("street"),placeholder:t("street_name"),required:!0,value:s.street,onChange:r=>i(l=>({...l,street:r.target.value}))})]}),e.jsxs(z,{children:[e.jsx(T,{type:"text",name:"solarCountry_input",id:"solarCountry_input",title:t("country"),placeholder:t("country"),required:!0,value:s.country,onChange:r=>i(l=>({...l,country:r.target.value}))}),e.jsx(T,{type:"text",name:"solarState_input",id:"solarState_input",title:t("state"),placeholder:t("state"),required:!0,value:s.state,onChange:r=>i(l=>({...l,state:r.target.value}))}),e.jsx(T,{type:"text",name:"solarCity_input",id:"solarCity_input",title:t("city"),placeholder:t("city"),required:!0,value:s.city,onChange:r=>i(l=>({...l,city:r.target.value}))}),e.jsx(T,{type:"number",name:"solarPhoneNumber",id:"solarPhoneNumber_input",placeholder:t("your_phone_number"),title:t("phone_number"),required:!0,value:s.phoneNumber,onChange:r=>i(l=>({...l,phoneNumber:r.target.value}))})]})]}),e.jsx(xe,{name:"solarForm_submit",id:"solarForm_submit",value:t("confirm")})]})]})}),e.jsx(ce,{items:O.photos.benefits,title:t("others_t2s_benefits")}),e.jsxs(U,{backgroundimagesrc:"/assets/images/backgrounds/slider-bg-2.png",gradientdirection:"to top",children:[e.jsx(F,{title:t("events"),type:"events",items:O.events}),e.jsx(ye,{title:t("social"),size:"400px",items:O.news}),e.jsx(F,{title:t("news"),type:"news",items:O.news})]})]})}Va.propTypes={};gn();xn.createRoot(document.getElementById("root")).render(e.jsx(yn.StrictMode,{children:e.jsx(fn,{theme:o,children:e.jsx(bn,{children:e.jsx(vn,{i18n:Rs,children:e.jsx(pt,{children:e.jsx(Vt,{children:e.jsx(Sr,{children:e.jsx(Ir,{children:e.jsx(la,{children:e.jsx(Aa,{children:e.jsx(ba,{children:e.jsx(Ea,{children:e.jsxs(wa,{children:[e.jsx(jn,{}),e.jsxs(wn,{children:[e.jsx(v,{path:"/",element:e.jsx(Yl,{})}),e.jsx(v,{path:"/logout",element:e.jsx(Xr,{})}),e.jsx(v,{path:"/register",element:e.jsx(Fn,{})}),e.jsx(v,{path:"/login",element:e.jsx(Rn,{})}),e.jsx(v,{path:"/forgot-password",element:e.jsx(Mr,{})}),e.jsx(v,{path:"/reset-password",element:e.jsx(Xp,{})}),e.jsxs(v,{path:"/policies",element:e.jsx(Oa,{}),children:[e.jsx(v,{path:"terms-of-use",element:e.jsx(Ra,{})}),e.jsx(v,{path:"privacy",element:e.jsx(Na,{})}),e.jsx(v,{path:"copyright",element:e.jsx(Ma,{})}),e.jsx(v,{path:"acceptable-use",element:e.jsx(La,{})})]}),e.jsxs(v,{path:"/benefits",element:e.jsx(Zr,{}),children:[e.jsx(v,{path:"",element:e.jsx(ha,{})}),e.jsx(v,{path:"club",element:e.jsx(Fo,{})}),e.jsx(v,{path:"investments",element:e.jsx(ea,{})}),e.jsx(v,{path:"interchange",element:e.jsx(ca,{})}),e.jsx(v,{path:"english",element:e.jsx(pa,{})}),e.jsx(v,{path:"crypto-wallet",element:e.jsx(da,{})}),e.jsx(v,{path:"crowdfunding",element:e.jsx(ua,{})}),e.jsx(v,{path:"studies",element:e.jsx(_a,{})}),e.jsx(v,{path:"american-studies",element:e.jsx(ga,{})}),e.jsx(v,{path:"lions-platform",element:e.jsx(ma,{})}),e.jsx(v,{path:"benefits-club",element:e.jsx(Fo,{})}),e.jsx(v,{path:"events",element:e.jsx(ta,{items:O.events})}),e.jsx(v,{path:"telemedicine-usa",element:e.jsx(Fa,{})}),e.jsx(v,{path:"solar",element:e.jsx(Va,{})})]}),e.jsxs(v,{path:"/users",element:e.jsx(sa,{}),children:[e.jsx(v,{path:"player",element:e.jsx(ia,{})}),e.jsx(v,{path:"staff",element:e.jsx(Ia,{})}),e.jsx(v,{path:"club",element:e.jsx(ra,{})})]}),e.jsxs(v,{path:"/player-dashboard/",element:e.jsx(cl,{}),children:[e.jsx(v,{path:"",element:e.jsx(Zp,{})}),e.jsx(v,{path:"profile",element:e.jsx(Ap,{})}),e.jsx(v,{path:"profile-edit",element:e.jsx(ot,{type:"player"})}),e.jsx(v,{path:"opportunities",element:e.jsx(tt,{})}),e.jsx(v,{path:"scouts",element:e.jsx(_t,{})}),e.jsx(v,{path:"clubs",element:e.jsx(ht,{})}),e.jsx(v,{path:"favorites",element:e.jsx(Fr,{})}),e.jsx(v,{path:"contacts",element:e.jsx(Hr,{})}),e.jsx(v,{path:"events",element:e.jsx(gt,{})}),e.jsx(v,{path:"friends",element:e.jsx(He,{friends:mo.friends})}),e.jsx(v,{path:"store",element:e.jsx(rt,{})}),e.jsx(v,{path:"my-affiliates",element:e.jsx(it,{affiliates:O.users.scouts})}),e.jsx(v,{path:"s2t+",element:e.jsx(st,{})})]}),e.jsxs(v,{path:"/staff-dashboard/",element:e.jsx(ku,{}),children:[e.jsx(v,{path:"",element:e.jsx(wu,{})}),e.jsx(v,{path:"profile",element:e.jsx(bu,{})}),e.jsx(v,{path:"profile-edit",element:e.jsx(ot,{type:"staff"})}),e.jsx(v,{path:"opportunities",element:e.jsx(tt,{})}),e.jsx(v,{path:"scouts",element:e.jsx(_t,{})}),e.jsx(v,{path:"clubs",element:e.jsx(ht,{})}),e.jsx(v,{path:"favorites",element:e.jsx(Gr,{})}),e.jsx(v,{path:"contacts",element:e.jsx("h1",{children:"Em construção... :)"})}),e.jsx(v,{path:"events",element:e.jsx(gt,{})}),e.jsx(v,{path:"friends",element:e.jsx(He,{friends:mo.friends})}),e.jsx(v,{path:"store",element:e.jsx(rt,{})}),e.jsx(v,{path:"my-affiliates",element:e.jsx(it,{affiliates:O.users.scouts})}),e.jsx(v,{path:"s2t+",element:e.jsx(st,{})})]}),e.jsxs(v,{path:"/business-man-dashboard/",element:e.jsx(yB,{}),children:[e.jsx(v,{path:"",element:e.jsx(bB,{})}),e.jsx(v,{path:"profile",element:e.jsx(wB,{})}),e.jsx(v,{path:"profile-edit",element:e.jsx(ot,{type:"business-man"})}),e.jsx(v,{path:"opportunities",element:e.jsx(tt,{})}),e.jsx(v,{path:"scouts",element:e.jsx(_t,{})}),e.jsx(v,{path:"clubs",element:e.jsx(ht,{})}),e.jsx(v,{path:"favorites",element:e.jsx(qa,{})}),e.jsx(v,{path:"contacts",element:e.jsx("h1",{children:"Em construção... :)"})}),e.jsx(v,{path:"events",element:e.jsx(gt,{})}),e.jsx(v,{path:"friends",element:e.jsx(He,{friends:mo.friends})}),e.jsx(v,{path:"store",element:e.jsx(rt,{})}),e.jsx(v,{path:"my-affiliates",element:e.jsx(it,{affiliates:O.users.scouts})}),e.jsx(v,{path:"s2t+",element:e.jsx(st,{})})]}),e.jsxs(v,{path:"/club-dashboard/",element:e.jsx(Md,{}),children:[e.jsx(v,{path:"",element:e.jsx(ks,{})}),e.jsx(v,{path:"profile",element:e.jsx(js,{})}),e.jsx(v,{path:"my-squad",element:e.jsx(oo,{})}),e.jsx(v,{path:"profile-edit",element:e.jsx(ot,{type:"club"})}),e.jsx(v,{path:"opportunities",element:e.jsx(tt,{})}),e.jsx(v,{path:"my-opportunities",element:e.jsx(to,{opportunities:O.proposals.male.professional.clubs})}),e.jsx(v,{path:"scouts",element:e.jsx(_t,{})}),e.jsx(v,{path:"clubs",element:e.jsx(ht,{})}),e.jsx(v,{path:"players",element:e.jsx(Xt,{})}),e.jsx(v,{path:"favorites",element:e.jsx(ho,{})}),e.jsx(v,{path:"events",element:e.jsx(gt,{})}),e.jsx(v,{path:"contacts",element:e.jsx("h1",{children:"Em construção... :)"})}),e.jsx(v,{path:"friends",element:e.jsx(He,{friends:go.friends})}),e.jsx(v,{path:"store",element:e.jsx(rt,{})}),e.jsx(v,{path:"my-events",element:e.jsx(xo,{events:O.events})}),e.jsx(v,{path:"my-affiliates",element:e.jsx(it,{affiliates:O.users.scouts})}),e.jsx(v,{path:"s2t+",element:e.jsx(st,{})})]}),e.jsxs(v,{path:"/league-dashboard/",element:e.jsx(Ju,{}),children:[e.jsx(v,{path:"",element:e.jsx(ks,{})}),e.jsx(v,{path:"profile",element:e.jsx(js,{})}),e.jsx(v,{path:"my-squad",element:e.jsx(oo,{})}),e.jsx(v,{path:"profile-edit",element:e.jsx(ot,{type:"league"})}),e.jsx(v,{path:"opportunities",element:e.jsx(tt,{})}),e.jsx(v,{path:"my-opportunities",element:e.jsx(to,{opportunities:O.proposals.male.professional.agents})}),e.jsx(v,{path:"scouts",element:e.jsx(_t,{})}),e.jsx(v,{path:"clubs",element:e.jsx(ht,{})}),e.jsx(v,{path:"players",element:e.jsx(Xt,{})}),e.jsx(v,{path:"favorites",element:e.jsx(ho,{})}),e.jsx(v,{path:"events",element:e.jsx(gt,{})}),e.jsx(v,{path:"contacts",element:e.jsx("h1",{children:"Em construção... :)"})}),e.jsx(v,{path:"friends",element:e.jsx(He,{friends:fa.friends})}),e.jsx(v,{path:"store",element:e.jsx(rt,{})}),e.jsx(v,{path:"my-events",element:e.jsx(xo,{events:O.events})}),e.jsx(v,{path:"my-affiliates",element:e.jsx(it,{affiliates:O.users.scouts})}),e.jsx(v,{path:"s2t+",element:e.jsx(st,{})})]}),e.jsxs(v,{path:"/agency-dashboard/",element:e.jsx(lB,{}),children:[e.jsx(v,{path:"",element:e.jsx(pB,{})}),e.jsx(v,{path:"profile",element:e.jsx(mB,{})}),e.jsx(v,{path:"my-squad",element:e.jsx(oo,{})}),e.jsx(v,{path:"profile-edit",element:e.jsx(ot,{type:"agency"})}),e.jsx(v,{path:"opportunities",element:e.jsx(tt,{})}),e.jsx(v,{path:"my-opportunities",element:e.jsx(to,{opportunities:O.proposals.male.professional.clubs})}),e.jsx(v,{path:"scouts",element:e.jsx(_t,{})}),e.jsx(v,{path:"clubs",element:e.jsx(ht,{})}),e.jsx(v,{path:"players",element:e.jsx(Xt,{})}),e.jsx(v,{path:"favorites",element:e.jsx(Pa,{})}),e.jsx(v,{path:"events",element:e.jsx(gt,{})}),e.jsx(v,{path:"contacts",element:e.jsx("h1",{children:"Em construção... :)"})}),e.jsx(v,{path:"friends",element:e.jsx(He,{friends:Ta.friends})}),e.jsx(v,{path:"store",element:e.jsx(rt,{})}),e.jsx(v,{path:"my-events",element:e.jsx(xo,{events:O.events})}),e.jsx(v,{path:"my-affiliates",element:e.jsx(it,{affiliates:O.users.scouts})}),e.jsx(v,{path:"s2t+",element:e.jsx(st,{})})]}),e.jsxs(v,{path:"/university-dashboard/",element:e.jsx(zp,{}),children:[e.jsx(v,{path:"",element:e.jsx(xu,{})}),e.jsx(v,{path:"profile",element:e.jsx(hu,{})}),e.jsx(v,{path:"my-squad",element:e.jsx(oo,{})}),e.jsx(v,{path:"profile-edit",element:e.jsx(ot,{type:"university"})}),e.jsx(v,{path:"opportunities",element:e.jsx(tt,{})}),e.jsx(v,{path:"my-opportunities",element:e.jsx(to,{})}),e.jsx(v,{path:"scouts",element:e.jsx(_t,{})}),e.jsx(v,{path:"clubs",element:e.jsx(ht,{})}),e.jsx(v,{path:"players",element:e.jsx(Xt,{})}),e.jsx(v,{path:"favorites",element:e.jsx(ho,{})}),e.jsx(v,{path:"events",element:e.jsx(gt,{})}),e.jsx(v,{path:"contacts",element:e.jsx("h1",{children:"Em construção... :)"})}),e.jsx(v,{path:"friends",element:e.jsx(He,{friends:go.friends})}),e.jsx(v,{path:"store",element:e.jsx(rt,{})}),e.jsx(v,{path:"my-affiliates",element:e.jsx(it,{affiliates:O.users.scouts})}),e.jsx(v,{path:"s2t+",element:e.jsx(st,{})})]}),e.jsxs(v,{path:"/fan-dashboard/",element:e.jsx(tB,{}),children:[e.jsx(v,{path:"",element:e.jsx(aB,{})}),e.jsx(v,{path:"profile",element:e.jsx(sB,{})}),e.jsx(v,{path:"profile-edit",element:e.jsx(ot,{type:"fan"})}),e.jsx(v,{path:"opportunities",element:e.jsx(tt,{})}),e.jsx(v,{path:"scouts",element:e.jsx(_t,{})}),e.jsx(v,{path:"clubs",element:e.jsx(ht,{})}),e.jsx(v,{path:"players",element:e.jsx(Xt,{})}),e.jsx(v,{path:"favorites",element:e.jsx(ka,{})}),e.jsx(v,{path:"events",element:e.jsx(gt,{})}),e.jsx(v,{path:"friends",element:e.jsx(He,{friends:va.friends})}),e.jsx(v,{path:"store",element:e.jsx(rt,{})}),e.jsx(v,{path:"my-affiliates",element:e.jsx(it,{affiliates:O.users.scouts})}),e.jsx(v,{path:"s2t+",element:e.jsx(st,{})})]}),e.jsxs(v,{path:"/user/:username",element:e.jsx(Nr,{}),children:[e.jsx(v,{path:"profile",element:e.jsx(Bp,{})}),e.jsx(v,{path:"squad",element:e.jsx(Xt,{})}),e.jsx(v,{path:"opportunities",element:e.jsx(tt,{})}),e.jsx(v,{path:"friends",element:e.jsx(He,{friends:go.friends})})]})]}),e.jsx(Kr,{})]})})})})})})})})})})})})}));
