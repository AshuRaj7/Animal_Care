// Define data structure for Indian states, districts, and cities

const indianLocations = {
    "Andhra Pradesh": {
        "Anantapur": ["Anantapur", "Hindupur", "Guntakal", "Dharmavaram", "Kadiri"],
        "Chittoor": ["Tirupati", "Chittoor", "Madanapalle", "Srikalahasti", "Puttur"],
        "East Godavari": ["Kakinada", "Rajahmundry", "Amalapuram", "Peddapuram", "Samalkot"],
        "Guntur": ["Guntur", "Tenali", "Narasaraopet", "Bapatla", "Ponnur"],
        "Kadapa": ["Kadapa", "Proddatur", "Rajampet", "Rayachoti", "Jammalamadugu"],
        "Visakhapatnam": ["Visakhapatnam", "Vizianagaram", "Anakapalle", "Bhimunipatnam", "Srikakulam"],

    },
    "Arunachal Pradesh": {
        "Anjaw": ["Hawai", "Hayuliang", "Manchal", "Walong", "Chaglagam"],
        "Changlang": ["Changlang", "Jairampur", "Nampong", "Bordumsa", "Miao"],
        "East Kameng": ["Seppa", "Chayang Tajo", "Bameng", "Pakke Kessang", "Dissing Passo"],
        "East Siang": ["Pasighat", "Mebo", "Roing", "Boleng", "Rumgong"],
        "Kurung Kumey": ["Koloriang", "Nyapin", "Nyobia", "Pania", "Palin"],
    },
    "Assam": {
        "Baksa": ["Barama", "Baksa", "Barama", "Tihu", "Goreswar"],
        "Barpeta": ["Barpeta", "Barpeta Road", "Bilasipara", "Sarupeta", "Sorbhog"],
        "Bongaigaon": ["Bongaigaon", "Abhayapuri", "North Bongaigaon", "Chapaguri", "Boitamari"],
        "Cachar": ["Silchar", "Hailakandi", "Karimganj", "Lakhipur", "Katigorah"],
        "Darrang": ["Mangaldoi", "Kharupatia", "Dalgaon", "Sipajhar", "Pathorighat"],
    },
    // Add more states with districts and cities
};


function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('hidden');
}

// Populate states dropdown
function populateStates() {
    const stateSelect = document.getElementById("state");
    stateSelect.innerHTML = "<option value=''>Select State</option>";
    Object.keys(indianLocations).forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
}

// Populate districts based on selected state
function populateDistricts() {
    const stateSelect = document.getElementById("state");
    const districtSelect = document.getElementById("district");
    const selectedState = stateSelect.value;
    districtSelect.innerHTML = "<option value=''>Select District</option>";

    if (selectedState !== "") {
        const districts = Object.keys(indianLocations[selectedState]);
        districts.forEach(district => {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

// Populate cities based on selected district
function populateCities() {
    const stateSelect = document.getElementById("state");
    const districtSelect = document.getElementById("district");
    const citySelect = document.getElementById("city");
    const selectedState = stateSelect.value;
    const selectedDistrict = districtSelect.value;
    citySelect.innerHTML = "<option value=''>Select City</option>";

    if (selectedState !== "" && selectedDistrict !== "") {
        const cities = indianLocations[selectedState][selectedDistrict];
        cities.forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}

// Fetch shelter details based on selected city
function fetchShelterDetails() {
    const citySelect = document.getElementById("city");
    const selectedCity = citySelect.value;
    // Here you can implement fetching shelter details based on the selected city
    console.log("Fetching shelter details for city: " + selectedCity);
}

// Call populateStates() when the page loads
populateStates();
// Fetch shelter details based on selected city
function fetchShelterDetails() {
    const stateSelect = document.getElementById("state");
    const districtSelect = document.getElementById("district");
    const citySelect = document.getElementById("city");
    const selectedState = stateSelect.value;
    const selectedDistrict = districtSelect.value;
    const selectedCity = citySelect.value;

    if (selectedState !== "" && selectedDistrict !== "" && selectedCity !== "") {
        // Check if the selected state, district, and city match the example shelter details
        if (selectedState === "Andhra Pradesh" && selectedDistrict === "Visakhapatnam" && selectedCity === "Visakhapatnam") {
            // Example shelter details for Visakhapatnam city
            const shelterDetailsDiv = document.getElementById("shelterDetails");
           
            shelterDetailsDiv.innerHTML = `
                <h3>The Pet Haven</h3>
                <p><strong>Shelter Name:</strong> The Pet Haven</p>
                <p><strong>Address:</strong> MVP colony, Visakhapatnam</p>
                <p><strong>Phone:</strong> 9876543210</p>
            `;
        } else {
            // If no example shelter details are available, display a message
            const shelterDetailsDiv = document.getElementById("shelterDetails");
            shelterDetailsDiv.innerHTML = "<p>No shelter found for selected location.</p>";
        }
    } else {
        // If any of the dropdowns is not selected, display a message
        const shelterDetailsDiv = document.getElementById("shelterDetails");
        shelterDetailsDiv.innerHTML = "<p>Please select state, district, and city.</p>";
    }
}

