import React from 'react';
import Header from '../header';
import {Inter} from "next/font/google";
const inter = Inter({subsets: ["latin"]});

const Layout = ({children}) => (
    <div className={inter.className}>
        <Header/>
        <main className="w-full px-6 max-w-[1200px] mx-auto">
            {children}
        </main>
    </div>
);

export default Layout;
