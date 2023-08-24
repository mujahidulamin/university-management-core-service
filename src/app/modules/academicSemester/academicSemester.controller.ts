import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterFilterAbleFields } from './academicSemester.constants';
import { AcademicSemesterService } from './academicSemester.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.insertIntoDb(req.body);
  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester Created Successfully',
    data: result,
  });
});

const getAllFromDb = catchAsync(async (req: Request, res: Response) => {
  console.log(req.query);
  const filters = pick(req.query, AcademicSemesterFilterAbleFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await AcademicSemesterService.getAllFromDb(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester Retrieved Successfully',
    meta: result.meta,
    data: result.data,
  });
});


const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.getDataById(req.params.id);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Semester data fetched!!",
      data: result
  })
})


const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicSemesterService.updateOneInDB(id, req.body);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semster updated successfully',
      data: result
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicSemesterService.deleteByIdFromDB(id);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semster delete successfully',
      data: result
  });
});


export const AcademicSemesterController = {
  insertIntoDb,
  getAllFromDb,
  getDataById,
  updateOneInDB,
  deleteByIdFromDB
};
