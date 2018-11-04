
/* Ett program som beräkna fakultet med hjälp av funktion inom matematiken
för exempel  5!  = 1 * 2 * 3 * 4 * 5 = 120
OBS!!! numret måste sluta med "!" föratt programet beräkna fakultet 
*/




let inPut = prompt("Ange ett heltal mellan 1 och 1000 föratt programet beräkna fakultet .",`Glöm inte "!" i sluten av numret`);


// While loop för att kolla om användarens input är korrekt
while (true) {
    
    
    
    // Om användare klicka på avbryt programmet ska se Hejdå och avsluta
    if (inPut === null){
        alert("Hejdå")
        break;
    }
    
    
    //Programmet ska kolla om numret sluta med ! och mellan 1 till 1000 sedan programmet ska beräkna fakultet
    if  ( inPut.endsWith("!") ){
        inPut = inPut.substring (0,inPut.length -1);
        /*efter kolla på "!" i sluten av numret sedan substring method ska ta bort "!"
        och sedan kolla om numret är heltal sedan om nummer mellan 1 och 1000*/
        if (!Number.isInteger(inPut) ){
            document.write("Numret måste bli heltal");
            
        } ;  
        
                if (inPut >=1 && inPut <= 1000){
                //Efter programmet ta bort "!" sedan kolla om numret mellan 1 och 1000
        
                document.write("Fakultet av " +inPut+"!"+" är "+fakultet(inPut)+("."));
                break;
            }  
    }
    // Om användare lägga till file input
    else if (inPut != inPut.endsWith("!")||(isNaN(inPut))) {
         document.write(`Fail input. OBS!! Du måste lägga till ett heltal mellan 1 och 1000 med "!" I slutet av numret för att beräkna fakulteten.`);
         break;
     }

    
   // loop slut




    // Fakultet function med rekursion "self-calling-function"
    function fakultet(inPut){
        if (inPut == 0)
        return 1;
        else
        return inPut * fakultet (--inPut);
    
    }
    
    
}
    