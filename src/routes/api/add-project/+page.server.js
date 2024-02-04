import { is_admin } from '$lib';
import { readFile, writeFile } from 'fs/promises';

export const actions = {
    default: async ({ cookies, request }) => {
        if (!is_admin(cookies)) {
            throw redirect(302, '/login');
        }

        // Lire les données du fichier JSON existant
        const path = 'data/db/projects.json';
        const existingData = await readFile(path, 'utf8');
        const parsedExistingData = JSON.parse(existingData);

        const formData = await request.formData();
        const data = Object.fromEntries(formData);

        const fileName = `${Date.now().toString()}.${data.image.type.slice(6)}`;

        const write_data = {
            "title": data.title,
            "description": data.description,
            "link": data.link,
            "link_img": fileName
        };

        // Ajouter les nouvelles données au tableau existant
        parsedExistingData.push(write_data);

        try {
            // Écrire les données mises à jour dans le fichier JSON
            await writeFile('data/db/projects.json', JSON.stringify(parsedExistingData, null, 2));

            // Sauvegarder l'image dans le dossier statique
            // await writeFile(`static/images/${fileName}`, data.image.data);

            const imageContent = await data.image.arrayBuffer();
            // Écrire le contenu de l'image dans un fichier
            await writeFile(`data/assets/${fileName}`, Buffer.from(imageContent));

            return null;
        } catch (error) {
            console.error('Erreur lors de l\'écriture des données ou de l\'image :', error);
            // Gérer l'erreur selon vos besoins
            throw error;
        }
    }
};
