import React from 'react';
import { Header, Footer } from './';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='portfolio__main'>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
