// Illustrations tracées à l’échelle de l’écran, y compris sur affichage Retina.
function illustrate(canvas){
 const w=Number(canvas.dataset.width), h=Number(canvas.dataset.height),ratio=Math.max(1,window.devicePixelRatio||1);
 canvas.width=w*ratio;canvas.height=h*ratio;
 const c=canvas.getContext('2d');if(!c)return;c.scale(ratio,ratio);
 const ink="#483e36",clay="#b86748",green="#576c59";
 const line=(points,color=ink,width=2,dash=[])=>{c.beginPath();c.strokeStyle=color;c.lineWidth=width;c.lineJoin="round";c.lineCap="round";c.setLineDash(dash);points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.stroke();c.setLineDash([])};
 const dot=(x,y,r,fill)=>{c.fillStyle=fill;c.beginPath();c.arc(x,y,r,0,2*Math.PI);c.fill()};
 const box=(x,y,width,height,r,color)=>{c.fillStyle=color;c.beginPath();c.roundRect(x,y,width,height,r);c.fill()};
 const label=(t,x,y,size=16,color=ink,font='Georgia')=>{c.fillStyle=color;c.font='italic '+size+'px '+font;c.fillText(t,x,y)};
 const grid=(x,y,width,height,step,color)=>{c.save();c.beginPath();c.rect(x,y,width,height);c.clip();for(let i=x;i<=x+width;i+=step)line([[i,y],[i,y+height]],color,.65);for(let i=y;i<=y+height;i+=step)line([[x,i],[x+width,i]],color,.65);c.restore()};
 const arrow=(x,y,dx,dy,color=ink)=>{line([[x-dx*7-dy*3,y-dy*7+dx*3],[x,y],[x-dx*7+dy*3,y-dy*7-dx*3]],color,1.6)};
 const parabola=(xmin,xmax,fn,color,width)=>{const pts=[];for(let x=xmin;x<=xmax;x+=1.5)pts.push([x,fn(x)]);line(pts,color,width)};
 const sparkle=(x,y,r,color)=>{c.fillStyle=color;c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x+r*.12,y-r*.12,x+r,y);c.quadraticCurveTo(x+r*.12,y+r*.12,x,y+r);c.quadraticCurveTo(x-r*.12,y+r*.12,x-r,y);c.quadraticCurveTo(x-r*.12,y-r*.12,x,y-r);c.fill()};
 const type=canvas.dataset.art;
 if(type==="hero"){
  c.save();c.translate(226,132);c.rotate(-.20);c.shadowColor="#825d4124";c.shadowBlur=9;c.shadowOffsetY=5;box(-122,-83,233,159,4,"#d7a186");c.shadowColor="transparent";for(let i=-114;i<105;i+=9)line([[i,65],[i+19,76]],"#ca8a6c",.8);c.restore();
  c.save();c.translate(263,130);c.rotate(.075);c.shadowColor="#80553e38";c.shadowBlur=11;c.shadowOffsetY=6;box(-122,-102,244,204,4,"#fffaf0");c.shadowColor="transparent";
  grid(-117,-98,234,195,12,"#cfcbbb");line([[-104,-99],[-104,96]],"#dca9a1",1);for(let y=-81;y<91;y+=26){dot(-114,y,3.3,"#e8cdb9");line([[-124,y],[-115,y]],"#b59d8e",1)}
  label("f(x) = x² − 1",21,-74,17,"#67594d");
  line([[-87,35],[91,35]],"#6a635b",1.5);arrow(91,35,1,0);line([[0,79],[0,-60]],"#6a635b",1.5);arrow(0,-60,0,-1);
  for(let x=-72;x<84;x+=24)line([[x,32],[x,38]],"#71665f",1);for(let y=-37;y<=60;y+=24)line([[-3,y],[3,y]],"#71665f",1);
  parabola(-53,53,x=>59-x*x/24,"#b96147",3.3);dot(-24,35,3.5,"#a85740");dot(24,35,3.5,"#a85740");label("x",97,38,15);label("y",-15,-61,15);label("−1",-39,50,12);label("1",27,50,12);
  c.save();c.translate(-10,-99);c.rotate(-.09);c.globalAlpha=.9;box(-32,-7,64,16,1,"#e9c792");for(let i=-31;i<31;i+=4)line([[i,-6],[i+4,7]],"#efd5ad",1.4);c.restore();c.restore();
  // Crayon posé à droite du feuillet.
  c.save();c.translate(392,154);c.rotate(.46);c.shadowColor="#845f4e38";c.shadowBlur=3;c.shadowOffsetX=3;c.shadowOffsetY=3;box(-6,-74,12,130,2,"#ba7445");c.shadowColor="transparent";box(-5,-65,4,122,0,"#eeaf65");box(-1,-65,4,122,0,"#d58a4a");box(-6,-76,12,11,2,"#d49481");box(-6,-66,12,8,0,"#b2a697");c.fillStyle="#e5c29b";c.beginPath();c.moveTo(-6,56);c.lineTo(6,56);c.lineTo(0,76);c.closePath();c.fill();c.fillStyle=ink;c.beginPath();c.moveTo(-2.2,69);c.lineTo(2.2,69);c.lineTo(0,76);c.fill();c.restore();
  c.save();c.translate(131,198);c.rotate(-.12);c.shadowColor="#73583c22";c.shadowBlur=5;c.shadowOffsetY=4;box(-49,-27,99,55,3,"#dce1c4");c.shadowColor="transparent";label("Δ = b² − 4ac",-38,7,18,green);c.restore();
  sparkle(81,66,10,clay);sparkle(99,53,4,clay);sparkle(423,63,7,clay);line([[77,163],[71,168]],clay,1.4);line([[71,155],[63,156]],clay,1.4);
  return;
 }
 const axis=(x,y)=>{line([[72,y],[233,y]],ink,1.4);arrow(233,y,1,0);line([[x,94],[x,14]],ink,1.4);arrow(x,14,0,-1)};
 if(type==="balance"){
  const dark="#765343";line([[150,27],[150,84]],dark,3);line([[100,37],[199,29]],dark,3.1);dot(150,33,4.8,"#ba7453");dot(150,33,1.8,"#f9dbc2");
  for(const [x,y] of [[102,37],[198,29]]){line([[x-20,y+36],[x,y],[x+20,y+36]],dark,1.4);c.beginPath();c.moveTo(x-22,y+35);c.quadraticCurveTo(x,y+62,x+22,y+35);c.closePath();c.fillStyle="#dbac81";c.fill();c.strokeStyle=dark;c.lineWidth=1.8;c.stroke()}
  line([[134,84],[166,84],[173,90],[126,90],[134,84]],dark,2);label("x",76,28,18,dark);label("=",212,55,18,dark)
 }else if(type==="line"){
  line([[60,58],[239,58]],green,1.8);arrow(239,58,1,0,green);for(let i=0;i<7;i++){const x=79+22*i;line([[x,53],[x,63]],green,1.4)}
  line([[101,51],[190,51]],"#75947a",4);dot(101,51,5,"#57745a");dot(190,51,5,green);dot(190,51,3.4,"#dfebd9");label("−2",91,82,15,green);label("0",140,82,15,green);label("2",186,82,15,green);label("x",242,55,14,green)
 }else if(["curve","vertex","hill"].includes(type)){
  const inv=type==="hill";const x0=151,y0=inv?25:79;axis(134,inv?69:58);parabola(x0-52,x0+52,x=>y0+(inv?1:-1)*(x-x0)**2/39,type==="vertex"?clay:"#816d8d",2.8);label("x",237,inv?73:61,13);label("y",119,20,13);
  if(type==="vertex"){dot(x0,y0,3.5,clay);label("S",157,85,14,clay)}else{dot(x0,y0,2.6,"#796883")}
 }else if(type==="delta"){label("Δ",83,79,67,"#9b6961");label("= b² − 4ac",132,64,24,ink)}
 else if(type==="factors"){label("(x − r)(x − s)",75,62,28,green);line([[88,74],[98,80],[129,80],[138,74]],green,1.2);line([[151,74],[160,80],[194,80],[204,74]],green,1.2)}
 else{line([[73,40],[225,40]],ink,1.3);line([[117,28],[117,78]],ink,1);line([[185,28],[185,78]],ink,1);label("r",113,22);label("s",183,22);label("+",83,67,22,clay);label("−",143,67,22,clay);label("+",198,67,22,clay)}
}
