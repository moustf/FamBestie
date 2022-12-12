import { FC } from 'react';
import { ImageListItem } from '@mui/material';
import { styles } from './styles';

export const SideImage: FC = () => {
  const imageURL = 'https://images.pexels.com/photos/9462315/pexels-photo-9462315.jpeg?auto=compress&cs=tinysrgb&w=1600';

  return (
    <ImageListItem
      sx={styles.imageItem}
      style={{ width: '38%', height: '100vh' }}
    >
      <div style={styles.overlay} />
      <img
        src={`${imageURL}`}
        alt="Side cloth closet"
        loading="lazy"
        style={styles.image}
      />
    </ImageListItem>
  );
};
