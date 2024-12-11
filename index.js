let projects;

async function loadJSON() {
    const response = await fetch('./projects.json');
    if (!response.ok) {
        throw new Error('An error occured');
    }
    projects = await response.json();
}

async function populateProjects() {
    await loadJSON();
    console.log(projects);
}

populateProjects();
