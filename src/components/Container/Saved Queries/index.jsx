const SavedQuery = ({ savedQuery, setQuery }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:mx-6">
        <ul
          className="md:grid md:grid-cols-4 md:gap-4 flex flex-wrap list-none pt-3 pb-4"
          role="tablist"
        >
          {savedQuery?.map((item) => (
            <li className="md:-mb-px md:mr-2 m-3 last:mr-0 flex items-center w-full justify-center text-center">
              <div
                className={
                  "text-xs font-bold w-full uppercase px-5 py-3 shadow-lg rounded leading-normal cursor-pointer "
                }
                onClick={(e) => {
                  e.preventDefault();
                  setQuery(item);
                }}
                data-toggle="tab"
                role="tablist"
              >
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SavedQuery;
