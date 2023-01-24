const option = {
    a: 'apple',
    b: 'bird',
    c: 'city',
    d: 'desk',
    e: 'end',
    f: 'forEach',
    g: 'gold',
}

let key = document.getElementById("key")
let value = document.getElementById("value")


for (let k in option){
    let optKey = document.createElement('option');
    optKey.textContent = k;
    optKey.value = k;
    key.append(optKey)

    let optValue = document.createElement('option');
    optValue.textContent = option[k];
    optValue.value = option[k];
    value.append(optValue)
}

key.onchange = () => {
    let i = key.selectedIndex;
    value.options[i].selected = true
};

value.onchange = () => {
    let i = value.selectedIndex;
    key.options[i].selected = true
};



