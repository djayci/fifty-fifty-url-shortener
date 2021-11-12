import { GetServerSideProps } from 'next';
import { Troller } from '../src/services/lucky-draw/lucky-draw';
import { Shortener } from '../src/services/shortener/shortener';

function Nano() {
    return <p>redirecting...</p>
}

export default Nano

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    let url: string;
    if (Troller.amIlucky()) {
        const found = await Shortener.find({ nano: params?.nano });
        url = found[0].full
    } else {
        url = 'https://www.nyan.cat/index.php?cat=technyancolor';
    }

    return {
        redirect: {
            permanent: false,
            destination: url
        }
    }
}