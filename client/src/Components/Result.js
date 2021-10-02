import React from 'react';

const Result = ({ user1Data, user2Data }) => {
    const user1 = user1Data && user1Data.getUser.provided_names && user1Data.getUser;
    const user2 = user2Data && user2Data.getUser.selected_names && user2Data.getUser;
              
    const matchList = () => {
        let results = [];
        let user1Names = [];
        let user2Names = [];
        let user2NamesOnly = [];
        let avg;
        
        user1.provided_names.forEach(name => { user1Names.push(name) });
        user1.selected_names.forEach(name => { user1Names.push(name) });
        user2.provided_names.forEach(name => { user2Names.push(name) });
        user2.selected_names.forEach(name => { user2Names.push(name) });

        user2Names.forEach(name => { user2NamesOnly.push(name.name) })
        
        user1Names.forEach(nameObject => {
            if (user2NamesOnly.includes(nameObject.name)) {
                avg = (nameObject.rating + user2Names[user2NamesOnly.indexOf(nameObject.name)].rating) / 2;
                results.push({ name: nameObject.name, rating: avg });
            }
        });

        results.sort((a, b) => { return b.rating - a.rating });
        const resultList = results.map((result) => {
            return <li key={result.name}>{result.name} ({result.rating})</li>
        })

        return resultList;
    }
    
    if (!user1 || !user2) { return (<div>Loading...</div>) };

    return (
        <div>
            { matchList() }
        </div>
    )
}

export default Result;