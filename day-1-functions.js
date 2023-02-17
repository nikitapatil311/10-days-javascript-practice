/*
 * Create the function factorial here
 */
function factorial(n){
    
    let i = 1;
     let fact = 1;
    
    for(i=1; i<=n; i++){
         fact = fact*i;
    }
    return fact;
    
    
}