import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  align-items: center;
  max-height: 250px;

  & svg {
    width: 30%;

    .a {
      fill: #fff;
    }
    .b {
      fill: url(#a);
    }
    .c {
      mask: url(#b);
    }
    .d {
      fill: url(#c);
    }
    .e {
      mask: url(#d);
    }
    .f {
      fill: url(#e);
    }
    .g {
      fill: url(#f);
    }
    .h {
      mask: url(#g);
    }
    .i {
      fill: url(#h);
    }
    .j {
      fill: #159b80;
    }
    .k {
      fill: url(#i);
    }
  }

  & > div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-weight: 600;
      font-size: 3rem;
      color: #2665ae;
      position: relative;
      font-family: 'Montserrat', sans-serif;

      & span {
        font-weight: 400;
        font-size: 1.6rem;
        position: relative;
        left: -5px;
        font-style: italic;
      }
    }
  }
`;
