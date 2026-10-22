import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const initialRegistration = {
        placementOfficer: [],
        recruiter: [],
        student: [],
        trainingCoordinator: [],
        admin: [],
    };

    const [user, setUser] = useState(initialRegistration);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [resetEmail, setResetEmail] = useState("");

    return (
        <DataContext.Provider
            value={{
                user,
                setUser,
                loggedInUser,
                setLoggedInUser,
                resetEmail,
                setResetEmail,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;

export const useData = () => useContext(DataContext);
