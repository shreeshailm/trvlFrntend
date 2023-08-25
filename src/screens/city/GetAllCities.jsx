import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../../utils/constants';



const CityList = () => {
    const [cities, setCities] = useState([]);
    // const [tempEmp, setTempemp] = useState([]);
    const url = constants.serverUrl;


    const init = () => {
        axios.get(`${url}/city`)
            .then((response) => {
                console.log('Printing city data', response.data);
                setCities(response.data);
            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    }

    useEffect(() => {
        init();
    }, []);

    //   useEffect(() => {
    //     init();
    //  }, [cities]);

    const handleDelete = (id) => {
        debugger;
        console.log('Printing id', id);
        axios.delete(`${url}/city/delete/${id}`)
            .then((response) => {
                debugger;
                console.log('employee deleted successfully', response.data);
                init();
            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    };

    return (
        <div className='container'>
            <br></br>
            <h3>List of Cities</h3>
            <hr />
            <div>
                <Link to='/addcity' className='btn btn-primary mb-2'>
                    AddCity
                </Link>
                <table className='table table-bordered table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Name</th>
                            <th>Pincode</th>
                            <th>State</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cities.map((city) => (
                            <tr key={city.cityId}>
                                <td>{city.cityName}</td>
                                <td>{city.cityPin}</td>
                                <td>{city.cityState}</td>
                                <td>{city.cityCountry}</td>
                                <td>
                                    <Link
                                        className='btn btn-info'
                                        to={`/city/edit/${city.cityId}`}
                                    >
                                        Update
                                    </Link>
                                </td>

                                {/* <td>
                    <Link
                      className='btn btn-info'
                      to={`/uploadImage/${employee.id}`}
                    >
                      Image Upload
                    </Link>
                  </td> */}
                                <td>
                                    <button
                                        className='btn btn-danger ml-2'
                                        onClick={() => {
                                            handleDelete(city.cityId);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CityList;
