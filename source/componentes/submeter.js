import React from 'react';
import { Box, Button, Text, Image } from '@skynexui/components';
import appConfig from '../../config.json';

export function Sub(props) {
  const [isOpen, setOpenState] = React.useState('');

  return (
    <Box
      styleSheet={{
        position: 'relative',
      }}
    >
      <Button
        styleSheet={{
          borderRadius: '50%',
          padding: '0 3px 0 0',
          minWidth: '50px',
          minHeight: '50px',
          fontSize: '20px',
          marginBottom: '8px',
          lineHeight: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[300],
          filter: isOpen ? 'grayscale(0)' : 'grayscale(1)',
          hover: {
            filter: 'grayscale(0)',
          }
        }}
        label="➤"
        onClick={() => {
            if (Boolean(props.novaMen)) {
              props.onStickerClick(novaMen);
            }
          }}
      />
    </Box>
  )
}