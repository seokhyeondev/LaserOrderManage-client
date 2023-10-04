import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --color-primary: #ea5455;
    --color-white: #ffffff;

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
  .regular16 {
    font-size: 10px;
    font-weight: 400;
  }
`;
