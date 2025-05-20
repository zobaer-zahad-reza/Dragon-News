import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import NavBar from '../Components/NavBar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews />
                </section>
                <nav>
                    <NavBar />
                </nav>
            </header>
            <main>
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