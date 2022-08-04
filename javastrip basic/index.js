
// let a;
// let b;
// console.log(checkSpeed(100));
// function checkSpeed(speed){
//     if(speed<=70){
//         return 'OK';
//     }
//     else{
//         a = Math.floor(speed/70);
//         a += Math.floor(((speed/10)%7)/0.5)-1;
//         if(a<=12){
//             return a + ' points';
//         }
//         else return 'License suspended';
        
//     }
    
// }

// let a = ['',1,'Pandey',null,8.47];
// countTruthy(a);
// function countTruthy(arrays){
//     for(let i=0;i<a.length;i++){
//         if(false||a[i]) {
//             console.log('truthy '+ a[i]);
//         }
//         else {
//             console.log('Falsely '+ a[i]);
//     }
//     }

//     }
checkPrime(10)
function checkPrime(num){
    for(let i=2;i<num;i++){
        if(check(i)) console.log(i+" Prime");
        else console.log(i+" not prime");
    }
}

function check(a){
    for(let i=2;i*i<=a;i++){
        if(a%i===0) return false;
    }
    return true;
}