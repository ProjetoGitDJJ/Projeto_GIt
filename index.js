const slide1 = document.querySelector("#slide-1");
const slide2 = document.querySelector("#slide-2");
const slide3 = document.querySelector("#slide-3");
const slide4 = document.querySelector("#slide-4");
const slide5 = document.querySelector("#slide-5");
const slide6 = document.querySelector("#slide-6");

const imgSlide = document.querySelector(".slides");


slide1.addEventListener("click", () => {
    const imagem = document.createElement("img");
    imagem.src = "tabela01.png";
    imagem.setAttribute("class", "imagem-slide");
    imgSlide.innerHTML = '';
    imgSlide.append(imagem);
});

slide2.addEventListener("click", () => {
    const imagem = document.createElement("img");
    imagem.src = "tabela02.png";
    imagem.setAttribute("class", "imagem-slide");
    imgSlide.innerHTML = '';
    imgSlide.append(imagem);
});

slide3.addEventListener("click", () => {
    const imagem = document.createElement("img");
    imagem.src = "tabela03.png";
    imagem.setAttribute("class", "imagem-slide");
    imgSlide.innerHTML = '';
    imgSlide.append(imagem);
});

slide4.addEventListener("click", () => {
    const imagem = document.createElement("img");
    imagem.src = "tabela04.png";
    imagem.setAttribute("class", "imagem-slide");
    imgSlide.innerHTML = '';
    imgSlide.append(imagem);
});

slide5.addEventListener("click", () => {
    const imagem = document.createElement("img");
    imagem.src = "tabela05.png";
    imagem.setAttribute("class", "imagem-slide");
    imgSlide.innerHTML = '';
    imgSlide.append(imagem);
});

slide6.addEventListener("click", () => {
    const imagem = document.createElement("img");
    imagem.src = "tabela05.png";
    imagem.setAttribute("class", "imagem-slide");
    imgSlide.innerHTML = '';
    imgSlide.append(imagem);
});