import { useState } from "react";
import styled from "styled-components";

import reactLogo from "./assets/react.svg";

type Props = {
  count: number;
  handleButtonClick: () => void;
};

// 構造は Container に書く
const Container: React.FC<Props & PropsForStyled> = ({
  count,
  handleButtonClick,
  className,
}) => {
  return (
    <div className={className}>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={handleButtonClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

const StyledComponent: React.FC<Props> = styled(Container)`
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: logo-spin infinite 20s linear;
    }
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }
`;

// ロジックは Component に書く
const Component: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => setCount(count + 1);

  return (
    <StyledComponent count={count} handleButtonClick={handleButtonClick} />
  );
};

export const App = Component;
