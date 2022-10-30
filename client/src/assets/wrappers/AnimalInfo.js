import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 0.5rem;

  align-items: center;

  .grid {
    display: grid;
    grid-template-columns: 0.1fr 1fr;
  }

  .icon {
    font-size: 1rem;
    margin-right: 1rem;
    align-items: center;

    svg {
      color: var(--grey-400);
    }
  }
  .text {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
`;
export default Wrapper;
