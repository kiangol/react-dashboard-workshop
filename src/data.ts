export interface Assignment {
  name: string;
  approved: boolean;
};

export interface Subject {
  name: string;
  mandatoryApprovals: number;
  assignments: Assignment[];
}

export const subjects: Subject[] = [
  {
    name: 'AI',
    mandatoryApprovals: 1,
    assignments: [
      {
        name: 'AI Øving 1',
        approved: true,
      },
      {
        name: 'AI Øving 2',
        approved: true,
      },
    ]
  },
  {
    name: 'ITGK',
    mandatoryApprovals: 2,
    assignments: [
      {
        name: 'ITGK Øving 1',
        approved: true,
      },
      {
        name: 'ITGK Øving 2',
        approved: false,
      },
    ]
  },
  {
    name: 'Fritid',
    mandatoryApprovals: 2,
    assignments: [
      {
        name: 'Trene',
        approved: true,
      },
      {
        name: 'Johnny Depp land',
        approved: false,
      },
    ]
  }
];
