import styled from 'styled-components'

export const PageWrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    height: 80vh;
    width: 70vw;
    background: white;
    display: flex;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    @media only screen and (max-width: 750px) {
        height: 100vh;
        width: 100vw;
        border-radius: 0;
    }

    @media only screen and (max-width: 490px) {
        height: 100vh;
        width: 100vw;
        border-radius: 0;
        flex-direction: column;
    }
`

export const Buttons = styled.div`
    align-self: center;
`