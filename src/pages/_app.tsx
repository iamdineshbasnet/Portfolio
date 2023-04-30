import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Fragment>
    );
}
