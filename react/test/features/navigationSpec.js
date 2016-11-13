import AppRoot from 'components/AppRoot';

describe('navigate from the dashboard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <AppRoot routes={routes} browserHistory={browserHistory} />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('from the dashboard page', () => {
    it('can navigate to the new Jump page', () => {
      browserHistory.push('/app/dashboard');

      clickLink('New Jump', wrapper)

      let header = wrapper.find('h1');
      expect(header.text()).toMatch('New Jump');
    });

    it('can navigate to the Past Jumps page', () => {
      browserHistory.push('/app/dashboard');

      clickLink('Past Jumps', wrapper)

      let header = wrapper.find('h1');
      expect(header.text()).toMatch('Past Jumps');
    });
  });
});
