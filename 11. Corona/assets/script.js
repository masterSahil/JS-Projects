const GLOBAL_API_URL = "https://disease.sh/v3/covid-19/all";
const COUNTRIES_API_URL = "https://disease.sh/v3/covid-19/countries";

const globalStatsElement = document.getElementById('global-stats');
const countryCardsGrid = document.getElementById('country-cards-grid');
const lastUpdatedElement = document.getElementById('last-updated');
const errorMessageElement = document.getElementById('error-message');

// --- Fetch Data Without Retry ---
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch data:", url, error);
        errorMessageElement.classList.remove('hidden');
        throw error;
    }
}

// --- Render Global Stats ---
function renderGlobalStats(data) {
    // Inline formatting for timestamp
    lastUpdatedElement.textContent = "Last Updated: " + new Date(data.updated).toLocaleString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });

    const stats = [
        { title: "Total Cases", value: data.cases, today: data.todayCases, icon: "activity", color: "text-blue-400", bg: "bg-blue-900/30" },
        { title: "Total Deaths", value: data.deaths, today: data.todayDeaths, icon: "skull", color: "text-red-400", bg: "bg-red-900/30" },
        { title: "Total Recovered", value: data.recovered, today: data.todayRecovered, icon: "check-circle", color: "text-emerald-400", bg: "bg-emerald-900/30" },
        { title: "Active Cases", value: data.active, today: null, icon: "heart-pulse", color: "text-amber-400", bg: "bg-amber-900/30" },
        { title: "Critical", value: data.critical, today: null, icon: "thermometer", color: "text-orange-400", bg: "bg-orange-900/30", hidden: 'lg:block' },
        { title: "Population", value: data.population, today: null, icon: "users", color: "text-purple-400", bg: "bg-purple-900/30", hidden: 'lg:block' }
    ];

    globalStatsElement.innerHTML = stats.map(stat => `
        <div class="p-4 ${stat.bg} rounded-xl shadow-lg border-t-4 border-indigo-500/50 hover:shadow-2xl transition duration-300 ${stat.hidden || ''}">
            <div class="flex justify-between items-start">
                <div class="text-lg font-medium text-gray-300">${stat.title}</div>
                <i data-lucide="${stat.icon}" class="w-6 h-6 ${stat.color}"></i>
            </div>
            <div class="text-3xl font-bold mt-1">${Math.floor(stat.value).toLocaleString()}</div>
            ${stat.today !== null ? `
                <div class="text-sm mt-1 ${stat.today > 0 ? 'text-green-400' : (stat.title.includes('Deaths') && stat.today > 0) ? 'text-red-400' : 'text-gray-400'}">
                    ${stat.today > 0 ? '+' : ''}${Math.floor(stat.today).toLocaleString()} today
                </div>
            ` : '<div class="h-5 mt-1"></div>'}
        </div>
    `).join('');

    lucide.createIcons();
}

// --- Render Country Cards ---
function renderCountries(countries) {
    countryCardsGrid.innerHTML = '';
    if (!countries.length) {
        countryCardsGrid.innerHTML = '<div class="col-span-full text-center py-10 text-gray-400">No country data available.</div>';
        return;
    }

    const cardsHtml = countries.map(country => `
        <div class="bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-indigo-500/50 transition duration-300 transform hover:scale-[1.02]">
            <div class="flex items-center mb-4 border-b border-gray-700 pb-3">
                <img src="${country.countryInfo.flag}" alt="${country.country} flag" class="w-8 h-6 mr-3 rounded-md shadow-lg border border-gray-600">
                <h3 class="text-xl font-bold truncate">${country.country}</h3>
            </div>
            <div class="space-y-3">
                <div class="flex justify-between items-center text-gray-400">
                    <span class="font-medium flex items-center"><i data-lucide="map-pin" class="w-4 h-4 mr-2 text-indigo-400"></i> Continent:</span>
                    <span class="text-md font-semibold text-gray-300">${country.continent || 'N/A'}</span>
                </div>
                <div class="flex justify-between items-center text-blue-300">
                    <span class="font-medium flex items-center"><i data-lucide="activity" class="w-4 h-4 mr-2"></i> Total Cases:</span>
                    <span class="text-lg font-extrabold">${Math.floor(country.cases).toLocaleString()}</span>
                </div>
                <div class="flex justify-between items-center text-red-300">
                    <span class="font-medium flex items-center"><i data-lucide="skull" class="w-4 h-4 mr-2"></i> Total Deaths:</span>
                    <span class="text-lg font-extrabold">${Math.floor(country.deaths).toLocaleString()}</span>
                </div>
                <div class="flex justify-between items-center text-amber-300">
                    <span class="font-medium flex items-center"><i data-lucide="heart-pulse" class="w-4 h-4 mr-2"></i> Active:</span>
                    <span class="text-lg font-extrabold">${Math.floor(country.active).toLocaleString()}</span>
                </div>
                <div class="flex justify-between items-center text-emerald-300">
                    <span class="font-medium flex items-center"><i data-lucide="check-circle" class="w-4 h-4 mr-2"></i> Recovered:</span>
                    <span class="text-lg font-extrabold">${Math.floor(country.recovered).toLocaleString()}</span>
                </div>
                <div class="flex justify-between items-center text-purple-300">
                    <span class="font-medium flex items-center"><i data-lucide="users" class="w-4 h-4 mr-2"></i> Population:</span>
                    <span class="text-lg font-extrabold">${Math.floor(country.population).toLocaleString()}</span>
                </div>
                <div class="flex justify-between items-center text-cyan-300">
                    <span class="font-medium flex items-center"><i data-lucide="flask-conical" class="w-4 h-4 mr-2"></i> Total Tests:</span>
                    <span class="text-lg font-extrabold">${Math.floor(country.tests).toLocaleString()}</span>
                </div>
            </div>
        </div>
    `).join('');

    countryCardsGrid.innerHTML = cardsHtml;
    lucide.createIcons();
}

// --- Fetch Global Data ---
async function fetchGlobalData() {
    try {
        const data = await fetchData(GLOBAL_API_URL);
        renderGlobalStats(data);
    } catch {
        globalStatsElement.innerHTML = '<div class="col-span-4 p-4 text-center text-red-400">Failed to load global data.</div>';
    }
}

// --- Fetch Countries Data ---
async function fetchCountriesData() {
    try {
        const data = await fetchData(COUNTRIES_API_URL);
        renderCountries(data);
    } catch {
        countryCardsGrid.innerHTML = '<div class="col-span-full text-center py-10 text-red-400">Failed to load country data.</div>';
    }
}

// --- Initialize ---
function init() {
    errorMessageElement.classList.add('hidden');
    fetchGlobalData();
    fetchCountriesData();
}

window.onload = init;