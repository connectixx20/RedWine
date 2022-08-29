
import Head from 'next/head'
import Navbar  from './components/Navbar/Navbar'
import Footer from './components/Home/subComp/Footer'

const Layout = ({ title, children, description }) => {
    
    return (
        <div>
            <Head>
                <title>{title ? `${title} - RedWine` : 'RedWine'}</title>
                {description && <meta name='description' content={description} />}
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </Head>
            <Navbar />
            <main >
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout