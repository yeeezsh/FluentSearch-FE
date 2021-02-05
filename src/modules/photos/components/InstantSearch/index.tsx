import React, { useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { useGetInsightBySearchQuery } from 'Services/model/generated-types';
import { AutoComplete, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { instantSearchActions } from 'Modules/photos/reducers/instantSearchReducer';
import { StoresState } from 'Stores/index';

const InstantSearch: React.FC = () => {
  const dispatch = useDispatch();
  const onSearch = useSelector((s: StoresState) => s.instantSearch.word);
  const autocomplete = useSelector(
    (s: StoresState) => s.instantSearch.autocomplete,
  ).map((el) => ({ value: el }));
  const { data, loading } = useGetInsightBySearchQuery({
    variables: {
      word: onSearch,
    },
  });

  useEffect(() => {
    //   preventing from load all list
    // if (onSearch !== '') {
    dispatch(
      instantSearchActions.onData({
        data: data?.searchByWord.result || [],
        loading,
        autocomplete: data?.searchByWord.autocomplete || [],
      }),
    );
    // }
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
