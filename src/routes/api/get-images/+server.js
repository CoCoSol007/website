import { readFile } from 'fs/promises';

export const GET = async ({ url }) => {

    const path = url.searchParams.get('path');
    const image = await readFile('data/assets/' + path);

    return new Response(image, {
        status: 200,
        headers: {
            'Content-Type': 'image/*'
        }
    })

}