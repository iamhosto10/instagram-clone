import styled from "styled-components";

export const Heade = styled.div`
  border-bottom-width: 1px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  background-color: white;
  .header-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding-left: 8px;
  }

  .left {
    display: flex;
    .insta-cont {
      width: 112px;
      img {
        width: 100%;
      }
    }
    .arrow-cont {
      width: 12px;
      height: 12px;
      img {
        width: 100%;
      }
    }
  }

  .center {
    position: relative;
    display: none;
    width: 288px;
    .search-cont {
      display: flex;
      align-items: center;
      position: absolute;
      width: 12px;
      height: 100%;
      margin-left: 8px;
    }
    input {
      height: 36px;
      width: 100%;
      border-radius: 6px;
      background-color: #efefef;
      padding-left: 32px;
      outline-width: 0;
    }
  }

  @media (min-width: 720px) {
    .center {
      display: flex;
      /* align-items: center; */
    }
  }
`;
