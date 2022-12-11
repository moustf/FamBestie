import { FC } from 'react';
import { ImageListItem } from '@mui/material';

export const SideImage: FC = () => {
  const imageURL = 'https://images.pexels.com/photos/4353622/pexels-photo-4353622.jpeg?auto=compress&cs=tinysrgb&w=1600';

  return (
    <ImageListItem sx={{
      width: '48% !important',
      height: '100vh !important',
      position: 'relative',
      boxShadow: '1px 1px 5px 0px rgba(0, 0, 0, 0.25)',
      borderTopLeftRadius: '1.5rem',
      borderBottomLeftRadius: '1.5rem',
      overflow: 'hidden',
    }}
    >
      <div style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        right: '0',
        top: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
      }}
      />
      <img
        src={`${imageURL}`}
        alt="Side cloth closet"
        loading="lazy"
        style={{
          objectFit: 'fill',
        }}
      />
    </ImageListItem>
  );
};
