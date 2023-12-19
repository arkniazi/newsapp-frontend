import styled from "styled-components";


export const StyledCard = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  display: inline-block;
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  margin-top: 50px;
  color: rgba(0, 0, 0, 0.87);
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;

export const CardImage = styled.div`
  min-height: 50px;
  background: #d95f5f;
  height: 60%;
  position: relative;
  overflow: hidden;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: -30px;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

export const CardBody = styled.div`
  padding: 15px 30px;
`;
export const CardImageCaption = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: #fff;
  font-size: 1.3em;
  text-shadow: 0 2px 5px rgba(33, 33, 33, 0.5);
`;

export const CardFooter = styled.div`
  margin-top: 15px;
`;

export const Author = styled.div`
  color: #888;
`;

export const Stats = styled.div`
  float: right;
  line-height: 30px;
  position: relative;
  top: 1px;
  font-size: 14px;
`;