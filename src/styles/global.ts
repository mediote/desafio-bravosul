import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
 margin:0;
 padding:0;
 outline:0;
 box-sizing: border-box;
}
body{
  background:#f7faff ;
  -webkit-font-smoothing: antialiased;

}

body, input, button, textarea, p{
font: 16px Roboto,sans-serif;
}

#root{
  height: 100vh;

  margin: 0 auto;
  //padding: 40px 20px;
}

button {
  cursor: pointer;
}
`;
