import { Request, Response } from 'express';
import Frequency from '../database/models/FrequencyModel';
import Users from '../database/models/UsersModel';
import Patients from '../database/models/PatientsModel';

const getFrequency = async (req: Request, res: Response) => {
  const frequency = await Frequency.findAll({ include: [
    { model: Users, as: 'user', attributes: ['name'] },
    { model: Patients, as: 'patient', attributes: ['name', 'sessions'] },
  ] });
  res.status(200).json(frequency);
};

export const getFrequencyByUserId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const frequency = await Frequency.findAll({ where: { user_id: id },
    include: [
      { model: Users, as: 'user', attributes: ['name'] },
      { model: Patients, as: 'patient', attributes: ['name', 'sessions'] },
    ] });
  res.status(200).json(frequency);
};

export default getFrequency;
