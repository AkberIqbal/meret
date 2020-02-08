import React, { useEffect } from 'react'
import MultiCarousel from './multiCarousel';
import './popularPlaces.scss';

const PopularPlaces = (props) => {

    let stillMounted = { value: false };
    useEffect(() => {
        stillMounted.value = true;
        return () => {
            stillMounted.value = false;
        };
    }, []);

    const checkCondition = (passedObject, passedSearchTerm) => {
        if (!passedSearchTerm) { return true; }
        else if (passedSearchTerm && passedSearchTerm.length > 0 && passedObject['title'].toLowerCase().search(passedSearchTerm) > -1) {
            return true;
        }
        return false;
    }

    const filteredData = (passedApiData, passedSearchTerm) => {
        var filteredArray = [];
        if (passedApiData && passedApiData.length > 0) {
            filteredArray = passedApiData.filter(val => {
                if (checkCondition(val, passedSearchTerm)) { return true; } else { return false; }
            });
        }
        return filteredArray;
    }

    return (
        <div className='popularPlaces' >
            {(props.apiData && props.apiData.length > 0) ? <div ><h4>Popular around you </h4> <p className='hideMe'>: {props.searchTerm}</p> </div> : <h4>No data for popular places... please try later</h4>}
            <MultiCarousel data={filteredData(props.apiData, props.searchTerm)} />
            <hr />
        </div>
    )
}

export default PopularPlaces;