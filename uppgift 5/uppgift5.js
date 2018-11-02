

//En funktion som har en uppgift att skapa 1000 slumpmässiga tal mellan 1 och 6.
//Metoden returnerar en array T.ex. [4,5,6,3,1,5,2,3,6,2,4, … ]
function randomDice () {
    let dice = [];

    for (let num = 0; num <= 1000; num++) {
        dice.push( Math.ceil( Math.random() * 6 ));
        /*math.random() skapa nummer mellan 0 och 1 sen * 6 
          så alla nummer ska bli mellan 1 och 6.  
          ceil föratt alla nummer är helt tal
          varje nummer ska push till tomma array dice */
 }
     return dice;
 } 

function print(){
    // En array med sex plats
    let numbers = [0,0,0,0,0,0];
    let dices = randomDice();
    for(let i=0;i<1000;i++){
    numbers[dices[i]-1]++;
    /*for loop som anropa randomDice() lägger varje nummer inom tidigare plats
    eftersom array borja från 0 */
}
    console.log("totalt antal: " + (numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5]));
    console.log("Ettor:" + numbers[0] +"   "+"Tvåor:" + numbers[1] +"   "+"Treor:" + numbers[2]+"   "+"Fyror:" + numbers[3] +"   "+"Femmor:" + numbers[4] +"   "+"Sexor:" + numbers[5]);
}
print();
    



