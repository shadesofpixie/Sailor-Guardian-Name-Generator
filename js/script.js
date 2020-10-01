function generator() {

    // arrays for random names
    var firstName = ['Queen', 'Princess', 'Sailor'];
    var secondName = ['Andromeda', 'Cosmos', 'Ursa', 'Lyra', 'Aquila', ];
    var thirdName = [', Protector of Light', ', Crystal Wielder', ', Guider of Peace', ', Keeper of Reality', ', Ruler of Time', ', Warrior of Justice', ', Guardian of Mercy', ', Guardian of Fate', ', Desire Curator'];

    // combining names to get a randomized sailor guardian title
    var name = firstName[Math.floor(Math.random() * firstName.length)] + ' ' + secondName[Math.floor(Math.random() * secondName.length)]
                     + thirdName[Math.floor(Math.random() * thirdName.length)];

  
    if (document.getElementById("name")) {
        document.getElementById("placeholder").removeChild(document.getElementById("name"));
    }


    var element = document.createElement('div');
    element.setAttribute('id', 'name');
    element.appendChild(document.createTextNode(name));
    document.getElementById("placeholder").appendChild(element);
}


generator();
