const Category = ({ category }) => {
  // const {id, logo, category_name, availability} = category;
  return (
    <div className="text-center space-y-7">
      <h1 className="text-5xl font-bold">Job Category List</h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex gap-3 justify-center">
        {category.map(category => (
          <div key={category.id} className="bg-base-300 p-7 rounded-3xl">
            <img className="mx-auto py-3" src={category.logo} alt="" />
            <h2 className="font-bold text-xl">{category.category_name}</h2>
            <p>{category.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
