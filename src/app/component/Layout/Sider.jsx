import React from 'react';
import styled from 'styled-components'
import backImg from '../../../assest/Cloud-background.png' 

const SideShow = styled.div`
  min-width: 30%;
  height: 900px;
  background: #1E213A url(${backImg}) no-repeat 50% 15%;
  background-blend-mode: overlay;
  @media (max-width: 960px) {
    width: 100%;
  }
`

const Sider = ({children}) => {

  return (
    <>
      <SideShow>
        {children}
      </SideShow>
    </>
  )
};

export default Sider;
