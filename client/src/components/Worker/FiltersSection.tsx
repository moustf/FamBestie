import {
  FC, ChangeEvent, Dispatch, SetStateAction, useState,
} from 'react';
import {
  Container, TextField, Typography, FormControl, NativeSelect, InputLabel, Grid,
} from '@mui/material';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

export const FiltersSection: FC<{ offset: number, setWorkers: Dispatch<SetStateAction<any>> }> = ({ offset, setWorkers }) => {
  const [nameState, setNameState] = useState('');
  const [specialtyState, setSpecialtyState] = useState('all');

  const { data } = useQuery({
    queryKey: ['getHiredWorkersCount'],
    queryFn: async () => (
      axios.get('/worker/hired/count')
    ),
  });

  useQuery({
    queryKey: [`getWorkersAllData${offset}`],
    queryFn: async () => (
      axios.get(`/worker?name=${nameState}&specialty=all&offset=${offset}`)
    ),
    onSuccess: (workers: AxiosResponse<any>) => setWorkers(workers.data.data),
  });

  // ? Creating a function to request the data when the user search by name.
  const { mutate: mutateName } = useMutation({
    mutationFn: async (name: string) => (
      axios.get(`/worker?name=${name}&specialty=${specialtyState}&offset=${offset}`)
    ),
    onSuccess: (workersResponse) => setWorkers(workersResponse.data.data),
  });

  const onSearchChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    mutateName(event.target.value);
    setNameState(event.target.value);
  };

  // ? Creating a function to request the data when the user filters by specialty.
  const { mutate: mutateSpecialty } = useMutation({
    mutationFn: async (specialty: string) => (
      axios.get(`/worker?specialty=${specialty}&name=${nameState}&offset=${offset}`)
    ),
    onSuccess: (workersResponse) => setWorkers(workersResponse.data.data),
  });

  const onSpecialtyChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    mutateSpecialty(event.target.value);
    setSpecialtyState(event.target.value);
  };

  return (
    <Container
      maxWidth={false}
      component="main"
      sx={{
        width: '100%',
        height: '10rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transform: 'translateY(10rem)',
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          xl={3}
        >
          <Typography
            component="h6"
            variant="h5"
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.5rem',
              fontWeight: 500,
              fontSize: {
                xs: '1rem', sm: '1rem', md: '1.5rem', lg: '2rem', xl: '2rem',
              },
            }}
          >
            Total Number Of Workers:
            {' '}
            {' '}
            <span style={{
              fontSize: '2.5rem',
              fontWeight: 500,
              color: '#006DBF',
              textDecoration: 'underline',
            }}
            >
              {data?.data.data}
            </span>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label="Search"
            placeholder="Search by worker's name"
            type="search"
            name="name"
            onChange={onSearchChange}
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '1.2rem',
              },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          xl={3}
        >
          <FormControl
            fullWidth
            sx={{ width: '100%', height: '5rem' }}
          >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Specialty
            </InputLabel>
            <NativeSelect
              defaultValue="all"
              inputProps={{
                name: 'specialty',
                id: 'uncontrolled-native',
              }}
              onChange={onSpecialtyChange}
              sx={{
                p: '0 1rem',
              }}
            >
              <option value="all">All</option>
              <option value="driver">Driver</option>
              <option value="guard">Guard</option>
              <option value="babysitter">Babysitter</option>
              <option value="housekeeper">Housekeeper</option>
              <option value="trainer">Trainer</option>
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};
