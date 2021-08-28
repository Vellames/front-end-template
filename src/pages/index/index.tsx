// eslint-disable-next-line no-use-before-define
import React from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { ButtonGroup, Button, Box } from '@material-ui/core'

const IndexPage: React.FunctionComponent = () => {
  const { t } = useTranslation()
  return (
    <>
      <Box>{t('HELLO')}</Box>
      <Box>{i18n.language}</Box>
      <Box>
        <ButtonGroup>
          <Button variant="contained" onClick={() => i18n.changeLanguage('en')}>English</Button>
          <Button variant="contained" onClick={() => i18n.changeLanguage('br')}>Portugues</Button>
        </ButtonGroup>
      </Box>
    </>
  )
}

export default IndexPage
