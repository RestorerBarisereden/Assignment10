let length1 = 3
let length2 = 7
let length3 = 9
if (length1 <= 0 || length2 <= 0 || length3 <= 0){
    console.log("No length available, all length must be greater than zero");
}
else if (length1 + length2 > length3 && length1 + length3 > length2 && length2 + length3 > length1){
    console.log("Triangle are formed with these length");
}
else{
    console.log("No triangle is being formed");
}