import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import App from './App';
import Timer from './components/Timer/Timer';

describe('App', () => {
  let container: ShallowWrapper;

  beforeEach(() => (container = shallow(<App />)))

  it('Expecting two div, one parent and one nestd for footer', () => {
    expect(container.find('div').length).toEqual(2);
  });

  it("Expecting rendering of Timer component", () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true)
  })

});