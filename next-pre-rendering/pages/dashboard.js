import { useState, useEffect} from 'react';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dashboardData, setdashboardData] = useState(null);

    //now we fetch our data in effect hook
    useEffect( () => {
        const fetchDashBoardData = async () => {
            const response = await fetch("http://localhost:4000/dashboard");
            const data = await response.json();
            setdashboardData(data);//once we have the data now we will call setDashboardData to update the state variable
            setIsLoading(false);//since data has been fetched
        }
        fetchDashBoardData();//after defining the function we invoke it
    }, [])//we only want to have an empty array because we don't want any dependencies and we want it to run only when the component mounts
    
    if(isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Posts - {dashboardData.posts}</h2>
            <h2>Likes - {dashboardData.likes}</h2>
            <h2>Followers - {dashboardData.followers}</h2>
            <h2>Following - {dashboardData.following}</h2>
        </div>
    )    
};

export default Dashboard;