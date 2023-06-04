import styled from "styled-components";
const Login=(props)=>{
    return(
      <Container>
        <Nav>
            <a href="/">
                <img src="./images/login-logo.svg"alt=""></img>
            </a>
        </Nav>
      </Container>
    )
}
{/*FOR LOGO*/}
const Container=styled.div`
padding:0`;
const Nav=styled.div`
max-width:1128px;
margin:auto;
padding:12px 0px 16px;
display:flex;
align-items:center;{/*align centrally*/}
position:relative;
justify-content:space-between;{/* To separate linkedin and join now*/}
flex-wrap:nowrap;{/*to make everything in navr in one line*/}
a{/*For giving height & width to logo*/
    width:135px;
    height:34px;
    @media(max-width:768px){/*In mobile do the following*/}{
        padding:0px 5px;

    };
}
`;

export default Login;