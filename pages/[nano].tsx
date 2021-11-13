import { GetServerSideProps } from 'next';
import { Troller } from '../src/services/lucky-draw/lucky-draw';
import { UrlModel } from '../src/services/url/url-model';

function Nano() {
    return <p>redirecting...</p>
}

export default Nano

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    let url: string;
    if (Troller.amIlucky()) {
        const found = await UrlModel.find({ path: params?.nano });
        url = found[0].url
    } else {
        url = 'https://pointerpointer.com/';
    }

    return {
        redirect: {
            permanent: false,
            destination: url
        }
    }
}