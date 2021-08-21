import Head from 'next/head';
import React from 'react';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>26 de agosto de 2021</time>
                        <strong>Lorem ipsum dolor sit amet</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum ipsum minus quisquam perferendis expedita molestias in similique obcaecati, consequuntur enim veniam beatae porro a quibusdam, aut vel? Alias, perferendis.</p>
                    </a>
                    <a href="#">
                        <time>26 de agosto de 2021</time>
                        <strong>Lorem ipsum dolor sit amet</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum ipsum minus quisquam perferendis expedita molestias in similique obcaecati, consequuntur enim veniam beatae porro a quibusdam, aut vel? Alias, perferendis.</p>
                    </a>
                    <a href="#">
                        <time>26 de agosto de 2021</time>
                        <strong>Lorem ipsum dolor sit amet</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum ipsum minus quisquam perferendis expedita molestias in similique obcaecati, consequuntur enim veniam beatae porro a quibusdam, aut vel? Alias, perferendis.</p>
                    </a>
                    <a href="#">
                        <time>26 de agosto de 2021</time>
                        <strong>Lorem ipsum dolor sit amet</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum ipsum minus quisquam perferendis expedita molestias in similique obcaecati, consequuntur enim veniam beatae porro a quibusdam, aut vel? Alias, perferendis.</p>
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication')
   ], {
       fetch: ['publication.title', 'publication.content'],
       pageSize: 100,
   });

//    console.log(response);
   console.log(JSON.stringify(response, null, 2));

    return {
        props: {}
    }
}