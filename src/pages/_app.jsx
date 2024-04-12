import React from 'react';
import App from 'next/app';
import Layout from '../components/layout';
import './globals.scss';

class PagesApp extends App {
    render() {
        const {Component, pageProps} = this.props;

        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        );
    }
}

export default PagesApp;
