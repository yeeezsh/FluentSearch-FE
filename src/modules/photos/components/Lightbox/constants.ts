import { LightboxPropsType } from './types';
import { mockData } from 'Modules/photos/mocks/data';
function mockFunction(): void {
  console.log('click');
}
export const mock: LightboxPropsType = {
  image: mockData[0],
  onPrev: mockFunction,
  onNext: mockFunction,
  closeLightbox: mockFunction,
};
