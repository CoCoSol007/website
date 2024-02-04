import { readFile } from 'fs/promises';

export const GET = async () => {
    const data = await readFile('data/db/projects.json', 'utf8');

    return new Response(data, {
        status: 200
    });
}