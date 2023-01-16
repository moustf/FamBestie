import { FC, useState, ChangeEvent } from 'react';
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Alert,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Column, DataIn, DataOut } from '../../utils/interfaces/workersTable';
import { Spinner } from '../Spinner';
import { WorkersDrawer } from './WorkersDrawer';

const columns: Column[] = [
  {
    id: 'name',
    align: 'center',
    label: 'Name',
    minWidth: 150,
  },
  {
    id: 'email',
    align: 'center',
    label: 'Email',
    minWidth: 100,
  },
  {
    id: 'gender',
    label: 'Gender',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'phone',
    label: 'Phone',
    minWidth: 170,
    align: 'center',
    format: (value: string | Date) => `+97${value}`,
  },
  {
    id: 'dateOfBirth',
    label: 'Date Of Birth',
    minWidth: 150,
    align: 'center',
  },
  {
    id: 'state',
    label: 'State',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'specialty',
    label: 'Specialty',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'yearsOfExperience',
    label: 'Years Of Experience',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'hiringDate',
    label: 'Hiring Date',
    minWidth: 150,
    align: 'center',
  },
  {
    id: 'joiningDate',
    label: 'Joining Date',
    minWidth: 150,
    align: 'center',
    format: (value: string | Date) => {
      const date = new Date(value);
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    },
  },
  {
    id: 'drawer',
    label: 'Worker Account',
    minWidth: 100,
  },
];

const createData = (obj: DataIn): DataOut => (
  {
    name: obj.name,
    email: obj.email,
    gender: obj.gender,
    location: obj.location,
    phone: obj.phone,
    state: obj.state,
    specialty: obj.specialty,
    dateOfBirth: obj.date_of_birth,
    yearsOfExperience: obj.years_of_experience,
    hiringDate: obj.hiring_date,
    joiningDate: obj.createdAt,
    drawer: <WorkersDrawer id={obj.id} />,
  }
);

export const WorkersTable: FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const {
    data, isLoading, isError,
  } = useQuery({
    queryKey: ['getAllWorkersForAdmin'],
    queryFn: async () => (
      axios.get('/api/v1/admin/workers')
    ),
  });

  const rows = data?.data.data.map((worker: DataIn) => createData(worker));

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (isLoading) return <Spinner />;
  if (isError) {
    return (
      <Alert
        sx={{
          width: '99%',
          height: '5rem',
          mt: 5,
          display: 'flex',
          alignItems: 'center',
        }}
        severity="error"
      >
        Something went wrong ...
      </Alert>
    );
  }

  return (
    <Paper sx={{ width: '100%', height: '80%' }}>
      <TableContainer sx={{ maxHeight: '100%', height: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{ height: '5rem' }}>
              <TableCell align="center" colSpan={11} sx={{ fontSize: '1.5rem' }}>
                Workers Table
              </TableCell>
            </TableRow>
            <TableRow sx={{ height: '6rem' }}>
              {columns.map((col) => (
                <TableCell
                  key={col.id}
                  align={col.align}
                  style={{ top: 57, minWidth: col.minWidth }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} sx={{ height: '7rem' }}>
                  {columns.map((col) => {
                    const value = row[col.id];
                    return (
                      <TableCell key={`${col.id}body`} align={col.align}>
                        {col.format && typeof value === 'string'
                          ? col.format(value)
                          : col.id === 'hiringDate' ? 'Not employed' : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
