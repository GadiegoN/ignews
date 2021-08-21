import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
    const prismic = Prismic.client(
        process.env.PRISMICS_ENDPOINT,
        {
            req,
            accessToken: process.env.PRISMICS_ACCESS_TOKEN
        }
    );

    return prismic;
}