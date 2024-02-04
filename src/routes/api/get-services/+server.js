import { readFile } from 'fs/promises';

export const GET = async () => {
    const data = await readFile('data/db/services.json', 'utf8');

    return new Response(data, {
        status: 200
    });
}