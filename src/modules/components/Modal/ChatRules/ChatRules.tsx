import { useTranslation } from 'react-i18next';

import { CloseModalBtn, Title, Info } from '../Modal.styled';
import { Wrapper } from './ChatRules.styled';

interface ChatRulesProps {
  handleClose: () => void;
}

export const ChatRules = ({ handleClose }: ChatRulesProps) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <CloseModalBtn onClick={handleClose} />
      <Title>{t('chatRules')}</Title>
      <Info>{t('hashRoundRules')}</Info>
    </Wrapper>
  );
};
