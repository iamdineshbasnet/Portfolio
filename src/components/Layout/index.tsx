import Head from "next/head";
import React, { ReactElement } from "react";
import Header from "@/components/Header";

interface props {
    children: ReactElement;
}

const index = ({ children }: props) => {
    return (
        <>
            <Head>
                <title>iamdineshbasnet</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default index;