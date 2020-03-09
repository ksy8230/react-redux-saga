import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-size:14px;
        color:#252525;
        font-family: 'Noto Serif KR', Arial, Helvetica, sans-serif;
    }
    button{
        display: inline-block;
        margin-left: 5px;
        color: #fff;
        border-radius: 3px;
        font-weight: bold;
        background: #fff;
        color: #00ABFF;
        width: 80px;
        line-height: 34px;
        border: 1px solid #E0E0E0;
        padding: 0;
        box-sizing: border-box;
        &:active {
            outline: none;
        }
        &:focus {
            outline: 0;

        }
    }
    /* scroll bar */
    ::-webkit-scrollbar {
    width: 7px;  /* 세로축 스크롤바 길이 */
    height: 7px;  /* 가로축 스크롤바 길이 */
    }
    ::-webkit-scrollbar-track {
    // background-color: lightblue;
    }
    ::-webkit-scrollbar-track-piece {
    
    }
    ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #ddd;
    opacity: .6;
    }
    ::-webkit-scrollbar-button {

    }
    ::-webkit-scrollbar-button:start {
    
    }
    ::-webkit-scrollbar-button:end {
    
    }
    ::-webkit-scrollbar-button:vertical:increment {
    }
    ::-webkit-scrollbar-button:vertical:decrement {
    }
    ::-webkit-scrollbar-corner {
    
    }
    ::-webkit-resizer {
    
    }
`;

export default GlobalStyles;