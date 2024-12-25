import PostService from "@/services/post.service";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Posts() {
  const postService = new PostService();
  const posts = await postService.getAll();

  return (
    <div className="container bg-white w-100 h-screen mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">블로그 포스트</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Link
            href={{ pathname: `/posts/post-${post.id}` }}
            key={post.id}
            className="block group"
          >
            <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-square relative">
                <Image
                  src={post.thumbnail || ""}
                  // thumbnail 비었을때 기본 화면 표시하기
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 group-hover:opacity-80"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">{post.subtitle}</p>
                <p className="text-gray-600 line-clamp-3">
                  <MDXRemote source={post.content} />
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
