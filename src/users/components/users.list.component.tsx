import { Alert, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { User } from '../../interfaces';
import { useAppDispatch } from '../../hooks';
import { onSetActiveUser, onSetShowUserProfile, startDeletingUser } from '../../store';

type Props = {
  users: User[],
};

export function UsersList({ users }: Props) {
  const dispatch = useAppDispatch();

  const handleShowUser = (user: User) => {
    dispatch(onSetActiveUser({ activeUser: user }));
    dispatch(onSetShowUserProfile());
  };

  const handleEditUser = (user: User) => {
    dispatch(onSetActiveUser({ activeUser: {
      ...user,
      password: '',
      passwordConfirmation: '',
    } }));
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDeletingUser(id));
        Swal.fire(
          'Deleted!',
          'Hero has been deleted.',
          'success',
        );
      }
    });
  };

  if (users.length === 0) {
    return (
      <Alert variant="warning" className="text-center">
        <b>Theres no users yet!</b>
      </Alert>
    );
  }

  return (
    <table className="table table-dark table-hover table-striped table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => {
          const { _id, firstName, lastName, role } = user;
          return (
            <tr key={_id}>
              <td>{`${firstName} ${lastName}`}</td>
              <td>{role}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={ () => handleShowUser(user) }
                >
                  <span className="bi bi-eye" />
                </Button>
                <Button
                  variant="warning"
                  size="sm"
                  className="mx-2"
                  onClick={ () => handleEditUser(user) }
                >
                  <span className="bi bi-pencil" />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={ () => _id && handleDelete(_id) }
                >
                  <span className="bi bi-trash" />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
