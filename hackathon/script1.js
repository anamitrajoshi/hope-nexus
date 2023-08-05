function searchPeople() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const people = document.querySelectorAll('.person');

    // Clear previous search results
    document.getElementById('search-results').innerHTML = '';

    for (const person of people) {
        const skills = person.querySelector('p').innerText.toLowerCase();
        if (skills.includes(searchInput)) {
            // Clone the matched person and append to the search results
            const clonedPerson = person.cloneNode(true);
            document.getElementById('search-results').appendChild(clonedPerson);
        }
    }
}

function toggleAbout() {
    var aboutSection = document.getElementById('about');
    if (aboutSection.style.display === 'none') {
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none';
    }
}
