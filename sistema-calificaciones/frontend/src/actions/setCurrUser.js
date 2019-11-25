const setCurrUser = user => {
    return {
        type: 'setCurrUser',
        payload: user
    };
};

export default setCurrUser;