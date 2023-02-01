import App from "@/Layouts/App";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";

export default function Home() {
    return(
        <div>
            <Head title="Home" />
            <Header>
                <Header.Title>
                    Consectetur
                </Header.Title>
                <Header.Subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </Header.Subtitle>
                <Header.Content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Recusandae, dolorem officia! Quia architecto exercitationem placeat reiciendis 
                    cupiditate! Quasi, suscipit 
                    repellat accusamus, magnam, omnis dignissimos doloribus labore fugit nihil laborum repellendus?
                </Header.Content>
            </Header>
            <Container>Home</Container>
        </div>
    )
}

Home.layout = page => <App children={page} />  