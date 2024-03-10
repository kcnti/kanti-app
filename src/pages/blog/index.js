import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import '@/css/blog.css';
import '@/app/globals.css'

import Head from 'next/head';

export default function Blog({ blogs }) {
  return (
    <div className="container">
      <Head>
        <title>Blog | Kanti</title>
        <meta name="description" content="Kanti's blog" data-rh="true" />
        <meta property="og:title" content="Blog" data-rh="true"/>
        <meta property="og:description" content="Kanti's blog" data-rh="true"/>
        <meta property="og:image" content="https://cdn.kanti.pw/assets/preview.png" data-rh="true"/>
        <meta property="og:url" content='https://kanti.pw' data-rh="true"/>
        <meta name="twitter:card" content="summary_large_image" data-rh="true"/>
        <meta name="twitter:image:alt" content="https://cdn.kanti.pw/assets/preview.png" data-rh="true"/>

        <meta name="keywords" content="Blog" />
        <meta name="author" content="Kantinun" />
      </Head>
      <header>Blog</header>
      <div className="not-home-split"></div>
      {blogs.map(({ slug, title, desc, date }) => (
        <a key={slug} href={`/blog/${slug}`}>
          <div className="blog">
            <h4>{title}</h4>
            <p>{desc}</p>
            <span className='date'>{date}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('src/posts'));
  
  const blogs = files.map((filename) => {
    // Remove file extension to get slug
    const slug = filename.replace('.md', '');
    // Read markdown file as string
    const markdownWithMeta = fs.readFileSync(
      path.join('src/posts', filename),
      'utf-8'
    );
    // Use gray-matter to parse the post metadata section
    const { data } = matter(markdownWithMeta);
    return {
      slug,
      title: data.title,
      desc: data.description ?? "No desc available", // Assuming there's a description field in the frontmatter
      date: data.date // Assuming there's a date field in the frontmatter
    };
  });

  return {
    props: {
      blogs,
    },
  };
}
