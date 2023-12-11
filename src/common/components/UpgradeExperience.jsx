import { Button, Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Icon from './Icon';

function UpgradeExperience() {
  const { t, lang } = useTranslation('navbar');
  const router = useRouter();

  const handleLink = () => {
    const langPrefix = lang === 'en' ? '' : `/${lang}`;
    router.push(`${langPrefix}/pricing`);
  };

  return (
    <Button
      id="upgrade-experience"
      variant="default"
      fontSize="13px"
      onClick={handleLink}
      background="yellow.default"
      color="white"
      display="flex"
      gridGap="0.5rem"
      margin="0px"
      style={{ padding: '0 1rem 0', margin: 0 }}
    >
      <Box position="relative" display="flex" alignItems="center" height="100%">
        <Icon icon="rocket" width="14px" height="21px" color="#fff" style={{ transform: 'rotate(35deg)' }} />
      </Box>
      {t('upgrade-experience')}
    </Button>
  );
}

UpgradeExperience.propTypes = {
};
UpgradeExperience.defaultProps = {
};

export default UpgradeExperience;
