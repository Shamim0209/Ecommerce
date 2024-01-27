import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  background-color: #5783db;
  color: rgb(255, 255, 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  border-radius: 0.5rem; 
  font-weight: bold; 

  &:hover,
  &:active {
    background-color: rgb(82, 68, 233); 
    box-shadow: 0 0.5rem 1rem 0 rgb(132, 144, 255, 0.3); 
    transform: scale(0.98); 
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 1.8rem;
  }
`;
