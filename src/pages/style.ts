import styled from "styled-components";

export const Container = styled.main`
    background: var(--white-2);
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    align-items: center;
    gap: 1.25rem;
    box-sizing: border-box;
    border: 1px solid var(--blue-0);
    width: 80%;
    max-width: 25rem;
    min-width: 16.75rem;
    
`
export const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
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