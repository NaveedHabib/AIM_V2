
import React from "react";
import { Blogitems } from "@/models/blogitems";
import Globals from "@/modules/Globals";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Helper from "@/modules/Helper";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Cta } from "@/models/cta";
import { Pressrelaseitem } from "@/models/pressrelaseitem";


interface SlugModel {
    slug: string;
}


export async function getStaticPaths() {
    const datasourceStr: string = await Globals.KontentClient.items()
        .type("pressrelaseitem")
        .toObservable()
        .toPromise()
        .then((r: any) => {
            return JSON.stringify(r.items);
        });

    const data: Array<Pressrelaseitem> = JSON.parse(datasourceStr);
    const ids: string[] = data.map((item: Pressrelaseitem) =>
        Helper.formatUrlParameter(item.name.value)
    );

    const paths = ids.map((slug) => ({ params: { slug } }));
    return {
        paths,
        fallback: "blocking",
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    debugger;
    const datasourceStr: string = await Globals.KontentClient.items()
        .type("pressrelaseitem")
        .toObservable()
        .toPromise()
        .then((r: any) => {
            return JSON.stringify(r.items);
        });

    const data: Array<Pressrelaseitem> = JSON.parse(datasourceStr);

    const { slug } = params as unknown as SlugModel;

    return {
        props: {
            data,
            slug,
        },
        revalidate: 120,
    };
};

function DetailPage({ data }: { data: Array<Pressrelaseitem> }) {
    const router = useRouter();
    const { slug } = router.query;
    if (data) {
        const searchData = data.find(
            (f: Pressrelaseitem) => Helper.formatUrlParameter(f.name.value) === slug
        );
        if (searchData) {
            return (
                <React.Fragment>
                    {/* <Head>
                        <title>{`${Globals.SITE_NAME} | ${searchData.pageTitle.value}`}</title>
                        <meta name="title" content={searchData.metaTitle.value} />
                        <meta
                            name="description"
                            content={searchData.metaDescription.value}
                        />
                        <meta name="keywords" content={searchData.metaTitle.value} />

                        <meta property="og:title" content={searchData.metaTitle.value} />
                        <meta property="og:type" content="article" />
                        <meta property="og:image" content={searchData.image.value[0].url} />
                        <meta
                            property="og:url"
                            content={`${Globals.BASE_URL}articles/${slug}`}
                        />
                        <meta name="twitter:card" content={searchData.image.value[0].url} />

                        <meta
                            property="og:description"
                            content={searchData.metaDescription.value}
                        />
                        <meta property="og:site_name" content={Globals.SITE_NAME} />
                        <meta
                            name="twitter:image:alt"
                            content={searchData.metaTitle.value}
                        />
                        <link
                            href={`${Globals.BASE_URL}articles/${slug}`}
                            rel="canonical"
                        />
                    </Head> */}
                    <div className="article-detail-page-wrapper">
                        <div className="article-banner-wrapper">
                            <Image
                                className="article-main-image"
                                src={searchData.image.value[0].url}
                                alt={searchData.heading.value}
                                width={585}
                                height={220}

                                style={{ objectFit: "contain", objectPosition: "center" }}
                                quality={80}
                                priority
                            />

                        </div>

                        <section>
                            <div className="section-container">
                                <div className="row article-banner">
                                    <div className="col-12 col-lg-6 col-xl-6 align-self-center">
                                        <h1 className="article-title color-blue">
                                            {searchData.heading.value}
                                        </h1>
                                    </div>

                                </div>
                                <div className="row article-body press-release-body">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: searchData.content.value,
                                        }}
                                    />

                                </div>
                            </div>
                        </section>





                    </div>

                </React.Fragment >
            );
        }
    }
}

export default DetailPage;