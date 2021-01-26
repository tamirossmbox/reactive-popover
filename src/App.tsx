import "./styles.css";
import Popover from "./Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import InfoContent from "./InfoContent";

const Separator = styled.div`
  margin: 8px;
`;

const SomeContainer = styled.div`
  margin-top: 32px;
  display: inline-flex;
`;

export default function App() {
  return (
    <div className="App">
      <h1>Hello React Popover</h1>
      <h2>Popover component using React Hooks</h2>
      <hr />

      <SomeContainer>
        <Popover contentComponent={<InfoContent />}>
          <FontAwesomeIcon icon={faInfoCircle} size="2x" color="#3F9EEA" />
        </Popover>
        <Separator />
        <Popover contentComponent={<InfoContent />}>
          <FontAwesomeIcon icon={faInfoCircle} size="2x" color="#3F9EEA" />
        </Popover>
      </SomeContainer>
    </div>
  );
}
