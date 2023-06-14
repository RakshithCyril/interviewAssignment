import React from "react";
import  PermanentDrawerLeft from "./Sidebar";

export default class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <>
< PermanentDrawerLeft />
            </>
        )
    }
}