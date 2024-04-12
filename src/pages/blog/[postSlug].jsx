import {useRouter} from "next/router";
import {getPostBySlug} from "@/controllers/blog";
import parse from "html-react-parser";

const PostSlug = ({post}) => {
    const router = useRouter();

    if ( post && post[0] ) {
        const Post = post[0];
        return (
            <>
                <h1 className={'text-3xl font-bold text-indigo-950 text-center mt-[50px] mb-5'}>{parse(Post.title.rendered)}</h1>
                <article className={'max-w-[800px] mx-auto'}>
                    { parse(Post.content.rendered) }
                </article>
            </>
        );
    }

    return router.notFound;

}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}) {
    const post = await getPostBySlug(params.postSlug);

    return {
        props: {
            post: post
        }
    };
}

export default PostSlug;