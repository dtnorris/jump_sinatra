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
    expect(wrapper.find('h1').text()).toMatch('Jump Index');

    fillIn('jump', { with: 'nice jump' }, wrapper)
    clickSubmit('Submit', wrapper)

    let jumpList = wrapper.find("#jump-list")
    expect(jumpList.text()).toMatch('nice jump');
  });

  it('saves new jumps to the store', () => {
    fillIn('jump', { with: 'nice jump' }, wrapper)
    clickSubmit('Submit', wrapper)

    let jumpStore = store.getState().jumpLogs.jumps
    expect(jumpStore).toEqual([
      'nice jump'
    ]);
  });
});
