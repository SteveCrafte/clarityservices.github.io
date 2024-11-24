// ===== MOD DATA =====
let mods = [
    {
        id: 1,                    
        title: "Fortnite Menu", 
        author: "ClarityServices™",      
        version: "v2.1",          
        description: "Fortnite launcher with the latest and most up-to-date detection settings. This menu has basic silent injection ensuring 100% undetectability. We make sure to keep this tool updated as it's one of our most popular tools.", 
        rating: 4.1,              
        downloads: 1200,         
        date: "2024-01-18",       
        image: "https://i.postimg.cc/MKT30Dd7/Fortnite.png",  
        downloadUrl: "https://gofile.io/d/O1OasU"  
    },
    {
        id: 2,
        title: "Call of Duty: BO6/Warzone Menu",
        author: "ClarityServices™",
        version: "v1.8",
        description: "Our BO6/Warzone tool offers a hide variety of features, including silent injection, ESP/aimbot, Radar HACK, GOD Mode, Speed HACK and more. We also offer max prestige/camo services and bot lobby if you are interested.",
        rating: 3.9,
        downloads: 1200,
        date: "2024-05-15",
        image: "https://i.postimg.cc/MZ4V4mzb/blackops6.png",
        downloadUrl: "https://gofile.io/d/5MSaxP"
    },    
    {
        id: 3,
        title: "*NEW* HWID Spoofer",
        author: "ClarityServices™",
        version: "v1.2",
        description: "The most effective and undetectable spoofer on the market. EAC/BAC FULL BIOS SPOOF. Unban/Circumvent shadow lobbys and get alerts for shawdow updates and other player tools. Full Root!",
        rating: 3.4,
        downloads: 1000,
        date: "2024-11-4",
        image: "https://i.postimg.cc/qRWc8sRL/HWIDSPOOFER.png",
        downloadUrl: "https://gofile.io/d/M1ElNC"
    }    
];

// ===== UPDATE DATA =====
let updates = [
    {
        id: 1,
        modId: 1,
        version: "v2.1",
        date: "2024-11-6",
        changes: [
            "Added weapon customization/Unlock all tool",
            "Fixed crash when loading into older Windows systems, DE-BUG allow for GUI color scheme differentials",
            "Improved performance in FPS/general build quality of system BIOS"
        ]
    },
    {
        id: 2,
        modId: 2,
        version: "v1.5",
        date: "2024-10-15",
        changes: [
            "Update to our silent injection script/faster load speeds, less detection",
            "Added normal option output option for ESP",
            "Fixed bug causing menu to not appear in-game",
            "Added Ray Gun for Warzone *TEMPORARILY*"
        ]
    }
];

// ===== REVIEW DATA =====
let reviews = [
    {
        id: 1,
        username: "xKiller",
        modId: 1,
        rating: 4,
        comment: "Easy install, good support, +5 Rep",
        date: "2024-11-17"
    },
    {
        id: 3,
        username: "AverageJoeMama",
        modId: 3,
        rating: 5,
        comment: "lved the update to the spoofer so much i had to leave a review man, i can actaully play valroant again *CRY EMOJI* lmao tyyyy",
        date: "2023-12-13"
    },
    {
        id: 2,
        username: "benvmo",
        modId: 2,
        rating: 5,
        comment: "I was hella worried this wasnt going to work, but i got a email back about my issues and got it working so im here to pay my respect",
        date: "2022-1-10"
    },
    {
        id: 1,
        username: "Khazixxxx",
        modId: 1,
        rating: 5,
        comment: "Best site i have found, i will be back again, gonna try the cod cheat",
        date: "2023-12-13"
    },
    {
        id: 2,
        username: "EgirlWannaBe",
        modId: 3,
        rating: 3,
        comment: "SPOOFER WORKS WITH NO ISSUES, YOU ARE A GODDAMN SAINT!!!!!!",
        date: "2024-06-17"
    },
    {
        id: 3,
        username: "TTVDragonSlinger",
        modId: 3,
        rating: 4,
        comment: "Got banned on Warzone for no reason, and this tool got me back in the game. Will be back for more. Thank you, guys.",
        date: "2024-06-17"
    },
    {
        id: 4,
        username: "AnonymousUSER123",
        modId: 2,
        rating: 4,
        comment: "Really surprised this works. Emailed support, and they got back to me fairly quickly too. Sick tool, yo!",
        date: "2024-09-13"
    },
    {
        id: 1,
        username: "CantalMan",
        modId: 2,
        rating: 3,
        comment: "Works wells, just dont really like cheaters too much, dont go crazy yall",
        date: "2024-09-13"
    },
    {
        id: 2,
        username: "LemonB0zo",
        modId: 2,
        rating: 5,
        comment: "YO 5STARS ALL ACROSS THE BOARD, THANK YOU SO MUCH",
        date: "2024-09-13"
    }
];

// ===== MOD CARD CREATION =====
function createModCard(mod) {
    return `
        <div class="card-hover bg-black bg-opacity-50 rounded-lg overflow-hidden border border-red-700 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300">
            <div class="relative">
                <img src="${mod.image}" alt="${mod.title}" class="w-full h-40 object-cover transform hover:scale-105 transition-transform duration-300"/>
                <div class="absolute top-2 right-2 flex items-center space-x-2">
                    <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/80" 
                         style="box-shadow: 0 0 10px #22c55e, 0 0 20px #22c55e, 0 0 30px #22c55e;"></div>
                    <span class="bg-red-900 px-2 py-0.5 rounded-full text-xs text-white">${mod.version}</span>
                </div>
            </div>
            <div class="p-4">
                <div class="mb-2">
                    <h3 class="text-lg font-semibold text-red-500 hover:text-red-400 transition-colors duration-300">${mod.title}</h3>
                    <p class="text-xs text-gray-500 opacity-60">By ${mod.author}</p>
                </div>
                <p class="text-sm text-gray-300 mb-4 hover:text-red-400 transition-colors duration-300">${mod.description}</p>
                <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                        <span class="text-yellow-400 text-glow">${mod.rating}</span>
                        <span class="text-red-700">•</span>
                        <span class="text-red-400">${(mod.downloads/1000).toFixed(0)}K+</span>
                    </div>
                    <button onclick="viewMod(${mod.id})" 
                            class="bg-red-800 hover:bg-red-900 hover:shadow-lg hover:shadow-red-500/50 px-3 py-1 rounded text-sm text-white transition-all duration-300 transform hover:-translate-y-1 glow-button">
                        View More
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ===== UPDATE CARD CREATION =====
function createUpdateCard(update) {
    const mod = mods.find(m => m.id === update.modId);
    const timeDiff = getTimeDifference(update.date);
    
    return `
        <div class="card-hover bg-black bg-opacity-50 rounded-lg p-4 border border-red-700 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300">
            <div class="flex justify-between items-start mb-2">
                <h3 class="font-semibold text-red-500">${mod?.title} 
                    <span class="text-white">${update.version}</span>
                </h3>
                <span class="text-xs text-red-400">${timeDiff}</span>
            </div>
            <ul class="text-sm text-gray-300 space-y-1 list-disc list-inside">
                ${update.changes.map(change => 
                    `<li class="hover:text-red-400 transition-colors duration-300 transform hover:translate-x-2 cursor-default">${change}</li>`
                ).join('')}
            </ul>
        </div>
    `;
}

// ===== REVIEW CARD CREATION =====
function createReviewCard(review) {
    const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
    const timeDiff = getTimeDifference(review.date);
    const mod = mods.find(m => m.id === review.modId);
    
    return `
        <div class="card-hover bg-black bg-opacity-50 rounded-lg p-4 border border-red-700 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300">
            <div class="flex justify-between items-start mb-2">
                <div class="flex items-center space-x-2">
                    <span class="font-semibold text-red-500 hover:text-red-400 transition-colors duration-300">${review.username}</span>
                    <div class="flex text-yellow-400 text-glow text-sm">${stars}</div>
                </div>
                <span class="text-xs text-red-400">${timeDiff}</span>
            </div>
            <p class="text-sm text-gray-300 hover:text-red-400 transition-colors duration-300 transform hover:translate-x-2">${review.comment}</p>
        </div>
    `;
}

// ===== VIEW MOD FUNCTION =====
function viewMod(modId) {
    const mod = mods.find(m => m.id === modId);
    if (!mod) {
        console.error(`Mod with ID ${modId} not found`);
        return;
    }
    if (modId === 1) {
        window.location.href = 'fortnite.html';
    } else if (modId === 2) {
        window.location.href = 'cod.html';
    } else if (modId === 3) {
        window.location.href = 'spoofer.html';
    }
}

// ===== UTILITY FUNCTIONS =====
function getTimeDifference(date) {
    const now = new Date();
    const reviewDate = new Date(date);
    const diffInDays = Math.floor((now - reviewDate) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
    return `${Math.floor(diffInDays / 365)} years ago`;
}

function updateStats() {
    const totalDownloads = mods.reduce((sum, mod) => sum + mod.downloads, 0);
    const averageRating = mods.reduce((sum, mod) => sum + mod.rating, 0) / mods.length;
    
    document.getElementById('totalDownloads').textContent = `${(totalDownloads/1000).toFixed(0)}K+`;
    document.getElementById('averageRating').textContent = averageRating.toFixed(1);
    document.getElementById('totalMods').textContent = mods.length;
}

// ===== SORTING FUNCTIONS =====
function sortMods(sortBy) {
    switch(sortBy) {
        case 'popular':
            return [...mods].sort((a, b) => b.downloads - a.downloads);
        case 'latest':
            return [...mods].sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'rating':
            return [...mods].sort((a, b) => b.rating - a.rating);
        default:
            return mods;
    }
}

function sortReviews(sortBy) {
    switch(sortBy) {
        case 'recent':
            return [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'rating':
            return [...reviews].sort((a, b) => b.rating - a.rating);
        case 'oldest':
            return [...reviews].sort((a, b) => new Date(a.date) - new Date(b.date));
        default:
            return reviews;
    }
}

// ===== RENDERING FUNCTIONS =====
function renderMods(sortBy = 'popular') {
    const container = document.getElementById('modsContainer');
    const sortedMods = sortMods(sortBy);
    container.innerHTML = sortedMods.map(mod => createModCard(mod)).join('');
}

function renderUpdates() {
    const container = document.getElementById('updatesContainer');
    const sortedUpdates = [...updates].sort((a, b) => new Date(b.date) - new Date(a.date));
    container.innerHTML = sortedUpdates.map(update => createUpdateCard(update)).join('');
}

function renderReviews(sortBy = 'recent') {
    const container = document.getElementById('reviewsContainer');
    const sortedReviews = sortReviews(sortBy);
    container.innerHTML = sortedReviews.map(review => createReviewCard(review)).join('');
}

// ===== RENDER FOOTER =====
function renderFooter() {
    const footerElement = document.getElementById('footer');
    footerElement.innerHTML = `
        <div class="flex justify-center gap-2 pt-2 border-t border-red-900/30">
            <button class="bg-black/50 hover:bg-red-900/50 hover:shadow-lg hover:shadow-red-500/50 px-2 py-0.5 rounded-sm text-xs text-gray-200 transition-all duration-300 hover:text-white border border-red-900/30 hover:border-red-500/50">
                Discord
            </a>
        </div>
    `;
}


// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    // Initial renders
    renderMods();
    renderUpdates();
    renderReviews();
    updateStats();
    renderFooter();

    // Mod sort listener
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            renderMods(e.target.value);
        });
    }

    // Review sort listener
    const reviewSort = document.getElementById('reviewSort');
    if (reviewSort) {
        reviewSort.addEventListener('change', (e) => {
            renderReviews(e.target.value);
        });
    }
});

