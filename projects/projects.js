document.addEventListener('DOMContentLoaded', function () {
    // Charger les projets depuis le fichier JSON
    fetch('projects/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsSection = document.getElementById('projects');

            Object.keys(data).forEach(uuid => {
                const project = data[uuid];

                // Créer une carte de projet
                const projectCard = document.createElement('div');
                projectCard.className = 'w-full md:w-1/2 lg:w-1/3 px-4 mb-4 transition-transform transform hover:scale-105';

                // Remplir le contenu de la carte
                projectCard.innerHTML = `
                <div class="bg-gray-700 p-6 rounded-lg shadow-md" onclick="window.location.href='${project.link}'">
                    <img src="${project.image}" alt="${uuid} Image" class="w-full h-40 object-contain mb-4">
                    <h3 class="text-xl font-semibold mb-2">${uuid}</h3>
                    <p>${project.description}</p>
                </div>
            `;


                // Ajouter la carte de projet à la section des projets
                projectsSection.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des projets :', error));
});
