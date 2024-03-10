import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';
import Head from 'next/head';

import '@/css/blog.css';
import '@/app/globals.css'

export default function BlogPost({ title, desc, date, imageUrl, keyword, content }) {
  return (
    <div className='container'>
      <Head>
        <title>Blog - {title} | Kanti</title>
        <meta name="description" content={desc} key="desc"/>
        <meta name="og:title" content={title} data-rh="true"/>
        <meta name="og:description" content={desc} data-rh="true"/>
        <meta name="og:image" content={imageUrl} data-rh="true"/>
        <meta name="twitter:card" content="summary_large_image" data-rh="true"/>
        <meta name="twitter:image:alt" content={imageUrl} data-rh="true"/>

        <meta name="keywords" content={keyword}></meta>
        <meta name="author" content="Kantinun"></meta>
      </Head>
      <header>{title}</header>
      <sub-header>{desc} <span className="date">{date}</span></sub-header>
      <div className="not-home-split"></div>
      <div className='markdown'>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'src/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map(filename => ({
    params: {
      blogName: filename.replace(/\.md$/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const markdownFilePath = path.join(process.cwd(), 'src/posts', `${params.blogName}.md`);
  const fileContents = fs.readFileSync(markdownFilePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      title: data.title,
      desc: data.description,
      date: data.date,
      imageUrl: data.imageUrl,
      keyword: data.keyword,
      content: contentHtml,
    },
  };
}
