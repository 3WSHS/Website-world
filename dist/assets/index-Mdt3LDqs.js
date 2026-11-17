(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="178",Wi={ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wl=0,Ua=1,Xl=2,Jc=1,Yl=2,On=3,ii=0,Ve=1,zn=2,kn=0,Xi=1,Mr=2,Na=3,Fa=4,ql=5,mi=100,Zl=101,jl=102,Kl=103,$l=104,Jl=200,Ql=201,th=202,eh=203,wr=204,yr=205,nh=206,ih=207,sh=208,oh=209,rh=210,ah=211,ch=212,lh=213,hh=214,Sr=0,Er=1,Tr=2,Zi=3,br=4,Ar=5,Rr=6,Cr=7,Qc=0,uh=1,fh=2,ni=0,dh=1,ph=2,mh=3,gh=4,_h=5,xh=6,vh=7,tl=300,ji=301,Ki=302,Pr=303,Dr=304,Ro=306,Lr=1e3,Bn=1001,Ir=1002,Mn=1003,Mh=1004,Us=1005,xn=1006,Io=1007,_i=1008,Rn=1009,el=1010,nl=1011,ws=1012,pa=1013,xi=1014,Gn=1015,Vn=1016,ma=1017,ga=1018,ys=1020,il=35902,sl=1021,ol=1022,vn=1023,Ss=1026,Es=1027,rl=1028,_a=1029,al=1030,xa=1031,va=1033,po=33776,mo=33777,go=33778,_o=33779,Ur=35840,Nr=35841,Fr=35842,Or=35843,zr=36196,Br=37492,Gr=37496,Hr=37808,kr=37809,Vr=37810,Wr=37811,Xr=37812,Yr=37813,qr=37814,Zr=37815,jr=37816,Kr=37817,$r=37818,Jr=37819,Qr=37820,ta=37821,xo=36492,ea=36494,na=36495,cl=36283,ia=36284,sa=36285,oa=36286,wh=3200,yh=3201,ll=0,Sh=1,ei="",fn="srgb",$i="srgb-linear",yo="linear",ye="srgb",bi=7680,Oa=519,Eh=512,Th=513,bh=514,hl=515,Ah=516,Rh=517,Ch=518,Ph=519,za=35044,Ba="300 es",Hn=2e3,So=2001;class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ps=Math.PI/180,ra=180/Math.PI;function ns(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[s&255]+Ye[s>>8&255]+Ye[s>>16&255]+Ye[s>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function re(s,t,e){return Math.max(t,Math.min(e,s))}function Dh(s,t){return(s%t+t)%t}function Uo(s,t,e){return(1-e)*s+e*t}function os(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Lh={DEG2RAD:ps};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=o[r+0],m=o[r+1],g=o[r+2],w=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=w;return}if(u!==w||c!==d||l!==m||h!==g){let p=1-a;const f=c*d+l*m+h*g+u*w,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),b=Math.atan2(P,f*x);p=Math.sin(p*b)/P,a=Math.sin(a*b)/P}const M=a*x;if(c=c*p+d*M,l=l*p+m*M,h=h*p+g*M,u=u*p+w*M,p===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=o[r],d=o[r+1],m=o[r+2],g=o[r+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(o/2),d=c(n/2),m=c(i/2),g=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(o-l)*m,this._z=(r-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(o+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(o-l)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(r-i)/m,this._x=(o+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-o*c,this._y=i*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ga.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ga.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),h=2*(a*e-o*i),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=i+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new A,Ga=new vi;class se{constructor(t,e,n,i,o,r,a,c,l){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],w=i[0],p=i[3],f=i[6],x=i[1],v=i[4],M=i[7],P=i[2],b=i[5],R=i[8];return o[0]=r*w+a*x+c*P,o[3]=r*p+a*v+c*b,o[6]=r*f+a*M+c*R,o[1]=l*w+h*x+u*P,o[4]=l*p+h*v+u*b,o[7]=l*f+h*M+u*R,o[2]=d*w+m*x+g*P,o[5]=d*p+m*v+g*b,o[8]=d*f+m*M+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+i*o*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,m=l*o-r*c,g=e*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/g;return t[0]=u*w,t[1]=(i*l-h*n)*w,t[2]=(a*n-i*r)*w,t[3]=d*w,t[4]=(h*e-i*c)*w,t[5]=(i*o-a*e)*w,t[6]=m*w,t[7]=(n*c-l*e)*w,t[8]=(r*e-n*o)*w,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fo.makeScale(t,e)),this}rotate(t){return this.premultiply(Fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fo=new se;function ul(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ts(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ih(){const s=Ts("canvas");return s.style.display="block",s}const Ha={};function Yi(s){s in Ha||(Ha[s]=!0,console.warn(s))}function Uh(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Nh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ka=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Va=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Oh(){const s={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===ye&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ye&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b))),i},workingToColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},colorSpaceToWorking:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?yo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,o){return Yi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,o)},toWorkingColorSpace:function(i,o){return Yi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[$i]:{primaries:t,whitePoint:n,transfer:yo,toXYZ:ka,fromXYZ:Va,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:ka,fromXYZ:Va,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),s}const ge=Oh();function Wn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ai;class zh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ai===void 0&&(Ai=Ts("canvas")),Ai.width=t.width,Ai.height=t.height;const i=Ai.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ai}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Wn(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bh=0;class Ma{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Oo(i[r].image)):o.push(Oo(i[r]))}else o=Oo(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Oo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gh=0;const zo=new A;class Ke extends wi{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=Bn,i=Bn,o=xn,r=_i,a=vn,c=Rn,l=Ke.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=ns(),this.name="",this.source=new Ma(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zo).x}get height(){return this.source.getSize(zo).y}get depth(){return this.source.getSize(zo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lr:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case Ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lr:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case Ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=tl;Ke.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,i=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],w=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-w)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+w)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,M=(m+1)/2,P=(f+1)/2,b=(h+d)/4,R=(u+w)/4,D=(g+p)/4;return v>M&&v>P?v<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(v),i=b/n,o=R/n):M>P?M<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(M),n=b/i,o=D/i):P<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(P),n=R/o,i=D/o),this.set(n,i,o,e),this}let x=Math.sqrt((p-g)*(p-g)+(u-w)*(u-w)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-w)/x,this.z=(d-h)/x,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hh extends wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const i={width:t,height:e,depth:n.depth},o=new Ke(i);this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ma(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Hh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fl extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kh extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,mn):mn.fromBufferAttribute(o,r),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),Fs.subVectors(this.max,rs),Ri.subVectors(t.a,rs),Ci.subVectors(t.b,rs),Pi.subVectors(t.c,rs),Yn.subVectors(Ci,Ri),qn.subVectors(Pi,Ci),ci.subVectors(Ri,Pi);let e=[0,-Yn.z,Yn.y,0,-qn.z,qn.y,0,-ci.z,ci.y,Yn.z,0,-Yn.x,qn.z,0,-qn.x,ci.z,0,-ci.x,-Yn.y,Yn.x,0,-qn.y,qn.x,0,-ci.y,ci.x,0];return!Bo(e,Ri,Ci,Pi,Fs)||(e=[1,0,0,0,1,0,0,0,1],!Bo(e,Ri,Ci,Pi,Fs))?!1:(Os.crossVectors(Yn,qn),e=[Os.x,Os.y,Os.z],Bo(e,Ri,Ci,Pi,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ln=[new A,new A,new A,new A,new A,new A,new A,new A],mn=new A,Ns=new Ps,Ri=new A,Ci=new A,Pi=new A,Yn=new A,qn=new A,ci=new A,rs=new A,Fs=new A,Os=new A,li=new A;function Bo(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){li.fromArray(s,o);const a=i.x*Math.abs(li.x)+i.y*Math.abs(li.y)+i.z*Math.abs(li.z),c=t.dot(li),l=e.dot(li),h=n.dot(li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Vh=new Ps,as=new A,Go=new A;class Ds{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vh.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);const e=as.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(as,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Go.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(Go)),this.expandByPoint(as.copy(t.center).sub(Go))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const In=new A,Ho=new A,zs=new A,Zn=new A,ko=new A,Bs=new A,Vo=new A;class Ls{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ho.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Ho);const o=t.distanceTo(e)*.5,r=-this.direction.dot(zs),a=Zn.dot(this.direction),c=-Zn.dot(zs),l=Zn.lengthSq(),h=Math.abs(1-r*r);let u,d,m,g;if(h>0)if(u=r*c-a,d=r*a-c,g=o*h,u>=0)if(d>=-g)if(d<=g){const w=1/h;u*=w,d*=w,m=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),m=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-o,-c),o),m=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),m=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ho).addScaledVector(zs,d),m}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,i,o){ko.subVectors(e,t),Bs.subVectors(n,t),Vo.crossVectors(ko,Bs);let r=this.direction.dot(Vo),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Zn.subVectors(this.origin,t);const c=a*this.direction.dot(Bs.crossVectors(Zn,Bs));if(c<0)return null;const l=a*this.direction.dot(ko.cross(Zn));if(l<0||c+l>r)return null;const h=-a*Zn.dot(Vo);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,i,o,r,a,c,l,h,u,d,m,g,w,p){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,h,u,d,m,g,w,p)}set(t,e,n,i,o,r,a,c,l,h,u,d,m,g,w,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=o,f[5]=r,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=w,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Di.setFromMatrixColumn(t,0).length(),o=1/Di.setFromMatrixColumn(t,1).length(),r=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,m=r*u,g=a*h,w=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-w*l,e[9]=-a*c,e[2]=w-d*l,e[6]=g+m*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,m=c*u,g=l*h,w=l*u;e[0]=d+w*a,e[4]=g*a-m,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=m*a-g,e[6]=w+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,m=c*u,g=l*h,w=l*u;e[0]=d-w*a,e[4]=-r*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=r*h,e[9]=w-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,m=r*u,g=a*h,w=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+w,e[1]=c*u,e[5]=w*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,m=r*l,g=a*c,w=a*l;e[0]=c*h,e[4]=w-d*u,e[8]=g*u+m,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-w*u}else if(t.order==="XZY"){const d=r*c,m=r*l,g=a*c,w=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+w,e[5]=r*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=w*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wh,t,Xh)}lookAt(t,e,n){const i=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),jn.crossVectors(n,an),jn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),jn.crossVectors(n,an)),jn.normalize(),Gs.crossVectors(an,jn),i[0]=jn.x,i[4]=Gs.x,i[8]=an.x,i[1]=jn.y,i[5]=Gs.y,i[9]=an.y,i[2]=jn.z,i[6]=Gs.z,i[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],w=n[6],p=n[10],f=n[14],x=n[3],v=n[7],M=n[11],P=n[15],b=i[0],R=i[4],D=i[8],y=i[12],S=i[1],L=i[5],N=i[9],X=i[13],K=i[2],q=i[6],B=i[10],W=i[14],Y=i[3],pt=i[7],ct=i[11],Et=i[15];return o[0]=r*b+a*S+c*K+l*Y,o[4]=r*R+a*L+c*q+l*pt,o[8]=r*D+a*N+c*B+l*ct,o[12]=r*y+a*X+c*W+l*Et,o[1]=h*b+u*S+d*K+m*Y,o[5]=h*R+u*L+d*q+m*pt,o[9]=h*D+u*N+d*B+m*ct,o[13]=h*y+u*X+d*W+m*Et,o[2]=g*b+w*S+p*K+f*Y,o[6]=g*R+w*L+p*q+f*pt,o[10]=g*D+w*N+p*B+f*ct,o[14]=g*y+w*X+p*W+f*Et,o[3]=x*b+v*S+M*K+P*Y,o[7]=x*R+v*L+M*q+P*pt,o[11]=x*D+v*N+M*B+P*ct,o[15]=x*y+v*X+M*W+P*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],w=t[7],p=t[11],f=t[15];return g*(+o*c*u-i*l*u-o*a*d+n*l*d+i*a*m-n*c*m)+w*(+e*c*m-e*l*d+o*r*d-i*r*m+i*l*h-o*c*h)+p*(+e*l*u-e*a*m-o*r*u+n*r*m+o*a*h-n*l*h)+f*(-i*a*h-e*c*u+e*a*d+i*r*u-n*r*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],w=t[13],p=t[14],f=t[15],x=u*p*l-w*d*l+w*c*m-a*p*m-u*c*f+a*d*f,v=g*d*l-h*p*l-g*c*m+r*p*m+h*c*f-r*d*f,M=h*w*l-g*u*l+g*a*m-r*w*m-h*a*f+r*u*f,P=g*u*c-h*w*c-g*a*d+r*w*d+h*a*p-r*u*p,b=e*x+n*v+i*M+o*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=x*R,t[1]=(w*d*o-u*p*o-w*i*m+n*p*m+u*i*f-n*d*f)*R,t[2]=(a*p*o-w*c*o+w*i*l-n*p*l-a*i*f+n*c*f)*R,t[3]=(u*c*o-a*d*o-u*i*l+n*d*l+a*i*m-n*c*m)*R,t[4]=v*R,t[5]=(h*p*o-g*d*o+g*i*m-e*p*m-h*i*f+e*d*f)*R,t[6]=(g*c*o-r*p*o-g*i*l+e*p*l+r*i*f-e*c*f)*R,t[7]=(r*d*o-h*c*o+h*i*l-e*d*l-r*i*m+e*c*m)*R,t[8]=M*R,t[9]=(g*u*o-h*w*o-g*n*m+e*w*m+h*n*f-e*u*f)*R,t[10]=(r*w*o-g*a*o+g*n*l-e*w*l-r*n*f+e*a*f)*R,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*m-e*a*m)*R,t[12]=P*R,t[13]=(h*w*i-g*u*i+g*n*d-e*w*d-h*n*p+e*u*p)*R,t[14]=(g*a*i-r*w*i-g*n*c+e*w*c+r*n*p-e*a*p)*R,t[15]=(r*u*i-h*a*i+h*n*c-e*u*c-r*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,m=o*h,g=o*u,w=r*h,p=r*u,f=a*u,x=c*l,v=c*h,M=c*u,P=n.x,b=n.y,R=n.z;return i[0]=(1-(w+f))*P,i[1]=(m+M)*P,i[2]=(g-v)*P,i[3]=0,i[4]=(m-M)*b,i[5]=(1-(d+f))*b,i[6]=(p+x)*b,i[7]=0,i[8]=(g+v)*R,i[9]=(p-x)*R,i[10]=(1-(d+w))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Di.set(i[0],i[1],i[2]).length();const r=Di.set(i[4],i[5],i[6]).length(),a=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],gn.copy(this);const l=1/o,h=1/r,u=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,e.setFromRotationMatrix(gn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=Hn){const c=this.elements,l=2*o/(e-t),h=2*o/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,g;if(a===Hn)m=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===So)m=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=Hn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(r-o),d=(e+t)*l,m=(n+i)*h;let g,w;if(a===Hn)g=(r+o)*u,w=-2*u;else if(a===So)g=o*u,w=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=w,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new A,gn=new be,Wh=new A(0,0,0),Xh=new A(1,1,1),jn=new A,Gs=new A,an=new A,Wa=new be,Xa=new vi;class Cn{constructor(t=0,e=0,n=0,i=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-re(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xa.setFromEuler(this),this.setFromQuaternion(Xa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class wa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yh=0;const Ya=new A,Li=new vi,Un=new be,Hs=new A,cs=new A,qh=new A,Zh=new vi,qa=new A(1,0,0),Za=new A(0,1,0),ja=new A(0,0,1),Ka={type:"added"},jh={type:"removed"},Ii={type:"childadded",child:null},Wo={type:"childremoved",child:null};class We extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new A,e=new Cn,n=new vi,i=new A(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new se}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(qa,t)}rotateY(t){return this.rotateOnAxis(Za,t)}rotateZ(t){return this.rotateOnAxis(ja,t)}translateOnAxis(t,e){return Ya.copy(t).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qa,t)}translateY(t){return this.translateOnAxis(Za,t)}translateZ(t){return this.translateOnAxis(ja,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(cs,Hs,this.up):Un.lookAt(Hs,cs,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(Un),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ka),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jh),Wo.child=t,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ka),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,qh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Zh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),m=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}We.DEFAULT_UP=new A(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new A,Nn=new A,Xo=new A,Fn=new A,Ui=new A,Ni=new A,$a=new A,Yo=new A,qo=new A,Zo=new A,jo=new Ee,Ko=new Ee,$o=new Ee;class dn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_n.subVectors(t,e),i.cross(_n);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){_n.subVectors(i,e),Nn.subVectors(n,e),Xo.subVectors(t,e);const r=_n.dot(_n),a=_n.dot(Nn),c=_n.dot(Xo),l=Nn.dot(Nn),h=Nn.dot(Xo),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,m=(l*c-a*h)*d,g=(r*h-a*c)*d;return o.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Fn.x),c.addScaledVector(r,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return jo.setScalar(0),Ko.setScalar(0),$o.setScalar(0),jo.fromBufferAttribute(t,e),Ko.fromBufferAttribute(t,n),$o.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(jo,o.x),r.addScaledVector(Ko,o.y),r.addScaledVector($o,o.z),r}static isFrontFacing(t,e,n,i){return _n.subVectors(n,e),Nn.subVectors(t,e),_n.cross(Nn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),_n.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;Ui.subVectors(i,n),Ni.subVectors(o,n),Yo.subVectors(t,n);const c=Ui.dot(Yo),l=Ni.dot(Yo);if(c<=0&&l<=0)return e.copy(n);qo.subVectors(t,i);const h=Ui.dot(qo),u=Ni.dot(qo);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Ui,r);Zo.subVectors(t,o);const m=Ui.dot(Zo),g=Ni.dot(Zo);if(g>=0&&m<=g)return e.copy(o);const w=m*l-c*g;if(w<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ni,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return $a.subVectors(o,i),a=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector($a,a);const f=1/(p+w+d);return r=w*f,a=d*f,e.copy(n).addScaledVector(Ui,r).addScaledVector(Ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Jo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ne{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=Dh(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Jo(r,o,t+1/3),this.g=Jo(r,o,t),this.b=Jo(r,o,t-1/3)}return ge.colorSpaceToWorking(this,i),this}setStyle(t,e=fn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=dl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return ge.workingToColorSpace(qe.copy(this),t),Math.round(re(qe.r*255,0,255))*65536+Math.round(re(qe.g*255,0,255))*256+Math.round(re(qe.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(qe.copy(this),e);const n=qe.r,i=qe.g,o=qe.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-o)/u+(i<o?6:0);break;case i:c=(o-n)/u+2;break;case o:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=fn){ge.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,i=qe.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(ks);const n=Uo(Kn.h,ks.h,e),i=Uo(Kn.s,ks.s,e),o=Uo(Kn.l,ks.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new ne;ne.NAMES=dl;let Kh=0;class yi extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Xi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wr,this.blendDst=yr,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wr&&(n.blendSrc=this.blendSrc),this.blendDst!==yr&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ht extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new A,Vs=new Mt;let $h=0;class An{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$h++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=za,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=os(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=os(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=os(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),i=tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),i=tn(i,this.array),o=tn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==za&&(t.usage=this.usage),t}}class pl extends An{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ml extends An{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends An{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jh=0;const un=new be,Qo=new We,Fi=new A,cn=new Ps,ls=new Ps,ke=new A;class Yt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ul(t)?ml:pl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new se().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Qo.lookAt(t),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new de(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];cn.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(cn.min,ls.min),cn.expandByPoint(ke),ke.addVectors(cn.max,ls.max),cn.expandByPoint(ke)):(cn.expandByPoint(ls.min),cn.expandByPoint(ls.max))}cn.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)ke.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(ke));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ke.fromBufferAttribute(a,l),c&&(Fi.fromBufferAttribute(t,l),ke.add(Fi)),i=Math.max(i,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new A,c[D]=new A;const l=new A,h=new A,u=new A,d=new Mt,m=new Mt,g=new Mt,w=new A,p=new A;function f(D,y,S){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),d.fromBufferAttribute(o,D),m.fromBufferAttribute(o,y),g.fromBufferAttribute(o,S),h.sub(l),u.sub(l),m.sub(d),g.sub(d);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(w.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(L),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(L),a[D].add(w),a[y].add(w),a[S].add(w),c[D].add(p),c[y].add(p),c[S].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let D=0,y=x.length;D<y;++D){const S=x[D],L=S.start,N=S.count;for(let X=L,K=L+N;X<K;X+=3)f(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const v=new A,M=new A,P=new A,b=new A;function R(D){P.fromBufferAttribute(i,D),b.copy(P);const y=a[D];v.copy(y),v.sub(P.multiplyScalar(P.dot(y))).normalize(),M.crossVectors(b,y);const L=M.dot(c[D])<0?-1:1;r.setXYZW(D,v.x,v.y,v.z,L)}for(let D=0,y=x.length;D<y;++D){const S=x[D],L=S.start,N=S.count;for(let X=L,K=L+N;X<K;X+=3)R(t.getX(X+0)),R(t.getX(X+1)),R(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new A,o=new A,r=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),w=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,w),r.fromBufferAttribute(e,p),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,w),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let w=0,p=c.length;w<p;w++){a.isInterleavedBufferAttribute?m=c[w]*a.data.stride+a.offset:m=c[w]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new An(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Yt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ja=new be,hi=new Ls,Ws=new Ds,Qa=new A,Xs=new A,Ys=new A,qs=new A,tr=new A,Zs=new A,tc=new A,js=new A;class Q extends We{constructor(t=new Yt,e=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){Zs.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(tr.fromBufferAttribute(u,t),r?Zs.addScaledVector(tr,h):Zs.addScaledVector(tr.sub(e),h))}e.add(Zs)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(o),hi.copy(t.ray).recast(t.near),!(Ws.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Ws,Qa)===null||hi.origin.distanceToSquared(Qa)>(t.far-t.near)**2))&&(Ja.copy(o).invert(),hi.copy(t.ray).applyMatrix4(Ja),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,w=d.length;g<w;g++){const p=d[g],f=r[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=x,P=v;M<P;M+=3){const b=a.getX(M),R=a.getX(M+1),D=a.getX(M+2);i=Ks(this,f,t,n,l,h,u,b,R,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),w=Math.min(a.count,m.start+m.count);for(let p=g,f=w;p<f;p+=3){const x=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);i=Ks(this,r,t,n,l,h,u,x,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,w=d.length;g<w;g++){const p=d[g],f=r[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=x,P=v;M<P;M+=3){const b=M,R=M+1,D=M+2;i=Ks(this,f,t,n,l,h,u,b,R,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),w=Math.min(c.count,m.start+m.count);for(let p=g,f=w;p<f;p+=3){const x=p,v=p+1,M=p+2;i=Ks(this,r,t,n,l,h,u,x,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Qh(s,t,e,n,i,o,r,a){let c;if(t.side===Ve?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===ii,a),c===null)return null;js.copy(a),js.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(js);return l<e.near||l>e.far?null:{distance:l,point:js.clone(),object:s}}function Ks(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,Xs),s.getVertexPosition(c,Ys),s.getVertexPosition(l,qs);const h=Qh(s,t,e,n,Xs,Ys,qs,tc);if(h){const u=new A;dn.getBarycoord(tc,Xs,Ys,qs,u),i&&(h.uv=dn.getInterpolatedAttribute(i,a,c,l,u,new Mt)),o&&(h.uv1=dn.getInterpolatedAttribute(o,a,c,l,u,new Mt)),r&&(h.normal=dn.getInterpolatedAttribute(r,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};dn.getNormal(Xs,Ys,qs,d.normal),h.face=d,h.barycoord=u}return h}class Kt extends Yt{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(w,p,f,x,v,M,P,b,R,D,y){const S=M/R,L=P/D,N=M/2,X=P/2,K=b/2,q=R+1,B=D+1;let W=0,Y=0;const pt=new A;for(let ct=0;ct<B;ct++){const Et=ct*L-X;for(let Pt=0;Pt<q;Pt++){const ut=Pt*S-N;pt[w]=ut*x,pt[p]=Et*v,pt[f]=K,l.push(pt.x,pt.y,pt.z),pt[w]=0,pt[p]=0,pt[f]=b>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(Pt/R),u.push(1-ct/D),W+=1}}for(let ct=0;ct<D;ct++)for(let Et=0;Et<R;Et++){const Pt=d+Et+q*ct,ut=d+Et+q*(ct+1),G=d+(Et+1)+q*(ct+1),at=d+(Et+1)+q*ct;c.push(Pt,ut,at),c.push(ut,G,at),Y+=6}a.addGroup(m,Y,y),m+=Y,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Je(s){const t={};for(let e=0;e<s.length;e++){const n=Ji(s[e]);for(const i in n)t[i]=n[i]}return t}function tu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const Eo={clone:Ji,merge:Je};var eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eu,this.fragmentShader=nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=tu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _l extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new A,ec=new Mt,nc=new Mt;class nn extends _l{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,ec,nc),e.subVectors(nc,ec)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,zi=1;class iu extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nn(Oi,zi,t,e);i.layers=this.layers,this.add(i);const o=new nn(Oi,zi,t,e);o.layers=this.layers,this.add(o);const r=new nn(Oi,zi,t,e);r.layers=this.layers,this.add(r);const a=new nn(Oi,zi,t,e);a.layers=this.layers,this.add(a);const c=new nn(Oi,zi,t,e);c.layers=this.layers,this.add(c);const l=new nn(Oi,zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===So)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xl extends Ke{constructor(t=[],e=ji,n,i,o,r,a,c,l,h){super(t,e,n,i,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class su extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new xl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Kt(5,5,5),o=new sn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:kn});o.uniforms.tEquirect.value=e;const r=new Q(i,o),a=e.minFilter;return e.minFilter===_i&&(e.minFilter=xn),new iu(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}class xe extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ou={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const w of t.hand.values()){const p=e.getJointPose(w,n),f=this._getHandJoint(l,w);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ou)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class vl extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const nr=new A,ru=new A,au=new se;class Qn{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=nr.subVectors(n,e).cross(ru.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||au.getNormalMatrix(t),i=this.coplanarPoint(nr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Ds,cu=new Mt(.5,.5),$s=new A;class ya{constructor(t=new Qn,e=new Qn,n=new Qn,i=new Qn,o=new Qn,r=new Qn){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],m=i[8],g=i[9],w=i[10],p=i[11],f=i[12],x=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-o,d-l,p-m,M-f).normalize(),n[1].setComponents(c+o,d+l,p+m,M+f).normalize(),n[2].setComponents(c+r,d+h,p+g,M+x).normalize(),n[3].setComponents(c-r,d-h,p-g,M-x).normalize(),n[4].setComponents(c-a,d-u,p-w,M-v).normalize(),e===Hn)n[5].setComponents(c+a,d+u,p+w,M+v).normalize();else if(e===So)n[5].setComponents(a,u,w,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){ui.center.set(0,0,0);const e=cu.distanceTo(t.center);return ui.radius=.7071067811865476+e,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if($s.x=i.normal.x>0?t.max.x:t.min.x,$s.y=i.normal.y>0?t.max.y:t.min.y,$s.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ut extends yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const To=new A,bo=new A,ic=new be,hs=new Ls,Js=new Ds,ir=new A,sc=new A;class _e extends We{constructor(t=new Yt,e=new Ut){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)To.fromBufferAttribute(e,i-1),bo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=To.distanceTo(bo);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(i),Js.radius+=o,t.ray.intersectsSphere(Js)===!1)return;ic.copy(i).invert(),hs.copy(t.ray).applyMatrix4(ic);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let w=m,p=g-1;w<p;w+=l){const f=h.getX(w),x=h.getX(w+1),v=Qs(this,t,hs,c,f,x,w);v&&e.push(v)}if(this.isLineLoop){const w=h.getX(g-1),p=h.getX(m),f=Qs(this,t,hs,c,w,p,g-1);f&&e.push(f)}}else{const m=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let w=m,p=g-1;w<p;w+=l){const f=Qs(this,t,hs,c,w,w+1,w);f&&e.push(f)}if(this.isLineLoop){const w=Qs(this,t,hs,c,g-1,m,g-1);w&&e.push(w)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Qs(s,t,e,n,i,o,r){const a=s.geometry.attributes.position;if(To.fromBufferAttribute(a,i),bo.fromBufferAttribute(a,o),e.distanceSqToSegment(To,bo,ir,sc)>n)return;ir.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ir);if(!(l<t.near||l>t.far))return{distance:l,point:sc.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}const oc=new A,rc=new A;class ie extends _e{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)oc.fromBufferAttribute(e,i),rc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+oc.distanceTo(rc);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ze extends _e{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Sa extends yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ac=new be,aa=new Ls,to=new Ds,eo=new A;class Ml extends We{constructor(t=new Yt,e=new Sa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(i),to.radius+=o,t.ray.intersectsSphere(to)===!1)return;ac.copy(i).invert(),aa.copy(t.ray).applyMatrix4(ac);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),m=Math.min(l.count,r.start+r.count);for(let g=d,w=m;g<w;g++){const p=l.getX(g);eo.fromBufferAttribute(u,p),cc(eo,p,c,i,t,e,this)}}else{const d=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let g=d,w=m;g<w;g++)eo.fromBufferAttribute(u,g),cc(eo,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function cc(s,t,e,n,i,o,r){const a=aa.distanceSqToPoint(s);if(a<e){const c=new A;aa.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class wl extends Ke{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yl extends Ke{constructor(t,e,n=xi,i,o,r,a=Mn,c=Mn,l,h=Ss,u=1){if(h!==Ss&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ma(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ze extends Yt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new A,h=new Mt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*i;l.x=t*Math.cos(m),l.y=t*Math.sin(m),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class te extends Yt{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],d=[],m=[];let g=0;const w=[],p=n/2;let f=0;x(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(m,2));function x(){const M=new A,P=new A;let b=0;const R=(e-t)/n;for(let D=0;D<=o;D++){const y=[],S=D/o,L=S*(e-t)+t;for(let N=0;N<=i;N++){const X=N/i,K=X*c+a,q=Math.sin(K),B=Math.cos(K);P.x=L*q,P.y=-S*n+p,P.z=L*B,u.push(P.x,P.y,P.z),M.set(q,R,B).normalize(),d.push(M.x,M.y,M.z),m.push(X,1-S),y.push(g++)}w.push(y)}for(let D=0;D<i;D++)for(let y=0;y<o;y++){const S=w[y][D],L=w[y+1][D],N=w[y+1][D+1],X=w[y][D+1];(t>0||y!==0)&&(h.push(S,L,X),b+=3),(e>0||y!==o-1)&&(h.push(L,N,X),b+=3)}l.addGroup(f,b,0),f+=b}function v(M){const P=g,b=new Mt,R=new A;let D=0;const y=M===!0?t:e,S=M===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,p*S,0),d.push(0,S,0),m.push(.5,.5),g++;const L=g;for(let N=0;N<=i;N++){const K=N/i*c+a,q=Math.cos(K),B=Math.sin(K);R.x=y*B,R.y=p*S,R.z=y*q,u.push(R.x,R.y,R.z),d.push(0,S,0),b.x=q*.5+.5,b.y=B*.5*S+.5,m.push(b.x,b.y),g++}for(let N=0;N<i;N++){const X=P+N,K=L+N;M===!0?h.push(K,K+1,X):h.push(K+1,K,X),D+=3}l.addGroup(f,D,M===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qi extends te{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Qi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Co extends Yt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),l(n),h(),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(o.slice(),3)),this.setAttribute("uv",new de(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new A,M=new A,P=new A;for(let b=0;b<e.length;b+=3)m(e[b+0],v),m(e[b+1],M),m(e[b+2],P),c(v,M,P,x)}function c(x,v,M,P){const b=P+1,R=[];for(let D=0;D<=b;D++){R[D]=[];const y=x.clone().lerp(M,D/b),S=v.clone().lerp(M,D/b),L=b-D;for(let N=0;N<=L;N++)N===0&&D===b?R[D][N]=y:R[D][N]=y.clone().lerp(S,N/L)}for(let D=0;D<b;D++)for(let y=0;y<2*(b-D)-1;y++){const S=Math.floor(y/2);y%2===0?(d(R[D][S+1]),d(R[D+1][S]),d(R[D][S])):(d(R[D][S+1]),d(R[D+1][S+1]),d(R[D+1][S]))}}function l(x){const v=new A;for(let M=0;M<o.length;M+=3)v.x=o[M+0],v.y=o[M+1],v.z=o[M+2],v.normalize().multiplyScalar(x),o[M+0]=v.x,o[M+1]=v.y,o[M+2]=v.z}function h(){const x=new A;for(let v=0;v<o.length;v+=3){x.x=o[v+0],x.y=o[v+1],x.z=o[v+2];const M=p(x)/2/Math.PI+.5,P=f(x)/Math.PI+.5;r.push(M,1-P)}g(),u()}function u(){for(let x=0;x<r.length;x+=6){const v=r[x+0],M=r[x+2],P=r[x+4],b=Math.max(v,M,P),R=Math.min(v,M,P);b>.9&&R<.1&&(v<.2&&(r[x+0]+=1),M<.2&&(r[x+2]+=1),P<.2&&(r[x+4]+=1))}}function d(x){o.push(x.x,x.y,x.z)}function m(x,v){const M=x*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){const x=new A,v=new A,M=new A,P=new A,b=new Mt,R=new Mt,D=new Mt;for(let y=0,S=0;y<o.length;y+=9,S+=6){x.set(o[y+0],o[y+1],o[y+2]),v.set(o[y+3],o[y+4],o[y+5]),M.set(o[y+6],o[y+7],o[y+8]),b.set(r[S+0],r[S+1]),R.set(r[S+2],r[S+3]),D.set(r[S+4],r[S+5]),P.copy(x).add(v).add(M).divideScalar(3);const L=p(P);w(b,S+0,x,L),w(R,S+2,v,L),w(D,S+4,M,L)}}function w(x,v,M,P){P<0&&x.x===1&&(r[v]=x.x-1),M.x===0&&M.z===0&&(r[v]=P/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.vertices,t.indices,t.radius,t.details)}}const no=new A,io=new A,sr=new A,so=new dn;class ce extends Yt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),o=Math.cos(ps*e),r=t.getIndex(),a=t.getAttribute("position"),c=r?r.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<c;g+=3){r?(l[0]=r.getX(g),l[1]=r.getX(g+1),l[2]=r.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:w,b:p,c:f}=so;if(w.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),so.getNormal(sr),u[0]=`${Math.round(w.x*i)},${Math.round(w.y*i)},${Math.round(w.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const v=(x+1)%3,M=u[x],P=u[v],b=so[h[x]],R=so[h[v]],D=`${M}_${P}`,y=`${P}_${M}`;y in d&&d[y]?(sr.dot(d[y].normal)<=o&&(m.push(b.x,b.y,b.z),m.push(R.x,R.y,R.z)),d[y]=null):D in d||(d[D]={index0:l[x],index1:l[v],normal:sr.clone()})}}for(const g in d)if(d[g]){const{index0:w,index1:p}=d[g];no.fromBufferAttribute(a,w),io.fromBufferAttribute(a,p),m.push(no.x,no.y,no.z),m.push(io.x,io.y,io.z)}this.setAttribute("position",new de(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const h=n[i],d=n[i+1]-h,m=(r-h)/d;return(i+m)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new Mt:new A);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new A,i=[],o=[],r=[],a=new A,c=new be;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new A)}o[0]=new A,r[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let m=1;m<=t;m++){if(o[m]=o[m-1].clone(),r[m]=r[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(re(i[m-1].dot(i[m]),-1,1));o[m].applyMatrix4(c.makeRotationAxis(a,g))}r[m].crossVectors(i[m],o[m])}if(e===!0){let m=Math.acos(re(o[0].dot(o[t]),-1,1));m/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(m=-m);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(i[g],m*g)),r[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ea extends Pn{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Mt){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class lu extends Ea{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ta(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,m=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,m*=h,i(r,a,d,m)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const oo=new A,or=new Ta,rr=new Ta,ar=new Ta;class Sl extends Pn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%o]:(oo.subVectors(i[0],i[1]).add(i[0]),l=oo);const u=i[a%o],d=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(oo.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=oo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),m),w=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);w<1e-4&&(w=1),g<1e-4&&(g=w),p<1e-4&&(p=w),or.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,w,p),rr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,w,p),ar.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,w,p)}else this.curveType==="catmullrom"&&(or.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),rr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ar.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(or.calc(c),rr.calc(c),ar.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function lc(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function hu(s,t){const e=1-s;return e*e*t}function uu(s,t){return 2*(1-s)*s*t}function fu(s,t){return s*s*t}function ms(s,t,e,n){return hu(s,t)+uu(s,e)+fu(s,n)}function du(s,t){const e=1-s;return e*e*e*t}function pu(s,t){const e=1-s;return 3*e*e*s*t}function mu(s,t){return 3*(1-s)*s*s*t}function gu(s,t){return s*s*s*t}function gs(s,t,e,n,i){return du(s,t)+pu(s,e)+mu(s,n)+gu(s,i)}class El extends Pn{constructor(t=new Mt,e=new Mt,n=new Mt,i=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Mt){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(gs(t,i.x,o.x,r.x,a.x),gs(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _u extends Pn{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(gs(t,i.x,o.x,r.x,a.x),gs(t,i.y,o.y,r.y,a.y),gs(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tl extends Pn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xu extends Pn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bl extends Pn{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(ms(t,i.x,o.x,r.x),ms(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vu extends Pn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(ms(t,i.x,o.x,r.x),ms(t,i.y,o.y,r.y),ms(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Al extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(lc(a,c.x,l.x,h.x,u.x),lc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Mt().fromArray(i))}return this}}var hc=Object.freeze({__proto__:null,ArcCurve:lu,CatmullRomCurve3:Sl,CubicBezierCurve:El,CubicBezierCurve3:_u,EllipseCurve:Ea,LineCurve:Tl,LineCurve3:xu,QuadraticBezierCurve:bl,QuadraticBezierCurve3:vu,SplineCurve:Al});class Mu extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new hc[i.type]().fromJSON(i))}return this}}class uc extends Mu{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Tl(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new bl(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new El(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i),new Mt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Al(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const l=new Ea(t,e,n,i,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ba extends uc{constructor(t){super(t),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new uc().fromJSON(i))}return this}}function wu(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=Rl(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l;if(n&&(o=bu(s,t,o,e)),s.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=e;d<i;d+=e){const m=s[d],g=s[d+1];m<a&&(a=m),g<c&&(c=g),m>h&&(h=m),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return bs(o,r,e,a,c,l,0),r}function Rl(s,t,e,n,i){let o;if(i===Ou(s,t,e,n)>0)for(let r=t;r<e;r+=n)o=fc(r/n|0,s[r],s[r+1],o);else for(let r=e-n;r>=t;r-=n)o=fc(r/n|0,s[r],s[r+1],o);return o&&ts(o,o.next)&&(Rs(o),o=o.next),o}function Mi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ts(e,e.next)||De(e.prev,e,e.next)===0)){if(Rs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function bs(s,t,e,n,i,o,r){if(!s)return;!r&&o&&Du(s,n,i,o);let a=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(o?Su(s,n,i,o):yu(s)){t.push(c.i,s.i,l.i),Rs(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=Eu(Mi(s),t),bs(s,t,e,n,i,o,2)):r===2&&Tu(s,t,e,n,i,o):bs(Mi(s),t,e,n,i,o,1);break}}}function yu(s){const t=s.prev,e=s,n=s.next;if(De(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(i,o,r),u=Math.min(a,c,l),d=Math.max(i,o,r),m=Math.max(a,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&fs(i,a,o,c,r,l,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Su(s,t,e,n){const i=s.prev,o=s,r=s.next;if(De(i,o,r)>=0)return!1;const a=i.x,c=o.x,l=r.x,h=i.y,u=o.y,d=r.y,m=Math.min(a,c,l),g=Math.min(h,u,d),w=Math.max(a,c,l),p=Math.max(h,u,d),f=ca(m,g,t,e,n),x=ca(w,p,t,e,n);let v=s.prevZ,M=s.nextZ;for(;v&&v.z>=f&&M&&M.z<=x;){if(v.x>=m&&v.x<=w&&v.y>=g&&v.y<=p&&v!==i&&v!==r&&fs(a,h,c,u,l,d,v.x,v.y)&&De(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=m&&M.x<=w&&M.y>=g&&M.y<=p&&M!==i&&M!==r&&fs(a,h,c,u,l,d,M.x,M.y)&&De(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=f;){if(v.x>=m&&v.x<=w&&v.y>=g&&v.y<=p&&v!==i&&v!==r&&fs(a,h,c,u,l,d,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=x;){if(M.x>=m&&M.x<=w&&M.y>=g&&M.y<=p&&M!==i&&M!==r&&fs(a,h,c,u,l,d,M.x,M.y)&&De(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Eu(s,t){let e=s;do{const n=e.prev,i=e.next.next;!ts(n,i)&&Pl(n,e,e.next,i)&&As(n,i)&&As(i,n)&&(t.push(n.i,e.i,i.i),Rs(e),Rs(e.next),e=s=i),e=e.next}while(e!==s);return Mi(e)}function Tu(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Uu(r,a)){let c=Dl(r,a);r=Mi(r,r.next),c=Mi(c,c.next),bs(r,t,e,n,i,o,0),bs(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function bu(s,t,e,n){const i=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=Rl(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Iu(l))}i.sort(Au);for(let o=0;o<i.length;o++)e=Ru(i[o],e);return e}function Au(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Ru(s,t){const e=Cu(s,t);if(!e)return t;const n=Dl(e,s);return Mi(n,n.next),Mi(e,e.next)}function Cu(s,t){let e=t;const n=s.x,i=s.y;let o=-1/0,r;if(ts(s,e))return e;do{if(ts(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>o&&(o=u,r=e.x<e.next.x?e:e.next,u===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,c=r.x,l=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Cl(i<l?n:o,i,c,l,i<l?o:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);As(e,s)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&Pu(r,e)))&&(r=e,h=u)}e=e.next}while(e!==a);return r}function Pu(s,t){return De(s.prev,s,t.prev)<0&&De(t.next,s,s.next)<0}function Du(s,t,e,n){let i=s;do i.z===0&&(i.z=ca(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Lu(i)}function Lu(s){let t,e=1;do{let n=s,i;s=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let l=0;l<e&&(a++,r=r.nextZ,!!r);l++);let c=e;for(;a>0||c>0&&r;)a!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;n=r}o.nextZ=null,e*=2}while(t>1);return s}function ca(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Iu(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Cl(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function fs(s,t,e,n,i,o,r,a){return!(s===r&&t===a)&&Cl(s,t,e,n,i,o,r,a)}function Uu(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Nu(s,t)&&(As(s,t)&&As(t,s)&&Fu(s,t)&&(De(s.prev,s,t.prev)||De(s,t.prev,t))||ts(s,t)&&De(s.prev,s,s.next)>0&&De(t.prev,t,t.next)>0)}function De(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ts(s,t){return s.x===t.x&&s.y===t.y}function Pl(s,t,e,n){const i=ao(De(s,t,e)),o=ao(De(s,t,n)),r=ao(De(e,n,s)),a=ao(De(e,n,t));return!!(i!==o&&r!==a||i===0&&ro(s,e,t)||o===0&&ro(s,n,t)||r===0&&ro(e,s,n)||a===0&&ro(e,t,n))}function ro(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ao(s){return s>0?1:s<0?-1:0}function Nu(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Pl(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function As(s,t){return De(s.prev,s,s.next)<0?De(s,t,s.next)>=0&&De(s,s.prev,t)>=0:De(s,t,s.prev)<0||De(s,s.next,t)<0}function Fu(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Dl(s,t){const e=la(s.i,s.x,s.y),n=la(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function fc(s,t,e,n){const i=la(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Rs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function la(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ou(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class zu{static triangulate(t,e,n=2){return wu(t,e,n)}}class _s{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return _s.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];dc(t),pc(n,t);let r=t.length;e.forEach(dc);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,pc(n,e[c]);const a=zu.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function dc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function pc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Aa extends Co{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Aa(t.radius,t.detail)}}class Ao extends Co{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ao(t.radius,t.detail)}}class Si extends Yt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],w=[],p=[];for(let f=0;f<h;f++){const x=f*d-r;for(let v=0;v<l;v++){const M=v*u-o;g.push(M,-x,0),w.push(0,0,1),p.push(v/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<a;x++){const v=x+l*f,M=x+l*(f+1),P=x+1+l*(f+1),b=x+1+l*f;m.push(v,M,b),m.push(M,P,b)}this.setIndex(m),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(w,3)),this.setAttribute("uv",new de(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cs extends Yt{constructor(t=new ba([new Mt(0,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new de(i,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(r,2));function l(h){const u=i.length/3,d=h.extractPoints(e);let m=d.shape;const g=d.holes;_s.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,f=g.length;p<f;p++){const x=g[p];_s.isClockWise(x)===!0&&(g[p]=x.reverse())}const w=_s.triangulateShape(m,g);for(let p=0,f=g.length;p<f;p++){const x=g[p];m=m.concat(x)}for(let p=0,f=m.length;p<f;p++){const x=m[p];i.push(x.x,x.y,0),o.push(0,0,1),r.push(x.x,x.y)}for(let p=0,f=w.length;p<f;p++){const x=w[p],v=x[0]+u,M=x[1]+u,P=x[2]+u;n.push(v,M,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Bu(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new Cs(n,t.curveSegments)}}function Bu(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class ve extends Yt{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new A,d=new A,m=[],g=[],w=[],p=[];for(let f=0;f<=n;f++){const x=[],v=f/n;let M=0;f===0&&r===0?M=.5/e:f===n&&c===Math.PI&&(M=-.5/e);for(let P=0;P<=e;P++){const b=P/e;u.x=-t*Math.cos(i+b*o)*Math.sin(r+v*a),u.y=t*Math.cos(r+v*a),u.z=t*Math.sin(i+b*o)*Math.sin(r+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),w.push(d.x,d.y,d.z),p.push(b+M,1-v),x.push(l++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const v=h[f][x+1],M=h[f][x],P=h[f+1][x],b=h[f+1][x+1];(f!==0||r>0)&&m.push(v,M,b),(f!==n-1||c<Math.PI)&&m.push(M,P,b)}this.setIndex(m),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(w,3)),this.setAttribute("uv",new de(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class je extends Yt{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const w=g/i*o,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(w),u.y=(t+e*Math.cos(p))*Math.sin(w),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(w),h.y=t*Math.sin(w),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const w=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,f=(i+1)*(m-1)+g,x=(i+1)*m+g;r.push(w,p,x),r.push(p,f,x)}this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Gu extends Yt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new A,o=new A;if(t.index!==null){const r=t.attributes.position,a=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],d=u.start,m=u.count;for(let g=d,w=d+m;g<w;g+=3)for(let p=0;p<3;p++){const f=a.getX(g+p),x=a.getX(g+(p+1)%3);i.fromBufferAttribute(r,f),o.fromBufferAttribute(r,x),mc(i,o,n)===!0&&(e.push(i.x,i.y,i.z),e.push(o.x,o.y,o.z))}}}else{const r=t.attributes.position;for(let a=0,c=r.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,u=3*a+(l+1)%3;i.fromBufferAttribute(r,h),o.fromBufferAttribute(r,u),mc(i,o,n)===!0&&(e.push(i.x,i.y,i.z),e.push(o.x,o.y,o.z))}}this.setAttribute("position",new de(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function mc(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}class zt extends yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gc extends zt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Hu extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ku extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const cr={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Vu{constructor(t,e,n){const i=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,o===!1&&i.onStart!==void 0&&i.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const Wu=new Vu;class Ra{constructor(t){this.manager=t!==void 0?t:Wu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,o){n.load(t,i,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi=new WeakMap;class Xu extends Ra{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=cr.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0);else{let u=Bi.get(r);u===void 0&&(u=[],Bi.set(r,u)),u.push({onLoad:e,onError:i})}return r}const a=Ts("img");function c(){h(),e&&e(this);const u=Bi.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onLoad&&m.onLoad(this)}Bi.delete(this),o.manager.itemEnd(t)}function l(u){h(),i&&i(u),cr.remove(`image:${t}`);const d=Bi.get(this)||[];for(let m=0;m<d.length;m++){const g=d[m];g.onError&&g.onError(u)}Bi.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),cr.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}}class Yu extends Ra{constructor(t){super(t)}load(t,e,n,i){const o=new Ke,r=new Xu(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,i),o}}class Ca extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const lr=new be,_c=new A,xc=new A;class Ll{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_c.setFromMatrixPosition(t.matrixWorld),e.position.copy(_c),xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xc),e.updateMatrixWorld(),lr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vc=new be,us=new A,hr=new A;class qu extends Ll{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new Ee(2,1,1,1),new Ee(0,1,1,1),new Ee(3,1,1,1),new Ee(1,1,1,1),new Ee(3,0,1,1),new Ee(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),us.setFromMatrixPosition(t.matrixWorld),n.position.copy(us),hr.copy(n.position),hr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(hr),n.updateMatrixWorld(),i.makeTranslation(-us.x,-us.y,-us.z),vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc)}}class Il extends Ca{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Pa extends _l{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zu extends Ll{constructor(){super(new Pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ju extends Ca{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Zu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Da extends Ca{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ku extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class $u{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Mc=new be;class Po{constructor(t,e,n=0,i=1/0){this.ray=new Ls(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Mc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mc),this}intersectObject(t,e=!0,n=[]){return ha(t,this,n,e),n.sort(wc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,o=t.length;i<o;i++)ha(t[i],this,n,e);return n.sort(wc),n}}function wc(s,t){return s.distance-t.distance}function ha(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let r=0,a=o.length;r<a;r++)ha(o[r],t,e,!0)}}class yc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ju extends wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Sc(s,t,e,n){const i=Qu(n);switch(e){case sl:return s*t;case rl:return s*t/i.components*i.byteLength;case _a:return s*t/i.components*i.byteLength;case al:return s*t*2/i.components*i.byteLength;case xa:return s*t*2/i.components*i.byteLength;case ol:return s*t*3/i.components*i.byteLength;case vn:return s*t*4/i.components*i.byteLength;case va:return s*t*4/i.components*i.byteLength;case po:case mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case go:case _o:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nr:case Or:return Math.max(s,16)*Math.max(t,8)/4;case Ur:case Fr:return Math.max(s,8)*Math.max(t,8)/2;case zr:case Br:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Vr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Xr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Yr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case qr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Zr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case jr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case $r:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Jr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Qr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ta:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case xo:case ea:case na:return Math.ceil(s/4)*Math.ceil(t/4)*16;case cl:case ia:return Math.ceil(s/4)*Math.ceil(t/4)*8;case sa:case oa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qu(s){switch(s){case Rn:case el:return{byteLength:1,components:1};case ws:case nl:case Vn:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case xi:case pa:case Gn:return{byteLength:4,components:1};case il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ul(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function tf(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=s.SHORT;else if(l instanceof Uint32Array)m=s.UNSIGNED_INT;else if(l instanceof Int32Array)m=s.INT;else if(l instanceof Int8Array)m=s.BYTE;else if(l instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){const g=u[d],w=u[m];w.start<=g.start+g.count+1?g.count=Math.max(g.count,w.start+w.count-g.start):(++d,u[d]=w)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){const w=u[m];s.bufferSubData(l,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf=`#ifdef USE_ALPHAHASH
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
#endif`,sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cf=`#ifdef USE_AOMAP
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
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf=`#ifdef USE_BATCHING
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
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mf=`#ifdef USE_IRIDESCENCE
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
#endif`,gf=`#ifdef USE_BUMPMAP
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tf=`#define PI 3.141592653589793
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
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Af=`vec3 transformedNormal = objectNormal;
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
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",If=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
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
}`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qf=`uniform bool receiveShadow;
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
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
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
#endif`,td=`struct PhysicalMaterial {
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
}`,ed=`
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
#endif`,nd=`#if defined( RE_IndirectDiffuse )
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
#endif`,id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,od=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ud=`#if defined( USE_POINTS_UV )
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
#endif`,fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,md=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_d=`#ifdef USE_MORPHTARGETS
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
#endif`,xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Md=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ed=`#ifdef USE_NORMALMAP
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
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Id=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gd=`float getShadowMask() {
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
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kd=`#ifdef USE_SKINNING
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
#endif`,Vd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wd=`#ifdef USE_SKINNING
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
#endif`,Xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jd=`#ifdef USE_TRANSMISSION
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
#endif`,Kd=`#ifdef USE_TRANSMISSION
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
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,np=`uniform sampler2D t2D;
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
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`#include <common>
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
}`,cp=`#if DEPTH_PACKING == 3200
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
}`,lp=`#define DISTANCE
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
}`,hp=`#define DISTANCE
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,gp=`uniform vec3 diffuse;
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
}`,_p=`#define LAMBERT
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
}`,xp=`#define LAMBERT
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
}`,vp=`#define MATCAP
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
}`,Mp=`#define MATCAP
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
}`,wp=`#define NORMAL
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
}`,yp=`#define NORMAL
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
}`,Sp=`#define PHONG
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
}`,Ep=`#define PHONG
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
}`,Tp=`#define STANDARD
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
}`,bp=`#define STANDARD
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
}`,Ap=`#define TOON
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
}`,Rp=`#define TOON
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
}`,Cp=`uniform float size;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Dp=`#include <common>
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
}`,Lp=`uniform vec3 color;
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
}`,Ip=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Up=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:ef,alphahash_pars_fragment:nf,alphamap_fragment:sf,alphamap_pars_fragment:of,alphatest_fragment:rf,alphatest_pars_fragment:af,aomap_fragment:cf,aomap_pars_fragment:lf,batching_pars_vertex:hf,batching_vertex:uf,begin_vertex:ff,beginnormal_vertex:df,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:_f,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:vf,clipping_planes_vertex:Mf,color_fragment:wf,color_pars_fragment:yf,color_pars_vertex:Sf,color_vertex:Ef,common:Tf,cube_uv_reflection_fragment:bf,defaultnormal_vertex:Af,displacementmap_pars_vertex:Rf,displacementmap_vertex:Cf,emissivemap_fragment:Pf,emissivemap_pars_fragment:Df,colorspace_fragment:Lf,colorspace_pars_fragment:If,envmap_fragment:Uf,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Ff,envmap_pars_vertex:Of,envmap_physical_pars_fragment:Zf,envmap_vertex:zf,fog_vertex:Bf,fog_pars_vertex:Gf,fog_fragment:Hf,fog_pars_fragment:kf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Wf,lights_lambert_fragment:Xf,lights_lambert_pars_fragment:Yf,lights_pars_begin:qf,lights_toon_fragment:jf,lights_toon_pars_fragment:Kf,lights_phong_fragment:$f,lights_phong_pars_fragment:Jf,lights_physical_fragment:Qf,lights_physical_pars_fragment:td,lights_fragment_begin:ed,lights_fragment_maps:nd,lights_fragment_end:id,logdepthbuf_fragment:sd,logdepthbuf_pars_fragment:od,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:ad,map_fragment:cd,map_pars_fragment:ld,map_particle_fragment:hd,map_particle_pars_fragment:ud,metalnessmap_fragment:fd,metalnessmap_pars_fragment:dd,morphinstance_vertex:pd,morphcolor_vertex:md,morphnormal_vertex:gd,morphtarget_pars_vertex:_d,morphtarget_vertex:xd,normal_fragment_begin:vd,normal_fragment_maps:Md,normal_pars_fragment:wd,normal_pars_vertex:yd,normal_vertex:Sd,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:bd,clearcoat_pars_fragment:Ad,iridescence_pars_fragment:Rd,opaque_fragment:Cd,packing:Pd,premultiplied_alpha_fragment:Dd,project_vertex:Ld,dithering_fragment:Id,dithering_pars_fragment:Ud,roughnessmap_fragment:Nd,roughnessmap_pars_fragment:Fd,shadowmap_pars_fragment:Od,shadowmap_pars_vertex:zd,shadowmap_vertex:Bd,shadowmask_pars_fragment:Gd,skinbase_vertex:Hd,skinning_pars_vertex:kd,skinning_vertex:Vd,skinnormal_vertex:Wd,specularmap_fragment:Xd,specularmap_pars_fragment:Yd,tonemapping_fragment:qd,tonemapping_pars_fragment:Zd,transmission_fragment:jd,transmission_pars_fragment:Kd,uv_pars_fragment:$d,uv_pars_vertex:Jd,uv_vertex:Qd,worldpos_vertex:tp,background_vert:ep,background_frag:np,backgroundCube_vert:ip,backgroundCube_frag:sp,cube_vert:op,cube_frag:rp,depth_vert:ap,depth_frag:cp,distanceRGBA_vert:lp,distanceRGBA_frag:hp,equirect_vert:up,equirect_frag:fp,linedashed_vert:dp,linedashed_frag:pp,meshbasic_vert:mp,meshbasic_frag:gp,meshlambert_vert:_p,meshlambert_frag:xp,meshmatcap_vert:vp,meshmatcap_frag:Mp,meshnormal_vert:wp,meshnormal_frag:yp,meshphong_vert:Sp,meshphong_frag:Ep,meshphysical_vert:Tp,meshphysical_frag:bp,meshtoon_vert:Ap,meshtoon_frag:Rp,points_vert:Cp,points_frag:Pp,shadow_vert:Dp,shadow_frag:Lp,sprite_vert:Ip,sprite_frag:Up},Dt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},bn={basic:{uniforms:Je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ne(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Je([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Je([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ne(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Je([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Je([Dt.points,Dt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Je([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Je([Dt.common,Dt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Je([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Je([Dt.sprite,Dt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Je([Dt.common,Dt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Je([Dt.lights,Dt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};bn.physical={uniforms:Je([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const co={r:0,b:0,g:0},fi=new Cn,Np=new be;function Fp(s,t,e,n,i,o,r){const a=new ne(0);let c=o===!0?0:1,l,h,u=null,d=0,m=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function w(v){let M=!1;const P=g(v);P===null?f(a,c):P&&P.isColor&&(f(P,1),M=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(v,M){const P=g(M);P&&(P.isCubeTexture||P.mapping===Ro)?(h===void 0&&(h=new Q(new Kt(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Ji(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),fi.copy(M.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(fi)),h.material.toneMapped=ge.getTransfer(P.colorSpace)!==ye,(u!==P||d!==P.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=P,d=P.version,m=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new Q(new Si(2,2),new sn({name:"BackgroundMaterial",uniforms:Ji(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ge.getTransfer(P.colorSpace)!==ye,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||d!==P.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,u=P,d=P.version,m=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function f(v,M){v.getRGB(co,gl(s)),n.buffers.color.setClear(co.r,co.g,co.b,M,r)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,f(a,c)},render:w,addToRenderList:p,dispose:x}}function Op(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let o=i,r=!1;function a(S,L,N,X,K){let q=!1;const B=u(X,N,L);o!==B&&(o=B,l(o.object)),q=m(S,X,N,K),q&&g(S,X,N,K),K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,M(S,L,N,X),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,L,N){const X=N.wireframe===!0;let K=n[S.id];K===void 0&&(K={},n[S.id]=K);let q=K[L.id];q===void 0&&(q={},K[L.id]=q);let B=q[X];return B===void 0&&(B=d(c()),q[X]=B),B}function d(S){const L=[],N=[],X=[];for(let K=0;K<e;K++)L[K]=0,N[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:X,object:S,attributes:{},index:null}}function m(S,L,N,X){const K=o.attributes,q=L.attributes;let B=0;const W=N.getAttributes();for(const Y in W)if(W[Y].location>=0){const ct=K[Y];let Et=q[Y];if(Et===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),ct===void 0||ct.attribute!==Et||Et&&ct.data!==Et.data)return!0;B++}return o.attributesNum!==B||o.index!==X}function g(S,L,N,X){const K={},q=L.attributes;let B=0;const W=N.getAttributes();for(const Y in W)if(W[Y].location>=0){let ct=q[Y];ct===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor));const Et={};Et.attribute=ct,ct&&ct.data&&(Et.data=ct.data),K[Y]=Et,B++}o.attributes=K,o.attributesNum=B,o.index=X}function w(){const S=o.newAttributes;for(let L=0,N=S.length;L<N;L++)S[L]=0}function p(S){f(S,0)}function f(S,L){const N=o.newAttributes,X=o.enabledAttributes,K=o.attributeDivisors;N[S]=1,X[S]===0&&(s.enableVertexAttribArray(S),X[S]=1),K[S]!==L&&(s.vertexAttribDivisor(S,L),K[S]=L)}function x(){const S=o.newAttributes,L=o.enabledAttributes;for(let N=0,X=L.length;N<X;N++)L[N]!==S[N]&&(s.disableVertexAttribArray(N),L[N]=0)}function v(S,L,N,X,K,q,B){B===!0?s.vertexAttribIPointer(S,L,N,K,q):s.vertexAttribPointer(S,L,N,X,K,q)}function M(S,L,N,X){w();const K=X.attributes,q=N.getAttributes(),B=L.defaultAttributeValues;for(const W in q){const Y=q[W];if(Y.location>=0){let pt=K[W];if(pt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor)),pt!==void 0){const ct=pt.normalized,Et=pt.itemSize,Pt=t.get(pt);if(Pt===void 0)continue;const ut=Pt.buffer,G=Pt.type,at=Pt.bytesPerElement,mt=G===s.INT||G===s.UNSIGNED_INT||pt.gpuType===pa;if(pt.isInterleavedBufferAttribute){const dt=pt.data,bt=dt.stride,Rt=pt.offset;if(dt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<Y.locationSize;Tt++)f(Y.location+Tt,dt.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Tt=0;Tt<Y.locationSize;Tt++)p(Y.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,ut);for(let Tt=0;Tt<Y.locationSize;Tt++)v(Y.location+Tt,Et/Y.locationSize,G,ct,bt*at,(Rt+Et/Y.locationSize*Tt)*at,mt)}else{if(pt.isInstancedBufferAttribute){for(let dt=0;dt<Y.locationSize;dt++)f(Y.location+dt,pt.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let dt=0;dt<Y.locationSize;dt++)p(Y.location+dt);s.bindBuffer(s.ARRAY_BUFFER,ut);for(let dt=0;dt<Y.locationSize;dt++)v(Y.location+dt,Et/Y.locationSize,G,ct,Et*at,Et/Y.locationSize*dt*at,mt)}}else if(B!==void 0){const ct=B[W];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(Y.location,ct);break;case 3:s.vertexAttrib3fv(Y.location,ct);break;case 4:s.vertexAttrib4fv(Y.location,ct);break;default:s.vertexAttrib1fv(Y.location,ct)}}}}x()}function P(){D();for(const S in n){const L=n[S];for(const N in L){const X=L[N];for(const K in X)h(X[K].object),delete X[K];delete L[N]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const N in L){const X=L[N];for(const K in X)h(X[K].object),delete X[K];delete L[N]}delete n[S.id]}function R(S){for(const L in n){const N=n[L];if(N[S.id]===void 0)continue;const X=N[S.id];for(const K in X)h(X[K].object),delete X[K];delete N[S.id]}}function D(){y(),r=!0,o!==i&&(o=i,l(o.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:w,enableAttribute:p,disableUnusedAttributes:x}}function zp(s,t,e){let n;function i(l){n=l}function o(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)r(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let w=0;w<u;w++)g+=h[w]*d[w];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Bp(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){return!(R!==vn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Rn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Gn&&!D)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:w,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:P,maxSamples:b}}function Gp(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Qn,a=new se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,w=u.clipIntersection,p=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||o&&!p)o?h(null):l();else{const x=o?0:n,v=x*4;let M=f.clippingState||null;c.value=M,M=h(g,d,v,m);for(let P=0;P!==v;++P)M[P]=e[P];f.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const w=u!==null?u.length:0;let p=null;if(w!==0){if(p=c.value,g!==!0||p===null){const f=m+w*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,M=m;v!==w;++v,M+=4)r.copy(u[v]).applyMatrix4(x,a),r.normal.toArray(p,M),p[M+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,p}}function Hp(s){let t=new WeakMap;function e(r,a){return a===Pr?r.mapping=ji:a===Dr&&(r.mapping=Ki),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Pr||a===Dr)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new su(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Vi=4,Ec=[.125,.215,.35,.446,.526,.582],gi=20,ur=new Pa,Tc=new ne;let fr=null,dr=0,pr=0,mr=!1;const pi=(1+Math.sqrt(5))/2,Gi=1/pi,bc=[new A(-pi,Gi,0),new A(pi,Gi,0),new A(-Gi,0,pi),new A(Gi,0,pi),new A(0,pi,-Gi),new A(0,pi,Gi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],kp=new A;class Ac{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,o={}){const{size:r=256,position:a=kp}=o;fr=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fr,dr,pr),this._renderer.xr.enabled=mr,t.scissorTest=!1,lo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fr=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Vn,format:vn,colorSpace:$i,depthBuffer:!1},i=Rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vp(o)),this._blurMaterial=Wp(o,t,e)}return i}_compileMaterial(t){const e=new Q(this._lodPlanes[0],t);this._renderer.compile(e,ur)}_sceneToCubeUV(t,e,n,i,o){const c=new nn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(Tc),u.toneMapping=ni,u.autoClear=!1;const g=new Ht({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),w=new Q(new Kt,g);let p=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,p=!0):(g.color.copy(Tc),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(c.up.set(0,l[x],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+h[x],o.y,o.z)):v===1?(c.up.set(0,0,l[x]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+h[x],o.z)):(c.up.set(0,l[x],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+h[x]));const M=this._cubeSize;lo(i,v*M,x>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(w,c),u.render(t,c)}w.geometry.dispose(),w.material.dispose(),u.toneMapping=m,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ji||t.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new Q(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;lo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,ur)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=bc[(i-o-1)%bc.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Q(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*gi-1),w=o/g,p=isFinite(o)?1+Math.floor(h*w):gi;p>gi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);const f=[];let x=0;for(let R=0;R<gi;++R){const D=R/w,y=Math.exp(-D*D/2);f.push(y),R===0?x+=y:R<p&&(x+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/x;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const M=this._sizeLods[i],P=3*M*(i>v-Vi?i-v+Vi:0),b=4*(this._cubeSize-M);lo(e,P,b,3*M,2*M),c.setRenderTarget(e),c.render(u,ur)}}function Vp(s){const t=[],e=[],n=[];let i=s;const o=s-Vi+1+Ec.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-Vi?c=Ec[r-s+Vi-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,w=3,p=2,f=1,x=new Float32Array(w*g*m),v=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let b=0;b<m;b++){const R=b%3*2/3-1,D=b>2?0:-1,y=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];x.set(y,w*g*b),v.set(d,p*g*b);const S=[b,b,b,b,b,b];M.set(S,f*g*b)}const P=new Yt;P.setAttribute("position",new An(x,w)),P.setAttribute("uv",new An(v,p)),P.setAttribute("faceIndex",new An(M,f)),t.push(P),i>Vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rc(s,t,e){const n=new wn(s,t,e);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Wp(s,t,e){const n=new Float32Array(gi),i=new A(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:La(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Cc(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Pc(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function La(){return`

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
	`}function Xp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pr||c===Dr,h=c===ji||c===Ki;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ac(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return l&&m&&m.height>0||h&&m&&i(m)?(e===null&&(e=new Ac(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Yp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Yi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qp(s,t,e,n){const i={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const m=o.get(d);m&&(t.remove(m),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],s.ARRAY_BUFFER)}function l(u){const d=[],m=u.index,g=u.attributes.position;let w=0;if(m!==null){const x=m.array;w=m.version;for(let v=0,M=x.length;v<M;v+=3){const P=x[v+0],b=x[v+1],R=x[v+2];d.push(P,b,b,R,R,P)}}else if(g!==void 0){const x=g.array;w=g.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const P=v+0,b=v+1,R=v+2;d.push(P,b,b,R,R,P)}}else return;const p=new(ul(d)?ml:pl)(d,1);p.version=w;const f=o.get(u);f&&t.remove(f),o.set(u,p)}function h(u){const d=o.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Zp(s,t,e){let n;function i(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,m){s.drawElements(n,m,o,d*r),e.update(m,n,1)}function l(d,m,g){g!==0&&(s.drawElementsInstanced(n,m,o,d*r,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,n,1)}function u(d,m,g,w){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/r,m[f],w[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,o,d,0,w,0,g);let f=0;for(let x=0;x<g;x++)f+=m[x]*w[x];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function jp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Kp(s,t,e){const n=new WeakMap,i=new Ee;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),w===!0&&(M=2),p===!0&&(M=3);let P=a.attributes.position.count*M,b=1;P>t.maxTextureSize&&(b=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const R=new Float32Array(P*b*4*u),D=new fl(R,P,b,u);D.type=Gn,D.needsUpdate=!0;const y=M*4;for(let L=0;L<u;L++){const N=f[L],X=x[L],K=v[L],q=P*b*4*L;for(let B=0;B<N.count;B++){const W=B*y;g===!0&&(i.fromBufferAttribute(N,B),R[q+W+0]=i.x,R[q+W+1]=i.y,R[q+W+2]=i.z,R[q+W+3]=0),w===!0&&(i.fromBufferAttribute(X,B),R[q+W+4]=i.x,R[q+W+5]=i.y,R[q+W+6]=i.z,R[q+W+7]=0),p===!0&&(i.fromBufferAttribute(K,B),R[q+W+8]=i.x,R[q+W+9]=i.y,R[q+W+10]=i.z,R[q+W+11]=K.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new Mt(P,b)},n.set(a,d),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const w=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",w),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:o}}function $p(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const Nl=new Ke,Dc=new yl(1,1),Fl=new fl,Ol=new kh,zl=new xl,Lc=[],Ic=[],Uc=new Float32Array(16),Nc=new Float32Array(9),Fc=new Float32Array(4);function is(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=Lc[i];if(o===void 0&&(o=new Float32Array(i),Lc[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Do(s,t){let e=Ic[t];e===void 0&&(e=new Int32Array(t),Ic[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Jp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Qp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2fv(this.addr,t),Ge(e,t)}}function tm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;s.uniform3fv(this.addr,t),Ge(e,t)}}function em(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4fv(this.addr,t),Ge(e,t)}}function nm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;Fc.set(n),s.uniformMatrix2fv(this.addr,!1,Fc),Ge(e,n)}}function im(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;Nc.set(n),s.uniformMatrix3fv(this.addr,!1,Nc),Ge(e,n)}}function sm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;Uc.set(n),s.uniformMatrix4fv(this.addr,!1,Uc),Ge(e,n)}}function om(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2iv(this.addr,t),Ge(e,t)}}function am(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3iv(this.addr,t),Ge(e,t)}}function cm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4iv(this.addr,t),Ge(e,t)}}function lm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function hm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2uiv(this.addr,t),Ge(e,t)}}function um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3uiv(this.addr,t),Ge(e,t)}}function fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4uiv(this.addr,t),Ge(e,t)}}function dm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(Dc.compareFunction=hl,o=Dc):o=Nl,e.setTexture2D(t||o,i)}function pm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ol,i)}function mm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||zl,i)}function gm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Fl,i)}function _m(s){switch(s){case 5126:return Jp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return om;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return cm;case 5125:return lm;case 36294:return hm;case 36295:return um;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function xm(s,t){s.uniform1fv(this.addr,t)}function vm(s,t){const e=is(t,this.size,2);s.uniform2fv(this.addr,e)}function Mm(s,t){const e=is(t,this.size,3);s.uniform3fv(this.addr,e)}function wm(s,t){const e=is(t,this.size,4);s.uniform4fv(this.addr,e)}function ym(s,t){const e=is(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Sm(s,t){const e=is(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Em(s,t){const e=is(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Tm(s,t){s.uniform1iv(this.addr,t)}function bm(s,t){s.uniform2iv(this.addr,t)}function Am(s,t){s.uniform3iv(this.addr,t)}function Rm(s,t){s.uniform4iv(this.addr,t)}function Cm(s,t){s.uniform1uiv(this.addr,t)}function Pm(s,t){s.uniform2uiv(this.addr,t)}function Dm(s,t){s.uniform3uiv(this.addr,t)}function Lm(s,t){s.uniform4uiv(this.addr,t)}function Im(s,t,e){const n=this.cache,i=t.length,o=Do(e,i);Be(n,o)||(s.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Nl,o[r])}function Um(s,t,e){const n=this.cache,i=t.length,o=Do(e,i);Be(n,o)||(s.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Ol,o[r])}function Nm(s,t,e){const n=this.cache,i=t.length,o=Do(e,i);Be(n,o)||(s.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||zl,o[r])}function Fm(s,t,e){const n=this.cache,i=t.length,o=Do(e,i);Be(n,o)||(s.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Fl,o[r])}function Om(s){switch(s){case 5126:return xm;case 35664:return vm;case 35665:return Mm;case 35666:return wm;case 35674:return ym;case 35675:return Sm;case 35676:return Em;case 5124:case 35670:return Tm;case 35667:case 35671:return bm;case 35668:case 35672:return Am;case 35669:case 35673:return Rm;case 5125:return Cm;case 36294:return Pm;case 36295:return Dm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Fm}}class zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_m(e.type)}}class Bm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Om(e.type)}}class Gm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const gr=/(\w+)(\])?(\[|\.)?/g;function Oc(s,t){s.seq.push(t),s.map[t.id]=t}function Hm(s,t,e){const n=s.name,i=n.length;for(gr.lastIndex=0;;){const o=gr.exec(n),r=gr.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){Oc(e,l===void 0?new zm(a,s,t):new Bm(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Gm(a),Oc(e,u)),e=u}}}class vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);Hm(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function zc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const km=37297;let Vm=0;function Wm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Bc=new se;function Xm(s){ge._getMatrix(Bc,ge.workingColorSpace,s);const t=`mat3( ${Bc.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(s)){case yo:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Gc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+Wm(s.getShaderSource(t),r)}else return i}function Ym(s,t){const e=Xm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qm(s,t){let e;switch(t){case dh:e="Linear";break;case ph:e="Reinhard";break;case mh:e="Cineon";break;case gh:e="ACESFilmic";break;case xh:e="AgX";break;case vh:e="Neutral";break;case _h:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ho=new A;function Zm(){ge.getLuminanceCoefficients(ho);const s=ho.x.toFixed(4),t=ho.y.toFixed(4),e=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function Km(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $m(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function ds(s){return s!==""}function Hc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ua(s){return s.replace(Jm,t0)}const Qm=new Map;function t0(s,t){let e=oe[t];if(e===void 0){const n=Qm.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ua(e)}const e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(s){return s.replace(e0,n0)}function n0(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Wc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function i0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function s0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ji:case Ki:t="ENVMAP_TYPE_CUBE";break;case Ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function o0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function r0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qc:t="ENVMAP_BLENDING_MULTIPLY";break;case uh:t="ENVMAP_BLENDING_MIX";break;case fh:t="ENVMAP_BLENDING_ADD";break}return t}function a0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function c0(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=i0(e),l=s0(e),h=o0(e),u=r0(e),d=a0(e),m=jm(e),g=Km(o),w=i.createProgram();let p,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),f.length>0&&(f+=`
`)):(p=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),f=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?oe.tonemapping_pars_fragment:"",e.toneMapping!==ni?qm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Ym("linearToOutputTexel",e.outputColorSpace),Zm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),r=ua(r),r=Hc(r,e),r=kc(r,e),a=ua(a),a=Hc(a,e),a=kc(a,e),r=Vc(r),a=Vc(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Ba?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+p+r,M=x+f+a,P=zc(i,i.VERTEX_SHADER,v),b=zc(i,i.FRAGMENT_SHADER,M);i.attachShader(w,P),i.attachShader(w,b),e.index0AttributeName!==void 0?i.bindAttribLocation(w,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(w,0,"position"),i.linkProgram(w);function R(L){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(w).trim(),X=i.getShaderInfoLog(P).trim(),K=i.getShaderInfoLog(b).trim();let q=!0,B=!0;if(i.getProgramParameter(w,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,w,P,b);else{const W=Gc(i,P,"vertex"),Y=Gc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(w,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+W+`
`+Y)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(X===""||K==="")&&(B=!1);B&&(L.diagnostics={runnable:q,programLog:N,vertexShader:{log:X,prefix:p},fragmentShader:{log:K,prefix:f}})}i.deleteShader(P),i.deleteShader(b),D=new vo(i,w),y=$m(i,w)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(w,km)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vm++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=b,this}let l0=0;class h0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new u0(t),e.set(t,n)),n}}class u0{constructor(t){this.id=l0++,this.code=t,this.usedTimes=0}}function f0(s,t,e,n,i,o,r){const a=new wa,c=new h0,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,S,L,N,X){const K=N.fog,q=X.geometry,B=y.isMeshStandardMaterial?N.environment:null,W=(y.isMeshStandardMaterial?e:t).get(y.envMap||B),Y=W&&W.mapping===Ro?W.image.height:null,pt=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Et=ct!==void 0?ct.length:0;let Pt=0;q.morphAttributes.position!==void 0&&(Pt=1),q.morphAttributes.normal!==void 0&&(Pt=2),q.morphAttributes.color!==void 0&&(Pt=3);let ut,G,at,mt;if(pt){const Qt=bn[pt];ut=Qt.vertexShader,G=Qt.fragmentShader}else ut=y.vertexShader,G=y.fragmentShader,c.update(y),at=c.getVertexShaderID(y),mt=c.getFragmentShaderID(y);const dt=s.getRenderTarget(),bt=s.state.buffers.depth.getReversed(),Rt=X.isInstancedMesh===!0,Tt=X.isBatchedMesh===!0,Vt=!!y.map,Bt=!!y.matcap,gt=!!W,E=!!y.aoMap,st=!!y.lightMap,$=!!y.bumpMap,rt=!!y.normalMap,Z=!!y.displacementMap,xt=!!y.emissiveMap,et=!!y.metalnessMap,Nt=!!y.roughnessMap,Zt=y.anisotropy>0,C=y.clearcoat>0,_=y.dispersion>0,I=y.iridescence>0,O=y.sheen>0,H=y.transmission>0,F=Zt&&!!y.anisotropyMap,ft=C&&!!y.clearcoatMap,tt=C&&!!y.clearcoatNormalMap,lt=C&&!!y.clearcoatRoughnessMap,_t=I&&!!y.iridescenceMap,nt=I&&!!y.iridescenceThicknessMap,vt=O&&!!y.sheenColorMap,Ct=O&&!!y.sheenRoughnessMap,Ft=!!y.specularMap,wt=!!y.specularColorMap,kt=!!y.specularIntensityMap,U=H&&!!y.transmissionMap,St=H&&!!y.thicknessMap,ht=!!y.gradientMap,Lt=!!y.alphaMap,ot=y.alphaTest>0,it=!!y.alphaHash,At=!!y.extensions;let Wt=ni;y.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Wt=s.toneMapping);const he={shaderID:pt,shaderType:y.type,shaderName:y.name,vertexShader:ut,fragmentShader:G,defines:y.defines,customVertexShaderID:at,customFragmentShaderID:mt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Tt,batchingColor:Tt&&X._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&X.instanceColor!==null,instancingMorph:Rt&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:$i,alphaToCoverage:!!y.alphaToCoverage,map:Vt,matcap:Bt,envMap:gt,envMapMode:gt&&W.mapping,envMapCubeUVHeight:Y,aoMap:E,lightMap:st,bumpMap:$,normalMap:rt,displacementMap:d&&Z,emissiveMap:xt,normalMapObjectSpace:rt&&y.normalMapType===Sh,normalMapTangentSpace:rt&&y.normalMapType===ll,metalnessMap:et,roughnessMap:Nt,anisotropy:Zt,anisotropyMap:F,clearcoat:C,clearcoatMap:ft,clearcoatNormalMap:tt,clearcoatRoughnessMap:lt,dispersion:_,iridescence:I,iridescenceMap:_t,iridescenceThicknessMap:nt,sheen:O,sheenColorMap:vt,sheenRoughnessMap:Ct,specularMap:Ft,specularColorMap:wt,specularIntensityMap:kt,transmission:H,transmissionMap:U,thicknessMap:St,gradientMap:ht,opaque:y.transparent===!1&&y.blending===Xi&&y.alphaToCoverage===!1,alphaMap:Lt,alphaTest:ot,alphaHash:it,combine:y.combine,mapUv:Vt&&w(y.map.channel),aoMapUv:E&&w(y.aoMap.channel),lightMapUv:st&&w(y.lightMap.channel),bumpMapUv:$&&w(y.bumpMap.channel),normalMapUv:rt&&w(y.normalMap.channel),displacementMapUv:Z&&w(y.displacementMap.channel),emissiveMapUv:xt&&w(y.emissiveMap.channel),metalnessMapUv:et&&w(y.metalnessMap.channel),roughnessMapUv:Nt&&w(y.roughnessMap.channel),anisotropyMapUv:F&&w(y.anisotropyMap.channel),clearcoatMapUv:ft&&w(y.clearcoatMap.channel),clearcoatNormalMapUv:tt&&w(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&w(y.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&w(y.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&w(y.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&w(y.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&w(y.sheenRoughnessMap.channel),specularMapUv:Ft&&w(y.specularMap.channel),specularColorMapUv:wt&&w(y.specularColorMap.channel),specularIntensityMapUv:kt&&w(y.specularIntensityMap.channel),transmissionMapUv:U&&w(y.transmissionMap.channel),thicknessMapUv:St&&w(y.thicknessMap.channel),alphaMapUv:Lt&&w(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(rt||Zt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!q.attributes.uv&&(Vt||Lt),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:X.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Pt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Vt&&y.map.isVideoTexture===!0&&ge.getTransfer(y.map.colorSpace)===ye,decodeVideoTextureEmissive:xt&&y.emissiveMap.isVideoTexture===!0&&ge.getTransfer(y.emissiveMap.colorSpace)===ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zn,flipSided:y.side===Ve,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:At&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&y.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return he.vertexUv1s=l.has(1),he.vertexUv2s=l.has(2),he.vertexUv3s=l.has(3),l.clear(),he}function f(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)S.push(L),S.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(x(S,y),v(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function x(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function v(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const S=g[y.type];let L;if(S){const N=bn[S];L=Eo.clone(N.uniforms)}else L=y.uniforms;return L}function P(y,S){let L;for(let N=0,X=h.length;N<X;N++){const K=h[N];if(K.cacheKey===S){L=K,++L.usedTimes;break}}return L===void 0&&(L=new c0(s,S,y,o),h.push(L)),L}function b(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function R(y){c.remove(y)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:P,releaseProgram:b,releaseShaderCache:R,programs:h,dispose:D}}function d0(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function p0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Xc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Yc(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(u,d,m,g,w,p){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:w,group:p},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=w,f.group=p),t++,f}function a(u,d,m,g,w,p){const f=r(u,d,m,g,w,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function c(u,d,m,g,w,p){const f=r(u,d,m,g,w,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||p0),n.length>1&&n.sort(d||Xc),i.length>1&&i.sort(d||Xc)}function h(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:h,sort:l}}function m0(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Yc,s.set(n,[r])):i>=o.length?(r=new Yc,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function g0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new ne};break;case"SpotLight":e={position:new A,direction:new A,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function _0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let x0=0;function v0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function M0(s){const t=new g0,e=_0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const i=new A,o=new be,r=new be;function a(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,g=0,w=0,p=0,f=0,x=0,v=0,M=0,P=0,b=0,R=0;l.sort(v0);for(let y=0,S=l.length;y<S;y++){const L=l[y],N=L.color,X=L.intensity,K=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*X,u+=N.g*X,d+=N.b*X;else if(L.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(L.sh.coefficients[B],X);R++}else if(L.isDirectionalLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const W=L.shadow,Y=e.get(L);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=L.shadow.matrix,x++}n.directional[m]=B,m++}else if(L.isSpotLight){const B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(N).multiplyScalar(X),B.distance=K,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,n.spot[w]=B;const W=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,W.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[w]=W.matrix,L.castShadow){const Y=e.get(L);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,n.spotShadow[w]=Y,n.spotShadowMap[w]=q,M++}w++}else if(L.isRectAreaLight){const B=t.get(L);B.color.copy(N).multiplyScalar(X),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=B,p++}else if(L.isPointLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const W=L.shadow,Y=e.get(L);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,v++}n.point[g]=B,g++}else if(L.isHemisphereLight){const B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(X),B.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[f]=B,f++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==w||D.rectAreaLength!==p||D.hemiLength!==f||D.numDirectionalShadows!==x||D.numPointShadows!==v||D.numSpotShadows!==M||D.numSpotMaps!==P||D.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=w,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,D.directionalLength=m,D.pointLength=g,D.spotLength=w,D.rectAreaLength=p,D.hemiLength=f,D.numDirectionalShadows=x,D.numPointShadows=v,D.numSpotShadows=M,D.numSpotMaps=P,D.numLightProbes=R,n.version=x0++)}function c(l,h){let u=0,d=0,m=0,g=0,w=0;const p=h.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){const v=l[f];if(v.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(v.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),r.identity(),o.copy(v.matrixWorld),o.premultiply(p),r.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const M=n.hemi[w];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),w++}}}return{setup:a,setupView:c,state:n}}function qc(s){const t=new M0(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function w0(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new qc(s),t.set(i,[a])):o>=r.length?(a=new qc(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S0=`uniform sampler2D shadow_pass;
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
}`;function E0(s,t,e){let n=new ya;const i=new Mt,o=new Mt,r=new Ee,a=new Hu({depthPacking:yh}),c=new ku,l={},h=e.maxTextureSize,u={[ii]:Ve,[Ve]:ii,[zn]:zn},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:y0,fragmentShader:S0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Q(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let f=this.type;this.render=function(b,R,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const y=s.getRenderTarget(),S=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(kn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const X=f!==On&&this.type===On,K=f===On&&this.type!==On;for(let q=0,B=b.length;q<B;q++){const W=b[q],Y=W.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const pt=Y.getFrameExtents();if(i.multiply(pt),o.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/pt.x),i.x=o.x*pt.x,Y.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/pt.y),i.y=o.y*pt.y,Y.mapSize.y=o.y)),Y.map===null||X===!0||K===!0){const Et=this.type!==On?{minFilter:Mn,magFilter:Mn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new wn(i.x,i.y,Et),Y.map.texture.name=W.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const ct=Y.getViewportCount();for(let Et=0;Et<ct;Et++){const Pt=Y.getViewport(Et);r.set(o.x*Pt.x,o.y*Pt.y,o.x*Pt.z,o.y*Pt.w),N.viewport(r),Y.updateMatrices(W,Et),n=Y.getFrustum(),M(R,D,Y.camera,W,this.type)}Y.isPointLightShadow!==!0&&this.type===On&&x(Y,D),Y.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(y,S,L)};function x(b,R){const D=t.update(w);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new wn(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(R,null,D,d,w,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(R,null,D,m,w,null)}function v(b,R,D,y){let S=null;const L=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)S=L;else if(S=D.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=S.uuid,X=R.uuid;let K=l[N];K===void 0&&(K={},l[N]=K);let q=K[X];q===void 0&&(q=S.clone(),K[X]=q,R.addEventListener("dispose",P)),S=q}if(S.visible=R.visible,S.wireframe=R.wireframe,y===On?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=s.properties.get(S);N.light=D}return S}function M(b,R,D,y,S){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===On)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const X=t.update(b),K=b.material;if(Array.isArray(K)){const q=X.groups;for(let B=0,W=q.length;B<W;B++){const Y=q[B],pt=K[Y.materialIndex];if(pt&&pt.visible){const ct=v(b,pt,y,S);b.onBeforeShadow(s,b,R,D,X,ct,Y),s.renderBufferDirect(D,null,X,ct,b,Y),b.onAfterShadow(s,b,R,D,X,ct,Y)}}}else if(K.visible){const q=v(b,K,y,S);b.onBeforeShadow(s,b,R,D,X,q,null),s.renderBufferDirect(D,null,X,q,b,null),b.onAfterShadow(s,b,R,D,X,q,null)}}const N=b.children;for(let X=0,K=N.length;X<K;X++)M(N[X],R,D,y,S)}function P(b){b.target.removeEventListener("dispose",P);for(const D in l){const y=l[D],S=b.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const T0={[Sr]:Er,[Tr]:Rr,[br]:Cr,[Zi]:Ar,[Er]:Sr,[Rr]:Tr,[Cr]:br,[Ar]:Zi};function b0(s,t){function e(){let U=!1;const St=new Ee;let ht=null;const Lt=new Ee(0,0,0,0);return{setMask:function(ot){ht!==ot&&!U&&(s.colorMask(ot,ot,ot,ot),ht=ot)},setLocked:function(ot){U=ot},setClear:function(ot,it,At,Wt,he){he===!0&&(ot*=Wt,it*=Wt,At*=Wt),St.set(ot,it,At,Wt),Lt.equals(St)===!1&&(s.clearColor(ot,it,At,Wt),Lt.copy(St))},reset:function(){U=!1,ht=null,Lt.set(-1,0,0,0)}}}function n(){let U=!1,St=!1,ht=null,Lt=null,ot=null;return{setReversed:function(it){if(St!==it){const At=t.get("EXT_clip_control");it?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),St=it;const Wt=ot;ot=null,this.setClear(Wt)}},getReversed:function(){return St},setTest:function(it){it?dt(s.DEPTH_TEST):bt(s.DEPTH_TEST)},setMask:function(it){ht!==it&&!U&&(s.depthMask(it),ht=it)},setFunc:function(it){if(St&&(it=T0[it]),Lt!==it){switch(it){case Sr:s.depthFunc(s.NEVER);break;case Er:s.depthFunc(s.ALWAYS);break;case Tr:s.depthFunc(s.LESS);break;case Zi:s.depthFunc(s.LEQUAL);break;case br:s.depthFunc(s.EQUAL);break;case Ar:s.depthFunc(s.GEQUAL);break;case Rr:s.depthFunc(s.GREATER);break;case Cr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Lt=it}},setLocked:function(it){U=it},setClear:function(it){ot!==it&&(St&&(it=1-it),s.clearDepth(it),ot=it)},reset:function(){U=!1,ht=null,Lt=null,ot=null,St=!1}}}function i(){let U=!1,St=null,ht=null,Lt=null,ot=null,it=null,At=null,Wt=null,he=null;return{setTest:function(Qt){U||(Qt?dt(s.STENCIL_TEST):bt(s.STENCIL_TEST))},setMask:function(Qt){St!==Qt&&!U&&(s.stencilMask(Qt),St=Qt)},setFunc:function(Qt,Me,He){(ht!==Qt||Lt!==Me||ot!==He)&&(s.stencilFunc(Qt,Me,He),ht=Qt,Lt=Me,ot=He)},setOp:function(Qt,Me,He){(it!==Qt||At!==Me||Wt!==He)&&(s.stencilOp(Qt,Me,He),it=Qt,At=Me,Wt=He)},setLocked:function(Qt){U=Qt},setClear:function(Qt){he!==Qt&&(s.clearStencil(Qt),he=Qt)},reset:function(){U=!1,St=null,ht=null,Lt=null,ot=null,it=null,At=null,Wt=null,he=null}}}const o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,m=[],g=null,w=!1,p=null,f=null,x=null,v=null,M=null,P=null,b=null,R=new ne(0,0,0),D=0,y=!1,S=null,L=null,N=null,X=null,K=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,W=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=W>=2);let pt=null,ct={};const Et=s.getParameter(s.SCISSOR_BOX),Pt=s.getParameter(s.VIEWPORT),ut=new Ee().fromArray(Et),G=new Ee().fromArray(Pt);function at(U,St,ht,Lt){const ot=new Uint8Array(4),it=s.createTexture();s.bindTexture(U,it),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<ht;At++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(St,0,s.RGBA,1,1,Lt,0,s.RGBA,s.UNSIGNED_BYTE,ot):s.texImage2D(St+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ot);return it}const mt={};mt[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),mt[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),mt[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(s.DEPTH_TEST),r.setFunc(Zi),$(!1),rt(Ua),dt(s.CULL_FACE),E(kn);function dt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function bt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Rt(U,St){return u[U]!==St?(s.bindFramebuffer(U,St),u[U]=St,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=St),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=St),!0):!1}function Tt(U,St){let ht=m,Lt=!1;if(U){ht=d.get(St),ht===void 0&&(ht=[],d.set(St,ht));const ot=U.textures;if(ht.length!==ot.length||ht[0]!==s.COLOR_ATTACHMENT0){for(let it=0,At=ot.length;it<At;it++)ht[it]=s.COLOR_ATTACHMENT0+it;ht.length=ot.length,Lt=!0}}else ht[0]!==s.BACK&&(ht[0]=s.BACK,Lt=!0);Lt&&s.drawBuffers(ht)}function Vt(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const Bt={[mi]:s.FUNC_ADD,[Zl]:s.FUNC_SUBTRACT,[jl]:s.FUNC_REVERSE_SUBTRACT};Bt[Kl]=s.MIN,Bt[$l]=s.MAX;const gt={[Jl]:s.ZERO,[Ql]:s.ONE,[th]:s.SRC_COLOR,[wr]:s.SRC_ALPHA,[rh]:s.SRC_ALPHA_SATURATE,[sh]:s.DST_COLOR,[nh]:s.DST_ALPHA,[eh]:s.ONE_MINUS_SRC_COLOR,[yr]:s.ONE_MINUS_SRC_ALPHA,[oh]:s.ONE_MINUS_DST_COLOR,[ih]:s.ONE_MINUS_DST_ALPHA,[ah]:s.CONSTANT_COLOR,[ch]:s.ONE_MINUS_CONSTANT_COLOR,[lh]:s.CONSTANT_ALPHA,[hh]:s.ONE_MINUS_CONSTANT_ALPHA};function E(U,St,ht,Lt,ot,it,At,Wt,he,Qt){if(U===kn){w===!0&&(bt(s.BLEND),w=!1);return}if(w===!1&&(dt(s.BLEND),w=!0),U!==ql){if(U!==p||Qt!==y){if((f!==mi||M!==mi)&&(s.blendEquation(s.FUNC_ADD),f=mi,M=mi),Qt)switch(U){case Xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mr:s.blendFunc(s.ONE,s.ONE);break;case Na:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fa:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Na:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,v=null,P=null,b=null,R.set(0,0,0),D=0,p=U,y=Qt}return}ot=ot||St,it=it||ht,At=At||Lt,(St!==f||ot!==M)&&(s.blendEquationSeparate(Bt[St],Bt[ot]),f=St,M=ot),(ht!==x||Lt!==v||it!==P||At!==b)&&(s.blendFuncSeparate(gt[ht],gt[Lt],gt[it],gt[At]),x=ht,v=Lt,P=it,b=At),(Wt.equals(R)===!1||he!==D)&&(s.blendColor(Wt.r,Wt.g,Wt.b,he),R.copy(Wt),D=he),p=U,y=!1}function st(U,St){U.side===zn?bt(s.CULL_FACE):dt(s.CULL_FACE);let ht=U.side===Ve;St&&(ht=!ht),$(ht),U.blending===Xi&&U.transparent===!1?E(kn):E(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),o.setMask(U.colorWrite);const Lt=U.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function $(U){S!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),S=U)}function rt(U){U!==Wl?(dt(s.CULL_FACE),U!==L&&(U===Ua?s.cullFace(s.BACK):U===Xl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):bt(s.CULL_FACE),L=U}function Z(U){U!==N&&(B&&s.lineWidth(U),N=U)}function xt(U,St,ht){U?(dt(s.POLYGON_OFFSET_FILL),(X!==St||K!==ht)&&(s.polygonOffset(St,ht),X=St,K=ht)):bt(s.POLYGON_OFFSET_FILL)}function et(U){U?dt(s.SCISSOR_TEST):bt(s.SCISSOR_TEST)}function Nt(U){U===void 0&&(U=s.TEXTURE0+q-1),pt!==U&&(s.activeTexture(U),pt=U)}function Zt(U,St,ht){ht===void 0&&(pt===null?ht=s.TEXTURE0+q-1:ht=pt);let Lt=ct[ht];Lt===void 0&&(Lt={type:void 0,texture:void 0},ct[ht]=Lt),(Lt.type!==U||Lt.texture!==St)&&(pt!==ht&&(s.activeTexture(ht),pt=ht),s.bindTexture(U,St||mt[U]),Lt.type=U,Lt.texture=St)}function C(){const U=ct[pt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{s.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{s.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function F(){try{s.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{s.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{s.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{s.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{s.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{s.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(U){ut.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ut.copy(U))}function Ct(U){G.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),G.copy(U))}function Ft(U,St){let ht=l.get(St);ht===void 0&&(ht=new WeakMap,l.set(St,ht));let Lt=ht.get(U);Lt===void 0&&(Lt=s.getUniformBlockIndex(St,U.name),ht.set(U,Lt))}function wt(U,St){const Lt=l.get(St).get(U);c.get(St)!==Lt&&(s.uniformBlockBinding(St,Lt,U.__bindingPointIndex),c.set(St,Lt))}function kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},pt=null,ct={},u={},d=new WeakMap,m=[],g=null,w=!1,p=null,f=null,x=null,v=null,M=null,P=null,b=null,R=new ne(0,0,0),D=0,y=!1,S=null,L=null,N=null,X=null,K=null,ut.set(0,0,s.canvas.width,s.canvas.height),G.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:dt,disable:bt,bindFramebuffer:Rt,drawBuffers:Tt,useProgram:Vt,setBlending:E,setMaterial:st,setFlipSided:$,setCullFace:rt,setLineWidth:Z,setPolygonOffset:xt,setScissorTest:et,activeTexture:Nt,bindTexture:Zt,unbindTexture:C,compressedTexImage2D:_,compressedTexImage3D:I,texImage2D:_t,texImage3D:nt,updateUBOMapping:Ft,uniformBlockBinding:wt,texStorage2D:tt,texStorage3D:lt,texSubImage2D:O,texSubImage3D:H,compressedTexSubImage2D:F,compressedTexSubImage3D:ft,scissor:vt,viewport:Ct,reset:kt}}function A0(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Mt,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,_){return m?new OffscreenCanvas(C,_):Ts("canvas")}function w(C,_,I){let O=1;const H=Zt(C);if((H.width>I||H.height>I)&&(O=I/Math.max(H.width,H.height)),O<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const F=Math.floor(O*H.width),ft=Math.floor(O*H.height);u===void 0&&(u=g(F,ft));const tt=_?g(F,ft):u;return tt.width=F,tt.height=ft,tt.getContext("2d").drawImage(C,0,0,F,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+F+"x"+ft+")."),tt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),C;return C}function p(C){return C.generateMipmaps}function f(C){s.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(C,_,I,O,H=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let F=_;if(_===s.RED&&(I===s.FLOAT&&(F=s.R32F),I===s.HALF_FLOAT&&(F=s.R16F),I===s.UNSIGNED_BYTE&&(F=s.R8)),_===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&(F=s.R8UI),I===s.UNSIGNED_SHORT&&(F=s.R16UI),I===s.UNSIGNED_INT&&(F=s.R32UI),I===s.BYTE&&(F=s.R8I),I===s.SHORT&&(F=s.R16I),I===s.INT&&(F=s.R32I)),_===s.RG&&(I===s.FLOAT&&(F=s.RG32F),I===s.HALF_FLOAT&&(F=s.RG16F),I===s.UNSIGNED_BYTE&&(F=s.RG8)),_===s.RG_INTEGER&&(I===s.UNSIGNED_BYTE&&(F=s.RG8UI),I===s.UNSIGNED_SHORT&&(F=s.RG16UI),I===s.UNSIGNED_INT&&(F=s.RG32UI),I===s.BYTE&&(F=s.RG8I),I===s.SHORT&&(F=s.RG16I),I===s.INT&&(F=s.RG32I)),_===s.RGB_INTEGER&&(I===s.UNSIGNED_BYTE&&(F=s.RGB8UI),I===s.UNSIGNED_SHORT&&(F=s.RGB16UI),I===s.UNSIGNED_INT&&(F=s.RGB32UI),I===s.BYTE&&(F=s.RGB8I),I===s.SHORT&&(F=s.RGB16I),I===s.INT&&(F=s.RGB32I)),_===s.RGBA_INTEGER&&(I===s.UNSIGNED_BYTE&&(F=s.RGBA8UI),I===s.UNSIGNED_SHORT&&(F=s.RGBA16UI),I===s.UNSIGNED_INT&&(F=s.RGBA32UI),I===s.BYTE&&(F=s.RGBA8I),I===s.SHORT&&(F=s.RGBA16I),I===s.INT&&(F=s.RGBA32I)),_===s.RGB&&I===s.UNSIGNED_INT_5_9_9_9_REV&&(F=s.RGB9_E5),_===s.RGBA){const ft=H?yo:ge.getTransfer(O);I===s.FLOAT&&(F=s.RGBA32F),I===s.HALF_FLOAT&&(F=s.RGBA16F),I===s.UNSIGNED_BYTE&&(F=ft===ye?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT_4_4_4_4&&(F=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&(F=s.RGB5_A1)}return(F===s.R16F||F===s.R32F||F===s.RG16F||F===s.RG32F||F===s.RGBA16F||F===s.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function M(C,_){let I;return C?_===null||_===xi||_===ys?I=s.DEPTH24_STENCIL8:_===Gn?I=s.DEPTH32F_STENCIL8:_===ws&&(I=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===xi||_===ys?I=s.DEPTH_COMPONENT24:_===Gn?I=s.DEPTH_COMPONENT32F:_===ws&&(I=s.DEPTH_COMPONENT16),I}function P(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Mn&&C.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function b(C){const _=C.target;_.removeEventListener("dispose",b),D(_),_.isVideoTexture&&h.delete(_)}function R(C){const _=C.target;_.removeEventListener("dispose",R),S(_)}function D(C){const _=n.get(C);if(_.__webglInit===void 0)return;const I=C.source,O=d.get(I);if(O){const H=O[_.__cacheKey];H.usedTimes--,H.usedTimes===0&&y(C),Object.keys(O).length===0&&d.delete(I)}n.remove(C)}function y(C){const _=n.get(C);s.deleteTexture(_.__webglTexture);const I=C.source,O=d.get(I);delete O[_.__cacheKey],r.memory.textures--}function S(C){const _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let H=0;H<_.__webglFramebuffer[O].length;H++)s.deleteFramebuffer(_.__webglFramebuffer[O][H]);else s.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)s.deleteFramebuffer(_.__webglFramebuffer[O]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const I=C.textures;for(let O=0,H=I.length;O<H;O++){const F=n.get(I[O]);F.__webglTexture&&(s.deleteTexture(F.__webglTexture),r.memory.textures--),n.remove(I[O])}n.remove(C)}let L=0;function N(){L=0}function X(){const C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function K(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function q(C,_){const I=n.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){const O=C.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(I,C,_);return}}e.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+_)}function B(C,_){const I=n.get(C);if(C.version>0&&I.__version!==C.version){mt(I,C,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+_)}function W(C,_){const I=n.get(C);if(C.version>0&&I.__version!==C.version){mt(I,C,_);return}e.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+_)}function Y(C,_){const I=n.get(C);if(C.version>0&&I.__version!==C.version){dt(I,C,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+_)}const pt={[Lr]:s.REPEAT,[Bn]:s.CLAMP_TO_EDGE,[Ir]:s.MIRRORED_REPEAT},ct={[Mn]:s.NEAREST,[Mh]:s.NEAREST_MIPMAP_NEAREST,[Us]:s.NEAREST_MIPMAP_LINEAR,[xn]:s.LINEAR,[Io]:s.LINEAR_MIPMAP_NEAREST,[_i]:s.LINEAR_MIPMAP_LINEAR},Et={[Eh]:s.NEVER,[Ph]:s.ALWAYS,[Th]:s.LESS,[hl]:s.LEQUAL,[bh]:s.EQUAL,[Ch]:s.GEQUAL,[Ah]:s.GREATER,[Rh]:s.NOTEQUAL};function Pt(C,_){if(_.type===Gn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===Io||_.magFilter===Us||_.magFilter===_i||_.minFilter===xn||_.minFilter===Io||_.minFilter===Us||_.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,pt[_.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,pt[_.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,pt[_.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ct[_.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ct[_.minFilter]),_.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Et[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Mn||_.minFilter!==Us&&_.minFilter!==_i||_.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ut(C,_){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",b));const O=_.source;let H=d.get(O);H===void 0&&(H={},d.set(O,H));const F=K(_);if(F!==C.__cacheKey){H[F]===void 0&&(H[F]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,I=!0),H[F].usedTimes++;const ft=H[C.__cacheKey];ft!==void 0&&(H[C.__cacheKey].usedTimes--,ft.usedTimes===0&&y(_)),C.__cacheKey=F,C.__webglTexture=H[F].texture}return I}function G(C,_,I){return Math.floor(Math.floor(C/I)/_)}function at(C,_,I,O){const F=C.updateRanges;if(F.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,I,O,_.data);else{F.sort((nt,vt)=>nt.start-vt.start);let ft=0;for(let nt=1;nt<F.length;nt++){const vt=F[ft],Ct=F[nt],Ft=vt.start+vt.count,wt=G(Ct.start,_.width,4),kt=G(vt.start,_.width,4);Ct.start<=Ft+1&&wt===kt&&G(Ct.start+Ct.count-1,_.width,4)===wt?vt.count=Math.max(vt.count,Ct.start+Ct.count-vt.start):(++ft,F[ft]=Ct)}F.length=ft+1;const tt=s.getParameter(s.UNPACK_ROW_LENGTH),lt=s.getParameter(s.UNPACK_SKIP_PIXELS),_t=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let nt=0,vt=F.length;nt<vt;nt++){const Ct=F[nt],Ft=Math.floor(Ct.start/4),wt=Math.ceil(Ct.count/4),kt=Ft%_.width,U=Math.floor(Ft/_.width),St=wt,ht=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),e.texSubImage2D(s.TEXTURE_2D,0,kt,U,St,ht,I,O,_.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,tt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,_t)}}function mt(C,_,I){let O=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=s.TEXTURE_3D);const H=ut(C,_),F=_.source;e.bindTexture(O,C.__webglTexture,s.TEXTURE0+I);const ft=n.get(F);if(F.version!==ft.__version||H===!0){e.activeTexture(s.TEXTURE0+I);const tt=ge.getPrimaries(ge.workingColorSpace),lt=_.colorSpace===ei?null:ge.getPrimaries(_.colorSpace),_t=_.colorSpace===ei||tt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let nt=w(_.image,!1,i.maxTextureSize);nt=Nt(_,nt);const vt=o.convert(_.format,_.colorSpace),Ct=o.convert(_.type);let Ft=v(_.internalFormat,vt,Ct,_.colorSpace,_.isVideoTexture);Pt(O,_);let wt;const kt=_.mipmaps,U=_.isVideoTexture!==!0,St=ft.__version===void 0||H===!0,ht=F.dataReady,Lt=P(_,nt);if(_.isDepthTexture)Ft=M(_.format===Es,_.type),St&&(U?e.texStorage2D(s.TEXTURE_2D,1,Ft,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Ft,nt.width,nt.height,0,vt,Ct,null));else if(_.isDataTexture)if(kt.length>0){U&&St&&e.texStorage2D(s.TEXTURE_2D,Lt,Ft,kt[0].width,kt[0].height);for(let ot=0,it=kt.length;ot<it;ot++)wt=kt[ot],U?ht&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,wt.width,wt.height,vt,Ct,wt.data):e.texImage2D(s.TEXTURE_2D,ot,Ft,wt.width,wt.height,0,vt,Ct,wt.data);_.generateMipmaps=!1}else U?(St&&e.texStorage2D(s.TEXTURE_2D,Lt,Ft,nt.width,nt.height),ht&&at(_,nt,vt,Ct)):e.texImage2D(s.TEXTURE_2D,0,Ft,nt.width,nt.height,0,vt,Ct,nt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&St&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Ft,kt[0].width,kt[0].height,nt.depth);for(let ot=0,it=kt.length;ot<it;ot++)if(wt=kt[ot],_.format!==vn)if(vt!==null)if(U){if(ht)if(_.layerUpdates.size>0){const At=Sc(wt.width,wt.height,_.format,_.type);for(const Wt of _.layerUpdates){const he=wt.data.subarray(Wt*At/wt.data.BYTES_PER_ELEMENT,(Wt+1)*At/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,Wt,wt.width,wt.height,1,vt,he)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,wt.width,wt.height,nt.depth,vt,wt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,Ft,wt.width,wt.height,nt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ht&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,wt.width,wt.height,nt.depth,vt,Ct,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ot,Ft,wt.width,wt.height,nt.depth,0,vt,Ct,wt.data)}else{U&&St&&e.texStorage2D(s.TEXTURE_2D,Lt,Ft,kt[0].width,kt[0].height);for(let ot=0,it=kt.length;ot<it;ot++)wt=kt[ot],_.format!==vn?vt!==null?U?ht&&e.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,wt.width,wt.height,vt,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,ot,Ft,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ht&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,wt.width,wt.height,vt,Ct,wt.data):e.texImage2D(s.TEXTURE_2D,ot,Ft,wt.width,wt.height,0,vt,Ct,wt.data)}else if(_.isDataArrayTexture)if(U){if(St&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Ft,nt.width,nt.height,nt.depth),ht)if(_.layerUpdates.size>0){const ot=Sc(nt.width,nt.height,_.format,_.type);for(const it of _.layerUpdates){const At=nt.data.subarray(it*ot/nt.data.BYTES_PER_ELEMENT,(it+1)*ot/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,nt.width,nt.height,1,vt,Ct,At)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,Ct,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,nt.width,nt.height,nt.depth,0,vt,Ct,nt.data);else if(_.isData3DTexture)U?(St&&e.texStorage3D(s.TEXTURE_3D,Lt,Ft,nt.width,nt.height,nt.depth),ht&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,Ct,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,nt.width,nt.height,nt.depth,0,vt,Ct,nt.data);else if(_.isFramebufferTexture){if(St)if(U)e.texStorage2D(s.TEXTURE_2D,Lt,Ft,nt.width,nt.height);else{let ot=nt.width,it=nt.height;for(let At=0;At<Lt;At++)e.texImage2D(s.TEXTURE_2D,At,Ft,ot,it,0,vt,Ct,null),ot>>=1,it>>=1}}else if(kt.length>0){if(U&&St){const ot=Zt(kt[0]);e.texStorage2D(s.TEXTURE_2D,Lt,Ft,ot.width,ot.height)}for(let ot=0,it=kt.length;ot<it;ot++)wt=kt[ot],U?ht&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,vt,Ct,wt):e.texImage2D(s.TEXTURE_2D,ot,Ft,vt,Ct,wt);_.generateMipmaps=!1}else if(U){if(St){const ot=Zt(nt);e.texStorage2D(s.TEXTURE_2D,Lt,Ft,ot.width,ot.height)}ht&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Ct,nt)}else e.texImage2D(s.TEXTURE_2D,0,Ft,vt,Ct,nt);p(_)&&f(O),ft.__version=F.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function dt(C,_,I){if(_.image.length!==6)return;const O=ut(C,_),H=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+I);const F=n.get(H);if(H.version!==F.__version||O===!0){e.activeTexture(s.TEXTURE0+I);const ft=ge.getPrimaries(ge.workingColorSpace),tt=_.colorSpace===ei?null:ge.getPrimaries(_.colorSpace),lt=_.colorSpace===ei||ft===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const _t=_.isCompressedTexture||_.image[0].isCompressedTexture,nt=_.image[0]&&_.image[0].isDataTexture,vt=[];for(let it=0;it<6;it++)!_t&&!nt?vt[it]=w(_.image[it],!0,i.maxCubemapSize):vt[it]=nt?_.image[it].image:_.image[it],vt[it]=Nt(_,vt[it]);const Ct=vt[0],Ft=o.convert(_.format,_.colorSpace),wt=o.convert(_.type),kt=v(_.internalFormat,Ft,wt,_.colorSpace),U=_.isVideoTexture!==!0,St=F.__version===void 0||O===!0,ht=H.dataReady;let Lt=P(_,Ct);Pt(s.TEXTURE_CUBE_MAP,_);let ot;if(_t){U&&St&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,kt,Ct.width,Ct.height);for(let it=0;it<6;it++){ot=vt[it].mipmaps;for(let At=0;At<ot.length;At++){const Wt=ot[At];_.format!==vn?Ft!==null?U?ht&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,0,0,Wt.width,Wt.height,Ft,Wt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,kt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,0,0,Wt.width,Wt.height,Ft,wt,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,kt,Wt.width,Wt.height,0,Ft,wt,Wt.data)}}}else{if(ot=_.mipmaps,U&&St){ot.length>0&&Lt++;const it=Zt(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,kt,it.width,it.height)}for(let it=0;it<6;it++)if(nt){U?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,vt[it].width,vt[it].height,Ft,wt,vt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,kt,vt[it].width,vt[it].height,0,Ft,wt,vt[it].data);for(let At=0;At<ot.length;At++){const he=ot[At].image[it].image;U?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,0,0,he.width,he.height,Ft,wt,he.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,kt,he.width,he.height,0,Ft,wt,he.data)}}else{U?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ft,wt,vt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,kt,Ft,wt,vt[it]);for(let At=0;At<ot.length;At++){const Wt=ot[At];U?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,0,0,Ft,wt,Wt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,kt,Ft,wt,Wt.image[it])}}}p(_)&&f(s.TEXTURE_CUBE_MAP),F.__version=H.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function bt(C,_,I,O,H,F){const ft=o.convert(I.format,I.colorSpace),tt=o.convert(I.type),lt=v(I.internalFormat,ft,tt,I.colorSpace),_t=n.get(_),nt=n.get(I);if(nt.__renderTarget=_,!_t.__hasExternalTextures){const vt=Math.max(1,_.width>>F),Ct=Math.max(1,_.height>>F);H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?e.texImage3D(H,F,lt,vt,Ct,_.depth,0,ft,tt,null):e.texImage2D(H,F,lt,vt,Ct,0,ft,tt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),xt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,O,H,nt.__webglTexture,0,Z(_)):(H===s.TEXTURE_2D||H>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,O,H,nt.__webglTexture,F),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(C,_,I){if(s.bindRenderbuffer(s.RENDERBUFFER,C),_.depthBuffer){const O=_.depthTexture,H=O&&O.isDepthTexture?O.type:null,F=M(_.stencilBuffer,H),ft=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=Z(_);xt(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,F,_.width,_.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,F,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,F,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,C)}else{const O=_.textures;for(let H=0;H<O.length;H++){const F=O[H],ft=o.convert(F.format,F.colorSpace),tt=o.convert(F.type),lt=v(F.internalFormat,ft,tt,F.colorSpace),_t=Z(_);I&&xt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,lt,_.width,_.height):xt(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,lt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,lt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(C,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=n.get(_.depthTexture);O.__renderTarget=_,(!O.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const H=O.__webglTexture,F=Z(_);if(_.depthTexture.format===Ss)xt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,H,0,F):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,H,0);else if(_.depthTexture.format===Es)xt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,H,0,F):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function Vt(C){const _=n.get(C),I=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const O=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),O){const H=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,O.removeEventListener("dispose",H)};O.addEventListener("dispose",H),_.__depthDisposeCallback=H}_.__boundDepthTexture=O}if(C.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const O=C.texture.mipmaps;O&&O.length>0?Tt(_.__webglFramebuffer[0],C):Tt(_.__webglFramebuffer,C)}else if(I){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]===void 0)_.__webglDepthbuffer[O]=s.createRenderbuffer(),Rt(_.__webglDepthbuffer[O],C,!1);else{const H=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,F=_.__webglDepthbuffer[O];s.bindRenderbuffer(s.RENDERBUFFER,F),s.framebufferRenderbuffer(s.FRAMEBUFFER,H,s.RENDERBUFFER,F)}}else{const O=C.texture.mipmaps;if(O&&O.length>0?e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Rt(_.__webglDepthbuffer,C,!1);else{const H=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,F=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,F),s.framebufferRenderbuffer(s.FRAMEBUFFER,H,s.RENDERBUFFER,F)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(C,_,I){const O=n.get(C);_!==void 0&&bt(O.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&Vt(C)}function gt(C){const _=C.texture,I=n.get(C),O=n.get(_);C.addEventListener("dispose",R);const H=C.textures,F=C.isWebGLCubeRenderTarget===!0,ft=H.length>1;if(ft||(O.__webglTexture===void 0&&(O.__webglTexture=s.createTexture()),O.__version=_.version,r.memory.textures++),F){I.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[tt]=[];for(let lt=0;lt<_.mipmaps.length;lt++)I.__webglFramebuffer[tt][lt]=s.createFramebuffer()}else I.__webglFramebuffer[tt]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let tt=0;tt<_.mipmaps.length;tt++)I.__webglFramebuffer[tt]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(ft)for(let tt=0,lt=H.length;tt<lt;tt++){const _t=n.get(H[tt]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),r.memory.textures++)}if(C.samples>0&&xt(C)===!1){I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let tt=0;tt<H.length;tt++){const lt=H[tt];I.__webglColorRenderbuffer[tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[tt]);const _t=o.convert(lt.format,lt.colorSpace),nt=o.convert(lt.type),vt=v(lt.internalFormat,_t,nt,lt.colorSpace,C.isXRRenderTarget===!0),Ct=Z(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,vt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,I.__webglColorRenderbuffer[tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),Rt(I.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(F){e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture),Pt(s.TEXTURE_CUBE_MAP,_);for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0)for(let lt=0;lt<_.mipmaps.length;lt++)bt(I.__webglFramebuffer[tt][lt],C,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt);else bt(I.__webglFramebuffer[tt],C,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);p(_)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let tt=0,lt=H.length;tt<lt;tt++){const _t=H[tt],nt=n.get(_t);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),Pt(s.TEXTURE_2D,_t),bt(I.__webglFramebuffer,C,_t,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,0),p(_t)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let tt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(tt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,O.__webglTexture),Pt(tt,_),_.mipmaps&&_.mipmaps.length>0)for(let lt=0;lt<_.mipmaps.length;lt++)bt(I.__webglFramebuffer[lt],C,_,s.COLOR_ATTACHMENT0,tt,lt);else bt(I.__webglFramebuffer,C,_,s.COLOR_ATTACHMENT0,tt,0);p(_)&&f(tt),e.unbindTexture()}C.depthBuffer&&Vt(C)}function E(C){const _=C.textures;for(let I=0,O=_.length;I<O;I++){const H=_[I];if(p(H)){const F=x(C),ft=n.get(H).__webglTexture;e.bindTexture(F,ft),f(F),e.unbindTexture()}}}const st=[],$=[];function rt(C){if(C.samples>0){if(xt(C)===!1){const _=C.textures,I=C.width,O=C.height;let H=s.COLOR_BUFFER_BIT;const F=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=n.get(C),tt=_.length>1;if(tt)for(let _t=0;_t<_.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);const lt=C.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let _t=0;_t<_.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(H|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(H|=s.STENCIL_BUFFER_BIT)),tt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);const nt=n.get(_[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,I,O,0,0,I,O,H,s.NEAREST),c===!0&&(st.length=0,$.length=0,st.push(s.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.resolveDepthBuffer===!1&&(st.push(F),$.push(F),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),tt)for(let _t=0;_t<_.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);const nt=n.get(_[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const _=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Z(C){return Math.min(i.maxSamples,C.samples)}function xt(C){const _=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function et(C){const _=r.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function Nt(C,_){const I=C.colorSpace,O=C.format,H=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==$i&&I!==ei&&(ge.getTransfer(I)===ye?(O!==vn||H!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),_}function Zt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=Y,this.rebindTextures=Bt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=E,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=xt}function R0(s,t){function e(n,i=ei){let o;const r=ge.getTransfer(i);if(n===Rn)return s.UNSIGNED_BYTE;if(n===ma)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return s.UNSIGNED_SHORT_5_5_5_1;if(n===il)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===el)return s.BYTE;if(n===nl)return s.SHORT;if(n===ws)return s.UNSIGNED_SHORT;if(n===pa)return s.INT;if(n===xi)return s.UNSIGNED_INT;if(n===Gn)return s.FLOAT;if(n===Vn)return s.HALF_FLOAT;if(n===sl)return s.ALPHA;if(n===ol)return s.RGB;if(n===vn)return s.RGBA;if(n===Ss)return s.DEPTH_COMPONENT;if(n===Es)return s.DEPTH_STENCIL;if(n===rl)return s.RED;if(n===_a)return s.RED_INTEGER;if(n===al)return s.RG;if(n===xa)return s.RG_INTEGER;if(n===va)return s.RGBA_INTEGER;if(n===po||n===mo||n===go||n===_o)if(r===ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===po)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===po)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ur||n===Nr||n===Fr||n===Or)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ur)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Or)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zr||n===Br||n===Gr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===zr||n===Br)return r===ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Gr)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hr||n===kr||n===Vr||n===Wr||n===Xr||n===Yr||n===qr||n===Zr||n===jr||n===Kr||n===$r||n===Jr||n===Qr||n===ta)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Hr)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kr)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vr)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wr)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xr)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yr)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qr)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zr)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jr)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kr)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$r)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jr)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qr)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ta)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===ea||n===na)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===xo)return r===ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ea)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===na)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cl||n===ia||n===sa||n===oa)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===xo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ia)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const C0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P0=`
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

}`;class D0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ke,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:C0,fragmentShader:P0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L0 extends wi{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null;const w=new D0,p=e.getContextAttributes();let f=null,x=null;const v=[],M=[],P=new Mt;let b=null;const R=new nn;R.viewport=new Ee;const D=new nn;D.viewport=new Ee;const y=[R,D],S=new Ku;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let at=v[G];return at===void 0&&(at=new er,v[G]=at),at.getTargetRaySpace()},this.getControllerGrip=function(G){let at=v[G];return at===void 0&&(at=new er,v[G]=at),at.getGripSpace()},this.getHand=function(G){let at=v[G];return at===void 0&&(at=new er,v[G]=at),at.getHandSpace()};function X(G){const at=M.indexOf(G.inputSource);if(at===-1)return;const mt=v[at];mt!==void 0&&(mt.update(G.inputSource,G.frame,l||r),mt.dispatchEvent({type:G.type,data:G.inputSource}))}function K(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",q);for(let G=0;G<v.length;G++){const at=M[G];at!==null&&(M[G]=null,v[G].disconnect(at))}L=null,N=null,w.reset(),t.setRenderTarget(f),m=null,d=null,u=null,i=null,x=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",K),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,dt=null,bt=null;p.depth&&(bt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=p.stencil?Es:Ss,dt=p.stencil?ys:xi);const Rt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:o};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Rt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new wn(d.textureWidth,d.textureHeight,{format:vn,type:Rn,depthTexture:new yl(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const mt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(i,e,mt),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new wn(m.framebufferWidth,m.framebufferHeight,{format:vn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),ut.setContext(i),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function q(G){for(let at=0;at<G.removed.length;at++){const mt=G.removed[at],dt=M.indexOf(mt);dt>=0&&(M[dt]=null,v[dt].disconnect(mt))}for(let at=0;at<G.added.length;at++){const mt=G.added[at];let dt=M.indexOf(mt);if(dt===-1){for(let Rt=0;Rt<v.length;Rt++)if(Rt>=M.length){M.push(mt),dt=Rt;break}else if(M[Rt]===null){M[Rt]=mt,dt=Rt;break}if(dt===-1)break}const bt=v[dt];bt&&bt.connect(mt)}}const B=new A,W=new A;function Y(G,at,mt){B.setFromMatrixPosition(at.matrixWorld),W.setFromMatrixPosition(mt.matrixWorld);const dt=B.distanceTo(W),bt=at.projectionMatrix.elements,Rt=mt.projectionMatrix.elements,Tt=bt[14]/(bt[10]-1),Vt=bt[14]/(bt[10]+1),Bt=(bt[9]+1)/bt[5],gt=(bt[9]-1)/bt[5],E=(bt[8]-1)/bt[0],st=(Rt[8]+1)/Rt[0],$=Tt*E,rt=Tt*st,Z=dt/(-E+st),xt=Z*-E;if(at.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(xt),G.translateZ(Z),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),bt[10]===-1)G.projectionMatrix.copy(at.projectionMatrix),G.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const et=Tt+Z,Nt=Vt+Z,Zt=$-xt,C=rt+(dt-xt),_=Bt*Vt/Nt*et,I=gt*Vt/Nt*et;G.projectionMatrix.makePerspective(Zt,C,_,I,et,Nt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function pt(G,at){at===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(at.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;let at=G.near,mt=G.far;w.texture!==null&&(w.depthNear>0&&(at=w.depthNear),w.depthFar>0&&(mt=w.depthFar)),S.near=D.near=R.near=at,S.far=D.far=R.far=mt,(L!==S.near||N!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,N=S.far),R.layers.mask=G.layers.mask|2,D.layers.mask=G.layers.mask|4,S.layers.mask=R.layers.mask|D.layers.mask;const dt=G.parent,bt=S.cameras;pt(S,dt);for(let Rt=0;Rt<bt.length;Rt++)pt(bt[Rt],dt);bt.length===2?Y(S,R,D):S.projectionMatrix.copy(R.projectionMatrix),ct(G,S,dt)};function ct(G,at,mt){mt===null?G.matrix.copy(at.matrixWorld):(G.matrix.copy(mt.matrixWorld),G.matrix.invert(),G.matrix.multiply(at.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(at.projectionMatrix),G.projectionMatrixInverse.copy(at.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ra*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(S)};let Et=null;function Pt(G,at){if(h=at.getViewerPose(l||r),g=at,h!==null){const mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let dt=!1;mt.length!==S.cameras.length&&(S.cameras.length=0,dt=!0);for(let Tt=0;Tt<mt.length;Tt++){const Vt=mt[Tt];let Bt=null;if(m!==null)Bt=m.getViewport(Vt);else{const E=u.getViewSubImage(d,Vt);Bt=E.viewport,Tt===0&&(t.setRenderTargetTextures(x,E.colorTexture,E.depthStencilTexture),t.setRenderTarget(x))}let gt=y[Tt];gt===void 0&&(gt=new nn,gt.layers.enable(Tt),gt.viewport=new Ee,y[Tt]=gt),gt.matrix.fromArray(Vt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Vt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Tt===0&&(S.matrix.copy(gt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),dt===!0&&S.cameras.push(gt)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Tt=u.getDepthInformation(mt[0]);Tt&&Tt.isValid&&Tt.texture&&w.init(t,Tt,i.renderState)}}for(let mt=0;mt<v.length;mt++){const dt=M[mt],bt=v[mt];dt!==null&&bt!==void 0&&bt.update(dt,at,l||r)}Et&&Et(G,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const ut=new Ul;ut.setAnimationLoop(Pt),this.setAnimationLoop=function(G){Et=G},this.dispose=function(){}}}const di=new Cn,I0=new be;function U0(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,gl(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,x,v,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(p,f):f.isMeshToonMaterial?(o(p,f),u(p,f)):f.isMeshPhongMaterial?(o(p,f),h(p,f)):f.isMeshStandardMaterial?(o(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(o(p,f),g(p,f)):f.isMeshDepthMaterial?o(p,f):f.isMeshDistanceMaterial?(o(p,f),w(p,f)):f.isMeshNormalMaterial?o(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,x,v):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ve&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ve&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const x=t.get(f),v=x.envMap,M=x.envMapRotation;v&&(p.envMap.value=v,di.copy(M),di.x*=-1,di.y*=-1,di.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),p.envMapRotation.value.setFromMatrix4(I0.makeRotationFromEuler(di)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,x,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=v*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ve&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function w(p,f){const x=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function N0(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function l(x,v){let M=i[x.id];M===void 0&&(g(x),M=h(x),i[x.id]=M,x.addEventListener("dispose",p));const P=v.program;n.updateUBOMapping(x,P);const b=t.render.frame;o[x.id]!==b&&(d(x),o[x.id]=b)}function h(x){const v=u();x.__bindingPointIndex=v;const M=s.createBuffer(),P=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,P,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function u(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],M=x.uniforms,P=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,R=M.length;b<R;b++){const D=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,S=D.length;y<S;y++){const L=D[y];if(m(L,b,y,P)===!0){const N=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let q=0;q<X.length;q++){const B=X[q],W=w(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,N+K,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,K),K+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(x,v,M,P){const b=x.value,R=v+"_"+M;if(P[R]===void 0)return typeof b=="number"||typeof b=="boolean"?P[R]=b:P[R]=b.clone(),!0;{const D=P[R];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return P[R]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function g(x){const v=x.uniforms;let M=0;const P=16;for(let R=0,D=v.length;R<D;R++){const y=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,L=y.length;S<L;S++){const N=y[S],X=Array.isArray(N.value)?N.value:[N.value];for(let K=0,q=X.length;K<q;K++){const B=X[K],W=w(B),Y=M%P,pt=Y%W.boundary,ct=Y+pt;M+=pt,ct!==0&&P-ct<W.storage&&(M+=P-ct),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=W.storage}}}const b=M%P;return b>0&&(M+=P-b),x.__size=M,x.__cache={},this}function w(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const M=r.indexOf(v.__bindingPointIndex);r.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete o[v.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);r=[],i={},o={}}return{bind:c,update:l,dispose:f}}class Bl{constructor(t={}){const{canvas:e=Ih(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const g=new Uint32Array(4),w=new Int32Array(4);let p=null,f=null;const x=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let P=!1;this._outputColorSpace=fn;let b=0,R=0,D=null,y=-1,S=null;const L=new Ee,N=new Ee;let X=null;const K=new ne(0);let q=0,B=e.width,W=e.height,Y=1,pt=null,ct=null;const Et=new Ee(0,0,B,W),Pt=new Ee(0,0,B,W);let ut=!1;const G=new ya;let at=!1,mt=!1;const dt=new be,bt=new be,Rt=new A,Tt=new Ee,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function gt(){return D===null?Y:1}let E=n;function st(T,z){return e.getContext(T,z)}try{const T={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${da}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",it,!1),E===null){const z="webgl2";if(E=st(z,T),E===null)throw st(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,rt,Z,xt,et,Nt,Zt,C,_,I,O,H,F,ft,tt,lt,_t,nt,vt,Ct,Ft,wt,kt,U;function St(){$=new Yp(E),$.init(),wt=new R0(E,$),rt=new Bp(E,$,t,wt),Z=new b0(E,$),rt.reverseDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),xt=new jp(E),et=new d0,Nt=new A0(E,$,Z,et,rt,wt,xt),Zt=new Hp(M),C=new Xp(M),_=new tf(E),kt=new Op(E,_),I=new qp(E,_,xt,kt),O=new $p(E,I,_,xt),vt=new Kp(E,rt,Nt),lt=new Gp(et),H=new f0(M,Zt,C,$,rt,kt,lt),F=new U0(M,et),ft=new m0,tt=new w0($),nt=new Fp(M,Zt,C,Z,O,m,c),_t=new E0(M,O,rt),U=new N0(E,xt,rt,Z),Ct=new zp(E,$,xt),Ft=new Zp(E,$,xt),xt.programs=H.programs,M.capabilities=rt,M.extensions=$,M.properties=et,M.renderLists=ft,M.shadowMap=_t,M.state=Z,M.info=xt}St();const ht=new L0(M,E);this.xr=ht,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(B,W,!1))},this.getSize=function(T){return T.set(B,W)},this.setSize=function(T,z,j=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,W=z,e.width=Math.floor(T*Y),e.height=Math.floor(z*Y),j===!0&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(B*Y,W*Y).floor()},this.setDrawingBufferSize=function(T,z,j){B=T,W=z,Y=j,e.width=Math.floor(T*j),e.height=Math.floor(z*j),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Et)},this.setViewport=function(T,z,j,J){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,z,j,J),Z.viewport(L.copy(Et).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(Pt)},this.setScissor=function(T,z,j,J){T.isVector4?Pt.set(T.x,T.y,T.z,T.w):Pt.set(T,z,j,J),Z.scissor(N.copy(Pt).multiplyScalar(Y).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(T){Z.setScissorTest(ut=T)},this.setOpaqueSort=function(T){pt=T},this.setTransparentSort=function(T){ct=T},this.getClearColor=function(T){return T.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,j=!0){let J=0;if(T){let V=!1;if(D!==null){const yt=D.texture.format;V=yt===va||yt===xa||yt===_a}if(V){const yt=D.texture.type,It=yt===Rn||yt===xi||yt===ws||yt===ys||yt===ma||yt===ga,Gt=nt.getClearColor(),Ot=nt.getClearAlpha(),$t=Gt.r,Jt=Gt.g,Xt=Gt.b;It?(g[0]=$t,g[1]=Jt,g[2]=Xt,g[3]=Ot,E.clearBufferuiv(E.COLOR,0,g)):(w[0]=$t,w[1]=Jt,w[2]=Xt,w[3]=Ot,E.clearBufferiv(E.COLOR,0,w))}else J|=E.COLOR_BUFFER_BIT}z&&(J|=E.DEPTH_BUFFER_BIT),j&&(J|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",it,!1),nt.dispose(),ft.dispose(),tt.dispose(),et.dispose(),Zt.dispose(),C.dispose(),O.dispose(),kt.dispose(),U.dispose(),H.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",yn),ht.removeEventListener("sessionend",Sn),pn.stop()};function Lt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=xt.autoReset,z=_t.enabled,j=_t.autoUpdate,J=_t.needsUpdate,V=_t.type;St(),xt.autoReset=T,_t.enabled=z,_t.autoUpdate=j,_t.needsUpdate=J,_t.type=V}function it(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function At(T){const z=T.target;z.removeEventListener("dispose",At),Wt(z)}function Wt(T){he(T),et.remove(T)}function he(T){const z=et.get(T).programs;z!==void 0&&(z.forEach(function(j){H.releaseProgram(j)}),T.isShaderMaterial&&H.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,j,J,V,yt){z===null&&(z=Vt);const It=V.isMesh&&V.matrixWorld.determinant()<0,Gt=fe(T,z,j,J,V);Z.setMaterial(J,It);let Ot=j.index,$t=1;if(J.wireframe===!0){if(Ot=I.getWireframeAttribute(j),Ot===void 0)return;$t=2}const Jt=j.drawRange,Xt=j.attributes.position;let ue=Jt.start*$t,we=(Jt.start+Jt.count)*$t;yt!==null&&(ue=Math.max(ue,yt.start*$t),we=Math.min(we,(yt.start+yt.count)*$t)),Ot!==null?(ue=Math.max(ue,0),we=Math.min(we,Ot.count)):Xt!=null&&(ue=Math.max(ue,0),we=Math.min(we,Xt.count));const Le=we-ue;if(Le<0||Le===1/0)return;kt.setup(V,J,Gt,j,Ot);let Re,Te=Ct;if(Ot!==null&&(Re=_.get(Ot),Te=Ft,Te.setIndex(Re)),V.isMesh)J.wireframe===!0?(Z.setLineWidth(J.wireframeLinewidth*gt()),Te.setMode(E.LINES)):Te.setMode(E.TRIANGLES);else if(V.isLine){let qt=J.linewidth;qt===void 0&&(qt=1),Z.setLineWidth(qt*gt()),V.isLineSegments?Te.setMode(E.LINES):V.isLineLoop?Te.setMode(E.LINE_LOOP):Te.setMode(E.LINE_STRIP)}else V.isPoints?Te.setMode(E.POINTS):V.isSprite&&Te.setMode(E.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Yi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Te.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if($.get("WEBGL_multi_draw"))Te.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const qt=V._multiDrawStarts,Pe=V._multiDrawCounts,me=V._multiDrawCount,on=Ot?_.get(Ot).bytesPerElement:1,Ti=et.get(J).currentProgram.getUniforms();for(let rn=0;rn<me;rn++)Ti.setValue(E,"_gl_DrawID",rn),Te.render(qt[rn]/on,Pe[rn])}else if(V.isInstancedMesh)Te.renderInstances(ue,Le,V.count);else if(j.isInstancedBufferGeometry){const qt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Pe=Math.min(j.instanceCount,qt);Te.renderInstances(ue,Le,Pe)}else Te.render(ue,Le)};function Qt(T,z,j){T.transparent===!0&&T.side===zn&&T.forceSinglePass===!1?(T.side=Ve,T.needsUpdate=!0,ri(T,z,j),T.side=ii,T.needsUpdate=!0,ri(T,z,j),T.side=zn):ri(T,z,j)}this.compile=function(T,z,j=null){j===null&&(j=T),f=tt.get(j),f.init(z),v.push(f),j.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),T!==j&&T.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const J=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const yt=V.material;if(yt)if(Array.isArray(yt))for(let It=0;It<yt.length;It++){const Gt=yt[It];Qt(Gt,j,V),J.add(Gt)}else Qt(yt,j,V),J.add(yt)}),f=v.pop(),J},this.compileAsync=function(T,z,j=null){const J=this.compile(T,z,j);return new Promise(V=>{function yt(){if(J.forEach(function(It){et.get(It).currentProgram.isReady()&&J.delete(It)}),J.size===0){V(T);return}setTimeout(yt,10)}$.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Me=null;function He(T){Me&&Me(T)}function yn(){pn.stop()}function Sn(){pn.start()}const pn=new Ul;pn.setAnimationLoop(He),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(T){Me=T,ht.setAnimationLoop(T),T===null?pn.stop():pn.start()},ht.addEventListener("sessionstart",yn),ht.addEventListener("sessionend",Sn),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(z),z=ht.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,z,D),f=tt.get(T,v.length),f.init(z),v.push(f),bt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G.setFromProjectionMatrix(bt),mt=this.localClippingEnabled,at=lt.init(this.clippingPlanes,mt),p=ft.get(T,x.length),p.init(),x.push(p),ht.enabled===!0&&ht.isPresenting===!0){const yt=M.xr.getDepthSensingMesh();yt!==null&&si(yt,z,-1/0,M.sortObjects)}si(T,z,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(pt,ct),Bt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Bt&&nt.addToRenderList(p,T),this.info.render.frame++,at===!0&&lt.beginShadows();const j=f.state.shadowsArray;_t.render(j,T,z),at===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=p.opaque,V=p.transmissive;if(f.setupLights(),z.isArrayCamera){const yt=z.cameras;if(V.length>0)for(let It=0,Gt=yt.length;It<Gt;It++){const Ot=yt[It];Ei(J,V,T,Ot)}Bt&&nt.render(T);for(let It=0,Gt=yt.length;It<Gt;It++){const Ot=yt[It];oi(p,T,Ot,Ot.viewport)}}else V.length>0&&Ei(J,V,T,z),Bt&&nt.render(T),oi(p,T,z);D!==null&&R===0&&(Nt.updateMultisampleRenderTarget(D),Nt.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(M,T,z),kt.resetDefaultState(),y=-1,S=null,v.pop(),v.length>0?(f=v[v.length-1],at===!0&&lt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function si(T,z,j,J){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||G.intersectsSprite(T)){J&&Tt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(bt);const It=O.update(T),Gt=T.material;Gt.visible&&p.push(T,It,Gt,j,Tt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||G.intersectsObject(T))){const It=O.update(T),Gt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Tt.copy(T.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Tt.copy(It.boundingSphere.center)),Tt.applyMatrix4(T.matrixWorld).applyMatrix4(bt)),Array.isArray(Gt)){const Ot=It.groups;for(let $t=0,Jt=Ot.length;$t<Jt;$t++){const Xt=Ot[$t],ue=Gt[Xt.materialIndex];ue&&ue.visible&&p.push(T,It,ue,j,Tt.z,Xt)}}else Gt.visible&&p.push(T,It,Gt,j,Tt.z,null)}}const yt=T.children;for(let It=0,Gt=yt.length;It<Gt;It++)si(yt[It],z,j,J)}function oi(T,z,j,J){const V=T.opaque,yt=T.transmissive,It=T.transparent;f.setupLightsView(j),at===!0&&lt.setGlobalState(M.clippingPlanes,j),J&&Z.viewport(L.copy(J)),V.length>0&&Xn(V,z,j),yt.length>0&&Xn(yt,z,j),It.length>0&&Xn(It,z,j),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Ei(T,z,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[J.id]===void 0&&(f.state.transmissionRenderTarget[J.id]=new wn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Vn:Rn,minFilter:_i,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const yt=f.state.transmissionRenderTarget[J.id],It=J.viewport||L;yt.setSize(It.z*M.transmissionResolutionScale,It.w*M.transmissionResolutionScale);const Gt=M.getRenderTarget(),Ot=M.getActiveCubeFace(),$t=M.getActiveMipmapLevel();M.setRenderTarget(yt),M.getClearColor(K),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),Bt&&nt.render(j);const Jt=M.toneMapping;M.toneMapping=ni;const Xt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),f.setupLightsView(J),at===!0&&lt.setGlobalState(M.clippingPlanes,J),Xn(T,j,J),Nt.updateMultisampleRenderTarget(yt),Nt.updateRenderTargetMipmap(yt),$.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let we=0,Le=z.length;we<Le;we++){const Re=z[we],Te=Re.object,qt=Re.geometry,Pe=Re.material,me=Re.group;if(Pe.side===zn&&Te.layers.test(J.layers)){const on=Pe.side;Pe.side=Ve,Pe.needsUpdate=!0,Dn(Te,j,J,qt,Pe,me),Pe.side=on,Pe.needsUpdate=!0,ue=!0}}ue===!0&&(Nt.updateMultisampleRenderTarget(yt),Nt.updateRenderTargetMipmap(yt))}M.setRenderTarget(Gt,Ot,$t),M.setClearColor(K,q),Xt!==void 0&&(J.viewport=Xt),M.toneMapping=Jt}function Xn(T,z,j){const J=z.isScene===!0?z.overrideMaterial:null;for(let V=0,yt=T.length;V<yt;V++){const It=T[V],Gt=It.object,Ot=It.geometry,$t=It.group;let Jt=It.material;Jt.allowOverride===!0&&J!==null&&(Jt=J),Gt.layers.test(j.layers)&&Dn(Gt,z,j,Ot,Jt,$t)}}function Dn(T,z,j,J,V,yt){T.onBeforeRender(M,z,j,J,V,yt),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(M,z,j,J,T,yt),V.transparent===!0&&V.side===zn&&V.forceSinglePass===!1?(V.side=Ve,V.needsUpdate=!0,M.renderBufferDirect(j,z,J,V,T,yt),V.side=ii,V.needsUpdate=!0,M.renderBufferDirect(j,z,J,V,T,yt),V.side=zn):M.renderBufferDirect(j,z,J,V,T,yt),T.onAfterRender(M,z,j,J,V,yt)}function ri(T,z,j){z.isScene!==!0&&(z=Vt);const J=et.get(T),V=f.state.lights,yt=f.state.shadowsArray,It=V.state.version,Gt=H.getParameters(T,V.state,yt,z,j),Ot=H.getProgramCacheKey(Gt);let $t=J.programs;J.environment=T.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(T.isMeshStandardMaterial?C:Zt).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,$t===void 0&&(T.addEventListener("dispose",At),$t=new Map,J.programs=$t);let Jt=$t.get(Ot);if(Jt!==void 0){if(J.currentProgram===Jt&&J.lightsStateVersion===It)return ee(T,Gt),Jt}else Gt.uniforms=H.getUniforms(T),T.onBeforeCompile(Gt,M),Jt=H.acquireProgram(Gt,Ot),$t.set(Ot,Jt),J.uniforms=Gt.uniforms;const Xt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xt.clippingPlanes=lt.uniform),ee(T,Gt),J.needsLights=Ne(T),J.lightsStateVersion=It,J.needsLights&&(Xt.ambientLightColor.value=V.state.ambient,Xt.lightProbe.value=V.state.probe,Xt.directionalLights.value=V.state.directional,Xt.directionalLightShadows.value=V.state.directionalShadow,Xt.spotLights.value=V.state.spot,Xt.spotLightShadows.value=V.state.spotShadow,Xt.rectAreaLights.value=V.state.rectArea,Xt.ltc_1.value=V.state.rectAreaLTC1,Xt.ltc_2.value=V.state.rectAreaLTC2,Xt.pointLights.value=V.state.point,Xt.pointLightShadows.value=V.state.pointShadow,Xt.hemisphereLights.value=V.state.hemi,Xt.directionalShadowMap.value=V.state.directionalShadowMap,Xt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Xt.spotShadowMap.value=V.state.spotShadowMap,Xt.spotLightMatrix.value=V.state.spotLightMatrix,Xt.spotLightMap.value=V.state.spotLightMap,Xt.pointShadowMap.value=V.state.pointShadowMap,Xt.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=Jt,J.uniformsList=null,Jt}function jt(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=vo.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function ee(T,z){const j=et.get(T);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function fe(T,z,j,J,V){z.isScene!==!0&&(z=Vt),Nt.resetTextureUnits();const yt=z.fog,It=J.isMeshStandardMaterial?z.environment:null,Gt=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:$i,Ot=(J.isMeshStandardMaterial?C:Zt).get(J.envMap||It),$t=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Jt=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Xt=!!j.morphAttributes.position,ue=!!j.morphAttributes.normal,we=!!j.morphAttributes.color;let Le=ni;J.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Le=M.toneMapping);const Re=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Te=Re!==void 0?Re.length:0,qt=et.get(J),Pe=f.state.lights;if(at===!0&&(mt===!0||T!==S)){const $e=T===S&&J.id===y;lt.setState(J,T,$e)}let me=!1;J.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Pe.state.version||qt.outputColorSpace!==Gt||V.isBatchedMesh&&qt.batching===!1||!V.isBatchedMesh&&qt.batching===!0||V.isBatchedMesh&&qt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&qt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&qt.instancing===!1||!V.isInstancedMesh&&qt.instancing===!0||V.isSkinnedMesh&&qt.skinning===!1||!V.isSkinnedMesh&&qt.skinning===!0||V.isInstancedMesh&&qt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&qt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&qt.instancingMorph===!1&&V.morphTexture!==null||qt.envMap!==Ot||J.fog===!0&&qt.fog!==yt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==lt.numPlanes||qt.numIntersection!==lt.numIntersection)||qt.vertexAlphas!==$t||qt.vertexTangents!==Jt||qt.morphTargets!==Xt||qt.morphNormals!==ue||qt.morphColors!==we||qt.toneMapping!==Le||qt.morphTargetsCount!==Te)&&(me=!0):(me=!0,qt.__version=J.version);let on=qt.currentProgram;me===!0&&(on=ri(J,z,V));let Ti=!1,rn=!1,ss=!1;const Ce=on.getUniforms(),ln=qt.uniforms;if(Z.useProgram(on.program)&&(Ti=!0,rn=!0,ss=!0),J.id!==y&&(y=J.id,rn=!0),Ti||S!==T){Z.buffers.depth.getReversed()?(dt.copy(T.projectionMatrix),Nh(dt),Fh(dt),Ce.setValue(E,"projectionMatrix",dt)):Ce.setValue(E,"projectionMatrix",T.projectionMatrix),Ce.setValue(E,"viewMatrix",T.matrixWorldInverse);const Qe=Ce.map.cameraPosition;Qe!==void 0&&Qe.setValue(E,Rt.setFromMatrixPosition(T.matrixWorld)),rt.logarithmicDepthBuffer&&Ce.setValue(E,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ce.setValue(E,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,rn=!0,ss=!0)}if(V.isSkinnedMesh){Ce.setOptional(E,V,"bindMatrix"),Ce.setOptional(E,V,"bindMatrixInverse");const $e=V.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Ce.setValue(E,"boneTexture",$e.boneTexture,Nt))}V.isBatchedMesh&&(Ce.setOptional(E,V,"batchingTexture"),Ce.setValue(E,"batchingTexture",V._matricesTexture,Nt),Ce.setOptional(E,V,"batchingIdTexture"),Ce.setValue(E,"batchingIdTexture",V._indirectTexture,Nt),Ce.setOptional(E,V,"batchingColorTexture"),V._colorsTexture!==null&&Ce.setValue(E,"batchingColorTexture",V._colorsTexture,Nt));const hn=j.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&vt.update(V,j,on),(rn||qt.receiveShadow!==V.receiveShadow)&&(qt.receiveShadow=V.receiveShadow,Ce.setValue(E,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ln.envMap.value=Ot,ln.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(ln.envMapIntensity.value=z.environmentIntensity),rn&&(Ce.setValue(E,"toneMappingExposure",M.toneMappingExposure),qt.needsLights&&ae(ln,ss),yt&&J.fog===!0&&F.refreshFogUniforms(ln,yt),F.refreshMaterialUniforms(ln,J,Y,W,f.state.transmissionRenderTarget[T.id]),vo.upload(E,jt(qt),ln,Nt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(vo.upload(E,jt(qt),ln,Nt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ce.setValue(E,"center",V.center),Ce.setValue(E,"modelViewMatrix",V.modelViewMatrix),Ce.setValue(E,"normalMatrix",V.normalMatrix),Ce.setValue(E,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const $e=J.uniformsGroups;for(let Qe=0,Lo=$e.length;Qe<Lo;Qe++){const ai=$e[Qe];U.update(ai,on),U.bind(ai,on)}}return on}function ae(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Ne(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,z,j){const J=et.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),et.get(T.texture).__webglTexture=z,et.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const j=et.get(T);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0};const le=E.createFramebuffer();this.setRenderTarget=function(T,z=0,j=0){D=T,b=z,R=j;let J=!0,V=null,yt=!1,It=!1;if(T){const Ot=et.get(T);if(Ot.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(E.FRAMEBUFFER,null),J=!1;else if(Ot.__webglFramebuffer===void 0)Nt.setupRenderTarget(T);else if(Ot.__hasExternalTextures)Nt.rebindTextures(T,et.get(T.texture).__webglTexture,et.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Xt=T.depthTexture;if(Ot.__boundDepthTexture!==Xt){if(Xt!==null&&et.has(Xt)&&(T.width!==Xt.image.width||T.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(T)}}const $t=T.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(It=!0);const Jt=et.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Jt[z])?V=Jt[z][j]:V=Jt[z],yt=!0):T.samples>0&&Nt.useMultisampledRTT(T)===!1?V=et.get(T).__webglMultisampledFramebuffer:Array.isArray(Jt)?V=Jt[j]:V=Jt,L.copy(T.viewport),N.copy(T.scissor),X=T.scissorTest}else L.copy(Et).multiplyScalar(Y).floor(),N.copy(Pt).multiplyScalar(Y).floor(),X=ut;if(j!==0&&(V=le),Z.bindFramebuffer(E.FRAMEBUFFER,V)&&J&&Z.drawBuffers(T,V),Z.viewport(L),Z.scissor(N),Z.setScissorTest(X),yt){const Ot=et.get(T.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ot.__webglTexture,j)}else if(It){const Ot=et.get(T.texture),$t=z;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ot.__webglTexture,j,$t)}else if(T!==null&&j!==0){const Ot=et.get(T.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ot.__webglTexture,j)}y=-1},this.readRenderTargetPixels=function(T,z,j,J,V,yt,It,Gt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Ot=Ot[It]),Ot){Z.bindFramebuffer(E.FRAMEBUFFER,Ot);try{const $t=T.textures[Gt],Jt=$t.format,Xt=$t.type;if(!rt.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-J&&j>=0&&j<=T.height-V&&(T.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Gt),E.readPixels(z,j,J,V,wt.convert(Jt),wt.convert(Xt),yt))}finally{const $t=D!==null?et.get(D).__webglFramebuffer:null;Z.bindFramebuffer(E.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(T,z,j,J,V,yt,It,Gt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Ot=Ot[It]),Ot)if(z>=0&&z<=T.width-J&&j>=0&&j<=T.height-V){Z.bindFramebuffer(E.FRAMEBUFFER,Ot);const $t=T.textures[Gt],Jt=$t.format,Xt=$t.type;if(!rt.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,ue),E.bufferData(E.PIXEL_PACK_BUFFER,yt.byteLength,E.STREAM_READ),T.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Gt),E.readPixels(z,j,J,V,wt.convert(Jt),wt.convert(Xt),0);const we=D!==null?et.get(D).__webglFramebuffer:null;Z.bindFramebuffer(E.FRAMEBUFFER,we);const Le=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Uh(E,Le,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,ue),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,yt),E.deleteBuffer(ue),E.deleteSync(Le),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,j=0){const J=Math.pow(2,-j),V=Math.floor(T.image.width*J),yt=Math.floor(T.image.height*J),It=z!==null?z.x:0,Gt=z!==null?z.y:0;Nt.setTexture2D(T,0),E.copyTexSubImage2D(E.TEXTURE_2D,j,0,0,It,Gt,V,yt),Z.unbindTexture()};const Ie=E.createFramebuffer(),Xe=E.createFramebuffer();this.copyTextureToTexture=function(T,z,j=null,J=null,V=0,yt=null){yt===null&&(V!==0?(Yi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=V,V=0):yt=0);let It,Gt,Ot,$t,Jt,Xt,ue,we,Le;const Re=T.isCompressedTexture?T.mipmaps[yt]:T.image;if(j!==null)It=j.max.x-j.min.x,Gt=j.max.y-j.min.y,Ot=j.isBox3?j.max.z-j.min.z:1,$t=j.min.x,Jt=j.min.y,Xt=j.isBox3?j.min.z:0;else{const hn=Math.pow(2,-V);It=Math.floor(Re.width*hn),Gt=Math.floor(Re.height*hn),T.isDataArrayTexture?Ot=Re.depth:T.isData3DTexture?Ot=Math.floor(Re.depth*hn):Ot=1,$t=0,Jt=0,Xt=0}J!==null?(ue=J.x,we=J.y,Le=J.z):(ue=0,we=0,Le=0);const Te=wt.convert(z.format),qt=wt.convert(z.type);let Pe;z.isData3DTexture?(Nt.setTexture3D(z,0),Pe=E.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Nt.setTexture2DArray(z,0),Pe=E.TEXTURE_2D_ARRAY):(Nt.setTexture2D(z,0),Pe=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,z.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,z.unpackAlignment);const me=E.getParameter(E.UNPACK_ROW_LENGTH),on=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Ti=E.getParameter(E.UNPACK_SKIP_PIXELS),rn=E.getParameter(E.UNPACK_SKIP_ROWS),ss=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Re.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Re.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,$t),E.pixelStorei(E.UNPACK_SKIP_ROWS,Jt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Xt);const Ce=T.isDataArrayTexture||T.isData3DTexture,ln=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const hn=et.get(T),$e=et.get(z),Qe=et.get(hn.__renderTarget),Lo=et.get($e.__renderTarget);Z.bindFramebuffer(E.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Z.bindFramebuffer(E.DRAW_FRAMEBUFFER,Lo.__webglFramebuffer);for(let ai=0;ai<Ot;ai++)Ce&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,et.get(T).__webglTexture,V,Xt+ai),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,et.get(z).__webglTexture,yt,Le+ai)),E.blitFramebuffer($t,Jt,It,Gt,ue,we,It,Gt,E.DEPTH_BUFFER_BIT,E.NEAREST);Z.bindFramebuffer(E.READ_FRAMEBUFFER,null),Z.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||et.has(T)){const hn=et.get(T),$e=et.get(z);Z.bindFramebuffer(E.READ_FRAMEBUFFER,Ie),Z.bindFramebuffer(E.DRAW_FRAMEBUFFER,Xe);for(let Qe=0;Qe<Ot;Qe++)Ce?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,hn.__webglTexture,V,Xt+Qe):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,hn.__webglTexture,V),ln?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,$e.__webglTexture,yt,Le+Qe):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,$e.__webglTexture,yt),V!==0?E.blitFramebuffer($t,Jt,It,Gt,ue,we,It,Gt,E.COLOR_BUFFER_BIT,E.NEAREST):ln?E.copyTexSubImage3D(Pe,yt,ue,we,Le+Qe,$t,Jt,It,Gt):E.copyTexSubImage2D(Pe,yt,ue,we,$t,Jt,It,Gt);Z.bindFramebuffer(E.READ_FRAMEBUFFER,null),Z.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else ln?T.isDataTexture||T.isData3DTexture?E.texSubImage3D(Pe,yt,ue,we,Le,It,Gt,Ot,Te,qt,Re.data):z.isCompressedArrayTexture?E.compressedTexSubImage3D(Pe,yt,ue,we,Le,It,Gt,Ot,Te,Re.data):E.texSubImage3D(Pe,yt,ue,we,Le,It,Gt,Ot,Te,qt,Re):T.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,yt,ue,we,It,Gt,Te,qt,Re.data):T.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,yt,ue,we,Re.width,Re.height,Te,Re.data):E.texSubImage2D(E.TEXTURE_2D,yt,ue,we,It,Gt,Te,qt,Re);E.pixelStorei(E.UNPACK_ROW_LENGTH,me),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,on),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ti),E.pixelStorei(E.UNPACK_SKIP_ROWS,rn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ss),yt===0&&z.generateMipmaps&&E.generateMipmap(Pe),Z.unbindTexture()},this.copyTextureToTexture3D=function(T,z,j=null,J=null,V=0){return Yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,j,J,V)},this.initRenderTarget=function(T){et.get(T).__webglFramebuffer===void 0&&Nt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Nt.setTextureCube(T,0):T.isData3DTexture?Nt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Nt.setTexture2DArray(T,0):Nt.setTexture2D(T,0),Z.unbindTexture()},this.resetState=function(){b=0,R=0,D=null,Z.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}const Zc={type:"change"},Ia={type:"start"},Gl={type:"end"},uo=new Ls,jc=new Qn,F0=Math.cos(70*Lh.DEG2RAD),Fe=new A,en=2*Math.PI,Se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_r=1e-6;class Hl extends Ju{constructor(t,e=null){super(t,e),this.state=Se.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new vi,this._lastTargetPosition=new A,this._quat=new vi().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yc,this._sphericalDelta=new yc,this._scale=1,this._panOffset=new A,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new A,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=z0.bind(this),this._onPointerDown=O0.bind(this),this._onPointerUp=B0.bind(this),this._onContextMenu=Y0.bind(this),this._onMouseWheel=k0.bind(this),this._onKeyDown=V0.bind(this),this._onTouchStart=W0.bind(this),this._onTouchMove=X0.bind(this),this._onMouseDown=G0.bind(this),this._onMouseMove=H0.bind(this),this._interceptControlDown=q0.bind(this),this._interceptControlUp=Z0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zc),this.update(),this.state=Se.NONE}update(t=null){const e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===Se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=en:n>Math.PI&&(n-=en),i<-Math.PI?i+=en:i>Math.PI&&(i-=en),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Fe.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(uo.origin.copy(this.object.position),uo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uo.direction))<F0?this.object.lookAt(this.target):(jc.setFromNormalAndCoplanarPoint(this.object.up,this.target),uo.intersectPlane(jc,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>_r||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_r||this._lastTargetPosition.distanceToSquared(this.target)>_r?(this.dispatchEvent(Zc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Fe.copy(i).sub(this.target);let o=Fe.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(i,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function O0(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function z0(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function B0(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gl),this.state=Se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function G0(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Se.DOLLY;break;case Wi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Se.ROTATE}break;case Wi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Se.PAN}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(Ia)}function H0(s){switch(this.state){case Se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function k0(s){this.enabled===!1||this.enableZoom===!1||this.state!==Se.NONE||(s.preventDefault(),this.dispatchEvent(Ia),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Gl))}function V0(s){this.enabled!==!1&&this._handleKeyDown(s)}function W0(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Se.TOUCH_ROTATE;break;case ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Se.TOUCH_PAN;break;default:this.state=Se.NONE}break;case 2:switch(this.touches.TWO){case ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Se.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Se.TOUCH_DOLLY_ROTATE;break;default:this.state=Se.NONE}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(Ia)}function X0(s){switch(this._trackPointer(s),this.state){case Se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Se.NONE}}function Y0(s){this.enabled!==!1&&s.preventDefault()}function q0(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z0(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Mo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Is{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const j0=new Pa(-1,1,1,-1,0,1);class K0 extends Yt{constructor(){super(),this.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new de([0,2,0,0,2,0],2))}}const $0=new K0;class kl{constructor(t){this._mesh=new Q($0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,j0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class J0 extends Is{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof sn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Eo.clone(t.uniforms),this.material=new sn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new kl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Kc extends Is{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class Q0 extends Is{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class tg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Mt);this._width=n.width,this._height=n.height,e=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new J0(Mo),this.copyPass.material.blending=kn,this.clock=new $u}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kc!==void 0&&(r instanceof Kc?n=!0:r instanceof Q0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class eg extends Is{constructor(t,e,n=null,i=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ne}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const ng={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class es extends Is{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Mt(t.x,t.y):new Mt(256,256),this.clearColor=new ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(o,r,{type:Vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new wn(o,r,{type:Vn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new wn(o,r,{type:Vn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),r=Math.round(r/2)}const a=ng;this.highPassUniforms=Eo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Mt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Eo.clone(Mo.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader,blending:Mr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ne,this._oldClearAlpha=1,this._basic=new Ht,this._fsQuad=new kl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new Mt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,o){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=es.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=es.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=r}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new sn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Mt(.5,.5)},direction:{value:new Mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new sn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}es.BlurDirectionX=new Mt(1,0);es.BlurDirectionY=new Mt(0,1);function ig(s){for(;s.firstChild;)s.removeChild(s.firstChild);const t=new vl;t.background=new ne(16777215);const e=new Da(16777215,1.5);t.add(e);const n=new nn(70,s.offsetWidth/s.offsetHeight,.1,100);n.position.set(0,2,8);const i=new Bl({antialias:!0});i.setSize(s.offsetWidth,s.offsetHeight),s.appendChild(i.domElement);const o=new Hl(n,i.domElement);o.target.set(0,2,0),o.update();function r(){n.aspect=s.offsetWidth/s.offsetHeight,n.updateProjectionMatrix(),i.setSize(s.offsetWidth,s.offsetHeight)}r(),window.addEventListener("resize",r);const a=12,c=10,l=new te(a,a,c,48,1,!0),h=new zt({color:16777215,side:Ve}),u=new Q(l,h);t.add(u);const d=new ve(a,48,24,0,Math.PI*2,0,Math.PI/2),m=new zt({color:16777215,side:Ve}),g=new Q(d,m);g.position.y=c/2,t.add(g);const w=a*2,p=32,f=new xe;for(let jt=-p/2;jt<=p/2;jt++){const fe=jt/(p/2)*a,ae=[];for(let le=-a;le<=a;le+=w/p)fe*fe+le*le<=a*a&&ae.push(new A(fe,.01,le));if(ae.length>1){const le=new Yt().setFromPoints(ae),Ie=new Ut({color:0}),Xe=new _e(le,Ie);f.add(Xe)}const Ne=[];for(let le=-a;le<=a;le+=w/p)fe*fe+le*le<=a*a&&Ne.push(new A(le,.01,fe));if(Ne.length>1){const le=new Yt().setFromPoints(Ne),Ie=new Ut({color:0}),Xe=new _e(le,Ie);f.add(Xe)}}t.add(f);const x=new ze(a,128),v=new zt({color:16777215}),M=new Q(x,v);M.rotation.x=-Math.PI/2,t.add(M);const P=a-.05,b=3.5,R=2*Math.PI/3,D=64,y=new te(P,P,b,D,1,!0,-R/2,R),L=new Yu().load("/city-panorama.png");L.minFilter=xn,L.wrapS=Bn,L.wrapT=Bn;const N=new Ht({map:L,side:Ve}),X=new Q(y,N);X.position.y=2.25,t.add(X);const K=3.5,q=4.5,B=K/2,W=new ba;W.moveTo(-K/2,0),W.lineTo(-K/2,q),W.absarc(0,q,B,Math.PI,0,!0),W.lineTo(K/2,0),W.lineTo(-K/2,0);const Y=new Cs(W),pt=new Ht({color:0}),ct=new Q(Y,pt);ct.geometry.translate(0,-q/2,0),ct.position.set(0,0,-11.94),t.add(ct);const Et=[],Pt=[1.02,1.05,1.08,1.12,1.16],ut=[.9,.6,.4,.2,.1];for(let jt=0;jt<Pt.length;jt++){const ee=new Cs(W),fe=new Ht({color:16777215,emissive:16777215,emissiveIntensity:3,transparent:!0,opacity:0}),ae=new Q(ee,fe);ae.geometry.translate(0,-q/2,0),ae.position.set(0,0,-(P-.02-jt*.01)),ae.scale.set(Pt[jt],Pt[jt],1),t.add(ae),Et.push({mesh:ae,targetOpacity:ut[jt]})}const G=new Po,at=new Mt;i.domElement.addEventListener("pointermove",jt=>{const ee=i.domElement.getBoundingClientRect(),fe=(jt.clientX-ee.left)/ee.width*2-1,ae=-((jt.clientY-ee.top)/ee.height)*2+1;at.set(fe,ae),G.setFromCamera(at,n),G.intersectObject(ct).length>0?(Et.forEach(le=>{le.mesh.material.opacity=le.targetOpacity}),i.domElement.style.cursor="pointer"):(Et.forEach(le=>{le.mesh.material.opacity=0}),i.domElement.style.cursor="default")}),i.domElement.addEventListener("pointerdown",jt=>{const ee=i.domElement.getBoundingClientRect(),fe=(jt.clientX-ee.left)/ee.width*2-1,ae=-((jt.clientY-ee.top)/ee.height)*2+1;if(at.set(fe,ae),G.setFromCamera(at,n),G.intersectObject(ct).length>0){console.log("Door clicked! Opening about page..."),console.log("URL being opened:","https://www.3wshs.com");const le=window.open("https://www.3wshs.com","_blank");console.log("New window opened:",le)}});const mt=document.createElement("button");mt.textContent="Back to City",mt.style.position="absolute",mt.style.top="20px",mt.style.left="20px",mt.style.zIndex="10",mt.style.fontSize="1.2em",mt.style.padding="0.5em 1.2em",mt.style.background="#fff",mt.style.border="1px solid #333",mt.style.borderRadius="8px",mt.style.cursor="pointer",s.appendChild(mt);let dt=!1;mt.onclick=()=>{dt=!0,s.dispatchEvent(new CustomEvent("backToCity"))};function bt(){dt||(requestAnimationFrame(bt),o.update(),i.render(t,n))}bt();const Rt=2.2,Tt=.25,Vt=new te(Tt,Tt,Rt,48),Bt=new gc({color:2239034,metalness:1,roughness:.18,clearcoat:.5,reflectivity:.7}),gt=new Q(Vt,Bt);gt.position.set(0,Rt/2,0),t.add(gt);const E=[16777215,16777215,16777215],st=[Rt*.05,Rt*.5,Rt*.95];for(let jt=0;jt<3;jt++){const ee=new je(Tt*1.08,.035,16,48),fe=new Ht({color:E[jt]}),ae=new Q(ee,fe);ae.position.set(0,st[jt],0),ae.rotation.x=Math.PI/2,t.add(ae)}const $=new te(Tt*.22,Tt*.22,Rt*1.04,24),rt=new Ht({color:65535,transparent:!0,opacity:.7}),Z=new Q($,rt);Z.position.set(0,Rt/2,0),t.add(Z);const xt=.32,et=new ve(xt,32,32),Nt=new zt({color:16777215,emissive:16777215,emissiveIntensity:2,metalness:.5,roughness:.1}),Zt=new Q(et,Nt);Zt.position.set(0,Rt+xt+.15,0),t.add(Zt);const C=new Il(16777215,2,10,2);C.position.copy(Zt.position),t.add(C);let _=Zt.position.y;function I(){const jt=performance.now()*.001;Zt.position.y=_+Math.sin(jt*2)*.18,C.position.y=Zt.position.y,requestAnimationFrame(I)}I();const O=5,H=.08,F=[.38,.44,.5,.56,.62],ft=[.1,.18,-.12,.22,-.16],tt=[],lt=[];for(let jt=0;jt<O;jt++){const ee=new ve(H,16,16),fe=new zt({color:16777215,emissive:16777215,emissiveIntensity:1.2}),ae=new Q(ee,fe);t.add(ae),tt.push(ae);const Ne=new Yt().setFromPoints([new A(0,0,0),new A(0,0,0)]),le=new Ut({color:16777215}),Ie=new _e(Ne,le);t.add(Ie),lt.push(Ie)}function _t(){const jt=performance.now()*.001;for(let ee=0;ee<O;ee++){const fe=jt*(.7+.2*ee)+ee*(Math.PI*2/O),ae=F[ee%F.length],Ne=ft[ee%ft.length],le=Math.cos(fe)*ae,Ie=Rt+xt+.15+Ne,Xe=Math.sin(fe)*ae;tt[ee].position.set(le,Ie,Xe);const T=lt[ee].geometry.attributes.position.array;T[0]=0,T[1]=Rt+xt+.15,T[2]=0,T[3]=le,T[4]=Ie,T[5]=Xe,lt[ee].geometry.attributes.position.needsUpdate=!0}requestAnimationFrame(_t)}_t();const nt=600,vt=a*2.2,Ct=new Yt,Ft=[];for(let jt=0;jt<nt;jt++){const ee=Math.random()*2*Math.PI,fe=Math.acos(1-Math.random()),ae=vt*(.92+.08*Math.random()),Ne=Math.sin(fe)*Math.cos(ee)*ae,le=Math.abs(Math.cos(fe)*ae)+c*.2,Ie=Math.sin(fe)*Math.sin(ee)*ae;Ft.push(Ne,le,Ie)}Ct.setAttribute("position",new de(Ft,3));const wt=new Sa({color:16777215,size:.08}),kt=new Ml(Ct,wt);t.add(kt);const U=a,St=16,ht=32,Lt=new xe;for(let jt=1;jt<St/2;jt++){const ee=jt/(St/2)*(Math.PI/2),fe=Math.sin(ee)*U,ae=Math.cos(ee)*U+c/2,Ne=[];for(let Xe=0;Xe<=ht;Xe++){const T=Xe/ht*Math.PI*2,z=Math.cos(T)*fe,j=Math.sin(T)*fe;Ne.push(new A(z,ae,j))}const le=new Yt().setFromPoints(Ne),Ie=new _e(le,new Ut({color:16777215}));Lt.add(Ie)}for(let jt=0;jt<ht;jt++){const ee=jt/ht*Math.PI*2,fe=[];for(let le=0;le<=St/2;le++){const Ie=le/(St/2)*(Math.PI/2),Xe=Math.sin(Ie)*U,T=Math.cos(Ie)*U+c/2,z=Math.cos(ee)*Xe,j=Math.sin(ee)*Xe;fe.push(new A(z,T,j))}const ae=new Yt().setFromPoints(fe),Ne=new _e(ae,new Ut({color:16777215}));Lt.add(Ne)}t.add(Lt);const ot=new ve(a,48,24,0,Math.PI*2,0,Math.PI/2),it=new Ht({color:0,side:Ve}),At=new Q(ot,it);At.position.y=c/2,t.add(At);const he=Rt+xt+.15+xt+.08,Qt=c-he,Me=Tt,He=new te(Me,Me,Qt,48),yn=new gc({color:2239034,metalness:1,roughness:.18,clearcoat:.5,reflectivity:.7}),Sn=new Q(He,yn);Sn.position.set(0,c-Qt/2,0),t.add(Sn);for(let jt=0;jt<3;jt++){const ee=new je(Me*1.08,.035,16,48),fe=new Ht({color:16777215}),ae=new Q(ee,fe);ae.position.set(0,c-jt*(Qt/2),0),ae.rotation.x=Math.PI/2,t.add(ae)}const pn=new te(Me*.22,Me*.22,Qt*1.04,24),si=new Ht({color:65535,transparent:!0,opacity:.7}),oi=new Q(pn,si);oi.position.set(0,c-Qt/2,0),t.add(oi);function Ei(jt,ee,fe,ae){const Ie=ee-jt,Xe=new je(fe,.7/2,32,64,Ie),T=new Ht({color:16777215}),z=new Q(Xe,T);z.position.y=ae,z.rotation.x=Math.PI/2,z.rotation.z=jt+Ie/2,t.add(z)}const Xn=a-.45,Dn=R*1.18,ri=.38;return Ei(-Dn/2+ri,Dn/2+ri,Xn,.82),function(){dt=!0,window.removeEventListener("resize",r),i.domElement&&i.domElement.parentNode===s&&s.removeChild(i.domElement),mt&&mt.parentNode===s&&s.removeChild(mt)}}let En=null,fo=null,Hi=null,xr=[],k,Ae,Oe,Tn,fa=[],ti=null,xs=0,vs=null,Ms=null,pe=[],wo=[];window._mainTowerMeshes=[];window._mainTowerGroups=[];window._mainTowerMeshToGroup=new Map;function sg(s,t,e){const n=s.x,i=s.z-e/2-2.5,o=16,r=1.7,a=new te(r,r*.7,o,32,1,!0),c=new zt({color:16777215,emissive:16777215,emissiveIntensity:.7,metalness:.5,roughness:.3}),l=new Q(a,c);l.position.set(n,o/2,i),k.add(l);const h=new ce(a),u=new ie(h,new Ut({color:0,linewidth:2}));u.position.copy(l.position),k.add(u);const d=new je(r+.18,.13,12,32),m=new Ht({color:16777215}),g=new Q(d,m);g.position.set(n,o-1.2,i),g.rotation.x=Math.PI/2,k.add(g);const w=r*3.8,p=new ve(w,40,32,0,Math.PI*2,0,Math.PI/1.45),f=new zt({color:16777215,emissive:16777215,emissiveIntensity:1.2,transparent:!1,opacity:1,metalness:.7,roughness:.18}),x=new Q(p,f);x.position.set(n,o+w*.32,i),x.scale.y=.38,k.add(x);const v=w*.97,M=.22,P=new je(v,M,32,80),b=new Ht({color:0}),R=new Q(P,b);R.position.set(n,x.position.y+M*.5,i),R.rotation.x=Math.PI/2,k.add(R);const D=w*.93,y=.18,S=new je(D,y,32,80),L=new Ht({color:0}),N=new Q(S,L);N.position.set(n,x.position.y-w*.38+y*.5,i),N.rotation.x=Math.PI/2,k.add(N);const X=new je(w*.98,.13,16,48),K=new Ht({color:16777215,emissive:6750207,emissiveIntensity:2}),q=new Q(X,K);q.position.set(n,o+.1,i),q.rotation.x=Math.PI/2,k.add(q);const B=new xe,W=18,Y=w*.92;for(let Rt=0;Rt<W;Rt++){const Tt=Rt/W*Math.PI*2,Vt=Math.cos(Tt)*Y,Bt=Math.sin(Tt)*Y,gt=[new A(0,o+.13,0),new A(Vt,o+.13,Bt)],E=new Yt().setFromPoints(gt),st=new Ut({color:6750207}),$=new _e(E,st);B.add($)}B.position.set(n,0,i),k.add(B);const pt=new te(r,r*.7,o,16,1,!0),ct=new Ht({color:0,wireframe:!0}),Et=new Q(pt,ct);Et.position.set(n,o/2,i),k.add(Et);const Pt=document.createElement("canvas");Pt.width=256,Pt.height=64;const ut=Pt.getContext("2d");ut.fillStyle="#fff",ut.fillRect(0,0,Pt.width,Pt.height),ut.font="bold 36px sans-serif",ut.textAlign="center",ut.textBaseline="middle",ut.fillStyle="#000",ut.fillText("Main Tower",Pt.width/2,Pt.height/2);const G=new wl(Pt),at=new Ht({map:G,transparent:!0}),mt=new Si(3.5,.9),dt=new Q(mt,at);dt.position.set(n,o+w*.9+2.5,i),dt.userData.isLabel=!0,dt.userData.baseY=o+w*.9+2.5,k.add(dt),window._buildingLabels||(window._buildingLabels=[]),window._buildingLabels.push(dt),window._mainTowerMeshes.push(l);const bt=[l,g,Et,x,q,B];window._mainTowerGroups.push(bt);for(const Rt of bt)window._mainTowerMeshes.push(Rt),window._mainTowerMeshToGroup.set(Rt,bt)}function og(s,t,e){const n=[{x:-12,z:14,type:"cylinder",height:13,color:16777215,accent:"ring"},{x:16,z:-10,type:"box",height:11,color:16777215,accent:"grid"},{x:-18,z:-16,type:"cone",height:15,color:16777215,accent:"topSphere"},{x:18,z:18,type:"octa",height:10,color:16777215,accent:"wire"},{x:0,z:22,type:"multi",height:12,color:16777215,accent:"multi"}];for(const i of n){if(i.x>s.x-t/2&&i.x<s.x+t/2&&i.z>s.z-e/2&&i.z<s.z+e/2)continue;let o,r;if(i.type==="cylinder"){o=new Q(new te(1.1,1.1,i.height,24,1,!0),new zt({color:i.color,emissive:16777215,emissiveIntensity:.5,metalness:.4})),o.position.set(i.x,i.height/2,i.z);const R=new ce(o.geometry),D=new ie(R,new Ut({color:0,linewidth:2}));D.position.copy(o.position),k.add(D);let y=[o];if(window._mainTowerMeshes.push(o),window._mainTowerMeshToGroup.set(o,y),window._cylinderTowerGroup=y,i.accent==="ring"){const L=i.height-1.2,N=3,X=.6,K=1.3,q=[];for(let gt=0;gt<N;gt++){const E=new je(K,.13,12,32),st=new Ht({color:16777215}),$=new Q(E,st);$.userData.offset=(gt-1)*X,$.position.set(i.x,L+$.userData.offset,i.z),$.rotation.x=Math.PI/2,$.userData.ringMin=1.2,$.userData.ringMax=L,q.push($),k.add($)}window._cylinderRingMeshes=q;const B=i.height+.1,W=new te(1.35,1.35,.18,32),Y=new zt({color:16777215,emissive:16777215,emissiveIntensity:2,metalness:.7,roughness:.2}),pt=new Q(W,Y);pt.position.set(i.x,B,i.z),k.add(pt);const ct=2.2,Et=new te(.13,.22,ct,16),Pt=new zt({color:16777215,emissive:16777215,emissiveIntensity:1.5,metalness:.8,roughness:.2}),ut=new Q(Et,Pt);ut.position.set(i.x,B+ct/2+.09,i.z),k.add(ut);const G=new ve(.28,18,18),at=new zt({color:16777215,emissive:16777215,emissiveIntensity:2,metalness:.7,roughness:.2}),mt=new Q(G,at);mt.position.set(i.x,B+ct+.28,i.z),k.add(mt);const dt=new je(1.7,.06,16,48),bt=new Ht({color:16777215,wireframe:!0}),Rt=new Q(dt,bt);Rt.position.set(i.x,B+.45,i.z),k.add(Rt),window._cylinderGridRing=Rt;const Tt=new ve(1.35,24,16,0,Math.PI*2,0,Math.PI/2),Vt=new Ht({color:16777215,wireframe:!0,transparent:!0,opacity:.25}),Bt=new Q(Tt,Vt);Bt.position.set(i.x,B+.13,i.z),k.add(Bt),y.push(...q,pt,ut,mt,Rt,Bt);for(const gt of y)window._mainTowerMeshes.push(gt),window._mainTowerMeshToGroup.set(gt,y)}}else if(i.type==="box"){o=new Q(new te(1.8,1.8,i.height*.8,6,1,!1),new zt({color:16777215,transparent:!0,opacity:.8,metalness:.9,roughness:.1,emissive:16777215,emissiveIntensity:1.5})),o.position.set(i.x,i.height*.8/2,i.z),window._boxTowerMesh=o;const y=new xe,S=8,L=6,N=i.height*.8;for(let E=1;E<S;E++){const st=o.position.y-N/2+N*E/S,$=new ze(1.8,64),rt=new Ut({color:0}),Z=new Ze($,rt);Z.position.set(i.x,st,i.z),Z.rotation.x=Math.PI/2,y.add(Z)}for(let E=0;E<L;E++){const st=E/L*Math.PI*2,$=Math.cos(st)*1.8,rt=Math.sin(st)*1.8,Z=new Yt().setFromPoints([new A(i.x+$,o.position.y-N/2,i.z+rt),new A(i.x+$,o.position.y+N/2,i.z+rt)]),xt=new Ut({color:0}),et=new _e(Z,xt);et.userData.originalColor=16777215,y.add(et)}k.add(y);const X=new ce(o.geometry),K=new ie(X,new Ut({color:0,linewidth:2}));K.position.copy(o.position),k.add(K);const q=1.8*.7,B=i.height*.15,W=new Q(new te(q,q,B,6,1,!1),new zt({color:16777215,transparent:!0,opacity:.85,metalness:.9,roughness:.1,emissive:16777215,emissiveIntensity:2}));W.position.set(i.x,i.height*.8+B/2,i.z),k.add(W);const Y=new xe,pt=3,ct=6;for(let E=1;E<pt;E++){const st=W.position.y-B/2+B*E/pt,$=new ze(q,64),rt=new Ut({color:0}),Z=new Ze($,rt);Z.position.set(i.x,st,i.z),Z.rotation.x=Math.PI/2,Y.add(Z)}for(let E=0;E<ct;E++){const st=E/ct*Math.PI*2,$=Math.cos(st)*q,rt=Math.sin(st)*q,Z=new Yt().setFromPoints([new A(i.x+$,W.position.y-B/2,i.z+rt),new A(i.x+$,W.position.y+B/2,i.z+rt)]),xt=new Ut({color:0}),et=new _e(Z,xt);et.userData.originalColor=16777215,Y.add(et)}k.add(Y);const Et=new ce(W.geometry),Pt=new ie(Et,new Ut({color:0,linewidth:2}));Pt.position.copy(W.position),k.add(Pt);const ut=q*.8;i.height*.05;const G=new Q(new ve(ut,6*2,6,0,Math.PI*2,0,Math.PI/2),new zt({color:16777215,transparent:!0,opacity:.9,metalness:.95,roughness:.05,emissive:16777215,emissiveIntensity:2.5}));G.position.set(i.x,i.height*.8+B+ut,i.z),k.add(G);const at=new xe,mt=4,dt=6*2;for(let E=1;E<mt;E++){const st=E/mt*(Math.PI/2),$=Math.sin(st)*ut,rt=Math.cos(st)*ut+G.position.y-ut,Z=new ze($,64),xt=new Ut({color:0}),et=new Ze(Z,xt);et.position.set(i.x,rt,i.z),et.rotation.x=Math.PI/2,at.add(et)}for(let E=0;E<dt;E++){const st=E/dt*Math.PI*2,$=[];for(let et=0;et<=16;et++){const Nt=et/16*(Math.PI/2),Zt=Math.sin(Nt)*ut,C=Math.cos(Nt)*ut+G.position.y-ut,_=Math.cos(st)*Zt,I=Math.sin(st)*Zt;$.push(new A(i.x+_,C,i.z+I))}const rt=new Yt().setFromPoints($),Z=new Ut({color:0}),xt=new _e(rt,Z);xt.userData.originalColor=16777215,at.add(xt)}k.add(at);const bt=new ce(G.geometry),Rt=new ie(bt,new Ut({color:0,linewidth:2}));Rt.position.copy(G.position),k.add(Rt);const Tt=1.5,Vt=new Q(new te(.05,.05,Tt,8,1,!1),new zt({color:16777215,emissive:16777215,emissiveIntensity:2.5,metalness:.8,roughness:.2}));Vt.position.set(i.x,i.height*.8+B+ut+Tt/2,i.z),k.add(Vt);const Bt=new Q(new ve(.08,8,8),new zt({color:65535,emissive:65535,emissiveIntensity:3.5,metalness:.9,roughness:.1}));if(Bt.position.set(i.x,i.height*.8+B+ut+Tt+.08,i.z),k.add(Bt),window._glassTowerMeshes=[o,W,G,Vt,Bt],i.accent==="grid"){const st=new je(.3,.06,6,24),$=new Ht({color:16777215,emissive:16777215,emissiveIntensity:4});r=new Q(st,$),r.position.set(i.x,i.height*.8+i.height*.15+1.8+1.5+.16+.3,i.z),r.rotation.x=Math.PI/2,r.userData.rotationSpeed=.03,k.add(r)}let gt=[o,W,G,Vt,Bt];typeof disc<"u"&&disc.isMesh&&gt.push(disc),typeof spire<"u"&&spire.isMesh&&gt.push(spire),typeof sphere<"u"&&sphere.isMesh&&gt.push(sphere),typeof gridRing<"u"&&gridRing.isMesh&&gt.push(gridRing),typeof dome<"u"&&dome.isMesh&&gt.push(dome);for(const E of gt)window._mainTowerMeshes.push(E),window._mainTowerMeshToGroup.set(E,gt)}else if(i.type==="box"){o=new Q(new te(1.8,1.8,i.height*.8,6,1,!1),new zt({color:16777215,transparent:!0,opacity:.8,metalness:.9,roughness:.1,emissive:16777215,emissiveIntensity:1.5})),o.position.set(i.x,i.height*.8/2,i.z),window._boxTowerMesh=o;const y=new xe,S=8,L=6,N=i.height*.8;for(let E=1;E<S;E++){const st=o.position.y-N/2+N*E/S,$=new ze(1.8,64),rt=new Ut({color:0}),Z=new Ze($,rt);Z.position.set(i.x,st,i.z),Z.rotation.x=Math.PI/2,y.add(Z)}for(let E=0;E<L;E++){const st=E/L*Math.PI*2,$=Math.cos(st)*1.8,rt=Math.sin(st)*1.8,Z=new Yt().setFromPoints([new A(i.x+$,o.position.y-N/2,i.z+rt),new A(i.x+$,o.position.y+N/2,i.z+rt)]),xt=new Ut({color:0}),et=new _e(Z,xt);et.userData.originalColor=16777215,y.add(et)}k.add(y);const X=new ce(o.geometry),K=new ie(X,new Ut({color:0,linewidth:2}));K.position.copy(o.position),k.add(K);const q=1.8*.7,B=i.height*.15,W=new Q(new te(q,q,B,6,1,!1),new zt({color:16777215,transparent:!0,opacity:.85,metalness:.9,roughness:.1,emissive:16777215,emissiveIntensity:2}));W.position.set(i.x,i.height*.8+B/2,i.z),k.add(W);const Y=new xe,pt=3,ct=6;for(let E=1;E<pt;E++){const st=W.position.y-B/2+B*E/pt,$=new ze(q,64),rt=new Ut({color:0}),Z=new Ze($,rt);Z.position.set(i.x,st,i.z),Z.rotation.x=Math.PI/2,Y.add(Z)}for(let E=0;E<ct;E++){const st=E/ct*Math.PI*2,$=Math.cos(st)*q,rt=Math.sin(st)*q,Z=new Yt().setFromPoints([new A(i.x+$,W.position.y-B/2,i.z+rt),new A(i.x+$,W.position.y+B/2,i.z+rt)]),xt=new Ut({color:0}),et=new _e(Z,xt);et.userData.originalColor=16777215,Y.add(et)}k.add(Y);const Et=new ce(W.geometry),Pt=new ie(Et,new Ut({color:0,linewidth:2}));Pt.position.copy(W.position),k.add(Pt);const ut=q*.8;i.height*.05;const G=new Q(new ve(ut,6*2,6,0,Math.PI*2,0,Math.PI/2),new zt({color:16777215,transparent:!0,opacity:.9,metalness:.95,roughness:.05,emissive:16777215,emissiveIntensity:2.5}));G.position.set(i.x,i.height*.8+B+ut,i.z),k.add(G);const at=new xe,mt=4,dt=6*2;for(let E=1;E<mt;E++){const st=E/mt*(Math.PI/2),$=Math.sin(st)*ut,rt=Math.cos(st)*ut+G.position.y-ut,Z=new ze($,64),xt=new Ut({color:0}),et=new Ze(Z,xt);et.position.set(i.x,rt,i.z),et.rotation.x=Math.PI/2,at.add(et)}for(let E=0;E<dt;E++){const st=E/dt*Math.PI*2,$=[];for(let et=0;et<=16;et++){const Nt=et/16*(Math.PI/2),Zt=Math.sin(Nt)*ut,C=Math.cos(Nt)*ut+G.position.y-ut,_=Math.cos(st)*Zt,I=Math.sin(st)*Zt;$.push(new A(i.x+_,C,i.z+I))}const rt=new Yt().setFromPoints($),Z=new Ut({color:0}),xt=new _e(rt,Z);xt.userData.originalColor=16777215,at.add(xt)}k.add(at);const bt=new ce(G.geometry),Rt=new ie(bt,new Ut({color:0,linewidth:2}));Rt.position.copy(G.position),k.add(Rt);const Tt=1.5,Vt=new Q(new te(.05,.05,Tt,8,1,!1),new zt({color:16777215,emissive:16777215,emissiveIntensity:2.5,metalness:.8,roughness:.2}));Vt.position.set(i.x,i.height*.8+B+ut+Tt/2,i.z),k.add(Vt);const Bt=new Q(new ve(.08,8,8),new zt({color:65535,emissive:65535,emissiveIntensity:3.5,metalness:.9,roughness:.1}));if(Bt.position.set(i.x,i.height*.8+B+ut+Tt+.08,i.z),k.add(Bt),window._glassTowerMeshes=[o,W,G,Vt,Bt],i.accent==="grid"){const st=new je(.3,.06,6,24),$=new Ht({color:16777215,emissive:16777215,emissiveIntensity:4});r=new Q(st,$),r.position.set(i.x,i.height*.8+i.height*.15+1.8+1.5+.16+.3,i.z),r.rotation.x=Math.PI/2,r.userData.rotationSpeed=.03,k.add(r)}let gt=[o,W,G,Vt,Bt];typeof disc<"u"&&disc.isMesh&&gt.push(disc),typeof spire<"u"&&spire.isMesh&&gt.push(spire),typeof sphere<"u"&&sphere.isMesh&&gt.push(sphere),typeof gridRing<"u"&&gridRing.isMesh&&gt.push(gridRing),typeof dome<"u"&&dome.isMesh&&gt.push(dome);for(const E of gt)window._mainTowerMeshes.push(E),window._mainTowerMeshToGroup.set(E,gt)}else if(i.type==="box"){o=new Q(new te(1.8,1.8,i.height*.8,6,1,!1),new zt({color:16777215,transparent:!0,opacity:.8,metalness:.9,roughness:.1,emissive:16777215,emissiveIntensity:1.5})),o.position.set(i.x,i.height*.8/2,i.z),window._boxTowerMesh=o;const y=new xe,S=8,L=6,N=i.height*.8;for(let E=1;E<S;E++){const st=o.position.y-N/2+N*E/S,$=new ze(1.8,64),rt=new Ut({color:0}),Z=new Ze($,rt);Z.position.set(i.x,st,i.z),Z.rotation.x=Math.PI/2,y.add(Z)}for(let E=0;E<L;E++){const st=E/L*Math.PI*2,$=Math.cos(st)*1.8,rt=Math.sin(st)*1.8,Z=new Yt().setFromPoints([new A(i.x+$,o.position.y-N/2,i.z+rt),new A(i.x+$,o.position.y+N/2,i.z+rt)]),xt=new Ut({color:0}),et=new _e(Z,xt);et.userData.originalColor=16777215,y.add(et)}k.add(y);const X=new ce(o.geometry),K=new ie(X,new Ut({color:0,linewidth:2}));K.position.copy(o.position),k.add(K);const q=1.8*.7,B=i.height*.15,W=new Q(new te(q,q,B,6,1,!1),new zt({color:16777215,transparent:!0,opacity:.85,metalness:.9,roughness:.1,emissive:16777215,emissiveIntensity:2}));W.position.set(i.x,i.height*.8+B/2,i.z),k.add(W);const Y=new xe,pt=3,ct=6;for(let E=1;E<pt;E++){const st=W.position.y-B/2+B*E/pt,$=new ze(q,64),rt=new Ut({color:0}),Z=new Ze($,rt);Z.position.set(i.x,st,i.z),Z.rotation.x=Math.PI/2,Y.add(Z)}for(let E=0;E<ct;E++){const st=E/ct*Math.PI*2,$=Math.cos(st)*q,rt=Math.sin(st)*q,Z=new Yt().setFromPoints([new A(i.x+$,W.position.y-B/2,i.z+rt),new A(i.x+$,W.position.y+B/2,i.z+rt)]),xt=new Ut({color:0}),et=new _e(Z,xt);et.userData.originalColor=16777215,Y.add(et)}k.add(Y);const Et=new ce(W.geometry),Pt=new ie(Et,new Ut({color:0,linewidth:2}));Pt.position.copy(W.position),k.add(Pt);const ut=q*.8;i.height*.05;const G=new Q(new ve(ut,6*2,6,0,Math.PI*2,0,Math.PI/2),new zt({color:16777215,transparent:!0,opacity:.9,metalness:.95,roughness:.05,emissive:16777215,emissiveIntensity:2.5}));G.position.set(i.x,i.height*.8+B+ut,i.z),k.add(G);const at=new xe,mt=4,dt=6*2;for(let E=1;E<mt;E++){const st=E/mt*(Math.PI/2),$=Math.sin(st)*ut,rt=Math.cos(st)*ut+G.position.y-ut,Z=new ze($,64),xt=new Ut({color:0}),et=new Ze(Z,xt);et.position.set(i.x,rt,i.z),et.rotation.x=Math.PI/2,at.add(et)}for(let E=0;E<dt;E++){const st=E/dt*Math.PI*2,$=[];for(let et=0;et<=16;et++){const Nt=et/16*(Math.PI/2),Zt=Math.sin(Nt)*ut,C=Math.cos(Nt)*ut+G.position.y-ut,_=Math.cos(st)*Zt,I=Math.sin(st)*Zt;$.push(new A(i.x+_,C,i.z+I))}const rt=new Yt().setFromPoints($),Z=new Ut({color:0}),xt=new _e(rt,Z);xt.userData.originalColor=16777215,at.add(xt)}k.add(at);const bt=new ce(G.geometry),Rt=new ie(bt,new Ut({color:0,linewidth:2}));Rt.position.copy(G.position),k.add(Rt);const Tt=1.5,Vt=new Q(new te(.05,.05,Tt,8,1,!1),new zt({color:16777215,emissive:16777215,emissiveIntensity:2.5,metalness:.8,roughness:.2}));Vt.position.set(i.x,i.height*.8+B+ut+Tt/2,i.z),k.add(Vt);const Bt=new Q(new ve(.08,8,8),new zt({color:65535,emissive:65535,emissiveIntensity:3.5,metalness:.9,roughness:.1}));if(Bt.position.set(i.x,i.height*.8+B+ut+Tt+.08,i.z),k.add(Bt),window._glassTowerMeshes=[o,W,G,Vt,Bt],i.accent==="grid"){const st=new je(.3,.06,6,24),$=new Ht({color:16777215,emissive:16777215,emissiveIntensity:4});r=new Q(st,$),r.position.set(i.x,i.height*.8+i.height*.15+1.8+1.5+.16+.3,i.z),r.rotation.x=Math.PI/2,r.userData.rotationSpeed=.03,k.add(r)}let gt=[o,W,G,Vt,Bt];typeof disc<"u"&&disc.isMesh&&gt.push(disc),typeof spire<"u"&&spire.isMesh&&gt.push(spire),typeof sphere<"u"&&sphere.isMesh&&gt.push(sphere),typeof gridRing<"u"&&gridRing.isMesh&&gt.push(gridRing),typeof dome<"u"&&dome.isMesh&&gt.push(dome);for(const E of gt)window._mainTowerMeshes.push(E),window._mainTowerMeshToGroup.set(E,gt)}else if(i.type==="box"){o=new Q(new te(1.8,1.8,i.height*.8,6,1,!1),new zt({color:16777215,transparent:!0,opacity:.8,metalness:.9,roughness:.1,emissive:16777215,emissiveIntensity:1.5})),o.position.set(i.x,i.height*.8/2,i.z),window._boxTowerMesh=o;const y=new xe,S=8,L=6,N=i.height*.8;for(let E=1;E<S;E++){const st=o.position.y-N/2+N*E/S,$=new ze(1.8,64),rt=new Ut({color:0}),Z=new Ze($,rt);Z.position.set(i.x,st,i.z),Z.rotation.x=Math.PI/2,y.add(Z)}for(let E=0;E<L;E++){const st=E/L*Math.PI*2,$=Math.cos(st)*1.8,rt=Math.sin(st)*1.8,Z=new Yt().setFromPoints([new A(i.x+$,o.position.y-N/2,i.z+rt),new A(i.x+$,o.position.y+N/2,i.z+rt)]),xt=new Ut({color:0}),et=new _e(Z,xt);et.userData.originalColor=16777215,y.add(et)}k.add(y);const X=new ce(o.geometry),K=new ie(X,new Ut({color:0,linewidth:2}));K.position.copy(o.position),k.add(K);const q=1.8*.7,B=i.height*.15,W=new Q(new te(q,q,B,6,1,!1),new zt({color:16777215,transparent:!0,opacity:.85,metalness:.9,roughness:.1,emissive:16777215,emissiveIntensity:2}));W.position.set(i.x,i.height*.8+B/2,i.z),k.add(W);const Y=new xe,pt=3,ct=6;for(let E=1;E<pt;E++){const st=W.position.y-B/2+B*E/pt,$=new ze(q,64),rt=new Ut({color:0}),Z=new Ze($,rt);Z.position.set(i.x,st,i.z),Z.rotation.x=Math.PI/2,Y.add(Z)}for(let E=0;E<ct;E++){const st=E/ct*Math.PI*2,$=Math.cos(st)*q,rt=Math.sin(st)*q,Z=new Yt().setFromPoints([new A(i.x+$,W.position.y-B/2,i.z+rt),new A(i.x+$,W.position.y+B/2,i.z+rt)]),xt=new Ut({color:0}),et=new _e(Z,xt);et.userData.originalColor=16777215,Y.add(et)}k.add(Y);const Et=new ce(W.geometry),Pt=new ie(Et,new Ut({color:0,linewidth:2}));Pt.position.copy(W.position),k.add(Pt);const ut=q*.8;i.height*.05;const G=new Q(new ve(ut,6*2,6,0,Math.PI*2,0,Math.PI/2),new zt({color:16777215,transparent:!0,opacity:.9,metalness:.95,roughness:.05,emissive:16777215,emissiveIntensity:2.5}));G.position.set(i.x,i.height*.8+B+ut,i.z),k.add(G);const at=new xe,mt=4,dt=6*2;for(let E=1;E<mt;E++){const st=E/mt*(Math.PI/2),$=Math.sin(st)*ut,rt=Math.cos(st)*ut+G.position.y-ut,Z=new ze($,64),xt=new Ut({color:0}),et=new Ze(Z,xt);et.position.set(i.x,rt,i.z),et.rotation.x=Math.PI/2,at.add(et)}for(let E=0;E<dt;E++){const st=E/dt*Math.PI*2,$=[];for(let et=0;et<=16;et++){const Nt=et/16*(Math.PI/2),Zt=Math.sin(Nt)*ut,C=Math.cos(Nt)*ut+G.position.y-ut,_=Math.cos(st)*Zt,I=Math.sin(st)*Zt;$.push(new A(i.x+_,C,i.z+I))}const rt=new Yt().setFromPoints($),Z=new Ut({color:0}),xt=new _e(rt,Z);xt.userData.originalColor=16777215,at.add(xt)}k.add(at);const bt=new ce(G.geometry),Rt=new ie(bt,new Ut({color:0,linewidth:2}));Rt.position.copy(G.position),k.add(Rt);const Tt=1.5,Vt=new Q(new te(.05,.05,Tt,8,1,!1),new zt({color:16777215,emissive:16777215,emissiveIntensity:2.5,metalness:.8,roughness:.2}));Vt.position.set(i.x,i.height*.8+B+ut+Tt/2,i.z),k.add(Vt);const Bt=new Q(new ve(.08,8,8),new zt({color:65535,emissive:65535,emissiveIntensity:3.5,metalness:.9,roughness:.1}));if(Bt.position.set(i.x,i.height*.8+B+ut+Tt+.08,i.z),k.add(Bt),window._glassTowerMeshes=[o,W,G,Vt,Bt],i.accent==="grid"){const st=new je(.3,.06,6,24),$=new Ht({color:16777215,emissive:16777215,emissiveIntensity:4});r=new Q(st,$),r.position.set(i.x,i.height*.8+i.height*.15+1.8+1.5+.16+.3,i.z),r.rotation.x=Math.PI/2,r.userData.rotationSpeed=.03,k.add(r)}let gt=[o,W,G,Vt,Bt];typeof disc<"u"&&disc.isMesh&&gt.push(disc),typeof spire<"u"&&spire.isMesh&&gt.push(spire),typeof sphere<"u"&&sphere.isMesh&&gt.push(sphere),typeof gridRing<"u"&&gridRing.isMesh&&gt.push(gridRing),typeof dome<"u"&&dome.isMesh&&gt.push(dome);for(const E of gt)window._mainTowerMeshes.push(E),window._mainTowerMeshToGroup.set(E,gt)}else if(i.type==="box"){o=new Q(new te(1.8,1.8,i.height*.8,6,1,!1),new zt({color:16777215,transparent:!0,opacity:.8,metalness:.9,roughness:.1,emissive:16777215,emissiveIntensity:1.5})),o.position.set(i.x,i.height*.8/2,i.z),window._boxTowerMesh=o;const y=new xe,S=8,L=6,N=i.height*.8;for(let E=1;E<S;E++){const st=o.position.y-N/2+N*E/S,$=new ze(1.8,64),rt=new Ut({color:0}),Z=new Ze($,rt);Z.position.set(i.x,st,i.z),Z.rotation.x=Math.PI/2,y.add(Z)}for(let E=0;E<L;E++){const st=E/L*Math.PI*2,$=Math.cos(st)*1.8,rt=Math.sin(st)*1.8,Z=new Yt().setFromPoints([new A(i.x+$,o.position.y-N/2,i.z+rt),new A(i.x+$,o.position.y+N/2,i.z+rt)]),xt=new Ut({color:0}),et=new _e(Z,xt);et.userData.originalColor=16777215,y.add(et)}k.add(y);const X=new ce(o.geometry),K=new ie(X,new Ut({color:0,linewidth:2}));K.position.copy(o.position),k.add(K);const q=1.8*.7,B=i.height*.15,W=new Q(new te(q,q,B,6,1,!1),new zt({color:16777215,transparent:!0,opacity:.85,metalness:.9,roughness:.1,emissive:16777215,emissiveIntensity:2}));W.position.set(i.x,i.height*.8+B/2,i.z),k.add(W);const Y=new xe,pt=3,ct=6;for(let E=1;E<pt;E++){const st=W.position.y-B/2+B*E/pt,$=new ze(q,64),rt=new Ut({color:0}),Z=new Ze($,rt);Z.position.set(i.x,st,i.z),Z.rotation.x=Math.PI/2,Y.add(Z)}for(let E=0;E<ct;E++){const st=E/ct*Math.PI*2,$=Math.cos(st)*q,rt=Math.sin(st)*q,Z=new Yt().setFromPoints([new A(i.x+$,W.position.y-B/2,i.z+rt),new A(i.x+$,W.position.y+B/2,i.z+rt)]),xt=new Ut({color:0}),et=new _e(Z,xt);et.userData.originalColor=16777215,Y.add(et)}k.add(Y);const Et=new ce(W.geometry),Pt=new ie(Et,new Ut({color:0,linewidth:2}));Pt.position.copy(W.position),k.add(Pt);const ut=q*.8;i.height*.05;const G=new Q(new ve(ut,6*2,6,0,Math.PI*2,0,Math.PI/2),new zt({color:16777215,transparent:!0,opacity:.9,metalness:.95,roughness:.05,emissive:16777215,emissiveIntensity:2.5}));G.position.set(i.x,i.height*.8+B+ut,i.z),k.add(G);const at=new xe,mt=4,dt=6*2;for(let E=1;E<mt;E++){const st=E/mt*(Math.PI/2),$=Math.sin(st)*ut,rt=Math.cos(st)*ut+G.position.y-ut,Z=new ze($,64),xt=new Ut({color:0}),et=new Ze(Z,xt);et.position.set(i.x,rt,i.z),et.rotation.x=Math.PI/2,at.add(et)}for(let E=0;E<dt;E++){const st=E/dt*Math.PI*2,$=[];for(let et=0;et<=16;et++){const Nt=et/16*(Math.PI/2),Zt=Math.sin(Nt)*ut,C=Math.cos(Nt)*ut+G.position.y-ut,_=Math.cos(st)*Zt,I=Math.sin(st)*Zt;$.push(new A(i.x+_,C,i.z+I))}const rt=new Yt().setFromPoints($),Z=new Ut({color:0}),xt=new _e(rt,Z);xt.userData.originalColor=16777215,at.add(xt)}k.add(at);const bt=new ce(G.geometry),Rt=new ie(bt,new Ut({color:0,linewidth:2}));Rt.position.copy(G.position),k.add(Rt);const Tt=1.5,Vt=new Q(new te(.05,.05,Tt,8,1,!1),new zt({color:16777215,emissive:16777215,emissiveIntensity:2.5,metalness:.8,roughness:.2}));Vt.position.set(i.x,i.height*.8+B+ut+Tt/2,i.z),k.add(Vt);const Bt=new Q(new ve(.08,8,8),new zt({color:65535,emissive:65535,emissiveIntensity:3.5,metalness:.9,roughness:.1}));if(Bt.position.set(i.x,i.height*.8+B+ut+Tt+.08,i.z),k.add(Bt),window._glassTowerMeshes=[o,W,G,Vt,Bt],i.accent==="grid"){const st=new je(.3,.06,6,24),$=new Ht({color:16777215,emissive:16777215,emissiveIntensity:4});r=new Q(st,$),r.position.set(i.x,i.height*.8+i.height*.15+1.8+1.5+.16+.3,i.z),r.rotation.x=Math.PI/2,r.userData.rotationSpeed=.03,k.add(r)}let gt=[o,W,G,Vt,Bt];typeof disc<"u"&&disc.isMesh&&gt.push(disc),typeof spire<"u"&&spire.isMesh&&gt.push(spire),typeof sphere<"u"&&sphere.isMesh&&gt.push(sphere),typeof gridRing<"u"&&gridRing.isMesh&&gt.push(gridRing),typeof dome<"u"&&dome.isMesh&&gt.push(dome);for(const E of gt)window._mainTowerMeshes.push(E),window._mainTowerMeshToGroup.set(E,gt)}else if(i.type==="cone"){o=new Q(new Qi(1.3,i.height,18,1,!0),new zt({color:i.color,emissive:16777215,emissiveIntensity:.5,metalness:.5})),o.position.set(i.x,i.height/2,i.z);const R=new ce(o.geometry),D=new ie(R,new Ut({color:0,linewidth:2}));if(D.position.copy(o.position),k.add(D),i.accent==="topSphere"){const S=new ve(.7,16,16),L=new zt({color:16777215,emissive:16777215,emissiveIntensity:1.2});r=new Q(S,L),r.position.set(i.x,i.height+.7,i.z)}if(window._buildingLabels&&window._buildingLabels.length===3){const S=new Gu(o.geometry),L=new Ut({color:0}),N=new ie(S,L);N.position.copy(o.position),k.add(N)}let y=[o];window._mainTowerMeshes.push(o),window._mainTowerMeshToGroup.set(o,y),window._coneTowerGroup=y}else if(i.type==="octa"){o=new Q(new Ao(2.1,0),new zt({color:i.color,emissive:16777215,emissiveIntensity:.5,metalness:.4})),o.scale.y=i.height/4.2,o.position.set(i.x,i.height/2,i.z);const R=new ce(o.geometry),D=new ie(R,new Ut({color:0,linewidth:2}));if(D.position.copy(o.position),D.scale.copy(o.scale),k.add(D),window._diamondMesh=o,window._diamondOutline=D,i.accent==="wire"){const S=new Ao(2.15,0),L=new Ht({color:0,wireframe:!0});r=new Q(S,L),r.scale.y=i.height/4.2,r.position.copy(o.position)}let y=[o];window._mainTowerMeshes.push(o),window._mainTowerMeshToGroup.set(o,y),window._octaTowerGroup=y}else if(i.type==="multi"){o=new Q(new te(1.1,1.5,i.height*.7,18,1,!0),new zt({color:i.color,emissive:16777215,emissiveIntensity:.5,metalness:.4})),o.position.set(i.x,i.height*.7/2,i.z);const R=new ce(o.geometry),D=new ie(R,new Ut({color:0,linewidth:2}));D.position.copy(o.position),k.add(D);const y=new Q(new Qi(1.1,i.height*.3,18,1,!0),new zt({color:16777215,emissive:16777215,emissiveIntensity:1}));y.position.set(i.x,i.height*.7+i.height*.3/2,i.z),k.add(y);const S=new ce(y.geometry),L=new ie(S,new Ut({color:0,linewidth:2}));L.position.copy(y.position),k.add(L);let N=[o,y];window._mainTowerMeshes.push(o),window._mainTowerMeshes.push(y),window._mainTowerMeshToGroup.set(o,N),window._mainTowerMeshToGroup.set(y,N),window._multiTowerGroup=N}else{let R=[o];window._mainTowerMeshes.push(o),window._mainTowerMeshToGroup.set(o,R)}k.add(o),r&&k.add(r);let a="Tower";i.type==="cylinder"&&(a="Real Estate Hub"),i.type==="box"&&(a="Art Museum"),i.type==="cone"&&(a="3WSHS Store"),i.type==="octa"&&(a="Marketing Hub"),i.type==="multi"&&(a="Ink Tower");const c=document.createElement("canvas");c.width=256,c.height=64;const l=c.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,c.width,c.height),l.font="bold 36px sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillStyle="#000",l.fillText(a,c.width/2,c.height/2);const h=new wl(c),u=new Ht({map:h,transparent:!0}),d=new Si(3.5,.9),m=new Q(d,u);let g=o.position.y+i.height/2;i.type==="cylinder"&&i.accent==="ring"&&(g=i.height+2.5),i.type==="box"&&(g=i.height*.8+i.height*.15+1.8+1.5+.16+2.2),i.type==="cone"&&(g=o.position.y+i.height/2+1.5),i.type==="octa"&&(g=o.position.y+i.height/2*o.scale.y+2.2),i.type==="multi"&&(g=o.position.y+i.height*.7/2+i.height*.3+2.2),m.position.set(i.x,g,i.z),m.userData.baseY=g,k.add(m),window._buildingLabels||(window._buildingLabels=[]),window._buildingLabels.push(m),window._mainTowerMeshes.push(o),window._mainTowerMeshToGroup.set(o,[o]);const w=new Ht({color:16777215,emissive:16777215,emissiveIntensity:2}),p=.04;for(let R=-1;R<=1;R+=2)for(let D=-1;D<=1;D+=2){const y=new Kt(p,i.height,p),S=new Q(y,w.clone());S.position.set(o.position.x+R,o.position.y,o.position.z+D),k.add(S)}for(let R=-1;R<=1;R+=2)for(let D=-1;D<=1;D+=2){const y=new Kt(2-p,p,p),S=new Q(y,w.clone());S.position.set(o.position.x,o.position.y+i.height/2,o.position.z+D),k.add(S);const L=new Kt(p,p,2-p),N=new Q(L,w.clone());N.position.set(o.position.x+R,o.position.y+i.height/2,o.position.z),k.add(N)}window._circuitLines||(window._circuitLines=[]);const f=1+Math.floor(Math.random()*2);for(let R=0;R<f;R++){const D=.5+Math.random()*(i.height-1.2),y=.7+Math.random()*.7,S=new Kt(.06,y,.04),L=new Ht({color:16777215,emissive:16777215,emissiveIntensity:2}),N=new Q(S,L);N.position.set(o.position.x+1.01,D,o.position.z+(Math.random()-.5)*1.2),k.add(N),window._circuitLines.push(N)}const x=new ce(o.geometry),v=new Ut({color:16777215,linewidth:1}),M=new ie(x,v);M.position.copy(o.position),k.add(M);const P=new Ut({color:16777215,linewidth:3}),b=new ie(x,P);b.position.copy(o.position),b.layers.set(1),k.add(b)}}function rg(){const u=[-28,-20,-13,-7,0,6,13,21,28],d=[-28,-19,-12,-5,2,10,18,25,28],m=2.5/2+.08/2+.1;for(let g of u){const w=new Kt(2.5,.03,60),p=new zt({color:1118481}),f=new Q(w,p);f.position.set(g,.051,0),k.add(f);for(let x of[-1,1]){let v=-30;for(let M of[...d,60/2]){let P=v,b=M-2.5/2;if(b>P){const R=new Kt(.08,.031,b-P),D=new zt({color:13421772}),y=new Q(R,D);y.position.set(g+x*(2.5/2-.08/2),.051+.001,(P+b)/2),k.add(y)}v=M+2.5/2}}for(let x=-60/2+1/2;x<60/2;x+=1+.7){let v=!1;for(let R of d)if(Math.abs(x-R)<m){v=!0;break}if(v)continue;const M=new Kt(.05,.032,1),P=new zt({color:13421772}),b=new Q(M,P);b.position.set(g,.051+.002,x),k.add(b)}}for(let g of d){const w=new Kt(60,.03,2.5),p=new zt({color:1118481}),f=new Q(w,p);f.position.set(0,.051,g),k.add(f);for(let x of[-1,1]){let v=-30;for(let M of[...u,60/2]){let P=v,b=M-2.5/2;if(b>P){const R=new Kt(b-P,.031,.08),D=new zt({color:13421772}),y=new Q(R,D);y.position.set((P+b)/2,.051+.001,g+x*(2.5/2-.08/2)),k.add(y)}v=M+2.5/2}}for(let x=-60/2+1/2;x<60/2;x+=1+.7){let v=!1;for(let R of u)if(Math.abs(x-R)<m){v=!0;break}if(v)continue;const M=new Kt(1,.032,.05),P=new zt({color:13421772}),b=new Q(M,P);b.position.set(x,.051+.002,g),k.add(b)}}}function ag(){const r={x:0,z:0},a=10,c=10,l=[-28,-20,-13,-7,0,6,13,21,28],h=[-28,-19,-12,-5,2,10,18,25,28];for(let u of l)for(let d=-60/2+2;d<60/2;d+=6){if(u>r.x-a/2&&u<r.x+a/2&&d>r.z-c/2&&d<r.z+c/2)continue;const m=new te(.07*1.7,.07*1.7,.22,12,1,!0),g=new Ht({color:16777215,wireframe:!0}),w=new Q(m,g);w.position.set(u-1.2,.11,d),k.add(w);const p=new te(.07,.07,2.2,8),f=new zt({color:16777215}),x=new Q(p,f);x.position.set(u-1.2,2.2/2,d),k.add(x);const v=new ve(.18,12,12),M=new zt({color:16777215,emissive:16777215,emissiveIntensity:3}),P=new Q(v,M);P.position.set(u-1.2,2.2+.18*.7,d),k.add(P)}for(let u of h)for(let d=-60/2+2;d<60/2;d+=6){if(d>r.x-a/2&&d<r.x+a/2&&u>r.z-c/2&&u<r.z+c/2)continue;const m=new te(.07*1.7,.07*1.7,.22,12,1,!0),g=new Ht({color:16777215,wireframe:!0}),w=new Q(m,g);w.position.set(d,.11,u-1.2),k.add(w);const p=new te(.07,.07,2.2,8),f=new zt({color:16777215}),x=new Q(p,f);x.position.set(d,2.2/2,u-1.2),k.add(x);const v=new ve(.18,12,12),M=new zt({color:16777215,emissive:16777215,emissiveIntensity:3}),P=new Q(v,M);P.position.set(d,2.2+.18*.7,u-1.2),k.add(P)}}function cg(s,t,e){const n=new xe,i=16777215,o=new Ut({color:i}),r=1;for(let a=-t/2;a<=t/2;a+=r){const c=[new A(s.x+a,.11,s.z-e/2),new A(s.x+a,.11,s.z+e/2)],l=new Yt().setFromPoints(c),h=new _e(l,o);n.add(h)}for(let a=-e/2;a<=e/2;a+=r){const c=[new A(s.x-t/2,.11,s.z+a),new A(s.x+t/2,.11,s.z+a)],l=new Yt().setFromPoints(c),h=new _e(l,o);n.add(h)}k.add(n)}function lg(s,t,e,n,i,o,r){for(let c=0;c<40;c++){const l=(Math.random()-.5)*s*e*.9,h=(Math.random()-.5)*t*e*.9;if(Math.abs(l)<4&&Math.abs(h)<4||l>n.x-i/2&&l<n.x+i/2&&h>n.z-o/2&&h<n.z+o/2)continue;let u=!1;for(const x of r)if(Math.abs(l-x.x)<x.half+.7&&Math.abs(h-x.z)<x.half+.7){u=!0;break}if(u)continue;const d=new te(.2,.3,1.5,12,1,!0),m=new Ht({color:16777215,wireframe:!0}),g=new Q(d,m);g.position.set(l,.75,h);const w=new ve(.9,12,12),p=new Ht({color:16777215,wireframe:!0}),f=new Q(w,p);f.position.set(l,1.7,h),k.add(g),k.add(f)}}function hg(s,t,e,n){const i=Math.ceil(Math.sqrt(n)),o=i,r=s.x-t/2+1.5,a=s.z-e/2+1.5,c=(t-3)/(o-1),l=(e-3)/(i-1);let h=0;for(let u=0;u<i;u++)for(let d=0;d<o;d++){if(h++>=n)return;const m=r+d*c,g=a+u*l,w=new te(.2,.3,1.5,12,1,!0),p=new Ht({color:16777215,wireframe:!0}),f=new Q(w,p);f.position.set(m,.75,g);const x=new ve(.9,12,12),v=new Ht({color:16777215,wireframe:!0}),M=new Q(x,v);M.position.set(m,1.7,g),k.add(f),k.add(M)}}function ug(s=50,t=16,e=32){const i=new Ut({color:16777215}),o=new xe;for(let l=1;l<t;l++){const h=l/t*Math.PI,u=Math.sin(h)*s,d=Math.cos(h)*s,m=[];for(let p=0;p<=e;p++){const f=p/e*Math.PI*2,x=Math.cos(f)*u,v=Math.sin(f)*u;m.push(new A(x,d,v))}const g=new Yt().setFromPoints(m),w=new _e(g,i);o.add(w)}for(let l=0;l<e;l++){const h=l/e*Math.PI*2,u=[];for(let g=0;g<=t;g++){const w=g/t*Math.PI,p=Math.sin(w)*s,f=Math.cos(w)*s,x=Math.cos(h)*p,v=Math.sin(h)*p;u.push(new A(x,f,v))}const d=new Yt().setFromPoints(u),m=new _e(d,i);o.add(m)}const r=16777215,a=new Ut({color:r,transparent:!0,opacity:.25}),c=s*1.03;for(let l=1;l<t;l++){const h=l/t*Math.PI,u=Math.sin(h)*c,d=Math.cos(h)*c,m=[];for(let p=0;p<=e;p++){const f=p/e*Math.PI*2,x=Math.cos(f)*u,v=Math.sin(f)*u;m.push(new A(x,d,v))}const g=new Yt().setFromPoints(m),w=new _e(g,a);o.add(w)}for(let l=0;l<e;l++){const h=l/e*Math.PI*2,u=[];for(let g=0;g<=t;g++){const w=g/t*Math.PI,p=Math.sin(w)*c,f=Math.cos(w)*c,x=Math.cos(h)*p,v=Math.sin(h)*p;u.push(new A(x,f,v))}const d=new Yt().setFromPoints(u),m=new _e(d,a);o.add(m)}o.position.y=0,k.add(o),window._cityDome=o}function fg(s=1200,t=20,e=400){const n=[];for(let a=0;a<s;a++){const c=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),h=t+Math.random()*(e-t),u=Math.sin(l)*Math.cos(c)*h,d=Math.cos(l)*h,m=Math.sin(l)*Math.sin(c)*h;n.push(u,d,m)}const i=new Yt;i.setAttribute("position",new de(n,3));const o=new Sa({color:16777215,size:.45,sizeAttenuation:!0}),r=new Ml(i,o);k.add(r)}function dg(){const r=[],a=[];for(let p=0;p<64;p++){const f=p/64*Math.PI*2,x=38+Math.random()*2.5,v=32+Math.random()*2.5,M=7+Math.random()*11,P=7+Math.random()*11*.7;r.push({x:Math.cos(f)*x,y:M,z:Math.sin(f)*x}),a.push({x:Math.cos(f)*v,y:P,z:Math.sin(f)*v})}const c=[],l=[];for(let p=0;p<64;p++){const f=(p+1)%64,x=r[p],v=r[f],M=a[f],P=a[p],b=c.length/3;c.push(x.x,x.y,x.z),c.push(v.x,v.y,v.z),c.push(M.x,M.y,M.z),c.push(P.x,P.y,P.z),l.push(b,b+1,b+2),l.push(b,b+2,b+3)}for(let p=0;p<64;p++){const f=(p+1)%64,x=r[p],v=r[f],M={x:v.x,y:.01,z:v.z},P={x:x.x,y:.01,z:x.z},b=c.length/3;c.push(x.x,x.y,x.z),c.push(v.x,v.y,v.z),c.push(M.x,M.y,M.z),c.push(P.x,P.y,P.z),l.push(b,b+1,b+2),l.push(b,b+2,b+3)}for(let p=0;p<64;p++){const f=(p+1)%64,x=a[p],v=a[f],M={x:v.x,y:.01,z:v.z},P={x:x.x,y:.01,z:x.z},b=c.length/3;c.push(x.x,x.y,x.z),c.push(v.x,v.y,v.z),c.push(M.x,M.y,M.z),c.push(P.x,P.y,P.z),l.push(b,b+1,b+2),l.push(b,b+2,b+3)}const h=new Yt;h.setAttribute("position",new de(c,3)),h.setIndex(l),h.computeVertexNormals();const u=new zt({color:0,flatShading:!0}),d=new Q(h,u);k.add(d);const m=new ce(h),g=new Ut({color:16777215}),w=new ie(m,g);k.add(w)}function pg(){const n=4+Math.floor(Math.random()*3);for(let i=0;i<18;i++){const o=i/18*Math.PI*2+Math.random()*.2,r=34+Math.random()*8;for(let a=0;a<n;a++){const c=o+(Math.random()-.5)*.18,l=r+(Math.random()-.5)*2.2,h=Math.cos(c)*l,u=Math.sin(c)*l,d=new te(.2,.3,1.5,12,1,!0),m=new Ht({color:16777215,wireframe:!0}),g=new Q(d,m);g.position.set(h,.75,u);const w=new ve(.9,12,12),p=new Ht({color:16777215,wireframe:!0}),f=new Q(w,p);f.position.set(h,1.7,u),k.add(g),k.add(f)}}}function mg(){const r=[-28,-20,-13,-7,0,6,13,21,28],a=[-28,-19,-12,-5,2,10,18,25,28];for(let c=0;c<6;c++){const l=r[Math.floor(Math.random()*r.length)],h=Math.random()<.5?1:-1,u=h===1?-60/2:60/2,d=h===1?60/2:-60/2,m=u+Math.random()*(d-u),g=new Q(new Kt(.6,.4,1.1),new zt({color:16777215,emissive:16777215,emissiveIntensity:.7}));g.position.set(l,.4/2+.02,m),k.add(g),fa.push({mesh:g,axis:"z",start:u,end:d,dir:h,speed:.07+Math.random()*.06})}for(let c=0;c<6;c++){const l=a[Math.floor(Math.random()*a.length)],h=Math.random()<.5?1:-1,u=h===1?-60/2:60/2,d=h===1?60/2:-60/2,m=u+Math.random()*(d-u),g=new Q(new Kt(1.1,.4,.6),new zt({color:16777215,emissive:16777215,emissiveIntensity:.7}));g.position.set(m,.4/2+.02,l),k.add(g),fa.push({mesh:g,axis:"x",start:u,end:d,dir:h,speed:.07+Math.random()*.06})}}function gg(){window._spaceAsteroids=[];for(let s=0;s<5;s++){const t=new Aa(2.2+Math.random()*1.2,1);for(let i=0;i<t.attributes.position.count;i++){const o=t.attributes.position;o.setXYZ(i,o.getX(i)*(.8+Math.random()*.5),o.getY(i)*(.8+Math.random()*.5),o.getZ(i)*(.8+Math.random()*.5))}const e=new zt({color:11184810,flatShading:!0,metalness:.7,roughness:.5,emissive:8947848,emissiveIntensity:.3}),n=new Q(t,e);n.position.set(0,0,0),k.add(n),window._spaceAsteroids.push({mesh:n,orbitRadius:320+Math.random()*60,orbitSpeed:.09+Math.random()*.08,orbitPhase:Math.random()*Math.PI*2,rotSpeed:.01+Math.random()*.02})}window._spaceSatellites=[];for(let s=0;s<3;s++){const t=new xe,e=new Q(new Kt(1.2,1.2,2.7),new zt({color:16777215,metalness:.8,roughness:.3,emissive:43775,emissiveIntensity:.5}));t.add(e);for(let n=-1;n<=1;n+=2){const i=new Q(new Kt(.09,1.2,3.2),new zt({color:43775,emissive:43775,emissiveIntensity:1.5,metalness:.7,roughness:.2}));i.position.x=n*.7,t.add(i)}t.position.set(0,0,0),k.add(t),window._spaceSatellites.push({group:t,orbitRadius:360+Math.random()*30,orbitSpeed:.07+Math.random()*.04,orbitPhase:Math.random()*Math.PI*2})}window._spaceShips=[];for(let s=0;s<2;s++){const t=new xe,e=new Q(new te(.42,1.1,4.2,16),new zt({color:16777215,metalness:.9,roughness:.2,emissive:2237183,emissiveIntensity:1.2}));e.rotation.z=Math.PI/2,t.add(e);const n=new Q(new Qi(.5,1.2,16),new zt({color:65535,emissive:65535,emissiveIntensity:2.2}));n.position.x=2.1,n.rotation.z=Math.PI/2,t.add(n),t.position.set(0,0,0),k.add(t),window._spaceShips.push({group:t,orbitRadius:390+Math.random()*40,orbitSpeed:.06+Math.random()*.03,orbitPhase:Math.random()*Math.PI*2})}}function _g(){const s={x:0,y:0,z:-180},t=18,e=16777215,n=new Ut({color:e,transparent:!0,opacity:.65}),i=new xe,o=16,r=32;for(let a=1;a<o;a++){const c=a/o*Math.PI,l=Math.sin(c)*t,h=Math.cos(c)*t,u=[];for(let g=0;g<=r;g++){const w=g/r*Math.PI*2,p=Math.cos(w)*l,f=Math.sin(w)*l;u.push(new A(s.x+p,s.y+h,s.z+f))}const d=new Yt().setFromPoints(u),m=new _e(d,n);i.add(m)}for(let a=0;a<r;a++){const c=a/r*Math.PI*2,l=[];for(let d=0;d<=o;d++){const m=d/o*Math.PI,g=Math.sin(m)*t,w=Math.cos(m)*t,p=Math.cos(c)*g,f=Math.sin(c)*g;l.push(new A(s.x+p,s.y+w,s.z+f))}const h=new Yt().setFromPoints(l),u=new _e(h,n);i.add(u)}i.position.set(0,0,0),i.userData.isTeleportDome=!0,i.userData.domeCenter=s,k.add(i),window._secondDome=i}function xg(){window.addEventListener("mousedown",s=>{if(s.button!==0||Ae.position.z<-120)return;const t=Oe.domElement.getBoundingClientRect(),e=new Mt((s.clientX-t.left)/t.width*2-1,-((s.clientY-t.top)/t.height)*2+1),n=new Po;n.setFromCamera(e,Ae),n.intersectObject(window._secondDome,!0).length>0&&(vs=Ae.position.clone(),Ms=new A(0,8,-180),xs=0,ti="secondDome")})}function $c(){Ae.aspect=window.innerWidth/window.innerHeight,Ae.updateProjectionMatrix(),Oe.setSize(window.innerWidth,window.innerHeight)}function vg(){for(const _ of pe)k.remove(_);pe=[];for(const _ of wo)k.remove(_);wo=[];const s={x:0,z:-180},t=new Da(16777215,.9);k.add(t),wo.push(t);const e=new Ut({color:16777215}),n=new Ht({color:0}),i=_=>{if(k.add(_),pe.push(_),!_.geometry)return;const I=new ie(new ce(_.geometry),e);I.position.copy(_.position),I.rotation.copy(_.rotation),I.scale.copy(_.scale),k.add(I),pe.push(I)},o=[],r=(_,I,O)=>{for(const H of o){const F=_-H.x,ft=I-H.z;if(F*F+ft*ft<O*O)return!1}return o.push({x:_,z:I}),!0},a=new ze(13.5,96),c=new Ht({color:0}),l=new Q(a,c);l.rotation.x=-Math.PI/2,l.position.set(s.x,0,s.z),k.add(l),pe.push(l);let h=0;{const _=new Sl([new A(s.x-10.5,0,s.z-4.5),new A(s.x-4,0,s.z-1.8),new A(s.x+1.2,0,s.z+1),new A(s.x+7.6,0,s.z+4.8)]),I=70,O=1.15,H=[],F=[];for(let Ct=0;Ct<=I;Ct++){const Ft=Ct/I,wt=_.getPoint(Ft),kt=_.getTangent(Ft),U=new A(-kt.z,0,kt.x).normalize();H.push(new A(wt.x+U.x*O,.012,wt.z+U.z*O)),F.push(new A(wt.x-U.x*O,.012,wt.z-U.z*O))}const ft=new ba;ft.moveTo(H[0].x-s.x,H[0].z-s.z);for(let Ct=1;Ct<H.length;Ct++)ft.lineTo(H[Ct].x-s.x,H[Ct].z-s.z);for(let Ct=F.length-1;Ct>=0;Ct--)ft.lineTo(F[Ct].x-s.x,F[Ct].z-s.z);const tt=new Cs(ft),lt=new Q(tt,new Ht({color:328965}));lt.rotation.x=-Math.PI/2,lt.position.set(s.x,.006,s.z),k.add(lt),pe.push(lt);const _t=[...H,...F.reverse()],nt=new Yt().setFromPoints(_t),vt=new Ze(nt,e);k.add(vt),pe.push(vt)}{const _=new A(s.x+.8,0,s.z-.6),I=4,O=.55,H=12,F=10.5;for(let tt=0;tt<I;tt++){const lt=tt*1.65,_t=Math.max(3.2,H-lt),nt=Math.max(2.8,F-lt*.92),vt=new Kt(_t,O,nt),Ct=new Q(vt,n);Ct.position.set(_.x,tt*O+O/2,_.z),i(Ct)}const ft=10;for(let tt=0;tt<ft;tt++){const lt=new Kt(1.6,.18,.38),_t=new Q(lt,n);_t.position.set(_.x,.1+tt*.18,_.z+4.2-tt*.34),i(_t)}h=I*O}for(let _=0;_<8;_++){const I=Math.random()*Math.PI*2,O=6+Math.random()*6.2,H=s.x+Math.cos(I)*O+(Math.random()-.5)*.4,F=s.z+Math.sin(I)*O+(Math.random()-.5)*.4;if(!r(H,F,.65))continue;const tt=Math.random()<.4?new te(.08,.1,.45+Math.random()*.25,10,1,!0):new ve(.16+Math.random()*.12,10,10),lt=new Q(tt,n);lt.position.set(H,.12,F),lt.rotation.y=Math.random()*Math.PI*2,i(lt)}const u=(_,I,O=1.4)=>{const H=new te(.07,.1,O,10,1,!0),F=new Q(H,n);F.position.set(_,O/2,I),i(F);const ft=new ve(.38+Math.random()*.12,10,10,0,Math.PI*2,0,Math.PI/2),tt=new Q(ft,new Ht({color:16777215,wireframe:!0}));tt.position.set(_,O+.28,I),k.add(tt),pe.push(tt)},d=(_,I,O,H)=>{for(let F=0;F<O;F++){const ft=Math.random()*Math.PI*2,tt=Math.pow(Math.random(),.65)*H,lt=_+Math.cos(ft)*tt+(Math.random()-.5)*.35,_t=I+Math.sin(ft)*tt+(Math.random()-.5)*.35;Math.hypot(lt-(s.x+.8),_t-(s.z-.6))<4.8||r(lt,_t,.85)&&u(lt,_t,1.3+Math.random()*1.1)}},m=62;for(let _=0;_<m;_++){const I=_/m*Math.PI*2+(Math.random()-.5)*.18,O=10.2+Math.random()*2.2,H=s.x+Math.cos(I)*O,F=s.z+Math.sin(I)*O;r(H,F,.95)&&u(H,F,1.6+Math.random()*1.3)}d(s.x-6.5,s.z-3.5,18,2.8),d(s.x+6.5,s.z-2,16,2.6),d(s.x+5.2,s.z+5,14,2.6),d(s.x-3,s.z+6,12,2.2);const g=12,w=6.5;for(let _=0;_<g;_++){const I=_/g*Math.PI*2+(Math.random()-.5)*.5+Math.PI/12,O=w+(Math.random()-.5)*2.2;let H=s.x+Math.cos(I)*O,F=s.z+Math.sin(I)*O;if(H+=(Math.random()-.5)*1.2,F+=(Math.random()-.5)*1.2,Math.sqrt((H-(s.x-6.5))**2+(F-s.z)**2)<4.5+.7)continue;const tt=1.5+Math.random()*.55,lt=6,_t=.28+Math.random()*.05;for(let ot=0;ot<lt;ot++){const it=1-ot/lt*.62,At=tt*it,Wt=_t,he=tt*it,Qt=ot*_t+Wt/2,Me=new Kt(At,Wt,he),He=new Q(Me,new Ht({color:0}));He.position.set(H,Qt,F),k.add(He),pe.push(He);const yn=new ie(new ce(Me),e);yn.position.copy(He.position),k.add(yn),pe.push(yn)}const nt=7;for(let ot=0;ot<nt;ot++){const it=tt*(.28+ot*.02),At=_t*.55,Wt=tt*.18,he=new Kt(it,At,Wt),Qt=new Q(he,new Ht({color:0}));Qt.position.set(H,At/2+ot*(_t*.5),F+tt*.52-ot*(Wt*.35)),k.add(Qt),pe.push(Qt);const Me=new ie(new ce(he),e);Me.position.copy(Qt.position),k.add(Me),pe.push(Me)}const vt=lt*_t+.1,Ct=tt*.34,Ft=_t*1.6,wt=tt*.24,kt=new Kt(Ct,Ft,wt),U=new Q(kt,new Ht({color:0}));U.position.set(H,vt+Ft/2,F-tt*.02),k.add(U),pe.push(U);const St=new ie(new ce(kt),e);St.position.copy(U.position),k.add(St),pe.push(St);const ht=new Kt(Ct*.12,Ft*.82,wt*.12);for(const ot of[-1,1]){const it=new Q(ht,new Ht({color:0}));it.position.set(H+ot*Ct*.28,vt+Ft*.42,F+wt*.36),k.add(it),pe.push(it);const At=new ie(new ce(ht),e);At.position.copy(it.position),k.add(At),pe.push(At)}const Lt=4+Math.floor(Math.random()*3);for(let ot=0;ot<Lt;ot++){const it=I+(ot-1)*.18+(Math.random()-.5)*.1,At=O+1.1+Math.random()*.7,Wt=s.x+Math.cos(it)*At,he=s.z+Math.sin(it)*At;if(Math.hypot(Wt-s.x,he-s.z)<5||typeof r=="function"&&!r(Wt,he,.9))continue;const Qt=new te(.11,.15,1.7+Math.random()*.5,10,1,!0),Me=new Q(Qt,new Ht({color:0,wireframe:!0}));Me.position.set(Wt,.85,he),k.add(Me),pe.push(Me);const He=2+Math.floor(Math.random()*2);let yn=1.1+Math.random()*.13;for(let Sn=0;Sn<He;Sn++){const pn=.5+Math.random()*.2-Sn*.13,si=yn+Sn*.22+(Math.random()-.5)*.07,oi=(Math.random()-.5)*.08,Ei=(Math.random()-.5)*.08,Xn=new ve(pn,8,8,0,Math.PI*2,0,Math.PI/2),Dn=new Q(Xn,new Ht({color:16777215,wireframe:!0}));Dn.position.set(Wt+oi,si,he+Ei),k.add(Dn),pe.push(Dn)}}}const p=32,f=15.5,x=12.5,v=2.5,M=6.5,P=.01,b=[],R=[];for(let _=0;_<p;_++){const I=_/p*Math.PI*2,O=f+Math.random()*1.2,H=x+Math.random()*1.2,F=v+Math.random()*(M-v),ft=v+Math.random()*(M-v)*.7;b.push({x:Math.cos(I)*O,y:F,z:Math.sin(I)*O}),R.push({x:Math.cos(I)*H,y:ft,z:Math.sin(I)*H})}const D=[],y=[];for(let _=0;_<p;_++){const I=(_+1)%p,O=b[_],H=b[I],F=R[I],ft=R[_],tt=D.length/3;D.push(O.x,O.y,O.z),D.push(H.x,H.y,H.z),D.push(F.x,F.y,F.z),D.push(ft.x,ft.y,ft.z),y.push(tt,tt+1,tt+2),y.push(tt,tt+2,tt+3)}for(let _=0;_<p;_++){const I=(_+1)%p,O=b[_],H=b[I],F={x:H.x,y:P,z:H.z},ft={x:O.x,y:P,z:O.z},tt=D.length/3;D.push(O.x,O.y,O.z),D.push(H.x,H.y,H.z),D.push(F.x,F.y,F.z),D.push(ft.x,ft.y,ft.z),y.push(tt,tt+1,tt+2),y.push(tt,tt+2,tt+3)}for(let _=0;_<p;_++){const I=(_+1)%p,O=R[_],H=R[I],F={x:H.x,y:P,z:H.z},ft={x:O.x,y:P,z:O.z},tt=D.length/3;D.push(O.x,O.y,O.z),D.push(H.x,H.y,H.z),D.push(F.x,F.y,F.z),D.push(ft.x,ft.y,ft.z),y.push(tt,tt+1,tt+2),y.push(tt,tt+2,tt+3)}const S=new Yt;S.setAttribute("position",new de(D,3)),S.setIndex(y),S.computeVertexNormals();const L=new zt({color:0,flatShading:!0}),N=new Q(S,L);N.position.set(s.x,0,s.z),k.add(N),pe.push(N);const X=new ce(S),K=new ie(X,e);K.position.set(s.x,0,s.z),k.add(K),pe.push(K);const q=8+Math.floor(Math.random()*3);for(let _=0;_<q;_++){const I=["palace","tower","platform","shrine"][Math.floor(Math.random()*4)];let O=0,H,F;do{const lt=Math.random()*Math.PI*2,_t=5.5+Math.random()*6.5;H=s.x+Math.cos(lt)*_t+(Math.random()-.5)*1.5,F=s.z+Math.sin(lt)*_t+(Math.random()-.5)*1.5;const nt=Math.sqrt((H-(s.x-6.5))**2+(F-s.z)**2);if(O++,nt>5.5||O>10)break}while(!0);let ft,tt=null;if(I==="palace"){const lt=new Kt(1.7+Math.random(),.6+Math.random()*.3,.7+Math.random()*.4);ft=new Q(lt,new Ht({color:0})),ft.position.set(H,.3,F),tt=lt}else if(I==="tower"){const lt=new te(.38+Math.random()*.18,.38+Math.random()*.18,1.1+Math.random()*.5,16,1,!0);if(ft=new Q(lt,new Ht({color:0})),ft.position.set(H,.55,F),tt=lt,Math.random()<.5){const _t=new ve(.38,12,8,0,Math.PI*2,0,Math.PI/2),nt=new Q(_t,new Ht({color:0}));nt.position.set(H,1.1,F),k.add(nt),pe.push(nt);const vt=new ie(new ce(_t),e);vt.position.copy(nt.position),k.add(vt),pe.push(vt)}else{const _t=new Qi(.38,.5,12,1,!0),nt=new Q(_t,new Ht({color:0}));nt.position.set(H,1.2,F),k.add(nt),pe.push(nt);const vt=new ie(new ce(_t),e);vt.position.copy(nt.position),k.add(vt),pe.push(vt)}}else if(I==="platform"){const lt=new Kt(1.2+Math.random()*.7,.22+Math.random()*.13,1.2+Math.random()*.7);if(ft=new Q(lt,new Ht({color:0})),ft.position.set(H,.12,F),tt=lt,Math.random()<.7){const _t=new Kt(.32,.13,.7),nt=new Q(_t,new Ht({color:0}));nt.position.set(H,.18,F-.5),k.add(nt),pe.push(nt);const vt=new ie(new ce(_t),e);vt.position.copy(nt.position),k.add(vt),pe.push(vt)}}else if(I==="shrine"){const lt=.5+Math.random()*.2,_t=.7+Math.random()*.2;for(let nt=0;nt<3;nt++){const vt=lt*(1-nt*.18),Ct=_t*.33,Ft=nt*Ct+Ct/2,wt=new Kt(vt,Ct,vt),kt=new Q(wt,new Ht({color:0}));kt.position.set(H,Ft,F),k.add(kt),pe.push(kt);const U=new ie(new ce(wt),e);U.position.copy(kt.position),k.add(U),pe.push(U)}}if(ft&&(k.add(ft),pe.push(ft),tt)){const lt=new ie(new ce(tt),e);lt.position.copy(ft.position),lt.rotation.copy(ft.rotation),k.add(lt),pe.push(lt)}}const B=5+Math.floor(Math.random()*3);for(let _=0;_<B;_++){const I=Math.random()*Math.PI*2,O=7+Math.random()*5,H=s.x+Math.cos(I)*O,F=s.z+Math.sin(I)*O,ft=2+Math.floor(Math.random()*3);for(let tt=0;tt<ft;tt++){const lt=(Math.random()-.5)*1.2,_t=(Math.random()-.5)*1.2,nt=H+lt,vt=F+_t;if(Math.sqrt((nt-(s.x-6.5))**2+(vt-s.z)**2)<5.2)continue;const Ft=.7+Math.random()*.5,wt=.7+Math.random()*.5,kt=.5+Math.random()*.3,U=new Kt(Ft,kt,wt,2,2,2),St=U.attributes.position;for(let ot=0;ot<St.count;ot++){let it=St.getX(ot),At=St.getY(ot),Wt=St.getZ(ot);it*=.97+Math.random()*.04,At*=.97+Math.random()*.04,Wt*=.97+Math.random()*.04,St.setXYZ(ot,it,At,Wt)}U.computeVertexNormals();const ht=new Q(U,new Ht({color:0}));ht.position.set(nt,kt/2,vt),k.add(ht),pe.push(ht);const Lt=new ie(new ce(U),e);Lt.position.copy(ht.position),k.add(Lt),pe.push(Lt)}}const W={x:s.x,z:s.z},Y=new xe;Y.position.set(W.x+.8,h,W.z-.6),Y.scale.setScalar(.62);const pt=new Ht({color:0}),ct=(_,I,O)=>{const H=new Q(_,pt);H.position.copy(I),Y.add(H);const F=new ie(new ce(_),e);F.position.copy(I),Y.add(F)},Et=5,Pt=8.2,ut=7.6,G=.55;for(let _=0;_<Et;_++){const I=_*.78,O=Math.max(1.8,Pt-I),H=Math.max(1.6,ut-I*.92),F=new Kt(O,G,H);if(ct(F,new A(0,_*G+G/2,0)),_<Et-1){const ft=O*.22,tt=H*.22,lt=new Kt(ft,G*.9,tt),_t=_*G+G*.55;ct(lt,new A(O*.38,_t,H*.18)),ct(lt,new A(-O*.38,_t,H*.18))}}const at=18,mt=2.4,dt=Et*G/at,bt=.32,Rt=ut*.5+.02;for(let _=0;_<at;_++){const I=_*dt+dt/2,O=Rt-_*(bt*.62),H=new Kt(mt*(.88+_*.01),dt*.9,bt);ct(H,new A(0,I,O))}const Tt=new Kt(.42,Et*G*.92,2.35),Vt=Et*G*.92/2,Bt=ut*.5-.65;ct(Tt,new A(mt*.5+.26,Vt,Bt)),ct(Tt,new A(-mt*.5-.26,Vt,Bt));const gt=new Kt(3.8,.45,3.1);ct(gt,new A(0,Et*G+.225,-.15));const E=Et*G+.45,st=new Kt(2.9,.55,2);ct(st,new A(0,E+.275,-.25));const $=new Kt(.18,.9,.18),rt=E+.55+.45,Z=-.25+.82,xt=[-1.05,-.6,-.15,.15,.6,1.05];for(const _ of xt)ct($,new A(_,rt,Z));const et=new Kt(2.6,.22,.28);ct(et,new A(0,rt+.5,Z));const Nt=new Kt(3.1,.28,2.25);ct(Nt,new A(0,rt+.78,-.25));const Zt=new Kt(1.5,.22,.45);ct(Zt,new A(0,rt+1.05,-.95));const C=new Kt(.9,.22,.35);ct(C,new A(0,rt+1.27,-1.05)),k.add(Y),pe.push(Y)}function vr(s){for(const t of pe)t.visible=s;for(const t of wo)t.visible=s}function Mg(){window.addEventListener("mousedown",s=>{if(s.button!==0||Ae.position.z>-60)return;const t=Oe.domElement.getBoundingClientRect(),e=new Mt((s.clientX-t.left)/t.width*2-1,-((s.clientY-t.top)/t.height)*2+1),n=new Po;n.setFromCamera(e,Ae),n.intersectObject(window._cityDome,!0).length>0&&(vs=Ae.position.clone(),Ms=new A(20,25,30),xs=0,ti="cityDome")})}let Jn=null;function Vl(s){for(Jn&&Jn();s.firstChild;)s.removeChild(s.firstChild);k=new vl,k.background=new ne(0),k.fog=null,Ae=new nn(60,s.offsetWidth/s.offsetHeight,.1,2e3),Ae.position.set(20,25,30),Ae.lookAt(0,0,0),Oe=new Bl({antialias:!0}),Oe.setSize(s.offsetWidth,s.offsetHeight),s.appendChild(Oe.domElement),Tn=new Hl(Ae,Oe.domElement),Tn.target.set(0,5,0),Tn.update(),$c();const t=new Da(16777215,.8);k.add(t);const e=new ju(8956671,1);e.position.set(20,40,20),k.add(e);const n=new Il(65535,1,100);n.position.set(0,30,0),k.add(n);const i=new Si(60,60),o=new zt({color:0}),r=new Q(i,o);r.rotation.x=-Math.PI/2,r.position.y=0,r.receiveShadow=!0,k.add(r);const a={x:0,z:0},c=10,l=10;rg(),ag(),mg(),cg(a,c,l);const h=10,u=10,d=4,m=[];for(let f=-h/2;f<h/2;f++)for(let x=-u/2;x<u/2;x++){if(f*d>a.x-c/2&&f*d<a.x+c/2&&x*d>a.z-l/2&&x*d<a.z+l/2)continue;const v=Math.random()*8+2,M=new zt({color:0}),P=new Kt(2,v,2),b=new Q(P,M);if(b.position.set(f*d,v/2,x*d),b.castShadow=!0,b.receiveShadow=!0,k.add(b),M.color.getHex()===16777215){const gt=new ce(P),E=new ie(gt,new Ut({color:0,linewidth:3}));E.position.copy(b.position),k.add(E)}m.push({x:f*d,z:x*d,half:1.1});const R=Math.floor(v/1.2),D=2+Math.floor(Math.random()*2),y=.25,S=.4,L=.06,N=16777215,X=1;for(let gt=0;gt<4;gt++){let E=gt*Math.PI/2,st=Math.cos(E),$=Math.sin(E);for(let rt=0;rt<R;rt++)for(let Z=0;Z<D;Z++){if(Math.random()<.25)continue;let xt=.7+rt*(v-1.4)/Math.max(1,R-1),et=(D-1)/2,Nt=X-L/2+.001,Zt=b.position.x+st*Nt+$*(Z-et)*.7,C=b.position.z+$*Nt+st*(Z-et)*.7,_=xt;const I=new Kt(y,S,L),O=new Ht({color:N,emissive:N,emissiveIntensity:1}),H=new Q(I,O);H.position.set(Zt,_,C),H.rotation.y=E,k.add(H)}}if(Math.random()<.18){const gt=[0,1,2,3];let st=gt[Math.floor(Math.random()*gt.length)]*Math.PI/2,$=Math.cos(st),rt=Math.sin(st);const Z=1.2+Math.random()*.8;let xt=Math.max(1.2,v*.45+Math.random()*.5);xt=Math.min(xt,v-.3);const et=.08;let Nt=X+et/2-.002;const Zt=new Kt(Z,xt,et),C=new zt({color:1118481,emissive:16777215,emissiveIntensity:2}),_=new Q(Zt,C),I=b.position.y,O=b.position.x+$*Nt,H=b.position.z+rt*Nt;_.position.set(O,I,H),_.rotation.y=st+Math.PI/2,k.add(_),xr.push(_)}if(Math.random()<.13){const gt=1.2+Math.random()*1.2,E=.38+Math.random()*.32,st=.12,$=new Kt(gt,E,st),rt=new zt({color:1118481,emissive:16777215,emissiveIntensity:2}),Z=new Q($,rt);Z.position.set(b.position.x,b.position.y+v/2+E/2+.08,b.position.z),Z.rotation.y=Math.random()*Math.PI*2,k.add(Z),xr.push(Z)}const K=new ce(P),q=new Ut({color:0,linewidth:3}),B=new ie(K,q);B.position.copy(b.position),k.add(B);const W=new ce(P),Y=new Ut({color:16777215,linewidth:1}),pt=new ie(W,Y);pt.position.copy(b.position),k.add(pt);const ct=.5,Et=.9,Pt=.09,ut=Et/2,G=0,at=Math.cos(G),mt=Math.sin(G),dt=X-Pt/2+.002,bt=b.position.x+at*dt,Rt=b.position.z+mt*dt,Tt=new Kt(ct,Et,Pt),Vt=new Ht({color:N,emissive:N,emissiveIntensity:1}),Bt=new Q(Tt,Vt);if(Bt.position.set(bt,ut,Rt),Bt.rotation.y=G,k.add(Bt),Math.random()<.4){const gt=ct+.18,E=.18,st=.07,$=ut+Et/2+st/2+.03,rt=new Kt(gt,st,E),Z=new Ht({color:16777215}),xt=new Q(rt,Z);xt.position.set(bt,$,Rt+Pt/2+E/2-.01),k.add(xt);const et=.03,Nt=$-ut+.01,Zt=new te(et,et,Nt,8),C=new Ht({color:16777215}),_=new Q(Zt,C);_.position.set(bt-ct/2+et,ut+Nt/2-.01,Rt+Pt/2+et),k.add(_);const I=new Q(Zt,C);I.position.set(bt+ct/2-et,ut+Nt/2-.01,Rt+Pt/2+et),k.add(I)}}lg(h,u,d,a,c,l,m),hg(a,c,l,8),sg(a,c,l),og(a,c,l),ug(),fg(),dg(),pg(),gg(),_g(),xg(),vg(),vr(!1),Mg(),window.addEventListener("resize",$c,!1),En=new Po,fo=new Mt,Hi=null,Oe.domElement.addEventListener("pointermove",f=>{const x=Oe.domElement.getBoundingClientRect();fo.x=(f.clientX-x.left)/x.width*2-1,fo.y=-((f.clientY-x.top)/x.height)*2+1});const g=new eg(k,Ae),w=new es(new Mt(s.offsetWidth,s.offsetHeight),1.2,.4,.15);window._bloomComposer=new tg(Oe),window._bloomComposer.addPass(g),window._bloomComposer.addPass(w),Oe.domElement.addEventListener("pointerdown",f=>{const x=Oe.domElement.getBoundingClientRect(),v=(f.clientX-x.left)/x.width*2-1,M=-((f.clientY-x.top)/x.height)*2+1,P=new Mt(v,M);En.setFromCamera(P,Ae);const b=window._mainTowerGroups&&window._mainTowerGroups[0];if(b&&En.intersectObjects(b,!0).length>0){Jn&&Jn(),Jn=ig(s),s.addEventListener("backToCity",()=>{Jn&&Jn(),Vl(s)},{once:!0});return}if(window._boxTowerMesh){console.log("Art Museum mesh found, checking for intersection...");const R=En.intersectObject(window._boxTowerMesh,!0);if(console.log("Art Museum intersects:",R.length),R.length>0){console.log("Art Museum clicked! Opening art museum..."),window.open("https://www.3wshs.com/art-museum","_blank");return}}else console.log("Art Museum mesh not found in window._boxTowerMesh");if(window._multiTowerGroup){console.log("Ink Tower group found, checking for intersection...");const R=En.intersectObjects(window._multiTowerGroup,!0);if(console.log("Ink Tower intersects:",R.length),R.length>0){console.log("Ink Tower clicked! Opening tattoo designs..."),window.open("https://www.3wshs.com/tattoodesigns","_blank");return}}else console.log("Ink Tower group not found in window._multiTowerGroup");if(window._octaTowerGroup){console.log("Marketing Hub group found, checking for intersection...");const R=En.intersectObjects(window._octaTowerGroup,!0);if(console.log("Marketing Hub intersects:",R.length),R.length>0){console.log("Marketing Hub clicked! Opening Marketing Hub..."),window.open("https://www.3wshs.com/marketing","_blank");return}}else console.log("Marketing Hub group not found in window._octaTowerGroup");if(window._cylinderTowerGroup){console.log("Real Estate Hub group found, checking for intersection...");const R=En.intersectObjects(window._cylinderTowerGroup,!0);if(console.log("Real Estate Hub intersects:",R.length),R.length>0){console.log("Real Estate Hub clicked! Opening Real Estate Media..."),window.open("https://www.3wshs.com/realestatemedia","_blank");return}}else console.log("Real Estate Hub group not found in window._cylinderTowerGroup");if(window._coneTowerGroup){console.log("3WSHS Store group found, checking for intersection...");const R=En.intersectObjects(window._coneTowerGroup,!0);if(console.log("3WSHS Store intersects:",R.length),R.length>0){console.log("3WSHS Store clicked! Opening shop..."),window.open("https://www.3wshs.com/shop","_blank");return}}else console.log("3WSHS Store group not found in window._coneTowerGroup")});function p(){requestAnimationFrame(p),Tn.update();const f=performance.now()*.002;for(const x of xr)x.material&&x.material.emissiveIntensity!==void 0&&(x.material.emissiveIntensity=.2+Math.abs(Math.sin(f*2+x.position.x+x.position.z))*4);for(const x of fa)x.axis==="z"?(x.mesh.position.z+=x.dir*x.speed,(x.dir===1&&x.mesh.position.z>x.end||x.dir===-1&&x.mesh.position.z<x.end)&&(x.mesh.position.z=x.start)):(x.mesh.position.x+=x.dir*x.speed,(x.dir===1&&x.mesh.position.x>x.end||x.dir===-1&&x.mesh.position.x<x.end)&&(x.mesh.position.x=x.start));if(window._futuristicSphere&&(window._futuristicSphere.gridGroup.rotation.y+=.02,window._futuristicSphere.gridGroup.rotation.x=Math.sin(f)*.2),window._diamondMesh&&window._diamondOutline&&(window._diamondMesh.rotation.y+=.02,window._diamondOutline.rotation.y+=.02),window._cylinderRingMeshes&&Array.isArray(window._cylinderRingMeshes)){const x=(Math.sin(f*.7)+1)/2;for(const v of window._cylinderRingMeshes)if(v&&typeof v.userData.ringMin=="number"&&typeof v.userData.ringMax=="number"){const M=v.userData.ringMin+x*(v.userData.ringMax-v.userData.ringMin);v.position.y=M+v.userData.offset}}if(window._cylinderGridRing&&(window._cylinderGridRing.rotation.y+=.03),window._glassTowerMeshes&&window._glassTowerMeshes.length>0&&k.children.forEach(x=>{x.userData&&x.userData.rotationSpeed&&(x.rotation.y+=x.userData.rotationSpeed)}),window._spaceAsteroids){const x=performance.now()*25e-5;for(const v of window._spaceAsteroids){const M=x*v.orbitSpeed+v.orbitPhase;v.mesh.position.set(Math.cos(M)*v.orbitRadius,Math.sin(M*.7)*8+10,Math.sin(M)*v.orbitRadius),v.mesh.rotation.x+=v.rotSpeed,v.mesh.rotation.y+=v.rotSpeed*1.3}}if(window._spaceSatellites){const x=performance.now()*22e-5;for(const v of window._spaceSatellites){const M=x*v.orbitSpeed+v.orbitPhase;v.group.position.set(Math.cos(M)*v.orbitRadius,Math.sin(M*.8)*18+24,Math.sin(M)*v.orbitRadius),v.group.rotation.y=M+Math.PI/2}}if(window._spaceShips){const x=performance.now()*19e-5;for(const v of window._spaceShips){const M=x*v.orbitSpeed+v.orbitPhase;v.group.position.set(Math.cos(M)*v.orbitRadius,Math.sin(M*.6)*28+32,Math.sin(M)*v.orbitRadius),v.group.rotation.y=M-Math.PI/2}}if(ti&&vs&&Ms&&(xs+=.018,xs>=1?(ti==="secondDome"?(Ae.position.set(0,8,-158),Tn.target.set(0,5,-180)):ti==="cityDome"&&(Ae.position.set(20,25,30),Tn.target.set(0,5,0)),Tn.update(),ti=null,vs=null,Ms=null):Ae.position.lerpVectors(vs,Ms,Math.sin(xs*Math.PI/2)),ti==="secondDome"?(Ae.lookAt(0,5,-180),Tn.target.set(0,5,-180)):ti==="cityDome"&&(Ae.lookAt(0,5,0),Tn.target.set(0,5,0)),Tn.update()),Ae.position.z<-120?vr(!0):vr(!1),window._buildingLabels)for(const x of window._buildingLabels){x.lookAt(Ae.position);const v=performance.now()*.001;x.position.y=x.userData.baseY+Math.sin(v*1.2)*.45}if(window._bloomComposer){const x=k.background;Ae.layers.set(1),window._bloomComposer.render(),Ae.layers.set(0),Oe.render(k,Ae),k.background=x}else Oe.render(k,Ae);if(window._mainTowerMeshes&&window._mainTowerMeshes.length>0){En.setFromCamera(fo,Ae);const x=En.intersectObjects(window._mainTowerMeshes,!1);if(Hi&&(!x.length||!window._mainTowerMeshToGroup.get(x[0].object)||window._mainTowerMeshToGroup.get(x[0].object)!==Hi)){for(const v of Hi)v.material&&v.material.emissiveIntensity!==void 0&&(v.material.emissiveIntensity=v.userData.originalEmissiveIntensity||1.5,v.userData.originalEmissiveColor!==void 0&&v.material.emissive.setHex(v.userData.originalEmissiveColor)),(v.type==="Group"||v instanceof xe)&&v.traverse(M=>{M.material&&M.material.color&&M.userData.originalColor!==void 0&&M.material.color.setHex(M.userData.originalColor)}),v.material&&v.material.wireframe&&v.material.color&&v.userData.originalColor!==void 0&&v.material.color.setHex(v.userData.originalColor),v.layers.disable(1);Hi=null}if(x.length){const v=x[0].object,M=window._mainTowerMeshToGroup.get(v);if(M){for(const P of M)P.material&&P.material.emissiveIntensity!==void 0&&(P.userData.originalEmissiveIntensity===void 0&&(P.userData.originalEmissiveIntensity=P.material.emissiveIntensity),P.userData.originalEmissiveColor===void 0&&(P.userData.originalEmissiveColor=P.material.emissive.getHex()),P.material.emissiveIntensity=2.5,P.material.emissive.setHex(6750207)),(P.type==="Group"||P instanceof xe)&&P.traverse(b=>{b.material&&b.material.color&&(b.userData.originalColor===void 0&&(b.userData.originalColor=b.material.color.getHex()),b.material.color.set(6750207))}),P.material&&P.material.wireframe&&P.material.color&&(P.userData.originalColor===void 0&&(P.userData.originalColor=P.material.color.getHex()),P.material.color.set(6750207)),P.layers.enable(1);Hi=M}}}if(window._circuitLines){const x=performance.now()*.002;for(const v of window._circuitLines)v.material&&v.material.emissiveIntensity!==void 0&&(v.material.emissiveIntensity=1.2+Math.abs(Math.sin(x*2+v.position.x+v.position.y))*2.5)}}p(),Jn=()=>{Oe.domElement&&Oe.domElement.parentNode===s&&s.removeChild(Oe.domElement),Oe.domElement.replaceWith(Oe.domElement.cloneNode(!0))}}window.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("room-container");Vl(s)});
