import { fixture } from '@pap-it/tools-test';

describe('Image', function () {
  describe('base tests', function () {
    it('web-component should exists', function () {
      const elm = fixture('cv-image');

      if (!elm) {
        throw new Error('element not created')
      }

      const docelm = document.querySelector(`cv-image[data-testid="${elm.getAttribute('data-testid')}"]`);
      
      if (!docelm) {
        throw new Error('element not found');
      }
    });
  });
});