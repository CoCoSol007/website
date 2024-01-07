document.addEventListener('DOMContentLoaded', function () {
    // Charger les services depuis le fichier JSON
    fetch('services/services.json')
        .then(response => response.json())
        .then(data => {
            const servicesSection = document.getElementById('services');

            Object.keys(data).forEach(serviceName => {
                const service = data[serviceName];

                // Créer une carte de service
                const serviceCard = document.createElement('div');
                serviceCard.className = 'w-full md:w-1/2 lg:w-1/3 px-4 mb-4 transition-transform transform hover:scale-105';

                // Remplir le contenu de la carte
                serviceCard.innerHTML = `
                    <div class="bg-gray-700 p-6 rounded-lg shadow-md" onclick="window.location.href='${service.link}'">
                        <img src="${service.logo}" alt="${serviceName} Logo" class="w-16 h-16 mb-4">
                        <h3 class="text-xl font-semibold mb-2">${serviceName}</h3>
                        <p>${service.description}</p>
                        
                    </div>
                `;

                // Ajouter la carte de service à la section des services
                servicesSection.appendChild(serviceCard);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des services :', error));
});
