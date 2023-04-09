import Head from 'next/head';
import Navbar from './Navbar';
const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title ? title + '-Photo-Gallery' : 'Photo-Gallery'}</title>
                <meta title='description' content='gallery of photo' />
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </>
    );
};

export default Layout;