import React, { FC } from 'react';

type Props = {
  query: string,
  setQuery: (query: string) => void,
  chosenStatus: string,
  setChosenStatus: (chosenStatus: string) => void,
};

export const TodoFilter: FC<Props> = React.memo(
  ({
    query, setQuery, chosenStatus, setChosenStatus,
  }) => {
    const clearFilter = () => {
      setQuery('');
      setChosenStatus('all');
    };

    return (
      <form className="field has-addons">
        <p className="control">
          <span className="select">
            <select
              data-cy="statusSelect"
              value={chosenStatus}
              onChange={(event) => setChosenStatus(event.target.value)}
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
          </span>
        </p>

        <p className="control is-expanded has-icons-left has-icons-right">
          <input
            data-cy="searchInput"
            type="text"
            className="input"
            placeholder="Search..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <span className="icon is-left">
            <i className="fas fa-magnifying-glass" />
          </span>

          {query && (
            <span className="icon is-right" style={{ pointerEvents: 'all' }}>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="clearSearchButton"
                type="button"
                className="delete"
                onClick={clearFilter}
              />
            </span>
          )}
        </p>
      </form>
    );
  },
);
