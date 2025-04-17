export interface KeyValue {
  value: string;
  viewValue: string;
}

export const ProgramTypes: KeyValue[] = [
  {value: 'Certificate', viewValue: 'Certificate'},
  {value: 'Diploma', viewValue: 'Diploma'},
  {value: 'Advanced Diploma', viewValue: 'Advanced Diploma'},
  {value: 'Higher National Certificate', viewValue: 'Higher National Certificate'},
  {value: 'Higher National Diploma', viewValue: 'Higher National Diploma'},
  {value: 'Associate Degree', viewValue: 'Associate Degree'},
  {value: 'Bachelors Degree', viewValue: 'Bachelor\'s Degree'},
  {value: 'Postgraduate Certificate', viewValue: 'Postgraduate Certificate'},
  {value: 'Postgraduate Diploma', viewValue: 'Postgraduate Diploma'},
  {value: 'Graduate Diploma', viewValue: 'Graduate Diploma'},
  {value: 'Graduate Certificate', viewValue: 'Graduate Certificate'},
  {value: 'Masters Degree', viewValue: 'Master\'s Degree'},
  {value: 'Executive Masters', viewValue: 'Executive Master\'s'}
];

export const ProgramFields: KeyValue[] = [
  { value: 'Software Engineering', viewValue: 'Software Engineering' },
  { value: 'Computer Science', viewValue: 'Computer Science' },
  { value: 'Information Technology', viewValue: 'Information Technology' },
  { value: 'Web Development', viewValue: 'Web Development' },
  { value: 'Mobile App Development', viewValue: 'Mobile App Development' },
  { value: 'Cyber Security', viewValue: 'Cyber Security' },
  { value: 'Cloud Computing', viewValue: 'Cloud Computing' },
  { value: 'Data Science', viewValue: 'Data Science' },
  { value: 'Artificial Intelligence', viewValue: 'Artificial Intelligence' },
  { value: 'Machine Learning', viewValue: 'Machine Learning' },
  { value: 'DevOps', viewValue: 'DevOps' },
  { value: 'Blockchain', viewValue: 'Blockchain' },
  { value: 'Game Development', viewValue: 'Game Development' },
  { value: 'Computer Programming', viewValue: 'Computer Programming' },
  { value: 'Full-Stack Development', viewValue: 'Full Stack Development' },
  { value: 'UI/UX Design', viewValue: 'UI/UX Design' },
  { value: 'Computer Networking', viewValue: 'Computer Networking' },
  { value: 'IT Support', viewValue: 'IT Support' },
  { value: 'Operating Systems', viewValue: 'Operating Systems' },
  { value: 'Systems Engineering', viewValue: 'Systems Engineering' },
  { value: 'Embedded Systems', viewValue: 'Embedded Systems' },
  { value: 'IT Project Management', viewValue: 'IT Project Management' },
  { value: 'Computer Engineering', viewValue: 'Computer Engineering' },
  { value: 'Electronics Engineering', viewValue: 'Electronics Engineering' },
  { value: 'Electrical Engineering', viewValue: 'Electrical Engineering' },
  { value: 'Mechanical Engineering', viewValue: 'Mechanical Engineering' },
  { value: 'Bio-Chemical Engineering', viewValue: 'Bio-Chemical Engineering' },
  { value: 'Civil Engineering', viewValue: 'Civil Engineering' },
  { value: 'Mechatronics', viewValue: 'Mechatronics' },
  { value: 'Robotics', viewValue: 'Robotics' },
  { value: 'Telecommunications', viewValue: 'Telecommunications' },
  { value: 'Industrial Engineering', viewValue: 'Industrial Engineering' },
  { value: 'Engineering Management', viewValue: 'Engineering Management' },
  { value: 'Ethical Hacking', viewValue: 'Ethical Hacking' }
];

export const ProgramDurations: KeyValue[] = [
  { value: 'Less than 1 year', viewValue: 'less than 1 year' },
  { value: 'Between 1 to 2 years', viewValue: '1 year - 2 year' },
  { value: 'Between 2 to 3 years', viewValue: '2 year - 3 years' },
  { value: 'Between 3 to 4 years', viewValue: '3 years - 4 years' },
  { value: 'Over 4 years', viewValue: 'over 4 years' }
];

export const ProgramBudgets: KeyValue[] = [
  { value: 'Under 50,000 LKR', viewValue: 'Under Rs. 50,000' },
  { value: '50,000 LKR - 100,000 LKR', viewValue: 'Rs. 50,000 – Rs. 100,000' },
  { value: '100,000 LKR - 300,000 LKR', viewValue: 'Rs. 100,000 – Rs. 300,000' },
  { value: '300,000 LKR - 500,000 LKR', viewValue: 'Rs. 300,000 – Rs. 500,000' },
  { value: '500,000 LKR - 800,000 LKR', viewValue: 'Rs. 500,000 – Rs. 800,000' },
  { value: '800,000 LKR - 1,000,000 LKR', viewValue: 'Rs. 800,000 – Rs. 1,000,000' },
  { value: '1,000,000 LKR - 2,000,000 LKR', viewValue: 'Rs. 1,000,000 – Rs. 2,000,000' },
  { value: 'Over 2,000,000 LKR', viewValue: 'Over Rs. 2,000,000' }
];

export const PrivateInstitutes = [
  'https://www.iit.ac.lk/',
  'https://esoft.lk/',
  'https://www.nsbm.ac.lk/',
  'https://apiit.lk/',
  'https://www.sliit.lk/'
]
