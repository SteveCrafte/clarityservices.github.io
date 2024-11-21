// ===== MOD DATA =====
let mods = [
    {
        id: 1,                    
        title: "Clarity's Fortnite Menu", 
        author: "ClarityServices™",      
        version: "v2.1",          
        description: "A silent Fortnite launcher with the latest and most up-to-date detection settings, ensuring 100% undetectability.", 
        rating: 3.7,              
        downloads: 2000,         
        date: "2024-03-18",       
        image: "https://i.postimg.cc/MKT30Dd7/Fortnite.png",  
        downloadUrl: "https://gofile.io/d/O1OasU"  
    },
    {
        id: 2,
        title: "Call of Duty: BO6/Warzone Menu",
        author: "ClarityServices™",
        version: "v1.8",
        description: "The BO6/Warzone tool offers a wide range of features, including silent injection, ESP/aimbot, and much more.",
        rating: 3.4,
        downloads: 1200,
        date: "2024-05-15",
        image: "https://i.postimg.cc/MZ4V4mzb/blackops6.png",
        downloadUrl: "https://example.com/cod-menu.zip"
    },    
    {
        id: 3,
        title: "*NEW* HWID Spoofer",
        author: "ClarityServices™",
        version: "v1.2",
        description: "The most effective and undetectable spoofer on the market. EAC/BAC FULL BIOS SPOOF. Check out Claritys HWID Spoofer today.",
        rating: 3.4,
        downloads: 4000,
        date: "2024-09-02",
        image: "https://i.postimg.cc/qRWc8sRL/HWIDSPOOFER.png",
        downloadUrl: "https://example.com/hwid-spoofer.zip"
    }    
];

// ===== UPDATE DATA =====
let updates = [
    {
        id: 1,
        modId: 1,
        version: "v2.1",
        date: "2024-03-18",
        changes: [
            "Added weapon customization/Unlock all",
            "Fixed crash when loading into older Windows systems",
            "Improved performance in FPS/general build quality of system BIOS"
        ]
    },
    {
        id: 2,
        modId: 2,
        version: "v1.5",
        date: "2024-10-15",
        changes: [
            "Update to silent injection script",
            "Added normal option for ESP",
            "Fixed bug causing menu to not appear in-game",
            "Added Ray Gun"
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
        <div class="card-hover bg-black bg-opacity-50 rounded-lg overflow-hidden border border-red-700 hover:border-red-500 transition-all duration-300">
            <div class="relative">
                <img src="${mod.image}" alt="${mod.title}" class="w-full h-40 object-cover transform hover:scale-105 transition-transform duration-300"/>
                <div class="absolute top-2 right-2">
                    <span class="bg-red-900 px-2 py-0.5 rounded-full text-xs text-white animate__animated animate__pulse animate__infinite">${mod.version}</span>
                </div>
            </div>
            <div class="p-4">
                <div class="mb-2">
                    <h3 class="text-lg font-semibold text-red-500 hover:text-red-400 transition-colors duration-300">${mod.title}</h3>
                    <p class="text-xs text-red-400">By ${mod.author}</p>
                </div>
                <p class="text-sm text-gray-300 mb-4 hover:text-red-400 transition-colors duration-300">${mod.description}</p>
                <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                        <span class="text-red-500 animate__animated animate__pulse animate__infinite">★</span>
                        <span class="text-red-400">${mod.rating}</span>
                        <span class="text-red-700">•</span>
                        <span class="text-red-400">${(mod.downloads/1000).toFixed(0)}K+</span>
                    </div>
                    <button onclick="viewMod(${mod.id})" 
                            class="bg-red-800 hover:bg-red-900 px-3 py-1 rounded text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 transform hover:-translate-y-1">
                        View More
                    </button>
                </div>
            </div>
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

    // Implement your view mod logic here
    // For example, you can open a modal or navigate to a mod details page
    console.log(`Viewing mod: ${mod.title}`);
}

// ===== UPDATE CARD CREATION =====
function createUpdateCard(update) {
    const mod = mods.find(m => m.id === update.modId);
    const timeDiff = getTimeDifference(update.date);
    
    return `
        <div class="card-hover bg-black bg-opacity-50 rounded-lg p-4 border border-red-700 hover:border-red-500 transition-all duration-300">
            <div class="flex justify-between items-start mb-2">
                <h3 class="font-semibold text-red-500">${mod?.title} 
                    <span class="animate__animated animate__pulse animate__infinite">${update.version}</span>
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
        <div class="card-hover bg-black bg-opacity-50 rounded-lg p-4 border border-red-700 hover:border-red-500 transition-all duration-300">
            <div class="flex justify-between items-start mb-2">
                <div class="flex items-center space-x-2">
                    <span class="font-semibold text-red-500 hover:text-red-400 transition-colors duration-300">${review.username}</span>
                    <span class="text-xs text-red-400">on ${mod?.title}</span>
                    <div class="flex text-red-500 text-sm animate__animated animate__pulse animate__infinite">${stars}</div>
                </div>
                <span class="text-xs text-red-400">${timeDiff}</span>
            </div>
            <p class="text-sm text-gray-300 hover:text-red-400 transition-colors duration-300 transform hover:translate-x-2">${review.comment}</p>
        </div>
    `;
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

// ===== DOWNLOAD FUNCTION =====
function downloadMod(modId) {
    const mod = mods.find(m => m.id === modId);
    
    if (!mod) {
        console.error(`Mod with ID ${modId} not found`);
        return;
    }

    if (!mod.downloadUrl) {
        console.error(`No download URL found for mod ${mod.title}`);
        alert('Download link not available for this mod.');
        return;
    }

    try {
        const link = document.createElement('a');
        link.href = mod.downloadUrl;
        link.download = `${mod.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.zip`;
        
        link.style.display = 'none';
        document.body.appendChild(link);
        
        link.click();
        
        document.body.removeChild(link);
    } catch (error) {
        console.error('Download error:', error);
        alert(`Failed to initiate download for ${mod.title}`);
    }
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    // Mod sort listener
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        renderMods(e.target.value);
    });

    // Review sort listener
    document.getElementById('reviewSort').addEventListener('change', (e) => {
        renderReviews(e.target.value);
    });

    // Initial renders
    renderMods();
    renderUpdates();
    renderReviews();
    updateStats();
});