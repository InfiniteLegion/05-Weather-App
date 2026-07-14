import { mdiMagnify } from "@mdi/js";
import { createIcon } from "./common.js";

export function renderHeaderExtras() {
    renderSearchBtn();
}

function renderSearchBtn() {
    const btn = document.getElementById('search-btn');
    const icon = createIcon(mdiMagnify, { className: 'icon icon-search', title: 'Search' });

    btn.append(icon);
}