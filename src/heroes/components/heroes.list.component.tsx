import { Alert, Button } from 'react-bootstrap';
import { Hero } from '../../interfaces';

type Props = {
  heroes: Hero[]
};

export function HeroesList({ heroes }: Props) {
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
        {heroes.map(({ _id, heroName, realName, studio }) => {
          return (
            <tr key={_id}>
              <td>{heroName}</td>
              <td>{realName}</td>
              <td>{studio}</td>
              <td>
                <Button variant="primary" size="sm">
                  <span className="bi bi-eye" />
                </Button>
                <Button variant="warning" size="sm" className="mx-2">
                  <span className="bi bi-pencil" />
                </Button>
                <Button variant="danger" size="sm">
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
