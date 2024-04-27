import styled from "styled-components";

export const ItemContainer = styled.div`

    width: 80%;

    h3 {
        font-size: 32px;
        color:#FAFAFA
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-botton:20px;
    }

    a {
        display: inline-block;
        padding: 5px 10px;
        border: 1px solid transparent;
        border-radius: 5px;
        margin-top: 20px;
        text-decoration: none;
    }

    a.search {
        border:1px solid #A8F8A7;
        color: #A8F8A7;
    }

    a.remover {
        border:1px solid #ff4040;
        color:#ff4040;
    }  

    hr {
        color:#FAFAFA60;
        margin: 20px 0;
    }

`