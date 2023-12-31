import { getCats } from './../../actions/getCats';
import Card from '../../../components/Card';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    return {
        title: params.id,
    };
}

export default async function StaticCat({ params }) {
    const cat = await getCats(params.id);
    return (
        <>
            <Card data={cat.data ? cat.data : notFound()} />
        </>
    );
}
