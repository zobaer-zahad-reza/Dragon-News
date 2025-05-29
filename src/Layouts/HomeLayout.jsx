import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import NavBar from '../Components/NavBar';
import LeftAside from '../Components/homelayoutes/LeftAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews />
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <NavBar />
                </nav>
            </header>
            <main>
                <aside>
                    <LeftAside />
                </aside>
                <section className="left"></section>
                <section className="middle">
                    <Outlet />
                </section>
                <section className="right"></section>

            </main>

        </div>
    );
};

export default HomeLayout;