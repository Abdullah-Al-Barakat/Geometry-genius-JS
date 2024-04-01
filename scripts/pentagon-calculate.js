function calculatePentagonArea(){
    // get perimeter of the pentagon
    const perimeterInput = document.getElementById('pentagon-perimeter');
    const perimeterText = perimeterInput.value;
    const perimeter = parseFloat(perimeterText)
    console.log(perimeter);

    
    // get apothem of the pentagon
    const apothemInput = document.getElementById('pentagon-apothem');
    const apothemText = apothemInput.value;
    const apothem = parseFloat(apothemText)
    console.log(apothem);

    // calculate  Area pentagon

    const area = perimeter * apothem;
    console.log('Area of the pentagon:',area);

    // display area pentagon

    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = area;
}