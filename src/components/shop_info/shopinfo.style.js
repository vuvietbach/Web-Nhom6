import styled from "styled-components";

export default styled.div`
  .header-card-shop {
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    border-radius: 0px;
    width: 100%;
    background: linear-gradient(45deg, #667eea, #83eaf1, #63a4ff);
    background-size: 200% 200%;
    animation: color 5s ease-in-out infinite;
  }

  @keyframes color {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
