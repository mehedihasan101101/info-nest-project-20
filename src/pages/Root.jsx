
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
            <header className='lg:p-0 p-1'>
                <NavBar></NavBar>
            </header>
            <main className='container mx-auto  lg:p-0 p-1 '>
                <Outlet></Outlet>
            </main>
            <footer className='flex flex-col items-center bg-base-200 mt-10'>
                <Footer></Footer>
            </footer>


        </>
    );
};

export default Root;