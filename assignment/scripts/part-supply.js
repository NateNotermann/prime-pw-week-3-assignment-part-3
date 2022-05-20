console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40; //this works
partsNeeded = 40; //or this work, ONLY IF it wasn't previously created in the doc
console.log( 'partsNeeded equals:', partsNeeded ); //console.logged them to check it worked

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
//VERY important - question said NUMBERS. NOT a string of numbers. 
let supplyChanges = [ 3, 5, -6, 0, 7, 11 ];
console.log( 'supplyChanges equals:', supplyChanges ); //console.logged them to check it worked
console.log( 'supplyChanges equals:'+ supplyChanges ); //console.logged them to check it worked

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log( 'the second item in supplyChanges is:', supplyChanges[1] );  //main way i would do it
console.log( 'the second item in supplyChanges is: '+ supplyChanges[1] ); //alternative if item needed to be a string
//console.logged them to check it worked

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
// supplyChanges.pop();  // this alone only REMOVES ITEM, doesn NOT console.log anything\
console.log( 'Removing last item, which is:', supplyChanges.pop() ); // ".pop" REMOVES LAST item in array
//puting the actual command INSIDE a console.log does both remove and Console.log the item
console.log( 'now supplyChanges is:', supplyChanges );


// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
//I noticed it doesn't ask us to console.log it. i would use a different code if it did. I think.
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push ( 40 ); //".push" ADDS item to the END of the array
console.log( 'supplyChanges array is now:', supplyChanges );


// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');

//works with just a FOR 
console.log( ' ----6 answer 1--FOR LOOP--');
for ( let x=0; x<supplyChanges.length; x++ ) { //for loop. x = value of array
    // console.log( 'supplyChanges v2', supplyChanges[ x ] ); //console.logs all items in array.
    //console.loging all items in array is not required of question, so i deactivated it.
    if( supplyChanges[ x ] > 0 ){ // if item is GREATER than 0, aka POSITIVE then do
        console.log( 'Added', supplyChanges[x],'parts', '- (b/c item is POSITIVE)' ); //console.log "added [x] parts" 
    } else if ( supplyChanges[x] === 0 ){ // but IF item is equal to 0, 
        console.log( 'No change', '- (b/c index item is', supplyChanges[x], ')'  ); //console.log "no change"
    } else { //if ( ( supplyChanges[x] < 0 ) {     <<<---- in THEORY could do else if, but longer code
        console.log('Removed', supplyChanges[x], 'parts. (b/c item is NEGATIVE)' );
    }
}




console.log( ' ----6 answer 2--For IN Loop--');
//works with a FOR IN loop  also
for ( x in supplyChanges ) { //for loop. x = value of array
    if( supplyChanges[ x ] > 0 ){ // if item is GREATER than 0, aka POSITIVE then do
        console.log( 'Added', supplyChanges[x],'parts', '- (b/c item is POSITIVE)' ); //console.log "added [x] parts" 
    } else if ( supplyChanges[x] === 0 ){ // but IF item is equal to 0, 
        console.log( 'No change', '- (b/c index item is', supplyChanges[x], ')'  );
    } else {
        console.log('Removed', supplyChanges[x], 'parts. (b/c item is NEGATIVE)' );
    }
}


// if( supplyChanges[ x ] > 0 ); {
//     console.log( 'supplyChanges v2 is POSITIVE' ); 
// }


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');


//WORKS with FOR OF loop  - Basicly just SWAPS out all "supplyChanges[x]" for "x" variable. That's basicly it.
//uses the array object OF the array. as a string and not the actual number value?
console.log( ' ----6 answer 3--For OF Loop--');
for ( x of supplyChanges ) { //for loop. x = value of array
    if( x > 0 ){ // if item is GREATER than 0, aka POSITIVE then do
        console.log( 'Added', x,'parts', '- (b/c item is POSITIVE)' ); //console.log "added [x] parts" 
    } else if ( x === 0 ){ // but IF item is equal to 0, 
        console.log( 'No change', '- (b/c index item is', x+ ')'  );
    } else {
        console.log('Removed', x, 'parts. (b/c item is NEGATIVE)' );
    }
}


// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');