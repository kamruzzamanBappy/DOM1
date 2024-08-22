// 1 create onload handler
window.onload = () =>{
    main();
}

function main(){
    //3. collect all necessary reference
    const root = document.getElementById('root')
    const btn = document.getElementById('change-btn')

    //4. handle the click event
    btn.addEventListener('click',function(){
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    })

}

//2.  random color generator
function generateRGBColor(){
    // rgb(0,0,0) rgb(255,255,255)
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `rgb( ${red}, ${green}, ${blue})`
}