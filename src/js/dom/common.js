export function createIcon(path, { color = 'currentColor', className = '', title = '' } = {}) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    
    if (className) {
        svg.setAttribute('class', className);
    }

    if (title) {
        const titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        titleEl.textContent = title;
        svg.append(titleEl);
    }

    const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl.setAttribute('fill', color);
    pathEl.setAttribute('d', path);

    svg.append(pathEl);
    return svg;
}