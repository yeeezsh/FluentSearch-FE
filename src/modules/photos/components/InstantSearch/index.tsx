import React, { useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { instantSearchActions } from 'Modules/photos/reducers/instantSearchReducer';
import { StoresState } from 'Stores/index';
import { useGetSearchQuery } from '../../../../common/generated/generated-types';

const InstantSearch: React.FC = () => {
  const dispatch = useDispatch();
  const onSearch = useSelector((s: StoresState) => s.instantSearch.word);
  const autocomplete = useSelector(
    (s: StoresState) => s.instantSearch.autocomplete,
  ).map((el) => ({ value: el }));
  const owner = useSelector((state: StoresState) => state.user.user.id);

  const { data, loading } = useGetSearchQuery({
    variables: {
      owner: owner,
      word: onSearch,
    },
  });

  useEffect(() => {
    if (onSearch !== '') {
      const onSearchData = data?.GetSearch.autocomplete.filter((el) =>
        el.toLowerCase().includes(onSearch.toLowerCase()),
      );
      dispatch(
        instantSearchActions.onData({
          data: data?.GetSearch.results || [],
          loading,
          autocomplete: onSearchData || [],
        }),
      );
    }
  }, [onSearch, loading]);

  return (
    <AutoComplete
      options={autocomplete}
      onSelect={(e) => dispatch(instantSearchActions.onSearch({ word: e }))}
      style={{ width: '40vw' }}>
      <Input
        placeholder="Search"
        prefix={<SearchOutlined />}
        onChange={(e) =>
          dispatch(instantSearchActions.onSearch({ word: e.target.value }))
        }
      />
    </AutoComplete>
  );
};

export default InstantSearch;
