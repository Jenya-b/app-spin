import { useTranslation } from 'react-i18next';

import { CloseModalBtn, Title, Info } from '../Modal.styled';
import { Wrapper, CopyBlock } from './HashRound.styled';

interface HashRoundProps {
  handleClose: () => void;
}

export const HashRound = ({ handleClose }: HashRoundProps) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <CloseModalBtn onClick={handleClose} />
      <Title>{t('hashRound')}</Title>
      <Info>{t('hashRoundRules')}</Info>
      <CopyBlock></CopyBlock>
    </Wrapper>
  );
};
