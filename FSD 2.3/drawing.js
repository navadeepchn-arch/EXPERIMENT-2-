const svg = document.getElementById("svgCanvas");
const colorPicker = document.getElementById("colorPicker");

let drawing = false;
let currentPath = null;
let paths = [];

/* Convert mouse position to SVG coordinates */
function getMousePosition(evt) {
    const point = svg.createSVGPoint();
    point.x = evt.clientX;
    point.y = evt.clientY;
    return point.matrixTransform(svg.getScreenCTM().inverse());
}

/* Mouse down */
svg.addEventListener("mousedown", (e) => {
    drawing = true;
    const pos = getMousePosition(e);

    currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    currentPath.setAttribute("d", `M ${pos.x} ${pos.y}`);
    currentPath.setAttribute("stroke", colorPicker.value);
    currentPath.setAttribute("stroke-width", "2");
    currentPath.setAttribute("fill", "none");

    svg.appendChild(currentPath);
    paths.push(currentPath);
});

/* Mouse move */
svg.addEventListener("mousemove", (e) => {
    if (!drawing) return;

    const pos = getMousePosition(e);
    let d = currentPath.getAttribute("d");
    currentPath.setAttribute("d", d + ` L ${pos.x} ${pos.y}`);
});

/* Mouse up */
svg.addEventListener("mouseup", () => {
    drawing = false;
});

/* Undo last drawing */
function undo() {
    if (paths.length > 0) {
        svg.removeChild(paths.pop());
    }
}
