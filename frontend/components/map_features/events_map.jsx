import React from 'react';
// import ReactDOM from 'react-dom';
// import { withRouter } from 'react-router-dom';
// import MarkerManager from '../../util/marker_manager';

// const getCoordsObj = latLng => ({
//     lat: latLng.lat(),
//     lng: latLng.lng()
// });

// const mapOptions = {
//     center: {
//         lat: 37.773972,
//         lng: -122.431297
//     }, // San Francisco coords
//     zoom: 13
// };


class EventsMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    
// class MyMap extends React.Component {
    componentDidMount() {
        
        const mapOptions = {
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            },
            zoom: 13
        };

        var myLatLng = { 
            lat: this.props.lat,
            lng: this.props.lng
        };



        // const mapOptions = {
        //     center: {
        //         lat: 37.773972,
        //         lng: -122.431297
        //     }, // San Francisco coords
        //     zoom: 13
        // };

        // var myLatLng = {
        //     lat: 37.773972,
        //     lng: -122.431297
        // };




        // const map = this.refs.map;
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: 'Event Location'
        });


        // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        // if (this.props.singleBench) {
        //     this.props.fetchBench(this.props.benchId);
        // } else {
        //     this.registerListeners();
        //     this.MarkerManager.updateMarkers(this.props.benches);
        // }
    }

    // componentDidUpdate() {
    //     if (this.props.singleBench) {
    //         const targetBenchKey = Object.keys(this.props.benches)[0];
    //         const targetBench = this.props.benches[targetBenchKey];
    //         this.MarkerManager.updateMarkers([targetBench]); //grabs only that one bench
    //     } else {
    //         this.MarkerManager.updateMarkers(this.props.benches);
    //     }
    // }

    // registerListeners() {
    //     google.maps.event.addListener(this.map, 'idle', () => {
    //         const { north, south, east, west } = this.map.getBounds().toJSON();
    //         const bounds = {
    //             northEast: { lat: north, lng: east },
    //             southWest: { lat: south, lng: west }
    //         };
    //         this.props.updateFilter('bounds', bounds);
    //     });
    //     google.maps.event.addListener(this.map, 'click', (event) => {
    //         const coords = getCoordsObj(event.latLng);
    //         this.handleClick(coords);
    //     });
    // }

    // handleMarkerClick(bench) {
    //     this.props.history.push(`benches/${bench.id}`);
    // }

    // handleClick(coords) {
    //     this.props.history.push({
    //         pathname: 'benches/new',
    //         search: `lat=${coords.lat}&lng=${coords.lng}`
    //     });
    // }

    render() {
        
        return (
            <>
            {/* <div className="map" ref="map" /> */}
            <div className="map-container" ref={map => this.mapNode = map} />
            {/* <div ref="map">
                 Map
             </div> */}
            </>
        );
    }
}

export default EventsMap;
// export default withRouter(EventsMap);
