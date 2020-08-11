let names = [ 'Westly Snipes', 'Nicholas Cage', 'Nasir Jones', 'Sean Carter', 'Sean Combs', 'Michael Jordan', 'Patrick Ewing']

first_names = []
last_names = []

for (let i=0; i < names.length; i++){
    let fullName = names[i];
    let separatedNames = fullName.split(" ");
    first_names.push(separatedNames[0]);
    last_names.push(separatedNames[1]);
        
}
console.log(first_names)
console.log(last_names)
