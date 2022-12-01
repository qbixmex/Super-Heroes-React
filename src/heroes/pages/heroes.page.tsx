import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

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
            <tr>
              <td>Spiderman</td>
              <td>Peter Parker</td>
              <td>Marvel</td>
              <td>
                <button className='btn btn-info btn-sm'>
                  <span className="bi bi-info"></span>
                </button>
                <button className='btn btn-warning btn-sm mx-2'>
                  <span className="bi bi-pencil"></span>
                </button>
                <button className='btn btn-danger btn-sm'>
                  <span className="bi bi-trash"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Ironman</td>
              <td>Tony Stark</td>
              <td>Marvel</td>
              <td>
                <button className='btn btn-info btn-sm'>
                  <span className="bi bi-info"></span>
                </button>
                <button className='btn btn-warning btn-sm mx-2'>
                  <span className="bi bi-pencil"></span>
                </button>
                <button className='btn btn-danger btn-sm'>
                  <span className="bi bi-trash"></span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Captain America</td>
              <td>Steve Rogers</td>
              <td>Marvel</td>
              <td>
                <button className='btn btn-info btn-sm'>
                  <span className="bi bi-info"></span>
                </button>
                <button className='btn btn-warning btn-sm mx-2'>
                  <span className="bi bi-pencil"></span>
                </button>
                <button className='btn btn-danger btn-sm'>
                  <span className="bi bi-trash"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='add-button'>
        <span className="bi bi-plus"></span>
      </div>
    </>
  );
}
