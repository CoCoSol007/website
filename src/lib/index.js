// place files you want to import through the `$lib` alias in this folder.

export const PWD = 'coucou';

export const is_admin = (cookies) => {
    const allCookies = cookies.getAll();

    // Chercher le cookie spécifique
    const monCookie = allCookies.find(cookie => cookie.name === 'ADMIN_PWD');



    // Vérifier si le cookie spécifique est présent et a la valeur attendue
    if (monCookie != undefined && monCookie.value === PWD) {
        return true;
    }

    return false;
}