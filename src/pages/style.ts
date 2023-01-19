import styled from "styled-components";

export const Container = styled.main`
    background: var(--white-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 1.25rem; */
    box-sizing: border-box;
    border: 1px solid var(--blue-0);
    width: 100%;
    max-width: 25rem;
    min-width: 16.75rem;
`
export const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 80%;
    padding: 1rem;
`
export const BoxForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
    span {
        display: block;
    }
    .box-label {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
    }
    
`
export const BoxResponse = styled.div`
    background: var(--blue-1);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 10rem;
    gap: 10px;
    ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }
    li{
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
        width: 100%;
        strong {
            color: var(--blue-2);
        }
    }
`