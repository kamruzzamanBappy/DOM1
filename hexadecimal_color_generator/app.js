//1. Create onload handler
window.onload = () =>{
    main();
};
function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');

    btn.addEventListener('click',function () {
        const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
        
    });
}

//2. random hexacolor generator
//255,255,255 => FF FF FF
function generateHexColor(){
    const red = Math.floor(Math.random() * 255);
    const green= Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;}

