import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --color-primary: #ea5455;
    --color-white: #ffffff;
    --color-black: #000000;

    --color-lightGray: #fafafa;
    --color-mediumGray: #e5e5e5;
    --color-normalGray: #999999;
    --color-darkGray: #545454;

    --color-alert: #d72323;

    --border-radius: 10px;
  }
  * {
    margin: 0px;
    padding: 0px;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  html {
    scroll-behavior: smooth;
  }
  button {
    cursor: pointer;
  }
  a {
    cursor: pointer;
  }
  .bold40 {
    font-size: 40px;
    font-weight: 700;
  }
  .bold28 {
    font-size: 28px;
    font-weight: 700;
  }
  .bold24 {
    font-size: 24px;
    font-weight: 700;
  }
  .bold20 {
    font-size: 20px;
    font-weight: 700;
  }
  .bold18 {
    font-size: 18px;
    font-weight: 700;
  }
  .bold16 {
    font-size: 16px;
    font-weight: 700;
  }
  .medium20 {
    font-size: 20px;
    font-weight: 500;
  }
  .medium18 {
    font-size: 18px;
    font-weight: 500;
  }
  .medium16 {
    font-size: 16px;
    font-weight: 500;
  }
  .regular16 {
    font-size: 16px;
    font-weight: 400;
  }
  .regular14 {
    font-size: 14px;
    font-weight: 400;
  }
  .regular10 {
    font-size: 10px;
    font-weight: 400;
  }
  /* flex 요소 */
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .flex-column-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
