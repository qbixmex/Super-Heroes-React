import { Alert, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Hero } from '../../interfaces';
import { useAppDispatch } from '../../hooks';
import { startDeletingHero, onSetActiveHero, onSetShowHeroProfile } from '../../store';

type Props = {
  heroes: Hero[],
};

export function HeroesList({ heroes }: Props) {
  const dispatch = useAppDispatch();

  const handleShowHero = (hero: Hero) => {
    dispatch(onSetActiveHero({
      activeHero: { ...hero },
    }));
    dispatch(onSetShowHeroProfile());
  };

  const handleEditHero = (hero: Hero) => {
    dispatch(onSetActiveHero({ activeHero: hero }));
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
        dispatch(startDeletingHero(id));
      }
    });
  };

  if (heroes.length === 0) {
    return (
      <Alert variant="warning" className="text-center">
        <b>Theres no heroes yet!</b>
      </Alert>
    );
  }

  return (
    <table className="table table-dark table-hover table-striped table-bordered">
      <thead>
        <tr>
          <th>Hero Name</th>
          <th>Real Name</th>
          <th>Studio</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {heroes.map(hero => {
          const { _id, heroName, realName, studio } = hero;
          return (
            <tr key={_id}>
              <td>{heroName}</td>
              <td>{realName}</td>
              <td>{studio}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={ () => handleShowHero(hero) }
                >
                  <span className="bi bi-eye" />
                </Button>
                <Button
                  variant="warning"
                  size="sm"
                  className="mx-2"
                  onClick={ () => handleEditHero(hero) }
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
