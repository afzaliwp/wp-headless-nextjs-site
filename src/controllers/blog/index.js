import axios from "axios";

const getBlogPosts = async () => {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_POSTS_URL}`, {
        page: 1,
        perPage: 16,
    });

    return data;
}

const getBlogPostImg = async (featuredMediaUrl) => {
    const {data} = await axios.get(featuredMediaUrl);

    if (data) {
        return data.guid.rendered;
    } else {
        return '';
    }
}

const getPostBySlug = async (slug) => {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_POSTS_URL}`, {
            params: {
                slug: slug
            }
        }
    );

    return data;
}

export {
    getBlogPosts,
    getBlogPostImg,
    getPostBySlug
}