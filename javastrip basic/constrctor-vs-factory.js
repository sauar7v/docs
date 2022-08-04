// // factory function 
// // let radius;
// function createCircle(radius){
//     return{
//         radius, // radius: radius
//         // draw : function(){ }
//         draw(){
//             console.log('draw');
//         }
//     }
// }

// // let c = createCircle(1);
// // constructor function

// function Circle(radius){
//     this.radius = radius;
//     this.draw  = function(){
//         console.log('draw')
//     }
// }
// console.log(200);
// let c = new Circle(1);


// array from range 

// const number = arrayFromRange(-10,-4);

// console.log(number);
// function arrayFromRange(num1,num2){
//     const output1 = [];
//     for(let i=num1;i<=num2;i++){
//         output1.push(i);
//     }
//     return output1;
// }


// ex - 2 (includes)

// const number = [1,2,3,4,5];

// console.log(findNumber(number,7));

// function findNumber (array, seachElement){
//     for(let key in array){
//         if(array[key]===seachElement){
//             return true;
//         }
//     }
//     return false;
// }    

//ex- Except 

// const num1 = [1,2,3,4,5,6,1,1,1,2,2];
// const num2 = [1,2];

// console.log(except(num1,num2));

// function except(array1,array2){
//     for(let key2 in array2){
//         for(let key1 in array1){
//             const index = array1.indexOf(array2[key2]);
//             if (index > -1) { // only splice array when item is found
//                 array1.splice(index, 1); // 2nd parameter means remove one item only
//               }
            
//         }
//     }
//     return array1
// }

//ex-4 moving elemnt 

const array = [1,2,3,4,5];
const output = move(array , 3,1);
console.log(output);
function move(array, index ,offset){
    if((index+offset>array.length) || (index+offset<0)) return "invalid";
    if(offset>=0){
    for(let i = index;i<Math.abs(offset)+index;i++){
        let a=array[i];
        array[i]=array[i+1];
        array[i+1]=a;
    }
}
else{
    for(let i = index;i>index+offset;i--){
        let a=array[i];
        array[i]=array[i-1];
        array[i-1]=a;
    }
}
    return array;
}


