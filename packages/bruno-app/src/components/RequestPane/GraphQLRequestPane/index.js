import React from 'react';
import find from 'lodash/find';
import get from 'lodash/get';
import classnames from 'classnames';
import { IconRefresh, IconLoader2, IconBook, IconDownload } from '@tabler/icons';
import { useSelector, useDispatch } from 'react-redux';
import { updateRequestPaneTab } from 'providers/ReduxStore/slices/tabs';
import QueryEditor from 'components/RequestPane/QueryEditor';
import RequestHeaders from 'components/RequestPane/RequestHeaders';
import { useTheme } from 'providers/Theme';
import { updateRequestGraphqlQuery } from 'providers/ReduxStore/slices/collections';
import { sendRequest, saveRequest } from 'providers/ReduxStore/slices/collections/actions';
import useGraphqlSchema from './useGraphqlSchema';
import StyledWrapper from './StyledWrapper';

const GraphQLRequestPane = ({ item, collection, leftPaneWidth }) => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tabs.tabs);
  const activeTabUid = useSelector((state) => state.tabs.activeTabUid);
  const query = item.draft ? get(item, 'draft.request.body.graphql.query') : get(item, 'request.body.graphql.query');
  const url = item.draft ? get(item, 'draft.request.url') : get(item, 'request.url');
  const {
    storedTheme
  } = useTheme();
  
  let {
    schema,
    loadSchema,
    isLoading: isSchemaLoading,
    error: schemaError
  } = useGraphqlSchema(url);

  const loadGqlSchema = () => {
    if(!isSchemaLoading) {
      loadSchema();
    }
  };

  const onQueryChange = (value) => {
    dispatch(
      updateRequestGraphqlQuery({
        query: value,
        itemUid: item.uid,
        collectionUid: collection.uid
      })
    );
  };
  const onRun = () => dispatch(sendRequest(item, collection.uid));
  const onSave = () => dispatch(saveRequest(item.uid, collection.uid));

  const selectTab = (tab) => {
    dispatch(
      updateRequestPaneTab({
        uid: item.uid,
        requestPaneTab: tab
      })
    );
  };

  const getTabPanel = (tab) => {
    switch (tab) {
      case 'query': {
        return <QueryEditor theme={storedTheme} schema={schema} width={leftPaneWidth}  onSave={onSave} value={query} onRun={onRun} onEdit={onQueryChange} />;
      }
      case 'headers': {
        return <RequestHeaders item={item} collection={collection} />;
      }
      default: {
        return <div className="mt-4">404 | Not found</div>;
      }
    }
  };

  if (!activeTabUid) {
    return <div>Something went wrong</div>;
  }

  const focusedTab = find(tabs, (t) => t.uid === activeTabUid);
  if (!focusedTab || !focusedTab.uid || !focusedTab.requestPaneTab) {
    return <div className="pb-4 px-4">An error occured!</div>;
  }

  const getTabClassname = (tabName) => {
    return classnames(`tab select-none ${tabName}`, {
      active: tabName === focusedTab.requestPaneTab
    });
  };

  return (
    <StyledWrapper className="flex flex-col h-full relative">
      <div className="flex items-center tabs" role="tablist">
        <div className={getTabClassname('query')} role="tab" onClick={() => selectTab('query')}>
          Query
        </div>
        <div className={getTabClassname('headers')} role="tab" onClick={() => selectTab('headers')}>
          Headers
        </div>
        <div className="flex flex-grow justify-end items-center" style={{fontSize: 13}}>
          <div className='flex items-center cursor-pointer hover:underline' onClick={loadGqlSchema}>
            {isSchemaLoading ? (
              <IconLoader2 className="animate-spin" size={18} strokeWidth={1.5}/>
            ) : null}
            {!isSchemaLoading && !schema ? <IconDownload size={18} strokeWidth={1.5}/> : null }
            {!isSchemaLoading && schema ? <IconRefresh size={18} strokeWidth={1.5}/> : null }
            <span className='ml-1'>{schema ? 'Schema' : 'Load Schema'}</span>
          </div>
          {/* <div className='flex items-center cursor-pointer hover:underline ml-2'>
            <IconBook size={18} strokeWidth={1.5} /><span className='ml-1'>Docs</span>
          </div> */}
        </div>
      </div>
      <section className="flex w-full mt-5">{getTabPanel(focusedTab.requestPaneTab)}</section>
    </StyledWrapper>
  );
};

export default GraphQLRequestPane;
