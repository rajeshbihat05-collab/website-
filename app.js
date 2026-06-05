// Mock Real Job Data
const jobData = [
    // Uzbekistan
    { id: 1, title: "Steel Fixer", company: "Tashkent Build Group", salary: "$600 - $800 / mo", location: "Uzbekistan", category: "skilled", age: "21-45", type: "Full Time", date: "2 days ago" },
    { id: 2, title: "Shuttering Carpenter", company: "Tashkent Build Group", salary: "$600 - $800 / mo", location: "Uzbekistan", category: "skilled", age: "21-45", type: "Full Time", date: "4 days ago" },
    { id: 3, title: "Polish Carpenter", company: "Samarkand Premium Crafts", salary: "$600 - $800 / mo", location: "Uzbekistan", category: "skilled", age: "21-45", type: "Full Time", date: "Just now" },
    { id: 4, title: "Finishing Carpenter", company: "Samarkand Premium Crafts", salary: "$600 - $800 / mo", location: "Uzbekistan", category: "skilled", age: "21-45", type: "Full Time", date: "3 days ago" },
    { id: 5, title: "Construction Mason", company: "Bukhara Infra", salary: "$600 - $800 / mo", location: "Uzbekistan", category: "skilled", age: "21-45", type: "Full Time", date: "Yesterday" },
    { id: 6, title: "Executive Chef", company: "Lotte Hotel Tashkent", salary: "$800 - $1,000 / mo", location: "Uzbekistan", category: "hospitality", age: "21-40", type: "Full Time", date: "5 days ago" },
    { id: 7, title: "Hotel Waiter / Waitress", company: "Lotte Hotel Tashkent", salary: "$800 - $1,000 / mo", location: "Uzbekistan", category: "hospitality", age: "21-40", type: "Full Time", date: "3 days ago" },
    { id: 8, title: "Housekeeping Supervisor", company: "Uzbek Hospitality Corp", salary: "$800 - $1,000 / mo", location: "Uzbekistan", category: "hospitality", age: "21-40", type: "Full Time", date: "1 day ago" },
    { id: 9, title: "Hotel Bartender", company: "Sky Lounge Tashkent", salary: "$800 - $1,000 / mo", location: "Uzbekistan", category: "hospitality", age: "21-40", type: "Full Time", date: "6 days ago" },
    { id: 10, title: "Warehouse Helper", company: "Silk Road Logistics", salary: "$800 / mo", location: "Uzbekistan", category: "skilled", age: "21-45", type: "Full Time", date: "2 days ago" },
    { id: 11, title: "City Taxi Driver", company: "Tashkent Cab Service", salary: "$1,200 / mo", location: "Uzbekistan", category: "skilled", age: "21-45", type: "Full Time", date: "Just now" },

    // UAE (Dubai/Sharjah/Abu Dhabi) - Civil
    { id: 12, title: "Mason (Civil)", company: "Arabian Construction Company", salary: "$1,200 - $1,500 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "2 days ago" },
    { id: 13, title: "Tile Mason", company: "Arabian Construction Company", salary: "$1,200 - $1,500 / mo", location: "Sharjah, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "Yesterday" },
    { id: 14, title: "Carpenter", company: "Al Naboodah Group", salary: "$1,200 - $1,800 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "5 days ago" },
    { id: 15, title: "Shuttering Carpenter", company: "Al Naboodah Group", salary: "$1,200 - $1,500 / mo", location: "Abu Dhabi, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "3 days ago" },
    { id: 16, title: "Construction Helper", company: "Belhasa Engineering", salary: "$900 - $1,100 / mo", location: "Sharjah, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "Yesterday" },
    { id: 17, title: "Plumber", company: "Belhasa Engineering", salary: "$1,200 - $1,800 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "1 day ago" },
    { id: 18, title: "Steel Fixer", company: "Dutco Balfour Beatty", salary: "$1,200 - $1,600 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "3 days ago" },
    { id: 19, title: "Aluminium Fabricator", company: "Alumco UAE", salary: "$1,400 - $2,000 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "4 days ago" },
    { id: 20, title: "Scaffolder", company: "Dutco Balfour Beatty", salary: "$1,400 - $2,000 / mo", location: "Abu Dhabi, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "6 days ago" },

    // UAE - MEP
    { id: 21, title: "Electrician (MEP)", company: "Drake & Scull", salary: "$1,200 - $1,800 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "2 days ago" },
    { id: 22, title: "Ductman", company: "Drake & Scull", salary: "$1,200 - $1,500 / mo", location: "Sharjah, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "3 days ago" },
    { id: 23, title: "AC Technician", company: "Al Shirawi Contracting", salary: "$1,200 - $2,000 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "1 day ago" },
    { id: 24, title: "Industrial Electrician", company: "Al Shirawi Contracting", salary: "$1,400 - $2,500 / mo", location: "Abu Dhabi, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "4 days ago" },
    { id: 25, title: "Pipe Fitter", company: "Drake & Scull", salary: "$1,200 - $2,000 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "3 days ago" },
    { id: 26, title: "Pipe Fabricator", company: "EFECO UAE", salary: "$1,500 - $2,500 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "Yesterday" },
    { id: 27, title: "Rigger", company: "EFECO UAE", salary: "$1,200 - $1,500 / mo", location: "Sharjah, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "6 days ago" },
    { id: 28, title: "Welder (Tig & Arc)", company: "Galadari Engineering", salary: "$1,200 - $2,000 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "5 days ago" },

    // UAE - Hospitality & Cook
    { id: 29, title: "Head Chef", company: "Jumeirah Hotels Group", salary: "$2,000 - $5,000 / mo", location: "Dubai, UAE", category: "hospitality", age: "25-45", type: "Full Time", date: "2 days ago" },
    { id: 30, title: "Sous Chef", company: "Jumeirah Hotels Group", salary: "$1,800 - $3,000 / mo", location: "Dubai, UAE", category: "hospitality", age: "25-45", type: "Full Time", date: "4 days ago" },
    { id: 31, title: "Indian Specialty Cook", company: "Taj Hotels Dubai", salary: "$1,500 - $2,500 / mo", location: "Dubai, UAE", category: "hospitality", age: "21-45", type: "Full Time", date: "Yesterday" },
    { id: 32, title: "Continental Cook", company: "Address Hotels Dubai", salary: "$1,500 - $3,000 / mo", location: "Dubai, UAE", category: "hospitality", age: "21-45", type: "Full Time", date: "3 days ago" },
    { id: 33, title: "Chinese Specialty Cook", company: "Shangri-La Hotels", salary: "$1,500 - $3,000 / mo", location: "Abu Dhabi, UAE", category: "hospitality", age: "21-45", type: "Full Time", date: "Yesterday" },
    { id: 34, title: "CDP (Chef De Partie)", company: "Address Hotels Dubai", salary: "$1,500 - $2,500 / mo", location: "Dubai, UAE", category: "hospitality", age: "21-45", type: "Full Time", date: "5 days ago" },
    { id: 35, title: "Commi 1 Chef", company: "Jumeirah Hotels Group", salary: "$1,200 - $2,000 / mo", location: "Dubai, UAE", category: "hospitality", age: "21-45", type: "Full Time", date: "2 days ago" },
    { id: 36, title: "Commi 2 Chef", company: "Jumeirah Hotels Group", salary: "$1,400 - $2,000 / mo", location: "Dubai, UAE", category: "hospitality", age: "21-45", type: "Full Time", date: "4 days ago" },
    { id: 37, title: "Commi 3 Chef", company: "Jumeirah Hotels Group", salary: "$1,500 - $2,500 / mo", location: "Dubai, UAE", category: "hospitality", age: "21-45", type: "Full Time", date: "Just now" },
    { id: 38, title: "Tandoor Cook", company: "Taj Hotels Dubai", salary: "$1,800 - $2,500 / mo", location: "Dubai, UAE", category: "hospitality", age: "21-45", type: "Full Time", date: "Yesterday" },
    { id: 39, title: "Arabic Specialty Cook", company: "Rotana Hotels", salary: "$2,000 - $3,500 / mo", location: "Abu Dhabi, UAE", category: "hospitality", age: "21-45", type: "Full Time", date: "Yesterday" },
    { id: 40, title: "Housekeeping Attendant", company: "EMAAR Hospitality", salary: "$900 - $1,500 / mo", location: "Dubai, UAE", category: "hospitality", age: "21-40", type: "Full Time", date: "3 days ago" },
    { id: 41, title: "Hotel Bell Boy", company: "EMAAR Hospitality", salary: "$1,200 - $2,000 / mo", location: "Dubai, UAE", category: "hospitality", age: "21-35", type: "Full Time", date: "1 day ago" },
    { id: 42, title: "F&B Waiter", company: "Rotana Hotels", salary: "$1,200 - $2,000 / mo", location: "Dubai, UAE", category: "hospitality", age: "21-40", type: "Full Time", date: "Just now" },
    { id: 43, title: "Hotel Bar Tender", company: "Address Hotels Dubai", salary: "$1,500 - $3,000 / mo", location: "Dubai, UAE", category: "hospitality", age: "21-40", type: "Full Time", date: "2 days ago" },

    // UAE - Other/General
    { id: 44, title: "Supermarket Cashier", company: "Lulu Hypermarket", salary: "$900 - $1,000 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "4 days ago" },
    { id: 45, title: "Shelves Arranger", company: "Lulu Hypermarket", salary: "$700 - $800 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "Yesterday" },
    { id: 46, title: "Trolly Boy", company: "Carrefour Dubai", salary: "$700 - $800 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "3 days ago" },
    { id: 47, title: "Van Sales Man", company: "Al Rawabi Dairy", salary: "$850 - $1,000 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "Yesterday" },
    { id: 48, title: "Data Controller", company: "DHL Dubai", salary: "$900 - $1,000 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "2 days ago" },
    { id: 49, title: "Factory Auxiliary Worker", company: "National Food Industries", salary: "$700 - $800 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "5 days ago" },
    { id: 50, title: "Project Manager (Construction)", company: "Shapoorji Pallonji UAE", salary: "$2,500 - $3,000 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "1 week ago" },
    { id: 51, title: "Heavy Duty Driver", company: "Almarai Logistics", salary: "$900 - $1,100 / mo", location: "Sharjah, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "3 days ago" },
    { id: 52, title: "JCB Operator", company: "Bin Laden Contracting", salary: "$1,000 - $1,200 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "1 day ago" },
    { id: 53, title: "Light Driver", company: "Careem Corporate", salary: "$900 - $1,000 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "Just now" },
    { id: 54, title: "Warehouse Worker", company: "Amazon Fulfillment Center", salary: "$700 - $1,000 / mo", location: "Dubai, UAE", category: "skilled", age: "21-40", type: "Full Time", date: "2 days ago" },

    // Israel
    { id: 55, title: "Heavy Truck Driver", company: "Tel Aviv Freight Logistics", salary: "$1,700 / mo", location: "Israel", category: "skilled", age: "21-45", type: "Full Time", date: "2 days ago" },
    { id: 56, title: "Factory Steel Fixer", company: "Solel Boneh Infra", salary: "$1,400 / mo", location: "Israel", category: "skilled", age: "21-45", type: "Full Time", date: "4 days ago" },
    { id: 57, title: "Welder (3G/6G Arc)", company: "Solel Boneh Infra", salary: "$1,400 / mo", location: "Israel", category: "skilled", age: "21-45", type: "Full Time", date: "5 days ago" },
    { id: 58, title: "Metal Fabricator", company: "Israel Metalworks", salary: "$1,400 / mo", location: "Israel", category: "skilled", age: "21-45", type: "Full Time", date: "Yesterday" },
    { id: 59, title: "Plumber", company: "Dan Hotels Maintenance", salary: "$1,300 / mo", location: "Israel", category: "skilled", age: "21-45", type: "Full Time", date: "3 days ago" },
    { id: 60, title: "Construction Supervisor", company: "Electra Infrastructure", salary: "$1,900 / mo", location: "Israel", category: "skilled", age: "21-40", type: "Full Time", date: "1 week ago" },
    { id: 61, title: "Cashier", company: "Shufersal Supermarkets", salary: "$1,400 / mo", location: "Israel", category: "skilled", age: "21-40", type: "Full Time", date: "Yesterday" },
    { id: 62, title: "Computer Operator", company: "IBM R&D Israel Support", salary: "$1,500 / mo", location: "Israel", category: "skilled", age: "21-40", type: "Full Time", date: "6 days ago" },
    { id: 63, title: "Construction Helper", company: "Solel Boneh Infra", salary: "$1,000 / mo", location: "Israel", category: "skilled", age: "21-40", type: "Full Time", date: "2 days ago" },
    { id: 64, title: "Wall Painter", company: "Haifa Housing Construction", salary: "$1,200 / mo", location: "Israel", category: "skilled", age: "21-40", type: "Full Time", date: "4 days ago" },
    { id: 65, title: "AC Technician (Commercial)", company: "Electra Maintenance", salary: "$1,400 + OT / mo", location: "Israel", category: "skilled", age: "21-45", type: "Full Time", date: "3 days ago" },
    { id: 66, title: "Mechanical Maintenance Helper", company: "Israel Ports Co", salary: "$1,100 + OT / mo", location: "Israel", category: "skilled", age: "21-45", type: "Full Time", date: "Yesterday" },
    { id: 67, title: "Ductman", company: "Haifa HVAC Systems", salary: "$1,200 + OT / mo", location: "Israel", category: "skilled", age: "21-45", type: "Full Time", date: "5 days ago" },
    { id: 68, title: "Warehouse Store Keeper", company: "LogistiCare Israel", salary: "$1,500 + OT / mo", location: "Israel", category: "skilled", age: "21-45", type: "Full Time", date: "2 days ago" },
    { id: 69, title: "Shuttering Carpenter", company: "Ashtrom Group", salary: "$1,400 + OT / mo", location: "Israel", category: "skilled", age: "21-45", type: "Full Time", date: "Just now" },
    { id: 70, title: "Furniture Carpenter", company: "Tel Aviv Woodworks", salary: "$1,400 + OT / mo", location: "Israel", category: "skilled", age: "21-45", type: "Full Time", date: "3 days ago" },
    { id: 71, title: "Scaffolder", company: "Ashtrom Group", salary: "$1,300 + OT / mo", location: "Israel", category: "skilled", age: "21-45", type: "Full Time", date: "2 days ago" },
    { id: 72, title: "Pipe Fitter & Fabricator", company: "Israel Refineries Ltd", salary: "$1,550 + OT / mo", location: "Israel", category: "skilled", age: "21-45", type: "Full Time", date: "Yesterday" },
    { id: 73, title: "Industrial Electrician", company: "Israel Electric Corp", salary: "$1,500 + OT / mo", location: "Israel", category: "skilled", age: "21-45", type: "Full Time", date: "4 days ago" },
    { id: 74, title: "Factory Packaging Worker", company: "Elite Food Industries", salary: "$700 - $1,000 / mo", location: "Israel", category: "skilled", age: "21-40", type: "Full Time", date: "1 day ago" },

    // Bulgaria
    { id: 75, title: "Agricultural Greenhouse Worker", company: "Bulgarian Agro Farms", salary: "$700 - $800 / mo", location: "Bulgaria", category: "skilled", age: "21-40", type: "Full Time", date: "4 days ago" },

    // Serbia
    { id: 76, title: "Logistics Warehouse Assistant", company: "Belgrade Depot Systems", salary: "$800 - $900 / mo", location: "Serbia", category: "skilled", age: "21-40", type: "Full Time", date: "3 days ago" },
    { id: 77, title: "Mig / Tig Welder", company: "Novi Sad Metal Construction", salary: "$1,000 - $1,400 / mo", location: "Serbia", category: "skilled", age: "21-45", type: "Full Time", date: "2 days ago" },

    // Poland
    { id: 78, title: "International Heavy Truck Driver", company: "Warsaw Trans Europe", salary: "$2,000 / mo", location: "Poland", category: "skilled", age: "21-45", type: "Full Time", date: "Yesterday" },

    // Oman
    { id: 79, title: "Structural Welder", company: "Muscat Steel Works", salary: "$900 - $1,100 / mo", location: "Oman", category: "skilled", age: "21-45", type: "Full Time", date: "Just now" },
    { id: 80, title: "Catering Cook", company: "Muscat Royal Catering", salary: "$1,000 - $1,300 / mo", location: "Oman", category: "hospitality", age: "21-40", type: "Full Time", date: "2 days ago" },
    { id: 81, title: "AC Technician", company: "Oman Facility Management", salary: "$900 - $1,200 / mo", location: "Oman", category: "skilled", age: "21-45", type: "Full Time", date: "3 days ago" },

    // Ukraine
    { id: 82, title: "Warehouse Forklift Operator", company: "Kyiv Logistics Hub", salary: "€1,100 - €1,300 / mo", location: "Ukraine", category: "skilled", age: "21-45", type: "Full Time", date: "Yesterday" },
    { id: 83, title: "Metal CNC Programmer", company: "Kharkiv Heavy Engineering", salary: "€1,400 - €1,700 / mo", location: "Ukraine", category: "skilled", age: "21-45", type: "Full Time", date: "4 days ago" },

    // Czech Republic
    { id: 85, title: "Warehouse Picker", company: "Prague Logistics Park", salary: "€6 - €9 / hour", location: "Czech Republic", category: "skilled", age: "21-40", type: "Full Time", date: "3 days ago" },

    // Belarus
    { id: 86, title: "Heavy Tractor Operator", company: "Minsk Tractor Works", salary: "€1,200 / mo", location: "Belarus", category: "skilled", age: "21-45", type: "Full Time", date: "3 days ago" },
    { id: 87, title: "Greenhouse Agricultural Worker", company: "Minsk Agro Farm", salary: "€900 - €1,100 / mo", location: "Belarus", category: "skilled", age: "21-45", type: "Full Time", date: "5 days ago" },

    // Malaysia
    { id: 88, title: "Electronics Line Assembler", company: "Penang Semiconductors Ltd", salary: "$600 - $700 / mo", location: "Malaysia", category: "skilled", age: "21-40", type: "Full Time", date: "5 days ago" },
    { id: 89, title: "Hotel Receptionist", company: "Kuala Lumpur Grand Hotel", salary: "$700 - $900 / mo", location: "Malaysia", category: "hospitality", age: "21-35", type: "Full Time", date: "2 days ago" },
    { id: 90, title: "Manufacturing Packager", company: "Selangor Plastics Corp", salary: "$600 - $800 / mo", location: "Malaysia", category: "skilled", age: "21-40", type: "Full Time", date: "4 days ago" },

    // Mauritius
    { id: 91, title: "Hotel Room Attendant", company: "Grand Resort Mauritius", salary: "$700 - $800 / mo", location: "Mauritius", category: "hospitality", age: "21-40", type: "Full Time", date: "2 days ago" },
    { id: 92, title: "F&B Waiter", company: "Mauritius Luxury Palms Hotel", salary: "$800 - $1,000 / mo", location: "Mauritius", category: "hospitality", age: "21-40", type: "Full Time", date: "Just now" },
    { id: 93, title: "Greenhouse Floriculture Helper", company: "Mauritius Flora Co", salary: "$700 - $900 / mo", location: "Mauritius", category: "skilled", age: "21-45", type: "Full Time", date: "Yesterday" },

    // Vietnam
    { id: 94, title: "Quality Inspector", company: "Hanoi Precision Electronics", salary: "$600 - $800 / mo", location: "Vietnam", category: "skilled", age: "21-40", type: "Full Time", date: "6 days ago" },
    { id: 95, title: "Assembly Line Operator", company: "Samsung Electronics Vietnam", salary: "$700 - $900 / mo", location: "Vietnam", category: "skilled", age: "21-40", type: "Full Time", date: "3 days ago" },

    // Saudi Arabia
    { id: 96, title: "Electrical Helper", company: "Al-Rashed Electrical Co", salary: "SAR 1,800 - 2,000 / mo", location: "Saudi Arabia", category: "skilled", age: "21-40", type: "Full Time", date: "Yesterday" }
];

// Global State
let currentStep = 1;
const eligibilityData = {
    destination: null,
    education: null,
    experience: null,
    language: null
};

// DOM Elements & Event Listeners on load
document.addEventListener("DOMContentLoaded", () => {
    // Load custom jobs from localStorage
    try {
        const storedJobs = localStorage.getItem("custom_posted_jobs");
        if (storedJobs) {
            const parsedJobs = JSON.parse(storedJobs);
            parsedJobs.forEach(job => {
                // Check if job is already in the list to prevent duplicates
                if (!jobData.some(j => j.id === job.id)) {
                    jobData.unshift(job);
                }
            });
        }
    } catch (e) {
        console.error("Failed to load custom jobs:", e);
    }

    // Header Scroll Effect
    const header = document.getElementById("header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // Mobile Hamburger Menu
    const mobileToggle = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            const icon = mobileToggle.querySelector("i");
            if (navMenu.classList.contains("active")) {
                icon.className = "fa-solid fa-xmark";
            } else {
                icon.className = "fa-solid fa-bars";
            }
        });

        // Close menu when link is clicked
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                mobileToggle.querySelector("i").className = "fa-solid fa-bars";
            });
        });

        // Dynamic Scroll Spy for Navigation Menu Highlights
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-menu .nav-link");

        if (sections.length > 0 && navLinks.length > 0) {
            const observerOptions = {
                root: null,
                rootMargin: "-30% 0px -55% 0px", // Trigger active state when section occupies the viewport center
                threshold: 0
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id");
                        const targetHash = `#${id}`;
                        
                        navLinks.forEach(link => {
                            const href = link.getAttribute("href");
                            if (href === targetHash || href.endsWith(targetHash)) {
                                link.classList.add("active-page");
                            } else {
                                link.classList.remove("active-page");
                            }
                        });
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
        }
    }

    // Job Finder render & check for parameter routing on Jobs Page
    const searchInput = document.getElementById("job-search");
    if (searchInput) {
        // === Global Country Filter State ===
        window._activeCountry = "UAE";

        // Expose filterJobsByCountry globally for inline onclick
        window.filterJobsByCountry = function(country, btnEl) {
            window._activeCountry = country;

            // Update country tab active states
            const countryBtns = document.querySelectorAll('[onclick^="filterJobsByCountry"]');
            countryBtns.forEach(b => b.classList.remove("active"));
            if (btnEl) btnEl.classList.add("active");

            // Update heading label
            const label = document.getElementById("active-country-label");
            if (label) {
                label.textContent = `Showing: ${country}`;
            }

            handleSearchAndFilter();
        };

        // Trade category filter (inside the job finder panel)
        const filterButtons = document.querySelectorAll("#filter-group .filter-btn");
        let currentFilter = "all";
        let searchQuery = "";

        const handleSearchAndFilter = () => {
            const country = window._activeCountry || "UAE";

            let filteredJobs = jobData.filter(job => {
                // 1. Country filter
                let matchesCountry = false;
                if (country.toLowerCase() === "europe") {
                    const loc = job.location.toLowerCase();
                    matchesCountry = loc.includes("poland") || 
                                     loc.includes("serbia") || 
                                     loc.includes("bulgaria") || 
                                     loc.includes("belarus") || 
                                     loc.includes("latvia") ||
                                     loc.includes("ukraine") ||
                                     loc.includes("czech");
                } else if (country.toLowerCase() === "gulf") {
                    const loc = job.location.toLowerCase();
                    matchesCountry = loc.includes("uae") || 
                                     loc.includes("dubai") || 
                                     loc.includes("sharjah") || 
                                     loc.includes("abu dhabi") || 
                                     loc.includes("saudi") || 
                                     loc.includes("oman");
                } else {
                    matchesCountry = job.location.toLowerCase().includes(country.toLowerCase());
                }

                // 2. Trade category filter
                let matchesCategory = true;
                if (currentFilter !== "all") {
                    if (currentFilter === "hospitality") {
                        matchesCategory = job.category === "hospitality";
                    } else if (currentFilter === "skilled") {
                        matchesCategory = job.category === "skilled";
                    }
                }

                // 3. Search text filter (title only, country is handled by tabs)
                const matchesSearch = searchQuery === "" || 
                                      job.title.toLowerCase().includes(searchQuery.toLowerCase());

                return matchesCountry && matchesCategory && matchesSearch;
            });

            // Update job count badge
            const badge = document.getElementById("job-count-badge");
            if (badge) {
                badge.textContent = `${filteredJobs.length} Job${filteredJobs.length !== 1 ? 's' : ''}`;
            }

            renderJobs(filteredJobs);
        };

        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            handleSearchAndFilter();
        });

        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                currentFilter = btn.dataset.filter;
                handleSearchAndFilter();
            });
        });

        // Query parameter filtering (from globe click etc.)
        const urlParams = new URLSearchParams(window.location.search);
        const countryParam = urlParams.get('country');
        if (countryParam) {
            // Find and activate the matching country tab button
            const countryBtns = document.querySelectorAll('[onclick^="filterJobsByCountry"]');
            let foundBtn = null;
            countryBtns.forEach(b => {
                b.classList.remove("active");
                if (b.dataset.filter && b.dataset.filter.toLowerCase() === countryParam.toLowerCase()) {
                    foundBtn = b;
                }
            });
            if (foundBtn) {
                foundBtn.classList.add("active");
            } else {
                // If no exact tab match, fallback to first tab (UAE)
                const uaeBtn = document.querySelector('[data-filter="UAE"][onclick^="filterJobsByCountry"]');
                if (uaeBtn) uaeBtn.classList.add("active");
            }

            window._activeCountry = countryParam;

            // Update heading
            const label = document.getElementById("active-country-label");
            if (label) label.textContent = `Showing: ${countryParam}`;

            handleSearchAndFilter();

            setTimeout(() => {
                showToast(`Showing verified openings in ${countryParam}`);
                const jobsSec = document.getElementById("jobs");
                if (jobsSec) {
                    jobsSec.scrollIntoView({ behavior: 'smooth' });
                }
            }, 600);
        } else {
            // Default: show UAE on load
            const uaeBtn = document.querySelector('[data-filter="UAE"][onclick^="filterJobsByCountry"]');
            filterJobsByCountry('UAE', uaeBtn);
        }
    }

    // Testimonial Carousel setup (Home Page only)
    if (document.getElementById("testimonial-track")) {
        setupTestimonials();
    }

    // Office Location tab switcher (Locations Page only)
    if (document.getElementById("office-tabs")) {
        setupOfficeTabs();
    }

    // === Typewriter Animation (Home Page Hero) ===
    const typedTextEl = document.getElementById("typed-text");
    if (typedTextEl) {
        const words = ["Global Career", "European Dreams", "Gulf Career", "Overseas Employment"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        const typeEffect = () => {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typedTextEl.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedTextEl.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before typing next word
            }
            
            setTimeout(typeEffect, typeSpeed);
        };
        typeEffect();
    }

    // === Inject WhatsApp Floating Button (Global) ===
    const injectWhatsAppButton = () => {
        if (document.getElementById("whatsapp-floating-btn")) return;
        
        const btn = document.createElement("a");
        btn.id = "whatsapp-floating-btn";
        btn.href = "https://wa.me/918700917348";
        btn.target = "_blank";
        btn.rel = "noopener noreferrer";
        btn.className = "whatsapp-btn";
        btn.setAttribute("aria-label", "Chat on WhatsApp");
        
        btn.innerHTML = `
            <div class="whatsapp-tooltip">Chat with us!</div>
            <i class="fa-brands fa-whatsapp"></i>
            <span class="whatsapp-ping"></span>
        `;
        
        document.body.appendChild(btn);
    };
    injectWhatsAppButton();
});

// Render Jobs dynamic cards
function renderJobs(jobs) {
    const grid = document.getElementById("jobs-grid-container");
    if (!grid) return;
    grid.innerHTML = "";

    if (jobs.length === 0) {
        grid.innerHTML = `<div class="no-jobs-msg">
            <i class="fa-solid fa-folder-open fa-2xl" style="margin-bottom: 15px; display:block; color:var(--text-muted);"></i>
            No active jobs match your search parameters. Try choosing other categories.
        </div>`;
        return;
    }

    jobs.forEach(job => {
        const isEurope = job.location.toLowerCase().includes("poland") || 
                         job.location.toLowerCase().includes("serbia") || 
                         job.location.toLowerCase().includes("bulgaria") || 
                         job.location.toLowerCase().includes("belarus") || 
                         job.location.toLowerCase().includes("latvia") ||
                         job.location.toLowerCase().includes("ukraine") ||
                         job.location.toLowerCase().includes("czech");
        const isIsrael = job.location.toLowerCase().includes("israel");
        
        let badgeClass = "gulf";
        let regionLabel = "Gulf Region";
        if (isEurope) {
            badgeClass = "europe";
            regionLabel = "Europe";
        } else if (isIsrael) {
            badgeClass = "israel";
            regionLabel = "Israel";
        }

        const card = document.createElement("div");
        card.className = "job-card glass-panel";
        card.id = `job-card-${job.id}`;
        card.innerHTML = `
            <div>
                <div class="job-header">
                    <span class="job-badge ${badgeClass}">${regionLabel}</span>
                    <span class="job-salary">${job.salary}</span>
                </div>
                <h3 class="job-title" style="margin-bottom: 14px; font-family: var(--font-heading); color: var(--text-primary); font-size: 1.3rem; font-weight: 700;">${job.title}</h3>
                
                <div class="job-details" style="display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 18px;">
                    <span style="display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-earth-asia" style="color: var(--secondary); width: 16px;"></i> <strong>Country:</strong> ${job.location}</span>
                    <span style="display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-wallet" style="color: var(--secondary); width: 16px;"></i> <strong>Salary:</strong> ${job.salary}</span>
                    <span style="display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-user-clock" style="color: var(--secondary); width: 16px;"></i> <strong>Age Limit:</strong> ${job.age || "21-40"} Years</span>
                    <span style="display: flex; align-items: center; gap: 8px; background: rgba(13, 148, 136, 0.05); padding: 6px 10px; border-radius: 8px; border: 1px dashed rgba(13, 148, 136, 0.15); margin-top: 6px; font-size: 0.82rem; color: var(--text-primary);"><i class="fa-solid fa-circle-check" style="color: var(--secondary); width: 16px;"></i> <strong>Eligible Candidates:</strong> Age ${job.age || "21-40"} / Fit Profile</span>
                </div>
            </div>
            <div class="job-footer">
                <span class="job-date">Posted ${job.date}</span>
                <button class="btn btn-primary btn-sm" style="padding: 8px 18px; font-size: 0.85rem;" onclick="openApplyModal(${job.id}, '${job.title}')">Apply Now</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Modal handling
function openApplyModal(jobId, jobTitle) {
    const modal = document.getElementById("apply-modal");
    if (!modal) return;
    document.getElementById("modal-job-title").innerText = jobTitle;
    document.getElementById("modal-job-id").value = jobId;
    
    // reset form fields
    document.getElementById("apply-form").reset();
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // disable background scroll
}

function closeApplyModal() {
    const modal = document.getElementById("apply-modal");
    if (modal) {
        modal.classList.remove("active");
    }
    document.body.style.overflow = "auto";
}

// ============================================================
// WHATSAPP DIRECT MESSAGE SYSTEM (via CallMeBot API)
// Message seedha aapke WhatsApp pe aayega — visitor ka WA nahi khulega
// ============================================================

// CallMeBot WhatsApp API Config
// IMPORTANT: Pehle ek baar apne phone se +34 644 38 03 67 pe ye message bhejo:
// "I allow callmebot to send me messages"
// Fir aapko ek API key milega — wo neeche daal do
const WHATSAPP_CONFIG = {
    phone: "918700917348",
    apikey: "" // <-- Yahan apna CallMeBot API key daalein (setup instructions neeche hain)
};

// Send WhatsApp message directly to owner (background — visitor ko pata nahi chalega)
function sendWhatsAppDirect(messageText) {
    if (!WHATSAPP_CONFIG.apikey) {
        console.warn("⚠️ CallMeBot API key not configured. Set WHATSAPP_CONFIG.apikey in app.js");
        console.log("📋 Message that would have been sent:", messageText);
        return;
    }

    const encodedMsg = encodeURIComponent(messageText);
    const apiUrl = `https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_CONFIG.phone}&text=${encodedMsg}&apikey=${WHATSAPP_CONFIG.apikey}`;

    // Fire-and-forget — visitor ko koi wait nahi karana
    fetch(apiUrl, { mode: "no-cors" })
        .then(() => console.log("✅ WhatsApp message sent to owner!"))
        .catch(err => console.error("❌ WhatsApp send error:", err));
}

// Google Sheet Lead Storage Helper
function saveToGoogleSheet(data) {
    const sheetUrl = localStorage.getItem("google_sheet_webapp_url");
    if (!sheetUrl) {
        console.log("No Google Sheet Web App URL configured. Data saved locally:", data);
        return;
    }

    fetch(sheetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(() => console.log("Lead successfully stored in Google Sheets!"))
    .catch(err => console.error("Google Sheets save error:", err));
}

// ── Quick Apply Modal (jobs.html / country.html) ──
function submitApplyForm(event) {
    event.preventDefault();
    const name = document.getElementById("apply-name").value;
    const phone = document.getElementById("apply-phone").value;
    const experience = document.getElementById("apply-experience").value;
    const notes = document.getElementById("apply-notes") ? document.getElementById("apply-notes").value : '';
    const jobTitle = document.getElementById("modal-job-title") ? document.getElementById("modal-job-title").innerText : 'N/A';

    // Save to Google Sheet
    saveToGoogleSheet({
        timestamp: new Date().toLocaleString(),
        type: "Quick Apply (Modal)",
        name, phone, email: "N/A", position: jobTitle,
        country: "N/A", experience: experience + " years",
        education: "N/A", city: "N/A", notes: notes || "N/A"
    });

    // Send WhatsApp directly to owner
    const waMsg = `🔔 *NEW JOB APPLICATION*\n` +
        `━━━━━━━━━━━━━━━━━━\n` +
        `👤 Name: ${name}\n` +
        `📞 Phone: ${phone}\n` +
        `💼 Position: ${jobTitle}\n` +
        `📊 Experience: ${experience} years\n` +
        `📝 Notes: ${notes || 'N/A'}\n` +
        `⏰ Time: ${new Date().toLocaleString()}`;
    sendWhatsAppDirect(waMsg);

    // Open visitor's WhatsApp to send query directly
    const visitorWaUrl = `https://wa.me/${WHATSAPP_CONFIG.phone}?text=${encodeURIComponent(waMsg)}`;
    window.open(visitorWaUrl, '_blank');

    closeApplyModal();
    showToast(`Opening WhatsApp to send your application details. Thank you, ${name}!`);
}

// ── Full Apply Page Form (apply.html) ──
function submitJobApplyForm(event) {
    event.preventDefault();
    const name = document.getElementById("apply-name").value;
    const phone = document.getElementById("apply-phone").value;
    const email = document.getElementById("apply-email").value;
    const position = document.getElementById("apply-position").value;
    const country = document.getElementById("apply-country").value;
    const experience = document.getElementById("apply-experience").value;
    const education = document.getElementById("apply-education").value;
    const city = document.getElementById("apply-city").value;
    const notes = document.getElementById("apply-notes") ? document.getElementById("apply-notes").value : '';

    // Save to Google Sheet
    saveToGoogleSheet({
        timestamp: new Date().toLocaleString(),
        type: "Full Page Apply",
        name, phone, email, position, country,
        experience, education, city, notes: notes || "N/A"
    });

    // Send WhatsApp directly to owner
    const waMsg = `🔔 *NEW FULL APPLICATION*\n` +
        `━━━━━━━━━━━━━━━━━━\n` +
        `👤 Name: ${name}\n` +
        `📞 Phone: ${phone}\n` +
        `📧 Email: ${email}\n` +
        `💼 Position: ${position}\n` +
        `🌍 Country: ${country}\n` +
        `📊 Experience: ${experience}\n` +
        `🎓 Education: ${education}\n` +
        `📍 City: ${city}\n` +
        `📝 Notes: ${notes || 'N/A'}\n` +
        `⏰ Time: ${new Date().toLocaleString()}`;
    sendWhatsAppDirect(waMsg);

    // Open visitor's WhatsApp to send query directly
    const visitorWaUrl = `https://wa.me/${WHATSAPP_CONFIG.phone}?text=${encodeURIComponent(waMsg)}`;
    window.open(visitorWaUrl, '_blank');

    document.getElementById("job-apply-page-form").reset();
    showToast(`Opening WhatsApp to send details. Thank you, ${name}!`);
}

// ── Contact / Query Form (contact.html) ──
function submitContactForm(event) {
    event.preventDefault();
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const phone = document.getElementById("contact-phone").value;
    const msg = document.getElementById("contact-message").value;

    // Save to Google Sheet
    saveToGoogleSheet({
        timestamp: new Date().toLocaleString(),
        type: "General Inquiry",
        name, phone, email, position: "N/A",
        country: "N/A", experience: "N/A",
        education: "N/A", city: "N/A", notes: msg || "N/A"
    });

    // Send WhatsApp directly to owner
    const waMsg = `📩 *NEW INQUIRY*\n` +
        `━━━━━━━━━━━━━━━━━━\n` +
        `👤 Name: ${name}\n` +
        `📧 Email: ${email}\n` +
        `📞 Phone: ${phone}\n` +
        `💬 Message: ${msg}\n` +
        `⏰ Time: ${new Date().toLocaleString()}`;
    sendWhatsAppDirect(waMsg);

    // Open visitor's WhatsApp to send query directly
    const visitorWaUrl = `https://wa.me/${WHATSAPP_CONFIG.phone}?text=${encodeURIComponent(waMsg)}`;
    window.open(visitorWaUrl, '_blank');

    document.getElementById("contact-form").reset();
    showToast(`Opening WhatsApp to send your query. Thank you, ${name}!`);
}

// Toast indicator
function showToast(message) {
    const toast = document.getElementById("success-toast");
    if (!toast) return;
    document.getElementById("toast-message").innerText = message;
    
    toast.classList.add("active");
    setTimeout(() => {
        toast.classList.remove("active");
    }, 4500);
}

// Visa Eligibility Checker Mini App Logic
function selectOption(element, key, value) {
    const container = element.parentElement;
    container.querySelectorAll(".option-card").forEach(card => {
        card.classList.remove("selected");
    });
    
    element.classList.add("selected");
    eligibilityData[key] = value;
    document.getElementById("btn-quiz-next").removeAttribute("disabled");
}

function changeStep(direction) {
    const prevStep = currentStep;
    currentStep += direction;
    
    if (currentStep < 1) currentStep = 1;
    
    const progressFill = document.getElementById("progress-bar-fill");
    const progressPct = (currentStep - 1) * 25 + 25;
    if (progressFill) progressFill.style.width = `${progressPct}%`;
    
    document.querySelectorAll(".step-content").forEach(step => {
        step.classList.remove("active");
    });
    
    const nextStepEl = document.querySelector(`.step-content[data-step="${currentStep}"]`);
    if (nextStepEl) {
        nextStepEl.classList.add("active");
        
        const stepName = getStepKey(currentStep);
        if (eligibilityData[stepName]) {
            document.getElementById("btn-quiz-next").removeAttribute("disabled");
        } else {
            document.getElementById("btn-quiz-next").setAttribute("disabled", "true");
        }
        
        if (currentStep === 1) {
            document.getElementById("btn-quiz-prev").setAttribute("disabled", "true");
        } else {
            document.getElementById("btn-quiz-prev").removeAttribute("disabled");
        }
    } else {
        showEligibilityResult();
    }
}

function getStepKey(stepNumber) {
    switch (stepNumber) {
        case 1: return "destination";
        case 2: return "education";
        case 3: return "experience";
        case 4: return "language";
        default: return null;
    }
}

function showEligibilityResult() {
    const controls = document.getElementById("step-controls");
    if (controls) controls.style.display = "none";
    
    const resultStep = document.getElementById("result-step");
    if (resultStep) resultStep.classList.add("active");
    
    let score = 0;
    if (eligibilityData.education === "degree") score += 30;
    else if (eligibilityData.education === "vocational") score += 25;
    else if (eligibilityData.education === "highschool") score += 15;
    
    if (eligibilityData.experience === "senior") score += 40;
    else if (eligibilityData.experience === "mid") score += 25;
    else if (eligibilityData.experience === "none") score += 10;
    
    if (eligibilityData.language === "fluent") score += 30;
    else if (eligibilityData.language === "basic") score += 15;
    
    const scoreText = document.getElementById("eligibility-score");
    if (scoreText) scoreText.innerText = `${score}%`;
    
    const badge = document.getElementById("result-badge");
    const circle = document.getElementById("result-circle");
    const desc = document.getElementById("eligibility-description");
    
    if (circle) circle.className = "result-score-circle";
    
    if (score >= 75) {
        if (badge) badge.innerText = "Excellent Match";
        if (badge) badge.className = "result-badge high";
        if (circle) circle.classList.add("success-border");
        if (desc) desc.innerHTML = `Congratulations! You have a high matching probability for a <strong>${eligibilityData.destination}</strong> work permit. Your credentials and experience match corporate standards well. Click below to schedule a profiling call.`;
    } else if (score >= 50) {
        if (badge) badge.innerText = "Good Eligibility";
        if (badge) badge.className = "result-badge medium";
        if (circle) circle.classList.add("warning-border");
        if (desc) desc.innerHTML = `You have strong potential for a <strong>${eligibilityData.destination}</strong> job opening. A quick CV enhancement or specific industry preparation can help improve your success rates. Connect with us to optimize.`;
    } else {
        if (badge) badge.innerText = "Needs Profile Building";
        if (badge) badge.className = "result-badge medium";
        if (circle) circle.classList.add("warning-border");
        if (desc) desc.innerHTML = `Your score shows scope for profile enrichment. We suggest vocational certification or gainful local work experience to qualify for European parameters. Speak with our career counselor to explore solutions.`;
    }
}

function resetEligibility() {
    currentStep = 1;
    for (let key in eligibilityData) {
        eligibilityData[key] = null;
    }
    
    document.querySelectorAll(".option-card").forEach(card => {
        card.classList.remove("selected");
    });
    
    const progressFill = document.getElementById("progress-bar-fill");
    if (progressFill) progressFill.style.width = "25%";
    
    document.querySelectorAll(".step-content").forEach(step => {
        step.classList.remove("active");
    });
    const step1 = document.querySelector('.step-content[data-step="1"]');
    if (step1) step1.classList.add("active");
    
    const controls = document.getElementById("step-controls");
    if (controls) controls.style.display = "flex";
    const prevBtn = document.getElementById("btn-quiz-prev");
    const nextBtn = document.getElementById("btn-quiz-next");
    if (prevBtn) prevBtn.setAttribute("disabled", "true");
    if (nextBtn) nextBtn.setAttribute("disabled", "true");
}

function closeEligibilityResult() {
    window.location.href = "contact.html";
}

// Office tab panel setup
function setupOfficeTabs() {
    const tabButtons = document.querySelectorAll(".office-tab-btn");
    const tabPanels = document.querySelectorAll(".office-content");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            tabPanels.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            const targetId = `office-${btn.dataset.office}`;
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) targetPanel.classList.add("active");
        });
    });
}

// Testimonials Carousel Logic
function setupTestimonials() {
    const track = document.getElementById("testimonial-track");
    if (!track) return;
    const slides = Array.from(track.children);
    const prevBtn = document.getElementById("prev-slide");
    const nextBtn = document.getElementById("next-slide");
    const dotsContainer = document.getElementById("slider-dots");
    
    if (!prevBtn || !nextBtn || !dotsContainer) return;
    let currentIndex = 0;
    
    slides.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener("click", () => moveToSlide(i));
        dotsContainer.appendChild(dot);
    });
    
    const dots = Array.from(dotsContainer.children);
    
    const moveToSlide = (index) => {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(d => d.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
        
        currentIndex = index;
    };
    
    prevBtn.addEventListener("click", () => moveToSlide(currentIndex - 1));
    nextBtn.addEventListener("click", () => moveToSlide(currentIndex + 1));
    
    let sliderTimer = setInterval(() => {
        moveToSlide(currentIndex + 1);
    }, 8000);
    
    const sliderContainer = document.querySelector(".testimonial-container");
    if (sliderContainer) {
        sliderContainer.addEventListener("mouseenter", () => clearInterval(sliderTimer));
        sliderContainer.addEventListener("mouseleave", () => {
            sliderTimer = setInterval(() => {
                moveToSlide(currentIndex + 1);
            }, 8000);
        });
    }
}

// Global Country filter triggered by clicking the Globe pins on Homepage
function filterByCountry(countryName) {
    // Redirect to country detail page with full info (jobs, process, documents)
    window.location.href = `country.html?name=${encodeURIComponent(countryName)}`;
}



/* ================================================================
   DYNAMIC 3D GLOBE PINS & RESPONSIVE PROJECTION
   ================================================================ */

function initGlobePins() {
    const container = document.getElementById("dynamic-globe-pins");
    const globeEl = document.getElementById("earth-globe");
    const wrapperEl = document.querySelector(".holo-globe-wrapper");
    if (!container || !globeEl || !wrapperEl) return;

    container.innerHTML = "";

    const pinsData = [
        { name: 'Poland', code: 'pl', x: 450.893, y: 389.134, desc: 'Poland, Serbia, Bulgaria, Czech Republic' },
        { name: 'Russia', code: 'ru', x: 611.960, y: 313.347, desc: 'Moscow, St. Petersburg, Vladivostok' },
        { name: 'Israel', code: 'il', x: 486.937, y: 447.208, desc: 'Tel Aviv, Haifa, Ashdod' },
        { name: 'UAE', code: 'ae', x: 534.360, y: 467.173, desc: 'Dubai, Abu Dhabi, Sharjah' },
        { name: 'Malaysia', code: 'my', x: 670.365, y: 519.654, desc: 'Kuala Lumpur, Penang, Selangor' },
        { name: 'Oman', code: 'om', x: 539.068, y: 476.067, desc: 'Muscat, Salalah, Sohar' },
        { name: 'Serbia', code: 'rs', x: 451.861, y: 412.017, desc: 'Belgrade, Novi Sad, Nis' },
        { name: 'Uzbekistan', code: 'uz', x: 551.820, y: 417.823, desc: 'Tashkent, Samarkand, Bukhara' },
        { name: 'Ukraine', code: 'ua', x: 473.583, y: 399.254, desc: 'Kyiv, Kharkiv, Lviv' },
        { name: 'Czech Republic', code: 'cz', x: 439.619, y: 397.127, desc: 'Prague, Brno, Ostrava' },
        { name: 'Belarus', code: 'by', x: 463.704, y: 383.512, desc: 'Minsk, Brest, Grodno' },
        { name: 'Mauritius', code: 'mu', x: 544.782, y: 585.112, desc: 'Port Louis, Grand Baie' },
        { name: 'Vietnam', code: 'vn', x: 661.253, y: 486.124, desc: 'Hanoi, Ho Chi Minh City' },
        { name: 'Saudi Arabia', code: 'sa', x: 511.898, y: 466.566, desc: 'Riyadh, Jeddah, Dammam' },
        { name: 'Bulgaria', code: 'bg', x: 462.998, y: 416.535, desc: 'Sofia, Plovdiv, Varna' },
        { name: 'India HQ', code: 'in', x: 600.177, y: 464.958, isHQ: true }
    ];

    const elements = pinsData.map(pin => {
        let el;
        if (pin.isHQ) {
            el = document.createElement("div");
            el.className = "globe-pin-marker pin-hq";
            el.innerHTML = '<div class="pin-dot pin-dot-hq"></div><div class="pin-ring pin-ring-hq"></div><div class="pin-label-hq"><i class="fa-solid fa-building"></i> India HQ</div>';
        } else {
            el = document.createElement("a");
            el.href = "country.html?name=" + encodeURIComponent(pin.name);
            el.className = "globe-pin-marker";
            el.innerHTML = '<div class="pin-dot"></div><div class="pin-ring"></div>' +
                '<div class="pin-tooltip-card">' +
                '<div class="ptc-header"><i class="fa-solid fa-location-dot"></i> ' + pin.name + '</div>' +
                '<div class="ptc-body">' + pin.desc + '</div>' +
                '<div class="ptc-action">Click to view details <i class="fa-solid fa-arrow-right"></i></div>' +
                '</div>';
        }
        container.appendChild(el);
        return { pin: pin, el: el };
    });

    const startTime = performance.now();
    const mapWidth = 784.077;
    const animationDuration = 28000;

    function animate() {
        var elapsed = (performance.now() - startTime) % animationDuration;
        var shift = (elapsed / animationDuration) * mapWidth;

        var globeW = globeEl.clientWidth;
        var globeH = globeEl.clientHeight;
        var wrapperW = wrapperEl.clientWidth;
        var wrapperH = wrapperEl.clientHeight;

        var R_globe = globeW / 2;
        var x_center = globeW / 2;
        var y_center = globeH / 2;

        var x_offset = (wrapperW - globeW) / 2;
        var y_offset = (wrapperH - globeH) / 2;

        var scaleY = globeH / 458.627;

        elements.forEach(function(item) {
            var pin = item.pin;
            var el = item.el;

            var x_trans = (pin.x - 30.767 - shift) % mapWidth;
            if (x_trans < 0) x_trans += mapWidth;

            var theta = (x_trans / mapWidth) * 2 * Math.PI - Math.PI;
            var y_globe = (pin.y - 241.591) * scaleY;
            var dy = y_globe - y_center;
            var R_lat = Math.sqrt(Math.max(0, R_globe * R_globe - dy * dy));
            var x_globe = x_center + R_lat * Math.sin(theta);

            var z = Math.cos(theta);

            var x_wrapper = x_offset + x_globe;
            var y_wrapper = y_offset + y_globe;

            el.style.left = x_wrapper + "px";
            el.style.top = y_wrapper + "px";

            var opacity = Math.cos((x_globe - x_center) / R_globe * (Math.PI / 2));
            opacity = Math.max(0, Math.min(1, opacity));

            var margin = 25 * (globeW / 300);
            if (z >= 0 && x_globe >= margin && x_globe <= (globeW - margin)) {
                el.style.display = "flex";
                el.style.opacity = opacity;
                el.style.pointerEvents = "auto";
            } else {
                el.style.display = "none";
                el.style.opacity = 0;
                el.style.pointerEvents = "none";
            }
        });

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

/* ================================================================
   AI CHATBOT CLIENT-SIDE AUTO-REPLY LOGIC (UPGRADED & INTERACTIVE)
   ================================================================ */

function initAIChatbot() {
    var container = document.getElementById("chatbot-container");
    var toggleBtn = document.getElementById("chatbot-toggle");
    var closeBtn = document.getElementById("chatbot-close-btn");
    var form = document.getElementById("chatbot-input-form");
    var input = document.getElementById("chatbot-input");
    var messages = document.getElementById("chatbot-messages");
    var badge = document.getElementById("chatbot-badge");
    var adminBtn = document.getElementById("chatbot-admin-btn");
    var adminPanel = document.getElementById("chatbot-admin-panel");
    var adminClose = document.getElementById("admin-close-btn");
    var downloadReportBtn = document.getElementById("admin-download-report");

    if (!container || !toggleBtn || !form || !messages) return;

    var isOpen = false;
    var leadStage = "none";
    var currentLead = { name: "", phone: "", email: "", age: "", qualification: "", experience: "", passport: "", destination: "", trade: "", interest: "" };

    // Dynamically insert reset button into header if missing
    var headerActions = container.querySelector(".chatbot-actions");
    if (headerActions && !document.getElementById("chatbot-reset-btn")) {
        var resetBtn = document.createElement("button");
        resetBtn.className = "chatbot-btn";
        resetBtn.id = "chatbot-reset-btn";
        resetBtn.title = "Reset Chat History";
        resetBtn.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
        headerActions.insertBefore(resetBtn, headerActions.firstChild);
        
        resetBtn.addEventListener("click", function() {
            if (confirm("Are you sure you want to reset your chat history?")) {
                resetChatHistory();
            }
        });
    }

    // Load state from localStorage if exists
    var savedHistory = localStorage.getItem("hrms_chat_history_html");
    if (savedHistory) {
        // Keeps the layout stable, but we replace the messages div contents
        var tempDiv = document.createElement("div");
        tempDiv.innerHTML = savedHistory;
        
        // Remove old quick replies container since they will be re-rendered on append
        var qrs = tempDiv.querySelectorAll(".chatbot-quick-replies");
        qrs.forEach(function(q) { q.remove(); });
        
        messages.innerHTML = tempDiv.innerHTML;
        
        // Check if there was an active lead flow
        var savedLeadStage = localStorage.getItem("hrms_chat_lead_stage");
        var savedLeadData = localStorage.getItem("hrms_chat_current_lead");
        if (savedLeadStage) leadStage = savedLeadStage;
        if (savedLeadData) currentLead = JSON.parse(savedLeadData);
        
        // Ensure last quick replies are appended correctly based on state
        appendQuickReplies();
    }

    toggleBtn.addEventListener("click", function() {
        isOpen = !isOpen;
        if (isOpen) {
            container.classList.add("active");
            badge.style.display = "none";
            setTimeout(function() { messages.scrollTop = messages.scrollHeight; }, 100);
        } else {
            container.classList.remove("active");
        }
    });

    closeBtn.addEventListener("click", function() {
        isOpen = false;
        container.classList.remove("active");
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        var text = input.value.trim();
        if (!text) return;

        handleUserMessage(text);
        input.value = "";
    });

    window.sendQuickReply = function(text) {
        handleUserMessage(text);
    };

    function resetChatHistory() {
        leadStage = "none";
        currentLead = { name: "", phone: "", email: "", age: "", qualification: "", experience: "", passport: "", destination: "", trade: "", interest: "" };
        localStorage.removeItem("hrms_chat_lead_stage");
        localStorage.removeItem("hrms_chat_current_lead");
        localStorage.removeItem("hrms_chat_history_html");
        
        messages.innerHTML = '<div class="chat-msg bot">Hello! Welcome to Trendy Fortune Global. 🙏 I am <strong>Yasha Mishra</strong>, your official AI Career & Recruitment Assistant.<br><br>I can assist you regarding overseas jobs, internships, work permits, training programs, and visa guidance.<br><br>Type <strong>\'register\'</strong> to submit your details for personalized assistance, or ask me about:<br>• 💼 <strong>Job Openings</strong><br>• 🎓 <strong>Hospitality Internships</strong><br>• 📋 <strong>Eligibility Check</strong><br>• 💳 <strong>Visa & Program Fees</strong><br><br>Click one of the quick replies below or type your query to start!</div>';
        appendQuickReplies();
    }

    function handleUserMessage(text) {
        // Append user bubble
        appendMessage(text, "user");
        logChatActivity();

        // Secret commands
        if (text.toLowerCase() === "/admin" || text.toLowerCase() === "/report") {
            openAdminPanel();
            return;
        }

        // Show typing indicator
        showTypingIndicator();

        // Calculate a dynamic delay to feel realistic
        var delay = Math.min(1800, Math.max(900, text.length * 12));

        setTimeout(function() {
            removeTypingIndicator();
            var reply = getBotReply(text);
            appendMessage(reply, "bot");
            saveHistoryToLocal();
        }, delay);
    }

    function showTypingIndicator() {
        var oldQr = document.getElementById("chatbot-quick-replies");
        if (oldQr) oldQr.remove();

        var typingIndicator = document.createElement("div");
        typingIndicator.className = "chat-msg bot typing";
        typingIndicator.id = "chatbot-typing-indicator";
        typingIndicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
        messages.appendChild(typingIndicator);
        messages.scrollTop = messages.scrollHeight;
    }

    function removeTypingIndicator() {
        var indicator = document.getElementById("chatbot-typing-indicator");
        if (indicator) indicator.remove();
    }

    function appendMessage(text, sender) {
        var msg = document.createElement("div");
        msg.className = "chat-msg " + sender;
        
        // Format text: parse line breaks, bold tags, and bullet points
        var formatted = text
            .replace(/\\n/g, "<br>")
            .replace(/\n/g, "<br>")
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            
        msg.innerHTML = formatted;

        var oldQr = document.getElementById("chatbot-quick-replies");
        if (oldQr) oldQr.remove();

        messages.appendChild(msg);
        appendQuickReplies();
        messages.scrollTop = messages.scrollHeight;
    }

    function appendQuickReplies() {
        var oldQr = document.getElementById("chatbot-quick-replies");
        if (oldQr) oldQr.remove();

        var qr = document.createElement("div");
        qr.className = "chatbot-quick-replies";
        qr.id = "chatbot-quick-replies";

        if (leadStage === "none") {
            qr.innerHTML = '<button class="qr-btn" onclick="sendQuickReply(\'Explore Job Openings\')">Explore Jobs</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Hospitality Internships\')">Internships</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Check Eligibility\')">Check Eligibility</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Visa Fees Info\')">Fees & Costs</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Talk to Counselor\')">Talk to Counselor</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Register details\')">Register / Apply</button>';
        } else if (leadStage === "awaiting_passport") {
            qr.innerHTML = '<button class="qr-btn" onclick="sendQuickReply(\'Yes\')">Yes</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'No\')">No</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Cancel Registration\')">Cancel</button>';
        } else if (leadStage === "awaiting_destination") {
            qr.innerHTML = '<button class="qr-btn" onclick="sendQuickReply(\'USA\')">USA</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Germany\')">Germany</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'France\')">France</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'UAE\')">UAE</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Serbia\')">Serbia</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Croatia\')">Croatia</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Romania\')">Romania</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Other Country\')">Other</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Cancel Registration\')">Cancel</button>';
        } else if (leadStage === "awaiting_trade") {
            qr.innerHTML = '<button class="qr-btn" onclick="sendQuickReply(\'Hospitality\')">Hospitality</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'IT / Tech\')">IT / Tech</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Driver\')">Driver</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Construction\')">Construction</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Helper\')">Helper</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Cook\')">Cook</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Other Job\')">Other</button>' +
                '<button class="qr-btn" onclick="sendQuickReply(\'Cancel Registration\')">Cancel</button>';
        } else {
            qr.innerHTML = '<button class="qr-btn" onclick="sendQuickReply(\'Cancel Registration\')"><i class="fa-solid fa-ban"></i> Cancel Registration</button>';
        }

        messages.appendChild(qr);
    }

    function saveHistoryToLocal() {
        try {
            localStorage.setItem("hrms_chat_history_html", messages.innerHTML);
            localStorage.setItem("hrms_chat_lead_stage", leadStage);
            localStorage.setItem("hrms_chat_current_lead", JSON.stringify(currentLead));
        } catch (e) {
            console.error("Local storage sync error:", e);
        }
    }

    function getBotReply(userInput) {
        var inputLower = userInput.toLowerCase();

        // Graceful exit / cancel request
        if (inputLower.includes("cancel") || inputLower.includes("exit") || inputLower.includes("stop")) {
            if (leadStage !== "none") {
                leadStage = "none";
                currentLead = { name: "", phone: "", email: "", age: "", qualification: "", experience: "", passport: "", destination: "", trade: "", interest: "" };
                return "Your profile registration flow has been cancelled. What else can I assist you with today?";
            }
        }

        // Active Lead Capture Flow
        if (leadStage === "awaiting_name") {
            if (userInput.length < 2 || /^[0-9]+$/.test(userInput)) {
                return "Please enter a valid full name (e.g. Rahul Sharma) to continue.";
            }
            currentLead.name = userInput;
            leadStage = "awaiting_phone";
            return "Nice to meet you, **" + userInput + "**! 🤝\n\n**Step 2/9**: Please share your **10-digit mobile or WhatsApp number** (e.g., +91 9988776655). We will use this to contact you regarding matched openings.";
        }

        if (leadStage === "awaiting_phone") {
            var phoneClean = userInput.replace(/[^0-9+]/g, "");
            if (phoneClean.length < 9) {
                return "Please enter a valid mobile number (e.g. +91 9876543210 or 9876543210) so we can message you.";
            }
            currentLead.phone = phoneClean;
            leadStage = "awaiting_email";
            return "Perfect! ✅\n\n**Step 3/9**: Please share your **Email ID** (e.g., candidate@email.com) so we can send you official job specifications and programs details.";
        }

        if (leadStage === "awaiting_email") {
            if (!userInput.includes("@") || !userInput.includes(".")) {
                return "Please enter a valid email address (e.g. name@example.com) to continue.";
            }
            currentLead.email = userInput;
            leadStage = "awaiting_age";
            return "Got it! ✅\n\n**Step 4/9**: What is your **Age**? (e.g. 24)";
        }

        if (leadStage === "awaiting_age") {
            var ageVal = parseInt(userInput.replace(/[^0-9]/g, ""), 10);
            if (isNaN(ageVal) || ageVal < 18 || ageVal > 60) {
                return "Please enter a valid age between 18 and 60.";
            }
            currentLead.age = userInput;
            leadStage = "awaiting_qualification";
            return "Understood! ✅\n\n**Step 5/9**: What is your **highest educational qualification**? (e.g., 10th, 12th, Graduate, ITI, Diploma, or Hospitality Degree)";
        }

        if (leadStage === "awaiting_qualification") {
            if (userInput.length < 2) {
                return "Please enter a valid qualification (e.g., Graduate or 12th).";
            }
            currentLead.qualification = userInput;
            leadStage = "awaiting_experience";
            return "Great! ✅\n\n**Step 6/9**: How many years of **work experience** do you have? (e.g. Fresher, 1 year, 3 years)";
        }

        if (leadStage === "awaiting_experience") {
            currentLead.experience = userInput;
            leadStage = "awaiting_passport";
            return "Excellent! ✅\n\n**Step 7/9**: Do you have a **valid Passport**? Please choose **Yes** or **No** below.";
        }

        if (leadStage === "awaiting_passport") {
            var answer = userInput.toLowerCase();
            if (answer !== "yes" && answer !== "no") {
                return "Please select or type **Yes** or **No** regarding your passport availability.";
            }
            currentLead.passport = userInput;
            leadStage = "awaiting_destination";
            return "Perfect! ✅\n\n**Step 8/9**: What is your **Preferred Country**? Choose from the options below (USA, France, Germany, UAE, Serbia, Croatia, Romania) or type your choice.";
        }

        if (leadStage === "awaiting_destination") {
            currentLead.destination = userInput;
            leadStage = "awaiting_trade";
            return "Got it! ✅\n\n**Step 9/9**: Finally, what is your **Preferred Job Category / Trade**? (e.g. Hospitality, IT / Tech, Driver, Construction, Helper, Cook, etc.)";
        }

        if (leadStage === "awaiting_trade") {
            currentLead.trade = userInput;
            currentLead.interest = "Category: " + currentLead.trade + " | Country: " + currentLead.destination + " | Age: " + currentLead.age + " | Edu: " + currentLead.qualification + " | Exp: " + currentLead.experience + " | Passport: " + currentLead.passport;
            leadStage = "none";
            saveLead(currentLead.name, currentLead.phone, currentLead.interest);
            return "Thank you for sharing your information. Our recruitment team will review your profile and contact you shortly.";
        }

        // Generic Intent Responses

        if (inputLower.includes("hello") || inputLower.includes("hi") || inputLower.includes("hey") || inputLower.includes("namaste") || inputLower.includes("salam")) {
            return "Hello! Welcome to Trendy Fortune Global. 🙏 I am **Yasha Mishra**, your official AI Career & Recruitment Assistant.\n\n" +
                "I can assist you regarding overseas jobs, internships, work permits, and visa guidance. We process applications for USA, France, Germany, UAE, Serbia, Croatia, Romania, and other destinations.\n\n" +
                "Please submit your details for personalized assistance! Type **'register'** to begin.";
        }

        if (inputLower.includes("register") || inputLower.includes("apply") || inputLower.includes("form") || inputLower.includes("consultation")) {
            leadStage = "awaiting_name";
            currentLead = { name: "", phone: "", email: "", age: "", qualification: "", experience: "", passport: "", destination: "", trade: "", interest: "" };
            return "Excellent choice! Let's register your profile for overseas placements and training programs. This will take only 9 quick steps.\n\n**Step 1/9**: Please type your **Full Name** (as written in your passport).";
        }

        if (inputLower.includes("job") || inputLower.includes("opening") || inputLower.includes("work") || inputLower.includes("vacancy") || inputLower.includes("positions")) {
            return "💼 **Overseas Job Opportunities**\n\n" +
                "We provide direct recruitment and placement assistance in various sectors across multiple countries:\n" +
                "• 🇩🇪 **Germany**: Tech, Nursing, Hospitality, & Vocational Training (Ausbildung).\n" +
                "• 🇺🇸 **USA**: Corporate placements, Business administration, and hospitality roles.\n" +
                "• 🇫🇷 **France & Europe**: Warehouse workers, factory packers, cooks, and hospitality staff.\n" +
                "• 🇦🇪 **UAE (Dubai)**: Drivers, logistics coordinators, office staff, and technicians.\n" +
                "• 🇷🇸 **Serbia, Croatia, Romania**: Welders, drivers, construction masons, and helpers.\n\n" +
                "**What is your preferred country and experience?**\n" +
                "Please submit your details for personalized assistance! Type **'register'** to begin.";
        }

        if (inputLower.includes("internship") || inputLower.includes("intern") || inputLower.includes("training") || inputLower.includes("hospitality program")) {
            return "🎓 **Hospitality & Career Training Programs**\n\n" +
                "We specialize in paid hospitality internships and training programs abroad:\n" +
                "• **USA J-1 Internship**: 12-month J-1 training programs in premium luxury hotels and resorts for hospitality students/graduates.\n" +
                "• **France Hospitality Internships**: 3 to 6 months internships in international cuisines and hospitality management.\n" +
                "• **Germany Ausbildung**: Dual vocational training programs where you earn while studying hospitality, culinary, or technical trades.\n\n" +
                "**What is your preferred destination for your internship or training program?**\n" +
                "Please share your details for personalized assistance! Type **'register'** to begin.";
        }

        if (inputLower.includes("eligibility") || inputLower.includes("criteria") || inputLower.includes("eligible") || inputLower.includes("requirements")) {
            return "📋 **General Eligibility Check**\n\n" +
                "Eligibility depends on the specific country, job category, and program rules. Here is a general outline:\n" +
                "• **Age**: Generally 18 to 45 years.\n" +
                "• **Passport**: A valid passport is mandatory for all international placements.\n" +
                "• **Qualification**: Freshers can apply for internships/training programs. Professional jobs require relevant degrees, ITI, or diplomas.\n" +
                "• **Experience**: Fresh graduates can apply for J-1 and training; general jobs require 2+ years of field experience.\n\n" +
                "**Please share your age, qualification, passport status, and experience for general guidance.**\n" +
                "To submit your profile for a verified evaluation, please type **'register'**.";
        }

        if (inputLower.includes("fee") || inputLower.includes("charge") || inputLower.includes("cost") || inputLower.includes("price") || inputLower.includes("money")) {
            return "💳 **Program & Visa Fees**\n\n" +
                "Visa processing and program fees vary depending on the destination country, sponsoring employer, and type of program (recruitment jobs vs. J-1 internships).\n" +
                "• We maintain full financial transparency. There are no hidden fees.\n" +
                "• A dedicated career counselor can assist you with exact cost estimates based on your profile.\n\n" +
                "Please share your details so a counselor can contact you! Type **'register'** to start.";
        }

        if (inputLower.includes("visa") || inputLower.includes("process") || inputLower.includes("stamping") || inputLower.includes("guidance")) {
            return "✈️ **Visa Guidance & Processing**\n\n" +
                "We provide step-by-step guidance for overseas work permits, J-1 exchange visitor visas, and national visa applications.\n" +
                "• *Important Notice*: Visa approvals are strictly determined by the respective foreign embassy or consulate. We do not provide legal or immigration guarantees.\n\n" +
                "Please submit your details for personalized assistance! Type **'register'** to begin.";
        }

        if (inputLower.includes("passport") || inputLower.includes("pass port")) {
            return "🛂 **Is a passport mandatory?**\n\n" +
                "Yes, a valid passport is generally required for all overseas opportunities, visa applications, and work permits.\n\n" +
                "Please share your details for personalized assistance! Type **'register'** to start.";
        }

        if (inputLower.includes("how long") || inputLower.includes("timeline") || inputLower.includes("duration") || inputLower.includes("processing time")) {
            return "⏱️ **How long does processing take?**\n\n" +
                "Processing time depends on the country, employer selection, and documentation queue:\n" +
                "• **Gulf Placements**: Approx. 30 to 45 days.\n" +
                "• **USA J-1 / Europe Visas**: Approx. 3 to 5 months.\n\n" +
                "Please share your details for personalized assistance! Type **'register'** to begin.";
        }

        if (inputLower.includes("accommodation") || inputLower.includes("hostel") || inputLower.includes("housing") || inputLower.includes("room")) {
            return "🏠 **Is accommodation provided?**\n\n" +
                "Accommodation options depend on the employer and the specific job offer. Many European and Gulf employers provide shared accommodation or housing allowances, while USA J-1 interns are assisted in finding rental apartments.\n\n" +
                "Please share your details for personalized assistance! Type **'register'** to begin.";
        }

        if (inputLower.includes("fresher") || inputLower.includes("no experience") || inputLower.includes("experience required")) {
            return "🎓 **Can freshers apply?**\n\n" +
                "Yes, freshers can apply! We have paid hospitality internship programs in the USA and France, as well as dual vocational Ausbildung programs in Germany. Certain entry-level jobs in the Gulf are also open to freshers.\n\n" +
                "Please share your details for personalized assistance! Type **'register'** to begin.";
        }

        if (inputLower.includes("counselor") || inputLower.includes("talk") || inputLower.includes("call") || inputLower.includes("speak") || inputLower.includes("contact")) {
            return "📞 **Talk to a Counselor**\n\n" +
                "Please share your name and contact number, and our counselor will contact you. You can also type **'register'** to register all your details so our counselor has your CV outline ready.\n\n" +
                "Please share your details for personalized assistance! Type **'register'** to begin.";
        }

        return "I'm the official AI Career & Recruitment Assistant for Trendy Fortune Global. 🤖\n\n" +
            "I can assist you with:\n" +
            "• **International Jobs** (USA, Germany, France, UAE, Serbia, Croatia, Romania)\n" +
            "• **Hospitality Internships** (J-1 USA/France paid programs)\n" +
            "• **Visa Fees & Timelines**\n\n" +
            "Please submit your details for personalized assistance! Type **'register'** to begin.";
    }

    function saveLead(name, phone, interest) {
        try {
            var leads = JSON.parse(localStorage.getItem("hrms_chat_leads") || "[]");
            var newLead = {
                timestamp: new Date().toLocaleString(),
                date: new Date().toISOString().split("T")[0],
                name: name,
                phone: phone,
                interest: interest
            };
            leads.push(newLead);
            localStorage.setItem("hrms_chat_leads", JSON.stringify(leads));

            if (typeof saveToGoogleSheet === "function") {
                saveToGoogleSheet({
                    timestamp: newLead.timestamp,
                    type: "Chatbot Lead",
                    name: name,
                    phone: phone,
                    email: currentLead.email || "N/A",
                    position: currentLead.trade || "N/A",
                    country: currentLead.destination || "N/A",
                    experience: currentLead.experience || "Captured via chat",
                    education: currentLead.qualification || "N/A",
                    city: "N/A",
                    notes: "Age: " + (currentLead.age || "N/A") + " | Passport: " + (currentLead.passport || "N/A") + " | Captured by AI Assistant"
                });
            }

            if (typeof sendWhatsAppDirect === "function") {
                var waMsg = "\u{1F4AC} *NEW CHATBOT LEAD*\n" +
                    "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n" +
                    "\u{1F464} Name: " + name + "\n" +
                    "\u{1F4DE} Phone: " + phone + "\n" +
                    "\u{1F30D} Interest: " + interest + "\n" +
                    "\u23F0 Time: " + newLead.timestamp;
                sendWhatsAppDirect(waMsg);
            }
        } catch (e) {
            console.error("Failed to save lead:", e);
        }
    }

    function logChatActivity() {
        try {
            var today = new Date().toISOString().split("T")[0];
            var activity = JSON.parse(localStorage.getItem("hrms_chat_activity") || "{}");
            if (!activity[today]) {
                activity[today] = { chats: 0, leads: 0 };
            }
            activity[today].chats += 1;
            localStorage.setItem("hrms_chat_activity", JSON.stringify(activity));
        } catch (e) {
            console.error("Failed to log activity:", e);
        }
    }

    adminBtn.addEventListener("click", function() {
        var password = prompt("Enter Admin Password:");
        if (password === "admin123" || password === "admin") {
            openAdminPanel();
        } else if (password !== null) {
            alert("Incorrect password!");
        }
    });

    adminClose.addEventListener("click", function() {
        adminPanel.style.display = "none";
    });

    function openAdminPanel() {
        adminPanel.style.display = "flex";
        renderAdminStats();
    }

    function renderAdminStats() {
        try {
            var today = new Date().toISOString().split("T")[0];
            var activity = JSON.parse(localStorage.getItem("hrms_chat_activity") || "{}");
            var todayActivity = activity[today] || { chats: 0 };
            var leads = JSON.parse(localStorage.getItem("hrms_chat_leads") || "[]");

            document.getElementById("admin-stat-chats").innerText = todayActivity.chats;
            document.getElementById("admin-stat-leads").innerText = leads.length;

            var listContainer = document.getElementById("admin-leads-list");
            if (leads.length === 0) {
                listContainer.innerHTML = '<div class="no-leads-msg">No leads captured yet.</div>';
            } else {
                var html = '<table class="admin-leads-table"><thead><tr><th>Name</th><th>Phone</th><th>Interest</th></tr></thead><tbody>';
                leads.slice().reverse().forEach(function(lead) {
                    html += '<tr><td><strong>' + lead.name + '</strong></td><td>' + lead.phone + '</td><td>' + lead.interest + '</td></tr>';
                });
                html += '</tbody></table>';
                listContainer.innerHTML = html;
            }
        } catch (e) {
            console.error("Failed to render admin stats:", e);
        }
    }

    downloadReportBtn.addEventListener("click", function() {
        try {
            var leads = JSON.parse(localStorage.getItem("hrms_chat_leads") || "[]");
            if (leads.length === 0) {
                alert("No lead data available to download.");
                return;
            }

            var csvContent = "data:text/csv;charset=utf-8,";
            csvContent += "Timestamp,Name,Phone,Interest\n";

            leads.forEach(function(lead) {
                var row = '"' + lead.timestamp + '","' + lead.name.replace(/"/g, '""') + '","' + lead.phone + '","' + lead.interest.replace(/"/g, '""') + '"';
                csvContent += row + "\n";
            });

            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "Trendy_Leads_Report_" + new Date().toISOString().split("T")[0] + ".csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (e) {
            console.error("CSV download error:", e);
        }
    });
}

// Auto-run on document ready
document.addEventListener("DOMContentLoaded", function() {
    initGlobePins();
    initAIChatbot();
});

// === Language Switcher Logic ===
window.changeLanguage = function(langCode) {
    // 1. Update styling of all language switcher buttons on the page
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(langCode)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 2. Set translation cookies
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/en/${langCode}; path=/;`; // fallback for localhost

    // 3. Trigger change on hidden Google Translate element if loaded
    const translateCombo = document.querySelector('.goog-te-combo');
    if (translateCombo) {
        translateCombo.value = langCode;
        translateCombo.dispatchEvent(new Event('change'));
    } else {
        // Fallback: reload page to apply cookie
        window.location.reload();
    }
};

// Auto-activate language switcher button styles on page load based on cookie state
document.addEventListener("DOMContentLoaded", function() {
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const currentTrans = getCookie('googtrans');
    let activeLang = 'en';
    if (currentTrans && currentTrans.endsWith('/hi')) {
        activeLang = 'hi';
    }

    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(activeLang)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
});
