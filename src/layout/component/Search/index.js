import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';

import * as searchService from '~/Services/searchServices';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
  const [SearchValue, SearchValueResult] = useState('');
  const inputRef = useRef();

  const debounce = useDebounce(SearchValue, 500);

  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchService.search(debounce);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [debounce]);

  const handleClear = () => {
    SearchValueResult('');
    inputRef.current.focus();
    setSearchResult([]);
  };

  const HandleHidenResult = () => {
    setShowResult(false);
  };

  const handleOnchange = (e) => {
    const seachValue = e.target.value;
    if (!seachValue.startsWith(' ')) SearchValueResult(seachValue);
  };

  return (
    <div>
      <HeadlessTippy
        onClickOutside={HandleHidenResult}
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={SearchValue}
            placeholder="Search accounts and videos"
            spellCheck={false}
            onChange={handleOnchange}
            onFocus={() => {
              setShowResult(true);
            }}
          />
          {!!SearchValue && !loading && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
          <button
            className={cx('search-btn')}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
