var dy=Object.defineProperty;var hy=(n,e,t)=>e in n?dy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var yr=(n,e,t)=>hy(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hh="168",fy=0,vp=1,py=2,r_=1,my=2,ii=3,bi=0,an=1,oi=2,tr=0,Cs=1,yp=2,xp=3,Sp=4,gy=5,Pr=100,_y=101,vy=102,yy=103,xy=104,Sy=200,My=201,Ey=202,Ty=203,ud=204,dd=205,wy=206,Ay=207,by=208,Ry=209,Cy=210,Py=211,Ly=212,Iy=213,Dy=214,Ny=0,Uy=1,Fy=2,Zl=3,Oy=4,ky=5,By=6,zy=7,Vh=0,Hy=1,Vy=2,nr=0,Gy=1,Wy=2,Xy=3,s_=4,jy=5,$y=6,Yy=7,Mp="attached",Ky="detached",o_=300,Hs=301,Vs=302,hd=303,fd=304,Cc=306,Gs=1e3,Zi=1001,Ql=1002,Qt=1003,a_=1004,Fo=1005,gn=1006,Pl=1007,Mi=1008,Ri=1009,l_=1010,c_=1011,ta=1012,Gh=1013,zr=1014,Xn=1015,Ea=1016,Wh=1017,Xh=1018,Ws=1020,u_=35902,d_=1021,h_=1022,Rn=1023,f_=1024,p_=1025,Ps=1026,Xs=1027,jh=1028,$h=1029,m_=1030,Yh=1031,Kh=1033,Ll=33776,Il=33777,Dl=33778,Nl=33779,pd=35840,md=35841,gd=35842,_d=35843,vd=36196,yd=37492,xd=37496,Sd=37808,Md=37809,Ed=37810,Td=37811,wd=37812,Ad=37813,bd=37814,Rd=37815,Cd=37816,Pd=37817,Ld=37818,Id=37819,Dd=37820,Nd=37821,Ul=36492,Ud=36494,Fd=36495,g_=36283,Od=36284,kd=36285,Bd=36286,na=2300,ia=2301,nu=2302,Ep=2400,Tp=2401,wp=2402,qy=2500,Zy=0,__=1,zd=2,Qy=3200,Jy=3201,qh=0,ex=1,Yi="",qt="srgb",Bt="srgb-linear",Zh="display-p3",Pc="display-p3-linear",Jl="linear",ot="srgb",ec="rec709",tc="p3",qr=7680,Ap=519,tx=512,nx=513,ix=514,v_=515,rx=516,sx=517,ox=518,ax=519,Hd=35044,bp="300 es",Ei=2e3,nc=2001;class ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rp=1234567;const Vo=Math.PI/180,js=180/Math.PI;function $n(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Ot(n,e,t){return Math.max(e,Math.min(t,n))}function Qh(n,e){return(n%e+e)%e}function lx(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function cx(n,e,t){return n!==e?(t-n)/(e-n):0}function Go(n,e,t){return(1-t)*n+t*e}function ux(n,e,t,i){return Go(n,e,1-Math.exp(-t*i))}function dx(n,e=1){return e-Math.abs(Qh(n,e*2)-e)}function hx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function fx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function px(n,e){return n+Math.floor(Math.random()*(e-n+1))}function mx(n,e){return n+Math.random()*(e-n)}function gx(n){return n*(.5-Math.random())}function _x(n){n!==void 0&&(Rp=n);let e=Rp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vx(n){return n*Vo}function yx(n){return n*js}function xx(n){return(n&n-1)===0&&n!==0}function Sx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Mx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ex(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Je(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tx={DEG2RAD:Vo,RAD2DEG:js,generateUUID:$n,clamp:Ot,euclideanModulo:Qh,mapLinear:lx,inverseLerp:cx,lerp:Go,damp:ux,pingpong:dx,smoothstep:hx,smootherstep:fx,randInt:px,randFloat:mx,randFloatSpread:gx,seededRandom:_x,degToRad:vx,radToDeg:yx,isPowerOfTwo:xx,ceilPowerOfTwo:Sx,floorPowerOfTwo:Mx,setQuaternionFromProperEuler:Ex,normalize:Je,denormalize:Gn};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,i,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],y=r[0],m=r[3],f=r[6],g=r[1],_=r[4],x=r[7],b=r[2],A=r[5],w=r[8];return s[0]=o*y+a*g+l*b,s[3]=o*m+a*_+l*A,s[6]=o*f+a*x+l*w,s[1]=c*y+u*g+d*b,s[4]=c*m+u*_+d*A,s[7]=c*f+u*x+d*w,s[2]=h*y+p*g+v*b,s[5]=h*m+p*_+v*A,s[8]=h*f+p*x+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=t*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(iu.makeScale(e,t)),this}rotate(e){return this.premultiply(iu.makeRotation(-e)),this}translate(e,t){return this.premultiply(iu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const iu=new Oe;function y_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wx(){const n=ra("canvas");return n.style.display="block",n}const Cp={};function Ls(n){n in Cp||(Cp[n]=!0,console.warn(n))}function Ax(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Pp=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lp=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),po={[Bt]:{transfer:Jl,primaries:ec,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[qt]:{transfer:ot,primaries:ec,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Pc]:{transfer:Jl,primaries:tc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Lp),fromReference:n=>n.applyMatrix3(Pp)},[Zh]:{transfer:ot,primaries:tc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Lp),fromReference:n=>n.applyMatrix3(Pp).convertLinearToSRGB()}},bx=new Set([Bt,Pc]),$e={enabled:!0,_workingColorSpace:Bt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!bx.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=po[e].toReference,r=po[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return po[n].primaries},getTransfer:function(n){return n===Yi?Jl:po[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(po[e].luminanceCoefficients)}};function Is(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ru(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zr;class Rx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zr===void 0&&(Zr=ra("canvas")),Zr.width=e.width,Zr.height=e.height;const i=Zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ra("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Is(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Is(t[i]/255)*255):t[i]=Is(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cx=0;class x_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(su(r[o].image)):s.push(su(r[o]))}else s=su(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function su(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Px=0;class It extends ro{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Zi,r=Zi,s=gn,o=Mi,a=Rn,l=Ri,c=It.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=$n(),this.name="",this.source=new x_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Ql:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Ql:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=o_;It.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(p+1)/2,b=(f+1)/2,A=(u+h)/4,w=(d+y)/4,C=(v+m)/4;return _>x&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=w/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=C/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=C/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-y)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lx extends ro{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new It(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new x_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends Lx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class S_ extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ix extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=y;return}if(d!==y||l!==h||c!==p||u!==v){let m=1-a;const f=l*h+c*p+u*v+d*y,g=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const b=Math.sqrt(_),A=Math.atan2(b,f*g);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const x=a*g;if(l=l*m+h*x,c=c*m+p*x,u=u*m+v*x,d=d*m+y*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*d+l*p-c*h,e[t+1]=l*v+u*h+c*d-a*p,e[t+2]=c*v+u*p+a*h-l*d,e[t+3]=u*v-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ip.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ou.copy(this).projectOnVector(e),this.sub(ou)}reflect(e){return this.sub(ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ou=new P,Ip=new pr;class Zn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Oa.subVectors(this.max,mo),Qr.subVectors(e.a,mo),Jr.subVectors(e.b,mo),es.subVectors(e.c,mo),Ui.subVectors(Jr,Qr),Fi.subVectors(es,Jr),xr.subVectors(Qr,es);let t=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-xr.z,xr.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,xr.z,0,-xr.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-xr.y,xr.x,0];return!au(t,Qr,Jr,es,Oa)||(t=[1,0,0,0,1,0,0,0,1],!au(t,Qr,Jr,es,Oa))?!1:(ka.crossVectors(Ui,Fi),t=[ka.x,ka.y,ka.z],au(t,Qr,Jr,es,Oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new P,new P,new P,new P,new P,new P,new P,new P],Fn=new P,Fa=new Zn,Qr=new P,Jr=new P,es=new P,Ui=new P,Fi=new P,xr=new P,mo=new P,Oa=new P,ka=new P,Sr=new P;function au(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Sr.fromArray(n,s);const a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),c=t.dot(Sr),u=i.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Dx=new Zn,go=new P,lu=new P;class Dn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Dx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const t=go.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(lu)),this.expandByPoint(go.copy(e.center).sub(lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new P,cu=new P,Ba=new P,Oi=new P,uu=new P,za=new P,du=new P;class Lc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){cu.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(cu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ba),a=Oi.dot(this.direction),l=-Oi.dot(Ba),c=Oi.lengthSq(),u=Math.abs(1-o*o);let d,h,p,v;if(u>0)if(d=o*l-a,h=o*a-l,v=s*u,d>=0)if(h>=-v)if(h<=v){const y=1/u;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(cu).addScaledVector(Ba,h),p}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,r,s){uu.subVectors(t,e),za.subVectors(i,e),du.crossVectors(uu,za);let o=this.direction.dot(du),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(za.crossVectors(Oi,za));if(l<0)return null;const c=a*this.direction.dot(uu.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(du);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,i,r,s,o,a,l,c,u,d,h,p,v,y,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,h,p,v,y,m)}set(e,t,i,r,s,o,a,l,c,u,d,h,p,v,y,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,v=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,y=c*d;t[0]=h+y*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,y=c*d;t[0]=h-y*a,t[4]=-o*d,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,v=a*u,y=a*d;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,y=a*c;t[0]=l*u,t[4]=y-h*d,t[8]=v*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+v,t[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=o*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nx,e,Ux)}lookAt(e,t,i){const r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ki.crossVectors(i,fn),ki.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ki.crossVectors(i,fn)),ki.normalize(),Ha.crossVectors(fn,ki),r[0]=ki.x,r[4]=Ha.x,r[8]=fn.x,r[1]=ki.y,r[5]=Ha.y,r[9]=fn.y,r[2]=ki.z,r[6]=Ha.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],y=i[6],m=i[10],f=i[14],g=i[3],_=i[7],x=i[11],b=i[15],A=r[0],w=r[4],C=r[8],T=r[12],S=r[1],I=r[5],V=r[9],H=r[13],Y=r[2],K=r[6],W=r[10],q=r[14],D=r[3],j=r[7],Q=r[11],oe=r[15];return s[0]=o*A+a*S+l*Y+c*D,s[4]=o*w+a*I+l*K+c*j,s[8]=o*C+a*V+l*W+c*Q,s[12]=o*T+a*H+l*q+c*oe,s[1]=u*A+d*S+h*Y+p*D,s[5]=u*w+d*I+h*K+p*j,s[9]=u*C+d*V+h*W+p*Q,s[13]=u*T+d*H+h*q+p*oe,s[2]=v*A+y*S+m*Y+f*D,s[6]=v*w+y*I+m*K+f*j,s[10]=v*C+y*V+m*W+f*Q,s[14]=v*T+y*H+m*q+f*oe,s[3]=g*A+_*S+x*Y+b*D,s[7]=g*w+_*I+x*K+b*j,s[11]=g*C+_*V+x*W+b*Q,s[15]=g*T+_*H+x*q+b*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],y=e[7],m=e[11],f=e[15];return v*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-t*l*d+t*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],y=e[13],m=e[14],f=e[15],g=d*m*c-y*h*c+y*l*p-a*m*p-d*l*f+a*h*f,_=v*h*c-u*m*c-v*l*p+o*m*p+u*l*f-o*h*f,x=u*y*c-v*d*c+v*a*p-o*y*p-u*a*f+o*d*f,b=v*d*l-u*y*l-v*a*h+o*y*h+u*a*m-o*d*m,A=t*g+i*_+r*x+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=g*w,e[1]=(y*h*s-d*m*s-y*r*p+i*m*p+d*r*f-i*h*f)*w,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*f+i*l*f)*w,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*w,e[4]=_*w,e[5]=(u*m*s-v*h*s+v*r*p-t*m*p-u*r*f+t*h*f)*w,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*f-t*l*f)*w,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*w,e[8]=x*w,e[9]=(v*d*s-u*y*s-v*i*p+t*y*p+u*i*f-t*d*f)*w,e[10]=(o*y*s-v*a*s+v*i*c-t*y*c-o*i*f+t*a*f)*w,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*w,e[12]=b*w,e[13]=(u*y*r-v*d*r+v*i*h-t*y*h-u*i*m+t*d*m)*w,e[14]=(v*a*r-o*y*r-v*i*l+t*y*l+o*i*m-t*a*m)*w,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*h+t*a*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,v=s*d,y=o*u,m=o*d,f=a*d,g=l*c,_=l*u,x=l*d,b=i.x,A=i.y,w=i.z;return r[0]=(1-(y+f))*b,r[1]=(p+x)*b,r[2]=(v-_)*b,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(h+f))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(v+_)*w,r[9]=(m-g)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ts.set(r[0],r[1],r[2]).length();const o=ts.set(r[4],r[5],r[6]).length(),a=ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,u=1/o,d=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ei){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,v;if(a===Ei)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===nc)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ei){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*c,p=(i+r)*u;let v,y;if(a===Ei)v=(o+s)*d,y=-2*d;else if(a===nc)v=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ts=new P,On=new ke,Nx=new P(0,0,0),Ux=new P(1,1,1),ki=new P,Ha=new P,fn=new P,Dp=new ke,Np=new pr;class Qn{constructor(e=0,t=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Np.setFromEuler(this),this.setFromQuaternion(Np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fx=0;const Up=new P,ns=new pr,mi=new ke,Va=new P,_o=new P,Ox=new P,kx=new pr,Fp=new P(1,0,0),Op=new P(0,1,0),kp=new P(0,0,1),Bp={type:"added"},Bx={type:"removed"},is={type:"childadded",child:null},hu={type:"childremoved",child:null};class ct extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new P,t=new Qn,i=new pr,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new Oe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Fp,e)}rotateY(e){return this.rotateOnAxis(Op,e)}rotateZ(e){return this.rotateOnAxis(kp,e)}translateOnAxis(e,t){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fp,e)}translateY(e){return this.translateOnAxis(Op,e)}translateZ(e){return this.translateOnAxis(kp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Va.copy(e):Va.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(_o,Va,this.up):mi.lookAt(Va,_o,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(mi),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bp),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bx),hu.child=e,this.dispatchEvent(hu),hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bp),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,Ox),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,kx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ct.DEFAULT_UP=new P(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new P,gi=new P,fu=new P,_i=new P,rs=new P,ss=new P,zp=new P,pu=new P,mu=new P,gu=new P;class Wn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kn.subVectors(e,t),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kn.subVectors(r,t),gi.subVectors(i,t),fu.subVectors(e,t);const o=kn.dot(kn),a=kn.dot(gi),l=kn.dot(fu),c=gi.dot(gi),u=gi.dot(fu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static isFrontFacing(e,t,i,r){return kn.subVectors(i,t),gi.subVectors(e,t),kn.cross(gi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),kn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;rs.subVectors(r,i),ss.subVectors(s,i),pu.subVectors(e,i);const l=rs.dot(pu),c=ss.dot(pu);if(l<=0&&c<=0)return t.copy(i);mu.subVectors(e,r);const u=rs.dot(mu),d=ss.dot(mu);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(rs,o);gu.subVectors(e,s);const p=rs.dot(gu),v=ss.dot(gu);if(v>=0&&p<=v)return t.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(ss,a);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return zp.subVectors(s,r),a=(d-u)/(d-u+(p-v)),t.copy(r).addScaledVector(zp,a);const f=1/(m+y+h);return o=y*f,a=h*f,t.copy(i).addScaledVector(rs,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const M_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function _u(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Te{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=Qh(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=_u(o,s,e+1/3),this.g=_u(o,s,e),this.b=_u(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=M_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=ru(e.r),this.g=ru(e.g),this.b=ru(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return $e.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Ot(Vt.r*255,0,255))*65536+Math.round(Ot(Vt.g*255,0,255))*256+Math.round(Ot(Vt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Vt.copy(this),t);const i=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=qt){$e.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,r=Vt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(Ga);const i=Go(Bi.h,Ga.h,t),r=Go(Bi.s,Ga.s,t),s=Go(Bi.l,Ga.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Te;Te.NAMES=M_;let zx=0;class Yn extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Cs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=dd,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ud&&(i.blendSrc=this.blendSrc),this.blendDst!==dd&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ap&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ir extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new P,Wa=new Ne;class Jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ls("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hd&&(e.usage=this.usage),e}}class E_ extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class T_ extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vn extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Hx=0;const Tn=new ke,vu=new ct,os=new P,pn=new Zn,vo=new Zn,Pt=new P;class xn extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y_(e)?T_:E_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return vu.lookAt(e),vu.updateMatrix(),this.applyMatrix4(vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(pn.min,vo.min),pn.expandByPoint(Pt),Pt.addVectors(pn.max,vo.max),pn.expandByPoint(Pt)):(pn.expandByPoint(vo.min),pn.expandByPoint(vo.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(e,c),Pt.add(os)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new P,l[C]=new P;const c=new P,u=new P,d=new P,h=new Ne,p=new Ne,v=new Ne,y=new P,m=new P;function f(C,T,S){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(h),v.sub(h);const I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(I),a[C].add(y),a[T].add(y),a[S].add(y),l[C].add(m),l[T].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let C=0,T=g.length;C<T;++C){const S=g[C],I=S.start,V=S.count;for(let H=I,Y=I+V;H<Y;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new P,x=new P,b=new P,A=new P;function w(C){b.fromBufferAttribute(r,C),A.copy(b);const T=a[C];_.copy(T),_.sub(b.multiplyScalar(b.dot(T))).normalize(),x.crossVectors(A,T);const I=x.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,I)}for(let C=0,T=g.length;C<T;++C){const S=g[C],I=S.start,V=S.count;for(let H=I,Y=I+V;H<Y;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new Jt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hp=new ke,Mr=new Lc,Xa=new Dn,Vp=new P,as=new P,ls=new P,cs=new P,yu=new P,ja=new P,$a=new Ne,Ya=new Ne,Ka=new Ne,Gp=new P,Wp=new P,Xp=new P,qa=new P,Za=new P;class sn extends ct{constructor(e=new xn,t=new Ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(yu.fromBufferAttribute(d,e),o?ja.addScaledVector(yu,u):ja.addScaledVector(yu.sub(t),u))}t.add(ja)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(Xa.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Xa,Vp)===null||Mr.origin.distanceToSquared(Vp)>(e.far-e.near)**2))&&(Hp.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Hp),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const m=h[v],f=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,b=_;x<b;x+=3){const A=a.getX(x),w=a.getX(x+1),C=a.getX(x+2);r=Qa(this,f,e,i,c,u,d,A,w,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,f=y;m<f;m+=3){const g=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);r=Qa(this,o,e,i,c,u,d,g,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const m=h[v],f=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,b=_;x<b;x+=3){const A=x,w=x+1,C=x+2;r=Qa(this,f,e,i,c,u,d,A,w,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,f=y;m<f;m+=3){const g=m,_=m+1,x=m+2;r=Qa(this,o,e,i,c,u,d,g,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Vx(n,e,t,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===bi,a),l===null)return null;Za.copy(a),Za.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Za);return c<t.near||c>t.far?null:{distance:c,point:Za.clone(),object:n}}function Qa(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,as),n.getVertexPosition(l,ls),n.getVertexPosition(c,cs);const u=Vx(n,e,t,i,as,ls,cs,qa);if(u){r&&($a.fromBufferAttribute(r,a),Ya.fromBufferAttribute(r,l),Ka.fromBufferAttribute(r,c),u.uv=Wn.getInterpolation(qa,as,ls,cs,$a,Ya,Ka,new Ne)),s&&($a.fromBufferAttribute(s,a),Ya.fromBufferAttribute(s,l),Ka.fromBufferAttribute(s,c),u.uv1=Wn.getInterpolation(qa,as,ls,cs,$a,Ya,Ka,new Ne)),o&&(Gp.fromBufferAttribute(o,a),Wp.fromBufferAttribute(o,l),Xp.fromBufferAttribute(o,c),u.normal=Wn.getInterpolation(qa,as,ls,cs,Gp,Wp,Xp,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};Wn.getNormal(as,ls,cs,d.normal),u.face=d}return u}class Ta extends xn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(d,2));function v(y,m,f,g,_,x,b,A,w,C,T){const S=x/w,I=b/C,V=x/2,H=b/2,Y=A/2,K=w+1,W=C+1;let q=0,D=0;const j=new P;for(let Q=0;Q<W;Q++){const oe=Q*I-H;for(let Se=0;Se<K;Se++){const We=Se*S-V;j[y]=We*g,j[m]=oe*_,j[f]=Y,c.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[f]=A>0?1:-1,u.push(j.x,j.y,j.z),d.push(Se/w),d.push(1-Q/C),q+=1}}for(let Q=0;Q<C;Q++)for(let oe=0;oe<w;oe++){const Se=h+oe+K*Q,We=h+oe+K*(Q+1),G=h+(oe+1)+K*(Q+1),ne=h+(oe+1)+K*Q;l.push(Se,We,ne),l.push(We,G,ne),D+=6}a.addGroup(p,D,T),p+=D,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=$s(n[t]);for(const r in i)e[r]=i[r]}return e}function Gx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function w_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Wx={clone:$s,merge:Yt};var Xx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xx,this.fragmentShader=jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class A_ extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new P,jp=new Ne,$p=new Ne;class Zt extends A_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,jp,$p),t.subVectors($p,jp)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,ds=1;class $x extends ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(us,ds,e,t);r.layers=this.layers,this.add(r);const s=new Zt(us,ds,e,t);s.layers=this.layers,this.add(s);const o=new Zt(us,ds,e,t);o.layers=this.layers,this.add(o);const a=new Zt(us,ds,e,t);a.layers=this.layers,this.add(a);const l=new Zt(us,ds,e,t);l.layers=this.layers,this.add(l);const c=new Zt(us,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class b_ extends It{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yx extends Hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new b_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ta(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:tr});s.uniforms.tEquirect.value=t;const o=new sn(r,s),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=gn),new $x(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const xu=new P,Kx=new P,qx=new Oe;class Gi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xu.subVectors(i,t).cross(Kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qx.getNormalMatrix(e),r=this.coplanarPoint(xu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Dn,Ja=new P;class ef{constructor(e=new Gi,t=new Gi,i=new Gi,r=new Gi,s=new Gi,o=new Gi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],v=r[9],y=r[10],m=r[11],f=r[12],g=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,m-p,x-f).normalize(),i[1].setComponents(l+s,h+c,m+p,x+f).normalize(),i[2].setComponents(l+o,h+u,m+v,x+g).normalize(),i[3].setComponents(l-o,h-u,m-v,x-g).normalize(),i[4].setComponents(l-a,h-d,m-y,x-_).normalize(),t===Ei)i[5].setComponents(l+a,h+d,m+y,x+_).normalize();else if(t===nc)i[5].setComponents(a,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ja.x=r.normal.x>0?e.max.x:e.min.x,Ja.y=r.normal.y>0?e.max.y:e.min.y,Ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function R_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Zx(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,a),d.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let p=0,v=h.length;p<v;p++){const y=h[p];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ic extends xn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,p=[],v=[],y=[],m=[];for(let f=0;f<u;f++){const g=f*h-o;for(let _=0;_<c;_++){const x=_*d-s;v.push(x,-g,0),y.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const _=g+c*f,x=g+c*(f+1),b=g+1+c*(f+1),A=g+1+c*f;p.push(_,x,A),p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new vn(v,3)),this.setAttribute("normal",new vn(y,3)),this.setAttribute("uv",new vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,aS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,SS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ES=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RS="gl_FragColor = linearToOutputTexel( gl_FragColor );",CS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,LS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,US=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,WS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$S=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ME=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Qx,alphahash_pars_fragment:Jx,alphamap_fragment:eS,alphamap_pars_fragment:tS,alphatest_fragment:nS,alphatest_pars_fragment:iS,aomap_fragment:rS,aomap_pars_fragment:sS,batching_pars_vertex:oS,batching_vertex:aS,begin_vertex:lS,beginnormal_vertex:cS,bsdfs:uS,iridescence_fragment:dS,bumpmap_pars_fragment:hS,clipping_planes_fragment:fS,clipping_planes_pars_fragment:pS,clipping_planes_pars_vertex:mS,clipping_planes_vertex:gS,color_fragment:_S,color_pars_fragment:vS,color_pars_vertex:yS,color_vertex:xS,common:SS,cube_uv_reflection_fragment:MS,defaultnormal_vertex:ES,displacementmap_pars_vertex:TS,displacementmap_vertex:wS,emissivemap_fragment:AS,emissivemap_pars_fragment:bS,colorspace_fragment:RS,colorspace_pars_fragment:CS,envmap_fragment:PS,envmap_common_pars_fragment:LS,envmap_pars_fragment:IS,envmap_pars_vertex:DS,envmap_physical_pars_fragment:WS,envmap_vertex:NS,fog_vertex:US,fog_pars_vertex:FS,fog_fragment:OS,fog_pars_fragment:kS,gradientmap_pars_fragment:BS,lightmap_pars_fragment:zS,lights_lambert_fragment:HS,lights_lambert_pars_fragment:VS,lights_pars_begin:GS,lights_toon_fragment:XS,lights_toon_pars_fragment:jS,lights_phong_fragment:$S,lights_phong_pars_fragment:YS,lights_physical_fragment:KS,lights_physical_pars_fragment:qS,lights_fragment_begin:ZS,lights_fragment_maps:QS,lights_fragment_end:JS,logdepthbuf_fragment:eM,logdepthbuf_pars_fragment:tM,logdepthbuf_pars_vertex:nM,logdepthbuf_vertex:iM,map_fragment:rM,map_pars_fragment:sM,map_particle_fragment:oM,map_particle_pars_fragment:aM,metalnessmap_fragment:lM,metalnessmap_pars_fragment:cM,morphinstance_vertex:uM,morphcolor_vertex:dM,morphnormal_vertex:hM,morphtarget_pars_vertex:fM,morphtarget_vertex:pM,normal_fragment_begin:mM,normal_fragment_maps:gM,normal_pars_fragment:_M,normal_pars_vertex:vM,normal_vertex:yM,normalmap_pars_fragment:xM,clearcoat_normal_fragment_begin:SM,clearcoat_normal_fragment_maps:MM,clearcoat_pars_fragment:EM,iridescence_pars_fragment:TM,opaque_fragment:wM,packing:AM,premultiplied_alpha_fragment:bM,project_vertex:RM,dithering_fragment:CM,dithering_pars_fragment:PM,roughnessmap_fragment:LM,roughnessmap_pars_fragment:IM,shadowmap_pars_fragment:DM,shadowmap_pars_vertex:NM,shadowmap_vertex:UM,shadowmask_pars_fragment:FM,skinbase_vertex:OM,skinning_pars_vertex:kM,skinning_vertex:BM,skinnormal_vertex:zM,specularmap_fragment:HM,specularmap_pars_fragment:VM,tonemapping_fragment:GM,tonemapping_pars_fragment:WM,transmission_fragment:XM,transmission_pars_fragment:jM,uv_pars_fragment:$M,uv_pars_vertex:YM,uv_vertex:KM,worldpos_vertex:qM,background_vert:ZM,background_frag:QM,backgroundCube_vert:JM,backgroundCube_frag:eE,cube_vert:tE,cube_frag:nE,depth_vert:iE,depth_frag:rE,distanceRGBA_vert:sE,distanceRGBA_frag:oE,equirect_vert:aE,equirect_frag:lE,linedashed_vert:cE,linedashed_frag:uE,meshbasic_vert:dE,meshbasic_frag:hE,meshlambert_vert:fE,meshlambert_frag:pE,meshmatcap_vert:mE,meshmatcap_frag:gE,meshnormal_vert:_E,meshnormal_frag:vE,meshphong_vert:yE,meshphong_frag:xE,meshphysical_vert:SE,meshphysical_frag:ME,meshtoon_vert:EE,meshtoon_frag:TE,points_vert:wE,points_frag:AE,shadow_vert:bE,shadow_frag:RE,sprite_vert:CE,sprite_frag:PE},le={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},si={basic:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Yt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Yt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Yt([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Yt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Yt([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Yt([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Yt([le.common,le.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Yt([le.lights,le.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};si.physical={uniforms:Yt([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const el={r:0,b:0,g:0},Tr=new Qn,LE=new ke;function IE(n,e,t,i,r,s,o){const a=new Te(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?t:e).get(_)),_}function y(g){let _=!1;const x=v(g);x===null?f(a,l):x&&x.isColor&&(f(x,1),_=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(g,_){const x=v(_);x&&(x.isCubeTexture||x.mapping===Cc)?(u===void 0&&(u=new sn(new Ta(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:$s(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Tr.copy(_.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(LE.makeRotationFromEuler(Tr)),u.material.toneMapped=$e.getTransfer(x.colorSpace)!==ot,(d!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new sn(new Ic(2,2),new dr({name:"BackgroundMaterial",uniforms:$s(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=$e.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,_){g.getRGB(el,w_(n)),i.buffers.color.setClear(el.r,el.g,el.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(a,l)},render:y,addToRenderList:m}}function DE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,I,V,H,Y){let K=!1;const W=d(H,V,I);s!==W&&(s=W,c(s.object)),K=p(S,H,V,Y),K&&v(S,H,V,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(S,I,V,H),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,I,V){const H=V.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let K=Y[I.id];K===void 0&&(K={},Y[I.id]=K);let W=K[H];return W===void 0&&(W=h(l()),K[H]=W),W}function h(S){const I=[],V=[],H=[];for(let Y=0;Y<t;Y++)I[Y]=0,V[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,I,V,H){const Y=s.attributes,K=I.attributes;let W=0;const q=V.getAttributes();for(const D in q)if(q[D].location>=0){const Q=Y[D];let oe=K[D];if(oe===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;W++}return s.attributesNum!==W||s.index!==H}function v(S,I,V,H){const Y={},K=I.attributes;let W=0;const q=V.getAttributes();for(const D in q)if(q[D].location>=0){let Q=K[D];Q===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),Y[D]=oe,W++}s.attributes=Y,s.attributesNum=W,s.index=H}function y(){const S=s.newAttributes;for(let I=0,V=S.length;I<V;I++)S[I]=0}function m(S){f(S,0)}function f(S,I){const V=s.newAttributes,H=s.enabledAttributes,Y=s.attributeDivisors;V[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),Y[S]!==I&&(n.vertexAttribDivisor(S,I),Y[S]=I)}function g(){const S=s.newAttributes,I=s.enabledAttributes;for(let V=0,H=I.length;V<H;V++)I[V]!==S[V]&&(n.disableVertexAttribArray(V),I[V]=0)}function _(S,I,V,H,Y,K,W){W===!0?n.vertexAttribIPointer(S,I,V,Y,K):n.vertexAttribPointer(S,I,V,H,Y,K)}function x(S,I,V,H){y();const Y=H.attributes,K=V.getAttributes(),W=I.defaultAttributeValues;for(const q in K){const D=K[q];if(D.location>=0){let j=Y[q];if(j===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const Q=j.normalized,oe=j.itemSize,Se=e.get(j);if(Se===void 0)continue;const We=Se.buffer,G=Se.type,ne=Se.bytesPerElement,he=G===n.INT||G===n.UNSIGNED_INT||j.gpuType===Gh;if(j.isInterleavedBufferAttribute){const ue=j.data,be=ue.stride,Ie=j.offset;if(ue.isInstancedInterleavedBuffer){for(let Ve=0;Ve<D.locationSize;Ve++)f(D.location+Ve,ue.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ve=0;Ve<D.locationSize;Ve++)m(D.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Ve=0;Ve<D.locationSize;Ve++)_(D.location+Ve,oe/D.locationSize,G,Q,be*ne,(Ie+oe/D.locationSize*Ve)*ne,he)}else{if(j.isInstancedBufferAttribute){for(let ue=0;ue<D.locationSize;ue++)f(D.location+ue,j.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ue=0;ue<D.locationSize;ue++)m(D.location+ue);n.bindBuffer(n.ARRAY_BUFFER,We);for(let ue=0;ue<D.locationSize;ue++)_(D.location+ue,oe/D.locationSize,G,Q,oe*ne,oe/D.locationSize*ue*ne,he)}}else if(W!==void 0){const Q=W[q];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(D.location,Q);break;case 3:n.vertexAttrib3fv(D.location,Q);break;case 4:n.vertexAttrib4fv(D.location,Q);break;default:n.vertexAttrib1fv(D.location,Q)}}}}g()}function b(){C();for(const S in i){const I=i[S];for(const V in I){const H=I[V];for(const Y in H)u(H[Y].object),delete H[Y];delete I[V]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const V in I){const H=I[V];for(const Y in H)u(H[Y].object),delete H[Y];delete I[V]}delete i[S.id]}function w(S){for(const I in i){const V=i[I];if(V[S.id]===void 0)continue;const H=V[S.id];for(const Y in H)u(H[Y].object),delete H[Y];delete V[S.id]}}function C(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function NE(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];t.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let v=0;for(let y=0;y<d;y++)v+=u[y];for(let y=0;y<h.length;y++)t.update(v,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function UE(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Rn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===Ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ri&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Xn&&!w)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:x,maxSamples:b}}function FE(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Gi,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,_=g*4;let x=f.clippingState||null;l.value=x,x=u(v,h,_,p);for(let b=0;b!==_;++b)x[b]=t[b];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const f=p+y*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,x=p;_!==y;++_,x+=4)o.copy(d[_]).applyMatrix4(g,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function OE(n){let e=new WeakMap;function t(o,a){return a===hd?o.mapping=Hs:a===fd&&(o.mapping=Vs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hd||a===fd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yx(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class tf extends A_{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ms=4,Yp=[.125,.215,.35,.446,.526,.582],Lr=20,Su=new tf,Kp=new Te;let Mu=null,Eu=0,Tu=0,wu=!1;const br=(1+Math.sqrt(5))/2,hs=1/br,qp=[new P(-br,hs,0),new P(br,hs,0),new P(-hs,0,br),new P(hs,0,br),new P(0,br,-hs),new P(0,br,hs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Mu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mu,Eu,Tu),this._renderer.xr.enabled=wu,e.scissorTest=!1,tl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Ea,format:Rn,colorSpace:Bt,depthBuffer:!1},r=Qp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kE(s)),this._blurMaterial=BE(s,e,t)}return r}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,Su)}_sceneToCubeUV(e,t,i,r){const a=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Kp),u.toneMapping=nr,u.autoClear=!1;const p=new Ir({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),v=new sn(new Ta,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Kp),y=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;tl(r,g*_,f>2?_:0,_,_),u.setRenderTarget(r),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Hs||e.mapping===Vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;tl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Su)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qp[(r-s-1)%qp.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new sn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Lr-1),y=s/v,m=isFinite(s)?1+Math.floor(u*y):Lr;m>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const f=[];let g=0;for(let w=0;w<Lr;++w){const C=w/y,T=Math.exp(-C*C/2);f.push(T),w===0?g+=T:w<m&&(g+=2*T)}for(let w=0;w<f.length;w++)f[w]=f[w]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const x=this._sizeLods[r],b=3*x*(r>_-ms?r-_+ms:0),A=4*(this._cubeSize-x);tl(t,b,A,3*x,2*x),l.setRenderTarget(t),l.render(d,Su)}}function kE(n){const e=[],t=[],i=[];let r=n;const s=n-ms+1+Yp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ms?l=Yp[o-n+ms-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,y=3,m=2,f=1,g=new Float32Array(y*v*p),_=new Float32Array(m*v*p),x=new Float32Array(f*v*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,C=A>2?0:-1,T=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];g.set(T,y*v*A),_.set(h,m*v*A);const S=[A,A,A,A,A,A];x.set(S,f*v*A)}const b=new xn;b.setAttribute("position",new Jt(g,y)),b.setAttribute("uv",new Jt(_,m)),b.setAttribute("faceIndex",new Jt(x,f)),e.push(b),r>ms&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qp(n,e,t){const i=new Hr(n,e,t);return i.texture.mapping=Cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function BE(n,e,t){const i=new Float32Array(Lr),r=new P(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Jp(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function em(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function nf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hd||l===fd,u=l===Hs||l===Vs;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Zp(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Zp(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function HE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ls("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function VE(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const y=h.morphAttributes[v];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const y=p[v];for(let m=0,f=y.length;m<f;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,v=d.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let _=0,x=g.length;_<x;_+=3){const b=g[_+0],A=g[_+1],w=g[_+2];h.push(b,A,A,w,w,b)}}else if(v!==void 0){const g=v.array;y=v.version;for(let _=0,x=g.length/3-1;_<x;_+=3){const b=_+0,A=_+1,w=_+2;h.push(b,A,A,w,w,b)}}else return;const m=new(y_(h)?T_:E_)(h,1);m.version=y;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function GE(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,h*o,v),t.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];t.update(m,i,1)}function d(h,p,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,v);let f=0;for(let g=0;g<v;g++)f+=p[g];for(let g=0;g<y.length;g++)t.update(f,i,y[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function WE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function XE(n,e,t){const i=new WeakMap,r=new it;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;v===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*A*4*d),C=new S_(w,b,A,d);C.type=Xn,C.needsUpdate=!0;const T=x*4;for(let I=0;I<d;I++){const V=f[I],H=g[I],Y=_[I],K=b*A*4*I;for(let W=0;W<V.count;W++){const q=W*T;v===!0&&(r.fromBufferAttribute(V,W),w[K+q+0]=r.x,w[K+q+1]=r.y,w[K+q+2]=r.z,w[K+q+3]=0),y===!0&&(r.fromBufferAttribute(H,W),w[K+q+4]=r.x,w[K+q+5]=r.y,w[K+q+6]=r.z,w[K+q+7]=0),m===!0&&(r.fromBufferAttribute(Y,W),w[K+q+8]=r.x,w[K+q+9]=r.y,w[K+q+10]=r.z,w[K+q+11]=Y.itemSize===4?r.w:1)}}h={count:d,texture:C,size:new Ne(b,A)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function jE(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class C_ extends It{constructor(e,t,i,r,s,o,a,l,c,u=Ps){if(u!==Ps&&u!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ps&&(i=zr),i===void 0&&u===Xs&&(i=Ws),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const P_=new It,tm=new C_(1,1),L_=new S_,I_=new Ix,D_=new b_,nm=[],im=[],rm=new Float32Array(16),sm=new Float32Array(9),om=new Float32Array(4);function so(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=nm[r];if(s===void 0&&(s=new Float32Array(r),nm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Dc(n,e){let t=im[e];t===void 0&&(t=new Int32Array(e),im[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $E(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function YE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function KE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function qE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function ZE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;om.set(i),n.uniformMatrix2fv(this.addr,!1,om),Ct(t,i)}}function QE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;sm.set(i),n.uniformMatrix3fv(this.addr,!1,sm),Ct(t,i)}}function JE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;rm.set(i),n.uniformMatrix4fv(this.addr,!1,rm),Ct(t,i)}}function eT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function nT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function iT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function rT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function oT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function aT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function lT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(tm.compareFunction=v_,s=tm):s=P_,t.setTexture2D(e||s,r)}function cT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||I_,r)}function uT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||D_,r)}function dT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||L_,r)}function hT(n){switch(n){case 5126:return $E;case 35664:return YE;case 35665:return KE;case 35666:return qE;case 35674:return ZE;case 35675:return QE;case 35676:return JE;case 5124:case 35670:return eT;case 35667:case 35671:return tT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return rT;case 36294:return sT;case 36295:return oT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return dT}}function fT(n,e){n.uniform1fv(this.addr,e)}function pT(n,e){const t=so(e,this.size,2);n.uniform2fv(this.addr,t)}function mT(n,e){const t=so(e,this.size,3);n.uniform3fv(this.addr,t)}function gT(n,e){const t=so(e,this.size,4);n.uniform4fv(this.addr,t)}function _T(n,e){const t=so(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vT(n,e){const t=so(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yT(n,e){const t=so(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xT(n,e){n.uniform1iv(this.addr,e)}function ST(n,e){n.uniform2iv(this.addr,e)}function MT(n,e){n.uniform3iv(this.addr,e)}function ET(n,e){n.uniform4iv(this.addr,e)}function TT(n,e){n.uniform1uiv(this.addr,e)}function wT(n,e){n.uniform2uiv(this.addr,e)}function AT(n,e){n.uniform3uiv(this.addr,e)}function bT(n,e){n.uniform4uiv(this.addr,e)}function RT(n,e,t){const i=this.cache,r=e.length,s=Dc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||P_,s[o])}function CT(n,e,t){const i=this.cache,r=e.length,s=Dc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||I_,s[o])}function PT(n,e,t){const i=this.cache,r=e.length,s=Dc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||D_,s[o])}function LT(n,e,t){const i=this.cache,r=e.length,s=Dc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||L_,s[o])}function IT(n){switch(n){case 5126:return fT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return vT;case 35676:return yT;case 5124:case 35670:return xT;case 35667:case 35671:return ST;case 35668:case 35672:return MT;case 35669:case 35673:return ET;case 5125:return TT;case 36294:return wT;case 36295:return AT;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return LT}}class DT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hT(t.type)}}class NT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IT(t.type)}}class UT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Au=/(\w+)(\])?(\[|\.)?/g;function am(n,e){n.seq.push(e),n.map[e.id]=e}function FT(n,e,t){const i=n.name,r=i.length;for(Au.lastIndex=0;;){const s=Au.exec(i),o=Au.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){am(t,c===void 0?new DT(a,n,e):new NT(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new UT(a),am(t,d)),t=d}}}class Fl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);FT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function lm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const OT=37297;let kT=0;function BT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function zT(n){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(n);let i;switch(e===t?i="":e===tc&&t===ec?i="LinearDisplayP3ToLinearSRGB":e===ec&&t===tc&&(i="LinearSRGBToLinearDisplayP3"),n){case Bt:case Pc:return[i,"LinearTransferOETF"];case qt:case Zh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+BT(n.getShaderSource(e),o)}else return r}function HT(n,e){const t=zT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function VT(n,e){let t;switch(e){case Gy:t="Linear";break;case Wy:t="Reinhard";break;case Xy:t="Cineon";break;case s_:t="ACESFilmic";break;case $y:t="AgX";break;case Yy:t="Neutral";break;case jy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nl=new P;function GT(){$e.getLuminanceCoefficients(nl);const n=nl.x.toFixed(4),e=nl.y.toFixed(4),t=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function XT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Oo(n){return n!==""}function um(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $T=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(n){return n.replace($T,KT)}const YT=new Map;function KT(n,e){let t=Fe[e];if(t===void 0){const i=YT.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vd(t)}const qT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hm(n){return n.replace(qT,ZT)}function ZT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===r_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===my?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function JT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ew(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function tw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case Hy:e="ENVMAP_BLENDING_MIX";break;case Vy:e="ENVMAP_BLENDING_ADD";break}return e}function nw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function iw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=QT(t),c=JT(t),u=ew(t),d=tw(t),h=nw(t),p=WT(t),v=XT(s),y=r.createProgram();let m,f,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Oo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Oo).join(`
`),f.length>0&&(f+=`
`)):(m=[fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),f=[fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?Fe.tonemapping_pars_fragment:"",t.toneMapping!==nr?VT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,HT("linearToOutputTexel",t.outputColorSpace),GT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oo).join(`
`)),o=Vd(o),o=um(o,t),o=dm(o,t),a=Vd(a),a=um(a,t),a=dm(a,t),o=hm(o),a=hm(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=g+m+o,x=g+f+a,b=lm(r,r.VERTEX_SHADER,_),A=lm(r,r.FRAGMENT_SHADER,x);r.attachShader(y,b),r.attachShader(y,A),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(I){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(y).trim(),H=r.getShaderInfoLog(b).trim(),Y=r.getShaderInfoLog(A).trim();let K=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,b,A);else{const q=cm(r,b,"vertex"),D=cm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+q+`
`+D)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||Y==="")&&(W=!1);W&&(I.diagnostics={runnable:K,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(b),r.deleteShader(A),C=new Fl(r,y),T=jT(r,y)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,OT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=A,this}let rw=0;class sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ow(e),t.set(e,i)),i}}class ow{constructor(e){this.id=rw++,this.code=e,this.usedTimes=0}}function aw(n,e,t,i,r,s,o){const a=new Jh,l=new sw,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,I,V,H){const Y=V.fog,K=H.geometry,W=T.isMeshStandardMaterial?V.environment:null,q=(T.isMeshStandardMaterial?t:e).get(T.envMap||W),D=q&&q.mapping===Cc?q.image.height:null,j=v[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Q=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,oe=Q!==void 0?Q.length:0;let Se=0;K.morphAttributes.position!==void 0&&(Se=1),K.morphAttributes.normal!==void 0&&(Se=2),K.morphAttributes.color!==void 0&&(Se=3);let We,G,ne,he;if(j){const Ye=si[j];We=Ye.vertexShader,G=Ye.fragmentShader}else We=T.vertexShader,G=T.fragmentShader,l.update(T),ne=l.getVertexShaderID(T),he=l.getFragmentShaderID(T);const ue=n.getRenderTarget(),be=H.isInstancedMesh===!0,Ie=H.isBatchedMesh===!0,Ve=!!T.map,pt=!!T.matcap,L=!!q,xt=!!T.aoMap,Qe=!!T.lightMap,nt=!!T.bumpMap,Me=!!T.normalMap,St=!!T.displacementMap,Pe=!!T.emissiveMap,De=!!T.metalnessMap,R=!!T.roughnessMap,M=T.anisotropy>0,z=T.clearcoat>0,Z=T.dispersion>0,ee=T.iridescence>0,J=T.sheen>0,Ee=T.transmission>0,ce=M&&!!T.anisotropyMap,me=z&&!!T.clearcoatMap,Ue=z&&!!T.clearcoatNormalMap,ie=z&&!!T.clearcoatRoughnessMap,pe=ee&&!!T.iridescenceMap,Ge=ee&&!!T.iridescenceThicknessMap,Ce=J&&!!T.sheenColorMap,ge=J&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Be=!!T.specularColorMap,ut=!!T.specularIntensityMap,U=Ee&&!!T.transmissionMap,re=Ee&&!!T.thicknessMap,X=!!T.gradientMap,$=!!T.alphaMap,ae=T.alphaTest>0,we=!!T.alphaHash,Xe=!!T.extensions;let Mt=nr;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Mt=n.toneMapping);const Nt={shaderID:j,shaderType:T.type,shaderName:T.name,vertexShader:We,fragmentShader:G,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:he,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&H._colorsTexture!==null,instancing:be,instancingColor:be&&H.instanceColor!==null,instancingMorph:be&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Bt,alphaToCoverage:!!T.alphaToCoverage,map:Ve,matcap:pt,envMap:L,envMapMode:L&&q.mapping,envMapCubeUVHeight:D,aoMap:xt,lightMap:Qe,bumpMap:nt,normalMap:Me,displacementMap:h&&St,emissiveMap:Pe,normalMapObjectSpace:Me&&T.normalMapType===ex,normalMapTangentSpace:Me&&T.normalMapType===qh,metalnessMap:De,roughnessMap:R,anisotropy:M,anisotropyMap:ce,clearcoat:z,clearcoatMap:me,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ie,dispersion:Z,iridescence:ee,iridescenceMap:pe,iridescenceThicknessMap:Ge,sheen:J,sheenColorMap:Ce,sheenRoughnessMap:ge,specularMap:Le,specularColorMap:Be,specularIntensityMap:ut,transmission:Ee,transmissionMap:U,thicknessMap:re,gradientMap:X,opaque:T.transparent===!1&&T.blending===Cs&&T.alphaToCoverage===!1,alphaMap:$,alphaTest:ae,alphaHash:we,combine:T.combine,mapUv:Ve&&y(T.map.channel),aoMapUv:xt&&y(T.aoMap.channel),lightMapUv:Qe&&y(T.lightMap.channel),bumpMapUv:nt&&y(T.bumpMap.channel),normalMapUv:Me&&y(T.normalMap.channel),displacementMapUv:St&&y(T.displacementMap.channel),emissiveMapUv:Pe&&y(T.emissiveMap.channel),metalnessMapUv:De&&y(T.metalnessMap.channel),roughnessMapUv:R&&y(T.roughnessMap.channel),anisotropyMapUv:ce&&y(T.anisotropyMap.channel),clearcoatMapUv:me&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:ge&&y(T.sheenRoughnessMap.channel),specularMapUv:Le&&y(T.specularMap.channel),specularColorMapUv:Be&&y(T.specularColorMap.channel),specularIntensityMapUv:ut&&y(T.specularIntensityMap.channel),transmissionMapUv:U&&y(T.transmissionMap.channel),thicknessMapUv:re&&y(T.thicknessMap.channel),alphaMapUv:$&&y(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Me||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(Ve||$),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Ve&&T.map.isVideoTexture===!0&&$e.getTransfer(T.map.colorSpace)===ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===oi,flipSided:T.side===an,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&T.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function f(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)S.push(I),S.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(g(S,T),_(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function g(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function _(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),T.push(a.mask)}function x(T){const S=v[T.type];let I;if(S){const V=si[S];I=Wx.clone(V.uniforms)}else I=T.uniforms;return I}function b(T,S){let I;for(let V=0,H=u.length;V<H;V++){const Y=u[V];if(Y.cacheKey===S){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new iw(n,S,T,s),u.push(I)),I}function A(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function w(T){l.remove(T)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:C}}function lw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function cw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,v,y,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:y,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=y,f.group=m),e++,f}function a(d,h,p,v,y,m){const f=o(d,h,p,v,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,v,y,m){const f=o(d,h,p,v,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||cw),i.length>1&&i.sort(h||pm),r.length>1&&r.sort(h||pm)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function uw(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new mm,n.set(i,[o])):r>=s.length?(o=new mm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function dw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Te};break;case"SpotLight":t={position:new P,direction:new P,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function hw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fw=0;function pw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function mw(n){const e=new dw,t=hw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,s=new ke,o=new ke;function a(c){let u=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,y=0,m=0,f=0,g=0,_=0,x=0,b=0,A=0,w=0;c.sort(pw);for(let T=0,S=c.length;T<S;T++){const I=c[T],V=I.color,H=I.intensity,Y=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=V.r*H,d+=V.g*H,h+=V.b*H;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],H);w++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,D=t.get(I);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=I.shadow.matrix,g++}i.directional[p]=W,p++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(V).multiplyScalar(H),W.distance=Y,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[y]=W;const q=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,q.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[y]=q.matrix,I.castShadow){const D=t.get(I);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=K,x++}y++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(V).multiplyScalar(H),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=W,m++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const q=I.shadow,D=t.get(I);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,D.shadowCameraNear=q.camera.near,D.shadowCameraFar=q.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=I.shadow.matrix,_++}i.point[v]=W,v++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(H),W.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[f]=W,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==p||C.pointLength!==v||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==g||C.numPointShadows!==_||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,C.directionalLength=p,C.pointLength=v,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=g,C.numPointShadows=_,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=w,i.version=fw++)}function l(c,u){let d=0,h=0,p=0,v=0,y=0;const m=u.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const _=c[f];if(_.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const x=i.rectArea[v];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function gm(n){const e=new mw(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function gw(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new gm(n),e.set(r,[a])):s>=o.length?(a=new gm(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class _w extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vw extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sw(n,e,t){let i=new ef;const r=new Ne,s=new Ne,o=new it,a=new _w({depthPacking:Jy}),l=new vw,c={},u=t.maxTextureSize,d={[bi]:an,[an]:bi,[oi]:oi},h=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:yw,fragmentShader:xw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new xn;v.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new sn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=r_;let f=this.type;this.render=function(A,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),V=n.state;V.setBlending(tr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=f!==ii&&this.type===ii,Y=f===ii&&this.type!==ii;for(let K=0,W=A.length;K<W;K++){const q=A[K],D=q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const j=D.getFrameExtents();if(r.multiply(j),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,D.mapSize.y=s.y)),D.map===null||H===!0||Y===!0){const oe=this.type!==ii?{minFilter:Qt,magFilter:Qt}:{};D.map!==null&&D.map.dispose(),D.map=new Hr(r.x,r.y,oe),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const Q=D.getViewportCount();for(let oe=0;oe<Q;oe++){const Se=D.getViewport(oe);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),V.viewport(o),D.updateMatrices(q,oe),i=D.getFrustum(),x(w,C,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===ii&&g(D,C),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,S,I)};function g(A,w){const C=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,C,h,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,C,p,y,null)}function _(A,w,C,T){let S=null;const I=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)S=I;else if(S=C.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=S.uuid,H=w.uuid;let Y=c[V];Y===void 0&&(Y={},c[V]=Y);let K=Y[H];K===void 0&&(K=S.clone(),Y[H]=K,w.addEventListener("dispose",b)),S=K}if(S.visible=w.visible,S.wireframe=w.wireframe,T===ii?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=n.properties.get(S);V.light=C}return S}function x(A,w,C,T,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ii)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const H=e.update(A),Y=A.material;if(Array.isArray(Y)){const K=H.groups;for(let W=0,q=K.length;W<q;W++){const D=K[W],j=Y[D.materialIndex];if(j&&j.visible){const Q=_(A,j,T,S);A.onBeforeShadow(n,A,w,C,H,Q,D),n.renderBufferDirect(C,null,H,Q,A,D),A.onAfterShadow(n,A,w,C,H,Q,D)}}}else if(Y.visible){const K=_(A,Y,T,S);A.onBeforeShadow(n,A,w,C,H,K,null),n.renderBufferDirect(C,null,H,K,A,null),A.onAfterShadow(n,A,w,C,H,K,null)}}const V=A.children;for(let H=0,Y=V.length;H<Y;H++)x(V[H],w,C,T,S)}function b(A){A.target.removeEventListener("dispose",b);for(const C in c){const T=c[C],S=A.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function Mw(n){function e(){let U=!1;const re=new it;let X=null;const $=new it(0,0,0,0);return{setMask:function(ae){X!==ae&&!U&&(n.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){U=ae},setClear:function(ae,we,Xe,Mt,Nt){Nt===!0&&(ae*=Mt,we*=Mt,Xe*=Mt),re.set(ae,we,Xe,Mt),$.equals(re)===!1&&(n.clearColor(ae,we,Xe,Mt),$.copy(re))},reset:function(){U=!1,X=null,$.set(-1,0,0,0)}}}function t(){let U=!1,re=null,X=null,$=null;return{setTest:function(ae){ae?he(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(ae){re!==ae&&!U&&(n.depthMask(ae),re=ae)},setFunc:function(ae){if(X!==ae){switch(ae){case Ny:n.depthFunc(n.NEVER);break;case Uy:n.depthFunc(n.ALWAYS);break;case Fy:n.depthFunc(n.LESS);break;case Zl:n.depthFunc(n.LEQUAL);break;case Oy:n.depthFunc(n.EQUAL);break;case ky:n.depthFunc(n.GEQUAL);break;case By:n.depthFunc(n.GREATER);break;case zy:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=ae}},setLocked:function(ae){U=ae},setClear:function(ae){$!==ae&&(n.clearDepth(ae),$=ae)},reset:function(){U=!1,re=null,X=null,$=null}}}function i(){let U=!1,re=null,X=null,$=null,ae=null,we=null,Xe=null,Mt=null,Nt=null;return{setTest:function(Ye){U||(Ye?he(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(Ye){re!==Ye&&!U&&(n.stencilMask(Ye),re=Ye)},setFunc:function(Ye,hi,ei){(X!==Ye||$!==hi||ae!==ei)&&(n.stencilFunc(Ye,hi,ei),X=Ye,$=hi,ae=ei)},setOp:function(Ye,hi,ei){(we!==Ye||Xe!==hi||Mt!==ei)&&(n.stencilOp(Ye,hi,ei),we=Ye,Xe=hi,Mt=ei)},setLocked:function(Ye){U=Ye},setClear:function(Ye){Nt!==Ye&&(n.clearStencil(Ye),Nt=Ye)},reset:function(){U=!1,re=null,X=null,$=null,ae=null,we=null,Xe=null,Mt=null,Nt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,v=!1,y=null,m=null,f=null,g=null,_=null,x=null,b=null,A=new Te(0,0,0),w=0,C=!1,T=null,S=null,I=null,V=null,H=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,W=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(q)[1]),K=W>=1):q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),K=W>=2);let D=null,j={};const Q=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),Se=new it().fromArray(Q),We=new it().fromArray(oe);function G(U,re,X,$){const ae=new Uint8Array(4),we=n.createTexture();n.bindTexture(U,we),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<X;Xe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(re+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return we}const ne={};ne[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(n.DEPTH_TEST),s.setFunc(Zl),nt(!1),Me(vp),he(n.CULL_FACE),xt(tr);function he(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function ue(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function be(U,re){return u[U]!==re?(n.bindFramebuffer(U,re),u[U]=re,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=re),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Ie(U,re){let X=h,$=!1;if(U){X=d.get(re),X===void 0&&(X=[],d.set(re,X));const ae=U.textures;if(X.length!==ae.length||X[0]!==n.COLOR_ATTACHMENT0){for(let we=0,Xe=ae.length;we<Xe;we++)X[we]=n.COLOR_ATTACHMENT0+we;X.length=ae.length,$=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,$=!0);$&&n.drawBuffers(X)}function Ve(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const pt={[Pr]:n.FUNC_ADD,[_y]:n.FUNC_SUBTRACT,[vy]:n.FUNC_REVERSE_SUBTRACT};pt[yy]=n.MIN,pt[xy]=n.MAX;const L={[Sy]:n.ZERO,[My]:n.ONE,[Ey]:n.SRC_COLOR,[ud]:n.SRC_ALPHA,[Cy]:n.SRC_ALPHA_SATURATE,[by]:n.DST_COLOR,[wy]:n.DST_ALPHA,[Ty]:n.ONE_MINUS_SRC_COLOR,[dd]:n.ONE_MINUS_SRC_ALPHA,[Ry]:n.ONE_MINUS_DST_COLOR,[Ay]:n.ONE_MINUS_DST_ALPHA,[Py]:n.CONSTANT_COLOR,[Ly]:n.ONE_MINUS_CONSTANT_COLOR,[Iy]:n.CONSTANT_ALPHA,[Dy]:n.ONE_MINUS_CONSTANT_ALPHA};function xt(U,re,X,$,ae,we,Xe,Mt,Nt,Ye){if(U===tr){v===!0&&(ue(n.BLEND),v=!1);return}if(v===!1&&(he(n.BLEND),v=!0),U!==gy){if(U!==y||Ye!==C){if((m!==Pr||_!==Pr)&&(n.blendEquation(n.FUNC_ADD),m=Pr,_=Pr),Ye)switch(U){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yp:n.blendFunc(n.ONE,n.ONE);break;case xp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,g=null,x=null,b=null,A.set(0,0,0),w=0,y=U,C=Ye}return}ae=ae||re,we=we||X,Xe=Xe||$,(re!==m||ae!==_)&&(n.blendEquationSeparate(pt[re],pt[ae]),m=re,_=ae),(X!==f||$!==g||we!==x||Xe!==b)&&(n.blendFuncSeparate(L[X],L[$],L[we],L[Xe]),f=X,g=$,x=we,b=Xe),(Mt.equals(A)===!1||Nt!==w)&&(n.blendColor(Mt.r,Mt.g,Mt.b,Nt),A.copy(Mt),w=Nt),y=U,C=!1}function Qe(U,re){U.side===oi?ue(n.CULL_FACE):he(n.CULL_FACE);let X=U.side===an;re&&(X=!X),nt(X),U.blending===Cs&&U.transparent===!1?xt(tr):xt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const $=U.stencilWrite;o.setTest($),$&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Pe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(U){T!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),T=U)}function Me(U){U!==fy?(he(n.CULL_FACE),U!==S&&(U===vp?n.cullFace(n.BACK):U===py?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),S=U}function St(U){U!==I&&(K&&n.lineWidth(U),I=U)}function Pe(U,re,X){U?(he(n.POLYGON_OFFSET_FILL),(V!==re||H!==X)&&(n.polygonOffset(re,X),V=re,H=X)):ue(n.POLYGON_OFFSET_FILL)}function De(U){U?he(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function R(U){U===void 0&&(U=n.TEXTURE0+Y-1),D!==U&&(n.activeTexture(U),D=U)}function M(U,re,X){X===void 0&&(D===null?X=n.TEXTURE0+Y-1:X=D);let $=j[X];$===void 0&&($={type:void 0,texture:void 0},j[X]=$),($.type!==U||$.texture!==re)&&(D!==X&&(n.activeTexture(X),D=X),n.bindTexture(U,re||ne[U]),$.type=U,$.texture=re)}function z(){const U=j[D];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(U){Se.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Se.copy(U))}function ge(U){We.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),We.copy(U))}function Le(U,re){let X=l.get(re);X===void 0&&(X=new WeakMap,l.set(re,X));let $=X.get(U);$===void 0&&($=n.getUniformBlockIndex(re,U.name),X.set(U,$))}function Be(U,re){const $=l.get(re).get(U);a.get(re)!==$&&(n.uniformBlockBinding(re,$,U.__bindingPointIndex),a.set(re,$))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},D=null,j={},u={},d=new WeakMap,h=[],p=null,v=!1,y=null,m=null,f=null,g=null,_=null,x=null,b=null,A=new Te(0,0,0),w=0,C=!1,T=null,S=null,I=null,V=null,H=null,Se.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:ue,bindFramebuffer:be,drawBuffers:Ie,useProgram:Ve,setBlending:xt,setMaterial:Qe,setFlipSided:nt,setCullFace:Me,setLineWidth:St,setPolygonOffset:Pe,setScissorTest:De,activeTexture:R,bindTexture:M,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:pe,texImage3D:Ge,updateUBOMapping:Le,uniformBlockBinding:Be,texStorage2D:Ue,texStorage3D:ie,texSubImage2D:J,texSubImage3D:Ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Ce,viewport:ge,reset:ut}}function _m(n,e,t,i){const r=Ew(i);switch(t){case d_:return n*e;case f_:return n*e;case p_:return n*e*2;case jh:return n*e/r.components*r.byteLength;case $h:return n*e/r.components*r.byteLength;case m_:return n*e*2/r.components*r.byteLength;case Yh:return n*e*2/r.components*r.byteLength;case h_:return n*e*3/r.components*r.byteLength;case Rn:return n*e*4/r.components*r.byteLength;case Kh:return n*e*4/r.components*r.byteLength;case Ll:case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case md:case _d:return Math.max(n,16)*Math.max(e,8)/4;case pd:case gd:return Math.max(n,8)*Math.max(e,8)/2;case vd:case yd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Td:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Id:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ul:case Ud:case Fd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case g_:case Od:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kd:case Bd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ew(n){switch(n){case Ri:case l_:return{byteLength:1,components:1};case ta:case c_:case Ea:return{byteLength:2,components:1};case Wh:case Xh:return{byteLength:2,components:4};case zr:case Gh:case Xn:return{byteLength:4,components:1};case u_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Tw(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return p?new OffscreenCanvas(R,M):ra("canvas")}function y(R,M,z){let Z=1;const ee=De(R);if((ee.width>z||ee.height>z)&&(Z=z/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(Z*ee.width),Ee=Math.floor(Z*ee.height);d===void 0&&(d=v(J,Ee));const ce=M?v(J,Ee):d;return ce.width=J,ce.height=Ee,ce.getContext("2d").drawImage(R,0,0,J,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+Ee+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Qt&&R.minFilter!==gn}function f(R){n.generateMipmap(R)}function g(R,M,z,Z,ee=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=M;if(M===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),M===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),M===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){const Ee=ee?Jl:$e.getTransfer(Z);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=Ee===ot?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(R,M){let z;return R?M===null||M===zr||M===Ws?z=n.DEPTH24_STENCIL8:M===Xn?z=n.DEPTH32F_STENCIL8:M===ta&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===zr||M===Ws?z=n.DEPTH_COMPONENT24:M===Xn?z=n.DEPTH_COMPONENT32F:M===ta&&(z=n.DEPTH_COMPONENT16),z}function x(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==gn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),w(M),M.isVideoTexture&&u.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),T(M)}function w(R){const M=i.get(R);if(M.__webglInit===void 0)return;const z=R.source,Z=h.get(z);if(Z){const ee=Z[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(R),Object.keys(Z).length===0&&h.delete(z)}i.remove(R)}function C(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const z=R.source,Z=h.get(z);delete Z[M.__cacheKey],o.memory.textures--}function T(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ee=0;ee<M.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[Z]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=R.textures;for(let Z=0,ee=z.length;Z<ee;Z++){const J=i.get(z[Z]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(z[Z])}i.remove(R)}let S=0;function I(){S=0}function V(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function H(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Y(R,M){const z=i.get(R);if(R.isVideoTexture&&St(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(z,R,M);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function K(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){We(z,R,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function W(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){We(z,R,M);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function q(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){G(z,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}const D={[Gs]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[Ql]:n.MIRRORED_REPEAT},j={[Qt]:n.NEAREST,[a_]:n.NEAREST_MIPMAP_NEAREST,[Fo]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Pl]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},Q={[tx]:n.NEVER,[ax]:n.ALWAYS,[nx]:n.LESS,[v_]:n.LEQUAL,[ix]:n.EQUAL,[ox]:n.GEQUAL,[rx]:n.GREATER,[sx]:n.NOTEQUAL};function oe(R,M){if(M.type===Xn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===gn||M.magFilter===Pl||M.magFilter===Fo||M.magFilter===Mi||M.minFilter===gn||M.minFilter===Pl||M.minFilter===Fo||M.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,D[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,D[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,D[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,j[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,j[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qt||M.minFilter!==Fo&&M.minFilter!==Mi||M.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Se(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const Z=M.source;let ee=h.get(Z);ee===void 0&&(ee={},h.set(Z,ee));const J=H(M);if(J!==R.__cacheKey){ee[J]===void 0&&(ee[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[J].usedTimes++;const Ee=ee[R.__cacheKey];Ee!==void 0&&(ee[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&C(M)),R.__cacheKey=J,R.__webglTexture=ee[J].texture}return z}function We(R,M,z){let Z=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=n.TEXTURE_3D);const ee=Se(R,M),J=M.source;t.bindTexture(Z,R.__webglTexture,n.TEXTURE0+z);const Ee=i.get(J);if(J.version!==Ee.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);const ce=$e.getPrimaries($e.workingColorSpace),me=M.colorSpace===Yi?null:$e.getPrimaries(M.colorSpace),Ue=M.colorSpace===Yi||ce===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ie=y(M.image,!1,r.maxTextureSize);ie=Pe(M,ie);const pe=s.convert(M.format,M.colorSpace),Ge=s.convert(M.type);let Ce=g(M.internalFormat,pe,Ge,M.colorSpace,M.isVideoTexture);oe(Z,M);let ge;const Le=M.mipmaps,Be=M.isVideoTexture!==!0,ut=Ee.__version===void 0||ee===!0,U=J.dataReady,re=x(M,ie);if(M.isDepthTexture)Ce=_(M.format===Xs,M.type),ut&&(Be?t.texStorage2D(n.TEXTURE_2D,1,Ce,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ie.width,ie.height,0,pe,Ge,null));else if(M.isDataTexture)if(Le.length>0){Be&&ut&&t.texStorage2D(n.TEXTURE_2D,re,Ce,Le[0].width,Le[0].height);for(let X=0,$=Le.length;X<$;X++)ge=Le[X],Be?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,pe,Ge,ge.data):t.texImage2D(n.TEXTURE_2D,X,Ce,ge.width,ge.height,0,pe,Ge,ge.data);M.generateMipmaps=!1}else Be?(ut&&t.texStorage2D(n.TEXTURE_2D,re,Ce,ie.width,ie.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,pe,Ge,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,ie.width,ie.height,0,pe,Ge,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,Ce,Le[0].width,Le[0].height,ie.depth);for(let X=0,$=Le.length;X<$;X++)if(ge=Le[X],M.format!==Rn)if(pe!==null)if(Be){if(U)if(M.layerUpdates.size>0){const ae=_m(ge.width,ge.height,M.format,M.type);for(const we of M.layerUpdates){const Xe=ge.data.subarray(we*ae/ge.data.BYTES_PER_ELEMENT,(we+1)*ae/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,we,ge.width,ge.height,1,pe,Xe,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ie.depth,pe,ge.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ce,ge.width,ge.height,ie.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ie.depth,pe,Ge,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Ce,ge.width,ge.height,ie.depth,0,pe,Ge,ge.data)}else{Be&&ut&&t.texStorage2D(n.TEXTURE_2D,re,Ce,Le[0].width,Le[0].height);for(let X=0,$=Le.length;X<$;X++)ge=Le[X],M.format!==Rn?pe!==null?Be?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,pe,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Ce,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,pe,Ge,ge.data):t.texImage2D(n.TEXTURE_2D,X,Ce,ge.width,ge.height,0,pe,Ge,ge.data)}else if(M.isDataArrayTexture)if(Be){if(ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,Ce,ie.width,ie.height,ie.depth),U)if(M.layerUpdates.size>0){const X=_m(ie.width,ie.height,M.format,M.type);for(const $ of M.layerUpdates){const ae=ie.data.subarray($*X/ie.data.BYTES_PER_ELEMENT,($+1)*X/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,ie.width,ie.height,1,pe,Ge,ae)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,Ge,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ie.width,ie.height,ie.depth,0,pe,Ge,ie.data);else if(M.isData3DTexture)Be?(ut&&t.texStorage3D(n.TEXTURE_3D,re,Ce,ie.width,ie.height,ie.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,Ge,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ie.width,ie.height,ie.depth,0,pe,Ge,ie.data);else if(M.isFramebufferTexture){if(ut)if(Be)t.texStorage2D(n.TEXTURE_2D,re,Ce,ie.width,ie.height);else{let X=ie.width,$=ie.height;for(let ae=0;ae<re;ae++)t.texImage2D(n.TEXTURE_2D,ae,Ce,X,$,0,pe,Ge,null),X>>=1,$>>=1}}else if(Le.length>0){if(Be&&ut){const X=De(Le[0]);t.texStorage2D(n.TEXTURE_2D,re,Ce,X.width,X.height)}for(let X=0,$=Le.length;X<$;X++)ge=Le[X],Be?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,pe,Ge,ge):t.texImage2D(n.TEXTURE_2D,X,Ce,pe,Ge,ge);M.generateMipmaps=!1}else if(Be){if(ut){const X=De(ie);t.texStorage2D(n.TEXTURE_2D,re,Ce,X.width,X.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Ge,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ce,pe,Ge,ie);m(M)&&f(Z),Ee.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function G(R,M,z){if(M.image.length!==6)return;const Z=Se(R,M),ee=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const J=i.get(ee);if(ee.version!==J.__version||Z===!0){t.activeTexture(n.TEXTURE0+z);const Ee=$e.getPrimaries($e.workingColorSpace),ce=M.colorSpace===Yi?null:$e.getPrimaries(M.colorSpace),me=M.colorSpace===Yi||Ee===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ue=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,pe=[];for(let $=0;$<6;$++)!Ue&&!ie?pe[$]=y(M.image[$],!0,r.maxCubemapSize):pe[$]=ie?M.image[$].image:M.image[$],pe[$]=Pe(M,pe[$]);const Ge=pe[0],Ce=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),Le=g(M.internalFormat,Ce,ge,M.colorSpace),Be=M.isVideoTexture!==!0,ut=J.__version===void 0||Z===!0,U=ee.dataReady;let re=x(M,Ge);oe(n.TEXTURE_CUBE_MAP,M);let X;if(Ue){Be&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,re,Le,Ge.width,Ge.height);for(let $=0;$<6;$++){X=pe[$].mipmaps;for(let ae=0;ae<X.length;ae++){const we=X[ae];M.format!==Rn?Ce!==null?Be?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,0,0,we.width,we.height,Ce,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,Le,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,0,0,we.width,we.height,Ce,ge,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,Le,we.width,we.height,0,Ce,ge,we.data)}}}else{if(X=M.mipmaps,Be&&ut){X.length>0&&re++;const $=De(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,re,Le,$.width,$.height)}for(let $=0;$<6;$++)if(ie){Be?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe[$].width,pe[$].height,Ce,ge,pe[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Le,pe[$].width,pe[$].height,0,Ce,ge,pe[$].data);for(let ae=0;ae<X.length;ae++){const Xe=X[ae].image[$].image;Be?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,0,0,Xe.width,Xe.height,Ce,ge,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,Le,Xe.width,Xe.height,0,Ce,ge,Xe.data)}}else{Be?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,ge,pe[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Le,Ce,ge,pe[$]);for(let ae=0;ae<X.length;ae++){const we=X[ae];Be?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,0,0,Ce,ge,we.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,Le,Ce,ge,we.image[$])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),J.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ne(R,M,z,Z,ee,J){const Ee=s.convert(z.format,z.colorSpace),ce=s.convert(z.type),me=g(z.internalFormat,Ee,ce,z.colorSpace);if(!i.get(M).__hasExternalTextures){const ie=Math.max(1,M.width>>J),pe=Math.max(1,M.height>>J);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,me,ie,pe,M.depth,0,Ee,ce,null):t.texImage2D(ee,J,me,ie,pe,0,Ee,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Me(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ee,i.get(z).__webglTexture,0,nt(M)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ee,i.get(z).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(R,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const Z=M.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,J=_(M.stencilBuffer,ee),Ee=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=nt(M);Me(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,J,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,R)}else{const Z=M.textures;for(let ee=0;ee<Z.length;ee++){const J=Z[ee],Ee=s.convert(J.format,J.colorSpace),ce=s.convert(J.type),me=g(J.internalFormat,Ee,ce,J.colorSpace),Ue=nt(M);z&&Me(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,me,M.width,M.height):Me(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,me,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,me,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const Z=i.get(M.depthTexture).__webglTexture,ee=nt(M);if(M.depthTexture.format===Ps)Me(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Xs)Me(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function be(R){const M=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Z}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,R)}else if(z){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=n.createRenderbuffer(),he(M.__webglDepthbuffer[Z],R,!1);else{const ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),he(M.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(R,M,z){const Z=i.get(R);M!==void 0&&ne(Z.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&be(R)}function Ve(R){const M=R.texture,z=i.get(R),Z=i.get(M);R.addEventListener("dispose",A);const ee=R.textures,J=R.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=M.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let me=0;me<M.mipmaps.length;me++)z.__webglFramebuffer[ce][me]=n.createFramebuffer()}else z.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)z.__webglFramebuffer[ce]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ce=0,me=ee.length;ce<me;ce++){const Ue=i.get(ee[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&Me(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const me=ee[ce];z.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);const Ue=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),pe=g(me.internalFormat,Ue,ie,me.colorSpace,R.isXRRenderTarget===!0),Ge=nt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,pe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),he(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),oe(n.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)ne(z.__webglFramebuffer[ce][me],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else ne(z.__webglFramebuffer[ce],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(M)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ce=0,me=ee.length;ce<me;ce++){const Ue=ee[ce],ie=i.get(Ue);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),oe(n.TEXTURE_2D,Ue),ne(z.__webglFramebuffer,R,Ue,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Ue)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),oe(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)ne(z.__webglFramebuffer[me],R,M,n.COLOR_ATTACHMENT0,ce,me);else ne(z.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,ce,0);m(M)&&f(ce),t.unbindTexture()}R.depthBuffer&&be(R)}function pt(R){const M=R.textures;for(let z=0,Z=M.length;z<Z;z++){const ee=M[z];if(m(ee)){const J=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ee=i.get(ee).__webglTexture;t.bindTexture(J,Ee),f(J),t.unbindTexture()}}}const L=[],xt=[];function Qe(R){if(R.samples>0){if(Me(R)===!1){const M=R.textures,z=R.width,Z=R.height;let ee=n.COLOR_BUFFER_BIT;const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(R),ce=M.length>1;if(ce)for(let me=0;me<M.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<M.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const Ue=i.get(M[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,z,Z,0,0,z,Z,ee,n.NEAREST),l===!0&&(L.length=0,xt.length=0,L.push(n.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(L.push(J),xt.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,xt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<M.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const Ue=i.get(M[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function nt(R){return Math.min(r.maxSamples,R.samples)}function Me(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function St(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Pe(R,M){const z=R.colorSpace,Z=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Bt&&z!==Yi&&($e.getTransfer(z)===ot?(Z!==Rn||ee!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function De(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=W,this.setTextureCube=q,this.rebindTextures=Ie,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Me}function ww(n,e){function t(i,r=Yi){let s;const o=$e.getTransfer(r);if(i===Ri)return n.UNSIGNED_BYTE;if(i===Wh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===u_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===l_)return n.BYTE;if(i===c_)return n.SHORT;if(i===ta)return n.UNSIGNED_SHORT;if(i===Gh)return n.INT;if(i===zr)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===Ea)return n.HALF_FLOAT;if(i===d_)return n.ALPHA;if(i===h_)return n.RGB;if(i===Rn)return n.RGBA;if(i===f_)return n.LUMINANCE;if(i===p_)return n.LUMINANCE_ALPHA;if(i===Ps)return n.DEPTH_COMPONENT;if(i===Xs)return n.DEPTH_STENCIL;if(i===jh)return n.RED;if(i===$h)return n.RED_INTEGER;if(i===m_)return n.RG;if(i===Yh)return n.RG_INTEGER;if(i===Kh)return n.RGBA_INTEGER;if(i===Ll||i===Il||i===Dl||i===Nl)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pd||i===md||i===gd||i===_d)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===md)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vd||i===yd||i===xd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vd||i===yd)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sd||i===Md||i===Ed||i===Td||i===wd||i===Ad||i===bd||i===Rd||i===Cd||i===Pd||i===Ld||i===Id||i===Dd||i===Nd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Md)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ed)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Td)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ad)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ld)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Id)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ul||i===Ud||i===Fd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ul)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ud)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===g_||i===Od||i===kd||i===Bd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ul)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Od)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Aw extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dr extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bw={type:"move"};class bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Dr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Rw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new It,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new dr({vertexShader:Rw,fragmentShader:Cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sn(new Ic(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lw extends ro{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const y=new Pw,m=t.getContextAttributes();let f=null,g=null;const _=[],x=[],b=new Ne;let A=null;const w=new Zt;w.layers.enable(1),w.viewport=new it;const C=new Zt;C.layers.enable(2),C.viewport=new it;const T=[w,C],S=new Aw;S.layers.enable(1),S.layers.enable(2);let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ne=_[G];return ne===void 0&&(ne=new bu,_[G]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(G){let ne=_[G];return ne===void 0&&(ne=new bu,_[G]=ne),ne.getGripSpace()},this.getHand=function(G){let ne=_[G];return ne===void 0&&(ne=new bu,_[G]=ne),ne.getHandSpace()};function H(G){const ne=x.indexOf(G.inputSource);if(ne===-1)return;const he=_[ne];he!==void 0&&(he.update(G.inputSource,G.frame,c||o),he.dispatchEvent({type:G.type,data:G.inputSource}))}function Y(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",K);for(let G=0;G<_.length;G++){const ne=x[G];ne!==null&&(x[G]=null,_[G].disconnect(ne))}I=null,V=null,y.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,g=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Hr(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,he=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Xs:Ps,he=m.stencil?Ws:zr);const be={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Hr(h.textureWidth,h.textureHeight,{format:Rn,type:Ri,depthTexture:new C_(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(G){for(let ne=0;ne<G.removed.length;ne++){const he=G.removed[ne],ue=x.indexOf(he);ue>=0&&(x[ue]=null,_[ue].disconnect(he))}for(let ne=0;ne<G.added.length;ne++){const he=G.added[ne];let ue=x.indexOf(he);if(ue===-1){for(let Ie=0;Ie<_.length;Ie++)if(Ie>=x.length){x.push(he),ue=Ie;break}else if(x[Ie]===null){x[Ie]=he,ue=Ie;break}if(ue===-1)break}const be=_[ue];be&&be.connect(he)}}const W=new P,q=new P;function D(G,ne,he){W.setFromMatrixPosition(ne.matrixWorld),q.setFromMatrixPosition(he.matrixWorld);const ue=W.distanceTo(q),be=ne.projectionMatrix.elements,Ie=he.projectionMatrix.elements,Ve=be[14]/(be[10]-1),pt=be[14]/(be[10]+1),L=(be[9]+1)/be[5],xt=(be[9]-1)/be[5],Qe=(be[8]-1)/be[0],nt=(Ie[8]+1)/Ie[0],Me=Ve*Qe,St=Ve*nt,Pe=ue/(-Qe+nt),De=Pe*-Qe;if(ne.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(De),G.translateZ(Pe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),be[10]===-1)G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const R=Ve+Pe,M=pt+Pe,z=Me-De,Z=St+(ue-De),ee=L*pt/M*R,J=xt*pt/M*R;G.projectionMatrix.makePerspective(z,Z,ee,J,R,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function j(G,ne){ne===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ne.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let ne=G.near,he=G.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(he=y.depthFar)),S.near=C.near=w.near=ne,S.far=C.far=w.far=he,(I!==S.near||V!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,V=S.far);const ue=G.parent,be=S.cameras;j(S,ue);for(let Ie=0;Ie<be.length;Ie++)j(be[Ie],ue);be.length===2?D(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),Q(G,S,ue)};function Q(G,ne,he){he===null?G.matrix.copy(ne.matrixWorld):(G.matrix.copy(he.matrixWorld),G.matrix.invert(),G.matrix.multiply(ne.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=js*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let oe=null;function Se(G,ne){if(u=ne.getViewerPose(c||o),v=ne,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ue=!1;he.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Ie=0;Ie<he.length;Ie++){const Ve=he[Ie];let pt=null;if(p!==null)pt=p.getViewport(Ve);else{const xt=d.getViewSubImage(h,Ve);pt=xt.viewport,Ie===0&&(e.setRenderTargetTextures(g,xt.colorTexture,h.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(g))}let L=T[Ie];L===void 0&&(L=new Zt,L.layers.enable(Ie),L.viewport=new it,T[Ie]=L),L.matrix.fromArray(Ve.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ve.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(pt.x,pt.y,pt.width,pt.height),Ie===0&&(S.matrix.copy(L.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(L)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ie=d.getDepthInformation(he[0]);Ie&&Ie.isValid&&Ie.texture&&y.init(e,Ie,r.renderState)}}for(let he=0;he<_.length;he++){const ue=x[he],be=_[he];ue!==null&&be!==void 0&&be.update(ue,ne,c||o)}oe&&oe(G,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const We=new R_;We.setAnimationLoop(Se),this.setAnimationLoop=function(G){oe=G},this.dispose=function(){}}}const wr=new Qn,Iw=new ke;function Dw(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,w_(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===an&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===an&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),_=g.envMap,x=g.envMapRotation;_&&(m.envMap.value=_,wr.copy(x),wr.x*=-1,wr.y*=-1,wr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),m.envMapRotation.value.setFromMatrix4(Iw.makeRotationFromEuler(wr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Nw(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const x=_.program;i.uniformBlockBinding(g,x)}function c(g,_){let x=r[g.id];x===void 0&&(v(g),x=u(g),r[g.id]=x,g.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(g,b);const A=e.render.frame;s[g.id]!==A&&(h(g),s[g.id]=A)}function u(g){const _=d();g.__bindingPointIndex=_;const x=n.createBuffer(),b=g.__size,A=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],x=g.uniforms,b=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let A=0,w=x.length;A<w;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,S=C.length;T<S;T++){const I=C[T];if(p(I,A,T,b)===!0){const V=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let K=0;K<H.length;K++){const W=H[K],q=y(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,V+Y,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,Y),Y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,_,x,b){const A=g.value,w=_+"_"+x;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:b[w]=A.clone(),!0;{const C=b[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return b[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function v(g){const _=g.uniforms;let x=0;const b=16;for(let w=0,C=_.length;w<C;w++){const T=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,I=T.length;S<I;S++){const V=T[S],H=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,K=H.length;Y<K;Y++){const W=H[Y],q=y(W),D=x%b,j=D%q.boundary,Q=D+j;x+=j,Q!==0&&b-Q<q.storage&&(x+=b-Q),V.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=q.storage}}}const A=x%b;return A>0&&(x+=b-A),g.__size=x,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Uw{constructor(e={}){const{canvas:t=wx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,m=null;const f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=nr,this.toneMappingExposure=1;const _=this;let x=!1,b=0,A=0,w=null,C=-1,T=null;const S=new it,I=new it;let V=null;const H=new Te(0);let Y=0,K=t.width,W=t.height,q=1,D=null,j=null;const Q=new it(0,0,K,W),oe=new it(0,0,K,W);let Se=!1;const We=new ef;let G=!1,ne=!1;const he=new ke,ue=new P,be=new it,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function pt(){return w===null?q:1}let L=i;function xt(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hh}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",ae,!1),L===null){const F="webgl2";if(L=xt(F,E),L===null)throw xt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Qe,nt,Me,St,Pe,De,R,M,z,Z,ee,J,Ee,ce,me,Ue,ie,pe,Ge,Ce,ge,Le,Be,ut;function U(){Qe=new HE(L),Qe.init(),Le=new ww(L,Qe),nt=new UE(L,Qe,e,Le),Me=new Mw(L),St=new WE(L),Pe=new lw,De=new Tw(L,Qe,Me,Pe,nt,Le,St),R=new OE(_),M=new zE(_),z=new Zx(L),Be=new DE(L,z),Z=new VE(L,z,St,Be),ee=new jE(L,Z,z,St),Ge=new XE(L,nt,De),Ue=new FE(Pe),J=new aw(_,R,M,Qe,nt,Be,Ue),Ee=new Dw(_,Pe),ce=new uw,me=new gw(Qe),pe=new IE(_,R,M,Me,ee,h,l),ie=new Sw(_,ee,nt),ut=new Nw(L,St,nt,Me),Ce=new NE(L,Qe,St),ge=new GE(L,Qe,St),St.programs=J.programs,_.capabilities=nt,_.extensions=Qe,_.properties=Pe,_.renderLists=ce,_.shadowMap=ie,_.state=Me,_.info=St}U();const re=new Lw(_,L);this.xr=re,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(K,W,!1))},this.getSize=function(E){return E.set(K,W)},this.setSize=function(E,F,k=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,W=F,t.width=Math.floor(E*q),t.height=Math.floor(F*q),k===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(K*q,W*q).floor()},this.setDrawingBufferSize=function(E,F,k){K=E,W=F,q=k,t.width=Math.floor(E*k),t.height=Math.floor(F*k),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,F,k,B){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,F,k,B),Me.viewport(S.copy(Q).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,F,k,B){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,F,k,B),Me.scissor(I.copy(oe).multiplyScalar(q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(E){Me.setScissorTest(Se=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(E=!0,F=!0,k=!0){let B=0;if(E){let O=!1;if(w!==null){const se=w.texture.format;O=se===Kh||se===Yh||se===$h}if(O){const se=w.texture.type,de=se===Ri||se===zr||se===ta||se===Ws||se===Wh||se===Xh,_e=pe.getClearColor(),ve=pe.getClearAlpha(),Ae=_e.r,Re=_e.g,ye=_e.b;de?(p[0]=Ae,p[1]=Re,p[2]=ye,p[3]=ve,L.clearBufferuiv(L.COLOR,0,p)):(v[0]=Ae,v[1]=Re,v[2]=ye,v[3]=ve,L.clearBufferiv(L.COLOR,0,v))}else B|=L.COLOR_BUFFER_BIT}F&&(B|=L.DEPTH_BUFFER_BIT),k&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),me.dispose(),Pe.dispose(),R.dispose(),M.dispose(),ee.dispose(),Be.dispose(),ut.dispose(),J.dispose(),re.dispose(),re.removeEventListener("sessionstart",ei),re.removeEventListener("sessionend",dp),vr.stop()};function X(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=St.autoReset,F=ie.enabled,k=ie.autoUpdate,B=ie.needsUpdate,O=ie.type;U(),St.autoReset=E,ie.enabled=F,ie.autoUpdate=k,ie.needsUpdate=B,ie.type=O}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function we(E){const F=E.target;F.removeEventListener("dispose",we),Xe(F)}function Xe(E){Mt(E),Pe.remove(E)}function Mt(E){const F=Pe.get(E).programs;F!==void 0&&(F.forEach(function(k){J.releaseProgram(k)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,k,B,O,se){F===null&&(F=Ie);const de=O.isMesh&&O.matrixWorld.determinant()<0,_e=ay(E,F,k,B,O);Me.setMaterial(B,de);let ve=k.index,Ae=1;if(B.wireframe===!0){if(ve=Z.getWireframeAttribute(k),ve===void 0)return;Ae=2}const Re=k.drawRange,ye=k.attributes.position;let Ke=Re.start*Ae,mt=(Re.start+Re.count)*Ae;se!==null&&(Ke=Math.max(Ke,se.start*Ae),mt=Math.min(mt,(se.start+se.count)*Ae)),ve!==null?(Ke=Math.max(Ke,0),mt=Math.min(mt,ve.count)):ye!=null&&(Ke=Math.max(Ke,0),mt=Math.min(mt,ye.count));const gt=mt-Ke;if(gt<0||gt===1/0)return;Be.setup(O,B,_e,k,ve);let dn,qe=Ce;if(ve!==null&&(dn=z.get(ve),qe=ge,qe.setIndex(dn)),O.isMesh)B.wireframe===!0?(Me.setLineWidth(B.wireframeLinewidth*pt()),qe.setMode(L.LINES)):qe.setMode(L.TRIANGLES);else if(O.isLine){let xe=B.linewidth;xe===void 0&&(xe=1),Me.setLineWidth(xe*pt()),O.isLineSegments?qe.setMode(L.LINES):O.isLineLoop?qe.setMode(L.LINE_LOOP):qe.setMode(L.LINE_STRIP)}else O.isPoints?qe.setMode(L.POINTS):O.isSprite&&qe.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const xe=O._multiDrawStarts,Ut=O._multiDrawCounts,Ze=O._multiDrawCount,Un=ve?z.get(ve).bytesPerElement:1,Kr=Pe.get(B).currentProgram.getUniforms();for(let hn=0;hn<Ze;hn++)Kr.setValue(L,"_gl_DrawID",hn),qe.render(xe[hn]/Un,Ut[hn])}else if(O.isInstancedMesh)qe.renderInstances(Ke,gt,O.count);else if(k.isInstancedBufferGeometry){const xe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ut=Math.min(k.instanceCount,xe);qe.renderInstances(Ke,gt,Ut)}else qe.render(Ke,gt)};function Nt(E,F,k){E.transparent===!0&&E.side===oi&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,Ua(E,F,k),E.side=bi,E.needsUpdate=!0,Ua(E,F,k),E.side=oi):Ua(E,F,k)}this.compile=function(E,F,k=null){k===null&&(k=E),m=me.get(k),m.init(F),g.push(m),k.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),E!==k&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const B=new Set;return E.traverse(function(O){const se=O.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const _e=se[de];Nt(_e,k,O),B.add(_e)}else Nt(se,k,O),B.add(se)}),g.pop(),m=null,B},this.compileAsync=function(E,F,k=null){const B=this.compile(E,F,k);return new Promise(O=>{function se(){if(B.forEach(function(de){Pe.get(de).currentProgram.isReady()&&B.delete(de)}),B.size===0){O(E);return}setTimeout(se,10)}Qe.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Ye=null;function hi(E){Ye&&Ye(E)}function ei(){vr.stop()}function dp(){vr.start()}const vr=new R_;vr.setAnimationLoop(hi),typeof self<"u"&&vr.setContext(self),this.setAnimationLoop=function(E){Ye=E,re.setAnimationLoop(E),E===null?vr.stop():vr.start()},re.addEventListener("sessionstart",ei),re.addEventListener("sessionend",dp),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,F,w),m=me.get(E,g.length),m.init(F),g.push(m),he.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),We.setFromProjectionMatrix(he),ne=this.localClippingEnabled,G=Ue.init(this.clippingPlanes,ne),y=ce.get(E,f.length),y.init(),f.push(y),re.enabled===!0&&re.isPresenting===!0){const se=_.xr.getDepthSensingMesh();se!==null&&Qc(se,F,-1/0,_.sortObjects)}Qc(E,F,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(D,j),Ve=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ve&&pe.addToRenderList(y,E),this.info.render.frame++,G===!0&&Ue.beginShadows();const k=m.state.shadowsArray;ie.render(k,E,F),G===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=y.opaque,O=y.transmissive;if(m.setupLights(),F.isArrayCamera){const se=F.cameras;if(O.length>0)for(let de=0,_e=se.length;de<_e;de++){const ve=se[de];fp(B,O,E,ve)}Ve&&pe.render(E);for(let de=0,_e=se.length;de<_e;de++){const ve=se[de];hp(y,E,ve,ve.viewport)}}else O.length>0&&fp(B,O,E,F),Ve&&pe.render(E),hp(y,E,F);w!==null&&(De.updateMultisampleRenderTarget(w),De.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(_,E,F),Be.resetDefaultState(),C=-1,T=null,g.pop(),g.length>0?(m=g[g.length-1],G===!0&&Ue.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Qc(E,F,k,B){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||We.intersectsSprite(E)){B&&be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(he);const de=ee.update(E),_e=E.material;_e.visible&&y.push(E,de,_e,k,be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||We.intersectsObject(E))){const de=ee.update(E),_e=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),be.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),be.copy(de.boundingSphere.center)),be.applyMatrix4(E.matrixWorld).applyMatrix4(he)),Array.isArray(_e)){const ve=de.groups;for(let Ae=0,Re=ve.length;Ae<Re;Ae++){const ye=ve[Ae],Ke=_e[ye.materialIndex];Ke&&Ke.visible&&y.push(E,de,Ke,k,be.z,ye)}}else _e.visible&&y.push(E,de,_e,k,be.z,null)}}const se=E.children;for(let de=0,_e=se.length;de<_e;de++)Qc(se[de],F,k,B)}function hp(E,F,k,B){const O=E.opaque,se=E.transmissive,de=E.transparent;m.setupLightsView(k),G===!0&&Ue.setGlobalState(_.clippingPlanes,k),B&&Me.viewport(S.copy(B)),O.length>0&&Na(O,F,k),se.length>0&&Na(se,F,k),de.length>0&&Na(de,F,k),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function fp(E,F,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Hr(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Ea:Ri,minFilter:Mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const se=m.state.transmissionRenderTarget[B.id],de=B.viewport||S;se.setSize(de.z,de.w);const _e=_.getRenderTarget();_.setRenderTarget(se),_.getClearColor(H),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),Ve&&pe.render(k);const ve=_.toneMapping;_.toneMapping=nr;const Ae=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),G===!0&&Ue.setGlobalState(_.clippingPlanes,B),Na(E,k,B),De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ye=0,Ke=F.length;ye<Ke;ye++){const mt=F[ye],gt=mt.object,dn=mt.geometry,qe=mt.material,xe=mt.group;if(qe.side===oi&&gt.layers.test(B.layers)){const Ut=qe.side;qe.side=an,qe.needsUpdate=!0,pp(gt,k,B,dn,qe,xe),qe.side=Ut,qe.needsUpdate=!0,Re=!0}}Re===!0&&(De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se))}_.setRenderTarget(_e),_.setClearColor(H,Y),Ae!==void 0&&(B.viewport=Ae),_.toneMapping=ve}function Na(E,F,k){const B=F.isScene===!0?F.overrideMaterial:null;for(let O=0,se=E.length;O<se;O++){const de=E[O],_e=de.object,ve=de.geometry,Ae=B===null?de.material:B,Re=de.group;_e.layers.test(k.layers)&&pp(_e,F,k,ve,Ae,Re)}}function pp(E,F,k,B,O,se){E.onBeforeRender(_,F,k,B,O,se),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(_,F,k,B,E,se),O.transparent===!0&&O.side===oi&&O.forceSinglePass===!1?(O.side=an,O.needsUpdate=!0,_.renderBufferDirect(k,F,B,O,E,se),O.side=bi,O.needsUpdate=!0,_.renderBufferDirect(k,F,B,O,E,se),O.side=oi):_.renderBufferDirect(k,F,B,O,E,se),E.onAfterRender(_,F,k,B,O,se)}function Ua(E,F,k){F.isScene!==!0&&(F=Ie);const B=Pe.get(E),O=m.state.lights,se=m.state.shadowsArray,de=O.state.version,_e=J.getParameters(E,O.state,se,F,k),ve=J.getProgramCacheKey(_e);let Ae=B.programs;B.environment=E.isMeshStandardMaterial?F.environment:null,B.fog=F.fog,B.envMap=(E.isMeshStandardMaterial?M:R).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",we),Ae=new Map,B.programs=Ae);let Re=Ae.get(ve);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===de)return gp(E,_e),Re}else _e.uniforms=J.getUniforms(E),E.onBeforeCompile(_e,_),Re=J.acquireProgram(_e,ve),Ae.set(ve,Re),B.uniforms=_e.uniforms;const ye=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=Ue.uniform),gp(E,_e),B.needsLights=cy(E),B.lightsStateVersion=de,B.needsLights&&(ye.ambientLightColor.value=O.state.ambient,ye.lightProbe.value=O.state.probe,ye.directionalLights.value=O.state.directional,ye.directionalLightShadows.value=O.state.directionalShadow,ye.spotLights.value=O.state.spot,ye.spotLightShadows.value=O.state.spotShadow,ye.rectAreaLights.value=O.state.rectArea,ye.ltc_1.value=O.state.rectAreaLTC1,ye.ltc_2.value=O.state.rectAreaLTC2,ye.pointLights.value=O.state.point,ye.pointLightShadows.value=O.state.pointShadow,ye.hemisphereLights.value=O.state.hemi,ye.directionalShadowMap.value=O.state.directionalShadowMap,ye.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ye.spotShadowMap.value=O.state.spotShadowMap,ye.spotLightMatrix.value=O.state.spotLightMatrix,ye.spotLightMap.value=O.state.spotLightMap,ye.pointShadowMap.value=O.state.pointShadowMap,ye.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function mp(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Fl.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function gp(E,F){const k=Pe.get(E);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function ay(E,F,k,B,O){F.isScene!==!0&&(F=Ie),De.resetTextureUnits();const se=F.fog,de=B.isMeshStandardMaterial?F.environment:null,_e=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Bt,ve=(B.isMeshStandardMaterial?M:R).get(B.envMap||de),Ae=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Re=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ye=!!k.morphAttributes.position,Ke=!!k.morphAttributes.normal,mt=!!k.morphAttributes.color;let gt=nr;B.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(gt=_.toneMapping);const dn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,qe=dn!==void 0?dn.length:0,xe=Pe.get(B),Ut=m.state.lights;if(G===!0&&(ne===!0||E!==T)){const En=E===T&&B.id===C;Ue.setState(B,E,En)}let Ze=!1;B.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Ut.state.version||xe.outputColorSpace!==_e||O.isBatchedMesh&&xe.batching===!1||!O.isBatchedMesh&&xe.batching===!0||O.isBatchedMesh&&xe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&xe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&xe.instancing===!1||!O.isInstancedMesh&&xe.instancing===!0||O.isSkinnedMesh&&xe.skinning===!1||!O.isSkinnedMesh&&xe.skinning===!0||O.isInstancedMesh&&xe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&xe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&xe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&xe.instancingMorph===!1&&O.morphTexture!==null||xe.envMap!==ve||B.fog===!0&&xe.fog!==se||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ue.numPlanes||xe.numIntersection!==Ue.numIntersection)||xe.vertexAlphas!==Ae||xe.vertexTangents!==Re||xe.morphTargets!==ye||xe.morphNormals!==Ke||xe.morphColors!==mt||xe.toneMapping!==gt||xe.morphTargetsCount!==qe)&&(Ze=!0):(Ze=!0,xe.__version=B.version);let Un=xe.currentProgram;Ze===!0&&(Un=Ua(B,F,O));let Kr=!1,hn=!1,Jc=!1;const Et=Un.getUniforms(),Ni=xe.uniforms;if(Me.useProgram(Un.program)&&(Kr=!0,hn=!0,Jc=!0),B.id!==C&&(C=B.id,hn=!0),Kr||T!==E){Et.setValue(L,"projectionMatrix",E.projectionMatrix),Et.setValue(L,"viewMatrix",E.matrixWorldInverse);const En=Et.map.cameraPosition;En!==void 0&&En.setValue(L,ue.setFromMatrixPosition(E.matrixWorld)),nt.logarithmicDepthBuffer&&Et.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Et.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,hn=!0,Jc=!0)}if(O.isSkinnedMesh){Et.setOptional(L,O,"bindMatrix"),Et.setOptional(L,O,"bindMatrixInverse");const En=O.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Et.setValue(L,"boneTexture",En.boneTexture,De))}O.isBatchedMesh&&(Et.setOptional(L,O,"batchingTexture"),Et.setValue(L,"batchingTexture",O._matricesTexture,De),Et.setOptional(L,O,"batchingIdTexture"),Et.setValue(L,"batchingIdTexture",O._indirectTexture,De),Et.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Et.setValue(L,"batchingColorTexture",O._colorsTexture,De));const eu=k.morphAttributes;if((eu.position!==void 0||eu.normal!==void 0||eu.color!==void 0)&&Ge.update(O,k,Un),(hn||xe.receiveShadow!==O.receiveShadow)&&(xe.receiveShadow=O.receiveShadow,Et.setValue(L,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ni.envMap.value=ve,Ni.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&F.environment!==null&&(Ni.envMapIntensity.value=F.environmentIntensity),hn&&(Et.setValue(L,"toneMappingExposure",_.toneMappingExposure),xe.needsLights&&ly(Ni,Jc),se&&B.fog===!0&&Ee.refreshFogUniforms(Ni,se),Ee.refreshMaterialUniforms(Ni,B,q,W,m.state.transmissionRenderTarget[E.id]),Fl.upload(L,mp(xe),Ni,De)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Fl.upload(L,mp(xe),Ni,De),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Et.setValue(L,"center",O.center),Et.setValue(L,"modelViewMatrix",O.modelViewMatrix),Et.setValue(L,"normalMatrix",O.normalMatrix),Et.setValue(L,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const En=B.uniformsGroups;for(let tu=0,uy=En.length;tu<uy;tu++){const _p=En[tu];ut.update(_p,Un),ut.bind(_p,Un)}}return Un}function ly(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function cy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,F,k){Pe.get(E.texture).__webglTexture=F,Pe.get(E.depthTexture).__webglTexture=k;const B=Pe.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const k=Pe.get(E);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,k=0){w=E,b=F,A=k;let B=!0,O=null,se=!1,de=!1;if(E){const ve=Pe.get(E);if(ve.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(L.FRAMEBUFFER,null),B=!1;else if(ve.__webglFramebuffer===void 0)De.setupRenderTarget(E);else if(ve.__hasExternalTextures)De.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ye=E.depthTexture;if(ve.__boundDepthTexture!==ye){if(ye!==null&&Pe.has(ye)&&(E.width!==ye.image.width||E.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(E)}}const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(de=!0);const Re=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[F])?O=Re[F][k]:O=Re[F],se=!0):E.samples>0&&De.useMultisampledRTT(E)===!1?O=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?O=Re[k]:O=Re,S.copy(E.viewport),I.copy(E.scissor),V=E.scissorTest}else S.copy(Q).multiplyScalar(q).floor(),I.copy(oe).multiplyScalar(q).floor(),V=Se;if(Me.bindFramebuffer(L.FRAMEBUFFER,O)&&B&&Me.drawBuffers(E,O),Me.viewport(S),Me.scissor(I),Me.setScissorTest(V),se){const ve=Pe.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,k)}else if(de){const ve=Pe.get(E.texture),Ae=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ve.__webglTexture,k||0,Ae)}C=-1},this.readRenderTargetPixels=function(E,F,k,B,O,se,de){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){Me.bindFramebuffer(L.FRAMEBUFFER,_e);try{const ve=E.texture,Ae=ve.format,Re=ve.type;if(!nt.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-B&&k>=0&&k<=E.height-O&&L.readPixels(F,k,B,O,Le.convert(Ae),Le.convert(Re),se)}finally{const ve=w!==null?Pe.get(w).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(E,F,k,B,O,se,de){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){Me.bindFramebuffer(L.FRAMEBUFFER,_e);try{const ve=E.texture,Ae=ve.format,Re=ve.type;if(!nt.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-B&&k>=0&&k<=E.height-O){const ye=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),L.readPixels(F,k,B,O,Le.convert(Ae),Le.convert(Re),0),L.flush();const Ke=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await Ax(L,Ke,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se)}finally{L.deleteBuffer(ye),L.deleteSync(Ke)}return se}}finally{const ve=w!==null?Pe.get(w).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,ve)}}},this.copyFramebufferToTexture=function(E,F=null,k=0){E.isTexture!==!0&&(Ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-k),O=Math.floor(E.image.width*B),se=Math.floor(E.image.height*B),de=F!==null?F.x:0,_e=F!==null?F.y:0;De.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,de,_e,O,se),Me.unbindTexture()},this.copyTextureToTexture=function(E,F,k=null,B=null,O=0){E.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,k=null);let se,de,_e,ve,Ae,Re;k!==null?(se=k.max.x-k.min.x,de=k.max.y-k.min.y,_e=k.min.x,ve=k.min.y):(se=E.image.width,de=E.image.height,_e=0,ve=0),B!==null?(Ae=B.x,Re=B.y):(Ae=0,Re=0);const ye=Le.convert(F.format),Ke=Le.convert(F.type);De.setTexture2D(F,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const mt=L.getParameter(L.UNPACK_ROW_LENGTH),gt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),dn=L.getParameter(L.UNPACK_SKIP_PIXELS),qe=L.getParameter(L.UNPACK_SKIP_ROWS),xe=L.getParameter(L.UNPACK_SKIP_IMAGES),Ut=E.isCompressedTexture?E.mipmaps[O]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_e),L.pixelStorei(L.UNPACK_SKIP_ROWS,ve),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Ae,Re,se,de,ye,Ke,Ut.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Ae,Re,Ut.width,Ut.height,ye,Ut.data):L.texSubImage2D(L.TEXTURE_2D,O,Ae,Re,se,de,ye,Ke,Ut),L.pixelStorei(L.UNPACK_ROW_LENGTH,mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,dn),L.pixelStorei(L.UNPACK_SKIP_ROWS,qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xe),O===0&&F.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(E,F,k=null,B=null,O=0){E.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0);let se,de,_e,ve,Ae,Re,ye,Ke,mt;const gt=E.isCompressedTexture?E.mipmaps[O]:E.image;k!==null?(se=k.max.x-k.min.x,de=k.max.y-k.min.y,_e=k.max.z-k.min.z,ve=k.min.x,Ae=k.min.y,Re=k.min.z):(se=gt.width,de=gt.height,_e=gt.depth,ve=0,Ae=0,Re=0),B!==null?(ye=B.x,Ke=B.y,mt=B.z):(ye=0,Ke=0,mt=0);const dn=Le.convert(F.format),qe=Le.convert(F.type);let xe;if(F.isData3DTexture)De.setTexture3D(F,0),xe=L.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)De.setTexture2DArray(F,0),xe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const Ut=L.getParameter(L.UNPACK_ROW_LENGTH),Ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Un=L.getParameter(L.UNPACK_SKIP_PIXELS),Kr=L.getParameter(L.UNPACK_SKIP_ROWS),hn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ae),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(xe,O,ye,Ke,mt,se,de,_e,dn,qe,gt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(xe,O,ye,Ke,mt,se,de,_e,dn,gt.data):L.texSubImage3D(xe,O,ye,Ke,mt,se,de,_e,dn,qe,gt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ut),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Un),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,hn),O===0&&F.generateMipmaps&&L.generateMipmap(xe),Me.unbindTexture()},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&De.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?De.setTextureCube(E,0):E.isData3DTexture?De.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?De.setTexture2DArray(E,0):De.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){b=0,A=0,w=null,Me.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Zh?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===Pc?"display-p3":"srgb"}}class rf{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=i}clone(){return new rf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Fw extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ow{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ls("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new P;class sf{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vm=new P,ym=new it,xm=new it,kw=new P,Sm=new ke,il=new P,Ru=new Dn,Mm=new ke,Cu=new Lc;class Bw extends sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mp,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,il),this.boundingBox.expandByPoint(il)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,il),this.boundingSphere.expandByPoint(il)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ru.copy(this.boundingSphere),Ru.applyMatrix4(r),e.ray.intersectsSphere(Ru)!==!1&&(Mm.copy(r).invert(),Cu.copy(e.ray).applyMatrix4(Mm),!(this.boundingBox!==null&&Cu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Mp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ky?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;ym.fromBufferAttribute(r.attributes.skinIndex,e),xm.fromBufferAttribute(r.attributes.skinWeight,e),vm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=xm.getComponent(s);if(o!==0){const a=ym.getComponent(s);Sm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(kw.copy(vm).applyMatrix4(Sm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class N_ extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class U_ extends It{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Qt,u=Qt,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Em=new ke,zw=new ke;class of{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:zw;Em.multiplyMatrices(a,t[s]),Em.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new of(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new U_(t,e,e,Rn,Xn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new N_),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Gd extends Jt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fs=new ke,Tm=new ke,rl=[],wm=new Zn,Hw=new ke,yo=new sn,xo=new Dn;class Vw extends sn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Hw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fs),wm.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(wm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fs),xo.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(i),e.ray.intersectsSphere(xo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,fs),Tm.multiplyMatrices(i,fs),yo.matrixWorld=Tm,yo.raycast(e,rl);for(let o=0,a=rl.length;o<a;o++){const l=rl[o];l.instanceId=s,l.object=this,t.push(l)}rl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new U_(new Float32Array(r*this.count),r,this.count,jh,Xn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class af extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ic=new P,rc=new P,Am=new ke,So=new Lc,sl=new Dn,Pu=new P,bm=new P;class lf extends ct{constructor(e=new xn,t=new af){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ic.fromBufferAttribute(t,r-1),rc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ic.distanceTo(rc);e.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),sl.radius+=s,e.ray.intersectsSphere(sl)===!1)return;Am.copy(r).invert(),So.copy(e.ray).applyMatrix4(Am);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let y=p,m=v-1;y<m;y+=c){const f=u.getX(y),g=u.getX(y+1),_=ol(this,e,So,l,f,g);_&&t.push(_)}if(this.isLineLoop){const y=u.getX(v-1),m=u.getX(p),f=ol(this,e,So,l,y,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let y=p,m=v-1;y<m;y+=c){const f=ol(this,e,So,l,y,y+1);f&&t.push(f)}if(this.isLineLoop){const y=ol(this,e,So,l,v-1,p);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ol(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(ic.fromBufferAttribute(o,r),rc.fromBufferAttribute(o,s),t.distanceSqToSegment(ic,rc,Pu,bm)>i)return;Pu.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Pu);if(!(l<e.near||l>e.far))return{distance:l,point:bm.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Rm=new P,Cm=new P;class F_ extends lf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Rm.fromBufferAttribute(t,r),Cm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Rm.distanceTo(Cm);e.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gw extends lf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class O_ extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pm=new ke,Wd=new Lc,al=new Dn,ll=new P;class Ww extends ct{constructor(e=new xn,t=new O_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(r),al.radius+=s,e.ray.intersectsSphere(al)===!1)return;Pm.copy(r).invert(),Wd.copy(e.ray).applyMatrix4(Pm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=h,y=p;v<y;v++){const m=c.getX(v);ll.fromBufferAttribute(d,m),Lm(ll,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=h,y=p;v<y;v++)ll.fromBufferAttribute(d,v),Lm(ll,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Lm(n,e,t,i,r,s,o){const a=Wd.distanceSqToPoint(n);if(a<t){const l=new P;Wd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class cf extends xn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new vn(s,3)),this.setAttribute("normal",new vn(s.slice(),3)),this.setAttribute("uv",new vn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const _=new P,x=new P,b=new P;for(let A=0;A<t.length;A+=3)p(t[A+0],_),p(t[A+1],x),p(t[A+2],b),l(_,x,b,g)}function l(g,_,x,b){const A=b+1,w=[];for(let C=0;C<=A;C++){w[C]=[];const T=g.clone().lerp(x,C/A),S=_.clone().lerp(x,C/A),I=A-C;for(let V=0;V<=I;V++)V===0&&C===A?w[C][V]=T:w[C][V]=T.clone().lerp(S,V/I)}for(let C=0;C<A;C++)for(let T=0;T<2*(A-C)-1;T++){const S=Math.floor(T/2);T%2===0?(h(w[C][S+1]),h(w[C+1][S]),h(w[C][S])):(h(w[C][S+1]),h(w[C+1][S+1]),h(w[C+1][S]))}}function c(g){const _=new P;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(g),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function u(){const g=new P;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const x=m(g)/2/Math.PI+.5,b=f(g)/Math.PI+.5;o.push(x,1-b)}v(),d()}function d(){for(let g=0;g<o.length;g+=6){const _=o[g+0],x=o[g+2],b=o[g+4],A=Math.max(_,x,b),w=Math.min(_,x,b);A>.9&&w<.1&&(_<.2&&(o[g+0]+=1),x<.2&&(o[g+2]+=1),b<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,_){const x=g*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function v(){const g=new P,_=new P,x=new P,b=new P,A=new Ne,w=new Ne,C=new Ne;for(let T=0,S=0;T<s.length;T+=9,S+=6){g.set(s[T+0],s[T+1],s[T+2]),_.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),A.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),b.copy(g).add(_).add(x).divideScalar(3);const I=m(b);y(A,S+0,g,I),y(w,S+2,_,I),y(C,S+4,x,I)}}function y(g,_,x,b){b<0&&g.x===1&&(o[_]=g.x-1),x.x===0&&x.z===0&&(o[_]=b/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cf(e.vertices,e.indices,e.radius,e.details)}}class uf extends cf{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new uf(e.radius,e.detail)}}class df extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ui extends df{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xw extends Yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function cl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function jw(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function $w(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Im(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function k_(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class wa{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Yw extends wa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ep,endingEnd:Ep}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tp:s=e,a=2*t-i;break;case wp:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Tp:o=e,l=2*i-t;break;case wp:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,v=(i-t)/(r-t),y=v*v,m=y*v,f=-h*m+2*h*y-h*v,g=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*v+1,_=(-1-p)*m+(1.5+p)*y+.5*v,x=p*m-p*y;for(let b=0;b!==a;++b)s[b]=f*o[u+b]+g*o[c+b]+_*o[l+b]+x*o[d+b];return s}}class Kw extends wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}}class qw extends wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class di{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cl(t,this.TimeBufferType),this.values=cl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:cl(e.times,Array),values:cl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new qw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case nu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return nu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&jw(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===nu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*i,h=d-i,p=d+i;for(let v=0;v!==i;++v){const y=t[d+v];if(y!==t[h+v]||y!==t[p+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=ia;class oo extends di{constructor(e,t,i){super(e,t,i)}}oo.prototype.ValueTypeName="bool";oo.prototype.ValueBufferType=Array;oo.prototype.DefaultInterpolation=na;oo.prototype.InterpolantFactoryMethodLinear=void 0;oo.prototype.InterpolantFactoryMethodSmooth=void 0;class B_ extends di{}B_.prototype.ValueTypeName="color";class Ys extends di{}Ys.prototype.ValueTypeName="number";class Zw extends wa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)pr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ks extends di{InterpolantFactoryMethodLinear(e){return new Zw(this.times,this.values,this.getValueSize(),e)}}Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class ao extends di{constructor(e,t,i){super(e,t,i)}}ao.prototype.ValueTypeName="string";ao.prototype.ValueBufferType=Array;ao.prototype.DefaultInterpolation=na;ao.prototype.InterpolantFactoryMethodLinear=void 0;ao.prototype.InterpolantFactoryMethodSmooth=void 0;class qs extends di{}qs.prototype.ValueTypeName="vector";class Qw{constructor(e="",t=-1,i=[],r=qy){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=$n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(eA(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(di.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=$w(l);l=Im(l,1,u),c=Im(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ys(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=r[d];h||(r[d]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,h,p,v,y){if(p.length!==0){const m=[],f=[];k_(p,m,f,v),m.length!==0&&y.push(new d(h,m,f))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let v;for(v=0;v<h.length;v++)if(h[v].morphTargets)for(let y=0;y<h[v].morphTargets.length;y++)p[h[v].morphTargets[y]]=-1;for(const y in p){const m=[],f=[];for(let g=0;g!==h[v].morphTargets.length;++g){const _=h[v];m.push(_.time),f.push(_.morphTarget===y?1:0)}r.push(new Ys(".morphTargetInfluence["+y+"]",m,f))}l=p.length*o}else{const p=".bones["+t[d].name+"]";i(qs,p+".position",h,"pos",r),i(Ks,p+".quaternion",h,"rot",r),i(qs,p+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jw(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ys;case"vector":case"vector2":case"vector3":case"vector4":return qs;case"color":return B_;case"quaternion":return Ks;case"bool":case"boolean":return oo;case"string":return ao}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function eA(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jw(n.type);if(n.times===void 0){const t=[],i=[];k_(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Qi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class tA{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const nA=new tA;class lo{constructor(e){this.manager=e!==void 0?e:nA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lo.DEFAULT_MATERIAL_NAME="__DEFAULT";const vi={};class iA extends Error{constructor(e,t){super(e),this.response=t}}class z_ extends lo{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Qi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:i,onError:r});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=vi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,v=p!==0;let y=0;const m=new ReadableStream({start(f){g();function g(){d.read().then(({done:_,value:x})=>{if(_)f.close();else{y+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:v,loaded:y,total:p});for(let A=0,w=u.length;A<w;A++){const C=u[A];C.onProgress&&C.onProgress(b)}f.enqueue(x),g()}},_=>{f.error(_)})}}});return new Response(m)}else throw new iA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{Qi.add(e,c);const u=vi[e];delete vi[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete vi[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class rA extends lo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Qi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ra("img");function l(){u(),Qi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class sA extends lo{constructor(e){super(e)}load(e,t,i,r){const s=new It,o=new rA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Nc extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class oA extends Nc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Lu=new ke,Dm=new P,Nm=new P;class hf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ef,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Dm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dm),Nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nm),t.updateMatrixWorld(),Lu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class aA extends hf{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=js*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lA extends Nc{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new aA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Um=new ke,Mo=new P,Iu=new P;class cA extends hf{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Mo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Mo),Iu.copy(i.position),Iu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Iu),i.updateMatrixWorld(),r.makeTranslation(-Mo.x,-Mo.y,-Mo.z),Um.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Um)}}class uA extends Nc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new cA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dA extends hf{constructor(){super(new tf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H_ extends Nc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new dA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hA extends lo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Qi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Qi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Qi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Qi.add(e,l),s.manager.itemStart(e)}}class fA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fm(){return(typeof performance>"u"?Date:performance).now()}const ff="\\[\\]\\.:\\/",pA=new RegExp("["+ff+"]","g"),pf="[^"+ff+"]",mA="[^"+ff.replace("\\.","")+"]",gA=/((?:WC+[\/:])*)/.source.replace("WC",pf),_A=/(WCOD+)?/.source.replace("WCOD",mA),vA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pf),yA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pf),xA=new RegExp("^"+gA+_A+vA+yA+"$"),SA=["material","materials","bones","map"];class MA{constructor(e,t,i){const r=i||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class et{constructor(e,t,i){this.path=t,this.parsedPath=i||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,i):new et(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pA,"")}static parseTrackName(e){const t=xA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);SA.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=MA;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Om=new P,ul=new P;class V_{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Om.subVectors(e,this.start),ul.subVectors(this.end,this.start);const i=ul.dot(ul);let s=ul.dot(Om)/i;return t&&(s=Ot(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hh);class Uc{constructor(e=new P(0,0,0),t=new P(0,1,0),i=1){this.start=e,this.end=t,this.radius=i}clone(){return new Uc(this.start.clone(),this.end.clone(),this.radius)}set(e,t,i){this.start.copy(e),this.end.copy(t),this.radius=i}copy(e){this.start.copy(e.start),this.end.copy(e.end),this.radius=e.radius}getCenter(e){return e.copy(this.end).add(this.start).multiplyScalar(.5)}translate(e){this.start.add(e),this.end.add(e)}checkAABBAxis(e,t,i,r,s,o,a,l,c){return(s-e<c||s-i<c)&&(e-o<c||i-o<c)&&(a-t<c||a-r<c)&&(t-l<c||r-l<c)}intersectsBox(e){return this.checkAABBAxis(this.start.x,this.start.y,this.end.x,this.end.y,e.min.x,e.max.x,e.min.y,e.max.y,this.radius)&&this.checkAABBAxis(this.start.x,this.start.z,this.end.x,this.end.z,e.min.x,e.max.x,e.min.z,e.max.z,this.radius)&&this.checkAABBAxis(this.start.y,this.start.z,this.end.y,this.end.z,e.min.y,e.max.y,e.min.z,e.max.z,this.radius)}}const Eo=new P,To=new P,dl=new P,wo=new P,ti=new Gi,Du=new V_,EA=new V_,hl=new Dn,Ao=new Uc,TA=new P,wA=new P,AA=new P,bA=1e-10;function RA(n,e,t=null,i=null){const r=TA.copy(n.end).sub(n.start),s=wA.copy(e.end).sub(e.start),o=AA.copy(e.start).sub(n.start),a=r.dot(s),l=r.dot(r),c=s.dot(s),u=s.dot(o),d=r.dot(o);let h,p;const v=l*c-a*a;if(Math.abs(v)<bA){const y=-u/c,m=(a-u)/c;Math.abs(y-.5)<Math.abs(m-.5)?(h=0,p=y):(h=1,p=m)}else h=(u*a+d*c)/v,p=(h*a-u)/c;p=Math.max(0,Math.min(1,p)),h=Math.max(0,Math.min(1,h)),t&&t.copy(r).multiplyScalar(h).add(n.start),i&&i.copy(s).multiplyScalar(p).add(e.start)}class mf{constructor(e){this.box=e,this.bounds=new Zn,this.subTrees=[],this.triangles=[],this.layers=new Jh}addTriangle(e){return this.bounds.min.x=Math.min(this.bounds.min.x,e.a.x,e.b.x,e.c.x),this.bounds.min.y=Math.min(this.bounds.min.y,e.a.y,e.b.y,e.c.y),this.bounds.min.z=Math.min(this.bounds.min.z,e.a.z,e.b.z,e.c.z),this.bounds.max.x=Math.max(this.bounds.max.x,e.a.x,e.b.x,e.c.x),this.bounds.max.y=Math.max(this.bounds.max.y,e.a.y,e.b.y,e.c.y),this.bounds.max.z=Math.max(this.bounds.max.z,e.a.z,e.b.z,e.c.z),this.triangles.push(e),this}calcBox(){return this.box=this.bounds.clone(),this.box.min.x-=.01,this.box.min.y-=.01,this.box.min.z-=.01,this}split(e){if(!this.box)return;const t=[],i=To.copy(this.box.max).sub(this.box.min).multiplyScalar(.5);for(let s=0;s<2;s++)for(let o=0;o<2;o++)for(let a=0;a<2;a++){const l=new Zn,c=Eo.set(s,o,a);l.min.copy(this.box.min).add(c.multiply(i)),l.max.copy(l.min).add(i),t.push(new mf(l))}let r;for(;r=this.triangles.pop();)for(let s=0;s<t.length;s++)t[s].box.intersectsTriangle(r)&&t[s].triangles.push(r);for(let s=0;s<t.length;s++){const o=t[s].triangles.length;o>8&&e<16&&t[s].split(e+1),o!==0&&this.subTrees.push(t[s])}return this}build(){return this.calcBox(),this.split(0),this}getRayTriangles(e,t){for(let i=0;i<this.subTrees.length;i++){const r=this.subTrees[i];if(e.intersectsBox(r.box))if(r.triangles.length>0)for(let s=0;s<r.triangles.length;s++)t.indexOf(r.triangles[s])===-1&&t.push(r.triangles[s]);else r.getRayTriangles(e,t)}return t}triangleCapsuleIntersect(e,t){t.getPlane(ti);const i=ti.distanceToPoint(e.start)-e.radius,r=ti.distanceToPoint(e.end)-e.radius;if(i>0&&r>0||i<-e.radius&&r<-e.radius)return!1;const s=Math.abs(i/(Math.abs(i)+Math.abs(r))),o=Eo.copy(e.start).lerp(e.end,s);if(t.containsPoint(o))return{normal:ti.normal.clone(),point:o.clone(),depth:Math.abs(Math.min(i,r))};const a=e.radius*e.radius,l=Du.set(e.start,e.end),c=[[t.a,t.b],[t.b,t.c],[t.c,t.a]];for(let u=0;u<c.length;u++){const d=EA.set(c[u][0],c[u][1]);if(RA(l,d,dl,wo),dl.distanceToSquared(wo)<a)return{normal:dl.clone().sub(wo).normalize(),point:wo.clone(),depth:e.radius-dl.distanceTo(wo)}}return!1}triangleSphereIntersect(e,t){if(t.getPlane(ti),!e.intersectsPlane(ti))return!1;const i=Math.abs(ti.distanceToSphere(e)),r=e.radius*e.radius-i*i,s=ti.projectPoint(e.center,Eo);if(t.containsPoint(e.center))return{normal:ti.normal.clone(),point:s.clone(),depth:Math.abs(ti.distanceToSphere(e))};const o=[[t.a,t.b],[t.b,t.c],[t.c,t.a]];for(let a=0;a<o.length;a++){Du.set(o[a][0],o[a][1]),Du.closestPointToPoint(s,!0,To);const l=To.distanceToSquared(e.center);if(l<r)return{normal:e.center.clone().sub(To).normalize(),point:To.clone(),depth:e.radius-Math.sqrt(l)}}return!1}getSphereTriangles(e,t){for(let i=0;i<this.subTrees.length;i++){const r=this.subTrees[i];if(e.intersectsBox(r.box))if(r.triangles.length>0)for(let s=0;s<r.triangles.length;s++)t.indexOf(r.triangles[s])===-1&&t.push(r.triangles[s]);else r.getSphereTriangles(e,t)}}getCapsuleTriangles(e,t){for(let i=0;i<this.subTrees.length;i++){const r=this.subTrees[i];if(e.intersectsBox(r.box))if(r.triangles.length>0)for(let s=0;s<r.triangles.length;s++)t.indexOf(r.triangles[s])===-1&&t.push(r.triangles[s]);else r.getCapsuleTriangles(e,t)}}sphereIntersect(e){hl.copy(e);const t=[];let i,r=!1;this.getSphereTriangles(e,t);for(let s=0;s<t.length;s++)(i=this.triangleSphereIntersect(hl,t[s]))&&(r=!0,hl.center.add(i.normal.multiplyScalar(i.depth)));if(r){const s=hl.center.clone().sub(e.center),o=s.length();return{normal:s.normalize(),depth:o}}return!1}capsuleIntersect(e){Ao.copy(e);const t=[];let i,r=!1;this.getCapsuleTriangles(Ao,t);for(let s=0;s<t.length;s++)(i=this.triangleCapsuleIntersect(Ao,t[s]))&&(r=!0,Ao.translate(i.normal.multiplyScalar(i.depth)));if(r){const s=Ao.getCenter(new P).sub(e.getCenter(Eo)),o=s.length();return{normal:s.normalize(),depth:o}}return!1}rayIntersect(e){if(e.direction.length()===0)return;const t=[];let i,r,s=1e100;this.getRayTriangles(e,t);for(let o=0;o<t.length;o++){const a=e.intersectTriangle(t[o].a,t[o].b,t[o].c,!0,Eo);if(a){const l=a.sub(e.origin).length();s>l&&(r=a.clone().add(e.origin),s=l,i=t[o])}}return s<1e100?{distance:s,triangle:i,position:r}:!1}fromGraphNode(e){return e.updateWorldMatrix(!0,!0),e.traverse(t=>{if(t.isMesh===!0&&this.layers.test(t.layers)){let i,r=!1;t.geometry.index!==null?(r=!0,i=t.geometry.toNonIndexed()):i=t.geometry;const s=i.getAttribute("position");for(let o=0;o<s.count;o+=3){const a=new P().fromBufferAttribute(s,o),l=new P().fromBufferAttribute(s,o+1),c=new P().fromBufferAttribute(s,o+2);a.applyMatrix4(t.matrixWorld),l.applyMatrix4(t.matrixWorld),c.applyMatrix4(t.matrixWorld),this.addTriangle(new Wn(a,l,c))}r&&i.dispose()}}),this.build(),this}clear(){return this.box=null,this.bounds.makeEmpty(),this.subTrees.length=0,this.triangles.length=0,this}}class CA extends F_{constructor(e,t=16776960){super(new xn,new af({color:t,toneMapped:!1})),this.octree=e,this.color=t,this.type="OctreeHelper",this.update()}update(){const e=[];function t(i){for(let r=0;r<i.length;r++){const s=i[r].box.min,o=i[r].box.max;e.push(o.x,o.y,o.z),e.push(s.x,o.y,o.z),e.push(s.x,o.y,o.z),e.push(s.x,s.y,o.z),e.push(s.x,s.y,o.z),e.push(o.x,s.y,o.z),e.push(o.x,s.y,o.z),e.push(o.x,o.y,o.z),e.push(o.x,o.y,s.z),e.push(s.x,o.y,s.z),e.push(s.x,o.y,s.z),e.push(s.x,s.y,s.z),e.push(s.x,s.y,s.z),e.push(o.x,s.y,s.z),e.push(o.x,s.y,s.z),e.push(o.x,o.y,s.z),e.push(o.x,o.y,o.z),e.push(o.x,o.y,s.z),e.push(s.x,o.y,o.z),e.push(s.x,o.y,s.z),e.push(s.x,s.y,o.z),e.push(s.x,s.y,s.z),e.push(o.x,s.y,o.z),e.push(o.x,s.y,s.z),t(i[r].subTrees)}}t(this.octree.subTrees),this.geometry.dispose(),this.geometry=new xn,this.geometry.setAttribute("position",new vn(e,3))}dispose(){this.geometry.dispose(),this.material.dispose()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */let co=class Ol{constructor(e,t,i,r,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ol.nextNameID=Ol.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Ol.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}};class PA extends co{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Xd(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const LA={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Xd,toHexString:Xd},sa={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},IA={isPrimitive:!1,match:Array.isArray,fromHexString(n,e,t=1){const i=sa.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(255&i)/255*t},toHexString:([n,e,t],i=1)=>sa.toHexString(n*(i=255/i)<<16^e*i<<8^t*i<<0)},DA={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=sa.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(255&i)/255*t},toHexString:({r:n,g:e,b:t},i=1)=>sa.toHexString(n*(i=255/i)<<16^e*i<<8^t*i<<0)},NA=[LA,sa,IA,DA];class UA extends co{constructor(e,t,i,r){var s;super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,NA.find(o=>o.match(s))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Xd(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Nu extends co{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class FA extends co{constructor(e,t,i,r,s,o){super(e,t,i,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=u=>{const d=parseFloat(this.$input.value);isNaN(d)||(this._snapClampSetValue(d+u),this.$input.value=this.getValue())};let t,i,r,s,o,a=!1;const l=u=>{if(a){const d=u.clientX-t,h=u.clientY-i;Math.abs(h)>5?(u.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(d)>5&&c()}if(!a){const d=u.clientY-r;o-=d*this._step*this._arrowKeyMultiplier(u),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)}r=u.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let u=parseFloat(this.$input.value);isNaN(u)||(this._stepExplicit&&(u=this._snap(u)),this.setValue(this._clamp(u)))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),e(this._step*this._normalizeMouseWheel(u)))},{passive:!1}),this.$input.addEventListener("mousedown",u=>{t=u.clientX,i=r=u.clientY,a=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=h=>{const p=this.$slider.getBoundingClientRect();let v=(y=h,m=p.left,f=p.right,g=this._min,_=this._max,(y-m)/(f-m)*(_-g)+g);var y,m,f,g,_;this._snapClampSetValue(v)},t=h=>{e(h.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",i)};let r,s,o=!1;const a=h=>{h.preventDefault(),this._setDraggingStyle(!0),e(h.touches[0].clientX),o=!1},l=h=>{if(o){const p=h.touches[0].clientX-r,v=h.touches[0].clientY-s;Math.abs(p)>Math.abs(v)?a(h):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else h.preventDefault(),e(h.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},u=this._callOnFinishChange.bind(this);let d;this.$slider.addEventListener("mousedown",h=>{this._setDraggingStyle(!0),e(h.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",i)}),this.$slider.addEventListener("touchstart",h=>{h.touches.length>1||(this._hasScrollBar?(r=h.touches[0].clientX,s=h.touches[0].clientY,o=!0):a(h),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const p=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(u,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class OA extends co{constructor(e,t,i,r){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}let kA=class extends co{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},km=!1;class gf{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:r,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!km&&o&&(function(l){const c=document.createElement("style");c.innerHTML=l;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(c,u):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),km=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,i,r,s){if(Object(i)===i)return new OA(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new FA(this,e,t,i,r,s);case"boolean":return new PA(this,e,t);case"string":return new kA(this,e,t);case"function":return new Nu(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new UA(this,e,t,i)}addFolder(e){return new gf({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Nu||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Nu)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}var Xo=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),i(++n%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function i(u){for(var d=0;d<e.children.length;d++)e.children[d].style.display=d===u?"block":"none";n=u}var r=(performance||Date).now(),s=r,o=0,a=t(new Xo.Panel("FPS","#0ff","#002")),l=t(new Xo.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Xo.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(l.update(u-r,200),u>=s+1e3&&(a.update(o*1e3/(u-s),100),s=u,o=0,c)){var d=performance.memory;c.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:e,setMode:i}};Xo.Panel=function(n,e,t){var i=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,u=2*o,d=3*o,h=15*o,p=74*o,v=30*o,y=document.createElement("canvas");y.width=a,y.height=l,y.style.cssText="width:80px;height:48px";var m=y.getContext("2d");return m.font="bold "+9*o+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,l),m.fillStyle=e,m.fillText(n,c,u),m.fillRect(d,h,p,v),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(d,h,p,v),{dom:y,update:function(f,g){i=Math.min(i,f),r=Math.max(r,f),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,h),m.fillStyle=e,m.fillText(s(f)+" "+n+" ("+s(i)+"-"+s(r)+")",c,u),m.drawImage(y,d+o,h,p-o,v,d,h,p-o,v),m.fillRect(d+p-o,h,o,v),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(d+p-o,h,o,s((1-f/g)*v))}}};function Bm(n,e){if(e===Zy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===zd||e===__){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===zd)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class BA extends lo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new WA(t)}),this.register(function(t){return new XA(t)}),this.register(function(t){return new e1(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new n1(t)}),this.register(function(t){return new $A(t)}),this.register(function(t){return new YA(t)}),this.register(function(t){return new KA(t)}),this.register(function(t){return new qA(t)}),this.register(function(t){return new GA(t)}),this.register(function(t){return new ZA(t)}),this.register(function(t){return new jA(t)}),this.register(function(t){return new JA(t)}),this.register(function(t){return new QA(t)}),this.register(function(t){return new HA(t)}),this.register(function(t){return new i1(t)}),this.register(function(t){return new r1(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Wo.extractUrlBase(e);o=Wo.resolveURL(c,this.path)}else o=Wo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new z_(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===G_){try{o[ze.KHR_BINARY_GLTF]=new s1(e)}catch(d){r&&r(d);return}s=JSON.parse(o[ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new v1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case ze.KHR_MATERIALS_UNLIT:o[d]=new VA;break;case ze.KHR_DRACO_MESH_COMPRESSION:o[d]=new o1(s,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:o[d]=new a1;break;case ze.KHR_MESH_QUANTIZATION:o[d]=new l1;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function zA(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class HA{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Te(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Bt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new H_(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new uA(u),c.distance=d;break;case"spot":c=new lA(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class VA{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Ir}extendParams(e,t,i){const r=[];e.color=new Te(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Bt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,qt))}return Promise.all(r)}}class GA{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class WA{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(a,a)}return Promise.all(s)}}class XA{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class jA{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class $A{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Bt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,qt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class YA{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class KA{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],Bt),Promise.all(s)}}class qA{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class ZA{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],Bt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,qt)),Promise.all(s)}}class QA{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class JA{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class e1{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class t1{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class n1{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class i1{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(p),u,d,h,r.mode,r.filter),p})})}else return null}}class r1{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==wn.TRIANGLES&&c.mode!==wn.TRIANGLE_STRIP&&c.mode!==wn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const v of d){const y=new ke,m=new P,f=new pr,g=new P(1,1,1),_=new Vw(v.geometry,v.material,h);for(let x=0;x<h;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,x),l.SCALE&&g.fromBufferAttribute(l.SCALE,x),_.setMatrixAt(x,y.compose(m,f,g));for(const x in l)if(x==="_COLOR_0"){const b=l[x];_.instanceColor=new Gd(b.array,b.itemSize,b.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&v.geometry.setAttribute(x,l[x]);ct.prototype.copy.call(_,v),this.parser.assignFinalMaterial(_),p.push(_)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const G_="glTF",bo=12,zm={JSON:1313821514,BIN:5130562};class s1{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,bo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==G_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-bo,s=new DataView(e,bo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===zm.JSON){const c=new Uint8Array(e,bo+o,a);this.content=i.decode(c)}else if(l===zm.BIN){const c=bo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class o1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=jd[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=jd[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],p=Ds[h.componentType];c[d]=p.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){r.decodeDracoFile(u,function(p){for(const v in p.attributes){const y=p.attributes[v],m=l[v];m!==void 0&&(y.normalized=m)}d(p)},a,c,Bt,h)})})}}class a1{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class l1{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class W_ extends wa{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,d=(i-t)/u,h=d*d,p=h*d,v=e*c,y=v-c,m=-2*p+3*h,f=p-h,g=1-m,_=f-h+d;for(let x=0;x!==a;x++){const b=o[y+x+a],A=o[y+x+l]*u,w=o[v+x+a],C=o[v+x]*u;s[x]=g*b+_*A+m*w+f*C}return s}}const c1=new pr;class u1 extends W_{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return c1.fromArray(s).normalize().toArray(s),s}}const wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hm={9728:Qt,9729:gn,9984:a_,9985:Pl,9986:Fo,9987:Mi},Vm={33071:Zi,33648:Ql,10497:Gs},Uu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},d1={CUBICSPLINE:void 0,LINEAR:ia,STEP:na},Fu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function h1(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new df({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bi})),n.DefaultMaterial}function Ar(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function yi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function f1(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(h)}if(r){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function p1(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function m1(n){let e;const t=n.extensions&&n.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ou(t.attributes):e=n.indices+":"+Ou(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Ou(n.targets[i]);return e}function Ou(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function $d(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function g1(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const _1=new ke;class v1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new sA(this.options.manager):this.textureLoader=new hA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new z_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Ar(s,a,r),yi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Wo.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Uu[r.type],a=Ds[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Jt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Uu[r.type],c=Ds[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0;let y,m;if(p&&p!==d){const f=Math.floor(h/p),g="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let _=t.cache.get(g);_||(y=new c(a,f*p,r.count*p/u),_=new Ow(y,p/u),t.cache.add(g,_)),m=new sf(_,l,h%p/u,v)}else a===null?y=new c(r.count*l):y=new c(a,h,r.count*l),m=new Jt(y,l,v);if(r.sparse!==void 0){const f=Uu.SCALAR,g=Ds[r.sparse.indices.componentType],_=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,b=new g(o[1],_,r.sparse.count*f),A=new c(o[2],x,r.sparse.count*l);a!==null&&(m=new Jt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,C=b.length;w<C;w++){const T=b[w];if(m.setX(T,A[w*l]),l>=2&&m.setY(T,A[w*l+1]),l>=3&&m.setZ(T,A[w*l+2]),l>=4&&m.setW(T,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Hm[h.magFilter]||gn,u.minFilter=Hm[h.minFilter]||Mi,u.wrapS=Vm[h.wrapS]||Gs,u.wrapT=Vm[h.wrapT]||Gs,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,p){let v=h;t.isImageBitmapLoader===!0&&(v=function(y){const m=new It(y);m.needsUpdate=!0,h(m)}),t.load(Wo.resolveURL(d,s.path),v,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),yi(d,o),d.userData.mimeType=o.mimeType||g1(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[ze.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new O_,Yn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new af,Yn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return df}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ze.KHR_MATERIALS_UNLIT]){const d=r[ze.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Bt),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,qt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=oi);const u=s.alphaMode||Fu.OPAQUE;if(u===Fu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Fu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ir&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ne(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==Ir&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ir){const d=s.emissiveFactor;a.emissive=new Te().setRGB(d[0],d[1],d[2],Bt)}return s.emissiveTexture!==void 0&&o!==Ir&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,qt)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),yi(d,s),t.associations.set(d,{materials:e}),s.extensions&&Ar(r,d,s),d})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Gm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=m1(c),d=r[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Gm(new xn,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?h1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,v=u.length;p<v;p++){const y=u[p],m=o[p];let f;const g=c[p];if(m.mode===wn.TRIANGLES||m.mode===wn.TRIANGLE_STRIP||m.mode===wn.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new Bw(y,g):new sn(y,g),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===wn.TRIANGLE_STRIP?f.geometry=Bm(f.geometry,__):m.mode===wn.TRIANGLE_FAN&&(f.geometry=Bm(f.geometry,zd));else if(m.mode===wn.LINES)f=new F_(y,g);else if(m.mode===wn.LINE_STRIP)f=new lf(y,g);else if(m.mode===wn.LINE_LOOP)f=new Gw(y,g);else if(m.mode===wn.POINTS)f=new Ww(y,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&p1(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),yi(f,s),m.extensions&&Ar(r,f,m),t.assignFinalMaterial(f),d.push(f)}for(let p=0,v=d.length;p<v;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&Ar(r,d[0],s),d[0];const h=new Dr;s.extensions&&Ar(r,h,s),t.associations.set(h,{meshes:e});for(let p=0,v=d.length;p<v;p++)h.add(d[p]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Zt(Tx.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new tf(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),yi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new ke;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new of(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){const p=r.channels[d],v=r.samplers[p.sampler],y=p.target,m=y.node,f=r.parameters!==void 0?r.parameters[v.input]:v.input,g=r.parameters!==void 0?r.parameters[v.output]:v.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",g)),c.push(v),u.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],p=d[1],v=d[2],y=d[3],m=d[4],f=[];for(let g=0,_=h.length;g<_;g++){const x=h[g],b=p[g],A=v[g],w=y[g],C=m[g];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const T=i._createAnimationTracks(x,b,A,w,C);if(T)for(let S=0;S<T.length;S++)f.push(T[S])}return new Qw(s,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,_1)});for(let p=0,v=d.length;p<v;p++)u.add(d[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new N_:c.length>1?u=new Dr:c.length===1?u=c[0]:u=new ct,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),yi(u,s),s.extensions&&Ar(i,u,s),s.matrix!==void 0){const d=new ke;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Dr;i.name&&(s.name=r.createUniqueName(i.name)),yi(s,i),i.extensions&&Ar(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const c=u=>{const d=new Map;for(const[h,p]of r.associations)(h instanceof Yn||h instanceof It)&&d.set(h,p);return u.traverse(h=>{const p=r.associations.get(h);p!=null&&d.set(h,p)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Hi[s.path]===Hi.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Hi[s.path]){case Hi.weights:c=Ys;break;case Hi.rotation:c=Ks;break;case Hi.position:case Hi.scale:c=qs;break;default:switch(i.itemSize){case 1:c=Ys;break;case 2:case 3:default:c=qs;break}break}const u=r.interpolation!==void 0?d1[r.interpolation]:ia,d=this._getArrayFromAccessor(i);for(let h=0,p=l.length;h<p;h++){const v=new c(l[h]+"."+Hi[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=$d(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Ks?u1:W_;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function y1(n,e,t){const i=e.attributes,r=new Zn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=$d(Ds[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new P,l=new P;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],p=h.min,v=h.max;if(p!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),h.normalized){const y=$d(Ds[h.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Dn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Gm(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=jd[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return $e.workingColorSpace!==Bt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),yi(n,e),y1(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?f1(n,e.targets,t):n})}console.log("running");window.dat??(window.dat={});const N=window.dat;var t_;(t_=window.dat).iscalled??(t_.iscalled={});N.player??(N.player={});N.Octree??(N.Octree={});N.player??(N.player={});var n_;(n_=N.player).Obj??(n_.Obj={});var i_;(i_=N.player).collider??(i_.collider={});N.controls??(N.controls={});N.playerF??(N.playerF={});N.camera??(N.camera={});N.color??(N.color={});N.Ball??(N.Ball={});N.v3dZero=new P(0,0,0);N.isTesting=!0;N.isUiCon=!0;N.safeStagg=new P(0,0,0);N.fogStartDisInPlayGroundViwe=50;N.player.camera=new Zt(70,1,.1,1e3);N.player.camera.rotation.order="YXZ";N.GRAVITY=30;N.NUM_SPHERES=10;N.MAX_SPHERES=50;N.SPHERE_RADIUS=.2;N.STEPS_PER_FRAME=5;N.Octree.world=new mf;N.player.collider.type="Capsule";N.player.collider.height=.65;N.player.collider.radius=.35;N.player.collider.startingPoint=new P(0,3,0);N.player.Obj.velocity=new P;N.player.Obj.direction=new P;N.controls.eventOn="keydown";N.tmp=[];N.playerF.speedOnFloor=25;N.playerF.speedOnSky=8;N.playerF.jumpHeight=15;N.camera.MovementSpeedByKeyControl=5/100;N.sensitivity=100;N.max_sensitivity=200;N.isUidebug=!1;N.color.skyColor=8965358;N.color.white=16777215;N.color.black=0;N.color.red=16711680;N.color.green=65280;N.color.blue=255;N.color.Ball=14605965;N.Ball.color=N.color.Ball;N.Ball.opacity=1;N.Ball.transparent=!1;N.Ball.castShadow=!0;N.Ball.receiveShadow=!0;N.Ball.placeToStack=new P(0,-100,0);N.Ball.velocityMulti=1;N.Ball.roundness=3;N.player.collider.legORstart=N.player.collider.startingPoint.clone();N.player.collider.getEndByStart=(n,e)=>n.clone().add({x:0,y:e,z:0});N.player.collider.faceORend=N.player.collider.getEndByStart(N.player.collider.legORstart,N.player.collider.height);N.player.Obj.collider=new Uc(N.player.collider.legORstart.clone(),N.player.collider.faceORend.clone(),N.player.collider.radius);function x1(n,...e){var t;window.dat??(window.dat={}),(t=window.dat).iscalled??(t.iscalled={}),window.dat.iscalled[n.name]||queueMicrotask(()=>n(...e)),window.dat.iscalled[n.name]=!0}const Yd=new P,X_=new P,j_=new P,Wi=new Fw,jn=[];N.BallsObj=jn;const S1=new fA,Xi=new Uw({antialias:!0}),kl=new Xo,M1=new uf(N.SPHERE_RADIUS,N.Ball.roundness),E1=new Xw({color:N.Ball.color,opacity:N.Ball.opacity,transparent:N.Ball.transparent}),T1=new BA().setPath("./models/gltf/");function $_(n,e){let t=0;return function(...i){const r=new Date().getTime();if(r-t>=e)return t=r,n(...i)}}class w1{constructor(e,t,i,r,s){this.mesh=new sn(e,t),this.mesh.castShadow=N.Ball.castShadow,this.mesh.receiveShadow=N.Ball.receiveShadow,this.collider=new Dn(r.clone(),s),this.velocity=new P,this.scene=i,this.scene.add(this.mesh)}removeWhenIdlefor(e=500){this.isValocityZero()?this.remove():setTimeout(()=>this.removeWhenIdlefor(e),e)}moveToSafeStagg(){this.mesh.position.copy(N.safeStagg),this.collider.center.copy(N.safeStagg),this.velocity.copy(N.v3dZero)}updatePosition(){this.collider.center.add(this.velocity),this.mesh.position.copy(this.collider.center)}removeIfv0(){this.isValocityZero()&&this.remove()}isValocityZero(){return Math.abs(this.velocity.x)<.001&&Math.abs(this.velocity.y)<.1&&Math.abs(this.velocity.z)<.001}remove(){this.removeFromArray(),this.removeFromView()}removeFromView(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null)}removeFromArray(){const e=N.BallsObj.indexOf(this);if(e===-1){console.error("sphere not found in array");return}N.BallsObj.splice(e,1)}resetPos(){this.mesh&&(this.mesh.position.copy(N.safeStagg),this.collider.center.copy(N.safeStagg),this.velocity.copy(N.v3dZero)),this.remove()}}const _t={};function Y_(n){switch(n.code){case"KeyE":case"shoot":K_();return}if(!n.repeat)switch(n.code){}switch(n.code){}}function gs(n=0,e=0){N.player.camera.rotation.y-=n/(5*(N.max_sensitivity+1-N.sensitivity)),N.player.camera.rotation.x-=e/(5*(N.max_sensitivity+1-N.sensitivity)),N.player.camera.rotation.x>.5*Math.PI?N.player.camera.rotation.x=.5*Math.PI*.999:N.player.camera.rotation.x<-.5*Math.PI&&(N.player.camera.rotation.x=-.5*Math.PI*.999),N.player.camera.rotation.y%=Math.PI*2}const K_=$_(b1,100);function A1(n){n.stopPropagation(),document.body.requestPointerLock(),locals.fullScreenable&&locals.isAutoFullScreen&&document.body.requestFullscreen(),Z_=performance.now()}function Wm(){N.player.camera.aspect=window.innerWidth/window.innerHeight,N.player.camera.updateProjectionMatrix(),Xi.setSize(window.innerWidth,window.innerHeight)}function b1(){let n=jn.length;const e=n>N.MAX_SPHERES?jn[Math.min(n-1,k1)]:new w1(M1,E1,Wi,N.Ball.placeToStack,N.SPHERE_RADIUS);n=jn.length,jn.push(e),N.player.camera.getWorldDirection(N.player.Obj.direction),e.collider.center.copy(N.player.Obj.collider.end).addScaledVector(N.player.Obj.direction,N.player.Obj.collider.radius*1.5);const t=15+30*(1-Math.exp((Z_-performance.now())*.001));e.velocity.copy(N.player.Obj.direction).multiplyScalar(t*N.Ball.velocityMulti),e.velocity.addScaledVector(N.player.Obj.velocity,2),e.removeWhenIdlefor(500)}function R1(){const n=N.Octree.world.capsuleIntersect(N.player.Obj.collider);Ns=!1,n&&(Ns=n.normal.y>0,Ns||N.player.Obj.velocity.addScaledVector(n.normal,-n.normal.dot(N.player.Obj.velocity)),N.player.Obj.collider.translate(n.normal.multiplyScalar(n.depth)))}function C1(n){let e=Math.exp(-4*n)-1;Ns||(N.player.Obj.velocity.y-=N.GRAVITY*n,e*=.1),N.player.Obj.velocity.addScaledVector(N.player.Obj.velocity,e);const t=N.player.Obj.velocity.clone().multiplyScalar(n);N.player.Obj.collider.translate(t),R1(),N.player.camera.position.copy(N.player.Obj.collider.end)}function P1(n){const e=Yd.addVectors(N.player.Obj.collider.start,N.player.Obj.collider.end).multiplyScalar(.5),t=n.collider.center,i=N.player.Obj.collider.radius+n.collider.radius,r=i*i;for(const s of[N.player.Obj.collider.start,N.player.Obj.collider.end,e]){const o=s.distanceToSquared(t);if(o<r){const a=Yd.subVectors(s,t).normalize(),l=X_.copy(a).multiplyScalar(a.dot(N.player.Obj.velocity)),c=j_.copy(a).multiplyScalar(a.dot(n.velocity));N.player.Obj.velocity.add(c).sub(l),n.velocity.add(l).sub(c);const u=(i-Math.sqrt(o))/2;t.addScaledVector(a,-u)}}}function L1(){for(let n=0,e=jn.length;n<e;n++){const t=jn[n];for(let i=n+1;i<e;i++){const r=jn[i],s=t.collider.center.distanceToSquared(r.collider.center),o=t.collider.radius+r.collider.radius,a=o*o;if(s<a){const l=Yd.subVectors(t.collider.center,r.collider.center).normalize(),c=X_.copy(l).multiplyScalar(l.dot(t.velocity)),u=j_.copy(l).multiplyScalar(l.dot(r.velocity));t.velocity.add(u).sub(c),r.velocity.add(c).sub(u);const d=(o-Math.sqrt(s))/2;t.collider.center.addScaledVector(l,d),r.collider.center.addScaledVector(l,-d)}}}}function I1(n){var e;jn.forEach(t=>{t.collider.center.addScaledVector(t.velocity,n);const i=N.Octree.world.sphereIntersect(t.collider);i?(t.velocity.addScaledVector(i.normal,-i.normal.dot(t.velocity)*1.5),t.collider.center.add(i.normal.multiplyScalar(i.depth))):t.velocity.y-=N.GRAVITY*n;const r=Math.exp(-1.5*n)-1;t.velocity.addScaledVector(t.velocity,r),P1(t)}),L1();for(const t of jn)(e=t.mesh)==null||e.position.copy(t.collider.center)}function Xm(){return N.player.camera.getWorldDirection(N.player.Obj.direction),N.player.Obj.direction.y=0,N.player.Obj.direction.normalize(),N.player.Obj.direction}function jm(){return N.player.camera.getWorldDirection(N.player.Obj.direction),N.player.Obj.direction.y=0,N.player.Obj.direction.normalize(),N.player.Obj.direction.cross(N.player.camera.up),N.player.Obj.direction}function D1(n){const e=n*(Ns?N.playerF.speedOnFloor:N.playerF.speedOnSky);(_t.KeyW||_t.joystick_f)&&N.player.Obj.velocity.add(Xm().multiplyScalar(e)),(_t.KeyS||_t.joystick_b)&&N.player.Obj.velocity.add(Xm().multiplyScalar(-e)),(_t.KeyA||_t.joystick_l)&&N.player.Obj.velocity.add(jm().multiplyScalar(-e)),(_t.KeyD||_t.joystick_r)&&N.player.Obj.velocity.add(jm().multiplyScalar(e)),(_t.ArrowUp||_t.camera_f)&&gs(0,-N.camera.MovementSpeedByKeyControl*N.sensitivity),(_t.ArrowDown||_t.camera_b)&&gs(0,N.camera.MovementSpeedByKeyControl*N.sensitivity),(_t.ArrowLeft||_t.camera_l)&&gs(-N.camera.MovementSpeedByKeyControl*N.sensitivity,0),(_t.ArrowRight||_t.camera_r)&&gs(N.camera.MovementSpeedByKeyControl*N.sensitivity,0),Ns&&(_t.Space||_t.jump)&&(N.player.Obj.velocity.y=N.playerF.jumpHeight)}function N1(){N.player.camera.position.y<=-25&&U1(N.player.collider.legORstart.clone(),N.player.collider.faceORend.clone(),N.player.collider.faceORend.clone(),[0,0,0])}function U1(n,e,t,i,r=!1){N.player.Obj.collider.start.copy(n),N.player.Obj.collider.end.copy(e),N.player.camera.position.copy(t),N.player.camera.rotation.set(...i),r&&(N.player.Obj.collider.radius=N.player.collider.radius)}let F1=()=>Math.min(.05,S1.getDelta())/N.STEPS_PER_FRAME,O1=[];function q_(){let n=F1();for(let e=0;e<N.STEPS_PER_FRAME;e++)D1(n),C1(n),I1(n),O1.forEach(t=>t(n)),N1();Xi.render(Wi,N.player.camera),kl.update(),requestAnimationFrame(q_)}let Ns=!1,Z_=0,k1=0;console.log("running");class Nr{constructor(e=0,t=0){this.x=e,this.y=t}}class B1{constructor(e=0,t=0,i=0,r=0){this.x1=e,this.y1=t,this.x2=i,this.y2=r}start(){return[this.x1,this.y1]}end(){return[this.x2,this.y2]}as2Dmatrix(){return[this.start,this.end]}width(){return Math.abs(this.x1-this.x2)}height(){return Math.abs(this.y1-this.y2)}area(){return this.width()*this.height()}corners(){return[new Nr(this.x1,this.y1),new Nr(this.x1,this.y2),new Nr(this.x2,this.y1),new Nr(this.x2,this.y2)]}isPointInside(e){return this.x1<e.x&&e.x<this.x2&&this.y1<e.y&&e.y<this.y2}isanyCornarsInside(e){for(let t of e.corners())if(console.log(t,this),this.isPointInside(t))return!0;return!1}isCornarsOverlap(e){return this.area()<e.area()?e.isanyCornarsInside(this):this.isanyCornarsInside(e)}}let Fc=document.createElement("div",{});Fc.id="UIdiv";let Aa=document.createElement("div");Aa.classList.add("joystickDiv");Aa.classList.add("controlDiv");Aa.id="joystickDiv";let ba=document.createElement("div");ba.classList.add("cameraMoveDiv");ba.classList.add("controlDiv");ba.id="cameraMoveDiv";let Ra=document.createElement("div");Ra.classList.add("otherControlsDiv");Ra.classList.add("controlDiv");Ra.id="otherControlsDiv";const z1=["joystick_f","joystick_r","joystick_l","joystick_b","shoot","jump"];z1.map(n=>{let e=document.createElement("button");e.classList.add(n,"UIbtn"),e.id="UI"+n+"Btn",e.value=n,e.dataset.func=n;function t(r,s){["touchstart.0","touchcancel.1","touchend.1","mousedown.0","mouseup.1"].forEach(o=>{r.addEventListener(o.split(".")[0],i(!+o.split(".")[1]))})}t(e,e.value),e.id.includes("joystick")?Aa.appendChild(e):e.id.includes("camera")?ba.appendChild(e):Ra.appendChild(e);function i(r){return s=>{console.log(s),!s.repeat&&r&&s.type.includes("down")&&Y_({code:n}),console.log(s.target),_t[n]=r,s.stopPropagation(),console.log(_t)}}return e});Fc.append(Aa,ba,Ra);document.getElementById("container").append(Fc);window.addEventListener("DOMContentLoaded",H1);function H1(){let n={};n.control={},n.control.cameraMove={},n.control.cameraMove=()=>[[screen.availWidth/2,0],[screen.availWidth,screen.availHeight]],n.screenAreaBooked={},n.screenAreaBooked.cameraMove=[],n.screenAreaBooked.cameraMove+=[new B1(n.control.cameraMove()[0][0],n.control.cameraMove()[0][1],n.control.cameraMove()[1][0],n.control.cameraMove()[1][1])],Fc.addEventListener("touchmove",$_(e,100));function e(o){let a,l,c,u=s(o);u&&({movement:a,startFrom:l,event:c}=u),console.log(u),u&&(console.log(a),n.sensitivity=20,console.log(a),console.log(a.x,a.y),t(l)=="cameraMove"&&gs(a.x*n.sensitivity,a.y*n.sensitivity)),o.stopPropagation()}function t(o){for(let a in n.screenAreaBooked)for(const l of n.screenAreaBooked[a])if(l.isPointInside(o))return a}n.deltatime=1e3/60/dat.STEPS_PER_FRAME;let i={};function r(o,a){if(!i[a])return i[a]=o,console.info("1"),!1;let l=o.timeStamp-i[a].timeStamp;if(l>n.deltatime*10)return console.info("2"),i[a]=o,!1;if(l<=n.deltatime*10&&l>=n.deltatime){console.info("3"),console.log(o,i[a]);let c=new Nr(o.touches[0].screenX-i[a].touches[0].screenX,o.touches[0].screenY-i[a].touches[0].screenY),u=new Nr(i[a].touches[0].screenX,i[a].touches[0].screenY);return i[a]=o,{movement:c,startFrom:u,event:o}}return dat.tmp.push([a,l,n.deltatime*dat.STEPS_PER_FRAME])}function s(o){if(i.last){if(i.last.timeStamp-o.timeStamp>n.deltatime*10*dat.STEPS_PER_FRAME)return i.last=o,!1}else return i.last=o,!1;switch(t(new Nr(o.touches[0].screenX,o.touches[0].screenY))){case"cameraMove":return r(o,"cameraMove");case"block":case"blocked":return!1}}setTimeout(()=>{},1e4)}console.log("running");class V1{constructor(e){yr(this,"name",null);yr(this,"title",null);yr(this,"defaultValue",null);yr(this,"value",null);yr(this,"varPathStr","");yr(this,"htmlInputOptions",{type:"text",name:"",id:""});for(const t in e)this[t]!==void 0?typeof this[t]=="object"&&!Array.isArray(this[t])?this[t]=Object.assign(this[t],e[t]):this[t]=e[t]:console.error(t,"is not a valid proparty of SettingElem Class")}get getLocalStorageSettings(){return JSON.parse(localStorage.getItem("setting"))}getValueTypeFromName(e){return e.split(".").at(-1)}promptFor(e){switch(type=this.getValueTypeFromName(e),type){case"string":case"boolean":case"number":case"object":case"function":throw"function type not accepted"}}get settings(){return JSON.parse(localStorage.getItem("setting"))||{}}set settings(e){const i={...this.settings,...e};localStorage.setItem("setting",JSON.stringify(i))}htmlInputFuild(e){}}var Q_={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),G1=Symbol.for("react.portal"),W1=Symbol.for("react.fragment"),X1=Symbol.for("react.strict_mode"),j1=Symbol.for("react.profiler"),$1=Symbol.for("react.provider"),Y1=Symbol.for("react.context"),K1=Symbol.for("react.forward_ref"),q1=Symbol.for("react.suspense"),Z1=Symbol.for("react.memo"),Q1=Symbol.for("react.lazy"),$m=Symbol.iterator;function J1(n){return n===null||typeof n!="object"?null:(n=$m&&n[$m]||n["@@iterator"],typeof n=="function"?n:null)}var J_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ev=Object.assign,tv={};function uo(n,e,t){this.props=n,this.context=e,this.refs=tv,this.updater=t||J_}uo.prototype.isReactComponent={};uo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};uo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function nv(){}nv.prototype=uo.prototype;function _f(n,e,t){this.props=n,this.context=e,this.refs=tv,this.updater=t||J_}var vf=_f.prototype=new nv;vf.constructor=_f;ev(vf,uo.prototype);vf.isPureReactComponent=!0;var Ym=Array.isArray,iv=Object.prototype.hasOwnProperty,yf={current:null},rv={key:!0,ref:!0,__self:!0,__source:!0};function sv(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)iv.call(e,i)&&!rv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ca,type:n,key:s,ref:o,props:r,_owner:yf.current}}function eb(n,e){return{$$typeof:Ca,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function xf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ca}function tb(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Km=/\/+/g;function ku(n,e){return typeof n=="object"&&n!==null&&n.key!=null?tb(""+n.key):e.toString(36)}function Bl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ca:case G1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+ku(o,0):i,Ym(r)?(t="",n!=null&&(t=n.replace(Km,"$&/")+"/"),Bl(r,e,t,"",function(c){return c})):r!=null&&(xf(r)&&(r=eb(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Km,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ym(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+ku(s,a);o+=Bl(s,e,t,l,r)}else if(l=J1(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+ku(s,a++),o+=Bl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(n,e,t){if(n==null)return n;var i=[],r=0;return Bl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function nb(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var tn={current:null},zl={transition:null},ib={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:zl,ReactCurrentOwner:yf};function ov(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:fl,forEach:function(n,e,t){fl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return fl(n,function(){e++}),e},toArray:function(n){return fl(n,function(e){return e})||[]},only:function(n){if(!xf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};He.Component=uo;He.Fragment=W1;He.Profiler=j1;He.PureComponent=_f;He.StrictMode=X1;He.Suspense=q1;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ib;He.act=ov;He.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=ev({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)iv.call(e,l)&&!rv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ca,type:n.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(n){return n={$$typeof:Y1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:$1,_context:n},n.Consumer=n};He.createElement=sv;He.createFactory=function(n){var e=sv.bind(null,n);return e.type=n,e};He.createRef=function(){return{current:null}};He.forwardRef=function(n){return{$$typeof:K1,render:n}};He.isValidElement=xf;He.lazy=function(n){return{$$typeof:Q1,_payload:{_status:-1,_result:n},_init:nb}};He.memo=function(n,e){return{$$typeof:Z1,type:n,compare:e===void 0?null:e}};He.startTransition=function(n){var e=zl.transition;zl.transition={};try{n()}finally{zl.transition=e}};He.unstable_act=ov;He.useCallback=function(n,e){return tn.current.useCallback(n,e)};He.useContext=function(n){return tn.current.useContext(n)};He.useDebugValue=function(){};He.useDeferredValue=function(n){return tn.current.useDeferredValue(n)};He.useEffect=function(n,e){return tn.current.useEffect(n,e)};He.useId=function(){return tn.current.useId()};He.useImperativeHandle=function(n,e,t){return tn.current.useImperativeHandle(n,e,t)};He.useInsertionEffect=function(n,e){return tn.current.useInsertionEffect(n,e)};He.useLayoutEffect=function(n,e){return tn.current.useLayoutEffect(n,e)};He.useMemo=function(n,e){return tn.current.useMemo(n,e)};He.useReducer=function(n,e,t){return tn.current.useReducer(n,e,t)};He.useRef=function(n){return tn.current.useRef(n)};He.useState=function(n){return tn.current.useState(n)};He.useSyncExternalStore=function(n,e,t){return tn.current.useSyncExternalStore(n,e,t)};He.useTransition=function(){return tn.current.useTransition()};He.version="18.3.1";Q_.exports=He;var rb=Q_.exports,Nn={},av={exports:{}},lv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,j){var Q=D.length;D.push(j);e:for(;0<Q;){var oe=Q-1>>>1,Se=D[oe];if(0<r(Se,j))D[oe]=j,D[Q]=Se,Q=oe;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var j=D[0],Q=D.pop();if(Q!==j){D[0]=Q;e:for(var oe=0,Se=D.length,We=Se>>>1;oe<We;){var G=2*(oe+1)-1,ne=D[G],he=G+1,ue=D[he];if(0>r(ne,Q))he<Se&&0>r(ue,ne)?(D[oe]=ue,D[he]=Q,oe=he):(D[oe]=ne,D[G]=Q,oe=G);else if(he<Se&&0>r(ue,Q))D[oe]=ue,D[he]=Q,oe=he;else break e}}return j}function r(D,j){var Q=D.sortIndex-j.sortIndex;return Q!==0?Q:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var j=t(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=D)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=t(c)}}function x(D){if(y=!1,_(D),!v)if(t(l)!==null)v=!0,W(b);else{var j=t(c);j!==null&&q(x,j.startTime-D)}}function b(D,j){v=!1,y&&(y=!1,f(C),C=-1),p=!0;var Q=h;try{for(_(j),d=t(l);d!==null&&(!(d.expirationTime>j)||D&&!I());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,h=d.priorityLevel;var Se=oe(d.expirationTime<=j);j=n.unstable_now(),typeof Se=="function"?d.callback=Se:d===t(l)&&i(l),_(j)}else i(l);d=t(l)}if(d!==null)var We=!0;else{var G=t(c);G!==null&&q(x,G.startTime-j),We=!1}return We}finally{d=null,h=Q,p=!1}}var A=!1,w=null,C=-1,T=5,S=-1;function I(){return!(n.unstable_now()-S<T)}function V(){if(w!==null){var D=n.unstable_now();S=D;var j=!0;try{j=w(!0,D)}finally{j?H():(A=!1,w=null)}}else A=!1}var H;if(typeof g=="function")H=function(){g(V)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,K=Y.port2;Y.port1.onmessage=V,H=function(){K.postMessage(null)}}else H=function(){m(V,0)};function W(D){w=D,A||(A=!0,H())}function q(D,j){C=m(function(){D(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,W(b))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var Q=h;h=j;try{return D()}finally{h=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=h;h=D;try{return j()}finally{h=Q}},n.unstable_scheduleCallback=function(D,j,Q){var oe=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,D){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Q+Se,D={id:u++,callback:j,priorityLevel:D,startTime:Q,expirationTime:Se,sortIndex:-1},Q>oe?(D.sortIndex=Q,e(c,D),t(l)===null&&D===t(c)&&(y?(f(C),C=-1):y=!0,q(x,Q-oe))):(D.sortIndex=Se,e(l,D),v||p||(v=!0,W(b))),D},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(D){var j=h;return function(){var Q=h;h=j;try{return D.apply(this,arguments)}finally{h=Q}}}})(lv);av.exports=lv;var sb=av.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ob=rb,Sn=sb;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cv=new Set,oa={};function $r(n,e){Zs(n,e),Zs(n+"Capture",e)}function Zs(n,e){for(oa[n]=e,n=0;n<e.length;n++)cv.add(e[n])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kd=Object.prototype.hasOwnProperty,ab=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qm={},Zm={};function lb(n){return Kd.call(Zm,n)?!0:Kd.call(qm,n)?!1:ab.test(n)?Zm[n]=!0:(qm[n]=!0,!1)}function cb(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function ub(n,e,t,i){if(e===null||typeof e>"u"||cb(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){zt[n]=new nn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];zt[e]=new nn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){zt[n]=new nn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){zt[n]=new nn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){zt[n]=new nn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){zt[n]=new nn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){zt[n]=new nn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){zt[n]=new nn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){zt[n]=new nn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Sf=/[\-:]([a-z])/g;function Mf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Sf,Mf);zt[e]=new nn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Sf,Mf);zt[e]=new nn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Sf,Mf);zt[e]=new nn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){zt[n]=new nn(n,1,!1,n.toLowerCase(),null,!1,!1)});zt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){zt[n]=new nn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ef(n,e,t,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ub(e,t,r,i)&&(t=null),i||r===null?lb(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Di=ob.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),_s=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),Tf=Symbol.for("react.strict_mode"),qd=Symbol.for("react.profiler"),uv=Symbol.for("react.provider"),dv=Symbol.for("react.context"),wf=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),Qd=Symbol.for("react.suspense_list"),Af=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),hv=Symbol.for("react.offscreen"),Qm=Symbol.iterator;function Ro(n){return n===null||typeof n!="object"?null:(n=Qm&&n[Qm]||n["@@iterator"],typeof n=="function"?n:null)}var ft=Object.assign,Bu;function ko(n){if(Bu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Bu=e&&e[1]||""}return`
`+Bu+n}var zu=!1;function Hu(n,e){if(!n||zu)return"";zu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{zu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ko(n):""}function db(n){switch(n.tag){case 5:return ko(n.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return n=Hu(n.type,!1),n;case 11:return n=Hu(n.type.render,!1),n;case 1:return n=Hu(n.type,!0),n;default:return""}}function Jd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case vs:return"Fragment";case _s:return"Portal";case qd:return"Profiler";case Tf:return"StrictMode";case Zd:return"Suspense";case Qd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case dv:return(n.displayName||"Context")+".Consumer";case uv:return(n._context.displayName||"Context")+".Provider";case wf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Af:return e=n.displayName||null,e!==null?e:Jd(n.type)||"Memo";case ji:e=n._payload,n=n._init;try{return Jd(n(e))}catch{}}return null}function hb(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jd(e);case 8:return e===Tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function fv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fb(n){var e=fv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ml(n){n._valueTracker||(n._valueTracker=fb(n))}function pv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=fv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function sc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function eh(n,e){var t=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Jm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=hr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mv(n,e){e=e.checked,e!=null&&Ef(n,"checked",e,!1)}function th(n,e){mv(n,e);var t=hr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?nh(n,e.type,t):e.hasOwnProperty("defaultValue")&&nh(n,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function eg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function nh(n,e,t){(e!=="number"||sc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Bo=Array.isArray;function Us(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+hr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ih(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function tg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(Bo(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:hr(t)}}function gv(n,e){var t=hr(e.value),i=hr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function ng(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function _v(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?_v(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var gl,vv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function aa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pb=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(n){pb.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),jo[e]=jo[n]})});function yv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||jo.hasOwnProperty(n)&&jo[n]?(""+e).trim():e+"px"}function xv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=yv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var mb=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sh(n,e){if(e){if(mb[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function oh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ah=null;function bf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lh=null,Fs=null,Os=null;function ig(n){if(n=Ia(n)){if(typeof lh!="function")throw Error(te(280));var e=n.stateNode;e&&(e=Hc(e),lh(n.stateNode,n.type,e))}}function Sv(n){Fs?Os?Os.push(n):Os=[n]:Fs=n}function Mv(){if(Fs){var n=Fs,e=Os;if(Os=Fs=null,ig(n),e)for(n=0;n<e.length;n++)ig(e[n])}}function Ev(n,e){return n(e)}function Tv(){}var Vu=!1;function wv(n,e,t){if(Vu)return n(e,t);Vu=!0;try{return Ev(n,e,t)}finally{Vu=!1,(Fs!==null||Os!==null)&&(Tv(),Mv())}}function la(n,e){var t=n.stateNode;if(t===null)return null;var i=Hc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var ch=!1;if(Ci)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){ch=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{ch=!1}function gb(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var $o=!1,oc=null,ac=!1,uh=null,_b={onError:function(n){$o=!0,oc=n}};function vb(n,e,t,i,r,s,o,a,l){$o=!1,oc=null,gb.apply(_b,arguments)}function yb(n,e,t,i,r,s,o,a,l){if(vb.apply(this,arguments),$o){if($o){var c=oc;$o=!1,oc=null}else throw Error(te(198));ac||(ac=!0,uh=c)}}function Yr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Av(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function rg(n){if(Yr(n)!==n)throw Error(te(188))}function xb(n){var e=n.alternate;if(!e){if(e=Yr(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return rg(r),n;if(s===i)return rg(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function bv(n){return n=xb(n),n!==null?Rv(n):null}function Rv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Rv(n);if(e!==null)return e;n=n.sibling}return null}var Cv=Sn.unstable_scheduleCallback,sg=Sn.unstable_cancelCallback,Sb=Sn.unstable_shouldYield,Mb=Sn.unstable_requestPaint,yt=Sn.unstable_now,Eb=Sn.unstable_getCurrentPriorityLevel,Rf=Sn.unstable_ImmediatePriority,Pv=Sn.unstable_UserBlockingPriority,lc=Sn.unstable_NormalPriority,Tb=Sn.unstable_LowPriority,Lv=Sn.unstable_IdlePriority,Oc=null,li=null;function wb(n){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Oc,n,void 0,(n.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:Rb,Ab=Math.log,bb=Math.LN2;function Rb(n){return n>>>=0,n===0?32:31-(Ab(n)/bb|0)|0}var _l=64,vl=4194304;function zo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function cc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=zo(a):(s&=o,s!==0&&(i=zo(s)))}else o=t&~r,o!==0?i=zo(o):s!==0&&(i=zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Kn(e),r=1<<t,i|=n[t],e&=~r;return i}function Cb(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pb(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Kn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Cb(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function dh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Iv(){var n=_l;return _l<<=1,!(_l&4194240)&&(_l=64),n}function Gu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Pa(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Kn(e),n[e]=t}function Lb(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Kn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Cf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Kn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var tt=0;function Dv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Nv,Pf,Uv,Fv,Ov,hh=!1,yl=[],ir=null,rr=null,sr=null,ca=new Map,ua=new Map,Ki=[],Ib="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function og(n,e){switch(n){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function Po(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ia(e),e!==null&&Pf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Db(n,e,t,i,r){switch(e){case"focusin":return ir=Po(ir,n,e,t,i,r),!0;case"dragenter":return rr=Po(rr,n,e,t,i,r),!0;case"mouseover":return sr=Po(sr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,Po(ca.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,Po(ua.get(s)||null,n,e,t,i,r)),!0}return!1}function kv(n){var e=Ur(n.target);if(e!==null){var t=Yr(e);if(t!==null){if(e=t.tag,e===13){if(e=Av(t),e!==null){n.blockedOn=e,Ov(n.priority,function(){Uv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Hl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=fh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);ah=i,t.target.dispatchEvent(i),ah=null}else return e=Ia(t),e!==null&&Pf(e),n.blockedOn=t,!1;e.shift()}return!0}function ag(n,e,t){Hl(n)&&t.delete(e)}function Nb(){hh=!1,ir!==null&&Hl(ir)&&(ir=null),rr!==null&&Hl(rr)&&(rr=null),sr!==null&&Hl(sr)&&(sr=null),ca.forEach(ag),ua.forEach(ag)}function Lo(n,e){n.blockedOn===e&&(n.blockedOn=null,hh||(hh=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,Nb)))}function da(n){function e(r){return Lo(r,n)}if(0<yl.length){Lo(yl[0],n);for(var t=1;t<yl.length;t++){var i=yl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ir!==null&&Lo(ir,n),rr!==null&&Lo(rr,n),sr!==null&&Lo(sr,n),ca.forEach(e),ua.forEach(e),t=0;t<Ki.length;t++)i=Ki[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ki.length&&(t=Ki[0],t.blockedOn===null);)kv(t),t.blockedOn===null&&Ki.shift()}var ks=Di.ReactCurrentBatchConfig,uc=!0;function Ub(n,e,t,i){var r=tt,s=ks.transition;ks.transition=null;try{tt=1,Lf(n,e,t,i)}finally{tt=r,ks.transition=s}}function Fb(n,e,t,i){var r=tt,s=ks.transition;ks.transition=null;try{tt=4,Lf(n,e,t,i)}finally{tt=r,ks.transition=s}}function Lf(n,e,t,i){if(uc){var r=fh(n,e,t,i);if(r===null)Ju(n,e,i,dc,t),og(n,i);else if(Db(r,n,e,t,i))i.stopPropagation();else if(og(n,i),e&4&&-1<Ib.indexOf(n)){for(;r!==null;){var s=Ia(r);if(s!==null&&Nv(s),s=fh(n,e,t,i),s===null&&Ju(n,e,i,dc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ju(n,e,i,null,t)}}var dc=null;function fh(n,e,t,i){if(dc=null,n=bf(i),n=Ur(n),n!==null)if(e=Yr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Av(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return dc=n,null}function Bv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Eb()){case Rf:return 1;case Pv:return 4;case lc:case Tb:return 16;case Lv:return 536870912;default:return 16}default:return 16}}var Ji=null,If=null,Vl=null;function zv(){if(Vl)return Vl;var n,e=If,t=e.length,i,r="value"in Ji?Ji.value:Ji.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Vl=r.slice(n,1<i?1-i:void 0)}function Gl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function xl(){return!0}function lg(){return!1}function Mn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xl:lg,this.isPropagationStopped=lg,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Df=Mn(ho),La=ft({},ho,{view:0,detail:0}),Ob=Mn(La),Wu,Xu,Io,kc=ft({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Io&&(Io&&n.type==="mousemove"?(Wu=n.screenX-Io.screenX,Xu=n.screenY-Io.screenY):Xu=Wu=0,Io=n),Wu)},movementY:function(n){return"movementY"in n?n.movementY:Xu}}),cg=Mn(kc),kb=ft({},kc,{dataTransfer:0}),Bb=Mn(kb),zb=ft({},La,{relatedTarget:0}),ju=Mn(zb),Hb=ft({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),Vb=Mn(Hb),Gb=ft({},ho,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Wb=Mn(Gb),Xb=ft({},ho,{data:0}),ug=Mn(Xb),jb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$b={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kb(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Yb[n])?!!e[n]:!1}function Nf(){return Kb}var qb=ft({},La,{key:function(n){if(n.key){var e=jb[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Gl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$b[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nf,charCode:function(n){return n.type==="keypress"?Gl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Gl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Zb=Mn(qb),Qb=ft({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dg=Mn(Qb),Jb=ft({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nf}),eR=Mn(Jb),tR=ft({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),nR=Mn(tR),iR=ft({},kc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rR=Mn(iR),sR=[9,13,27,32],Uf=Ci&&"CompositionEvent"in window,Yo=null;Ci&&"documentMode"in document&&(Yo=document.documentMode);var oR=Ci&&"TextEvent"in window&&!Yo,Hv=Ci&&(!Uf||Yo&&8<Yo&&11>=Yo),hg=" ",fg=!1;function Vv(n,e){switch(n){case"keyup":return sR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ys=!1;function aR(n,e){switch(n){case"compositionend":return Gv(e);case"keypress":return e.which!==32?null:(fg=!0,hg);case"textInput":return n=e.data,n===hg&&fg?null:n;default:return null}}function lR(n,e){if(ys)return n==="compositionend"||!Uf&&Vv(n,e)?(n=zv(),Vl=If=Ji=null,ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hv&&e.locale!=="ko"?null:e.data;default:return null}}var cR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!cR[n.type]:e==="textarea"}function Wv(n,e,t,i){Sv(i),e=hc(e,"onChange"),0<e.length&&(t=new Df("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ko=null,ha=null;function uR(n){t0(n,0)}function Bc(n){var e=Ms(n);if(pv(e))return n}function dR(n,e){if(n==="change")return e}var Xv=!1;if(Ci){var $u;if(Ci){var Yu="oninput"in document;if(!Yu){var mg=document.createElement("div");mg.setAttribute("oninput","return;"),Yu=typeof mg.oninput=="function"}$u=Yu}else $u=!1;Xv=$u&&(!document.documentMode||9<document.documentMode)}function gg(){Ko&&(Ko.detachEvent("onpropertychange",jv),ha=Ko=null)}function jv(n){if(n.propertyName==="value"&&Bc(ha)){var e=[];Wv(e,ha,n,bf(n)),wv(uR,e)}}function hR(n,e,t){n==="focusin"?(gg(),Ko=e,ha=t,Ko.attachEvent("onpropertychange",jv)):n==="focusout"&&gg()}function fR(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Bc(ha)}function pR(n,e){if(n==="click")return Bc(e)}function mR(n,e){if(n==="input"||n==="change")return Bc(e)}function gR(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Jn=typeof Object.is=="function"?Object.is:gR;function fa(n,e){if(Jn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Kd.call(e,r)||!Jn(n[r],e[r]))return!1}return!0}function _g(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vg(n,e){var t=_g(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=_g(t)}}function $v(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?$v(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Yv(){for(var n=window,e=sc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=sc(n.document)}return e}function Ff(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function _R(n){var e=Yv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&$v(t.ownerDocument.documentElement,t)){if(i!==null&&Ff(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=vg(t,s);var o=vg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var vR=Ci&&"documentMode"in document&&11>=document.documentMode,xs=null,ph=null,qo=null,mh=!1;function yg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mh||xs==null||xs!==sc(i)||(i=xs,"selectionStart"in i&&Ff(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qo&&fa(qo,i)||(qo=i,i=hc(ph,"onSelect"),0<i.length&&(e=new Df("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=xs)))}function Sl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ss={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Ku={},Kv={};Ci&&(Kv=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function zc(n){if(Ku[n])return Ku[n];if(!Ss[n])return n;var e=Ss[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Kv)return Ku[n]=e[t];return n}var qv=zc("animationend"),Zv=zc("animationiteration"),Qv=zc("animationstart"),Jv=zc("transitionend"),e0=new Map,xg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(n,e){e0.set(n,e),$r(e,[n])}for(var qu=0;qu<xg.length;qu++){var Zu=xg[qu],yR=Zu.toLowerCase(),xR=Zu[0].toUpperCase()+Zu.slice(1);mr(yR,"on"+xR)}mr(qv,"onAnimationEnd");mr(Zv,"onAnimationIteration");mr(Qv,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(Jv,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function Sg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,yb(i,e,void 0,n),n.currentTarget=null}function t0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Sg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Sg(r,a,c),s=l}}}if(ac)throw n=uh,ac=!1,uh=null,n}function st(n,e){var t=e[xh];t===void 0&&(t=e[xh]=new Set);var i=n+"__bubble";t.has(i)||(n0(e,n,2,!1),t.add(i))}function Qu(n,e,t){var i=0;e&&(i|=4),n0(t,n,i,e)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function pa(n){if(!n[Ml]){n[Ml]=!0,cv.forEach(function(t){t!=="selectionchange"&&(SR.has(t)||Qu(t,!1,n),Qu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ml]||(e[Ml]=!0,Qu("selectionchange",!1,e))}}function n0(n,e,t,i){switch(Bv(e)){case 1:var r=Ub;break;case 4:r=Fb;break;default:r=Lf}t=r.bind(null,e,t,n),r=void 0,!ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ju(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}wv(function(){var c=s,u=bf(t),d=[];e:{var h=e0.get(n);if(h!==void 0){var p=Df,v=n;switch(n){case"keypress":if(Gl(t)===0)break e;case"keydown":case"keyup":p=Zb;break;case"focusin":v="focus",p=ju;break;case"focusout":v="blur",p=ju;break;case"beforeblur":case"afterblur":p=ju;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Bb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=eR;break;case qv:case Zv:case Qv:p=Vb;break;case Jv:p=nR;break;case"scroll":p=Ob;break;case"wheel":p=rR;break;case"copy":case"cut":case"paste":p=Wb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=dg}var y=(e&4)!==0,m=!y&&n==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,_;g!==null;){_=g;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,f!==null&&(x=la(g,f),x!=null&&y.push(ma(g,x,_)))),m)break;g=g.return}0<y.length&&(h=new p(h,v,null,t,u),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==ah&&(v=t.relatedTarget||t.fromElement)&&(Ur(v)||v[Pi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=c,v=v?Ur(v):null,v!==null&&(m=Yr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=cg,x="onMouseLeave",f="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(y=dg,x="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:Ms(p),_=v==null?h:Ms(v),h=new y(x,g+"leave",p,t,u),h.target=m,h.relatedTarget=_,x=null,Ur(u)===c&&(y=new y(f,g+"enter",v,t,u),y.target=_,y.relatedTarget=m,x=y),m=x,p&&v)t:{for(y=p,f=v,g=0,_=y;_;_=ps(_))g++;for(_=0,x=f;x;x=ps(x))_++;for(;0<g-_;)y=ps(y),g--;for(;0<_-g;)f=ps(f),_--;for(;g--;){if(y===f||f!==null&&y===f.alternate)break t;y=ps(y),f=ps(f)}y=null}else y=null;p!==null&&Mg(d,h,p,y,!1),v!==null&&m!==null&&Mg(d,m,v,y,!0)}}e:{if(h=c?Ms(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=dR;else if(pg(h))if(Xv)b=mR;else{b=fR;var A=hR}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=pR);if(b&&(b=b(n,c))){Wv(d,b,t,u);break e}A&&A(n,h,c),n==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&nh(h,"number",h.value)}switch(A=c?Ms(c):window,n){case"focusin":(pg(A)||A.contentEditable==="true")&&(xs=A,ph=c,qo=null);break;case"focusout":qo=ph=xs=null;break;case"mousedown":mh=!0;break;case"contextmenu":case"mouseup":case"dragend":mh=!1,yg(d,t,u);break;case"selectionchange":if(vR)break;case"keydown":case"keyup":yg(d,t,u)}var w;if(Uf)e:{switch(n){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ys?Vv(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Hv&&t.locale!=="ko"&&(ys||C!=="onCompositionStart"?C==="onCompositionEnd"&&ys&&(w=zv()):(Ji=u,If="value"in Ji?Ji.value:Ji.textContent,ys=!0)),A=hc(c,C),0<A.length&&(C=new ug(C,n,null,t,u),d.push({event:C,listeners:A}),w?C.data=w:(w=Gv(t),w!==null&&(C.data=w)))),(w=oR?aR(n,t):lR(n,t))&&(c=hc(c,"onBeforeInput"),0<c.length&&(u=new ug("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=w))}t0(d,e)})}function ma(n,e,t){return{instance:n,listener:e,currentTarget:t}}function hc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(n,t),s!=null&&i.unshift(ma(n,s,r)),s=la(n,e),s!=null&&i.push(ma(n,s,r))),n=n.return}return i}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Mg(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=la(t,s),l!=null&&o.unshift(ma(t,l,a))):r||(l=la(t,s),l!=null&&o.push(ma(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var MR=/\r\n?/g,ER=/\u0000|\uFFFD/g;function Eg(n){return(typeof n=="string"?n:""+n).replace(MR,`
`).replace(ER,"")}function El(n,e,t){if(e=Eg(e),Eg(n)!==e&&t)throw Error(te(425))}function fc(){}var gh=null,_h=null;function vh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yh=typeof setTimeout=="function"?setTimeout:void 0,TR=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,wR=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(n){return Tg.resolve(null).then(n).catch(AR)}:yh;function AR(n){setTimeout(function(){throw n})}function ed(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),da(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);da(e)}function or(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function wg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var fo=Math.random().toString(36).slice(2),ai="__reactFiber$"+fo,ga="__reactProps$"+fo,Pi="__reactContainer$"+fo,xh="__reactEvents$"+fo,bR="__reactListeners$"+fo,RR="__reactHandles$"+fo;function Ur(n){var e=n[ai];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Pi]||t[ai]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=wg(n);n!==null;){if(t=n[ai])return t;n=wg(n)}return e}n=t,t=n.parentNode}return null}function Ia(n){return n=n[ai]||n[Pi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function Hc(n){return n[ga]||null}var Sh=[],Es=-1;function gr(n){return{current:n}}function at(n){0>Es||(n.current=Sh[Es],Sh[Es]=null,Es--)}function rt(n,e){Es++,Sh[Es]=n.current,n.current=e}var fr={},jt=gr(fr),ln=gr(!1),Vr=fr;function Qs(n,e){var t=n.type.contextTypes;if(!t)return fr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function cn(n){return n=n.childContextTypes,n!=null}function pc(){at(ln),at(jt)}function Ag(n,e,t){if(jt.current!==fr)throw Error(te(168));rt(jt,e),rt(ln,t)}function i0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,hb(n)||"Unknown",r));return ft({},t,i)}function mc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fr,Vr=jt.current,rt(jt,n),rt(ln,ln.current),!0}function bg(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=i0(n,e,Vr),i.__reactInternalMemoizedMergedChildContext=n,at(ln),at(jt),rt(jt,n)):at(ln),rt(ln,t)}var Si=null,Vc=!1,td=!1;function r0(n){Si===null?Si=[n]:Si.push(n)}function CR(n){Vc=!0,r0(n)}function _r(){if(!td&&Si!==null){td=!0;var n=0,e=tt;try{var t=Si;for(tt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Si=null,Vc=!1}catch(r){throw Si!==null&&(Si=Si.slice(n+1)),Cv(Rf,_r),r}finally{tt=e,td=!1}}return null}var Ts=[],ws=0,gc=null,_c=0,An=[],bn=0,Gr=null,Ti=1,wi="";function Rr(n,e){Ts[ws++]=_c,Ts[ws++]=gc,gc=n,_c=e}function s0(n,e,t){An[bn++]=Ti,An[bn++]=wi,An[bn++]=Gr,Gr=n;var i=Ti;n=wi;var r=32-Kn(i)-1;i&=~(1<<r),t+=1;var s=32-Kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ti=1<<32-Kn(e)+r|t<<r|i,wi=s+n}else Ti=1<<s|t<<r|i,wi=n}function Of(n){n.return!==null&&(Rr(n,1),s0(n,1,0))}function kf(n){for(;n===gc;)gc=Ts[--ws],Ts[ws]=null,_c=Ts[--ws],Ts[ws]=null;for(;n===Gr;)Gr=An[--bn],An[bn]=null,wi=An[--bn],An[bn]=null,Ti=An[--bn],An[bn]=null}var yn=null,_n=null,lt=!1,Vn=null;function o0(n,e){var t=Cn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Rg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,yn=n,_n=or(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,yn=n,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Gr!==null?{id:Ti,overflow:wi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Cn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,yn=n,_n=null,!0):!1;default:return!1}}function Mh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Eh(n){if(lt){var e=_n;if(e){var t=e;if(!Rg(n,e)){if(Mh(n))throw Error(te(418));e=or(t.nextSibling);var i=yn;e&&Rg(n,e)?o0(i,t):(n.flags=n.flags&-4097|2,lt=!1,yn=n)}}else{if(Mh(n))throw Error(te(418));n.flags=n.flags&-4097|2,lt=!1,yn=n}}}function Cg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;yn=n}function Tl(n){if(n!==yn)return!1;if(!lt)return Cg(n),lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!vh(n.type,n.memoizedProps)),e&&(e=_n)){if(Mh(n))throw a0(),Error(te(418));for(;e;)o0(n,e),e=or(e.nextSibling)}if(Cg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){_n=or(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}_n=null}}else _n=yn?or(n.stateNode.nextSibling):null;return!0}function a0(){for(var n=_n;n;)n=or(n.nextSibling)}function Js(){_n=yn=null,lt=!1}function Bf(n){Vn===null?Vn=[n]:Vn.push(n)}var PR=Di.ReactCurrentBatchConfig;function Do(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function wl(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Pg(n){var e=n._init;return e(n._payload)}function l0(n){function e(f,g){if(n){var _=f.deletions;_===null?(f.deletions=[g],f.flags|=16):_.push(g)}}function t(f,g){if(!n)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=ur(f,g),f.index=0,f.sibling=null,f}function s(f,g,_){return f.index=_,n?(_=f.alternate,_!==null?(_=_.index,_<g?(f.flags|=2,g):_):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,g,_,x){return g===null||g.tag!==6?(g=ld(_,f.mode,x),g.return=f,g):(g=r(g,_),g.return=f,g)}function l(f,g,_,x){var b=_.type;return b===vs?u(f,g,_.props.children,x,_.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ji&&Pg(b)===g.type)?(x=r(g,_.props),x.ref=Do(f,g,_),x.return=f,x):(x=ql(_.type,_.key,_.props,null,f.mode,x),x.ref=Do(f,g,_),x.return=f,x)}function c(f,g,_,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=cd(_,f.mode,x),g.return=f,g):(g=r(g,_.children||[]),g.return=f,g)}function u(f,g,_,x,b){return g===null||g.tag!==7?(g=Br(_,f.mode,x,b),g.return=f,g):(g=r(g,_),g.return=f,g)}function d(f,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ld(""+g,f.mode,_),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pl:return _=ql(g.type,g.key,g.props,null,f.mode,_),_.ref=Do(f,null,g),_.return=f,_;case _s:return g=cd(g,f.mode,_),g.return=f,g;case ji:var x=g._init;return d(f,x(g._payload),_)}if(Bo(g)||Ro(g))return g=Br(g,f.mode,_,null),g.return=f,g;wl(f,g)}return null}function h(f,g,_,x){var b=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(f,g,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case pl:return _.key===b?l(f,g,_,x):null;case _s:return _.key===b?c(f,g,_,x):null;case ji:return b=_._init,h(f,g,b(_._payload),x)}if(Bo(_)||Ro(_))return b!==null?null:u(f,g,_,x,null);wl(f,_)}return null}function p(f,g,_,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(_)||null,a(g,f,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pl:return f=f.get(x.key===null?_:x.key)||null,l(g,f,x,b);case _s:return f=f.get(x.key===null?_:x.key)||null,c(g,f,x,b);case ji:var A=x._init;return p(f,g,_,A(x._payload),b)}if(Bo(x)||Ro(x))return f=f.get(_)||null,u(g,f,x,b,null);wl(g,x)}return null}function v(f,g,_,x){for(var b=null,A=null,w=g,C=g=0,T=null;w!==null&&C<_.length;C++){w.index>C?(T=w,w=null):T=w.sibling;var S=h(f,w,_[C],x);if(S===null){w===null&&(w=T);break}n&&w&&S.alternate===null&&e(f,w),g=s(S,g,C),A===null?b=S:A.sibling=S,A=S,w=T}if(C===_.length)return t(f,w),lt&&Rr(f,C),b;if(w===null){for(;C<_.length;C++)w=d(f,_[C],x),w!==null&&(g=s(w,g,C),A===null?b=w:A.sibling=w,A=w);return lt&&Rr(f,C),b}for(w=i(f,w);C<_.length;C++)T=p(w,f,C,_[C],x),T!==null&&(n&&T.alternate!==null&&w.delete(T.key===null?C:T.key),g=s(T,g,C),A===null?b=T:A.sibling=T,A=T);return n&&w.forEach(function(I){return e(f,I)}),lt&&Rr(f,C),b}function y(f,g,_,x){var b=Ro(_);if(typeof b!="function")throw Error(te(150));if(_=b.call(_),_==null)throw Error(te(151));for(var A=b=null,w=g,C=g=0,T=null,S=_.next();w!==null&&!S.done;C++,S=_.next()){w.index>C?(T=w,w=null):T=w.sibling;var I=h(f,w,S.value,x);if(I===null){w===null&&(w=T);break}n&&w&&I.alternate===null&&e(f,w),g=s(I,g,C),A===null?b=I:A.sibling=I,A=I,w=T}if(S.done)return t(f,w),lt&&Rr(f,C),b;if(w===null){for(;!S.done;C++,S=_.next())S=d(f,S.value,x),S!==null&&(g=s(S,g,C),A===null?b=S:A.sibling=S,A=S);return lt&&Rr(f,C),b}for(w=i(f,w);!S.done;C++,S=_.next())S=p(w,f,C,S.value,x),S!==null&&(n&&S.alternate!==null&&w.delete(S.key===null?C:S.key),g=s(S,g,C),A===null?b=S:A.sibling=S,A=S);return n&&w.forEach(function(V){return e(f,V)}),lt&&Rr(f,C),b}function m(f,g,_,x){if(typeof _=="object"&&_!==null&&_.type===vs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case pl:e:{for(var b=_.key,A=g;A!==null;){if(A.key===b){if(b=_.type,b===vs){if(A.tag===7){t(f,A.sibling),g=r(A,_.props.children),g.return=f,f=g;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ji&&Pg(b)===A.type){t(f,A.sibling),g=r(A,_.props),g.ref=Do(f,A,_),g.return=f,f=g;break e}t(f,A);break}else e(f,A);A=A.sibling}_.type===vs?(g=Br(_.props.children,f.mode,x,_.key),g.return=f,f=g):(x=ql(_.type,_.key,_.props,null,f.mode,x),x.ref=Do(f,g,_),x.return=f,f=x)}return o(f);case _s:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){t(f,g.sibling),g=r(g,_.children||[]),g.return=f,f=g;break e}else{t(f,g);break}else e(f,g);g=g.sibling}g=cd(_,f.mode,x),g.return=f,f=g}return o(f);case ji:return A=_._init,m(f,g,A(_._payload),x)}if(Bo(_))return v(f,g,_,x);if(Ro(_))return y(f,g,_,x);wl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(t(f,g.sibling),g=r(g,_),g.return=f,f=g):(t(f,g),g=ld(_,f.mode,x),g.return=f,f=g),o(f)):t(f,g)}return m}var eo=l0(!0),c0=l0(!1),vc=gr(null),yc=null,As=null,zf=null;function Hf(){zf=As=yc=null}function Vf(n){var e=vc.current;at(vc),n._currentValue=e}function Th(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Bs(n,e){yc=n,zf=As=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(on=!0),n.firstContext=null)}function Ln(n){var e=n._currentValue;if(zf!==n)if(n={context:n,memoizedValue:e,next:null},As===null){if(yc===null)throw Error(te(308));As=n,yc.dependencies={lanes:0,firstContext:n}}else As=As.next=n;return e}var Fr=null;function Gf(n){Fr===null?Fr=[n]:Fr.push(n)}function u0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Gf(e)):(t.next=r.next,r.next=t),e.interleaved=t,Li(n,i)}function Li(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var $i=!1;function Wf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ai(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(n,t)}return r=i.interleaved,r===null?(e.next=e,Gf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(n,t)}function Wl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Cf(n,t)}}function Lg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function xc(n,e,t,i){var r=n.updateQueue;$i=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,y=a;switch(h=e,p=t,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=ft({},d,h);break e;case 2:$i=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=o,n.lanes=o,n.memoizedState=d}}function Ig(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Da={},ci=gr(Da),_a=gr(Da),va=gr(Da);function Or(n){if(n===Da)throw Error(te(174));return n}function Xf(n,e){switch(rt(va,e),rt(_a,n),rt(ci,Da),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=rh(e,n)}at(ci),rt(ci,e)}function to(){at(ci),at(_a),at(va)}function h0(n){Or(va.current);var e=Or(ci.current),t=rh(e,n.type);e!==t&&(rt(_a,n),rt(ci,t))}function jf(n){_a.current===n&&(at(ci),at(_a))}var dt=gr(0);function Sc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nd=[];function $f(){for(var n=0;n<nd.length;n++)nd[n]._workInProgressVersionPrimary=null;nd.length=0}var Xl=Di.ReactCurrentDispatcher,id=Di.ReactCurrentBatchConfig,Wr=0,ht=null,At=null,Lt=null,Mc=!1,Zo=!1,ya=0,LR=0;function Gt(){throw Error(te(321))}function Yf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Jn(n[t],e[t]))return!1;return!0}function Kf(n,e,t,i,r,s){if(Wr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=n===null||n.memoizedState===null?UR:FR,n=t(i,r),Zo){s=0;do{if(Zo=!1,ya=0,25<=s)throw Error(te(301));s+=1,Lt=At=null,e.updateQueue=null,Xl.current=OR,n=t(i,r)}while(Zo)}if(Xl.current=Ec,e=At!==null&&At.next!==null,Wr=0,Lt=At=ht=null,Mc=!1,e)throw Error(te(300));return n}function qf(){var n=ya!==0;return ya=0,n}function ri(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ht.memoizedState=Lt=n:Lt=Lt.next=n,Lt}function In(){if(At===null){var n=ht.alternate;n=n!==null?n.memoizedState:null}else n=At.next;var e=Lt===null?ht.memoizedState:Lt.next;if(e!==null)Lt=e,At=n;else{if(n===null)throw Error(te(310));At=n,n={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Lt===null?ht.memoizedState=Lt=n:Lt=Lt.next=n}return Lt}function xa(n,e){return typeof e=="function"?e(n):e}function rd(n){var e=In(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=At,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Wr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ht.lanes|=u,Xr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Jn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,ht.lanes|=s,Xr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function sd(n){var e=In(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Jn(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function f0(){}function p0(n,e){var t=ht,i=In(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,Zf(_0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(t.flags|=2048,Sa(9,g0.bind(null,t,i,r,e),void 0,null),Dt===null)throw Error(te(349));Wr&30||m0(t,e,r)}return r}function m0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function g0(n,e,t,i){e.value=t,e.getSnapshot=i,v0(e)&&y0(n)}function _0(n,e,t){return t(function(){v0(e)&&y0(n)})}function v0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Jn(n,t)}catch{return!0}}function y0(n){var e=Li(n,1);e!==null&&qn(e,n,1,-1)}function Dg(n){var e=ri();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:n},e.queue=n,n=n.dispatch=NR.bind(null,ht,n),[e.memoizedState,n]}function Sa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function x0(){return In().memoizedState}function jl(n,e,t,i){var r=ri();ht.flags|=n,r.memoizedState=Sa(1|e,t,void 0,i===void 0?null:i)}function Gc(n,e,t,i){var r=In();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&Yf(i,o.deps)){r.memoizedState=Sa(e,t,s,i);return}}ht.flags|=n,r.memoizedState=Sa(1|e,t,s,i)}function Ng(n,e){return jl(8390656,8,n,e)}function Zf(n,e){return Gc(2048,8,n,e)}function S0(n,e){return Gc(4,2,n,e)}function M0(n,e){return Gc(4,4,n,e)}function E0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function T0(n,e,t){return t=t!=null?t.concat([n]):null,Gc(4,4,E0.bind(null,e,n),t)}function Qf(){}function w0(n,e){var t=In();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function A0(n,e){var t=In();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function b0(n,e,t){return Wr&21?(Jn(t,e)||(t=Iv(),ht.lanes|=t,Xr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,on=!0),n.memoizedState=t)}function IR(n,e){var t=tt;tt=t!==0&&4>t?t:4,n(!0);var i=id.transition;id.transition={};try{n(!1),e()}finally{tt=t,id.transition=i}}function R0(){return In().memoizedState}function DR(n,e,t){var i=cr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},C0(n))P0(e,t);else if(t=u0(n,e,t,i),t!==null){var r=en();qn(t,n,i,r),L0(t,e,i)}}function NR(n,e,t){var i=cr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(C0(n))P0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Jn(a,o)){var l=e.interleaved;l===null?(r.next=r,Gf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=u0(n,e,r,i),t!==null&&(r=en(),qn(t,n,i,r),L0(t,e,i))}}function C0(n){var e=n.alternate;return n===ht||e!==null&&e===ht}function P0(n,e){Zo=Mc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function L0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Cf(n,t)}}var Ec={readContext:Ln,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},UR={readContext:Ln,useCallback:function(n,e){return ri().memoizedState=[n,e===void 0?null:e],n},useContext:Ln,useEffect:Ng,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,jl(4194308,4,E0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return jl(4194308,4,n,e)},useInsertionEffect:function(n,e){return jl(4,2,n,e)},useMemo:function(n,e){var t=ri();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ri();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=DR.bind(null,ht,n),[i.memoizedState,n]},useRef:function(n){var e=ri();return n={current:n},e.memoizedState=n},useState:Dg,useDebugValue:Qf,useDeferredValue:function(n){return ri().memoizedState=n},useTransition:function(){var n=Dg(!1),e=n[0];return n=IR.bind(null,n[1]),ri().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=ht,r=ri();if(lt){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),Dt===null)throw Error(te(349));Wr&30||m0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Ng(_0.bind(null,i,s,n),[n]),i.flags|=2048,Sa(9,g0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ri(),e=Dt.identifierPrefix;if(lt){var t=wi,i=Ti;t=(i&~(1<<32-Kn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=ya++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=LR++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},FR={readContext:Ln,useCallback:w0,useContext:Ln,useEffect:Zf,useImperativeHandle:T0,useInsertionEffect:S0,useLayoutEffect:M0,useMemo:A0,useReducer:rd,useRef:x0,useState:function(){return rd(xa)},useDebugValue:Qf,useDeferredValue:function(n){var e=In();return b0(e,At.memoizedState,n)},useTransition:function(){var n=rd(xa)[0],e=In().memoizedState;return[n,e]},useMutableSource:f0,useSyncExternalStore:p0,useId:R0,unstable_isNewReconciler:!1},OR={readContext:Ln,useCallback:w0,useContext:Ln,useEffect:Zf,useImperativeHandle:T0,useInsertionEffect:S0,useLayoutEffect:M0,useMemo:A0,useReducer:sd,useRef:x0,useState:function(){return sd(xa)},useDebugValue:Qf,useDeferredValue:function(n){var e=In();return At===null?e.memoizedState=n:b0(e,At.memoizedState,n)},useTransition:function(){var n=sd(xa)[0],e=In().memoizedState;return[n,e]},useMutableSource:f0,useSyncExternalStore:p0,useId:R0,unstable_isNewReconciler:!1};function zn(n,e){if(n&&n.defaultProps){e=ft({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function wh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:ft({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Wc={isMounted:function(n){return(n=n._reactInternals)?Yr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=en(),r=cr(n),s=Ai(i,r);s.payload=e,t!=null&&(s.callback=t),e=ar(n,s,r),e!==null&&(qn(e,n,r,i),Wl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=en(),r=cr(n),s=Ai(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ar(n,s,r),e!==null&&(qn(e,n,r,i),Wl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=en(),i=cr(n),r=Ai(t,i);r.tag=2,e!=null&&(r.callback=e),e=ar(n,r,i),e!==null&&(qn(e,n,i,t),Wl(e,n,i))}};function Ug(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!fa(t,i)||!fa(r,s):!0}function I0(n,e,t){var i=!1,r=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=cn(e)?Vr:jt.current,i=e.contextTypes,s=(i=i!=null)?Qs(n,r):fr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Fg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Wc.enqueueReplaceState(e,e.state,null)}function Ah(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Wf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=cn(e)?Vr:jt.current,r.context=Qs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Wc.enqueueReplaceState(r,r.state,null),xc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function no(n,e){try{var t="",i=e;do t+=db(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function od(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function bh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var kR=typeof WeakMap=="function"?WeakMap:Map;function D0(n,e,t){t=Ai(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){wc||(wc=!0,Oh=i),bh(n,e)},t}function N0(n,e,t){t=Ai(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){bh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){bh(n,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Og(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new kR;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=QR.bind(null,n,e,t),e.then(n,n))}function kg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Bg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ai(-1,1),e.tag=2,ar(t,e,1))),t.lanes|=1),n)}var BR=Di.ReactCurrentOwner,on=!1;function Kt(n,e,t,i){e.child=n===null?c0(e,null,t,i):eo(e,n.child,t,i)}function zg(n,e,t,i,r){t=t.render;var s=e.ref;return Bs(e,r),i=Kf(n,e,t,i,s,r),t=qf(),n!==null&&!on?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ii(n,e,r)):(lt&&t&&Of(e),e.flags|=1,Kt(n,e,i,r),e.child)}function Hg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!op(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,U0(n,e,s,i,r)):(n=ql(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:fa,t(o,i)&&n.ref===e.ref)return Ii(n,e,r)}return e.flags|=1,n=ur(s,i),n.ref=e.ref,n.return=e,e.child=n}function U0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(fa(s,i)&&n.ref===e.ref)if(on=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(on=!0);else return e.lanes=n.lanes,Ii(n,e,r)}return Rh(n,e,t,i,r)}function F0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Rs,mn),mn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,rt(Rs,mn),mn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,rt(Rs,mn),mn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,rt(Rs,mn),mn|=i;return Kt(n,e,r,t),e.child}function O0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Rh(n,e,t,i,r){var s=cn(t)?Vr:jt.current;return s=Qs(e,s),Bs(e,r),t=Kf(n,e,t,i,s,r),i=qf(),n!==null&&!on?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ii(n,e,r)):(lt&&i&&Of(e),e.flags|=1,Kt(n,e,t,r),e.child)}function Vg(n,e,t,i,r){if(cn(t)){var s=!0;mc(e)}else s=!1;if(Bs(e,r),e.stateNode===null)$l(n,e),I0(e,t,i),Ah(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ln(c):(c=cn(t)?Vr:jt.current,c=Qs(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Fg(e,o,i,c),$i=!1;var h=e.memoizedState;o.state=h,xc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ln.current||$i?(typeof u=="function"&&(wh(e,t,u,i),l=e.memoizedState),(a=$i||Ug(e,t,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,d0(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:zn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=cn(t)?Vr:jt.current,l=Qs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Fg(e,o,i,l),$i=!1,h=e.memoizedState,o.state=h,xc(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||ln.current||$i?(typeof p=="function"&&(wh(e,t,p,i),v=e.memoizedState),(c=$i||Ug(e,t,c,i,h,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Ch(n,e,t,i,s,r)}function Ch(n,e,t,i,r,s){O0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&bg(e,t,!1),Ii(n,e,s);i=e.stateNode,BR.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=eo(e,n.child,null,s),e.child=eo(e,null,a,s)):Kt(n,e,a,s),e.memoizedState=i.state,r&&bg(e,t,!0),e.child}function k0(n){var e=n.stateNode;e.pendingContext?Ag(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Ag(n,e.context,!1),Xf(n,e.containerInfo)}function Gg(n,e,t,i,r){return Js(),Bf(r),e.flags|=256,Kt(n,e,t,i),e.child}var Ph={dehydrated:null,treeContext:null,retryLane:0};function Lh(n){return{baseLanes:n,cachePool:null,transitions:null}}function B0(n,e,t){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),rt(dt,r&1),n===null)return Eh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$c(o,i,0,null),n=Br(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Lh(t),e.memoizedState=Ph,n):Jf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return zR(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=Br(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Lh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Ph,i}return s=n.child,n=s.sibling,i=ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Jf(n,e){return e=$c({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Al(n,e,t,i){return i!==null&&Bf(i),eo(e,n.child,null,t),n=Jf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function zR(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=od(Error(te(422))),Al(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=$c({mode:"visible",children:i.children},r,0,null),s=Br(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&eo(e,n.child,null,o),e.child.memoizedState=Lh(o),e.memoizedState=Ph,s);if(!(e.mode&1))return Al(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=od(s,i,void 0),Al(n,e,o,i)}if(a=(o&n.childLanes)!==0,on||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(n,r),qn(i,n,r,-1))}return sp(),i=od(Error(te(421))),Al(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=JR.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,_n=or(r.nextSibling),yn=e,lt=!0,Vn=null,n!==null&&(An[bn++]=Ti,An[bn++]=wi,An[bn++]=Gr,Ti=n.id,wi=n.overflow,Gr=e),e=Jf(e,i.children),e.flags|=4096,e)}function Wg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Th(n.return,e,t)}function ad(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function z0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(n,e,i.children,t),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Wg(n,t,e);else if(n.tag===19)Wg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(rt(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Sc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),ad(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Sc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}ad(e,!0,t,null,s);break;case"together":ad(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $l(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ii(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Xr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=ur(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ur(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function HR(n,e,t){switch(e.tag){case 3:k0(e),Js();break;case 5:h0(e);break;case 1:cn(e.type)&&mc(e);break;case 4:Xf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(vc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(dt,dt.current&1),e.flags|=128,null):t&e.child.childLanes?B0(n,e,t):(rt(dt,dt.current&1),n=Ii(n,e,t),n!==null?n.sibling:null);rt(dt,dt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return z0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,F0(n,e,t)}return Ii(n,e,t)}var H0,Ih,V0,G0;H0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ih=function(){};V0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Or(ci.current);var s=null;switch(t){case"input":r=eh(n,r),i=eh(n,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=ih(n,r),i=ih(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=fc)}sh(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};G0=function(n,e,t,i){t!==i&&(e.flags|=4)};function No(n,e){if(!lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Wt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function VR(n,e,t){var i=e.pendingProps;switch(kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return cn(e.type)&&pc(),Wt(e),null;case 3:return i=e.stateNode,to(),at(ln),at(jt),$f(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Tl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(zh(Vn),Vn=null))),Ih(n,e),Wt(e),null;case 5:jf(e);var r=Or(va.current);if(t=e.type,n!==null&&e.stateNode!=null)V0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Wt(e),null}if(n=Or(ci.current),Tl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[ga]=s,n=(e.mode&1)!==0,t){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<Ho.length;r++)st(Ho[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Jm(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":tg(i,s),st("invalid",i)}sh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&El(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&El(i.textContent,a,n),r=["children",""+a]):oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(t){case"input":ml(i),eg(i,s,!0);break;case"textarea":ml(i),ng(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=_v(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ai]=e,n[ga]=i,H0(n,e,!1,!1),e.stateNode=n;e:{switch(o=oh(t,i),t){case"dialog":st("cancel",n),st("close",n),r=i;break;case"iframe":case"object":case"embed":st("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ho.length;r++)st(Ho[r],n);r=i;break;case"source":st("error",n),r=i;break;case"img":case"image":case"link":st("error",n),st("load",n),r=i;break;case"details":st("toggle",n),r=i;break;case"input":Jm(n,i),r=eh(n,i),st("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),st("invalid",n);break;case"textarea":tg(n,i),r=ih(n,i),st("invalid",n);break;default:r=i}sh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&aa(n,l):typeof l=="number"&&aa(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",n):l!=null&&Ef(n,s,l,o))}switch(t){case"input":ml(n),eg(n,i,!1);break;case"textarea":ml(n),ng(n);break;case"option":i.value!=null&&n.setAttribute("value",""+hr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Us(n,!!i.multiple,s,!1):i.defaultValue!=null&&Us(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=fc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(n&&e.stateNode!=null)G0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=Or(va.current),Or(ci.current),Tl(e)){if(i=e.stateNode,t=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==t)&&(n=yn,n!==null))switch(n.tag){case 3:El(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&El(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Wt(e),null;case 13:if(at(dt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(lt&&_n!==null&&e.mode&1&&!(e.flags&128))a0(),Js(),e.flags|=98560,s=!1;else if(s=Tl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ai]=e}else Js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else Vn!==null&&(zh(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||dt.current&1?bt===0&&(bt=3):sp())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return to(),Ih(n,e),n===null&&pa(e.stateNode.containerInfo),Wt(e),null;case 10:return Vf(e.type._context),Wt(e),null;case 17:return cn(e.type)&&pc(),Wt(e),null;case 19:if(at(dt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)No(s,!1);else{if(bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Sc(n),o!==null){for(e.flags|=128,No(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return rt(dt,dt.current&1|2),e.child}n=n.sibling}s.tail!==null&&yt()>io&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304)}else{if(!i)if(n=Sc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Wt(e),null}else 2*yt()-s.renderingStartTime>io&&t!==1073741824&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,t=dt.current,rt(dt,i?t&1|2:t&1),e):(Wt(e),null);case 22:case 23:return rp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function GR(n,e){switch(kf(e),e.tag){case 1:return cn(e.type)&&pc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return to(),at(ln),at(jt),$f(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return jf(e),null;case 13:if(at(dt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Js()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return at(dt),null;case 4:return to(),null;case 10:return Vf(e.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var bl=!1,Xt=!1,WR=typeof WeakSet=="function"?WeakSet:Set,fe=null;function bs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){vt(n,e,i)}else t.current=null}function Dh(n,e,t){try{t()}catch(i){vt(n,e,i)}}var Xg=!1;function XR(n,e){if(gh=uc,n=Yv(),Ff(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(_h={focusedElem:n,selectionRange:t},uc=!1,fe=e;fe!==null;)if(e=fe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,fe=n;else for(;fe!==null;){e=fe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:zn(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){vt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}return v=Xg,Xg=!1,v}function Qo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Dh(e,t,s)}r=r.next}while(r!==i)}}function Xc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Nh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function W0(n){var e=n.alternate;e!==null&&(n.alternate=null,W0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ai],delete e[ga],delete e[xh],delete e[bR],delete e[RR])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function X0(n){return n.tag===5||n.tag===3||n.tag===4}function jg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||X0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Uh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=fc));else if(i!==4&&(n=n.child,n!==null))for(Uh(n,e,t),n=n.sibling;n!==null;)Uh(n,e,t),n=n.sibling}function Fh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Fh(n,e,t),n=n.sibling;n!==null;)Fh(n,e,t),n=n.sibling}var Ft=null,Hn=!1;function Vi(n,e,t){for(t=t.child;t!==null;)j0(n,e,t),t=t.sibling}function j0(n,e,t){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Oc,t)}catch{}switch(t.tag){case 5:Xt||bs(t,e);case 6:var i=Ft,r=Hn;Ft=null,Vi(n,e,t),Ft=i,Hn=r,Ft!==null&&(Hn?(n=Ft,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ft.removeChild(t.stateNode));break;case 18:Ft!==null&&(Hn?(n=Ft,t=t.stateNode,n.nodeType===8?ed(n.parentNode,t):n.nodeType===1&&ed(n,t),da(n)):ed(Ft,t.stateNode));break;case 4:i=Ft,r=Hn,Ft=t.stateNode.containerInfo,Hn=!0,Vi(n,e,t),Ft=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dh(t,e,o),r=r.next}while(r!==i)}Vi(n,e,t);break;case 1:if(!Xt&&(bs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){vt(t,e,a)}Vi(n,e,t);break;case 21:Vi(n,e,t);break;case 22:t.mode&1?(Xt=(i=Xt)||t.memoizedState!==null,Vi(n,e,t),Xt=i):Vi(n,e,t);break;default:Vi(n,e,t)}}function $g(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new WR),e.forEach(function(i){var r=eC.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Bn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,Hn=!1;break e;case 3:Ft=a.stateNode.containerInfo,Hn=!0;break e;case 4:Ft=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(Ft===null)throw Error(te(160));j0(s,o,r),Ft=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$0(e,n),e=e.sibling}function $0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Bn(e,n),ni(n),i&4){try{Qo(3,n,n.return),Xc(3,n)}catch(y){vt(n,n.return,y)}try{Qo(5,n,n.return)}catch(y){vt(n,n.return,y)}}break;case 1:Bn(e,n),ni(n),i&512&&t!==null&&bs(t,t.return);break;case 5:if(Bn(e,n),ni(n),i&512&&t!==null&&bs(t,t.return),n.flags&32){var r=n.stateNode;try{aa(r,"")}catch(y){vt(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&mv(r,s),oh(a,o);var c=oh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?xv(r,d):u==="dangerouslySetInnerHTML"?vv(r,d):u==="children"?aa(r,d):Ef(r,u,d,c)}switch(a){case"input":th(r,s);break;case"textarea":gv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Us(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Us(r,!!s.multiple,s.defaultValue,!0):Us(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(y){vt(n,n.return,y)}}break;case 6:if(Bn(e,n),ni(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){vt(n,n.return,y)}}break;case 3:if(Bn(e,n),ni(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(y){vt(n,n.return,y)}break;case 4:Bn(e,n),ni(n);break;case 13:Bn(e,n),ni(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(np=yt())),i&4&&$g(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Xt=(c=Xt)||u,Bn(e,n),Xt=c):Bn(e,n),ni(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(fe=n,u=n.child;u!==null;){for(d=fe=u;fe!==null;){switch(h=fe,p=h.child,h.tag){case 0:case 11:case 14:case 15:Qo(4,h,h.return);break;case 1:bs(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){vt(i,t,y)}}break;case 5:bs(h,h.return);break;case 22:if(h.memoizedState!==null){Kg(d);continue}}p!==null?(p.return=h,fe=p):Kg(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yv("display",o))}catch(y){vt(n,n.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){vt(n,n.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bn(e,n),ni(n),i&4&&$g(n);break;case 21:break;default:Bn(e,n),ni(n)}}function ni(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(X0(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(aa(r,""),i.flags&=-33);var s=jg(n);Fh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=jg(n);Uh(n,a,o);break;default:throw Error(te(161))}}catch(l){vt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function jR(n,e,t){fe=n,Y0(n)}function Y0(n,e,t){for(var i=(n.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||bl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=bl;var c=Xt;if(bl=o,(Xt=l)&&!c)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?qg(r):l!==null?(l.return=o,fe=l):qg(r);for(;s!==null;)fe=s,Y0(s),s=s.sibling;fe=r,bl=a,Xt=c}Yg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):Yg(n)}}function Yg(n){for(;fe!==null;){var e=fe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:zn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ig(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Ig(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&da(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Xt||e.flags&512&&Nh(e)}catch(h){vt(e,e.return,h)}}if(e===n){fe=null;break}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}}function Kg(n){for(;fe!==null;){var e=fe;if(e===n){fe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,fe=t;break}fe=e.return}}function qg(n){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Xc(4,e)}catch(l){vt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{Nh(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{Nh(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===n){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var $R=Math.ceil,Tc=Di.ReactCurrentDispatcher,ep=Di.ReactCurrentOwner,Pn=Di.ReactCurrentBatchConfig,je=0,Dt=null,wt=null,kt=0,mn=0,Rs=gr(0),bt=0,Ma=null,Xr=0,jc=0,tp=0,Jo=null,rn=null,np=0,io=1/0,xi=null,wc=!1,Oh=null,lr=null,Rl=!1,er=null,Ac=0,ea=0,kh=null,Yl=-1,Kl=0;function en(){return je&6?yt():Yl!==-1?Yl:Yl=yt()}function cr(n){return n.mode&1?je&2&&kt!==0?kt&-kt:PR.transition!==null?(Kl===0&&(Kl=Iv()),Kl):(n=tt,n!==0||(n=window.event,n=n===void 0?16:Bv(n.type)),n):1}function qn(n,e,t,i){if(50<ea)throw ea=0,kh=null,Error(te(185));Pa(n,t,i),(!(je&2)||n!==Dt)&&(n===Dt&&(!(je&2)&&(jc|=t),bt===4&&qi(n,kt)),un(n,i),t===1&&je===0&&!(e.mode&1)&&(io=yt()+500,Vc&&_r()))}function un(n,e){var t=n.callbackNode;Pb(n,e);var i=cc(n,n===Dt?kt:0);if(i===0)t!==null&&sg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&sg(t),e===1)n.tag===0?CR(Zg.bind(null,n)):r0(Zg.bind(null,n)),wR(function(){!(je&6)&&_r()}),t=null;else{switch(Dv(i)){case 1:t=Rf;break;case 4:t=Pv;break;case 16:t=lc;break;case 536870912:t=Lv;break;default:t=lc}t=ny(t,K0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function K0(n,e){if(Yl=-1,Kl=0,je&6)throw Error(te(327));var t=n.callbackNode;if(zs()&&n.callbackNode!==t)return null;var i=cc(n,n===Dt?kt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=bc(n,i);else{e=i;var r=je;je|=2;var s=Z0();(Dt!==n||kt!==e)&&(xi=null,io=yt()+500,kr(n,e));do try{qR();break}catch(a){q0(n,a)}while(!0);Hf(),Tc.current=s,je=r,wt!==null?e=0:(Dt=null,kt=0,e=bt)}if(e!==0){if(e===2&&(r=dh(n),r!==0&&(i=r,e=Bh(n,r))),e===1)throw t=Ma,kr(n,0),qi(n,i),un(n,yt()),t;if(e===6)qi(n,i);else{if(r=n.current.alternate,!(i&30)&&!YR(r)&&(e=bc(n,i),e===2&&(s=dh(n),s!==0&&(i=s,e=Bh(n,s))),e===1))throw t=Ma,kr(n,0),qi(n,i),un(n,yt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Cr(n,rn,xi);break;case 3:if(qi(n,i),(i&130023424)===i&&(e=np+500-yt(),10<e)){if(cc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){en(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=yh(Cr.bind(null,n,rn,xi),e);break}Cr(n,rn,xi);break;case 4:if(qi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*$R(i/1960))-i,10<i){n.timeoutHandle=yh(Cr.bind(null,n,rn,xi),i);break}Cr(n,rn,xi);break;case 5:Cr(n,rn,xi);break;default:throw Error(te(329))}}}return un(n,yt()),n.callbackNode===t?K0.bind(null,n):null}function Bh(n,e){var t=Jo;return n.current.memoizedState.isDehydrated&&(kr(n,e).flags|=256),n=bc(n,e),n!==2&&(e=rn,rn=t,e!==null&&zh(e)),n}function zh(n){rn===null?rn=n:rn.push.apply(rn,n)}function YR(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(n,e){for(e&=~tp,e&=~jc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Kn(e),i=1<<t;n[t]=-1,e&=~i}}function Zg(n){if(je&6)throw Error(te(327));zs();var e=cc(n,0);if(!(e&1))return un(n,yt()),null;var t=bc(n,e);if(n.tag!==0&&t===2){var i=dh(n);i!==0&&(e=i,t=Bh(n,i))}if(t===1)throw t=Ma,kr(n,0),qi(n,e),un(n,yt()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Cr(n,rn,xi),un(n,yt()),null}function ip(n,e){var t=je;je|=1;try{return n(e)}finally{je=t,je===0&&(io=yt()+500,Vc&&_r())}}function jr(n){er!==null&&er.tag===0&&!(je&6)&&zs();var e=je;je|=1;var t=Pn.transition,i=tt;try{if(Pn.transition=null,tt=1,n)return n()}finally{tt=i,Pn.transition=t,je=e,!(je&6)&&_r()}}function rp(){mn=Rs.current,at(Rs)}function kr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,TR(t)),wt!==null)for(t=wt.return;t!==null;){var i=t;switch(kf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pc();break;case 3:to(),at(ln),at(jt),$f();break;case 5:jf(i);break;case 4:to();break;case 13:at(dt);break;case 19:at(dt);break;case 10:Vf(i.type._context);break;case 22:case 23:rp()}t=t.return}if(Dt=n,wt=n=ur(n.current,null),kt=mn=e,bt=0,Ma=null,tp=jc=Xr=0,rn=Jo=null,Fr!==null){for(e=0;e<Fr.length;e++)if(t=Fr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Fr=null}return n}function q0(n,e){do{var t=wt;try{if(Hf(),Xl.current=Ec,Mc){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Mc=!1}if(Wr=0,Lt=At=ht=null,Zo=!1,ya=0,ep.current=null,t===null||t.return===null){bt=1,Ma=e,wt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=kg(o);if(p!==null){p.flags&=-257,Bg(p,o,a,s,e),p.mode&1&&Og(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Og(s,c,e),sp();break e}l=Error(te(426))}}else if(lt&&a.mode&1){var m=kg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Bg(m,o,a,s,e),Bf(no(l,a));break e}}s=l=no(l,a),bt!==4&&(bt=2),Jo===null?Jo=[s]:Jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=D0(s,l,e);Lg(s,f);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(lr===null||!lr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=N0(s,a,e);Lg(s,x);break e}}s=s.return}while(s!==null)}J0(t)}catch(b){e=b,wt===t&&t!==null&&(wt=t=t.return);continue}break}while(!0)}function Z0(){var n=Tc.current;return Tc.current=Ec,n===null?Ec:n}function sp(){(bt===0||bt===3||bt===2)&&(bt=4),Dt===null||!(Xr&268435455)&&!(jc&268435455)||qi(Dt,kt)}function bc(n,e){var t=je;je|=2;var i=Z0();(Dt!==n||kt!==e)&&(xi=null,kr(n,e));do try{KR();break}catch(r){q0(n,r)}while(!0);if(Hf(),je=t,Tc.current=i,wt!==null)throw Error(te(261));return Dt=null,kt=0,bt}function KR(){for(;wt!==null;)Q0(wt)}function qR(){for(;wt!==null&&!Sb();)Q0(wt)}function Q0(n){var e=ty(n.alternate,n,mn);n.memoizedProps=n.pendingProps,e===null?J0(n):wt=e,ep.current=null}function J0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=GR(t,e),t!==null){t.flags&=32767,wt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bt=6,wt=null;return}}else if(t=VR(t,e,mn),t!==null){wt=t;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=n}while(e!==null);bt===0&&(bt=5)}function Cr(n,e,t){var i=tt,r=Pn.transition;try{Pn.transition=null,tt=1,ZR(n,e,t,i)}finally{Pn.transition=r,tt=i}return null}function ZR(n,e,t,i){do zs();while(er!==null);if(je&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Lb(n,s),n===Dt&&(wt=Dt=null,kt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Rl||(Rl=!0,ny(lc,function(){return zs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=tt;tt=1;var a=je;je|=4,ep.current=null,XR(n,t),$0(t,n),_R(_h),uc=!!gh,_h=gh=null,n.current=t,jR(t),Mb(),je=a,tt=o,Pn.transition=s}else n.current=t;if(Rl&&(Rl=!1,er=n,Ac=r),s=n.pendingLanes,s===0&&(lr=null),wb(t.stateNode),un(n,yt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(wc)throw wc=!1,n=Oh,Oh=null,n;return Ac&1&&n.tag!==0&&zs(),s=n.pendingLanes,s&1?n===kh?ea++:(ea=0,kh=n):ea=0,_r(),null}function zs(){if(er!==null){var n=Dv(Ac),e=Pn.transition,t=tt;try{if(Pn.transition=null,tt=16>n?16:n,er===null)var i=!1;else{if(n=er,er=null,Ac=0,je&6)throw Error(te(331));var r=je;for(je|=4,fe=n.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(fe=c;fe!==null;){var u=fe;switch(u.tag){case 0:case 11:case 15:Qo(8,u,s)}var d=u.child;if(d!==null)d.return=u,fe=d;else for(;fe!==null;){u=fe;var h=u.sibling,p=u.return;if(W0(u),u===c){fe=null;break}if(h!==null){h.return=p,fe=h;break}fe=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,fe=f;break e}fe=s.return}}var g=n.current;for(fe=g;fe!==null;){o=fe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,fe=_;else e:for(o=g;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xc(9,a)}}catch(b){vt(a,a.return,b)}if(a===o){fe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,fe=x;break e}fe=a.return}}if(je=r,_r(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Oc,n)}catch{}i=!0}return i}finally{tt=t,Pn.transition=e}}return!1}function Qg(n,e,t){e=no(t,e),e=D0(n,e,1),n=ar(n,e,1),e=en(),n!==null&&(Pa(n,1,e),un(n,e))}function vt(n,e,t){if(n.tag===3)Qg(n,n,t);else for(;e!==null;){if(e.tag===3){Qg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){n=no(t,n),n=N0(e,n,1),e=ar(e,n,1),n=en(),e!==null&&(Pa(e,1,n),un(e,n));break}}e=e.return}}function QR(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=en(),n.pingedLanes|=n.suspendedLanes&t,Dt===n&&(kt&t)===t&&(bt===4||bt===3&&(kt&130023424)===kt&&500>yt()-np?kr(n,0):tp|=t),un(n,e)}function ey(n,e){e===0&&(n.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var t=en();n=Li(n,e),n!==null&&(Pa(n,e,t),un(n,t))}function JR(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ey(n,t)}function eC(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),ey(n,t)}var ty;ty=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ln.current)on=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return on=!1,HR(n,e,t);on=!!(n.flags&131072)}else on=!1,lt&&e.flags&1048576&&s0(e,_c,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$l(n,e),n=e.pendingProps;var r=Qs(e,jt.current);Bs(e,t),r=Kf(null,e,i,n,r,t);var s=qf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,mc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wf(e),r.updater=Wc,e.stateNode=r,r._reactInternals=e,Ah(e,i,n,t),e=Ch(null,e,i,!0,s,t)):(e.tag=0,lt&&s&&Of(e),Kt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch($l(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nC(i),n=zn(i,n),r){case 0:e=Rh(null,e,i,n,t);break e;case 1:e=Vg(null,e,i,n,t);break e;case 11:e=zg(null,e,i,n,t);break e;case 14:e=Hg(null,e,i,zn(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Rh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Vg(n,e,i,r,t);case 3:e:{if(k0(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,d0(n,e),xc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=no(Error(te(423)),e),e=Gg(n,e,i,t,r);break e}else if(i!==r){r=no(Error(te(424)),e),e=Gg(n,e,i,t,r);break e}else for(_n=or(e.stateNode.containerInfo.firstChild),yn=e,lt=!0,Vn=null,t=c0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Js(),i===r){e=Ii(n,e,t);break e}Kt(n,e,i,t)}e=e.child}return e;case 5:return h0(e),n===null&&Eh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,vh(i,r)?o=null:s!==null&&vh(i,s)&&(e.flags|=32),O0(n,e),Kt(n,e,o,t),e.child;case 6:return n===null&&Eh(e),null;case 13:return B0(n,e,t);case 4:return Xf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=eo(e,null,i,t):Kt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),zg(n,e,i,r,t);case 7:return Kt(n,e,e.pendingProps,t),e.child;case 8:return Kt(n,e,e.pendingProps.children,t),e.child;case 12:return Kt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(vc,i._currentValue),i._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===r.children&&!ln.current){e=Ii(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Th(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Th(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bs(e,t),r=Ln(r),i=i(r),e.flags|=1,Kt(n,e,i,t),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),Hg(n,e,i,r,t);case 15:return U0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),$l(n,e),e.tag=1,cn(i)?(n=!0,mc(e)):n=!1,Bs(e,t),I0(e,i,r),Ah(e,i,r,t),Ch(null,e,i,!0,n,t);case 19:return z0(n,e,t);case 22:return F0(n,e,t)}throw Error(te(156,e.tag))};function ny(n,e){return Cv(n,e)}function tC(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(n,e,t,i){return new tC(n,e,t,i)}function op(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nC(n){if(typeof n=="function")return op(n)?1:0;if(n!=null){if(n=n.$$typeof,n===wf)return 11;if(n===Af)return 14}return 2}function ur(n,e){var t=n.alternate;return t===null?(t=Cn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ql(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")op(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case vs:return Br(t.children,r,s,e);case Tf:o=8,r|=8;break;case qd:return n=Cn(12,t,e,r|2),n.elementType=qd,n.lanes=s,n;case Zd:return n=Cn(13,t,e,r),n.elementType=Zd,n.lanes=s,n;case Qd:return n=Cn(19,t,e,r),n.elementType=Qd,n.lanes=s,n;case hv:return $c(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case uv:o=10;break e;case dv:o=9;break e;case wf:o=11;break e;case Af:o=14;break e;case ji:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=Cn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Br(n,e,t,i){return n=Cn(7,n,i,e),n.lanes=t,n}function $c(n,e,t,i){return n=Cn(22,n,i,e),n.elementType=hv,n.lanes=t,n.stateNode={isHidden:!1},n}function ld(n,e,t){return n=Cn(6,n,null,e),n.lanes=t,n}function cd(n,e,t){return e=Cn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function iC(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ap(n,e,t,i,r,s,o,a,l){return n=new iC(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Cn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wf(s),n}function rC(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function iy(n){if(!n)return fr;n=n._reactInternals;e:{if(Yr(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(cn(t))return i0(n,t,e)}return e}function ry(n,e,t,i,r,s,o,a,l){return n=ap(t,i,!0,n,r,s,o,a,l),n.context=iy(null),t=n.current,i=en(),r=cr(t),s=Ai(i,r),s.callback=e??null,ar(t,s,r),n.current.lanes=r,Pa(n,r,i),un(n,i),n}function Yc(n,e,t,i){var r=e.current,s=en(),o=cr(r);return t=iy(t),e.context===null?e.context=t:e.pendingContext=t,e=Ai(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ar(r,e,o),n!==null&&(qn(n,r,o,s),Wl(n,r,o)),o}function Rc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function lp(n,e){Jg(n,e),(n=n.alternate)&&Jg(n,e)}function sC(){return null}var sy=typeof reportError=="function"?reportError:function(n){console.error(n)};function cp(n){this._internalRoot=n}Kc.prototype.render=cp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));Yc(n,e,null,null)};Kc.prototype.unmount=cp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;jr(function(){Yc(null,n,null,null)}),e[Pi]=null}};function Kc(n){this._internalRoot=n}Kc.prototype.unstable_scheduleHydration=function(n){if(n){var e=Fv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ki.length&&e!==0&&e<Ki[t].priority;t++);Ki.splice(t,0,n),t===0&&kv(n)}};function up(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function qc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function e_(){}function oC(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Rc(o);s.call(c)}}var o=ry(e,i,n,0,null,!1,!1,"",e_);return n._reactRootContainer=o,n[Pi]=o.current,pa(n.nodeType===8?n.parentNode:n),jr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Rc(l);a.call(c)}}var l=ap(n,0,!1,null,null,!1,!1,"",e_);return n._reactRootContainer=l,n[Pi]=l.current,pa(n.nodeType===8?n.parentNode:n),jr(function(){Yc(e,l,t,i)}),l}function Zc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Rc(o);a.call(l)}}Yc(e,o,n,r)}else o=oC(t,e,n,r,i);return Rc(o)}Nv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=zo(e.pendingLanes);t!==0&&(Cf(e,t|1),un(e,yt()),!(je&6)&&(io=yt()+500,_r()))}break;case 13:jr(function(){var i=Li(n,1);if(i!==null){var r=en();qn(i,n,1,r)}}),lp(n,1)}};Pf=function(n){if(n.tag===13){var e=Li(n,134217728);if(e!==null){var t=en();qn(e,n,134217728,t)}lp(n,134217728)}};Uv=function(n){if(n.tag===13){var e=cr(n),t=Li(n,e);if(t!==null){var i=en();qn(t,n,e,i)}lp(n,e)}};Fv=function(){return tt};Ov=function(n,e){var t=tt;try{return tt=n,e()}finally{tt=t}};lh=function(n,e,t){switch(e){case"input":if(th(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Hc(i);if(!r)throw Error(te(90));pv(i),th(i,r)}}}break;case"textarea":gv(n,t);break;case"select":e=t.value,e!=null&&Us(n,!!t.multiple,e,!1)}};Ev=ip;Tv=jr;var aC={usingClientEntryPoint:!1,Events:[Ia,Ms,Hc,Sv,Mv,ip]},Uo={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lC={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=bv(n),n===null?null:n.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||sC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Oc=Cl.inject(lC),li=Cl}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aC;Nn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!up(e))throw Error(te(200));return rC(n,e,null,t)};Nn.createRoot=function(n,e){if(!up(n))throw Error(te(299));var t=!1,i="",r=sy;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ap(n,1,!1,null,null,t,!1,i,r),n[Pi]=e.current,pa(n.nodeType===8?n.parentNode:n),new cp(e)};Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=bv(e),n=n===null?null:n.stateNode,n};Nn.flushSync=function(n){return jr(n)};Nn.hydrate=function(n,e,t){if(!qc(e))throw Error(te(200));return Zc(null,n,e,!0,t)};Nn.hydrateRoot=function(n,e,t){if(!up(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=sy;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=ry(e,null,n,1,t??null,r,!1,s,o),n[Pi]=e.current,pa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Kc(e)};Nn.render=function(n,e,t){if(!qc(e))throw Error(te(200));return Zc(null,n,e,!1,t)};Nn.unmountComponentAtNode=function(n){if(!qc(n))throw Error(te(40));return n._reactRootContainer?(jr(function(){Zc(null,null,n,!1,function(){n._reactRootContainer=null,n[Pi]=null})}),!0):!1};Nn.unstable_batchedUpdates=ip;Nn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!qc(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return Zc(n,e,t,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function oy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oy)}catch(n){console.error(n)}}oy();console.log("running");window.addEventListener("DOMContentLoaded",()=>{});console.log("main.js");console.log("running");x1(cC);console.log(new Error("loading main.js multiple times").stack);function cC(){window.dat??(window.dat={});const n=window.dat;window.locals??(window.locals={}),locals.fullScreenable=!0,locals.isAutoFullScreen=!1,Wi.background=new Te(n.color.skyColor),Wi.fog=new rf(n.color.skyColor,6,n.fogStartDisInPlayGroundViwe);const e=new oA(9290206,26253,1.5),t=new H_(16777215,2.5),i=document.getElementById("container");e.position.set(2,1,1),Wi.add(e),t.position.set(-5,25,-1),t.castShadow=!0;const r=t.shadow,s=r.camera;s.near=.01,s.far=500,s.left=-30,s.right=30,s.top=30,s.bottom=-30,r.mapSize.set(1024,1024),r.radius=4,r.bias=-6e-5,Wi.add(t),Xi.setPixelRatio(window.devicePixelRatio),Xi.setSize(window.innerWidth,window.innerHeight),Xi.shadowMap.enabled=!0,Xi.shadowMap.type=ii,Xi.toneMapping=s_,console.log("rendering webglrenderer"),i.appendChild(Xi.domElement),kl.domElement.style.position="absolute",kl.domElement.style.top="0px",i.appendChild(kl.domElement),document.addEventListener("keydown",o=>_t[o.code]=!0),document.addEventListener("keyup",o=>_t[o.code]=!1),document.addEventListener(n.controls.eventOn,Y_),i.addEventListener("mousedown",A1),window.addEventListener("resize",Wm),window.addEventListener("load",Wm),window.dat.localSettings=new V1,T1.load("world_using.glb",o=>{if(Wi.add(o.scene),n.Octree.world.fromGraphNode(o.scene),o.scene.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.material.map&&(a.material.map.anisotropy=4))}),n.isTesting&&n.isUidebug){const a=new CA(n.Octree.world);a.visible=!1,Wi.add(a);const l=new gf({width:200});l.add({debug:!1},"debug").onChange(function(u){a.visible=u}),l.add({cleanBalls:!1},"cleanBalls").onChange(function(u){jn.forEach(d=>{d.collider.set(n.Ball.placeToStack.clone(),n.SPHERE_RADIUS),d.velocity.multiplyScalar(0)})});let c="fogStartDisInPlayGroundViwe,GRAVITY,NUM_SPHERES,SPHERE_RADIUS,STEPS_PER_FRAME,sensitivity,max_sensitivity".split(",");c.forEach(u=>{let d={};d[u]=n[u],l.add(d,u).onChange(function(h){n[u]=h})}),c=Object.keys(n.playerF),c.forEach(u=>{let d={};d[u]=n.playerF[u],l.add(d,u).onChange(function(h){n.playerF[u]=h})})}q_()}),document.addEventListener("mouseup",o=>{o.stopPropagation(),document.pointerLockElement!==null&&K_()}),document.body.addEventListener("mousemove",o=>{document.pointerLockElement===document.body&&gs(o.movementX,o.movementY)})}
