let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function

// and pass it to .map()
let firstInitials = names.map(function(name) {
    return name.charAt(0);
});

console.log(firstInitials);
