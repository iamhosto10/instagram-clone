import styled from "styled-components";
import { faker } from "@faker-js/faker";

export const Heade = styled.div`
  border-bottom-width: 1px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  background-color: white;

  button {
    width: 24px;
    height: 24px;
    cursor: pointer;
    flex-shrink: 0;
    background-color: transparent;
    border: none;
  }
  img {
    width: 100%;
  }

  .header-cont {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 60px;
    width: 100%;
    padding-left: 8px;
  }

  .left {
    display: flex;
    .insta-cont {
      width: 112px;
      padding-top: 4px;
    }
    .arrow-cont {
      width: 12px;
      height: 12px;
      margin-top: 12px;
    }
  }

  .center {
    position: relative;
    display: none;
    width: 288px;
    margin-left: 4px;
    /* margin-right: 8px; */
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
      width: 288px;
      border-radius: 6px;
      border: none;
      background-color: #efefef;
      padding-left: 32px;
      outline-width: 0;
    }
  }

  .right {
    display: flex;
    /* margin-left: 1.25rem; */
    /* justify-content: space-between; */
    gap: 20px;
    .hidden {
      display: none;
    }
    .profile {
      border-radius: 50%;
      /* margin-right: 20px; */
      overflow: hidden;
    }
    .signout {
      width: auto;
      color: #0095f6;
      font-weight: 600;
      white-space: nowrap;
    }
  }

  @media (min-width: 720px) {
    .center {
      display: flex;
      /* align-items: center; */
    }
    .right {
      .hidden {
        display: flex;
      }
    }
  }
`;

export const FeedStyle = styled.div`
  background-color: #fafafa;
  display: flex;
  max-width: 790px;
  margin: 4 auto 0;
  .left-side {
    max-width: 450px;
    width: 100vh;
    margin: 0 auto;
  }
  @media (min-width: 720px) {
    max-width: 824px;
  }
`;

export const Storiesstyle = styled.div`
  padding: 20px;
  margin: auto 4px;
  display: flex;
  justify-content: space-between;
  border-width: 1px;
  overflow-x: scroll;
  border-radius: 8px;
`;

export const Storystyle = styled.div`
  img {
    padding: 1.5px;
    border: 3px solid Darkred;
    border-radius: 50%;
  }
  p {
    width: 60px;
    margin: 0 auto;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
