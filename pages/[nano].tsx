import { GetServerSideProps } from 'next';
import { Shortener } from '../src/services/shortener/shortener';

function Nano() {
    return <p>redirecting...</p>
}

export default Nano

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const URL = await Shortener.find({ nano: params?.nano });
    return {
        redirect: {
            permanent: false,
            destination: URL[0].full,
        }
    }
}