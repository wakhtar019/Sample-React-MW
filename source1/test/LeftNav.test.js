
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import  LeftNav from '../components/LeftNav'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import ReactTestUtils from 'react-dom/test-utils';


configure({ adapter: new Adapter() });
const mockStore = configureStore([]);
const store = mockStore({});
describe('with Shallow',()=>{
 
  it('Left Nav with connect', () => {
    const wrapper = shallow(<Provider store={store}>
     <LeftNav />
  </Provider>);
  
   expect(wrapper.text()).toEqual("<Connect(LeftNav) />");
   
  });
})

describe('LeftNav with render', () => {
  it('render templates testing in leftNav', () => {
      const wrapper = render(<Router><Provider store={store}>
     <LeftNav />
  </Provider></Router>);
   
   expect(wrapper.text()).toEqual("DashbaordInvite UserSettingsNagaraju");
      expect(wrapper.find('ul').length).toBe(3);
      expect(wrapper.find('li').length).toBe(5);
      expect(wrapper.find('span.user-span').text()).toBe('Nagaraju');
  });
})
