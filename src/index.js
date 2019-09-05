//                                                                                                                      
//           JJJJJJJJJJJ   SSSSSSSSSSSSSSS                                                      iiii  kkkkkkkk           
//           J:::::::::J SS:::::::::::::::S                                                    i::::i k::::::k           
//           J:::::::::JS:::::SSSSSS::::::S                                                     iiii  k::::::k           
//           JJ:::::::JJS:::::S     SSSSSSS                                                           k::::::k           
//             J:::::J  S:::::S           rrrrr   rrrrrrrrr   aaaaaaaaaaaaa      ssssssssss   iiiiiii  k:::::k    kkkkkkk
//             J:::::J  S:::::S           r::::rrr:::::::::r  a::::::::::::a   ss::::::::::s  i:::::i  k:::::k   k:::::k 
//             J:::::J   S::::SSSS        r:::::::::::::::::r aaaaaaaaa:::::ass:::::::::::::s  i::::i  k:::::k  k:::::k  
//             J:::::j    SS::::::SSSSS   rr::::::rrrrr::::::r         a::::as::::::ssss:::::s i::::i  k:::::k k:::::k   
//             J:::::J      SSS::::::::SS  r:::::r     r:::::r  aaaaaaa:::::a s:::::s  ssssss  i::::i  k::::::k:::::k    
// JJJJJJJ     J:::::J         SSSSSS::::S r:::::r     rrrrrrraa::::::::::::a   s::::::s       i::::i  k:::::::::::k     
// J:::::J     J:::::J              S:::::Sr:::::r           a::::aaaa::::::a      s::::::s    i::::i  k:::::::::::k     
// J::::::J   J::::::J              S:::::Sr:::::r          a::::a    a:::::assssss   s:::::s  i::::i  k::::::k:::::k    
// J:::::::JJJ:::::::J  SSSSSSS     S:::::Sr:::::r          a::::a    a:::::as:::::ssss::::::si::::::ik::::::k k:::::k   
//  JJ:::::::::::::JJ   S::::::SSSSSS:::::Sr:::::r          a:::::aaaa::::::as::::::::::::::s i::::::ik::::::k  k:::::k  
//    JJ:::::::::JJ     S:::::::::::::::SS r:::::r           a::::::::::aa:::as:::::::::::ss  i::::::ik::::::k   k:::::k 
//      JJJJJJJJJ        SSSSSSSSSSSSSSS   rrrrrrr            aaaaaaaaaa  aaaa sssssssssss    iiiiiiiikkkkkkkk    kkkkkkk
//                                                                                                                      
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log((window.innerHeight*0.003921569).toFixed(2));
console.log((window.innerWidth*0.001666667).toFixed(2));

function setCanvasSize()
{
    let scale = 0;
    if( window.innerHeight*0.003921569 >= window.innerWidth*0.001666667)
    {
        scale=window.innerWidth*0.001666667;
    }
    else {
        scale=window.innerHeight*0.003921569;
    }
    let middleWidth = window.innerHeight / 2;
    
    let gameCanvas = document.querySelector('.game-canvas');
    gameCanvas.style.transform = `scale(${scale})`;
}

setCanvasSize();
window.addEventListener("resize", setCanvasSize);

//console.log(gameCanvas.style);
// Importation des classes.
import Core from './Core.js';
let core = new Core();