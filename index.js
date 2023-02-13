const slide1 = document.querySelector("#slide-1");
const slide2 = document.querySelector("#slide-2");
const slide3 = document.querySelector("#slide-3");
const slide4 = document.querySelector("#slide-4");
const slide5 = document.querySelector("#slide-5");
const slide6 = document.querySelector("#slide-6");

const imgSlide = document.querySelector(".slides");


slide1.addEventListener("click", () => {
    const imagem = document.createElement("img");
    imagem.src = "Tabela 01.png";
    imagem.setAttribute("class", "imagem-slide");
    imgSlide.innerHTML = '';
    imgSlide.append(imagem);
});

slide2.addEventListener("click", () => {
    const imagem = document.createElement("img");
    imagem.src = "Tabela 02.png";
    imagem.setAttribute("class", "imagem-slide");
    imgSlide.innerHTML = '';
    imgSlide.append(imagem);
});

slide3.addEventListener("click", () => {
    const imagem = document.createElement("img");
    imagem.src = "Tabela 03.png";
    imagem.setAttribute("class", "imagem-slide");
    imgSlide.innerHTML = '';
    imgSlide.append(imagem);
});

slide4.addEventListener("click", () => {
    const imagem = document.createElement("img");
    imagem.src = "Tabela 04.png";
    imagem.setAttribute("class", "imagem-slide");
    imgSlide.innerHTML = '';
    imgSlide.append(imagem);
});

slide5.addEventListener("click", () => {
    const imagem = document.createElement("img");
    imagem.src = "Tabela 05.png";
    imagem.setAttribute("class", "imagem-slide");
    imgSlide.innerHTML = '';
    imgSlide.append(imagem);
});

slide6.addEventListener("click", () => {
    const imagem = document.createElement("img");
    imagem.src = "Tabela 05.png";
    imagem.setAttribute("class", "imagem-slide");
    imgSlide.innerHTML = '';
    imgSlide.append(imagem);
});