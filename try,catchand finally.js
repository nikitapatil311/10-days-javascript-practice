/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try
    {
        var splitString=s.split("");
        var rverseArray=splitString.reverse();
        var joinArray=rverseArray.join("");
        console.log(joinArray);
    }
    catch (error)
    {
        console.log(error.message);
        console.log(s);
    }
}