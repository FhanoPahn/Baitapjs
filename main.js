//Bài 1 
/**var a = prompt('Nhập chiều dài hình chữ nhật(cùng đơn vị):')
var b = prompt('Nhập chiều rộng hình chữ nhật(cùng đơn vị):')
alert (' Diện tích hình chữ nhật là: '+a*b)*/


//Bài 2: Kiểm tra chẵn lẻ

/**var i =1
var input =prompt ('Hãy nhập một số để kiểm tra:')
while(input%2===0 && i<2){
    alert('Đây là một số chẵn')
    i++
}
while(input%2!==0 && i<2){
    alert('Đây là một số lẻ')
    i++
}*/
//Bài 3
/**for(var i=1 ;i<=10;i++){
    console.log(i)
}
//Bài 4.1
var reverse=10
while(reverse<=10&& reverse>=1){
    console.log(reverse )
    reverse--
}*/
//Bài 4.2
/**do{
    console.log(reverse )
    reverse--
}while(reverse<=10 && reverse>=1)*/
//Bài 5.1 for loop
//var n=prompt('Nhập số n:')
//var i=0
/**for (var i=0; i<=n ;i++){
    console.log(i)
}*/
//Bài 5.2 while loop
/**while(i<=n){
    console.log(i)
    i++
}*/
//Bài 5.3 do...while loop
/**do{
    console.log(i)
    i++
}while(i<=n)*/
//Bài 6
var n= prompt('Nhập số n')
sum=0
for(var i=0;i<=n;i++){
    sum += i
}
console.log(sum)
