import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import { ReactNode } from 'react';

const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar />
            <main className='min-h-screen'>{children}</main>
            <Footer />
        </div>
    );
};

export default CommonLayout;