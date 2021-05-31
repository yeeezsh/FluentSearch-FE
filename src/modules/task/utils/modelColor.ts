export function modelColor(model: string): string {
  switch (model) {
    case 'faces_emo':
      return 'red';
    case 'detection_600':
      return 'cyan';
    case 'ilsvrc_googlenet':
      return 'geekblue';
    case 'basic_fashion':
      return 'orange';
    case 'classification_21k':
      return 'gold';
    case 'places':
      return 'green';
    case 'vgg16':
      return 'blue';
    default:
      return 'black';
  }
}
