import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseValidations } from './offeredCourse.validation';
import { offeredCourseController } from './offeredCourse.controller';




const router = express.Router();

// router.get('/', offeredCourseController.getAllFromDB);
// router.get('/:id', OfferedCourseController.getByIdFromDB);

router.post(
    '/',
    validateRequest(OfferedCourseValidations.create),
    offeredCourseController.insertIntoDB
);

// router.patch(
//     '/:id',
//     validateRequest(OfferedCourseValidations.update),
//     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//     OfferedCourseController.updateOneInDB
// );

// router.delete(
//     '/:id',
//     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//     OfferedCourseController.deleteByIdFromDB
// );

export const offeredCourseRoutes = router;