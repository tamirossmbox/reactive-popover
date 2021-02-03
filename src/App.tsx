import "./styles.css";
import Popover from "./Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import InfoContent from "./InfoContent";

const GroupElements = styled.div`
  margin: 64px 0;
`;

const SomeContainer = styled.div`
  border: 1px solid #333;
  border-radius: 8px;
  padding: 16px 8px;
  margin-top: 32px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 300px 200px;
`;

export default function App() {
  return (
    <div className="App">
      <h1>Hello React Popover</h1>
      <h2>Popover component using React Hooks</h2>
      <hr />

      <GroupElements>
        <h1>Row style popover</h1>
        <SomeContainer>
          <Popover
            contentComponent={<InfoContent />}
            direction="row"
            alignItems="start"
          >
            <FontAwesomeIcon icon={faInfoCircle} size="2x" color="red" />
          </Popover>

          <Popover
            contentComponent={<InfoContent />}
            direction="row-reverse"
            alignItems="start"
          >
            <FontAwesomeIcon icon={faInfoCircle} size="2x" color="green" />
          </Popover>

          <Popover
            contentComponent={<InfoContent />}
            direction="row"
            alignItems="end"
          >
            <FontAwesomeIcon icon={faInfoCircle} size="2x" color="#3F9EEA" />
          </Popover>

          <Popover
            contentComponent={<InfoContent />}
            direction="row-reverse"
            alignItems="end"
          >
            <FontAwesomeIcon icon={faInfoCircle} size="2x" color="gold" />
          </Popover>
        </SomeContainer>
      </GroupElements>

      <GroupElements>
        <h1>Column style popover</h1>
        <SomeContainer>
          <Popover
            contentComponent={<InfoContent />}
            direction="column"
            alignItems="start"
          >
            <FontAwesomeIcon icon={faInfoCircle} size="2x" color="red" />
          </Popover>

          <Popover
            contentComponent={<InfoContent />}
            direction="column"
            alignItems="end"
          >
            <FontAwesomeIcon icon={faInfoCircle} size="2x" color="green" />
          </Popover>

          <Popover
            contentComponent={<InfoContent />}
            direction="column-reverse"
            alignItems="start"
          >
            <FontAwesomeIcon icon={faInfoCircle} size="2x" color="#3F9EEA" />
          </Popover>

          <Popover
            contentComponent={<InfoContent />}
            direction="column-reverse"
            alignItems="end"
          >
            <FontAwesomeIcon icon={faInfoCircle} size="2x" color="gold" />
          </Popover>
        </SomeContainer>
      </GroupElements>
    </div>
  );
}
