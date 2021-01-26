import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 183px;
  min-height: 98px;
  text-align: start;
  background: #19232f;
  border-radius: 8px;
  color: white;
  padding: 8px;
  & > h3 {
    font-size: 18px;
    font-weight: 400;
  }

  & > p {
    color: #b4b4b4;
    font-size: 16px;
    line-height: 110%;
    margin-top: 4px;
  }
`;

const InfoContent = (props: any) => {
  return (
    <Wrapper {...props}>
      <h3 style={{ margin: 0 }}>Action Disabled</h3>
      <p>Available only at the following states: On, Preper to print</p>
    </Wrapper>
  );
};

export default InfoContent;
