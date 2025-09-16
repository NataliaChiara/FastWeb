function createModal() {
    const body = document.body
    const modalBg = document.createElement("div")
    modalBg.classList.add("modal-bg")
    modalBg.id = "modal-bg"

    modalBg.innerHTML = `
        <div class="modal-body">
            <button onclick="deleteModal()">Close</button>
            <div id="modal-container" class="modal-container">
                <button onclick="submitImageModal()">Subir imagen</button>
                <button>Agregar link</button>
                <button>Seleccionar de galería</button>
            </div>
        </div>
    `;

    body.appendChild(modalBg)
}

function deleteModal() {
    const modalBg = document.getElementById("modal-bg")
    modalBg.remove()
}

function submitImageModal() {
    const modalContainer = document.getElementById("modal-container")

    modalContainer.innerHTML = `
    <div>
        <div class="upload-image-container">
            <img class="upload-image" id="upload-image" src="./assets/subir-imagen.png" alt="subir-imagen-icono">
            <input class="upload-image-input" onchange="uploadImageChange()" type="file" name="input-image" id="input-image" accept="image/*">
        </div>
        <button onclick="submitImage()" type="submit">Enviar</button>
    </div>
    `
}

function submitImage() {
    const formImage = document.getElementById("form-image")
    deleteModal()

    const link = getLink()

    if (link) {
    formImage.src = link
    }
}

function getLink() {
    // aca tendria que ir el proceso de subir la imagen al backend y que devuelva la url, ahora lo voy a fingir con esto
    return "https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqXakvb9/200/200/original?country=ar"
}

function uploadImageChange() {
    const input = document.getElementById('input-image');
    const preview = document.getElementById('upload-image');

    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        preview.src = "./assets/subir-imagen.png";
    }
}

