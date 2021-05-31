import { LightboxPropsType } from './types';
function mockFunction(): void {
  console.log('click');
}
export const mock: LightboxPropsType = {
  image: {
    _id: '1',
    original_filename: 'cat.jpg',
    uri:
      'https://aumento.officemate.co.th/media/catalog/product/h/t/httpss3-ap-southeast-1.amazonaws.compim-prod-product-images68bc68bcce438a2454140271526c7e2497bdce6813ad_mkp0539918dummy.jpg?imwidth=640',
    uri_thumbnail:
      'https://aumento.officemate.co.th/media/catalog/product/h/t/httpss3-ap-southeast-1.amazonaws.compim-prod-product-images68bc68bcce438a2454140271526c7e2497bdce6813ad_mkp0539918dummy.jpg?imwidth=640',
    createAt: 'today',
    updateAt: 'today',
    type: 'image',
  },
  onPrev: mockFunction,
  onNext: mockFunction,
  closeLightbox: mockFunction,
};
