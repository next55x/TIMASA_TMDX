const {ezrq}=require("../fredi/ezra")







ezra({nomCom:"reboot",categorie:"Mods",reaction:"♻️"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("*hi ${m.pushName} 𝚃𝙸𝙼𝙽𝙰𝚂𝙰 𝚃𝙴𝙲𝙷 𝙱𝙾𝚃 is rebooting please wait...*");

  exec("pm2 restart all");
  

  



})
