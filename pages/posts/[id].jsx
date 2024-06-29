// pages/posts/[id].js

import React from 'react';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  // Retorne uma lista de caminhos dinâmicos
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    // Adicione mais caminhos conforme necessário
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Busque os dados necessários para a página usando o parâmetro `id`
  const post = { id: params.id, title: `Post ${params.id}`, content: 'Conteúdo do post' };

  return {
    props: {
      post,
    },
  };
}

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
