
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

        </>
    );
};

export default Root;