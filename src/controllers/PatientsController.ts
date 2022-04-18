import { Request, Response } from 'express';
import Users from '../database/models/UsersModel';
import Patients from '../database/models/PatientsModel';

const allPatients = async () => {
  const patients = await Patients.findAll({ include: [
    { model: Users,
      as: 'usuario',
      attributes: ['name'],
    },
  ],
  });
  return patients;
};

const patientByUserId = async (id: number) => {
  const patients = await Patients.findAll({ where: { user_id: id },
    include: [
      { model: Users,
        as: 'usuario',
        attributes: ['name'],
      },
    ],
  });
  return patients;
};

const getPatients = async (req: Request, res: Response) => {
  const all = await allPatients();
  return res.status(200).json(all);
};

export const getPatientByUserId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const patients = await patientByUserId(Number(id));
  return res.status(200).json(patients);
};

export default getPatients;
