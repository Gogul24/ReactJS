
function Student() {
    const student = [
        {
            name:'Ben',
            age:'22',
            course:'FSD'
        },
        {
            name:'Gokul',
            age:'25',
            course:'DS'
        },
        {
            name:'Rahul',
            age:'23',
            course:'CIBOD'
        }
    ];

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((stud) => (
                        <tr>
                            <td>{stud.name}</td>
                            <td>{stud.age}</td>
                            <td>{stud.course}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Student;
