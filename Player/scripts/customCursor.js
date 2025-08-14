export function customCursor(){
    document.body.style.cursor = "none";
    const cursor = document.createElement("div");
    const minCursor = document.createElement("div");
    cursor.className = "cursor";
    Object.assign(cursor.style, {
        position: "fixed",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "2px solid white",
        zIndex: "1000",
        transition: "border 0.1s, transform 0.1s",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        // backdropFilter: "brightness(200%)",
    });

    minCursor.className = "cursor";
    Object.assign(minCursor.style, {
        position: "fixed",
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        background: "rgb(255,255,255)",
        zIndex: "1000",
        transition: "0.2s linear",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        // boxShadow: "0 0 10px white",
    });
    minCursor.style.boxShadow = "0 0 10px red";
    document.body.appendChild(cursor);
    document.body.appendChild(minCursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let miniX = 0, miniY = 0;
    
    const speedMain = 0.6;
    const speedMini = 0.8; // Slower for trailing effect

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const curSize = cursor.getBoundingClientRect();
    const minCurSize = minCursor.getBoundingClientRect();
    document.addEventListener("mousemove", event => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = "0";
        minCursor.style.opacity = "0";
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = "1";
        minCursor.style.opacity = "1";
    });


    function animate(){
        cursorX += (mouseX - cursorX) * speedMain;
        cursorY += (mouseY - cursorY) * speedMain;
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        // Trailing dot
        miniX += (mouseX - miniX) * speedMini;
        miniY += (mouseY - miniY) * speedMini;
        minCursor.style.left = `${miniX}px`;
        minCursor.style.top = `${miniY}px`;

        requestAnimationFrame(animate);
    }
    animate();


    const interactiveTags = ["a", "button", "input", "textarea", "select", "[role='button']"];

    document.addEventListener("mousedown", e => {
        if (interactiveTags.some(tag => e.target.matches(tag))) {
            cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
            cursor.style.borderColor = "#ff0";
        }
    });

    document.addEventListener("mouseup", e => {
        if (interactiveTags.some(tag => e.target.matches(tag))) {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
            cursor.style.borderColor = "white";
        }
    });
}