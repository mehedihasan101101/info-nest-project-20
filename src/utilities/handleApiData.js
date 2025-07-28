

export default async function ({ params }) {
    const { categoryName } = params;
    const url = "/news_data.json";

    try {
        const response = await fetch(url);
        const allNews = await response.json();

        if (categoryName && categoryName !== "all_news") {
            const news = allNews.filter(eachNews => eachNews.category === categoryName);
            return news;
        }

        return allNews;
    } catch (error) {
        console.error("Failed to fetch news:", error);
        return [];
    }
}