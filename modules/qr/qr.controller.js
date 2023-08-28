const qrcode = require('qrcode');

const creatQR= async (url)=>{

const qrData = await qrcode.toDataURL(url);
return qrData;

}


module.exports= {creatQR};