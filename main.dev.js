import {app,BrowserWindow} from 'electron';

app.on('ready',()=>{

 let mainWindow=new BrowserWindow({
  width:500,
  height:400
  
});
console.log(__dirname)
mainWindow.loadURL(`file://${__dirname}/index.html`);
mainWindow.show();

 

})
