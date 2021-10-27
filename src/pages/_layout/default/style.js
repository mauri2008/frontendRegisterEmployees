import styled from "styled-components";

export const Page = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:var(--bg-white);



`
export const Header = styled.div`
    background-color:var(--bg-info);
    height:80px;
    display: flex;
    justify-content:center;
`
export const ElementsHeader = styled.div`
    width: 940px;
    display: flex;


 `
export const Logo = styled.div`
    flex:1;
     
    
`

export const Menu = styled.nav`
    flex:3;

    display: flex;
    justify-content:flex-end;
    align-items:center;
    padding-right:20px;
   


    & ul {
        list-style: none;
        float:left;

        & li {
            float:left;
            position: relative;
            display: inline-block;
            margin-left: 10px;
            margin-right: 10px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            & a {
                text-decoration: none;
                color: var(--text-white);
                font-size: 14px;
                font-weight: 600;
                transition: all 0.2s ease-in-out;
                &:hover {
                    color: var(--text-base-dark);
                }
            }

        }
    }
`

export const Container = styled.div`
    background-color: var(--bg-base);
    width:900px;
    height:100%;
    padding: 20px;
    margin: auto;

`

export const Title = styled.div`
    flex: 1;
    font-size: 22px;
    font-weight: bold;
    color: var(--text-midnight);
    margin-bottom: 30px;
    border-bottom: 1px solid var(--bg-base-dark);
    padding-top: 10px;
    padding-bottom: 20px;


    @media (max-width: 768px) {
        font-size: 18px;
    }

`;

