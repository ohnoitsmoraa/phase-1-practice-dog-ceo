console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
      const imageDiv = document.getElementById("dog-image-container");
      data.forEach((imgUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Image of a dog";
        imageDiv.appendChild(img);
      });
    });

  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      const breedsUrl = document.getElementById("dog-breeds");
      const breeds = Object.keys(data.message);
      const renderBreeds = (renderBreeds) => {
        breedsUrl.innerHTML = "";
        renderBreeds.forEach((breed) => {
          const li = document.createElement("li");
          li.textContent = breed;
          li.addEventListener("click", () => {
            li.style.color = "red";
          });
          breedsUrl.appendChild(li);
        });
      };
      renderBreeds(breeds);
      const breedDropDown = document.getElementById("breed-dropdown");
      breedDropDown.addEventListener("change", () => {
        const selectedLetter = breedDropDown.value;
        const filteredBreeds =
          selectedLetter === "all"
            ? breeds
            : breeds.filter((breed) => breed.startsWith(selectedLetter));
        renderBreeds(filteredBreeds);
      });
    });
});
