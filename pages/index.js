import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home({ responseFormat }) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    setArticles([JSON.parse(responseFormat)])
  }, [responseFormat])

  console.log(articles)
  
  return (
    <div className={styles.container}>
      {articles.map((article) => {
        return (
          <h1>{article.size}</h1>
        )
      })}
    </div>
  );
}

export async function getServerSideProps() {
  try {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  )
  console.log(response)
  const responseFormat = JSON.stringify(response)
  } catch{ (e)=>console.log(e)}
  } 
  return {
    props: {
      responseFormat
    },
  };
}

