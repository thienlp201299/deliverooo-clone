import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = sanityClient({
    projectId: 'fgnln7e6',
    dataset: 'production',
    apiVersion: '2021-10-21',
    token: 'sanity-auth-token',
    useCdn: true,
    /* QUERY: encodeURIComponent('*[_type == "deliveroo-clone"]'),
    URL: `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${QUERY}`, */
});



const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
