function calculateParallelogramArea(){
    // get base of the parallelogram
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText)
    console.log(base);

    
    // get hight of the parallelogram
    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText)
    console.log(height);

    // calculate  Area parallelogram

    const area = base * height;
    console.log('Area of the parallelogram:',area);

    // display area parallelogram

    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}

    