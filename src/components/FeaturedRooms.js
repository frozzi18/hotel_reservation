import React, { Component } from 'react';
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        // const { name, greeting } = this.context;

        const { loading, featuredRooms:rooms } = this.context;
        // console.log(rooms)

        return (
            <div>
                {/* {greeting} {name} from featured rooms      */}
                from featured rooms
                <Room />
                <Loading />
            </div>
        )
    }
}
