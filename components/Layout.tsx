import React from 'react';
import NavBar from './NavBar';

type Props = {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
};

export default Layout;