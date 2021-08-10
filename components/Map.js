import ReactMapGL,{Marker,Popup} from 'react-map-gl'
import {useState} from "react"
import getCenter  from 'geolib/es/getCenter';
function Map({searchResults}) {

    const [selectedLocation,setSelectedLocation]=useState({});
    const coordinates=searchResults.map((result)=>({
        longitude:result.long,
        latitude:result.lat
    }));

    const center=getCenter(coordinates);
    
    const [viewport,setViewport]=useState({
        latitude:center.latitude,
        longitude:center.longitude,
        zoom: 11,
        width:'100%',
        height:'100%'
    })
    return (
        <ReactMapGL
            mapStyle='mapbox://styles/pembans/cks5kqf9478pj17qoqmf0xk2v'
            mapboxApiAccessToken={process.env.map_box_key}
            {...viewport}
            onViewportChange={(nextViewport)=>
                setViewport(nextViewport)
            }
        >
            {searchResults.map((result)=>(
                <div key={result.long}>
                    <Marker longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetTop={-10}><p onClick={()=>setSelectedLocation(result)} className="text-2xl animate-bounce cursor-pointer">📌</p></Marker>

                    {selectedLocation.long===result.long?(
                        <Popup closeOnClick={true} onClose={()=>setSelectedLocation({})} longitude={result.long} latitude={result.lat} >{result.title}</Popup>
                    ):(
                        false
                    )}

                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
