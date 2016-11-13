import AppRoot from 'components/AppRoot';
import { jumpLogApp } from 'jumpLogApp';

describe('adding jumps to the store', () => {
  let store, wrapper;

  beforeEach(() => {
    store = createStore(jumpLogApp);

    wrapper = mount(
      <AppRoot store={store} />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('can see new jumps on the page', () => {
    let header = wrapper.find('h1');
    expect(header.text()).toMatch('Jump Index');

    clickButton('Add Jump', wrapper);
    clickButton('Add Jump', wrapper);
    expect(wrapper.text()).toMatch('jump 1');
    expect(wrapper.text()).toMatch('jump 2');
  });

  it('saves new jumps to the store', () => {
    clickButton('Add Jump', wrapper);
    clickButton('Add Jump', wrapper);

    let jumpStore = store.getState().jumpLogs.jumps
    expect(jumpStore).toEqual([
      'jump 1',
      'jump 2'
    ]);
  });
});
