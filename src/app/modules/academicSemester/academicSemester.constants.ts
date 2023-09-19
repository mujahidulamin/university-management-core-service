export const AcademicSemesterSearchableFields = [
  'title',
  'code',
  'startMonth',
  'endMonth',
];


export const AcademicSemesterFilterAbleFields = ['searchTerm', 'code', 'startMonth', 'endMonth'];


export const academicSemesterTitleCodeMapper: { [key: string]: string } = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};