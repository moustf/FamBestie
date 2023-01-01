import {
  FC, useState, KeyboardEvent, MouseEvent,
} from 'react';
import { Box, Button, SwipeableDrawer } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export const WorkersDrawer: FC<{ id: number }> = ({ id }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log(id);

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (
      event
        && event.type === 'keydown'
        && ((event as KeyboardEvent).key === 'Tab'
          || (event as KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <section style={{
      height: '100%',
    }}
    >
      <Button onClick={toggleDrawer(true)}>
        <PersonIcon />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
          onClick={toggleDrawer(false)}
        >
          <h1>Hi From Worker Drawer</h1>
        </Box>
      </SwipeableDrawer>
    </section>
  );
};
