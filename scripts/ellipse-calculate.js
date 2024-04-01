function calculateEllipseArea(){
    // get semi-major of the ellipse
    const semiMajorInput = document.getElementById('ellipse-semi-major');
    const semiMajorText = semiMajorInput.value;
    const semiMajor = parseFloat(semiMajorText)
    console.log(semiMajor);

    
    // get semi-minor of the ellipse
    const semiMinorInput = document.getElementById('ellipse-semi-minor');
    const semiMinorText = semiMinorInput.value;
    const semiMinor = parseFloat(semiMinorText)
    console.log(semiMinor);

    // calculate  Area ellipse

    const area = semiMajor * semiMinor;
    console.log('Area of the ellipse:',area);

    // display area pentagon

    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area;
}