export interface KeyValue {
  value: string;
  viewValue: string;
}

export const programTypes: KeyValue[] = [
  {value: 'Certificate', viewValue: 'Certificate'},
  {value: 'Diploma', viewValue: 'Diploma'},
  {value: 'Advanced Diploma', viewValue: 'Advanced Diploma'},
  {value: 'HNC', viewValue: 'Higher National Certificate'},
  {value: 'HND', viewValue: 'Higher National Diploma'},
  {value: 'Associate Degree', viewValue: 'Associate Degree'},
  {value: 'Bachelors', viewValue: 'Bachelor\'s Degree'},
  {value: 'PGCert', viewValue: 'Postgraduate Certificate'},
  {value: 'PGDip', viewValue: 'Postgraduate Diploma'},
  {value: 'Graduate Diploma', viewValue: 'Graduate Diploma'},
  {value: 'Graduate Certificate', viewValue: 'Graduate Certificate'},
  {value: 'Masters', viewValue: 'Master\'s Degree'},
  {value: 'Ex-Masters', viewValue: 'Executive Master\'s'}
];

export const programFields: KeyValue[] = [
  { value: 'software-engineering', viewValue: 'Software Engineering' },
  { value: 'computer-science', viewValue: 'Computer Science' },
  { value: 'information-technology', viewValue: 'Information Technology' },
  { value: 'web-development', viewValue: 'Web Development' },
  { value: 'mobile-app-development', viewValue: 'Mobile App Development' },
  { value: 'cyber-security', viewValue: 'Cyber Security' },
  { value: 'cloud-computing', viewValue: 'Cloud Computing' },
  { value: 'data-science', viewValue: 'Data Science' },
  { value: 'artificial-intelligence', viewValue: 'Artificial Intelligence' },
  { value: 'machine-learning', viewValue: 'Machine Learning' },
  { value: 'devops', viewValue: 'DevOps' },
  { value: 'blockchain', viewValue: 'Blockchain' },
  { value: 'game-development', viewValue: 'Game Development' },
  { value: 'computer-programming', viewValue: 'Computer Programming' },
  { value: 'full-stack-development', viewValue: 'Full Stack Development' },
  { value: 'ui-ux-design', viewValue: 'UI/UX Design' },
  { value: 'computer-networking', viewValue: 'Computer Networking' },
  { value: 'it-support', viewValue: 'IT Support' },
  { value: 'operating-systems', viewValue: 'Operating Systems' },
  { value: 'systems-engineering', viewValue: 'Systems Engineering' },
  { value: 'embedded-systems', viewValue: 'Embedded Systems' },
  { value: 'it-project-management', viewValue: 'IT Project Management' },
  { value: 'computer-engineering', viewValue: 'Computer Engineering' },
  { value: 'electronics-engineering', viewValue: 'Electronics Engineering' },
  { value: 'electrical-engineering', viewValue: 'Electrical Engineering' },
  { value: 'mechanical-engineering', viewValue: 'Mechanical Engineering' },
  { value: 'civil-engineering', viewValue: 'Civil Engineering' },
  { value: 'mechatronics', viewValue: 'Mechatronics' },
  { value: 'robotics', viewValue: 'Robotics' },
  { value: 'telecommunications', viewValue: 'Telecommunications' },
  { value: 'industrial-engineering', viewValue: 'Industrial Engineering' },
  { value: 'engineering-management', viewValue: 'Engineering Management' }
];

export const programDurations: KeyValue[] = [
  { value: 'less-1yr', viewValue: 'less than 1 year' },
  { value: '1yr-2yrs', viewValue: '1 year - 2 year' },
  { value: '2yrs-3yrs', viewValue: '2 year - 3 years' },
  { value: '3yrs-4yrs', viewValue: '3 years - 4 years' },
  { value: 'over-4yrs', viewValue: 'over 4 years' }
];

export const programBudgets: KeyValue[] = [
  { value: 'under-50000', viewValue: 'Under Rs. 50,000' },
  { value: '50000-100000', viewValue: 'Rs. 50,000 – Rs. 100,000' },
  { value: '100000-250000', viewValue: 'Rs. 100,000 – Rs. 300,000' },
  { value: '250000-500000', viewValue: 'Rs. 300,000 – Rs. 500,000' },
  { value: '500000-1000000', viewValue: 'Rs. 500,000 – Rs. 800,000' },
  { value: '1000000-2000000', viewValue: 'Rs. 800,000 – Rs. 1,000,000' },
  { value: '1000000-2000000', viewValue: 'Rs. 1,000,000 – Rs. 2,000,000' },
  { value: 'over-2000000', viewValue: 'Over Rs. 2,000,000' }
];
