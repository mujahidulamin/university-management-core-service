import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { StudentSemesterPaymentService } from "./studentSemesterPayment.service";
import pick from "../../../shared/pick";
import { studentSemesterPaymentFilterableFields } from "./studentSemesterPayment.constants";
import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from "express";

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, studentSemesterPaymentFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await StudentSemesterPaymentService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student semester payment fetched successfully',
        meta: result.meta,
        data: result.data
    });
});

export const StudentSemesterPaymentController = {
    getAllFromDB,
};