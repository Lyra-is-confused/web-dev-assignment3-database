
const nameInput = document.getElementById('unicornNameInput');
const lovesInput = document.getElementById('unicornLovesInput');
const weightInput = document.getElementById('unicornWeightInput');
const genderInput = document.getElementById('unicornGenderInput');
const vampiresExistInput = document.getElementById('unicornVampiresExistsInput');
const vampiresInput = document.getElementById('unicornVampiresInput');
const vaccinatedInput = document.getElementById('unicornVaccinatedInput');
const queryButton = document.getElementById('QueryUnicornsButton')
const resultDiv = document.getElementById('results')


async function QueryUnicorns() {
    resultDiv.innerHTML = ``
    try{
    const result = await fetch(`https://web-dev-assignment3-database.onrender.com/unicorns?name=${nameInput.value}&loves=${lovesInput.value}&gtweight=${weightInput.value}&gender=${genderInput.value}&hasvampires=${vampiresExistInput.value}&gtvampires=${vampiresInput.value}&vaccinated=${vaccinatedInput.value}`);
    const resultJSON = await result.json();
    //console.log(resultJSON);
    populateUnicorns(resultJSON)
    }catch (error){
        console.error("problem fetching Unicorns.")
    }
}

function populateUnicorns(unicorns) {
    unicorns.forEach(unicorn => {
        const wrapper = document.createElement("div");

        let html = `
        <div class="bg-white p-10 rounded-lg flex flex-col space-y-5">
        <h2 class="text-2xl font-bold">${unicorn.name}</h2>
        `;

        if (document.getElementById('loves').checked) {
        html += `<p>Loves: ${unicorn.loves}</p>`;
        }
        if (document.getElementById('weight').checked) {
        html += `<p>Weight: ${unicorn.weight}</p>`;
        }
        if (document.getElementById('gender').checked) {
            if (unicorn.gender == "m")
                html += `<p>Gender: Male</p>`;
            else {
                html += `<p>Gender: Female</p>`;
            }
        }
        if (document.getElementById('vampires').checked) {
        html += `<p>Vampires: ${unicorn.vampires}</p>`;
        }
        if (document.getElementById('vaccinated').checked) {
        html += `<p>Vaccinated: ${unicorn.vaccinated}</p>`;
        }
        if (document.getElementById('vampiresExists').checked) {
        html += `<p>Vampires Exists: ${unicorn.vampiresExists}</p>`;
        }

        html += `</div>`;
        wrapper.innerHTML = html;

        resultDiv.appendChild(wrapper);
    });

}


queryButton.addEventListener('click', QueryUnicorns)