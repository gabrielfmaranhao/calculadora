import styled from "styled-components";

export const Container = styled.main`
    background: var(--white-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid var(--blue-0);
    width: 100%;

    @media screen and (min-width: 630px) {
        flex-direction: row;

    }
`
export const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 10px 5px 0px 5px ;
    @media screen and (min-width: 630px) {
        padding-right: 0;
        height: 100%;
        width: 61%;
    }
`
export const BoxForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    row-gap: 10px;
    span {
        display: block;
    }
    .box-label {
        display: flex;
        flex-direction: column;
        width: 100%;
        row-gap: 5px;
    }
    
`
export const BoxResponse = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 10rem;
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        height: 130px;
        justify-content: space-around;
    }
    li{
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
        strong {
            color: var(--blue-2);
        }
    }
`