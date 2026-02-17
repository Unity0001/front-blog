"use client";

import { useEffect, useState } from "react";
import { H1Bold } from "@/components/bold_h1/h1_bold";
import { FooterComponent } from "@/components/home/footer";
import { HeaderComponent } from "@/components/home/header";
import { getPosts } from "@/components/posts_layout/load_posts";

export default function Posts() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        async function loadPosts() {
            try {
                const data = await getPosts();
                setPosts(data);
            } catch (error) {
                console.error("Erro ao buscar posts");
            }
        }

        loadPosts();
    }, []);

    return (
        <>
            <HeaderComponent>
                <a
                    href="https://ketily-homenagem.vercel.app/"
                    className="m-4 text-2xl font-bold text-white flex items-center"
                >
                    <img src="/lirio.png" alt="lirio-img" className="w-15 h-15" />
                    Ket Blog
                </a>

                <div className="flex gap-8 items-center">
                    <H1Bold href="/home">Sobre mim</H1Bold>
                    <H1Bold href="/posts">Posts</H1Bold>
                </div>
            </HeaderComponent>

            <main className="p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Posts</h1>

                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="border rounded-lg p-6 mb-6 shadow-sm"
                    >
                        <h2 className="text-2xl font-semibold mb-1">
                            {post.title}
                        </h2>

                        <p className="text-sm text-gray-500 mb-4">
                            Por {post.author?.name || "Autor desconhecido"}
                        </p>

                        <p className="text-gray-700 mb-4">
                            {post.content}
                        </p>

                        <div className="mb-4 text-sm">
                            ❤️ {post.likes?.length || 0} curtidas
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">
                                Comentários ({post.comments?.length || 0})
                            </h3>

                            {post.comments?.map((comment: any) => (
                                <div
                                    key={comment.id}
                                    className="border-t pt-2 mt-2"
                                >
                                    <p className="text-sm font-semibold">
                                        {comment.author?.name}
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        {comment.content}
                                    </p>
                                </div>
                            ))}

                            {(!post.comments || post.comments.length === 0) && (
                                <p className="text-sm text-gray-400">
                                    Nenhum comentário ainda.
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </main>

            <FooterComponent />
        </>
    );
}
