async function getSkins() {
    let url = "https://fortnite-api.com/v2/shop";
    let response = await fetch(url);
    console.log("status is" + response.status);
    let items = await response.json();
    const container = document.getElementById("skinContainer");
    // container.innerText = items.data.entries[2].brItems[0].name;
    for (let item of items.data.entries) {
        if (Object.hasOwn(item, "brItems") && !(Object.hasOwn(item, "bundle"))) {
            if (item.brItems[0].type.value == "outfit") {
                const new_item = document.createElement("img");
                new_item.src = item.brItems[0].images.icon;
                // new_item.innerText = "fart it out";
                container.appendChild(new_item);
            }
        }
    }
}

async function loadItems() {
    let url = "https://fortnite-api.com/v2/shop";
    let response = await fetch(url);
    const items = await response.json();
    const skinContainer = document.getElementById("skinContainer");
    const backContainer = document.getElementById("backContainer");
    const glideContainer = document.getElementById("glideContainer");
    const pickContainer = document.getElementById("pickContainer");
    const jamContainer = document.getElementById("jamContainer");
    let index = 0;
    for (let item of items.data.entries) {
        // if item is an actual item and not in a bundle, may change
        const curIndex = index;
        if (Object.hasOwn(item, "brItems") && !(Object.hasOwn(item, "bundle"))) {

            if (item.brItems[0].type.value == "outfit") {
                const new_item = document.createElement("img");
                new_item.addEventListener("click", () => {
                    itemPage(curIndex)
                })
                new_item.src = item.brItems[0].images.icon;
                skinContainer.appendChild(new_item);

            } else if (item.brItems[0].type.value == "backpack") {
                const new_item = document.createElement("img");
                new_item.addEventListener("click", () => {
                    itemPage(curIndex)
                })
                new_item.src = item.brItems[0].images.icon;
                backContainer.appendChild(new_item);

            } else if (item.brItems[0].type.value == "glider") {
                const new_item = document.createElement("img");
                new_item.addEventListener("click", () => {
                    itemPage(curIndex)
                })
                new_item.src = item.brItems[0].images.icon;
                glideContainer.appendChild(new_item);

            } else if (item.brItems[0].type.value == "pickaxe") {
                const new_item = document.createElement("img");
                new_item.addEventListener("click", () => {
                    itemPage(curIndex)
                })
                new_item.src = item.brItems[0].images.icon;
                pickContainer.appendChild(new_item);
            }

        } else if (Object.hasOwn(item, "tracks") && !(Object.hasOwn(item, "bundle"))) {
            // for jam tracks
            const new_item = document.createElement("img");
            new_item.addEventListener("click", () => {
                itemPage(curIndex)
            })
            new_item.src = item.tracks[0].albumArt;
            jamContainer.appendChild(new_item);
        }
        index++;

    }
}

function itemPage(index) {
    alert(index);
}




// document.getElementById("outfits").addEventListener('click', getSkins);

loadItems();
document.getElementById("outfits").addEventListener('click', () => {
    skinContainer.classList.toggle("hidden");
})
document.getElementById("pickaxes").addEventListener('click', () => {
    pickContainer.classList.toggle("hidden");
})
document.getElementById("backblings").addEventListener('click', () => {
    backContainer.classList.toggle("hidden");
})
document.getElementById("gliders").addEventListener('click', () => {
    glideContainer.classList.toggle("hidden");
})
document.getElementById("jamTracks").addEventListener('click', () => {
    jamContainer.classList.toggle("hidden");
})