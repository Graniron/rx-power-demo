import { RxPowerDemoPage } from './app.po';

describe('rx-power-demo App', () => {
  let page: RxPowerDemoPage;

  beforeEach(() => {
    page = new RxPowerDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
