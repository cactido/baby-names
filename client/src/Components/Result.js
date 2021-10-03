import React, { useState } from 'react';

import { Row, Col } from 'reactstrap';

import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';
import Auth from '../utils/auth';

const Result = () => {

    const user = Auth.getProfile();

    // const [userState, setUserState] = userState({user: false, partner: false, result: [] })

    const user1Data = useQuery(GET_USER, {
        variables: { id: user.data._id }
    });

    const user2Data = useQuery(GET_USER, {
        skip: !user1Data.data,
        variables: { id: user1Data.data && user1Data.data.getUser.partner }
    });


    if (user1Data.data && user2Data.data) {
        const user1 = user1Data.data.getUser.selected_names.length !== 0 && user1Data.data.getUser.provided_names.length !== 0 && user1Data.data.getUser;
        const user2 = user2Data.data.getUser.provided_names.length !== 0 && user2Data.data.getUser.selected_names.length !== 0 && user2Data.data.getUser;
        console.log('user1: ', user1);
        console.log('user2: ', user2);

        if (!user1 && !user2) {
            return (<div>You and your partner need to rate names!</div>)
        } else if (user1 && !user2) {
            return (<div>Your partner needs to rate your names!</div>)
        } else if (user2 && !user1) {
            return (<div>You need to rate your partners names!</div>)
        } else {
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
                    results.push({ name: nameObject.name, rating: avg, gender: nameObject.gender });
                }
            });

            results.sort((a, b) => { return b.rating - a.rating });
            const resultList = results.map((result, index) => (
                <Row key={index} className={`d-flex justify-content-evenly border border-dark p-2 m-1 ${result.gender === 'girl' ? 'girl-name' : 'boy-name'}`}>
                                            <Col>
                                                {result.name}
                                            </Col>
                                            <Col>
                                                {result.gender}
                                            </Col>
                                            <Col>
                                                {result.rating}
                                            </Col>
                                        </Row>
            ))

            console.log('result: ', results)

            return (
                <div>{resultList}</div>
            )
        }
    } else if (!user1Data.data && user2Data.data) {
        return (
            <div>Couldn't find your data!</div>
        )
    } else if (user1Data.data && !user2Data.data) {
        return (
            <div>Couldn't find your partner data!</div>
        )
    } else {
        return (
            <div>Couldn't find your or your partners data!</div>
        )
    }

    // const matchList = () => {
    //     let results = [];
    //     let user1Names = [];
    //     let user2Names = [];
    //     let user2NamesOnly = [];
    //     let avg;

    //     user1.provided_names.forEach(name => { user1Names.push(name) });
    //     user1.selected_names.forEach(name => { user1Names.push(name) });
    //     user2.provided_names.forEach(name => { user2Names.push(name) });
    //     user2.selected_names.forEach(name => { user2Names.push(name) });

    //     user2Names.forEach(name => { user2NamesOnly.push(name.name) })

    //     user1Names.forEach(nameObject => {
    //         if (user2NamesOnly.includes(nameObject.name)) {
    //             avg = (nameObject.rating + user2Names[user2NamesOnly.indexOf(nameObject.name)].rating) / 2;
    //             results.push({ name: nameObject.name, rating: avg });
    //         }
    //     });

    //     results.sort((a, b) => { return b.rating - a.rating });
    //     const resultList = results.map((result) => {
    //         return <li key={result.name}>{result.name} ({result.rating})</li>
    //     })

    //     return resultList;
    // }
}

export default Result;