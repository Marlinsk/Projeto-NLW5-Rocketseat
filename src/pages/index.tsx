// SPA
// SSR 
// SSG

import { useEffect } from 'react';

export default function Home() {

  return (
    <h1> Index </h1>
  )
}

export async function getServerSideProps(){
  const response = await fetch('http://localhost:3030/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
