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
                      <button type="button" className="btn btn-warning btn-sm mx-2">
                        <span className="bi bi-pencil" />
                      </button>
                      <button type="button" className="btn btn-danger btn-sm">
                        <span className="bi bi-trash" />
                      </button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
      <div className="add-button" data-bs-toggle="modal" data-bs-target="#form-modal">
        <span className="bi bi-plus" />
      </div>
      <CreateHero title="Create Hero" />
    </>
  );
}
