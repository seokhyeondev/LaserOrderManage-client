import styled from "@emotion/styled";

export const Wrapper = styled.div`
  flex-grow: 1;
  padding: 62px 90px 62px 66px;
`;

export const Title = styled.p`
  margin-bottom: 40px;
`;

export const BodyWrapper = styled.div``;

export const InfoWrapper = styled.div`
  width: 100%;
  padding: 24px 28px;
  background-color: var(--color-white);
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
`;

export const InfoTitle = styled.p``;

export const InfoAnnounce = styled.p`
  color: var(--color-darkGray);
`;

export const InfosWrapper = styled.div`
  width: 100%;
  padding: 28px 28px 30px 28px;
  background-color: var(--color-white);
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
`;

interface ISwitchProps {
  isActive: boolean;
}

export const SwitchWrapper = styled.div<ISwitchProps>`
  width: 50px;
  height: 26px;
  border-radius: 15px;
  padding-inline: 4px;
  background-color: ${(props) =>
    props.isActive ? "var(--color-primary)" : "var(--color-mediumGray)"};
  transition: all ease 0.3s;
  cursor: pointer;
`;

export const Switch = styled.div<ISwitchProps>`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin-left: ${(props) => (props.isActive ? "22px" : "0")};
  background-color: var(--color-white);
  transition: margin-left 0.5s;
`;

export const AddWrapper = styled.p`
  width: 100%;
  height: 40px;
  background-color: var(--color-mediumGray);
  border-radius: var(--border-radius);
  color: var(--color-darkGray);
  cursor: pointer;
`;

export const WithDrawButton = styled.button`
  width: 60px;
  height: 30px;
  color: var(--color-alert);
  background-color: var(--color-lightGray);
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
`;
