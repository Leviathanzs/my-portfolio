import Layout from './layout';
import Navbar from '../components/navbar';
import HomePage from '@/pages/home';

const Home = () => {
    return (
        <Layout>
            <Navbar />
            <HomePage />
        </Layout>
    );
};

export default Home;