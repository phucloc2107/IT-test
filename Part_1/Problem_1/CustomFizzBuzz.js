// Problem 1: Custom FizzBuzz
// Write a program that prints the numbers from 1 to 100. However, for multiples of a given
// number x, print &quot;Foo&quot; instead of the number, and for multiples of another given
// number y, print &quot;Bar&quot;. For numbers which are multiples of both x and y, print &quot;FooBar&quot;.
// The values of x and y should be input by the user.
// Example Output (for x=3, y=5):
// 1
// 2
// Foo
// 4
// Bar
// ...
// 14
// FooBar
// 16
// ...

function PrintFooBar(x,y) {
    for (let i = 1; i <= 100; i++) {
        if (i % x === 0 && i % y === 0) { // Check if i % x and y === 0 -> print FooBar
            console.log("FooBar");
        } else if (i % x === 0) { // Check if i % x === 0 -> print Foo
            console.log("Foo");
        } else if (i % y === 0) {  // Check if i % y === 0 -> print Bar
            console.log("Bar");
        } else {  // if i % x !== 0 or i % y !== 0 -> print i
            console.log(i); 
        }
    }
}

// Call the function
PrintFooBar(3, 5);