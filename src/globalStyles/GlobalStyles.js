import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
/* font-family: ; */
overflow-x: hidden;
}

ul {
    list-style: none;
}

button{
    cursor: pointer;
}

i{
    cursor: pointer;
}
h1{
    font-family: 'Outfit', sans-serif;
}
h2{
    font-family: 'Outfit', sans-serif;
}
h3{
    font-family: 'Outfit', sans-serif;
}
h4{
    font-family: 'Outfit', sans-serif;
}
h5{
    font-family: 'Outfit', sans-serif;
}
link {
    font-family: 'Outfit', sans-serif;
}
p{
    font-family: 'Outfit', sans-serif;
}

`;

export default GlobalStyles;
