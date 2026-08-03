import Header from "../components/header";
import Footer from "../components/footer";
import Image from 'next/image';
import Hotel from '../img/images.jpg'

export default function HomePage(){
    return(
        <>
            <Header titulo='Hotel Inn Terraço' />
                <main>
                    <Image src={Hotel} width={800} height={400} />
                    <h2>Bem Vindo ao melhor hotel da região!</h2>
                </main>
            <Footer />
        </>
    )
}