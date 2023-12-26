import Spacer from "@/src/components/commons/spacer/Spacer.index";
import { ChangeEvent, useState } from "react";
import styled from "@emotion/styled";

interface IInfoInputItemProps {
  label: string;
  value: string;
  needEdit: boolean;
  placeHolder?: string;
  hideInput?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onEdit?: () => void;
  onSubmit?: () => void;
}

export default function InfoInputItem(props: IInfoInputItemProps) {
  const [editMode, setEditMode] = useState(false);

  const onEdit = () => {
    if (props.onEdit) {
      props.onEdit();
      return;
    }
    setEditMode(true);
  };

  const onSubmit = () => {
    if (props.onSubmit) {
      props.onSubmit();
      setEditMode(false);
    }
  };

  return (
    <>
      <InfoLabel className="regular14">{props.label}</InfoLabel>
      <Spacer width="100%" height="14px" />
      <div className="flex-row-align-center">
        <InfoInput
          className="regular16"
          value={props.value}
          placeholder={props.placeHolder}
          type={props.hideInput ? "password" : "text"}
          disabled={!editMode}
          readOnly={!props.needEdit}
          onChange={props.onChange}
        />
        <Spacer width="14px" height="100%" />
        {!editMode && props.needEdit && (
          <InfoEditTag className="regular14" onClick={onEdit}>
            변경
          </InfoEditTag>
        )}
        {editMode && (
          <div className="flex-row">
            <InfoEditTag className="regular14" onClick={onSubmit}>
              확인
            </InfoEditTag>
            <Spacer width="12px" height="100%" />
            <InfoEditCancelTag
              className="regular14"
              onClick={() => setEditMode(false)}
            >
              취소
            </InfoEditCancelTag>
          </div>
        )}
      </div>
    </>
  );
}

const InfoLabel = styled.p`
  color: var(--color-darkGray);
`;

const InfoInput = styled.input`
  flex-grow: 1;
  padding-bottom: 3px;
  border-bottom: 1px solid var(--color-black);
  background-color: var(--color-white);

  &::placeholder {
    color: var(--color-mediumGray);
  }
  &:disabled {
    border: 1px solid var(--color-white);
    color: var(--color-black);
  }
`;

const InfoEditTag = styled.a`
  color: var(--color-primary);
`;

const InfoEditCancelTag = styled.a`
  color: var(--color-normalGray);
`;
