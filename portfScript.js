// --- JavaScript for Dynamic Liquid Effect ---

const turbulence = document.querySelector('#liquidFilter feTurbulence');

if (turbulence) {
    let turbulenceFrequencyX = 0.005;
    let turbulenceFrequencyY = 0.009;
    let seed = 1;

    // Animates the 'seed' attribute of the turbulence filter
    function animateLiquid() {
        seed += 0.05; // Change this value to speed up or slow down the "liquid" flow

        // Set the new baseFrequency based on the changing seed
        turbulence.setAttribute('baseFrequency', 
            `${turbulenceFrequencyX} ${turbulenceFrequencyY + Math.sin(seed * 0.01) * 0.003}`
        );
        
        requestAnimationFrame(animateLiquid);
    }

    animateLiquid();
} else {
    console.log("SVG Turbulence filter not found. Static CSS effect applied.");
}