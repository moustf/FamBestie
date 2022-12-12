export const styles = {
  imageItem: {
    display: { xs: 'none', sm: 'none', md: 'block' },
    position: 'relative',
    boxShadow: '1px 1px 5px 0px rgba(0, 0, 0, 0.25)',
    borderTopLeftRadius: '1.5rem',
    borderBottomLeftRadius: '1.5rem',
    overflow: 'hidden',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute' as 'absolute',
    right: '0',
    top: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  image: { objectFit: 'fill' as 'fill' },
};
