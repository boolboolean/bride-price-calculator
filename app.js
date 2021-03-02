const calculate = () => {
    let name = document.getElementById('name').value;
    let price = document.getElementById('startingBid').value;
    let letter = document.getElementById('letter').value;

    if (name != "" && price != "") {
        price = Number(price);

        const education = document.getElementById('education').value;
        price *= Number(education);

        const family = document.getElementById('family').value;
        price *= Number(family);

        const skills = document.getElementsByName('skills');

        skills.forEach(skill => {
            if (skill.checked) {
                price += Number(skill.value);
            }
        })

        const ages = document.getElementsByName('ages');

        ages.forEach(age => {
            if (age.checked) {
                price *= Number(age.value);
            }
        })

        const gossips = document.getElementsByName('gossips');

        for (var i = 0; i < gossips.length; i++) {
            if (gossips[i].checked && gossips[i].value == '200') {
                price -= Number(gossips[i].value);
            } else if (gossips[i].checked) {
                price *= Number(gossips[i].value);
            }
        }

        let person = {
            bride_name: name,
            bride_price: price,
            letter_to_bride: letter
        }

        alert(`The price for your bride ${person.bride_name} is ${person.bride_price}. Your love letter is "${person.letter_to_bride}"`);
    } else {
        alert('Enter name and starting bid!');
    }
}

let button = document.getElementById('button');
button.addEventListener('click', calculate);