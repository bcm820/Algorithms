
// Notes compiled while studying https://github.com/rse/es6-features

/*
 * Variables & Scoping
*/

    // Constants are immutable variables which can't be reassigned
    const PI = 3.141593

    // Using 'let' (and 'const'), we can declare block-scoped variables
    for (let i = 0; i < 10; i++) { /* do a */ }
    for (let i = 11; i < 20; i++) { /* do b */ }

    // Function definition is also block-scoped
    function foo() { return 1 }
    {
        function foo() { return 2 }
        console.log(foo()) // prints 2
    }
    console.log(foo()) // prints 1

//

/*
 * Arrow Functions
*/

    // Allows cleaner closure syntax
    const evens = [2,4,6,8,10,12,14,16]
    let odds = evens.map(v => v + 1)
    let pairs = evens.map(v => ({ even: v, odd: v + 1 }))
    let numPlusIdx = evens.map((v, i) => v + i)

    // Intuitive handling of current object context (this)
    this.evens.forEach((v) => {
        console.log(v)
    })

//

/*
 * Template Literals
*/

    // Expressive interpolation for single/multi-line strings
    var customer = { name: "Foo" }
    var card = { amount: 7, product: "Bar", unitprice: 42 }
    var message = `Hello ${customer.name},
    want to buy ${card.amount} ${card.product} for
    a total of ${card.amount * card.unitprice} bucks?`

//

/*
 * Extended Parameter Handling
*/

    // Default parameter values
    function f(x, y = 2, z = 3) {
        return x + y + z
    }
    console.log(f(1)) // prints 6
    console.log(f(1, 1, 1)) // prints 3


    // Rest param aggregates remaining multi args into an array
    function f(x, y, ...a) {
        console.log(a)
    }
    f(1, 2, 3, 4, 5) // prints [3, 4, 5]


    // Spread operator spreads iterables into literal elements
    let arr1 = [3, 4, 5]
    let arr2 = [1, 2, ...arr1] // [ 1, 2, 3, 4, 5 ]

    function f (x, y, ...a) {
        console.log(a)
    }
    f(1, 2, ...arr1) // prints [3, 4, 5]

    let str = "foo"
    let chars = [...str] // ["f", "o", "o"]

//

/*
 * Enhanced Object Properties
*/

    // Shorter syntax for common object props
    let obj = { x, y } // same as { x: x, y: y }


    // Variable/computed property names using [] when creating objects
    let baz = 'qux'
    let obj = {
        foo: "bar",
        [baz]: 42,
        ['baz' + baz]: 38
    }


    // Method notation in objects for regular and generator functions
    let obj = {
        foo (a, b) { /* ... */ },
        *bar (a, b) { /* ... */ }
    }

//

/*
 * Destructuring Assignment
*/

    // Destructuring of arrays into individual variables
    let list = [1, 2, 3]
    let [a, , b] = list
    [b, a] = [a, b] // no more temp variable needed!

    // Destructing objects into individual variables
    let { op, lhs, rhs } = getASTNode() // shorthand notation
    var { op: a, lhs: { op: b }, rhs: c } = getASTNode() // deep matching

    // Default values for destructuring of arrays and objects
    var list = [ 1 ]
    var [ x, y = 2 ] = list
    var obj = { a: 1 }
    var { a, b = 2 } = obj

    // Destructuring arrays/objects during function calls
    function f ([ name, val ]) {
        console.log(name, val)
    }
    function g ({ name: n, val: v }) {
        console.log(n, v)
    }
    f([ "bar", 42 ])
    g({ name: "foo", val:  7 })

    // Fail-soft destructuring, optionally with defaults
    var list = [7, 42]
    var [a = 1, b = 2, c = 3, d] = list
    // a = 7
    // b = 42
    // c = 3 (by default)
    // d = undefined (no default val)

//