// business

async function loadBusiness() {
    try {
        const response = await fetch("business.json");
        const data = await response.json();

        renderBusiness(data);
    } catch (error) {
        console.error("Error al cargar JSON de business:", error);
    }
}

function renderBusiness(data) {
    const header = document.getElementById("header")
    header.style.backgroundImage = `url(${data.banner})`
}


// menu

async function loadMenu() {
    try {
        const response = await fetch("menu.json");
        const data = await response.json();

        renderMenu(data);
    } catch (error) {
        console.error("Error al cargar JSON de menu:", error);
    }
}

function renderMenu(data) {
    const sections = [...new Set(data.map(item => item.section))];

    // nav
    sections.forEach(item => {
        const nav = document.getElementById("nav")
        const anchor = document.createElement("a")
        anchor.href = `#link-${item.toLowerCase().replace(" ", "-")}`
        anchor.textContent = item;
        nav.appendChild(anchor)
    })

    // secciones
    sections.forEach(item => {
        const main = document.getElementById("main");
        const sectionElement = document.createElement("div")
        sectionElement.classList.add("secciones")

        sectionElement.innerHTML = `
        <h2 id="link-${item.toLowerCase().replace(" ", "-")}">${item.toUpperCase()}</h2>
        <div class="cards-container" id="${item.toLowerCase().replace(" ", "-")}"></div>
        `;

        main.appendChild(sectionElement);
    })

    // tarjetas
    if (sections.length > 0) {
        data.forEach(item => {
            const productContainerBySection = document.getElementById(item.section);
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
            <img class="card-image" src="${item.image}" alt="${item.id}">
            <div class="card-texts">
                <div>
                    <h3 style="font-weight: normal;">${item.title}</h3>
                    <p style="padding-top: 5px">${item.description}</p>
                </div>
                <span><strong>$${item.price.value}</strong></span>
            </div>
            `;
            productContainerBySection.appendChild(card);
        });
    }
}

loadBusiness();
loadMenu();
