/** @type {import { './$types' }.Actions} */

import { redirect } from "@sveltejs/kit";
import { is_admin } from '$lib';

export async function load({ cookies }) {


    if (is_admin(cookies)) {
        // Redirection si le cookie est présent
        throw redirect(302, '/admin');
    }

    // Si le cookie n'est pas présent ou True, poursuivre normalement
    return null;
}


export const actions = {
    default: async ({ cookies, request }) => {
        const formData = await request.formData();
        const pwd = formData.get("password");


        cookies.set("ADMIN_PWD", pwd, { path: "/", secure: 'true' });
        throw redirect(302, "/admin");


    }
}