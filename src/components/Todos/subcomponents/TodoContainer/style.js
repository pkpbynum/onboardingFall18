import styled from 'styled-components'

export const Title = styled.h1`
    font-weight: bolder;
    font-size: 3rem;
    margin-bottom: 1rem;
`

export const List = styled.div`
    padding: 1rem;
    height: calc(100% - 2rem);
    width: calc(60% - 2rem);

    @media only screen and (max-width: 490px) {
        width: 100%
    }
`
export const OList = styled.ol`
    flex-direction: column;
    height: calc(100% - 5rem);
    overflow:scroll;
`
