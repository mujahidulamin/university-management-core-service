import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseSectionController } from './offeredCourseSection.controller';
import { OfferedCourseSectionValidation } from './offeredCourseSection.validations';

const router = express.Router();

router.get('/', OfferedCourseSectionController.getAllFromDB);
router.get('/:id', OfferedCourseSectionController.getByIdFromDB);

router.post(
  '/',
  validateRequest(OfferedCourseSectionValidation.create),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseSectionController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(OfferedCourseSectionValidation.update),
  OfferedCourseSectionController.updateOneInDB
);

router.delete('/:id', OfferedCourseSectionController.deleteByIdFromDB);

export const offeredCourseSectionRoutes = router;
