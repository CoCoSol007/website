import { fetchArticles } from '../../../lib/api';

export const load = ({ params }) => {
    const get_articles = async () => {
        const articles = await fetchArticles();
        return articles
    }

    return get_articles().then(articles => {
        for (let i = 0; i < articles.length; i++) {
            if (articles[i].id == params.article) {
                return(articles[i])
            }
        }
    })
}