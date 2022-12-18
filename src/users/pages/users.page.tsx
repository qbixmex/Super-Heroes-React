import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { UsersList, ShowUser, FormModal } from '../components';
import { RootState, fetchUsers } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';

import './users.page.css';

export function UsersPage() {
  const dispatch = useAppDispatch();
  const { users, isLoading, isSaving } = useAppSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="mt-2 skyblue display-1 text-center">Users</h1>
        <hr />
        {
          (isLoading) ? (
            <div className="text-center mt-4">
              <Spinner variant="primary" />
            </div>
          ) : (
            <UsersList users={users || []} />
          )
        }
      </div>
      <FormModal />
      <ShowUser />
      {
        (isSaving) && (
          <div className="spinner-wrapper">
            <Spinner variant="info" />
          </div>
        )
      }
    </div>
  );
}
