import { FC, useState, ChangeEvent } from 'react';
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Alert,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Column, DataIn, DataOut } from '../../utils/interfaces/workersTable';
import { Spinner } from '../Spinner';
import { ClientsDrawer } from './ClientsDrawer';

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
    id: 'visibility',
    label: 'State',
    minWidth: 100,
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
    location: obj.location,
    phone: obj.phone,
    visibility: obj.visibility,
    joiningDate: obj.createdAt,
    drawer: <ClientsDrawer id={obj.id} />,
  }
);

export const ClientsTable: FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const {
    data, isLoading, isError,
  } = useQuery({
    queryKey: ['getAllClientsForAdmin'],
    queryFn: async () => (
      axios.get('/admin/clients')
    ),
  });

  const rows = data?.data.data.map((client: DataIn) => createData(client));

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
                Clients Table
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
                          : value}
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
