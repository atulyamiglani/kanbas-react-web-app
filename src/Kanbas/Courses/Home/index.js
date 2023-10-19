import ModuleList from "../Modules/ModuleList";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <ModuleList />
        </div>

        <div className="col-4">
          <h2>Status</h2>
          <h5>Course Status</h5>
          <span>
            <button type="button" class="btn btn-secondary">
              Unpublish
            </button>
            <button type="button" class="btn btn-success">
              <i class="fa fa-check-circle" aria-hidden="true"></i>Published
            </button>
          </span>
          <div>
            <div class="d-grid gap-2" style={{ "padding-top": "10px" }}>
              <button class="btn btn-secondary" type="button">
                Import existing content
              </button>
              <button class="btn btn-secondary" type="button">
                Import from commons
              </button>
              <button class="btn btn-secondary" type="button">
                Choose homepage
              </button>
              <button class="btn btn-secondary" type="button">
                View Course stream
              </button>
              <button class="btn btn-secondary" type="button">
                New Annoucements
              </button>
              <button class="btn btn-secondary" type="button">
                New Analytics
              </button>
              <button class="btn btn-secondary" type="button">
                View Course Analytics
              </button>
            </div>
          </div>
          <h5>To Do</h5>
          <hr />

          <h1>Coming up</h1>
          <a href="#">View calendar</a>
          <ul>
            <li>
              <a href="#">Lecture CS 4550.12361.202410 Sep 7 at 11:45</a>
            </li>
            <li>
              <a href="#">Lecture CS 4550.12361.202410 Sep 11 at 11:45</a>
            </li>
            <li>
              <a href="#">Lecture CS 4550.12361.202410 Sep 11 at 6pm</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Home;
