import { FormEvent } from 'react';
type Props = {
  title: string;
};

export function CreateHero({ title }: Props) {

  const onSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Saving Hero ...');
  };

  return (
    <form onSubmit={ onSave }>
      <div
        className="modal"
        id="form-modal"
        tabIndex={-1}
        aria-labelledby="Form Modal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-dark mb-3">
                <label htmlFor="heroName" className="form-label">Hero Name</label>
                <input
                  id="heroName"
                  name="heroName"
                  type="text"
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="text-dark mb-3">
                <label htmlFor="realName" className="form-label">Real Name</label>
                <input
                  id="realName"
                  name="realName"
                  type="text"
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="text-dark mb-3">
                <label htmlFor="realName" className="form-label">Studio</label>
                <input
                  id="studio"
                  name="studio"
                  type="text"
                  className="form-control"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                <span className="bi bi-x-lg"></span>
              </button>
              <button type="submit" className="btn btn-success">
                <span className="bi bi-save"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
