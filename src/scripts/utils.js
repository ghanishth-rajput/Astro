
export function formatDOB(DOB) {
    const [year, month, day] = DOB.split('-');
    return `${day}/${month}/${year}`;
}
