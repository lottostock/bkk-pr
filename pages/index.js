import { getSession } from "next-auth/client";
import Head from "next/head";
import styled from "styled-components";
import Feed from "../components/Social/Feed";
import Header from "../components/Header/Header";
import Login from "../components/Login";
import Sidebar from "../components/Social/Sidebar";
import Widgets from "../components/Social/Widgets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) {
    return <Login />;
  }
  return (
    <Container>
      <Head>
        <title>ตาไม่สู้แสง</title>
        <meta name="description" content="Social Media platform for Geeks" />
        <link
          rel="icon"
          href="https://saosuay.com/wp-content/uploads/2020/11/1-123484733_369971420915332_7279649396348149181_n.jpg"
        />
      </Head>
      <Header />
      <Main>
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
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

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return { props: { session, posts: docs } };
}

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
`;
