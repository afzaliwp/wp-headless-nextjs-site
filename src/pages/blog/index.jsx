import Head from "next/head";
import Link from "next/link";
import {Card} from "@nextui-org/react";
import {getBlogPosts} from "@/controllers/blog";
import parse from 'html-react-parser';
import Image from "next/image";

const Blog = (context) => {
    const blogPosts = context.posts;
    const notFoundPosts = context.notFound;

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <h2 className={'text-3xl font-bold text-indigo-950 text-center mt-[50px] mb-5'}>BLOG POSTS</h2>

            {
                notFoundPosts &&
                <div className="text-center py-4 lg:px-4">
                    <div
                        className="p-2 bg-red-800 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex"
                        role="alert">
                            <span
                                className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Oops!</span>
                        <span className="font-semibold mr-2 text-left flex-auto">No Posts Found!</span>
                        <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20">
                            <path
                                d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                        </svg>
                    </div>
                </div>
            }

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {blogPosts &&
                    blogPosts.map((post) => (
                        <Card key={post.id} shadow>
                            <Image src={''} alt={''}></Image>
                            <div className="p-4">
                                <Link
                                    href={
                                        {
                                            pathname: '/blog/[postSlug]',
                                            query: {
                                                postSlug: post.slug,
                                            }
                                        }
                                    }
                                >
                                    <h3 className={'text-xl text-indigo-800 mb-2 font-bold'}>{parse(post.title.rendered)}</h3>
                                </Link>
                                <div>{parse(post.excerpt.rendered)}</div>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getBlogPosts();

    if (posts.length) {
        return {
            props: {
                posts,
                notFound: false,
            },
        }
    } else {
        return {
            props: {
                posts: [],
                notFound: true,
            },
        }
    }


}

export default Blog;