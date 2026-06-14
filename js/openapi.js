

const imageBaseUrl = "https://www.artic.edu/iiif/2";

function loadKusamaImages() {
    fetch("https://api.artic.edu/api/v1/artworks/search?q=Yayoi+Kusama&limit=1&fields=id,title,artist_display,image_id")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("kusamaImages");
            container.innerHTML = "";

            data.data.forEach(artwork => {
                const imgElement = document.createElement("img");
                imgElement.src = `${imageBaseUrl}/${artwork.image_id}/full/843,/0/default.jpg`;
                imgElement.alt = artwork.title;
                container.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching artwork:', error));
}

document.getElementById("kusamaButton").addEventListener("click", loadKusamaImages);

function loadGeorgiaImages() {
    fetch("https://api.artic.edu/api/v1/artworks/search?q=Georgia+O'Keeffe&limit=1&fields=id,title,artist_display,image_id")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("georgiaImages");
            container.innerHTML = "";

            data.data.forEach(artwork => { //adds image associated with the API data to the page
                const imgElement = document.createElement("img");
                imgElement.src = `${imageBaseUrl}/${artwork.image_id}/full/843,/0/default.jpg`;
                imgElement.alt = artwork.title;
                container.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching artwork:', error));
}

document.getElementById("georgiaButton").addEventListener("click", loadGeorgiaImages); // executes the function to show the image when the button is clicked. 