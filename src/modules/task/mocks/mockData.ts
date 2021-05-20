import { ModelEnum } from '../../../common/services/model/generated-types';
import { TaskData, TaskStatusEnum } from '../reducer/taskReducer/types';

export const DataMock: TaskData[] = [
  {
    _id: 'fe3a2',
    timestamp: '2021-05-10 20:03:45',
    taskID: 'fe3a2',
    taskName: 'Recent-10-05-2021-UTC7',
    model: ModelEnum.Detection_600,
    progress: {
      progress: 0,
      inprogressPhoto: 0,
      totalPhoto: 5,
    },
    status: 'WAITING',
  },
  {
    _id: '97915',
    timestamp: '2021-05-10 19:54:03',
    taskID: '97915',
    taskName: 'Recent-10-05-2021-UTC7',
    model: ModelEnum.Detection_600,
    progress: {
      progress: 20,
      inprogressPhoto: 1,
      totalPhoto: 5,
    },
    status: 'RUNNING',
  },
  {
    _id: '5ec98',
    timestamp: '2021-05-10 17:21:36',
    taskID: '5ec98',
    taskName: 'Recent-10-05-2021-UTC7',
    model: ModelEnum.Detection_600,
    progress: {
      progress: 100,
      inprogressPhoto: 10,
      totalPhoto: 10,
    },
    status: 'FINISH',
  },
  {
    _id: '8dse5',
    timestamp: '2021-05-10 16:12:53',
    taskID: '8dse5',
    taskName: 'Recent-10-05-2021-UTC7',
    model: ModelEnum.Detection_600,
    progress: {
      progress: 20,
      inprogressPhoto: 1,
      totalPhoto: 5,
    },
    status: 'CANCEL',
  },
];
