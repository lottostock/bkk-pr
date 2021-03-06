import { getSession } from "next-auth/client";
import Head from "next/head";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Login from "../../components/Login";
import HomeScreen from "../../components/Watch/HomeScreen/HomeScreen";
import { db } from "../../firebase";
import axios from "../../helpers/axios";
import requests from "../../helpers/Request";

export default function watch({ session, topRated }) {
  if (!session) {
    return <Login />;
  }
  return (
    <Container>
      <Head>
        <title>Movie Freaks</title>
        <meta name="description" content="Trailer Playing platform for Geeks" />
        <link
          rel="icon"
          href="https://saosuay.com/wp-content/uploads/2020/11/1-123484733_369971420915332_7279649396348149181_n.jpg"
        />
      </Head>
      <Header />
      <Main>
        <HomeScreen topRated={topRated} />
      </Main>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session && !(session.user.email in db.collection("users"))) {
    db.collection("users")
      .doc(session.user.email)
      .set({ ...session.user });
  }
  const request = await axios.get(requests.fetchTopRated);
  const topRated = request.data.results;
  return { props: { session, topRated } };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
`;
