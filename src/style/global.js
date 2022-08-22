import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {
   box-sizing: border-box;
   font-family: 'Darker Grotesque', sans-serif;
   margin: 0;
   padding: 0;
 }

 html { 
    background-color: #141a29;
    color: #f2f2f2;
    height: 100vh;
    width: 100%;
 }
`

export default GlobalStyle
