import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Category from "./Category";
import Jobs from "./Jobs";

const Home = () => {
    const { categories, jobs } = useLoaderData();
    return (
        <div className="py-10 space-y-10">
            <Banner></Banner>
            <Category category={categories}></Category>
            <Jobs jobs={jobs}></Jobs>
        </div>
    );
};

export default Home;