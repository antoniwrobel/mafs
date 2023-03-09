import { Request, Response } from 'express';

export const test = (reg: Request, res: Response) => {
  const testData = [
    {
      name: 'ant'
    },
    {
      name: 'gosia'
    }
  ];

  return res.json(testData);
};
