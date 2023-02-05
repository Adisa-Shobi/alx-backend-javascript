interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    contract?: boolean;
}

interface Directors extends Teacher {
    numberOfReports: number;
}