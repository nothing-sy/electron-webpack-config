import Test from './test'; 
import './index.css';
import commonHtml from './test.html';
 class Main{

show=()=>{

var test=new Test();
test.showClassName();
console.log('Main');
document.querySelector('html').innerHTML=commonHtml;
}


}

new Main().show();

// export default Main; 