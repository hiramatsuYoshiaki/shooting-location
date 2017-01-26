import { MyApp8Page } from './app.po';

describe('my-app8 App', function() {
  let page: MyApp8Page;

  beforeEach(() => {
    page = new MyApp8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
