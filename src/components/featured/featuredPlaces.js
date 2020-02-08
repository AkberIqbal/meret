import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './featuredPlaces.scss';

const FeaturedPlaces = () => {

    const [featuredItems, setFeaturedItems] = useState();
    let stillMounted = { value: false };

    const mockData = {
        "data": [

            {
                "title": "Uluru-Kata Tjuta National Park",
                "img": "https://picsum.photos/800/2700",
                "location": "Uluru NT"
            },
            {
                "title": "Royal National Park",
                "img": "https://picsum.photos/400/400",
                "location": "Royal National Park NSW"
            },
            {
                "title": "Kosciuszko National Park",
                "img": "https://picsum.photos/320/720",
                "location": "NSW"
            },
            {
                "title": "Booderee National Park",
                "img": "https://picsum.photos/160/180",
                "location": "Jervis Bay JBT"
            }
            ,                {
                "title": "Uluru-Kata Tjuta National Park",
                "img": "https://picsum.photos/800/2700",
                "location": "Uluru NT"
            },
            {
                "title": "Royal National Park",
                "img": "https://picsum.photos/400/400",
                "location": "Royal National Park NSW"
            },
            {
                "title": "Kosciuszko National Park",
                "img": "https://picsum.photos/320/720",
                "location": "NSW"
            },
            {
                "title": "Booderee National Park",
                "img": "https://picsum.photos/160/180",
                "location": "Jervis Bay JBT"
            }/**/
        ]
    };

    const featuredURL = "http://demo3136867.mockable.io/featured";
    const getAPIData = async () => {
        await axios(featuredURL,)
        .then((res) => { 
            if (stillMounted.value) {
                setFeaturedItems(res.data.data);
            }
        })
            .catch(err => console.log("err:", err))
            .finally(() => {
                    setFeaturedItems(mockData.data); 
            })
    }
    
    useEffect(() => {
        stillMounted.value = true;
        getAPIData();
        return () => {
            stillMounted.value = false;
        };
    }, []);

    return (
        <div className='featuredPlaces'>
            <h4> Featured</h4> 
            <div className='featuredItem'>
                {(featuredItems && featuredItems.length > 0) ?
                    featuredItems.map((val, idx) => {
                        return (
                            < Card key={idx} className="" >
                                < div className='backgroundImg' style={{ backgroundImage: "url(" + val.img + ")" }
                                }></div>
                                <CardBody>
                                    <CardTitle>{val.title}</CardTitle>
                                    <CardSubtitle> <i className="fa fa-map-marker"></i> {val.location}</CardSubtitle>
                                </CardBody>
                            </Card>
                        )
                    }) : ''
                }
            </div >
        </div >
    )
}

export default FeaturedPlaces;