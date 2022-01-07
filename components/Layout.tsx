import React from 'react';
import NavBar from './NavBar';

type Props = {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <NavBar />
            <main>{children}</main>
        </>
    );
};

export default Layout;