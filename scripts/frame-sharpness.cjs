const sharp=require('sharp'),fs=require('fs');
const dir=__dirname+'/../public/frames';
(async()=>{
 const out={};
 const prefixes=[...new Set(fs.readdirSync(dir).map(f=>f[0]))];
 for(const p of prefixes){
  const files=fs.readdirSync(dir).filter(f=>f[0]===p).sort();
  out[p]=[];
  for(const f of files){
   const W=1024,H=576;
   const {data}=await sharp(dir+'/'+f).extract({left:200,top:20,width:624,height:340}).greyscale().raw().toBuffer({resolveWithObject:true});
   const w=624,h=340;let sum=0,sum2=0,n=0;
   for(let y=1;y<h-1;y++)for(let x=1;x<w-1;x++){
    const i=y*w+x;
    const l=4*data[i]-data[i-1]-data[i+1]-data[i-w]-data[i+w];
    sum+=l;sum2+=l*l;n++;
   }
   out[p].push(Math.round((sum2/n-(sum/n)**2)*10)/10);
  }
  console.log(p,files.length);
 }
 fs.writeFileSync(__dirname+'/../src/frameSharpness.json',JSON.stringify(out));
})();
