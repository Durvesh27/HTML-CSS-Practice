// Q2
// var array=[2,3,55,6,67,78,23,5,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23];
// var target1=54;
// var target2=-54;
// function findNumber(arr,t1,t2){
// for(var a=0;a<arr.length-4;a++){
//   for(var b=a+1;b<arr.length-3;b++){
//     for(var c=b+1;c<arr.length-2;c++){
//        for(var d=c+1;d<arr.length-1;d++){
//         for(var e=d+1;e<arr.length;e++){
//         if(arr[a]-arr[b]-arr[c]-arr[d]-arr[e]==t1 || arr[a]-arr[b]-arr[c]-arr[d]-arr[e]==t2 ){
//             console.log(arr[a],arr[b],arr[c],arr[d],arr[e])
//         }
//     }
//     } 
//     }
//   }
// }
// }
// findNumber(array,target1,target2)

// Q3
var array2=[2,3,55,6,67,78,23,5,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23];
var target2=236028;
var flag=false;
function findMulti(arr,tar){
for(var i=0;i<arr.length-1;i++){
    for(var j=i+1;j<arr.length;j++){
    if(arr[i]*arr[j]==tar){
        console.log(arr[i],arr[j]);
      flag=true;
    }
    }
}
}
if(flag==false){
    console.log("no result")
}
findMulti(array2,target2);

// Q4
// var array3=[2,3,55,6,67,78,23,5,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23];

// function sum(array3){
// for( var i=0;i<array3.length;i++){
// if(array3[i]%2==0){
// console.log(array3[i])
// }
// }
// }
// sum(array3);

// Q5
// var array3=[2,3,55,6,67,78,23,5,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23];

// function countOfOdd(array3){
// for( var i=0;i<array3.length;i++){
// if(array3[i]%2==1){
// console.log(array3[i])
// }
// }
// }
// countOfOdd(array3);
