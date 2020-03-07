// let canvas, context, image, paintButton, makeWhtBtn;
//
// const init = ()=> {
//     canvas = document.getElementById('Canvas');
//     paintButton = document.getElementById('paintBtn');
//     makeWhtBtn = document.getElementById('makeWht');
//     invertBtn = document.getElementById('invertColor');
//     context = canvas.getContext('2d');
//     image = document.getElementById('srcImg');
//     addEventListeners();
// };
//
// const addEventListeners = () => {
//     paintButton.addEventListener('click', () => drawImage(image));
//     makeWhtBtn.addEventListener('click', clickToMakeWhite);
//     invertBtn.addEventListener('click', clickToInvert);
// };
//
// const drawImage = (img) => {
//     canvas.width = img.width;
//     canvas.height = img.height;
//     context.drawImage(image, 0, 0);
// };
//
// const invertColor = (data) => {
//     for(let i=0; i < data.length; i += 4) {
//         data[i] = data[i]^255;
//         data[i+1] = data[i+1]^255;
//         data[i+2] = data[i+2]^255;
//     }
// };
//
// const makeWht = (data) => {
//     data.forEach((e, ind) => {
//         data[ind] = 255;
//     });
// };
//
// const clickToInvert = () => {
//     let imageData = context.getImageData(0,0,canvas.width,canvas.height);
//     invertColor(imageData.data);
//     context.putImageData(imageData, 0, 0);
// };
//
// const clickToMakeWhite = () => {
//     let imageData = context.getImageData(0,0,canvas.width,canvas.height);
//     makeWht(imageData.data);
//     context.putImageData(imageData, 0, 0);
// };
//
// window.addEventListener('load', init);

const onInit = () => {
    const canvas = document.getElementById('Canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    const invertColorBtn = document.getElementById('invertColor');
    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        invertColorBtn.addEventListener('click', () => {
            invertColor(imageData);
            ctx.putImageData(imageData, 0, 0);
        });
        console.log(imageData);
    };
    img.src = 'tracer.jpg';
};

const invertColor = (data) => {
    for(let i=0; i < data.data.length; i+=4){
        data.data[i] = data.data[i+1] = data.data[i+2] = 0;
    }
    return data;
};



window.addEventListener('load', onInit);