import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    justify-content: space-between;
    align-items: center;
    height: 42px;

    .borderTop {
      width: 240px;
      height: 5px;
      background: #D2691E;
      box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
    }

    .box {
      width: 240px;
      height: 30px;
      border: 0;
      border-radius: 4px 4px 4px 4px;
      background: #DCDCDC;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);      
    }

    /*Encapsular h1 em uma div posteriormente*/
    h1 {
      font-size: 14px;
      margin-top: 15px;
      width: 240px;
      height: 50px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      cursor: move;
    }

    h2 {
      font-weight: 500;
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
      padding: 0 10px;
      padding-top: 6px;
      display: block;  
      text-align: center;    
    }

    button {
      font-weight: 500;
      font-size: 18px;
      font-family: 'Roboto', sans-serif;
      width: 240px;
      height: 30px;
      margin-top: 5px;
      background: #DCDCDC;
      border: 0;
      border-radius: 4px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }

    button:hover {
      background: #D3D3D3;
      font-size: 22px;
    }
  }

  ul {
    margin-top: 30px;
  }
`;