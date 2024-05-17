import { useEffect, useState } from "react";
import { getTodos,deleteTodos } from "../../services/todo-service.js";
import { Link } from "react-router-dom";

const Home = () => {
  interface TodoItem {
    id: string;
    todo: string;
  }

  const [data, setData] = useState<TodoItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const todos = await getTodos();
        setData(todos);
      } catch (error) {
        console.log((error as Error).message); 
      }
    };
    getData();
  }, []);
  


  async function handleDelete(id:string) {
    try {
        await deleteTodos(id)
        setData((prevData)=>prevData.filter((item)=>item.id !== id))
    } catch (error) {
        console.log((error as Error).message); 

        
    }
  }

  return (
    <>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="bg-gray-900 py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-base font-semibold leading-6 text-white">
                    Todos
                  </h1>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                  <button
                    type="button"
                    className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Add todo
                  </button>
                </div>
              </div>
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-700">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                          >
                            ID
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                          >
                            Todo
                          </th>
                          <th
                            scope="col"
                            className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                          >
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {data.map((item) => (
                          <tr key={item.id}>
                            <td className="py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                              {item.id}
                            </td>
                            <td className="py-4 pl-4 pr-3 text-sm text-white sm:pl-0">
                              {item.todo}
                            </td>
                            <td className="py-4 pl-3 pr-4 flex gap-4 text-sm text-right sm:pr-0">
                            <Link className="text-indigo-600 hover:text-indigo-900" to={`/edit/${item.id}`}>
                            
                                Edit
                            </Link>
                              <button onClick={()=>handleDelete(item.id)} className="text-indigo-600 hover:text-indigo-900">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
