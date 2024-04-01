function calculateRhombusArea(){
    // get d1 of the rhombus
    const d1Input = document.getElementById('rhombus-d1');
    const d1Text = d1Input.value;
    const d1 = parseFloat(d1Text)
    console.log(d1);

    
    // get d2 of the rhombus
    const d2Input = document.getElementById('rhombus-d2');
    const d2Text = d2Input.value;
    const d2 = parseFloat(d2Text)
    console.log(d2);

    // calculate  Area rhombus

    const area = d1 * d2;
    console.log('Area of the rhombus:',area);

    // display area rhombus

    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
}