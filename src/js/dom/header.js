import { mdiMagnify } from "@mdi/js";
import { createIcon } from "./common.js";
import { getCityWeather } from "../api/weatherApi.js";
import { renderMain } from "./main.js";

export function renderHeaderExtras() {
    renderSearchBtn();
}

function renderSearchBtn() {
    const btn = document.getElementById('search-btn');
    const icon = createIcon(mdiMagnify, { className: 'icon icon-search', title: 'Search' });

    btn.append(icon);
    btn.addEventListener('click', () => {
        search();
    });

    document.getElementById('search-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            search();
            e.target.blur();
        }
    });
}

async function search() {
    const unit = document.getElementById('search-select-temperature').value;
    const input = document.getElementById('search-input');
    const city = input.value.trim();

    if (city.length > 0) {
        const data = await getCityWeather(city, unit);

        if (!data) {
            showError('Could not found city. Check enter data');
            return;
        }
        
        hideError();
        renderMain(city, data, unit);
        input.value = '';
    }
}

function showError(message) {
    const modal = document.getElementById('modal-error');
    const text = document.getElementById('modal-error-text');

    text.textContent = message;
    
    modal.style.display = 'flex';
}

function hideError() {
    const modal = document.getElementById('modal-error');
    modal.style.display = 'none';
    document.getElementById('search-input').value = '';
}

document.getElementById('modal-error-close').addEventListener('click', hideError);