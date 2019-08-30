import React, { Component } from 'react';
import { RoomContext } from "../context";
import Loading from "./Loading";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        // const { name, greeting } = this.context;

        const { featuredRooms:rooms } = this.context;
        console.log(rooms)

        return (
            <div>
                {/* {greeting} {name} from featured rooms      */}
                from featured rooms
                <Loading />
            </div>
        )
    }
}
