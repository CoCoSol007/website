import { redirect } from '@sveltejs/kit';
import { is_admin } from '$lib';

export async function load({ cookies }) {
    // Récupérer tous les cookies de la requête
    const allCookies = cookies.getAll();

    // Chercher le cookie spécifique
    const monCookie = allCookies.find(cookie => cookie.name === 'ADMIN_PWD');

    // Vérifier si le cookie spécifique est présent et a la valeur attendue
    if (!is_admin(cookies)) {
        // Redirection si le cookie est présent
        throw redirect(302, '/login');
    }

    // Si le cookie n'est pas présent ou True, poursuivre normalement
    return null;
}
