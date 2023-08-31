export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              type="text"
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </>
  );
}
