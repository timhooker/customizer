import * as React from 'react';
import UIElementList from './ui-element-list';
import reducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configs from './initial-state';

interface UICustomizer {
  title: string;
  visible?: boolean;
}

const Customizer = ({title, visible}: UICustomizer) => {
  const store = createStore(reducers, configs);
  return (
    <Provider store={store} >
      <UIElementList />
    </Provider>
  );
};

export default Customizer;