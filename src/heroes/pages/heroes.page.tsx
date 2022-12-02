import { Button } from 'react-bootstrap';
import { CreateHero } from '../components';
import { heroes } from '../tests/fixtures/heroes';

export function HeroesPage() {
  return (
    <>
      <div className="container">
        <h1 className="mt-2 skyblue display-1 text-center">Heroes</h1>
        <hr />
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
            {
              heroes.map(({ id, heroName, realName, studio }) => {
                return (
                  <tr key={id}>
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
              })
            }
          </tbody>
        </table>
      </div>
      <CreateHero title="Create Hero" />
    </>
  );
}
