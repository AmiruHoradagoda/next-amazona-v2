
//function that cnvert decimal to decimal 2 decimal points
export const round2=(num:number)=> {
 Math.round((num+Number.EPSILON)*100)/100
}
