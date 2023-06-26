import Image from 'next/image';

function PageNotFound() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <Image src="/assets/404panda.png" width={500} height={500} alt='page not found' />
        </div>
    );
}

export default PageNotFound;