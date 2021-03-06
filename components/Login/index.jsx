import { signin } from "next-auth/client";
import Image from "next/image";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Image
        src="https://images.unsplash.com/photo-1556642389-0cd5fd882f5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        layout="fill"
        objectFit="contain"
      />

      <Button onClick={signin}>เข้าสู่แก๊ง / เข้าร่วมแก๊ง</Button>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  text-align: center;
  z-index: 10;
  cursor: pointer;
  margin: 40px;
  padding: 10px 20px;
  background-color: #4bdab6;
  border: none;
  outline: none;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  font-size: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  transition-duration: 0.4s;

  :hover {
    background-color: green;
    color: white;
    border: 2px solid white;
    box-sizing: border-box;
    transform: translateY(-5px);
  }
`;
