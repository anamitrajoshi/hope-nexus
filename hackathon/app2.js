function searchPeople() {
    const searchInput = document.getElementById("search-input").value;
    const peopleSection = document.getElementById("people-section");
    const peopleList = peopleSection.getElementsByClassName("person");
    const searchResults = document.getElementById("search-results");
    const peopleTableBody = document.getElementById("people-table-body");

    searchResults.innerHTML = "";
    peopleTableBody.innerHTML = "";

    for (const person of peopleList) {
        const name = person.getElementsByTagName("h3")[0].textContent;
        const skills = person.getElementsByTagName("p")[0].textContent.toLowerCase();
        if (skills.includes(searchInput)) {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            const skillsCell = document.createElement("td");
            nameCell.textContent = name;
            skillsCell.textContent = skills;
            row.appendChild(nameCell);
            row.appendChild(skillsCell);
            peopleTableBody.appendChild(row);
        }
    }

    if (peopleTableBody.children.length === 0) {
        const noResultsMessage = document.createElement("tr");
        const noResultsCell = document.createElement("td");
        noResultsCell.textContent = "No matching people found.";
        noResultsCell.colSpan = 2;
        noResultsMessage.appendChild(noResultsCell);
        peopleTableBody.appendChild(noResultsMessage);
    }
}

// Add error handling
try {
    searchPeople();
} catch (error) {
    console.error(error);
}

// Add a loading animation
const loadingSpinner = document.createElement("div");
loadingSpinner.classList.add("loading-spinner");
searchResults.appendChild(loadingSpinner);

// Add a debounce function to the search input
const debouncedSearch = debounce(searchPeople, 500);

document.getElementById("search-input").addEventListener("keyup", debouncedSearch);