document.getElementById("fetchButton").addEventListener("click", getApi);

function getApi() {
    const characterName = document.getElementById("characterInput").value.trim();
    const fullUri = `https://www.swapi.tech/api/people/?name=${characterName}`;

    fetch(fullUri)
        .then(response => response.json())
        .then(data => {
            if (data.result && data.result[0]) {
                const { height, mass, gender, hair_color } = data.result[0].properties;
                document.getElementById("outputBox").value = `Name: ${characterName}\nHeight: ${height} cm\nMass: ${mass} kg\nGender: ${gender}\nHair Color: ${hair_color}`;
            } else {
                document.getElementById("outputBox").value = "Character not found. Please try another name.";
            }
        })
        .catch(err => {
            console.error(err);
            document.getElementById("outputBox").value = "An error occurred. Please try again later.";
        });
}
