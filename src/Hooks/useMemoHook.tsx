import React, { useState, useMemo, useEffect } from 'react';

interface IStudent {
    name: string;
    age: number;
}

const studentsData: IStudent[] = [
    {
        name: 'John',
        age: 20
    },
    {
        name: 'Jane',
        age: 21
    },
    {
        name: 'Jack',
        age: 22
    }
]

const MemoHook = () => {
    const [students, setStudents] = useState<IStudent[]>();
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        // fetch the students from an api and set to the student state
        setStudents(studentsData);
    }, []);

    const filterByName = () => {
        // filter the student list
        return students?.filter((student: IStudent) => student.name.includes(search));
    }

    const memorize = useMemo(filterByName, [search]);

    return (
        <>
            {memorize && memorize.map((student: IStudent) => (
                <div key={student.name}>
                    {student.name}
                </div>
            ))}

            <input placeholder={'Search...'} type={'text'} value={search} onChange={(e) => setSearch(e.target.value)} />
        </>
    )

}

export default MemoHook;