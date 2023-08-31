import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { offeredCourseController } from './offeredCourse.controller';
import { OfferedCourseValidations } from './offeredCourse.validation';

const router = express.Router();

router.get('/', offeredCourseController.getAllFromDB);
router.get('/:id', offeredCourseController.getByIdFromDB);

router.post(
  '/',
  validateRequest(OfferedCourseValidations.create),
  offeredCourseController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(OfferedCourseValidations.update),
  offeredCourseController.updateOneInDB
);

// router.delete(
//     '/:id',
//     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//     OfferedCourseController.deleteByIdFromDB
// );

export const offeredCourseRoutes = router;
